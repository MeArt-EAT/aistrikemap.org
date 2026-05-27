#!/usr/bin/env node
/**
 * scripts/audit-bilingual-incidents.js
 *
 * Automatisierter Audit für die bilinguale Incident-Migration. Prüft jeden
 * der 206 Incidents auf strukturelle und semantische Plausibilität der
 * englischen Übersetzungen. Schreibt einen Report nach
 * `audit-translation-report.md` und gibt eine Zusammenfassung auf stdout aus.
 *
 * Geprüft wird pro Datei:
 *  - Strukturell: existiert für jedes *_de Feld ein *_en Feld?
 *  - Sprachprüfung: enthält das _en-Feld Umlaute (ä/ö/ü/ß) oder klar deutsche
 *    Funktionswörter (der/die/das/eine/ist/und/zum/von/mit/auch/durch)?
 *  - Eigennamen-Erhaltung: kommen Whitelist-Eigennamen aus dem Glossar, die
 *    im _de-Feld stehen, auch im _en-Feld vor?
 *  - Längen-Plausibilität: länge_en / länge_de muss zwischen 0.5 und 2.5 liegen.
 *  - Array-Länge: affectedRights_de und _en müssen identische Länge haben.
 *
 * Verdachtsfälle werden gesammelt, NICHT die sauberen Files.
 */
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'data', 'incidents');
const GLOSSARY = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'translation-glossary.json'), 'utf8'));
const PROPER_NAMES = GLOSSARY.proper_names_keep_unchanged || [];

const GERMAN_FUNCTION_WORDS = [
  '\\bder\\b', '\\bdie\\b', '\\bdas\\b', '\\bein\\b', '\\beine\\b', '\\beinem\\b', '\\beinen\\b', '\\beiner\\b',
  '\\bist\\b', '\\bsind\\b', '\\bund\\b', '\\boder\\b', '\\baber\\b',
  '\\bzum\\b', '\\bzur\\b', '\\bvon\\b', '\\bmit\\b', '\\bnach\\b', '\\bauch\\b', '\\bdurch\\b',
  '\\bim\\b', '\\bdem\\b', '\\bden\\b', '\\bdes\\b',
  '\\bnicht\\b', '\\bwerden\\b', '\\bwurde\\b', '\\bwurden\\b',
  '\\bmüssen\\b', '\\bkönnen\\b', '\\bsollen\\b'
];
const GERMAN_FW_RE = new RegExp('(' + GERMAN_FUNCTION_WORDS.join('|') + ')', 'i');
const UMLAUT_RE = /[äöüÄÖÜß]/;

function hasGermanLeakage(text) {
  if (typeof text !== 'string' || !text) return null;
  if (UMLAUT_RE.test(text)) return 'umlaut';
  if (GERMAN_FW_RE.test(text)) return 'german-word';
  return null;
}

function lengthRatio(de, en) {
  if (!de || !en || typeof de !== 'string' || typeof en !== 'string') return null;
  if (de.length < 8) return null; // skip very short strings (often proper nouns)
  return en.length / de.length;
}

function findProperNamesIn(text) {
  if (!text) return [];
  return PROPER_NAMES.filter(name => text.indexOf(name) !== -1);
}

function checkPair(de, en, fieldPath, issues, dePoof, options) {
  options = options || {};
  if (de == null) return;
  if (en == null) {
    issues.push({ field: fieldPath, kind: 'missing_en', de: typeof de === 'string' ? de.slice(0, 80) : de });
    return;
  }
  if (typeof de === 'string' && typeof en === 'string') {
    // Identical strings: only flag for substantial text; tolerate <16 chars (likely proper nouns)
    if (de === en && de.length >= 16) {
      issues.push({ field: fieldPath, kind: 'identical_de_en', de: de.slice(0, 80), en: en.slice(0, 80) });
    }
    var leakage = hasGermanLeakage(en);
    if (leakage) {
      issues.push({ field: fieldPath, kind: 'german_leakage_' + leakage, de: de.slice(0, 80), en: en.slice(0, 80) });
    }
    var ratio = lengthRatio(de, en);
    if (ratio !== null && (ratio < 0.5 || ratio > 2.5)) {
      issues.push({ field: fieldPath, kind: 'length_ratio', ratio: ratio.toFixed(2), de: de.slice(0, 60), en: en.slice(0, 60) });
    }
    // Proper name preservation: any whitelist name in DE that disappeared in EN.
    var deNames = findProperNamesIn(de);
    var enNames = findProperNamesIn(en);
    for (var n of deNames) {
      if (enNames.indexOf(n) === -1) {
        issues.push({ field: fieldPath, kind: 'dropped_proper_name', name: n, de: de.slice(0, 60), en: en.slice(0, 60) });
      }
    }
  }
}

