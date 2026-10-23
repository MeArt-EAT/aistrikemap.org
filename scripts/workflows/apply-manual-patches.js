// Apply follow-up patches that review/verify agents left as notes (older runs without remove_sources/actors).
// Usage: node apply-manual-patches.js <patches.json> [--dry-run]
// patches.json: { "<candidate_id>": { <patch fields as in review-template PATCH_SCHEMA>, "note": "why" } }
const fs = require('fs');
const path = require('path');
const { mergePatch } = require('./review-patch');
const CAND_DIR = 'C:/Users/meyer/Dropbox/_6.Block/X-Claude-LF11EA/Iron-Hawk/AIStrikeMap/data/incident-candidates/';
const TODAY = process.env.REVIEW_DATE || new Date().toISOString().slice(0, 10);
const patches = JSON.parse(fs.readFileSync(path.resolve(process.argv[2]), 'utf8'));
const dry = process.argv.includes('--dry-run');
const left = new Set(Object.keys(patches));

for (const f of fs.readdirSync(CAND_DIR)) {
  if (!f.endsWith('.json') || f.startsWith('_')) continue;
  const p = CAND_DIR + f; const t = fs.readFileSync(p, 'utf8');
  let arr; try { arr = JSON.parse(t); } catch (e) { continue; }
  if (!Array.isArray(arr)) continue;
  let touched = false;
  for (const c of arr) {
    const patch = patches[c.candidate_id]; if (!patch) continue;
    left.delete(c.candidate_id);
    if (c.status === 'promoted') { console.log('  uebersprungen (promoted):', c.candidate_id); continue; }
    const changed = mergePatch(c.candidate_data, patch);
    console.log(`  ${c.candidate_id}: ${changed.join(', ') || '(keine Aenderung)'}`);
    if (!changed.length) continue;
    c.researcher_notes = (c.researcher_notes || '') + ` | Nacharbeit ${TODAY}: ${patch.note || 'Hinweise der Pruefer umgesetzt'} (${changed.join(', ')})`;
    touched = true;
  }
  if (touched && !dry) {
    const crlf = t.includes('\r\n'); let s = JSON.stringify(arr, null, 2);
    if (crlf) s = s.replace(/\n/g, '\r\n'); if (/\n$/.test(t)) s += crlf ? '\r\n' : '\n';
    fs.writeFileSync(p, s);
  }
}
if (left.size) console.log('NICHT GEFUNDEN:', [...left].join(', '));
console.log(dry ? '[DRY-RUN] nichts geschrieben' : 'fertig');
