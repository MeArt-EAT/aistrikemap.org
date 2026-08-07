#!/usr/bin/env node
/**
 * Generate RSS (Atom) feed for AIStrikeMap Radar situations.
 * Run after adding/updating radar data: node scripts/generate-feed.js
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://aistrikemap.org';
const FEED_TITLE = 'AIStrikeMap — AI Live-Radar';
const FEED_SUBTITLE = 'Laufende KI-Ereignisse mit offenem Ausgang / Ongoing AI events with open outcomes';
const AUTHOR = 'AIStrikeMap';

const radarFile = path.join(__dirname, '..', 'data', 'all-radar.json');
const outFile = path.join(__dirname, '..', 'feed.xml');

if (!fs.existsSync(radarFile)) {
  console.log('No all-radar.json found. Run bundle-incidents.js first.');
  process.exit(1);
}

var situations = JSON.parse(fs.readFileSync(radarFile, 'utf8'));

// Sort by last updated (newest first)
situations.sort(function (a, b) {
  var da = (a['asm:metadata'] && a['asm:metadata'].lastUpdated) || a.startDate || '';
  var db = (b['asm:metadata'] && b['asm:metadata'].lastUpdated) || b.startDate || '';
  return db.localeCompare(da);
});

var updated = new Date().toISOString();

function esc(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getSlug(s) {
  var id = s['@id'] || '';
  return id.split('/').pop();
}

// Radar-Daten sind seit der Bilingual-Migration nur noch in *_de / *_en
// vorhanden. Der Feed ist deutschsprachig, also DE zuerst; die unsuffigierten
// Namen bleiben als Fallback fuer aeltere Datensaetze stehen.
function pick(obj, base) {
  if (!obj) return '';
  return obj[base + '_de'] || obj[base] || obj[base + '_en'] || '';
}

// Atom verlangt volles RFC3339. Die Daten liefern YYYY, YYYY-MM oder
// YYYY-MM-DD - unvollstaendige Angaben auf den Monats-/Jahresanfang setzen.
function toRfc3339(dateStr, fallback) {
  var m = /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(String(dateStr || '').trim());
  if (!m) return fallback;
  return m[1] + '-' + (m[2] || '01') + '-' + (m[3] || '01') + 'T00:00:00Z';
}

var entries = situations.map(function (s) {
  var slug = getSlug(s);
  var link = SITE_URL + '/radar.html?radar=' + slug;
  var status = s['asm:radarStatus'] || 'aktiv';
  var severity = s['asm:severity'] || 1;
  var dims = (s['asm:radarDimensions'] || []).join(', ');
  var lastUpdated = (s['asm:metadata'] && s['asm:metadata'].lastUpdated) || s.startDate || '';
  var published = s.startDate || '';

  // Build summary from description + latest timeline entry
  var summary = pick(s, 'description');
  var timeline = s['asm:developmentTimeline'] || [];
  if (timeline.length) {
    var newest = timeline.slice().sort(function (a, b) {
      return (b.date || '').localeCompare(a.date || '');
    })[0];
    if (newest) {
      summary += '\n\nNeuste Entwicklung (' + newest.date + '): ' +
        pick(newest, 'title') + ' — ' + pick(newest, 'description');
    }
  }

  return '  <entry>\n' +
    '    <title>' + esc(pick(s, 'name')) + ' [' + status.toUpperCase() + ']</title>\n' +
    '    <link href="' + esc(link) + '" rel="alternate" />\n' +
    '    <id>' + esc(link) + '</id>\n' +
    '    <updated>' + toRfc3339(lastUpdated, updated) + '</updated>\n' +
    (published ? '    <published>' + toRfc3339(published, updated) + '</published>\n' : '') +
    '    <summary type="text">' + esc(summary) + '</summary>\n' +
    '    <category term="' + esc(status) + '" label="Status: ' + esc(status) + '" />\n' +
    (dims ? '    <category term="dimensions" label="' + esc(dims) + '" />\n' : '') +
    '    <category term="severity-' + severity + '" label="Severity: ' + severity + '/5" />\n' +
    '  </entry>';
}).join('\n');

var feed = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<feed xmlns="http://www.w3.org/2005/Atom">\n' +
  '  <title>' + esc(FEED_TITLE) + '</title>\n' +
  '  <subtitle>' + esc(FEED_SUBTITLE) + '</subtitle>\n' +
  '  <link href="' + SITE_URL + '/feed.xml" rel="self" type="application/atom+xml" />\n' +
  '  <link href="' + SITE_URL + '/radar.html" rel="alternate" type="text/html" />\n' +
  '  <id>' + SITE_URL + '/radar</id>\n' +
  '  <updated>' + updated + '</updated>\n' +
  '  <author><name>' + esc(AUTHOR) + '</name></author>\n' +
  '  <rights>Data: CC BY-NC-SA 4.0 | Code: AGPL-3.0</rights>\n' +
  '  <generator>AIStrikeMap Feed Generator</generator>\n' +
  entries + '\n' +
  '</feed>\n';

fs.writeFileSync(outFile, feed, 'utf8');
console.log('Generated feed.xml with ' + situations.length + ' entries (' + Math.round(fs.statSync(outFile).size / 1024) + ' KB)');
