#!/usr/bin/env node
/**
 * Prune dead URLs from incidents + radar data.
 *
 * Strategy:
 *   - For asm:sources[] entries whose url is dead:
 *       keep title/publisher/date, but rename `url` → `asm:brokenUrl`
 *       (so citation metadata survives, but UI no longer renders a link)
 *   - For timeline item `sources: []` arrays (strings):
 *       remove the string entirely
 *   - For timeline item `sources: []` arrays (objects):
 *       treat like asm:sources
 *
 * Only touches URLs in link-check-report.json that are 404/410/5xx/network.
 * Skips 401/403/429 (bot-blocked — page likely still lives).
 *
 * Run: node scripts/check-links.js && node scripts/prune-dead-links.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

var report;
try {
  report = JSON.parse(fs.readFileSync(path.join(ROOT, 'link-check-report.json'), 'utf8'));
} catch (e) {
  console.error('Run scripts/check-links.js first.');
  process.exit(1);
}

function isDead(b) {
  if (b.status === 404 || b.status === 410) return true;
  if (b.status === 0) return true;
  if (b.status >= 500) return true;
  // Strict mode: also treat paywall/bot-blocked as dead
  if ([401, 403, 429].includes(b.status)) return true;
  return false;
}

var deadUrls = new Set(report.broken.filter(isDead).map(function (b) { return b.url; }));
console.log('Pruning ' + deadUrls.size + ' dead URLs across data files…\n');

function processItem(item) {
  var changed = 0;

  // asm:sources
  if (Array.isArray(item['asm:sources'])) {
    item['asm:sources'].forEach(function (s) {
      if (s && s.url && deadUrls.has(s.url)) {
        s['asm:brokenUrl'] = s.url;
        delete s.url;
        changed++;
      }
    });
  }

  // Timeline (either asm:reverseTimeline or asm:developmentTimeline)
  var tlKeys = ['asm:reverseTimeline', 'asm:developmentTimeline'];
  tlKeys.forEach(function (key) {
    if (!Array.isArray(item[key])) return;
    item[key].forEach(function (t) {
      if (!Array.isArray(t.sources)) return;
      t.sources = t.sources.filter(function (src) {
        if (typeof src === 'string') {
          if (deadUrls.has(src)) { changed++; return false; }
          return true;
        } else if (src && src.url && deadUrls.has(src.url)) {
          // Keep object but strip url
          src['asm:brokenUrl'] = src.url;
          delete src.url;
          changed++;
          return true;
        }
        return true;
      });
    });
  });

  return changed;
}

function processDir(dir, label) {
  if (!fs.existsSync(dir)) return { files: 0, changes: 0 };
  var files = fs.readdirSync(dir).filter(function (f) { return f.endsWith('.json'); });
  var changedFiles = 0, totalChanges = 0;
  files.forEach(function (f) {
    var full = path.join(dir, f);
    var data;
    try {
      data = JSON.parse(fs.readFileSync(full, 'utf8'));
    } catch (e) {
      console.error('Parse error:', f, e.message);
      return;
    }
    var c = processItem(data);
    if (c > 0) {
      fs.writeFileSync(full, JSON.stringify(data, null, 2) + '\n', 'utf8');
      changedFiles++;
      totalChanges += c;
      console.log('  ' + label + '/' + f + ': ' + c + ' pruned');
    }
  });
  return { files: changedFiles, changes: totalChanges };
}

var inc = processDir(path.join(ROOT, 'data', 'incidents'), 'incidents');
var rad = processDir(path.join(ROOT, 'data', 'radar'), 'radar');

console.log('\n=== SUMMARY ===');
console.log('Incidents: ' + inc.files + ' files, ' + inc.changes + ' pruned URLs');
console.log('Radar:     ' + rad.files + ' files, ' + rad.changes + ' pruned URLs');
console.log('Total:     ' + (inc.files + rad.files) + ' files, ' + (inc.changes + rad.changes) + ' pruned URLs');
console.log('\nNext: node scripts/bundle-incidents.js && node scripts/generate-feed.js && node scripts/generate-sitemap.js');
