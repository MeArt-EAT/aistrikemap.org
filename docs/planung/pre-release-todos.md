# Pre-Release-TODOs

Kleine Aufräum-Arbeiten, die **kurz vor einer Veröffentlichung** erledigt werden sollen — zu klein für einen eigenen Planungs-Slot, aber nicht vergessen werden dürfen.

## Offen

### Mehrsprachigkeit + Umlaute — Gesamt-Status pro Modul (Stand 2026-05-02)

**Konvention** (CLAUDE.md): jede user-sichtbare Phrase auf jeder Seite muss in DE **und** EN vorliegen, Umlaute korrekt (ä/ö/ü/ß, nicht ae/oe/ue/ss). Aktueller Stand:

| Modul / Seite | Body DE | Body EN | Umlaute | Daten DE | Daten EN |
|---|---|---|---|---|---|
| **AI & Arbeit Übersicht** (`labor-impact.html`, Item 98) | ✓ | ✓ | ✓ | – | – |
| **AI & Arbeit Karte** (`labor-impact-map.html`, Item 106) | ✓ | ✓ | ✓ | – | – |
| **Labor-Impact-Cases** (`data/labor-impact-cases/*.json`, Item 105) | ✓ | ✓ (per Case) | ✓ | – | – |
| **Labor-Impact-Rates** (`data/labor-impact-rates.json`) | ✓ | ✓ | ✓ | – | – |
| **Karte / Incidents-Übersicht** (`index.html`) | ✓ | (fehlt: Detail-Strings) | ⚠ prüfen | – | – |
| **Incident-Karten** (`data/incidents/*.json`, 195 Files, Phase 1) | ✓ | ❌ **fehlt komplett** | ⚠ Audit nötig | ja | ❌ fehlt |
| **Radar-Übersicht** (`radar.html`) | ✓ | (teilweise) | ⚠ prüfen | – | – |
| **Radar-Situationen** (`data/radar/*.json`, 6 Files) | ✓ | ❌ **fehlt komplett** | ⚠ Audit nötig | ja | ❌ fehlt |
| **Methodik** (`methodik.html`) | ✓ | (teilweise) | ⚠ prüfen | – | – |
| **Transparenz** (`transparenz.html`) | ✓ | (teilweise) | ⚠ prüfen | – | – |
| **Impressum** (`impressum.html`) | ✓ | (teilweise) | ⚠ prüfen | – | – |
| **Datenschutz** (`datenschutz.html`) | ✓ (mit § 8 Crowdsourcing) | ✓ | ✓ | – | – |
| **404** (`404.html`) | ✓ | (teilweise) | ⚠ prüfen | – | – |

**Konsolidierte Aufgabe:** Alle Module außer Labor-Impact (Items 98/105/106) und Datenschutz brauchen einen vollständigen DE/EN/Umlaute-Pass. Aufwandsschätzung in den Detail-Blöcken unten.

**Reihenfolge-Empfehlung (PL-Vorschlag):**
1. Statische Pages Body-Content-Restprüfung (methodik / transparenz / impressum / 404) — klein, schnell, parallel zu Cases-Erweiterung machbar
2. Umlaut-Audit Globals: Grep über alle JSON + HTML + Markdown — eine Session
3. Architektur-Entscheidung: Incidents+Radar EN-Übersetzung manuell oder via Item 107 Pipeline (siehe unten)
4. Bei Entscheidung pro 107: erst Pipeline, dann automatisierte Übersetzung mit Maintainer-Review-PRs
5. Bei Entscheidung pro manuell: Incidents in Batches à 30-40 Files, Radar in einer Session

---

### i18n-Vollabdeckung Audit

**Problem:** Beim Sprachwechsel DE↔EN wird aktuell nur ein Teil der UI übersetzt. Body-Copy ist in den meisten Pages bereits via `data-i18n`-Attribute instrumentiert, aber **ARIA-Labels**, **title-Attribute** und einige **dynamisch via JS gesetzte Strings** sind hardcoded deutsch. Für Screenreader-Nutzer wird der Sprachwechsel deshalb unvollständig wirksam.

**Infrastruktur ist da:** `js/i18n.js` unterstützt bereits `data-i18n`, `data-i18n-aria`, `data-i18n-title`, `data-i18n-placeholder` (Zeilen 38–55). Es muss nur konsequent angewendet werden.

#### `index.html` ✅ ERLEDIGT 2026-05-01

