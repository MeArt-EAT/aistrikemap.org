#!/usr/bin/env node
/**
 * scripts/sync-index.js
 *
 * Brings data/index.json (manifest for helper scripts, not used by the map) in
 * line with data/incidents/*.json: name, coordinates, severity, verification,
 * types, plus retracted/scope flags. Adds entries for files missing from the
 * index and drops entries whose file no longer exists.
 * Run after bulk edits (type reform, retractions), before bundle-incidents.js.
 *
 * Usage: node scripts/sync-index.js [--dry-run]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'data', 'incidents');
const INDEX = path.join(ROOT, 'data', 'index.json');
const dry = process.argv.includes('--dry-run');

const raw = fs.readFileSync(INDEX, 'utf8');
const idx = JSON.parse(raw);
const files = new Set(fs.readdirSync(DIR).filter(f => f.endsWith('.json')));

function entryFor(file, old) {
  const j = JSON.parse(fs.readFileSync(path.join(DIR, file), 'utf8'));
  const geo = j.location && j.location.geo;
  const e = {
    id: file.replace(/\.json$/, ''),
    file,
    name: j.name_de || j.name || '',
    latitude: geo ? geo.latitude : null,
    longitude: geo ? geo.longitude : null,
    severity: j['asm:severity'],
    verificationLevel: j['asm:verificationLevel'],
    types: j['asm:incidentType'] || [],
  };
  if (j['asm:retracted']) e.retracted = true;
  if (j['asm:scope']) e.scope = j['asm:scope'];
  // keep any extra keys older tooling may have stored
  if (old) for (const k of Object.keys(old)) if (!(k in e) && k !== 'retracted' && k !== 'scope') e[k] = old[k];
  return e;
}

let changed = 0, added = 0, removed = 0;
const out = [];
for (const old of idx.incidents) {
  if (!files.has(old.file)) { removed++; continue; }
  files.delete(old.file);
  const e = entryFor(old.file, old);
  if (JSON.stringify(e) !== JSON.stringify(old)) changed++;
  out.push(e);
}
for (const f of [...files].sort()) { out.push(entryFor(f, null)); added++; }
idx.incidents = out;

console.log(`${dry ? '[DRY-RUN] ' : ''}index.json: ${out.length} Eintraege | aktualisiert ${changed} | neu ${added} | entfernt ${removed}`);
if (!dry) {
  let s = JSON.stringify(idx, null, 2) + '\n';
  if (raw.includes('\r\n')) s = s.replace(/\n/g, '\r\n');
  fs.writeFileSync(INDEX, s);
}
