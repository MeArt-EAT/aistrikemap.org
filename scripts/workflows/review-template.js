export const meta = {
  name: 'needs-review-sichtung-welle-__N__',
  description: 'needs-review-Kandidaten sichten: Review-Agent (WebSearch: Existenz, Datum, Dublette, Quellen) -> adversarialer Gegenpruefer fuer alle "verified"',
  phases: [
    { title: 'Review', detail: 'je Agent 8 Kandidaten: Verdikt verified/duplicate/rejected/needs-review + Korrektur-Patch' },
    { title: 'Verify', detail: 'unabhaengiger Agent versucht jedes "verified" zu widerlegen (Dublette, Datum, Quellen, Incident-Charakter)' },
  ],
}

const BATCHES = __BATCHES__;

const PROJECT_DIR = 'C:\\Users\\meyer\\Dropbox\\_6.Block\\X-Claude-LF11EA\\Iron-Hawk\\AIStrikeMap';

function candBlock(c) {
  const cd = c.candidate_data;
  const lines = [];
  lines.push(`### ${c.candidate_id}   (Datei: ${c.file})`);
  lines.push(`name_de: ${cd.name_de}`);
  lines.push(`name_en: ${cd.name_en}`);
  lines.push(`startDate: ${cd.startDate} | Land: ${cd.location && cd.location.country} | Ort: ${cd.location && cd.location.name_de} | lat/lng: ${cd.location && cd.location.lat},${cd.location && cd.location.lng}`);
  lines.push(`incidentType: ${JSON.stringify(cd.incidentType)} | severity: ${cd.candidate_severity} | verification: ${cd.candidate_verification}`);
  lines.push(`description_de: ${cd.description_de}`);
  lines.push(`actors: ${JSON.stringify(cd.actors)}`);
  lines.push(`sources (${(cd.sources || []).length}): ${(cd.sources || []).map(s => s.url + ' [' + (s.publisher || '') + ', ' + (s.date || '') + ']').join(' ; ')}`);
  lines.push(`researcher_notes: ${c.researcher_notes}`);
  lines.push(`Bestands-Treffer (Dubletten-Hinweis, Score = Namensaehnlichkeit): ${c.corpus_matches.length ? c.corpus_matches.map(m => `${m.slug} [${m.startDate}, ${m.country}, score ${m.score}${m.retracted ? ', ZURUECKGEZOGEN' : ''}]`).join(' ; ') : 'keine'}`);
  return lines.join('\n');
}

const RULES = `
- Ein Kandidat ist nur dann \`verified\`, wenn ALLE Punkte erfuellt sind:
  (a) Das Ereignis ist durch mindestens ZWEI voneinander unabhaengige, seriöse Quellen belegt (Nachrichtenmedien, NGO-Berichte, Gerichts-/Behoerdendokumente, peer-reviewed Studien). Reine Selbstberichte, LinkedIn-Posts, Pressemitteilungen des Beschuldigten oder Boulevard allein reichen nicht. Fehlende zweite Quelle per WebSearch suchen und als add_sources liefern (nur URLs, die in den Suchergebnissen tatsaechlich erschienen sind; keine AIAAIC-URLs).
  (b) Das Datum des DOKUMENTIERTEN EREIGNISSES ist per WebSearch verifiziert (Klage, Urteil, Crash, Leak, Veroeffentlichung, Verbot, Entlassung). Das startDate im Kandidaten ist bei AIAAIC-Stubs SYSTEMATISCH unzuverlaessig (oft Jahr des KI-Systems statt des Ereignisses) - immer pruefen, bei Abweichung im Patch korrigieren (YYYY-MM-DD > YYYY-MM > YYYY).
  (c) Keine Dublette: weder eines Bestands-Incidents (Hinweise oben pruefen; bei Zweifel die Datei ${PROJECT_DIR}\\data\\incidents\\<slug>.json lesen) noch eines anderen Kandidaten in deinem Batch. Gleiches Thema, aber ANDERES Ereignis (anderes Datum, anderer Akteur, anderes Dataset, andere Strafe) ist KEINE Dublette - z. B. sind zwei verschiedene Tesla-Autopilot-Crashs zwei Incidents.
  (d) Es ist ein echter KI-bezogener Vorfall mit Menschenrechts- oder Grundrechtsbezug (Schaden, Diskriminierung, Ueberwachung, Manipulation, Zensur, Arbeitsrechte, Sicherheit), kein blosses Produkt-Launch, keine Meinung, keine Spekulation, keine reine Studie ohne dokumentierten Schaden (Studien, die einen systemischen Schaden belegen, sind aber zulaessig).
  (e) name_de/name_en, description_de/description_en, incidentType, Ort und Akteure stimmen mit den Quellen ueberein; Fehler im Patch korrigieren (deutsch mit echten Umlauten ä ö ü ß, ASCII-Satzzeichen, kein Em-Dash).
- \`duplicate\`: duplicate_of = Bestands-Slug oder candidate_id des anderen Kandidaten; Begruendung mit dem konkreten Beleg (gleiches Ereignis, gleiches Datum/Akteur).
- \`rejected\`: Grund klar benennen (kein Incident-Charakter / nicht KI-bezogen / nicht belegbar / nur Selbstbericht / spekulativ / Quelle widerspricht).
- \`needs-review\`: nur wenn du es nach Recherche wirklich nicht entscheiden kannst; Grund nennen.
- Severity-Skala (candidate_severity 1-5) und Verification-Skala (1-4) stehen in ${PROJECT_DIR}\\data\\incident-candidates\\_enrichment-briefing.md - lies den Abschnitt einmal zu Beginn.
- Du schreibst KEINE Dateien. Die Hauptsession wendet deine Verdikte und Patches an. Du hast Read/Grep/Glob/WebSearch, kein Bash, kein WebFetch, kein Git.
- Keine Fakten erfinden. Patch-Felder nur setzen, wenn du sie belegen kannst; sonst weglassen.
`.trim();

