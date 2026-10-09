#!/usr/bin/env node
/**
 * Turns link-check-v2-report.json into the Markdown body of the link-check issue.
 *
 * Why a separate script: the workflow used to build the body inline in bash,
 * where the backticks around the status code were run as command substitution
 * (every status showed up as an empty "[]"), and the full dead-link list blew
 * past GitHub's 65,536-character issue limit, so only the first ~260 of
 * ~1,900 entries were visible.
 *
 * The body now has: totals, dead links grouped by status/error, the hosts with
 * the most dead links, then the dead links themselves grouped by status - cut
 * off before the size limit with a note pointing to the full JSON artifact.
 *
 * Usage:
 *   node scripts/link-report-to-markdown.js [report.json] [out.md]
 *   (defaults: link-check-v2-report.json, issue-body.md)
 * Prints the number of dead links to stdout.
 */
'use strict';

const fs = require('fs');

const REPORT = process.argv[2] || 'link-check-v2-report.json';
const OUT = process.argv[3] || 'issue-body.md';
const MAX_CHARS = 60000; // GitHub rejects issue bodies above 65,536 characters
const TOP_HOSTS = 25;

function statusKey(d) {
  if (d.status) return String(d.status);
  var err = String(d.error || '').toLowerCase();
  if (/abort|timeout|timed out/.test(err)) return 'timeout';
  if (/enotfound|getaddrinfo/.test(err)) return 'dns';
  if (/certificate|ssl|tls/.test(err)) return 'tls';
  if (/econnrefused|econnreset|socket|fetch failed/.test(err)) return 'connection';
  return 'error';
}

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return '(invalid url)'; }
}

const r = JSON.parse(fs.readFileSync(REPORT, 'utf8'));
const c = r.counts || {};
const dead = r.dead || [];

const byStatus = new Map();
const byHost = new Map();
dead.forEach(function (d) {
  const k = statusKey(d);
  if (!byStatus.has(k)) byStatus.set(k, []);
  byStatus.get(k).push(d);
  const h = hostOf(d.url);
  byHost.set(h, (byHost.get(h) || 0) + 1);
});
// Most actionable first: gone (404/410), unreachable hosts, server errors;
// bot-wall answers (401/403/406/429) last - they are usually live pages
// that block the CI runner and would otherwise fill the whole issue.
const BOT_WALL = { '401': 1, '403': 1, '406': 1, '429': 1 };
function rank(k) {
  if (k === '404' || k === '410') return 0;
  if (k === 'dns' || k === 'tls' || k === 'connection' || k === 'error') return 1;
  if (/^5\d\d$/.test(k) || k === 'timeout') return 2;
  if (BOT_WALL[k]) return 4;
  return 3;
}
const statuses = Array.from(byStatus.keys()).sort(function (a, b) {
  return rank(a) - rank(b) || byStatus.get(b).length - byStatus.get(a).length;
});

const head = [];
head.push('## Link Check V2 — ' + (r.generated || new Date().toISOString()).slice(0, 10));
head.push('');
head.push('**Total:** ' + r.total + '  ');
head.push('**OK:** ' + (c.ok || 0) + '  ');
head.push('**Paywall:** ' + (c.paywall || 0) + '  ');
head.push('**Archived:** ' + (c.archived || 0) + '  ');
head.push('**Dead:** ' + (c.dead || 0));
if (dead.length) {
  head.push('');
  head.push('### Dead links by status');
  head.push('');
  head.push('| Status | Links |');
  head.push('|---|---|');
  statuses.forEach(function (k) { head.push('| ' + k + ' | ' + byStatus.get(k).length + ' |'); });
  head.push('');
  head.push('### Hosts with the most dead links');
  head.push('');
  head.push('| Host | Links |');
  head.push('|---|---|');
  Array.from(byHost.entries()).sort(function (a, b) { return b[1] - a[1]; }).slice(0, TOP_HOSTS)
    .forEach(function (e) { head.push('| ' + e[0] + ' | ' + e[1] + ' |'); });
}

let body = head.join('\n') + '\n';
let listed = 0;
const tail = function (rest) {
  return '\n_' + rest + ' more dead links not listed (issue size limit). The full list with origins is in the `link-check-v2-report` artifact of this workflow run._\n';
};
outer:
for (const k of statuses) {
  let section = '\n### Status ' + k + ' (' + byStatus.get(k).length + ')\n\n';
  if (body.length + section.length + 200 > MAX_CHARS) break;
  body += section;
  for (const d of byStatus.get(k)) {
    const lines = ['- ' + d.url];
    (d.origins || []).forEach(function (o) { lines.push('  - in ' + o); });
    const block = lines.join('\n') + '\n';
    if (body.length + block.length + 200 > MAX_CHARS) break outer;
    body += block;
    listed++;
  }
}
if (listed < dead.length) body += tail(dead.length - listed);

fs.writeFileSync(OUT, body, 'utf8');
console.log(dead.length);
