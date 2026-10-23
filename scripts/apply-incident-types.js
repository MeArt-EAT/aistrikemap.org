#!/usr/bin/env node
/**
 * scripts/apply-incident-types.js
 *
 * Sets asm:incidentType for many incidents at once from a JSON map
 * { "<slug>": { "types": ["malfunction", ...] } | ["malfunction", ...] }.
 * Text-level edit of the top-level asm:incidentType array only (keeps the file's
 * formatting and line endings, minimal diff); JSON-parse gate before and after.
 * Used for the 2026-10-23 type reform (data-misuse catch-all -> 16 types).
 *
 * Usage:
 *   node scripts/apply-incident-types.js <types.json> [--dry-run] [--skip slug,slug]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const VOCAB = new Set(['surveillance', 'predictive-policing', 'autonomous-weapons', 'autonomous-vehicle',
  'discrimination', 'deepfakes', 'data-misuse', 'military-ai', 'facial-recognition', 'censorship',
  'labor-exploitation', 'political-pressure', 'copyright', 'fraud', 'malfunction', 'environmental']);
const DIR = path.join(__dirname, '..', 'data', 'incidents');

const args = process.argv.slice(2);
const dry = args.includes('--dry-run');
const skipArg = args.indexOf('--skip');
const skip = new Set(skipArg >= 0 ? String(args[skipArg + 1] || '').split(',').filter(Boolean) : []);
const map = JSON.parse(fs.readFileSync(path.resolve(args[0]), 'utf8'));

let changed = 0, same = 0, skipped = 0;
const errors = [];
for (const [slug, v] of Object.entries(map)) {
  if (skip.has(slug)) { skipped++; continue; }
  const types = Array.isArray(v) ? v : v.types;
  if (!Array.isArray(types) || !types.length || types.some(t => !VOCAB.has(t))) { errors.push(`${slug}: ungueltige Typen ${JSON.stringify(types)}`); continue; }
  const file = path.join(DIR, slug + '.json');
  if (!fs.existsSync(file)) { errors.push(`${slug}: Datei fehlt`); continue; }
  const raw = fs.readFileSync(file, 'utf8');
  const before = JSON.parse(raw);
  if (JSON.stringify(before['asm:incidentType']) === JSON.stringify(types)) { same++; continue; }
  // First occurrence is the top-level field (timeline entries carry no incidentType).
  const re = /("asm:incidentType":\s*)\[([^\]]*)\]/;
  const m = re.exec(raw);
  if (!m) { errors.push(`${slug}: Feld nicht gefunden`); continue; }
  let arr;
  if (/\n/.test(m[2])) {
    const eol = m[2].includes('\r\n') ? '\r\n' : '\n';
    const itemIndent = (/\n([ \t]*)"/.exec(m[2]) || [, '    '])[1];
    const closeIndent = (/\n([ \t]*)$/.exec(m[2]) || [, '  '])[1];
    arr = '[' + eol + types.map(t => itemIndent + JSON.stringify(t)).join(',' + eol) + eol + closeIndent + ']';
  } else {
    arr = '[' + types.map(t => JSON.stringify(t)).join(', ') + ']';
  }
  const out = raw.slice(0, m.index) + m[1] + arr + raw.slice(m.index + m[0].length);
  const after = JSON.parse(out);
  if (JSON.stringify(after['asm:incidentType']) !== JSON.stringify(types)) { errors.push(`${slug}: Ersetzung traf nicht das Top-Level-Feld`); continue; }
  if (!dry) fs.writeFileSync(file, out);
  changed++;
}
console.log(`${dry ? '[DRY-RUN] ' : ''}geaendert ${changed} | unveraendert ${same} | uebersprungen ${skipped} | Fehler ${errors.length}`);
errors.forEach(e => console.log('  FEHLER ' + e));
if (errors.length) process.exitCode = 1;
