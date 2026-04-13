# AIStrikeMap.org

**Interaktive Weltkarte zur Dokumentation KI-bezogener Menschenrechtsvorfaelle**
**Interactive world map documenting AI-related human rights incidents**

---

## Projektbeschreibung / Project Description

**DE:** AIStrikeMap ist eine investigative Rechercheplattform, die KI-bezogene Menschenrechtsvorfaelle weltweit kartiert. Jeder dokumentierte Vorfall wird als Reverse Timeline dargestellt -- von der technischen Infrastruktur ueber die zugrundeliegende Doktrin bis zum konkreten Ereignis und seinen Konsequenzen (Infrastruktur --> Doktrin --> Ereignis --> Konsequenzen). Die Plattform macht sichtbar, wie algorithmische Systeme in Entscheidungsketten eingebunden sind, die Menschenrechte betreffen.

**EN:** AIStrikeMap is an investigative research platform mapping AI-related human rights incidents globally. Each documented incident is presented as a reverse timeline -- tracing the path from technical infrastructure through underlying doctrine to the concrete event and its consequences (Infrastructure --> Doctrine --> Event --> Consequences). The platform reveals how algorithmic systems are embedded in decision chains affecting human rights.

## Features

- **Strike-Effekt / Strike effect:** Recent incidents pulse with concentric rings (blitzortung.org-inspired), tiered into hot / warm / cold based on freshness and severity.
- **LIVE-Ticker:** Scrolling ticker at the bottom of the map surfaces the latest incidents.
- **Reverse Timeline:** Each incident is presented as Infrastructure -> Doctrine -> Event -> Consequences.
- **Unverified markers:** Community-submitted incidents (`verificationLevel: 1`) are rendered with a dashed outline, reduced saturation and a "?" badge in the popup until a maintainer verifies them.
- **Retraction support:** Debunked incidents can be flagged with `asm:retracted: true`. They are hidden by default but a filter toggle reveals them with a strikethrough title and grey marker — preserving research transparency without silently deleting evidence.
- **Marker clustering:** Overlapping markers are grouped into numbered clusters at low zoom levels (via Leaflet.markercluster), expanding into individual strikes at zoom ≥ 8.
- **Incident counter:** A live counter badge shows the total number of documented incidents and affected countries.
- **Filter panel:** Incident type, severity slider, verification-level slider, retracted toggle, reset. Auto-collapses on mobile.
- **Community reporting:** A "Vorfall melden" CTA in the header opens a structured GitHub Issue template.
- **Bilingual UI:** German / English via lightweight JSON i18n with persistent DE|EN switcher in the header.
- **404 page:** Branded fallback that keeps users in the navigation flow.

### AI Live-Radar (Phase 2 — MVP)

- **Situation cards:** Curated, contextualised cards for ongoing AI-related developments that are not yet closed incidents. Each card tracks status, severity, actors, dimensions, and a development timeline with source-level bias transparency.
- **Three radar statuses:** eskalierend (escalating), aktiv (active), stabil (stable), deeskalierend (de-escalating), abgeschlossen (resolved).
- **Dimension filtering:** Filter by thematic dimensions (military, surveillance, regulation, geopolitics, etc.) and status.
- **Bias transparency:** Every source is tagged with a perspective label (neutral / kritisch / befuerwortend / unklar), aggregated into a per-card bias summary.
- **Deep links:** Each situation card has a shareable permalink (`radar.html?radar=slug`).
- **Lifecycle:** Resolved radar entries can be converted into incident map entries.

## Tech Stack

- Pure HTML / CSS / JavaScript (no frameworks, no build step)
- [Leaflet.js](https://leafletjs.com/) + [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) for interactive maps
- [CartoDB dark tiles](https://carto.com/) on [OpenStreetMap](https://www.openstreetmap.org/) data
- JSON-LD / Schema.org markup for incident and radar data
- Bundled JSON files (`data/all-incidents.json`, `data/all-radar.json`) via `scripts/bundle-incidents.js`
- Hosted on GitHub Pages

## Data & Verification Workflow

1. **Report:** User opens an issue via the "Vorfall melden" button (structured form, sources required).
2. **Review:** Maintainer validates the report, creates `data/incidents/<slug>.json` with `asm:verificationLevel: 1` ("Gemeldet").
3. **Publish:** Adding the entry to `data/index.json` makes it appear on the map as an **unverified** strike (dashed, desaturated, "?" badge) -- still with full Strike-Effekt animation so it is visible, but clearly flagged as not yet verified.
4. **Verify:** As sources are cross-checked, `verificationLevel` is raised (2 = Bestaetigt, 3 = Verifiziert, 4 = Analysiert); the marker then switches to its full solid style.

### Automated link checking

A weekly GitHub Action ([`.github/workflows/link-check.yml`](.github/workflows/link-check.yml)) runs [lychee](https://lychee.cli.rs/) against all source URLs in `data/incidents/**/*.json` plus the static HTML pages. Broken links automatically open a tracking issue with the full report. Configuration lives in [`.lychee.toml`](.lychee.toml) and whitelists known bot-walled domains (LinkedIn, X/Twitter, Facebook, Instagram, archive.org).

### Bot protection

- GitHub account required for issue submission (email/phone verification, abuse detection, rate limits).
- Required fields in the issue template (title, date, location, type, severity, sources, CC-BY-NC-SA consent).
- No direct write path to the live data -- every entry passes through a human-merged pull request.

## License / Lizenz

- **Code:** [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html)
- **Data & Content / Daten & Inhalte:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## Contributing / Mitwirken

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

## KI-Kennzeichnung / AI Disclosure

Die technische Umsetzung dieses Projekts erfolgt mit Unterstuetzung von Claude Code (Anthropic). Alle Inhalte -- insbesondere Vorfallsdaten, Quellenangaben und redaktionelle Texte -- werden von Menschen kuratiert, recherchiert und verifiziert.

The technical implementation of this project is built with the assistance of Claude Code (Anthropic). All content -- particularly incident data, source references, and editorial texts -- is curated, researched, and verified by humans.
