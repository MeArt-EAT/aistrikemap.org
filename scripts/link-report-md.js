#!/usr/bin/env node
/**
 * Build a human-readable markdown report from link-check-report.json.
 * Groups by file, separates likely-dead from likely-paywalled.
 */
const fs = require('fs');
const path = require('path');

var r = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'link-check-report.json'), 'utf8'));

function categorize(b) {
  if (b.status === 0) return 'network';
  if (b.status === 404 || b.status === 410) return 'dead';
  if (b.status >= 500) return 'server';
  if ([401, 403, 429].includes(b.status)) return 'blocked';
  return 'other';
}

// Group by file
var byFile = {};
r.broken.forEach(function (b) {
  b.origins.forEach(function (o) {
    var file = o.replace(' → timeline', '');
    if (!byFile[file]) byFile[file] = [];
    // Avoid duplicate URL entries per file (timeline + sources)
    if (!byFile[file].find(function (x) { return x.url === b.url; })) {
      byFile[file].push({ url: b.url, status: b.status, error: b.error, cat: categorize(b) });
    }
  });
});

var files = Object.keys(byFile).sort();
var md = '# Link Check Report\n\n';
md += 'Generated: ' + r.generated + '\n\n';
md += '**Total URLs checked:** ' + r.total + '  \n';
md += '**Broken references (unique per file):** ' + r.broken.length + '\n\n';

md += '## Legend\n\n';
md += '- **dead** (404/410): page genuinely removed — needs replacement or archival URL\n';
md += '- **network** (timeout/DNS): might be transient — recheck before replacing\n';
md += '- **server** (5xx): server issue — usually transient\n';
md += '- **blocked** (401/403/429): usually bot-detection / paywall — page likely exists, low priority\n\n';

md += '## Files with broken links\n\n';
files.forEach(function (f) {
  var list = byFile[f];
  var dead = list.filter(function (x) { return x.cat === 'dead'; });
  var net = list.filter(function (x) { return x.cat === 'network'; });
  var srv = list.filter(function (x) { return x.cat === 'server'; });
  var blk = list.filter(function (x) { return x.cat === 'blocked'; });
  md += '### ' + f + '\n\n';
  if (dead.length) {
    md += '**Dead (' + dead.length + '):**\n';
    dead.forEach(function (x) { md += '- `[' + x.status + ']` ' + x.url + '\n'; });
    md += '\n';
  }
  if (net.length) {
    md += '**Network (' + net.length + '):**\n';
    net.forEach(function (x) { md += '- `[ERR]` ' + x.url + ' — ' + (x.error || '') + '\n'; });
    md += '\n';
  }
  if (srv.length) {
    md += '**Server error (' + srv.length + '):**\n';
    srv.forEach(function (x) { md += '- `[' + x.status + ']` ' + x.url + '\n'; });
    md += '\n';
  }
  if (blk.length) {
    md += '<details><summary>Blocked / paywall (' + blk.length + ') — likely false positives</summary>\n\n';
    blk.forEach(function (x) { md += '- `[' + x.status + ']` ' + x.url + '\n'; });
    md += '\n</details>\n\n';
  }
});

fs.writeFileSync(path.join(__dirname, '..', 'docs', 'link-check.md'), md, 'utf8');
console.log('Wrote docs/link-check.md (' + files.length + ' files, ' + r.broken.length + ' broken refs)');
