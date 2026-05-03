# Phase 2 — Labor-Impact-Cases (Items 105–108)

**Status:** Items 105 + 106 + 108 **live**, Item 107 konzipiert. Stand 2026-05-02: 4 Cases (SAP DE, IBM US, Klarna SE, Amazon US) = 32.500 Stellen in 3 Ländern auf Karte sichtbar. Crowdsourcing-Eingang offen. Cases-Erweiterung läuft als Sonntags-Routine.

**Zweck:** AIStrikeMap wird **eigene primäre Quelle** für konkret gemeldete KI-bedingte Stellen-Veränderungen weltweit — nicht nur Aggregator von OECD/WEF/ILO-Studien. Schließt die Lücke, dass globale Layoff-Tracker mit AI-Attribution fehlen (außer US-Challenger).

---

## Iterations-Verlauf 2026-05-01 / 2026-05-02

Item 98 (Labor Impact Ticker) wurde an einem Tag durch fünf Konzept-Iterationen geführt, dann zog sich die Erkenntnis durch eigene Module weiter:

1. **v0.1** — Worldometers-Counter `displaced` / `created`, `startTime = Date.now()`. Verworfen: Saldo-Suggestion + Aufruf-relativer Start.
2. **v0.2** — Statische Bandbreiten-Anzeige (Substitution / Augmentation), Beobachtungs-Periode mit Fortschrittsbalken. Verworfen: zu langweilig (User-Feedback "keine Bewegung"), Beobachtungs-Periode bringt Verfallsdatum-Effekt.
3. **v0.3** — Tickender Counter mit fixem Anker (1.1.2025 = WEF FoJ 2025), Periode interner Berechnungs-Wert ohne UI-Anzeige. Live auf main. Aber: Counter-Werte sind Studien-Potenzial, nicht realisierte Realität.
4. **Konzept-Pivot** — Nutzer-Feedback "Theorie vs. Praxis als Botschaft". Realität-Block muss ergänzt werden.
5. **Architektur-Entscheidung** (Item 105 dieser Doku) — Realität-Block braucht eigene Daten-Basis; weder Radar noch Incidents bedienen das. Neues Cases-Sub-System.
6. **v0.4** (2026-05-02) — 3-Ebenen-Layout auf `labor-impact.html`: Potentialanalyse + Plan (WEF Survey 41/77/47 %) + Realität (Aggregat aus Cases-DB). Drei farbige Sektion-Akzente (orange/lila/rot). Cross-Links zur Map + zum Issue-Template.
7. **Item 106 Map-Modul** (2026-05-02) — `labor-impact-map.html` mit Leaflet, Marker-pro-Land, Detail-Panel, on-demand-Loading aus pro-Land-Bundles, drei Pillen-Typen für Methodik-Vorbehalte (stable/disputed/reversal).
8. **Item 108 Crowdsourcing-Eingang** (2026-05-02) — Issue-Template + Datenschutz §8 + 8 i18n-Keys. Eingang offen, manueller Maintainer-Review.

**Methodische Kern-Erkenntnisse:**
- **Statista-Logik weltweit anwendbar**: "Theorie vs. Praxis" wird durch 3-Ebenen-Layout konkret.
- **Globale Verlust-Tracker existieren nicht** (ILO bestätigt). AIStrikeMap kuratiert selbst.
- **AI-Attribution-Stärke entscheidet** über Counter-Aufnahme (≥4). Cases mit Stärke 1-3 wären Verfälschung — Siemens und Bayer bewusst nicht aufgenommen, dokumentiert in Recherche-Notizen.
- **Asymmetrie zwischen abgebauten und neu geschaffenen Stellen sichtbar** durch `net_workforce_change`-Feld + "Gesamt stabil"-Pille (3 von 4 ursprünglichen Cases stable).
- **Tags + Severity-Class** als Skalierungs-Vorbereitung — 18 Tag-Counts + Severity-Verteilung im Aggregate.

---

## Item-Aufschlüsselung

