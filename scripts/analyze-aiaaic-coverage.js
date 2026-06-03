#!/usr/bin/env node
/**
 * scripts/analyze-aiaaic-coverage.js
 *
 * Lies das AIAAIC-CSV (data/external-imports/aiaaic-incidents.csv) und
 * vergleicht jeden Eintrag fuzzy gegen den bestehenden AIStrikeMap-Bestand
 * (data/index.json + data/all-incidents.json fuer Headlines/Names).
 *
 * Output: data/external-imports/aiaaic-coverage-report.md
 *   - Anzahl Total in AIAAIC
 *   - Anzahl Match (Jaccard >= 0.4)
 *   - Anzahl Gap (kein Match)
 *   - Top 20 Match-Beispiele
 *   - Top 20 Gap-Beispiele (sortiert nach AIAAIC-ID desc = neueste zuerst)
 *
 * Kein Schreiben in data/incident-candidates/ — nur Analyse.
 * REINE FILE-ANALYSE, keine Web-Calls.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CSV_PATH = path.join(ROOT, 'data', 'external-imports', 'aiaaic-incidents.csv');
const BUNDLE_PATH = path.join(ROOT, 'data', 'all-incidents.json');
const REPORT_PATH = path.join(ROOT, 'data', 'external-imports', 'aiaaic-coverage-report.md');

// --- Minimal CSV-Parser (rfc-light, mit quoted-field-support) ----------------

function parseCSV(raw) {
  const rows = [];
  let row = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < raw.length; i++) {
    const c = raw[i];
    if (inQuotes) {
      if (c === '"' && raw[i+1] === '"') { cur += '"'; i++; }
      else if (c === '"') { inQuotes = false; }
      else { cur += c; }
    } else {
      if (c === '"') { inQuotes = true; }
      else if (c === ',') { row.push(cur); cur = ''; }
      else if (c === '\n') { row.push(cur); cur = ''; rows.push(row); row = []; }
      else if (c === '\r') { /* skip */ }
      else { cur += c; }
    }
  }
  if (cur.length || row.length) { row.push(cur); rows.push(row); }
  return rows;
}

// --- Token-Normalisierung ----------------------------------------------------

const STOPWORDS = new Set([
  'a','an','the','of','and','or','to','in','on','at','for','from','by','with',
  'is','are','was','were','be','been','being','as','that','this','these','those',
  'has','have','had','will','would','could','should','its','it','their','they',
  'us','usa','uk','eu','ai','ki','und','der','die','das','den','dem','des','ein',
  'eine','einen','einer','einem','eines','von','mit','zu','zum','zur','bei','aus',
  'auf','für','fuer','im','am','als','auch','ist','wird','wurde','wurden','haben',
  'hat','sich','nicht','nur','noch','schon','sehr','mehr','dass','wenn','aber',
  'weil','dafür','dafuer','dies','diese','dieser','dieses','jahr','jahre','jahren'
]);

function transliterate(str) {
  return str
    .replace(/[äÄ]/g, 'ae').replace(/[öÖ]/g, 'oe').replace(/[üÜ]/g, 'ue')
    .replace(/ß/g, 'ss').replace(/[áàâã]/gi, 'a').replace(/[éèê]/gi, 'e')
    .replace(/[íìî]/gi, 'i').replace(/[óòôõ]/gi, 'o').replace(/[úùû]/gi, 'u')
    .replace(/ñ/gi, 'n').replace(/ç/gi, 'c');
}

function tokenize(text) {
  return transliterate(text || '').toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length >= 3 && !STOPWORDS.has(t));
}

function jaccard(setA, setB) {
  let inter = 0;
  for (const a of setA) if (setB.has(a)) inter++;
  const union = setA.size + setB.size - inter;
  return union === 0 ? 0 : inter / union;
}

// --- Loader ------------------------------------------------------------------

function loadAiaaic() {
  const raw = fs.readFileSync(CSV_PATH, 'utf8');
  const rows = parseCSV(raw);
  // L1 = sheet title, L2+L3 = Header
  const data = rows.slice(3).filter(r => (r[0] || '').match(/^AIAAIC\d+$/));
  return data.map(r => ({
    id: r[0],
    headline: r[1] || '',
    occurred: r[2] || '',
    deployer: r[3] || '',
    developer: r[4] || '',
    systemName: r[5] || '',
    technology: r[6] || '',
    purpose: r[7] || '',
    jurisdiction: r[10] || '',
    sector: r[11] || '',
    summaryLinks: r[17] || ''
  }));
}

