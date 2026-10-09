# Übergabe #14 — Sichtung der needs-review-Kandidaten (abgebrochen bei 96 % Wochenlimit)

**Datum:** 2026-10-09
**Vorgänger:** #13 (Schema v1.1, 111 Timelines, 3 needs-human entschieden)
**Commits:** `a6da052` (Welle 1), `f327cec` (Welle 2), `9e455dc` + `bbf96c2` (Welle 3 + Re-Verify), `cb48a2a` (Slug-Transliteration), dazu dieser Übergabe-Commit — alle auf `main`
**Abbruchgrund:** Projekteigner: „96 % wöchentliche Nutzung … zum Ende kommen". Welle 4 wurde gestoppt, nichts promotet.

---

## 1. Was lief

Die Staging-Schleuse `data/incident-candidates/` hatte **224 Kandidaten mit `needs-review`**
(179 davon aus den AIAAIC-Batches A/B/C) plus **15 Kandidaten mit `verified`, die nie
promotet wurden** (Zusatzwelle 7). Workflow je Welle (40 Kandidaten, 5 Review-Agenten à 8,
dann ein adversarialer Gegenprüfer je Batch für alle `verified`):

| Welle | Kandidaten | verified | duplicate | rejected | offen | WebSearch |
|---|---|---|---|---|---|---|
| 1 | 40 | 18 | 10 | 9 | 3 | 10/10 |
| 2 | 40 | 13 | 3 | 23 | 1 | 10/10 |
| 3 (+ Re-Verify) | 40 | 19 | 11 | 10 | 0 | 5/5 + 4/4 (2 Verify-Agenten waren am Session-Limit gescheitert, 1 ohne WebSearch → Re-Verify-Durchgang, 15/15 bestätigt) |
| **Summe** | **120** | **50** | **24** | **42** | **4** | |
| 4 | 40 | abgebrochen (Task gestoppt; Journal unter `subagents/workflows/wf_e34c8cd0-ad6`, nicht angewendet) |
| 5, 6, 7 | 40 / 40 / 15 | nicht gestartet |

**Qualität der Verdikte:** Die Gegenprüfer haben pro Welle 1–2 Review-Verdikte gekippt
(1× overturn-reject, 1× overturn-duplicate) und mehrere Patches verschärft. Typische
Ablehnungsgründe: nur eine Quelle (Selbstbericht, Aggregator), kein Grundrechtsbezug
(Produktpanne, Fan-Ärger), vermischte Ereignisse, Paper ohne dokumentierten Schaden.
Datums-QA (§1b Enrichment-Briefing) griff oft: AIAAIC-Stub-Jahre wurden durch das
Datum des dokumentierten Ereignisses ersetzt (z. B. CDCR-Fall 2024 → 2020-06).

**Kritischer Fund:** Der Promote-Schritt dedupliziert **nur per Slug**. Nach den
Slug-Umbenennungen (`fix-doubled-slug-prefix.js`) hätte `promote-candidates.js` die
15 alten `verified`-Kandidaten erneut angelegt — 13 davon liegen mit Namensähnlichkeit
≥ 0,83 bereits im Bestand. Deshalb `pre-promote-check.js` (Bestands-Ähnlichkeit je
Kandidat) **vor jeder Promotion**; die 15 laufen als Zusatzwelle 7 durch die Sichtung.

## 2. Stand der Kandidaten-Files (committet)

Jeder gesichtete Kandidat trägt `status`, `reviewed_at: "2026-10-09"`, ggf.
`duplicate_of`, eine angehängte Notiz `| Sichtung 2026-10-09: …` in `researcher_notes`
und die angewendeten Patches (startDate, name/description DE+EN, incidentType,
severity/verification, location, zusätzliche Quellen mit normalisiertem `type`).
**50 Kandidaten stehen auf `verified` und sind promotionsreif** (Vorab-Check: alle
Slugs ASCII, alle ≥ 2 Quellen, keine Bestands-Ähnlichkeit ≥ 0,5, 1× Smart-Chars).

