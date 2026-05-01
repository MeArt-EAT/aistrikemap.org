# Career Dashboard – UX/UI-Konzept (V0.1)

**Kontext:** Arbeitsdokument für Item 99 (Konzeptphase Career Dashboard), Punkt 3 *UX/UI-Konzept*. Schwesterdokumente: [Datenquellen-Matrix](career-dashboard-datenquellen-matrix.md), [Score-Methodik](career-dashboard-score-methodik.md), [Bias-Transparency](career-dashboard-bias-transparency.md).

**Zweck:** Layout-Logik für das Career Dashboard festlegen — auf welcher Page, in welchen Views, mit welchen Komponenten.

**Ausgangslage:** Punkt 4 hat 6 konkrete UI-Constraints geliefert. Punkt 3 ist damit Anordnungsaufgabe auf festen Pfeilern, kein Brainstorming.

---

## ENTSCHIEDEN 2026-05-01 · Page-Struktur und Layout-Logik

### Page-Topologie

| Page | Zweck | Analog zu |
|---|---|---|
| `career.html` | Haupteinstieg — Choropleth + Filter + Detail-Panel | `index.html`, `radar.html` |
| `methodik-career.html` | Editorial-Methodik-Erklärung (Säule A.1 aus Punkt 4) | (neu, spezifisch für Career-Modul) |

`career.html` wird in Header-Navigation neben "Karte" und "Radar" verlinkt — drei gleichrangige Tabs des Drei-Zeitebenen-Modells (Vergangenheit / Gegenwart / Zukunft).

### Zwei-Modi-Hauptansicht

`career.html` hat einen Toggle zwischen zwei Modi mit identischer Filterleiste:

- **Map-Modus** (Default): Welt-Choropleth, Länder eingefärbt nach Score für gewählten Beruf
- **Chart-Modus**: Zeitverlauf-Chart (Item 96 Börsen-Analogie), mehrere Länder/Berufe vergleichbar

Toggle wird als segmentierter Button rechts in der Filterleiste platziert. Wechsel ist instant, kein Page-Reload, gleiche Daten.

### CSS / JS-Struktur

| Asset | Inhalt |
|---|---|
| `css/career.css` | Career-spezifische Styles (Choropleth-Color-Scale, Confidence-Band-Stile, Toggle-Button) |
| `js/career.js` | IIFE-Modul analog `js/radar.js` — Daten-Loading, Choropleth-Rendering, Mode-Switching, Detail-Panel-Hookup |
| `js/career-chart.js` | Chart-Rendering (Item 96) — separater Modul, weil Chart.js-Init isoliert |
| `data/career/index.json` | Manifest |
| `data/career/{land}.json` | Pro-Land-Bundle |
| `data/career/taxonomy.json` | ISCO-08 4-digit Taxonomie |

Chart-Library: **Chart.js via CDN**, weil bereits etablierte Lösung mit Confidence-Band-Plugins, kein npm-Build, kompatibel mit GitHub-Pages-Stack.

---

## Wireframes (ASCII)

### W-1 · `career.html` Map-Modus (Desktop)

```
+----------------------------------------------------------------------+
| AIStrikeMap     Karte | Radar | Career      DE/EN  ☰                |
+----------------------------------------------------------------------+
|  AI Career Impact Dashboard                                          |
|  Stand: Mai 2026 · Quellen: WEF 2025, OECD 2025, IAB 2024           |
+----------------------------------------------------------------------+
|  [Beruf: Pflegekraft (ISCO 2330) ▼]  [Confidence ▼]  [≣ Karte | ⌜ Chart] |
+----------------------------------------------------------------------+
|                                                                      |
|                                                                      |
|                  [WORLD CHOROPLETH MAP]                              |
|                  (Leaflet + GeoJSON)                                 |
|                                                                      |
|                                                                      |
|  Legend:  ▒▒▒ keine Daten   ░░ niedrig (0–0.3)  ▓▓ mittel (0.3–0.6) |
|                              ██ hoch (0.6–0.9)   ▆▆ sehr hoch (>0.9)|
+----------------------------------------------------------------------+
|  Footer: Methodik (Career) · Quellen · Über AIStrikeMap             |
+----------------------------------------------------------------------+
```

### W-2 · Country Detail-Panel (slide-in from right, analog Incident-Pattern)

