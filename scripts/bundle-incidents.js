#!/usr/bin/env node
/**
 * Bundle all individual incident and radar JSON files into single files.
 * Run after adding/updating data: node scripts/bundle-incidents.js
 *
 * Outputs:
 *   - all-incidents.json       full bundle (used by scripts, link-check, audits)
 *   - all-incidents-lite.json  map-view bundle WITHOUT the heavy detail-only
 *                              fields (asm:reverseTimeline, asm:sources,
 *                              asm:metadata). The frontend map loads this for
 *                              markers/filters/search/ticker; the detail panel
 *                              lazy-fetches the full per-incident file on click.
 *   - all-radar.json           full radar bundle
 */
const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data');

// Detail-only fields the map view never reads — stripped from the lite bundle.
const HEAVY_FIELDS = ['asm:reverseTimeline', 'asm:sources', 'asm:metadata'];

function readDir(dirName) {
  const dir = path.join(DATA, dirName);
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  return files.map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
}

function write(arr, outName) {
  const out = path.join(DATA, outName);
  fs.writeFileSync(out, JSON.stringify(arr));
  console.log(`Bundled ${arr.length} → data/${outName} (${Math.round(fs.statSync(out).size / 1024)} KB)`);
}

const incidents = readDir('incidents');
if (incidents) {
  write(incidents, 'all-incidents.json');
  const lite = incidents.map(function (inc) {
    const copy = Object.assign({}, inc);
    HEAVY_FIELDS.forEach(function (k) { delete copy[k]; });
    return copy;
  });
  write(lite, 'all-incidents-lite.json');
} else {
  console.log('Skipping incidents/ (directory not found)');
}

const radar = readDir('radar');
if (radar) {
  write(radar, 'all-radar.json');
} else {
  console.log('Skipping radar/ (directory not found)');
}
