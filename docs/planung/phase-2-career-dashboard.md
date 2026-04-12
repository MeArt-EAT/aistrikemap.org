# AIStrikeMap – Planungsinventar Erweiterung

## Neue Items: AI Career Impact Dashboard

**Status: IDEE** – Konzeptionelle Vorüberlegung, noch nicht spezifiziert. Vor Umsetzung ist eine vollständige Konzeptphase erforderlich (Quellenrecherche, Darstellungskonzept, Datenmodell, UX-Design).

**Phasenzuordnung: Phase 2** (frühestens nach stabilem Phase-1-Launch)

**Einordnung im Drei-Zeitebenen-Modell:**
- **Vergangenheit** → Incident-Karte (Phase 1)
- **Gegenwart** → AI Live-Radar, Items 100–103 (siehe [phase-2-live-radar.md](phase-2-live-radar.md))
- **Zukunft** → AI Career Impact Dashboard (dieses Dokument, Items 94–99)

---

### Item 94 – AI Career Impact Dashboard (Modulübersicht)

**Status:** Idee
**Priorität:** offen
**Abhängigkeiten:** Phase 1 abgeschlossen, Karteninfrastruktur stabil

**Beschreibung:**
Eigenständiger Bereich innerhalb von AIStrikeMap (separater Tab/Sektion neben der Incident-Karte), der die Auswirkungen von KI auf Arbeitsmärkte und Berufsfelder visualisiert. Zielgruppe: Schüler, Studierende, Berufswechsler, Berufsberater, Gewerkschaften, Bildungspolitiker.

Das Modul besteht aus drei Komponenten (Items 95–97) und einem globalen Element (Item 98).

**Offene Fragen (vor Konzeptphase zu klären):**
- Welche Datenquellen? (z.B. WEF Future of Jobs Report, OECD Employment Outlook, McKinsey Global Institute, ILO, nationale Arbeitsmarktdaten)
- Eigener Score vs. Aggregation bestehender Indizes?
- Wie wird Bias-Transparency in diesem Kontext umgesetzt? (Quellen divergieren stark)
- Rechtliche Aspekte: Haftungsausschluss bei Berufsempfehlungen?
- Abgrenzung zu bestehenden Tools (z.B. "Will Robots Take My Job")

---

### Item 95 – Berufe-Explorer

**Status:** Idee
**Priorität:** offen
**Übergeordnet:** Item 94

**Beschreibung:**
Durchsuchbare und filterbare Übersicht von Berufsfeldern (z.B. Pflege, Softwareentwicklung, Buchhaltung, Logistik, Kreativberufe). Pro Beruf: Einschätzung der KI-Exposition basierend auf publizierten Studien.

**Offene Fragen:**
- Taxonomie: Welche Berufsklassifikation? (ISCO-08, nationale Klassifikationen, eigene Kategorien?)
- Granularität: Berufsfelder vs. Einzelberufe?
- Minimaler Umfang für MVP: wie viele Berufsfelder zum Start?

---

### Item 96 – Berufsbewertungs-Chart (Börsen-Analogie)

**Status:** Idee
**Priorität:** offen
**Übergeordnet:** Item 94

**Beschreibung:**
Zeitverlaufs-Chart im Stil von Börsenkursen. Statt Aktienkurs wird ein "KI-Zukunftsfähigkeits-Index" oder "AI Disruption Score" pro Beruf dargestellt. X-Achse = Zeit, Y-Achse = Score. Nutzer können mehrere Berufe übereinanderlegen und vergleichen, analog zu Aktienvergleichen.

**Technische Vorüberlegung:**
- Chart.js oder D3.js über CDN (passt in bestehenden Stack: pure HTML/CSS/JS, kein npm)
- Kein Echtzeit-Feed nötig – Daten werden periodisch aktualisiert

