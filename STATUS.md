# 📍 AIStrikeMap — AKTUELLER STAND

> **Diese Datei zuerst lesen.** Sie zeigt immer den aktuellen Projektstand.
> Bei jeder Session aktualisieren. Details in `docs/planung/übergabe-*.md`.

---

## ⏱️ STAND: 2026-06-06

| | |
|---|---|
| 📊 **Bestand** | **2457 Incidents** · 977 mit Reverse-TL (39.8 %) · 0 Audit-Findings · Lite-Bundle 1.6 MB gzip |
| 🔢 **Übergabe-Nr** | **#5** (2026-06-06) |
| 🚩 **Phase** | 1 — Datenausbau (Items 1–93) |
| ✅ **Zuletzt fertig** | **Frontend-Performance-Refactor**: Map lädt jetzt `all-incidents-lite.json` (ohne TL/Quellen, 3.9→1.6 MB gzip, −59 %), Detail-Panel lazy-lädt Einzeldatei beim Klick. Cache-Busting `?v=Date.now()` entfernt (GH-Pages-ETag greift). Länderzähler-Bug 708→**135** gefixt. Verifiziert im Preview, live. |
| ➡️ **Nächster Schritt** | **Sev-3-Block** (953 ohne TL, der grosse Rest) — skaliert jetzt sauber, da TL nur noch lazy/Einzeldatei · ODER AIAAIC Batch D · ODER Dedup-Backlog |
| 🏆 **Liga** | **Größte kuratierte AI-Incident-DB weltweit** — vor AIID (~1361) und AIAAIC (~2249 roh) |

**In einem Satz:** AIStrikeMap ist nach drei AIAAIC-Import-Batches (A+B+C, 2015-2026)
die größte *kuratierte* AI-Incident-Datenbank mit Menschenrechts-Frame —
bilingual DE/EN, Geo-Mapping, Reverse-Timelines, 0 Audit-Findings.

---

## 🎯 Offene Fronten (nach Priorität)

1. **AIAAIC Batch D** (pre-2015, ~300 Stubs) — letzter AIAAIC-Block, niedrige
   Prio (frühe Cases haben weniger Aktualität). Bringt aber historische Tiefe.
   Workflow: siehe Memory `aiaaic-import-workflow` + Übergabe #5.
2. **Reverse-Timelines** — 977 von 2457 (39.8 %) haben die TL (Kern-Feature).
   **Sev-5 + Sev-4 zu 100 % geschlossen** ✓. **Sev-3: 953 ohne TL** (der grosse
   Rest, ~10 % gemacht). Sev-2/Sev-1: niedrige Prio.
   **Methoden-Lektion:** Der `Workflow`-Tool-Runtime stallt in dieser Umgebung
   nach ~30 Min / ~32 Agenten still (kein Fehler, keine Notification — per
   File-mtime-Check erkennbar). Resume via `resumeFromRunId` macht Cache-sicher
   weiter (+~32/Lauf), aber **die manuellen Agenten-Wellen (4-5 Agents × 4 Cases)
   sind zuverlässiger** (0 Crashes über 22 Wellen) und schneller — für Sev-3
   bevorzugen. Briefing: `_timeline-briefing.md`.
3. ~~Frontend-Recheck~~ ✓ **ERLEDIGT** (2026-06-18): Lite-Bundle + Lazy-Detail +
   Caching-Fix. Erstabruf 3.9→1.6 MB gzip; TL-Wachstum trifft nur noch die
   lazy-geladenen Einzeldateien. `bundle-incidents.js` erzeugt jetzt
   `all-incidents-lite.json` (Map) neben `all-incidents.json` (Scripts).
4. **needs-review-Cases** — Batch A+B+C haben zusammen ~180 needs-review (oft
   Bestand-Dubletten oder schwache Quellen) in den `*-round-6.json`-Files,
   nicht promotet. Manuell sichten lohnt für 20-30 weitere Promotes.

## 🧱 Bekannte false-positives (KEIN Handlungsbedarf)
Dubletten-Check meldet dauerhaft als "strong/likely", sind aber verschiedene
Cases — NICHT mergen:
- Uber-Bußgeld (290 Mio) ≠ Clearview (30,5 Mio)
- Disney/Midjourney ≠ Disney/MiniMax
- Coupang ≠ Naver
- Tesla-Harley ≠ Tesla-Yamaha
- ChatGPT-Phishing ≠ Bard-Phishing
- IBM-DiF/1M-Faces ≠ MegaFace (UW-Washington) — beide aus Exposing.AI-Welle 2019, verschiedene Datasets

## 📦 Pipeline-Werkzeuge (scripts/)
`convert-aiaaic-to-candidates.js` · `merge-aiaaic-chunks.js --batch X` ·
`find-internal-duplicates.js` · `merge-internal-duplicates.js` ·
`fix-smart-quotes-chunks.js` (neu Batch C) · `promote-candidates.js` ·
`fix-umlaut-transliterations.js` · `bundle-incidents.js` ·
`audit-bilingual-incidents.js`

Briefings: `data/incident-candidates/_enrichment-briefing.md` (Abschnitt 1b
Datums-Verifikation), `_timeline-briefing.md`.

## 📜 Übergabe-Historie (neueste zuerst)
- **#5** 2026-06-06 → `docs/planung/übergabe-2026-06-06-batch-c.md` — Batch C, 2154→2458
- **#4** 2026-06-06 → `docs/planung/übergabe-2026-06-06-batch-b.md` — Batch B, 1304→2154
- **#3** 2026-06-03 → `docs/planung/übergabe-2026-06-03-aiaaic-import-und-quick-wins.md` — Batch A + Quick Wins, 666→1304
- **#2** 2026-06-01 → `docs/planung/übergabe-2026-06-01-research-pipeline-und-600er-rutsch.md` — Pipeline + 600er, 274→601