function loadBundle() {
  const raw = fs.readFileSync(BUNDLE_PATH, 'utf8');
  const arr = JSON.parse(raw);
  return arr.map(it => ({
    slug: it['@id'] ? it['@id'].split('/').pop() : '',
    name_de: it.name_de || it.name || '',
    name_en: it.name_en || ''
  }));
}

// --- Main --------------------------------------------------------------------

function main() {
  console.log('loading AIAAIC...');
  const aiaaic = loadAiaaic();
  console.log('  AIAAIC entries:', aiaaic.length);

  console.log('loading bundle...');
  const bundle = loadBundle();
  console.log('  AIStrikeMap entries:', bundle.length);

  const bundleTokenSets = bundle.map(b => {
    const merged = (b.name_de + ' ' + b.name_en + ' ' + b.slug.replace(/-/g, ' '));
    return { item: b, tokens: new Set(tokenize(merged)) };
  });

  let matches = [], gaps = [];
  for (const a of aiaaic) {
    const at = new Set(tokenize(a.headline + ' ' + a.deployer + ' ' + a.systemName));
    if (at.size === 0) { gaps.push({ aiaaic: a, best: null, score: 0 }); continue; }

    let bestScore = 0, bestItem = null;
    for (const b of bundleTokenSets) {
      const s = jaccard(at, b.tokens);
      if (s > bestScore) { bestScore = s; bestItem = b.item; }
    }
    if (bestScore >= 0.4) matches.push({ aiaaic: a, best: bestItem, score: bestScore });
    else gaps.push({ aiaaic: a, best: bestItem, score: bestScore });
  }

  // Report
  const lines = [];
  lines.push('# AIAAIC Coverage Report — vs. AIStrikeMap-Bestand');
  lines.push('');
  lines.push('Stand: ' + new Date().toISOString().slice(0, 10));
  lines.push('');
  lines.push('## Zahlen');
  lines.push('');
  lines.push('| Metrik | Wert |');
  lines.push('|---|---|');
  lines.push('| AIAAIC Total | ' + aiaaic.length + ' |');
  lines.push('| AIStrikeMap-Bestand | ' + bundle.length + ' |');
  lines.push('| Match (Jaccard ≥ 0.4) | ' + matches.length + ' |');
  lines.push('| Gap (kein Match) | ' + gaps.length + ' |');
  lines.push('| Coverage AIStrikeMap-of-AIAAIC | ' + (matches.length / aiaaic.length * 100).toFixed(1) + ' % |');
  lines.push('');
  lines.push('## Top 30 Match-Beispiele (Jaccard absteigend)');
  lines.push('');
  lines.push('| AIAAIC | Headline | Best AIStrikeMap-Match | Jaccard |');
  lines.push('|---|---|---|---|');
  matches.sort((a, b) => b.score - a.score);
  for (const m of matches.slice(0, 30)) {
    lines.push('| ' + m.aiaaic.id + ' | ' + m.aiaaic.headline.slice(0, 80) + ' | ' + (m.best.name_de || m.best.slug).slice(0, 80) + ' | ' + m.score.toFixed(2) + ' |');
  }
  lines.push('');
  lines.push('## Top 40 Gap-Beispiele (neueste AIAAIC-IDs zuerst)');
  lines.push('');
  lines.push('| AIAAIC | Headline | Year | Jurisdiction | Best-Match (zu schwach) |');
  lines.push('|---|---|---|---|---|');
  gaps.sort((a, b) => b.aiaaic.id.localeCompare(a.aiaaic.id));
  for (const g of gaps.slice(0, 40)) {
    const a = g.aiaaic;
    const bm = g.best ? ((g.best.name_de || g.best.slug).slice(0, 50) + ' (' + g.score.toFixed(2) + ')') : '—';
    lines.push('| ' + a.id + ' | ' + a.headline.slice(0, 70) + ' | ' + a.occurred + ' | ' + a.jurisdiction.slice(0, 30) + ' | ' + bm + ' |');
  }

  fs.writeFileSync(REPORT_PATH, lines.join('\n') + '\n', 'utf8');
  console.log('\nreport:', REPORT_PATH);
  console.log('matches:', matches.length, ' gaps:', gaps.length);
}

if (require.main === module) main();
