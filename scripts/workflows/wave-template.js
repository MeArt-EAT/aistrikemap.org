export const meta = {
  name: 'tl-schema-v11-welle-__N__',
  description: 'Reverse-Timelines auf Phasen-Modell v1.1 korrigieren: WebSearch-gestuetzter Fix, dann unabhaengige adversariale Verify',
  phases: [
    { title: 'Fix', detail: 'je Agent 4 Files: Phasen umtaggen/ergaenzen, Vorgeschichte recherchieren' },
    { title: 'Verify', detail: 'unabhaengiger Agent prueft Schema mechanisch und versucht neue Fakten per WebSearch zu widerlegen' },
  ],
}

const BATCHES = __BATCHES__;

const PROJECT_DIR = 'C:\\Users\\meyer\\Dropbox\\_6.Block\\X-Claude-LF11EA\\Iron-Hawk\\AIStrikeMap';

const RULES = `
1. Alle vier Phasen kommen vor: mindestens 1 infrastructure ODER doctrine (Vorgeschichte; beide zu haben ist das Ziel), mindestens 1 event, mindestens 1 consequences.
2. Vorgeschichte in beliebiger Reihenfolge: infrastructure und doctrine ordnen sich NUR nach Datum. Eine Doktrin darf älter sein als die Infrastruktur (Maschinenrichtlinie 2006 vor Roboter-Hochlauf 2011) oder jünger. Nicht umtaggen, sondern chronologisch sortieren.
3. Mehrere event-Einträge sind erlaubt (mehrstufiges Ereignis: Festnahme + Urteil, Untersuchung + Bußgeld), maximal 3. Ein Vorläufer, der den Vorfall nur ermöglichte, ist doctrine/infrastructure; ein Nachspiel ist consequences.
4. Keine Verschränkung: Nach dem ersten event folgt KEIN infrastructure/doctrine mehr; nach der ersten consequences KEIN event mehr. Reihenfolge im Array: Vorgeschichte, dann event(s), dann consequences.
5. Chronologie strikt aufsteigend über die ganze Liste. Vergleich auf gemeinsamer Granularität: "2021-08-15" vs "2021-08" ist KEIN Widerspruch; "2015-07" vor "2015-05" ist einer. Jahr-only (2024) vor Monatsangaben desselben Jahres (2024-05) vor Tagesangaben (2024-05-14). Gleiche Datums-Strings nebeneinander sind erlaubt, wenn real.
6. 4 bis 6 Einträge.
7. Datumsformat: YYYY, YYYY-MM oder YYYY-MM-DD. Zeiträume nur für infrastructure/doctrine als YYYY-YYYY (Ende nach Beginn). Kein Freitext ("ab 2024", "2024 (vor Oktober)").
`.trim();

const HARD_RULES = `
- Alles außer dem Array asm:reverseTimeline (und, nur falls fehlerhaft, den drei affectedRights-Arrays) bleibt UNVERÄNDERT: @id, name, description, startDate, location, sources, asm:metadata usw. Dateiname und @id sind der Permalink.
- Jeder Timeline-Eintrag hat genau diese Felder: date, phase, title, description, title_de, description_de, title_en, description_en, sources (Array mit 0-2 URLs). title === title_de und description === description_de (wortgleich). title_en/description_en sind echte englische Übersetzungen.
- NEUE oder UMDATIERTE Einträge MÜSSEN per WebSearch belegt sein, mit mindestens einer tragenden URL in sources des Eintrags. Keine AIAAIC-URLs. Keine Fakten erfinden: Was du nicht belegen kannst, formulierst du knapp und faktisch oder lässt es weg und meldest es.
- Nur ASCII-Satzzeichen: " und ' als Anführungszeichen, " - " statt Gedankenstrich, "..." statt Ellipse. Keine Em-/En-Dashes (U+2014/U+2013), keine typografischen Anführungszeichen.
- Deutsche Felder mit echten Umlauten ä ö ü ß, auch in Komposita (Überwachungskameras, Bußgeld, Behörde, Gefängnis), niemals ae/oe/ue/ss als Ersatz. Ausnahme: @id und Dateiname bleiben transliteriert.
- JSON mit 2 Leerzeichen Einzug; bevorzuge gezielte Edits am Timeline-Array statt das ganze File neu zu schreiben.
- Du hast KEIN Bash, KEIN WebFetch, KEIN Git. Versuche nicht, Scripts auszuführen, zu bundlen oder zu committen. Die Hauptsession validiert, bundelt und committet.
`.trim();

