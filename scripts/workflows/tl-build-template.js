export const meta = {
  name: 'tl-build-welle-__N__',
  description: 'Reverse-Timelines + affectedRights fuer neu promotete Incidents bauen (WebSearch-Pflicht), dann unabhaengige adversariale Verify',
  phases: [
    { title: 'Build', detail: 'je Agent 4 Files: Vorgeschichte recherchieren, 4-6 Eintraege nach Phasen-Modell v1.1, affectedRights' },
    { title: 'Verify', detail: 'unabhaengiger Agent prueft Schema mechanisch und versucht jede Behauptung per WebSearch zu widerlegen' },
  ],
}

const BATCHES = __BATCHES__;

const PROJECT_DIR = 'C:\\Users\\meyer\\Dropbox\\_6.Block\\X-Claude-LF11EA\\Iron-Hawk\\AIStrikeMap';

const RULES = `
1. Alle vier Phasen kommen vor: mindestens 1 infrastructure UND mindestens 1 doctrine (Vorgeschichte), mindestens 1 event, mindestens 1 consequences. Der Validator meldet fehlende Phasen als ERROR.
2. Vorgeschichte in beliebiger Reihenfolge: infrastructure und doctrine ordnen sich NUR nach Datum (eine Doktrin darf älter sein als die Infrastruktur oder jünger).
3. Mehrere event-Einträge sind erlaubt (mehrstufiges Ereignis), maximal 3. Vorläufer sind doctrine/infrastructure, Nachspiel ist consequences.
4. Keine Verschränkung: nach dem ersten event KEIN infrastructure/doctrine mehr; nach der ersten consequences KEIN event mehr.
5. Chronologie strikt aufsteigend. Vergleich auf gemeinsamer Granularität ("2021-08-15" vs "2021-08" ist kein Widerspruch). Jahr-only vor Monats- vor Tagesangaben desselben Zeitraums. Gleiche Datums-Strings nebeneinander sind erlaubt, wenn real.
6. 4 bis 6 Einträge.
7. Datumsformat: YYYY, YYYY-MM oder YYYY-MM-DD. Zeiträume nur für infrastructure/doctrine als YYYY-YYYY (Ende nach Beginn). Kein Freitext.
`.trim();

const HARD_RULES = `
- Du änderst NUR asm:reverseTimeline und die drei affectedRights-Arrays. Alles andere (name, description, startDate, location, sources, actors, metadata, @id) bleibt unverändert. Findest du dort einen klaren Faktenfehler, melde ihn in notes.
- Jeder Timeline-Eintrag hat genau diese Felder: date, phase, title, description, title_de, description_de, title_en, description_en, sources (Array mit 0-2 URLs). title === title_de und description === description_de (wortgleich). title_en/description_en sind echte englische Übersetzungen. description 2-4 Sätze.
- JEDER Eintrag muss per WebSearch belegt sein, mit mindestens einer tragenden URL in sources (aus den Incident-Quellen oder aus deinen Suchergebnissen; keine AIAAIC-URLs, keine erfundenen URLs). Keine Fakten erfinden; was du nicht belegen kannst, formulierst du knapp und faktisch oder lässt es weg.
- affectedRights: 3 parallele Arrays asm:affectedRights (= asm:affectedRights_de) und asm:affectedRights_en gleicher Länge, 3-6 etablierte Begriffe (Recht auf Leben, Privatsphäre, Meinungsfreiheit, Versammlungsfreiheit, Schutz vor Diskriminierung, Kinderrechte, körperliche Unversehrtheit, faires Verfahren, Datenschutz, Verbraucherschutz, Recht auf Gesundheit, Schutz vor Manipulation, Bewegungsfreiheit, Würde des Menschen, Arbeitnehmerrechte).
- Nur ASCII-Satzzeichen (" ' " - " ...), keine Em-/En-Dashes, keine typografischen Anführungszeichen.
- Deutsche Felder mit echten Umlauten ä ö ü ß, auch in Komposita, niemals ae/oe/ue/ss als Ersatz. @id und Dateiname bleiben transliteriert.
- JSON mit 2 Leerzeichen Einzug; gezielte Edits (das Array asm:reverseTimeline ist aktuell leer [] und die affectedRights-Arrays sind leer).
- Du hast KEIN Bash, KEIN WebFetch, KEIN Git. Nicht bundlen, nicht committen; die Hauptsession validiert.
`.trim();