| Item | Inhalt | Phase | Status |
|---|---|---|---|
| **105** | Cases-Datenbasis + Bundle-Script + Schema v0.2 + Pro-Land-Splitting | 2-Solo (manuell) | **Live 2026-05-01/02** · 4 Cases drin |
| **106** | `labor-impact-map.html` Marker-pro-Land + Detail-Panel | 2-Solo | **Live 2026-05-02** · Choropleth optional in v2 |
| **107** | Auto-Update-Architektur (GitHub Action + LLM-API für Cases + Radar + Incident-EN-Übersetzung) | 3-Architektur | Konzipiert · Cost/Privacy-Decision steht aus |
| **108** | Crowdsourcing-Pipeline (Issue-Template + DSGVO + Pre-Veröffentlichungs-Pflicht-Check) | 2-Solo | **Eingang live 2026-05-02** · KI-Pre-Check als Folge-Slot mit 107 |

---

## 1. Daten-Architektur (Item 105)

### 1.1 Dateistruktur

```
data/
├── labor-impact-rates.json              (bestehend, Studien-Potenzial)
├── labor-impact-aggregate.json          (auto-generiert: Globals + by_country
│                                         + by_industry + by_tag + by_severity
│                                         + top_reductions + country_files-Manifest)
├── labor-impact-cases/                  (Quelle, eine Datei pro Case)
│   ├── _schema.md                       (Schema-Dokumentation)
│   ├── sap-2024-konzernumbau.json
│   ├── klarna-2024-customer-service.json
│   ├── ibm-2023-back-office-pause.json
│   ├── amazon-2025-corporate.json
│   └── ...
└── labor-impact-by-country/             (auto-generiert: pro-Land-Bundle für
    ├── de.json                           Detail-Ansicht / Item 106 Map-Modul)
    ├── us.json
    ├── se.json
    └── ...
```

**Lade-Strategie:**
- Übersichts-Page (`labor-impact.html`) lädt nur `labor-impact-aggregate.json` (klein, skaliert) + Top-5-Sample
- Detail-Page / Map-Modul (Item 106) lädt **on-demand pro Land** aus `labor-impact-by-country/{land}.json` → kein Memory-Lastspitze bei >100 Cases
- `country_files`-Manifest im Aggregate liefert Pfade + Land-Summen für Karten-Rendering

### 1.2 Schema-Highlights

Vollständig in [_schema.md](../../data/labor-impact-cases/_schema.md). Kern-Felder:

- `ai_attribution_strength` (1–5) — entscheidet ob ein Case in den Counter geht (≥4)
- `direction` — `"reduction"` oder `"creation"`
- `net_workforce_change` — `"reduction"` / `"stable"` / `"growth"` (macht Asymmetrie zwischen abgebauten und neu geschaffenen Stellen sichtbar; SAP: 10.000 abgebaut + Gesamt stable durch KI-Neueinstellungen)
- `headcount_germany` (optional) — für DE-spezifische Aufschlüsselung
- `isco_categories` (optional) — Vorbereitung Career-Dashboard-Cross-Reference
- mind. 2 Quellen, eine davon journalistisch, keine Pure-PR

### 1.3 Bundle-Script

`scripts/bundle-labor-cases.js`:
- Liest alle `*.json` aus `data/labor-impact-cases/` (außer `_*`)
- Filtert `ai_attribution_strength >= 4` für Counter
- Erzeugt `data/labor-impact-aggregate.json` mit Totals + by_country + by_industry + top_reductions
- Schwächere Cases (Stärke 2-3) werden für Detail-Liste mitgezählt, aber nicht im Counter

Manueller Lauf: `node scripts/bundle-labor-cases.js`. Analog zum bestehenden `bundle-incidents.js`-Pattern.

---

## 2. Frontend-Vision (Item 105/106)

### 2.1 Übersichts-Page Rebuild (Item 105 Frontend-Teil)

`labor-impact.html` bekommt ein 3-Ebenen-Layout (User-Wunsch "Theorie vs. Plan vs. Praxis"):

