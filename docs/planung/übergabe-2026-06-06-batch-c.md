# Übergabe #5 — 2026-06-06 · AIAAIC Batch C

> 📍 **STAND: 2458 Incidents · Phase 1 Datenausbau · vor AIID & AIAAIC**
> Nächster Schritt: AIAAIC Batch D (pre-2015, niedrige Prio) ODER Reverse-Timelines.
> Schneller Überblick immer in `STATUS.md` (Projekt-Root).

---

## 1. Was diese Session passierte

**Bestand: 2154 → 2458** (+304 netto). Dritter und vorletzter AIAAIC-Import-Batch.

| Schritt | Ergebnis |
|---|---|
| AIAAIC 2015-2019 konvertiert | **331 Stubs** (`convert-aiaaic-to-candidates.js --batch C`) |
| 12 Chunks, 3 Agenten-Wellen à 4 | 311 verified, 19 needs-review, 1 rejected (Tek Fog — Story zurückgezogen) |
| Promotet (`--min-sources 2`) | 307 |
| Semantische Dubletten gemergt | 3 (IBM DiF, Obermeyer/Optum, Lovo) — 7 false-positives verschont |
| Audit | **0 Findings** (2458/2458 clean) |
| Commit | (folgt) |

**Verified-Quote 94%** — bester Batch bisher (Batch A 92%, Batch B 87%).
Trotz höherer Bestand-Überlappung (alte Klassiker wie Cambridge Analytica,
Tesla-Brown, Tay schon vorhanden) hat sich die Qualität deutlich gesteigert.

## 2. Liga-Position

| Datenbank | Incidents | Kuratierung |
|---|---|---|
| OECD AIM | ~15.490 | auto-gescraped (nicht vergleichbar) |
| **AIStrikeMap** | **2.458** | bilingual, Geo, Reverse-TL, 0 Findings |
| AIAAIC | ~2.249 | roh, CC BY-SA |
| AIID | ~1.361 | kuratiert |

AIStrikeMap ist jetzt **vor AIAAIC** und hat AIID fast verdoppelt.

## 3. Neue Werkzeuge

- **`scripts/fix-smart-quotes-chunks.js`** — neu. Idempotenter Smart-Quote-Fix
  für Agent-Output (`„X"`-Pattern → `\"X\"` JSON-escape). Brauchten wir, weil
  ein Welle-2-Agent typografische Quotes in description_de gesetzt hat → broken
  JSON. Pattern-basiert (nicht naive Single-Char-Replace), parst-validiert,
  übergeht saubere Files.

- **`scripts/merge-aiaaic-chunks.js --batch X`** — parametrisiert. Vorher
  hardcoded für Batch A. Jetzt findet via Glob das `aiaaic-batch-<X>-*-round-6.json`
  passend zum Batch-Argument. Wiederverwendbar für Batch D.

- **`scripts/merge-internal-duplicates.js`** — idempotent gemacht. Drops die
  bereits gemergt sind (z.B. aus Batch B), werden geskippt statt Throw. Konfig
  bleibt vollständig als Audit-Trail.

- **`scripts/fix-umlaut-transliterations.js`** — `Grossbritannien` ergänzt.

## 4. Batch-C-Lektionen (für Batch D)

- **JSON-Safety-Crash**: Ein Welle-2-Agent (chunk-03) hat im DE-Text
  typografische `„X"`-Quotes gesetzt und ASCII-Quote als Close → broken JSON,
  Merge-Skript crashte. Briefing-Härtung half nicht (war schon explicit), aber
  ein deterministisches Fix-Skript löst es post-hoc. **Briefing für Batch D mit
  klarem Code-Beispiel "ASCII-Quotes only" erweitern**, oder fix-smart-quotes
  vorm Merge defensiv laufen lassen.

- **Wave-Größe 4 ist solide**. Keine API-Crashes diesmal (Batch B hatte 3 von
  34 wegen Socket/Overloaded). 12 Agenten total, 0 Crashes, alle Writes ok per
  File-Check verifiziert. 45-Tool-Calls-Limit hielt zuverlässig (Agents
  brauchten 5-35 Calls).

- **Datums-Verifikation kritisch**: §1b im Briefing zahlte sich aus. Allein
  Welle 1 brachte ~30 Datums-Korrekturen über alle 4 Chunks (Stub-Jahr ≠
  Ereignisjahr). Bei Batch C besonders viele 2018/2019-Stubs, die in
  Wahrheit 2020-2024-Ereignisse waren (z.B. Brazil INSS Stub 2018 →
  2025-04-15 RoW-Report, Bunnings Stub 2018 → 2024-11-19 OAIC).

- **Mehr Bestand-Überlappung als A+B**: Cambridge Analytica, Tesla-Brown,
  Tay, COMPAS/Loomis, Gender-Shades — alles "Kanon"-Cases, alle schon
  drin. Daher Netto-Quote niedriger als Bruttoquote: 307 promoted aus 311
  verified (4 Slug-Kollisionen abgefangen), aber inhaltlich überlappen
  weitere ~20 mit Bestand (probable-dups Score 0.50-0.70). Diese laufen
  unter eigenen Slugs durch — find-internal-duplicates fängt 5 davon
  explizit, 3 wurden gemergt.

