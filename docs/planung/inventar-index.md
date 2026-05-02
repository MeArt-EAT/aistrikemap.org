# AIStrikeMap – Planungsinventar (Gesamtindex)

Zentrale Übersicht aller Items und ihrer Quelldokumente.

| Item-Bereich | Modul / Phase | Quelldokument | Status |
|---|---|---|---|
| 1–93 | Phase 1 – Incident-Karte | [AIStrikeMap_Planungsinventar_v3.docx](../../AIStrikeMap_Planungsinventar_v3.docx) | Abgeschlossen |
| 94–99 | Phase 2 – AI Career Impact Dashboard | [phase-2-career-dashboard.md](phase-2-career-dashboard.md) · Punkt 1 (Datenquellen): [career-dashboard-datenquellen-matrix.md](career-dashboard-datenquellen-matrix.md) · Punkt 2 (Score-Methodik): [career-dashboard-score-methodik.md](career-dashboard-score-methodik.md) · Punkt 3 (UX/UI): [career-dashboard-ux-konzept.md](career-dashboard-ux-konzept.md) · Punkt 4 (Bias-Transparency): [career-dashboard-bias-transparency.md](career-dashboard-bias-transparency.md) · Punkt 5 (Recht): [career-dashboard-recht.md](career-dashboard-recht.md) · Punkt 6 (MVP-Scope): [career-dashboard-mvp-scope.md](career-dashboard-mvp-scope.md) · Step 1 Bundle-Skelett: [scripts/bundle-career-data.js](../../scripts/bundle-career-data.js) | **Konzeptphase abgeschlossen** · Step 1 Bundle-Skelett live (40 Tests grün) · Step 2+ folgen |
| 98 | Phase 2 – AI Labor Impact (Übersichts-Modul) | [labor-impact.html](../../labor-impact.html) · v0.3 live (Tickender Counter mit fixem Anker, Substitution + Augmentation Bandbreite) | Live, Bandbreiten-Anteile preliminary (siehe [pre-release-todos.md](pre-release-todos.md)) |
| 100–103 | Phase 2 – AI Live-Radar | [phase-2-live-radar.md](phase-2-live-radar.md) · [konzept-live-radar.md](konzept-live-radar.md) | MVP live, manuell-redaktionelle Pflege |
| **105** | Phase 2 – Labor-Impact-Cases (Datenbank konkreter KI-bedingter Stellen-Veränderungen) | [phase-2-labor-impact-cases.md](phase-2-labor-impact-cases.md) · Schema: [data/labor-impact-cases/_schema.md](../../data/labor-impact-cases/_schema.md) · Bundle: [scripts/bundle-labor-cases.js](../../scripts/bundle-labor-cases.js) | **Architektur-Skelett 2026-05-01** · Erst-Case (SAP DE 2024 / 10.000) drin · weitere Cases land-für-land in Folge-Sessions |
| **106** | Phase 2 – Labor-Impact-Map (Choropleth-Modul für Cases-Drill-down nach Land/Beruf) | [phase-2-labor-impact-cases.md](phase-2-labor-impact-cases.md) Abschnitt 2.2 | Konzipiert · eigener Slot, sobald >30 Cases in 8+ Ländern |
| **107** | Phase 3 – Auto-Update-Architektur (GitHub Action + LLM-API für Cases + Radar) | [phase-2-labor-impact-cases.md](phase-2-labor-impact-cases.md) Abschnitt 4 | Konzipiert · Cost/Privacy-Decision steht aus |
| **108** | Phase 2 – Crowdsourcing-Pipeline (rechtlicher Rahmen + Pre-Veröffentlichungs-Pflicht-Check) | [recht-crowdsourcing.md](recht-crowdsourcing.md) | **Architektur-Konzept 2026-05-01** · Verbindlich für alle Crowdsourcing-Eingaben (Item 105 Cases, künftig Radar, künftig Incidents). Juristisches Review vor produktiver Inbetriebnahme. |

## Drei-Zeitebenen-Modell

| Zeitebene | Modul | Items |
|---|---|---|
| Vergangenheit | Incident-Karte | 1–93 |
| Gegenwart | AI Live-Radar (Situationen) · AI Labor Impact (Übersicht) · Labor-Impact-Cases (Realität) | 98, 100–103, 105–106 |
| Zukunft | AI Career Impact Dashboard (Studien-Bandbreiten pro Beruf) | 94–99 |
| Architektur (querschnittlich) | Auto-Update-Pipeline · Crowdsourcing-Recht | 107, 108 |

---

*Letzte Aktualisierung: 2026-05-01*
