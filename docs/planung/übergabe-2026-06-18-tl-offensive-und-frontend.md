# Übergabe #6 — 2026-06-18 · TL-Offensive + Frontend-Performance

> 📍 **STAND: 2457 Incidents · 977 mit Reverse-TL (39.8 %) · Sev-5 + Sev-4 zu 100 % · 0 Audit-Findings**
> Nächster Schritt: **Sev-3-Block** (953 ohne TL). Schneller Überblick immer in `STATUS.md`.

---

## 1. Was diese Session passierte

Lange Session mit drei großen Blöcken. Bestand effektiv 2458 → **2457** (Batch C
brachte +304 auf 2458, der Brasilien-Dedup −1).

| Block | Ergebnis |
|---|---|
| **AIAAIC Batch C** (2015-2019) | +304 Incidents (2154 → 2458), 94 % verified-Quote. Commit `3179fe7`. (Details: Übergabe #5) |
| **Reverse-Timeline-Offensive** | TL-Quote **11.9 % → 39.8 %**. **Sev-5 (189/189) + Sev-4 (670/670) zu 100 % geschlossen.** |
| **Brasilien-Dedup** | 2 Files → 1 (verifiziert per Multi-Agent-Panel), Datum/Ort/Severity korrigiert. Commit `cb1a992`. |
| **Frontend-Performance** | Lite-Bundle + Lazy-Detail + Caching-Fix + Länderzähler-Bug. Commit `9d2e290`. |

## 2. Reverse-Timeline-Offensive (Kern der Session)

Das Kern-Feature (Vorfall als Kausalkette infrastructure→doctrine→event→consequences)
massiv ausgebaut:

- **Sev-5: 78 → 189 (100 %)** — Pilot-Welle + Wellen 1-10. Commits `febd110`,
  `47ed35b`, `f5989ab`.
- **Sev-4: 97 → 670 (100 %)** — Wellen 11-18 (`1592d4f`), Workflow-Batch 1
  (`41b2c53`), Batch 2 (`00bfeb8`), Wellen 19-22 (`2da34c2`), Schluss-98
  (`2596bfa`).
- Pro Case: Agent recherchiert Vorgeschichte per WebSearch, baut 4-6 TL-Einträge
  + 3-6 `asm:affectedRights` (3 parallele Arrays). Briefing:
  `data/incident-candidates/_timeline-briefing.md`.

**Methoden-Lektion (WICHTIG, siehe Memory `tl-workflow-methodik`):**
- Der `Workflow`-Tool-Runtime **stirbt in dieser Umgebung still nach ~30 Min /
  ~32 Agenten** — kein Fehler im journal.jsonl, keine Notification, Task danach
  nicht mehr registriert. Diagnose per File-mtime-Check. Recovery: `Workflow({scriptPath,
  resumeFromRunId})` macht Cache-sicher weiter, stallt aber erneut.
- **Manuelle Agenten-Wellen (4-5 Agents × 4 Cases direkt per Agent-Tool) sind
  zuverlässiger** (0 Crashes über 22 Wellen) und schneller. Für Sev-3: manuelle
  Wellen bevorzugen.
- **Wert des Workflow-Verify-Passes:** Der adversariale Verify-Agent pro Case fand
  in Batch 1 (150 Cases) **6 echte Faktenfehler** (Halluzinationen/Fehldatierungen),
  die manuelle Wellen nicht fanden — u.a. Kasachstan-Pegasus „Feb 2024" war in
  Wahrheit der Pegasus-Project-Leak Juli 2021. Wenn ohne Verify gearbeitet wird,
  steigt das Halluzinationsrisiko bei der frei recherchierten Vorgeschichte.

**Cleanup-Muster pro Batch:** Schema-Audit (Node: title===title_de, Smart-Quotes,
Chronologie-echt-vs-Granularität, affectedRights-Parallelität) → `fix-umlaut-
transliterations.js` → echte Chrono-Verstöße per stabilem Datums-Sort →
`bundle-incidents.js` → `audit-bilingual-incidents.js` (0 Findings) → commit.

## 3. Tooling-Verbesserungen (dauerhaft)

- **`scripts/fix-smart-quotes-chunks.js`** (neu, aus Batch C) — idempotenter
  Pattern-Fix für typografische Quotes in Agent-Output.
- **`scripts/merge-aiaaic-chunks.js --batch X`** — parametrisiert.
- **`scripts/merge-internal-duplicates.js`** — idempotent (alte Drops geskippt).
- **`scripts/fix-umlaut-transliterations.js`** — Wortliste um **~45 deutsche
  Begriffe** erweitert (schueler, ueber-Komposita, gefaelscht, minderjaehrige,
  Praezedenzfaelle, …) → ein Lauf säuberte **1270 Transliterationen in 343 Files**
  korpusweit. ss-Wörter (dass/Messer/Vorwissen) bewusst NICHT in der Liste.
- **`scripts/bundle-incidents.js`** — erzeugt jetzt **zusätzlich
  `all-incidents-lite.json`** (siehe §5).

## 4. Brasilien-Richter-Dedup (Multi-Agent-verifiziert)

`brasilien-richter-...-fabrizierter-rechtsprechung` (File 1) und
`...-veroeffentlicht-fehlerhafte-ki-generierte-...-2023` (File 2) waren derselbe
Vorfall (Richter Jefferson Ferreira Rodrigues, 8 halluzinierte STJ-Präzedenzfälle,
CNJ Nov 2023, „erster Fall dieser Art in Brasilien"). 3-Agenten-Panel (eine Stimme
refutierend) bestätigte 3/3. File 2 gelöscht (2458→2457), File 1 behalten +
korrigiert: startDate 2024-01→**2023-11**, Ort Brasília→**Acre**, Severity 4→**3**
(war abgewiesene Zivilklage, keine strafrechtliche Verurteilung — „wrongfully
convicted"-Framing war falsch), AFP-Quellen gemergt.

## 5. Frontend-Performance-Refactor

Das Bundle war diese Session durch die TL-Inhalte von ~11 auf 18 MB gewachsen und
wurde bei JEDEM Seitenaufruf neu geladen. Drei Fixes (alle live, verifiziert im
Preview):

1. **Lite-Bundle + Lazy-Detail (−59 % Erstabruf):** `bundle-incidents.js` erzeugt
   `all-incidents-lite.json` (ohne `asm:reverseTimeline`/`asm:sources`/
   `asm:metadata` — 18→7.5 MB roh, 3.9→**1.6 MB gzip**). `js/data-loader.js` lädt
   das Lite-Bundle (Marker/Filter/Suche/Ticker brauchen die schweren Felder nicht;
   Beschreibungen+Akteure+Rechte bleiben für die Suche drin). `js/detail-panel.js`:
   `show()` öffnet sofort, lazy-fetcht beim ersten Klick die volle Einzeldatei
   `data/incidents/<slug>.json` (~19 KB) für Timeline + Quellen (gecacht, graceful
   bei Fehler).
2. **Cache-Busting `?v=Date.now()` entfernt** (data-loader + Radar-Fetches in
   map.js/detail-panel.js/radar.js) → GitHub-Pages-ETag/max-age greift,
   wiederkehrende Besucher laden nichts neu.
3. **Länderzähler-Bug:** zählte distinkte letzte Komma-Segmente von `location.name`
   (Städtenamen → „708 Länder"). Jetzt distinkte `address.addressCountry` →
   korrekt **„135 Länder"**.

Script-Versionen gebumpt (map v3, data-loader v4, detail-panel v5).
**Skalierungseffekt:** Der Sev-3-Schub trifft nur noch die lazy-geladenen
Einzeldateien — das Lite-Bundle wächst kaum. Die Skalierungssorge ist strukturell
gelöst.

## 6. Nächste Session — Optionen

1. **Sev-3-Block** (953 ohne TL, ~10 % gemacht) — der große Rest der TL-Vertiefung.
   Manuelle Wellen (4-5 Agents × 4 Cases). Quellenlage Sev-3 dünner als Sev-4/5.
   Liste: `node -e "const a=require('./data/all-incidents.json');a.filter(i=>i['asm:severity']===3&&!(i['asm:reverseTimeline']||[]).length).forEach(i=>console.log(i['@id'].split('/').pop()))"`
2. **AIAAIC Batch D** (pre-2015, ~300 Stubs) — letzter Import-Block, niedrige Prio.
3. **Dedup-Backlog:** simbabwe-cloudwalk (2 Slugs), civitai (2 Slugs),
   usa-cambridge-analytica (kurz/lang). `find-internal-duplicates.js` → `merge-
   internal-duplicates.js`.
4. **needs-review-Cases** (~180 in `aiaaic-batch-*-round-6.json`) sichten.

## 7. Disk-Hygiene (eingehalten)

Trotz hunderter Agenten (manuelle Wellen + 2 Workflow-Batches à 300 Agenten):
Temp-Footprint blieb < 1.8 MB (Workflow-Transkripte liegen im Projekt-`.claude`-Dir,
nicht in Temp). Verirrte `.tmp`-Files entfernt, `.gitignore` härtet `*.tmp.*`.

---

*Stand: 2026-06-18. Letzter Commit: `1a91f1b`. TL-Quote 11.9 % → 39.8 %.
Sev-5 + Sev-4 zu 100 %. Frontend skaliert für Sev-3.*
