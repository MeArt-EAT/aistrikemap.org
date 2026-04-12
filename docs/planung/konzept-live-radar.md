# AIStrikeMap – Konzeptdokument: AI Live-Radar

**Item 103 – Konzeptphase Live-Radar**
**Status:** Konzept ausgearbeitet
**Dokumentversion:** 1.0
**Erstellt:** 2026-04-13

---

## 1. Redaktionelles Konzept

### 1.1 Aufnahmekriterien

Ein Ereignis kommt auf das Live-Radar, wenn **alle** folgenden Bedingungen erfüllt sind:

1. **KI-Bezug:** Das Ereignis betrifft ein KI-System, eine KI-Entscheidung oder KI-Politik.
2. **Ethische Relevanz:** Mindestens eine der 10 Dimensionen (siehe Abschnitt 4) ist betroffen.
3. **Offener Ausgang:** Das Ereignis ist nicht abgeschlossen — es gibt laufende Entwicklungen, offene Verfahren, ungeklärte Konsequenzen.
4. **Mehrdimensionalität:** Das Ereignis hat mindestens 2 betroffene Dimensionen ODER mindestens 3 beteiligte Akteure. (Eindimensionale, einzelne Vorfälle gehören direkt auf die Incident-Karte.)
5. **Quellendeckung:** Mindestens 2 unabhängige Quellen berichten über das Ereignis.

### 1.2 Aktualisierungsrhythmus

| Situationsstatus | Prüfintervall | Aktion |
|---|---|---|
| Eskalierend | 2-3x pro Woche | Neue Entwicklungen eintragen, Status prüfen |
| Aktiv | 1x pro Woche | Entwicklungen prüfen, ggf. neue Timeline-Einträge |
| Stabil | 1x alle 2 Wochen | Auf Veränderungen prüfen |
| Deeskalierend | 1x alle 2 Wochen | Prüfen ob Überführung in Incident möglich |

**Pragmatische Regel:** Sonntags Radar-Review — alle Situationskarten durchgehen, Statusänderungen vornehmen, neue Quellen ergänzen.

### 1.3 Lifecycle

```
Aufnahme → Laufend → [Eskalierend / Aktiv / Stabil / Deeskalierend] → Abgeschlossen → Incident
```

**Phasen:**

1. **Aufnahme:** Neue Situationskarte wird erstellt. Status: `aktiv`. Mindestanforderungen: Titel, Beschreibung, 2+ Quellen, 2+ Dimensionen, 1+ Akteure.
2. **Laufend:** Situationskarte wird aktiv gepflegt. Timeline-Einträge kommen hinzu. Status wechselt zwischen `eskalierend`, `aktiv`, `stabil`, `deeskalierend`.
3. **Abgeschlossen:** Das Ereignis hat einen klaren Ausgang. Karte erhält Status `abgeschlossen` und Abschluss-Datum.
4. **Überführung:** Abgeschlossene Situationskarte wird in einen Incident-Karteneintrag umgewandelt. Der Live-Radar-Eintrag erhält einen Verweis auf den Incident (`resolvedAsIncident`). Alte Situationskarte bleibt als Archiv lesbar, wird aber nicht mehr im aktiven Radar angezeigt.

**Abgrenzungskriterien (laufend vs. abgeschlossen):**
- Gerichtsverfahren → abgeschlossen, wenn Urteil rechtskräftig
- Regulierungsdebatte → abgeschlossen, wenn Gesetz verabschiedet/abgelehnt
- Unternehmenskonflikt → abgeschlossen, wenn öffentliche Lösung oder Einstellung
- Sicherheitsvorfall → abgeschlossen, wenn Gegenmaßnahmen implementiert und keine aktive Bedrohung mehr

---

## 2. Datenmodell

### 2.1 Design-Entscheidung

**Eigenes Schema mit maximaler Kompatibilität zum Incident-Schema.** Das Live-Radar erweitert das bestehende JSON-LD-Format um radar-spezifische Felder, behält aber dieselbe Grundstruktur (Schema.org, `asm:`-Namespace). Dadurch ist die Überführung in einen Incident technisch trivial (Felder entfernen/umbenennen).

### 2.2 Schema: Situationskarte

