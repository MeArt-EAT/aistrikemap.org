#!/usr/bin/env node
/**
 * scripts/merge-aiaaic-chunks.js
 *
 * Mergt alle data/incident-candidates/aiaaic-batch-<X>-chunks/chunk-*.json
 * zurück in das passende Round-6-File (überschreibt das Stub-File).
 *
 * Sanity-Checks:
 *   - Anzahl Kandidaten total
 *   - Anzahl pro Status (verified / needs-review / rejected / candidate)
 *   - candidate_id-Dubletten innerhalb des Merge
 *   - Kandidaten ohne sources[] (würde Promote skippen)
 *   - Kandidaten ohne name_de / description_de
 *
 * Usage:
 *   node scripts/merge-aiaaic-chunks.js --batch a
 *   node scripts/merge-aiaaic-chunks.js --batch c
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CAND_DIR = path.join(ROOT, 'data', 'incident-candidates');

// CLI-Arg parsen: --batch <key>
const argv = process.argv.slice(2);
let batch = 'a';
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--batch' && argv[i+1]) { batch = argv[i+1].toLowerCase(); i++; }
}

const CHUNK_DIR = path.join(CAND_DIR, 'aiaaic-batch-' + batch + '-chunks');
if (!fs.existsSync(CHUNK_DIR)) {
  console.error('Chunk-Dir fehlt: ' + path.relative(ROOT, CHUNK_DIR));
  process.exit(1);
}
// Round-6-File per Glob: aiaaic-batch-<batch>-*-round-6.json
const outCandidates = fs.readdirSync(CAND_DIR)
  .filter(f => new RegExp('^aiaaic-batch-' + batch + '-.*-round-6\\.json$').test(f));
if (outCandidates.length !== 1) {
  console.error('Erwartet genau 1 Round-6-File für Batch ' + batch + ', gefunden: ' + outCandidates.length);
  console.error(outCandidates.join('\n'));
  process.exit(1);
}
const OUT_FILE = path.join(CAND_DIR, outCandidates[0]);
console.log('Batch: ' + batch + '  Chunks: ' + path.relative(ROOT, CHUNK_DIR) + '  Out: ' + outCandidates[0]);

function main() {
  const files = fs.readdirSync(CHUNK_DIR).filter(f => /^chunk-\d+\.json$/.test(f)).sort();
  console.log('found ' + files.length + ' chunk files');

  const merged = [];
  const seenIds = new Set();
  let dupSkipped = 0;
  const perFile = [];

  for (const f of files) {
    const p = path.join(CHUNK_DIR, f);
    const arr = JSON.parse(fs.readFileSync(p, 'utf8'));
    let kept = 0;
    for (const c of arr) {
      if (seenIds.has(c.candidate_id)) { dupSkipped++; continue; }
      seenIds.add(c.candidate_id);
      merged.push(c);
      kept++;
    }
    perFile.push({ f, n: arr.length, kept });
  }

  // Stats
  const byStatus = {};
  let withSources2plus = 0, withDescDe = 0, withDescEn = 0, withNameDe = 0;
  for (const c of merged) {
    byStatus[c.status] = (byStatus[c.status] || 0) + 1;
    const srcN = (c.candidate_data && c.candidate_data.sources && c.candidate_data.sources.length) || 0;
    if (srcN >= 2) withSources2plus++;
    if (c.candidate_data && c.candidate_data.description_de && c.candidate_data.description_de.length > 30) withDescDe++;
    if (c.candidate_data && c.candidate_data.description_en && c.candidate_data.description_en.length > 30) withDescEn++;
    if (c.candidate_data && c.candidate_data.name_de && c.candidate_data.name_de.length > 5) withNameDe++;
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(merged, null, 2) + '\n', 'utf8');
  const size = fs.statSync(OUT_FILE).size;

  console.log('\n=== Merge Summary ===');
  console.log('  chunks:           ' + files.length);
  console.log('  total candidates: ' + merged.length);
  console.log('  candidate_id-dup-skipped: ' + dupSkipped);
  console.log('  out file: ' + path.relative(ROOT, OUT_FILE));
  console.log('  size:     ' + (size / 1024).toFixed(1) + ' KB');
  console.log('\n  Status:');
  Object.entries(byStatus).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log('    ' + k.padEnd(15) + v));
  console.log('\n  Quality:');
  console.log('    sources >=2:    ' + withSources2plus);
  console.log('    name_de filled: ' + withNameDe);
  console.log('    desc_de filled: ' + withDescDe);
  console.log('    desc_en filled: ' + withDescEn);

  // Promote-Ready: status=verified + sources>=2 + name_de + desc_de + desc_en
  let promoteReady = 0;
  for (const c of merged) {
    if (c.status !== 'verified') continue;
    const cd = c.candidate_data || {};
    const srcN = (cd.sources && cd.sources.length) || 0;
    if (srcN < 2) continue;
    if (!cd.name_de || cd.name_de.length < 5) continue;
    if (!cd.description_de || cd.description_de.length < 30) continue;
    if (!cd.description_en || cd.description_en.length < 30) continue;
    promoteReady++;
  }
  console.log('\n  promote-ready: ' + promoteReady + ' (verified + 2+ sources + name_de + descriptions)');

  console.log('\nNächste Schritte:');
  console.log('  node scripts/dedup-candidates-round-6.js  # gegen Bestand prüfen');
  console.log('  node scripts/promote-candidates.js --file ' + path.relative(ROOT, OUT_FILE) + ' --min-sources 2');
}

if (require.main === module) main();
