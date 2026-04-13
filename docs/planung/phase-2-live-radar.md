# AIStrikeMap – Planungsinventar Erweiterung

## Neue Items: AI Live-Radar (Gegenwarts-Modul)

**Status: MVP IMPLEMENTIERT** – Konzeptphase abgeschlossen (siehe [konzept-live-radar.md](konzept-live-radar.md)), MVP mit 3 Pilotkarten live.

**Phasenzuordnung: Phase 2** (frühestens nach stabilem Phase-1-Launch)

**Kontext:**
AIStrikeMap entwickelt sich zu einem Drei-Zeitebenen-Modell:
- **Vergangenheit** → Incident-Karte (bestehend, Phase 1): Was ist passiert?
- **Gegenwart** → AI Live-Radar (dieses Modul): Was passiert gerade?
- **Zukunft** → AI Career Impact Dashboard (Items 94–99, siehe [phase-2-career-dashboard.md](phase-2-career-dashboard.md)): Was kommt auf uns zu?

---

### Item 100 – AI Live-Radar (Modulübersicht)

**Status:** Idee
**Priorität:** offen
**Abhängigkeiten:** Phase 1 abgeschlossen, Incident-Karte stabil

**Beschreibung:**
Eigenständiger Bereich innerhalb von AIStrikeMap (separater Tab/Sektion) für laufende, sich entfaltende KI-Ereignisse, die ethisch relevant sind, aber (noch) keinen abgeschlossenen Incident darstellen. Positioniert zwischen Nachrichtenticker und Monitoring-Dashboard – nicht bloße Headlines, sondern kuratierte, kontextualisierte Situationsbilder.

**Abgrenzung zur Incident-Karte:**
- Incident-Karte = abgeschlossene oder klar dokumentierte Vorfälle
- Live-Radar = laufende Entwicklungen mit offenem Ausgang

**Übergang:** Wenn ein Live-Radar-Eintrag abgeschlossen ist, kann er in einen Incident-Karteneintrag überführt werden (Lifecycle-Konzept).

**Auslösender Impuls:**
Anthropic hält Claude Mythos Preview wegen Cybersicherheits-Risiken zurück (April 2026) – gleichzeitig Pentagon-Konflikt, Project Glasswing, Regulierungsdebatte. Mehrere Dimensionen gleichzeitig aktiv, kein abgeschlossener Incident, aber hochrelevant.

**Offene Fragen (vor Konzeptphase zu klären):**
- Kuratierung: Wer entscheidet, was auf das Radar kommt? (Redaktionelle Kriterien?)
- Aktualisierung: Wie oft? Manuell oder (teil-)automatisiert?
- Quellenkonzept: Welche Quellen werden systematisch beobachtet?
- Bias-Transparency: Wie wird Framing verschiedener Quellen sichtbar gemacht?
- Abgrenzungskriterien: Wann ist etwas "laufend" vs. "abgeschlossen"?
- Skalierung: Als Solo-Betreiber realistisch pflegbar?

---

### Item 101 – Situationskarten (Einzeldarstellung)

**Status:** Idee
**Priorität:** offen
**Übergeordnet:** Item 100

**Beschreibung:**
Jedes laufende Ereignis wird als "Situationskarte" dargestellt. Eine Situationskarte bündelt alle relevanten Dimensionen eines sich entfaltenden Ereignisses. Mögliche Inhalte pro Karte:

- Titel + Kurzbeschreibung
- Status-Indikator (z.B. eskalierend / stabil / deeskalierend)
- Betroffene Dimensionen (Tags: Sicherheit, Regulierung, Geopolitik, Ethik, Arbeitsmarkt, Überwachung, Militär usw.)
- Zeitstrahl der Entwicklung (wann ist was passiert)
- Beteiligte Akteure (Unternehmen, Regierungen, Organisationen)
- Geographischer Bezug (Verknüpfung mit der Karte möglich)
- Quellensammlung mit Bias-Transparenz

**Pilotfall:**
Anthropic Mythos / Pentagon-Konflikt – Dimensionen: Cybersicherheit, Geopolitik, Unternehmensethik, Regulierung, Militär. Akteure: Anthropic, Pentagon, Project-Glasswing-Partner (Apple, Google, Microsoft, Cisco, Linux Foundation u.a.), US-Gerichte.

**Offene Fragen:**
- Datenmodell: Eigenes JSON-Schema oder Erweiterung des bestehenden Incident-Schemas?
- Darstellungsform: Karten-Grid, Timeline, oder beides?
- Granularität: Wie viel Kontext pro Situationskarte?

---

### Item 102 – Dimensions-Tagging und Filterung

**Status:** Idee
**Priorität:** offen
**Übergeordnet:** Item 100

**Beschreibung:**
Jedes Live-Radar-Ereignis wird mit Dimensions-Tags versehen. Nutzer können nach Dimensionen filtern (z.B. "zeige mir alles, was gerade im Bereich Regulierung läuft" oder "alle laufenden Militär/KI-Konflikte").

**Vorläufige Dimensions-Taxonomie (Entwurf):**
- Cybersicherheit
- Regulierung / Gesetzgebung
- Geopolitik / Internationale Beziehungen
- Militär / Autonome Waffen
- Überwachung / Privacy
- Unternehmensethik
- Arbeitsmarkt / Wirtschaft
- Bias / Diskriminierung
- Umwelt / Ressourcen
- Desinformation

**Offene Fragen:**
- Taxonomie: Feste Liste oder erweiterbar?
- Überschneidung: Gleiche Taxonomie für Incident-Karte und Live-Radar?
- Mehrfach-Tagging: Ein Ereignis kann mehrere Dimensionen haben (Mythos-Fall = mindestens 4)

---

### Item 103 – Konzeptphase Live-Radar

**Status:** Konzept ausgearbeitet (siehe [konzept-live-radar.md](konzept-live-radar.md))
**Priorität:** offen
**Blocker für:** Items 100–102

**Beschreibung:**
Bevor die Umsetzung der Items 100–102 beginnen kann, ist eine vollständige Konzeptphase erforderlich:

1. **Redaktionelles Konzept:** Aufnahmekriterien, Aktualisierungsrhythmus, Lifecycle (laufend → abgeschlossen → Incident)
2. **Datenmodell:** Schema-Design, Kompatibilität mit bestehendem Incident-Schema
3. **Quellenkonzept:** Systematische Quellenbeobachtung, Bewertungskriterien
4. **Bias-Transparency-Konzept:** Wie werden unterschiedliche Framings sichtbar?
5. **UX/UI-Konzept:** Darstellung, Navigation, Verknüpfung mit Karte und Career Dashboard
6. **Machbarkeitsprüfung:** Pflegeaufwand für Solo-Betreiber realistisch?
7. **MVP-Scoping:** Minimaler Umfang für erste Version (Anzahl Situationskarten, Dimensionen)

---

*Dokument erstellt: 2026-04-09*
*Autor: Claude (PM)*
*Freigabe: Kommuniziere in*
*Dokumentstatus: Ideensammlung – keine Umsetzungsfreigabe*
