# Übergabe #8 — 2026-06-21

> Sev-3-Reverse-TL-Offensive (Wellen 17–23) via Workflow-Tool + adversariale
> Verifikation, plus korpusweiter Translit-Map-Lückenschluss.

## TL;DR

| | Start (Übergabe #7) | Ende (#8) |
|---|---|---|
| Reverse-TL | 1233 (50.2 %) | **1400 (57.0 %)** |
| Sev-3 ohne TL | 696 | **529** |
| Translit-Map | 2774 Mappings | **2870** |
| Audit-Findings | 0 | **0** |

**+167 TL in 7 Wellen**, je generiert **und** unabhängig adversarial verifiziert,
volle Hygiene + lokaler Commit pro Welle. 7 Commits (`4c2af54` … `1af0b01`),
**noch nicht gepusht** (User: „lokal halten").

## Wellen-Bilanz

| Welle | Cases | TL-Stand | Commit |
|---|---|---|---|
| 17 | +16 | 1249 (50.8 %) | `4c2af54` |
| 18 | +24 | 1273 (51.8 %) | `d61fccd` |
| 19 | +32 | 1305 (53.1 %) | `1c3c0bf` |
| 20 | +24 | 1329 (54.1 %) | `cfb7411` |
| 21 | +24 | 1353 (55.1 %) | `abfb16f` (+ Translit-Lücke) |
| 22 | +23 | 1376 (56.0 %) | `23a0119` (prabowo zurückgehalten) |
| 23 | +24 | 1400 (57.0 %) | `1af0b01` |

## Methoden-Wende: Workflow-Tool funktioniert

Das frühere Memo „manuelle Wellen > Workflow (stallt nach ~32 Agenten)" gilt
**nicht mehr** für gebündelte Wellen. Bewährtes Muster diese Session:

- **Eine Welle = 24 Cases** = pipeline über 6 Batches à 4 Cases:
  Stufe 1 **Generieren** (WebSearch-grounded TL + affectedRights, schreibt ins File),
  Stufe 2 **unabhängige adversariale Verify** (prüft Struktur + Chronologie +
  Fakten via WebSearch; fixt Klares, flaggt Zweifelhaftes).
- **0 Stalls über 7 Wellen**, je ~10–13 Min. WebSearch war in der Workflow-Sandbox
  **immer** verfügbar (`websearch_used: true` in allen Cases).
- **24 ist die richtige Größe.** Eine 32er-Welle (Welle 19) lief 32 Min — zu nah an
  der ~30-Min-Stall-Schwelle. Wall-Clock wird vom langsamsten Agenten-Chain
  dominiert, nicht linear von der Batch-Größe.
- **Script gespeichert** unter der Session und recycelbar via `Workflow({scriptPath,
  args})` — pro Welle nur neue 24er-Dateiliste übergeben.

**Die adversariale Verify-Stufe hat sich bezahlt gemacht** — echte Fehler, die sonst
live gegangen wären:
- NATO: „Autonomy Implementation Plan" 2024 → korrekt 2022.
- Burkina Faso: 13er-Mediensperre Dez 2023 → April 2024 + korrekter HRW-Bericht/URL.
- Tesla-Rückruf: Zahlendreher 35.655 → 35.665 (Summe 285.520 stimmt).
- Ecuador ECU911: CEIEC „Coalition" → „Corporation".
- iBorderCtrl: Urteilsdatum + Gerichtsinstanz (EuGH → EU-Gericht).
- FIFA-Ticketpreis 2025 → 2026; Meloni-Lehrer-Sterbedatum 2025 → Juni 2026;
  Eco-Vandali-Inkrafttreten 22.01. → 08.02.2024; Jamaika-Hurrikan-Landfall.
- 2 Halluzinationen entschärft: dias „27 % persisch" (unbelegt; 7-Länder-Liste war
  korrekt + behalten), meta „2.000 Nachrichten" (NBC nennt keine Zahl).
- 1 unbelegter „NO FAKES Act"-Bezug entfernt.

**Equal-Date-Flags** (Event + Folge real im selben Monat) werden **akzeptiert**, nicht
mit erfundener Präzision gefüllt — nur echte Phase-vor-Phase-Verstöße quellengedeckt
umdatieren (z.B. newsguard-deepseek, Sangfor, disinfo-X).

## Korpusweiter Translit-Map-Lückenschluss

Auf User-Hinweis: viele kürzlich gebaute TL-Subfelder waren transliteriert. `fix-umlaut`
allein reichte **nicht** — ein **Gap-Scan** (DE-Anzeigefelder gegen Translit-Morpheme,
gegen die Map abgeglichen) fand **96 Wörter in 121 Files**, die der Fixer-Wortliste
fehlten.

- **Ursache:** Die `UBER_COMPOUND_RE` im Fixer matcht `Uber...` (fehlender Umlaut),
  aber nicht `Ueber...` (transliteriert mit „e") — `[Uu]ber` verlangt „U" direkt vor
  „ber". Plus Komposita/Flexionen (`Ueberwachungskameras`, `Aenderungen`,
  `Persoenlichkeitsprofil`) fehlten als Vollwort.
- **Fix (sicher, kein Regex-Umbau):** 96 Vollwort-Mappings in die geteilte
  `data/translit-extra-map.json` (2774 → 2870). Danach `fix-umlaut`: 121 Files /
  348 Ersetzungen. Dreifach verifiziert: Gap-Rescan 0 · Doppel-Umlaut 0 · audit 0.
- **Lehre:** `fix-umlaut` + `audit` melden NUR map-bekannte Wörter. Nach KI-Batches
  immer einen Gap-Scan fahren (morphem-basiert, gegen Map), sonst bleiben unbekannte
  Transliterationen unentdeckt.

## Offene Punkte / Vorsicht

1. **`indonesien-prabowo`-Fehlzuordnung** (HÖCHSTE Aufmerksamkeit): Die Datei
   `data/incidents/indonesien-ki-video-zeigt-praesidentschaftskandidaten-prabowo-fliessend-arabisch.json`
   ist wahrscheinlich falsch zugeordnet — die zitierten Quellen (AIAAIC aiaaic1425,
   Blackbird.AI, context.news) dokumentieren **Anies Baswedans** Arabisch-Deepfake,
   nicht Prabowo. TL bewusst **nicht** gebaut (in Welle 22 verworfen). Entscheidung:
   auf Anies umbenennen (Slug + name/_de/_en + `data/index.json` + Bundle) ODER
   belegte Prabowo-Quelle nachreichen. Bis dahin in Sev-3-Läufen ausschließen
   (`Where-Object { $_.file -notlike '*prabowo*' }`).
2. **Parallel-Task `task_8392609d`**: Ein Verify-Agent spawnte ihn (Translit-Fix),
   der User startete ihn → läuft in eigenem Worktree. Translit ist hier erledigt →
   **Task abbrechen**, sonst Merge-Konflikt auf `translit-extra-map.json`.
3. **Push steht aus**: 8 lokale Commits (Wellen 17–23 + Translit). User wollte lokal
   halten; vor Deploy `git push origin main` (→ GitHub Pages auto-deploy).
4. **`audit-translation-report.md`** ist getrackt + perpetuell „dirty" (Audit
   schreibt es neu, 0 Findings) — bewusst nicht mitcommittet, wie in den Vorwellen.

## Nächster Schritt

**Sev-3 weiter** (529 ohne TL) mit der Workflow-Methode (24/Welle) — neues Helper-Script
`scripts/find-missing-timelines.js [--severity N] [--json]` listet die Kandidaten.
Danach Sev-2 (480) / Sev-1 (48) niedrige Prio. Alternativen: Career-Daten
(Dataset-Download, Memory `career-data-curation-blocker`) · AIAAIC Batch D.
