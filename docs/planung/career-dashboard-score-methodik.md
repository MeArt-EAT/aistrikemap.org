# Career Dashboard – Score-Methodik (V0.1)

**Kontext:** Arbeitsdokument für Item 99 (Konzeptphase Career Dashboard), Punkt 2 *Score-Methodik*. Schwesterdokument zu [career-dashboard-datenquellen-matrix.md](career-dashboard-datenquellen-matrix.md).

**Zweck:** Festlegen, **was genau** das Career Dashboard pro Beruf/Land misst, **wie** es aggregiert, und **wie** es Unsicherheit kommuniziert.

---

## ENTSCHIEDEN 2026-05-01 · Bandbreiten-Modell mit 3-Schichten-Quellen

**Gewählt: Hybrid aus Option ▲ (Bandbreiten) + ● (Layered Default+Drill-down) + ★ (Time-Series Confidence-Band).**

### Kern-Prinzip

AIStrikeMap differenziert sich **nicht durch einen eigenen Score**, sondern durch **transparente Synthese der existierenden Forschung**. Das Datenformat selbst erzwingt Bias-Transparency: pro Beruf/Land/Jahr wird nicht ein Wert, sondern eine **Bandbreite aus 3 Quell-Schichten** gespeichert und gezeigt.

### 3-Schichten-Modell (priorisiert)

| Schicht | Quelle | Verfügbarkeit |
|---|---|---|
| **A** | Nationaler offizieller Index (DE IAB Substituierbarkeit, UK ONS, CA StatCan, AU JSA, NL CBS, SE Arbetsförmedlingen, FR DARES, US BLS+O*NET) | 6–8 von 8 MVP-Ländern |
| **B** | OECD Lassébie/Quintini 2022 AI Occupational Exposure (+ OECD Employment Outlook 2025 / "Bridging the AI Skills Gap" Apr 2025 / "Who will be the workers most affected by AI?" Okt 2024 als Edition-Folge mit gleicher Methodik) | alle 8 MVP-Länder (OECD-Coverage) |
| **C** | Frey/Osborne 2013 Automation Probability + ILO ISCO-Mapping | universal als Fallback |

Pro Beruf/Land werden alle verfügbaren Schichten gesammelt. Wenn eine Schicht fehlt (z. B. kein nationaler Index), kollabiert die Bandbreite entsprechend — das muss in der UI sichtbar gemacht werden ("nur OECD-Quelle verfügbar — Unsicherheit unbekannt").

### Datenformat (pro Beruf-Land-Jahr-Eintrag)

```json
{
  "isco": "2330",
  "country": "DE",
  "year": 2026,
  "score": {
    "low": 0.42,
    "median": 0.61,
    "high": 0.83,
    "sources_count": 3
  },
  "sources": [
    {
      "layer": "A",
      "name": "IAB-Forschungsbericht 23/2025 — Substituierbarkeitspotenzial",
      "year": 2025,
      "value": 0.61,
      "url": "https://...",
      "methodology": "Anteil der Tätigkeiten, die heute schon technisch ersetzbar wären"
    },
    {
      "layer": "B",
      "name": "OECD Lassébie/Quintini 2022",
      "year": 2022,
      "value": 0.42,
      "url": "https://...",
      "methodology": "Überlappung von AI-Capabilities mit Berufstätigkeiten (deskriptiv, nicht prädiktiv)"
    },
    {
      "layer": "C",
      "name": "Frey/Osborne 2013",
      "year": 2013,
      "value": 0.83,
      "url": "https://...",
      "methodology": "Wahrscheinlichkeit der Automatisierung in 10–20 Jahren"
    }
  ]
}
```

### UI-Konsequenzen

