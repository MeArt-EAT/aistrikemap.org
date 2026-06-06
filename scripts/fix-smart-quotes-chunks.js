#!/usr/bin/env node
/**
 * Ersetzt typografische Anführungszeichen in Chunk-Files durch escaped ASCII.
 * Idempotent. Schreibt nur, wenn etwas zu ändern ist.
 *
 * Hintergrund: AIAAIC-Batch-Enrichment-Agenten setzen gelegentlich
 * „..." (U+201E + U+201D) als typografische Quotes innerhalb von
 * JSON-Stringwerten. Im Output mischen sie diese mit ASCII-Quotes,
 * was den JSON-Parser bricht. Diese Funktion neutralisiert die
 * Smart-Quotes zu escape-ASCII (\") und macht das File parsbar.
 *
 * Usage:
 *   node scripts/fix-smart-quotes-chunks.js data/incident-candidates/aiaaic-batch-c-chunks
 */
'use strict';

const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
if (!dir) { console.error('Usage: node fix-smart-quotes-chunks.js <dir>'); process.exit(1); }

const files = fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort();
let totalChanged = 0;
let totalFixed = 0;
for (const f of files) {
  const p = path.join(dir, f);
  const raw = fs.readFileSync(p, 'utf8');
  // Häufigstes Pattern: „X" (Smart-Open + ASCII-Close) — beide zu \" escapen.
  // Auch handled: „X" (Smart pair) und "X" (Smart-curly pair).
  const ESC = '\\"';
  const replaced = raw
    .replace(/„([^"„“”\n]+?)"/g,   ESC + '$1' + ESC)   // „X" → \"X\"
    .replace(/„([^"„“”\n]+?)”/g,   ESC + '$1' + ESC)   // „X" → \"X\"
    .replace(/“([^"„“”\n]+?)”/g,   ESC + '$1' + ESC)   // "X" → \"X\"
    .replace(/[„“”]/g, '')                              // lingering smart-quotes drop
    .replace(/[‘’]/g, "'");
  if (replaced === raw) {
    console.log(f + ': clean');
    continue;
  }
  try {
    const parsed = JSON.parse(replaced);
    fs.writeFileSync(p, replaced);
    const fixedCount = (raw.match(/[„“”‘’]/g) || []).length;
    totalChanged++; totalFixed += fixedCount;
    console.log(f + ': fixed ' + fixedCount + ' smart-quotes, parses OK (' + parsed.length + ' entries)');
  } catch (e) {
    console.error(f + ': STILL BROKEN after smart-quote-fix: ' + e.message);
    process.exit(2);
  }
}
console.log('---');
console.log('Files changed: ' + totalChanged + ', smart-quotes fixed: ' + totalFixed);
