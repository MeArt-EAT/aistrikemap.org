# 📍 AIStrikeMap — AKTUELLER STAND

> **Diese Datei zuerst lesen.** Sie zeigt immer den aktuellen Projektstand.
> Bei jeder Session aktualisieren. Details in `docs/planung/übergabe-*.md`.

---

## ⏱️ STAND: 2026-06-06

| | |
|---|---|
| 📊 **Bestand** | **2458 Incidents** · 977 mit Reverse-TL (39.7 %) · 0 Audit-Findings · Bundle 16+ MB |
| 🔢 **Übergabe-Nr** | **#5** (2026-06-06) |
| 🚩 **Phase** | 1 — Datenausbau (Items 1–93) |
| ✅ **Zuletzt fertig** | **Severity-4-Block zu 100 % geschlossen** ✓ (671/671). Letzte 98 Cases via manuelle Wellen (5 Runden × ~20). Sev-5 + Sev-4 jetzt beide vollständig. fix-umlaut-Wortliste um ~45 Begriffe erweitert → 1270 Korpus-Fixes in 343 Files. |
| ➡️ **Nächster Schritt** | **Sev-3-Block** (953 ohne TL, der grosse Rest) · ODER AIAAIC Batch D · ODER Frontend-Check bei 2458 Markern · ODER Dedup-Backlog abarbeiten |
| 🏆 **Liga** | **Größte kuratierte AI-Incident-DB weltweit** — vor AIID (~1361) und AIAAIC (~2249 roh) |

**In einem Satz:** AIStrikeMap ist nach drei AIAAIC-Import-Batches (A+B+C, 2015-2026)
die größte *kuratierte* AI-Incident-Datenbank mit Menschenrechts-Frame —
bilingual DE/EN, Geo-Mapping, Reverse-Timelines, 0 Audit-Findings.

---

## 🎯 Offene Fronten (nach Priorität)

1. **AIAAIC Batch D** (pre-2015, ~300 Stubs) — letzter AIAAIC-Block, niedrige
   Prio (frühe Cases haben weniger Aktualität). Bringt aber historische Tiefe.
   Workflow: siehe Memory `aiaaic-import-workflow` + Übergabe #5.
2. **Reverse-Timelines** — 799 von 2458 (32.5 %) haben die TL (Kern-Feature).
   **Severity-5-Block 100 % geschlossen** ✓. **Severity-4: 493/671 (73 %)** mit TL,
   178 verbleibend. Sev-3-Block: 1056 Cases, erst ~10 % TL.
   **Methoden-Lektion:** Der `Workflow`-Tool-Runtime stallt in dieser Umgebung
   nach ~30 Min / ~32 Agenten still (kein Fehler, kein Notification — per
   File-mtime-Check erkennbar). Resume via `resumeFromRunId` macht Cache-sicher
   weiter (+~32/Lauf), aber **die manuellen Agenten-Wellen (4 Agents × 3-4 Cases)
   sind zuverlässiger** (0 Crashes über 18+4 Wellen) und schneller. Für die
   178 Rest-Sev-4 + Sev-3: manuelle Wellen bevorzugen. Briefing: `_timeline-briefing.md`.
3. **Frontend-Recheck bei 2458 Markern** — Clustering + gzip tragen es, aber
   Bundle ist 12.6 MB. Vor Batch D Lazy-Loading/Tiling evaluieren.
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
