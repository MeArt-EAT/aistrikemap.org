#!/usr/bin/env node
/**
 * Korpusweiter Smart-Char-Normalizer fuer die Quell-Daten unter data/.
 *
 * Vereinheitlicht typografische Sonderzeichen in den Anzeigefeldern auf die
 * ASCII-Konvention, die validate-timelines.js erzwingt und die im Korpus
 * ohnehin die Mehrheit stellt (" - " 9131x vs " — " 6396x, Stand 2026-08-07).
 *
 * BEWUSST NICHT im Scope: i18n/*.json und *.html. Die UI-Chrome ist von Hand
 * gesetzt, der Em-Dash dort ist Hausstil ("Stufe 1 — Gemeldet") und wird vom
 * Validator nicht erfasst. Entscheidung des Projekteigners, 2026-08-07.
 *
 * Ebenfalls nicht im Scope: die generierten Bundles (all-incidents*.json,
 * all-radar.json, labor-impact-aggregate.json, data/labor-impact-by-country/).
 * Die entstehen nach dem Lauf neu via bundle-incidents.js / bundle-labor-cases.js.
 *
 * Arbeitsweise: Text-Level-Ersetzung auf dem Rohfile (nicht parse/stringify),
 * damit die Formatierung und damit der Diff minimal bleibt. Eingefuegte
 * ASCII-Quotes werden als \" escaped, weil sie im JSON-String landen.
 * Jedes geschriebene File wird vorher gegen JSON.parse geprueft und danach
 * gegen den erwarteten Zeichenbestand verifiziert. Idempotent.
 *
 * Usage:
 *   node scripts/normalize-smart-chars.js --dry-run
 *   node scripts/normalize-smart-chars.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DRY = process.argv.includes('--dry-run');

// Quellverzeichnisse (source of truth). Generierte Bundles bleiben aussen vor.
const SCOPE_DIRS = [
  'data/incidents',
  'data/radar',
  'data/labor-impact-cases',
  'data/career/sources',
];
const SCOPE_FILES = [
  'data/index.json',
  'data/labor-impact-rates.json',
];

// --- Codepoints, per charCode adressiert (keine Shell-Unicode-Regex) ---
const EM = String.fromCharCode(0x2014); // — em dash
const EN = String.fromCharCode(0x2013); // – en dash
const SHY = String.fromCharCode(0x00AD); // soft hyphen (unsichtbar)
const ELL = String.fromCharCode(0x2026); // … ellipsis
const Q_LOW = String.fromCharCode(0x201E); // „
const Q_LDQ = String.fromCharCode(0x201C); // “
const Q_RDQ = String.fromCharCode(0x201D); // ”
const Q_LSQ = String.fromCharCode(0x2018); // ‘
const Q_RSQ = String.fromCharCode(0x2019); // ’

// Reihenfolge ist bedeutsam: die Spezialfaelle vor den Sammelregeln.
const RULES = [
  // 1. Unsichtbares Weichtrennzeichen ersatzlos raus (bricht Suche/Matching).
  { name: 'soft-hyphen', from: SHY, to: '' },

  // 2. Halbe Einschub-Paare: " —," ist Rest eines Gedankenstrich-Paars,
  //    dessen schliessender Strich mit dem Komma kollidiert. Strich faellt weg.
  { name: 'dash-before-comma', from: ' ' + EM + ',', to: ',' },
  { name: 'endash-before-comma', from: ' ' + EN + ',', to: ',' },

  // 3. Gedankenstrich mit Spatien -> ASCII-Trenner.
  { name: 'em-spaced', from: ' ' + EM + ' ', to: ' - ' },
  { name: 'en-spaced', from: ' ' + EN + ' ', to: ' - ' },

  // 4. Restliche Em-Dashes stehen ohne Spatien zwischen Woertern
  //    (englische Quellentitel: "Surveillance—With Some Help") -> gespreizt.
  { name: 'em-tight', from: EM, to: ' - ' },

  // 5. Restliche En-Dashes sind Bis-/Verbindungsstriche
  //    (1960er–80er, Vancouver–Toronto, US–Mexico) -> Bindestrich ohne Spatien.
  { name: 'en-tight', from: EN, to: '-' },

  // 6. Typografische Quotes -> ASCII. Doppelte muessen im JSON escaped werden.
  { name: 'quote-low', from: Q_LOW, to: '\\"' },
  { name: 'quote-ldq', from: Q_LDQ, to: '\\"' },
  { name: 'quote-rdq', from: Q_RDQ, to: '\\"' },
  { name: 'quote-lsq', from: Q_LSQ, to: "'" },
  { name: 'quote-rsq', from: Q_RSQ, to: "'" },

  // 7. Auslassungspunkte ausschreiben.
  { name: 'ellipsis', from: ELL, to: '...' },
];

const TARGET_CHARS = [SHY, EM, EN, Q_LOW, Q_LDQ, Q_RDQ, Q_LSQ, Q_RSQ, ELL];

function splitReplace(text, from, to) {
  // String.split/join statt Regex: kein Escaping-Risiko, kein Unicode-Flag-Zirkus.
  if (!text.includes(from)) return { text, n: 0 };
  const parts = text.split(from);
  return { text: parts.join(to), n: parts.length - 1 };
}

function collectFiles() {
  const out = [];
  for (const d of SCOPE_DIRS) {
    const abs = path.join(ROOT, d);
    if (!fs.existsSync(abs)) continue;
    for (const f of fs.readdirSync(abs)) {
      if (f.endsWith('.json')) out.push(path.join(abs, f));
    }
  }
  for (const f of SCOPE_FILES) {
    const abs = path.join(ROOT, f);
    if (fs.existsSync(abs)) out.push(abs);
  }
  return out.sort();
}

const files = collectFiles();
const totals = Object.fromEntries(RULES.map(r => [r.name, 0]));
let changedFiles = 0;
let failures = 0;

for (const abs of files) {
  const rel = path.relative(ROOT, abs).replace(/\\/g, '/');
  const raw = fs.readFileSync(abs, 'utf8');

  // Vorher parsen: bricht ein File schon vor unserem Eingriff, nicht anfassen.
  try {
    JSON.parse(raw);
  } catch (e) {
    console.error('SKIP (parst schon vorher nicht): ' + rel + ' - ' + e.message);
    failures++;
    continue;
  }

  let text = raw;
  const perFile = {};
  for (const r of RULES) {
    const res = splitReplace(text, r.from, r.to);
    text = res.text;
    if (res.n) { perFile[r.name] = res.n; totals[r.name] += res.n; }
  }

  if (text === raw) continue;

  // Nachher parsen: bricht die Ersetzung das File, gar nicht erst schreiben.
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (e) {
    console.error('FEHLER (unparsebar NACH Ersetzung, uebersprungen): ' + rel + ' - ' + e.message);
    failures++;
    continue;
  }

  // Verifikation: im Ergebnis darf keines der Zielzeichen mehr vorkommen.
  const leftover = TARGET_CHARS.filter(c => JSON.stringify(parsed).includes(c));
  if (leftover.length) {
    console.error('FEHLER (Restzeichen nach Lauf): ' + rel + ' -> ' +
      leftover.map(c => 'U+' + c.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')).join(', '));
    failures++;
    continue;
  }

  changedFiles++;
  const summary = Object.entries(perFile).map(([k, v]) => k + ':' + v).join(' ');
  console.log((DRY ? '[dry] ' : '') + rel + '  ' + summary);
  if (!DRY) fs.writeFileSync(abs, text);
}

console.log('---');
console.log('Files im Scope : ' + files.length);
console.log('Files geaendert: ' + changedFiles + (DRY ? ' (dry-run, nichts geschrieben)' : ''));
for (const [k, v] of Object.entries(totals)) {
  if (v) console.log('  ' + k.padEnd(20) + v);
}
if (failures) {
  console.error('FEHLER in ' + failures + ' File(s) - siehe oben.');
  process.exit(2);
}
