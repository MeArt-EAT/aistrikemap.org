# Übergabe — 2026-06-03 · AIAAIC-Import & Quick Wins

**Session-Datum:** 2026-06-03 (bis nach Mitternacht 06-04)
**Endstand:** 1306 Incidents · 5 Commits gepusht · Augenhöhe mit AIID

---

## 1. Was hat sich diese Session getan?

### Bestand: 601 → 1306 (+705 / +117 %)

| Schritt | Δ | Commit |
|---|---|---|
| Round 5 (Background-Agenten: Justiz, BCI, Pre-2022, BRICS, Health-Misinfo) | +65 | `9de97dd` |
| AIAAIC-Import Batch A (2024-2026) | +653 | `794f5c4` |
| Dubletten-Bereinigung | −13 | `3c71776` |
| Schema `autonomous-vehicle` (16 Cases umgesortiert) | ±0 | `107502c` |
| 20 Reverse-Timelines | ±0 | `f2e2c85` |
| **Σ** | **1306** | |

### Liga-Einordnung (recherchiert)

| Datenbank | Incidents | Methode |
|---|---|---|
| OECD AIM | ~15.490 | auto-gescraped (News-Feed, viele Dubletten) — nicht vergleichbar |
| AIAAIC | ~2.263 | kuratiert (CC BY-SA 4.0) |
| AIID | ~1.361 | kuratiert |
| **AIStrikeMap** | **1.306** | kuratiert, bilingual, Geo, Reverse-Timeline |

AIStrikeMap ist jetzt auf Augenhöhe mit AIID — der etabliertesten kuratierten
Incident-DB (die dafür 8 Jahre brauchte).

---

## 2. AIAAIC-Import — der grosse Hebel

**Lizenz (WICHTIG): Pfad B = facts-only.** AIAAIC ist CC BY-SA 4.0. Um den
Share-Alike-Trigger auf unser Dataset zu vermeiden, übernehmen wir NUR Fakten
(Was/Wann/Wo/Wer), KEINE AIAAIC-Texte. Eigene Quellen, eigene Formulierung.
AIAAIC-URL nur als `researcher_notes`-Backref, NIE als `asm:source`.

**Datenquelle:** Google Sheet `1Bn55B4xz21-_Rgdr8BBb2lt0n_4rzLGxFADMlVW0PYI`,
Tab "Incidents" `gid=888071280`. CSV-Export:
```
curl -sL "https://docs.google.com/spreadsheets/d/1Bn55B4xz21-_Rgdr8BBb2lt0n_4rzLGxFADMlVW0PYI/export?format=csv&gid=888071280"
```
2.249 Cases, 18 Felder. Liegt in `data/external-imports/` (gitignored).

**Pipeline (alle Scripts vorhanden):**
1. `analyze-aiaaic-coverage.js` — Gap-Analyse vs. Bestand
2. `convert-aiaaic-to-candidates.js --years 2024,2025,2026 --batch A` — CSV → Stubs
3. Split in Chunks à 30 (inline node-Skript)
4. Background-Agenten (4/Welle), Briefing `_enrichment-briefing.md` —
   DE/EN-Beschreibung + 2-3 Quellen + Severity/Geo/Actor-Korrektur
5. `merge-aiaaic-chunks.js` — zurück in ein Round-File + Stats
6. `dedup-candidates-round-N.js` — vs. Bestand
7. `promote-candidates.js --status verified --min-sources 2`
8. `fix-umlaut-transliterations.js` → `bundle-incidents.js` → `audit-bilingual-incidents.js`

**Batch-Stand:**
- ✅ Batch A (2024-2026): 714 Stubs → 653 promoted
- ⛔ Batch B (2020-2023, ~600): offen
- ⛔ Batch C (2015-2019, ~800): offen
- ⛔ Batch D (pre-2015, ~300): offen, niedrige Prio

**LEKTION (kritisch):** Eine Agenten-Welle kann sich als "completed" melden
OHNE die Datei zurückzuschreiben (passierte mit Chunks 21-24). IMMER per
File-Check verifizieren (`status !== "candidate"`), nicht nur auf die
Notification vertrauen. Retry mit explizitem Write-Reminder im Prompt.

---

## 3. Quick Wins (Tiefe) — diese Session erledigt

### Frontend-Check: grünes Licht für weiteres Wachstum
- Marker-**Clustering ist aktiv** (Leaflet.markercluster): DOM bleibt bei 543
  Nodes trotz 1306 Incidents.
- GitHub-Pages liefert das Bundle **gzip-komprimiert: 7.9 MB → 1.8 MB**.
- Trägt problemlos auch 2.700+. Erst jenseits ~15 MB Bundle (grob 4.000 Cases)
  wäre Lazy-Loading/Tiling nötig.

### Dubletten-Bereinigung (13 entfernt)
- `find-internal-duplicates.js` — prüft Bestand gegen sich selbst (Jaccard +
  Country/Year-Boost). `merge-internal-duplicates.js` — bereinigt verifizierte
  Gruppen (stärkere Version behalten, Sources mergen, schwächere löschen).
- AIAAIC-Importe hatten Cases dupliziert, die schon im Bestand waren.
- 2 false-positives bewusst verschont: NL Uber (290 Mio) ≠ Clearview (30,5 Mio);
  Disney/Midjourney ≠ Disney/MiniMax.

### Schema autonomous-vehicle
- Neuer incidentType für selbstfahrende-Auto-Crashes (waren als
  `autonomous-weapons` notbehelfs-getaggt). 16 Cases umgestellt.
- Ergänzt: `js/filters.js`, `i18n/de.json` ("Autonomes Fahren / Robotaxis"),
  `i18n/en.json` ("Autonomous Driving / Robotaxis"), `CLAUDE.md`.
