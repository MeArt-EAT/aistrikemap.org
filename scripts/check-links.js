#!/usr/bin/env node
/**
 * Check all source URLs in incidents + radar for HTTP status.
 * Uses built-in fetch (Node 18+). Prints broken links grouped by file.
 * Run: node scripts/check-links.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const CONCURRENCY = 12;
const TIMEOUT_MS = 15000;

function collectUrlsFromItem(item, origin) {
  var urls = [];
  var sources = item['asm:sources'] || [];
  sources.forEach(function (s) {
    if (s && s.url) urls.push({ url: s.url, origin: origin, title: s.title || '' });
  });
  var timeline = item['asm:reverseTimeline'] || item['asm:developmentTimeline'] || [];
  timeline.forEach(function (t) {
    (t.sources || []).forEach(function (src) {
      if (typeof src === 'string' && /^https?:/.test(src)) {
        urls.push({ url: src, origin: origin + ' → timeline', title: t.title || '' });
      } else if (src && src.url) {
        urls.push({ url: src.url, origin: origin + ' → timeline', title: t.title || '' });
      }
    });
  });
  return urls;
}

function readJsonDir(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(function (f) { return f.endsWith('.json'); }).map(function (f) {
    var full = path.join(dir, f);
    try {
      return { file: f, data: JSON.parse(fs.readFileSync(full, 'utf8')) };
    } catch (e) {
      console.error('Parse error in', f, e.message);
      return null;
    }
  }).filter(Boolean);
}

var all = [];
readJsonDir(path.join(ROOT, 'data', 'incidents')).forEach(function (x) {
  all = all.concat(collectUrlsFromItem(x.data, 'incidents/' + x.file));
});
readJsonDir(path.join(ROOT, 'data', 'radar')).forEach(function (x) {
  all = all.concat(collectUrlsFromItem(x.data, 'radar/' + x.file));
});

// Dedupe by URL (but keep first origin)
var seen = new Map();
all.forEach(function (e) {
  if (!seen.has(e.url)) seen.set(e.url, { url: e.url, origins: [e.origin] });
  else seen.get(e.url).origins.push(e.origin);
});
var urls = Array.from(seen.values());
console.log('Checking ' + urls.length + ' unique URLs (from ' + all.length + ' references)…\n');

async function checkOne(entry) {
  var ctrl = new AbortController();
  var t = setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS);
  try {
    var resp = await fetch(entry.url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { 'User-Agent': 'AIStrikeMap-LinkCheck/1.0 (+https://aistrikemap.org)' }
    });
    if (resp.status >= 400 || resp.status === 405) {
      // Retry with GET for sites that reject HEAD
      var g = await fetch(entry.url, {
        method: 'GET',
        redirect: 'follow',
        signal: ctrl.signal,
        headers: { 'User-Agent': 'AIStrikeMap-LinkCheck/1.0 (+https://aistrikemap.org)' }
      });
      entry.status = g.status;
      entry.finalUrl = g.url;
    } else {
      entry.status = resp.status;
      entry.finalUrl = resp.url;
    }
  } catch (e) {
    entry.status = 0;
    entry.error = e.name === 'AbortError' ? 'timeout' : e.message;
  } finally {
    clearTimeout(t);
  }
  return entry;
}

async function runPool(items, worker, concurrency) {
  var idx = 0;
  var results = [];
  async function next() {
    while (idx < items.length) {
      var my = idx++;
      results[my] = await worker(items[my]);
      process.stdout.write('.');
      if ((my + 1) % 50 === 0) process.stdout.write(' ' + (my + 1) + '\n');
    }
  }
  var workers = [];
  for (var i = 0; i < concurrency; i++) workers.push(next());
  await Promise.all(workers);
  return results;
}

(async () => {
  var results = await runPool(urls, checkOne, CONCURRENCY);
  console.log('\n');

  var broken = results.filter(function (r) { return r.status === 0 || r.status >= 400; });
  var redirects = results.filter(function (r) { return r.finalUrl && r.finalUrl !== r.url && !broken.includes(r); });

  console.log('\n=== RESULTS ===');
  console.log('Total:    ' + results.length);
  console.log('OK:       ' + (results.length - broken.length));
  console.log('Broken:   ' + broken.length);
  console.log('Redirects:' + redirects.length);

  if (broken.length) {
    console.log('\n=== BROKEN LINKS ===');
    broken.sort(function (a, b) { return a.origins[0].localeCompare(b.origins[0]); });
    broken.forEach(function (r) {
      console.log('\n[' + (r.status || 'ERR') + '] ' + r.url);
      if (r.error) console.log('  Error: ' + r.error);
      r.origins.forEach(function (o) { console.log('  in ' + o); });
    });
  }

  // Write JSON report
  fs.writeFileSync(
    path.join(ROOT, 'link-check-report.json'),
    JSON.stringify({ generated: new Date().toISOString(), total: results.length, broken: broken, redirects: redirects.slice(0, 30) }, null, 2),
    'utf8'
  );
  console.log('\nReport written to link-check-report.json');

  process.exit(broken.length ? 1 : 0);
})();