function fileBlock(f) {
  const lines = [];
  lines.push(`### ${f.slug}`);
  lines.push(`Pfad: ${PROJECT_DIR}\\data\\incidents\\${f.slug}.json | Severity ${f.sev} | ${f.n} Einträge | Phasenmuster ${f.pattern} (I=infrastructure, D=doctrine, E=event, C=consequences)`);
  for (const e of f.errors) lines.push(`- ERROR: ${e}`);
  for (const w of f.warns) lines.push(`- WARN: ${w}`);
  return lines.join('\n');
}

function fixPrompt(batch) {
  return `Du korrigierst die Reverse-Timelines (asm:reverseTimeline) von ${batch.length} Incident-Files des Projekts AIStrikeMap auf das Phasen-Modell Schema v1.1. Projektverzeichnis: ${PROJECT_DIR}

## Deine Files und die Validator-Befunde

${batch.map(fileBlock).join('\n\n')}

## Pflichtlektüre
Lies zuerst ${PROJECT_DIR}\\data\\incident-candidates\\_timeline-briefing.md (besonders den Abschnitt "Phasen-Modell (Schema v1.1)"), dann jedes File komplett (name, description, startDate, sources und die bestehende Timeline).

## Das Phasen-Modell v1.1 (genau das prüft der Validator)
${RULES}

## Diagnose-Leitfaden je Befund
- "Phasen verschraenkt: doctrine nach event" (häufigster Fall): Der doctrine-Eintrag steht NACH dem Ereignis. Entscheide: (a) Beschreibt er eine REAKTION (Bericht, Debatte, Untersuchung, neues Gesetz, Urteil, Wiederzulassung)? Dann ist er consequences: umtaggen, Datum behalten. (b) Beschreibt er die VORBEDINGUNG (Gesetz, Weisung, Geschäftsmodell, Beschaffungsentscheidung, Exportpolitik, Regulierungslücke), ist aber falsch datiert? Dann das echte Inkrafttreten/Beschlussdatum recherchieren, Text anpassen und VOR das Ereignis sortieren. (c) Ist er ein TEIL des Vorfalls selbst? Dann event (max. 3 events).
  Bleibt nach dem Umtaggen KEINE doctrine übrig, recherchierst du eine echte, belegte Vorbedingung und ergänzt sie als doctrine-Eintrag VOR dem Ereignis: Welches Gesetz, welche Behördenpraxis, welches Geschäftsmodell, welche fehlende Regulierung hat den Einsatz legitimiert oder ermöglicht? Methodik-Definition: "Welche Unternehmensrichtlinien, regulatorische Rahmenbedingungen oder fehlende Governance-Strukturen haben den Vorfall ermöglicht oder begünstigt?"
- "Phasen verschraenkt: event nach consequences" bzw. consequences vor event: Prüfe die Daten. Entweder ist der frühere consequences-Eintrag in Wahrheit Teil des Ereignisses oder Vorgeschichte (umtaggen) oder ein Datum ist falsch (recherchieren und korrigieren). Das Array MUSS chronologisch sein.
- "Phasen verschraenkt: infrastructure nach event": Die Infrastruktur existierte vor dem Ereignis. Echtes Aufbau-/Einführungsdatum recherchieren und vor das Ereignis sortieren; oder der Eintrag ist eine Folge, dann consequences.
- "keine Vorgeschichte": infrastructure UND doctrine recherchieren und ergänzen, beide vor dem Ereignis datiert.
- "keine doctrine-Phase" / "keine infrastructure-Phase" (WARN): die fehlende Phase recherchiert ergänzen. Hat das File schon 6 Einträge, zuerst zwei inhaltlich nahe consequences-Einträge zusammenführen (Beschreibungen verbinden, Quellen vereinigen, früheres Datum behalten).
- "7 TL-Eintraege": zwei inhaltlich nahe Einträge derselben Phase zusammenführen (Beschreibungen verbinden, Quellen vereinigen, früheres Datum). Keine Fakten verlieren.
- "nur 3 TL-Eintraege": fehlende Phase(n) recherchiert ergänzen.
- "0 event-Phasen": Der Eintrag, der den eigentlichen Vorfall beschreibt (vgl. name/description/startDate des Incidents), wird event. Fehlt ein solcher Eintrag, ergänze ihn belegt.
- "Chronologie absteigend": Datum des betroffenen Eintrags per WebSearch prüfen und korrigieren. Zeiträume bei consequences (z. B. 2014-2017) in ein Punkt-Datum nach dem Ereignis auflösen, sofern die Quelle das trägt, sonst umtaggen.

## Harte Regeln
${HARD_RULES}

## Vorgehen
1. Briefing lesen. 2. File lesen, Befund diagnostizieren. 3. WebSearch für jede neue oder umdatierte Angabe (Pflicht). 4. Timeline-Array gezielt editieren. 5. Selbstkontrolle gegen alle 7 Regeln und die harten Regeln, insbesondere title === title_de, Reihenfolge, Umlaute, ASCII. 6. Nächstes File.

## Output (strukturiert)
websearch_used: hast du WebSearch tatsächlich benutzt? Je File: slug, status (fixed | unchanged | needs-human), changes (kurz: was umgetaggt/umdatiert/ergänzt/zusammengeführt), new_or_redated_entries (jede neue oder umdatierte Angabe mit date, phase, title, dem zu prüfenden Faktum und der Quelle), notes (offene Zweifel).`;
}