- **Default-View:** Median-Wert + Bandbreite als Fehlerbalken (z. B. "0.61 ± 0.21").
- **Detail-Panel:** Drill-down auf einzelne Quell-Scores mit Methodik-Vermerken — analog zum bestehenden Incident-Detail-Panel-Pattern (`js/detail-panel.js`).
- **Time-Series (Item 96 Börsen-Analogie):** Bandbreite über Zeit als Confidence-Band-Chart — nicht als Single-Line. Wo historische Tiefe fehlt, wird das explizit markiert.
- **Schicht-Fallback-Indikator:** Wenn `sources_count: 1`, UI zeigt "Unsicherheit unbekannt — nur eine Quelle verfügbar".

---

## Aussortierte Alternativen

(In Optionen-Diskussion 2026-05-01 dokumentiert.)

| Option | Kern | Warum verworfen |
|---|---|---|
| **◆ Single canonical index** | Einen publizierten Score wählen (z. B. nur OECD) | Reduziert auf eine Perspektive — verliert journalistisches AIStrikeMap-Profil |
| **◇ AIStrikeMap-Composite-Index** | Eigener gewichteter Aggregat-Score | Gewichtungs-Wahl ist immer angreifbar; "yet another score"-Problem; Methodik-Peer-Review-Aufwand |
| **▼ Multi-dimensional ohne Aggregation** | 3–4 separate Achsen (Exposure, Substitution, Nachfrage, Lohn) | UI deutlich aufwendiger; Cross-Country-Ranking unklar; Item 96 Börsen-Analogie wird komplex |

---

## Erkenntnis: Was die einzelnen Scores tatsächlich messen

Wichtig für die UI-Methodik-Vermerke — die publizierten Scores divergieren stark, weil sie **unterschiedliche Fragen** beantworten:

| Studie | Misst | Zeithorizont |
|---|---|---|
| Frey/Osborne 2013 | Automatisierungs-*Wahrscheinlichkeit* | 10–20 Jahre |
| OECD Lassébie/Quintini 2022 | AI-*Exposure* (deskriptiv, kein Ersatz-Verdikt) | Heute |
| IAB Substituierbarkeit (Forschungsbericht 23/2025) | Tätigkeits-*Anteil* technisch ersetzbar | Heute |
| Acemoglu/Restrepo / Eloundou et al. | *Augmentation vs. Substitution* | Aktuell |
| CEDEFOP / BLS Projections 2024–2034 | Beschäftigungs-*Trajektorie* | 5–10 Jahre |

Eine Pflegekraft kann gleichzeitig "hoch automatisierbar" (Frey/Osborne), "mittel exposed" (OECD) und "wachsende Nachfrage" (BLS) sein — alle drei korrekt, weil verschiedene Fragen. Die Bandbreite ist deshalb nicht "Messunsicherheit", sondern "Perspektiven-Divergenz" — das muss kommunikativ klar werden.

---

## Offene Folge-Fragen (für Punkt 3 UX und Punkt 4 Bias-Transparency)

1. **Score-Range vs. Score-Punkte als Default-Anzeige:** Reicht die Fehlerbalken-Optik, oder braucht es eine eigene "Confidence-Visualization" (z. B. abgestufte Sättigung des Markers)?
2. **Was, wenn Schichten widersprüchlich sind?** (z. B. nationaler Index sehr niedrig, Frey/Osborne sehr hoch — Bandbreite wird groß). UI muss zwischen "wenig Daten" und "viel Streit in der Forschung" unterscheidbar machen.
3. **Methodik-Vermerk-Granularität:** Pro Datenpunkt? Pro Beruf? Globaler "Über die Methodik"-Page-Link?

Diese Fragen werden in Punkt 3 (UX/UI-Konzept) und Punkt 4 (Bias-Transparency-Konzept) beantwortet.

---

*Dokument erstellt: 2026-05-01, Quellen-Stand verifiziert 2026-05-01*
*Version: 0.2 (Quellen-Datierung korrigiert: Lassébie/Quintini 2022 statt 2024)*
*Status: Methodik-Eckpfeiler entschieden — UI-Umsetzung und Bias-Transparency-Vermerke folgen in Punkt 3 und 4 der Konzeptphase*
