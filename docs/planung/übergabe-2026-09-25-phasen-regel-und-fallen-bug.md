# Übergabe #13 — Kausale Phasen-Regel, Validator korpusweit 0, „fallen"-Bug im Umlaut-Fixer

**Datum:** 2026-09-25
**Vorgänger:** #12 (2026-08-07, Smart-Char-Sweep + Validator-Vollscan)
**Branch:** `claude/stoic-ride-lt1b0j` (Cloud-Session). **Noch nicht auf `main`**,
Deploy erst nach Merge.
**Commits:** `707d2c5` (Validator-Regel) · `674e584` (Briefing) · `dd359ca`
(fallen-Bug) · `05a14bc` (69 TL-Korrekturen)

---

## Ausgangslage

STATUS.md nannte als offene Entscheidung: **Phasen-Regel lockern oder 134
Files umbauen?** Der Validator-Vollscan stand bei 150 Files / 152 ERRORs,
davon 134× „genau 1 event-Phase erwartet". Empfehlung aus #12: Regel lockern.
Der Projekteigner gab mit „arbeite im Projekt weiter" grünes Licht für die
Empfehlung.

## Was sich bei der Prüfung als anders herausstellte

Die Regel einfach zu lockern (mehrere `event` erlauben) hätte eine zweite
Lücke offen gelassen: **Der Validator prüfte die Phasen-Reihenfolge nie.**
Eine Analyse aller 2457 Phasen-Sequenzen zeigte 68 Timelines mit kausal
unmöglicher Abfolge, die den alten Validator trotzdem bestanden, weil sie
zufällig genau 1 `event` hatten. Häufigstes Muster: `I-E-D-C` (36×), also
eine „Doktrin", die erst **nach** dem Vorfall kommt, den sie ermöglicht
haben soll.

Stichprobe dieser Doktrinen: „UN-Bericht dokumentiert den Vorfall",
„Garante stellt DSGVO-Verstöße fest", „Wiederzulassung nach Auflagen",
„Akademische Debatte über Fairness-Definitionen". Das sind Folgen, keine
Doktrinen. Also echte Fehletiketten, keine Schema-Artefakte.

---

## 1. Neue Phasen-Regel (Commit `707d2c5`)

`checkPhaseOrder()` in `scripts/validate-timelines.js` ersetzt „genau 1 event":

- **mindestens 1 `event`**, mehrere erlaubt (mehrstufiger Vorfall)
- **vor dem ersten `event`** nur `infrastructure`/`doctrine`
- **nach dem letzten `event`** nur `consequences`
- **dazwischen** alles erlaubt (z.B. Doktrin, die erst Stufe 2 ermöglichte)
- `infrastructure` und `doctrine` bilden **einen** Vorbedingungs-Block ohne
  feste Reihenfolge untereinander. Ist das Gesetz älter als das System,
  steht die Doktrin zuerst. Es gilt allein die Chronologie.

