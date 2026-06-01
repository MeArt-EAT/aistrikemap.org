#!/usr/bin/env node
/**
 * scripts/research-runner.js
 *
 * Cloud-Research-Runner für AIStrikeMap. Ruft die Anthropic API mit
 * Themen-spezifischen Research-Prompts auf, lässt Claude per
 * web_search-Tool öffentlich verifizierbare KI-Ethik-Vorfälle sammeln,
 * und schreibt Strukturen-Kandidaten in data/incident-candidates/.
 *
 * Läuft typischerweise:
 *   - lokal: ANTHROPIC_API_KEY=sk-... node scripts/research-runner.js
 *   - in GitHub Actions (siehe .github/workflows/research-runner.yml)
 *
 * Flags:
 *   --topic <slug>      Nur ein einzelnes Topic aus research-topics.json laufen.
 *   --max-topics <n>    Maximal n Topics dieses Run (Default: alle).
 *   --round <n>         Round-Identifier (Default: "auto" = ISO-Date).
 *   --dry-run           Nur Output-Pfade loggen, kein API-Call.
 *
 * Schema-Vertrag der API-Response: ein JSON-Array von Kandidaten-Objekten
 * gemäß data/incident-candidates/_schema.md. Claude generiert das via
 * Tool-Use (deklariert below) — kein freies Prosa-Parsing nötig.
 *
 * Modell: Claude Sonnet 4.5. Web-Search-Server-Tool aktiviert, max 25
 * Searches pro Topic. Output-Cap pro Topic-Run: 6000 max-output-Tokens.
 */
'use strict';

const fs = require('fs');
const path = require('path');

// --- Configuration -----------------------------------------------------------

const MODEL = process.env.RESEARCH_MODEL || 'claude-sonnet-4-5-20250929';
const API_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';
const MAX_OUTPUT_TOKENS = 8000;
const MAX_WEB_SEARCHES_PER_TOPIC = 25;

const TOPICS_FILE = path.join(__dirname, 'research-topics.json');
const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'incident-candidates');

// --- CLI args ----------------------------------------------------------------

function parseArgs(argv) {
  const args = { topic: null, maxTopics: null, round: null, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--topic') args.topic = argv[++i];
    else if (a === '--max-topics') args.maxTopics = parseInt(argv[++i], 10);
    else if (a === '--round') args.round = argv[++i];
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--help' || a === '-h') {
      console.log('Usage: node scripts/research-runner.js [--topic <slug>] [--max-topics <n>] [--round <id>] [--dry-run]');
      process.exit(0);
    }
  }
  return args;
}

// --- Topic config loader -----------------------------------------------------

function loadTopics() {
  const raw = fs.readFileSync(TOPICS_FILE, 'utf8');
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed.topics)) {
    throw new Error('research-topics.json: missing top-level "topics" array.');
  }
  return parsed.topics;
}

function selectTopics(allTopics, args) {
  if (args.topic) {
    const filtered = allTopics.filter(t => t.slug === args.topic);
    if (!filtered.length) {
      console.error('No topic matches --topic ' + args.topic);
      process.exit(1);
    }
    return filtered;
  }
  if (args.maxTopics && args.maxTopics > 0) {
    return allTopics.slice(0, args.maxTopics);
  }
  return allTopics;
}

// --- Prompt builder ----------------------------------------------------------

