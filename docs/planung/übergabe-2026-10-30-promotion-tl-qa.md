# Übergabe #16 — Promotion der 73 gesichteten Kandidaten, Timeline-Wellen 1 und 4, Prüfliste B14, Browser-QA S17

**Datum:** 2026-10-30 (10:38-12:00)
**Vorgänger:** #15 (2026-10-23, Redaktion, Sichtung abgeschlossen)
**Sessions:** drei lokale Sessions im selben Ordner, abgestimmt per SendMessage. Diese Session („Projektfortschritt mit Kontext“) besitzt git/Commit/Bundles/index.json/STATUS/Übergabe und die Promotion; „Kontextfenster-Koordination bis 12:00“ bearbeitet die Prüfliste B14 (nur Bestandsdateien); „Projektpunkte Abstimmung“ baut TL-Welle 4 und macht die Browser-QA S17.
**Gepusht:** ja, 2026-10-30 gegen 11:50 auf ausdrückliche Freigabe des Projekteigners (siehe §5).

---

## 1. Promotion (`20cdecf`)

- 73 verified Kandidaten (Sichtung Wellen 1-5, je Review + adversariale Gegenprüfung mit Websuche) per `node scripts/promote-candidates.js --min-sources 2` übernommen. Die Promote-Liste war identisch mit `pre-promote-check.js --only-reviewed` (73, 0 Slug-Kollisionen, 0 mit < 2 Quellen). Einzige hohe Bestandsähnlichkeit (Michael Oliver ↔ Nijeer Parks, 0,58) ist ein anderer Fall.
- Typen: 44 Kandidaten vorher auf die Vorschläge aus `scripts/workflows/typen-kandidaten-2026-10-23.json` gesetzt (2 Klassifizierer + Schiedsrichter, Skript im Scratchpad, Vermerk in `researcher_notes`); die 11 aus Welle 5 waren schon nach dem 16-Typen-Schema typisiert.
- Nacharbeit: `fix-umlaut` (3 neue Dateien), 6 Gedankenstriche in einem englischen Quellentitel → ASCII, `sync-index.js` (index.json 2525 Einträge).
- **Fixer-Bug Nr. 7:** Das Mapping `paedophile → pädophile` traf englische Zitate („This is OUR Paedophile“, Guardian-Titel „Paedophile Hugh Nelson jailed …“). Mapping aus `data/translit-extra-map.json` entfernt (`paedophilen`/`paedophiler` bleiben, die gibt es im Englischen nicht), beide Dateien repariert.

## 2. Timeline-Bau

| Welle | Session | Dateien | Ergebnis |
|---|---|---|---|
| 1 | diese | 16 | Validator 16/16 ohne ERROR (3 WARN), Feld-Diff nur TL/affectedRights. Verdikte: 1 pass, 7 fix-applied, **8 needs-human** – fast alle, weil das Websuche-Kontingent des Turns während der Gegenprüfung erschöpft war. Liste mit Prüfer-Notizen: `scripts/workflows/tl-welle-1-reverify-2026-10-30.json`. |
| 1 Re-Verify | diese | 8 | (`228c230`) 4 Prüfer mit Websuche: 5 fix-applied; 3 nur im Haupttext beanstandet, davon Merz (unbelegter Warentest-„Verbrauchertest“ gestrichen), Dänemark STAR (laut STAR maschinelles Lernen) und Douyin (Kulissen) in der Hauptsession korrigiert. **Offen: Mistral 7B Haupttext** (178 vs. 175 Röttger-Fragen, Sifted-Bombenbau-Aussage nur über Sekundärquellen, Gründungsdatum 28.04. vs. Mai 2023). |
| 2a | diese | 8 | (`f1ca1a6`) halbe Welle (Batches 1-2 von Welle 2), damit das Kontingent für die Gegenprüfung reicht: 2 pass, 5 fix-applied, 1 needs-human. Validator 8/8. **Population One (Chanelle Siggens) → Kontextfall** (kein KI-Element; Typ `censorship` passt nicht, keiner der 16 passt sauber – offen). |
| 4 | Projektpunkte Abstimmung | 16 | siehe §3 |
| 2b, 3, 5 | – | 33 | offen (dazu die 11 gebauten aus Welle 4, nur Gegenprüfung); neu erzeugen mit `node scripts/workflows/gen-tl-waves.js --per-wave 8` (sammelt nur Dateien ohne TL; die Skripte sind gitignored) |