function verifyPrompt(batch, fixRes) {
  const report = fixRes ? JSON.stringify(fixRes, null, 1) : '(liegt nicht vor: der Fix-Agent lieferte keinen Bericht; prüfe den Ist-Zustand der Files umso gründlicher)';
  return `Du bist unabhängiger adversarialer Prüfer für Reverse-Timelines im Projekt AIStrikeMap. Ein anderer Agent hat soeben ${batch.length} Incident-Files auf das Phasen-Modell Schema v1.1 korrigiert. Dein Auftrag: Fehler FINDEN und beheben. Gehe davon aus, dass etwas falsch ist, bis du es widerlegt hast. Projektverzeichnis: ${PROJECT_DIR}

## Files (mit den ursprünglichen Validator-Befunden, die jetzt behoben sein müssen)

${batch.map(fileBlock).join('\n\n')}

## Selbstbericht des Fix-Agenten (ungeprüft, kann falsch oder unvollständig sein)
${report}

## Schritt A: Mechanische Prüfung jedes Files gegen jede Regel
${RULES}
Zusätzlich: title === title_de und description === description_de in JEDEM Eintrag; title_en/description_en vorhanden und englisch; sources ist ein Array mit URLs (keine AIAAIC-URL); @id unverändert und endet auf /<slug>; die drei affectedRights-Arrays parallel (affectedRights === affectedRights_de, _en gleich lang); nur ASCII-Satzzeichen; echte Umlaute in DE-Feldern (auch Komposita); JSON gültig. Verstöße korrigierst du mechanisch inline (gezielte Edits) und meldest sie.

## Schritt B: Faktische Gegenrecherche per WebSearch (Pflicht, nicht optional)
Für JEDEN neuen oder umdatierten Eintrag laut Selbstbericht UND alles, was dir sonst neu, umformuliert oder verdächtig vorkommt: Versuche die Behauptung zu WIDERLEGEN: Datum, Akteur, Zahl, Gesetzesbezeichnung, Kausalbezug zum Vorfall. Prüfe, ob die angegebene Quelle das Behauptete tatsächlich trägt (Titel/Domain plausibel, Jahr passt).
- Klar belegter Einzelfehler (falsches Datum, falscher Name, falsche Gesetzesnummer) bei korrekter Fall-Identität: inline korrigieren und melden.
- Behauptung nicht belegbar oder Quelle trägt sie nicht: Eintrag auf das belegbare Minimum kürzen (knapp, faktisch) oder entfernen, wenn danach noch mindestens 4 Einträge und alle Pflichtphasen vorhanden sind; sonst verdict needs-human.
- Fall-Identität falsch (anderes Land, andere Person, vermischter Fall) oder Umbau nötig, den du nicht sauber leisten kannst: NICHT umschreiben, verdict needs-human mit präzisem Befund.
- Equal-Date-Paare (Ereignis und Folge im selben Monat) sind akzeptabel, wenn real. Erfinde keine Daten, um sie aufzulösen.
- Prüfe auch, dass der Fix-Agent nichts außerhalb der Timeline verändert hat (name, description, location, sources, @id).

## Harte Regeln
${HARD_RULES}

## Output (strukturiert)
websearch_used; je File: slug, verdict (pass | fix-applied | needs-human), mechanical_fixes (Liste), factual_findings (je: entry, claim, result: bestaetigt | korrigiert | nicht belegbar, action), notes.`;
}

