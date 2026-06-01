#!/usr/bin/env node
/**
 * Round-1 Quality-Scoring der Incident-Candidates.
 * REINE FILE-ANALYSE, keine Web-Calls.
 */

const fs = require('fs');
const path = require('path');

const CAND_DIR = path.join(__dirname, '..', 'data', 'incident-candidates');

const WHITELIST_OUTLETS = [
  'reuters.com', 'apnews.com', 'bbc.com', 'bbc.co.uk', 'nytimes.com',
  'washingtonpost.com', 'wsj.com', 'theguardian.com', 'ft.com',
  'lemonde.fr', 'faz.net', 'sueddeutsche.de', 'spiegel.de', 'nrc.nl',
  'elpais.com', 'citizenlab.ca', 'accessnow.org', 'amnesty.org',
  'hrw.org', 'hrw.de', 'ipi.media', 'rsf.org', 'eff.org', 'aclu.org',
  'propublica.org', 'themarkup.org', 'wired.com', '404media.co',
  'nbcnews.com', 'cnn.com', 'bloomberg.com', '+972mag.com', 'ohchr.org',
  'edri.org', 'algorithmwatch.org', 'restofworld.org', 'mit.edu',
  'hbr.org', 'hcss.nl', 'brookings.edu', 'epic.org', 'aljazeera.com',
  'scmp.com', 'japantimes.co.jp', 'koreaherald.com', 'daily-maverick.co.za',
  'premiumtimesng.com', 'nation.africa', 'paradigmhq.org'
];

const OFFICIAL_TYPES = new Set([
  'government-document', 'court-filing', 'legal-ruling', 'regulatory-decision'
]);

const INCIDENT_VOCAB = new Set([
  'surveillance', 'predictive-policing', 'autonomous-weapons', 'discrimination',
  'deepfakes', 'data-misuse', 'military-ai', 'facial-recognition', 'censorship',
  'labor-exploitation', 'political-pressure'
]);

const UNCERTAIN_TERMS = [
  'unsicher', 'möglicherweise', 'vermutlich', 'vermutung',
  'ggf. nachverifizieren', 'uncertain', 'tentative'
];

const UMLAUTS = /[äöüÄÖÜß]/;

function isWhitelistedHost(url) {
  if (!url) return false;
  const u = url.toLowerCase();
  // pattern: gov.*, court.*, *.europa.eu
  if (/\.gov(\.|\/|$)/.test(u)) return true;
  if (/\/\/[^/]*\.gov\./.test(u) || /\/\/gov\./.test(u)) return true;
  if (/\/\/[^/]*court[^/]*\./.test(u)) return true;
  if (/\.europa\.eu(\/|$)/.test(u)) return true;
  return WHITELIST_OUTLETS.some(d => u.includes(d));
}

function looksLikeSearchSnippet(url) {
  if (!url || typeof url !== 'string') return true;
  const u = url.toLowerCase();
  if (u.includes('/search?')) return true;
  if (u.includes('google.com/search')) return true;
  if (u.includes('duckduckgo.com')) return true;
  if (u.includes('bing.com/search')) return true;
  // missing TLD in host
  try {
    const m = u.match(/^https?:\/\/([^/]+)/);
    if (!m) return true;
    const host = m[1];
    if (!host.includes('.')) return true;
  } catch (e) {
    return true;
  }
  return false;
}

function scoreCandidate(c) {
  const reasons = [];
  let score = 0;
  const data = c.candidate_data || {};
  const sources = Array.isArray(data.sources) ? data.sources : [];

  // +2 ≥2 source URLs
  const urlSources = sources.filter(s => s && typeof s.url === 'string' && s.url.length > 0);
  if (urlSources.length >= 2) {
    score += 2;
    reasons.push('+2 ≥2 Quellen');
  }

  // +1 whitelisted outlet
  if (urlSources.some(s => isWhitelistedHost(s.url))) {
    score += 1;
    reasons.push('+1 Whitelist-Outlet');
  }

  // +1 official doc
  if (sources.some(s => s && OFFICIAL_TYPES.has(s.type))) {
    score += 1;
    reasons.push('+1 offiz. Doc');
  }

  // +1 description_de ≥150 chars with umlauts
  if (typeof data.description_de === 'string' &&
      data.description_de.length >= 150 &&
      UMLAUTS.test(data.description_de)) {
    score += 1;
    reasons.push('+1 DE-Desc');
  }

  // +1 description_en ≥150 chars
  if (typeof data.description_en === 'string' && data.description_en.length >= 150) {
    score += 1;
    reasons.push('+1 EN-Desc');
  }

  // +1 actors named
  const actors = Array.isArray(data.actors) ? data.actors : [];
  if (actors.some(a => a && typeof a.name === 'string' && a.name.trim().length > 2)) {
    score += 1;
    reasons.push('+1 Akteur');
  }

  // +1 incidentType specific
  const types = Array.isArray(data.incidentType) ? data.incidentType : [];
  if (types.some(t => INCIDENT_VOCAB.has(t))) {
    score += 1;
    reasons.push('+1 Type');
  }

  // +1 location country + lat/lng
  const loc = data.location || {};
  if (loc.country && typeof loc.lat === 'number' && typeof loc.lng === 'number') {
    score += 1;
    reasons.push('+1 Geo');
  }

  // -1 researcher_notes uncertain
  const notes = (c.researcher_notes || '').toLowerCase();
  if (UNCERTAIN_TERMS.some(term => notes.includes(term))) {
    score -= 1;
    reasons.push('-1 unsicher');
  }

  // -2 source looks like search snippet
  if (urlSources.some(s => looksLikeSearchSnippet(s.url))) {
    score -= 2;
    reasons.push('-2 Snippet-URL');
  }

  return { score, reasons };
}

