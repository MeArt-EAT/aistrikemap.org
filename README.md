# AIStrikeMap.org

**Interaktive Weltkarte zur Dokumentation KI-bezogener Menschenrechtsvorfälle**
**Interactive world map documenting AI-related human rights incidents**

---

## Projektbeschreibung / Project Description

**DE:** AIStrikeMap ist eine investigative Rechercheplattform, die KI-bezogene Menschenrechtsvorfälle weltweit kartiert. Jeder dokumentierte Vorfall wird als Reverse Timeline dargestellt – von der technischen Infrastruktur über die zugrundeliegende Doktrin bis zum konkreten Ereignis und seinen Konsequenzen (Infrastruktur → Doktrin → Ereignis → Konsequenzen). Die Plattform macht sichtbar, wie KI- und algorithmische Systeme in Entscheidungsketten eingebunden sind, die Menschenrechte betreffen.

**EN:** AIStrikeMap is an investigative research platform mapping AI-related human rights incidents globally. Each documented incident is presented as a reverse timeline – tracing the path from technical infrastructure through underlying doctrine to the concrete event and its consequences (Infrastructure → Doctrine → Event → Consequences). The platform reveals how AI and algorithmic systems are embedded in decision chains affecting human rights.

Stand / Status (2026-10-23): rund 2.300 gezählte Vorfälle in über 110 Ländern, alle mit Reverse Timeline, zweisprachig DE/EN.

## Features

- **Strike-Effekt / Strike effect:** Recent incidents pulse with concentric rings (blitzortung.org-inspired), tiered into hot / warm / cold based on freshness and severity.
- **LIVE-Ticker:** Scrolling ticker at the bottom of the map surfaces the latest incidents.
- **Reverse Timeline:** Every incident is presented as Infrastructure → Doctrine → Event → Consequences, each step backed by sources (schema v1.1, checked by `scripts/validate-timelines.js`).
- **16 incident types:** surveillance, predictive policing, autonomous weapons, autonomous driving, discrimination, deepfakes/disinformation, data misuse, military AI, facial recognition, censorship, labor exploitation, political pressure on AI safety, copyright, fraud, malfunction/harmful AI output, environment.
- **Worldwide list:** Cross-border incidents without a map point are listed via the "Weltweit / Worldwide (n)" button; filters and search apply.
- **Context cases:** Incidents without a documented AI or algorithmic element (e.g. spyware, internet shutdowns) are kept as labelled context cases, hidden by default and not counted.
- **Retractions and merges:** Debunked or duplicate entries are flagged (`asm:retracted`, `asm:mergedInto`) instead of deleted; permalinks keep working and the detail panel shows the reason or links to the merged entry.
- **Unverified markers:** Community-submitted incidents (`verificationLevel: 1`) are rendered with a dashed outline and a "?" badge until they are verified.
- **Marker clustering:** Overlapping markers are grouped into numbered clusters at low zoom levels (Leaflet.markercluster).
- **Filter panel:** Incident type, severity, verification level, time range, full-text search, context/retracted toggles. Auto-collapses on mobile.
- **Community reporting:** A "Vorfall melden" CTA opens a structured GitHub issue template.
- **Bilingual UI:** German / English via lightweight JSON i18n; every visible string is translated.

### AI Live-Radar (Phase 2 — MVP)

- **Situation cards** for ongoing AI-related developments that are not yet closed incidents: status, severity, actors, dimensions and a development timeline.
- **Five statuses:** eskalierend (escalating), aktiv (active), stabil (stable), deeskalierend (de-escalating), abgeschlossen (resolved).
- **Dimension filtering** (military, surveillance, regulation, geopolitics, …) and **bias transparency** per source (neutral / critical / supportive / unclear).
- **Deep links:** `radar.html?radar=slug`.

### AI & Labor (Phase 2)

Overview of AI-related job changes (theory / plan / reality) and a world map of documented cases; only cases with an explicitly AI-attributed and realized headcount change are counted.

## Tech Stack

- Pure HTML / CSS / JavaScript (no frameworks, no build step, no npm)
- [Leaflet.js](https://leafletjs.com/) + [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
- Esri World Dark Gray basemap (Esri, HERE, Garmin, © OpenStreetMap contributors)
- JSON-LD / Schema.org markup for incident and radar data
- Bundles via `scripts/bundle-incidents.js` (`data/all-incidents-lite.json` for the map, full records loaded per incident)
- Hosted on GitHub Pages

## Data & Verification Workflow

1. **Research:** Candidates come from community reports, curated research rounds and external databases. Each candidate needs at least two independent sources.
2. **Review:** A review step checks existence, date, duplicates and AI connection; an independent second pass tries to refute every positive verdict (adversarial cross-check). Only what survives is promoted.
3. **Timeline:** Each incident gets a sourced reverse timeline, again with an independent check.
4. **Corrections:** Errors found later are corrected in the record (`asm:correctionNote`); unsubstantiated cases are retracted and stay accessible with the reason.

### Automated link checking

A weekly GitHub Action ([`.github/workflows/link-check.yml`](.github/workflows/link-check.yml)) runs [`scripts/check-links-v2.js`](scripts/check-links-v2.js) against all source URLs and maintains one tracking issue with the results; dead links are replaced in reviewed batches.

## Sources / Quellen

A large part of the incidents is based on entries of the [AIAAIC Repository](https://www.aiaaic.org/) (CC BY-SA 4.0), which were re-researched, translated and extended with reverse timelines for AIStrikeMap.

## License / Lizenz

- **Code:** [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.html)
- **Data & Content / Daten & Inhalte:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## Contributing / Mitwirken

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

## KI-Kennzeichnung / AI Disclosure

**DE:** Technische Umsetzung und Recherche erfolgen mit KI-Unterstützung (Claude Code, Anthropic). Jede Angabe muss durch Quellen belegt sein, jede Einstufung durchläuft eine unabhängige, adversariale KI-Gegenprüfung. Eine menschliche Einzelprüfung wird nur angezeigt, wenn sie mit Datum stattgefunden hat. Konzeption, Methodik und redaktionelle Grundsatzentscheidungen verantwortet der Betreiber.

**EN:** Technical implementation and research are carried out with AI assistance (Claude Code, Anthropic). Every statement must be backed by sources, and every assessment goes through an independent, adversarial AI cross-check. An individual human review is only shown when it has taken place, with its date. Concept, methodology and editorial policy decisions are the responsibility of the operator.