```
+--------------------------------+
|  ×  Deutschland · Pflegekraft  |
|     ISCO 2330                  |
+--------------------------------+
|  Score: 0.61 ± 0.21            |
|                                |
|  ┌───────────────────────────┐ |
|  │   ▒▒▒ Confidence-Band ▒▒▒ │ |  ← schraffiert weil divergent
|  │   ●●━━━━━━━━━━━━━━━━━━●●  │ |
|  └───────────────────────────┘ |
|     0          0.5         1   |
|                                |
|  ⚠ Forschung uneins —          |
|     Bandbreite reflektiert     |
|     Perspektiven-Divergenz     |
+--------------------------------+
|  Quellen (3):                  |
|                                |
|  ▸ IAB Substituierbarkeit 2024 |
|     → 0.61                     |
|     "Anteil der Tätigkeiten,   |
|      die heute schon technisch |
|      ersetzbar wären."         |
|                                |
|  ▸ OECD Lassébie/Quintini 2024 |
|     → 0.42                     |
|     "AI-Capability-Überlappung |
|      (deskriptiv)"             |
|                                |
|  ▸ Frey/Osborne 2013           |
|     → 0.83                     |
|     "Automatisierungs-         |
|      wahrscheinlichkeit        |
|      10–20 Jahre"              |
|     ⚠ Ältere Studie, kritisiert|
|       für Überzeichnung [more] |
+--------------------------------+
|  Zeitverlauf →                 |
|  [zum Chart-Modus]             |
+--------------------------------+
|  Wie wird das gemessen?  [↗]   |
|  → methodik-career.html        |
+--------------------------------+
```

### W-3 · `career.html` Chart-Modus (Desktop)

```
+----------------------------------------------------------------------+
|  [Beruf: Pflegekraft ▼] [+]   [Länder: DE, US, JP ▼]  [≣ Karte | ⌜ Chart] |
+----------------------------------------------------------------------+
|                                                                      |
|  1.0 ┤                                                               |
|      │                          ▒▒▒▒▒                                |
|  0.8 ┤                  ▒▒▒▒▒▒▒▒        ▒▒▒                         |
|      │           ▒▒▒▒▒▒                    ▒▒▒                      |
|  0.6 ┤  ━━━━━━━━━ DE ━━━━━━━━━━━━━━━━━━━━━━━━╲╲                     |
|      │           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ╲                    |
|  0.4 ┤  ─────── US ──────────────────────                            |
|      │  ··········· JP ···············                               |
|  0.2 ┤                                                               |
|      │                                                               |
|  0.0 ┤                                                               |
|      └─┬─────┬─────┬─────┬─────┬─────┬─────                          |
|       2018  2020  2022  2024  2026  2028  2030                       |
|       ← historisch              prognose →                          |
|                                                                      |
|  Legende: ▒▒ Confidence-Band (Min–Max)  ─── Median pro Land         |
|                                                                      |
+----------------------------------------------------------------------+
|  Wie wird das gemessen? [↗ methodik-career.html]                    |
+----------------------------------------------------------------------+
```

### W-4 · Mobile (< 768 px) — Map-Modus

Filterleiste wird zu vertikalem Stack, Detail-Panel zu Full-Screen-Overlay.

```
+--------------------------+
| ☰  AIStrikeMap   DE/EN  |
+--------------------------+
| AI Career Dashboard      |
| Stand: Mai 2026          |
+--------------------------+
| [Beruf ▼]                |
| [Confidence ▼]           |
| [Karte | Chart]          |
+--------------------------+
|                          |
|   [CHOROPLETH]           |
|                          |
+--------------------------+
| (Tap Land → Full-Screen  |
|  Detail-Panel)           |
+--------------------------+
```

### W-5 · `methodik-career.html` (statische Editorial-Page)

```
+----------------------------------------------------------------------+
|  AIStrikeMap     Karte | Radar | Career      DE/EN  ☰                |
+----------------------------------------------------------------------+
|  Methodik · Career Impact Dashboard                                  |
+----------------------------------------------------------------------+
|                                                                      |
|  1. Was zeigt das Dashboard?                                         |
|     [editorial-erklärender Stil — vgl. Voice-Säule D]               |
|                                                                      |
|  2. Das 3-Schichten-Quellenmodell                                    |
|     [Tabelle: Schicht / Quelle / Verfügbarkeit]                     |
|                                                                      |
|  3. Wie entsteht die Bandbreite?                                     |
|     [Erklärung Equal-Weight, Median, Confidence-Quality]            |
|                                                                      |
|  4. Confidence-Quality: robust / divergent / sparse                  |
|     [3 Stufen erklärt + visuelle Beispiele]                          |
|                                                                      |
|  5. Quellen im Detail                                                |
|     [Pro Quelle: Methodik, Limitationen, Zitations-Vorschlag]       |
|                                                                      |
|  6. Frey/Osborne 2013 — die längere Geschichte                      |
|     [Caveat in Lang-Form, Verweis auf OECD-2018-Kritik]             |
|                                                                      |
|  7. Limits & Disclaimer                                              |
|     [Was das Dashboard nicht ist — keine Berufsempfehlung etc.]     |
|                                                                      |
+----------------------------------------------------------------------+
|  Footer                                                              |
+----------------------------------------------------------------------+
```

