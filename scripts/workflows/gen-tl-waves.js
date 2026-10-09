// Generate TL-build wave scripts for incidents whose asm:reverseTimeline is empty.
// Usage: node gen-tl-waves.js [--per-wave 16] [--batch 4]
const fs = require('fs');
const path = require('path');
const PROJECT = 'C:/Users/meyer/Dropbox/_6.Block/X-Claude-LF11EA/Iron-Hawk/AIStrikeMap/';
const SCRATCH = __dirname;
const argv = process.argv.slice(2);
const perWave = parseInt((argv[argv.indexOf('--per-wave') + 1]) || '16', 10) || 16;
const batch = parseInt((argv[argv.indexOf('--batch') + 1]) || '4', 10) || 4;
const dir = PROJECT + 'data/incidents/';
const slugs = [];
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.json')) continue;
  const j = JSON.parse(fs.readFileSync(dir + f, 'utf8'));
  const tl = j['asm:reverseTimeline'];
  if (!Array.isArray(tl) || tl.length === 0) slugs.push(f.replace(/\.json$/, ''));
}
slugs.sort();
console.log('incidents without timeline:', slugs.length);
const waves = [];
for (let i = 0; i < slugs.length; i += perWave) { const w = slugs.slice(i, i + perWave); const b = []; for (let k = 0; k < w.length; k += batch) b.push(w.slice(k, k + batch)); waves.push(b); }
fs.writeFileSync(path.join(SCRATCH, 'tl-waves.json'), JSON.stringify(waves));
const tpl = fs.readFileSync(path.join(SCRATCH, 'tl-build-template.js'), 'utf8');
waves.forEach((w, i) => {
  const n = i + 1; const s = tpl.split('__N__').join(String(n)).replace('__BATCHES__', () => JSON.stringify(w));
  fs.writeFileSync(path.join(SCRATCH, `tl-build-wave-${n}.js`), s);
  new Function('agent', 'pipeline', 'parallel', 'log', 'phase', 'args', 'budget', 'return (async()=>{' + s.replace('export const meta', 'const meta') + '})()');
  console.log(`tl-build-wave-${n}.js: ${w.length} batches, ${w.reduce((a, b) => a + b.length, 0)} files, parses OK`);
});
