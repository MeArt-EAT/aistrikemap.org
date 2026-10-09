// Post-wave hygiene for one TL wave. Usage: node postwave.js <waveNo> [--fix-smart]
// Runs: validator on the wave's slugs, fix-umlaut (corpus, idempotent),
// normalize-smart-chars (--dry-run unless --fix-smart), audit, git diff stat.
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SCRATCH = __dirname;
const PROJECT = 'C:/Users/meyer/Dropbox/_6.Block/X-Claude-LF11EA/Iron-Hawk/AIStrikeMap';
const n = parseInt(process.argv[2], 10);
const fixSmart = process.argv.includes('--fix-smart');
const waves = JSON.parse(fs.readFileSync(path.join(SCRATCH, 'waves.json'), 'utf8'));
const wave = waves[n - 1];
if (!wave) { console.error('no wave ' + n); process.exit(2); }
const slugs = wave.flat().map(f => f.slug);

function run(cmd, opts = {}) {
  console.log('\n$ ' + cmd);
  try {
    const out = execSync(cmd, { cwd: PROJECT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64 * 1024 * 1024 });
    return { ok: true, out };
  } catch (e) {
    return { ok: false, out: (e.stdout || '') + (e.stderr || '') };
  }
}

// 1) Which wave files actually changed?
const diffStat = run('git diff --stat -- data/incidents').out;
const changed = new Set(diffStat.split(/\r?\n/).map(l => (l.match(/data\/incidents\/(\S+)\.json/) || [])[1]).filter(Boolean));
// git diff --stat abbreviates long paths with "..."; fall back to git diff --name-only
const nameOnly = run('git diff --name-only -- data/incidents').out.split(/\r?\n/).map(l => (l.match(/data\/incidents\/(.+)\.json$/) || [])[1]).filter(Boolean);
nameOnly.forEach(s => changed.add(s));
const untouched = slugs.filter(s => !changed.has(s));
const foreign = [...changed].filter(s => !slugs.includes(s));
console.log(`Welle ${n}: ${slugs.length} Slugs | geaendert: ${slugs.length - untouched.length} | unveraendert: ${untouched.length}`);
if (untouched.length) console.log('  unveraendert: ' + untouched.join(' '));
if (foreign.length) console.log('  ACHTUNG geaenderte Files AUSSERHALB der Welle: ' + foreign.join(' '));

// 2) Validator on wave slugs
const v = run('node scripts/validate-timelines.js ' + slugs.join(' '));
const vLines = v.out.split(/\r?\n/);
console.log(vLines.filter(l => /ERROR|^✗|^---|^FAIL/.test(l)).join('\n'));
const vWarnPhase = vLines.filter(l => /keine (doctrine|infrastructure)-Phase|Verdachts|doppelter/.test(l));
if (vWarnPhase.length) console.log('WARN (Phase/Translit): ' + vWarnPhase.length + '\n' + vWarnPhase.join('\n'));

// 3) fix-umlaut (idempotent, corpus)
const fu = run('node scripts/fix-umlaut-transliterations.js');
console.log(fu.out.split(/\r?\n/).filter(l => l.trim()).slice(-6).join('\n'));

// 4) smart chars
const sc = run('node scripts/normalize-smart-chars.js' + (fixSmart ? '' : ' --dry-run'));
console.log(sc.out.split(/\r?\n/).filter(l => l.trim()).slice(-6).join('\n'));

// 5) audit
const au = run('node scripts/audit-bilingual-incidents.js');
console.log(au.out.split(/\r?\n/).filter(l => l.trim()).slice(-5).join('\n'));

// 6) non-TL field changes? compare every changed wave file's top-level fields except TL/affectedRights against HEAD
console.log('\n# Feld-Diff ausserhalb der Timeline (gegen HEAD):');
let leaks = 0;
for (const s of slugs) {
  if (!changed.has(s)) continue;
  const head = run(`git show HEAD:data/incidents/${s}.json`);
  if (!head.ok) continue;
  let a, b;
  try { a = JSON.parse(head.out); b = JSON.parse(fs.readFileSync(path.join(PROJECT, 'data/incidents', s + '.json'), 'utf8')); } catch (e) { console.log('  PARSE-FEHLER ' + s + ': ' + e.message); leaks++; continue; }
  const skip = new Set(['asm:reverseTimeline', 'asm:affectedRights', 'asm:affectedRights_de', 'asm:affectedRights_en']);
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  const diff = [...keys].filter(k => !skip.has(k) && JSON.stringify(a[k]) !== JSON.stringify(b[k]));
  if (diff.length) { leaks++; console.log('  ' + s + ': ' + diff.join(', ')); }
}
if (!leaks) console.log('  keine');

console.log('\n# git diff --stat');
console.log(run('git diff --stat').out.split(/\r?\n/).slice(-3).join('\n'));
