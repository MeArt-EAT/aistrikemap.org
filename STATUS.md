# 📍 AIStrikeMap — AKTUELLER STAND

> **Diese Datei zuerst lesen.** Sie zeigt immer den aktuellen Projektstand.
> Bei jeder Session aktualisieren. Details in `docs/planung/übergabe-*.md`.

---

## ⏱️ STAND: 2026-06-25

| | |
|---|---|
| 📊 **Bestand** | **2457 Incidents** · **1928 mit Reverse-TL (78.5 %)** · **0 Audit-Findings** · Anzeigetext korpusweit ä/ö/ü/ß (Translit-Map **2951** Mappings) · Lite-Bundle 7.8 MB (1.6 MB gzip) |
| 🔢 **Übergabe-Nr** | **#10** (2026-06-25) |
| 🚩 **Phase** | 1 — Datenausbau (Items 1–93) |
| ✅ **Zuletzt fertig** | **(2026-06-25, Übergabe #10)** **12 Sev-3-TL-Wellen 34–45** +288 Incidents (TL 66.7→**78.5 %**) — **Sev-3-Block damit abgeschlossen** (Sev-5+Sev-4+Sev-3 alle ~100 %; einzig `prabowo` zurückgehalten). Je **adversarial verifiziert**; die Gen→Verify-Stufe fing pro Welle echte Faktenfehler (chabon/state-farm Kläger-Verwechslung, 27%-Studien-Fehlzuordnung, Pentagon-Memo-Datum 30.→27.9., NYCLU-Klage 4 Monate, randal-reid 2024→2023, NHTSA-Aktenzeichen EA22-002-Verwechslung, Disney-OpenAI-Deal-Fakteninversion u.v.m.) + Audit durchgehend 0. **WebSearch in allen 45 Wellen verfügbar** (kein Ausfall). **Prompt-Härtung ab Welle 36** drückte Translit-Nacharbeit von 268 (Welle 35) auf ~0; Validator um @id-/Chronologie-/Em-Dash-Checks erweitert. Map 2903→**2951** (+48). **User-Faktenkorrektur**: New-Orleans-Verbot war 6:1, nicht einstimmig (vom Verify unabhängig bestätigt). |
| ➡️ **Nächster Schritt** | Sev-3 ist fertig. Optionen (alle niedrigere Prio): **Sev-2-TL** (480 ohne TL, ~20 Wellen) via gleicher Workflow-Methode · ODER **korpusweiter Smart-Char-Sweep** (789 Files mit Em-Dash/Smart-Quotes in Display-Feldern, inkonsistent zu neuen TL-Texten; s.u.) · ODER `indonesien-prabowo`-Fehlzuordnung klären · ODER Career-Daten via Dataset-Download · ODER AIAAIC Batch D |
| 🏆 **Liga** | **Größte kuratierte AI-Incident-DB weltweit** — vor AIID (~1361) und AIAAIC (~2249 roh) |

**In einem Satz:** AIStrikeMap ist nach drei AIAAIC-Import-Batches (A+B+C, 2015-2026)
die größte *kuratierte* AI-Incident-Datenbank mit Menschenrechts-Frame —
bilingual DE/EN, Geo-Mapping, Reverse-Timelines, 0 Audit-Findings.

---

## 🎯 Offene Fronten (nach Priorität)

1. **AIAAIC Batch D** (pre-2015, ~300 Stubs) — letzter AIAAIC-Block, niedrige
   Prio (frühe Cases haben weniger Aktualität). Bringt aber historische Tiefe.
   Workflow: siehe Memory `aiaaic-import-workflow` + Übergabe #5.
2. **Reverse-Timelines** — **1928 von 2457 (78.5 %)** haben die TL (Kern-Feature).
   **Sev-5 + Sev-4 + Sev-3 alle ~100 % geschlossen** ✓ (Sev-3: 1055/1056, einzig
   `prabowo` zurückgehalten). **Sev-2: 480 ohne TL** (niedrige Prio, ~20 Wellen),
   Sev-1: 48 ohne TL. Falls Sev-2 angegangen wird: gleiche Workflow-Methode.
   ⚠️ **WebSearch-Abhängigkeit (Lektion aus Welle 26):** Die Methode braucht WebSearch
   zwingend (Grounding + adversariale Verifikation). Welle 26 (Übergabe #9) fiel in
   einen globalen WebSearch-Ausfall → komplett verworfen, nach Recovery frisch
   wiederholt. **Vor/nach jeder Welle `websearch_used` im Gen-Output prüfen; bei
   Ausfall NICHT committen, sondern `git checkout -- data/incidents` und später neu.**
   In den Wellen 34–45 (Übergabe #10) war WebSearch durchgehend verfügbar.
   **Bewährte Methode:** **eine Welle = 24 Cases (6 Gen × 4 → 6 unabhängige
   adversariale Verify), ~12–15 Min, 0 Stalls über 45 Wellen.** Die Verify-Stufe
   fängt zuverlässig Halluzinationen + Faktenfehler. Hygiene je Welle:
   `find-missing-timelines.js` → `fix-umlaut` → Gap-Scan (DE-Felder gegen Translit-
   Morpheme) → `audit` → **Validator** (Chronologie strikt aufsteigend inkl.
   monat-vs-tag-genau, title==title_de, @id==Dateiname, Smart-Char/Em-Dash, ≤6
   Einträge, genau 1 event-Phase) → `bundle` → commit. Briefing: `_timeline-briefing.md`.
   **Prompt-Härtung (ab Welle 36):** explizite Umlaut-Pflicht für Komposita +
   Chronologie-Sortierbeispiele + „kein Em-Dash" → Translit-Nacharbeit von 268
   (Welle 35) auf ~0. **Em-Dash-Normalisierung** robust via charCode (nicht
   Shell-Unicode-Regex). Detail: Memory `tl-workflow-methodik`.
   **Offen:** `data/incidents/indonesien-...-prabowo-...json` ist **wahrscheinlich
   fehlzugeordnet** — die Quellen dokumentieren Anies Baswedans Arabisch-Deepfake,
   nicht Prabowo. TL bewusst NICHT gebaut (bleibt ohne TL); Entscheidung nötig:
   auf Anies Baswedan umbenennen ODER belegte Prabowo-Quelle nachreichen. Bei
   Läufen via `grep -v prabowo` ausschließen.
   ⚠️ **Korpusweiter Smart-Char-Befund (2026-06-25):** **789 von 2457 Files** haben
   Em-Dash (~5090×), En-Dash (~562×) oder Smart-Quotes (~48×) in Display-Feldern
   (v. a. alte Files; die neuen TL-Texte nutzen ` - `). Die 48 Smart-Quotes sind
   klare CLAUDE.md-Verstöße; die Em-Dashes eher Stilkonsistenz. **Separater
   korpusweiter Sweep** wäre nötig (analog Translit-Sweep #7), nicht in dieser
   Session gemacht. Robuster Normalizer: charCode-Split (` — `/` – `→` - `,
   `‘’`→`'`, `“”`→`"`).
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

> ⚠️ **Translit-Tooling (Stand 2026-06-25):** Fixer + Audit teilen
> `data/translit-extra-map.json` (**2951** validierte `ae/oe/ue/ss`→`ä/ö/ü/ß`-Mappings,
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
- **#10** 2026-06-25 → `docs/planung/übergabe-2026-06-25-sev3-abschluss-wellen-34-45.md` — **12 Sev-3-TL-Wellen 34–45** (+288, TL 66.7→**78.5 %**), **Sev-3-Block abgeschlossen** (Sev-5/4/3 alle ~100 %), Prompt-Härtung drückte Translit-Nacharbeit auf ~0, Validator um @id/Chronologie/Em-Dash erweitert, Map 2903→2951, User-Faktenkorrektur New-Orleans-6:1, korpusweiter Smart-Char-Befund (789 Files), 12+ Commits gepusht
- **#9** 2026-06-21 → `docs/planung/übergabe-2026-06-21-sev3-wellen-24-33-und-websearch-vorfall.md` — **10 weitere Sev-3-TL-Wellen 24–33** (+240, TL 57.0→**66.7 %**, kumuliert 17–33 = +407), WebSearch-Ausfall-Vorfall (Welle 26 verworfen + frisch wiederholt), laufende Translit-Map-Pflege (2870→2903), 19 Commits gepusht
- **#8** 2026-06-21 → `docs/planung/übergabe-2026-06-21-sev3-wellen-17-23-und-translit-luecke.md` — **7 Sev-3-TL-Wellen 17–23** (+167, TL 50.2→**57.0 %**) via Workflow-Tool + adversariale Verify (echte Faktenfehler gefangen), korpusweiter Translit-Map-Lückenschluss (+96, Map 2870), 1 Fehlzuordnung (prabowo) zurückgehalten
- **#7** 2026-06-19 → `docs/planung/übergabe-2026-06-19-sev3-offensive-und-translit-sweep.md` — **16 Sev-3-TL-Wellen** (+256, TL 39.8→**50.2 %**, 50%-Marke), korpusweiter Transliterations-Sweep (~1300 Files, 2774 Mappings, `über`-Regex-Bugfix), Career-Pilot (Negativ-Befund), Radar-Check
- **#6** 2026-06-18 → `docs/planung/übergabe-2026-06-18-tl-offensive-und-frontend.md` — TL 11.9→39.8 % (Sev-5+Sev-4 zu 100 %), Brasilien-Dedup, Frontend-Lite-Bundle
- **#5** 2026-06-06 → `docs/planung/übergabe-2026-06-06-batch-c.md` — Batch C, 2154→2458
- **#4** 2026-06-06 → `docs/planung/übergabe-2026-06-06-batch-b.md` — Batch B, 1304→2154
- **#3** 2026-06-03 → `docs/planung/übergabe-2026-06-03-aiaaic-import-und-quick-wins.md` — Batch A + Quick Wins, 666→1304
- **#2** 2026-06-01 → `docs/planung/übergabe-2026-06-01-research-pipeline-und-600er-rutsch.md` — Pipeline + 600er, 274→601
