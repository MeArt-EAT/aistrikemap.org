# Career Dashboard – MVP-Scoping (V0.1)

**Kontext:** Arbeitsdokument für Item 99 (Konzeptphase Career Dashboard), Punkt 6 *MVP-Scoping*. Schlussstein der Konzeptphase. Schwesterdokumente: [Datenquellen-Matrix](career-dashboard-datenquellen-matrix.md), [Score-Methodik](career-dashboard-score-methodik.md), [Bias-Transparency](career-dashboard-bias-transparency.md), [UX/UI-Konzept](career-dashboard-ux-konzept.md), [Recht](career-dashboard-recht.md).

**Zweck:** Den minimal sinnvollen ersten Wurf festlegen — was muss mindestens an Bord, was wird bewusst v2 verschoben, in welcher Implementierungs-Reihenfolge.

---

## ENTSCHIEDEN 2026-05-01 · MVP-Schnitt

### Inhalt-Scope

| Achse | MVP | v2+ |
|---|---|---|
| Länder | **8** (DE, US, UK, FR, CA, NL, SE, AU) | weitere OECD-Länder, dann Schwellenländer |
| Berufe | **~80 kuratierte ISCO-4-digit-Codes** (siehe Liste unten) | volle 436 ISCO-Codes |
| Zeitachse historisch | **2018–2025** | erweitern, sobald nationale Datentiefe vorliegt |
| Zeitachse Projektion | **wo Quelle vorhanden** (CEDEFOP-EU bis 2035, BLS bis 2032), sonst kein Forecast-Layer | eigene Projektionen / Trend-Extrapolation explizit nicht |
| Modi | **Map + Chart, beide ab Tag 1** | — |
| Chart-Vergleich | **1 Beruf × 1 Land mit Confidence-Band** | Multi-Beruf- und Multi-Land-Overlays |
| Such-Aliase (Option δ aus TODO-1) | nein | ja, inkrementell pro Land |
| CI-Automation des Bundle-Scripts | nein, manuelle Läufe | ja, GitHub Actions wöchentlich (analog Link-Checker) |
| Berufe-Explorer-Liste (Item 95) | nein, nur Beruf-Filter im career.html | ja, als eigene Sub-Page |
| Item 98 Ticker | **separat geplant**, nicht Teil dieses MVPs | — |

### Kuratierter Beruf-Katalog (~80 Codes)

Auswahl-Kriterien: gesellschaftliche Relevanz + breite Datenverfügbarkeit über alle 8 MVP-Länder + plausible KI-Diskursnähe. Genauer Katalog wird beim Bundle-Script-Aufbau finalisiert; folgender Cluster-Plan:

| Cluster | ISCO-Bereich | Beispiele | ca. Anzahl |
|---|---|---|---|
| Pflege & Gesundheit | 22, 32 | Ärzte, Pflegefachkräfte, Therapeuten | 10 |
| IT & Software | 25, 35 | Softwareentwickler, Sysadmins, Datenanalysten | 8 |
| Verwaltung & Büro | 41, 33 | Sekretariat, Buchhaltung, Sachbearbeitung | 10 |
| Bildung | 23 | Lehrkräfte aller Stufen | 6 |
| Handwerk | 71, 72, 75 | Elektriker, Mechatroniker, Schreiner, Bäcker | 12 |
| Verkauf & Service | 52, 51 | Kassierer, Friseur, Köche, Kellner | 10 |
| Transport & Logistik | 83, 93 | LKW-Fahrer, Paketzusteller, Lagerist | 8 |
| Recht & Beratung | 26 | Anwälte, Steuerberater, Wirtschaftsprüfer | 6 |
| Kreativ & Medien | 26, 34 | Journalisten, Designer, Übersetzer | 6 |
| Industrie & Produktion | 81, 82 | Maschinenbediener, Fließbandarbeiter | 6 |

≈ **82 Berufe** als Startmenge. Pro Land × Beruf × Jahr × bis zu 3 Schichten = ~17.500 Datenpunkte → JSON-Bundle-Größe schätzungsweise 2–4 MB, GitHub-Pages-tauglich.

