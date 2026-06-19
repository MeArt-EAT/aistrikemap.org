#!/usr/bin/env node
// find-missing-timelines.js — list incident files that lack a reverse timeline.
// Usage: node scripts/find-missing-timelines.js [--severity N] [--json]
//   --severity N : restrict to asm:severity === N (default: all severities)
//   --json       : print a JSON array of {file, id, name, severity} to stdout
// Without --json: prints a human-readable count breakdown by severity to stderr.

const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'data', 'incidents');

const args = process.argv.slice(2);
const sevIdx = args.indexOf('--severity');
const sevFilter = sevIdx !== -1 ? Number(args[sevIdx + 1]) : null;
const asJson = args.includes('--json');

function hasTimeline(obj) {
  const tl = obj['asm:reverseTimeline'];
  return Array.isArray(tl) && tl.length > 0;
}

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.json'));
const missing = [];
const bySevTotal = {};
const bySevMissing = {};

for (const f of files) {
  let obj;
  try {
    obj = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'));
  } catch (e) {
    process.stderr.write(`PARSE-ERROR ${f}: ${e.message}\n`);
    continue;
  }
  const sev = obj['asm:severity'];
  bySevTotal[sev] = (bySevTotal[sev] || 0) + 1;
  if (hasTimeline(obj)) continue;
  bySevMissing[sev] = (bySevMissing[sev] || 0) + 1;
  if (sevFilter !== null && sev !== sevFilter) continue;
  missing.push({
    file: f,
    id: obj['@id'] ? obj['@id'].split('/').pop() : f.replace(/\.json$/, ''),
    name: obj.name_de || obj.name || '',
    severity: sev,
  });
}

if (asJson) {
  process.stdout.write(JSON.stringify(missing, null, 0));
} else {
  process.stderr.write(`Total incident files: ${files.length}\n`);
  process.stderr.write('Severity | total | missing-TL\n');
  for (const s of [5, 4, 3, 2, 1, undefined]) {
    const key = s === undefined ? 'undefined' : s;
    if (bySevTotal[key] === undefined && bySevTotal[s] === undefined) continue;
    const t = bySevTotal[s] || bySevTotal[key] || 0;
    const m = bySevMissing[s] || bySevMissing[key] || 0;
    process.stderr.write(`   ${String(key).padEnd(5)} | ${String(t).padStart(5)} | ${String(m).padStart(5)}\n`);
  }
  if (sevFilter !== null) {
    process.stderr.write(`\nSev-${sevFilter} without TL: ${missing.length}\n`);
  }
}
