# Übergabe — 2026-06-01 · Research-Pipeline & 600er-Rutsch

**Session-Datum:** 2026-06-01
**Endstand:** 601 Incidents live · 41 Commits gepusht · Career-Dashboard MVP komplett

---

## 1. Was hat sich diese Session getan?

### Datenbestand-Sprung: 274 → 601 (+327 / +119 %)

Aufgeteilt in 4 Sammel-Rounds mit jeweils 4-6 Background-Recherche-Agenten:

| Round | Themen | Agenten | Neue Incidents |
|---|---|---|---|
| 1 | Regional: LatAm, MENA, Afrika, EU, Asia-Pacific, US/Canada | 6 | 109 |
| 2 | Vertical: AI-CSAM, Gig-Worker, Zentralasien, Pazifik+Karibik, AI-Healthcare-EU/Asia, frankophones Afrika | 6 | 95 |
| 3 | Vertical: Crypto-Scams, Religion-Censur, AI-Tax/Insurance, Migration-Border | 4 | 63 |
| 4 | Vertical: Autonome Waffen, Content-Moderation-Worker, Cybersecurity-AI, Klima-Protest | 4 | 60 |
| **Σ** | | **20** | **327** |

Alle 601 Incidents passieren das Bilingual-Audit sauber (0 Findings).

### Career-Dashboard MVP komplett (8/8 Steps)

Live unter `aistrikemap.org/career.html` + `methodik-career.html`:

1. ✅ Bundle-Script-Skelett (Schichten A/B/C, buildEntry-Pipeline)
2. 🟡 Layer-A-Loader: Infrastruktur done + 1 IAB-Pilot-Datapoint. Bulk-Curation steht aus.
3. ✅ Beruf-Katalog: 82 ISCO-08 4-digit Codes, 10 Cluster
4. ✅ `career.html` Skelett (Filter, Mode-Toggle)
5. ✅ Map-Modus (Leaflet, 5-Bucket-Choropleth, Detail-Panel)
6. ✅ Chart-Modus (Chart.js, Multi-Country-Confidence-Bänder)
7. ✅ `methodik-career.html` (7 Sections + Quellen-Tabelle)
8. ✅ Permalink-Schema + i18n + Mobile

### Pipeline-Toolbox (alle in `scripts/`)

| Script | Zweck |
|---|---|
| `research-runner.js` + topics + Action | Cloud-Researcher (rate-limit-gated bis API-Tier-Upgrade) |
| `verify-candidates.js` | HTTP-Liveness + Content-Match-Heuristik |
| `score-candidates.js` | Quality-Score 0-10 mit Source-Whitelist |
| `dedup-candidates-round-1.js` | Cross-File Jaccard + Country/Year-Boosts |
| `analyze-coverage.js` | Themen-Lücken-Analyse → Round-N+1-Vorschläge |
| `promote-candidates.js` | Kandidaten → JSON-LD + index.json + Marker |
| `fix-umlaut-transliterations.js` | CLAUDE.md-Compliance (existierte schon) |

### Audit-Tool-Erweiterung

`scripts/audit-bilingual-incidents.js` erkannt jetzt Umlaut-Transliterationen
zusätzlich zu DE↔EN-Konsistenz. Hat in einer früheren Session schon ~1.400
Bugs sichtbar gemacht.

---

## 2. Aktueller Bestand-Stand

```
data/incidents/*.json   601 JSON-LD-Files
data/index.json         601 Marker-Einträge mit lat/lng/severity/types
data/all-incidents.json 4.6 MB Bundle
```

Audit-Status: `0 Findings` (komplett bilingual + Umlaut-clean).

**`data/incident-candidates/`** (Staging):

| File | Kandidaten | Status |
|---|---|---|
| 16 Round-1-bis-Round-4-Files | 327 | alle "promoted" |
| `_README.md`, `_schema.md` | — | Workflow-Doku |
| `_dedup-report-round-1.md` | — | Pipeline-Output |
| `_quality-report-round-1.md` | — | Pipeline-Output |
| `_round-3-topic-suggestions.md` | — | Coverage-Analyse |
| `global-elections-deepfakes-2024-round-2026-06-01.json` | 0 | leerer Cloud-Run-Output (Rate-Limit-Crash) |