function buildSystemPrompt() {
  return [
    'Du bist ein Research-Agent für AIStrikeMap, eine investigative Plattform die KI-bezogene Menschenrechts-Vorfälle weltweit dokumentiert.',
    '',
    'Hard rules — kein einziger Verstoß:',
    '1. NIE Fälle erfinden. Ohne fetchbare reale Quelle: weglassen.',
    '2. NIE URLs fabrizieren. Nur URLs eintragen die in echten Search-Results aufgetaucht sind und plausibel laden.',
    '3. Mindestens 1 Source pro Kandidat, idealerweise 2+.',
    '4. DE-Beschreibungen mit echten Umlauten (ä/ö/ü/ß), niemals ae/oe/ue/ss.',
    '5. Du gibst Resultate AUSSCHLIESSLICH über das save_candidates Tool ab. Kein Prosa-Output.',
    '',
    'Schema pro Kandidat (genau diese Form):',
    '  candidate_id, discovered_at (ISO UTC), researcher, round, status="candidate",',
    '  candidate_data: { name_de, name_en, startDate, location: {name_de, name_en, country, lat?, lng?},',
    '                    incidentType[], candidate_severity (1-5), candidate_verification (1-4),',
    '                    description_de, description_en, actors[], sources[] },',
    '  researcher_notes, dedup_hint.',
    '',
    'incidentType vocabulary: surveillance, predictive-policing, autonomous-weapons, discrimination, deepfakes, data-misuse, military-ai, facial-recognition, censorship, labor-exploitation, political-pressure.',
    'sources[].type vocabulary: news-article, research-paper, ngo-report, government-document, court-filing, legal-ruling, regulatory-decision, encyclopedia, analysis, whistleblower-document.',
    '',
    'Verwende web_search aggressiv um Treffer zu finden, lies die Search-Results sorgfältig, und konsolidiere zu ~15-25 Kandidaten pro Topic.'
  ].join('\n');
}

function buildUserPrompt(topic, roundId) {
  const dedupList = (topic.dedup_hint_slugs || []).map(s => '`' + s + '`').join(', ');
  return [
    'Topic: **' + topic.title + '**',
    '',
    'Scope: ' + topic.scope,
    '',
    'Ziel-Region/Länder: ' + (topic.region_hint || 'global'),
    'Ziel-Zeitfenster: ' + (topic.time_window || 'letzte 24 Monate'),
    'Suggested searches (Inspiration, nicht zwingend): ' + (topic.suggested_searches || []).map(s => '"' + s + '"').join(', '),
    '',
    'Ziel-Menge: 15-25 verifizierte Kandidaten.',
    '',
    dedupList ?
      'WICHTIG — Anti-Duplikat-Liste (NICHT eintragen, sind im Bestand): ' + dedupList + '. Falls du auf einen passenden Fall stößt, der mit einem dieser Slugs überlappt: überspringen ODER als Timeline-Extension markieren via researcher_notes="extends: <slug>".' :
      'Keine Duplikat-Vorab-Liste — beim Promote wird global dedupliziert.',
    '',
    'Researcher-ID: "agent-research-' + topic.slug + '-' + roundId + '"',
    'Round-ID: "' + roundId + '"',
    'discovered_at: aktuelle UTC-ISO-Zeit pro Eintrag.',
    '',
    'Workflow:',
    '  1) Aggressiver Web-Search-Sweep im Topic-Scope.',
    '  2) Für vielversprechende Treffer: zweite Recherche-Runde zur Bestätigung (Cross-Source).',
    '  3) Kandidaten strukturieren.',
    '  4) Wenn fertig: save_candidates aufrufen mit dem kompletten Array.',
    '',
    'Reduziere Halluzinations-Risiko: wenn du einen Fall nur unsicher bestätigen kannst, lass ihn weg und vermerke in deinem internen Reasoning den Skip-Grund.'
  ].join('\n');
}

// --- API call ----------------------------------------------------------------

async function callAnthropicWithWebSearch(systemPrompt, userPrompt) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY env var is required.');

  const body = {
    model: MODEL,
    max_tokens: MAX_OUTPUT_TOKENS,
    system: systemPrompt,
    messages: [
      { role: 'user', content: userPrompt }
    ],
    tools: [
      {
        type: 'web_search_20250305',
        name: 'web_search',
        max_uses: MAX_WEB_SEARCHES_PER_TOPIC
      },
      {
        name: 'save_candidates',
        description: 'Speichert das fertige Array von Kandidaten-Objekten. RUFE GENAU EINMAL am Ende, mit ALLEN gefundenen Kandidaten in einem Array.',
        input_schema: {
          type: 'object',
          required: ['candidates'],
          properties: {
            candidates: {
              type: 'array',
              description: 'Array von Kandidaten gemäß data/incident-candidates/_schema.md.',
              items: { type: 'object' }
            }
          }
        }
      }
    ]
  };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': ANTHROPIC_VERSION
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error('Anthropic API ' + res.status + ': ' + text.slice(0, 500));
  }
  return res.json();
}