Inhaltliche Prüfer-Hinweise außerhalb der Timeline (nicht geändert):
- `china-geologie-chatbot-geogpt-…`: Jian Wang trat für Zhejiang Lab auf, nicht als Alibaba-Technikchef; „2022 gestartet“ unbelegt; Cleverley-Warnung eher 2025; EGU-Abstract-Darstellung möglicherweise verdreht; Jiangsu-Finanzierung betrifft DDE, nicht GeoGPT.
- `global-ccdh-studie-tiktok-…`: Typ `censorship` passt nicht zu einem Empfehlungssystem, das Schaden verstärkt; Herkunft aiaaic1000 mit der CCDH-Studie (12/2022) abgleichen.
- `china-douyin-creator-…`, `deutschland-deepfake-videos-von-friedrich-merz-…`: Akteursnamen teils gemischtsprachig bzw. `name_en` deutsch.

## 3. Parallel-Sessions (Lieferungen bis 11:45)

### B14 Prüfliste Nachtrag 7c (Session „Kontextfenster-Koordination bis 12:00“)

**Welle 1 (`ff25a4c`, 18 Dateien, je Gruppe Bearbeiter + adversarialer Prüfer mit Websuche):** Como – das Moratorium beschloss das Parlament (Gesetz 205/2021), nicht der Garante; dessen Feststellung datiert vom 26.02.2020, den falsch zugeordneten TL-Eintrag ersetzt. Uber – Notfall-Deckelung aus der Einigung mit dem New Yorker Generalstaatsanwalt vom 08.07.2014, nicht nach Sydney. Hello Barbie – EFF nur im Jahresrückblick 2015, die Proteste führte CCFC an. Papua-Neuguinea – Rechtsgrundlage aus dem Anti-Terror-Gesetz als umstritten formuliert. Polen – Aussetzung des Asylrechts erst am 27.03.2025 in Kraft. Fabio – Mikrofonproblem statt „zu laut/zu nah“. Gorillas – „Project Ace“ ist belegt (Tagesspiegel, Freitag); unbelegte Schicht-/Ruhezeitangaben ersetzt. Health Data Hub – Azure über UGAP-Rahmenvertrag ohne eigene Ausschreibung (Next), „60 Mio.“ gestrichen. Brosnan – Schließung als Angabe von Simms (Daily Mail), Ort Long Eaton statt Nottingham. Frontex – zwei Verträge zu je 50 Mio. € (Airbus/IAI und Elbit, Statewatch), 250-sm-Radius gestrichen. RisCanvi – AI-Act-Aussage dem Eticas-Audit zugeschrieben. Tom Hanks – 2,7 Mrd. $ laut FTC. TrueCompanion – Devlin-Aussage in Grazia gefunden, genau wiedergegeben. Texas – Zitat von Les Perelman zugeordnet. KI-Verkehrskameras – National Highways nicht am Devon/Cornwall-Test beteiligt, Big Brother Watch als Akteur. Bayern/Palantir – GFF-Verfassungsbeschwerde Juli 2025 statt Dezember 2023. Belgien – GPT-J-„Backbone“ auf Belegtes reduziert. PimEyes – noyb-Klage am 30.04.2026 statt Juni. Bereits vorher erledigt: brasilien-96, burkina-faso-junta, dominikanische-republik-gesichtserkennungs-pilot, global-deepseek-mona-lisa, neuseeland-paknsave, usa-arizona-amazon, spanien-viogen; Nordkorea war bereits zurückgezogen.

Neue offene Punkte der Prüfer (nicht geändert): uk-uber-surge (Manchester unter „Notfallsituationen in London“; DE/EN-Abweichung), usa-hello-barbie TL[0] („Daueraufnahme“ falsch, nur bei gedrückter Taste), usa-texas-staar TL[4] (wohl 12/2023 statt 12/2024, verschiebt die Phasenfolge), belgien-mann TL[1] („maximale emotionale Bindung“ nur Wikipedia), pimeyes TL[3] vs. Beschreibung (HmbBfDI hält es laut noyb für rechtswidrig), bayern-palantir (heise-Quellendatum eher 2025), frankreich-hdh (Next-Quelle nur „2020“), polen-belarus TL[4] (Asyl-Satz ohne eigene Quelle im Eintrag).

