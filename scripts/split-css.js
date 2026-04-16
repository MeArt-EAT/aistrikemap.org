#!/usr/bin/env node
/**
 * Split css/main.css into 8 focused modules based on section comment
 * markers. Deterministic — rerunning overwrites the 8 target files.
 *
 * Run once: node scripts/split-css.js
 *   then remove css/main.css manually, update <link> tags in HTML.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'css', 'main.css');
const OUT = path.join(ROOT, 'css');

var text = fs.readFileSync(SRC, 'utf8');
var lines = text.split('\n');

// Define target modules and which section comments go into them
var modules = {
  'base.css':         ['AIStrikeMap — Dark Theme', 'Skip Link'],
  'layout.css':       ['Header', 'Report incident CTA button', 'Language switcher'],
  'controls.css':     ['Time range select'],
  'filters.css':      ['Filter Panel'],
  'map-ui.css':       ['Main Map Container', 'Incident Counter', 'Map Legend'],
  'detail-panel.css': ['Detail Panel', 'Badges', 'Actors', 'Reverse Timeline', 'Sources List'],
  'cross-links.css':  ['Related items (cross-links)', 'Inline radar status (for cross-links)'],
  'subpages.css':     ['Footer', 'Page Layout (for subpages)', 'Tables', 'Active nav link', 'AI Disclosure Banner']
};
// Responsive @media blocks go into their own file
var RESPONSIVE_MODULE = 'responsive.css';

// Build inverse lookup: section title → module
var sectionToModule = {};
Object.keys(modules).forEach(function (mod) {
  modules[mod].forEach(function (s) { sectionToModule[s] = mod; });
});

// Walk lines, detect sections by `/* Title */` comments at column 0
var buckets = {};
Object.keys(modules).forEach(function (m) { buckets[m] = []; });
buckets[RESPONSIVE_MODULE] = [];

var currentModule = null;
var inResponsive = false;
var braceDepth = 0;

for (var i = 0; i < lines.length; i++) {
  var line = lines[i];

  // Detect section header (single-line comment at column 0)
  var m = /^\/\* (.+?) \*\/\s*$/.exec(line);
  if (m) {
    var title = m[1];
    if (sectionToModule[title]) {
      currentModule = sectionToModule[title];
      inResponsive = false;
    } else if (/Mobile|Small phones/.test(title)) {
      // these precede a @media block
      currentModule = null;
      inResponsive = true;
    }
  }

  // Detect @media block start → responsive module
  if (/^@media/.test(line)) {
    inResponsive = true;
    currentModule = null;
    braceDepth = 0;
  }

  var target = inResponsive ? RESPONSIVE_MODULE : currentModule;
  if (target) {
    buckets[target].push(line);
  }

  // Track braces for @media blocks
  if (inResponsive) {
    for (var c = 0; c < line.length; c++) {
      if (line[c] === '{') braceDepth++;
      else if (line[c] === '}') {
        braceDepth--;
        if (braceDepth === 0) {
          // @media block ended
          inResponsive = false;
          break;
        }
      }
    }
  }
}

// Header for each split file
var HEADER_TEMPLATE = '/* AIStrikeMap — {title}\n * Split from main.css. See css/README.md for module map.\n */\n\n';
var TITLES = {
  'base.css':         'Base: tokens, reset, typography, skip-link',
  'layout.css':       'Layout: header, nav, language switcher, CTA',
  'controls.css':     'Controls: selects, search input, nav toggle',
  'filters.css':      'Filter panel: checkboxes, sliders, toggle',
  'map-ui.css':       'Map UI: container, counter, legend',
  'detail-panel.css': 'Detail panel: timeline, sources, badges, actors',
  'cross-links.css':  'Cross-links: related-list, inline radar-status',
  'subpages.css':     'Subpages: footer, page layout, tables, disclosures',
  'responsive.css':   'Responsive: mobile + small-phone breakpoints'
};

// Write files
var order = ['base.css', 'layout.css', 'controls.css', 'filters.css',
             'map-ui.css', 'detail-panel.css', 'cross-links.css',
             'subpages.css', 'responsive.css'];

var report = [];
order.forEach(function (mod) {
  var content = HEADER_TEMPLATE.replace('{title}', TITLES[mod]) +
                buckets[mod].join('\n').replace(/^\n+/, '').replace(/\n+$/, '\n');
  fs.writeFileSync(path.join(OUT, mod), content, 'utf8');
  report.push({ file: mod, lines: buckets[mod].length });
});

// Sanity check: count lines that ended up in a bucket
var totalBucketed = order.reduce(function (a, m) { return a + buckets[m].length; }, 0);
console.log('Split complete:');
report.forEach(function (r) { console.log('  css/' + r.file + ': ' + r.lines + ' lines'); });
console.log('\nSource: ' + lines.length + ' lines');
console.log('Bucketed: ' + totalBucketed + ' lines');
console.log('Lost (whitespace/skipped): ' + (lines.length - totalBucketed));

// Write README
var readme = '# CSS module map\n\n';
readme += 'Split from former `main.css` (1070 lines).\n';
readme += 'Each file < 500 lines, one concern per file.\n\n';
readme += '| File | Concern | Lines |\n|---|---|---|\n';
report.forEach(function (r) {
  readme += '| `' + r.file + '` | ' + TITLES[r.file] + ' | ' + r.lines + ' |\n';
});
readme += '\nOther CSS files (not split):\n';
readme += '- `leaflet-custom.css` — Leaflet markers, pulse animations, ticker\n';
readme += '- `radar.css` — Radar page-specific styles\n\n';
readme += '## Load order\n\n';
readme += 'All HTML pages should load modules in this order (specificity bottom-up):\n\n';
readme += '```html\n';
order.forEach(function (f) { readme += '<link rel="stylesheet" href="css/' + f + '">\n'; });
readme += '<link rel="stylesheet" href="css/leaflet-custom.css">\n';
readme += '<link rel="stylesheet" href="css/radar.css"> <!-- radar.html only -->\n';
readme += '```\n';
fs.writeFileSync(path.join(OUT, 'README.md'), readme, 'utf8');
console.log('\nWrote css/README.md');
