# Übergabe #9 — 2026-06-21

> Fortsetzung der Sev-3-Reverse-TL-Offensive (Wellen 24–33) via Workflow-Tool +
> adversariale Verifikation. Plus: WebSearch-Ausfall-Vorfall und wie er gehandhabt
> wurde. Direkte Fortsetzung von Übergabe #8 (Wellen 17–23).

## TL;DR

| | Start (#8) | Ende (#9) |
|---|---|---|
| Reverse-TL | 1448 (58.9 %)* | **1640 (66.7 %)** |
| Sev-3 ohne TL | 481* | **289** |
| Translit-Map | 2885* | **2903** |
| Audit-Findings | 0 | **0** |

\* #8 wurde mitten in der Session geschrieben (nach Welle 23 = 1400/57.0 %); die
Zahlen oben sind der Stand bei Welle 25, als STATUS zwischendurch aufgefrischt wurde.
**Kumuliert über die ganze Session (Wellen 17–33): +407 TL, 50.2 → 66.7 %.**

10 weitere Wellen (24–33), je generiert **und** unabhängig adversarial verifiziert,
volle Hygiene + lokaler Commit pro Welle. **Nach dieser Übergabe gepusht** (origin/main).

## Wellen-Bilanz (24–33)

| Welle | Cases | TL-Stand | Region |
|---|---|---|---|
| 24 | +24 | 1424 (58.0 %) | Kanada/Zentralasien/Ostafrika/Baltikum |
| 25 | +24 | 1448 (58.9 %) | Mexiko/Pazifik/NZ/NL/Nigeria/Österreich/Palästina |
| 26 | +24 | 1472 (59.9 %) | Peru/Polen/Portugal/Russland/Saudi/Schweden/Schweiz |
| 27 | +24 | 1496 (60.9 %) | Senegal/Serbien/Singapur/Spanien/Sudan/Südafrika |
| 28 | +24 | 1520 (61.9 %) | Tschad/Türkei/UK |
| 29 | +24 | 1544 (62.8 %) | UK |
| 30 | +24 | 1568 (63.8 %) | UK (Facewatch, Polizei-FR, MoD) |
| 31 | +24 | 1592 (64.8 %) | Ukraine-Krieg / USA-Amazon |
| 32 | +24 | 1616 (65.8 %) | USA (Amazon, Copyright, ChatGPT) |
| 33 | +24 | 1640 (66.7 %) | USA (ChatGPT/Copilot, Perplexity, Deepfakes) |

## ⚠️ WebSearch-Ausfall-Vorfall (wichtigste Lektion)

**Welle 26 (erster Lauf) fiel in einen globalen WebSearch-Ausfall** — 16/24 Gen-Agenten
und 18/24 Verify-Einträge meldeten „WebSearch unavailable" (auch in der Hauptsession
bestätigt). Ohne Quellen-Grounding + adversariale Verifikation ist die Methode wertlos
(Halluzinations-Schutz weg). **Entscheidung: Welle 26 komplett verworfen**
(`git checkout -- data/incidents`), nichts committet — die 24 Incidents hatten eh keine
TL, also kein Verlust. Nach WebSearch-Recovery (per Test bestätigt) **frisch wiederholt**.

**Der Re-Run hat sich bewährt:** Die WebSearch-Verify fing in Welle 26 eine schwere
Halluzination, die der ausgefallene Lauf live geschickt hätte — die Datei behauptete,
der UK High Court habe Saudi-Arabien zu **~£3 Mio Schadensersatz an Yahya Assiri**
verurteilt; tatsächlich ging diese Summe an einen **anderen** Dissidenten (Ghanem
al-Masarir), Assiris Verfahren läuft noch.

**Regel für die Zukunft:** Nach jeder Welle `websearch_used` im Gen-Output prüfen
(`($o.result.gen | ? { -not $_.websearch_used }).Count` muss 0 sein). Bei Ausfall NICHT
committen → verwerfen → später neu. Siehe Memory `tl-workflow-methodik`.

## Methode (unverändert bewährt)

- **Workflow-Tool, 24 Cases/Welle** = pipeline über 6 Batches à 4: Stufe 1 Generieren
  (WebSearch-grounded), Stufe 2 unabhängige adversariale Verify. ~10–20 Min/Welle,
  **0 Stalls über 17 Wellen**. Script-Recycling via `Workflow({scriptPath, args})`.
- Kandidaten: `node scripts/find-missing-timelines.js --severity 3 --json`, dann
  in PowerShell `Where-Object { $_.file -notlike '*prabowo*' } | Select-Object -First 24`.
- **Hygiene je Welle:** Verdicts parsen (clean/fixed/flagged + websearch_used) →
  Flags abarbeiten (Equal-Date akzeptieren, echte Phase-vor-Phase-Verstöße quellengedeckt
  umdatieren, Translit → fix-umlaut) → `fix-umlaut` → **Gap-Scan** (morphem-basiert gegen
  Map, fängt Map-Lücken) → neue Lücken-Wörter in `translit-extra-map.json`, re-fix →
  `[äöü]{2}`-Doppel-Umlaut-Grep → `audit` → `bundle` → commit. **Pro Welle kamen ~0–9
  neue Translit-Map-Wörter dazu** (Flexionen/Komposita); je manuell als Vollwort gemappt.
- **Verify fängt verlässlich echte Fehler** (pro Welle 0–4): Datumsfehler, verwechselte
  Personen/Beträge, Fehlzuordnungen. Das ist der Kernwert der Methode.

## Offene Punkte für das nächste Fenster

1. **Welle 34 steht an** (ab `usa-elon-musk-teilt-ki-bild-von-kamala-harris-…`, USA-Cluster).
   Der Batch war beim Stopp schon gezogen; einfach `find-missing-timelines --json` neu
   ziehen (prabowo ausschließen) und weiterlaufen.
2. **`indonesien-prabowo`-Fehlzuordnung** (aus #8, weiter offen): Quellen dokumentieren
   **Anies Baswedan**, nicht Prabowo. TL bewusst nicht gebaut. In Sev-3-Läufen ausschließen,
   bis Zuordnung geklärt (Slug-Rename auf Anies ODER belegte Prabowo-Quelle).
3. **Vorbestehende Incident-Nuancen** (von Verify geflaggt, außerhalb TL-Scope, Review wert):
   - `uk-toilettensensoren…`: actor „Triton" evtl. falsch (HALO-Reseller war ECL-IPS).
   - `uk-…-mod-jsp-936…`: Datums-Modell tangled (Asgard-Vertrag Jan 2026 vs 2024).
   - 2 `uk-passfoto-pruefer/-pruefdienst`-Files = interne Dublette derselben BBC-2020-
     Untersuchung (Dedup-Kandidat).
4. **`task_8392609d`** (aus #8): vom User gestarteter Translit-Background-Task in eigenem
   Worktree — Translit ist hier erledigt → abbrechen, sonst Merge-Konflikt auf
   `translit-extra-map.json`.

## Nächster Schritt

**Sev-3 weiter** (289 ohne TL ≈ 12 Wellen) mit der Workflow-Methode. Danach Sev-2 (480) /
Sev-1 (48) niedrige Prio. Alternativen: Career-Daten (Dataset-Download, Memory
`career-data-curation-blocker`) · AIAAIC Batch D.
