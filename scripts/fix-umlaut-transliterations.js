#!/usr/bin/env node
/**
 * scripts/fix-umlaut-transliterations.js
 *
 * Einmal-Fixer für die Findings aus audit-bilingual-incidents.js
 * (Kategorie `umlaut_transliteration`). Ersetzt bekannte deutsche
 * Wörter, die mit ae/oe/ue/ss statt ä/ö/ü/ß geschrieben wurden, durch
 * ihre korrekte Form. Word-boundary, case-erhaltend (Großschreibung am
 * Anfang bleibt erhalten).
 *
 * Reichweite: nur display-relevante DE-Felder in
 * data/incidents/*.json. Source-Titles werden ausgelassen (können in
 * beliebigen Sprachen sein). Bilingual-Bundle wird NICHT überschrieben —
 * danach `node scripts/bundle-incidents.js` ausführen.
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'data', 'incidents');

// Mapping: misspelled (lowercase) → corrected (lowercase).
// Case-erhaltend ergänzt: wenn das Original mit Großbuchstaben anfängt,
// wird der Fix kapitalisiert.
const FIX_MAP = {
  // Funktionswörter
  'fur': 'für',
  'fuer': 'für',
  // führen / Führung Komposita
  'fuhrt': 'führt',
  'fuehrt': 'führt',
  'gefuhrt': 'geführt',
  'gefuehrt': 'geführt',
  'durchgefuhrt': 'durchgeführt',
  'durchgefuehrt': 'durchgeführt',
  'einfuhrung': 'einführung',
  'einfuehrung': 'einführung',
  'ausfuhrung': 'ausführung',
  'ausfuehrung': 'ausführung',
  'durchfuhrung': 'durchführung',
  'durchfuehrung': 'durchführung',
  // über-Komposita
  'gegenuber': 'gegenüber',
  'gegenueber': 'gegenüber',
  'uberstimmt': 'überstimmt',
  'ueberstimmt': 'überstimmt',
  'uberwiegend': 'überwiegend',
  'ueberwiegend': 'überwiegend',
  'uberwachung': 'überwachung',
  'ueberwachung': 'überwachung',
  'uberzahlung': 'überzahlung',
  'ueberzahlung': 'überzahlung',
  'uberzahlungen': 'überzahlungen',
  'ueberzahlungen': 'überzahlungen',
  'uberpruefung': 'überprüfung',
  'ueberpruefung': 'überprüfung',
  'uberprufung': 'überprüfung',
  'ueberprufung': 'überprüfung',
  'berucksichtigung': 'berücksichtigung',
  'beruecksichtigung': 'berücksichtigung',
  'ruckerstattung': 'rückerstattung',
  'rueckerstattung': 'rückerstattung',
  // öffentlich
  'offentlich': 'öffentlich',
  'oeffentlich': 'öffentlich',
  'offentliche': 'öffentliche',
  'oeffentliche': 'öffentliche',
  'offentlichem': 'öffentlichem',
  'oeffentlichem': 'öffentlichem',
  'offentlichen': 'öffentlichen',
  'oeffentlichen': 'öffentlichen',
  'offentlicher': 'öffentlicher',
  'oeffentlicher': 'öffentlicher',
  // Modalverben / möglich
  'moglich': 'möglich',
  'moeglich': 'möglich',
  'moglichkeit': 'möglichkeit',
  'moeglichkeit': 'möglichkeit',
  'moglichkeiten': 'möglichkeiten',
  'moeglichkeiten': 'möglichkeiten',
  'konnen': 'können',
  'koennen': 'können',
  'mussen': 'müssen',
  'muessen': 'müssen',
  'durfen': 'dürfen',
  'duerfen': 'dürfen',
  // Behörde
  'behorde': 'behörde',
  'behoerde': 'behörde',
  'behorden': 'behörden',
  'behoerden': 'behörden',
  'steuerbehorde': 'steuerbehörde',
  'steuerbehoerde': 'steuerbehörde',
  // Adjektive / Substantive
  'konigliche': 'königliche',
  'koenigliche': 'königliche',
  'koniglich': 'königlich',
  'koeniglich': 'königlich',
  'konigliches': 'königliches',
  'koenigliches': 'königliches',
  'hohepunkt': 'höhepunkt',
  'hoehepunkt': 'höhepunkt',
  'sozialverbande': 'sozialverbände',
  'sozialverbaende': 'sozialverbände',
  'anwalte': 'anwälte',
  'anwaelte': 'anwälte',
  'vollstandig': 'vollständig',
  'vollstaendig': 'vollständig',
  'zusammenbruche': 'zusammenbrüche',
  'zusammenbrueche': 'zusammenbrüche',
  'eingestandnis': 'eingeständnis',
  'eingestaendnis': 'eingeständnis',
  'privatsphare': 'privatsphäre',
  'privatsphaere': 'privatsphäre',
  'empfangern': 'empfängern',
  'empfaengern': 'empfängern',
  'schadlich': 'schädlich',
  'schaedlich': 'schädlich',
  'formliche': 'förmliche',
  'foermliche': 'förmliche',
  'emporung': 'empörung',
  'empoerung': 'empörung',
  'emporing': 'empörung',
  'zunachst': 'zunächst',
  'zunaechst': 'zunächst',
  'lucke': 'lücke',
  'luecke': 'lücke',
  'regulierungslucke': 'regulierungslücke',
  'regulierungsluecke': 'regulierungslücke',
  'gesichtszuge': 'gesichtszüge',
  'gesichtszuege': 'gesichtszüge',
  'gestutzte': 'gestützte',
  'gestuetzte': 'gestützte',
  'gestutzten': 'gestützten',
  'gestuetzten': 'gestützten',
  'gestutztem': 'gestütztem',
  'gestuetztem': 'gestütztem',
  'gestutzter': 'gestützter',
  'gestuetzter': 'gestützter',
  'gestutztes': 'gestütztes',
  'gestuetztes': 'gestütztes',
  'temporaren': 'temporären',
  'temporaeren': 'temporären',
  'temporare': 'temporäre',
  'temporaere': 'temporäre',
  'manner': 'männer',
  'maenner': 'männer',
  'fluchtling': 'flüchtling',
  'fluechtling': 'flüchtling',
  'fluchtlinge': 'flüchtlinge',
  'fluechtlinge': 'flüchtlinge',
  'fluchtlingen': 'flüchtlingen',
  'fluechtlingen': 'flüchtlingen',
  'begrundet': 'begründet',
  'begruendet': 'begründet',
  // ß-Bugs
  'abzuschliessen': 'abzuschließen',
  'grosse': 'große',
  'grossen': 'großen',
  'grosser': 'großer',
  'grosseren': 'größeren',
  'grosseres': 'größeres',
  'grosstes': 'größtes',
  'groesstes': 'größtes',
  'grosster': 'größter',
  'groesster': 'größter',
  'grossere': 'größere',
  'groessere': 'größere',
  'massnahme': 'maßnahme',
  'massnahmen': 'maßnahmen',
  // Adverbien / Konjunktionen / häufige Adjektive
  'wahrend': 'während',
  'waehrend': 'während',
  'spater': 'später',
  'spaeter': 'später',
  'haufig': 'häufig',
  'haeufig': 'häufig',
  'haufige': 'häufige',
  'haeufige': 'häufige',
  'haufigen': 'häufigen',
  'haeufigen': 'häufigen',
  'jahrlich': 'jährlich',
  'jaehrlich': 'jährlich',
  'jahrliche': 'jährliche',
  'jaehrliche': 'jährliche',
  'jahrlichen': 'jährlichen',
  'jaehrlichen': 'jährlichen',
  'taglich': 'täglich',
  'taeglich': 'täglich',
  'tagliche': 'tägliche',
  'taegliche': 'tägliche',
  'taglichen': 'täglichen',
  'taeglichen': 'täglichen',
  'kunftig': 'künftig',
  'kuenftig': 'künftig',
  'kunftige': 'künftige',
  'kuenftige': 'künftige',
  'gefahrlich': 'gefährlich',
  'gefaehrlich': 'gefährlich',
  'gefahrliche': 'gefährliche',
  'gefaehrliche': 'gefährliche',
  'gefahrlichen': 'gefährlichen',
  'gefaehrlichen': 'gefährlichen',
  'gefahrdet': 'gefährdet',
  'gefaehrdet': 'gefährdet',
  'gefahrdung': 'gefährdung',
  'gefaehrdung': 'gefährdung',
  'verstandlich': 'verständlich',
  'verstaendlich': 'verständlich',
  'willkurlich': 'willkürlich',
  'willkuerlich': 'willkürlich',
  'willkurliche': 'willkürliche',
  'willkuerliche': 'willkürliche',
  'willkurlichen': 'willkürlichen',
  'willkuerlichen': 'willkürlichen',
  'willkurlicher': 'willkürlicher',
  'willkuerlicher': 'willkürlicher',
  'unterstutzung': 'unterstützung',
  'unterstuetzung': 'unterstützung',
  'unterstutzt': 'unterstützt',
  'unterstuetzt': 'unterstützt',
  'unterstutzen': 'unterstützen',
  'unterstuetzen': 'unterstützen',
  'zugehorigkeit': 'zugehörigkeit',
  'zugehoerigkeit': 'zugehörigkeit',
  'einkunfte': 'einkünfte',
  'einkuenfte': 'einkünfte',
  'zuruckweisung': 'zurückweisung',
  'zueckweisung': 'zurückweisung',
  'zuruckweisungen': 'zurückweisungen',
  'zueckweisungen': 'zurückweisungen',
  'erhohung': 'erhöhung',
  'erhoehung': 'erhöhung',
  // unverhältnismäßig (sehr häufig falsch)
  'unverhaltnismassig': 'unverhältnismäßig',
  'unverhaltnismaessig': 'unverhältnismäßig',
  'unverhaeltnismassig': 'unverhältnismäßig',
  'unverhaeltnismaessig': 'unverhältnismäßig',
  'unverhaltnismassige': 'unverhältnismäßige',
  'unverhaltnismaessige': 'unverhältnismäßige',
  'unverhaeltnismassige': 'unverhältnismäßige',
  'unverhaeltnismaessige': 'unverhältnismäßige',
  'unverhaltnismassiger': 'unverhältnismäßiger',
  'unverhaltnismaessiger': 'unverhältnismäßiger',
  'unverhaeltnismassiger': 'unverhältnismäßiger',
  'unverhaeltnismaessiger': 'unverhältnismäßiger',
};

// Compound-Suffix-Wurzeln: matchen am Wortende (\b rechts), aber NICHT am
// Wortanfang — so dass "Grenzbehorde" / "Massenuberwachung" / "Stadtfuhrung"
// auch gefasst werden. Nur sichere Wurzeln (die nicht in anderen Wörtern als
// Substring auftreten würden).
const COMPOUND_SUFFIX_MAP = {
  'behorde': 'behörde',
  'behoerde': 'behörde',
  'behorden': 'behörden',
  'behoerden': 'behörden',
  'uberwachung': 'überwachung',
  'ueberwachung': 'überwachung',
  'fuhrung': 'führung',
  'fuehrung': 'führung',
  'fuhrungen': 'führungen',
  'fuehrungen': 'führungen',
};

// Build word-boundary regex from keys, case-insensitive.
const ALL_KEYS = Object.keys(FIX_MAP);
const FIX_RE = new RegExp('\\b(' + ALL_KEYS.join('|') + ')\\b', 'gi');

// Compound-Suffix-Regex: matched die Wurzel am Wortende, egal ob die Wurzel
// allein steht ("Behorde") oder als Suffix in einem Kompositum ("Grenzbehorde").
// Kein \b auf der linken Seite — würde Kompositum-Treffer verhindern.
const SUFFIX_KEYS = Object.keys(COMPOUND_SUFFIX_MAP);
const SUFFIX_RE = new RegExp('(' + SUFFIX_KEYS.join('|') + ')\\b', 'gi');

// Special: "Uber" + Zahl / Quantifizierer → "Über" (Präposition vor Zahl,
// nicht die Firma). Großschreibung ist case-insensitive — auch lowercase
// "uber 1,8 Millionen" wird gefasst.
const UBER_PREPOSITION_RE = /\b[Uu]ber(?=\s+(?:\d|tausend|hundert|million|milliard))/g;
// Zweites Muster: lowercase "uber" als Präposition vor regulärem Substantiv —
// "Transparenz uber Algorithmen", "Berichte uber die Lage". "Uber" mit Großbuchstabe
// wird hier NICHT gefasst, weil das die Firma sein könnte.
const UBER_PREPOSITION_LC_RE = /\buber(?=\s+(?:die|der|das|den|dem|des|ein|eine|einen|einem|einer|eines|seine|seinen|seiner|ihren|ihrer|ihre|[a-zäöüß]))/g;

function preserveCase(original, replacement) {
  // Wenn das Original mit Großbuchstaben anfängt, Ersatz kapitalisieren.
  if (original.length > 0 && original[0] === original[0].toUpperCase() && original[0] !== original[0].toLowerCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

function fixString(text) {
  if (typeof text !== 'string' || !text) return { text, changed: 0 };
  let changed = 0;
  let out = text.replace(FIX_RE, (match) => {
    const corrected = FIX_MAP[match.toLowerCase()];
    if (!corrected) return match;
    changed++;
    return preserveCase(match, corrected);
  });
  // Compound-Suffix-Pass: ersetzt nur die Wurzel, lässt den Präfix
  // (z.B. "Grenz") in "Grenzbehorde" intakt.
  out = out.replace(SUFFIX_RE, (match) => {
    const corrected = COMPOUND_SUFFIX_MAP[match.toLowerCase()];
    if (!corrected) return match;
    changed++;
    return preserveCase(match, corrected);
  });
  out = out.replace(UBER_PREPOSITION_RE, (match) => {
    changed++;
    return match[0] === 'U' ? 'Über' : 'über';
  });
  out = out.replace(UBER_PREPOSITION_LC_RE, () => { changed++; return 'über'; });
  return { text: out, changed };
}

// Felder, die geprüft werden sollen. Sources werden ausgelassen.
function walkAndFix(obj, fieldStack, stats) {
  if (obj == null) return obj;
  if (Array.isArray(obj)) {
    return obj.map((item, i) => walkAndFix(item, fieldStack.concat([`[${i}]`]), stats));
  }
  if (typeof obj === 'object') {
    const result = {};
    for (const key of Object.keys(obj)) {
      // Source-Titles auslassen.
      if (fieldStack[fieldStack.length - 1] === 'asm:sources' && (key === 'title' || key === 'title_de' || key === 'publisher')) {
        // Nur den raw title: NICHT umlautieren — kann fremdsprachig sein.
        result[key] = obj[key];
        continue;
      }
      result[key] = walkAndFix(obj[key], fieldStack.concat([key]), stats);
    }
    return result;
  }
  if (typeof obj === 'string') {
    // Nur Felder behandeln, die DE-Inhalt enthalten. Heuristik:
    // - Felder mit Suffix _de
    // - Legacy unsuffixierte Display-Felder: name, description, title
    // - affectedRights items (sind direkt in einem Array, key = "[i]")
    // - location.name, actor.name, timeline title/description
    // EN- und URL/ID-Felder auslassen.
    const lastKey = fieldStack[fieldStack.length - 1] || '';
    const isEnglish = /_en$/.test(lastKey);
    const isUrl = /url|@id|@type|@context|publisher|date|type|asm:linkHealth|asm:severity|asm:verificationLevel|asm:incidentType|asm:radarStatus|asm:radarDimensions|asm:perspective|addressCountry|latitude|longitude|asm:metadata|aiGenerated|humanVerified|author|created|lastUpdated|@vocab/.test(lastKey);
    if (isEnglish || isUrl) return obj;
    const { text: fixed, changed } = fixString(obj);
    if (changed > 0) {
      stats.fields++;
      stats.replacements += changed;
    }
    return fixed;
  }
  return obj;
}

function main() {
  const files = fs.readdirSync(DIR)
    .filter(f => f.endsWith('.json') && !f.startsWith('_'))
    .map(f => path.join(DIR, f));

  let totalFiles = 0, totalFields = 0, totalReplacements = 0;
  const changedFiles = [];

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    let obj;
    try { obj = JSON.parse(raw); } catch (e) {
      console.error(`  PARSE ERROR ${path.basename(file)}: ${e.message}`);
      continue;
    }
    const stats = { fields: 0, replacements: 0 };
    const fixed = walkAndFix(obj, [], stats);
    if (stats.replacements > 0) {
      // Re-serialize with same indentation as original (2-space).
      const out = JSON.stringify(fixed, null, 2) + '\n';
      fs.writeFileSync(file, out, 'utf8');
      changedFiles.push({ name: path.basename(file), ...stats });
      totalFiles++;
      totalFields += stats.fields;
      totalReplacements += stats.replacements;
    }
  }

  console.log(`\n=== Umlaut-Transliteration Fix Report ===`);
  console.log(`Files changed:           ${totalFiles}`);
  console.log(`Fields touched:          ${totalFields}`);
  console.log(`Total replacements:      ${totalReplacements}`);
  if (changedFiles.length) {
    console.log(`\nPer file:`);
    changedFiles.sort((a, b) => b.replacements - a.replacements);
    for (const cf of changedFiles) {
      console.log(`  ${cf.replacements.toString().padStart(4)} repl in ${cf.fields.toString().padStart(2)} fields  ${cf.name}`);
    }
  }
}

if (require.main === module) main();
