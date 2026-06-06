#!/usr/bin/env node
/**
 * scripts/fix-umlaut-transliterations.js
 *
 * Lint-Fixer für die Findings aus audit-bilingual-incidents.js
 * (Kategorie `umlaut_transliteration`). Ersetzt bekannte deutsche
 * Wörter, die mit ae/oe/ue/ss statt ä/ö/ü/ß geschrieben wurden, durch
 * ihre korrekte Form. Word-boundary, case-erhaltend (Großschreibung am
 * Anfang bleibt erhalten).
 *
 * Reichweite: nur display-relevante DE-Felder in
 * data/incidents/*.json. Source-Titles werden ausgelassen (können in
 * beliebigen Sprachen sein). Bilingual-Bundle wird NICHT überschrieben —
 * danach `node scripts/bundle-incidents.js` ausführen.
 *
 * Anwendung:
 *   node scripts/fix-umlaut-transliterations.js
 *   node scripts/audit-bilingual-incidents.js   # zur Verifikation
 *   node scripts/bundle-incidents.js            # Bundle neu bauen
 *
 * Wann ausführen:
 *   - Nach jedem KI-generierten oder von außen importierten Incident-Batch
 *     (typischerweise transliterieren LLMs Umlaute zu ae/oe/ue).
 *   - Wenn audit-bilingual-incidents.js Findings der Kategorie
 *     `umlaut_transliteration` meldet.
 *   - Vor einem Release-Commit als sanity-Check.
 *
 * Idempotenz: auf bereits sauberen Dateien ist es ein No-Op
 * ("Files changed: 0"). Mehrfach hintereinander ausführbar.
 *
 * Erweitern:
 *   FIX_MAP / COMPOUND_SUFFIX_MAP unten haben sprachlich kuratierte Einträge.
 *   Bei neuen Pattern-Bugs den Eintrag dazufügen und parallel in
 *   audit-bilingual-incidents.js den entsprechenden Eintrag in
 *   TRANSLITERATED_GERMAN_WORDS / TRANSLITERATED_COMPOUND_ROOTS ergänzen
 *   (Audit + Fix müssen synchron bleiben).
 *
 * History: ~1.400 Korrekturen über 3 Wellen (Commits 45cf17f, 3e51fff, 428c0db)
 * bei initialer Einführung im Mai 2026.
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
  // Weitere häufige Transliterationen
  'turkei': 'türkei',
  'tuerkei': 'türkei',
  'lander': 'länder',
  'laender': 'länder',
  'prufen': 'prüfen',
  'pruefen': 'prüfen',
  'pruft': 'prüft',
  'prueft': 'prüft',
  'pruefung': 'prüfung',
  'prufung': 'prüfung',
  'ahnlich': 'ähnlich',
  'aehnlich': 'ähnlich',
  'ahnliche': 'ähnliche',
  'aehnliche': 'ähnliche',
  'ahnlichen': 'ähnlichen',
  'aehnlichen': 'ähnlichen',
  'ahnlicher': 'ähnlicher',
  'aehnlicher': 'ähnlicher',
  'falle': 'fälle',
  'faelle': 'fälle',
  'fallen': 'fällen',
  'faellen': 'fällen',
  'aufgespurt': 'aufgespürt',
  'aufgespuert': 'aufgespürt',
  'bemangeln': 'bemängeln',
  'bemaengeln': 'bemängeln',
  'bemangelt': 'bemängelt',
  'bemaengelt': 'bemängelt',
  'uberwacht': 'überwacht',
  'ueberwacht': 'überwacht',
  'verdachtig': 'verdächtig',
  'verdaechtig': 'verdächtig',
  'verdachtige': 'verdächtige',
  'verdaechtige': 'verdächtige',
  'verdachtigen': 'verdächtigen',
  'verdaechtigen': 'verdächtigen',
  'ruckforderung': 'rückforderung',
  'rueckforderung': 'rückforderung',
  'ruckforderungen': 'rückforderungen',
  'rueckforderungen': 'rückforderungen',
  // Tippfehler im Originalkorpus
  'unverhaltnisamssig': 'unverhältnismäßig',
  'unverhaltnisamssige': 'unverhältnismäßige',
  'unverhaltnisamssiger': 'unverhältnismäßiger',
  'unverhaltnisamssiges': 'unverhältnismäßiges',
  'sozioonomisch': 'sozioökonomisch',
  'sozioonomische': 'sozioökonomische',
  'sozioonomischen': 'sozioökonomischen',
  'sozioonomischer': 'sozioökonomischer',
  'verlangerer': 'verlängerter',
  'verlanger': 'verlängert',
  'gerubmtes': 'gerühmtes',
  'geruhmtes': 'gerühmtes',
  'gerubmt': 'gerühmt',
  'geruhmt': 'gerühmt',
  // Long-tail Wörter (aus usa-amazon-rekognition-polizei sweep)
  'verlangert': 'verlängert',
  'verlaengert': 'verlängert',
  'verlangerte': 'verlängerte',
  'verlaengerte': 'verlängerte',
  'verlangerten': 'verlängerten',
  'verlaengerten': 'verlängerten',
  'verfugbar': 'verfügbar',
  'verfuegbar': 'verfügbar',
  'verfugbare': 'verfügbare',
  'verfuegbare': 'verfügbare',
  'erklart': 'erklärt',
  'erklaert': 'erklärt',
  'erklarte': 'erklärte',
  'erklaerte': 'erklärte',
  'erklarten': 'erklärten',
  'erklaerten': 'erklärten',
  'verhangt': 'verhängt',
  'verhaengt': 'verhängt',
  'verhangte': 'verhängte',
  'verhaengte': 'verhängte',
  'verhangen': 'verhängen',
  'verhaengen': 'verhängen',
  'verzogert': 'verzögert',
  'verzoegert': 'verzögert',
  'verzogerte': 'verzögerte',
  'verzoegerte': 'verzögerte',
  'dunkelhautig': 'dunkelhäutig',
  'dunkelhaeutig': 'dunkelhäutig',
  'dunkelhautige': 'dunkelhäutige',
  'dunkelhaeutige': 'dunkelhäutige',
  'dunkelhautiger': 'dunkelhäutiger',
  'dunkelhaeutiger': 'dunkelhäutiger',
  'dunkelhautigen': 'dunkelhäutigen',
  'dunkelhaeutigen': 'dunkelhäutigen',
  'einjahrig': 'einjährig',
  'einjaehrig': 'einjährig',
  'einjahrige': 'einjährige',
  'einjaehrige': 'einjährige',
  'einjahriges': 'einjähriges',
  'einjaehriges': 'einjähriges',
  'einjahrigen': 'einjährigen',
  'einjaehrigen': 'einjährigen',
  // Welle 3 — long-tail aus 2. Sweep-Review
  'mannern': 'männern',
  'maennern': 'männern',
  'ursprunglich': 'ursprünglich',
  'urspruenglich': 'ursprünglich',
  'ursprungliche': 'ursprüngliche',
  'urspruengliche': 'ursprüngliche',
  'ursprunglichen': 'ursprünglichen',
  'urspruenglichen': 'ursprünglichen',
  'ursprunglicher': 'ursprünglicher',
  'urspruenglicher': 'ursprünglicher',
  'hellhautig': 'hellhäutig',
  'hellhaeutig': 'hellhäutig',
  'hellhautige': 'hellhäutige',
  'hellhaeutige': 'hellhäutige',
  'hellhautigen': 'hellhäutigen',
  'hellhaeutigen': 'hellhäutigen',
  'hellhautiger': 'hellhäutiger',
  'hellhaeutiger': 'hellhäutiger',
  'ladt': 'lädt',
  'laedt': 'lädt',
  'ankundigung': 'ankündigung',
  'ankuendigung': 'ankündigung',
  'ankundigungen': 'ankündigungen',
  'ankuendigungen': 'ankündigungen',
  'bewaltigen': 'bewältigen',
  'bewaeltigen': 'bewältigen',
  'bewaltigt': 'bewältigt',
  'bewaeltigt': 'bewältigt',
  'bewaltigung': 'bewältigung',
  'bewaeltigung': 'bewältigung',
  'fluchtig': 'flüchtig',
  'fluechtig': 'flüchtig',
  'fluchtige': 'flüchtige',
  'fluechtige': 'flüchtige',
  'begunstigt': 'begünstigt',
  'beguenstigt': 'begünstigt',
  'begunstigen': 'begünstigen',
  'beguenstigen': 'begünstigen',
  'begunstigung': 'begünstigung',
  'beguenstigung': 'begünstigung',
  'standig': 'ständig',
  'staendig': 'ständig',
  'standige': 'ständige',
  'staendige': 'ständige',
  'standigen': 'ständigen',
  'staendigen': 'ständigen',
  'standiger': 'ständiger',
  'staendiger': 'ständiger',
  'fruh': 'früh',
  'frueh': 'früh',
  'fruhe': 'frühe',
  'fruehe': 'frühe',
  'fruhen': 'frühen',
  'fruehen': 'frühen',
  'fruher': 'früher',
  'frueher': 'früher',
  'fruhes': 'frühes',
  'frueheres': 'frühes',
  'verfugung': 'verfügung',
  'verfuegung': 'verfügung',
  'verfugungen': 'verfügungen',
  'verfuegungen': 'verfügungen',
  'begrundet': 'begründet',
  'begruendet': 'begründet',
  // ß-Bugs
  'abzuschliessen': 'abzuschließen',
  'grosse': 'große',
  'grossen': 'großen',
  'grosser': 'großer',
  'grossbritannien': 'großbritannien',
  'grossbritanien': 'großbritannien',
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
  // weitere Kompositum-Wurzeln
  'horigkeit': 'hörigkeit',          // Staatsangehörigkeit, Zugehörigkeit
  'hoerigkeit': 'hörigkeit',
  'verbande': 'verbände',            // Sozialverbände, Betroffenenverbände
  'verbaende': 'verbände',
  'anhorung': 'anhörung',            // Anhörung, Kongressanhörung
  'anhoerung': 'anhörung',
  'anhorungen': 'anhörungen',
  'anhoerungen': 'anhörungen',
  'angehorige': 'angehörige',        // Familienangehörige, Staatsangehörige
  'angehoerige': 'angehörige',
  'angehorigen': 'angehörigen',
  'angehoerigen': 'angehörigen',
  'angehoriger': 'angehöriger',
  'angehoeriger': 'angehöriger',
  'ubertritt': 'übertritt',          // Grenzübertritt
  'uebertritt': 'übertritt',
  'ubertritte': 'übertritte',
  'uebertritte': 'übertritte',
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
const UBER_PREPOSITION_LC_RE = /\buber(?=\s+(?:die|der|das|den|dem|des|ein|eine|einen|einem|einer|eines|seine|seinen|seiner|ihren|ihrer|ihre|[a-zäöüßA-ZÄÖÜ]))/g;
// Generelles "[Uu]ber + Lowercase-Folge" → "[Üü]ber" + Rest.
// Fängt alle uber-Komposita ohne sie einzeln zu listen (Übereinstimmung,
// überproportional, Überraschung, Übergewicht, überraschend, übertragen, …).
// Mindestens 2 Lowercase-Letters nach "uber", damit "Uber Eats" (mit Leerzeichen)
// und "UberTechnologies" (Capital nach Uber) nicht gefasst werden.
const UBER_COMPOUND_RE = /\b([Uu])ber([a-zäöüß]{2,})\b/g;

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
  // General-Pass für uber-Komposita. Läuft NACH den expliziten Maps, damit
  // "uberwachung" → "überwachung" (FIX_MAP) Vorrang hat. Was hier noch matcht,
  // sind unenumerierte Compounds wie "Ubergewicht", "uberraschend".
  out = out.replace(UBER_COMPOUND_RE, (match, p1, p2) => {
    changed++;
    return (p1 === 'U' ? 'Über' : 'über') + p2;
  });
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