const files = fs.readdirSync(CAND_DIR)
  .filter(f => f.endsWith('.json') && !f.startsWith('_'))
  .sort();

const allScored = [];
const perFile = {};

for (const file of files) {
  const fp = path.join(CAND_DIR, file);
  let arr;
  try {
    arr = JSON.parse(fs.readFileSync(fp, 'utf8'));
  } catch (e) {
    console.error(`Parse error in ${file}: ${e.message}`);
    continue;
  }
  if (!Array.isArray(arr)) {
    console.error(`Not an array: ${file}`);
    continue;
  }
  const buckets = { low: 0, mid: 0, high: 0, total: 0 };
  for (const c of arr) {
    const { score, reasons } = scoreCandidate(c);
    buckets.total++;
    if (score <= 3) buckets.low++;
    else if (score <= 6) buckets.mid++;
    else buckets.high++;
    allScored.push({
      file,
      id: c.candidate_id || '(no id)',
      name: (c.candidate_data && (c.candidate_data.name_de || c.candidate_data.name_en)) || '(no name)',
      score,
      reasons
    });
  }
  perFile[file] = buckets;
}

allScored.sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));

const totals = { low: 0, mid: 0, high: 0, total: allScored.length };
for (const s of allScored) {
  if (s.score <= 3) totals.low++;
  else if (s.score <= 6) totals.mid++;
  else totals.high++;
}

// Build markdown report
const lines = [];
lines.push('# Round-1 Quality-Report');
lines.push('');
lines.push(`Erzeugt: ${new Date().toISOString()}`);
lines.push('');
lines.push(`Reine File-Analyse (keine Web-Calls) — Scoring-Heuristik siehe \`scripts/score-candidates.js\`.`);
lines.push('');
lines.push('## Histogramm');
lines.push('');
lines.push(`Gesamt: **${totals.total}** Kandidaten`);
lines.push('');
lines.push('| Bucket | Score | Anzahl | Anteil |');
lines.push('|---|---|---|---|');
const pct = n => totals.total ? `${(100 * n / totals.total).toFixed(1)} %` : '0 %';
lines.push(`| Schwach | 0–3 | ${totals.low} | ${pct(totals.low)} |`);
lines.push(`| Mittel  | 4–6 | ${totals.mid} | ${pct(totals.mid)} |`);
lines.push(`| Stark   | 7–10 | ${totals.high} | ${pct(totals.high)} |`);
lines.push('');
lines.push('## Pro File');
lines.push('');
lines.push('| File | gesamt | 0–3 | 4–6 | 7–10 |');
lines.push('|---|---|---|---|---|');
for (const f of Object.keys(perFile)) {
  const b = perFile[f];
  lines.push(`| \`${f}\` | ${b.total} | ${b.low} | ${b.mid} | ${b.high} |`);
}
lines.push('');
lines.push('## Top-10 Kandidaten');
lines.push('');
const top = allScored.slice(0, 10);
for (const t of top) {
  lines.push(`- **${t.score}** \`${t.id}\` (${t.file})`);
  lines.push(`  - ${t.name}`);
  lines.push(`  - ${t.reasons.join(', ')}`);
}
lines.push('');
lines.push('## Bottom-10 Kandidaten');
lines.push('');
const bottom = allScored.slice(-10).reverse();
for (const b of bottom) {
  lines.push(`- **${b.score}** \`${b.id}\` (${b.file})`);
  lines.push(`  - ${b.name}`);
  lines.push(`  - ${b.reasons.join(', ') || '(keine Punkte)'}`);
}
lines.push('');
lines.push('## Promote-ready Schwellenwert');
lines.push('');
lines.push(`Vorschlag: **Score ≥ 6** = direkt promote-tauglich (vorbehaltlich Dedup-Check).`);
lines.push('');
const promoteReady = allScored.filter(s => s.score >= 6).length;
lines.push(`Aktuell erfüllen **${promoteReady}** von ${totals.total} Kandidaten (${pct(promoteReady)}) diese Schwelle.`);
lines.push('');
lines.push('### Begründung');
lines.push('');
lines.push('Score ≥ 6 verlangt mindestens eine Kombination aus:');
lines.push('- ≥ 2 Quellen + Whitelist-Outlet (3 Punkte) +');
lines.push('- vollständige bilinguale Description (2 Punkte) +');
lines.push('- benannte Akteure ODER spezifischer Typ ODER Geo (1+ Punkt)');
lines.push('');
lines.push('Damit ist mit hoher Wahrscheinlichkeit ein faktisch belegtes, ortbares Incident mit nachvollziehbarer Beweislage gegeben.');
lines.push('Unsicherheits-Marker im `researcher_notes` ziehen direkt einen Punkt ab, Suchergebnis-Snippet-URLs zwei.');
lines.push('');

const out = path.join(CAND_DIR, '_quality-report-round-1.md');
fs.writeFileSync(out, lines.join('\n'), 'utf8');

console.log(`Total: ${totals.total}`);
console.log(`0-3: ${totals.low} | 4-6: ${totals.mid} | 7-10: ${totals.high}`);
console.log(`Promote-ready (>=6): ${promoteReady}`);
console.log(`Report: ${out}`);