function fileBlock(slug) {
  return `### ${slug}\nPfad: ${PROJECT_DIR}\\data\\incidents\\${slug}.json`;
}

function buildPrompt(batch) {
  return `Du baust für ${batch.length} frisch promotete Incident-Files des Projekts AIStrikeMap die Reverse-Timeline (asm:reverseTimeline) und die affectedRights. Beides ist aktuell leer. Projektverzeichnis: ${PROJECT_DIR}

## Deine Files

${batch.map(fileBlock).join('\n\n')}

## Pflichtlektüre
Lies zuerst ${PROJECT_DIR}\\data\\incident-candidates\\_timeline-briefing.md komplett (Phasen-Definitionen, Feldstruktur, Abschnitt "Phasen-Modell (Schema v1.1)"), dann jedes File (name, description, startDate, location, actors, asm:sources).

## Das Phasen-Modell v1.1 (prüft der Validator)
${RULES}

## Methode (Reverse-Logik)
- infrastructure: Welches System, welche Plattform, welche Datenbasis existierte und ermöglichte den Vorfall (oft Jahre vorher)? Belegt recherchieren.
- doctrine: Welches Gesetz, welche Weisung, welches Geschäftsmodell, welche Regulierungslücke hat den Einsatz legitimiert oder ermöglicht? Belegt recherchieren.
- event: Der dokumentierte Vorfall selbst (Datum = startDate des Incidents oder genauer); mehrstufig erlaubt.
- consequences: Folgen (Klagen, Urteile, Bußgelder, Rücknahmen, Reaktionen, Gesetzesänderungen), belegt.
WebSearch für JEDEN Eintrag ist Pflicht (Vorgeschichte steht fast nie im Incident selbst).

## Harte Regeln
${HARD_RULES}

## Vorgehen
1. Briefing lesen. 2. File lesen. 3. WebSearch je Phase. 4. 4-6 Einträge + affectedRights schreiben (gezielte Edits). 5. Selbstkontrolle gegen alle Regeln (title===title_de, Reihenfolge, Phasen, Umlaute, ASCII, Quellen je Eintrag). 6. Nächstes File.

## Output (strukturiert)
websearch_used; je File: slug, status (built | needs-human), entries (Anzahl), pattern (z. B. IDECC), claims (jede Behauptung der Vorgeschichte mit Datum, Kernaussage und Quelle), notes (Zweifel, Fehler im Incident-Haupttext).`;
}

function verifyPrompt(batch, buildRes) {
  const report = buildRes ? JSON.stringify(buildRes, null, 1) : '(liegt nicht vor: der Build-Agent lieferte keinen Bericht; prüfe den Ist-Zustand der Files umso gründlicher)';
  return `Du bist unabhängiger adversarialer Prüfer für Reverse-Timelines im Projekt AIStrikeMap. Ein anderer Agent hat soeben für ${batch.length} neu promotete Incident-Files die Timeline und die affectedRights gebaut. Dein Auftrag: Fehler FINDEN und beheben. Gehe davon aus, dass etwas falsch ist, bis du es widerlegt hast. Projektverzeichnis: ${PROJECT_DIR}

## Files

${batch.map(fileBlock).join('\n\n')}

## Selbstbericht des Build-Agenten (ungeprüft)
${report}

## Schritt A: Mechanische Prüfung jedes Files
${RULES}
Zusätzlich: title === title_de und description === description_de in JEDEM Eintrag; title_en/description_en vorhanden und englisch; sources ist Array mit URLs (keine AIAAIC-URL); affectedRights: drei Arrays, asm:affectedRights === asm:affectedRights_de, _en gleich lang, 3-6 Einträge; nur ASCII-Satzzeichen; echte Umlaute; JSON gültig; @id unverändert. Verstöße inline korrigieren (gezielte Edits) und melden.

## Schritt B: Faktische Gegenrecherche per WebSearch (Pflicht)
Für JEDEN Eintrag (Priorität: Vorgeschichte, dann Folgen, dann das Ereignis): Versuche die Behauptung zu WIDERLEGEN: Datum, Akteur, Zahl, Gesetzesbezeichnung, Kausalbezug zum Vorfall. Prüfe, ob die angegebene Quelle das Behauptete trägt und in Suchergebnissen existiert.
- Klar belegter Einzelfehler: inline korrigieren (DE+EN), melden.
- Nicht belegbar: auf das belegbare Minimum kürzen oder Eintrag entfernen, wenn danach noch mindestens 4 Einträge und alle Pflichtphasen vorhanden sind; sonst verdict needs-human.
- Fall-Identität des Incidents selbst zweifelhaft (anderes Land, andere Person, vermischter Fall): NICHT umschreiben, verdict needs-human mit präzisem Befund.
- Equal-Date-Paare sind akzeptabel, wenn real.

## Harte Regeln
${HARD_RULES}

## Output (strukturiert)
websearch_used; je File: slug, verdict (pass | fix-applied | needs-human), mechanical_fixes, factual_findings (je: entry, claim, result: bestaetigt | korrigiert | nicht belegbar, action), notes.`;
}