```json
{
  "@context": {
    "@vocab": "https://schema.org/",
    "asm": "https://aistrikemap.org/schema/"
  },
  "@type": "Event",
  "@id": "https://aistrikemap.org/radar/anthropic-mythos-pentagon",

  "name": "Anthropic Mythos / Pentagon-Konflikt",
  "description": "Mehrdimensionale Entwicklung um ...",
  "startDate": "2026-03",

  "location": {
    "@type": "Place",
    "name": "Washington D.C., USA",
    "geo": { "@type": "GeoCoordinates", "latitude": 38.9, "longitude": -77.0 },
    "address": { "@type": "PostalAddress", "addressCountry": "US" }
  },

  "asm:radarStatus": "eskalierend",
  "asm:radarDimensions": ["cybersicherheit", "geopolitik", "unternehmensethik", "regulierung", "militaer"],
  "asm:severity": 4,

  "asm:actors": [
    { "name": "Anthropic", "type": "company", "asm:systems": ["Claude Mythos"] },
    { "name": "U.S. Department of Defense", "type": "military" },
    { "name": "Project Glasswing", "type": "organization" }
  ],

  "asm:developmentTimeline": [
    {
      "date": "2026-03-15",
      "title": "Anthropic hält Mythos Preview zurück",
      "description": "Cybersicherheits-Bewertung ergibt erhöhtes Risiko ...",
      "sources": ["https://..."],
      "significance": "hoch"
    },
    {
      "date": "2026-03-22",
      "title": "Pentagon fordert Zugang",
      "description": "...",
      "sources": ["https://..."],
      "significance": "hoch"
    }
  ],

  "asm:sources": [
    {
      "url": "https://...",
      "title": "...",
      "publisher": "The New York Times",
      "date": "2026-03",
      "type": "news-article",
      "asm:perspective": "kritisch"
    }
  ],

  "asm:resolvedAsIncident": null,

  "asm:metadata": {
    "created": "2026-04-13",
    "lastUpdated": "2026-04-13",
    "lastReviewed": "2026-04-13",
    "author": "AIStrikeMap",
    "humanVerified": true
  }
}
```

### 2.3 Unterschiede zum Incident-Schema

| Feld | Incident-Schema | Radar-Schema | Zweck |
|---|---|---|---|
| `@id` Pfad | `/incidents/...` | `/radar/...` | Namespace-Trennung |
| `asm:radarStatus` | nicht vorhanden | `eskalierend` / `aktiv` / `stabil` / `deeskalierend` / `abgeschlossen` | Situationsbewertung |
| `asm:radarDimensions` | nicht vorhanden | Array der Dimensions-Tags | Mehrdimensionale Einordnung |
| `asm:developmentTimeline` | `asm:reverseTimeline` (4 feste Phasen) | Chronologisch, ohne Phasenzuordnung, mit `significance` | Fortlaufende Chronik statt fester Rückwärts-Analyse |
| `asm:sources[].asm:perspective` | nicht vorhanden | `neutral` / `kritisch` / `befürwortend` / `unklar` | Bias-Transparency |
| `asm:resolvedAsIncident` | nicht vorhanden | ID des Incidents oder `null` | Lifecycle-Überführung |
| `asm:incidentType` | vorhanden | nicht vorhanden (ersetzt durch `asm:radarDimensions`) | Andere Taxonomie für laufende Ereignisse |
| `asm:verificationLevel` | 1-4 | nicht vorhanden | Bei Radar nicht sinnvoll — alles ist "laufend" |

### 2.4 Dateistruktur

```
data/
├── index.json                   (bestehend, Incidents)
├── all-incidents.json           (bestehend, Bundle)
├── radar-index.json             (NEU: Manifest der Situationskarten)
├── all-radar.json               (NEU: Bundle für Performance)
└── radar/                       (NEU: Verzeichnis)
    ├── anthropic-mythos-pentagon.json
    └── ...
```

---

## 3. Quellenkonzept

### 3.1 Systematische Quellenbeobachtung

**Tier-1-Quellen (Primär, wöchentlich prüfen):**
- Reuters, AP, AFP (Nachrichtenagenturen — geringster redaktioneller Spin)
- The New York Times, The Guardian, Der Spiegel (Qualitätsjournalismus)
- Ars Technica, WIRED, MIT Technology Review (Tech-Journalismus mit KI-Fokus)
- The Intercept (investigativ, insb. Überwachung/Militär)

**Tier-2-Quellen (Sekundär, bei Bedarf):**
- Unternehmens-Blogs und -Pressemitteilungen (Anthropic, OpenAI, Google, Meta, etc.)
- Regierungsdokumente und Gerichtsakten
- Berichte von NGOs (ACLU, EFF, AlgorithmWatch, Access Now, AI Now Institute)
- Wissenschaftliche Preprints (arXiv, SSRN)

**Tier-3-Quellen (Kontext, nicht alleinstehend):**
- Social Media (X/Twitter, Mastodon) — nur als Hinweisgeber, nie als einzige Quelle
- Branchenanalysten (CB Insights, Crunchbase) — für Finanzierungs-/Vertragskontext
- Podcasts und Newsletter (AI Alignment Forum, Import AI)

