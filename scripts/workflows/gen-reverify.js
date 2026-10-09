// Build a re-verify workflow script for the batches of a wave whose verify ran without WebSearch.
// Usage: node gen-reverify.js <waveNo> <runDir>
const fs = require('fs');
const path = require('path');
const SCRATCH = __dirname;
const n = parseInt(process.argv[2], 10);
const runDir = process.argv[3];
const waves = JSON.parse(fs.readFileSync(path.join(SCRATCH, 'waves.json'), 'utf8'));
const wave = waves[n - 1];
const lines = fs.readFileSync(path.join(runDir, 'journal.jsonl'), 'utf8').split(/\r?\n/).filter(Boolean)
  .map(l => { try { return JSON.parse(l); } catch (e) { return null; } }).filter(r => r && r.type === 'result');
const reports = lines.map(r => r.result || r.value || r.output).filter(v => v && Array.isArray(v.results) && v.results.length);
const fixes = reports.filter(v => 'status' in v.results[0]);
const verifies = reports.filter(v => 'verdict' in v.results[0]);
const bySlugs = (list, slugs) => list.find(v => v.results.some(x => slugs.includes(x.slug)));
const out = [];
wave.forEach((files, i) => {
  const slugs = files.map(f => f.slug);
  const fix = bySlugs(fixes, slugs);
  const ver = bySlugs(verifies, slugs);
  const needs = !ver || ver.websearch_used === false;
  console.log(`batch ${i + 1}: fix=${fix ? 'ok' : 'MISSING'} verify=${ver ? (ver.websearch_used ? 'websearch' : 'NO websearch') : 'MISSING'} -> ${needs ? 'RE-VERIFY' : 'keep'}`);
  if (needs) out.push({ batch: i + 1, files, fixReport: fix || null, firstVerify: ver || null });
});
if (!out.length) { console.log('nothing to re-verify'); process.exit(0); }
const tpl = fs.readFileSync(path.join(SCRATCH, 'reverify-template.js'), 'utf8');
const s = tpl.split('__N__').join(String(n)).replace('__BATCHES__', () => JSON.stringify(out));
const file = path.join(SCRATCH, `reverify-${n}.js`);
fs.writeFileSync(file, s);
console.log(`written ${file} (${(s.length / 1024).toFixed(0)} KB, ${out.length} batches, ${out.reduce((a, b) => a + b.files.length, 0)} files)`);
