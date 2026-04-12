# CLAUDE.md — AIStrikeMap

## Project Overview

AIStrikeMap is an investigative research platform mapping AI-related human rights incidents globally. Each incident is presented as a **reverse timeline** (Infrastructure → Doctrine → Event → Consequences). Live at **aistrikemap.org**, hosted on GitHub Pages.

## Tech Stack

- **Pure HTML/CSS/JS** — no frameworks, no build step, no npm
- **Leaflet.js 1.9.4** via CDN (CartoDB dark tiles, OpenStreetMap data)
- **JSON-LD / Schema.org** for incident data
- **Static hosting** on GitHub Pages
- **GitHub Actions** for weekly link-check (lychee)

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
- **No npm/node**: Everything via CDN or vanilla JS. Do not introduce a build step.
- **CSS variables**: All colors/spacing via `:root` custom properties in main.css
- **i18n keys**: Flat keys in de.json/en.json, referenced via `data-i18n` attributes
- **Incident types**: surveillance, predictive-policing, autonomous-weapons, discrimination, deepfakes, data-misuse, military-ai, facial-recognition, censorship, labor-exploitation, political-pressure
- **Severity colors**: 1=#3498db, 2=#f39c12, 3=#e67e22, 4=#e74c3c, 5=#ba68c8

## Planning

- **Phase 1** (Items 1–93): Incident Map — complete
- **Phase 2** (Items 94–103): Two modules planned (IDEAS, not started):
  - AI Career Impact Dashboard (Items 94–99)
  - AI Live-Radar (Items 100–103)
- **Inventory index**: `docs/planung/inventar-index.md`
- **Planning docs**: `docs/planung/phase-2-*.md`, Word docs in repo root

## Common Tasks

- **Add incident**: Create JSON in `data/incidents/`, add entry to `data/index.json`, then run `node scripts/bundle-incidents.js` to regenerate `data/all-incidents.json`
- **Add i18n string**: Add key to both `i18n/de.json` and `i18n/en.json`
- **Test locally**: Open `index.html` in browser (or use any static server)
- **Deploy**: Push to main — GitHub Pages auto-deploys