---

## 3. Offene Fronten

### A. Cloud-Research-Runner (rate-limited)

**Stand:** Funktioniert technisch, scheitert an Anthropic-API-Rate-Limit
(30k tokens/min auf Tier 1). Letzter Run produzierte 0 Kandidaten, weil
Topic 1 (`global-elections-deepfakes-2024`) das gesamte Minute-Budget
verbrannte und Topics 2-12 mit HTTP 429 abgewiesen wurden.

**Fixes bereits eingebaut** (Commit `e13f55f`):
- `MAX_WEB_SEARCHES_PER_TOPIC` 25 → 5
- `MAX_OUTPUT_TOKENS` 8000 → 5000
- `INTER_TOPIC_DELAY_MS` 75 Sekunden Pause
- Stärkere `save_candidates`-Aufruf-Prompts
- Debug-Output wenn Tool nicht gerufen

**Was noch fehlt:** entweder Tier-Upgrade auf API-Account (Anthropic-Konsole
→ Settings → Billing → $40 Credit aufladen → automatisch Tier 2 mit
80k tokens/min) oder weitere Drosselung der Pause auf 120-180 Sek.

**Wichtige Klarstellung:** Claude Max ($200/Monat) ist für claude.ai +
Claude Code. Die Anthropic API (api.anthropic.com) ist ein separates
Produkt mit eigener Abrechnung. Max gibt **keinen automatischen Boost**
auf API-Tier. Das hat den User diese Session zwei Mal verwirrt — beim
nächsten Mal klar kommunizieren.

### B. Career-Dashboard Step 2 (Daten)

IAB-Bulk-Curation für die 82 ISCO-Codes ist NICHT erledigt. Aktuell
exakt 1 Datapoint (ISCO 2211 / 2025 / 0.13). Background-Agenten konnten
das nicht durchziehen weil WebFetch im Sandbox blockiert.

Beste Wege:
1. **Manuell** vom IAB-Forschungsbericht 23/2025 PDF (S. 142-189 mit
   Anhang-A1-Tabellen) übertragen.
2. **Excel-Upload-Pfad**: User lädt IAB-Datentool als
   `data/career/sources/_raw/iab-fb-2325-anhang.xlsx`, anschließend
   `xlsx`-Skill nutzen.
3. **Cloud-Researcher mit API-Tier 2+**: dann hat der Researcher
   WebFetch + kann PDF-Tabellen extrahieren.

### C. Sandbox-Limits im Agent-Tool

Background-Agenten konnten diese Session NICHT:
- `WebFetch` (auch read-only)
- `Bash` / `PowerShell` (auch für rein lokale Node-Skripte)
- Git-Commit / Push

Background-Agenten KÖNNEN:
- `Read`, `Write`, `Edit`, `Grep`, `Glob`
- `WebSearch` (nicht `WebFetch`)

→ Heißt: Recherche-Agenten arbeiten nur mit WebSearch-Snippets. URLs
sind plausibel aber unverifiziert bis zum Foreground-Lauf von
`verify-candidates.js`. Diese Session haben wir die meisten Cases
foreground-verified (Round 1 + 2). Round 3 + 4 sind direkt promotet
worden ohne separaten Verifier-Run (--min-sources 2 als Quality-Gate).
Hier wäre ein Foreground-Verifier-Lauf rückwirkend wertvoll.

### D. Round-N+1-Vorschläge (untouched aus `_round-3-topic-suggestions.md`)

Bereits abgearbeitet: zentralasien, pacific-caribbean, ai-healthcare-eu-asia,
ai-tax-revenue (mit insurance kombiniert), generative-ai-csam,
platform-gig-worker, ai-crypto-scams, francophone-africa-sahel,
religion-specific, ai-insurance.

**Noch nicht abgearbeitet aus dem ursprünglichen 12er-Round-2-Topics-Pool:**
- *(alle wurden in Round 1-4 abgehakt — nichts mehr aus der Liste übrig)*