**Welle 2 (14 Dateien, gleiche Methode; Bearbeiter 55 + Prüfer 41 Suchen):** NAPLAN – Entscheidung gegen automatische Aufsatzbewertung im Dezember 2017, veröffentlicht Ende Januar 2018 (startDate 2018-07 → 2017-12). iFlytek – kein KI-Einbau 2022 belegt, TL[0] auf die Spark-Vorstellung am 06.05.2023. BMW/Kohler/MaxMara – CBBC-Quelle (Regeln 2025) durch AP 16.03.2021 und China Daily (PIPL, 21.08.2021) ersetzt. DevTernity – Gründung 2015 belegt (AIN.UA). Cisco/DeepSeek – ZwillGen-Quelle vom 18.03.2025, TL[3] auf 2025-03. AI Portrait Ars – Quellendatum 2019-07. 139.000 Skripte – Quellendaten 26.11. und 16.12.2024, WGA-Brief Dezember 2024. Character.AI/Floyd – Daily Dot 24.10.2024 statt 18.12.2024. Porcha Woodruff – Atlas-of-Surveillance-Seite existiert (bleibt). YouTube-Creator – 2010 kam der „Safety Mode“, nicht der Restricted Mode. Elfenbeinküste – zweite unabhängige Quelle (Africa Defense Forum, Nov. 2024), Folgen-Eintrag geteilt (RFI 2024-11, ANSSI-Dementi 2025-05). **Scope nach der Aufnahmeregel:** East-Micronesia-Kabel, Sri Lanka Online Safety Act und Dominikanische Republik (Massendeportation) sind jetzt Kontextfälle. **Grenzfall für den Eigner: Dominikanische Republik** (Sev 5) – biometrische Erfassung und Wiedererkennung per Gesichtserkennung belegt, dass der Abgleich über Festnahme/Abschiebung mitentscheidet, belegt keine Quelle (Festnahmen laut Amnesty/CHRGJ nach Racial Profiling); rückgängig durch Entfernen der 4 Scope-Felder. Psychologin: bnlaw-Tausch weiter offen (Ersatz-PDF nicht bestätigt; Kandidaten: AustLII TASSC 35 schon in asm:sources, Examiner 8573062).

Neue offene Punkte (nicht geändert): **china-iflytek – Titel/Beschreibung behaupten als Tatsache, das Gerät habe den Text erzeugt; laut Reuters warfen Nutzer das vor, iFlytek nannte einen Drittanbieter-Inhalt (Kernaussage, wichtig).** usa-character-ai-floyd (Inc.-Artikel nicht auffindbar, Zitat/Datum unbestätigt), naplan (Perelman leitete Writing Across the Curriculum am MIT), usa-139-000 (rund 53.000 Filme und 85.000 TV-Episoden statt „139.000 Filme und Fernsehserien“), sri-lanka (GNI-Aussage unbestätigt), mikronesien (Kabel laut Converge Digest Mai 2026 fertig), elfenbeinküste (Datum DAIDAC-Quelle), cisco-deepseek TL[3] (Satz ohne eigene Quelle), dominikanische-republik TL 2025-06-10 (CHRGJ-Aussage unbestätigt).

**Nach Integration (11:45):** `sync-index.js` (6 aktualisiert), Validator `--all`: 2481 ohne ERROR, 44 mit je 2 ERROR (fehlende TL/affectedRights der neuen Fälle), 420 WARN; Audit 0; Bundles (Lite 6,6 MB), Sitemap (2515 URLs), Feed neu. Lokal: 2353 aktive Fälle in 112 Ländern (live 2284/113).

### TL-Welle 4 und Browser-QA S17 (Session „Projektpunkte Abstimmung“)