const BUILD_SCHEMA = {
  type: 'object',
  properties: {
    websearch_used: { type: 'boolean' },
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          slug: { type: 'string' },
          status: { type: 'string', enum: ['built', 'needs-human'] },
          entries: { type: 'integer' }, pattern: { type: 'string' },
          claims: { type: 'array', items: { type: 'object', properties: { date: { type: 'string' }, phase: { type: 'string' }, claim: { type: 'string' }, source: { type: 'string' } }, required: ['date', 'phase', 'claim'] } },
          notes: { type: 'string' },
        },
        required: ['slug', 'status'],
      },
    },
  },
  required: ['websearch_used', 'results'],
};

const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    websearch_used: { type: 'boolean' },
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          slug: { type: 'string' },
          verdict: { type: 'string', enum: ['pass', 'fix-applied', 'needs-human'] },
          mechanical_fixes: { type: 'array', items: { type: 'string' } },
          factual_findings: { type: 'array', items: { type: 'object', properties: { entry: { type: 'string' }, claim: { type: 'string' }, result: { type: 'string', enum: ['bestaetigt', 'korrigiert', 'nicht belegbar'] }, action: { type: 'string' } }, required: ['entry', 'result'] } },
          notes: { type: 'string' },
        },
        required: ['slug', 'verdict'],
      },
    },
  },
  required: ['websearch_used', 'results'],
};

const total = BATCHES.reduce((a, b) => a + b.length, 0);
log(`TL-Build Welle __N__: ${BATCHES.length} Batches, ${total} Files`);

const results = await pipeline(
  BATCHES,
  (batch, _item, i) => agent(buildPrompt(batch), { label: `build:b${i + 1}`, phase: 'Build', schema: BUILD_SCHEMA }),
  (buildRes, batch, i) => {
    if (!buildRes) log(`Batch ${i + 1}: Build-Agent lieferte keinen Bericht, Verify prüft den Ist-Zustand`);
    return agent(verifyPrompt(batch, buildRes), { label: `verify:b${i + 1}`, phase: 'Verify', schema: VERIFY_SCHEMA })
      .then(v => ({ batch: i + 1, slugs: batch, build: buildRes, verify: v }));
  }
);

const flat = results.filter(Boolean);
const ws = { batches: flat.length, build_websearch: flat.filter(r => r.build && r.build.websearch_used).length, verify_websearch: flat.filter(r => r.verify && r.verify.websearch_used).length };
const verdicts = {}; const needsHuman = [];
for (const r of flat) for (const v of ((r.verify && r.verify.results) || [])) { verdicts[v.verdict] = (verdicts[v.verdict] || 0) + 1; if (v.verdict === 'needs-human') needsHuman.push({ slug: v.slug, notes: v.notes }); }
log(`Fertig: WebSearch Build ${ws.build_websearch}/${ws.batches}, Verify ${ws.verify_websearch}/${ws.batches}; Verdikte ${JSON.stringify(verdicts)}`);
return { websearch: ws, verdicts, needsHuman, results: flat };
