export const meta = {
  name: 'tl-schema-v11-reverify-__N__',
  description: 'Zweiter adversarialer Verify-Durchgang mit WebSearch fuer Batches, deren erste Pruefung ohne WebSearch lief',
  phases: [
    { title: 'Re-Verify', detail: 'unabhaengiger Agent prueft Schema mechanisch und versucht neue Fakten per WebSearch zu widerlegen' },
  ],
}

const BATCHES = __BATCHES__;

const PROJECT_DIR = 'C:\\Users\\meyer\\Dropbox\\_6.Block\\X-Claude-LF11EA\\Iron-Hawk\\AIStrikeMap';

const RULES = `
1. Alle vier Phasen kommen vor: mindestens 1 infrastructure ODER doctrine (Vorgeschichte; beide zu haben ist das Ziel), mindestens 1 event, mindestens 1 consequences.
2. Vorgeschichte in beliebiger Reihenfolge: infrastructure und doctrine ordnen sich NUR nach Datum. Eine Doktrin darf älter sein als die Infrastruktur oder jünger. Nicht umtaggen, sondern chronologisch sortieren.
3. Mehrere event-Einträge sind erlaubt (mehrstufiges Ereignis), maximal 3. Ein Vorläufer, der den Vorfall nur ermöglichte, ist doctrine/infrastructure; ein Nachspiel ist consequences.
4. Keine Verschränkung: Nach dem ersten event folgt KEIN infrastructure/doctrine mehr; nach der ersten consequences KEIN event mehr.
5. Chronologie strikt aufsteigend über die ganze Liste. Vergleich auf gemeinsamer Granularität: "2021-08-15" vs "2021-08" ist KEIN Widerspruch; "2015-07" vor "2015-05" ist einer. Jahr-only vor Monats- vor Tagesangaben desselben Zeitraums. Gleiche Datums-Strings nebeneinander sind erlaubt, wenn real.
6. 4 bis 6 Einträge.
7. Datumsformat: YYYY, YYYY-MM oder YYYY-MM-DD. Zeiträume nur für infrastructure/doctrine als YYYY-YYYY (Ende nach Beginn). Kein Freitext.
`.trim();

const HARD_RULES = `
- Alles außer dem Array asm:reverseTimeline (und, nur falls fehlerhaft, den drei affectedRights-Arrays) bleibt UNVERÄNDERT: @id, name, description, startDate, location, sources, asm:metadata usw.
- Jeder Timeline-Eintrag hat genau diese Felder: date, phase, title, description, title_de, description_de, title_en, description_en, sources (Array mit 0-2 URLs). title === title_de und description === description_de (wortgleich). title_en/description_en sind echte englische Übersetzungen.
- Korrekturen MÜSSEN per WebSearch belegt sein. Keine AIAAIC-URLs. Keine Fakten erfinden.
- Nur ASCII-Satzzeichen (" ' " - " ...), keine Em-/En-Dashes, keine typografischen Anführungszeichen.
- Deutsche Felder mit echten Umlauten ä ö ü ß, auch in Komposita, niemals ae/oe/ue/ss als Ersatz. @id und Dateiname bleiben transliteriert.
- JSON mit 2 Leerzeichen Einzug; gezielte Edits am Timeline-Array.
- Du hast KEIN Bash, KEIN WebFetch, KEIN Git. Nicht bundlen, nicht committen. Die Hauptsession validiert.
`.trim();

function fileBlock(f) {
  const lines = [];
  lines.push(`### ${f.slug}`);
  lines.push(`Pfad: ${PROJECT_DIR}\\data\\incidents\\${f.slug}.json | Severity ${f.sev} | ursprüngliches Phasenmuster ${f.pattern} (I=infrastructure, D=doctrine, E=event, C=consequences)`);
  for (const e of f.errors) lines.push(`- ursprünglicher ERROR: ${e}`);
  for (const w of f.warns) lines.push(`- ursprünglicher WARN: ${w}`);
  return lines.join('\n');
}

