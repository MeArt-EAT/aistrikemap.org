#!/usr/bin/env node
/**
 * Replace dead URLs with Wayback Machine snapshots.
 *
 * Reads link-check-report.json, queries the Internet Archive
 * Availability API for each dead URL, and if a snapshot exists
 * rewrites it in the corresponding JSON file (incidents + radar).
 *
 * Only touches: 404, 410, network errors, 5xx
 * Skips: 401/403/429 (bot-blocked, page probably still live)
 *
 * Run: node scripts/check-links.js && node scripts/fix-dead-links.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CONCURRENCY = 6;
const TIMEOUT_MS = 15000;

var report;
try {
  report = JSON.parse(fs.readFileSync(path.join(ROOT, 'link-check-report.json'), 'utf8'));
} catch (e) {
  console.error('Run scripts/check-links.js first.');
  process.exit(1);
}

function isFixable(b) {
  if (b.status === 404 || b.status === 410) return true;
  if (b.status === 0) return true; // timeout / DNS
  if (b.status >= 500) return true;
  return false;
}

var toFix = report.broken.filter(isFixable);
console.log('Looking up ' + toFix.length + ' dead URLs on Wayback Machine…\n');

async function wayback(url) {
  var ctrl = new AbortController();
  var t = setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS);
  try {
    var api = 'https://archive.org/wayback/available?url=' + encodeURIComponent(url);
    var r = await fetch(api, {
      signal: ctrl.signal,
      headers: { 'User-Agent': 'AIStrikeMap-LinkFix/1.0 (+https://aistrikemap.org)' }
    });
    if (!r.ok) return null;
    var j = await r.json();
    var snap = j && j.archived_snapshots && j.archived_snapshots.closest;
    if (snap && snap.available && snap.url) {
      // Force HTTPS
      return snap.url.replace(/^http:/, 'https:');
    }
    return null;
  } catch (e) {
    return null;
  } finally {
    clearTimeout(t);
  }
}

async function runPool(items, worker, concurrency) {
  var idx = 0;
  async function next() {
    while (idx < items.length) {
      var my = idx++;
      items[my].replacement = await worker(items[my].url);
      process.stdout.write(items[my].replacement ? '+' : '-');
      if ((my + 1) % 50 === 0) process.stdout.write(' ' + (my + 1) + '\n');
    }
  }
  var ws = [];
  for (var i = 0; i < concurrency; i++) ws.push(next());
  await Promise.all(ws);
}

function collectFilesFromOrigins(origins) {
  var set = new Set();
  origins.forEach(function (o) {
    set.add(o.replace(' → timeline', ''));
  });
  return Array.from(set);
}

// Walk a JSON incident/radar object and replace old→new URL everywhere
function replaceInItem(item, oldUrl, newUrl) {
  var count = 0;
  var sources = item['asm:sources'] || [];
  sources.forEach(function (s) {
    if (s && s.url === oldUrl) { s.url = newUrl; count++; }
  });
  var tl = item['asm:reverseTimeline'] || item['asm:developmentTimeline'] || [];
  tl.forEach(function (t) {
    var tlSources = t.sources || [];
    for (var i = 0; i < tlSources.length; i++) {
      if (typeof tlSources[i] === 'string' && tlSources[i] === oldUrl) {
        tlSources[i] = newUrl; count++;
      } else if (tlSources[i] && tlSources[i].url === oldUrl) {
        tlSources[i].url = newUrl; count++;
      }
    }
  });
  return count;
}

(async () => {
  await runPool(toFix, wayback, CONCURRENCY);
  console.log('\n');

  var withSnap = toFix.filter(function (x) { return !!x.replacement; });
  var noSnap = toFix.filter(function (x) { return !x.replacement; });
  console.log('Snapshots found: ' + withSnap.length + ' / ' + toFix.length);
  console.log('No snapshot:     ' + noSnap.length);

  // Apply replacements file by file to minimize disk I/O
  var fileCache = {};
  var replacementsByFile = {};
  withSnap.forEach(function (item) {
    var files = collectFilesFromOrigins(item.origins);
    files.forEach(function (relPath) {
      if (!replacementsByFile[relPath]) replacementsByFile[relPath] = [];
      replacementsByFile[relPath].push({ old: item.url, new: item.replacement });
    });
  });

  var totalReplacements = 0;
  var filesChanged = 0;
  Object.keys(replacementsByFile).forEach(function (relPath) {
    var full = path.join(ROOT, 'data', relPath);
    var data;
    try {
      data = JSON.parse(fs.readFileSync(full, 'utf8'));
    } catch (e) {
      console.error('Skip unreadable:', relPath, e.message);
      return;
    }
    var fileCount = 0;
    replacementsByFile[relPath].forEach(function (r) {
      fileCount += replaceInItem(data, r.old, r.new);
    });
    if (fileCount > 0) {
      fs.writeFileSync(full, JSON.stringify(data, null, 2) + '\n', 'utf8');
      filesChanged++;
      totalReplacements += fileCount;
      console.log('  ' + relPath + ': ' + fileCount + ' replacement(s)');
    }
  });

  console.log('\n=== SUMMARY ===');
  console.log('Files changed:       ' + filesChanged);
  console.log('Total replacements:  ' + totalReplacements);
  console.log('Still unfixable:     ' + noSnap.length + ' (no Wayback snapshot)');

  // Write unfixable list for follow-up
  fs.writeFileSync(
    path.join(ROOT, 'docs', 'link-unfixable.md'),
    '# Unfixable dead links (no Wayback snapshot)\n\nGenerated: ' + new Date().toISOString() +
    '\nCount: ' + noSnap.length + '\n\n' +
    noSnap.map(function (x) {
      return '- `[' + (x.status || x.error || 'ERR') + ']` ' + x.url +
        '\n  - ' + x.origins.join('\n  - ');
    }).join('\n\n') + '\n',
    'utf8'
  );
  console.log('\nUnfixable list: docs/link-unfixable.md');
})();
