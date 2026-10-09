// Build a verify-only workflow for review-verified candidates whose adversarial verify is missing
// or ran without WebSearch. Usage: node gen-review-reverify.js <waveNo> <runDir>
// Output: review-reverify-<waveNo>.js (uses review-template.js prompts; stage 1 replays the review result)
const fs = require('fs');
const path = require('path');
const SCRATCH = __dirname;
const n = parseInt(process.argv[2], 10);
const runDir = process.argv[3];
const waves = JSON.parse(fs.readFileSync(path.join(SCRATCH, 'review-waves.json'), 'utf8'));
const wave = waves[n - 1];
const lines = fs.readFileSync(path.join(runDir, 'journal.jsonl'), 'utf8').split(/\r?\n/).filter(Boolean)
  .map(l => { try { return JSON.parse(l); } catch (e) { return null; } }).filter(r => r && r.type === 'result');
const reports = lines.map(r => r.result || r.value || r.output).filter(v => v && Array.isArray(v.results) && v.results.length);
const isVerify = rep => rep.results.some(r => ['confirm', 'overturn-duplicate', 'overturn-reject'].includes(r.verdict)) || (rep.results.every(r => r.verdict === 'needs-review') && !rep.results.some(r => 'confidence' in r));
const reviews = reports.filter(r => !isVerify(r)), verifies = reports.filter(isVerify);
const out = [];
wave.forEach((batch, i) => {
  const ids = new Set(batch.map(c => c.candidate_id));
  const rev = reviews.find(r => r.results.some(x => ids.has(x.candidate_id)));
  if (!rev) { console.log(`batch ${i + 1}: KEIN Review -> uebersprungen`); return; }
  const verified = rev.results.filter(x => x.verdict === 'verified' && ids.has(x.candidate_id));
  if (!verified.length) { console.log(`batch ${i + 1}: keine verified`); return; }
  const ver = verifies.find(r => r.results.some(x => ids.has(x.candidate_id)));
  const ok = ver && ver.websearch_used !== false;
  if (ok) { console.log(`batch ${i + 1}: Verify mit WebSearch vorhanden -> keep`); return; }
  console.log(`batch ${i + 1}: ${verified.length} verified, Verify ${ver ? 'OHNE WebSearch' : 'FEHLT'} -> RE-VERIFY`);
  const subBatch = batch.filter(c => verified.some(v => v.candidate_id === c.candidate_id));
  out.push({ batch: subBatch, review: { websearch_used: rev.websearch_used, results: verified } });
});
if (!out.length) { console.log('nothing to re-verify'); process.exit(0); }
let tpl = fs.readFileSync(path.join(SCRATCH, 'review-template.js'), 'utf8');
tpl = tpl.replace("name: 'needs-review-sichtung-welle-__N__'", "name: 'needs-review-reverify-welle-__N__'")
  .replace('const BATCHES = __BATCHES__;', 'const ITEMS = __ITEMS__;\nconst BATCHES = ITEMS.map(x => x.batch);')
  .replace("(batch, _item, i) => agent(reviewPrompt(batch), { label: `review:b${i + 1}`, phase: 'Review', schema: REVIEW_SCHEMA }),",
           '(batch, _item, i) => ITEMS[i].review,');
if (!tpl.includes('ITEMS[i].review')) throw new Error('pipeline anchor not replaced');
const s = tpl.split('__N__').join(String(n)).replace('__ITEMS__', () => JSON.stringify(out));
const file = path.join(SCRATCH, `review-reverify-${n}.js`);
fs.writeFileSync(file, s);
new Function('agent', 'pipeline', 'parallel', 'log', 'phase', 'args', 'budget', 'return (async()=>{' + s.replace('export const meta', 'const meta') + '})()');
console.log(`written ${file}: ${out.length} batches, ${out.reduce((a, b) => a + b.batch.length, 0)} candidates, parses OK`);