10 hardcoded ARIA-/Title-Strings via `data-i18n-aria` / `data-i18n-title` instrumentiert, 7 neue Keys (`a11y.navOpen`, `a11y.legend`, `a11y.filterToggle`, `a11y.searchIncidents`, `a11y.minSeverity`, `a11y.minVerification`, `a11y.detailPanel`) in `i18n/{de,en}.json` ergänzt. Existierende Keys `filter.title` und `detail.close` wiederverwendet.

Original-Diagnose-Tabelle als Referenz, falls Pattern für andere Pages benötigt wird:

| Zeile | Element | Hardcoded String | Vorschlag i18n-Key |
|---|---|---|---|
| 67 | `<button class="nav-toggle">` | aria-label="Navigation öffnen" | `a11y.navOpen` |
| 94 | `<div class="map-legend">` | aria-label="Kartenlegende" | `a11y.legend` |
| 95 | `<button class="map-legend__toggle">` | title="Legende" | `a11y.legend` (reuse) |
| 115 | `<aside class="filter-panel">` | aria-label="Filter" | `filter.title` (reuse, exists) |
| 118 | `<button class="filter-toggle-btn">` | aria-label="Filter ein-/ausklappen" | `a11y.filterToggle` |
| 124 | `<input id="filter-search">` | aria-label="Vorfälle durchsuchen" | `a11y.searchIncidents` |
| 136 | `<input id="filter-severity">` | aria-label="Mindest-Schweregrad" | `a11y.minSeverity` |
| 147 | `<input id="filter-verification">` | aria-label="Mindest-Verifizierungsstufe" | `a11y.minVerification` |
| 181 | `<section id="detail-panel">` | aria-label="Vorfall-Details" | `a11y.detailPanel` |
| 184 | `<button class="detail-close-btn">` | aria-label="Schließen" | `detail.close` (reuse, exists) |

**Neue i18n-Keys nötig (× 2 Sprachen):** `a11y.navOpen`, `a11y.legend`, `a11y.filterToggle`, `a11y.searchIncidents`, `a11y.minSeverity`, `a11y.minVerification`, `a11y.detailPanel` — 7 Keys × 2 = 14 JSON-Einträge.

**Auch in `index.html` zu fixen:** Dynamischer `incident-counter` (Zeile 230–235) hat manuelle DE/EN-Verzweigung mit Template-Strings. Idiomatisch wäre `I18n.t('counter.format', {count, countries})` mit Platzhalter-Interpolation — erfordert kleine Erweiterung von `js/i18n.js` für Template-Substitution, oder pragmatisch mit zwei Keys `counter.format.de` / `counter.format.en` und `String.replace`. Alternativ Status-quo lassen, weil funktional korrekt; nur als "could-be-cleaner" notiert.

#### Architektur-Frage: Meta-Tags und og:locale

`index.html` hat statische Meta-Tags auf Deutsch (`<title>`, `<meta name="description">`, `og:*`, `twitter:*`, `og:locale: de_DE`). Diese werden von Suchmaschinen-Crawlern und Social-Sharing-Previews gelesen — kein clientseitiger Sprachwechsel möglich. Optionen:

- **(a)** Status quo lassen: Page ist `lang="de"`, Meta-Tags bleiben deutsch. Internationale Sichtbarkeit nur via Body-Content-Übersetzung im Browser.
- **(b)** Eigene `index.en.html`-Page mit englischen Meta-Tags + `<link rel="alternate" hreflang="en" href="...">` Cross-References. Mehr Wartung, bessere SEO.
- **(c)** Single-Page mit JS-gesteuerter Meta-Tag-Mutation post-Load (für Social-Sharing aber wirkungslos, weil Crawler kein JS rendern).

**PL-Empfehlung (b)** für ernste Internationalisierung, aber separate Architektur-Entscheidung für eigenen Implementierungs-Slot. Nicht Teil dieses i18n-Audits.

#### Verbleibende 7 Pages — nav-Pattern bereits 2026-05-01 erledigt

Der gemeinsame Nav-Pattern (`nav-toggle`-Button + `<nav>`-Element ARIA-Labels) ist auf allen 8 Pages mit `data-i18n-aria="a11y.navOpen"` und `data-i18n-aria="a11y.mainNav"` instrumentiert — 16 Einträge in einem Schwung.

**Stand 2026-05-01 (nach Audit-Lauf):**

