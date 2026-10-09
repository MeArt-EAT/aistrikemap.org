# Briefing: Timelines nach dem Merge mit main reparieren (AIStrikeMap)

Repo: /home/user/aistrikemap.org. Jedes Incident ist data/incidents/<slug>.json.
Der Branch wurde gerade mit `main` zusammengeführt. Auf `main` gilt seit
2026-10-09 das Phasen-Modell **Schema v1.1**; die Regeln stehen in
`data/incident-candidates/_timeline-briefing.md`, Abschnitt "Phasen-Modell".
Lies diesen Abschnitt zuerst. Kurzfassung, was der Validator als ERROR meldet:

- Es fehlt eine der vier Phasen: infrastructure, doctrine, event oder consequences
  (jede muss mindestens einmal vorkommen).
- Verschränkung: Nach dem ersten event darf kein infrastructure/doctrine mehr
  kommen, nach dem ersten consequences kein event mehr.
- Die Chronologie ist nicht strikt aufsteigend, oder es gibt weniger als 4 bzw.
  mehr als 6 Einträge.

Deine Arbeitsliste (JSON) nennt pro Incident die Aufgabe:

## Aufgabe "phase": Validator-ERRORs der Phasen beheben

Die Timeline ist inhaltlich geprüft und belegt, verletzt aber das Phasen-Modell.
Lies alle Einträge und ihre Quellen. Vorgehen, in dieser Reihenfolge:

1. **Umtaggen**, wenn der Inhalt eines Eintrags die andere Phase wirklich
   beschreibt:
   - doctrine = Gesetz, Verordnung, behördliche Weisung, Militärdoktrin,
     Geschäftsmodell oder Unternehmensentscheidung, die den Einsatz VOR dem
     Vorfall legitimierte oder anordnete. Ein Vorläufer-Ereignis, das den
     eigentlichen Vorfall nur ermöglicht hat, ist doctrine oder infrastructure.
   - event = der dokumentierte Vorfall selbst (auch mehrstufig, höchstens 3).
   - consequences = alles, was danach als Reaktion kommt (Urteil, Bericht,
     Gesetz als Reaktion, Debatte), auch wenn es ein Gesetz ist.
   Ändere dann nur `phase`. Titel und Text bleiben.
2. **Fehlt die doctrine (oder infrastructure) wirklich**, recherchiere sie mit
   WebSearch: die Rechtsgrundlage, Weisung, Beschaffungsentscheidung oder das
   Geschäftsmodell, auf dem der Einsatz beruhte, datiert VOR dem ersten event.
   Füge einen neuen Eintrag mit genau der Feldstruktur der anderen Einträge
   ein (date, phase, title, description, title_de, description_de, title_en,
   description_en, sources) und 1-2 Quellen, die in deinen Suchergebnissen
   erschienen sind und den Eintrag tragen. Sortiere chronologisch ein.
   Sind schon 6 Einträge da, fasse zwei benachbarte consequences-Einträge zu
   einem zusammen (Text und Quellen vereinen, höchstens 2 Quellen), statt
   etwas Belegtes wegzuwerfen.
3. **Verschränkung** (event nach consequences, doctrine nach event): prüfe, ob
   der Eintrag Teil des Vorfalls (event), eine Reaktion (consequences) oder eine
   echte ältere Vorbedingung ist, und tagge ihn entsprechend um. Wenn eine
   Doktrin erst nach dem ersten event datiert, war sie nicht die Vorbedingung:
   als consequences (Reaktion) taggen und, falls dann die doctrine fehlt, nach
   Schritt 2 die ältere Rechtsgrundlage recherchieren.

## Aufgabe "source": unbelegte Einträge belegen

Die genannten Einträge haben keine Quelle (`sources` leer oder fehlt).

1. Prüfe zuerst die Top-Level-`asm:sources` des Files: Trägt eine davon den
   Eintrag, nimm deren URL.
2. Sonst suche mit WebSearch 1-2 Quellen, die den Eintrag stützen.
3. Trägt die Quelle nur einen Teil, formuliere minimal um (description,
   description_de, description_en parallel; title === title_de,
   description === description_de) und streiche das Unbelegte.
4. Lässt sich ein Eintrag gar nicht belegen: auf das Belegbare umschreiben. Nur
   wenn er inhaltlich überflüssig ist, entfernen, und nur, wenn danach noch
   mindestens 4 Einträge und alle vier Phasen da sind.

### Zusatz "checkPortedEntries"

Diese Einträge haben ihre Quellen beim Merge automatisch aus der Branch-Fassung
desselben Eintrags erhalten (Zuordnung über Datum und Textähnlichkeit, nicht
geprüft). Prüfe, ob jede Quelle den Eintrag in seiner jetzigen Fassung trägt.
Wenn nicht: wie oben eine passende Quelle suchen oder minimal umformulieren.

## Regeln für beide Aufgaben

- Nur URLs, die in deinen WebSearch-Ergebnissen erschienen sind (WebFetch ist
  meist gesperrt; Snippets reichen als Beleg). Nie URLs raten oder bauen, keine
  nackten Startseiten, keine AIAAIC-URLs. Jeder Eintrag hat am Ende 1-2 Quellen.
- Nichts erfinden. Ändere nichts außerhalb von `asm:reverseTimeline` (kein
  name, description, location, Koordinaten, incidentType, actors, @id), außer
  eine neue Top-Level-Quelle ist nötig: dann ein Objekt im Format der übrigen
  `asm:sources` mit "asm:linkHealth": "unverified" anhängen.
- Deutsch mit echten Umlauten; nur ASCII-Satzzeichen (kein Em-/En-Dash, keine
  typografischen Anführungszeichen); Buchstaben in URLs nie anfassen.
- Bearbeite auf Textebene (Edit-Tool). Keine git-Schreibbefehle. Führe
  scripts/audit-bilingual-incidents.js NICHT aus. Fasse nur die Files deiner
  Arbeitsliste an; andere Agenten arbeiten parallel an anderen Files.
- Danach: `node scripts/validate-timelines.js <slug>` -> 0 ERRORs.
- Hilfsdateien nur in einem eigenen neuen Ordner unter
  /tmp/claude-0/-home-user-aistrikemap-org/422c5be0-b13c-5b95-97a6-814f10bcbcec/scratchpad/agent-<gruppe>-<zufall>/

## Report (Klartext)

Pro Incident: was du geändert hast (umgetaggt [i] alt->neu mit Begründung /
neuer Eintrag mit Datum, Phase, Quelle / Quelle ergänzt / umformuliert /
entfernt), und alles, was du nicht lösen konntest, als UNRESOLVED.
