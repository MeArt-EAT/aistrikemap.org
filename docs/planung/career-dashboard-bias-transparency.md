# Career Dashboard – Bias-Transparency-Konzept (V0.1)

**Kontext:** Arbeitsdokument für Item 99 (Konzeptphase Career Dashboard), Punkt 4 *Bias-Transparency-Konzept*. Schwesterdokumente: [career-dashboard-datenquellen-matrix.md](career-dashboard-datenquellen-matrix.md) und [career-dashboard-score-methodik.md](career-dashboard-score-methodik.md).

**Zweck:** Festlegen, **wie** das Career Dashboard divergierende Quellenstände und Datenlücken transparent kommuniziert — ohne in Methodik-Schweigen oder Methodik-Lähmung zu verfallen.

**Ausgangslage:** Punkt 2 hat das 3-Schichten-Bandbreiten-Modell entschieden. Bias-Transparency wird damit **strukturell** erzwungen (jeder Score ist von Natur aus eine Spannweite mit Quellenliste). Punkt 4 klärt nur noch die **kommunikative Schicht** darüber.

---

## ENTSCHIEDEN 2026-05-01 · Fünf-Säulen-Modell

### Säule A · Methodik-Vermerk-Granularität (3-Ebenen-Pattern)

Hinweise auf drei UI-Tiefen-Ebenen, jeweils unterschiedliche Detailtiefe:

1. **Globaler Methodik-Page-Link** im Footer aller Career-Dashboard-Seiten — verlinkt auf `methodik-career.html` (vergleichbar zur Inventar-Index-Page-Logik). Erklärt 3-Schichten-Modell, Quellen, Aggregations-Logik in Lang-Form.
2. **Berufs-Detail-Panel-Section** "Wie wird das gemessen?" — analog zum bestehenden Incident-Detail-Panel-Pattern (`js/detail-panel.js`). Quellenliste mit pro-Quelle-Methodik-Kurztext.
3. **Pro-Score-Tooltip** via `title`-Attribut auf jedem Datenpunkt (Map-Marker, Chart-Punkt, Listeneintrag). Zero-JS-Lösung.

Begründung: Discoverability-Optimum bei vergleichbaren Sites (OurWorldInData, OECD-Charts) — Tooltip für schnellen Überblick, Detail-Panel für inhaltliche Tiefe, Page-Link für Vollständigkeit.

### Säule B · Confidence-Quality-Feld + visuelle Differenzierung

Zusätzliches Feld `confidence_quality` im Score-JSON (siehe [Score-Methodik-Doku](career-dashboard-score-methodik.md)):

| Wert | Bedingung | Visuelle Darstellung |
|---|---|---|
| `"robust"` | `sources_count >= 3` UND Standardabweichung < 0.15 | Confidence-Band durchgezogen, voll opak |
| `"divergent"` | `sources_count >= 3` UND Standardabweichung ≥ 0.15 | Confidence-Band schraffiert + Vermerk "Forschung uneins" |
| `"sparse"` | `sources_count < 3` | Confidence-Band gestrichelt + Vermerk "begrenzte Quellenlage" |

Standardabweichung-Cutoff (0.15) ist Kalibrierungs-Parameter im Bundle-Script — nach erstem realen Lauf prüfen und ggf. anpassen. Hardcoded für MVP, Konfiguration in v2.

### Säule C · Edge-Case-Regeln (5 Standard-Vermerke)

Im Bundle-Script implementiert, i18n-fähig in `i18n/{de,en}.json` hinterlegt. Die exakten Strings (siehe Säule E) tauchen automatisch auf, wenn der jeweilige Datenfall vorliegt.

| Fall | i18n-Key | Wann auslösen |
|---|---|---|
| Einzelquelle | `career.bias.singleSource` | `sources_count == 1` |
| Forschungs-Divergenz | `career.bias.divergent` | `confidence_quality == "divergent"` |
| Nationaldaten fehlen | `career.bias.noNationalData` | Keine Schicht-A-Quelle |
| Veraltete Quelle | `career.bias.staleSource` | `(currentYear - sourceYear) > 3` |
| Ausreißer | `career.bias.outlier` | Single-Source-Wert > 1.5× Median; gezeigt, aber transparent gerendert |

Ausreißer werden **nicht aus der Bandbreite ausgeschlossen** — Equal-Weight-Prinzip aus Punkt 2 wird gewahrt. Visuell jedoch erkennbar.

### Säule D · Voice / Schreibstil

| Kontext | Stil | Beispiel |
|---|---|---|
| Daten-Vermerke (Tooltips, Detail-Panel-Texte) | **Neutral-deskriptiv** | "Frey/Osborne 2013 misst die Wahrscheinlichkeit der Automatisierung in 10–20 Jahren." |
| Methodik-Page (`methodik-career.html`) | **Editorial-erklärend** | "Wir zeigen Bandbreiten statt Einzelwerte, weil verschiedene Studien verschiedene Fragen beantworten…" |
| AIStrikeMap-Ich-Stimme | **Vermeiden** | (kein "AIStrikeMap aggregiert…", "Wir bei AIStrikeMap meinen…") |

