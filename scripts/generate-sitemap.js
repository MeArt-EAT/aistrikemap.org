#!/usr/bin/env node
/**
 * Generate sitemap.xml for AIStrikeMap.
 * Includes static pages + all incidents (?incident=...) + all radar (?radar=...).
 * Run after adding incidents/radar: node scripts/generate-sitemap.js
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://aistrikemap.org';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'daily' },
  { loc: '/radar.html', priority: '0.9', changefreq: 'daily' },
  { loc: '/methodik.html', priority: '0.5', changefreq: 'monthly' },
  { loc: '/transparenz.html', priority: '0.5', changefreq: 'monthly' },
  { loc: '/impressum.html', priority: '0.3', changefreq: 'yearly' },
  { loc: '/datenschutz.html', priority: '0.3', changefreq: 'yearly' }
];

function xmlEsc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function getLastMod(filePath, fallback) {
  try {
    return fs.statSync(filePath).mtime.toISOString().split('T')[0];
  } catch (e) {
    return fallback;
  }
}

var urls = staticPages.map(function (p) {
  return '  <url>\n' +
    '    <loc>' + SITE_URL + p.loc + '</loc>\n' +
    '    <lastmod>' + today + '</lastmod>\n' +
    '    <changefreq>' + p.changefreq + '</changefreq>\n' +
    '    <priority>' + p.priority + '</priority>\n' +
    '  </url>';
});

// Incidents
var incidentsDir = path.join(__dirname, '..', 'data', 'incidents');
if (fs.existsSync(incidentsDir)) {
  var files = fs.readdirSync(incidentsDir).filter(function (f) { return f.endsWith('.json'); });
  files.forEach(function (f) {
    var slug = f.replace(/\.json$/, '');
    var incidentId = 'https://aistrikemap.org/incidents/' + slug;
    var lastmod = getLastMod(path.join(incidentsDir, f), today);
    urls.push('  <url>\n' +
      '    <loc>' + SITE_URL + '/?incident=' + xmlEsc(incidentId) + '</loc>\n' +
      '    <lastmod>' + lastmod + '</lastmod>\n' +
      '    <changefreq>monthly</changefreq>\n' +
      '    <priority>0.7</priority>\n' +
      '  </url>');
  });
}

// Radar
var radarDir = path.join(__dirname, '..', 'data', 'radar');
if (fs.existsSync(radarDir)) {
  var rFiles = fs.readdirSync(radarDir).filter(function (f) { return f.endsWith('.json'); });
  rFiles.forEach(function (f) {
    var slug = f.replace(/\.json$/, '');
    var lastmod = getLastMod(path.join(radarDir, f), today);
    urls.push('  <url>\n' +
      '    <loc>' + SITE_URL + '/radar.html?radar=' + slug + '</loc>\n' +
      '    <lastmod>' + lastmod + '</lastmod>\n' +
      '    <changefreq>weekly</changefreq>\n' +
      '    <priority>0.8</priority>\n' +
      '  </url>');
  });
}

var xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.join('\n') + '\n' +
  '</urlset>\n';

var outFile = path.join(__dirname, '..', 'sitemap.xml');
fs.writeFileSync(outFile, xml, 'utf8');
console.log('Generated sitemap.xml with ' + urls.length + ' URLs (' + Math.round(fs.statSync(outFile).size / 1024) + ' KB)');