- Browser-verifiziert: Filter erscheint in DE+EN, kein i18n-Key-Leak.

### 20 Reverse-Timelines
- Die 653 Importe hatten leere `asm:reverseTimeline`/`asm:affectedRights` — das
  Kern-Feature. 20 prominenteste Cases via 5 Agenten angereichert.
- Bestand mit TL: 274 → 294. Briefing: `_timeline-briefing.md`.

---

## 4. Offene Fronten / Follow-ups

### A. Altlasten-Dubletten (Grenzfälle)
`find-internal-duplicates.js` (Schwelle 0.50) fing diese nicht, weil die Slugs
zu unterschiedliche Tokens haben:
- `australien-robodebt` (System 2015, 2s) vs
  `australien-robodebt-royal-commission-...` (Aufarbeitung 2023, 3s) — beide
  jetzt mit TL. Plus `australien-centrelink-ki-fraud-2025` = separater Fall (KEEP).
- `spanien-viogen-algorithmus-femizide-fehlklassifizierung` (5s, 2007) vs
  `spanien-viogen-risiko-algorithmus-...` (3s, 2024) — beide mit TL.

Brauchen manuelle Merge-Entscheidung (welche startDate/welcher Schwerpunkt
kanonisch). Lieber sorgfältig als überstürzt — kein Datenverlust solange beide
liegen.

### B. Audit-Tool: DE/EN-Namensäquivalenz
Aktuell 11 Audit-Findings, ALLE false-positives: der Algorithmus erkennt
sprachspezifische Eigennamen-Schreibweisen nicht als äquivalent
(Hisbollah=Hezbollah, Netanjahu=Netanyahu, Magyar, MyPillow, Brownlee,
Carnegie-Mellon, Epic-Fury). Eine Known-Equivalents-Liste in
`audit-bilingual-incidents.js` würde den 0-Findings-Standard wiederherstellen.

### C. Reverse-Timelines für den Rest
Nur Top-20 gemacht. ~633 weitere importierte Cases haben noch keine TL.
Nächste Tranche: die severity-5-Cases (Liste via Skript in §6 unten).

### D. AIAAIC Batch B + C
Der grosse Mengen-Hebel. Batch B (2020-2023, ~600) + C (2015-2019, ~800)
brächten Richtung 2.700 → würde AIAAIC überholen. Frontend trägt das (s. §3).

---

## 5. Neue Tools dieser Session (alle in scripts/)

| Script | Zweck |
|---|---|
| `convert-aiaaic-to-candidates.js` | AIAAIC-CSV → Candidate-Stubs (ISO2-Map, Tech→Type, Pfad-B-Lizenz) |
| `merge-aiaaic-chunks.js` | Enrichte Chunks → ein Round-File + Sanity-Stats |
| `analyze-aiaaic-coverage.js` | Gap-Analyse AIAAIC vs. Bestand |
| `dedup-candidates-round-6.js` | Round-6-Dedup vs. Bestand |
| `find-internal-duplicates.js` | Bestand gegen sich selbst (semantische Dubletten) |
| `merge-internal-duplicates.js` | Dubletten-Gruppen bereinigen (Source-Merge + Delete) |

Briefings in `data/incident-candidates/`: `_enrichment-briefing.md` (AIAAIC-Stub-
Anreicherung), `_timeline-briefing.md` (Reverse-Timeline-Bau), `_agent-briefing.md`
(Recherche-Agenten).

---

## 6. Empfehlungen für die nächste Session (nach Aufwand)

**Klein (1 Session):**
- Audit-Namensäquivalenz-Liste → 0 Findings wiederherstellen (§4.B)
- 2 Altlasten-Dubletten manuell mergen (§4.A)

**Mittel (2-3 Sessions):**
- AIAAIC Batch B starten (gleiche Pipeline wie Batch A, §2)
- Weitere Reverse-Timelines (severity-5-Cases). Kandidaten-Liste:
  ```
  node -e "const a=require('./data/all-incidents.json');a.filter(i=>i['asm:severity']===5 && !(i['asm:reverseTimeline']||[]).length).forEach(i=>console.log(i['@id'].split('/').pop()))"
  ```

**Gross (eigener Sprint):**
- AIAAIC Batch C → Bestand Richtung 2.700, vor AIAAIC
- Career-Dashboard Step 2 (IAB-Bulk-Curation) — steht seit 2026-06-01
- `asm:affectedRights` für alle importierten Cases (nicht nur die 20 TL-Cases)

---

## 7. Wichtige Kontext-Notizen

- **Disk-Hygiene-Regel** ist jetzt global in `~/.claude/CLAUDE.md` (nach
  451-GB-Vorfall). Background-Agent-Footprint blieb diese Session durchgehend
  ~1 MB. Bei Plänen mit vielen parallelen Agenten / Bulk-Web-Verifikation:
  VORHER Disk-Budget nennen.
- **Claude Max ≠ Anthropic-API-Tier** — separate Konten. Cloud-Runner braucht
  API-Tier-2-Upgrade (siehe Memory `claude-max-vs-anthropic-api`).
- **User hat parallel** ein Whisper-Transkriptions-Skript laufen
  (`_transcribe_2und3.py` im Projekt `Claude_Code/Lehren/Heiliger_Geist`) — das
  ist KEIN AIStrikeMap-Prozess, kein Disk-Müll, nur hohe CPU-Last. Nicht killen.

---

*Stand: 2026-06-04 (Session-Ende).*
*Commits gepusht: 5 (9de97dd, 794f5c4, 3c71776, 107502c, f2e2c85).*
*Bestand: 601 → 1306 Incidents (+117 %).*
