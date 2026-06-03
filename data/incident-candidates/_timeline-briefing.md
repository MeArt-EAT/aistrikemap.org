# Reverse-Timeline-Briefing

Du baust für vorgegebene Incident-Files die **Reverse-Timeline** + die
**affectedRights**. Das ist AIStrikeMaps Kern-Feature: jeder Vorfall wird
nicht isoliert, sondern als Kausalkette gezeigt.

## Die 4 Phasen (Reverse-Logik: von der Vorbedingung zum Vorfall zur Folge)

1. **infrastructure** — Die technische/organisatorische Vor-Bedingung. Welches
   System, welche Plattform, welche Datenbasis, welche Lieferkette existierte,
   die den Vorfall erst ermoeglichte? (oft Jahre vorher)
2. **doctrine** — Die Politik/Entscheidung/Doktrin, die den Einsatz legitimierte
   oder anordnete. Gesetz, Militaerdoktrin, Geschaeftsmodell, behoerdliche
   Weisung.
3. **event** — Der eigentliche Vorfall (das, was der Incident dokumentiert).
4. **consequences** — Die Folgen: Tote/Geschaedigte, Klagen, Urteile,
   Ruecktritte, Gesetzesaenderungen, oeffentliche Reaktion.

Manche Faelle brauchen 4 Eintraege (1 pro Phase), manche 5-6 (z.B. 2
consequences). Mindestens 4, hoechstens 6.

## Exakte Feld-Struktur pro Eintrag

```json
{
  "date": "2023-04",
  "phase": "infrastructure|doctrine|event|consequences",
  "title": "<DE-Titel, = title_de>",
  "description": "<DE-Beschreibung, = description_de, 2-4 Saetze>",
  "title_de": "<DE-Titel>",
  "description_de": "<DE-Beschreibung>",
  "title_en": "<EN-Titel>",
  "description_en": "<EN-Beschreibung>",
  "sources": ["https://..."]
}
```

- `date`: "YYYY", "YYYY-MM" oder "YYYY-MM-DD". Reihenfolge chronologisch
  aufsteigend (infrastructure = aelteste, consequences = neueste).
- `title`/`description` MUESSEN gleich `title_de`/`description_de` sein
  (Legacy-Feld + DE-Feld parallel).
- `sources`: 0-2 URLs pro Eintrag (aus den bestehenden incident-sources oder
  via WebSearch gefunden). Keine AIAAIC-URLs.

## affectedRights (3 parallele Arrays)

```json
"asm:affectedRights":    ["Recht auf Leben", "Kinderrechte", ...],
"asm:affectedRights_de": ["Recht auf Leben", "Kinderrechte", ...],
"asm:affectedRights_en": ["Right to life", "Children's rights", ...]
```

3-6 betroffene Rechte. `affectedRights` = `affectedRights_de`. Nutze
etablierte Menschenrechts-Begriffe (Recht auf Leben, Privatsphaere,
Meinungsfreiheit, Versammlungsfreiheit, Schutz vor Diskriminierung,
Kinderrechte, koerperliche Unversehrtheit, faires Verfahren, Datenschutz,
Verbraucherschutz, Recht auf Gesundheit, Schutz vor Manipulation,
Bewegungsfreiheit, Wuerde des Menschen).

## Workflow pro Incident-File

1. Lies das File `data/incidents/<slug>.json` komplett. name_de/_en,
   description, sources, actors geben dir den Vorfall.
2. Recherchiere via WebSearch die VORGESCHICHTE (infrastructure + doctrine) —
   das steht meist NICHT im Incident selbst. Beispiel: Bei einem Gaza-
   Targeting-Fall recherchiere wann/wie das System aufgebaut wurde + welche
   Militaerdoktrin es einsetzte.
3. Baue 4-6 Timeline-Eintraege (chronologisch, Phase-getaggt).
4. Baue affectedRights (3 Arrays).
5. Setze `asm:reverseTimeline` und die 3 affectedRights-Arrays im File.
   ALLE anderen Felder UNVERAENDERT lassen. Schreibe das File zurueck.

## Hard rules

- ASCII-Quotes only (keine Smart-Quotes). Echte Umlaute ä/ö/ü/ß in DE.
- KEINE Fakten erfinden. infrastructure/doctrine muessen real recherchiert
  sein. Wenn du die Vorgeschichte nicht belegen kannst, halte den Eintrag
  knapp + faktisch statt zu spekulieren.
- title/description == title_de/description_de (Duplikat-Pflicht).
- Chronologie strikt aufsteigend.

## Sandbox

Read/Write/Edit/Grep/Glob/WebSearch. KEIN WebFetch/Bash/Git.

## Output

Kurzer Report: bearbeitete Slugs, je Anzahl TL-Eintraege, Auffaelligkeiten.
