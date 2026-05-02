# CLAUDE.md — AIStrikeMap

## Project Overview

AIStrikeMap is an investigative research platform mapping AI-related human rights incidents globally. Each incident is presented as a **reverse timeline** (Infrastructure → Doctrine → Event → Consequences). Live at **aistrikemap.org**, hosted on GitHub Pages.

## Tech Stack

- **Pure HTML/CSS/JS** — no frameworks, no build step, no npm
- **Leaflet.js 1.9.4** via CDN (CartoDB dark tiles, OpenStreetMap data)
- **JSON-LD / Schema.org** for incident data
- **Static hosting** on GitHub Pages
- **GitHub Actions** for weekly link-check (V2: `scripts/check-links-v2.js`)

## File Structure

```
index.html              Main page (map + filter + detail panel + ticker)
css/main.css            Dark theme, all UI components, responsive breakpoints
css/leaflet-custom.css  Map markers, pulse animations, ticker, popups
js/i18n.js              DE/EN language switching (JSON-based)
js/map.js               Leaflet init, markers, pulse rings, freshness logic
js/data-loader.js       Batch-fetch incidents (6 parallel)
js/detail-panel.js      Incident detail panel + reverse timeline rendering
js/filters.js           Type/severity/verification/time-range filtering
js/nav.js               Hamburger menu + language switcher wiring
js/strike-ticker.js     Scrolling LIVE ticker (latest 20 incidents)
data/index.json         Manifest (195 incidents)
data/incidents/*.json   One JSON-LD file per incident
i18n/de.json            German strings
i18n/en.json            English strings
```

## Architecture Patterns

- **IIFE modules**: All JS modules use the revealing module pattern (`const X = (function(){...})()`)
- **No global state leaking**: Modules communicate via public methods (e.g. `StrikeMap.addMarkers()`, `DataLoader.getIncidents()`)
- **Init chain** in index.html: I18n → Map → DataLoader → Markers → Filters → Ticker → Permalink
- **Cache-busting**: `?v=` query params on CSS/JS, `Date.now()` on data fetches

## Data Model

Each incident JSON-LD file contains:
- Standard fields: `name`, `startDate`, `description`, `location` (with `geo.latitude/longitude`)
- Custom fields (prefixed `asm:`): `asm:severity` (1–5), `asm:verificationLevel` (1–4), `asm:incidentType` (array), `asm:actors`, `asm:affectedRights`, `asm:reverseTimeline`, `asm:sources`, `asm:retracted`, `asm:metadata`

## Conventions

- **Language**: UI and planning docs in German, code/comments in English
- **i18n is full-coverage, not menu-only**: AIStrikeMap is an international site. Every user-visible string on every page must have a `data-i18n` attribute and a corresponding key in BOTH `i18n/de.json` AND `i18n/en.json`. This includes body copy, headings, captions, button labels, aria-labels, alt-texts, error messages, status indicators — not just navigation. Hardcoded German text in HTML is a bug. Verify after every UI change that switching DE↔EN actually swaps every visible string.
- **Umlaute richtig schreiben**: ä, ö, ü, ß — niemals ae, oe, ue, ss. Gilt für: HTML-Inhalte, JSON-Strings als Display-Werte, Markdown-Dokumentation, Commit-Messages, Dateinamen wo deutsch. **Bewusste Ausnahmen** (technische Identifier dürfen transliteriert sein, weil sie Code-Verträge sind und nicht angezeigt werden): URL-Slugs (`incidents/aegypten-…`), JSON-Schlüssel und i18n-Keys (`radar.dimension.ueberwachung`), CSS-Klassennamen, JS-Variablen. Datei-Encoding immer UTF-8.
- **No npm/node**: Everything via CDN or vanilla JS. Do not introduce a build step.
- **CSS variables**: All colors/spacing via `:root` custom properties in main.css
- **i18n keys**: Flat keys in de.json/en.json, referenced via `data-i18n` attributes
- **Incident types**: surveillance, predictive-policing, autonomous-weapons, discrimination, deepfakes, data-misuse, military-ai, facial-recognition, censorship, labor-exploitation, political-pressure
- **Severity colors**: 1=#3498db, 2=#f39c12, 3=#e67e22, 4=#e74c3c, 5=#ba68c8

## Planning