// Walk response.content for the save_candidates tool_use input.
function extractCandidatesFromResponse(resp) {
  if (!resp || !Array.isArray(resp.content)) return [];
  for (const block of resp.content) {
    if (block.type === 'tool_use' && block.name === 'save_candidates') {
      const input = block.input || {};
      if (Array.isArray(input.candidates)) return input.candidates;
    }
  }
  return [];
}

// --- Output ------------------------------------------------------------------

function ensureOutputDir() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function outputFileFor(topic, roundId) {
  return path.join(OUTPUT_DIR, topic.slug + '-' + roundId + '.json');
}

function writeCandidates(file, candidates) {
  fs.writeFileSync(file, JSON.stringify(candidates, null, 2) + '\n', 'utf8');
}

// --- Round-ID ----------------------------------------------------------------

function autoRoundId() {
  // Date-based round identifier. Avoids new Date() in deterministic-execution
  // contexts but is fine for one-shot CLI run.
  return 'round-' + new Date().toISOString().slice(0, 10);
}

// --- Main --------------------------------------------------------------------

async function main(argv) {
  const args = parseArgs(argv);
  const topics = loadTopics();
  const selected = selectTopics(topics, args);
  const roundId = args.round || autoRoundId();

  console.log('research-runner start — round=' + roundId + ' topics=' + selected.length + ' model=' + MODEL);
  ensureOutputDir();

  const system = buildSystemPrompt();
  const summary = [];

  for (let i = 0; i < selected.length; i++) {
    const topic = selected[i];
    const outFile = outputFileFor(topic, roundId);
    console.log('  [' + (i + 1) + '/' + selected.length + '] ' + topic.slug + ' -> ' + path.relative(process.cwd(), outFile));

    if (args.dryRun) {
      summary.push({ topic: topic.slug, candidates: 0, file: outFile, dryRun: true });
      continue;
    }

    try {
      const userPrompt = buildUserPrompt(topic, roundId);
      const resp = await callAnthropicWithWebSearch(system, userPrompt);
      const candidates = extractCandidatesFromResponse(resp);
      writeCandidates(outFile, candidates);
      const usage = resp.usage || {};
      console.log('      candidates=' + candidates.length + ' input_tokens=' + (usage.input_tokens || '?') + ' output_tokens=' + (usage.output_tokens || '?'));
      summary.push({ topic: topic.slug, candidates: candidates.length, file: outFile });
    } catch (err) {
      console.error('      FAILED: ' + (err.message || err));
      summary.push({ topic: topic.slug, error: err.message || String(err), file: outFile });
    }
  }

  console.log('\n=== Summary ===');
  let total = 0;
  for (const row of summary) {
    if (typeof row.candidates === 'number') {
      total += row.candidates;
      console.log('  ' + (row.candidates + '').padStart(4) + '  ' + row.topic + (row.dryRun ? '  (dry-run)' : ''));
    } else {
      console.log('  ----  ' + row.topic + '  [ERROR: ' + row.error + ']');
    }
  }
  console.log('  ----');
  console.log('  ' + (total + '').padStart(4) + '  total candidates');
}

if (require.main === module) {
  main(process.argv.slice(2)).catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = {
  buildSystemPrompt,
  buildUserPrompt,
  extractCandidatesFromResponse,
  loadTopics,
  selectTopics,
  outputFileFor,
  autoRoundId
};