Chronologie bleibt strikt aufsteigend über die ganze Timeline. Die Regel steht
auch im Agenten-Briefing (`data/incident-candidates/_timeline-briefing.md`,
Abschnitt „Phasen-Reihenfolge").

**Wirkung:** 152 → 80 ERRORs sofort. Die 117 korrekt abgebildeten
mehrstufigen Vorfälle sind grün. Dafür wurden 54 neue, echte Fehler sichtbar.

**Frontend unberührt:** `detail-panel.js` rendert die Einträge in
Array-Reihenfolge mit Phasen-Label. Mehrere `event` hintereinander sind kein
Problem (im Browser geprüft: Myanmar zeigt `EVENT 2021-06 → EVENT 2022-03`).

## 2. Datenkorrektur: 76 Files → 0 ERRORs

**7 mechanisch** (im selben Commit): Timelines mit älterer Doktrin hinter
jüngerer Infrastruktur (Maschinenrichtlinie 2006, OSHA 1989, japanisches
Obszönitätsrecht 1907 …) in chronologische Reihenfolge getauscht. Das ist
nach der neuen Block-Regel korrekt, der Inhalt blieb unverändert.

**69 per Workflow** (Commit `05a14bc`): 18 Fix-Agenten zu je 4 Files, danach
je ein **unabhängiger adversarialer Prüfer**, der per `git diff` gegen HEAD
jede Änderung zu widerlegen versuchte. Bei Widerspruch folgte Reparatur plus
frische Nachprüfung. 38 Agenten, ~39 Min, 0 Ausfälle, WebSearch durchgehend
verfügbar.

| Ergebnis | n |
|---|---|
| im ersten Anlauf bestätigt | 68 |
| bestätigt nach Reparatur (Kambodscha: UNODC→OHCHR, 2022-08→2023-08) | 1 |
| needs-human | 0 |
| rule_conflict (Regel nicht erfüllbar ohne Fakten zu verbiegen) | 0 |

Art der Änderung (per Skript gegen HEAD geprüft):

| Art | n |
|---|---|
| nur Phasen-Etikett | 49 |
| Reihenfolge + Etikett | 7 |
| inhaltlich (Datum/Text/Einträge) | 13 |
| Felder außerhalb `asm:reverseTimeline` verändert | **0** |

Die 13 inhaltlichen Änderungen sind alle per WebSearch belegt, u.a.:
KOSA-Senatsvotum `2023-07 "91 zu 5"` → `2024-07-30 "91 zu 3"`; das 6-Mio-
FCC-Bußgeld im Biden-Robocall-Fall saß im Februar-Eintrag, gehört aber in
den Mai (Vorschlag am Tag der Anklage); 3 Files von 7 auf 6 Einträge
(verwandte `consequences` zusammengelegt, Quellen erhalten); Schweden von 3
auf 4 Einträge (Tieto-Projekt „Framtidens klassrum" 2018, belegt).

**Endstand:** Validator **2457/2457 ohne ERROR** (437 WARNs, fast alle
„gleiches Datum, akzeptabel wenn real"). Audit 0. 0 Smart-Chars.

## 3. Bonus-Fund: Umlaut-Fixer zerstörte „fallen" (Commit `dd359ca`)

Die Hygiene-Kette nach dem Workflow hat eine Agenten-Korrektur **rückgängig
gemacht**: Der Myanmar-Agent hatte „unter Kontrolle der Junta fällen" zu
„fallen" korrigiert, `fix-umlaut-transliterations.js` machte daraus wieder
„fällen".

**Ursache:** Die fest eingebaute FIX_MAP enthielt `'falle' → 'fälle'` und
`'fallen' → 'fällen'`, gedacht als Umlaut-lose Transliteration. Beides sind
aber **echte deutsche Wörter** (Falle, fallen). Das Audit führte dieselben
Wörter als Transliteration und hätte korrekte Schreibung als Fehler gemeldet.
Jeder Hygiene-Lauf hat so korrektes Deutsch zerstört, auch in sichtbaren
Titeln:

- „Afghanistan: US-Biometriedatenbanken **fällen** nach Taliban-Machtübernahme"
- „Yoons Zustimmungswerte **fällen** auf 19 %"
- „Olympics Has **Fällen**" (englischer Filmtitel im DE-Feld)

**Behoben:** `falle`/`fallen` aus Fixer und Audit entfernt, nur die
eindeutige ae-Schreibung (`faelle`/`faellen`) bleibt. 49 klein geschriebene
„fällen/fälle" im Kontext geprüft: **alle 49 falsch**, keines meint „ein
Urteil fällen" oder „Bäume fällen". Dazu 7× „Olympics Has Fällen" und 1×
„dauerndes Fällen" (Roboter). Groß geschriebenes „Fälle/Fällen" (Plural von
Fall) stichprobenartig nach Kontext geprüft und korrekt. **114 Ersetzungen
in 43 Files**, nur Anzeige-Textfelder. Fixer ist danach idempotent (0
Ersetzungen).

> ⚠️ **Weitere Echtwort-Kollisionen in der FIX_MAP (nicht behoben, selten):**
> `verhangen` (verhangener Himmel), `gestutzt*` (stutzen), `wahrend`
> (Partizip von wahren), `lander` (Mars-Lander), `manner`, `lucke`
> (Nachname). Im Korpus kaum relevant, aber bei einem künftigen
> Translit-Refactoring rauswerfen. **Faustregel: Umlaut-lose Schlüssel ohne
> ae/oe/ue nur aufnehmen, wenn sie kein echtes Wort sind.**

## 4. Browsertest in der Cloud-Umgebung

`unpkg.com` ist in dieser Cloud-Umgebung per Netzwerk-Richtlinie gesperrt,
die Karte lädt dort ohne Leaflet nicht („L is not defined"). `registry.npmjs.org`
ist erlaubt. **Workaround für Tests:** Leaflet 1.9.4 + markercluster 1.5.3 als
npm-Tarball holen und die unpkg-URLs per Playwright `page.route()` auf die
lokalen Kopien umleiten. Das Projekt selbst bleibt unverändert. Playwright
liegt global unter `/opt/node22/lib/node_modules/playwright`. Alternativ
`unpkg.com` in den Environment-Einstellungen freigeben.

Geprüft: Biden, Schweden, Myanmar, Afghanistan. Detail-Panel öffnet über
Permalink (volle `@id`-URL, siehe #12), Timeline rendert mit neuen Phasen,
0 JS-Fehler, 0 HTTP-Fehler, DE-Titel zeigt „fallen".

---

## Nächste Schritte (Prio-Reihenfolge)

1. **Vorbestehende Faktenbefunde aus der Verify-Stufe (12 Files).** Die Prüfer
   haben Mängel notiert, die nicht zum Auftrag gehörten. Meist sind es frühe,
   handgeschriebene Seed-Incidents mit leeren `sources`-Arrays und
   Unschärfen:
   - `schweden-ki-schule-gesichtserkennung`: event-Datum `2019-01` ist nur die
     Tieto-Pressemitteilung, der Test lief laut IMY im Herbst 2018
   - `algerien-internet-shutdown-proteste`: Eintrag `2020-06` beschreibt das
     Referendum vom 1.11.2020, Social-Media-Sperre dort nicht belegt
   - `chile-ki-verfassungsprozess`: „erstes Neurorechte-Gesetz" falsch datiert
     (Verfassungsänderung Okt. 2021)
   - `griechenland-predpol-gefluechtete-evros`: CENTAUR-Beschreibung laut
     AlgorithmWatch ungenau
   - `frankreich-algorithme-parcoursup`: Veröffentlichungspflicht kam aus
     der QPC-Entscheidung April 2020, nicht aus einer „Ordonnance"
   - `afghanistan-…`: Grammatik („keine Evakuierungsprotokoll", „der
     Afghanen Regierung")
   - `brasilien-ki-strafverfolgung`, `kolumbien-ki-protest-ueberwachung`,
     `algerien-…`: Eintrag [0] als `infrastructure` etikettiert, beschreibt
     aber schon den Vorfall
   - `eu-iborderctrl-…`: EuG-Urteil 2021 als `doctrine` statt `consequences`
   - `brasilien-schulische-deepfake-wellen-…`: „85 Mädchen" stammt aus einem
     HRW-Bericht über andere Bundesstaaten
   - `argentinien-…` u.a.: TL-Einträge ohne Quellen

   Methode: derselbe Fix-/Verify-Workflow, eine Welle. Details im
   Workflow-Journal der Session bzw. im Commit `05a14bc`.
2. **Career-Daten via Dataset-Download** (Layer A fehlt).
3. **AIAAIC Batch D** (pre-2015, ~300 Stubs).
4. **needs-review-Cases sichten** (~180, 20–30 Promotes).
5. **Slug-Migration** der 5 inhaltlich abweichenden Permalinks (optional).

## Konventionen (ergänzt)

- **Validator-Gate korpusweit, nicht nur pro Welle:** `ls data/incidents/*.json
  | sed 's#.*/##; s#\.json$##' | node scripts/validate-timelines.js --stdin`
  muss 0 ERRORs melden. Seit dieser Session ist das der Normalzustand.
- **Hygiene-Kette nach Agenten-Edits immer mit Diff-Kontrolle:** Der Fixer
  kann Agenten-Korrekturen still zurückdrehen. Nach `fix-umlaut` einen Blick
  auf „Per file" werfen und bei Treffern in frisch korrigierten Files den
  Kontext prüfen.
- Rest unverändert (siehe #12).

---

## Nachtrag (gleiche Session): 11 Seed-Incidents faktengeprüft (Commit `5367c4e`)

Schritt 1 der Liste oben ist erledigt. Mali war durch den fallen-Fix schon
behoben, blieben 11 Files. Ablauf: 3 Korrektur-Agenten (Timelines), 1 Agent
für Top-Level-Felder, die den korrigierten Timelines widersprachen, 3
unabhängige adversariale Prüfer, 1 Nachbesserungsrunde. WebFetch war für
die meisten Primärquellen durch den Proxy gesperrt, Belege daher über
WebSearch-Snippets.

**Befund: In allen 11 Files steckten echte Faktenfehler**, nicht nur fehlende
Quellen. Beispiele: Schweden-Test lief Q4 2018 (nicht 2019-01, `startDate`
angepasst) und war Schwedens erste DSGVO-Strafe, nicht die erste weltweit;
CENTAUR ist das Lager-Überwachungssystem der Ägäis-Inseln, kein
EU-Grenzroboter; die „464 % Deepfake-Zuwachs in Brasilien" sind eine
globale Zahl; die „42 Festnahmen" in Salvador gehören zum Karneval 2020;
„Hitlergruß-Pose" und „Sowjet-Uniform" (Argentinien) stehen in keiner
Quelle; Frankreichs APB nutzte Losverfahren, keine transparente Rangliste.

Geändert wurden nur Timelines, die Hauptbeschreibungen (DE/EN parallel),
`asm:actors` (Chile, Griechenland), `asm:sources` (Frankreich,
Griechenland) und ein `startDate`. Jeder TL-Eintrag dieser Files hat jetzt
mindestens eine Quelle (ein Algerien-Eintrag hat 4, weil jede eine andere
Aussage belegt; das Briefing empfiehlt max. 2, der Validator erzwingt es
nicht).

### Neue Front: quellenlose Timelines

Korpusweit haben **943 von 10.923 TL-Einträgen (8,6 %) keine Quelle**,
verteilt auf 425 Files; **89 Files haben überhaupt keine TL-Quelle**
(nach Severity der Files mit Lücken: Sev-5 57, Sev-4 151, Sev-3 166,
Sev-2 46, Sev-1 5). Nach der 11-von-11-Erfahrung ist das die
wahrscheinlichste Fundstelle für weitere Faktenfehler. Empfohlene
Reihenfolge: die 89 komplett quellenlosen zuerst, darin Sev-5/4 zuerst.
Methode wie oben. Liste erzeugen:

```
node -e 'const fs=require("fs");for(const f of fs.readdirSync("data/incidents")){if(!f.endsWith(".json"))continue;const j=JSON.parse(fs.readFileSync("data/incidents/"+f,"utf8"));const tl=j["asm:reverseTimeline"]||[];if(tl.length&&tl.every(e=>!e.sources||!e.sources.length))console.log(j["asm:severity"]+" "+f.replace(".json",""))}' | sort -r
```

Randnotizen der Prüfer (nicht bearbeitet): Slug `griechenland-predpol-…`
passt inhaltlich nicht mehr (kein Predictive Policing), bleibt aus
Permalink-Gründen. Chile-Name spricht noch von „KI-Überwachung der
Mapuche", die Timeline beschreibt konventionelle Geheimdienstüberwachung.

---

## Nachtrag 2 (2026-09-26): Quellen-Offensive komplett - 89 -> 0 quellenlose Timelines

Freigabe Projekteigner: "alles fertig machen" (inkl. der empfohlenen
redaktionellen Entscheidungen).

**Methode ab Welle 3 (Budget-schonend):** Fix-Agenten mit Sonnet (3-4 Files
je Agent, Briefing als Datei `fix-briefing.md`), danach Prüfer mit dem
stärkeren Modell, die **direkt korrigieren** (`verify-briefing.md`) statt
lange Berichte zu liefern. Commit je geprüftem Paket per Hilfsskript
(Validator, Umlaut-Fixer, Audit, Smart-Char-Gate, nur explizit benannte
Files). Die Prüfstufe blieb unverzichtbar: Sie fand in fast jedem
Sonnet-Paket weitere Fehler (falsche Daten, Quellen die die Aussage nicht
stützen, erfundene URLs).

**Ergebnis:** alle 89 Timelines belegt und faktengeprüft; in praktisch jedem
File echte Fehler. Besonders schwer: kolumbien-ki-migration-profiling und
spanien-ki-arbeitsmarkt-algorithmus (Kernbehauptung unbelegt, Fall um die
belegten Fakten neu aufgebaut), emirate-tosca ('TOSCA' existiert nicht),
aethiopien (erfundener Amnesty-Bericht), waymo-cruise (alle 4 Hauptquellen
mit falschen Titeln/Herausgebern). Recht aktuelle Behauptungen wurden gezielt
gegengeprüft, u.a. AP-Bußgeld gegen Uber 825 Mio. EUR (21.08.2026).

**Redaktionell (Titel mit asm:metadata.asm:correctionNote, Slug unverändert):**
pakistan-blasphemie, irak-zello, belarus, china-hui, china-kirchen, unesco,
daenemark-kinderschutz, indien (Deepfake -> Cheapfake), sambia (2024 -> 2025),
usa-racial-bias-healthcare, kolumbien, neuseeland, schweden-reva,
suedafrika, spanien-arbeitsmarkt, peru, usa-facial-recognition-flughaefen u.a.
Dubletten zusammengelegt (merge-internal-duplicates.js): 3x Dänemark-Amnesty,
2x Kenia-Meta-Moderatoren, 2x Ukraine-Clearview -> **2457 -> 2453**.
Nebenfelder (asm:actors, incidentType, Ort) von 7 Files an die geprüften
Fakten angepasst.

**Zwei weitere Werkzeug-Bugs (behoben):**
1. `lander -> länder` im Umlaut-Fixer verfälschte den Eigennamen Brad Lander.
2. **Der Fixer zerstörte URLs:** Die Quellen-Arrays der Timelines sind reine
   Strings ohne `url`-Key und fielen durch den Feldnamen-Schutz. 31 Links
   waren kaputt (lto.de/.../hintergründe, grüne-fraktion-bayern.de,
   überpubpolicy.medium.com …). Fix: Strings mit `http(s)://` werden nie
   angefasst; Validator meldet Umlaute in Quellen-URLs als ERROR; alle 31
   repariert.

**Panne dieser Session (transparent):** Commit 97e1304 (Kenia-Dublette) nahm
per `git add -A data` 13 noch ungeprüfte Zwischenstände mit. Nicht
umgeschrieben (laufende Agenten), stattdessen durch geprüfte Folge-Commits
('Nachprüfung zu 97e1304') ersetzt. Lehre: bei parallelen Agenten nie
`git add -A`, nur explizite Files.

**WebSearch-Kontingent:** ca. 200 Suchen pro Agent. Sonnet-Agenten mit 4
Files liefen mehrfach leer; Rest-Files wurden an frische Agenten übergeben.
Kein Agent hat ohne WebSearch bestätigt.

**Endstand:** Validator 2453/2453 ohne ERROR, Audit 0, 0 Smart-Chars,
0 Timelines ohne Quellen, 569/10.966 einzelne TL-Einträge ohne Quelle
(vorher 943).

---

## Nachtrag 3 (2026-10-02): Einzelquellen-Wellen 1-4

**Auftrag:** weitere 8 % des Wochenkontingents für das Projekt. Front: einzelne
TL-Einträge ohne Quelle in sonst belegten Timelines.

**Auswahl:** die 24 Files mit den meisten unbelegten Einträgen (5/5/4/4, dann
alle Sev-5 mit 3, dann Sev-4 bis `iran-ki-hijab-erkennung`), thematisch
gruppiert (Pegasus, Philippinen/Südostasien, Militär, Shutdowns,
Gesichtserkennung, Deepfake/Nordkorea/China).

**Ablauf:** 3 parallele Workflows (je 2 Vierergruppen; der Container hat
4 CPUs -> nur 2 Agenten pro Workflow gleichzeitig) mit Sonnet-Fixer ->
Prüfer. **Problem:** Das WebSearch-Kontingent (~200) gilt pro Workflow-Lauf;
die Fixer verbrauchten es, die Prüfer im Workflow hatten keine Suche mehr
('checked from memory'). Deshalb zweite Prüfrunde mit 6 Einzel-Agenten
(Agent-Tool, eigenes Kontingent), jede hinzugefügte URL per Suche bestätigt.
Commit nur nach dieser zweiten Prüfung, je Gruppe explizite Files
(9909230, b4823ab, 23174db, fef1184).

**Gefundene Fehler (Auswahl):**
- erfundene Studie (Nordkorea: 'Lumen'/Uni Hamburg), erfundene Zitate
  (Hugh Nelson 'Präzedenzfall', Indien), nicht auffindbares Armee-Zitat (Mali)
- falsche Zuordnungen: Irak-Akteur SKYNET (NSA-Programm in Pakistan),
  Bahrain-Eintrag zur Münchner Strafanzeige 2019 (betraf die Türkei),
  Mexiko: Citizen-Lab-2016-Quelle war der VAE-Bericht, Bangladesch:
  Abschaltungen durch NTMC/BTRC, nicht DGFI/NSI
- Daten: Tibet-Kloster-Scan 09/2023 statt 2024, Südkorea-Gesetz 26.09.2024,
  Pakistan ISI-Anordnung 8. Juli, Detroit-Klage 2021
- unbelegter KI-/Gesichtserkennungs-Bezug: Ägypten, China-Journalisten,
  Bangladesch, NSO ('KI-gestützt') -> Titel (correctionNote), Typen und
  Akteurssysteme an die Belege angepasst
- Australien hat Clearview kein Bußgeld auferlegt (nur OAIC-Anordnung)

**Neu verifiziert (aktuell):** UK Supreme Court, Bahrain v Shehabi
[2026] UKSC 25, 27.07.2026, 3:2 - keine Staatenimmunität bei Spyware.

**Dubletten gemeldet, nicht zusammengelegt:** jordanien-pegasus-journalisten
<-> jordanien-access-now-citizen-lab-bericht-2024; china-ki-journalisten-
ueberwachung <-> china-henan-provinz-baut-ki-ueberwachungssystem-... (teilweise).

**Endstand:** Validator 2453/2453 ohne ERROR, Audit 0, 0 Smart-Chars,
Umlaut-Fixer 0 Ersetzungen, 491 einzelne TL-Einträge ohne Quelle in 312 Files
(vorher 569). `data/index.json`-Namen/-Typen der 24 Files synchronisiert.

---

## Nachtrag 4 (2026-10-02 mittags): Einzelquellen-Wellen 5-7, Dublette, Bundles

**Auftrag:** alle Aufgaben ohne Qualitätsverlust bis 13:00 abschließen.

**Wellen 5-7 (18 Files):** Dreiergruppen, Fixer und Prüfer jeweils als
Einzel-Agent mit eigener Websuche und harter Frist (je Stufe ca. 3-6 min).
Regel: was bis 12:52 nicht geprüft ist, wird zurückgesetzt - war nicht nötig,
alle 18 Files geprüft committet (4cd687e, 1cfe15f, 2034bd0, 939b415, 02cae40,
4a780fb, f1fc71f).

**Funde (Auswahl):**
- belgien-ki-sozialleistungen-betrug: Kernereignis (Beschwerde der Ligue des
  droits humains 2022) und Top-Quelle erfunden -> Timeline um OASIS (2001),
  Energiedaten-Gesetz 2016, Degrave-Studie 2020 neu aufgebaut, Titel korrigiert
- tansania: 'tägliche Social-Media-Steuer' war Ugandas
- papua-neuguinea: Minister-Aussage 2020 statt 2024, 53 statt 147 Mio. USD
- katar: Akteurssystem 'Absher' (saudisch); kein FIFA/Katar-Fonds
- argentinien: Datenbank CONARC, Urteil 09/2022 von Richterin Liberatori
- nypd, mobley, nhtsa: je 9-10 Fehler (Daten, Zahlen, erfundenes Zitat)
- thailand, vietnam, ungarn: kein KI-Bezug belegt -> Titel korrigiert

**Dublette:** jordanien-access-now-citizen-lab-bericht-2024-... in
jordanien-pegasus-journalisten zusammengelegt (e9bb494, 2453 -> 2452;
3 Quellen übernommen).

**Bundles:** all-incidents(-lite).json waren seit f68db12 nicht neu gebaut -
die Website zeigte die Wellen 1-7 noch nicht. Neu gebaut (7dea78c).

**Endstand:** Validator 2452/2452 ohne ERROR, Audit 0, 0 Smart-Chars,
Umlaut-Fixer 0 Ersetzungen, 437 einzelne TL-Einträge ohne Quelle in 294 Files.

---

## Nachtrag 5 (2026-10-08): Einzelquellen-Welle 8, vierter Fixer-Bug

**Welle 8 (22 Files, alle restlichen mit 3 unbelegten Einträgen):** 8 parallele
Workflows (je eine Gruppe, Fixer -> Prüfer). **Problem:** Das WebSearch-
Kontingent (~200) gilt pro Turn für alle gleichzeitig gestarteten Workflows;
die Prüfer bekamen kaum Suchen ('search budget used up', 'checked from
memory'). Deshalb wurde jede Gruppe von einem Einzel-Agenten (Agent-Tool,
eigenes Kontingent) nachgeprüft; Commit erst danach (9b0e7ca, c19ead8,
500fb1c, 026b76c, 70df10c, 533ee5b, ad39c9e, a15d489). Die Prüfer durften
diesmal auch Nebenfelder (Typen, Akteure, Hauptquellen) korrigieren.

**Funde (Auswahl):** erfundener Ombudsman-Bericht 'The SAMS Story' (Ontario);
Glovo: Bologna-Urteil betraf Deliveroo, richtig ist Tribunale di Palermo;
Spanien BOSCO: erfundene Ausschlüsse, Kältetote, 6,8-Mio.-Zahl; Kinderschutz:
KOSA ist kein Gesetz; LAION-5B 2022 statt 2021; PredPol: alle drei Daten
falsch; Twitter-Studie wurde nicht unterdrückt; erfundene Hauptquellen
(Atlantic 'Secret Sauce', HFHR-Homepage, Garante-Dokument) ersetzt;
unbelegte Akteure entfernt (Huawei bei Saudi-Arabien, Citizen Lab bei
Ontario, Pymetrics), fehlende ergänzt (SDAIA, CITIC/Henan Costar, Microsoft,
Workday, Intuit).

**Vierter Fixer-Bug:** `busse -> buße` in data/translit-extra-map.json
(Busse = Plural von Bus). Entfernt (0669be2); 2 ältere Schäden repariert
(Lettland, Google-Bus). Keine Nachnamen (Weiss/Gross) verfälscht gefunden.

**Endstand:** Validator 2452/2452 ohne ERROR, Audit 0, 0 Smart-Chars,
Umlaut-Fixer 0 Ersetzungen, 371 einzelne TL-Einträge ohne Quelle in 272
Files (nur noch 1er/2er). Bundles neu gebaut (ff203eb).

---

## Nachtrag 6 (2026-10-08 abends): Einzelquellen-Welle 9

**30 Files mit je 2 unbelegten Einträgen** (alle 12 Sev 5, 18 Sev 4), 10
Dreiergruppen. Fixer und Prüfer als Einzel-Agenten; jede Gruppe erst nach der
Prüfung committet (3e33c02, 53ac1d0, ff9e51b, 2096261, 4f824ad, f513180,
700a90a, f3d42bd, d8c82d7, 1f4efa1), Bundles in 6813ea2.

**Suchkontingent präzisiert:** ca. 200 WebSearch-Aufrufe pro Turn, geteilt von
allen in diesem Turn gestarteten Agenten (10 Fixer -> je ca. 20 Suchen; einige
liefen leer: Syrien und Kongo blieben zunächst unbelegt). Die Prüfer wurden
deshalb einzeln in eigenen Turns gestartet und haben offene Einträge selbst
belegt.

**Funde (Auswahl):** erfundene Einträge (Myanmar MSSP, Kambodscha 'Gateway
2023 eingeschaltet', NDIS: I-CAN-Einführung mit 19,6 % Kürzung), falsche
Zuordnungen (Amesys war Libyen, nicht Syrien; Tigray-Shutdown war Äthiopien,
nicht Eritrea; al-Majalah 2009 war ein Marschflugkörper; eine
Democracy-Now-Quelle betraf Iran), falsche Daten (Cyberbit 2017 statt 2021,
Mushtaq Ahmed Feb. 2021, Gig-Streik 31.12.2025 statt 2024, Doe v. Apple
Berufung 5.3.2024), unbelegter KI-/Deepfake-Bezug (Georgien, Kasachstan,
Somalia, Bangladesch, Nigeria, Mosambik) -> Titel/Typen/Akteure korrigiert;
viele geratene URLs ersetzt.

**Teil-Dublette gemeldet, nicht zusammengelegt:** italien-garante-verhaengt-
5-mio-euro-... überschneidet sich stark mit italien-ki-arbeitsbewertung-glovo
(jetzt konsistent). Die Paare Mosambik und Kasachstan sind verschiedene
Ereignisse.

**Endstand:** Validator 2452/2452 ohne ERROR, Audit 0, 0 Smart-Chars,
Umlaut-Fixer 0 Ersetzungen, 311 einzelne TL-Einträge ohne Quelle in 242 Files.

## Nachtrag 7 (2026-10-08/09): Einzelquellen-Wellen 10-15 - alle TL-Einträge belegt

**Ergebnis:** Die letzten 311 Timeline-Einträge ohne Quelle (242 Files) sind
geprüft und belegt. Stand jetzt: **0 TL-Einträge ohne Quelle** (11.106 Einträge in 2452 Files). Jede Gruppe
(3-4 Files) lief durch Bearbeiter und unabhängigen, adversarialen Prüfer mit
WebSearch und wurde erst nach meiner Durchsicht committet (Prüf-Skript
`rev.js`: geänderte Felder, Titel/correctionNote, Typen, Akteure, Quellen,
TL-Daten/Phasen).

| Welle | Umfang | Commits |
|---|---|---|
| 10 | Sev 5, je 2 offen (K-Q) | e9a665d 9be6b7f 99640b1 03f0f51 7144e95 3ac374d 83ca5fb, Bundles 2891668 |
| 11 | Sev 5, je 1 offen (R-V) | f261ff0 6f42fe6 7059d43 08892b6 3188b00 |
| 12 | Sev 4, je 1 offen (W-AF) | d034e5f 00f081e 876e3e5 fd67b69 f9918b4 0c0f78d 32c788c 4cec8e1 a314b9c 9ac6188 |
| 13 | Sev 3, je 2 offen (AG-AQ) | bbde846 4209460 a62f996 62a1f90 3a31a35 7c75dc7 b68f425 cd775f8 b156979 8a14281 4e3d1ea |
| 14 | Sev 3, je 1 offen (80 Files, 20 Gruppen) | f866e22 e3b8ca7 90f1a95 26663ef 58e74d5 f136272 558a226 a1a5598 160566b d19eebe 408cf24 df7ee13 c68a2d1 a8fe7d4 64f5ab9 bed1902 250b72c 25f1b20 0991f91 45ebc14 907d662, Bundles 0db240d |
| 15 | Sev 2/1, Rest (48 Files, 12 Gruppen, Bearbeiter + Prüfer im selben Workflow) | 6b58fa6 00d3d27 bb3917f e8b7ed2 d9f133c d1f5550 81ddfc9 8dde84c 6d9a687 4f3f47e 5cc66b9 386b6e7, Bundles 5dd14df |

Zusätzlich: **47 kaputte `asm:relatedIncidents`-Verweise** (Slugs mit Umlauten,
z. B. `rumänien-wahlannullierung-tiktok`) in 37 Files auf die bestehenden
transliterierten Slugs umgestellt (6ff481e, Stargate in 250b72c); 3 Verweise auf
nie existierende Slugs auf die passende Datei umgelenkt. Korpusweit jetzt 0
unaufgelöste Verweise.

**Fehlerquote bleibt hoch.** In fast jeder Datei gab es echte Fehler, auch in
bereits belegten Einträgen: erfundene Folgen (z. B. FTC-Untersuchung zu Adobe
Firefly, Kongress-Auftritte, ELVIS-Act-Bezug bei Johansson/Sky, Sora-Abschaltung),
falsche Daten und Aktenzeichen (Prisma Labs 3:23 statt 5:23, Tesla-Rollstopps seit
Okt. 2020), erfundene oder nicht auffindbare URLs (CNN Money, Rolling Stone, Law360,
PRNigeria u. v. m.), überzogene Titel (rund 95 Titel mit correctionNote korrigiert,
z. B. Klarna '700 Jobs', Kaiser-'Roboter', Instacart-'Algorithmus',
Pixellot-'Schiedsrichter' statt Linienrichter).

**Fünfter Fixer-Bug (f37fa22):** `fix-umlaut-transliterations.js` behandelte die
Slugs in `asm:relatedIncidents` wie deutschen Anzeigetext und machte aus
`rumaenien-wahlannullierung-tiktok` den nicht existierenden Slug
`rumänien-...`. Das war die Ursache der 48 kaputten Verweise; der Abschlusslauf
des Fixers hätte 46 davon wieder zerstört (beobachtet, zurückgesetzt). Der Fixer
überspringt das Feld jetzt, und `validate-timelines.js` meldet einen ERROR, wenn
ein Verweis auf keine Datei zeigt.

**Audit wieder 0 (930f807):** zwei Fehlalarme - der türkische Vorname „Ömer"
(Umlaut nur am Wortanfang, neue Liste `FOREIGN_UMLAUT_NAMES` im Audit) und
„Stingrays" (Plural) im EN-Text.

**Lektionen (Werkzeug/Ablauf):**
- **Suchkontingent:** ca. 200 WebSearch-Aufrufe pro *Turn*, geteilt von allen in
  diesem Turn gestarteten Agenten und Workflows. Eine Benachrichtigung, die
  *während* eines Turns eintrifft, und Stop-Hook-Fortsetzungen starten **keinen**
  neuen Turn. Zweimal liefen dadurch Prüfer leer (W14-15..20 teilten sich ein
  Kontingent; zehn parallele Prüfer in einem Turn). Regel: höchstens 2-3 Gruppen
  pro Turn starten, und nur als erste Aktion eines Turns, der durch eine
  Benachrichtigung im Leerlauf beginnt. Leer gelaufene Prüfungen gezielt mit
  frischem Kontingent nachprüfen, nie ungeprüft committen.
- **Nutzungslimit:** Ein Session-Limit beendete alle laufenden Agenten mitten in
  der Arbeit; danach alle geänderten Files validiert und jede Änderung gegenüber
  HEAD als ungeprüft behandelt.
- **Workflow-Falle:** Gibt eine `pipeline()`-Stufe `null` zurück, fällt das Item
  aus allen weiteren Stufen heraus (agent_count 0). Lösung: eine einzige Stufe pro
  Gruppe (Bearbeiter, dann Prüfer im selben Callback).
- **Bundles** immer aus dem committeten Stand in einem temporären Worktree bauen,
  nie aus einem Arbeitsverzeichnis mit ungeprüften Agenten-Änderungen.

**Redaktionelle Entscheidungen für Andy (nicht von mir entschieden):**
- *Kein oder nicht belegtes KI-Element:* costa-rica-conti, malaysia-ki-arbeitsmigranten,
  tschechien-ki-sozialhilfe-scoring, usa-ziprecruiter-ki-diskriminierung (kein konkreter
  Vorfall, überschneidet sich mit HireVue), Lauren Book (gestohlene Fotos), Spotify PFC
  (vermutlich Dublette von global-spotifys-perfect-fit-content-...), suedsudan-90-tage-...,
  suedkorea-yoons-kriegsrechts-... (kein Deepfake existierte), usa-instacart-...,
  usa-kaiser-permanente-... (Telepräsenz), usa-ki-bots-stoeren-stadtratssitzungen-...
  (nur vermutet), nepal-social-media-ueberwachung, uk-ofqual (statistisches Modell),
  suedafrika-hell-run (Routing). Behalten, umetikettieren oder ausblenden?
- *humanVerified:true trotz erfundener Inhalte:* eu-frontex-ki-grenzen,
  indonesien-ki-social-scoring, mexiko-ki-militarisierung, tuerkei-ki-kurdische-ueberwachung,
  tschechien-ki-sozialhilfe-scoring - das Flag ist bei importierten Fällen nicht aussagekräftig.
- *Weitere Fälle mit fraglichem KI-Element (Welle 15):* uk-google-push-benachrichtigung-zur-bafta-...
  (Google: „did not involve AI"), global-sony-testet-dynamische-spielpreise-... (A/B-Preistest,
  von Sony nie bestätigt), kanada-moffatt-air-canada-... (Technik des Chatbots nie beschrieben),
  australien-psychologin-... (KI-Einsatz nur vermutet), usa-scarlett-johansson-openai-sky-stimme
  (kein Stimmklon belegt; Typ deepfakes fraglich).
- *humanVerified:true ebenfalls bei:* japan-ki-polizei-vorhersage (erfundener Kabinettsplan 2023,
  nicht belegte NEC-Rolle).
- *Dubletten (gemeldet, nicht zusammengelegt):* uk-kinder-gelangen-in-virtuelle-striptease-clubs-2022
  vs. uk-bbc-recherche-findet-grooming-...-vrchat-2022; die beiden Proof-News-Wahlstudien
  (usa-ki-modelle-liefern-...-27-prozent-... und usa-fuehrende-ki-modelle-...);
  usa-proctoring-ki-studenten vs. usa-proctorio-honorlock-...; die beiden Adobe-Kundeninhalte-Files
  von 2023 sowie usa-adobe-firefly-midjourney-ethik-kontroverse, global-adobe-trainierte-als-ethisch-beworbenes-firefly-modell-auch-mit-konkurrenz-ki und global-adobes-neue-nutzungsbedingungen-... (fünf Adobe-Files mit Überschneidungen).
- *griechenland-predpol-migration:* kein PredPol-Einsatz belegt (nur im Slug); Koordinaten
  zeigen auf Lesbos, das dokumentierte Lager liegt auf Samos (Koordinaten nicht geändert).
- *'data-misuse' als Sammeltyp:* u. a. für rund ein Dutzend Rechenzentrums-/Umwelt-Files
  und Einflussoperationen - korpusweite Typ-Entscheidung.
- *Personen:* Raymundo Ramos (OFAC-Sanktion 14.04.2026, Files nennen ihn Menschenrechtsverteidiger);
  Fall Fernandes/Ulmen; Klarna '700' ist eine Arbeitslast-Äquivalenz, keine Entlassungen.
- *GLOBAL-Fälle auf der Karte:* 128 Incidents mit addressCountry GLOBAL haben bewusst keinen
  Marker (siehe unten, Koordinaten). Sollen sie anders dargestellt werden (Liste, Sammelmarker)?

**Endstand:** Validator 2452/2452 ohne ERROR (412 WARNs, v. a. gleiche Daten realer Ereignisse), **0 TL-Einträge ohne Quelle**, 0 unaufgelöste relatedIncidents-Verweise, Audit 0 Findings, 0 Smart-Chars, Umlaut-Fixer 0 Ersetzungen, Bundles aus HEAD (5dd14df), Browsertest DE/EN ohne Fehler (Detail-Panel, Permalink, Timeline).

### Nachtrag 7b (2026-10-09): Koordinaten für 413 Incidents (`475faa4`, Bundles `3540fa9`)

413 Incidents mit konkretem Land hatten kein `location.geo` und erschienen nicht auf der
Karte (`js/map.js` überspringt sie). Ursache: `promote-candidates.js` übernimmt Koordinaten
nur, wenn der AIAAIC-Kandidat welche hatte. Die 128 GLOBAL-Fälle bleiben wie bisher ohne
Marker.

**Rangfolge je Fall:** 1. dokumentierter Ereignisort (26), 2. Sitz der handelnden Behörde
bzw. des Gerichts (23), 3. Firmensitz im selben Land zum Zeitpunkt des Vorfalls (160),
4. sonst Landesmittelpunkt (204; Google-Zentroide, wie sie der Bestand schon nutzt).
Der Bestand war vorher uneinheitlich (US-Landesfälle mal Washington, mal Zentroid, mal
Firmensitz) - eine pauschale Hauptstadt-Zuordnung hätte z. B. Tesla-Unfälle nach Washington
gelegt.

**Ablauf:** je Fall zwei unabhängige Agenten (nur Wissen, keine Websuche); Übereinstimmung
(gleiche Regel, <= 30 km) bei 391 von 413, die übrigen 22 entschied ein dritter Agent.
Danach prüften drei weitere Agenten alle 209 konkreten Orte adversarial: 6 Korrekturen
(Tesla-Sitz vor Dezember 2021 Palo Alto statt Austin - 2 Fälle; Ring-Sitz Hawthorne;
Divino v. Google in San Jose; Consumer-Reports-Testgelände East Haddam; Amazons
Schulbezirks-Preise -> Firmensitz statt Denver).

**Geändert:** nur `location.geo` (nach `location.name` eingefügt, wie in
promote-candidates.js) und `latitude`/`longitude` in `data/index.json`; `location.name`
unverändert. 19 Dateien mit einzeilig geschriebenen Quellen-Arrays sind dabei ins
Standardformat gebracht (Inhalt identisch, geprüft). Browsertest: 2324 Marker, keine Fehler.

**Für künftige Importe:** `promote-candidates.js` sollte Kandidaten ohne Koordinaten nicht
stumm ohne `geo` promoten (Warnung oder Pflichtfeld).

### Nachtrag 7c (2026-10-09): Link-Check repariert, 243 tote Quellen ersetzt, Merge mit main

#### 1. Link-Check-Workflow (`59c6d99`, `dfa9310`) und Index (`f15a46a`, `5576326`)

- **Ein Issue statt Hunderter:** Der wöchentliche Link-Check legte bei jedem Lauf ein neues
  Issue an (228 Duplikate). Jetzt sucht der Workflow das offene Issue mit Label `link-check`
  und aktualisiert es (#230).
- **Statuscodes waren unsichtbar:** Der Bericht wurde in Bash gebaut; die Backticks um den
  Status liefen als Befehlsersetzung, jede Zeile zeigte `[]`. Neues Skript
  `scripts/link-report-to-markdown.js`: Summen, tote Links nach Status, Top-25-Hosts, dann die
  Liste, verwertbare Status zuerst (404/410, DNS/TLS/Verbindung, 5xx/Timeout, sonstige,
  Bot-Sperren 401/403/406/429 zuletzt), gekürzt unter GitHubs 65.536-Zeichen-Grenze.
- `data/index.json` mit allen Incident-Dateien abgeglichen (Namen, Typen, Koordinaten);
  `promote-candidates.js` warnt jetzt bei Kandidaten ohne Koordinaten.
- **Offen (Projekteigner):** 228 alte Duplikat-Issues schließen - nur mit Okay.

#### 2. Tote Quellenlinks ersetzt (DL-01 bis DL-18, 18 Commits)

Aus dem ersten lesbaren Bericht: 213 x 404, 4 x 410, 24 x nicht erreichbar = **243 tote URLs
in 211 Incidents**. 18 Gruppen à rund 12 Incidents, je Bearbeiter (WebSearch) +
unabhängiger Prüfer, der jede Änderung per `git diff` gegen Suchergebnisse prüfte und
korrigieren oder auf den toten Link zurücksetzen durfte ("ein toter Link ist besser als
ein falscher").

- Vorrang: dasselbe Dokument unter neuer Adresse (umgezogene Seiten, neue Slugs,
  Syndikationen derselben Agenturmeldung), sonst eine andere Quelle für denselben Inhalt.
  Wo die Ersatzquelle ein Detail nicht trägt, wurde es gestrichen (DE/EN parallel), z. B.
  unbelegte Zahlen, Zitate, "erster Fall"-Behauptungen.
- Die Prüfer korrigierten rund 30 Ersetzungen (falsche Variante einer URL, schwächere
  Quelle, ein gestrichenes, aber belegtes Detail). Eine nicht prüfbare Ersetzung (Bucheon)
  wurde verworfen.
- **Ergebnis im nächsten Lauf:** 404 von 213 auf 47. Die restlichen 47 sind überwiegend
  Ersatz-URLs, die zwar im Suchindex stehen, für den Checker aber 404 liefern
  (WordPress-Kurzlinks `?p=`, FTC-Seiten aus der Khan-Ära, die 2025 entfernt wurden,
  Seiten mit Bot-Sperre per 404) sowie bewusst behaltene Links. **Lektion:** Treffer im
  Suchindex sind kein Beleg, dass eine Seite lebt; der Sandbox fehlt jeder Direktzugriff
  (auch archive.org gesperrt). Die "error"-Fälle (76) sind fast alle Timeouts/Bot-Sperren
  großer Seiten (Washington Post, Yahoo, gesetze-im-internet.de).

**Redaktionelle Prüfliste aus den Link-Gruppen** (nicht automatisch entschieden):

*:*
- australien-naplan-…: Eintragsdatum 2018-07-27 (Belege datieren die Bestätigung auf Januar 2018; Text jetzt "2018").
- deutschland-bayern-testet-palantir-…: GFF-Beschwerde 2023-12 vs. Juli 2025.
- deutschland-gorillas-schichtalgorithmus-project-ace-…: Bezeichnung "Project Ace" nicht belegbar (möglicherweise erfunden).
- burkina-faso-junta-…: Pulse-Quelle datiert 2023, berichtet aber über Januar 2022.
- china-bmw-kohler-…: cbbc-Artikel behandelt die Regeln von 2025, nicht 2021.
- brasilien-96-falsch-treffer-…: edgelands-URL ohne Ersatz (beibehalten).
- china-iflytek-…: Eintragsdatum 2022 unbelegt.
- belgien-mann-…: Satz zu GPT-J als "Standard-Backbone" unbelegt.
- estland-devternity-…: Gründungsjahr 2015 unbelegt.
- deutschland-hamburger-datenschutzbehoerde-…-pimeyes: CCC-Datum 30. April vs. Juni 2026.
- dominikanische-republik-gesichtserkennungs-pilot-…: Botschaftsseite unbelegt.
*:*
- frankreich-conseil-detat-…health-data-hub: "Azure ohne Ausschreibung" und "60 Mio" ohne Beleg.
- global-cisco-studie-deepseek-…: zwillgen-Artikel laut Suche vom 2025-03-18, Quelle trägt 2025-02-04.
- global-deepseek-…-mona-lisa-…: cxtoday-Artikel deckt die erwähnten Verbote nicht ab.
- italien-como-…: Beschreibung schreibt das Moratorium dem Garante zu; laut Il Post beschloss es das Parlament (Dezember 2021).
- mt-eu-mittelmeer-frontex-…: "100 Mio" und "250 Seemeilen" nur durch digit.site36 gestützt.
- neuseeland-paknsave-…: neue foodstuffs.co.nz-URL (ohne www) evtl. ebenfalls 404.
- nordkorea-digitalisierte-ueberwachung-des-inminban-…: KEIN Beleg für die Kernbehauptung (2024 ganze Untergrundkirche durch digitale/KI-Überwachung entdeckt, alle Mitglieder getötet). Titel, Beschreibung und Slug tragen sie; braucht menschliche Prüfung oder vorsichtigere Formulierung.
*:*
- papua-neuguinea-facebook-blockade-…: Titel "schafft Rechtsgrundlage für Plattform-Sperren" wird von den Quellen bestritten (Section 16 erlaubt keine Mediensperren).
- polen-belarus-elektronische-grenzueberwachung-…: Asylrechts-Aussetzung laut Notes from Poland/PAP erst 27.03.2025, Text sagt "Februar 2025".
- spanien-katalonien-audit-…-riscanvi: Behauptung zum EU AI Act ohne Beleg.
- spanien-von-viogen-…-lobna-hemid: Details aus dem NYT-Original (Fotos, Polizeianzeige, einstweilige Verfügung) nicht mehr belegbar, gekürzt.
- uk-uber-surge-pricing-…: Eintrag verknüpft die Preisdeckelung (Juli 2014) mit der Geiselnahme in Sydney (Dezember 2014) - zeitlich falsch.
- uk-deepfake-pierce-brosnan-…: Schließung der Galerie (August 2024) nur durch die AI Incident Database belegt ("alleged").
- uk-servicroboter-fabio-…: "Hintergrundgeräusche" und "steht zu nah" unbelegt.
- uk-ki-verkehrskameras-…: Beteiligung von National Highways am Devon/Cornwall-Test 2022 fraglich (eigene Tests ab 2021).
- usa-ai-portrait-ars-…: Top-Level-Datum 2019-07-15, Artikel vom 29.07.2019.
- usa-ki-puppe-hello-barbie-…: EFF-Erwähnung in der Beschreibung unbelegt.
- usa-139-000-tv-und-filmskripte-…: Quelldatum 2024-11-19 vs. 26.11.2024.
- usa-character-ai-…-george-floyd: Quelldatum 2024-12-18 vs. Oktober 2024.
- usa-arizona-verklagt-amazon-…: Klage-PDF nur in Prozent-Kodierung ersetzt, kann weiter 404 liefern.
- usa-porcha-woodruff-…: Atlas-of-Surveillance-URL im neuen Format (/a/AOS000118) abgeleitet, nicht in Suchergebnissen gesehen.
*:*
- usa-schwarze-youtube-creator-…: Eintrag 2010 ("schlagwortbasiert") von der Ersatzquelle nicht gedeckt.
- usa-texas-bewertet-staar-aufsaetze-…: "Schüler lernen für die Maschine zu schreiben" und Offenlegungsforderung unbelegt.
- usa-tom-hanks-deepfakes-…: "fast drei Milliarden Dollar durch Betrug mit Identitätsvorspiegelung 2023" unbelegt.
- usa-truecompanion-sexroboter-…: Zitat von Kate Devlin in den Quellen nicht gefunden.

#### 3. Merge mit main (`6d43403`)

Auf `main` hatte eine parallele Session (Übergabe #13 vom 2026-10-08/09) dieselben rund
110 Timelines nach "Schema v1.1" umgebaut. Der Branch hatte am 2026-09-25 eine eigene,
lockerere Phasen-Regel eingeführt und dieselben Dateien korrigiert. PR #93 war deshalb
nicht mehr mergebar: **81 Incident-Dateien** plus Validator, Briefing, STATUS.md, Index,
Bundles im Konflikt.

Semantische Auflösung je Datei (Skript, nicht zeilenweise):

| Regel | Dateien |
|---|---|
| Redaktionsentscheidung des Projekteigners auf main hat Vorrang (Tschechien komplett, Kasachstan Titel/Text/Akteure/Metadaten) | 2 |
| Timeline aus main, wenn dort jeder Eintrag eine Quelle hat | 56 |
| Timeline aus dem Branch, wenn sie Schema v1.1 erfüllt | 7 |
| main-Timeline, Quellen aus dem passenden Branch-Eintrag übertragen (Datum + Textähnlichkeit) | 45 |

Übrige Felder: einseitige Änderungen gewinnen. Bei Marokko (Titel) und ShotSpotter
(Beschreibung) hatten beide Seiten denselben Fehler unabhängig korrigiert; die genauere
Branch-Fassung blieb.

- **Validator:** Regel von main unverändert (alle vier Phasen Pflicht, keine Verschränkung,
  > 3 event = WARN) plus die Branch-Prüfungen (relatedIncidents-Verweise, Umlaute in
  Quellen-URLs, fehlendes `location.geo` als WARN). Briefing an den Validator angeglichen.
- **Fund:** 6 Quellen-URLs aus den main-Wellen hatte der Umlaut-Fixer beschädigt
  (`privatsphäre`, `für`, `prüm` ...). Im Merge auf die ae/oe/ue-Form zurückgesetzt. Der
  Fixer-Fix aus dem Branch (`ac25e6e`, `f37fa22`) kommt mit PR #93 auf main.
- Index aus dem Branch, mit allen Dateien abgeglichen; Bundles neu (`7ad3429`).

#### 4. Nacharbeit nach dem Merge

Der Merge hinterließ zwei Aufgaben: **24 Branch-Dateien verletzen die strengere v1.1-Regel** (17 ohne doctrine-Phase, 8 mit Verschränkung, 1 ohne Vorgeschichte; Ursache: frühere Faktenprüfungen hatten doctrine-Einträge zu event/consequences umgetaggt) und **35 Einträge aus der main-Fassung haben keine Quelle** (dazu 10 automatisch übertragene Quellen mit schwacher Zuordnung und 1 toter Link). Bearbeiter liefen für beide Aufgaben; die Prüfer-Stufe wurde bei 96 % Wochennutzung auf Wunsch des Projekteigners abgebrochen. **Ungeprüftes wird nicht committet:** Die Änderungen liegen als Patch mit Arbeitslisten, Briefing und Bearbeiter-Berichten in `docs/planung/nacharbeit-merge-2026-10-09/` (README beschreibt das Fortsetzen); die Daten sind auf dem Merge-Stand.

#### 5. Abstimmung mit der main-Session

Die main-Session war aus dieser Cloud-Sitzung nicht erreichbar (weder lokal noch in der
Session-Liste). Abstimmungsnotiz an den Projekteigner übergeben: was übernommen wurde,
welche Dateien hier in Arbeit waren, Bitte um Pause bei `data/incidents/` auf main bis zum
Merge von PR #93, Vorschlag zur doppelten Nummer "#13".

**Endstand:** 2452 Incidents; Validator 2428/2452 ohne ERROR (die 24 Phasen-Fälle oben), 0 kaputte relatedIncidents-Verweise, 0 Umlaut-URLs; 37 TL-Einträge ohne Quelle (35 aus main + 2 im zurückgezogenen Tschechien-Fall); Link-Check 404 von 213 auf 47; PR #93 mergebar, CI grün; Bundles aus `7ad3429`.

**Entscheidungen des Projekteigners (2026-10-09, nach Nachtrag 7c):** `nordkorea-digitalisierte-ueberwachung-des-inminban-...` zurückgezogen (Kernbehauptung unbelegt); die 228 älteren Link-Check-Issues als Duplikate von #230 geschlossen; PR #93 gemergt. Die übrige redaktionelle Prüfliste oben und die Nacharbeit in `docs/planung/nacharbeit-merge-2026-10-09/` bleiben offen.
