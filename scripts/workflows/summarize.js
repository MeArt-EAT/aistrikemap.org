// Summarize a wave's journal.jsonl: per-slug verdicts, factual findings, notable notes.
// Usage: node summarize.js <runId-dir>
const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const lines = fs.readFileSync(path.join(dir, 'journal.jsonl'), 'utf8').split(/\r?\n/).filter(Boolean);
const results = lines.map(l => { try { return JSON.parse(l); } catch (e) { return null; } }).filter(r => r && r.type === 'result');
const fixes = [], verifies = [];
for (const r of results) {
  const v = r.result || r.value || r.output || r.data;
  if (!v || typeof v !== 'object') continue;
  if (v.results && v.results.length && 'verdict' in v.results[0]) verifies.push(v);
  else if (v.results && v.results.length && 'status' in v.results[0]) fixes.push(v);
}
console.log(`agents in journal: ${results.length} | fix reports: ${fixes.length} | verify reports: ${verifies.length}`);
const fixStatus = {}, verdict = {}, factual = {};
let mechFixes = 0, newEntries = 0;
const notable = [];
for (const f of fixes) for (const r of f.results) { fixStatus[r.status] = (fixStatus[r.status] || 0) + 1; newEntries += (r.new_or_redated_entries || []).length; }
for (const v of verifies) for (const r of v.results) {
  verdict[r.verdict] = (verdict[r.verdict] || 0) + 1;
  mechFixes += (r.mechanical_fixes || []).length;
  for (const ff of (r.factual_findings || [])) {
    factual[ff.result] = (factual[ff.result] || 0) + 1;
    if (ff.result !== 'bestaetigt') notable.push(`${r.slug}: [${ff.result}] ${ff.entry} - ${(ff.action || ff.claim || '').slice(0, 160)}`);
  }
  if (r.verdict === 'needs-human') notable.push(`${r.slug}: NEEDS-HUMAN - ${(r.notes || '').slice(0, 300)}`);
}
console.log('fix status:', JSON.stringify(fixStatus), '| new/redated entries:', newEntries);
console.log('verify verdicts:', JSON.stringify(verdict), '| mechanical fixes:', mechFixes);
console.log('factual findings:', JSON.stringify(factual));
console.log('\nNotable (korrigiert / nicht belegbar / needs-human):');
notable.forEach(n => console.log(' - ' + n));