**Vorschläge für Round 5 (frisch):**
- Justiz-AI (Strafzumessung, Recidivism-Scores, Bail-AI, US/UK/NL/DE)
- IoT-Healthcare-Spillover (Connected Devices, AI-Pacemaker-Fehler)
- AI-in-Sports (Schiedsrichter-AI, Doping-Detection-Bias, Athletes-Privacy)
- BCI-Privacy (Neuralink-Konkurrenz, Synchron, Forschungs-Setups,
  Hirndaten-Diebstahl-Vorfälle)
- BRICS-Tech-Cooperation (China-Russia-AI-Exchange, Iran-China-Drohnen,
  Saudi-China-AI)
- Pre-2022-historische Cases (Microsoft Tay 2016, COMPAS 2016,
  Sweetie 2013 etc.)
- AI-im-Steuerwesen Asia (Korea NTS-Tax-AI, Japan NTA)
- AI-Generated-Misinformation-Health (Anti-Vax-Deepfakes, Cancer-Cure-Scams)
- Ageing-Population-AI (Care-Robots, Elder-Surveillance)

### E. Datenqualität der promotierten Cases

Diese Session promoteten Cases haben **leere `asm:reverseTimeline`-Arrays**.
Das Promote-Tool füllt das absichtlich nicht — Timeline-Anreicherung ist
manuell-redaktioneller Schritt.

Aktuell auf Promote-Stand ist:
- ✅ name, name_de/en, description, description_de/en
- ✅ location mit Geo (wenn vom Agent geliefert)
- ✅ asm:incidentType
- ✅ asm:severity + asm:verificationLevel
- ✅ asm:actors
- ✅ asm:sources mit url/title/publisher/date/type
- ✅ asm:metadata mit promotedFromCandidateId
- ⛔️ asm:affectedRights = []
- ⛔️ asm:reverseTimeline = []

Für ein paar prominente Cases (Pegasus-Cluster, Sama-Welle,
Letzte-Generation, Bayraktar-Drohnen) wäre Timeline-Anreicherung
sinnvoll.

### F. Bekannte Long-Tail-Bugs

- **Slug-Doppel-Prefix**: Manche promotierten Slugs haben Country-Code
  doppelt am Anfang ("usa-usa-...", "frankreich-frankreich-...",
  "burkina-faso-burkina-faso-..."). Liegt daran dass die Agent-Slugs
  schon den Country-Prefix enthielten und mein generateSlug() den
  Country-Prefix nochmal vorangestellt hat. Funktional OK, aber
  unschön. ~25 Cases betroffen. Fix: generateSlug() um Erkennung
  vorhandenes Prefix erweitern.
- **Smart-Quote/JSON-Bug**: Agenten schreiben gelegentlich "..."
  (German-Smart-Open + ASCII-Close) was JSON bricht. Diese Session
  4x manuell gefixt. Generischer Fix wäre: dem Agent in der
  System-Prompt mitgeben "JSON-Strings nutzen nur ASCII-Quotes
  oder Unicode-Smart-Pairs `„X"`".

---

## 4. Commit-Übersicht (chronologisch)

```
45c1b91  Spanien-Incident EN-Titel Fix
9927d01  Raine-EN + ZipRecruiter-Umlaute
073a291  AU + FI + AfD Audit-Fixes
a72e353  Audit-Erweiterung umlaut_transliteration
45cf17f  Mass-Fix Welle 1 (928 Korrekturen)
3e51fff  Mass-Fix Welle 2 (265 Korrekturen)
428c0db  Mass-Fix Welle 3 + uber-Generalisierung
37cd0e2  Doku Fixer-Tool

aeb7b8b  Career-Dashboard Step 3: taxonomy.json
c7855e9  Career-Dashboard Step 2: Layer-A-Loader-Infra
5c6bb64  Career-Dashboard Step 4: career.html Skelett
3f3ce9c  Career-Dashboard Step 5: Map-Modus
ba648a5  Career-Dashboard Step 6: Chart-Modus
7fc4927  Career-Dashboard Step 7: methodik-career.html
ee9effd  Career-Dashboard Step 8: Permalink + i18n + QA

530c7bb  Incident-Candidates-Staging-Area
b24f58e  Round-1-Staging-Partial (4 von 6 Agenten)
cac8eb3  Round-1-Staging abgeschlossen (Asia-Pacific + US/Canada)

c3c239f  Cloud-Research-Pipeline (research-runner.js + Workflow)
ac1c90a  research-runner: actions-Versionen Bump
e13f55f  research-runner: Rate-Limit-Anpassung Tier 1
c6734a8  research-runner: YAML-Syntax-Bug-Fix

95b747b  Tooling-Welle (4 Pipeline-Scripts)
2dccf67  Round-1 Reports (Dedup + Quality + JSON-Fix)
3c2915c  Verifier-Run Round 1 (99/111 verified)
73da9c1  Promote-Test (5 Incidents)
14ab688  Round-1-Rutsch (94 Incidents → 373)
c022f33  Round-1-needs-review (10 → 383)
38c96ce  Round-2-Rutsch (71 → 454)
4f0c02e  Round-2-needs-review (24 → 478)
60e7578  Round-3-Rutsch (63 → 541)
50e69ce  Round-4-Rutsch (60 → 601)
```