```
═══ Potentialanalyse ════════════════════════════════════════
[bestehende Counter Substitution / Augmentation, v0.3, behalten]
─────────────────────────────────────────────────────────────
"Was Studien für möglich halten" (Bandbreite 8–18 %)


═══ Was Unternehmen weltweit planen ═════════════════════════
WEF Survey 2025 — 1.000+ Arbeitgeber, 55 Länder:
  41 % planen Reduktion in KI-automatisierbaren Bereichen
  77 % planen Upskilling
  47 % planen interne Umverteilung
─────────────────────────────────────────────────────────────
"Erwartung der Arbeitgeber" — Plan, keine Realisierung


═══ Realität: Was bisher konkret gemeldet wurde ═════════════
Aggregat aus AIStrikeMap-Cases-Datenbank (kuratiert):
  Reduktion total:    {labor-impact-aggregate.json totals.reduction_headcount}
  Schaffung total:    {labor-impact-aggregate.json totals.creation_headcount}
  Cases:              {totals.cases_counted} aus {totals.countries_with_cases} Ländern

  Top Reduktionen (5):
  · SAP DE 2024 — 10.000 (Gesamt-Headcount stable)
  · ...

  → Detail-Karte mit allen Fällen [Link Item 106]
  → Fall melden [GitHub Issue, Item 105 Crowdsourcing-Slot]
─────────────────────────────────────────────────────────────
```

### 2.2 Map-Modul (Item 106)

`labor-impact-map.html`:
- Leaflet-Choropleth (Welt-GeoJSON, Land-Färbung nach `by_country.reduction`)
- Klick auf Land → Detail-Panel rechts (analog `index.html`)
- Detail-Panel zeigt: Cases-Liste pro Land, by_industry-Aufschlüsselung, ISCO-Aufschlüsselung
- Pattern recyclebar für Career Dashboard Step 5

---

## 3. Pflege-Workflow

### 3.1 Sonntags-Recherche (analog Radar-Pattern)

Aus `konzept-live-radar.md` übernommen:
- 1× pro Woche kuratieren
- Aufnahmekriterien: 2+ unabhängige Quellen, mind. eine journalistisch
- Realistisch: 1–3 neue Cases pro Woche, primär DE/EU-Fokus (US ist via Challenger schon gut abgedeckt)

### 3.2 Land-für-Land-Strategie

Empfohlene Reihenfolge (Datenlage + journalistische Verfügbarkeit):
1. **DE** — SAP ✓, dann Siemens, ZF, Bosch, VW, Bayer, Telekom, Deutsche Bank (Stärke je nach Quellenlage 2–4)
2. **EU** — Klarna (SE), Onclusive (FR), Le Point (FR), BBVA (ES), Orange (FR)
3. **US-Aggregate** — Challenger Reports kumuliert + medial bekannte Cases (Amazon 14k, Meta 20k, IBM 7,8k, Klarna, Duolingo, Google 12k)
4. **APAC** — TCS, Infosys (IN), japanische Konzerne wenn Quellenlage da
5. **CA/AU** — bei Gelegenheit

Pro Session: 1 Land oder 1 großer Konzern mit Tiefe (4-6 Quellen pro Case, wie SAP).

### 3.3 Crowdsourcing-Slot (eigener Mini-Slot)

GitHub Issue Template `.github/ISSUE_TEMPLATE/ki-entlassung-melden.yml`:
- Pflichtfelder: Firma, Land, Datum, Anzahl, mind. 1 Quellen-URL, AI-Zitat
- Issue wird review't, in JSON konvertiert, committet
- Schema unverändert, nur Eingangskanal

**Wichtig — rechtlicher Rahmen:** Crowdsourcing-Eingaben unterliegen einer **Pre-Veröffentlichungs-Prüfungs-Pflicht** des Betreibers (Diskreditierungs-Risiko Firmen + Personen, DSGVO bei Klarname-Erfassung). Komplette Architektur und Issue-Template-Pflichtfelder in [recht-crowdsourcing.md](recht-crowdsourcing.md):

