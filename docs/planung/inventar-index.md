# AIStrikeMap – Planungsinventar (Gesamtindex)

Zentrale Übersicht aller Items und ihrer Quelldokumente.

| Item-Bereich | Modul / Phase | Quelldokument | Status |
|---|---|---|---|
| 1–93 | Phase 1 – Incident-Karte | [AIStrikeMap_Planungsinventar_v3.docx](../../AIStrikeMap_Planungsinventar_v3.docx) | Abgeschlossen |
| 94–99 | Phase 2 – AI Career Impact Dashboard | [phase-2-career-dashboard.md](phase-2-career-dashboard.md) · Punkt 1 (Datenquellen): [career-dashboard-datenquellen-matrix.md](career-dashboard-datenquellen-matrix.md) · Punkt 2 (Score-Methodik): [career-dashboard-score-methodik.md](career-dashboard-score-methodik.md) · Punkt 3 (UX/UI): [career-dashboard-ux-konzept.md](career-dashboard-ux-konzept.md) · Punkt 4 (Bias-Transparency): [career-dashboard-bias-transparency.md](career-dashboard-bias-transparency.md) · Punkt 5 (Recht): [career-dashboard-recht.md](career-dashboard-recht.md) · Punkt 6 (MVP-Scope): [career-dashboard-mvp-scope.md](career-dashboard-mvp-scope.md) · Step 1 Bundle-Skelett: [scripts/bundle-career-data.js](../../scripts/bundle-career-data.js) | **Konzeptphase abgeschlossen** · Step 1 Bundle-Skelett live (40 Tests grün) · Step 2+ folgen |
| 98 | Phase 2 – AI Labor Impact (Übersichts-Modul) | [labor-impact.html](../../labor-impact.html) · v0.4 live (3-Ebenen-Layout: Potentialanalyse + Plan + Realität-Aggregat) | Live, Bandbreiten-Anteile + WEF-Survey-Werte preliminary (siehe [pre-release-todos.md](pre-release-todos.md)) |
| 100–103 | Phase 2 – AI Live-Radar | [phase-2-live-radar.md](phase-2-live-radar.md) · [konzept-live-radar.md](konzept-live-radar.md) | MVP live, manuell-redaktionelle Pflege |
| **105** | Phase 2 – Labor-Impact-Cases (Datenbank konkreter KI-bedingter Stellen-Veränderungen) | [phase-2-labor-impact-cases.md](phase-2-labor-impact-cases.md) · Schema v0.2: [data/labor-impact-cases/_schema.md](../../data/labor-impact-cases/_schema.md) · Bundle: [scripts/bundle-labor-cases.js](../../scripts/bundle-labor-cases.js) | **Live 2026-05-01/02/03** · 12 Cases = 84.875 Stellen in 6 Ländern (US 5 / DE 1 / GB 1 / IN 1 / FR 2 / SE 1) · Top: Microsoft 15k, Amazon 14k, TCS 12k, Accenture 11k, SAP 10k, BT 10k · Schema v0.2 mit tags/severity_class/last_verified · Pro-Land-Bundle-Splitting in `data/labor-impact-by-country/` aktiv · Aggregate enthält by_country/by_industry/by_tag/by_severity/country_files-Manifest |
| **106** | Phase 2 – Labor-Impact-Map (Weltkarte mit Marker-pro-Land + Detail-Panel) | [labor-impact-map.html](../../labor-impact-map.html) · [js/labor-impact-map.js](../../js/labor-impact-map.js) · [css/labor-impact-map.css](../../css/labor-impact-map.css) · Konzept: [phase-2-labor-impact-cases.md](phase-2-labor-impact-cases.md) Abschnitt 2.2 | **Live 2026-05-02** · Marker-pro-Land (sqrt-skaliert), Tooltip, Detail-Panel mit Cases-Liste, Pillen für Methodik-Vorbehalte (stable/disputed/reversal), on-demand-Loading aus pro-Land-Bundles, 27-Länder-Center-Lookup, Cross-Link aus Übersicht. Choropleth + Welt-GeoJSON optional in v2 |
| **107** | Phase 3 – Auto-Update-Architektur (GitHub Action + LLM-API für Cases + Radar + Incident-Übersetzung) | [phase-2-labor-impact-cases.md](phase-2-labor-impact-cases.md) Abschnitt 4 · [recht-crowdsourcing.md](recht-crowdsourcing.md) Abschnitt 6 (KI-Pre-Check teilt LLM-API-Setup) | Konzipiert · Cost/Privacy-Decision steht aus · Würde gleichzeitig Incident-EN-Übersetzung (195 Files) und Cases-Auto-Update bedienen |
| **108** | Phase 2 – Crowdsourcing-Pipeline (rechtlicher Rahmen + Issue-Template + DSGVO) | [recht-crowdsourcing.md](recht-crowdsourcing.md) · [.github/ISSUE_TEMPLATE/ki-entlassung-melden.yml](../../.github/ISSUE_TEMPLATE/ki-entlassung-melden.yml) · [datenschutz.html](../../datenschutz.html) §8 | **Eingang live 2026-05-01/02** · Issue-Template aktiv, Datenschutz §8 Crowdsourcing dokumentiert, manueller Maintainer-Review-Workflow (analog Vorfall-melden) · KI-Pre-Check als Folge-Slot mit Item 107 · Juristisches Review vor breiter Bewerbung |

## Drei-Zeitebenen-Modell

| Zeitebene | Modul | Items |
|---|---|---|
| Vergangenheit | Incident-Karte | 1–93 |
| Gegenwart | AI Live-Radar (Situationen) · AI Labor Impact (Übersicht) · Labor-Impact-Cases (Realität) | 98, 100–103, 105–106 |
| Zukunft | AI Career Impact Dashboard (Studien-Bandbreiten pro Beruf) | 94–99 |
| Architektur (querschnittlich) | Auto-Update-Pipeline · Crowdsourcing-Recht | 107, 108 |

---

*Letzte Aktualisierung: 2026-05-03*
