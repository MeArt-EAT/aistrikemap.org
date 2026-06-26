#!/usr/bin/env node
/**
 * validate-timelines.js — Pre-Commit-Validator fuer Reverse-Timelines.
 *
 * Kapselt die ueber 45 Wellen erprobten Pflicht-Checks vor jedem TL-Commit:
 *   - asm:reverseTimeline vorhanden, 4-6 Eintraege, genau 1 event-Phase
 *   - title === title_de, description === description_de pro Eintrag
 *   - Chronologie strikt aufsteigend INKL. monat-genau-vor-tag-genau desselben
 *     Monats (z.B. consequence "2024-05" darf nicht VOR event "2024-05-08" stehen)
 *   - @id endet auf /<dateiname-ohne-.json> (Permalink, nicht umlautiert)
 *   - asm:affectedRights === asm:affectedRights_de; _en gleiche Laenge
 *   - Smart-Chars (Em-Dash U+2014, En-Dash U+2013, typografische Quotes) in
 *     IRGENDEINEM String-Feld rekursiv (inkl. EN, name, location)
 *   - Umlaut-Gap-Scan: bekannte Translit-Map-Keys als Vollwort in DE-Feldern
 *     (sollte nach fix-umlaut 0 sein) + Verdachts-Morpheme als WARN
 *
 * Verwendung:
 *   node scripts/validate-timelines.js <slug-oder-datei> [<slug> ...]
 *   node scripts/validate-timelines.js --severity 2     # alle Sev-N MIT TL
 *   node scripts/validate-timelines.js --stdin          # Slugs/Zeile von stdin
 *
 * Exit 0 = keine ERRORs (WARNs erlaubt), Exit 1 = mindestens ein ERROR.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const INCIDENTS_DIR = path.join(__dirname, '..', 'data', 'incidents');
const MAP_PATH = path.join(__dirname, '..', 'data', 'translit-extra-map.json');

// --- Smart-Char-Codepoints ---
const SMART = {
  '—': 'EM-DASH (U+2014)',
  '–': 'EN-DASH (U+2013)',
  '‘': 'LEFT-SINGLE-QUOTE (U+2018)',
  '’': 'RIGHT-SINGLE-QUOTE (U+2019)',
  '“': 'LEFT-DOUBLE-QUOTE (U+201C)',
  '”': 'RIGHT-DOUBLE-QUOTE (U+201D)',
};
const SMART_RE = new RegExp('[' + Object.keys(SMART).join('') + ']');

// DE-Anzeigefelder fuer den Umlaut-Gap-Scan
const DE_FIELDS = new Set([
  'name', 'title', 'title_de', 'description', 'description_de',
]);

// Hochsichere Verdachts-Morpheme (Transliterationen, die fast nie legitim sind).
// Wortgrenzen-gebunden; bewusst konservativ, um false positives klein zu halten.
const SUSPECT_WORDS = [
  'fuer', 'ueber', 'koennen', 'koennte', 'muessen', 'muesste', 'wuerde',
  'gegenueber', 'fuehrt', 'fuehrte', 'gefuehrt', 'einfuehrung', 'durchfuehrung',
  'ueberwachung', 'aenderung', 'behoerde', 'behoerden', 'unterstuetzung',
  'massnahme', 'massnahmen', 'strasse', 'strassen', 'grossen', 'schliesslich',
  'aeusserung', 'aeusserungen', 'verstoss', 'verstoesse',
];
// Hinweis: 'Beschluss'/'Schluss'/'muss' sind KORREKT (ss nach kurzem Vokal),
// daher NICHT in der Verdachtsliste.
const SUSPECT_RE = new RegExp(
  '(^|[^a-zA-ZäöüÄÖÜß])(' + SUSPECT_WORDS.join('|') + ')([^a-zA-ZäöüÄÖÜß]|$)',
  'i'
);

function loadMapKeys() {
  try {
    const m = JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'));
    // Map kann {key:val} oder {mappings:{...}} sein — beide stuetzen
    const obj = m && m.mappings ? m.mappings : m;
    return Object.keys(obj).filter(k => /^[a-zA-ZäöüÄÖÜß]+$/.test(k));
  } catch (e) {
    return [];
  }
}

// --- Datums-Vergleich mit partieller Granularitaet ---
// "2024" < "2024-05" < "2024-05-14"; fehlende Komponente gilt als kleiner.
function dparts(d) {
  const m = String(d).match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/);
  if (!m) return null;
  return [parseInt(m[1], 10), m[2] ? parseInt(m[2], 10) : null, m[3] ? parseInt(m[3], 10) : null];
}
function cmpDate(a, b) {
  const A = dparts(a), B = dparts(b);
  if (!A || !B) return NaN;
  if (A[0] !== B[0]) return A[0] - B[0];
  for (let i = 1; i < 3; i++) {
    if (A[i] === null && B[i] !== null) return -1;
    if (A[i] !== null && B[i] === null) return 1;
    if (A[i] !== null && B[i] !== null && A[i] !== B[i]) return A[i] - B[i];
  }
  return 0;
}

function findSmartChars(node, pathStr, hits) {
  if (typeof node === 'string') {
    for (const ch of node) {
      if (SMART[ch]) hits.push({ path: pathStr, char: SMART[ch], context: node.slice(0, 60) });
    }
  } else if (Array.isArray(node)) {
    node.forEach((v, i) => findSmartChars(v, `${pathStr}[${i}]`, hits));
  } else if (node && typeof node === 'object') {
    for (const k of Object.keys(node)) findSmartChars(node[k], pathStr ? `${pathStr}.${k}` : k, hits);
  }
}

function arrEq(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  return a.every((v, i) => v === b[i]);
}

function resolveFile(arg) {
  let base = arg.replace(/\.json$/, '').replace(/^data\/incidents\//, '').replace(/^.*[\\/]/, '');
  return { slug: base, file: path.join(INCIDENTS_DIR, base + '.json') };
}

function listSeverity(sev) {
  const out = [];
  for (const f of fs.readdirSync(INCIDENTS_DIR)) {
    if (!f.endsWith('.json')) continue;
    try {
      const j = JSON.parse(fs.readFileSync(path.join(INCIDENTS_DIR, f), 'utf8'));
      if (String(j['asm:severity']) === String(sev) && Array.isArray(j['asm:reverseTimeline']) && j['asm:reverseTimeline'].length) {
        out.push(f.replace(/\.json$/, ''));
      }
    } catch (e) { /* skip */ }
  }
  return out;
}

