#!/usr/bin/env node
/**
 * scripts/dedup-candidates-round-1.js
 *
 * Cross-File-Dedup-Analyse:
 *   - alle Kandidaten in data/incident-candidates/*.json (außer _README/_schema)
 *   - alle bestehenden Incidents in data/index.json (Slug + name)
 *
 * Pro Paar (Kandidat × Bestand) und (Kandidat × Kandidat):
 *   - Jaccard auf normalisierten Token-Sets
 *   - +0.15 wenn location.country gleich (nur Kandidaten-Paare; Bestand ohne Country)
 *   - +0.10 wenn startDate-Jahr gleich (nur wenn beide bekannt)
 *
 * Klassifizierung:
 *   exact-dup    ≥ 0.70
 *   probable-dup 0.50–0.70
 *   weak-dup     0.35–0.50
 *
 * Schreibt Markdown-Report nach
 *   data/incident-candidates/_dedup-report-round-1.md
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CAND_DIR = path.join(ROOT, 'data', 'incident-candidates');
const INDEX_PATH = path.join(ROOT, 'data', 'index.json');
const REPORT_PATH = path.join(CAND_DIR, '_dedup-report-round-6.md');

const STOPWORDS = new Set([
  // DE
  'und','oder','aber','sich','dass','eine','einen','einem','einer','eines',
  'wird','wurde','wurden','sind','ist','nach','durch','beim','vom','zur','zum',
  'das','die','der','den','dem','des','als','auch','mit','von','bei','aus',
  'auf','über','unter','gegen','für','jahr','jahre','jahren','tag','tage',
  'tagen','haben','soll','kann','kommt','nicht','noch','seit','aber','wegen',
  'sowie','sondern','dabei','damit','dann','dort','dies','diese','dieser',
  'diesen','dieses','vor','ohne','beim','etwa','sehr','mehr','sich','ihre',
  'ihrer','ihren','sein','seine','seiner','seinen','ohne','schon','weil',
  // EN
  'and','or','but','with','from','into','onto','over','under','against',
  'between','after','before','about','this','that','these','those','their',
  'there','they','will','were','been','have','has','had','said','year','years',
  'month','months','day','days','than','then','also','some','more','only',
  'when','what','which','where','while','would','could','should','because',
  'such','into','about','being','through','during','within','without','among'
]);

const NOISE_TOKENS = new Set([
  // sehr generische incident-vokabular tokens — die niemand differenzieren
  // helfen, weil sie in fast jedem KI-Incident vorkommen.
  'system','systems','data','daten','tool','tools','platform','plattform',
  'company','firma','unternehmen','government','staat','program','programm',
  'project','projekt','case','fall','report','bericht','study','studie',
  'court','gericht','police','polizei','government','minister','agency',
  'department','algorithm','algorithmus','algorithmen','model','modell',
  'intelligence','intelligenz','artificial','kuenstliche','künstliche',
  'amid','amidst','says','says','show','shows','show','people','many',
  'first','using','used','since','launched','launches','began','begin',
  'reports','records','million','billion','thousand','tausend','millionen',
  'milliarden','million','billion','number','rights','rechte','human',
  'menschen','menschenrechte','hundreds','dozens','several','staff','team',
  'public','privat','private','workers','arbeiter','employees','mitarbeiter',
  'mitarbeiter:innen','staff','team','teams','file','files','dossier'
]);

function tokenize(str) {
  if (!str) return [];
  // Replace umlauts to ASCII so DE/EN-Token-Vergleich konsistent ist.
  const normalized = str.toLowerCase()
    .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss');
  return normalized
    .split(/[\s,.;:!?()\/\[\]\-—–"„"'`„'"«»‘’“”–—|]+/u)
    .filter(w => w.length >= 4 && !STOPWORDS.has(w) && !NOISE_TOKENS.has(w) && !/^\d+$/.test(w));
}

function tokenSet(strings) {
  const s = new Set();
  for (const str of strings) {
    for (const t of tokenize(str)) s.add(t);
  }
  return s;
}

function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  const uni = a.size + b.size - inter;
  return uni ? inter / uni : 0;
}

function extractYear(dateStr) {
  if (typeof dateStr !== 'string') return null;
  const m = dateStr.match(/(\d{4})/);
  return m ? m[1] : null;
}

// ---- Load Bestand -----------------------------------------------------------

const indexRaw = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
const bestand = (indexRaw.incidents || []).map(it => {
  // Versuche Jahr aus dem Namen oder Slug zu raten.
  const yearFromName = extractYear(it.name || '');
  const yearFromId = extractYear(it.id || '');
  return {
    slug: it.id,
    name: it.name,
    types: it.types || [],
    year: yearFromName || yearFromId || null,
    tokens: tokenSet([it.id, it.name])
  };
});

// ---- Load Kandidaten --------------------------------------------------------

const candFiles = fs.readdirSync(CAND_DIR)
  .filter(f => f.endsWith('.json') && !f.startsWith('_'))
  .map(f => path.join(CAND_DIR, f));

const kandidaten = [];
for (const file of candFiles) {
  const arr = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(arr)) continue;
  for (const c of arr) {
    const cd = c.candidate_data || {};
    const actors = Array.isArray(cd.actors)
      ? cd.actors.map(a => a.name).filter(Boolean) : [];
    const tokens = tokenSet([
      c.dedup_hint,
      cd.name_de,
      cd.name_en,
      cd.location ? cd.location.name_de : null,
      cd.location ? cd.location.name_en : null,
      ...actors
    ]);
    kandidaten.push({
      candidate_id: c.candidate_id,
      source_file: path.basename(file),
      name_de: cd.name_de || '',
      name_en: cd.name_en || '',
      country: cd.location ? cd.location.country : null,
      year: extractYear(cd.startDate || ''),
      types: cd.incidentType || [],
      dedup_hint: c.dedup_hint || '',
      tokens,
      researcher_notes: c.researcher_notes || ''
    });
  }
}

console.error('Bestand: ' + bestand.length + ' incidents, Kandidaten: ' + kandidaten.length);

// ---- Compute pairs ----------------------------------------------------------

const T_EXACT = 0.70;
const T_PROBABLE = 0.50;
const T_WEAK = 0.35;

const candVsBestand = [];   // {kand, best, score, j}
const candVsCand = [];      // {a, b, score, j}

for (const k of kandidaten) {
  for (const b of bestand) {
    const j = jaccard(k.tokens, b.tokens);
    if (j < 0.20) continue; // schneller Cutoff
    let score = j;
    if (k.year && b.year && k.year === b.year) score += 0.10;
    // Country-Boost geht hier nicht, weil Bestand kein Country hat.
    if (score >= T_WEAK) candVsBestand.push({ kand: k, best: b, score, j });
  }
}

for (let i = 0; i < kandidaten.length; i++) {
  for (let jj = i + 1; jj < kandidaten.length; jj++) {
    const a = kandidaten[i], b = kandidaten[jj];
    const j = jaccard(a.tokens, b.tokens);
    if (j < 0.20) continue;
    let score = j;
    if (a.country && b.country && a.country === b.country) score += 0.15;
    if (a.year && b.year && a.year === b.year) score += 0.10;
    if (score >= T_WEAK) candVsCand.push({ a, b, score, j });
  }
}

function classify(s) {
  if (s >= T_EXACT) return 'exact-dup';
  if (s >= T_PROBABLE) return 'probable-dup';
  return 'weak-dup';
}

// Sortierung nach Score absteigend
candVsBestand.sort((x, y) => y.score - x.score);
candVsCand.sort((x, y) => y.score - x.score);

// ---- Promote-Empfehlungen ---------------------------------------------------

// Pro Kandidat das beste Match-Resultat über alle Vergleiche
const bestMatchPerCand = new Map(); // cand_id -> {kind, target_slug, score, klass}

function recordMatch(candId, kind, targetSlug, score) {
  const cur = bestMatchPerCand.get(candId);
  if (!cur || score > cur.score) {
    bestMatchPerCand.set(candId, { kind, target_slug: targetSlug, score, klass: classify(score) });
  }
}

for (const p of candVsBestand) {
  recordMatch(p.kand.candidate_id, 'bestand', p.best.slug, p.score);
}
for (const p of candVsCand) {
  recordMatch(p.a.candidate_id, 'kandidat', p.b.candidate_id, p.score);
  recordMatch(p.b.candidate_id, 'kandidat', p.a.candidate_id, p.score);
}

const recommendations = kandidaten.map(k => {
  const m = bestMatchPerCand.get(k.candidate_id);
  let action;
  if (!m || m.klass === 'weak-dup') {
    action = 'KEEP';
  } else if (m.klass === 'exact-dup') {
    if (m.kind === 'bestand') {
      // Wenn researcher_notes "Eskalation" / "Update" andeuten -> EXTEND-TIMELINE
      const rn = (k.researcher_notes || '').toLowerCase();
      if (rn.includes('eskalation') || rn.includes('update') || rn.includes('zusammenführen') || rn.includes('zusammenfuehren') || rn.includes('extend')) {
        action = 'EXTEND-TIMELINE-OF-' + m.target_slug;
      } else {
        action = 'DROP-EXACT-DUP (matches Bestand ' + m.target_slug + ')';
      }
    } else {
      // Kandidat ↔ Kandidat exact dup — der mit dem alphabetisch kleineren id behält
      const winner = [k.candidate_id, m.target_slug].sort()[0];
      action = (winner === k.candidate_id)
        ? 'KEEP (drop duplicate ' + m.target_slug + ')'
        : 'DROP-EXACT-DUP (duplicate of ' + m.target_slug + ')';
    }
  } else {
    // probable-dup
    action = (m.kind === 'bestand')
      ? 'MERGE-INTO-' + m.target_slug
      : 'MERGE-WITH-' + m.target_slug;
  }
  return { k, m, action };
});

const stats = {
  exact: 0, probable: 0, weak: 0, unique: 0
};
for (const r of recommendations) {
  if (!r.m || r.m.klass === 'weak-dup') {
    if (!r.m) stats.unique++;
    else stats.weak++;
  } else if (r.m.klass === 'exact-dup') stats.exact++;
  else if (r.m.klass === 'probable-dup') stats.probable++;
}
// "unique" = KEEP-Empfehlungen ohne irgendein dup
const uniquePromoteCandidates = recommendations.filter(r => r.action === 'KEEP' || r.action.startsWith('KEEP (')).length;

// ---- Markdown report --------------------------------------------------------

const lines = [];
lines.push('# Dedup-Report Round-1');
lines.push('');
lines.push('_Generiert: ' + new Date().toISOString() + ' von `scripts/dedup-candidates-round-1.js`_');
lines.push('');
lines.push('## Zusammenfassung');
lines.push('');
lines.push('- Bestand-Incidents (data/index.json): **' + bestand.length + '**');
lines.push('- Kandidaten (data/incident-candidates/*.json): **' + kandidaten.length + '**');
lines.push('- Klassifizierungsschwellen: exact-dup ≥ ' + T_EXACT + ' · probable-dup ≥ ' + T_PROBABLE + ' · weak-dup ≥ ' + T_WEAK);
lines.push('');
lines.push('| Kategorie | Anzahl Kandidaten |');
lines.push('|---|---:|');
lines.push('| exact-dup | ' + stats.exact + ' |');
lines.push('| probable-dup | ' + stats.probable + ' |');
lines.push('| weak-dup (nur Hinweis) | ' + stats.weak + ' |');
lines.push('| unique (KEEP) | ' + uniquePromoteCandidates + ' |');
lines.push('');
lines.push('Cross-Pair-Statistik:');
lines.push('');
lines.push('- Kandidat ↔ Bestand-Paare über Schwelle: **' + candVsBestand.length + '**');
lines.push('- Kandidat ↔ Kandidat-Paare über Schwelle: **' + candVsCand.length + '**');
lines.push('');

// --- Exact dup pairs (Bestand) ----------------------------------------------
lines.push('## Exact-Dup-Paare: Kandidat ↔ Bestand (Score ≥ ' + T_EXACT + ')');
lines.push('');
const exactBestand = candVsBestand.filter(p => p.score >= T_EXACT);
if (!exactBestand.length) lines.push('_Keine._');
else {
  lines.push('| Score | Kandidat (Datei) | Bestand-Slug | Befund |');
  lines.push('|---:|---|---|---|');
  for (const p of exactBestand) {
    lines.push('| ' + p.score.toFixed(2) + ' | `' + p.kand.candidate_id + '` (' + p.kand.source_file + ') | `' + p.best.slug + '` | ' + (p.kand.name_de || p.kand.name_en).slice(0, 80) + ' ↔ ' + (p.best.name || '').slice(0, 80) + ' |');
  }
}
lines.push('');

// --- Probable dup pairs (Bestand) -------------------------------------------
lines.push('## Probable-Dup-Paare: Kandidat ↔ Bestand (Score ' + T_PROBABLE + '–' + T_EXACT + ')');
lines.push('');
const probBestand = candVsBestand.filter(p => p.score >= T_PROBABLE && p.score < T_EXACT);
if (!probBestand.length) lines.push('_Keine._');
else {
  lines.push('| Score | Kandidat | Bestand-Slug | Kandidat-Titel ↔ Bestand-Name |');
  lines.push('|---:|---|---|---|');
  for (const p of probBestand) {
    lines.push('| ' + p.score.toFixed(2) + ' | `' + p.kand.candidate_id + '` | `' + p.best.slug + '` | ' + (p.kand.name_de || p.kand.name_en).slice(0, 60) + ' ↔ ' + (p.best.name || '').slice(0, 60) + ' |');
  }
}
lines.push('');

// --- Exact dup pairs (Kandidat ↔ Kandidat) -----------------------------------
lines.push('## Exact-Dup-Paare: Kandidat ↔ Kandidat (Score ≥ ' + T_EXACT + ')');
lines.push('');
const exactCC = candVsCand.filter(p => p.score >= T_EXACT);
if (!exactCC.length) lines.push('_Keine._');
else {
  lines.push('| Score | Kandidat A | Kandidat B | Files |');
  lines.push('|---:|---|---|---|');
  for (const p of exactCC) {
    lines.push('| ' + p.score.toFixed(2) + ' | `' + p.a.candidate_id + '` | `' + p.b.candidate_id + '` | ' + p.a.source_file + ' / ' + p.b.source_file + ' |');
  }
}
lines.push('');

// --- Probable dup pairs (Kandidat ↔ Kandidat) --------------------------------
lines.push('## Probable-Dup-Paare: Kandidat ↔ Kandidat (Score ' + T_PROBABLE + '–' + T_EXACT + ')');
lines.push('');
const probCC = candVsCand.filter(p => p.score >= T_PROBABLE && p.score < T_EXACT);
if (!probCC.length) lines.push('_Keine._');
else {
  lines.push('| Score | Kandidat A | Kandidat B | Hinweis |');
  lines.push('|---:|---|---|---|');
  for (const p of probCC) {
    const hint = (p.a.country === p.b.country ? 'same country (' + p.a.country + ')' : 'cross-country')
      + (p.a.year && p.a.year === p.b.year ? ', same year (' + p.a.year + ')' : '');
    lines.push('| ' + p.score.toFixed(2) + ' | `' + p.a.candidate_id + '` | `' + p.b.candidate_id + '` | ' + hint + ' |');
  }
}
lines.push('');

// --- Weak-dup table (compact, just for awareness) ----------------------------
lines.push('## Weak-Dup-Paare (Score ' + T_WEAK + '–' + T_PROBABLE + ', nur Hinweis)');
lines.push('');
const weakAll = [
  ...candVsBestand.filter(p => p.score < T_PROBABLE).map(p => ({
    score: p.score, left: p.kand.candidate_id, right: p.best.slug, kind: 'bestand'
  })),
  ...candVsCand.filter(p => p.score < T_PROBABLE).map(p => ({
    score: p.score, left: p.a.candidate_id, right: p.b.candidate_id, kind: 'kandidat'
  }))
].sort((x, y) => y.score - x.score);
if (!weakAll.length) lines.push('_Keine._');
else {
  lines.push('| Score | Links | Rechts | Typ |');
  lines.push('|---:|---|---|---|');
  for (const w of weakAll.slice(0, 60)) {
    lines.push('| ' + w.score.toFixed(2) + ' | `' + w.left + '` | `' + w.right + '` | ' + w.kind + ' |');
  }
  if (weakAll.length > 60) lines.push('');
  if (weakAll.length > 60) lines.push('_… und ' + (weakAll.length - 60) + ' weitere weak-dup-Paare._');
}
lines.push('');

// --- Promote-Empfehlung pro Kandidat -----------------------------------------
lines.push('## Promote-Empfehlung pro Kandidat');
lines.push('');
lines.push('| candidate_id | source_file | klass | action |');
lines.push('|---|---|---|---|');

// gruppiere zur besseren Lesbarkeit nach Datei
recommendations.sort((a, b) => {
  if (a.k.source_file !== b.k.source_file) return a.k.source_file.localeCompare(b.k.source_file);
  return a.k.candidate_id.localeCompare(b.k.candidate_id);
});
for (const r of recommendations) {
  const klass = r.m ? r.m.klass : '—';
  lines.push('| `' + r.k.candidate_id + '` | ' + r.k.source_file + ' | ' + klass + ' | ' + r.action + ' |');
}
lines.push('');
lines.push('---');
lines.push('');
lines.push('_Schwellen, Tokenisierung und Boosts siehe Header dieses Reports + `scripts/dedup-candidates-round-1.js`._');

fs.writeFileSync(REPORT_PATH, lines.join('\n'), 'utf8');

// CLI summary line — der parent agent erwartet eine knappe Zusammenfassung.
const summary = [
  stats.exact + ' exact-dups',
  stats.probable + ' probable-dups',
  stats.weak + ' weak-dups',
  uniquePromoteCandidates + ' unique-promote-candidates'
].join(', ');
console.log(summary);
console.log('report: ' + REPORT_PATH);