const FIX_SCHEMA = {
  type: 'object',
  properties: {
    websearch_used: { type: 'boolean' },
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          slug: { type: 'string' },
          status: { type: 'string', enum: ['fixed', 'unchanged', 'needs-human'] },
          changes: { type: 'array', items: { type: 'string' } },
          new_or_redated_entries: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                date: { type: 'string' }, phase: { type: 'string' }, title: { type: 'string' },
                claim_to_verify: { type: 'string' }, source: { type: 'string' },
              },
              required: ['date', 'phase', 'title'],
            },
          },
          notes: { type: 'string' },
        },
        required: ['slug', 'status', 'changes'],
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
          factual_findings: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                entry: { type: 'string' }, claim: { type: 'string' },
                result: { type: 'string', enum: ['bestaetigt', 'korrigiert', 'nicht belegbar'] },
                action: { type: 'string' },
              },
              required: ['entry', 'result'],
            },
          },
          notes: { type: 'string' },
        },
        required: ['slug', 'verdict'],
      },
    },
  },
  required: ['websearch_used', 'results'],
};

const total = BATCHES.reduce((a, b) => a + b.length, 0);
log(`Welle __N__: ${BATCHES.length} Batches, ${total} Files`);

const results = await pipeline(
  BATCHES,
  (batch, _item, i) => agent(fixPrompt(batch), { label: `fix:b${i + 1}`, phase: 'Fix', schema: FIX_SCHEMA }),
  (fixRes, batch, i) => {
    if (!fixRes) log(`Batch ${i + 1}: Fix-Agent lieferte keinen Bericht, Verify prüft den Ist-Zustand`);
    return agent(verifyPrompt(batch, fixRes), { label: `verify:b${i + 1}`, phase: 'Verify', schema: VERIFY_SCHEMA })
      .then(v => ({ batch: i + 1, slugs: batch.map(f => f.slug), fix: fixRes, verify: v }));
  }
);

const flat = results.filter(Boolean);
const ws = {
  batches: flat.length,
  fix_websearch: flat.filter(r => r.fix && r.fix.websearch_used).length,
  verify_websearch: flat.filter(r => r.verify && r.verify.websearch_used).length,
};
const verdicts = {};
const needsHuman = [];
for (const r of flat) {
  for (const v of ((r.verify && r.verify.results) || [])) {
    verdicts[v.verdict] = (verdicts[v.verdict] || 0) + 1;
    if (v.verdict === 'needs-human') needsHuman.push({ slug: v.slug, notes: v.notes, findings: v.factual_findings });
  }
}
if (flat.length < BATCHES.length) log(`ACHTUNG: ${BATCHES.length - flat.length} Batch(es) ohne Ergebnis`);
log(`Fertig: WebSearch Fix ${ws.fix_websearch}/${ws.batches}, Verify ${ws.verify_websearch}/${ws.batches}; Verdikte ${JSON.stringify(verdicts)}`);
return { websearch: ws, verdicts, needsHuman, results: flat };