## 3. Nächste Schritte (in dieser Reihenfolge, Skripte in `scripts/workflows/`)

1. Restliche Sichtung: `node scripts/workflows/build-review-worklist.js` erzeugt aus
   dem aktuellen Status automatisch neue Wellen (die 119 verbliebenen `needs-review`
   inkl. der 40 aus der abgebrochenen Welle 4), danach `build-extra-wave.js` für die
   15 alten `verified`. **Ein Workflow pro Turn.** Je Welle `apply-review-verdicts.js`,
   bei fehlender/WebSearch-loser Gegenprüfung `gen-review-reverify.js`.
2. Promotion: `pre-promote-check.js --only-reviewed` → `promote-candidates.js --dry-run
   --min-sources 2` → ohne dry-run → `normalize-smart-chars.js` → `fix-umlaut` →
   @id-ASCII-Check (Warnung der Peer-Session: `detail-panel.js` leitet den Dateinamen
   aus der @id ab, Umlaute in der @id = leeres Detail-Panel) → **noch nicht bundlen**.
3. Timeline-Bau: `gen-tl-waves.js` → `tl-build-wave-N.js` (16 Files je Turn) →
   Validator/fix-umlaut/smart-chars/audit/Feld-Diff → `bundle-incidents.js` → commit.
   Erst danach `data/index.json` + Bundles pushen (Deploy).
4. STATUS „Bestand" anpassen (2457 + promotete), Memory `tl-workflow-methodik` ergänzen.

## 4. Parallel-Session (Abstimmung per SendMessage)

Session „AIStrikeMap Übergabe #12 – Smart-Char-Sweep" hat den von CLAUDE.md
geforderten **i18n-Vollständigkeitscheck** gemacht (nur `*.html` + `i18n/`):
Key-Parität 453/453 war sauber; 13 hartcodierte Textstellen + 6 aria-labels behoben,
+10 Key-Paare (→ 463), Schwerpunkt 8 Länder-`<option>` in `career.html` (wirkt auch
auf `career.js:310 countryLabel()`); im Browser DE↔EN verifiziert. Neues Tool
**`scripts/audit-i18n.js`** (Report `audit-i18n-report.md`, Exit 1 bei Befunden,
Meta-Tags nach Namen gefiltert, Eigennamen/ISO-Codes als Konstanten).
Lokale Commits dort: `d768d25` (Fixes), `437d6aa` (Skript) — **Push wartet auf das
OK des Projekteigners**, ebenso der vorgeschlagene CLAUDE.md-Eintrag unter Common Tasks:
„**Audit i18n**: `node scripts/audit-i18n.js` — prüft alle HTML-Seiten auf i18n-
Vollständigkeit (Key-Parität de↔en, in HTML referenzierte Keys, hartcodierter
sichtbarer Text, übersetzbare Attribute ohne `data-i18n`-Pendant). Report nach
`audit-i18n-report.md`, Exit 1 bei Befunden." Offene Ermessensfragen von dort: 5 Keys
mit identischem DE/EN-Wert (u. a. `methodikCareer.s4.title` holprig), 129 nur aus JS
genutzte Keys.

## 5. Weitere Nebenarbeiten dieser Session

- `promote-candidates.js`: Transliteration für PL/CZ/SK/HU/TR/RO/nordische Zeichen
  (`Przełęcz Krzyżne` → `przelecz-krzyzne` statt `prze-cz-krzy-ne`), `cb48a2a`.
- `scripts/workflows/` neu: alle Pipeline-Skripte + Wellen-/Ergebnisdaten (README).

## Disk-Hygiene
Workflow-Journale: Transkripte der Agenten nach Übergabe #13 geprunt (51 → 1,6 MB);
die Sichtungs-Läufe (7 Runs) liegen unter `~/.claude/projects/…/subagents/workflows/`,
~10 MB je 40er-Welle — bei der nächsten Übergabe wieder prunen (journal.jsonl behalten).
