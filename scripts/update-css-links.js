#!/usr/bin/env node
/**
 * Replace the single `<link href="css/main.css">` tag in every
 * HTML file with the 9 split-CSS module links.
 *
 * Safe to rerun (idempotent — does nothing if already replaced).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const files = ['404.html', 'datenschutz.html', 'impressum.html',
               'index.html', 'methodik.html', 'radar.html', 'transparenz.html'];

const REPLACEMENT = [
  '  <link rel="stylesheet" href="css/base.css?v=1">',
  '  <link rel="stylesheet" href="css/layout.css?v=1">',
  '  <link rel="stylesheet" href="css/controls.css?v=1">',
  '  <link rel="stylesheet" href="css/filters.css?v=1">',
  '  <link rel="stylesheet" href="css/map-ui.css?v=1">',
  '  <link rel="stylesheet" href="css/detail-panel.css?v=1">',
  '  <link rel="stylesheet" href="css/cross-links.css?v=1">',
  '  <link rel="stylesheet" href="css/subpages.css?v=1">',
  '  <link rel="stylesheet" href="css/responsive.css?v=1">'
].join('\n');

const PATTERN = /^[ \t]*<link rel="stylesheet" href="css\/main\.css[^"]*">$/m;

files.forEach(function (f) {
  var full = path.join(ROOT, f);
  var text = fs.readFileSync(full, 'utf8');
  if (!PATTERN.test(text)) {
    console.log(f + ': no main.css link found (already migrated?)');
    return;
  }
  var next = text.replace(PATTERN, REPLACEMENT);
  fs.writeFileSync(full, next, 'utf8');
  console.log(f + ': updated');
});