**S17 (`3a23601`, 12 Dateien, alles im Browser gegengeprüft):** Kartenseite – geschlossenes Detail-Panel ragte aus `.map-wrapper`, Seite 324-400 px verschiebbar → `overflow: clip`, Filterpanel-Höhe relativ zum Kartenbereich. Radar – gleicher Fehler → `#radar-detail { position: fixed }`. Ticker verdeckte die letzte Zeile von Detail-Panel/Weltweit-Liste → `padding-bottom` in Ticker-Höhe. Career – `I18n` hängt nicht an `window`, deshalb war career.html auf EN komplett deutsch → `typeof I18n` statt `window.I18n` (3 Stellen). methodik-career – Quellentabelle scrollt mobil im eigenen Kasten. `?v=` hochgezählt. Alle 11 Seiten: Konsole fehlerfrei, EN ohne fehlende Keys. Offen (B10): Breite des Berufe-Selects auf career.html; S2 og:locale bleibt de_DE.

**TL-Welle 4 (`6d4e372`):** 16 Timelines gebaut, 5 mit Websuche gegengeprüft und übernommen (Facebook-Black-Friday, 3× Grok, IARPA-Janus). 11 zurückgesetzt, weil das Suchkontingent nach 212 Suchen erschöpft war (Build 136, Verify 76). Die gebauten Fassungen liegen in `scripts/workflows/tl-welle-4-built-2026-10-30/` (README), es fehlt nur die Gegenprüfung. **Lehre: TL-Bau + Gegenprüfung braucht rund 20 Suchen je Datei, also höchstens 8 Dateien je Turn.**
Hinweise außerhalb des Mandats (nicht geändert): grok-liefert (Infosecurity-Quelle mit 2024 datiert, richtig Juli 2025; Lumenova-Experiment vom 29.08.2025; Name „Global:“ vs. Slug usa-), grok-verbreitet (Sherwood-Quelle ohne Datum, title_en der AIID-Quelle deutsch), grok-verstaerkt (Zitat laut Daily Beast „Must be your ears“, title_en der AIID-Quelle deutsch, kein location.geo), iarpa („Google-Memos November 2020 und Mai 2021“ nicht verifizierbar; NIST-Readme-Datum 2017-12-11). **8 der 73 neuen Fälle haben kein location.geo.**

## 4. Werkzeug-Lektion

Ein Websuche-Workflow pro Turn bleibt die Regel: Welle 1 (16 Dateien, 4 Build- + 4 Verify-Agenten) hat das Kontingent schon in der Gegenprüfung aufgebraucht. Für den TL-Bau neuer Fälle **Wellen zu 8 Dateien** oder Build und Verify in getrennten Turns einplanen. Parallel-Sessions haben je ein eigenes Kontingent; eine zweite Session kann eine Welle übernehmen (hier Welle 4), wenn sie das fertige Wellen-Skript unverändert startet.

## 5. Push trotz fehlender Timelines

44 neue Fälle haben noch keine Timeline (11 davon gebaut, aber nicht gegengeprüft) und keine affectedRights (Validator: je 2 ERROR). Der Projekteigner hat den Push trotzdem freigegeben: Die 44 Fälle erscheinen vorerst ohne Timeline, `validate-timelines.js --all` meldet bis zum TL-Bau 44 Dateien mit je 2 ERROR. Damit sind auch die S17-Frontend-Fixes und die B14-Korrekturen live.

## 6. Nächste Schritte

1. **TL für die restlichen 44 neuen Fälle**: zuerst die 11 gebauten aus `scripts/workflows/tl-welle-4-built-2026-10-30/` kopieren und nur gegenprüfen, dann Welle 2b, 3, 5 (33 Dateien; höchstens 8 Dateien je Workflow oder auf mehrere Sessions verteilt).
2. Mistral-7B-Haupttext klären (siehe §2), Typ für Population One.
3. Validator `--all` → `sync-index.js` → `bundle-incidents.js` → `generate-sitemap.js` → `generate-feed.js` → Audit → **Push nach Freigabe**.
4. Eigner-Entscheidungen wie in #15 (Impressum, Kontaktweg, AIAAIC-Lizenz, Career B10, Radar B11, Ulmen-Fernandes, Grenzfälle, Labor-Zählregel, Dubletten-Vorlage).