### Implementierungs-Reihenfolge (8-Schritt-Plan)

1. **Bundle-Script-Skelett** (`scripts/bundle-career-data.js`) — Schicht-Loader, Bandbreiten-Aggregator, Edge-Case-Klassifizierer, Lizenz-Manifest-Schreiber. **Unit-Tests für Bandbreiten-Mathematik mandatorisch.**
2. **Datenquellen-Anbindung pro Land** — fängt mit DE+US an (höchste Datenqualität, Frage-Test-Bed), dann UK+FR+CA+NL+SE+AU. Fallback auf Schicht B/C systematisch.
3. **Beruf-Katalog finalisieren** — die ~80 ISCO-Codes mit Cross-Country-Datenverfügbarkeit prüfen, kuratierte Liste committen als `data/career/taxonomy.json`.
4. **`career.html` Skelett** — Header, Navigation-Integration ("Career"-Tab), Filterleiste, Mode-Toggle, Footer mit Methodik-Link. Statisch, ohne Daten.
5. **Map-Modus** — Choropleth via Leaflet + GeoJSON-Welt-Boundaries (CDN: Natural Earth). Country-Click → Detail-Panel-Slide-in. Detail-Panel implementiert Bandbreiten-Visualisierung + Confidence-Quality-Stile + alle 5 Edge-Case-Vermerke.
6. **Chart-Modus** — Chart.js via CDN, Time-Series mit Confidence-Band als Hintergrund-Schraffur. Mode-Toggle aus 4 wired up.
7. **`methodik-career.html`** — alle 7 Sections aus W-5 mit Lizenz-Hinweisen pro Quelle, Disclaimer, Frey/Osborne-Caveat in Lang-Form.
8. **i18n + Permalink + QA** — alle Strings aus Punkt 4/5 in `i18n/{de,en}.json`, Permalink-Schema implementiert, Cross-Browser-Test, Mobile-Test.

### Aufwands-Indikation

**Ohne Festlegung auf konkrete Stunden** (Solo-Betrieb, andere Prioritäten möglich):

- Schritte 1–3 (Daten-Pipeline): der dickste Brocken — pro Land typisch 1–2 Sessions, da APIs verschieden authentifizieren und versionieren. Realistisch: **8 Länder × ~1 Session = 8–10 Sessions**.
- Schritte 4–6 (Frontend): die meisten Patterns sind aus `index.html` / `radar.html` recyclebar. Realistisch: **3–5 Sessions**.
- Schritte 7–8 (Methodik-Page + QA): weitgehend Schreibarbeit + Testing. Realistisch: **2–3 Sessions**.

**Gesamtschätzung: ~15 Sessions vom Konzept-Ende zum Live-Dashboard.** Längere oder kürzere Realisierung je nach Solo-Betrieb-Verfügbarkeit zu erwarten — diese Zahl ist Größenordnung, kein Commitment.

### Akzeptanz-Kriterien (Definition of Done für MVP)

Das Career Dashboard ist MVP-bereit, wenn alle folgenden gleichzeitig erfüllt sind:

1. ✅ Live unter `aistrikemap.org/career.html`, in Hauptnavigation verlinkt
2. ✅ 8 Länder × ~80 Berufe × Schichten A/B/C verfügbar (≥ 90% Beruf-Land-Kombinationen mit mindestens einer Score-Quelle)
3. ✅ Map-Modus zeigt Choropleth, Country-Click öffnet Detail-Panel mit korrekt gerenderter Bandbreite
4. ✅ Chart-Modus zeigt Time-Series 2018–2025 mit Confidence-Band, optional Forecast-Layer wo verfügbar
5. ✅ Alle 5 Edge-Case-Vermerke (Punkt 4) erscheinen in den korrekten Datenfällen
6. ✅ Methodik-Page (`methodik-career.html`) live mit allen Lizenz-Hinweisen pro Quelle und Standard-Disclaimer
7. ✅ DE + EN i18n vollständig, Sprach-Toggle funktioniert
8. ✅ Permalink-Schema implementiert (`?occupation=...&country=...&mode=...`)
9. ✅ Mobile (Smartphone-Breakpoint) funktioniert: Filterleiste vertikal, Detail-Panel als Full-Screen-Overlay
10. ✅ `data/career/index.json` enthält Lizenz-Manifest (CC BY 4.0)

