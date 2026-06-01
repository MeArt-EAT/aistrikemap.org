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
const MAX_OUTPUT_TOKENS = 5000;
const MAX_WEB_SEARCHES_PER_TOPIC = 5;
// Pause zwischen Topics, damit das 30k-input-tokens/minute-Rate-Limit
// (Tier 1 Anthropic) eingehalten wird. Ein Topic-Call inkl. web_search-
// Snippets liegt typisch bei 20-30k Input-Tokens.
const INTER_TOPIC_DELAY_MS = parseInt(process.env.RESEARCH_DELAY_MS || '75000', 10);

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
    'Du bist ein Research-Agent für AIStrikeMap, eine investigative Plattform die KI-bezogene Menschenrechts-Vorfälle dokumentiert.',
    '',
    'KRITISCH — DEIN OUTPUT IST AUSSCHLIESSLICH DAS save_candidates TOOL:',
    '- Du DARFST nicht ohne Aufruf von save_candidates fertig werden.',
    '- Auch wenn dein Search-Budget knapp wird, rufe save_candidates mit dem was du bisher hast.',
    '- Auch wenn du 0 oder 1 Kandidaten gefunden hast, rufe save_candidates trotzdem (mit dem Array, ggf. leer).',
    '- Kein Prosa-Output ist erwünscht.',
    '',
    'Hard rules:',
    '1. NIE Fälle erfinden. Ohne real existierende Quelle aus deinen Search-Results: weglassen.',
    '2. NIE URLs fabrizieren. Nur URLs die du im web_search-Resultat gesehen hast.',
    '3. Mindestens 1 Source pro Kandidat.',
    '4. DE-Beschreibungen mit echten Umlauten (ä/ö/ü/ß), niemals ae/oe/ue/ss.',
    '5. JSON-Strings sind ASCII-quote-only ("..."), KEINE typografischen/Smart-Quotes (NIE „..." oder \'\'...\'\' oder ‚...\'). Auch innerhalb der Texte (description_de etc.) NIEMALS „X" oder \'X\' verwenden — wenn du wirklich Anführungszeichen im Text brauchst, escape sie als \\"X\\" innerhalb des JSON-Strings.',
    '',
    'Token-Budget: web_search Resultate sind teuer. Mache MAX 5 gezielte Suchen, dann sammle. Lieber 5 hochwertige Kandidaten als 25 schwache.',
    '',
    'Schema pro Kandidat:',
    '  candidate_id (slug-style), discovered_at (ISO UTC), researcher (gegeben), round (gegeben), status="candidate",',
    '  candidate_data: { name_de, name_en, startDate, location: {name_de, name_en, country, lat?, lng?},',
    '                    incidentType[], candidate_severity (1-5), candidate_verification (1-4),',
    '                    description_de, description_en, actors[], sources[] },',
    '  researcher_notes, dedup_hint.',
    '',
    'incidentType vocab: surveillance, predictive-policing, autonomous-weapons, discrimination, deepfakes, data-misuse, military-ai, facial-recognition, censorship, labor-exploitation, political-pressure.',
    'sources[].type vocab: news-article, research-paper, ngo-report, government-document, court-filing, legal-ruling, regulatory-decision, encyclopedia, analysis, whistleblower-document.',
    '',
    'Ziel: 5-12 hochwertige Kandidaten pro Topic. RUFE save_candidates AM ENDE.'
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

// Diagnostic: when save_candidates was NOT called, summarize what
// blocks we did get so the operator can debug.
function summarizeResponseBlocks(resp) {
  if (!resp || !Array.isArray(resp.content)) return 'no content array';
  const summary = [];
  for (const block of resp.content) {
    if (block.type === 'text') {
      summary.push('text(' + (block.text || '').length + ' chars)');
    } else if (block.type === 'tool_use') {
      summary.push('tool_use:' + block.name);
    } else if (block.type === 'server_tool_use') {
      summary.push('server_tool_use:' + (block.name || '?'));
    } else if (block.type === 'web_search_tool_result') {
      summary.push('web_search_result');
    } else {
      summary.push(block.type);
    }
  }
  return summary.join(',') + ' (stop_reason=' + (resp.stop_reason || '?') + ')';
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

    // Rate-limit-Sleep zwischen Topics (außer vor dem ersten).
    if (i > 0 && INTER_TOPIC_DELAY_MS > 0) {
      console.log('      sleep ' + Math.round(INTER_TOPIC_DELAY_MS / 1000) + 's vor Topic ' + (i + 1) + ' (rate-limit)');
      await new Promise((r) => setTimeout(r, INTER_TOPIC_DELAY_MS));
    }

    try {
      const userPrompt = buildUserPrompt(topic, roundId);
      const resp = await callAnthropicWithWebSearch(system, userPrompt);
      const candidates = extractCandidatesFromResponse(resp);
      writeCandidates(outFile, candidates);
      const usage = resp.usage || {};
      const debug = candidates.length === 0 ? ' [no candidates; blocks=' + summarizeResponseBlocks(resp) + ']' : '';
      console.log('      candidates=' + candidates.length + ' input_tokens=' + (usage.input_tokens || '?') + ' output_tokens=' + (usage.output_tokens || '?') + debug);
      summary.push({ topic: topic.slug, candidates: candidates.length, file: outFile });
    } catch (err) {
      console.error('      FAILED: ' + (err.message || err).slice(0, 300));
      summary.push({ topic: topic.slug, error: (err.message || String(err)).slice(0, 200), file: outFile });
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
