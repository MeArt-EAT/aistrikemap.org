#!/usr/bin/env node
/**
 * scripts/audit-bilingual-incidents.js
 *
 * Automatisierter Audit für die bilinguale Incident-Migration. Prüft jede
 * Incident-Datei auf strukturelle und semantische Plausibilität der englischen
 * Übersetzungen. Schreibt einen Report nach `audit-translation-report.md` und
 * gibt eine Zusammenfassung auf stdout aus.
 *
 * Geprüft wird pro Datei:
 *  - Strukturell: existiert für jedes *_de Feld ein *_en Feld?
 *  - Array-Länge: affectedRights_de und _en müssen identische Länge haben.
 *  - Sprachprüfung (German leakage): EN-Feld enthält Umlaute außerhalb von
 *    Eigennamen-Token, ODER ≥2 verschiedene deutsche Funktionswörter
 *    (der/die/das/und/ist/von/mit/durch/...). Inhalte in Klammern, eckigen
 *    Klammern und Zitaten werden vorher entfernt — diese sind durch das
 *    Glossar (Prinzipien #3 und #4) ausdrücklich als deutsche Inhalte
 *    erlaubt (Glossen + Originalzitate).
 *  - identische DE=EN-Strings ab 16 Zeichen, aber nur wenn der Inhalt nach
 *    der gleichen Heuristik "deutsch wirkt" (sonst sind es Eigennamen oder
 *    englische Source-Titles, die legitim identisch sind).
 *  - Eigennamen-Erhaltung: Whitelist-Eigennamen aus dem Glossar, die im
 *    _de-Feld stehen, müssen auch im _en-Feld vorkommen — verbatim, als
 *    registrierte Acronym-Expansion (EU → "European Union" / "European "),
 *    oder innerhalb einer Klammer-Glosse. Word-Boundary-Matching verhindert
 *    Substring-Fehlalarme (Uber matched nicht in "Uberwachung").
 *  - Längen-Plausibilität: länge_en / länge_de muss zwischen 0.5 und 2.5 liegen.
 *  - Umlaut-Transliterationen in DE-Feldern: nach CLAUDE.md muss angezeigtes
 *    Deutsch echte Umlaute (ä/ö/ü/ß) verwenden, nie ae/oe/ue/ss. Eine kuratierte
 *    Wortliste flaggt bekannte Transliterations-Bugs (fur, uberstimmt,
 *    offentlich, Konigliche, gestutzte, abzuschliessen, ...). Source-Titles
 *    werden ausgenommen, weil sie in beliebigen Sprachen sein können.
 *  - Source-Titles werden NICHT auf Leakage, Identität oder Transliteration
 *    geprüft, weil sie Original-Artikel-Titel in beliebigen Sprachen (EN, FR,
 *    ES, …) sind.
 *
 * Verdachtsfälle werden gesammelt, NICHT die sauberen Files.
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'data', 'incidents');
const GLOSSARY = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'translation-glossary.json'), 'utf8'));
const PROPER_NAMES = GLOSSARY.proper_names_keep_unchanged || [];

// German function words. Each word alone is too weak a signal (false positives
// against French ("des" in "Ligue des Droits Humains"), English ("Die" in "This
// is What We Die For"), Spanish, and embedded proper-name particles). The
// leakage check requires ≥2 DIFFERENT function words to fire, which catches
// genuine "translator left a German sentence in" cases while tolerating one
// stray foreign-particle false positive.
const GERMAN_FUNCTION_WORDS = [
  'der', 'die', 'das', 'ein', 'eine', 'einem', 'einen', 'einer',
  'ist', 'sind', 'und', 'oder', 'aber',
  'zum', 'zur', 'von', 'mit', 'nach', 'auch', 'durch',
  'im', 'dem', 'den', 'des',
  'nicht', 'werden', 'wurde', 'wurden',
  'müssen', 'können', 'sollen'
];
const GERMAN_FW_RES = GERMAN_FUNCTION_WORDS.map(function (w) {
  return new RegExp('\\b' + w + '\\b', 'i');
});
const UMLAUT_RE = /[äöüÄÖÜß]/;
const UMLAUT_RE_G = /[äöüÄÖÜß]/g;

// Curated list of German words that, when found in a DE field, are CLAUDE.md
// orthography bugs (umlauts/ß transliterated as ae/oe/ue/ss). Not exhaustive —
// extend when new patterns surface. Case-insensitive, word-boundary matched, so
// "Fur"/"FUR"/"fur" all hit, and "ueberwachung" matches inside "KI-Überwachung"
// style hyphenated compounds. "uber" alone is NOT included because it collides
// with the company name (Uber); for the standalone-preposition case we use a
// separate "Uber + digit" check (e.g. "Uber 700 Unternehmen").
const TRANSLITERATED_GERMAN_WORDS = [
  // Funktionswörter
  'fur', 'fuer',
  // führen / Führung Komposita
  'fuhrt', 'fuehrt',
  'gefuhrt', 'gefuehrt',
  'durchgefuhrt', 'durchgefuehrt',
  'einfuhrung', 'einfuehrung',
  'ausfuhrung', 'ausfuehrung',
  'durchfuhrung', 'durchfuehrung',
  // über-Komposita
  'gegenuber', 'gegenueber',
  'uberstimmt', 'ueberstimmt',
  'uberwiegend', 'ueberwiegend',
  'uberwachung', 'ueberwachung',
  'uberzahlung', 'ueberzahlung',
  'uberzahlungen', 'ueberzahlungen',
  'uberpruefung', 'ueberpruefung',
  'uberprufung', 'ueberprufung',
  'berucksichtigung', 'beruecksichtigung',
  'ruckerstattung', 'rueckerstattung',
  // öffentlich
  'offentlich', 'oeffentlich',
  'offentliche', 'oeffentliche',
  'offentlichem', 'oeffentlichem',
  'offentlichen', 'oeffentlichen',
  'offentlicher', 'oeffentlicher',
  // Modalverben / möglich
  'moglich', 'moeglich',
  'moglichkeit', 'moeglichkeit',
  'moglichkeiten', 'moeglichkeiten',
  'konnen', 'koennen',
  'mussen', 'muessen',
  'durfen', 'duerfen',
  // Behörde
  'behorde', 'behoerde',
  'behorden', 'behoerden',
  'steuerbehorde', 'steuerbehoerde',
  // Adjektive / Substantive
  'konigliche', 'koenigliche',
  'koniglich', 'koeniglich',
  'konigliches', 'koenigliches',
  'hohepunkt', 'hoehepunkt',
  'sozialverbande', 'sozialverbaende',
  'anwalte', 'anwaelte',
  'vollstandig', 'vollstaendig',
  'zusammenbruche', 'zusammenbrueche',
  'eingestandnis', 'eingestaendnis',
  'privatsphare', 'privatsphaere',
  'empfangern', 'empfaengern',
  'schadlich', 'schaedlich',
  'formliche', 'foermliche',
  'emporung', 'empoerung',
  'emporing', // Tippfehler-Variante von "Empörung"
  'zunachst', 'zunaechst',
  'lucke', 'luecke',
  'regulierungslucke', 'regulierungsluecke',
  'gesichtszuge', 'gesichtszuege',
  'gestutzte', 'gestuetzte',
  'gestutzten', 'gestuetzten', 'gestutztem', 'gestuetztem',
  'gestutzter', 'gestuetzter', 'gestutztes', 'gestuetztes',
  'temporaren', 'temporaeren', 'temporare', 'temporaere',
  'manner', 'maenner',
  'fluchtling', 'fluechtling',
  'fluchtlinge', 'fluechtlinge',
  'fluchtlingen', 'fluechtlingen',
  'begrundet', 'begruendet',
  // ß-Bugs
  'abzuschliessen',
  'grosse', 'grossen', 'grosser', 'grosseren', 'grosseres',
  'grosstes', 'groesstes', 'grosster', 'groesster',
  'grossere', 'groessere',
  'massnahme', 'massnahmen',
  // Adverbien / Konjunktionen / häufige Adjektive
  'wahrend', 'waehrend',
  'spater', 'spaeter',
  'haufig', 'haeufig', 'haufige', 'haeufige', 'haufigen', 'haeufigen',
  'jahrlich', 'jaehrlich', 'jahrliche', 'jaehrliche',
  'jahrlichen', 'jaehrlichen',
  'taglich', 'taeglich', 'tagliche', 'taegliche',
  'taglichen', 'taeglichen',
  'kunftig', 'kuenftig', 'kunftige', 'kuenftige',
  'gefahrlich', 'gefaehrlich', 'gefahrliche', 'gefaehrliche',
  'gefahrlichen', 'gefaehrlichen',
  'gefahrdet', 'gefaehrdet',
  'gefahrdung', 'gefaehrdung',
  'verstandlich', 'verstaendlich',
  'willkurlich', 'willkuerlich',
  'willkurliche', 'willkuerliche',
  'willkurlichen', 'willkuerlichen',
  'willkurlicher', 'willkuerlicher',
  'unterstutzung', 'unterstuetzung',
  'unterstutzt', 'unterstuetzt',
  'unterstutzen', 'unterstuetzen',
  'zugehorigkeit', 'zugehoerigkeit',
  'einkunfte', 'einkuenfte',
  'zuruckweisung', 'zueckweisung',
  'zuruckweisungen', 'zueckweisungen',
  'erhohung', 'erhoehung',
  'unverhaltnismassig', 'unverhaltnismaessig',
  'unverhaeltnismassig', 'unverhaeltnismaessig',
  'unverhaltnismassige', 'unverhaltnismaessige',
  'unverhaeltnismassige', 'unverhaeltnismaessige',
  'unverhaltnismassiger', 'unverhaltnismaessiger',
  'unverhaeltnismassiger', 'unverhaeltnismaessiger',
  // Weitere häufige Wörter
  'turkei', 'tuerkei',
  'lander', 'laender',
  'prufen', 'pruefen', 'pruft', 'prueft', 'pruefung', 'prufung',
  'ahnlich', 'aehnlich', 'ahnliche', 'aehnliche',
  'ahnlichen', 'aehnlichen', 'ahnlicher', 'aehnlicher',
  'falle', 'faelle', 'fallen', 'faellen',
  'aufgespurt', 'aufgespuert',
  'bemangeln', 'bemaengeln', 'bemangelt', 'bemaengelt',
  'uberwacht', 'ueberwacht',
  'verdachtig', 'verdaechtig',
  'verdachtige', 'verdaechtige',
  'verdachtigen', 'verdaechtigen',
  'ruckforderung', 'rueckforderung',
  'ruckforderungen', 'rueckforderungen',
  // Tippfehler im Originalkorpus
  'unverhaltnisamssig', 'unverhaltnisamssige',
  'unverhaltnisamssiger', 'unverhaltnisamssiges',
  'sozioonomisch', 'sozioonomische',
  'sozioonomischen', 'sozioonomischer',
  'verlangerer', 'verlanger',
  'gerubmtes', 'geruhmtes', 'gerubmt', 'geruhmt',
  // Long-tail Wörter
  'verlangert', 'verlaengert', 'verlangerte', 'verlaengerte',
  'verlangerten', 'verlaengerten',
  'verfugbar', 'verfuegbar', 'verfugbare', 'verfuegbare',
  'erklart', 'erklaert', 'erklarte', 'erklaerte',
  'erklarten', 'erklaerten',
  'verhangt', 'verhaengt', 'verhangte', 'verhaengte',
  'verhangen', 'verhaengen',
  'verzogert', 'verzoegert', 'verzogerte', 'verzoegerte',
  'dunkelhautig', 'dunkelhaeutig',
  'dunkelhautige', 'dunkelhaeutige',
  'dunkelhautiger', 'dunkelhaeutiger',
  'dunkelhautigen', 'dunkelhaeutigen',
  'einjahrig', 'einjaehrig', 'einjahrige', 'einjaehrige',
  'einjahriges', 'einjaehriges', 'einjahrigen', 'einjaehrigen',
  // Welle 3
  'mannern', 'maennern',
  'ursprunglich', 'urspruenglich',
  'ursprungliche', 'urspruengliche',
  'ursprunglichen', 'urspruenglichen',
  'ursprunglicher', 'urspruenglicher',
  'hellhautig', 'hellhaeutig',
  'hellhautige', 'hellhaeutige',
  'hellhautigen', 'hellhaeutigen',
  'hellhautiger', 'hellhaeutiger',
  'ladt', 'laedt',
  'ankundigung', 'ankuendigung',
  'ankundigungen', 'ankuendigungen',
  'bewaltigen', 'bewaeltigen',
  'bewaltigt', 'bewaeltigt',
  'bewaltigung', 'bewaeltigung',
  'fluchtig', 'fluechtig',
  'fluchtige', 'fluechtige',
  'begunstigt', 'beguenstigt',
  'begunstigen', 'beguenstigen',
  'begunstigung', 'beguenstigung',
  'standig', 'staendig',
  'standige', 'staendige',
  'standigen', 'staendigen',
  'standiger', 'staendiger',
  'fruh', 'frueh', 'fruhe', 'fruehe', 'fruhen', 'fruehen',
  'fruher', 'frueher', 'fruhes',
  'verfugung', 'verfuegung', 'verfugungen', 'verfuegungen',
];
// Compound-Suffix-Wurzeln: matchen am Wortende, egal ob die Wurzel allein
// steht ("Behorde") oder als Suffix in einem Kompositum ("Grenzbehorde",
// "Massenueberwachung"). Nur sichere Wurzeln, die nicht zufällig in anderen
// Wörtern auftreten würden.
const TRANSLITERATED_COMPOUND_ROOTS = [
  'behorde', 'behoerde', 'behorden', 'behoerden',
  'uberwachung', 'ueberwachung',
  'fuhrung', 'fuehrung', 'fuhrungen', 'fuehrungen',
  'horigkeit', 'hoerigkeit',
  'verbande', 'verbaende',
  'anhorung', 'anhoerung', 'anhorungen', 'anhoerungen',
  'angehorige', 'angehoerige',
  'angehorigen', 'angehoerigen',
  'angehoriger', 'angehoeriger',
  'ubertritt', 'uebertritt',
  'ubertritte', 'uebertritte',
];
// Korpus-Sweep 2026-06-19: Workflow-validierte Transliterationen aus der GEMEINSAMEN
// Quelle data/translit-extra-map.json (synchron mit fix-umlaut-transliterations.js).
const EXTRA_TRANSLITERATED = (() => {
  try {
    return Object.keys(JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'translit-extra-map.json'), 'utf8')));
  } catch (e) { return []; }
})();
const ALL_TRANSLITERATED = TRANSLITERATED_GERMAN_WORDS.concat(EXTRA_TRANSLITERATED);
const TRANSLITERATION_RE = new RegExp(
  '\\b(?:' + ALL_TRANSLITERATED.join('|') + ')\\b',
  'gi'
);
const COMPOUND_TRANSLITERATION_RE = new RegExp(
  '(?:' + TRANSLITERATED_COMPOUND_ROOTS.join('|') + ')\\b',
  'gi'
);
// "Uber" as a standalone German preposition (= "Über") almost always shows up
// followed by a digit or quantifier in our data — "Uber 100 Fälle",
// "Uber 1,8 Milliarden". The company "Uber" instead occurs in proper-noun
// contexts ("Uber Technologies", "Uber Eats"). Tighten to digit/quantifier
// follow-up to keep false positives off the company name.
// Unicode-Boundary statt ASCII-\b: sonst greift "uber" auch nach einem Umlaut
// (z.B. in "Räuber", "Saeuberung"->"Säuberung") und erzeugt Falsch-Positive.
const UBER_PREPOSITION_RE = /(?<![A-Za-zÄÖÜäöüß0-9_])[Uu]ber\s+(?:\d|tausend|hundert|million|milliard)/g;
const UBER_PREPOSITION_LC_RE = /(?<![A-Za-zÄÖÜäöüß0-9_])uber\s+(?:die|der|das|den|dem|des|ein|eine|einen|einem|einer|eines|seine|seinen|seiner|ihren|ihrer|ihre|[a-zäöüßA-ZÄÖÜ])/g;
// Generelles "[Uu]ber + Lowercase" → "[Üü]ber" + Rest. Spiegelt UBER_COMPOUND_RE
// im Fixer-Script, damit das Audit dieselbe Klasse erkennt.
const UBER_COMPOUND_RE = /(?<![A-Za-zÄÖÜäöüß0-9_])[Uu]ber[a-zäöüß]{2,}(?![A-Za-zÄÖÜäöüß0-9_])/g;

function findTransliterations(text) {
  if (typeof text !== 'string' || !text) return [];
  const matches = new Set();
  let m;
  TRANSLITERATION_RE.lastIndex = 0;
  while ((m = TRANSLITERATION_RE.exec(text)) !== null) {
    matches.add(m[0]);
  }
  COMPOUND_TRANSLITERATION_RE.lastIndex = 0;
  while ((m = COMPOUND_TRANSLITERATION_RE.exec(text)) !== null) {
    matches.add(m[0]);
  }
  UBER_PREPOSITION_RE.lastIndex = 0;
  while ((m = UBER_PREPOSITION_RE.exec(text)) !== null) {
    matches.add(m[0].split(/\s+/)[0]); // just the "Uber"/"uber" token
  }
  UBER_PREPOSITION_LC_RE.lastIndex = 0;
  while ((m = UBER_PREPOSITION_LC_RE.exec(text)) !== null) {
    matches.add('uber');
  }
  UBER_COMPOUND_RE.lastIndex = 0;
  while ((m = UBER_COMPOUND_RE.exec(text)) !== null) {
    matches.add(m[0]);
  }
  return Array.from(matches);
}
// Capitalized token containing an umlaut — likely a proper noun the translator
// kept verbatim ("Berlin Südkreuz", "Ürümqi", "Mühendislik"). We can't use \b
// because JavaScript regex without the /u flag treats umlauts as non-word
// characters, so we use explicit non-letter boundaries (string-start or any
// char that is not a Latin letter / umlaut).
const NON_LETTER = '[^A-Za-zÄÖÜäöüß]';
const CAPITALIZED_TOKEN_RE = new RegExp(
  '(?:^|' + NON_LETTER + ')' +
  '([A-ZÄÖÜ][A-Za-zäöüÄÖÜß]*[äöüÄÖÜß][A-Za-zäöüÄÖÜß]*)' +
  '(?=' + NON_LETTER + '|$)',
  'g'
);

// Remove content that is preserved verbatim from the source and therefore must
// not count as German leakage in EN text:
// - Parentheses + square brackets: glossary principle #3 explicitly allows
//   German agency/law names as bracketed glosses ("Federal Constitutional
//   Court (Bundesverfassungsgericht)").
// - Single- and double-quoted strings: glossary principle #4 says quotes are
//   preserved verbatim ("'Ich werde zurückkehren' [I will return]" keeps the
//   German original; the EN gloss is in brackets and gets stripped too).
function stripParentheticals(text) {
  if (typeof text !== 'string') return text;
  // Repeatedly strip innermost brackets to handle nesting.
  var prev;
  var out = text;
  do {
    prev = out;
    out = out
      .replace(/\([^()]*\)/g, ' ')
      .replace(/\[[^\[\]]*\]/g, ' ')
      // Single-quoted strings: opening ' must be at a word boundary (start of
      // string, after whitespace, or after open-bracket) so that apostrophes
      // inside words like "President's" are NOT treated as quote delimiters.
      .replace(/(^|[\s(\[])'([^'\n]+?)'(?=[\s).,;:!?\]]|$)/g, '$1 ')
      .replace(/"[^"\n]*"/g, ' ')
      .replace(/[„"][^"„"\n]*[""]/g, ' ');  // German „ … " quotes
  } while (out !== prev);
  return out;
}

// Returns leakage kind ('umlaut' | 'german-word') if EN text shows German leakage
// AFTER stripping bracketed glosses, OR null if clean (or only proper-noun umlauts).
// Bekannte Fremd-Eigennamen, die deutsche/niederlaendische Namenspartikel
// ("von der", "van der") enthalten, aber in EN identisch geschrieben werden.
// Sie duerfen nicht als german-word-Leakage zaehlen (z.B. Ursula von der Leyen).
const FOREIGN_NAME_PARTICLES = ['von der Leyen', 'van der Bellen', 'de la Rey'];

function hasGermanLeakage(text) {
  if (typeof text !== 'string' || !text) return null;
  var stripped = stripParentheticals(text);
  for (var fn = 0; fn < FOREIGN_NAME_PARTICLES.length; fn++) {
    stripped = stripped.split(FOREIGN_NAME_PARTICLES[fn]).join(' ');
  }
  if (UMLAUT_RE.test(stripped)) {
    // Allow umlauts that occur only inside capitalized tokens (likely proper
    // nouns like "Berlin Südkreuz", "Düsseldorf"). If every umlaut occurrence
    // sits inside a capitalized token, treat as clean.
    var umlautMatches = stripped.match(UMLAUT_RE_G) || [];
    var properNounUmlauts = (stripped.match(CAPITALIZED_TOKEN_RE) || [])
      .join(' ').match(UMLAUT_RE_G) || [];
    if (umlautMatches.length > properNounUmlauts.length) {
      return 'umlaut';
    }
    // else: all umlauts are inside proper-noun-shaped tokens → tolerate
  }
  var distinctHits = 0;
  for (var i = 0; i < GERMAN_FW_RES.length; i++) {
    if (GERMAN_FW_RES[i].test(stripped)) {
      distinctHits++;
      if (distinctHits >= 2) return 'german-word';
    }
  }
  return null;
}

function lengthRatio(de, en) {
  if (!de || !en || typeof de !== 'string' || typeof en !== 'string') return null;
  if (de.length < 8) return null; // skip very short strings (often proper nouns)
  return en.length / de.length;
}

// Acronym expansions: when the abbreviation is in DE but the EN translator
// spelled it out, accept the expansion as equivalent presence. Keys are the
// whitelist entry; values are alternative full forms that count as "preserved".
// Expansions that count as preserving the abbreviation. "European" alone
// covers compound translations like "EU-Parlament" → "European Parliament",
// "EU-Kommission" → "European Commission", "EU-Gerichtshof" → "European Court".
const ACRONYM_EXPANSIONS = {
  'EU': ['European Union', 'European '],
  'UN': ['United Nations', 'U.N.'],
  'NATO': ['North Atlantic Treaty Organization'],
  'IDF': ['Israel Defense Forces'],
  'NSA': ['National Security Agency'],
  'CIA': ['Central Intelligence Agency'],
  'FBI': ['Federal Bureau of Investigation'],
  'GCHQ': ['Government Communications Headquarters'],
  'NSO': ['NSO Group']
};

// Sprachspezifische Eigennamen-Schreibweisen: der DE-Whitelist-Name (links)
// gilt als praesent, wenn eine seiner EN-Varianten (rechts) im EN-Text steht.
// Verhindert dropped_proper_name false-positives bei korrekt uebersetzten
// Namen (z.B. DE "Hisbollah" -> EN "Hezbollah").
const NAME_EQUIVALENTS = {
  'Hisbollah': ['Hezbollah'],
  'Netanjahu': ['Netanyahu'],
  'Selenskyj': ['Zelensky', 'Zelenskyy', 'Zelenskiy'],
  'Erdogan': ['Erdoğan'],
  'Saudi-Arabien': ['Saudi Arabia'],
  'Tuerkei': ['Turkey', 'Türkiye']
};

// Word-boundary-aware proper-name presence check. Always uses word boundaries
// so that e.g. "Uber" (the company, on the whitelist) does NOT match inside
// "Uberwachung" (transliterated Überwachung). Names containing characters that
// are not part of \w (spaces, hyphens, "?") fall back to substring match,
// because \b would not behave as intended around those characters.
function findProperNamesIn(text) {
  if (!text) return [];
  return PROPER_NAMES.filter(function (name) {
    var hasNonWordChar = /[^A-Za-z0-9_]/.test(name);
    if (hasNonWordChar) {
      // E.g. "Clearview AI", "Where's Daddy?", "Cambridge Analytica" with spaces.
      // Word boundaries around such strings are unreliable; use substring.
      return text.indexOf(name) !== -1;
    }
    var esc = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('\\b' + esc + '\\b').test(text);
  });
}

// Did EN preserve the proper name `name`? True if it appears as a word, OR if
// its registered expansion appears (e.g. "European Union" counts as "EU").
function namePresentInEn(name, enText) {
  if (!enText) return false;
  if (findProperNamesIn(enText).indexOf(name) !== -1) return true;
  var expansions = ACRONYM_EXPANSIONS[name] || [];
  for (var i = 0; i < expansions.length; i++) {
    if (enText.indexOf(expansions[i]) !== -1) return true;
  }
  var equivalents = NAME_EQUIVALENTS[name] || [];
  for (var j = 0; j < equivalents.length; j++) {
    if (enText.indexOf(equivalents[j]) !== -1) return true;
  }
  return false;
}

// Heuristic: does this string look "German" (umlauts or German function words)?
// Used to suppress identical_de_en findings for org names / source titles where
// both sides are clearly the same non-German proper name or English title.
function looksGerman(text) {
  if (typeof text !== 'string' || !text) return false;
  // Umlauts only count as German if they're not inside proper-noun-shaped
  // tokens (so "Ürümqi", "Mühendislik", "Südkreuz" don't trigger).
  var umlautMatches = text.match(UMLAUT_RE_G) || [];
  var properNounUmlauts = (text.match(CAPITALIZED_TOKEN_RE) || [])
    .join(' ').match(UMLAUT_RE_G) || [];
  if (umlautMatches.length > properNounUmlauts.length) return true;
  var hits = 0;
  for (var i = 0; i < GERMAN_FW_RES.length; i++) {
    if (GERMAN_FW_RES[i].test(text)) {
      hits++;
      if (hits >= 2) return true;
    }
  }
  return false;
}

function checkPair(de, en, fieldPath, issues, dePoof, options) {
  options = options || {};
  if (de == null) return;
  if (en == null) {
    issues.push({ field: fieldPath, kind: 'missing_en', de: typeof de === 'string' ? de.slice(0, 80) : de });
    return;
  }
  if (typeof de === 'string' && typeof en === 'string') {
    // Source titles are external article titles in arbitrary languages (EN, FR, ES, etc.).
    // For these we skip identical_de_en (DE often copies the original EN title verbatim),
    // german_leakage (a French source title is not a translation bug), and
    // umlaut_transliteration (a Spanish/English title doesn't follow DE orthography).
    var isSourceTitle = /^sources\[\d+\]\.title$/.test(fieldPath);

    // Umlaut-Transliteration in DE: CLAUDE.md verlangt echte Umlaute in
    // angezeigtem Deutsch. Curated word list catches known bugs.
    if (!isSourceTitle) {
      var bugs = findTransliterations(de);
      if (bugs.length) {
        issues.push({
          field: fieldPath,
          kind: 'umlaut_transliteration',
          words: bugs.join(', '),
          de: de.slice(0, 80)
        });
      }
    }

    // Identical strings: flag substantial text where the content looks German
    // (so we still catch real "translator forgot to translate" cases).
    // Skip when both sides look non-German (likely the same proper name / English title).
    if (!isSourceTitle && de === en && de.length >= 16 && (looksGerman(de) || looksGerman(en))) {
      issues.push({ field: fieldPath, kind: 'identical_de_en', de: de.slice(0, 80), en: en.slice(0, 80) });
    }
    if (!isSourceTitle) {
      var leakage = hasGermanLeakage(en);
      if (leakage) {
        issues.push({ field: fieldPath, kind: 'german_leakage_' + leakage, de: de.slice(0, 80), en: en.slice(0, 80) });
      }
    }
    var ratio = lengthRatio(de, en);
    if (ratio !== null && (ratio < 0.5 || ratio > 2.5)) {
      issues.push({ field: fieldPath, kind: 'length_ratio', ratio: ratio.toFixed(2), de: de.slice(0, 60), en: en.slice(0, 60) });
    }
    // Proper name preservation: any whitelist name present in DE must also be
    // present in EN, either verbatim or as an acronym expansion (e.g. "EU" in
    // DE → "European Union" in EN counts as preserved). Bracketed glosses in EN
    // count too because the gloss text is part of the EN string.
    var deNames = findProperNamesIn(de);
    for (var n of deNames) {
      if (!namePresentInEn(n, en)) {
        issues.push({ field: fieldPath, kind: 'dropped_proper_name', name: n, de: de.slice(0, 60), en: en.slice(0, 60) });
      }
    }
  }
}

function auditFile(file) {
  const issues = [];
  let obj;
  try {
    obj = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    issues.push({ field: '<root>', kind: 'parse_error', msg: e.message });
    return issues;
  }

  checkPair(obj.name_de, obj.name_en, 'name', issues);
  checkPair(obj.description_de, obj.description_en, 'description', issues);

  if (obj.location) {
    checkPair(obj.location.name_de, obj.location.name_en, 'location.name', issues);
  }

  if (Array.isArray(obj['asm:actors'])) {
    obj['asm:actors'].forEach((a, i) => {
      checkPair(a.name_de, a.name_en, `actors[${i}].name`, issues);
    });
  }

  // Rights array
  const rd = obj['asm:affectedRights_de'];
  const re = obj['asm:affectedRights_en'];
  if (Array.isArray(rd)) {
    if (!Array.isArray(re)) {
      issues.push({ field: 'asm:affectedRights_en', kind: 'missing_en', de: rd.slice(0, 3).join(' | ') });
    } else {
      if (rd.length !== re.length) {
        issues.push({ field: 'asm:affectedRights', kind: 'array_length_mismatch', de: rd.length, en: re.length });
      }
      for (let i = 0; i < Math.min(rd.length, re.length); i++) {
        checkPair(rd[i], re[i], `affectedRights[${i}]`, issues);
      }
    }
  }

  // Timeline
  if (Array.isArray(obj['asm:reverseTimeline'])) {
    obj['asm:reverseTimeline'].forEach((it, i) => {
      checkPair(it.title_de, it.title_en, `timeline[${i}].title`, issues);
      checkPair(it.description_de, it.description_en, `timeline[${i}].description`, issues);
    });
  }

  // Sources
  if (Array.isArray(obj['asm:sources'])) {
    obj['asm:sources'].forEach((s, i) => {
      checkPair(s.title_de, s.title_en, `sources[${i}].title`, issues);
    });
  }

  return issues;
}

function main() {
  const files = fs.readdirSync(DIR)
    .filter(f => f.endsWith('.json') && !f.startsWith('_'))
    .map(f => path.join(DIR, f));

  const fileIssues = {};
  let totalIssues = 0, cleanFiles = 0, issueFiles = 0;
  const issueCounts = {};

  for (const file of files) {
    const issues = auditFile(file);
    if (issues.length === 0) {
      cleanFiles++;
    } else {
      issueFiles++;
      totalIssues += issues.length;
      fileIssues[path.basename(file)] = issues;
      issues.forEach(it => { issueCounts[it.kind] = (issueCounts[it.kind] || 0) + 1; });
    }
  }

  // Build markdown report
  let md = '# Audit: Bilinguale Incident-Migration\n\n';
  md += `Datum: ${new Date().toISOString().slice(0, 10)}\n\n`;
  md += `## Zusammenfassung\n\n`;
  md += `- Geprüfte Dateien: **${files.length}**\n`;
  md += `- Saubere Dateien (keine Findings): **${cleanFiles}**\n`;
  md += `- Dateien mit Findings: **${issueFiles}**\n`;
  md += `- Findings insgesamt: **${totalIssues}**\n\n`;
  md += `## Findings nach Kategorie\n\n`;
  const sortedKinds = Object.entries(issueCounts).sort((a, b) => b[1] - a[1]);
  for (const [kind, count] of sortedKinds) {
    md += `- \`${kind}\`: ${count}\n`;
  }
  md += '\n';

  if (issueFiles > 0) {
    md += `## Detail pro Datei\n\n`;
    const sortedFiles = Object.keys(fileIssues).sort();
    for (const f of sortedFiles) {
      md += `### ${f}\n\n`;
      for (const it of fileIssues[f]) {
        md += `- **${it.kind}** @ \`${it.field}\``;
        if (it.de) md += `\n  - DE: \`${it.de.replace(/`/g, "'")}\``;
        if (it.en) md += `\n  - EN: \`${it.en.replace(/`/g, "'")}\``;
        if (it.ratio) md += `\n  - ratio: ${it.ratio}`;
        if (it.name) md += `\n  - missing-name: ${it.name}`;
        if (it.words) md += `\n  - transliterated: ${it.words}`;
        if (it.msg) md += `\n  - msg: ${it.msg}`;
        md += '\n';
      }
      md += '\n';
    }
  }

  const reportPath = path.join(__dirname, '..', 'audit-translation-report.md');
  fs.writeFileSync(reportPath, md, 'utf8');

  console.log(`\n=== Bilingual Audit Report ===`);
  console.log(`Files scanned:           ${files.length}`);
  console.log(`Clean files:             ${cleanFiles}`);
  console.log(`Files with issues:       ${issueFiles}`);
  console.log(`Total findings:          ${totalIssues}`);
  if (sortedKinds.length) {
    console.log(`\nFindings by kind:`);
    for (const [k, c] of sortedKinds) console.log(`  ${c.toString().padStart(5)}  ${k}`);
  }
  console.log(`\nReport: ${reportPath}`);
}

if (require.main === module) main();