- **Sauberer Dedup-Lauf**: Temporäres Wegmoven aller alten Round-*-Files
  ins `_processed-pre-batch-c/`-Subfolder vor dem Dedup-Run hat den Report
  sauber gehalten (nur Batch C × Bestand statt All × All). Praxis für
  Batch D übernehmen.

## 5. Dubletten-Bereinigung (3 gemergt)

`find-internal-duplicates.js` fand 5 strong + 5 likely. Davon 3 echte gemergt:
- **IBM Diversity in Faces** — alte und neue Variante des berühmten 1M-Flickr-Fotos-Falls 2019-03-12
- **Obermeyer/Optum** — Studie zu Optum's Bias bei Health-Care-Algorithmus 2019-10-24
- **Lovo Sprecher:innen-Klage** — Voice-Cloning ohne Einwilligung 2024-05-16

7 false-positives verschont. **Drei neue Einträge in der STATUS.md-Liste:**
ChatGPT-Phishing ≠ Bard-Phishing · IBM/MegaFace (zwei verschiedene Datasets aus
demselben FT/NBC-Investigationskomplex Anfang 2019).

## 6. Inhaltliche Cluster Batch C (2015-2019)

- **2015 Klassiker**: Google Photos Gorillas (Jacky Alcine), Tay (Microsoft
  16h-Crash), VW-Roboter Baunatal, Dallas-Polizei-Sprengstoff-Roboter,
  COMPAS/Loomis-Urteil, Tesla-Brown (erster Autopilot-Tod), erste BIPA-Klage
  gegen Facebook, FindFace Russland, BeautyAI bevorzugt Weiße.
- **2016-2017 Foundational Bias**: Carnegie-Mellon Google-Job-Ads Gender Bias,
  Twitter Tay, ProPublica Facebook-Wohnungs-Ausschluss, Gender Shades
  (Buolamwini), Cambridge Analytica, IBM Watson Cancer-Fail (STAT-Story).
- **2018-2019 Surveillance**: Royal Free / DeepMind ICO-Ruling, iFlytek
  Xinjiang, Hikvision/SenseNets China, IBM DiF + MegaFace + Duke MTMC
  (Exposing.AI-Komplex), Robert Williams (Detroit), Bah (NY ICE), Tesla-Huang,
  Uber-Herzberg (Tempe), Lion Air 610 (MCAS), Aadhaar-Hungertote.
- **PR-Pannen vom Severity 1**: BlessU-2 Roboterpriester, Sophia Saudi-Staatsbürgerschaft,
  Mindar Kyoto, Knightscope Springbrunnen-Sturz, Pepper Phone-Case-Bot.

## 7. Nächste Session — Optionen

**Mengen-Hebel:** AIAAIC **Batch D** (pre-2015, ~300 Stubs). Niedrige Prio
(frühe Cases, niedrige Aktualität), aber für historische Tiefe wertvoll
(Robodebt-Vorläufer, frühe COMPAS-Vorläufer, ProPublica-Algo-Stories).
```
node scripts/convert-aiaaic-to-candidates.js --years 2010,2011,2012,2013,2014 --batch D
# dann Chunks à 30, Welle à 4 (gleicher Workflow wie C), File-Check immer.
# Vor Dedup: alte round-6 Files ins _processed-pre-batch-d/ schieben.
```
Erwartung: ~200-250 netto (höhere Bestand-Überlappung wegen Klassikern).

**Tiefe:** Reverse-Timelines für severity-5-Cases ohne TL. Liste:
```bash
node -e "const a=require('./data/all-incidents.json'); a.filter(i=>i['asm:severity']===5 && !(i['asm:reverseTimeline']||[]).length).forEach(i=>console.log(i['@id'].split('/').pop()))" | head -20
```
Briefing: `data/incident-candidates/_timeline-briefing.md`. Item-Werkzeug
fehlt noch — TL ist Per-Hand-Recherche pro Case (~10-20 Min pro TL).

**needs-review-Cases promoten**: In `aiaaic-batch-{a,b,c}-*-round-6.json`
liegen zusammen ~180 Cases auf needs-review. Manuell sichten und 20-30
weitere promoten würde bei geringem Aufwand ~+20 Bestand bringen.

**Frontend**: Bei 2458 noch ok, aber das Bundle ist jetzt 12.6 MB
unkomprimiert. Cluster-Plugin und gzip tragen es vermutlich bis ~3500-4000.
Vor Batch D Marker-Performance + Bundle-Lazy-Loading evaluieren.

## 8. Disk-Hygiene (eingehalten)

Trotz 12 Background-Agenten: Temp-Footprint blieb winzig. Chunks nach Merge
gelöscht. 30 alte Round-Files temporär ins `_processed-pre-batch-c/`-Subfolder
für sauberen Dedup-Lauf, danach zurück (alle 28+2 → 31 verbleibende).
Audit-Reports + dedup-Reports updated, nicht akkumuliert.

---

*Stand: 2026-06-06. Commit: (folgt). Bestand: 2154 → 2458 (+14 %).*