function validateFile(slug, file, mapKeys) {
  const errors = [], warns = [];
  if (!fs.existsSync(file)) { errors.push(`Datei fehlt: ${file}`); return { errors, warns }; }
  let j;
  try { j = JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch (e) { errors.push(`JSON-Parse-Fehler: ${e.message}`); return { errors, warns }; }

  // @id == Permalink mit Slug
  const id = j['@id'] || '';
  if (!id.endsWith('/' + slug)) errors.push(`@id endet nicht auf /${slug}: "${id}"`);

  // affectedRights-Parallelitaet
  const ar = j['asm:affectedRights'], arDe = j['asm:affectedRights_de'], arEn = j['asm:affectedRights_en'];
  if (!Array.isArray(ar) || !ar.length) errors.push('asm:affectedRights fehlt/leer');
  else {
    if (!arrEq(ar, arDe)) errors.push('asm:affectedRights !== asm:affectedRights_de');
    if (!Array.isArray(arEn) || arEn.length !== ar.length) errors.push(`asm:affectedRights_en Laenge != ${ar.length}`);
  }

  // Timeline
  const tl = j['asm:reverseTimeline'];
  if (!Array.isArray(tl) || !tl.length) { errors.push('asm:reverseTimeline fehlt/leer'); }
  else {
    if (tl.length < 4) errors.push(`nur ${tl.length} TL-Eintraege (min 4)`);
    if (tl.length > 6) errors.push(`${tl.length} TL-Eintraege (max 6)`);

    const events = tl.filter(e => e.phase === 'event');
    if (events.length !== 1) errors.push(`${events.length} event-Phasen (genau 1 erwartet)`);
    const VALID_PHASES = new Set(['infrastructure', 'doctrine', 'event', 'consequences']);
    tl.forEach((e, i) => {
      if (!VALID_PHASES.has(e.phase)) errors.push(`Eintrag ${i}: unbekannte Phase "${e.phase}"`);
      if (e.title !== e.title_de) errors.push(`Eintrag ${i}: title !== title_de`);
      if (e.description !== e.description_de) errors.push(`Eintrag ${i}: description !== description_de`);
      if (dparts(e.date) === null) errors.push(`Eintrag ${i}: ungueltiges Datum "${e.date}"`);
    });

    // Chronologie strikt aufsteigend
    for (let i = 1; i < tl.length; i++) {
      const c = cmpDate(tl[i - 1].date, tl[i].date);
      if (Number.isNaN(c)) continue;
      if (c > 0) errors.push(`Chronologie absteigend: [${i - 1}] ${tl[i - 1].date} (${tl[i - 1].phase}) > [${i}] ${tl[i].date} (${tl[i].phase})`);
      else if (c === 0) warns.push(`gleiches Datum [${i - 1}]/[${i}] ${tl[i].date} (akzeptabel wenn real)`);
    }
  }

  // Smart-Chars rekursiv ueber das ganze File
  const smartHits = [];
  findSmartChars(j, '', smartHits);
  for (const h of smartHits) errors.push(`Smart-Char ${h.char} in ${h.path}: "${h.context}"`);

  // Umlaut-Gap-Scan ueber DE-Felder (rekursiv nur DE-Schluessel)
  const deBlobs = [];
  (function collect(node) {
    if (Array.isArray(node)) node.forEach(collect);
    else if (node && typeof node === 'object') {
      for (const k of Object.keys(node)) {
        if (DE_FIELDS.has(k) && typeof node[k] === 'string') deBlobs.push(node[k]);
        else collect(node[k]);
      }
    }
  })(j);
  if (Array.isArray(ar)) ar.forEach(s => deBlobs.push(s));
  const deText = deBlobs.join('  ');
  // bekannte Map-Keys als Vollwort -> ERROR (fix-umlaut haette sie loesen muessen)
  const mapHit = mapKeys.filter(k => new RegExp('(^|[^a-zA-ZäöüÄÖÜß])' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^a-zA-ZäöüÄÖÜß]|$)').test(deText));
  for (const k of mapHit.slice(0, 8)) errors.push(`Translit-Map-Wort "${k}" un-gefixt in DE-Feld`);
  // unbekannte Verdachts-Morpheme -> WARN
  const sm = deText.match(SUSPECT_RE);
  if (sm) warns.push(`Verdachts-Transliteration nahe "${sm[2]}" in DE-Feld (manuell pruefen)`);
  // doppelte Umlaute (Korruption durch Ueber-Regex)
  if (/[äöü]{2}/.test(deText)) warns.push('doppelter Umlaut [äöü]{2} in DE-Feld (moegliche Regex-Korruption)');

  return { errors, warns };
}

function main() {
  const argv = process.argv.slice(2);
  let slugs = [];
  if (argv[0] === '--severity') {
    slugs = listSeverity(argv[1]);
  } else if (argv[0] === '--stdin') {
    const data = fs.readFileSync(0, 'utf8');
    slugs = data.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  } else {
    slugs = argv.filter(a => !a.startsWith('--'));
  }
  if (!slugs.length) { console.error('Keine Slugs. Nutzung: validate-timelines.js <slug...> | --severity N | --stdin'); process.exit(2); }

  const mapKeys = loadMapKeys();
  let nErr = 0, nWarn = 0, nClean = 0;
  const failed = [];
  for (const arg of slugs) {
    const { slug, file } = resolveFile(arg);
    const { errors, warns } = validateFile(slug, file, mapKeys);
    if (errors.length) {
      nErr += errors.length; failed.push(slug);
      console.log(`\n✗ ${slug}`);
      errors.forEach(e => console.log(`    ERROR ${e}`));
      warns.forEach(w => console.log(`    warn  ${w}`));
    } else if (warns.length) {
      nWarn += warns.length; nClean++;
      console.log(`\n⚠ ${slug}`);
      warns.forEach(w => console.log(`    warn  ${w}`));
    } else {
      nClean++;
    }
  }
  console.log(`\n--- ${slugs.length} geprueft: ${nClean} ohne ERROR, ${failed.length} mit ERROR (${nErr} ERRORs, ${nWarn} WARNs) ---`);
  if (failed.length) console.log('FAIL: ' + failed.join(' '));
  process.exit(failed.length ? 1 : 0);
}

main();