### 3.2 Bewertungskriterien pro Quelle

Jede Quelle wird bei Aufnahme bewertet:
- **Typ:** Nachrichtenagentur / Qualitätsjournalismus / Fachmedien / Unternehmenskommunikation / Regierung / NGO / Wissenschaft / Social Media
- **Perspektive:** neutral / kritisch / befürwortend / unklar (→ Bias-Transparency)
- **Primär/Sekundär:** Ist es eine Originalrecherche oder Wiedergabe?

### 3.3 Mindestanforderungen

- Jede Situationskarte braucht mindestens **2 unabhängige Tier-1- oder Tier-2-Quellen**
- Jeder Timeline-Eintrag braucht mindestens **1 Quelle**
- Unternehmens-Pressemitteilungen allein reichen nicht — es braucht mindestens eine journalistische oder unabhängige Gegenprüfung

---

## 4. Bias-Transparency-Konzept

### 4.1 Grundprinzip

AIStrikeMap nimmt keine redaktionelle Position ein. Das Radar macht sichtbar, **wer was sagt** — nicht, wer Recht hat. Nutzer sollen die Quellenlage selbst bewerten können.

### 4.2 Mechanismen

**a) Perspektive pro Quelle:**
Jede Quelle erhält ein `asm:perspective`-Tag:
- `neutral` — berichtet ohne erkennbare Wertung (typisch: Nachrichtenagenturen)
- `kritisch` — bewertet das Ereignis negativ (typisch: Investigativjournalismus, NGOs)
- `befürwortend` — bewertet das Ereignis positiv (typisch: Unternehmenskommunikation)
- `unklar` — Perspektive nicht eindeutig zuordenbar

**b) Visuelle Darstellung:**
- Quellen werden in der Situationskarte mit farbcodierten Perspektive-Badges angezeigt
- Nutzer können auf einen Blick sehen, ob alle Quellen in eine Richtung zeigen oder ob divergierende Einschätzungen existieren
- Farbschema: neutral = grau, kritisch = orange, befürwortend = blau, unklar = gestrichelt

**c) Quellen-Transparenz-Hinweis:**
Jede Situationskarte zeigt einen kompakten Transparenz-Hinweis:
> "Diese Situation wird aus X Quellen dargestellt. Perspektiven: Y kritisch, Z neutral, W befürwortend."

### 4.3 Was Bias-Transparency NICHT ist

- Keine "Balance" um der Balance willen (Falsche Äquivalenz vermeiden)
- Kein eigenes Rating der Glaubwürdigkeit — nur Transparenz über die Perspektive
- Keine Empfehlung, welcher Quelle zu vertrauen ist

---

## 5. UX/UI-Konzept

### 5.1 Navigation

Das Live-Radar wird als **eigenständiger Tab** in der Hauptnavigation integriert:

```
[AI StrikeMap]  Karte | Radar | Methodik | Transparenz | Impressum | Datenschutz  [+ Vorfall melden]  [DE|EN]
```

- "Karte" = bestehende Incident-Karte (Standard-Ansicht, wie bisher)
- "Radar" = Live-Radar (neue Ansicht)
- Beide teilen Header, Footer, Ticker und Styling

### 5.2 Radar-Hauptansicht

**Layout: Karten-Grid mit Status-Indikatoren**