| Page | Body-Content | Nav-Pattern | Page-spezifische ARIA |
|---|---|---|---|
| `index.html` | ✅ | ✅ | ✅ (10 Hooks: map-legend, filter-panel, search, severity, verification, detail-panel, close-btn) |
| `radar.html` | ✅ | ✅ | ✅ (3 Hooks: radar-grid, detail-panel, close-btn) |
| `404.html` | ✅ | ✅ | ✅ keine page-spezifischen ARIA-Strings |
| `methodik.html` | ✅ | ✅ | – Restprüfung der Body-Content-Spans empfohlen |
| `transparenz.html` | ✅ | ✅ | – wie methodik |
| `impressum.html` | ✅ | ✅ | – wie methodik |
| `datenschutz.html` | ✅ | ✅ | – wie methodik |
| `labor-impact.html` | ✅ | ✅ | ✅ vollständig (selbst gebaut) |

**Verbleibende Judgment-Calls** (keine Defekte, sondern UX-Entscheidungen):

- `aria-label="AIStrikeMap Home"` (Logo, alle Pages) — Markenname, universell. Optional: i18n-Key `a11y.home` mit "AIStrikeMap Startseite" / "AIStrikeMap home". Minimal-Wert.
- `aria-label="Sprache / Language"`, `"Deutsch"`, `"English"` (Lang-Switcher, alle Pages) — bewusst bilingual / language-self-naming. Defensible to keep as-is. Falls geändert: das Sprach-Naming in der jeweils ANDEREN Sprache anzeigen ist gängige Praxis.
- `radar.html:60` Feed-Link mit `title="Atom Feed" aria-label="RSS Feed"` — universelle Tech-Begriffe.

**JS-Module-Audit 2026-05-01:**

| Modul | Nutzt I18n.t | Listet i18n:changed | Status |
|---|---|---|---|
| `js/i18n.js` | – | feuert Event | Quelle |
| `js/filters.js` | ✅ | ✅ Zeile 125 | OK |
| `js/labor-impact.js` | ✅ | ✅ Zeile 165 | OK |
| `js/nav.js` | ✅ | ✅ Zeile 38 | OK |
| `js/radar.js` | ✅ ausgiebig | ✅ Zeile 51 | OK |
| `js/detail-panel.js` | ✅ ausgiebig | ✅ ergänzt 2026-05-01 | **Fix gelandet** |
| `js/map.js` | ✅ | ✅ ergänzt 2026-05-01 | OK (Marker-Popups) |
| `js/strike-ticker.js` | – (keine Strings) | – | OK |

**`js/map.js`** Fix 2026-05-01: `lastIncidents`-State plus `i18n:changed`-Listener, der bei Sprachwechsel `addMarkers(lastIncidents, true)` aufruft (skipAnimation, damit keine Entrance-Pulse neu starten). Re-bindPopup() liefert beim nächsten Klick die korrekt lokalisierte Popup-Darstellung. Falls ein Popup beim Sprachwechsel offen war, muss es einmal geschlossen und neu geöffnet werden — pragmatisches Minimum, weil Popups transient sind.

**Verbleibend in `js/map.js` (Restschwäche, niedrige Priorität):** `addRadarMarkers()` rendert in den Radar-Marker-Popups die `status`-ID direkt als Anzeige (Zeile 261), statt `I18n.t('radar.status.' + status)` zu nutzen. Auch das "Details →"-Link-Label ist hardcoded. Niedrige Schwere weil Radar-Pool nur 6 Marker hat. Kann separat gefixt werden.

**`js/detail-panel.js` Fix:** `currentIncident`-State plus `i18n:changed`-Listener, der via `show(currentIncident)` re-rendert wenn das Panel offen ist. Behebt den eigentlichen User-Eindruck "nur das Menü übersetzt" für den Hauptanwendungsfall (offener Vorfall beim Sprachwechsel).

**Noch zu prüfen** (Restbereiche, niedrige Priorität):

- **`js/map.js`** — gleicher i18n:changed-Pattern für offene Popups (klein)
- **Body-Content der 4 statischen Pages** (methodik, transparenz, impressum, datenschutz) — Restprüfung, erwartete Vollständigkeit 95%+
- **Architektur-Frage Meta-Tags / og:locale** — separater Slot.

**Akzeptanz-Kriterium:** Beim Klick auf "EN" tauscht sich JEDE user-wahrnehmbare Phrase aus — inkl. Screenreader-Output (ARIA), Hover-Tooltips (title), Platzhaltertexte, dynamisch JS-gesetzte Status-Werte.

### Umlaute-Audit (Bestand)