**Offene Fragen:**
- Score-Methodik: Was genau wird gemessen? (Automatisierungswahrscheinlichkeit, Nachfrageentwicklung, Gehaltsveränderung, Kombi-Index?)
- Zeitachse: Historische Daten + Prognose? Nur Prognose?
- Wie werden unterschiedliche Quellen-Einschätzungen dargestellt? (Bandbreiten statt Einzelwerte → Bias-Transparency)

---

### Item 97 – Länderspezifische Ansicht

**Status:** Idee
**Priorität:** offen
**Übergeordnet:** Item 94

**Beschreibung:**
Gleicher Beruf, verschiedene Länder – länderspezifische Unterschiede sichtbar machen. Beispiel: Pflegekraft in Japan (hohe Robotik-Affinität, starke Überalterung) vs. Pflegekraft in Nigeria (andere Rahmenbedingungen). Darstellung als Choropleth-Layer auf der Leaflet-Karte (Länder nach Intensität eingefärbt) oder als Vergleichsansicht.

**Technische Vorüberlegung:**
- GeoJSON-Ländergrenzen + Leaflet Choropleth (bewährtes Pattern, CDN-kompatibel)
- Interaktion: Land anklicken → Berufsfeld auswählen → lokale Situation anzeigen

**Offene Fragen:**
- Datenverfügbarkeit: Für wie viele Länder existieren vergleichbare Daten?
- Minimaler Umfang für MVP: wie viele Länder zum Start?
- Normalisierung: Wie werden unterschiedliche nationale Erhebungsmethoden vergleichbar gemacht?

---

### Item 98 – AI Labor Impact Ticker (Globaler Zähler)

**Status:** Idee
**Priorität:** offen
**Kann unabhängig von Items 95–97 umgesetzt werden**

**Beschreibung:**
Globaler Live-Ticker im Stil von Worldometers.info: "Seit Sie diese Seite geöffnet haben, wurden weltweit ca. X Arbeitsplätze durch KI verdrängt und Y neue geschaffen." Basierend auf Jahresprognosen aus publizierten Reports, heruntergebrochen auf Sekunden/Minuten. Quellenangabe direkt am Ticker sichtbar.

**Technische Vorüberlegung:**
- Reine Frontend-Berechnung (JavaScript-Timer auf Basis von Jahreswerten)
- Kein Backend nötig
- Könnte als Banner auf der Hauptkarte oder im Career Dashboard platziert werden

**Offene Fragen:**
- Welche Reports als Datenbasis? (WEF, McKinsey, ILO – Zahlen weichen stark voneinander ab)
- Bandbreite anzeigen statt Einzelzahl? (z.B. "zwischen X und Y" → Bias-Transparency)
- Aktualisierungsrhythmus: Jährlich bei neuen Report-Veröffentlichungen?

---

### Item 99 – Konzeptphase Career Dashboard

**Status:** Idee → wird zu "offen" wenn Phase 2 beginnt
**Priorität:** offen
**Blocker für:** Items 94–98

**Beschreibung:**
Bevor die Umsetzung der Items 94–98 beginnen kann, ist eine vollständige Konzeptphase erforderlich. Diese umfasst:

1. **Datenquellen-Recherche:** Welche öffentlich verfügbaren Datensätze eignen sich? Lizenzierung prüfen.
2. **Score-Methodik:** Eigenen Index definieren oder bestehende aggregieren? Peer-Review-Prozess?
3. **UX/UI-Konzept:** Wireframes, Nutzerführung, mobile Darstellung
4. **Bias-Transparency-Konzept:** Wie werden divergierende Quellen transparent gemacht?
5. **Rechtliche Prüfung:** Haftungsausschluss, Quellenattribution, Datenlizenzen
6. **MVP-Scoping:** Minimaler Umfang für erste Version (Anzahl Berufe, Länder, Zeitraum)

---

*Dokument erstellt: 2026-04-07*
*Autor: Claude (PM)*
*Freigabe: Kommuniziere in*
*Dokumentstatus: Ideensammlung – keine Umsetzungsfreigabe*