function reviewPrompt(batch) {
  return `Du sichtest ${batch.length} Kandidaten aus der Staging-Schleuse des Projekts AIStrikeMap (Status "needs-review"). Fuer jeden entscheidest du per WebSearch, ob er in den Bestand promotet werden kann. Projektverzeichnis: ${PROJECT_DIR}

## Kandidaten

${batch.map(candBlock).join('\n\n')}

## Regeln
${RULES}

## Vorgehen je Kandidat
1. Lies researcher_notes (dort steht meist, warum er needs-review ist: nur eine Quelle, Dubletten-Verdacht, schwacher Incident-Charakter, Datum unsicher).
2. WebSearch: Existenz + zweite Quelle + Datum des Ereignisses (2-4 Suchen je Kandidat, Budget beachten).
3. Dubletten-Check gegen die Bestands-Treffer (Datei lesen, wenn der Score >= 0.35 ist oder der Name aehnlich klingt) und gegen die anderen Kandidaten im Batch.
4. Verdikt + Patch + Begruendung.

## Output (strukturiert)
websearch_used; je Kandidat: candidate_id, verdict (verified | duplicate | rejected | needs-review), duplicate_of (bei duplicate), reason (2-3 Saetze mit Belegen), confidence (hoch | mittel | niedrig), patch (nur geaenderte Felder: startDate, name_de, name_en, description_de, description_en, incidentType, candidate_severity, candidate_verification, location {name_de, name_en, country, lat, lng}, add_sources [{url, title, publisher, date, type}]), notes.`;
}

function verifyPrompt(batch, reviewRes) {
  const verified = (reviewRes.results || []).filter(r => r.verdict === 'verified');
  const byId = Object.fromEntries(batch.map(c => [c.candidate_id, c]));
  const blocks = verified.map(r => {
    const c = byId[r.candidate_id];
    return (c ? candBlock(c) : `### ${r.candidate_id} (Kandidat nicht im Batch gefunden)`) +
      `\n\nREVIEW-VERDIKT: verified (confidence ${r.confidence})\nREVIEW-BEGRUENDUNG: ${r.reason}\nREVIEW-PATCH: ${JSON.stringify(r.patch || {})}\nREVIEW-NOTES: ${r.notes || ''}`;
  });
  return `Du bist unabhaengiger adversarialer Gegenpruefer fuer AIStrikeMap. Ein Review-Agent hat ${verified.length} Kandidaten als "verified" (promotionsreif) eingestuft. Dein Auftrag: jedes dieser Verdikte zu WIDERLEGEN versuchen. Nur was deiner Pruefung standhaelt, kommt in den Bestand. Projektverzeichnis: ${PROJECT_DIR}

## Kandidaten mit Review-Verdikt

${blocks.join('\n\n---\n\n')}

## Pruefe je Kandidat (WebSearch Pflicht)
1. DUBLETTE: Suche im Bestand nach gleichem Ereignis - Grep ueber ${PROJECT_DIR}\\data\\incidents\\*.json nach Eigennamen/Akteuren/Orten (z. B. Firmenname + Jahr), nicht nur die Hinweise des Review-Agenten. Gleiches Ereignis = Dublette; gleiches Thema, anderes Ereignis = keine.
2. QUELLEN: Tragen die angegebenen und die ergaenzten URLs (add_sources) das Behauptete? Sind es zwei unabhaengige, serioese Quellen? Erscheinen die URLs in Suchergebnissen (keine erfundenen URLs)?
3. DATUM: Stimmt startDate (im Patch oder Original) mit dem dokumentierten Ereignis ueberein?
4. INCIDENT-CHARAKTER: Echter KI-bezogener Vorfall mit Grundrechtsbezug? Oder Launch/Meinung/Spekulation/Studie ohne Schaden?
5. INHALT: name/description/incidentType/Ort/Akteure quellentreu? Severity (1-5) und Verification (1-4) plausibel (Skalen in ${PROJECT_DIR}\\data\\incident-candidates\\_enrichment-briefing.md)?

## Regeln
${RULES}

## Output (strukturiert)
websearch_used; je Kandidat: candidate_id, verdict (confirm | overturn-duplicate | overturn-reject | needs-review), duplicate_of, reason (konkret, mit Beleg), patch (weitere Korrekturen, gleiche Felder wie beim Review), notes.`;
}