- Drei-Stufen-Pipeline: User-Submission → KI-Pre-Check (LLM-API) → Maintainer-Review
- Zwei-Kanal-Trennung: öffentlich (Repo-JSON) vs. privat (Klarname/Kontakt im separaten Ironhark-internen Repo)
- DSGVO-Hinweise im Template + Datenschutz-Page-Erweiterung Pflicht
- KI-Pre-Check teilt LLM-API-Setup mit Item 107 Auto-Update — gemeinsamer Architektur-Slot

Vor Inbetriebnahme: juristisches Review (IT-/Medienrecht).

---

## 4. Auto-Update-Architektur (Item 107)

**Status:** Konzept, nicht entschieden. Eigener Architektur-Slot mit Cost/Privacy-Decision.

**Komponenten:**
- GitHub Action (cron, wöchentlich)
- Claude API oder ähnlicher LLM-API-Provider (API-Key in GitHub Secrets)
- Quellen-Trigger: Layoffs.fyi RSS, Reuters/Bloomberg-Feeds (paywall-frei wo möglich), Press-Release-Aggregatoren
- LLM strukturiert nach Schema, schreibt JSON-PR
- Mensch reviewt PR, mergt

**Offene Fragen vor Entscheidung:**
- Cost-Schätzung: ~1-2 EUR pro Wochenlauf, ~50-100 EUR/Jahr je nach Quellenmenge
- Halluzinations-Risiko: LLM erfindet Cases — Verifikation bleibt menschliche Aufgabe (PR-Review)
- Quellen-Lizenz: Layoffs.fyi-Daten dürfen wir wie nutzen? Bloomberg/Reuters via Paywall?
- Cron-Frequenz: täglich vs. wöchentlich (User-Wunsch "tägliche Änderung interessant")

**Zukunftsmusik:** Wenn Item 107 läuft, kann das Pattern auch aufs **Radar** angewendet werden (analog manuelle Sonntags-Review → semi-automatische Wochen-Updates mit menschlichem PR-Review).

---

## 5. Konzept-Konsistenz mit Career Dashboard

Wichtiger Punkt: Die Cases-Datenbank überlappt thematisch mit dem Career Dashboard (Items 94–99), aber sie sind **komplementär, nicht redundant**:

| | Cases-DB (Item 105–106) | Career Dashboard (Items 94–99) |
|---|---|---|
| Was zeigt es? | Konkret gemeldete Layoffs / Stellen-Schaffung pro Firma | Studien-Bandbreite Exposure pro Beruf × Land × Jahr |
| Datenquelle | Wirtschaftspresse + Pressemitteilungen | OECD / ILO / WEF / nationale Indizes |
| Aktualisierung | Pro Case einzeln, ereignisgetrieben | Jährlich (Studien-Edition-Rhythmus) |
| UI-Modul | Map + Detail-Panel pro Firma/Land | Map + Detail-Panel pro Beruf/Land mit Bandbreite |

**Code-Synergie:** Map-Pattern teilen (Leaflet-Choropleth + Detail-Panel-Slide-in), GeoJSON-Welt-Boundaries gemeinsam laden.

---

## Übergabe an nächste Session

### Stand 2026-05-02 (Ende dieser Session-Reihe)

**Live auf main:**
- ✅ Cases-Datenbasis (Item 105) mit Schema v0.2 (`tags`, `severity_class`, `last_verified`), 4 Cases:
  - **SAP DE** 2024 Konzernumbau — 10.000 (Stärke 4, "Gesamt stabil")
  - **IBM US** 2023 Back-Office-Pause — 7.800 (Stärke 4, "Gesamt stabil", "multi-year-plan")
  - **Klarna SE** 2024 Customer Service — 700 (Stärke 4, "outsourcing-hop", "reversal", "Gesamt stabil")
  - **Amazon US** 2025 Corporate — 14.000 (Stärke 4, "disputed-attribution")
