#!/usr/bin/env node
/**
 * scripts/patch-html-i18n-meta.js
 *
 * Patcht alle 9 HTML-Dateien:
 *  1. <title>            → ergänzt data-i18n="meta.{page}.title"
 *  2. meta[name=description]    → data-i18n-content="meta.{page}.description"
 *  3. meta[property=og:title]   → data-i18n-content="meta.{page}.title"
 *  4. meta[property=og:description] → data-i18n-content="meta.{page}.description"
 *  5. meta[name=twitter:title]      → data-i18n-content="meta.{page}.title"
 *  6. meta[name=twitter:description] → data-i18n-content="meta.{page}.description"
 *  7. .lang-switcher aria-label  → data-i18n-aria="a11y.langSwitcher"
 *  8. .lang-btn[data-lang=de] aria-label → data-i18n-aria="a11y.langDe"
 *  9. .lang-btn[data-lang=en] aria-label → data-i18n-aria="a11y.langEn"
 *
 * Idempotent: erkennt bereits gepatchte Tags am vorhandenen data-i18n-* Attribut.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const PAGES = {
  'index.html':            'index',
  'radar.html':            'radar',
  'labor-impact.html':     'labor',
  'labor-impact-map.html': 'laborMap',
  'methodik.html':         'methodology',
  'transparenz.html':      'transparency',
  'impressum.html':        'imprint',
  'datenschutz.html':      'privacy',
  '404.html':              '404'
};

function patchTitle(html, page) {
  return html.replace(
    /<title(?![^>]*data-i18n)([^>]*)>([^<]*)<\/title>/,
    `<title data-i18n="meta.${page}.title"$1>$2</title>`
  );
}

function patchMeta(html, attrName, attrValue, i18nKey) {
  // Match <meta name="..." content="..."> or <meta property="..." content="..."> without data-i18n-content
  const re = new RegExp(
    `<meta(?![^>]*data-i18n-content)([^>]*\\s)(${attrName})="${attrValue}"([^>]*?)>`
  );
  return html.replace(re, (m, pre, an, rest) => {
    return `<meta${pre}${an}="${attrValue}"${rest} data-i18n-content="${i18nKey}">`;
  });
}

function patchLangSwitcherAria(html) {
  let out = html;
  // Container aria-label="Sprache / Language"
  out = out.replace(
    /<div([^>]*class="lang-switcher"[^>]*?)(?<!data-i18n-aria=")\s+aria-label="Sprache \/ Language"/,
    '<div$1 data-i18n-aria="a11y.langSwitcher" aria-label="Sprache / Language"'
  );
  // Button DE
  out = out.replace(
    /<button([^>]*class="lang-btn"[^>]*data-lang="de"[^>]*?)\s+aria-label="Deutsch"/,
    '<button$1 data-i18n-aria="a11y.langDe" aria-label="Deutsch"'
  );
  // Button EN
  out = out.replace(
    /<button([^>]*class="lang-btn"[^>]*data-lang="en"[^>]*?)\s+aria-label="English"/,
    '<button$1 data-i18n-aria="a11y.langEn" aria-label="English"'
  );
  return out;
}

function main() {
  let totalChanges = 0;
  for (const [file, page] of Object.entries(PAGES)) {
    const fp = path.join(ROOT, file);
    if (!fs.existsSync(fp)) {
      console.warn('  skip (missing):', file);
      continue;
    }
    const before = fs.readFileSync(fp, 'utf8');
    let after = before;
    after = patchTitle(after, page);
    after = patchMeta(after, 'name', 'description', `meta.${page}.description`);
    after = patchMeta(after, 'property', 'og:title', `meta.${page}.title`);
    after = patchMeta(after, 'property', 'og:description', `meta.${page}.description`);
    after = patchMeta(after, 'name', 'twitter:title', `meta.${page}.title`);
    after = patchMeta(after, 'name', 'twitter:description', `meta.${page}.description`);
    after = patchLangSwitcherAria(after);

    if (after !== before) {
      fs.writeFileSync(fp, after, 'utf8');
      // Count changes by diff lines
      const diffLines = before.split('\n').length === after.split('\n').length
        ? before.split('\n').filter((l, i) => l !== after.split('\n')[i]).length
        : Math.abs(before.split('\n').length - after.split('\n').length);
      totalChanges += diffLines;
      console.log(`  patched  ${file}  (~${diffLines} line(s))`);
    } else {
      console.log(`  no-op    ${file}  (already patched or no match)`);
    }
  }
  console.log(`\nTotal modified lines (approx): ${totalChanges}`);
}

if (require.main === module) main();
