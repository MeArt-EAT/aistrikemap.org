#!/usr/bin/env node
/**
 * scripts/audit-i18n.js
 *
 * Automatisierter Audit für die i18n-Vollständigkeit der HTML-Seiten. CLAUDE.md
 * verlangt volle Abdeckung: jeder nutzersichtbare String braucht ein
 * `data-i18n`-Attribut und einen Key in BEIDEN `i18n/de.json` und
 * `i18n/en.json`. Hartcodierter deutscher Text im Markup ist ein Bug.
 * Schreibt einen Report nach `audit-i18n-report.md`, gibt eine knappe
 * Zusammenfassung auf stdout aus und endet mit Exit 1, sobald es Befunde gibt.
 *
 * Geprüft wird:
 *  - Key-Parität: jeder Key existiert in de.json UND en.json, kein Wert leer.
 *  - Referenz-Integrität: jeder in einer HTML-Seite über data-i18n* benannte
 *    Key existiert in beiden JSONs.
 *  - Hartcodierter sichtbarer Text: Textknoten, die weder selbst noch über
 *    einen Vorfahren von `data-i18n` / `data-i18n-html` abgedeckt sind.
 *  - Übersetzbare Attribute ohne data-i18n-Pendant: aria-label, title,
 *    placeholder, alt sowie `content` von übersetzbaren Meta-Tags.
 *
 * Nur als HINWEIS gemeldet (kein Exit-Code, Ermessensfrage):
 *  - Keys mit identischem DE- und EN-Wert (bei Fachtermini und Produktnamen
 *    korrekt, sonst womöglich unübersetzt).
 *  - Keys ohne HTML-Referenz (der Großteil wird aus JS heraus genutzt,
 *    z. B. severity.N, verification.N, type.* — kein Fehler per se).
 *
 * Bewusst NICHT als Befund gewertet (siehe NEUTRAL/EIGENNAMEN/META_I18N unten):
 *  - Marke (AI + StrikeMap), Sprachschalter DE/EN, ISO-Ländercodes,
 *    Lizenzkürzel, Eigennamen der Datenquellen, technische Feed-Begriffe.
 *  - `content` von og:url / og:type / og:image / twitter:card — das sind
 *    maschinenlesbare Open-Graph-Angaben und dürfen nicht übersetzt werden.
 *    Gefiltert wird über den Meta-Namen, nicht über den Wert.
 *
 * Usage:
 *   node scripts/audit-i18n.js            # Audit, Exit 1 bei Befunden
 *   node scripts/audit-i18n.js --quiet    # nur die Summenzeile
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const QUIET = process.argv.includes('--quiet');
const REPORT = path.join(ROOT, 'audit-i18n-report.md');

// --- von js/i18n.js unterstützte Attribute ---
const I18N_ATTRS = ['data-i18n', 'data-i18n-html', 'data-i18n-aria',
                    'data-i18n-title', 'data-i18n-placeholder', 'data-i18n-content'];
// data-i18n-Attribut -> echtes Attribut, das es setzt
const ATTR_TARGET = {
  'data-i18n-aria': 'aria-label',
  'data-i18n-title': 'title',
  'data-i18n-placeholder': 'placeholder',
  'data-i18n-content': 'content',
};
// Meta-Tags, deren content übersetzt gehört. Alles andere (og:url, og:type,
// og:image, twitter:card, twitter:image, viewport, charset ...) ist Maschinendaten.
const META_I18N = new Set(['description', 'og:title', 'og:description',
                           'og:site_name', 'twitter:title', 'twitter:description']);

// Sprachneutrale Strings: Marke, Sprachschalter, ISO-Codes, Lizenzkürzel,
// technische Begriffe. Vollwort-Vergleich.
const NEUTRAL = new Set([
  'AI', 'StrikeMap', 'DE', 'EN', 'Feed', 'RSS Feed', 'Atom Feed',
  'AIStrikeMap Radar Feed', 'kontakt@aistrikemap.org',
  'CC0 1.0', 'CC BY 4.0', 'OGL v3', 'DL-DE BY 2.0', 'OECD T C',
  'US Government Works', 'Academic / fair use', 'Etalab Open Licence 2.0',
  'Statistics Canada Open Licence', 'CBS Open Data',
]);
// ISO-3166-Alpha-2 in Tabellen/Options (DE, US, UK, FR, CA, NL, SE, AU ...)
const ISO_CODE = /^[A-Z]{2}$/;
// Eigennamen von Datenquellen und Studien - in beiden Sprachen identisch zu
// zitieren ist korrekt, nicht ein Übersetzungsversäumnis.
const EIGENNAMEN = [
  'IAB Substituierbarkeitspotenzial', 'BLS Employment Projections',
  'ONS Probability of Automation', 'France Stratégie', 'Statistics Canada AI',
  'CBS AI-monitor', 'Arbetsförmedlingen', 'Jobs and Skills Australia',
  'OECD Lassébie', 'Frey/Osborne 2013', 'WEF Future of Jobs',
];

function istNeutral(txt) {
  if (NEUTRAL.has(txt) || ISO_CODE.test(txt)) return true;
  return EIGENNAMEN.some(e => txt.startsWith(e));
}

// --- Parser ---
// Entfernte Bereiche werden durch gleich lange Leerzeichen ersetzt und
// Zeilenumbrüche erhalten. Ein echtes strip() verschiebt alle Zeilennummern
// gegen die Originaldatei und macht die Fundstellen unbrauchbar.
const blank = m => m.replace(/[^\n]/g, ' ');
function maskieren(s) {
  return s.replace(/<!--[\s\S]*?-->/g, blank)
          .replace(/<script\b[\s\S]*?<\/script>/gi, blank)
          .replace(/<style\b[\s\S]*?<\/style>/gi, blank)
          .replace(/<!DOCTYPE[^>]*>/gi, blank);
}
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
                      'link', 'meta', 'param', 'source', 'track', 'wbr']);

function analysiere(file, raw) {
  const text = maskieren(raw);
  const zeile = idx => text.slice(0, idx).split('\n').length;
  const refs = [], hardcoded = [], attrLuecken = [];
  const stack = [];
  const TAG = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g;
  let last = 0, m;

  const textKnoten = (chunk, at) => {
    if (stack.some(s => s.covered)) return;
    const clean = chunk.replace(/&[a-z]+;|&#\d+;/gi, ' ').replace(/\s+/g, ' ').trim();
    if (!clean || !/[A-Za-zÄÖÜäöüß]{2}/.test(clean)) return;
    if (istNeutral(clean)) return;
    hardcoded.push({ file, line: zeile(at), text: clean.slice(0, 100) });
  };

  while ((m = TAG.exec(text))) {
    textKnoten(text.slice(last, m.index), last);
    last = TAG.lastIndex;
    const slash = m[1], tag = m[2].toLowerCase(), attrRaw = m[3];

    if (slash) {
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].tag === tag) { stack.length = i; break; }
      }
      continue;
    }

    // ACHTUNG: die Zeichenklasse MUSS Ziffern enthalten - "data-i18n" enthält
    // 1 und 8. Ohne 0-9 wird der Name als "data-i" gelesen, nichts gilt als
    // abgedeckt und der Audit meldet hunderte Falsch-Positive.
    const attrs = {};
    const A = /([a-zA-Z0-9-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
    let a;
    while ((a = A.exec(attrRaw))) {
      attrs[a[1].toLowerCase()] = a[2] !== undefined ? a[2]
        : a[3] !== undefined ? a[3] : (a[4] !== undefined ? a[4] : '');
    }
    for (const at of I18N_ATTRS) if (attrs[at]) refs.push(attrs[at]);

    for (const dataAttr of Object.keys(ATTR_TARGET)) {
      const real = ATTR_TARGET[dataAttr];
      const v = attrs[real];
      if (!v || attrs[dataAttr]) continue;
      if (!/[A-Za-zÄÖÜäöüß]{3}/.test(v) || istNeutral(v)) continue;
      if (real === 'content' && !META_I18N.has(attrs.name || attrs.property || '')) continue;
      attrLuecken.push({ file, line: zeile(m.index), tag, attr: real, val: v.slice(0, 80) });
    }
    if (attrs.alt && /[A-Za-zÄÖÜäöüß]{3}/.test(attrs.alt) && !istNeutral(attrs.alt)) {
      attrLuecken.push({ file, line: zeile(m.index), tag, attr: 'alt', val: attrs.alt.slice(0, 80) });
    }

    if (!(/\/\s*$/.test(attrRaw) || VOID.has(tag))) {
      stack.push({ tag, covered: !!(attrs['data-i18n'] || attrs['data-i18n-html']) });
    }
  }
  textKnoten(text.slice(last), last);
  return { refs, hardcoded, attrLuecken };
}

// --- Audit ---
const de = JSON.parse(fs.readFileSync(path.join(ROOT, 'i18n/de.json'), 'utf8'));
const en = JSON.parse(fs.readFileSync(path.join(ROOT, 'i18n/en.json'), 'utf8'));
const seiten = fs.readdirSync(ROOT).filter(f => f.endsWith('.html')).sort();

const nurDe = Object.keys(de).filter(k => !(k in en));
const nurEn = Object.keys(en).filter(k => !(k in de));
const leer = [...Object.keys(de), ...Object.keys(en)]
  .filter((k, i, arr) => arr.indexOf(k) === i)
  .filter(k => (typeof de[k] === 'string' && !de[k].trim()) ||
               (typeof en[k] === 'string' && !en[k].trim()));

const refs = new Set();
let hardcoded = [], attrLuecken = [];
for (const f of seiten) {
  const r = analysiere(f, fs.readFileSync(path.join(ROOT, f), 'utf8'));
  r.refs.forEach(k => refs.add(k));
  hardcoded = hardcoded.concat(r.hardcoded);
  attrLuecken = attrLuecken.concat(r.attrLuecken);
}
const fehlendeRefs = [...refs].filter(k => !(k in de) || !(k in en));

// Hinweise (ohne Exit-Code)
const identisch = Object.keys(de).filter(k => k in en && typeof de[k] === 'string'
  && de[k] === en[k] && de[k].length > 14 && /[a-zA-Z]{4}/.test(de[k]));
const ohneRef = Object.keys(de).filter(k => !refs.has(k));

const befunde = nurDe.length + nurEn.length + leer.length +
                fehlendeRefs.length + hardcoded.length + attrLuecken.length;

// --- Report ---
const R = [];
R.push('# i18n-Audit-Report');
R.push('');
R.push('Erzeugt von `scripts/audit-i18n.js`. ' + seiten.length + ' HTML-Seiten, ' +
       Object.keys(de).length + ' Keys (de) / ' + Object.keys(en).length + ' (en).');
R.push('');
R.push('## Befunde: ' + befunde);
R.push('');
const block = (titel, zeilen) => {
  R.push('### ' + titel + ': ' + zeilen.length);
  if (zeilen.length) { R.push(''); zeilen.forEach(z => R.push('- ' + z)); }
  R.push('');
};
block('Keys nur in de.json', nurDe);
block('Keys nur in en.json', nurEn);
block('Keys mit leerem Wert', leer);
block('In HTML referenziert, in einer JSON fehlend', fehlendeRefs.map(k =>
  '`' + k + '` (de: ' + (k in de ? 'ja' : 'NEIN') + ', en: ' + (k in en ? 'ja' : 'NEIN') + ')'));
block('Hartcodierter sichtbarer Text', hardcoded.map(h =>
  '`' + h.file + ':' + h.line + '` — ' + JSON.stringify(h.text)));
block('Übersetzbare Attribute ohne data-i18n-Pendant', attrLuecken.map(h =>
  '`' + h.file + ':' + h.line + '` — `<' + h.tag + ' ' + h.attr + '>` ' + JSON.stringify(h.val)));
R.push('## Hinweise (kein Befund, Ermessensfrage)');
R.push('');
R.push('### Identischer DE/EN-Wert, über 14 Zeichen: ' + identisch.length);
R.push('');
identisch.forEach(k => R.push('- `' + k + '` = ' + JSON.stringify(de[k].slice(0, 80))));
R.push('');
R.push('### Keys ohne HTML-Referenz: ' + ohneRef.length);
R.push('');
R.push('Der Großteil wird aus JS heraus genutzt (`severity.N`, `verification.N`,');
R.push('`type.*`, Radar- und Career-Labels) — kein Fehler per se.');
R.push('');
fs.writeFileSync(REPORT, R.join('\n') + '\n');

// --- stdout, knapp ---
const L = s => { if (!QUIET) console.log(s); };
L('=== i18n-Audit ===');
L('Seiten: ' + seiten.length + '   Keys: de ' + Object.keys(de).length +
  ' / en ' + Object.keys(en).length);
L('');
L('  Keys nur in de.json           : ' + nurDe.length);
L('  Keys nur in en.json           : ' + nurEn.length);
L('  Keys mit leerem Wert          : ' + leer.length);
L('  Referenziert, aber nicht da   : ' + fehlendeRefs.length);
L('  Hartcodierter Text            : ' + hardcoded.length);
L('  Attribute ohne data-i18n      : ' + attrLuecken.length);
L('');
if (hardcoded.length) {
  L('Hartcodiert:');
  hardcoded.slice(0, 20).forEach(h => L('  ' + h.file + ':' + h.line + '  ' + JSON.stringify(h.text.slice(0, 70))));
  if (hardcoded.length > 20) L('  ... ' + (hardcoded.length - 20) + ' weitere, siehe Report');
  L('');
}
if (attrLuecken.length) {
  L('Attribute:');
  attrLuecken.slice(0, 20).forEach(h => L('  ' + h.file + ':' + h.line + '  ' + h.attr + '=' + JSON.stringify(h.val.slice(0, 60))));
  if (attrLuecken.length > 20) L('  ... ' + (attrLuecken.length - 20) + ' weitere, siehe Report');
  L('');
}
console.log('Befunde: ' + befunde + '   Hinweise: ' + identisch.length +
            ' identische DE/EN-Werte, ' + ohneRef.length + ' Keys ohne HTML-Referenz');
L('Report: ' + path.relative(ROOT, REPORT));
process.exit(befunde ? 1 : 0);
