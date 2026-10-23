// Apply the owner's scope decisions of 2026-10-23 (docs/planung/scope-pruefung-2026-10-23.md):
//  - 10 named cases from the decision template: retracted
//  - other cases without an AI or algorithmic element: asm:scope "context" + asm:scopeNote (DE/EN)
//  - algorithmic systems / suspected AI: a clarifying sentence appended to the description
// Input: scope-2026-10-23.json (scope-audit results). Usage: node apply-scope-2026-10-23.js [--dry-run]
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', '..', 'data', 'incidents');
const TODAY = '2026-10-23';
const dry = process.argv.includes('--dry-run');
const rows = JSON.parse(fs.readFileSync(path.join(__dirname, 'scope-2026-10-23.json'), 'utf8'));

const RETRACT = {
  'costa-rica-conti-ransomware': null,
  'malaysia-ki-arbeitsmigranten': null,
  'suedsudan-90-tage-social-media-sperre-fuer-facebook-und-tiktok-ab-22-januar-2025-nach': null,
  'suedkorea-yoons-kriegsrechts-erklaerung-3-dezember-2024-opposition-und-bank-chef-hielten': null,
  'suedkorea-yoon-kriegsrecht-social-media-2024': null,
  'usa-kaiser-permanente-roboter-teilt-78-jaehrigem-ernest-quintana-sterbende-diagnose-per': null,
  'nepal-social-media-ueberwachung': null,
  'china-ki-journalisten-ueberwachung': null,
  // Not out of scope by type, but the claimed AI incident is not substantiated (decision template B1/B2).
  'uk-google-push-benachrichtigung-zur-bafta-enthaelt-n-wort-2026': {
    de: `Zurückgezogen am ${TODAY} (Entscheidung des Projekteigners): Google erklärte, der Fehler in der Push-Benachrichtigung habe keine KI betroffen; frühe Berichte über eine KI-generierte Meldung sind nicht belegt. Ein KI-Bezug ist damit nicht nachgewiesen.`,
    en: `Retracted on ${TODAY} (project owner decision): Google stated that the error in the push notification did not involve AI; early reports of an AI-generated notification are not substantiated. An AI connection is therefore not established.`,
  },
  'global-sony-testet-dynamische-spielpreise-auf-playstation-store-spieler-innen': {
    de: `Zurückgezogen am ${TODAY} (Entscheidung des Projekteigners): Der berichtete A/B-Preistest im PlayStation Store ist von Sony nicht bestätigt, und keine Quelle belegt den Einsatz von KI oder einer datengetriebenen Personalisierung der Preise. Ein Preistest mit zufälligen Gruppen ist für sich kein KI-Vorfall.`,
    en: `Retracted on ${TODAY} (project owner decision): The reported A/B price test in the PlayStation Store has not been confirmed by Sony, and no source documents the use of AI or data-driven price personalisation. A price test with random groups is not an AI incident in itself.`,
  },
};

// The audit agents phrased out-of-scope texts as retractions; context cases keep the reason, not the verdict.
const toContext = (s, lang) => lang === 'de'
  ? s.replace(/^Zurückgezogen am \S+ \([^)]*\):\s*/, `Kontextfall seit ${TODAY} (Aufnahmeregel des Projekteigners): `)
  : s.replace(/^Retracted on \S+ \([^)]*\):\s*/, `Context case since ${TODAY} (project owner's inclusion rule): `);

const stats = { retracted: 0, context: 0, clarified: 0, skipped: [] };
for (const r of rows) {
  const p = path.join(DIR, r.slug + '.json');
  const raw = fs.readFileSync(p, 'utf8'); const crlf = raw.includes('\r\n');
  const j = JSON.parse(raw);
  if (j['asm:retracted']) { stats.skipped.push(r.slug + ' (bereits zurueckgezogen)'); continue; }
  const meta = j['asm:metadata'] = j['asm:metadata'] || {};
  let touched = false;
  if (Object.prototype.hasOwnProperty.call(RETRACT, r.slug)) {
    const txt = RETRACT[r.slug] || { de: r.retraction_de, en: r.retraction_en };
    if (!txt.de || !txt.en) throw new Error('Rueckzugstext fehlt: ' + r.slug);
    j['asm:retracted'] = true; j['asm:retractedDate'] = TODAY;
    j['asm:retractionReason'] = txt.de; j['asm:retractionReason_de'] = txt.de; j['asm:retractionReason_en'] = txt.en;
    meta.humanVerified = false; meta.lastUpdated = TODAY;
    meta['asm:retractionNote'] = `Retracted ${TODAY} by project owner decision (docs/planung/redaktion-entscheidungsvorlage-2026-10-23.md); file, slug and @id retained for permalink stability.`;
    stats.retracted++; touched = true;
  } else if (/^ausserhalb/.test(r.final)) {
    const de = toContext(r.retraction_de, 'de'), en = toContext(r.retraction_en, 'en');
    if (!/^Kontextfall/.test(de) || !/^Context case/.test(en)) throw new Error('Kontexttext unerwartet: ' + r.slug);
    j['asm:scope'] = 'context';
    j['asm:scopeNote'] = de; j['asm:scopeNote_de'] = de; j['asm:scopeNote_en'] = en;
    meta.lastUpdated = TODAY;
    stats.context++; touched = true;
  } else if ((r.final === 'algorithmus' || r.final === 'ki-vermutet') && r.clarify_de && r.clarify_en) {
    const add = (s, x) => (s || '').trimEnd() + (/[.!?]$/.test((s || '').trimEnd()) ? ' ' : '. ') + x.trim();
    const sameLegacy = j.description === j.description_de;
    if (!(j.description_de || '').includes(r.clarify_de.trim())) {
      j.description_de = add(j.description_de, r.clarify_de);
      if (sameLegacy) j.description = j.description_de;
      j.description_en = add(j.description_en, r.clarify_en);
      meta.lastUpdated = TODAY;
      stats.clarified++; touched = true;
    }
  }
  if (!touched || dry) continue;
  let out = JSON.stringify(j, null, 2) + '\n';
  if (crlf) out = out.replace(/\n/g, '\r\n');
  fs.writeFileSync(p, out);
}
console.log(`${dry ? '[DRY-RUN] ' : ''}zurueckgezogen ${stats.retracted} | Kontextfall ${stats.context} | Klarstellung ${stats.clarified} | uebersprungen ${stats.skipped.length}`);
stats.skipped.forEach(s => console.log('  ' + s));
