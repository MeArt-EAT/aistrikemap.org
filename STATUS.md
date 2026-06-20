# 📍 AIStrikeMap — AKTUELLER STAND

> **Diese Datei zuerst lesen.** Sie zeigt immer den aktuellen Projektstand.
> Bei jeder Session aktualisieren. Details in `docs/planung/übergabe-*.md`.

---

## ⏱️ STAND: 2026-06-21

| | |
|---|---|
| 📊 **Bestand** | **2457 Incidents** · **1400 mit Reverse-TL (57.0 %)** · **0 Audit-Findings** · Anzeigetext korpusweit ä/ö/ü/ß (Translit-Map **2870** Mappings) · Lite-Bundle 1.6 MB gzip |
| 🔢 **Übergabe-Nr** | **#8** (2026-06-21) |
| 🚩 **Phase** | 1 — Datenausbau (Items 1–93) |
| ✅ **Zuletzt fertig** | **(2026-06-21, Übergabe #8)** **7 Sev-3-TL-Wellen 17–23** +167 Incidents (TL 50.2→**57.0 %**), je **adversarial verifiziert** — die Gen→Verify-Stufe fing echte Faktenfehler (NATO-Datum, Burkina-Faso-Massaker/Quelle, Tesla-Zahlendreher, Ecuador-Firmenname, iBorderCtrl-Gerichtsinstanz, FIFA-/Meloni-Sterbedatum, Eco-Vandali-Inkrafttreten, Jamaika-Hurrikan-Landfall) + 2 Halluzinationen entschärft + Audit 0. **Methoden-Wende:** das `Workflow`-Tool läuft jetzt zuverlässig (0 Stalls über 7 Wellen) — s. Offene Fronten #2. Plus **korpusweiter Translit-Map-Lückenschluss** (+96 Vollwort-Mappings für die `Ueber...`-Komposita-Lücke, Map 2774→2870, 121 Files bereinigt). 1 Incident `indonesien-prabowo` wegen **Fehlzuordnung zurückgehalten** (s.u.). |
| ➡️ **Nächster Schritt** | **Sev-3-Block weiter** (529 ohne TL) — **Workflow-Methode** (24 Cases/Welle, s. #2) · ODER `indonesien-prabowo`-Fehlzuordnung klären · ODER Career-Daten via Dataset-Download · ODER AIAAIC Batch D |
| 🏆 **Liga** | **Größte kuratierte AI-Incident-DB weltweit** — vor AIID (~1361) und AIAAIC (~2249 roh) |

**In einem Satz:** AIStrikeMap ist nach drei AIAAIC-Import-Batches (A+B+C, 2015-2026)
die größte *kuratierte* AI-Incident-Datenbank mit Menschenrechts-Frame —
bilingual DE/EN, Geo-Mapping, Reverse-Timelines, 0 Audit-Findings.

---

## 🎯 Offene Fronten (nach Priorität)

1. **AIAAIC Batch D** (pre-2015, ~300 Stubs) — letzter AIAAIC-Block, niedrige
   Prio (frühe Cases haben weniger Aktualität). Bringt aber historische Tiefe.
   Workflow: siehe Memory `aiaaic-import-workflow` + Übergabe #5.
2. **Reverse-Timelines** — **1400 von 2457 (57.0 %)** haben die TL (Kern-Feature).
   **Sev-5 + Sev-4 zu 100 % geschlossen** ✓. **Sev-3: 529 ohne TL** (~50 % gemacht,
   +167 in 7 Wellen am 2026-06-21). Sev-2/Sev-1: niedrige Prio.
   **Methoden-Wende (2026-06-21):** Das `Workflow`-Tool ist für Sev-3 jetzt das
   **bevorzugte** Mittel (frühere Stall-Sorge bestätigte sich bei gebündelten
   Wellen NICHT): **eine Welle = 24 Cases (6 Gen-Agenten × 4 Cases → 6 unabhängige
   adversariale Verify-Agenten), ~10–13 Min, 0 Stalls über 7 Wellen.** Die Verify-
   Stufe fängt zuverlässig Halluzinationen + Faktenfehler (mehrere echte
   Korrekturen pro Welle, die sonst live gegangen wären). **Welle bei 24 halten**
   (eine 32er-Welle lief 32 Min — zu nah an der ~30-Min-Schwelle). Das Workflow-
   Script ist gespeichert und recycelbar via `scriptPath` + neue `args`. Hygiene je
   Welle: `find-missing-timelines.js` (Struktur) → `fix-umlaut` → Gap-Scan (DE-Felder
   auf Translit-Morpheme, Map-Lücken) → `audit` → `[äöü]{2}`-Doppel-Umlaut-Grep →
   `bundle` → commit. Briefing: `_timeline-briefing.md`. **Equal-Date-Flags** der
   Verify (Event+Folge im selben Monat) werden akzeptiert statt mit erfundenen
   Daten gefüllt; nur echte Phase-vor-Phase-Verstöße quellengedeckt umdatieren.
   **Offen:** `data/incidents/indonesien-ki-video-...-prabowo-...json` ist
   **wahrscheinlich fehlzugeordnet** — die zitierten Quellen (AIAAIC, Blackbird.AI,
   context.news) dokumentieren Anies Baswedans Arabisch-Deepfake, nicht Prabowo.
   TL bewusst NICHT gebaut/committet (bleibt ohne TL); Entscheidung nötig:
   auf Anies Baswedan umbenennen (Slug+name+index.json+Bundle) ODER belegte
   Prabowo-Quelle nachreichen. Auch `find-missing-timelines.js --json` listet ihn
   weiter — beim nächsten Sev-3-Lauf via `Where-Object -notlike '*prabowo*'`
   ausschließen, bis geklärt.
   ⚠️ **Parallel-Task:** Ein Verify-Agent spawnte `task_8392609d` (Translit-Fix),
   den der User startete — läuft in eigenem Worktree, evtl. Merge-Konflikt auf
   `translit-extra-map.json`. Translit ist hier erledigt → Task abbrechen.
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

> ⚠️ **Translit-Tooling (Stand 2026-06-21):** Fixer + Audit teilen
> `data/translit-extra-map.json` (**2870** validierte `ae/oe/ue/ss`→`ä/ö/ü/ß`-Mappings,
> bleiben dadurch synchron). Neue Mappings → in die JSON eintragen, nicht in den
> Code. Beide `über`-Regexes nutzen Unicode-Lookbehind (vorher ASCII-`\b` →
> korrumpierte `Räuber`→`Räüber`). **Bekannte Lücke geschlossen (2026-06-21):** Die
> `UBER_COMPOUND_RE` matcht nur `Uber...` (fehlender Umlaut), NICHT `Ueber...`
> (transliteriert mit „e"); deshalb fehlten `Ueberwachungskameras`/`Uebernahme`/
> `Aenderung`-Komposita als Vollwort → +96 Mappings ergänzt. **Wichtig:** `fix-umlaut`
> + `audit` melden NUR Wörter, die in der Map stehen — neue KI-Batches mit einem
> **Gap-Scan** (DE-Felder gegen Translit-Morpheme, gegen Map abgeglichen) prüfen,
> sonst bleiben unbekannte Transliterationen unentdeckt. Detail: Memory `translit-tooling`.

Briefings: `data/incident-candidates/_enrichment-briefing.md` (Abschnitt 1b
Datums-Verifikation), `_timeline-briefing.md`.

## 📜 Übergabe-Historie (neueste zuerst)
- **#8** 2026-06-21 → `docs/planung/übergabe-2026-06-21-sev3-wellen-17-23-und-translit-luecke.md` — **7 Sev-3-TL-Wellen 17–23** (+167, TL 50.2→**57.0 %**) via Workflow-Tool + adversariale Verify (echte Faktenfehler gefangen), korpusweiter Translit-Map-Lückenschluss (+96, Map 2870), 1 Fehlzuordnung (prabowo) zurückgehalten
- **#7** 2026-06-19 → `docs/planung/übergabe-2026-06-19-sev3-offensive-und-translit-sweep.md` — **16 Sev-3-TL-Wellen** (+256, TL 39.8→**50.2 %**, 50%-Marke), korpusweiter Transliterations-Sweep (~1300 Files, 2774 Mappings, `über`-Regex-Bugfix), Career-Pilot (Negativ-Befund), Radar-Check
- **#6** 2026-06-18 → `docs/planung/übergabe-2026-06-18-tl-offensive-und-frontend.md` — TL 11.9→39.8 % (Sev-5+Sev-4 zu 100 %), Brasilien-Dedup, Frontend-Lite-Bundle
- **#5** 2026-06-06 → `docs/planung/übergabe-2026-06-06-batch-c.md` — Batch C, 2154→2458
- **#4** 2026-06-06 → `docs/planung/übergabe-2026-06-06-batch-b.md` — Batch B, 1304→2154
- **#3** 2026-06-03 → `docs/planung/übergabe-2026-06-03-aiaaic-import-und-quick-wins.md` — Batch A + Quick Wins, 666→1304
- **#2** 2026-06-01 → `docs/planung/übergabe-2026-06-01-research-pipeline-und-600er-rutsch.md` — Pipeline + 600er, 274→601
