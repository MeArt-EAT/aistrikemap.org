# 📍 AIStrikeMap — AKTUELLER STAND

> **Diese Datei zuerst lesen.** Sie zeigt immer den aktuellen Projektstand.
> Bei jeder Session aktualisieren. Details in `docs/planung/übergabe-*.md`.

---

## ⏱️ STAND: 2026-06-06

| | |
|---|---|
| 📊 **Bestand** | **2154 Incidents** · 0 Audit-Findings · Bundle 11.2 MB (gzip ~2.5 MB) |
| 🔢 **Übergabe-Nr** | **#4** (2026-06-06) |
| 🚩 **Phase** | 1 — Datenausbau (Items 1–93) |
| ✅ **Zuletzt fertig** | AIAAIC-Import **Batch B** (2020-2023, +850 netto) |
| ➡️ **Nächster Schritt** | AIAAIC **Batch C** (2015-2019, ~800) → ~2900 · ODER Reverse-Timelines vertiefen |
| 🏆 **Liga** | **Größte kuratierte AI-Incident-DB weltweit** — vor AIID (~1361), neben AIAAIC (~2263 roh) |

**In einem Satz:** AIStrikeMap ist nach zwei AIAAIC-Import-Batches (A+B) die
größte *kuratierte* AI-Incident-Datenbank mit Menschenrechts-Frame —
bilingual DE/EN, Geo-Mapping, Reverse-Timelines, 0 Audit-Findings.

---

## 🎯 Offene Fronten (nach Priorität)

1. **AIAAIC Batch C** (2015-2019, ~800 Stubs) — nächster Mengen-Hebel, gleiche
   Pipeline wie A+B. Bringt klar vor AIAAIC. Workflow: siehe Memory
   `aiaaic-import-workflow` + `docs/planung/übergabe-2026-06-06-batch-b.md`.
2. **Reverse-Timelines** — nur ~314 von 2154 Cases haben die TL (das
   Kern-Feature). Nächste Tranche: severity-5-Cases ohne TL.
3. **Frontend-Recheck bei 2154 Markern** — Clustering + gzip tragen es, aber
   Bundle ist jetzt 11 MB. Bei ~4000 Cases wird Lazy-Loading/Tiling fällig.
4. **needs-review-Cases** — Batch A+B haben zusammen ~160 needs-review (oft
   Bestand-Dubletten oder schwache Quellen) in den `*-round-6.json`-Files,
   nicht promotet.

## 🧱 Bekannte false-positives (KEIN Handlungsbedarf)
- Dubletten-Check meldet dauerhaft: Uber-Bußgeld (290 Mio) ≠ Clearview (30,5
  Mio); Disney/Midjourney ≠ Disney/MiniMax; Coupang ≠ Naver; Tesla-Harley ≠
  Tesla-Yamaha. Das sind verschiedene Fälle — nicht mergen.

## 📦 Pipeline-Werkzeuge (scripts/)
`convert-aiaaic-to-candidates.js` · `merge-aiaaic-chunks.js` ·
`find-internal-duplicates.js` · `merge-internal-duplicates.js` ·
`promote-candidates.js` · `fix-umlaut-transliterations.js` ·
`bundle-incidents.js` · `audit-bilingual-incidents.js`

Briefings: `data/incident-candidates/_enrichment-briefing.md` (mit Abschnitt
1b Datums-Verifikation), `_timeline-briefing.md`.

## 📜 Übergabe-Historie (neueste zuerst)
- **#4** 2026-06-06 → `docs/planung/übergabe-2026-06-06-batch-b.md` — Batch B, 1304→2154
- **#3** 2026-06-03 → `docs/planung/übergabe-2026-06-03-aiaaic-import-und-quick-wins.md` — Batch A + Quick Wins, 666→1304
- **#2** 2026-06-01 → `docs/planung/übergabe-2026-06-01-research-pipeline-und-600er-rutsch.md` — Pipeline + 600er, 274→601