const PATCH_SCHEMA = {
  type: 'object',
  properties: {
    startDate: { type: 'string' }, name_de: { type: 'string' }, name_en: { type: 'string' },
    description_de: { type: 'string' }, description_en: { type: 'string' },
    incidentType: { type: 'array', items: { type: 'string' } },
    candidate_severity: { type: 'integer' }, candidate_verification: { type: 'integer' },
    location: { type: 'object', properties: { name_de: { type: 'string' }, name_en: { type: 'string' }, country: { type: 'string' }, lat: { type: 'number' }, lng: { type: 'number' } } },
    add_sources: { type: 'array', items: { type: 'object', properties: { url: { type: 'string' }, title: { type: 'string' }, publisher: { type: 'string' }, date: { type: 'string' }, type: { type: 'string' } }, required: ['url'] } },
  },
};

const REVIEW_SCHEMA = {
  type: 'object',
  properties: {
    websearch_used: { type: 'boolean' },
    results: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          candidate_id: { type: 'string' },
          verdict: { type: 'string', enum: ['verified', 'duplicate', 'rejected', 'needs-review'] },
          duplicate_of: { type: 'string' },
          reason: { type: 'string' },
          confidence: { type: 'string', enum: ['hoch', 'mittel', 'niedrig'] },
          patch: PATCH_SCHEMA,
          notes: { type: 'string' },
        },
        required: ['candidate_id', 'verdict', 'reason'],
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
          candidate_id: { type: 'string' },
          verdict: { type: 'string', enum: ['confirm', 'overturn-duplicate', 'overturn-reject', 'needs-review'] },
          duplicate_of: { type: 'string' },
          reason: { type: 'string' },
          patch: PATCH_SCHEMA,
          notes: { type: 'string' },
        },
        required: ['candidate_id', 'verdict', 'reason'],
      },
    },
  },
  required: ['websearch_used', 'results'],
};

const total = BATCHES.reduce((a, b) => a + b.length, 0);
log(`Sichtung Welle __N__: ${BATCHES.length} Batches, ${total} Kandidaten`);

const results = await pipeline(
  BATCHES,
  (batch, _item, i) => agent(reviewPrompt(batch), { label: `review:b${i + 1}`, phase: 'Review', schema: REVIEW_SCHEMA }),
  (reviewRes, batch, i) => {
    if (!reviewRes) { log(`Batch ${i + 1}: Review-Agent lieferte nichts`); return { batch: i + 1, ids: batch.map(c => c.candidate_id), review: null, verify: null }; }
    const nVerified = (reviewRes.results || []).filter(r => r.verdict === 'verified').length;
    if (!nVerified) return { batch: i + 1, ids: batch.map(c => c.candidate_id), review: reviewRes, verify: null };
    return agent(verifyPrompt(batch, reviewRes), { label: `verify:b${i + 1}`, phase: 'Verify', schema: VERIFY_SCHEMA })
      .then(v => ({ batch: i + 1, ids: batch.map(c => c.candidate_id), review: reviewRes, verify: v }));
  }
);

const flat = results.filter(Boolean);
const ws = {
  batches: flat.length,
  review_websearch: flat.filter(r => r.review && r.review.websearch_used).length,
  verify_agents: flat.filter(r => r.verify).length,
  verify_websearch: flat.filter(r => r.verify && r.verify.websearch_used).length,
};
const verdicts = {}, verifyVerdicts = {};
for (const r of flat) {
  for (const x of ((r.review && r.review.results) || [])) verdicts[x.verdict] = (verdicts[x.verdict] || 0) + 1;
  for (const x of ((r.verify && r.verify.results) || [])) verifyVerdicts[x.verdict] = (verifyVerdicts[x.verdict] || 0) + 1;
}
log(`Fertig: WebSearch Review ${ws.review_websearch}/${ws.batches}, Verify ${ws.verify_websearch}/${ws.verify_agents}; Review ${JSON.stringify(verdicts)}; Verify ${JSON.stringify(verifyVerdicts)}`);
return { websearch: ws, verdicts, verifyVerdicts, results: flat };