- **Phase 1** (Items 1–93): Incident Map — complete
- **Phase 2** (Items 94–108):
  - AI Career Impact Dashboard (Items 94–99) — concept phase done, Step 1 bundle skeleton live
  - AI Labor Impact Overview (Item 98) — **live** (3-Ebenen-Layout v0.4: Theorie/Plan/Realität)
  - AI Live-Radar (Items 100–103) — **MVP live**
  - Labor-Impact-Cases DB (Item 105) — **live** (4 Cases, schema v0.2 with tags/severity, per-country splitting)
  - Labor-Impact-Map (Item 106) — **live** (Marker-per-country with detail panel)
  - Auto-Update Architecture (Item 107) — concept, Cost/Privacy decision pending
  - Crowdsourcing Pipeline (Item 108) — **issue template + privacy §8 live**, AI pre-check pending
- **Inventory index**: `docs/planung/inventar-index.md`
- **Planning docs**: `docs/planung/phase-2-*.md`, `docs/planung/konzept-live-radar.md`, `docs/planung/recht-crowdsourcing.md`

## Radar Module

- **Page**: `radar.html` — card grid with status indicators and dimension tags
- **CSS**: `css/radar.css` — radar-specific styles
- **JS**: `js/radar.js` — data loading, grid rendering, filters, detail panel
- **Data**: `data/radar/*.json` (individual) → `data/all-radar.json` (bundle)
- **Schema**: extends incident schema with `asm:radarStatus`, `asm:radarDimensions`, `asm:developmentTimeline`, `asm:sources[].asm:perspective`
- **Status values**: eskalierend / aktiv / stabil / deeskalierend / abgeschlossen
- **Dimensions**: cybersicherheit, regulierung, geopolitik, militaer, ueberwachung, unternehmensethik, arbeitsmarkt, diskriminierung, umwelt, desinformation

## Labor Impact Modules (Items 98 + 105 + 106 + 108)

- **Pages**: `labor-impact.html` (overview, 3-layer Theorie/Plan/Realität) · `labor-impact-map.html` (world map, marker-per-country)
- **CSS**: `css/labor-impact.css` · `css/labor-impact-map.css`
- **JS**: `js/labor-impact.js` (counters + plan + reality block, lädt aggregate.json) · `js/labor-impact-map.js` (Leaflet, on-demand per-country loading)
- **Data**:
  - `data/labor-impact-rates.json` (theory layer: substitution/augmentation %, anchor-based ticking counter)
  - `data/labor-impact-cases/*.json` (one file per real-world case, schema in `_schema.md`)
  - `data/labor-impact-aggregate.json` (auto-generated: totals, by_country, by_industry, by_tag, by_severity, country_files manifest)
  - `data/labor-impact-by-country/{cc}.json` (auto-generated: per-country bundle for on-demand detail loading)
- **Bundle**: `node scripts/bundle-labor-cases.js` after editing any case
- **Crowdsourcing entry**: `.github/ISSUE_TEMPLATE/ki-entlassung-melden.yml` (rules in `docs/planung/recht-crowdsourcing.md`)
- **Schema concept**: `data/labor-impact-cases/_schema.md` defines AI-attribution-strength scale (1-5, counter only ≥4) + severity-class scale + tag vocabulary
- **Methodology**: see `docs/planung/phase-2-labor-impact-cases.md` (iteration history v0.1-v0.4 + Bagger-Hebel-Argument)

## Common Tasks

- **Add incident**: Create JSON in `data/incidents/`, add entry to `data/index.json`, then run `node scripts/bundle-incidents.js`
- **Add radar situation**: Create JSON in `data/radar/`, run `node scripts/bundle-incidents.js`, then `node scripts/generate-feed.js`
- **Add labor-impact case**: Create JSON in `data/labor-impact-cases/{firma-slug}-{jahr}-{kontext}.json` per `_schema.md` (mind. 2 sources, ai_attribution_strength 1-5, tags + severity_class), then run `node scripts/bundle-labor-cases.js` (regenerates aggregate + per-country bundles)
- **Regenerate feed**: `node scripts/generate-feed.js` (Atom feed at `feed.xml`)
- **Add i18n string**: Add key to both `i18n/de.json` and `i18n/en.json`
- **Test locally**: Open `index.html`, `radar.html`, `labor-impact.html`, or `labor-impact-map.html` in browser (or use any static server)
- **Deploy**: Push to main — GitHub Pages auto-deploys