function reverifyPrompt(b) {
  return `Du bist unabhängiger adversarialer Prüfer für Reverse-Timelines im Projekt AIStrikeMap. ZWEITER PRÜFDURCHGANG: Ein Fix-Agent hat diese ${b.files.length} Incident-Files auf das Phasen-Modell Schema v1.1 korrigiert (mit WebSearch), ein erster Prüfer hat sie danach geprüft, hatte aber KEIN WebSearch und konnte nur aus Modellwissen urteilen. Deine Aufgabe ist die faktische Gegenrecherche per WebSearch, die beim ersten Durchgang fehlte. Gehe davon aus, dass etwas falsch ist, bis du es widerlegt hast. Projektverzeichnis: ${PROJECT_DIR}

## Files

${b.files.map(fileBlock).join('\n\n')}

## Selbstbericht des Fix-Agenten (ungeprüft)
${JSON.stringify(b.fixReport, null, 1)}

## Befund des ersten Prüfers (ohne WebSearch, kann falsch sein)
${JSON.stringify(b.firstVerify, null, 1)}

## Schritt A: Kurze mechanische Prüfung jedes Files
${RULES}
Zusätzlich: title === title_de, description === description_de; EN-Felder vorhanden; sources Array mit URLs; @id endet auf /<slug>; ASCII; Umlaute; JSON gültig. Verstöße inline korrigieren und melden. Lies jedes File vollständig; der Ist-Zustand kann vom Selbstbericht abweichen, weil der erste Prüfer bereits editiert hat.

## Schritt B: Faktische Gegenrecherche per WebSearch (Pflicht, Kern dieses Durchgangs)
Priorität 1: alle Einträge, die der erste Prüfer als "nicht belegbar" markiert, nur "aus Modellwissen" bestätigt oder SELBST korrigiert hat (seine Korrekturen beruhen auf Erinnerung, nicht auf Quellen; prüfe sie, als wären sie neu). Priorität 2: alle vom Fix-Agenten neu angelegten oder umdatierten Einträge. Priorität 3: Stichprobe der Altbestands-Einträge. Versuche jede Behauptung zu WIDERLEGEN: Datum, Akteur, Zahl, Gesetzesbezeichnung, Kausalbezug. Prüfe, ob die angegebene Quelle das Behauptete trägt.
- Klar belegter Einzelfehler bei korrekter Fall-Identität: inline korrigieren (DE + EN), Quelle ergänzen, melden.
- Behauptung nicht belegbar oder Quelle trägt sie nicht: auf das belegbare Minimum kürzen oder entfernen, wenn danach noch mindestens 4 Einträge und alle Pflichtphasen vorhanden sind; sonst verdict needs-human.
- Fall-Identität falsch oder Faktenbasis des Incidents selbst zweifelhaft: NICHT umschreiben, verdict needs-human mit präzisem Befund.
- Equal-Date-Paare sind akzeptabel, wenn real.
Wenn WebSearch nicht verfügbar ist oder fehlschlägt: websearch_used=false melden und KEINE inhaltlichen Änderungen vornehmen.

## Harte Regeln
${HARD_RULES}

## Output (strukturiert)
websearch_used; je File: slug, verdict (pass | fix-applied | needs-human), mechanical_fixes, factual_findings (je: entry, claim, result: bestaetigt | korrigiert | nicht belegbar, action), notes.`;
}

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

log(`Re-Verify __N__: ${BATCHES.length} Batches, ${BATCHES.reduce((a, b) => a + b.files.length, 0)} Files`);

const results = await pipeline(
  BATCHES,
  (b, _item, i) => agent(reverifyPrompt(b), { label: `reverify:b${b.batch}`, phase: 'Re-Verify', schema: VERIFY_SCHEMA })
    .then(v => ({ batch: b.batch, slugs: b.files.map(f => f.slug), verify: v }))
);

const flat = results.filter(Boolean);
const ws = { batches: flat.length, verify_websearch: flat.filter(r => r.verify && r.verify.websearch_used).length };
const verdicts = {};
const needsHuman = [];
for (const r of flat) for (const v of ((r.verify && r.verify.results) || [])) {
  verdicts[v.verdict] = (verdicts[v.verdict] || 0) + 1;
  if (v.verdict === 'needs-human') needsHuman.push({ slug: v.slug, notes: v.notes, findings: v.factual_findings });
}
log(`Fertig: WebSearch ${ws.verify_websearch}/${ws.batches}; Verdikte ${JSON.stringify(verdicts)}`);
return { websearch: ws, verdicts, needsHuman, results: flat };
