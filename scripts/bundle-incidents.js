#!/usr/bin/env node
/**
 * Bundle all individual incident JSON files into a single file.
 * Run after adding/updating incidents: node scripts/bundle-incidents.js
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'data', 'incidents');
const out = path.join(__dirname, '..', 'data', 'all-incidents.json');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
const all = files.map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));

fs.writeFileSync(out, JSON.stringify(all));
console.log(`Bundled ${all.length} incidents → data/all-incidents.json (${Math.round(fs.statSync(out).size / 1024)} KB)`);