**Problem:** Im Verlauf der Session wurden Konvention-Verletzungen erkannt. Es ist möglich, dass an manchen Stellen "ae/oe/ue" statt "ä/ö/ü" verwendet wurde (in JSON-Daten, Konzept-Dokumenten, Commit-Messages, Editorial-Texten).

**Aufgabe:**
- Suchlauf über alle Text-Dateien (`*.md`, `*.html`, `*.json`, `*.js`-Kommentare): Pattern `\b(ae|oe|ue|ss)\b` und Treffer manuell prüfen
- Falsche Transliteration → korrekter Umlaut, wo es deutsche Wörter sind
- Ausnahmen bewusst lassen: URL-Slugs (`incidents/aegypten-...`), englische Begriffe, Eigennamen, Lizenz-Codes
- Bei Datei-Encoding kontrollieren, dass UTF-8 ohne BOM verwendet wird

**Konvention für die Zukunft** ist jetzt in `CLAUDE.md` unter "Conventions" verankert — beide Punkte (i18n-Vollabdeckung + Umlaute) sind Pflicht für neue Inhalte.

### Item 98 Labor Impact v0.4 — Verifikation und Update-Workflow

**Hintergrund:** Item 98 wurde am 2026-05-01/02 mehrfach überarbeitet — vom Worldometers-Counter (v0.1) zu statischen Exposure-Bandbreiten (v0.2) zu tickendem Counter mit fixem Anker (v0.3) zum **3-Ebenen-Layout v0.4** (Potentialanalyse + Plan + Realität). Aktueller Stand:

- **Theorie-Ebene** (bestehend): Tickender Counter Substitution + Augmentation, Anker `2025-01-01`, Bandbreiten-Anteile preliminary.
- **Plan-Ebene** (neu in v0.4): WEF Future of Jobs Survey 2025 Werte (41 % Reduktion / 77 % Upskill / 47 % Umverteilung) — preliminary, gegen WEF-Report-PDF zu verifizieren.
- **Realität-Ebene** (neu in v0.4): Aggregat aus Cases-DB (Item 105) — automatisch aktuell, methodisch sauber durch Stärke-≥4-Filter.

**Aktuelle Werte (preliminary):**

- `substitution.low/median/high_pct`: 8 / 10 / 12 — `tick_per_second: 1.87`
- `augmentation.low/median/high_pct`: 14 / 16 / 18 — `tick_per_second: 3.00`

Tick-Raten = `total_workers / (period_months × 30.44 × 86400)`. Werte für `total_workers` sind im JSON `_internal_calc` als Berechnungs-Anker dokumentiert (350 Mio. / 560 Mio. aus WEF FoJ 2025 × ~3,5 Mrd. globale Erwerbstätige laut ILO 2024). `period_months_internal: 71` lebt nur im JSON, nicht in der UI.

**Aufgabe vor Bewerbung des Moduls:**

1. WEF Future of Jobs Report 2025 (PDF): genaue Substitutions- vs. Augmentations-Anteile aus Survey-Daten extrahieren
2. OECD Employment Outlook 2025: konkrete Exposure-Anteile pro Kategorie nachschlagen
3. ILO WESO Trends 2025 + May 2025 Update: ILO-Substitutions-/Augmentations-Trennung in Prozent
4. Bandbreiten + Tick-Raten in `data/labor-impact-rates.json` aktualisieren, `preliminary: true` entfernen
5. **Plan-Ebene v0.4**: WEF-Survey-Werte (41/77/47 %) gegen Original-Report verifizieren — aktuell hardcoded in HTML/i18n, nicht in JSON. Bei Verifikation in `data/labor-impact-rates.json` als eigenen Block aufnehmen oder explizit als hardcoded Werte mit Verifikations-Datum vermerken.

**Update-Workflow bei neuer Studien-Edition (z. B. WEF FoJ 2027):**

In `data/labor-impact-rates.json` ändern:
- `anchor_date` → neues Veröffentlichungsdatum
- `anchor_label_de` / `_en` → Edition-Bezeichnung
- `_internal_calc.period_months_internal` → neue Forecast-Periode
- `exposure.*.tick_per_second` → neu berechnen mit obiger Formel
- `exposure.*.primary_total_label_de` / `_en` → neue Total-Zahl der Studie
- `sources[].name` / `headline_*` / `methodology_*` → Edition-spezifisch aktualisieren
- `updated` und `version` bumpen

UI-Code (`js/labor-impact.js`, `labor-impact.html`, `css/labor-impact.css`) braucht **keine Änderung**.