Begründung: Konsistenz zum bestehenden Incident-Bereich (neutral-deskriptiv im Datenstrom, längere Reflexionen separat). Vermeidet "AIStrikeMap als Stimme"-Problem, das im journalistischen Kontext zur Gegenstimme einlädt.

### Säule E · Frey/Osborne-Behandlung

Frey/Osborne 2013 (Schicht-C-Fallback) bleibt **drin mit explizitem Disclaimer pro Verwendung**.

Begründung gegen die Alternativen:
- **Rausnehmen + ILO×OECD-Ersatz** wäre mathematisch zirkulär (OECD ist bereits Schicht B)
- **Niedriger gewichten** würde den Equal-Weight-Bandbreiten-Ansatz brechen → durch die Hintertür ein impliziter Composite-Index, den Punkt 2 explizit verworfen hat

Frey/Osborne ist eine **Stimme im Diskurs mit eigener Kritik-Geschichte** — diese Kritik wird mitkommuniziert, der User entscheidet selbst.

Standard-Disclaimer (i18n-Key `career.bias.freyOsbornCaveat`): *"Frey/Osborne 2013 ist eine vielzitierte ältere Studie, die für Überzeichnung kritisiert wurde (vgl. OECD 2018, Arntz/Gregory/Zierahn). In dieser Bandbreite enthalten als Schätzwert für Länder ohne neuere nationale Daten."*

---

## i18n-Strings (umsetzungs-ready)

Folgende Keys werden in `i18n/de.json` und `i18n/en.json` hinzugefügt, sobald der Bundle-Script implementiert wird:

```json
{
  "career.bias.singleSource": {
    "de": "Nur eine Quelle verfügbar — Unsicherheit unbekannt",
    "en": "Only one source available — uncertainty unknown"
  },
  "career.bias.divergent": {
    "de": "Forschung uneins — Bandbreite reflektiert Perspektiven-Divergenz, nicht Messunsicherheit",
    "en": "Research diverges — range reflects perspective divergence, not measurement uncertainty"
  },
  "career.bias.noNationalData": {
    "de": "Keine nationalen Daten verfügbar — Schätzung basiert auf OECD-Modell",
    "en": "No national data available — estimate based on OECD model"
  },
  "career.bias.staleSource": {
    "de": "Letzte verfügbare Erhebung: {{year}}",
    "en": "Last available data: {{year}}"
  },
  "career.bias.outlier": {
    "de": "Ausreißer — weicht stark vom Median ab",
    "en": "Outlier — deviates strongly from median"
  },
  "career.bias.freyOsbornCaveat": {
    "de": "Frey/Osborne 2013 ist eine vielzitierte ältere Studie, die für Überzeichnung kritisiert wurde (vgl. OECD 2018, Arntz/Gregory/Zierahn). In dieser Bandbreite enthalten als Schätzwert für Länder ohne neuere nationale Daten.",
    "en": "Frey/Osborne 2013 is a widely-cited older study criticized for overestimation (cf. OECD 2018, Arntz/Gregory/Zierahn). Included in this range as an estimate for countries without more recent national data."
  },
  "career.bias.lastUpdated": {
    "de": "Stand: {{month}} {{year}}",
    "en": "As of {{month}} {{year}}"
  },
  "career.bias.sourcesLine": {
    "de": "Quellen: {{sourceList}}",
    "en": "Sources: {{sourceList}}"
  }
}
```

---

## Constraints für Punkt 3 (UX/UI-Konzept)

Punkt 4 erzeugt feste Anforderungen, die Punkt 3 berücksichtigen muss:

1. **Footer-Bereich** muss Methodik-Page-Link enthalten (Säule A.1).
2. **Berufs-Detail-Panel** braucht eine "Wie wird das gemessen?"-Section (Säule A.2). Layout-Pattern: analog Incident-Detail-Panel.
3. **Score-Visualisierung** muss drei `confidence_quality`-Stile rendern können (Säule B). Konkret: gestrichelt / schraffiert / durchgezogen für Confidence-Band-Edges. CSS-Pattern muss diese Differenzierung sauber abbilden.
4. **Tooltip-Layer** auf allen Datenpunkten (Map-Marker, Chart-Punkt, Listeneintrag). Zero-JS-Lösung via `title`.
5. **Confidence-Vermerk-Slot** im Detail-Panel: Platz für 1–3 der Edge-Case-Vermerke (Säule C). Layout muss elastisch sein.
6. **"Stand: …"-Timestamp + "Quellen: …"-Zeile** prominent sichtbar, nicht im Footer versteckt. Vorschlag: über jedem Score-Chart als Caption.

---

## Was diese Entscheidung **nicht** klärt

(Für Punkt 5 / Punkt 6 oder spätere Konzept-Iterationen.)

- Konkrete Linkstruktur und Inhalt der `methodik-career.html`-Page (ist Punkt 3-Output)
- Rechtliche Formulierungen für Quellenattribution-Pflichten (Punkt 5)
- Wann eine Bandbreite **so unscharf** ist, dass der Datenpunkt komplett ausgeblendet werden sollte (Punkt 6 MVP-Scoping)

---

*Dokument erstellt: 2026-05-01*
*Version: 0.1 (Arbeitsstand)*
*Status: Konzept entschieden, umsetzungs-ready — i18n-Keys formuliert, Constraints für Punkt 3 explizit*