function auditFile(file) {
  const issues = [];
  let obj;
  try {
    obj = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    issues.push({ field: '<root>', kind: 'parse_error', msg: e.message });
    return issues;
  }

  checkPair(obj.name_de, obj.name_en, 'name', issues);
  checkPair(obj.description_de, obj.description_en, 'description', issues);

  if (obj.location) {
    checkPair(obj.location.name_de, obj.location.name_en, 'location.name', issues);
  }

  if (Array.isArray(obj['asm:actors'])) {
    obj['asm:actors'].forEach((a, i) => {
      checkPair(a.name_de, a.name_en, `actors[${i}].name`, issues);
    });
  }

  // Rights array
  const rd = obj['asm:affectedRights_de'];
  const re = obj['asm:affectedRights_en'];
  if (Array.isArray(rd)) {
    if (!Array.isArray(re)) {
      issues.push({ field: 'asm:affectedRights_en', kind: 'missing_en', de: rd.slice(0, 3).join(' | ') });
    } else {
      if (rd.length !== re.length) {
        issues.push({ field: 'asm:affectedRights', kind: 'array_length_mismatch', de: rd.length, en: re.length });
      }
      for (let i = 0; i < Math.min(rd.length, re.length); i++) {
        checkPair(rd[i], re[i], `affectedRights[${i}]`, issues);
      }
    }
  }

  // Timeline
  if (Array.isArray(obj['asm:reverseTimeline'])) {
    obj['asm:reverseTimeline'].forEach((it, i) => {
      checkPair(it.title_de, it.title_en, `timeline[${i}].title`, issues);
      checkPair(it.description_de, it.description_en, `timeline[${i}].description`, issues);
    });
  }

  // Sources
  if (Array.isArray(obj['asm:sources'])) {
    obj['asm:sources'].forEach((s, i) => {
      checkPair(s.title_de, s.title_en, `sources[${i}].title`, issues);
    });
  }

  return issues;
}

function main() {
  const files = fs.readdirSync(DIR)
    .filter(f => f.endsWith('.json') && !f.startsWith('_'))
    .map(f => path.join(DIR, f));

  const fileIssues = {};
  let totalIssues = 0, cleanFiles = 0, issueFiles = 0;
  const issueCounts = {};

  for (const file of files) {
    const issues = auditFile(file);
    if (issues.length === 0) {
      cleanFiles++;
    } else {
      issueFiles++;
      totalIssues += issues.length;
      fileIssues[path.basename(file)] = issues;
      issues.forEach(it => { issueCounts[it.kind] = (issueCounts[it.kind] || 0) + 1; });
    }
  }

  // Build markdown report
  let md = '# Audit: Bilinguale Incident-Migration\n\n';
  md += `Datum: ${new Date().toISOString().slice(0, 10)}\n\n`;
  md += `## Zusammenfassung\n\n`;
  md += `- Geprüfte Dateien: **${files.length}**\n`;
  md += `- Saubere Dateien (keine Findings): **${cleanFiles}**\n`;
  md += `- Dateien mit Findings: **${issueFiles}**\n`;
  md += `- Findings insgesamt: **${totalIssues}**\n\n`;
  md += `## Findings nach Kategorie\n\n`;
  const sortedKinds = Object.entries(issueCounts).sort((a, b) => b[1] - a[1]);
  for (const [kind, count] of sortedKinds) {
    md += `- \`${kind}\`: ${count}\n`;
  }
  md += '\n';

  if (issueFiles > 0) {
    md += `## Detail pro Datei\n\n`;
    const sortedFiles = Object.keys(fileIssues).sort();
    for (const f of sortedFiles) {
      md += `### ${f}\n\n`;
      for (const it of fileIssues[f]) {
        md += `- **${it.kind}** @ \`${it.field}\``;
        if (it.de) md += `\n  - DE: \`${it.de.replace(/`/g, "'")}\``;
        if (it.en) md += `\n  - EN: \`${it.en.replace(/`/g, "'")}\``;
        if (it.ratio) md += `\n  - ratio: ${it.ratio}`;
        if (it.name) md += `\n  - missing-name: ${it.name}`;
        if (it.msg) md += `\n  - msg: ${it.msg}`;
        md += '\n';
      }
      md += '\n';
    }
  }

  const reportPath = path.join(__dirname, '..', 'audit-translation-report.md');
  fs.writeFileSync(reportPath, md, 'utf8');

  console.log(`\n=== Bilingual Audit Report ===`);
  console.log(`Files scanned:           ${files.length}`);
  console.log(`Clean files:             ${cleanFiles}`);
  console.log(`Files with issues:       ${issueFiles}`);
  console.log(`Total findings:          ${totalIssues}`);
  if (sortedKinds.length) {
    console.log(`\nFindings by kind:`);
    for (const [k, c] of sortedKinds) console.log(`  ${c.toString().padStart(5)}  ${k}`);
  }
  console.log(`\nReport: ${reportPath}`);
}

if (require.main === module) main();