**Zusätzlich:**

- Caveat-Box (Asymmetrie-Argument zur Verdrängungs-/Schaffungs-Bilanz) prüfen, ob sie methodisch wasserdicht formuliert ist — aktuell `i18n/{de,en}.json` Key `labor.caveatBody`.
- Header `og:description` der `labor-impact.html` ggf. anpassen, wenn die Bandbreiten verifiziert sind.
- **Item 105 Cases-Erweiterung**: Cases-DB aktuell mit 4 Cases (3 Länder). Vor öffentlicher Bewerbung des Moduls ≥10-15 Cases in ≥6 Ländern anstreben — sonst wirkt der Realität-Block dünn.
- **Item 106 Map**: bei Skalierung >20 Marker Marker-Cluster oder Choropleth erwägen (siehe phase-2-labor-impact-cases.md).
- **Item 108 Crowdsourcing**: vor breiter Bewerbung des Issue-Templates juristisches Review (IT-/Medienrecht), siehe recht-crowdsourcing.md.

### Incident-Karte + Radar: Umlaut-Audit + EN-Übersetzung der Daten

**Hintergrund:** Die Daten-JSON-Dateien aus Phase 1/2 sind ausschließlich auf Deutsch:
- `data/incidents/*.json` — **195 Files** (Phase 1 Incidents)
- `data/radar/*.json` — **6 Files** (Phase 2 Radar-Situationen)
- Plus möglicherweise Umlaut-Konvention-Verletzungen aus früheren Sessions.

**Aufwandsschätzung 2026-05-02 (PL):**

| Aufgabe | Tokens manuell | Tokens via Item 107 |
|---|---|---|
| Umlaut-Audit 195 Incidents (Grep + Edits) | ~90-150k, 1 Session | minimal (LLM macht beim Übersetzen mit) |
| Umlaut-Audit 6 Radar-Cards | ~10k, im Audit-Slot enthalten | – |
| EN-Übersetzung 195 Incidents | ~810-870k, 3-5 Sessions | 1-2 Setup + ~3 EUR API + 3-5 Review |
| EN-Übersetzung 6 Radar-Cards | ~25-30k, in einer Session machbar | im 107-Slot enthalten |

**Architektur-Entscheidung steht:** manuell (sofortige Sessions, hohe Token-Last) vs. Item 107 (einmalige Architektur-Investition, wiederverwendbar für FR/ES, Cases-Auto-Update **und** Crowdsourcing-KI-Pre-Check). Bei Entscheidung für Item 107 sollte das **vor** der EN-Übersetzung erfolgen.

**Schema-Vorbereitung (beide Varianten):** Pro Datenfeld DE/EN-Suffix-Pattern entscheiden — z. B. `name_de` / `name_en` parallel, oder Single-Field mit Sprach-Lookup über separate JSON-Files. Konsequenz für `js/data-loader.js`, `js/detail-panel.js`, `js/strike-ticker.js`, `js/radar.js` (alle vier müssen Sprach-Lookup verstehen).

### Statische Body-Content-Pages — Restprüfung

**Pages:** `methodik.html`, `transparenz.html`, `impressum.html`, `404.html` — Body-Content-Strings sind teilweise instrumentiert (i18n-Keys), aber Vollständigkeit nicht systematisch verifiziert.

**Aufgabe:**
- Pro Page: Grep nach hardcodierten deutschen Strings ohne `data-i18n`-Attribut
- Bei Fund: Key in i18n/{de,en}.json ergänzen + HTML annotieren
- Sprachwechsel-Test pro Page

**Aufwand:** ~5-10k Tokens pro Page, 1 Session für alle vier Pages zusammen machbar.

**Datenschutz** (`datenschutz.html`) ist nach §8-Erweiterung 2026-05-02 vollständig DE+EN — als Referenz-Vorlage nutzen.

---

---

## Erledigt

### 2026-04-21 · Link-Checker Paywall-Refinement (Phase 2 V2)

Nach dem ersten Full-Run am 2026-04-21 waren 12 URLs als `dead` klassifiziert, davon mindestens eine fälschlich (`lemonde.fr` → HTTP 402).

- `scripts/check-links-v2.js` → `classify()`: universelle Regel HTTP 402 ⇒ `paywall` (host-unabhängig).
- `PAYWALL_DOMAINS` ergänzt um `lemonde.fr` und `dawn.com`.
- Re-Run mit `--apply --force` und Bundle-Rebuild.
