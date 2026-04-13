#!/usr/bin/env node
/**
 * Bundle all individual incident and radar JSON files into single files.
 * Run after adding/updating data: node scripts/bundle-incidents.js
 */
const fs = require('fs');
const path = require('path');

function bundle(dirName, outName) {
  const dir = path.join(__dirname, '..', 'data', dirName);
  const out = path.join(__dirname, '..', 'data', outName);

  if (!fs.existsSync(dir)) {
    console.log(`Skipping ${dirName}/ (directory not found)`);
    return;
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  const all = files.map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));

  fs.writeFileSync(out, JSON.stringify(all));
  console.log(`Bundled ${all.length} ${dirName} → data/${outName} (${Math.round(fs.statSync(out).size / 1024)} KB)`);
}

bundle('incidents', 'all-incidents.json');
bundle('radar', 'all-radar.json');