---

## Was explizit **nicht** im MVP ist

(Damit Scope nicht durch Feature-Creep aufgeweicht wird.)

- **Multi-Beruf- oder Multi-Land-Vergleichs-Overlays im Chart** — Item 96 visioniert das, aber im MVP zeigt der Chart genau 1 Beruf × 1 Land mit Confidence-Band. Vergleich kommt v2.
- **Berufe-Explorer-Liste (Item 95)** — Filter im career.html reicht für MVP. Explorer-Page ist v2.
- **Search-Aliase** (Option δ aus TODO-1) — User suchen mit ISCO-Bezeichnung. Native Begriffe via Aliase v2.
- **CI-Automation des Bundle-Scripts** (Option B aus TODO-3) — manuelle jährliche Läufe für MVP, CI v2.
- **Item 98 Labor-Impact-Ticker** — eigenständiges Modul, separater Implementierungs-Slot. Nicht in diesem MVP.
- **Item 97 Choropleth-Detail-Vergleich-Modi** (z. B. zwei Länder nebeneinander) — wird vom MVP-Map-Modus nicht abgedeckt. Falls Bedarf, v2.
- **CN, IN, ID, BR, ZA, MX, ES, IT, KR, JP, CH, AT** — alle anderen Top-20-Länder aus der Matrix sind v2-Erweiterungen.

---

## Risiken und Mitigation

| Risiko | Mitigation |
|---|---|
| Datenverfügbarkeit für ~80 Berufe in einigen Ländern lückenhaft | Edge-Case-Vermerk "Schicht-Fallback" zeigt das transparent; >90%-Coverage-Akzeptanz-Kriterium akzeptiert ~10% Lücken |
| Chart.js-CDN-Ausfall | Wie Leaflet-CDN: keine eigene Mitigation, gleicher Risikoprofil wie Phase 1 |
| Bundle-Größe explodiert (>5 MB) | Splitting nach ISCO-Major-Group als Fallback (1 JSON pro Major-Group statt 1 pro Land); im Implementierungs-Schritt 1 prüfen |
| Lizenz-Reklamationen | Methodik-Page macht Quellenattribution explizit; CC BY 4.0 für eigene Aggregate signalisiert Forschungs-/Journalismus-Geist |
| Solo-Betrieb-Pflegeaufwand | Jährlicher Update-Rhythmus (TODO-2) ist realistisch leistbar; CI-Automation als v2-Sicherheitsnetz |

---

## Zusammenfassung Konzeptphase Item 99

Die sechs Punkte aus dem ursprünglichen [phase-2-career-dashboard.md](phase-2-career-dashboard.md):

| # | Thema | Status | Quelldokument |
|---|---|---|---|
| 1 | Datenquellen-Recherche | ✅ entschieden | [career-dashboard-datenquellen-matrix.md](career-dashboard-datenquellen-matrix.md) |
| 2 | Score-Methodik | ✅ entschieden | [career-dashboard-score-methodik.md](career-dashboard-score-methodik.md) |
| 3 | UX/UI-Konzept | ✅ entschieden | [career-dashboard-ux-konzept.md](career-dashboard-ux-konzept.md) |
| 4 | Bias-Transparency | ✅ entschieden | [career-dashboard-bias-transparency.md](career-dashboard-bias-transparency.md) |
| 5 | Rechtliche Prüfung | ✅ entschieden | [career-dashboard-recht.md](career-dashboard-recht.md) |
| 6 | MVP-Scoping | ✅ entschieden | dieses Dokument |

**Konzeptphase Item 99 abgeschlossen.** Die Items 94–98 sind damit konzeptuell freigegeben — Implementierungs-Beginn nach Priorisierungs-Entscheidung des Projekteigners.

---

*Dokument erstellt: 2026-05-01*
*Version: 0.1 (Arbeitsstand)*
*Status: MVP-Schnitt entschieden, Konzeptphase Item 99 abgeschlossen — Implementierungs-Freigabe steht beim Projekteigner*
