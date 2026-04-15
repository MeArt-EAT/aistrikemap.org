#!/usr/bin/env node
/**
 * Hard-remove all source entries that have no working URL.
 *
 * Acts on the `asm:brokenUrl` marker left by prune-dead-links.js:
 *   - Deletes the entire asm:sources[] entry (not just the url field)
 *   - Deletes timeline source objects that carry asm:brokenUrl
 *   - Also removes any timeline source string that is no longer valid
 *     (shouldn't exist after prune, but belt-and-suspenders)
 *
 * Result: nothing displayed in the UI points to a dead URL.
 * Incidents that relied exclusively on dead URLs will show no sources —
 * this is intentional; a missing citation is better than a broken link.
 *
 * Run: node scripts/remove-broken-sources.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function processItem(item) {
  var changed = 0;

  if (Array.isArray(item['asm:sources'])) {
    var before = item['asm:sources'].length;
    item['asm:sources'] = item['asm:sources'].filter(function (s) {
      if (!s) return false;
      if (s['asm:brokenUrl'] && !s.url) return false; // pruned earlier
      if (!s.url) return false; // never had one
      return true;
    });
    changed += before - item['asm:sources'].length;
  }

  var tlKeys = ['asm:reverseTimeline', 'asm:developmentTimeline'];
  tlKeys.forEach(function (key) {
    if (!Array.isArray(item[key])) return;
    item[key].forEach(function (t) {
      if (!Array.isArray(t.sources)) return;
      var before = t.sources.length;
      t.sources = t.sources.filter(function (src) {
        if (typeof src === 'string') {
          return /^https?:\/\//.test(src);
        }
        if (src && src['asm:brokenUrl'] && !src.url) return false;
        if (src && !src.url) return false;
        return true;
      });
      changed += before - t.sources.length;
    });
  });

  return changed;
}

function processDir(dir, label) {
  if (!fs.existsSync(dir)) return { files: 0, removed: 0 };
  var files = fs.readdirSync(dir).filter(function (f) { return f.endsWith('.json'); });
  var changedFiles = 0, total = 0;
  files.forEach(function (f) {
    var full = path.join(dir, f);
    var data;
    try { data = JSON.parse(fs.readFileSync(full, 'utf8')); }
    catch (e) { console.error('Parse error:', f, e.message); return; }
    var c = processItem(data);
    if (c > 0) {
      fs.writeFileSync(full, JSON.stringify(data, null, 2) + '\n', 'utf8');
      changedFiles++;
      total += c;
    }
  });
  console.log(label + ': ' + changedFiles + ' files, ' + total + ' source entries removed');
  return { files: changedFiles, removed: total };
}

var inc = processDir(path.join(ROOT, 'data', 'incidents'), 'Incidents');
var rad = processDir(path.join(ROOT, 'data', 'radar'), 'Radar');
console.log('\nTotal: ' + (inc.files + rad.files) + ' files, ' + (inc.removed + rad.removed) + ' source entries removed');