```
┌──────────────────────────────────────────────────────┐
│  AI LIVE-RADAR          [Filter: Dimension ▼]  [Alle Status ▼]  │
├──────────────────────────────────────────────────────┤
│                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │ ● ESKALIEREND │  │ ○ AKTIV      │  │ ○ AKTIV      │  │
│  │               │  │               │  │               │  │
│  │ Anthropic     │  │ EU AI Act    │  │ Gaza AI      │  │
│  │ Mythos /      │  │ Umsetzungs-  │  │ Targeting    │  │
│  │ Pentagon      │  │ debatte      │  │ Kontroverse  │  │
│  │               │  │               │  │               │  │
│  │ ▫ Cyber       │  │ ▫ Regulierung│  │ ▫ Militär    │  │
│  │ ▫ Geopolitik  │  │ ▫ Wirtschaft │  │ ▫ Überwachung│  │
│  │ ▫ Militär     │  │              │  │ ▫ Geopolitik │  │
│  │               │  │               │  │               │  │
│  │ Akteure: 5    │  │ Akteure: 12  │  │ Akteure: 4   │  │
│  │ Quellen: 8    │  │ Quellen: 15  │  │ Quellen: 11  │  │
│  │ Seit: Mär 26  │  │ Seit: Jun 24 │  │ Seit: Okt 23 │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  │
│                                                      │
│  ┌─────────────┐  ┌─────────────┐                    │
│  │ ◌ DEESKAL.   │  │ ○ STABIL     │                    │
│  │ ...          │  │ ...          │                    │
│  └─────────────┘  └─────────────┘                    │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Sortierung:** Eskalierend zuerst, dann Aktiv, dann Stabil, dann Deeskalierend.

**Status-Indikatoren:**
- `●` Eskalierend = rot pulsierend
- `○` Aktiv = orange
- `◐` Stabil = gelb
- `◌` Deeskalierend = grün
- `◻` Abgeschlossen = grau (nur sichtbar mit Toggle, analog zu Retracted)

### 5.3 Situationskarten-Detailansicht

Klick auf eine Karte öffnet die Detailansicht (Slide-in von rechts, analog zum bestehenden Detail-Panel):

1. **Kopf:** Titel, Status-Badge, Severity-Badge, Seit-Datum
2. **Beschreibung:** Kurztext
3. **Dimensionen:** Tag-Cloud der betroffenen Dimensionen
4. **Akteure:** Liste mit Typ-Badges (wie bestehend)
5. **Entwicklungs-Timeline:** Chronologische Liste (neueste oben), jeder Eintrag mit Datum, Titel, Beschreibung, Quellen, Significance-Badge
6. **Quellen:** Liste mit Perspektive-Badges (neutral/kritisch/befürwortend)
7. **Bias-Transparency-Hinweis:** Aggregierte Perspektiven-Übersicht
8. **Karten-Link:** "Auf Karte anzeigen" — springt zur geographischen Position auf der Incident-Karte

### 5.4 Verknüpfung mit der Incident-Karte

- Situationskarten mit Geo-Koordinaten werden **nicht** auf der Incident-Karte als Marker angezeigt (klare Trennung: Karte = Vergangenes, Radar = Gegenwart)
- Stattdessen: Button "Auf Karte anzeigen" in der Detailansicht, der die Karte öffnet und zur Position zoomt
- Abgeschlossene Radar-Einträge, die als Incident überführt wurden, zeigen einen Link zum Incident

### 5.5 Mobile Darstellung

- Grid wird einspaltig
- Karten werden als vertikale Liste dargestellt
- Detailansicht als Bottom-Sheet (wie bestehend)
- Filter als Dropdown-Leiste über dem Grid

---

## 6. Machbarkeitsprüfung

### 6.1 Pflegeaufwand-Schätzung

| Aufgabe | Frequenz | Geschätzter Aufwand |
|---|---|---|
| Sonntags-Review (alle Karten durchgehen) | 1x/Woche | 30–60 min |
| Neue Situationskarte erstellen | nach Bedarf | 20–30 min pro Karte |
| Timeline-Eintrag hinzufügen | nach Bedarf | 10–15 min pro Eintrag |
| Quellen recherchieren und bewerten | laufend | im Review eingeschlossen |
| Bundle-Script ausführen | nach Änderungen | 1 min |

**Geschätzter Gesamtaufwand:** 1–2 Stunden pro Woche bei 3–5 aktiven Situationskarten.

### 6.2 Realismus-Bewertung

**Machbar als Solo-Betreiber, wenn:**
- MVP startet mit maximal 3 Situationskarten
- Nicht mehr als 5–7 gleichzeitig aktive Karten angestrebt werden
- Der Sonntags-Review als feste Routine etabliert wird
- Abgeschlossene Karten konsequent überführt und archiviert werden (sonst wächst die Pflege-Last)

**Risiken:**
- Nachrichtenflut bei mehreren eskalierenden Situationen gleichzeitig
- Qualitätsanspruch (Bias-Transparency, Mehrdimensionalität) erfordert Sorgfalt — kein "schnell noch reinwerfen"
- Burnout-Gefahr bei Dauerpflege ethisch belastender Themen

**Mitigationen:**
- Strikte Aufnahmekriterien (Abschnitt 1.1) verhindern unkontrolliertes Wachstum
- Feste Prüfintervalle statt Echtzeit-Monitoring
- Kein Anspruch auf Vollständigkeit — das Radar zeigt kuratierte Auswahl, nicht alle Ereignisse

### 6.3 Technischer Aufwand

| Komponente | Aufwand (Schätzung) | Komplexität |
|---|---|---|
| Radar-Seite (HTML + CSS) | 1 Tag | Niedrig — Grid-Layout, bestehende Designsprache |
| Radar-Daten-Loader (JS) | 0,5 Tag | Niedrig — analog zu bestehendem DataLoader |
| Radar-Detail-Panel (JS) | 1 Tag | Mittel — Timeline + Bias-Tags |
| Dimensions-Filter (JS) | 0,5 Tag | Niedrig — analog zu bestehendem Filter |
| Navigation erweitern | 0,5 Tag | Niedrig |
| Bundle-Script erweitern | 0,5 Tag | Niedrig |
| i18n-Strings | 0,5 Tag | Niedrig |
| Pilotdaten (3 Situationskarten) | 1 Tag | Mittel — Recherche |

**Gesamt: ca. 5–6 Tage Implementierung + Pilotdaten.**

---

## 7. MVP-Scoping

### 7.1 MVP-Umfang

| Komponente | MVP | Post-MVP |
|---|---|---|
| Situationskarten | 3 Pilotkarten | Unbegrenzt |
| Dimensionen | Alle 10 aus der Taxonomie | Erweiterbar |
| Status-Indikatoren | Alle 5 (eskalierend bis abgeschlossen) | - |
| Dimensions-Filter | Ja | - |
| Status-Filter | Ja | - |
| Detailansicht | Ja (Timeline + Quellen + Bias-Tags) | - |
| Überführung in Incident | Manuell (JSON kopieren/anpassen) | Halb-automatisiert |
| Kartenverknüpfung | "Auf Karte anzeigen"-Button | Dual-Layer (Radar-Marker auf Karte) |
| Permalink / Deep-Link | Ja (`?radar=slug`) | - |
| Mobile Responsive | Ja | - |
| Such-Funktion | Nein | Volltextsuche über Titel/Beschreibung |
| RSS-Feed | Nein | Radar-Updates als RSS |
| Benachrichtigungen | Nein | E-Mail bei Statusänderung |

### 7.2 Pilot-Situationskarten (Vorschlag)

1. **Anthropic Mythos / Pentagon-Konflikt** — Cybersicherheit, Geopolitik, Unternehmensethik, Regulierung, Militär (5 Dimensionen, 5+ Akteure — idealer Komplexitätstest)
2. **EU AI Act Umsetzung** — Regulierung, Wirtschaft, Bias/Diskriminierung (3 Dimensionen, viele Akteure — langfristig laufend, guter Test für "Stabil"-Status)
3. **KI-gestützte Überwachung im Gazastreifen** — Militär, Überwachung, Geopolitik (3 Dimensionen — ethisch hochrelevant, guter Test für Bias-Transparency)

### 7.3 Go/No-Go-Kriterien für MVP-Launch

- [ ] 3 Pilotkarten vollständig erstellt und mit Quellen belegt
- [ ] Radar-Seite funktional (Grid, Filter, Detail-Panel)
- [ ] Mobile-tauglich
- [ ] i18n DE + EN
- [ ] Sonntags-Review-Routine 2x testweise durchgeführt
- [ ] Bias-Transparency bei mindestens einer Karte mit divergierenden Quellen getestet

---

## Dimensions-Taxonomie (finalisiert für MVP)

| ID | Deutsch | English | Farbe (Vorschlag) |
|---|---|---|---|
| `cybersicherheit` | Cybersicherheit | Cybersecurity | #e74c3c |
| `regulierung` | Regulierung / Gesetzgebung | Regulation / Legislation | #3498db |
| `geopolitik` | Geopolitik / Int. Beziehungen | Geopolitics / Int. Relations | #9b59b6 |
| `militaer` | Militär / Autonome Waffen | Military / Autonomous Weapons | #c0392b |
| `ueberwachung` | Überwachung / Privacy | Surveillance / Privacy | #f39c12 |
| `unternehmensethik` | Unternehmensethik | Corporate Ethics | #1abc9c |
| `arbeitsmarkt` | Arbeitsmarkt / Wirtschaft | Labor Market / Economy | #2ecc71 |
| `diskriminierung` | Bias / Diskriminierung | Bias / Discrimination | #e67e22 |
| `umwelt` | Umwelt / Ressourcen | Environment / Resources | #27ae60 |
| `desinformation` | Desinformation | Disinformation | #8e44ad |

**Entscheidung:** Feste Liste für MVP. Erweiterbar post-MVP nach Bedarf. Gleiche Taxonomie wird NICHT für die Incident-Karte übernommen — die bestehenden `incidentType`-Kategorien bleiben dort. Eine Harmonisierung ist ein Post-MVP-Thema.

---

*Dokument erstellt: 2026-04-13*
*Autor: Claude (PM)*
*Freigabe: offen — Entscheidung durch Kommuniziere in*
*Dokumentstatus: Konzept zur Prüfung*
