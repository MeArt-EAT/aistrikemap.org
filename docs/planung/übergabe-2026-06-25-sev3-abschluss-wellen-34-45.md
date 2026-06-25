# 🤝 Übergabe #10 — 2026-06-25 — Sev-3-Block abgeschlossen (Wellen 34–45)

> Vorgänger: [Übergabe #9](übergabe-2026-06-21-sev3-wellen-24-33-und-websearch-vorfall.md)
> 📍 Aktueller Gesamtstand immer in [`STATUS.md`](../../STATUS.md).

## Kurzfassung

**12 Reverse-Timeline-Wellen (34–45)** über eine sehr lange Session. Der **Sev-3-Block
ist damit vollständig abgeschlossen** — Sev-5, Sev-4 und Sev-3 haben jetzt alle ~100 %
Reverse-Timeline-Abdeckung. Einzig zurückgehalten bleibt der `prabowo`-Fehlzuordnungsfall.

| | Start (vor #10) | Ende (#10) |
|---|---|---|
| **Reverse-TL gesamt** | 1640 (66,7 %) | **1928 (78,5 %)** |
| **Sev-3 ohne TL** | 289 | **1** (nur `prabowo`) |
| **Translit-Map** | 2903 | **2951** (+48) |
| **Audit-Findings** | 0 | **0** (durchgehend) |

- **+288 Reverse-Timelines**, je generiert **und** unabhängig adversarial verifiziert.
- **WebSearch in allen 12 Wellen verfügbar** (kein Ausfall wie Welle 26 in #9) — `websearch_used` je Agent geprüft, immer 6/6 Gen + 6/6 Verify.
- **Alles gepusht** auf `origin/main` (Live-Deploy auf aistrikemap.org via GitHub Pages).

## Methodik (bewährt, unverändert seit #8/#9)

Pro Welle: **24 Cases = 6 Gen-Agenten × 4 Cases → 6 unabhängige adversariale Verify-Agenten**
(Workflow-Tool, `pipeline()`: Verify startet pro Gruppe sobald Gen fertig ist). ~12–15 Min/Welle,
0 Stalls über alle 12 Wellen.

**Hygiene-Kette je Welle** (vom Hauptagenten, nicht den Sub-Agenten):
`find-missing-timelines.js` → `fix-umlaut` → Gap-Scan (DE-Felder gegen Translit-Morpheme) →
**Validator** → `audit` → `bundle` → commit.

### Was diese Session methodisch verbessert hat

1. **Prompt-Härtung ab Welle 36.** Welle 35 erzeugte 268 Translit-Ersetzungen + 47 neue
   Map-Einträge (die Gen-Agenten transliterierten massiv in den TL-Feldern). Nach Aufnahme
   einer expliziten **Umlaut-Pflicht für Komposita** + **Chronologie-Sortierbeispielen**
   (`2024-05` < `2024-05-14`; Jahr-only `2024` vor allen `2024-MM`) + **„kein Em-Dash/En-Dash → ` - `"**
   in den Gen-Prompt fiel die Translit-Nacharbeit ab Welle 36 auf **~0**.
2. **Validator erweitert.** Der Pre-Commit-Check prüft jetzt zusätzlich: `@id` == Dateiname
   (nicht umlautiert — Permalink-Integrität), **Chronologie strikt aufsteigend inkl.
   monat-genau-vor-tag-genau** (häufigster Restfehler), **genau 1 event-Phase**, ≤6 Einträge,
   keine Smart-Quotes/Em-Dashes über **alle** Felder (inkl. EN + name).
3. **Em-Dash-Normalisierung robust via charCode.** `node -e` mit literalen Unicode-Zeichen
   in der Regex wird durch die Shell-Doublequote-Verarbeitung verstümmelt (nur ~7 statt aller
   Treffer gefixt). Lösung: `String.fromCharCode(0x2014)` etc. + `.split().join()` statt Regex.

## Was die adversariale Verify gefangen hat (Auswahl echter Fehler)

Pro Welle fing die Gen→Verify-Stufe echte Fehler, die sonst live gegangen wären:

- **Kläger-/Autoren-Verwechslungen:** chabon (erste Autoren-Klage war Tremblay/Awad, nicht
  Authors Guild — und chronologisch nach Chabon); state-farm (Studie war NYU Center on Race,
  nicht halluzinierter „Premier et al."); rekognition-2019 (Raji = U Toronto, nicht MIT).
- **Statistik-Fehlzuordnung:** „27 %"-Wahlstudie gehörte GroundTruthAI (Juni 2024), nicht der
  dokumentierten Proof-News-Studie (Feb 2024, >50 % ungenau) — name/description/Quellen korrigiert.
- **Fakten-Inversion:** sora-2-disney — description sagte „Disney beendete Verhandlungen", real
  **schloss** Disney am 11.12.2025 einen 1-Mrd-USD-Deal (die Quelle im File widersprach sich selbst).
- **Datumsfehler:** Pentagon-Replicator-2-Memo 30.→27.9.2024; NYCLU-Lockport-Klage 4 Monate falsch;
  randal-reid Klage 2024→2023; perspective-api 2017-09→2017-08; stanford-gaydar 2017-10→2017-05;
  usbekistan-Polizeibus 2021→2019; youtube-truecrime-Terminierung 2025-02→2025-01.
- **Aktenzeichen-Verwechslung:** tesla-phantombremsungen — NHTSA stufte PE22-002 NICHT zur
  Engineering Analysis hoch; das genannte EA22-002 gehört zu einer anderen Untersuchung.
- **description-Faktenfehler:** tesla-streifenwagen („2 verletzt" → „keine Verletzten").

## ⚠️ User-Faktenkorrektur (Welle 39, New Orleans)

Der User meldete: das New-Orleans-Gesichtserkennungsverbot (Dez 2020) war **6:1**, nicht
einstimmig (einzige Gegenstimme Jared Brossett; Quellen WWNO/nola.com). Der Verify-Agent
hatte den Fehler **unabhängig selbst bestätigt** („VERIFIED WRONG, 6-1"), ihn aber per
spawn_task statt Direkt-Edit gemeldet (er hielt die top-level description für außerhalb
seines TL-Scopes). Korrektur angewandt: `description`/`_de`/`_en` „einstimmig"/„unanimously"
→ „mit 6:1 Stimmen"/„by a 6-1 vote". Lektion: Faktenfehler in der **bestehenden** description
sind ab Welle 43 explizit Teil des Verify-Auftrags.

## Einstiegspunkte

- 📍 [STATUS.md](../../STATUS.md) — jetzt 78,5 % / Übergabe #10 / Sev-3 abgeschlossen
- 🧠 Memory aktualisiert: `tl-workflow-methodik` (Prompt-Härtung, Validator, charCode-Em-Dash),
  `project-architecture` (Zahlen), `translit-tooling` (2951)

## ⚠️ Offene Punkte

1. **Sev-3 ist fertig.** Nächste Optionen (alle niedrigere Prio): **Sev-2** (480 ohne TL, ~20
   Wellen) via gleicher Methode · **korpusweiter Smart-Char-Sweep** (s. #2) · `prabowo` klären ·
   Career-Daten · AIAAIC Batch D.
2. **Korpusweiter Smart-Char-Befund:** 789 von 2457 Files (32 %) haben Em-Dash (~5090×), En-Dash
   (~562×) oder Smart-Quotes (~48×) in **Display**-Feldern — vor allem ältere Files, inkonsistent
   zu den neuen ` - `-TL-Texten. Die 48 Smart-Quotes sind klare CLAUDE.md-Verstöße. Wäre ein
   eigener korpusweiter Sweep (analog Translit-Sweep #7); **nicht** in dieser Session gemacht
   (out of scope, große bewusste Entscheidung). Robuster Normalizer: charCode-Split.
3. **`prabowo`** — Fehlzuordnung (Quellen = Anies Baswedan); ohne TL, in Läufen ausschließen.
4. **`warner-bros-midjourney`:** Der Verify hat hier ausnahmsweise `startDate` korrigiert
   (2025-09-05 → 2025-09-04, Faktenfehler — der 5.9. war nur das Variety-Publikationsdatum).
   Bewusste Ausnahme vom „startDate nicht ändern"-Prinzip.

Sauberer Schlusspunkt: Sev-3 komplett, gepusht, deployt, übergeben. 🌙
