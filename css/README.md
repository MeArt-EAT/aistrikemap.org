# CSS module map

Split from former `main.css` (1070 lines).
Each file < 500 lines, one concern per file.

| File | Concern | Lines |
|---|---|---|
| `base.css` | Base: tokens, reset, typography, skip-link | 76 |
| `layout.css` | Layout: header, nav, language switcher, CTA | 114 |
| `controls.css` | Controls: selects, search input, nav toggle | 59 |
| `filters.css` | Filter panel: checkboxes, sliders, toggle | 104 |
| `map-ui.css` | Map UI: container, counter, legend | 109 |
| `detail-panel.css` | Detail panel: timeline, sources, badges, actors | 317 |
| `cross-links.css` | Cross-links: related-list, inline radar-status | 57 |
| `subpages.css` | Subpages: footer, page layout, tables, disclosures | 115 |
| `responsive.css` | Responsive: mobile + small-phone breakpoints | 117 |

Other CSS files (not split):
- `leaflet-custom.css` — Leaflet markers, pulse animations, ticker
- `radar.css` — Radar page-specific styles

## Load order

All HTML pages should load modules in this order (specificity bottom-up):

```html
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/controls.css">
<link rel="stylesheet" href="css/filters.css">
<link rel="stylesheet" href="css/map-ui.css">
<link rel="stylesheet" href="css/detail-panel.css">
<link rel="stylesheet" href="css/cross-links.css">
<link rel="stylesheet" href="css/subpages.css">
<link rel="stylesheet" href="css/responsive.css">
<link rel="stylesheet" href="css/leaflet-custom.css">
<link rel="stylesheet" href="css/radar.css"> <!-- radar.html only -->
```