- ✅ Aggregate `data/labor-impact-aggregate.json`: 32.500 Stellen, 4 Cases, 3 Länder, 18 Tags, Severity-Verteilung, by_country/by_industry/country_files-Manifest
- ✅ Pro-Land-Bundles `data/labor-impact-by-country/{de,us,se}.json` für on-demand-Loading
- ✅ Übersichts-Page (Item 98 v0.4) mit 3-Ebenen-Layout (Theorie + Plan + Realität-Aggregat) + Cross-Links
- ✅ Map-Modul (Item 106) `labor-impact-map.html` mit Marker-pro-Land + Detail-Panel + Pillen
- ✅ Crowdsourcing-Eingang (Item 108) Issue-Template + Datenschutz §8

**Dokumentiert:**
- ✅ Schema-Doku, Konzept-Doku (dieses Dokument), recht-crowdsourcing.md, Inventar-Index — alle synchron auf 2026-05-02

**Bewusst nicht aufgenommen** (Stärke 1-3, methodisch verfälschend):
- Siemens 6.000 (China/Auto-Konjunktur primär, KI nur Wachstumsstrategie)
- Bayer ~7.000 (DSO-Bürokratie-Abbau, kein expliziter KI-Grund)
- Bosch ~12.000 (E-Mobilitäts-Wende primär)
- VW 35.000 (E-Mobilität primär)
- Google 12.000 (2023, Pichai-Memo: Wirtschafts-Korrektur nach Pandemie-Wachstum, KI nur als Wachstumsstrategie ohne Layoff-Kausalität)

### Empfohlene Spuren für Folge-Sessions

| Spur | Aufwand | Wirkung |
|---|---|---|
| **EU-Cases erweitern** — Onclusive FR (217), Le Point FR (58), BBVA ES, Orange FR, deutsche Telekom (KI-Pilot-Mischfälle) | 1-2 Sessions à 2-3 Cases | Karte wird voller, EU-Realität sichtbar |
| **APAC-Cases** — TCS IN, Infosys IN, japanische Konzerne mit AI-Adoption | 1 Session pro Land | Globale Coverage |
| **Item 107 Architektur-Slot** — Cost-Recherche, GitHub-Action-Skizze, Decision-Doku. Würde zugleich Incident-EN-Übersetzung (195 Files) und Cases-Auto-Update bedienen | 1 Session Decision, 2-3 Sessions Setup | Strategische Architektur-Investition |
| **Frontend-Polish** — Marker-Cluster bei vielen Ländern, Choropleth-Welt-GeoJSON-Option, Zeit-Filter (welche Cases in welchem Quartal) | 1-2 Sessions | UI-Tiefe |
| **Pre-release-todos abarbeiten** — Bandbreiten-Verifikation v0.4, Body-Content-Restprüfung 4 statische Pages, Umlaut-Audit 195 Incidents | 1-2 Sessions | Veröffentlichungs-Reife |

### Was nicht vergessen werden darf

- **`js/labor-impact.js` Anker-Zeile-Fix** vom 2026-05-01 — wurde mitgenommen in den Commit, aber lebt nun stabil im File: "Counter zählen seit … (Anker: …)" ohne den vorherigen Zusatz "— nicht ab Seiten-Aufruf"
- **Asymmetrie-Caveat** in `i18n/{de,en}.json` Key `labor.caveatBody` ist methodisch wichtig, nicht durch andere Caveats ersetzen
- **Pre-release-todos** Update bei verifizierten Bandbreiten in v0.3 ist noch offen (siehe pre-release-todos.md Item 98 v0.3-Block)

---

*Konzept-Doku erstellt: 2026-05-01, fortgeschrieben 2026-05-02 / 2026-05-03*
*Version: 0.5 (9 Cases / 5 Länder, Insider-Sprache "Bagger-Hebel" entfernt)*
*Status: 9 Cases (59.875 Stellen, 5 Länder DE/US/SE/FR/IN), 3-Ebenen-Übersicht, Map-Modul, Crowdsourcing-Eingang offen. Cases-Erweiterung läuft.*
