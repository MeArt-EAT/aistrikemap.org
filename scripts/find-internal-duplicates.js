#!/usr/bin/env node
/**
 * scripts/find-internal-duplicates.js
 *
 * Prueft den promoteten Bestand (data/all-incidents.json) gegen SICH SELBST
 * auf semantische Dubletten. Reine Analyse, schreibt nur einen Report.
 *
 * Heuristik pro Paar (i < j):
 *   - Jaccard auf Token-Set aus name_de + name_en + description_de
 *   - +0.15 Boost wenn gleiches location.country
 *   - +0.10 Boost wenn gleiches startDate-Jahr
 *   Klassifizierung:
 *     strong  >= 0.62  (sehr wahrscheinlich Dublette)
 *     likely  0.50-0.62
 *
 * Output: data/internal-duplicates-report.md (sortiert nach Score)
 *
 * Usage: node scripts/find-internal-duplicates.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BUNDLE = path.join(ROOT, 'data', 'all-incidents.json');
const REPORT = path.join(ROOT, 'data', 'internal-duplicates-report.md');

const STOP = new Set(['und','oder','der','die','das','den','dem','des','ein','eine','einen','einem','einer','von','mit','zu','zum','zur','bei','aus','auf','fuer','für','im','am','als','auch','ist','wird','wurde','wurden','nach','the','of','and','or','to','in','on','at','for','from','by','with','is','are','was','were','be','a','an','ki','ai','usa','us','uk','eu','nach','ueber','über','gegen','2024','2025','2026']);

function translit(s){return (s||'').replace(/[äÄ]/g,'ae').replace(/[öÖ]/g,'oe').replace(/[üÜ]/g,'ue').replace(/ß/g,'ss');}
function toks(s){return new Set(translit(s).toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(t=>t.length>=4&&!STOP.has(t)));}
function jac(a,b){let i=0;for(const x of a)if(b.has(x))i++;const u=a.size+b.size-i;return u?i/u:0;}
function year(d){const m=(d||'').match(/(19|20)\d{2}/);return m?m[0]:null;}
function slugOf(it){return it['@id']?it['@id'].split('/').pop():(it.name||'?');}

function main(){
  const arr = JSON.parse(fs.readFileSync(BUNDLE,'utf8'));
  console.log('incidents:', arr.length);
  const items = arr.map(it=>({
    slug: slugOf(it),
    name: it.name_de||it.name||'',
    country: (it.location && it.location.address && it.location.address.addressCountry) || '',
    yr: year(it.startDate),
    tok: toks((it.name_de||'')+' '+(it.name_en||'')+' '+(it.description_de||'').slice(0,200)),
    sources: (it['asm:sources']||[]).length,
    hasTimeline: Array.isArray(it['asm:reverseTimeline']) && it['asm:reverseTimeline'].length>0
  }));

  const pairs = [];
  for(let i=0;i<items.length;i++){
    for(let j=i+1;j<items.length;j++){
      const a=items[i], b=items[j];
      if(a.tok.size===0||b.tok.size===0) continue;
      let s = jac(a.tok,b.tok);
      if(s < 0.34) continue; // cheap prefilter
      if(a.country && a.country===b.country) s+=0.15;
      if(a.yr && a.yr===b.yr) s+=0.10;
      if(s>=0.50) pairs.push({a,b,score:s});
    }
  }
  pairs.sort((x,y)=>y.score-x.score);

  const strong = pairs.filter(p=>p.score>=0.62);
  const likely = pairs.filter(p=>p.score>=0.50&&p.score<0.62);

  const L=[];
  L.push('# Interne Dubletten-Analyse — Bestand vs. sich selbst');
  L.push('');
  L.push('Stand: '+new Date().toISOString().slice(0,10)+' · Incidents: '+arr.length);
  L.push('');
  L.push('| Klasse | Paare |');
  L.push('|---|---|');
  L.push('| strong (>=0.62) | '+strong.length+' |');
  L.push('| likely (0.50-0.62) | '+likely.length+' |');
  L.push('');
  L.push('Empfehlung: strong-Paare manuell pruefen, schwaechere Version (weniger sources / keine Timeline) entfernen.');
  L.push('');
  for(const [title,list] of [['STRONG',strong],['LIKELY',likely]]){
    L.push('## '+title+' ('+list.length+')');
    L.push('');
    L.push('| Score | A (slug · src · TL) | B (slug · src · TL) |');
    L.push('|---|---|---|');
    for(const p of list){
      const fa=p.a.slug.slice(0,52)+' · '+p.a.sources+'s'+(p.a.hasTimeline?' · TL':'');
      const fb=p.b.slug.slice(0,52)+' · '+p.b.sources+'s'+(p.b.hasTimeline?' · TL':'');
      L.push('| '+p.score.toFixed(2)+' | '+fa+' | '+fb+' |');
    }
    L.push('');
  }
  fs.writeFileSync(REPORT, L.join('\n')+'\n','utf8');
  console.log('strong:',strong.length,' likely:',likely.length);
  console.log('report:', path.relative(ROOT,REPORT));
}
if(require.main===module) main();