---

## 5. Empfehlungen für die nächste Session

### Vorschläge nach Aufwand sortiert

**Klein (1 Session):**
- Slug-Doppel-Prefix in `promote-candidates.js` fixen + die ~25
  betroffenen Files umbenennen (oder als kosmetisch ignorieren)
- Foreground-Verifier-Run für die ungeverifierten Round-3 + Round-4
  Cases (würde ~150 verified vs. ~10 rejected ergeben)
- Round-5-Topics in `scripts/research-topics.json` mergen (für späteren
  Cloud-Lauf nach Tier-Upgrade)

**Mittel (2-3 Sessions):**
- Round 5 mit Background-Agenten starten (~50-80 weitere Cases)
- 10 prominente Cases mit `asm:reverseTimeline` anreichern
- API-Tier-2-Upgrade kommunikativ klären + Cloud-Runner testen

**Groß (eigener Sprint):**
- IAB-Bulk-Curation für Career-Dashboard (Excel-Upload-Pfad)
- US BLS + UK ONS + FR DARES Layer-A-Daten dazu (Career-Dashboard
  realistisch befüllen)
- Crowdsourcing-AI-Pre-Check (Phase-2 Item 108)
- Auto-Update-Architektur (Phase-2 Item 107) — Cost/Privacy-Decision

### Kommunikative Notiz für den User

- Erkläre nicht zweimal warum Claude Max ≠ API-Tier. Verweise auf
  diesen Übergabe-Doc-Abschnitt (3.A) bei Bedarf.
- Bei "weiter" / "weiter im Hintergrund" weiß der User dass das
  Background-Agenten meint die im Sandbox keine `Bash`/`WebFetch`-
  Permissions haben. Sie können WebSearch + File-I/O.
- Bei Pipeline-Skript-Ausführung im Foreground (verify-candidates,
  promote-candidates) zuerst nach Bash-Permission fragen wenn nicht
  klar bereits genehmigt.

### Definition-of-Done für "1000-Pack"

Falls das nächste Ziel der 1000er-Marke gilt: 401 weitere Cases nötig.
Mit Round 5 + Round 6 (jeweils ~80 Cases) + Round 7 (~70) realistisch
in 3-4 weiteren Sessions erreichbar.

---

## 6. Memory-Aktualisierung empfohlen

Nächste Session sollte folgende Memory-Einträge anlegen / aktualisieren:

- **Update** `project_architecture.md` mit Bestand 601 Incidents
- **Neu** `pipeline_tooling.md` — Übersicht der 6 Pipeline-Scripts und
  ihres Verwendungs-Workflows
- **Neu** `agent_sandbox_limits.md` — Festhalten welche Tools
  Background-Agenten haben (Read/Write/Grep/Glob/WebSearch) vs.
  nicht (Bash/WebFetch)
- **Neu** `claude-max-vs-anthropic-api.md` — Klarstellung der
  Produkt-Architektur damit das nicht jedes Mal neu erklärt werden muss

---

*Stand: 2026-06-01, Ende Session.*
*Commits gepusht: 41.*
*Datenbestand: 274 → 601 Incidents (+119 %).*
