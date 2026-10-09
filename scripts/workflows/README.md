# Workflow-Pipeline (Sichtung → Promotion → Timeline-Bau)

Gesichert aus der Session vom 2026-10-09 (Übergabe #14). Die Skripte laufen mit
`node`, ohne npm. Die `*-template.js` sind **Workflow-Tool-Skripte** (Claude Code
`Workflow`), in die ein Generator die Batch-Daten als Literal einbettet
(`__BATCHES__`, `__N__`). Die Pfade sind absolut auf das Projekt gesetzt; die
Hilfsdateien (`*-waves.json`, `*-result-*.json`) entstehen neben den Skripten.

**Regel aus Übergabe #13/#14:** WebSearch hat ein Turn-Budget von 200 Aufrufen für
alle in einem Turn gestarteten Agenten → **ein Workflow pro Turn**, Wellen ≤ 40
Kandidaten (Sichtung) bzw. ≤ 16 Files (Timeline-Bau).

## A) Sichtung der needs-review-Kandidaten

1. `node build-review-worklist.js` — liest alle `data/incident-candidates/*.json`
   mit `status: needs-review`, berechnet je Kandidat die 4 ähnlichsten Bestands-
   Incidents (Dubletten-Hinweis), schreibt `review-worklist.json` + `review-waves.json`
   (40 Kandidaten je Welle, 8 je Agent) und erzeugt `review-wave-N.js`.
2. `node build-extra-wave.js` — Zusatzwelle für Kandidaten mit `status: verified`,
   deren Slug nicht im Index ist (nie promotet, nie gegengeprüft).
3. Workflow starten: `Workflow({scriptPath: ".../review-wave-N.js"})` — Stufe 1
   Review-Agent (WebSearch: Existenz, Zweitquelle, Ereignisdatum, Dublette), Stufe 2
   adversarialer Gegenprüfer für alle `verified`.
4. `node apply-review-verdicts.js N <journalDir> [<weitere journalDirs>] [--dry-run]`
   — schreibt Status (`verified`/`duplicate`/`rejected`/`needs-review`),
   `reviewed_at`, `duplicate_of`, Notiz und Korrektur-Patch in die Kandidaten-Files.
   Review-verified ohne Gegenprüfung mit WebSearch bleiben `needs-review`.
5. Fehlende/WebSearch-lose Gegenprüfungen: `node gen-review-reverify.js N <journalDir>`
   → `review-reverify-N.js` starten → `apply-review-verdicts.js N <orig> <reverify>`.

## B) Promotion

1. `node pre-promote-check.js --only-reviewed` — Slug (ASCII!), Bestands-Ähnlichkeit,
   Quellenzahl, Smart-Chars je `verified`-Kandidat. Alles ≥ 0.5 manuell prüfen.
2. `node scripts/promote-candidates.js --dry-run --min-sources 2`, dann ohne `--dry-run`.
3. `node scripts/normalize-smart-chars.js --dry-run` (bei Treffern ohne `--dry-run`),
   `node scripts/fix-umlaut-transliterations.js`, **vor** `bundle-incidents.js`.
4. Neue Files haben leere `asm:reverseTimeline`/affectedRights → Teil C.

## C) Timeline-Bau für neue Incidents

1. `node gen-tl-waves.js` — findet alle Incidents ohne Timeline, erzeugt
   `tl-build-wave-N.js` (16 Files je Welle, 4 je Agent): Build (WebSearch-Pflicht je
   Eintrag, Phasen-Modell v1.1) → adversariale Verify.
2. Je Welle: `node postwave.js` ist auf `waves.json` (Korrektur-Wellen) ausgelegt;
   für TL-Bau direkt `node scripts/validate-timelines.js <slugs>` → fix-umlaut →
   normalize-smart-chars → audit → Feld-Diff gegen HEAD → bundle → commit.

## D) Korrektur-Wellen bestehender Timelines (Übergabe #13)

`wave-template.js` (Fix + Verify), `reverify-template.js` + `gen-reverify.js`,
`postwave.js`, `summarize.js`.