---

## UX-Kern-Entscheidungen (Begründung)

### 1. Default-Beruf bei Map-Modus = ein Beispiel-Beruf, nicht Aggregate

Erste Idee war "alle Berufe gemittelt", verworfen weil:
- Mittel über alle ISCO-Codes ist methodisch unsauber (gewichtet wie?)
- Erzeugt schwer interpretierbare Choropleth ("Land X ist 0.54 — was heißt das?")
- Vermittelt false precision

**Entscheidung:** Default = ein **kuratierter Beispiel-Beruf** (Vorschlag: ISCO 2330 Pflegekraft, weil weltweit verstanden und mit guter Datenlage). User wechselt aktiv den Beruf.

### 2. Mode-Toggle Map ↔ Chart, kein eigenständiger Chart-Tab

Statt zwei separate Pages = **ein Toggle in der Filterleiste**, weil:
- User kommt mit Beruf-Auswahl, will dann zwischen Map (geografisch) und Chart (zeitlich) wechseln, ohne Filter neu setzen zu müssen
- State Sharing → Permalink kann beide Modi adressieren (`?mode=map` / `?mode=chart`)
- Halbiert die Maintenance-Oberfläche

### 3. Detail-Panel = Slide-in von rechts, analog Incident-Pattern

Wiederverwendung des etablierten `js/detail-panel.js`-Patterns. CSS-Klassen können von `.detail-panel` erben, neue Klassen wo nötig (`.career-detail-panel`).

### 4. Confidence-Band visualisiert als Hintergrund-Schraffur, nicht als Error-Bar

Error-Bars im Chart erzeugen visuelles Rauschen. Hintergrund-Band (CSS `linear-gradient` / SVG `<path>` mit Pattern) ist ruhiger und erlaubt Stil-Differenzierung (durchgezogen / schraffiert / gestrichelt) für `confidence_quality`-Stufen.

### 5. Country-Klick im Map-Modus = Detail-Panel; Country-Klick im Chart-Modus = Land-Hinzufügen

Konsistent mit der Logik des jeweiligen Modus: Map zeigt einen Beruf in vielen Ländern (Klick = drill-in), Chart zeigt einen Beruf in mehreren Ländern (Klick = drill-out / vergleichen).

### 6. Permalink-Schema

```
career.html?occupation=2330&country=DE&mode=chart
career.html?occupation=2330&compare=DE,US,JP&mode=chart
career.html?occupation=2330&mode=map
```

Analog zum bestehenden Permalink-Pattern aus Phase 1.

---

## Constraints aus Punkt 4 — wo erfüllt

| Constraint (aus Bias-Transparency-Doku) | Erfüllung im UX-Konzept |
|---|---|
| Footer-Methodik-Link | W-1, W-3, W-4 alle Pages |
| Detail-Panel "Wie wird das gemessen?"-Section | W-2 Footer-Block des Detail-Panels |
| Confidence-Band-Stile (3 Varianten) | W-2 Score-Visualisierung, W-3 Chart-Background |
| Tooltip-Layer auf allen Datenpunkten | Map-Marker (Choropleth-Country-Hover), Chart-Punkt-Hover, Quellen-Listeneinträge im Detail-Panel — überall via `title`-Attribut |
| Confidence-Vermerk-Slot | W-2 Vermerk-Block direkt unter Score-Visualisierung, elastisch |
| Stand-Timestamp + Quellen-Caption prominent | W-1 Header-Sub-Zeile, sichtbar über jedem Modus |

---

## Was diese Entscheidung **nicht** klärt

(Für Punkt 5 / Punkt 6 oder Implementierungs-Phase.)

- Konkrete Color-Scale für die Choropleth (sequenziell vs. divergent, Color-Blind-Safe?) — Implementierungs-Detail, beim Bauen mit ColorBrewer-Palette starten
- Mobile Chart-Darstellung (Chart.js-Default reicht meist, ggf. anpassen)
- Performance-Budget: 8 Länder × 436 ISCO × 3 Schichten = ~10.500 Datenpunkte. Bundle-Größe nach erstem Lauf prüfen, ggf. Splitting nach ISCO-Major-Groups
- Tastatur-Navigation und ARIA-Labels (analog zum bestehenden Detail-Panel-Pattern, in Implementierung verfeinern)

---

*Dokument erstellt: 2026-05-01*
*Version: 0.1 (Arbeitsstand)*
*Status: Layout-Logik entschieden — Implementierung erst nach Punkt 5 (Recht) und Punkt 6 (MVP-Scoping-Finalisierung)*
