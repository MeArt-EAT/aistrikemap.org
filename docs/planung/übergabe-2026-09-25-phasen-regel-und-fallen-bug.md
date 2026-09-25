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
