# Dubletten-Vorlage (Stand 2026-10-23)

Korpusweiter Scan: Namens-/Akteurs-Ähnlichkeit, Land, Jahr und gemeinsame Quell-URLs über alle 2428 nicht zurückgezogenen Fälle ergaben **177 Kandidatenpaare**. Je Paar hat ein Agent beide Dateien gelesen (ohne Websuche) und entschieden. **Nichts davon ist umgesetzt.** Umsetzung nach dem beschlossenen Verfahren „Zusammenlegen mit Verweis" (`asm:mergedInto`, siehe Übergabe #15), je Gruppe Bearbeiter + unabhängiger Prüfer.

| Ergebnis | Paare |
|---|---|
| Dublette | 83 |
| Teil-Dublette | 22 |
| verschieden | 72 |
| unklar | 0 |

Hinweis: Einige Slugs tauchen in mehreren Paaren auf (Gruppen aus 3+ Dateien); vor der Umsetzung zu Gruppen zusammenfassen.

## Dubletten (83)

### 1. `frankreich-caf-algorithmus-diskriminierung-klage` + `frankreich-cnaf-familienkassen-scoring-algorithmus-koalition-aus-15-ngos-klagt-vor`

- Score 0.54, gemeinsame Quell-URLs: 2
- **Bleibt:** `frankreich-caf-algorithmus-diskriminierung-klage`
- **Begründung:** Beide beschreiben dieselbe Klage von 15 NGOs (La Quadrature du Net, Amnesty) vor dem Conseil d'État am 15.10.2024 gegen den CNAF-Risiko-Scoring-Algorithmus. Gleiche Akteure, gleiche Event-Phase, zwei identische Quellen-URLs. Der startDate-Unterschied (2010 gegenüber 2024-10-15) kommt nur daher, dass a das Einführungsjahr der Infrastruktur als Datum führt.
- **Übernehmen:** EDRi-Quelle (2026-01-20, 10 neue Organisationen). startDate auf 2024-10-15 setzen, weil das Ereignis die Klage ist. TL-Einträge übernehmen: 2025 interne CNAF-Studie räumt Diskriminierung ein, 2026-01-15 CNAF veröffentlicht Quellcode und die Koalition wächst auf 25 Organisationen. Liste der Score-Faktoren aus der Beschreibung übernehmen (niedriges Einkommen, Arbeitslosigkeit, benachteiligte Viertel, Mietanteil, Behinderung). Doctrine-Datum abgleichen: a nennt 2023-11 (LQDN), b nennt 2023-12 (Lighthouse/Le Monde).

### 2. `usa-face-id-ice-drivers-license` + `usa-rekognition-immigration-ice`

- Score 0.54, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-rekognition-immigration-ice`
- **Begründung:** Beide beschreiben die Enthüllung vom Juli 2019 durch Georgetown-Dokumente und die Washington Post: ICE durchsuchte DMV-Führerscheindatenbanken per Gesichtserkennung ohne Einwilligung oder richterliche Genehmigung. Gleiches Datum (2019), gleicher Akteur, gleiche Event-Phase. b ergänzt nur den Amazon-Rekognition-Kontext. a hat nur eine Quelle, und die stammt von 2016, also aus der Zeit vor dem Ereignis.
- **Übernehmen:** TL-Einträge aus a übernehmen: doctrine 1994 Driver's Privacy Protection Act, consequences 2021-06 GAO-Bericht zur Clearview-Nutzung durch Bundesbehörden, consequences 2022-05 Georgetown-Bericht 'American Dragnet' (ICE hat Führerscheinfotos von einem Drittel aller US-Erwachsenen gescannt). Den 'American Dragnet'-Befund in die Beschreibung aufnehmen. verificationLevel abgleichen (a: 4, b: 3). Der Slug von a ('face-id') ist irreführend und spricht zusätzlich dafür, a aufzulösen.

### 3. `frankreich-ki-gestuetzte-videoueberwachung-bei-olympia-2024-wird-zum-europaeischen` + `frankreich-ki-olympia-ueberwachung`

- Score 0.53, gemeinsame Quell-URLs: 1
- **Bleibt:** `frankreich-ki-olympia-ueberwachung`
- **Begründung:** Beide beschreiben dieselbe KI-Videoüberwachung (VSA) bei Olympia 2024 in Paris auf Grundlage des Olympia-Gesetzes 2023: gleiche Akteure, gleiches Event (Juli 2024), gemeinsame Lawfare-Quelle. Der startDate-Unterschied (2023-03 gegenüber 2024-07) folgt nur aus einem anderen Anker (Gesetz statt Einsatz).
- **Übernehmen:** Quellen Scientific American und The Conversation übernehmen. Akteure ergänzen: Polizeipräfektur Paris, SNCF und die vier Anbieter Wintics (Cityvision), Videtics, Orange Business und ChapsVision. Detail übernehmen: Gesetz Nr. 2023-380, Art. 10, und acht erkannte 'verdächtige Ereignisse'. TL-Einträge übernehmen: infrastructure 2015-2022 Ausbau des Kamera-Ökosystems, doctrine 2023-2024 Vergabe der vier Aufträge, event 2024-07-26 Start der Spiele. Die Aussage 'verlängert bis 2027' NICHT übernehmen, denn b ist mit Verfassungsrat 2025 und Neuauflage bis 2030 aktueller. Severity abgleichen (a: 4, b: 3). startDate 2024-07 erwägen.

### 4. `portugal-cnpd-suspendiert-worldcoin-iris-scan-operation-fuer-90-tage-wegen-datenerfassung` + `portugal-datenschutzbehoerde-verhaengt-90-tage-stopp-gegen-worldcoin-2024`

- Score 0.53, gemeinsame Quell-URLs: 1
- **Bleibt:** `portugal-cnpd-suspendiert-worldcoin-iris-scan-operation-fuer-90-tage-wegen-datenerfassung`
- **Begründung:** Identisches Ereignis: Die portugiesische CNPD verhängt im März 2024 einen 90-Tage-Stopp gegen den Worldcoin-Iris-Scan wegen Erfassung Minderjähriger, rund 300.000 Gescannte. Gleiche Akteure, gemeinsame Quelle (Biometric Update), nahezu identische Timeline.
- **Übernehmen:** TechCrunch-Quelle (2024-03-26) übernehmen. startDate präzisieren auf 2024-03-26. Das TL-Event-Datum in a lautet 2024-03-25 und sollte auf 26 korrigiert werden, laut den Quellen in b. TL-Eintrag übernehmen: doctrine 2024-03-06 Spanien (AEPD) sperrte kurz zuvor mit gleichem Vorwurf. Konsequenz in a ('zeitgleich') entsprechend anpassen. Detail übernehmen: Verweigerung von Lösch- und Widerrufsrechten. Severity abgleichen (a: 3, b: 4).

### 5. `uk-passfoto-pruefdienst-benachteiligt-dunkelhaeutige-frauen-2020` + `uk-passfoto-pruefer-benachteiligt-menschen-mit-dunkler-haut-2020`

- Score 0.53, gemeinsame Quell-URLs: 1
- **Bleibt:** `uk-passfoto-pruefdienst-benachteiligt-dunkelhaeutige-frauen-2020`
- **Begründung:** Beide beschreiben dieselbe BBC-Untersuchung vom Oktober 2020 zum automatischen Passfoto-Prüfer des HM Passport Office: gleiche Akteure, gleiches Datum, gleiche Timeline-Struktur (2016 Einführung, 2019-10 bekannte Verzerrung, 2020-10 BBC), gemeinsame PetaPixel-Quelle.
- **Übernehmen:** Quelle Voice Online (2020-10-08, Colourism) übernehmen. In die Beschreibung aufnehmen: Frauen mit der dunkelsten Haut wurden viermal so oft abgewiesen wie die mit der hellsten; Anekdote der schwarzen Studentin mit fälschlich 'offenem Mund'; interne Dokumente belegen, dass die Behörde die Verzerrung vorab kannte. Konsequenz-Eintrag 'Vorwurf des strukturellen Colourism' ergänzen.

### 6. `usa-klage-gegen-workday-wegen-diskriminierender-ki-bewerberauswahl-2023` + `usa-mobley-v-workday-sammelklage-gegen-ki-bewerber-screening-wegen-altersdiskriminierung`

- Score 0.53, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-klage-gegen-workday-wegen-diskriminierender-ki-bewerberauswahl-2023`
- **Begründung:** Dasselbe Verfahren Mobley v. Workday (N.D. Cal., 3:23-cv-00770). Beide Timelines enthalten dieselben Stationen: Klage 2023-02-21, Zulassung als 'Agent' 2024-07, vorläufige ADEA-Sammelklage 2025-05-16. b setzt nur einen anderen Anker (Zertifizierung statt Klageeinreichung). Die Zertifizierung ist in a bereits als Konsequenz enthalten, ein eigenständiges Folgeereignis liegt also nicht vor.
- **Übernehmen:** Quellen Clearinghouse (Fall 44074) und Inside Tech Law (2025-06) übernehmen. In die Beschreibung aufnehmen: Richterin Rita Lin, laut Workday 1,1 Milliarden automatisiert abgelehnte Bewerbungen, erster großer Test der Haftung von KI-Anbietern als Arbeitgeber-Agent. TL-Eintrag übernehmen: doctrine 2021-06 Mobley reicht EEOC-Beschwerde ein. Systemnamen 'Workday Applicant Recommendation' ergänzen. Severity abgleichen (a: 4, b: 3).

### 7. `usa-nicht-einvernehmliche-ki-nacktbilder-an-westfield-high-school-2023` + `usa-westfield-nj-schul-deepfake-mani`

- Score 0.53, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-westfield-nj-schul-deepfake-mani`
- **Begründung:** Identischer Vorfall: KI-Nacktbilder von Schülerinnen der Westfield High School (New Jersey), bekannt geworden im Oktober 2023, Francesca Mani als Betroffene und Fürsprecherin. Gleicher Ort, gleiches Datum, gemeinsame CBS-Quelle. b ist deutlich vollständiger: ClothOff, Schulreaktion, Zivilklage 2024, NJ-Gesetz 2025, TAKE IT DOWN Act, Klage gegen ClothOff 2025-10.
- **Übernehmen:** CNN-Quelle (2023-11-04) übernehmen. Detail 'mehr als 30 Mitschülerinnen' und polizeiliche Ermittlung in die Beschreibung aufnehmen, mit Vorsicht, da b von 'mindestens einem Schüler' und Zehntklässlerinnen spricht. Den TL-Eintrag aus a 'NJ stellt 2024 unter Strafe' NICHT übernehmen: Er widerspricht dem in b dokumentierten Gesetz vom 2. April 2025.

### 8. `australien-snapchats-my-ai-gibt-vermeintlich-13-jaehriger-bedenkliche-ratschlaege-2023` + `usa-snapchats-my-ai-chatbot-gibt-minderjaehrigen-bedenkliche-ratschlaege-2023`

- Score 0.52, gemeinsame Quell-URLs: 0
- **Bleibt:** `usa-snapchats-my-ai-chatbot-gibt-minderjaehrigen-bedenkliche-ratschlaege-2023`
- **Begründung:** Beide beschreiben denselben Test vom März 2023: Snapchats My AI berät eine vorgeblich 13-Jährige zu einem Treffen bzw. ersten Sex mit einem 31-jährigen Mann. Gleiche Akteure (Snap, OpenAI), gleiches Datum, gleiche Event-Phase. Die Ortsangabe 'Australien' in a stützt sich nur auf eine Zusatzquelle (Tyla, September 2023, Warnung einer australischen Mutter). Der Kerntest stammt aus den USA (Fox News 2023-03-13 bzw. Washington Post/Center for Humane Technology 2023-03-14).
- **Übernehmen:** Quellen Fox News (2023-03-13) und Tyla (2023-09-07) übernehmen. Tyla als zusätzlichen Konsequenz-Eintrag 2023-09 aufnehmen (Warnung einer australischen Mutter). Details übernehmen: Verheimlichen des Treffens vor den Eltern, Kaschieren von Blutergüssen. TL-Einträge übernehmen: infrastructure 2023-02-27 (präzises Startdatum), consequences 2023-04-19 Freischaltung für alle Nutzer, Einführung von Alterssignal und Eltern-Funktionen.

### 9. `china-forschende-der-universitaet-wuhan-scrapen-maskierte-gesichter-fuer` + `china-smfrd-datensatz-kritisiert-fuer-aushoehlung-der-privatsphaere-2020`

- Score 0.52, gemeinsame Quell-URLs: 1
- **Bleibt:** `china-forschende-der-universitaet-wuhan-scrapen-maskierte-gesichter-fuer`
- **Begründung:** Beide beschreiben dieselbe Veröffentlichung der Masken-Gesichtsdatensätze der Universität Wuhan im März 2020. a behandelt RMFD, b behandelt SMFRD; beide stammen aus derselben Veröffentlichung (arXiv 2003.09093, die in a zitiert ist). Gleiche Akteure, gleiches Datum, gleiche Kritik, gleiche Quelle Privacy International (Beispiel 4017). Die Aufteilung nach Datensatz ergibt keine zwei Vorfälle.
- **Übernehmen:** Titel und Beschreibung auf beide Datensätze erweitern (RMFD und SMFRD). SMFRD-Detail übernehmen: aus Labeled Faces in the Wild abgeleitet, Masken simuliert. Princeton-CITP-Quelle (2020-10-21) übernehmen: Datensätze werden trotz Zurückziehung weiter genutzt. Den TL-Eintrag infrastructure 2007 (LFW als Standard-Datensatz) ggf. als Kontext übernehmen. SMFRD in asm:actors-Systemen ergänzen. Das Datum der Privacy-International-Quelle abgleichen (a: 2020-04-15, b: 2020-06-04).

### 10. `usa-snapchats-my-ai-chatbot-gibt-minderjaehrigen-bedenkliche-ratschlaege-2023` + `usa-snapchats-my-ai-gibt-vermeintlich-13-jaehriger-ratschlaege-zu-sex-mit-erwachsenem-2023`

- Score 0.58, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-snapchats-my-ai-chatbot-gibt-minderjaehrigen-bedenkliche-ratschlaege-2023`
- **Begründung:** Beide beschreiben dieselben Tests vom März 2023 (Washington Post und Center for Humane Technology) an Snapchats My AI, gleicher Akteur Snap, gleiche WaPo-Quelle, gleiches Datum. Der 13-Jährige-Test (Sex mit 31-Jährigem) steht bereits in der Beschreibung von a; b ist nur dessen Zuspitzung.
- **Übernehmen:** Quelle fastcompany.com (2023-03-10), Akteur Center for Humane Technology (Aza Raskin, Tristan Harris), genaues Startdatum von My AI 2023-02-27, Detail 'Eltern über Reise belügen'; Severity 4 aus b prüfen (a hat 3).

### 11. `uk-arzneimittelbehoerde-mhra-teilt-sicherheitsbedenken-zu-babylon-triage-chatbot-2020` + `uk-babylon-health-insolvenz-nach-jahrelangen-mhra-bedenken-zur-ki-triage-und`

- Score 0.57, gemeinsame Quell-URLs: 1
- **Bleibt:** `uk-arzneimittelbehoerde-mhra-teilt-sicherheitsbedenken-zu-babylon-triage-chatbot-2020`
- **Begründung:** Derselbe Vorfall: Sicherheitsmängel des Babylon-Triage-Chatbots (verpasste Herzinfarkt-/Thrombose-Symptome), MHRA-Meldung 2018-05 als Event in beiden Timelines, MHRA-Brief an David Watkins, gleiche TechCrunch-Quelle 2021-03-05. a führt die Insolvenz bereits als Folge, b führt den MHRA-Brief als Folge; die Insolvenz ist kein eigenständiger KI-Vorfall, sondern Konsequenz.
- **Übernehmen:** Quellen TechCrunch 2023-08-31 (Insolvenz) und AIAAIC-Eintrag (ggf. statt Wikipedia), TL-Eintrag 2017-12 versuchte Unterdrückung des CQC-Berichts, Insolvenz-Details (Bewertung 4,2 Mrd. USD, Verkauf an eMed Healthcare UK, GP at Hand mit über 100.000 Patient:innen), Akteur eMed. Widersprüche klären: Datum MHRA-Brief (a: 2020-12-04, b: 2021) und Insolvenzdatum (a: 2023-08, b: 2023-09-11).

### 12. `usa-lancaster-country-day-school-pennsylvania-59-anklagepunkte-gegen-zwei-schueler-wegen` + `usa-schueler-erstellen-nacktdeepfakes-von-rund-50-mitschuelerinnen-der-lancaster-country`

- Score 0.57, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-lancaster-country-day-school-pennsylvania-59-anklagepunkte-gegen-zwei-schueler-wegen`
- **Begründung:** Derselbe Vorfall: zwei Schüler der Lancaster Country Day School erstellen Oktober 2023 bis Mai 2024 KI-Nacktbilder von 48 Mitschülerinnen, Schule meldet ersten Hinweis im November 2023 nicht, Anklage Dezember 2024. Gleiche Inquirer-Quelle, gleicher Ort. a setzt das Datum auf die Anklage, b auf den Tatbeginn.
- **Übernehmen:** Quellen newsnationnow.com (2024-09-05) und govtech.com (2024-09-09), TL-Eintrag 2014-12-31 Pennsylvania-Meldepflichtreform, Details zweiter Hinweis Mai 2024 und Rücktritt von Schulleiter und Vorstandsvorsitzendem nach Elternklage, Akteur 'zwei Schüler' (a nennt nur die Staatsanwaltschaft). Prüfen: startDate eher 2023-10 als Ereignisbeginn, Severity 4 (b) vs. 3 (a), Datumsdiskrepanz WHYY-Quelle 2025 vs. Bewährungsurteil 2026-03-25.

### 13. `usa-randal-quran-reid-fehl-festnahme-durch-gesichtserkennung-in-louisiana-sechs-tage-in` + `usa-randal-reid-durch-clearview-ai-gesichtserkennung-zu-unrecht-inhaftiert-2022`

- Score 0.57, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-randal-reid-durch-clearview-ai-gesichtserkennung-zu-unrecht-inhaftiert-2022`
- **Begründung:** Derselbe Betroffene (Randal Quran Reid), dieselbe Fehlfestnahme November 2022 durch Clearview-Treffer des Jefferson Parish Sheriff's Office, sechs Tage Haft, Klage 2023-09, Vergleich 200.000 USD 2025-05. Gleiche ABC-Quelle. a setzt startDate auf die Klage (2023-09), b korrekt auf das Ereignis (2022-11).
- **Übernehmen:** ACLU-Quelle (Serie von über einem Dutzend Fehlfestnahmen, fast alle Opfer Schwarz), exakte Daten 2022-11-25 (Festnahme) und 2025-05-13 (Vergleich), Detail 'credible source' statt FRT-Nennung im Haftbefehl, Haft in DeKalb County, zweiter Vorname Quran, Typ discrimination ergänzen.

### 14. `iran-nazer-app-als-crowdsourced-denunziations-plattform-unter-noor-plan-2024-un` + `iran-noor-plan-und-nazer-app-drohnen-gesichtserkennung-und-buerger-denunziation-gegen`

- Score 0.56, gemeinsame Quell-URLs: 1
- **Bleibt:** `iran-noor-plan-und-nazer-app-drohnen-gesichtserkennung-und-buerger-denunziation-gegen`
- **Begründung:** Beide behandeln den Noor-Plan ab April 2024 mit Nazer-App, Drohnen und Gesichtserkennung gegen Frauen ohne Hijab, gleicher Akteur FARAJA, gleiches startDate, gleiche CNN-Quelle zum UN-Bericht vom 14.03.2025, identische Typen und Severity. b ist breiter (Gesamtapparat), a fokussiert die App, beschreibt aber denselben Vorfall.
- **Übernehmen:** Quellen filter.watch (2024-10-07) und FDD (2025-03-14), ggf. statt Wikipedia; Details: mindestens 618 verhaftete Frauen 2024, Ausweitung der Meldekategorien (Essen im Ramadan, 'Verhalten gegen die öffentliche Moral'), Ambulanzen als Fahrzeugkategorie, überproportionale Betroffenheit von Bahá'í- und sunnitischen Frauen, KI-Auswertung von Kennzeichen über FATA; TL-Einträge Nazer-Einführung 2023-09 und Parlamentsbeschluss Hijab-Gesetz 2023-09-20.

### 15. `predpol-predictive-policing` + `usa-predpol-la-aufloesung`

- Score 0.56, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-predpol-la-aufloesung`
- **Begründung:** Beide beschreiben den PredPol-Einsatz beim LAPD (Ort Los Angeles, gleiche Koordinaten), Rassismus-Kritik, LAPD-Ausstieg 2020 und The-Markup-Analyse 2021; identische Typen, Severity und Verifikation. a ist zwar allgemeiner formuliert, Timeline und Ort sind aber vollständig LA-bezogen. b hat die präzisere Timeline (Foothill 2011, Stop LAPD Spying 2018-05, Inspector General 2019-03) und den konventionsgerechten Slug.
- **Übernehmen:** Quellen LA Times 2020-04-21 und stoplapdspying.org (b hat nur eine Quelle); TL-Eintrag Umbenennung in Geolitica 2021; Akteur 'Diverse US-Polizeibehörden'. Doppelte Markup-URL in a nicht übernehmen. Vor Löschen von a prüfen, ob der alte Slug in Permalinks/Feed referenziert wird.

### 16. `uk-geheimer-home-office-algorithmus-ipic-steuert-abschiebungs-entscheidungen-fuer-41-000` + `uk-home-office-ki-ipic-steuert-41-000-abschiebungsverfahren-bei-verdacht-des`

- Score 0.56, gemeinsame Quell-URLs: 1
- **Bleibt:** `uk-geheimer-home-office-algorithmus-ipic-steuert-abschiebungs-entscheidungen-fuer-41-000`
- **Begründung:** Derselbe Vorfall: Enthüllung des Home-Office-Algorithmus IPIC durch Privacy International im November 2024, rund 41.000 Betroffene, Ein-Klick-Akzeptanz vs. Begründungspflicht bei Ablehnung, gleiche Privacy-International-Quelle, gleiche Folge (Beschwerde 2025-08).
- **Übernehmen:** Quelle Anadolu (aa.com.tr, 2024-11-12), exaktes Datum 2024-11-11, Akteur UK Visas and Immigration, TL-Kontext 2020-08 Abschaffung des 'rassistischen' Visa-Streaming-Tools. Nebenbefund: in a steht 'Fussfesseln' statt 'Fußfesseln'.

### 17. `usa-ap-recherche-openais-whisper-halluziniert-in-medizinischen-transkripten-2024` + `usa-openai-whisper-medizin-halluzinationen-nabla`

- Score 0.55, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-openai-whisper-medizin-halluzinationen-nabla`
- **Begründung:** Derselbe Vorfall: AP-Recherche vom 26.10.2024 zu Halluzinationen von OpenAIs Whisper im Klinik-Einsatz über Nabla (30.000 Kliniker, 40 Gesundheitssysteme, rund 7 Mio. Arztbesuche, Löschung der Original-Audios). Gleiches Datum, gleiche Akteure, gemeinsame Quellen Fortune und Healthcare Brew. b ist deutlich ausführlicher (5 Quellen, 6 TL-Einträge, Careless-Whisper-Studie).
- **Übernehmen:** Quelle Tom's Hardware (2024-10) aus a; sonst nichts Wesentliches, da b inhaltlich a vollständig abdeckt.

### 18. `uk-home-office-gibt-rassistischen-visa-streaming-algorithmus-auf-2020` + `uk-home-office-stoppt-rassistischen-visa-streaming-algorithmus-nach-jcwi-foxglove-klage`

- Score 0.9, gemeinsame Quell-URLs: 2
- **Bleibt:** `uk-home-office-stoppt-rassistischen-visa-streaming-algorithmus-nach-jcwi-foxglove-klage`
- **Begründung:** Dasselbe Ereignis: Das Home Office kündigt am 04.08.2020 nach der JCWI/Foxglove-Klage an, das Visa-Streaming-Tool (Ampel-Logik, seit 2015) einzustellen. Gleiche Akteure, gleicher Ort, gleiche Schwere und Verifikation. Zwei Quellen sind identisch (Foxglove, TechCrunch). Beide Dateien stammen aus verschiedenen AIAAIC-Einträgen (1644 und 1643) desselben Vorfalls.
- **Übernehmen:** Quelle computerweekly.com/news/252487195 (Home Office drops 'racist' visa algorithm) übernehmen. Optional den Doktrin-Aspekt aus a ergänzen: Nationalität als Risikofaktor und selbstverstärkender Bias-Kreislauf. Das Detail 'Einstellung ab 7. August' ist in b bereits vorhanden.

### 19. `usa-ice-mobile-fortify-app-identifiziert-frau-zweimal-falsch-2025` + `usa-ice-mobile-fortify-fehlidentifikation-oregon`

- Score 0.83, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-ice-mobile-fortify-fehlidentifikation-oregon`
- **Begründung:** Dasselbe Ereignis: Mobile Fortify liefert bei einer ICE-Razzia in Oregon für dieselbe Frau zwei verschiedene Namen, belegt durch denselben 404-Media-Artikel und die Aussage eines CBP-Beamten. Gleicher Ort und gleiche Akteure. In a ist das Datum nur das Veröffentlichungsjahr (2025 bzw. Event 2025-11 = Publikation), b nennt das Ereignis (2025-08) und mehr Fallbezug (Erntearbeiterin, Name 'Maria', Bodycam).
- **Übernehmen:** Quellen EFF (Rights Organizations Demand Halt to Mobile Fortify, 2025-11) und ACLU (ice-face-recognition) übernehmen. Als Konsequenz ergänzen: ACLU und EFF fordern 2025-11 den Stopp des Programms. Detail ergänzen: Abgleich mit rund 200 Mio. Datensätzen. Widerspruch beim Rollout klären: a nennt Juni 2025, b nennt Frühjahr bzw. 2025-03.

### 20. `usa-ki-plattform-civitai-erzeugt-mutmasslich-kinderpornografische-bilder-2023` + `usa-ki-plattform-civitai-generierte-missbrauchsdarstellungen-von-kindern-2023`

- Score 0.81, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-ki-plattform-civitai-generierte-missbrauchsdarstellungen-von-kindern-2023`
- **Begründung:** Identischer Vorfall: Die 404-Media-Recherche (Dezember 2023) zu CSAM-artigen Bildern auf CivitAI, danach beendet OctoML die Zusammenarbeit (Engadget, 12.12.2023). Beide Quellen und beide Akteure sind identisch. Unterschied nur im Event-Datum: 2023-12-05 gegenüber 2023-12-06.
- **Übernehmen:** Inhaltlich kaum etwas: Zitat bzw. Einschätzung von OctoML-Mitgründer Thierry Moreau optional übernehmen. Publikationsdatum des 404-Media-Artikels vereinheitlichen (05. oder 06.12.2023). In b sind die Geo-Koordinaten Boise/Idaho, der Ortsname lautet aber nur 'USA': angleichen. Eigenständig bleibt usa-ki-plattform-civitai-belohnt-deepfakes-realer-personen-mit-bounties-2023 (anderes Ereignis).

### 21. `usa-biden-deepfake-robocall` + `usa-ki-robocall-mit-gefaelschter-biden-stimme-vor-new-hampshire-vorwahl-2024`

- Score 0.77, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-biden-deepfake-robocall`
- **Begründung:** Derselbe Vorfall: Robocalls mit KI-Biden-Stimme vor der Vorwahl in New Hampshire im Januar 2024, Auftraggeber Steve Kramer, FCC-Strafe von 6 Mio. USD, Freispruch im Juni 2025. Die NBC-Quelle ist identisch. Abweichung beim Datum: a nennt den 21.01. ('zwei Tage vor der Vorwahl' am 23.01.), b den 22.01. a ist die ältere, redaktionell korrigierte Datei (correctionNote, aiGenerated false) mit mehr Quellen (4, darunter NH DOJ und FCC-Dokument) und Akteuren (Lingo Telecom, FCC).
- **Übernehmen:** Quelle fcc.gov/document/fcc-issues-6m-fine-nh-robocalls (2024-09-26) übernehmen. TL-Einträge übernehmen: 2024-09-26 (6 Mio. USD Strafe gegen Kramer, 1 Mio. USD gegen Lingo Telecom) und Freispruch präzise auf 2025-06 datieren. startDate eventuell auf 2024-01-21 präzisieren. NICHT übernehmen: die Behauptung 'erster bekannter Deepfake-Einsatz in einer US-Wahl' aus b, weil die correctionNote in a solche Erstbehauptungen bewusst entfernt hat. Schwere vereinheitlichen (a: 4, b: 3).

### 22. `usa-microsoft-schaltet-twitter-chatbot-tay-nach-16-stunden-wegen-rassistischer-tweets-ab` + `usa-microsoft-tay-ki-chatbot-wird-in-16-stunden-zum-rassistischen-nazi-bot-2016`

- Score 0.74, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-microsoft-schaltet-twitter-chatbot-tay-nach-16-stunden-wegen-rassistischer-tweets-ab`
- **Begründung:** Derselbe Vorfall: Microsofts Twitter-Bot Tay, gestartet am 23.03.2016 und nach 16 Stunden am 24.03.2016 abgeschaltet. Zwei Quellen sind identisch (TechCrunch, CBS). a hat die vollständigere TL (6 Einträge), eine bessere Drittquelle (IEEE Spectrum statt Wikipedia) und den sachlicheren Titel.
- **Übernehmen:** Optional den TL-Eintrag Infrastruktur 2014 übernehmen: Microsoft baut mit XiaoIce in China einen lernenden Social-Chatbot auf. Die Wikipedia-Quelle ist entbehrlich. Schwere vereinheitlichen (a: 3, b: 2).

### 23. `usa-robert-williams-detroit-erste-oeffentlich-bekannte-falsch-verhaftung-durch` + `usa-robert-williams-in-detroit-zu-unrecht-aufgrund-fehlerhafter-gesichtserkennung`

- Score 0.74, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-robert-williams-detroit-erste-oeffentlich-bekannte-falsch-verhaftung-durch`
- **Begründung:** Derselbe Vorfall: Falschverhaftung von Robert Williams am 09.01.2020 nach einem Gesichtserkennungs-Fehltreffer, ACLU-Klage 2021, Vergleich am 28.06.2024. Zwei Quellen sind identisch (ACLU-Fallseite, Michigan Public). a hat die vollständigere TL (6 Einträge, u. a. NIST-Bias-Studie 2019-12) und die ACLU-Pressemitteilung als Primärquelle. b hat die genaueren Fakten in der Beschreibung.
- **Übernehmen:** Quelle technologyreview.com (2021-04-14) übernehmen. Details aus der Beschreibung von b übernehmen: Verhaftung vor dem Haus in Farmington Hills, unscharfes Überwachungsbild vom Shinola-Diebstahl 2018, Williams nur auf Rang 9 der Trefferliste, Abgleich über das System der Michigan State Police. DataWorks Plus als eigenen Akteur aufnehmen. Typ 'surveillance' ergänzen. Ortsangabe um Farmington Hills erweitern.

### 24. `global-algorithmus-verstaerkt-rechtsgerichtete-politik-inhalte-2021` + `usa-twitter-ki-algorithmischer-bias`

- Score 0.73, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-twitter-ki-algorithmischer-bias`
- **Begründung:** Beide Dateien beschreiben dasselbe Ereignis: die von Twitter am 21.10.2021 veröffentlichte Studie zur stärkeren Verbreitung rechter Politiker:innen und Medien in 6 von 7 Ländern. Die Primärquelle (blog.x.com) ist identisch. b ist die ältere, redaktionell korrigierte Datei (correctionNote, aiGenerated false), hat die längere TL (6 Einträge bis 2026) und den präziseren Termin. Ihr fehlt nur eine Zweitquelle.
- **Übernehmen:** Quelle washingtonpost.com (2021-10-22) übernehmen, damit b mindestens 2 Quellen hat. TL-Eintrag 2021-12 übernehmen: Peer-Review-Veröffentlichung (PNAS). Detail übernehmen: randomisiertes Experiment mit fast 2 Mio. täglich aktiven Konten. Prüfen, ob der Ort statt San Francisco/US besser als länderübergreifend markiert wird (Studie über 7 Staaten).

### 25. `tuerkei-deepfake-video-von-istanbul-buergermeister-imamoglu-vor-kommunalwahlen-2024` + `tuerkei-imamoglu-deepfake-kommunalwahl-2024`

- Score 0.73, gemeinsame Quell-URLs: 2
- **Bleibt:** `tuerkei-imamoglu-deepfake-kommunalwahl-2024`
- **Begründung:** Derselbe Vorfall: Das am 22.01.2024 verbreitete Wahlkampfvideo, in dem eine KI-Stimme İmamoğlu die AKP für U-Bahn-Projekte loben lässt, vor der Kommunalwahl am 31.03.2024. Zwei Quellen sind identisch (Balkan Insight, Al Jazeera). b hat 5 Quellen, vorsichtigere und belegte Formulierungen (Urheber nicht belegt), die korrekte Schreibweise İmamoğlu und das präzise Datum.
- **Übernehmen:** Optional übernehmen: den Hinweis auf einen zweiten manipulierten Clip zu angeblichen Bus-Unfällen, nur wenn eine der Quellen (vermutlich Al Jazeera) ihn trägt. Die Verhaftung İmamoğlus im März 2025 höchstens als Kontext-TL ergänzen, nicht als Folge des Deepfakes.

### 26. `israel-ki-system-habsora-gospel-generiert-bombenziele-in-gaza-2023` + `palaestina-habsora-gospel-ki-system-markiert-gebaeude-in-gaza-als-bombenziele-2023`

- Score 0.72, gemeinsame Quell-URLs: 1
- **Bleibt:** `israel-ki-system-habsora-gospel-generiert-bombenziele-in-gaza-2023`
- **Begründung:** Derselbe Vorfall: Einsatz des IDF-Zielsystems Habsora/Gospel im Gaza-Krieg ab Oktober 2023 (über 12.000 Ziele, Recherche von +972/Local Call). Gleicher Akteur und gleiche Geokoordinaten. a hat die Gospel-spezifische Primärquelle (+972 'mass assassination factory', 30.11.2023), NPR und eine vollständigere TL (6 Einträge). In b ist die +972-Quelle der Lavender-Artikel, der eigentlich zu den separaten Lavender-Dateien gehört.
- **Übernehmen:** Quelle Lieber Institute (lieber.westpoint.edu/gospel-lavender-law-armed-conflict) übernehmen. TL-Eintrag 2021-05 übernehmen: erste Kampferprobung in 'Guardian of the Walls'. Unit 8200 im Akteur ergänzen. Verifikationsstufe prüfen (b: 4, a: 3). addressCountry klären: a hat IL, b hat PS, im Korpus werden für Gaza beide Codes je 9-mal genutzt. Den Lavender-Artikel aus b nicht übernehmen (gehört zu gaza-lavender-ki-targeting bzw. israel-gaza-idf-nutzt-ki-system-lavender-..., die ihrerseits ein Dublettenpaar sein könnten).

### 27. `usa-amazon-warehouse-system-feuert-beschaeftigte-automatisch-wegen-mangelnder` + `usa-amazons-produktivitaets-system-adapt-kuendigt-lagerarbeiter-automatisiert-2019`

- Score 0.71, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-amazon-warehouse-system-feuert-beschaeftigte-automatisch-wegen-mangelnder`
- **Begründung:** Derselbe Vorfall: Enthüllung von The Verge am 25.04.2019 zu automatisierten Produktivitätskündigungen (rund 300 Entlassungen am Standort Baltimore BWI2). Gleiches startDate, gleiche MIT-Technology-Review-Quelle. a hat den präzisen Ort (Baltimore statt 'USA' mit Seattle-Koordinaten), die längere TL und Verifikationsstufe 4. Achtung: Die promotedFromCandidateId von b (aiaaic0364, '...terminates-sick-2020') deutet darauf hin, dass der AIAAIC-Eintrag ursprünglich ein anderes Ereignis meinte (2020, kranke Beschäftigte) und das Enrichment auf den Fall von 2019 abgedriftet ist. Zusätzlich existiert mit usa-amazon-warehouse-ki-kuendigung ein dritter Kandidat zum selben Sachverhalt (startDate 2017-08, Verge-Primärquelle).
- **Übernehmen:** Vice-Quelle (Internal Documents Show Amazon's Dystopian System..., 2019-04-25) übernehmen. Systemname ADAPT (Associate Development and Performance Tracker) als asm:systems ergänzen. Details 'time off task' und Verzicht auf Wasser- und Toilettenpausen übernehmen. Cluster-Prüfung mit usa-amazon-warehouse-ki-kuendigung (Verge-Primärquelle). Separat prüfen, ob AIAAIC0364 (2020) ein eigenständiger, nun fehlender Vorfall ist.

### 28. `uk-geheimer-home-office-algorithmus-ipic-beeinflusst-abschiebungen-von-41-000-migranten` + `uk-geheimer-home-office-algorithmus-ipic-steuert-abschiebungs-entscheidungen-fuer-41-000`

- Score 0.7, gemeinsame Quell-URLs: 1
- **Bleibt:** `uk-geheimer-home-office-algorithmus-ipic-steuert-abschiebungs-entscheidungen-fuer-41-000`
- **Begründung:** Derselbe Vorfall: Privacy International deckt im November 2024 das IPIC-System auf (rund 41.000 Betroffene, Akzeptanz-Bias, ICO-Beschwerde im August 2025). Gleicher Akteur, gleiche PI-Primärquelle, gleiches Datum. b hat bessere Quellen (LexisNexis, Computing statt Tasnim News), Verifikationsstufe 4 und die längere TL (inkl. FOI-Anfragen 2022). In der Beschreibung von a steht ein interner Arbeitsvermerk ('Beachte: GB ist nicht im EU-Scope...'). Dritter Kandidat zum selben Vorfall: uk-home-office-ki-ipic-steuert-41-000-abschiebungsverfahren-bei-verdacht-des.
- **Übernehmen:** Optional die Quelle humanrightsresearch.org übernehmen. Tasnim News nicht übernehmen. Typ 'surveillance' ergänzen. In b 'Fussfesseln' zu 'Fußfesseln' korrigieren. Cluster-Prüfung mit uk-home-office-ki-ipic-steuert-41-000-abschiebungsverfahren-bei-verdacht-des (enthält zusätzlich eine AA-Quelle).

### 29. `usa-deepfake-kampagnenvideo-legt-kamala-harris-faelschlich-abwertende-aussagen-in-den` + `usa-elon-musk-verbreitet-voice-clone-werbespot-mit-kamala-harris-2024`

- Score 0.69, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-elon-musk-verbreitet-voice-clone-werbespot-mit-kamala-harris-2024`
- **Begründung:** Derselbe Vorfall: das Parodie-Video von 'Mr Reagan' mit geklonter Harris-Stimme ('Diversity-Anstellung'), das Musk am 26.07.2024 ohne Parodie-Hinweis auf X teilte. Danach folgen AB 2839 (17.09.2024) und die gerichtliche Blockade (02.10.2024). Akteure identisch, beide Quellen von a sind in b enthalten. b hat das präzise Datum und 3 Quellen.
- **Übernehmen:** Detail 'über 130 Millionen Views auf X' aus a übernehmen. Sonst nichts, Quellen und TL sind in b vollständig enthalten. Eigenständig bleiben die anderen Harris-Dateien (KI-Bild in kommunistischer Uniform, McDonald's-Fake-Foto, Alexa-Wahlgründe).

### 30. `usa-google-bildersuche-unterrepraesentiert-weibliche-ceos-studie-2015` + `usa-studie-barbie-war-erste-frau-in-google-bildersuche-zu-ceo-2015`

- Score 0.61, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-google-bildersuche-unterrepraesentiert-weibliche-ceos-studie-2015`
- **Begründung:** Dieselbe Studie (Kay/Matuszek/Munson, UW + UMBC, ACM CHI) mit demselben Datum 2015-04-09, denselben Kennzahlen (11 vs. 27 Prozent, 7 Prozent Wahrnehmungseffekt) und derselben UW-Pressemitteilung als Quelle. b hebt nur das Barbie-Detail hervor.
- **Übernehmen:** Quelle news.cs.washington.edu (2015-04-09) übernehmen; Detail ergänzen, dass das erste weibliche CEO-Ergebnis ein Onion-Satirebild von Barbie war.

### 31. `china-uiguren-ueberwachung` + `xinjiang-ueberwachung`

- Score 0.6, gemeinsame Quell-URLs: 2
- **Bleibt:** `china-uiguren-ueberwachung`
- **Begründung:** Beide beschreiben dieselbe KI-gestützte Massenüberwachung der Uiguren in Xinjiang (startDate 2014, Urumqi, gleiche Akteure Huawei/Hikvision, gleiche Quellen HRW 2019 und China Cables). Kein abgrenzbares Einzelereignis.
- **Übernehmen:** Aus xinjiang-ueberwachung: BBC-Quelle (2018) übernehmen, Akteur Megvii/Face++ ergänzen, TL-Eintrag 2021 'Sanktionen und Völkermord-Einstufung' als consequences ergänzen, IJOP-Datierung 2016 abgleichen. Hinweis: xinjiang-ueberwachung ist der ältere Slug (created 2026-03-20), Permalink-Weiterleitung prüfen.

### 32. `usa-angela-lipps-fargo-clearview-fehlhaftung` + `usa-gesichtserkennungs-fehler-bringt-grossmutter-aus-tennessee-fuenf-monate-in-haft-2025`

- Score 0.6, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-angela-lipps-fargo-clearview-fehlhaftung`
- **Begründung:** Identischer Fall: Angela Lipps, Verhaftung 2025-07-14, Fargo-Bankbetrug, Einstellung 2025-12-23, gleiche Quellen CNN und Inforum. a ist vollständiger (Clearview-Abgleich West Fargo, Klage 09/2026, 5 Quellen, 6 TL-Einträge).
- **Übernehmen:** Quelle fox13news.com (2026-03-16) übernehmen; Akteur U.S. Marshals Service ergänzen; Details 'beim Babysitten verhaftet' und 'rund 1.200 Meilen entfernt' sowie aus b-TL 2026-03 'Polizei kündigt Policy-Änderung an' prüfen und ggf. ergänzen; Inforum-Datum 2026-03-15 präzisieren.

### 33. `usa-houston-federation-of-teachers-v-hisd-algorithmus-kuendigungen-verletzen-due-process` + `usa-houston-isd-verzichtet-nach-bundes-vergleich-auf-sas-evaas-algorithmus-zur-lehrer`

- Score 0.6, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-houston-federation-of-teachers-v-hisd-algorithmus-kuendigungen-verletzen-due-process`
- **Begründung:** Dasselbe Verfahren (Houston Federation of Teachers v. HISD, S.D. Tex., EVAAS/SAS): beide Dateien enthalten Klage 2014, Entscheidung 2017-05-04 und Vergleich 10/2017 in der Timeline und teilen die AFT- und vLex-Quellen. Urteil und Vergleich sind Stationen desselben Falls, nicht eigenständig dokumentierte Verfahren.
- **Übernehmen:** Quelle houstonpublicmedia.org (2017-10-10) übernehmen; Akteur Houston Federation of Teachers (AFT) ergänzen; Details aus b: Richter Stephen Wm. Smith, sieben klagende Lehrkräfte, 221 Kündigungen in einem Jahr, Vergleichsdatum 2017-10-10, Infrastruktur-Eintrag 1993 (Sanders/TVAAS). Formulierung präzisieren: Gericht entschied 'möglicherweise verletzt' (Klage zugelassen), kein abschließendes Urteil. TL-Daten abgleichen (2011 vs. 2012, Klage 2014-04-30 vs. 2014-05); Severity 3 vs. 4 klären.

### 34. `usa-nh-predict-algorithmus-kuerzt-medicare-advantage-pflege-stat-recherche-2023` + `usa-unitedhealth-nhpredict-medicare-ablehnungen`

- Score 0.6, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-unitedhealth-nhpredict-medicare-ablehnungen`
- **Begründung:** Derselbe Vorfall: UnitedHealth/naviHealth nH Predict, STAT-Recherche und Sammelklage November 2023, 90-Prozent-Fehlerquote, 1-Prozent-Vorgabe. b enthält beide Quellen von a plus fünf weitere, Senatsbericht 2024 und Verfahrensverlauf bis 2026.
- **Übernehmen:** TL-Detail aus a übernehmen: 2020-05 Optum kauft naviHealth; naviHealth-Entwicklung aus Millionen Patientenakten (2019). Titel von b ist sehr lang - kürzere Fassung nach Vorbild von a erwägen.

### 35. `usa-stanford-studie-zeigt-ki-schreiberkennung-benachteiligt-nicht-muttersprachler` + `usa-studie-ki-text-detektoren-benachteiligen-systematisch-nicht-muttersprachler-innen-2023`

- Score 0.6, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-stanford-studie-zeigt-ki-schreiberkennung-benachteiligt-nicht-muttersprachler`
- **Begründung:** Dieselbe Stanford-Studie (Liang/Zou et al., 'GPT detectors are biased against non-native English writers', Juli 2023) mit denselben Befunden (TOEFL vs. Achtklässler, Perplexität) und derselben Markup-Folgequelle.
- **Übernehmen:** Quelle Cell Patterns (S2666-3899(23)00130-7) als peer-reviewte Publikation übernehmen; vollständige Autorenliste (Liang, Yuksekgonul, Mao, Wu, Zou) ergänzen; Datum 2023-08-16 für Abschaltung von KI-Detektoren an Hochschulen aus b abgleichen.

### 36. `irland-dpc-erzwingt-stopp-der-grok-ki-training-datenverwendung-von-x-twitter-erstmaliger` + `irland-eu-global-x-verarbeitet-nutzerdaten-ohne-einwilligung-fuer-grok-training-2024`

- Score 0.58, gemeinsame Quell-URLs: 2
- **Bleibt:** `irland-dpc-erzwingt-stopp-der-grok-ki-training-datenverwendung-von-x-twitter-erstmaliger`
- **Begründung:** Derselbe Vorfall: X verarbeitet seit 7. Mai 2024 EU-Nutzerdaten für Grok-Training, DPC-Eilverfahren vor dem High Court im August 2024, Einstellung im September 2024 mit dauerhafter Verpflichtung. Gemeinsame Quellen DPC-Pressemitteilung 2024-08-08 und TechCrunch 2024-09-04. a ist präziser datiert und hat beide DPC-Primärquellen.
- **Übernehmen:** Quelle euronews.com (2024-09-06) übernehmen; Akteur xAI ergänzen; TL-Eintrag 2023-09 (Änderung der X-Datenschutzrichtlinie) und Detail 'Juli 2024 entdecken Nutzer standardmäßig aktivierte Einstellung' ergänzen; Severity 3 vs. 4 klären. Titel von a ist sehr lang - Kürzung erwägen. Achtung: b spricht von 'Gerichtsanordnung', a korrekt von Verpflichtungszusage mit Einstellung des Verfahrens.

### 37. `uk-homicide-prediction-project-justizministerium-entwickelt-heimlich-ki-zur` + `uk-murder-prediction-programm-des-justizministeriums-2025`

- Score 0.58, gemeinsame Quell-URLs: 2
- **Bleibt:** `uk-homicide-prediction-project-justizministerium-entwickelt-heimlich-ki-zur`
- **Begründung:** Dieselbe Statewatch-Enthüllung vom 2025-04-08 über das MoJ-'Homicide Prediction Project' (bis zu 500.000 Personen, OASys-Hintergrund), gleiche Quellen Statewatch und The Register, gleiches Event-Datum.
- **Übernehmen:** Quelle computing.co.uk (2025-04) übernehmen; Akteure HM Prison and Probation Service und Statewatch ergänzen; neuen Projektnamen 'Sharing Data to Improve Risk Assessment' in Beschreibung aufnehmen; TL-Eintrag 2015 (dokumentierte ethnische Verzerrung der OASys-Prognosen) ergänzen; Statewatch-Datum auf 2025-04-08 präzisieren. Nebenbei: a-TL hat zwei infrastructure-Einträge (2024-12 eher doctrine).

### 38. `irland-dpc-erzwingt-stopp-der-grok-ki-training-datenverwendung-von-x-twitter-erstmaliger` + `irland-dpc-x-grok-eu-trainingsdaten-verfahren`

- Score 0.68, gemeinsame Quell-URLs: 2
- **Bleibt:** `irland-dpc-x-grok-eu-trainingsdaten-verfahren`
- **Begründung:** Identischer Vorfall: X verarbeitet ab 7. Mai 2024 EU/EWR-Posts für Grok-Training, DPC stellt erstmals §134-Eilantrag vor dem High Court, X sagt am 8. August Aussetzung zu, Verfahren am 4. September 2024 eingestellt. Gleiche Akteure (X, DPC, High Court), gleiche Kernquellen (DPC-Pressemitteilung, TechCrunch 04.09.2024), gleiche TL-Struktur. b ist vollständiger (5 Quellen, noyb-Beschwerden, DPC-Untersuchung April 2025, xAI als Akteur). Achtung: Dreier-Cluster mit irland-eu-global-x-verarbeitet-nutzerdaten-ohne-einwilligung-fuer-grok-training-2024 (Paar 23).
- **Übernehmen:** Quelle DPC-Pressemitteilung 'Data Protection Commission welcomes conclusion of proceedings relating to X's AI tool Grok' (dataprotection.ie). Exaktes Antragsdatum 6. August 2024 in den event-Eintrag übernehmen (keep datiert den Eintrag auf 2024-08-08). Actor-Typ 'court' für High Court optional.

### 39. `ukraine-clearview-kriegseinsatz` + `ukraine-einsatz-von-clearview-ai-gesichtserkennung-im-krieg-loest-bedenken-aus-2022`

- Score 0.68, gemeinsame Quell-URLs: 2
- **Bleibt:** `ukraine-clearview-kriegseinsatz`
- **Begründung:** Derselbe Vorfall: Clearview AI stellt der Ukraine ab März 2022 kostenlos Gesichtserkennung bereit, Einsatz zur Identifikation toter russischer Soldaten, Kontaktierung von Angehörigen, Checkpoints; gleiche Akteure, gleiches Startdatum 2022-03. Beide Quellen von b (TIME, CBC) sind in a bereits enthalten. a hat 7 Quellen, 6 TL-Einträge bis 2024 und Verifikationsstufe 4.
- **Übernehmen:** Keine Quellen nötig (bereits vorhanden). Optional: incidentType 'surveillance' (Checkpoint-Kontrollen) und als Kontext die europäischen Bußgelder gegen Clearview 2022 (CNIL 20 Mio. Euro, Italien, Österreich, Griechenland) aus dem b-Konsequenzeintrag.

### 40. `argentinien-erste-ki-wahl-deepfakes-auf-beiden-seiten-im-milei-vs-massa-wahlkampf-2023` + `argentinien-milei-massa-ki-wahlkampf-2023`

- Score 0.67, gemeinsame Quell-URLs: 3
- **Bleibt:** `argentinien-milei-massa-ki-wahlkampf-2023`
- **Begründung:** Derselbe Vorfall: KI-Deepfakes beider Lager im Präsidentschaftswahlkampf 2023 Milei vs. Massa, gleiche Kernbelege (Massa in kommunistischer Uniform, ca. 3 Mio. Aufrufe; Instagram-Konto 'IA por la Patria'; manipuliertes Drogen-Video), drei gemeinsame Quellen (context.news, OECD AIM, Japan Times). b hat die präzisere, reichere Beschreibung (Organmarkt-Deepfake über Milei, Piraten/Zombie-Bilder), mehr Akteure, den Compromiso Ético Digital (Juni 2023) und den kürzeren, präziseren Slug; beide 4 Quellen und 5 TL-Einträge.
- **Übernehmen:** Quelle Buenos Aires Herald (Macri wirft Pro-Milei-Trollen am Wahltag Deepfake-Verbreitung vor) samt diesem Detail; TL-Konsequenz 2024-11 (freiwillige Selbstverpflichtung aller wesentlichen Parteien gegen Deepfakes); Detail 'IA por la Patria' zeigt Massa als römischen Kaiser/Boxer. startDate abgleichen (a: 2023-10, b: 2023-09).

### 41. `usa-gender-shades-studie-weist-34-7-fehlerrate-bei-dunkelhaeutigen-frauen-in` + `usa-global-gender-shades-studie-gesichtserkennung-von-ibm-microsoft-und-face-versagt-bei`

- Score 0.67, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-gender-shades-studie-weist-34-7-fehlerrate-bei-dunkelhaeutigen-frauen-in`
- **Begründung:** Beide dokumentieren dieselbe Veröffentlichung der Gender-Shades-Studie (Buolamwini/Gebru, Februar 2018, FAT*) zu IBM, Microsoft, Face++ mit 34,7 % Fehlerrate bei dunkelhäutigen Frauen; gleiche Akteure, zwei gemeinsame Quellen (PMLR-Paper, MIT News). Datum differiert nur um Tage (09.02. vs. 12.02.2018). a hat die vollständigere TL (6 Einträge inkl. Benchmark-Erstellung 2017, SF-Verbot und NIST-FRVT 2019) und NYT als Quelle statt Wikipedia.
- **Übernehmen:** Herstellerbezogene Zahlen aus b (IBM ca. 35 %, Microsoft 20,8 % bei dunkelhäutigen Frauen), Algorithmic Justice League als Akteur/Folge, Gebrus damalige Affiliation (Microsoft Research). Wikipedia-Quelle nicht nötig. Zusätzlich in a Tippfehler 'loste' -> 'löste' in der Beschreibung korrigieren.

### 42. `china-dahua-software-sendet-polizei-echtzeit-warnungen-vor-uigur-innen-2021` + `china-dahua-uberwachungstechnik-sendet-uiguren-warnungen-an-polizei-2020`

- Score 0.66, gemeinsame Quell-URLs: 1
- **Bleibt:** `china-dahua-software-sendet-polizei-echtzeit-warnungen-vor-uigur-innen-2021`
- **Begründung:** Derselbe Vorfall: IPVM-Enthüllung der Dahua-Funktion 'EM_NATION_TYPE_UYGUR' / 'Echtzeit-Uiguren-Warnungen' an die Polizei, gleicher Akteur, gemeinsame Quelle (biometricupdate 2021-02). b datiert auf November 2020, stützt sich aber selbst auf die Februar-2021-Berichterstattung. a hat die IPVM-Primärquelle, die Senatsquelle und eine vollständigere TL (6 Einträge, Entity List, Lorex-Rückzug, Nordamerika-Ausstieg 2024).
- **Übernehmen:** Quelle securityinfowatch ('Dahua faces scrutiny over its facial recognition software'); TL-Inhalte aus b: Xinjiang-Großaufträge 2016-2017 (über 7 Mrd. RMB, Safe County), Mitautorschaft an der Norm GA/T1400.3-2017 mit Ethnie-Feld, Klagen des Weltuigurischen Kongresses und französischer NGOs 2021-2022; incidentType 'discrimination'. Eine frühere IPVM-Fundstelle vom November 2020 nur übernehmen, wenn sie belegt wird.

### 43. `australien-snapchats-my-ai-gibt-vermeintlich-13-jaehriger-bedenkliche-ratschlaege-2023` + `usa-snapchats-my-ai-gibt-vermeintlich-13-jaehriger-ratschlaege-zu-sex-mit-erwachsenem-2023`

- Score 0.64, gemeinsame Quell-URLs: 0
- **Bleibt:** `usa-snapchats-my-ai-gibt-vermeintlich-13-jaehriger-ratschlaege-zu-sex-mit-erwachsenem-2023`
- **Begründung:** Beide beschreiben dieselben Tests vom März 2023, in denen 'My AI' einem als 13-jähriges Mädchen auftretenden Konto Tipps zu einem Treffen bzw. erstem Sex mit einem deutlich älteren (31-jährigen) Mann und zum Verheimlichen vor den Eltern gab; gleicher Akteur, gleiches Datum. Die Tests stammen vom Center for Humane Technology (USA), die Länderzuordnung Australien in a ist falsch; a stützt sich auf Fox News (dieser Test) und Tyla (ein separater Fall einer australischen Mutter, September 2023). b hat korrekte Akteure und stärkere Quellen (Washington Post, Fast Company).
- **Übernehmen:** Fox-News-Quelle; Detail Blutergüsse kaschieren; TL-Eintrag 19.04.2023 (kostenlose weltweite Freischaltung von My AI); Konsequenz Alterssignal per Geburtsdatum und Einbindung ins Family Center. Tyla-Quelle nicht als Beleg übernehmen (anderer, australischer Vorfall September 2023; ggf. separat prüfen).

### 44. `usa-16-jaehriger-adam-raine-nimmt-sich-nach-monaten-chatgpt-gespraechen-das-leben-klage` + `usa-raine-openai-chatgpt-suizid`

- Score 0.62, gemeinsame Quell-URLs: 4
- **Bleibt:** `usa-16-jaehriger-adam-raine-nimmt-sich-nach-monaten-chatgpt-gespraechen-das-leben-klage`
- **Begründung:** Derselbe Fall: Suizid von Adam Raine am 11.04.2025 und Klage Raine v. OpenAI (26.08.2025, San Francisco Superior Court), gleiche Akteure, vier gemeinsame Quellen (Wikipedia, CNN 26.08.2025, NBC, Washington Post). a hat die vollständigere TL (6 Einträge inkl. GPT-4o-Start und geänderter Model-Spec-Vorgabe zu Selbstverletzung, OpenAI-Erwiderung vom 26.11.2025) und Verifikationsstufe 4. Die zusätzliche Quelle von b (CNN 06.11.2025) betrifft einen anderen Fall (College-Absolvent).
- **Übernehmen:** Akteure aus b (Sam Altman als Beklagter, Matthew und Maria Raine als Kläger, Adam Raine als Opfer); Einordnung als erster großer Produkthaftungsstreit zu generativer KI in den USA. CNN-Quelle vom 06.11.2025 nicht übernehmen (anderer Fall, ggf. eigener Incident).

### 45. `australien-ki-welfare-fraud` + `australien-robodebt`

- Score 0.61, gemeinsame Quell-URLs: 2
- **Bleibt:** `australien-ki-welfare-fraud`
- **Begründung:** Beide dokumentieren das Robodebt-Programm (automatisierte Einkommensmittelung ATO-Daten vs. Sozialdaten, rechtswidrige Schuldbescheide, Amato-Verfahren 2019, Sammelklagen-Vergleich, Royal Commission 07.07.2023); gleiche Akteure, zwei gemeinsame Quellen (Royal-Commission-Bericht, Wikipedia). a hat die vollständigere und genauer datierte TL (6 Einträge: Data-Matching seit 1991, Rechtsauskunft 2014, OCI-Start Juli 2016, Ombudsman/Senat 2017, Amato und Vergleich, Royal Commission mit 1,76 Mrd. AUD/433.000 Personen). b hat den sprechenderen Slug und mehr Presse-Quellen. Falls der Slug wichtiger ist, Richtung umkehren und a-TL vollständig nach b übernehmen.
- **Übernehmen:** Quellen Guardian (29.05.2020, Rückzahlung von 470.000 Schulden über 721 Mio. AUD), ABC (07.07.2023, Kernbefunde Royal Commission), LSJ ('Crude, cruel and unlawful'); Akteur Services Australia (Centrelink); Vergleichssumme 1,2 Mrd. AUD (Ankündigung 16.11.2020) und 57 Empfehlungen des Berichts. Die Angabe von 2.030 Todesfällen aus b nur mit Kausalitätsvorbehalt übernehmen. Severity (a: 4, b: 5) abgleichen.

### 46. `irland-dpc-x-grok-eu-trainingsdaten-verfahren` + `irland-eu-global-x-verarbeitet-nutzerdaten-ohne-einwilligung-fuer-grok-training-2024`

- Score 0.61, gemeinsame Quell-URLs: 2
- **Bleibt:** `irland-dpc-x-grok-eu-trainingsdaten-verfahren`
- **Begründung:** Derselbe Vorfall wie in Paar 12 (Dreier-Cluster): X trainiert Grok ab 7. Mai 2024 mit EU/EWR-Posts ohne Einwilligung, Opt-out erst Wochen später, DPC-§134-Eilverfahren, Zusage 8. August, Einstellung 4. September 2024. Gleiche Akteure (X, xAI, DPC), zwei gemeinsame Quellen (DPC-Pressemitteilung, TechCrunch 04.09.2024). a ist vollständiger (5 Quellen, noyb-Beschwerden, DPC-Untersuchung April 2025).
- **Übernehmen:** Euronews-Quelle (06.09.2024, 'Irish court drops privacy case ...'); Detail aus b, dass die im Juli 2024 entdeckte, standardmäßig aktivierte Einstellung auch Grok-Konversationen umfasste. Severity (b: 4, a: 3) abgleichen. Zusammen mit Paar 12: beide anderen Dateien gehen in keep auf.

### 47. `italien-chatgpt-verbot` + `italien-datenschutzbehoerde-sperrt-chatgpt-wegen-dsgvo-verstoessen-2023`

- Score 0.5, gemeinsame Quell-URLs: 0
- **Bleibt:** `italien-chatgpt-verbot`
- **Begründung:** Beide beschreiben dieselbe vorläufige Verarbeitungsbeschränkung der Garante gegen OpenAI/ChatGPT vom 30./31.03.2023, gleiche Akteure, gleiche Auslöser (Datenleck 20.03.2023), gleiche Rückkehr am 28.04.2023.
- **Übernehmen:** startDate präzisieren auf 2023-03-30; Quellen TechCrunch (2023-03-31) und Fortune (2023-03-31) übernehmen; Severity abgleichen (a: 2, b: 3). Den TL-Eintrag 2024-12 (15-Mio.-Bußgeld) nur als Querverweis auf das eigenständige Incident italien-chatgpt-garante-dsgvo-strafe setzen (dort steht startDate 2023-03, obwohl es um die Strafe 2024-12 geht - separat prüfen).

### 48. `polen-14-266-pushbacks-an-der-belarus-grenze-2024-ki-akustik-sensoren-waermebild-drohnen` + `polen-belarus-elektronische-grenzueberwachung-an-der-mauer-ermoeglicht-13-600`

- Score 0.5, gemeinsame Quell-URLs: 1
- **Bleibt:** `polen-14-266-pushbacks-an-der-belarus-grenze-2024-ki-akustik-sensoren-waermebild-drohnen`
- **Begründung:** Beide beschreiben die Pushbacks 2024 an der überwachten polnisch-belarussischen Grenzmauer (gleiche Grenzwache, gleiches Jahr, gemeinsame HRW-Quelle vom 10.12.2024). Die Zahlen unterscheiden sich nur durch den Bezugszeitraum (14.266 laut Grenzwache für das ganze Jahr, 13.600 laut HRW für Januar bis November). Es ist kein eigenständiges zweites Ereignis.
- **Übernehmen:** Aus b übernehmen: die HRW-Zahl (13.600, Januar bis November 2024; 29.707 Versuche, 10.900 erfolgreich) als zweite Zählung, die TL-Einträge 2024-07 (Schutzgesetz für Grenzbeamte) und 2025-02 (Aussetzung des Asylrechts, East Shield), die Quellen Oxfam (2025-03-18) und BalkanInsight (2024-05-27), das Detail 186 km und 3.000 Kameras (Mauerlänge mit a abgleichen: 186 km gegen 200 km) sowie verificationLevel 4 und severity 5 prüfen.

### 49. `suedkorea-deepfake-pornografie-epidemie-ueberrollt-schulen-und-universitaeten-2024` + `suedkorea-telegram-deepfake-welle-2024-ueber-230-chatrooms-an-schulen-und-universitaeten`

- Score 0.5, gemeinsame Quell-URLs: 1
- **Bleibt:** `suedkorea-telegram-deepfake-welle-2024-ueber-230-chatrooms-an-schulen-und-universitaeten`
- **Begründung:** Derselbe Vorfall: Im August 2024 wurde das Telegram-Deepfake-Netz an südkoreanischen Schulen und Universitäten aufgedeckt. Beide Dateien nennen denselben Kanal mit 220.000 Mitgliedern, die Reaktion von Präsident Yoon und dieselbe NBC-Quelle.
- **Übernehmen:** Quellen NPR (2024-09-06) und Daily Star (2024-08-30); Statistiken aus a (fast 6.500 Lösch-Anträge Jan-Jul 2024, 297 Polizeifälle vs. 180 in 2023, HRW-Einordnung als Epidemie, siebenmonatige Sondereinsatz-Phase); Telegram als eigener Akteur.

### 50. `uk-deepfakes-britischer-tv-aerzte-fuer-gesundheits-betrug-missbraucht-2024` + `uk-deepfakes-von-dr-hilary-jones-michael-mosley-und-rangan-chatterjee-bewerben-angebliche`

- Score 0.5, gemeinsame Quell-URLs: 2
- **Bleibt:** `uk-deepfakes-von-dr-hilary-jones-michael-mosley-und-rangan-chatterjee-bewerben-angebliche`
- **Begründung:** Gleiche BMJ-Recherche vom 17.07.2024 über Deepfakes von Hilary Jones, Michael Mosley und Rangan Chatterjee. Beide Dateien nennen dieselben Betroffenen, dieselben Plattformen und dieselben Quellen (BMJ, ITV).
- **Übernehmen:** Wenig: TL-Ereignisdatum 2024-07-17 aus a übernehmen; Detail zum Social-Media-Spezialisten von Dr. Jones und Wiederauftauchen unter neuen Namen abgleichen. b hat bereits ver 4 und zusätzliche LBC-Quelle.

### 51. `usa-eeoc-v-itutorgroup-erster-ki-diskriminierungs-vergleich-der-us` + `usa-itutorgroups-bewerbungssoftware-lehnte-aeltere-bewerber-innen-automatisch-ab-eeoc`

- Score 0.5, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-eeoc-v-itutorgroup-erster-ki-diskriminierungs-vergleich-der-us`
- **Begründung:** Derselbe Fall: Vergleich EEOC gegen iTutorGroup über 365.000 USD im August 2023 wegen automatischer Ablehnung von Frauen ab 55 und Männern ab 60 Jahren (über 200 Betroffene). Akteure und EEOC-Quelle stimmen überein.
- **Übernehmen:** Quelle Norton Rose Fulbright (2023-08-25); TL-Einträge 2020-04 (über 200 Bewerber:innen abgelehnt), 2021-10 (EEOC-KI-Initiative) und 2022-05 (EEOC-Klage) übernehmen; Ping-An-Zugehörigkeit im Akteur ergänzen; Severity abgleichen (a: 2, b: 4); Datum der EEOC-Pressemitteilung prüfen (a: 2023-08-09, b: 2023-09-11).

### 52. `usa-google-photos-klassifiziert-schwarze-menschen-als-gorillas-2015` + `usa-google-photos-taggt-schwarze-personen-als-gorillas-fix-bis-heute-nur-durch-tag-sperre`

- Score 0.5, gemeinsame Quell-URLs: 0
- **Bleibt:** `usa-google-photos-klassifiziert-schwarze-menschen-als-gorillas-2015`
- **Begründung:** Derselbe Vorfall: Am 29.06.2015 meldete Jacky Alcine, dass Google Photos ihn als 'Gorillas' getaggt hatte. Google reagierte jeweils mit einer Label-Sperre. Datum, Betroffener und Akteur stimmen überein.
- **Übernehmen:** Quellen CNN (2015-07-02), MIT Technology Review (2018-01-11) und PetaPixel (2023-05-22) übernehmen; TL-Eintrag 2018-01-11 (Sperre besteht weiter) ergänzen. Den Doctrine-Eintrag 2014-05-01 (Big-Data-Bericht des Weißen Hauses) optional übernehmen.

### 53. `usa-klage-gegen-waymo-nach-radfahrerin-verletzung-durch-dooring-2025` + `usa-radfahrerin-erleidet-hirn-und-wirbelverletzungen-bei-versagen-von-waymos-safe-exit`

- Score 0.5, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-klage-gegen-waymo-nach-radfahrerin-verletzung-durch-dooring-2025`
- **Begründung:** Derselbe Vorfall: Im Februar 2025 wurde die Radfahrerin Jenifer Hanki in San Francisco von der Tür eines Waymo-Robotaxis getroffen und in ein zweites Waymo geschleudert. Im Juni 2025 klagte sie gegen Waymo und Alphabet. Datum, Ort, Betroffene und Quelle (Futurism) stimmen überein.
- **Übernehmen:** Quelle road.cc übernehmen; Jenifer Hanki als Akteur (individual) ergänzen; Verletzungsbild 'Weichteilverletzungen' ergänzen.

### 54. `usa-neda-chatbot-tessa-empfahl-essstoerungs-betroffenen-kalorienzaehlen-und` + `usa-neda-chatbot-tessa-gab-schaedliche-diaet-tipps-bei-essstoerungen-2023`

- Score 0.5, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-neda-chatbot-tessa-empfahl-essstoerungs-betroffenen-kalorienzaehlen-und`
- **Begründung:** Derselbe Vorfall: Der NEDA-Chatbot Tessa gab im Mai 2023 schädliche Diät-Ratschläge und wurde am 30./31.05.2023 abgeschaltet. Der Bot hatte die gewerkschaftlich organisierte Helpline ersetzt. Akteure, Zeitraum und NPR-Quelle stimmen überein.
- **Übernehmen:** Quelle NBC News (2023-05-31) übernehmen; Cass (formerly X2AI) als eigenen Akteur ergänzen; das genaue TL-Datum 2023-03-21 (Entlassung des Hotline-Teams nach der Gewerkschaftswahl) für den Doctrine-Eintrag übernehmen.

### 55. `global-staatsnahe-hackergruppen-nutzten-chatgpt-zur-unterstuetzung-von-cyberangriffen-2024` + `usa-openai-und-microsoft-sperren-fuenf-staatlich-gelenkte-akteure-russland-china-iran`

- Score 0.49, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-openai-und-microsoft-sperren-fuenf-staatlich-gelenkte-akteure-russland-china-iran`
- **Begründung:** Dasselbe Ereignis: Am 14.02.2024 sperrten OpenAI und Microsoft die Konten derselben fünf staatsnahen Akteure (Charcoal Typhoon, Salmon Typhoon, Crimson Sandstorm, Emerald Sleet, Forest Blizzard). Beide Dateien nutzen dieselben zwei Primärquellen.
- **Übernehmen:** startDate auf 2024-02-14 präzisieren; TL-Eintrag 2022-11-30 (Start von ChatGPT) als Infrastruktur-Eintrag optional übernehmen. Hinweis: a hat addressCountry GLOBAL ohne geo, deshalb b behalten. In b passen das Slug-Präfix usa- und der Name 'Global:' nicht zusammen, das ist nur kosmetisch.

### 56. `usa-fbi-und-ice-durchsuchen-millionen-fuehrerschein-fotos-per-gesichtserkennung-ohne` + `usa-rekognition-immigration-ice`

- Score 0.48, gemeinsame Quell-URLs: 0
- **Bleibt:** `usa-rekognition-immigration-ice`
- **Begründung:** Beide beschreiben dieselbe Enthüllung vom 07.07.2019 (Washington Post/Georgetown): FBI und ICE durchsuchen DMV-Führerscheinfotos per Gesichtserkennung ohne Einwilligung (Utah, Vermont, Washington, 641 Mio. Fotos). Gleiche Akteure, gleiches Datum, gleiches Event in der Timeline. b ergänzt nur den Rekognition-Pitch 2018 als Kontext.
- **Übernehmen:** startDate auf 2019-07-07 präzisieren; Quellen NPR (2019-07-08) und CNN (2019-07-08) sowie die direkte WaPo-URL übernehmen; TL-Eintrag infrastructure 2011-02 (FBI NGI in Betrieb) übernehmen; Angabe 390.000 FBI-Abfragen seit 2011 und 21 Bundesstaaten + DC in die description; incidentType data-misuse ergänzen. Hinweis: Datum der Quelle 'Perpetual Line-Up' (2019-07) ist falsch, Studie ist von 2016-10.

### 57. `italien-meloni-deepfake-pornografie` + `italien-ministerpraesidentin-meloni-fordert-schadenersatz-wegen-deepfake-pornovideos-2020`

- Score 0.47, gemeinsame Quell-URLs: 1
- **Bleibt:** `italien-meloni-deepfake-pornografie`
- **Begründung:** Identischer Vorfall: Deepfake-Pornovideos mit Melonis Gesicht 2020 auf US-Website, Verfahren in Sassari gegen Vater und Sohn, Forderung von 100.000 Euro, Aussage 2024. Gleiche Akteure, gleiches Datum, überlappende Quellen (CNN, AIID 926).
- **Übernehmen:** Kaum etwas: a ist vollständiger (5 Quellen, TL bis 2026-05, Verfahrensdetails). Optional TL-Kontext 2017 (frei verfügbare Face-Swap-Werkzeuge) aus b als infrastructure prüfen. Severity abgleichen (a=3, b=4).

### 58. `schweden-erste-gdpr-strafe-gegen-skellefte-gymnasium-wegen-gesichtserkennung-im` + `schweden-ki-schule-gesichtserkennung`

- Score 0.47, gemeinsame Quell-URLs: 0
- **Bleibt:** -
- **Begründung:** Derselbe Fall: Gesichtserkennungs-Anwesenheitskontrolle von 22 Schüler:innen an der Anderstorp-Schule in Skellefteå 2018, erste schwedische DSGVO-Strafe über 200.000 SEK am 20.08.2019. Gleiche Akteure (Schule/Kommune, Tieto, Datenschutzbehörde).

### 59. `uk-geheimer-home-office-algorithmus-ipic-beeinflusst-abschiebungen-von-41-000-migranten` + `uk-home-office-ki-ipic-steuert-41-000-abschiebungsverfahren-bei-verdacht-des`

- Score 0.47, gemeinsame Quell-URLs: 1
- **Bleibt:** `uk-geheimer-home-office-algorithmus-ipic-beeinflusst-abschiebungen-von-41-000-migranten`
- **Begründung:** Derselbe Vorfall: Privacy International deckt im November 2024 per FOI das Home-Office-System IPIC auf, rund 41.000 Personen betroffen, Akzeptanz-per-Klick vs. begründungspflichtige Ablehnung. Gleiche Hauptquelle (PI-Bericht), gleiches Datum, gleiche Akteure.
- **Übernehmen:** Quelle Anadolu Agency (aa.com.tr, 2024-11-12) übernehmen; PI-Quelle auf Datum 2024-11-11 präzisieren; Akteur 'UK Visas and Immigration' ergänzen; TL-Eintrag 2020-08 (Home Office verschrottet rassistisches Visa-Streaming-Tool) als Vorgeschichte prüfen; Gesundheitsmerkmale als Datenkategorie und incidentType data-misuse ergänzen. Den redaktionellen Rest 'Beachte: GB ist nicht im EU-Scope, aber Pan-Europa.' aus der description entfernen; Tasnim-Quelle ggf. durch AA ersetzen.

### 60. `uk-rassistisch-fehlerhafte-uber-eats-gesichtspruefung-kostet-pa-edrissa-manjang-den-job` + `uk-uber-eats-zahlt-entschaedigung-an-pa-edrissa-manjang-wegen-rassistisch-versagender`

- Score 0.47, gemeinsame Quell-URLs: 1
- **Bleibt:** `uk-uber-eats-zahlt-entschaedigung-an-pa-edrissa-manjang-wegen-rassistisch-versagender`
- **Begründung:** Derselbe Fall Pa Edrissa Manjang: Sperrung 2021 durch Microsoft-gestützte Uber-Eats-Gesichtsverifizierung, Klage mit EHRC und ADCU, Vergleich im März 2024. Beide Dateien decken Sperrung und Vergleich ab, gleiche Akteure, gemeinsame TechCrunch-Quelle; nur der Titel-Schwerpunkt (Jobverlust vs. Entschädigung) unterscheidet sich.
- **Übernehmen:** Quelle Personnel Today (2024-03-26) übernehmen; TL-Eintrag consequences 2021-10 (EHRC und ADCU unterstützen Klage) übernehmen; Hinweis, dass Microsoft schlechtere Erkennung bei ethnischen Minderheiten eingeräumt hatte, in die description; Einführungsdatum Echtzeit-Selfie abgleichen (a: 2020-03, b: 2020-04). startDate prüfen: Event ist die Sperrung 2021, nicht der Vergleich 2024-03.

### 61. `usa-anwaelte-sanktioniert-nach-erfundenen-chatgpt-urteilen-mata-v-avianca-2023` + `usa-mata-avianca-chatgpt-fake-zitate`

- Score 0.47, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-mata-avianca-chatgpt-fake-zitate`
- **Begründung:** Derselbe Fall Mata v. Avianca (SDNY): Schriftsatz mit von ChatGPT erfundenen Urteilen, eingereicht März 2023 von Schwartz/LoDuca (Levidow, Levidow & Oberman), Sanktion von 5.000 USD durch Richter Castel am 22.06.2023. Gleiche Akteure, gleiches Datum, gemeinsame CNN-Quelle.
- **Übernehmen:** TL-Eintrag consequences 2023-06 'Auslöser für gerichtliche KI-Offenlegungspflichten' übernehmen; TL-Event aus a (2023-03, Einreichung des Schriftsatzes mit sechs erfundenen Urteilen) als Event-Datum erwägen, da b das Event auf 2023-05 (Enttarnung) legt; Wikipedia-Quelle optional. Severity abgleichen (a=3, b=2). Titel-Aspekt 'Anwälte sanktioniert' ggf. in den Titel von b aufnehmen.

### 62. `ghana-meta-verlagert-content-moderation-nach-accra-zu-teleperformance-suizidversuch-und` + `ghana-ueber-150-content-moderator-innen-verklagen-meta-und-majorel-teleperformance-wegen`

- Score 0.46, gemeinsame Quell-URLs: 1
- **Bleibt:** `ghana-meta-verlagert-content-moderation-nach-accra-zu-teleperformance-suizidversuch-und`
- **Begründung:** Derselbe Vorfall: geheimer Meta-Moderationsstandort von Majorel/Teleperformance in Accra mit rund 150 Moderator:innen, enthüllt durch Bureau of Investigative Journalism/Guardian am 27.04.2025 (gleiche Hauptquelle), Suizidversuche, Kündigungen, von Foxglove und Agency Seven Seven vorbereitete Klagen. Gleiche Akteure und Zeitraum; a setzt das Event auf den Suizidversuch Ende 2024, b auf die Enthüllung.
- **Übernehmen:** Quellen Africanews (2025-04-28) und die zweite Business-and-Human-Rights-Meldung übernehmen; Details aus b in die description: Basislohn ca. 1.300 Cedi/Monat (~80 USD, unter einem Fünftel der Lebenshaltungskosten), Symptome (Depression, Angst, Schlaflosigkeit, Drogenmissbrauch), Unterbringung 'fünf in einer Wohnung', geplante Verfahrenseröffnung Ende 2025; TL-Eintrag consequences 2025-04-28 (über 150 Moderator:innen bereiten Klage vor) übernehmen. Hinweis: b-Titel 'verklagen' überzeichnet, Klagen waren erst in Vorbereitung.

### 63. `ecuador-ecu911-landesweites-chinesisches-ueberwachungs-netzwerk-mit-gesichtserkennung-2023` + `ecuador-ki-ueberwachung-ece911`

- Score 0.52, gemeinsame Quell-URLs: 2
- **Bleibt:** `ecuador-ki-ueberwachung-ece911`
- **Begründung:** Beide Dateien beschreiben dasselbe ECU-911-Überwachungssystem: gleiche Akteure (ECU911/Regierung Ecuador, CEIEC), gleicher Kredit über 240 Mio. USD, gleiche Zahlen (4.300 Kameras, 16 Zentren) und gleiche NYT-Enthüllung zu SENAIN von 2019. Auch die Timelines sind praktisch deckungsgleich (2011 Aufbau, 2019 Enthüllung, 2023 Bestand). Nur der Schwerpunkt unterscheidet sich: A betont die Gesichtserkennung (2023), B die politische Kontrolle.
- **Übernehmen:** Aus A übernehmen: die Quelle Global Voices Unfreedom Monitor (globalvoices.org/2023/05/16/...), die Access-Now-Angaben zur Gesichtserkennung in Cuenca und an den Flughäfen Quito und Guayaquil samt Dementi der ECU911-Funktionäre, die Angaben 24 Provinzen und über 3.000 Mitarbeitende sowie die Beteiligung von Huawei. Den Typ facial-recognition zusätzlich aufnehmen und den 2023-Eintrag der Timeline um die Access-Now- und Global-Voices-Belege ergänzen. B bleibt, weil die Datei älter ist (seit 2026-04-03 im Repo) und präzisere Timeline-Daten mit Quellen hat. Hinweis: Der Slug enthält den Tippfehler 'ece911'; eine Umbenennung nur mit Weiterleitung, falls überhaupt.

### 64. `usa-erste-anklage-wegen-ki-generierter-kindesmissbrauchsbilder-wisconsin-2024` + `usa-steven-anderegg-in-wisconsin-erste-doj-anklage-wegen-ki-generierter-csam-mit-stable`

- Score 0.51, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-erste-anklage-wegen-ki-generierter-kindesmissbrauchsbilder-wisconsin-2024`
- **Begründung:** Derselbe Fall: Steven Anderegg (42) aus Holmen, Wisconsin, erste Bundesanklage des DOJ wegen KI-generierter Missbrauchsbilder mit Stable Diffusion im Mai 2024, Instagram-Versand an einen 15-Jährigen, Abweisung des Besitz-Anklagepunkts 2025-02. Gleicher Ort, gleiche Akteure, identische DOJ-Pressemitteilung.
- **Übernehmen:** Aus B übernehmen: die Quellen WaPo (washingtonpost.com/technology/2024/05/21/doj-arrest-ai-csam-...) und NBC (nbcnews.com/.../ai-generated-child-sexual-abuse-imagery-judge-ruling-rcna196710), das genaue Anklagedatum der Grand Jury (15.05.2024, Western District of Wisconsin), vier Anklagepunkte mit bis zu 70 Jahren Haft und die Berufung des DOJ gegen die Abweisung des Besitz-Anklagepunkts (Stanley v. Georgia). startDate auf 2024-05-15 präzisieren. Achtung: Die Beschreibung von B nennt 'März 2025', beide Timelines aber 2025-02; vor der Übernahme abgleichen. A bleibt, weil die Timeline vollständiger ist (PROTECT Act, LAION-5B) und Stability AI als Akteur geführt wird.

### 65. `usa-facebook-verbreitet-covid-19-falschinformation-in-grossem-stil-2020` + `usa-facebooks-algorithmus-verbreitete-covid-19-gesundheitsdesinformation-2020`

- Score 0.51, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-facebooks-algorithmus-verbreitete-covid-19-gesundheitsdesinformation-2020`
- **Begründung:** Dasselbe Ereignis: Avaaz-Bericht vom 19.08.2020 über 3,8 Mrd. Aufrufe für Gesundheits-Falschinformation auf Facebook, Spitze im April 2020, zehn Desinformationsseiten mit fast viermal so vielen Aufrufen wie WHO und CDC. Gleicher Akteur, gleiche Timeline (2018-01 Umstellung des News Feed, 2020-08-19, 2021-07-15 Surgeon General). Die MIT-TR-Quelle ist identisch.
- **Übernehmen:** Aus A übernehmen: die WaPo-Quelle (washingtonpost.com/technology/2020/08/19/facebook-misinformation-coronavirus-avaaz/) und die Angabe zum Studienzeitraum (Mai 2019 bis Mai 2020). B bleibt wegen des genauen startDate (2020-08-19), des zusätzlichen Timeline-Eintrags (Haugen 2021-10), der NBC-Quelle und des Titels, der den Algorithmus und damit den KI-Bezug benennt. Nebenbefund: Beide führen den Typ 'deepfakes', der für Desinformation ohne synthetische Medien fragwürdig ist.

### 66. `usa-ki-generierte-pilz-bestimmungsbuecher-auf-amazon-empfahlen-gefaehrliche` + `usa-ki-generierte-pilz-bestimmungsbuecher-mit-potenziell-toedlichen-fehlangaben`

- Score 0.51, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-ki-generierte-pilz-bestimmungsbuecher-auf-amazon-empfahlen-gefaehrliche`
- **Begründung:** Dasselbe Ereignis: KI-generierte Pilzführer auf Amazon, aufgedeckt am 2023-08-29 von 404 Media und der New York Mycological Society. Gleiche Gefahr (Bestimmung nach Geschmack), KI-Detektor bei 100 Prozent, Folge: Amazon verschärft am 2023-09-07 die KDP-Regeln. Die 404-Media-Quelle und die Timelines sind praktisch identisch.
- **Übernehmen:** Aus B übernehmen: die Fortune-Quelle (fortune.com/2023/09/03/ai-written-mushroom-hunting-guides-...) samt Timeline-Eintrag 2023-09-03 (breite Berichterstattung), die Angabe zu erfundenen Autor:innen und Qualifikationen, die Zuordnung des 100-Prozent-Tests zum Guardian und den Hinweis, dass kein bestätigter Vergiftungstod dokumentiert ist. A bleibt, weil es drei Quellen, konkrete Buchtitel und den Eintrag 2023-08-30 (Entfernung durch Amazon) hat. Hinweis: global-ki-generierte-pilzbilder-und-buecher-gefaehrden-sammler-innen-2024 separat auf Überschneidung prüfen.

### 67. `usa-mobley-v-workday-eeoc-stuetzt-sammelklage-zu-ki-bewerber-screening-alter-race` + `usa-mobley-v-workday-sammelklage-gegen-ki-bewerber-screening-wegen-altersdiskriminierung`

- Score 0.51, gemeinsame Quell-URLs: 0
- **Bleibt:** `usa-mobley-v-workday-eeoc-stuetzt-sammelklage-zu-ki-bewerber-screening-alter-race`
- **Begründung:** Dasselbe Verfahren, Mobley v. Workday (N.D. Cal., Kläger Derek Mobley, Beklagte Workday). Beide Timelines enthalten dieselben Etappen: Klage 2023-02-21, Gerichtsentscheidung 2024-07, vorläufige Sammelklage-Zulassung 2025-05-16. A führt diese Zulassung schon als Folge und hat damit alles, was B als Ereignis hat. Getrennte Dateien bilden hier nur verschiedene Etappen desselben Verfahrens ab, nicht eigenständige Vorfälle. Hinweis: Mit usa-klage-gegen-workday-wegen-diskriminierender-ki-bewerberauswahl-2023 (2023-02) gibt es vermutlich eine dritte Datei zum selben Verfahren; gemeinsam konsolidieren.
- **Übernehmen:** Aus B übernehmen: die Quellen hklaw.com (2025/05, federal-court-allows-collective-action...), clearinghouse.net/case/44074/ und insidetechlaw.com (2025/06) sowie die Details Richterin Rita Lin, ADEA-Collective für Bewerber:innen über 40 und laut Workday 1,1 Mrd. automatisiert abgelehnte Bewerbungen. Den Doktrin-Schritt 2021-06 (Mobleys EEOC-Beschwerde) als Timeline-Eintrag ergänzen. A bleibt wegen der vollständigeren Timeline (6 Einträge inkl. EEOC-Amicus-Brief vom 2024-04-09), der EEOC als Akteur und Schweregrad 4.

### 68. `israel-blue-wolf-palaestina` + `palaestina-israel-westjordanland-gesichtserkennung-blue-wolf-ueberwacht-palaestinenser-in`

- Score 0.46, gemeinsame Quell-URLs: 0
- **Bleibt:** `israel-blue-wolf-palaestina`
- **Begründung:** Beide Dateien behandeln dasselbe System 'Blue Wolf' (mit Datenbank Wolf Pack) der IDF in Hebron. Beide nennen denselben Enthüllungszeitpunkt (Washington Post, 11/2021), dieselben Akteure, Fotowettbewerb und Prämien sowie Amnesty 'Automated Apartheid' 2023. Die Koordinaten sind identisch. Unterschiedlich sind nur der Beginn (2019 vs. 2020, Dienstzeit der befragten Soldaten) und die Quellenauswahl. Red Wolf ist in einer eigenen Datei erfasst (palaestina-israel-westjordanland-red-wolf-...) und nicht betroffen.
- **Übernehmen:** Quellen Amnesty (05/2023) und Times of Israel übernehmen. TL-Detail aus 2020 übernehmen: gamifizierte Erfassung per App mit Prämien, Dienstzeit der WaPo-Zeugen. Ggf. den präziseren Titel mit Ortsangabe Hebron/Westjordanland übernehmen. Akteur-Typ 'military' beibehalten. startDate 2019 belassen (Wolf-Pack-Aufbau).

### 69. `suedkorea-neue-nth-room-welle-deepfake-telegram-raeume-mit-133-000-mitgliedern-schul-und` + `suedkorea-telegram-deepfake-welle-2024-ueber-230-chatrooms-an-schulen-und-universitaeten`

- Score 0.46, gemeinsame Quell-URLs: 1
- **Bleibt:** `suedkorea-telegram-deepfake-welle-2024-ueber-230-chatrooms-an-schulen-und-universitaeten`
- **Begründung:** Beide beschreiben dieselbe landesweite Telegram-Deepfake-Welle an südkoreanischen Schulen und Universitäten vom August 2024. Täter, Opfergruppen (Mitschülerinnen, Lehrerinnen, Familienangehörige), Nth-Room-Bezug und Gesetzesverschärfung 09/2024 sind gleich, ebenso eine gemeinsame Quelle (business-humanrights.org). Die Mitgliederzahl des größten Raums weicht ab (133.000 vs. ca. 220.000). Das ist ein Abgleichspunkt, kein anderes Ereignis. Hinweis: suedkorea-deepfake-pornografie-epidemie-ueberrollt-schulen-und-universitaeten-2024 (2024-08) betrifft sehr wahrscheinlich ebenfalls denselben Vorfall und sollte mit einbezogen werden.
- **Übernehmen:** Quelle Korea Herald (26.08.2024) übernehmen. Akteure Telegram FZ-LLC und anonyme Kanalbetreiber (Täter) ergänzen, bisher sind nur Behörden als Akteure erfasst. Details übernehmen: Zugang nur gegen Fotos und Daten realer Frauen, 'Deepvoice'-Audio. TL-Eintrag 2020-11 übernehmen (Cho Ju-bin, 40 Jahre Haft). Die Mitgliederzahl 133.000 vs. 220.000 gegen die Quellen abgleichen. Die Aussage zum AI Basic Act (12/2024, Kennzeichnungspflicht) nur übernehmen, wenn sie belegt ist.

### 70. `usa-apple-card-goldman-sachs-kredit-algorithmus-benachteiligt-frauen-ny-dfs-untersucht` + `usa-apple-card-goldman-sachs-unter-verdacht-algorithmischer-geschlechterdiskriminierung`

- Score 0.46, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-apple-card-goldman-sachs-unter-verdacht-algorithmischer-geschlechterdiskriminierung`
- **Begründung:** Identischer Vorfall: Der virale Thread von David Heinemeier Hansson (20-facher Kreditrahmen gegenüber seiner Frau) und der Wozniak-Fall (Faktor 10) führten im November 2019 zur Untersuchung des NY-DFS gegen Goldman Sachs. Ergebnis war am 23.03.2021 'keine Diskriminierung nachweisbar, aber Transparenzmängel'. Gleiche Akteure, gleicher Ort, eine gemeinsame Quelle (ABC News). Die startDates weichen nur um einen Tag ab (08. vs. 09.11.2019).
- **Übernehmen:** Quelle Washington Post (11.11.2019) und den CNBC-Artikel vom 11.11.2019 (andere URL als der vorhandene CNBC-Artikel vom 10.11.) übernehmen. Zitat von DFS-Superintendentin Linda Lacewell übernehmen ('disparate impact' ist auch ohne Absicht rechtswidrig). TL-Eintrag 2019-08-20 übernehmen (exaktes Startdatum der Apple Card). startDate abgleichen (2019-11-08 vs. 2019-11-09).

### 71. `usa-texas-v-allstate-arity-daten-sammelklage-gegen-fahrer-tracking-fuer-ki-underwriting` + `usa-texas-verklagt-allstate-und-arity-wegen-heimlicher-fahrdaten-sammlung-von-45`

- Score 0.46, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-texas-verklagt-allstate-und-arity-wegen-heimlicher-fahrdaten-sammlung-von-45`
- **Begründung:** Derselbe Vorgang: Klage von Texas AG Ken Paxton gegen Allstate und Arity vom 13.01.2025 nach dem TDPSA, wegen heimlicher SDK-Datensammlung bei über 45 Mio. Menschen. Es ist der erste TDPSA-Vollstreckungsfall. Gleiche Akteure, gleiches Datum, gemeinsame Quelle (Baker Botts). Datei a nennt die Klage fälschlich 'Sammelklage' (es ist eine staatliche Vollstreckungsklage) und behauptet KI-Underwriting. Datei b hält dagegen ausdrücklich fest, dass ML in den Quellen nicht belegt ist.
- **Übernehmen:** Quelle insurify.com übernehmen. TL-Einträge 2016-11 (Ausgründung von Arity) und 2021-03 (Vermarktung der 'weltgrößten Fahrverhaltens-Datenbank') übernehmen. Die Behauptung 'KI-Underwriting' und den Begriff 'Sammelklage' aus a NICHT übernehmen. Die vorsichtige KI-Attribution von b beibehalten.

### 72. `mt-eu-mittelmeer-frontex-drohnen-mit-ki-pilot-ermoeglichen-pullbacks-nach-libyen-und` + `polen-50-anstieg-der-drohnen-flugstunden-2024-heron-und-hermes-900-ki-ueberwachung-im`

- Score 0.49, gemeinsame Quell-URLs: 1
- **Bleibt:** `mt-eu-mittelmeer-frontex-drohnen-mit-ki-pilot-ermoeglichen-pullbacks-nach-libyen-und`
- **Begründung:** Beide beschreiben denselben Vorgang: Frontex-Luftüberwachung mit Heron-Drohnen (IAI/Airbus) im zentralen Mittelmeer meldet Boote an libysche/tunesische Küstenwache, Pullbacks; gleiches Ereignisjahr 2024, gleiche Kernquelle (digit.site36.net, Monroy 31.10.2024), gleiche Akteure (Frontex, IAI). Unterschiede sind nur Zahlenausschnitte (240 Fälle 2019-2023 / 27.000 Betroffene vs. 473 Fälle 2024 / +50 % Flugstunden) und die Verortung: b sitzt am Frontex-HQ Warschau (PL), obwohl das Geschehen im Mittelmeer liegt.
- **Übernehmen:** Aus b: Akteur Elbit Systems (Hermes 900, ca. 50 Mio. EUR) und System EUROSUR-Aerial Surveillance; Flugstunden 3.307 (2023) -> 4.993 (2024); 473 dokumentierte Fälle 2024; über 500 Mio. EUR Luftüberwachung seit 2017; doctrine-Eintrag 2021-05 (Drohnen ab Malta, EUROSUR/Seahorse-Mediterranean, Positionsweitergabe an Libyen); Bellingcat/Lighthouse/Spiegel/ARD-Hinweis; Quellen ECRE (Commission urgent meeting) und Statewatch-PDF 'Drones for Frontex' (no-354). Datum der ECRE-Meldung prüfen, sie stammt vermutlich nicht aus 2024. Querbezug zum separaten Fall eu-frontex-ki-grenzen prüfen.

### 73. `aethiopien-internet-abschaltung` + `aethiopien-telecom-ueberwachung`

- Score 0.48, gemeinsame Quell-URLs: 1
- **Bleibt:** `aethiopien-internet-abschaltung`
- **Begründung:** Beide sind Kontextfälle mit identischem event-Eintrag (2020-11, Tigray-Krieg: Kommunikationssperre der ganzen Region) und denselben Akteuren (äthiopische Regierung, Ethio Telecom, ZTE), außerdem mit denselben Koordinaten in Addis Abeba und der gemeinsamen Quelle Freedom House FOTN 2023. Der Titel von a deckt laut Korrekturnotiz bereits beide Aspekte ab (Abschaltung und Überwachung); a enthält auch die ZTE-Überwachungsinfrastruktur. b bringt nur die Überwachungs-Vorgeschichte hinzu.
- **Übernehmen:** Aus b: ZTE-Rahmenvertrag Ende 2006 als Detail im infrastructure-Eintrag; doctrine-/Kontext-Eintrag 2017-12 Citizen Lab (Cyberbit-Spyware gegen Dissidenten im Ausland) samt Quelle citizenlab.ca; Quelle HRW World Report 2022 (Communications Shutdown Takes Heavy Toll); Detail zu neuen Social-Media-Sperren bis 2023-10 (Freedom House). Systemangaben 'Nationales Kommunikationsüberwachungszentrum' und 'Deep Packet Inspection' bei den Akteuren ergänzen.

### 74. `kenia-worldcoin-iris-scan` + `kenia-worldcoin-wegen-datenschutz-und-sicherheitsbedenken-gestoppt-2023`

- Score 0.48, gemeinsame Quell-URLs: 1
- **Bleibt:** `kenia-worldcoin-iris-scan`
- **Begründung:** Derselbe Vorfall: Worldcoin/Tools for Humanity erfasst in Kenia Iris-Scans gegen Krypto-Token. In beiden Dateien ist das Hauptereignis die Suspendierung im August 2023, und beide verweisen auf die Löschanordnung des High Court vom 05.05.2025. Gleicher Akteur, gleicher Ort, gemeinsame Quelle TechCrunch 02.08.2023. a ist vollständiger (5 Quellen, ODPC-Feststellung 2023-09-06, MIT-TR-Recherche 2022).
- **Übernehmen:** Aus b: Quelle CoinDesk (02.08.2023); Detail, dass das kenianische Innenministerium die Registrierungen aussetzte; Token-Gegenwert von rund 50 US-Dollar; Löschanordnung für Daten von über 300.000 Kenianer:innen binnen sieben Tagen unter Aufsicht der ODPC; Typ 'surveillance' prüfen.

### 75. `niederlande-ki-kindesgeld-skandal` + `niederlande-toeslagenaffaire-diskriminierender-kinderbetreuungs-algorithmus-stuerzt`

- Score 0.48, gemeinsame Quell-URLs: 2
- **Bleibt:** `niederlande-ki-kindesgeld-skandal`
- **Begründung:** Derselbe Vorfall: niederländische Toeslagenaffaire. Gleiche Akteure (Belastingdienst), gleicher Algorithmus (Risikoklassifikation ab 2013 mit Staatsangehörigkeit als Risikofaktor), rund 26.000 Familien, Rücktritt von Rutte III im Januar 2021; gemeinsame Quellen sind Wikipedia und Lighthouse Reports. b wählt nur den Rücktritt als Aufhänger. a ist älter, hat die vollständigere Zeitleiste (CAF-11 2014, Donner-Kommission 2019, AP-Feststellung 2020, Amnesty-Bericht) und bessere Quellen (Amnesty-Bericht, Wiley-Paper).
- **Übernehmen:** Aus b: Quelle Amnesty-News vom 2021-10 ('urgent wake-up call to ban racist algorithms'); Zahl 'später mindestens 35.000 Familien' und 'über 1.000 Kinder zeitweise von Eltern getrennt' (CBS 2022); Betroffenheit vor allem von Familien mit karibischen/surinamischen Wurzeln; FSV-Schwarzliste; 30.000-Euro-Pauschale; exaktes Rücktrittsdatum 15.01.2021; Akteur 'Kabinett Rutte III'. Eventuell den präziseren Titelbegriff 'Toeslagenaffaire' in den Namen von a aufnehmen.

### 76. `suedkorea-deepfake-pornografie-epidemie-ueberrollt-schulen-und-universitaeten-2024` + `suedkorea-deepfake-sexualverbrechen`

- Score 0.48, gemeinsame Quell-URLs: 1
- **Bleibt:** `suedkorea-deepfake-sexualverbrechen`
- **Begründung:** Dasselbe Ereignis: Aufdeckung von Telegram-Chatrooms mit sexualisierten Deepfakes an Schulen und Universitäten im August 2024 (Kanal mit rund 220.000 Mitgliedern), Gesetz vom 26.09.2024 und Ermittlungen gegen Telegram. Gleicher Ort, gleiche Akteure, gemeinsame Quelle NPR. b ist älter (2026-04-01), hat verificationLevel 4 und mehr Quellen, darunter eine Fachpublikation (T&F 2026).
- **Übernehmen:** Aus a: Quellen NBC News und The Daily Star; Zahlen von fast 6.500 Löschanträgen von Jan bis Jul 2024 (viermal so viele wie im Vorjahr) und 297 Polizeifällen (2023 gesamt: 180); siebenmonatige Sondereinsatz-Phase durch Präsident Yoon; HRW-Einordnung als 'Epidemie'; Opfer auch Lehrerinnen. Severity 5 aus a prüfen. startDate von b (2019) auf das Ereignisdatum 2024-08 setzen, ggf. den präziseren Titel aus a übernehmen.

### 77. `usa-amazon-verschrottet-ki-recruiting-tool-wegen-systematischer-frauen-benachteiligung` + `usa-amazons-ki-recruiting-tool-benachteiligte-frauen-systematisch-und-wurde-eingestellt`

- Score 0.48, gemeinsame Quell-URLs: 0
- **Bleibt:** `usa-amazons-ki-recruiting-tool-benachteiligte-frauen-systematisch-und-wurde-eingestellt`
- **Begründung:** Identischer Vorfall: Amazons KI-Recruiting-Tool (Edinburgh, ab 2014) benachteiligte Frauen ('women's', Frauen-Colleges), das Team wurde 2017 aufgelöst, Reuters machte es im Oktober 2018 öffentlich. Gleicher Akteur, Ort und Zeitraum. b hat die Primärquelle Reuters, dazu den Guardian, und verificationLevel 4. a hat nur Sekundärquellen (MIT TR, CNBC als Reuters-Reprint).
- **Übernehmen:** Aus a: Quellen MIT Technology Review und CNBC (10.10.2018); consequences-Eintrag zur Debatte über Hiring-Algorithmen (ACLU-Warnung); Systemangabe 'AI Recruiting Tool (internal, never deployed at scale)'; Sterne-Bewertung von 1-5 als Detail. startDate abgleichen (a 2018-10-10, b 2018-10-09; Reuters-Veröffentlichung war der 10.10.2018).

### 78. `uganda-huawei-safe-city-kameras-verfolgen-opposition-rund-um-bobi-wine-2024` + `uganda-safe-city-huawei`

- Score 0.44, gemeinsame Quell-URLs: 1
- **Bleibt:** `uganda-safe-city-huawei`
- **Begründung:** Beide beschreiben dasselbe Huawei-Safe-City-System in Kampala (126 Mio. USD, 2019), dieselben Akteure (Ugandas Polizei, Huawei) und dieselbe Enthüllung von WSJ und Privacy International, dass Huawei-Techniker Bobi Wines Kommunikation geknackt haben. Für das angebliche 2024-Ereignis der a-Datei gibt es keinen eigenen Beleg: Der Event-Eintrag stützt sich auf denselben qz-Artikel über die Proteste vom November 2020, den auch b nutzt. Die Quellendaten '2024' in a sind offenbar falsch.
- **Übernehmen:** Akteur 'Internal Security Organisation (ISO)'. Quelle privacyinternational.org/case-study/3969 auch auf oberster Ebene (in b bisher nur im Timeline-Eintrag). Quelle africacenter.org (Spread of Surveillance Technology in Africa) plus ein consequences-Eintrag 2024 'Warnungen vor flächendeckender Überwachung im Vorfeld der Wahl 2026'. Die falschen Quellendaten '2024' aus a nicht übernehmen.

### 79. `usa-chatgpt-empfiehlt-in-einem-drittel-der-faelle-falsche-krebstherapien-2023` + `usa-jama-oncology-und-cancer-journal-studien-dokumentierten-dass-chatgpt-erfundene`

- Score 0.44, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-chatgpt-empfiehlt-in-einem-drittel-der-faelle-falsche-krebstherapien-2023`
- **Begründung:** Dieselbe Studie aus dem Brigham and Women's Hospital in JAMA Oncology vom August 2023 zu ChatGPT (GPT-3.5) und den NCCN-Leitlinien: Etwa ein Drittel der Empfehlungen ist leitlinienwidrig. Gleiche Akteure, gleiches Datum, gleiche Quelle (Harvard Gazette in beiden). b ergänzt nur Details und die Folgestudie von 2024. Bleiben sollte a: sauberer Slug mit Jahr und präziser Titel. Der Slug von b ist abgeschnitten.
- **Übernehmen:** Aus b übernehmen: 104 Anfragen; in 12,5 Prozent der Fälle halluzinierte, erfundene Therapien (auch angeblich kurative bei unheilbaren Krebsformen). Consequences-Eintrag August 2024 zur Folgestudie im Journal Cancer zu Brustkrebs (24 Prozent ungenau, 41 Prozent erfundene Referenzen, Quelle curetoday.com). Quellen brighamhealthonamission.org (30. November 2023) und sciencedaily.com (24. August 2023). Event-Datum präzisieren auf 2023-08-24. Severity eventuell auf 4 anheben, wie in b.

### 80. `usa-tesla-auf-autopilot-fuhr-in-geparktes-feuerwehrauto-und-toetete-den-fahrer-2023` + `usa-tesla-rast-in-geparktes-feuerwehrfahrzeug-fahrer-getoetet-walnut-creek-2023`

- Score 0.44, gemeinsame Quell-URLs: 0
- **Bleibt:** `usa-tesla-rast-in-geparktes-feuerwehrfahrzeug-fahrer-getoetet-walnut-creek-2023`
- **Begründung:** Derselbe Unfall: Tesla prallt am 18.02.2023 auf der I-680 bei Walnut Creek in ein geparktes Feuerwehrfahrzeug, Fahrer tot, Beifahrer (Bruder) schwer verletzt. Gleicher Ort, gleiches Datum (a nur Monat 2023-02, im TL aber 2023-02-18), gleicher Akteur.
- **Übernehmen:** Aus a: Name des Fahrers (Genesis Giovanni Mendoza Martinez), Hinweis auf die Klage der Familie wegen betrügerischer Darstellung des Autopiloten als consequences-Eintrag samt CNBC-Quelle vom 2024-12-09 (Klagedatum prüfen: a nennt 2023-10, der CNBC-Artikel stammt von 12/2024), ggf. infrastructure-Eintrag 2015-10 (Einführung Autopilot). Wikipedia-Liste nur als Zusatzquelle, falls gewünscht.

### 81. `uber-algorithmisches-management` + `usa-uber-lyft-gig-worker-algorithmus`

- Score 0.43, gemeinsame Quell-URLs: 0
- **Bleibt:** `usa-uber-lyft-gig-worker-algorithmus`
- **Begründung:** Beide sind thematische Sammelfälle zum selben Dauerphänomen: algorithmische Steuerung und Lohnmanipulation von Uber- (und Lyft-)Fahrern, gleiche Akteure, gleicher Ort San Francisco, beide stützen sich auf die NYT-Enthüllung vom April 2017 (in a als Event, in b in der Infrastruktur-Phase). Unterschiedliche Event-Wahl (NYT 2017 vs. Proposition 22 2020) und Startjahr (2014 vs. 2016) sind nur Rahmungen desselben Vorfalls.
- **Übernehmen:** Aus a: NYT-Quelle 2017-04-02 ('How Uber Uses Psychological Tricks...') und UK-Supreme-Court-Quelle (Uber BV v Aslam), TL-Einträge 2013-09-19 (Kalifornien legalisiert TNCs), 2021-02 (UK Supreme Court: Uber-Fahrer sind Arbeitnehmer) und 2024-10-14 (EU-Plattformarbeitsrichtlinie) als consequences, Systemangaben 'Automated Deactivation' und psychologisches Nudging in die Beschreibung.

### 82. `uganda-huawei-gesichtserkennung-gegen-proteste-eingesetzt-2020` + `uganda-safe-city-huawei`

- Score 0.43, gemeinsame Quell-URLs: 1
- **Bleibt:** `uganda-safe-city-huawei`
- **Begründung:** Das Kernereignis ist in beiden identisch: Nach den tödlichen Protesten im November 2020 (Festnahme Bobi Wine) nutzte die ugandische Polizei die Huawei-Kameras mit Gesichtserkennung zur Identifizierung, über 800 bzw. 836 Festnahmen. Gleiche Akteure, gleicher Ort, gleiche Hauptquelle (Quartz). b ergänzt nur Vorgeschichte (WSJ 2019) und Folgen (2021).
- **Übernehmen:** Aus a: biometricupdate-Quelle (11/2020), Details zu Umfang (über 10.000 KI-Kameras, 83 Überwachungszentren), TL-Eintrag 2018 Vertragsabschluss über 126 Mio. USD (Widerspruch zu b, das die 126 Mio. auf 2019-08 datiert, klären) sowie Warnungen der Menschenrechtsgruppen. startDate von b (2019) ggf. auf 2020-11 angleichen, da das TL-Event 2020-11 ist; Titel von a ist präziser und kann als Vorlage dienen.

### 83. `usa-cambridge-analytica-nutzt-facebook-daten-zur-politischen-manipulation-im-trump` + `usa-cambridge-analytica`

- Score 0.43, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-cambridge-analytica`
- **Begründung:** Beide Dateien beschreiben dasselbe Ereignis: Cambridge Analytica/SCL greift Daten von bis zu 87 Mio. Facebook-Profilen über Kogans App 'thisisyourdigitallife' ab und nutzt sie für Micro-Targeting im US-Wahlkampf 2016 für Trump. Gleich sind auch die Enthüllung durch Wylie im März 2018 und die FTC-Strafe von 5 Mrd. USD. Guardian- und FTC-Quelle sind identisch. Die lange Datei ist ein AIAAIC-Import (round-6 batch C, aiGenerated) und ein Duplikat des manuell angelegten Originals vom 2026-04-02.
- **Übernehmen:** Ins Original übernehmen:
- NYT-Quelle 'How Trump Consultants Exploited the Facebook Data of Millions' (2018-03-17).
- TL-Einträge '2013: CA als US-Ableger der SCL Group gegründet' und '2015-2016: Cruz- und Trump-Kampagne engagieren CA'.
- Präzise Daten 2016-11 (Event) und 2019-07-24 (FTC).
- Erwähnung der Cruz-Kampagne in der Beschreibung.
- Akteur 'Donald J. Trump for President campaign'.
- Einschränkung, dass ML-Einsatz in den Quellen nicht ausdrücklich belegt ist.

Im Original prüfen:
- Das TL-Event heißt 'Einsatz bei Brexit und US-Wahl', obwohl die eigene Beschreibung die Brexit-Rolle per ICO 2020 relativiert. Event-Titel auf die US-Wahl 2016 fokussieren.
- Severity: lang = 5, Original = 4. Die Hauptsession entscheidet.

Danach Langslug entfernen und Verweise darauf bereinigen: index.json, sitemap.xml, scripts/workflows/*-2026-10-23.json, _tl-welle-6-slugs.json. Die Verweise auf das Original (asm:relatedIncidents in russland-doppelganger, research-topics.json) bleiben gültig.

## Teil-Dubletten (22)

### 1. `usa-apple-face-id-kann-brueder-nicht-unterscheiden-2017` + `usa-apple-face-id-kann-eineiige-zwillinge-nicht-zuverlaessig-unterscheiden-2017`

- Score 0.53, gemeinsame Quell-URLs: 0
- **Bleibt:** `usa-apple-face-id-kann-eineiige-zwillinge-nicht-zuverlaessig-unterscheiden-2017`
- **Begründung:** Derselbe Produktmangel zum Marktstart des iPhone X (3./4. November 2017): Face ID unterscheidet enge Verwandte nicht zuverlässig. Apple hatte die erhöhte Fehlerquote für Zwillinge und Geschwister vorab eingeräumt (beide TLs: doctrine September 2017). a ist nur eine einzelne Nutzer-Demonstration (Brüder, die keine Zwillinge sind) innerhalb desselben Vorfalls, ohne dokumentierten Schaden (Severity 1). Als eigenständiger Eintrag trägt a kaum.
- **Übernehmen:** Titel und Beschreibung auf 'Zwillinge und Geschwister' erweitern. Quellen 9to5Mac und MacRumors (2017-11-04) übernehmen. TL-Eintrag ergänzen: 2017-11-04 Reddit-/YouTube-Videos zeigen, dass Face ID auch Brüder ohne Zwillingsstatus verwechselt. Systemname 'Face ID' in asm:actors von b eintragen (dort leer).

### 2. `china-ki-deepfake-propaganda` + `china-xinhua-praesentierte-ki-generierte-nachrichtensprecher-und-loeste-misstrauen-aus`

- Score 0.55, gemeinsame Quell-URLs: 1
- **Bleibt:** `china-ki-deepfake-propaganda`
- **Begründung:** a ist ein Sammelfall (KI-Sprecher und Deepfake-Propaganda 2018 bis 2024, Kern-Event Spamouflage/Wolf News 2022); die Xinhua-KI-Sprecher-Vorstellung vom November 2018, die b als eigenen Vorfall führt, ist in a bereits als Infrastruktur-Eintrag mit derselben BBC-Quelle enthalten. Gleiche Akteure Xinhua und Sogou.
- **Übernehmen:** Guardian-Quelle (2018-11-09), exaktes Datum 2018-11-07 und Ort World Internet Conference Wuzhen für den Infrastruktur-Eintrag, TL-Folge 2023-01-10 Kennzeichnungspflicht für synthetische Medien in China. Alternativ b als Einzelereignis behalten und gegenseitig verlinken.

### 3. `global-cisco-studie-deepseek-scheitert-bei-100-prozent-der-jailbreak-versuche-2025` + `global-deepseek-liefert-detaillierten-mona-lisa-diebstahlplan-nach-jailbreak-2025`

- Score 0.6, gemeinsame Quell-URLs: 2
- **Bleibt:** `global-cisco-studie-deepseek-scheitert-bei-100-prozent-der-jailbreak-versuche-2025`
- **Begründung:** b trägt zwar den Titel der Bristol-Mona-Lisa-Untersuchung, sein TL-Event ist aber identisch mit a (Cisco/UPenn, 100 Prozent Jailbreak-Erfolg, 2025-02-02) und teilt die Quellen Fortune und Tom's Guide. Eigenständig ist nur das Bristol-Detail, das als Folge/Ergänzung desselben Sicherheitsbefunds in a passt.
- **Übernehmen:** Quelle theengineer.co.uk (2025-02-18) und Akteur University of Bristol übernehmen; consequences-Eintrag 2025-02 'Bristol-Forschende entlocken DeepSeek per maskierter Anfrage einen Mona-Lisa-Diebstahlplan' ergänzen; ggf. Behörden-Prüfungen/Nutzungsverbote aus b-TL in a-consequences aufnehmen.

### 4. `hongkong-smart-city-ueberwachung` + `hongkong-smart-lampposts-und-gesichtserkennung-demonstrant-innen-reissen-ueberwachungs`

- Score 0.67, gemeinsame Quell-URLs: 2
- **Bleibt:** `hongkong-smart-lampposts-und-gesichtserkennung-demonstrant-innen-reissen-ueberwachungs`
- **Begründung:** a ist ein Sammelfall (Smart-City-Überwachung 2019 bis 2024: Smart-Lampposts, Nationales Sicherheitsgesetz, Geräte-Beschlagnahmen 2021, SmartView-CCTV 2024), dessen infrastructure-Eintrag genau das Ereignis von b beschreibt (Demonstrierende demontieren im August 2019 Smart-Lampposts in Kwun Tong/Kowloon Bay, Anbieter zieht sich zurück). Zwei gemeinsame Quellen (CNN 2019, UAB 2025). b ist das präzise datierte Einzelereignis (24.08.2019) mit 6 TL-Einträgen; a hat als event-Eintrag NSL-Geräte-Beschlagnahmen ohne KI-Bezug und ist unscharf.
- **Übernehmen:** a in b aufgehen lassen: RFA-Quelle 2024 (Hunderte neue Überwachungskameras, Polizeiprogramm SmartView mit geplanter Gesichtserkennung ab April 2024) und Participedia-Quelle als zusätzlicher Konsequenz-Eintrag in b. NSL-Kontext höchstens knapp. Alternative, falls a eigenständig bleiben soll: a auf den SmartView-CCTV-Ausbau 2023/2024 refokussieren, Lamppost-Teil und die doppelten Quellen (CNN, UAB) streichen, Querverweis auf b.

### 5. `suedkorea-inha-universitaet-deepfake-telegram-raum-mit-1-200-mitgliedern-aufgeflogen` + `suedkorea-neue-nth-room-welle-deepfake-telegram-raeume-mit-133-000-mitgliedern-schul-und`

- Score 0.66, gemeinsame Quell-URLs: 2
- **Bleibt:** `beide behalten mit Querverweis; Hauptfall ist suedkorea-neue-nth-room-welle-deepfake-telegram-raeume-mit-133-000-mitgliedern-schul-und`
- **Begründung:** b ist der Sammelfall (Deepfake-Telegram-Welle August 2024, Raum mit 133.000 Mitgliedern, hunderte Schulen/Unis, Gesetzesverschärfung September 2024), a ein Einzelereignis daraus (Inha-Universitäts-Raum mit ca. 1.200 Mitgliedern, 19.08.2024, Polizei Incheon), das laut a die Welle auslöste. Zwei gemeinsame Quellen (Korea Herald 26.08.2024, BHRRC) sind Wellen-Artikel; der Konsequenz-Eintrag von a beschreibt bereits die Welle. Unterschiedliche Räume, Opfergruppen und Ermittlungen, daher ist ein eigenständiges Einzelereignis vertretbar.
- **Übernehmen:** In b den Inha-Raum als Auslöser erwähnen und die Inha-spezifische Quelle (koreaherald.com/article/3455531) ergänzen; in a den Wellen-Teil des Konsequenz-Eintrags kürzen und auf b verweisen. Bei vollständiger Zusammenlegung: Inha-Details (1.200 Mitglieder, mindestens 30 Betroffene, seit 2020 bestehend, Überstellung eines Weiterverbreiters im März 2024, Vorermittlungen gegen Telegram Anfang September 2024) als event/consequence-Eintrag in b.

### 6. `usa-ftc-ermittelt-gegen-evolv-wegen-irrefuehrender-werbung-fuer-ki-waffenscanner-2023` + `usa-sec-und-ftc-untersuchen-evolv-technology-wegen-irrefuehrender-ki-waffenscanner-2024`

- Score 0.65, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-sec-und-ftc-untersuchen-evolv-technology-wegen-irrefuehrender-ki-waffenscanner-2024`
- **Begründung:** Gleiche Affäre (irreführende Werbung von Evolv für den KI-Waffenscanner Express, Utica-Messerangriff 2022), gleiche Abschlusskonsequenz (FTC-Vergleich 26.11.2024), gemeinsame FTC-Quelle. a behandelt nur das FTC-Verfahren, b umfasst SEC-Untersuchung (16.02.2024) und FTC-Verfahren und damit a vollständig. Getrennte Dateien je Behörde wären doppelte Darstellung desselben Vorfalls.
- **Übernehmen:** EFF-Quelle (Dezember 2024); TL-Eintrag 2022-12 vertraulicher Testbericht (große Messer in 42 % der Durchgänge übersehen); Beginn der FTC-Ermittlungen 2023-10 als eigener TL-Eintrag; Verbreitung in über 800 Schulen in rund 40 Bundesstaaten; Detail des 60-tägigen Vertragsausstiegs für K-12-Schulen.

### 7. `israel-ben-gurion-forschende-ueberlisten-mobileye-630-pro-mit-drohnen-projizierten` + `israel-usa-israel-forscher-taeuschen-tesla-autopilot-mit-projizierten-phantom-bildern-und`

- Score 0.52, gemeinsame Quell-URLs: 1
- **Bleibt:** `israel-ben-gurion-forschende-ueberlisten-mobileye-630-pro-mit-drohnen-projizierten`
- **Begründung:** Gleiche Forschungsreihe derselben Gruppe (Ben Nassi u. a., Ben-Gurion-Universität) zu Phantom-Projektionen gegen kamerabasierte Fahrassistenz. A deckt den ganzen Verlauf ab: Mobileye-Studie 2019-06, Tesla-Erweiterung 2020-01 und Veröffentlichung auf der ACM CCS mit Kurzzeit-Phantomen und der Gegenmaßnahme GhostBusters 2020-11. B beschreibt nur die Veröffentlichung von 2020-10 ('Phantom of the ADAS', Kurzzeit-Phantome, GhostBusters), also einen Ausschnitt von A. Die Threatpost-Quelle ist identisch.
- **Übernehmen:** Aus B übernehmen: die Quelle cyber.bgu.ac.il/split-second-phantom-images-can-fool-teslas-autopilot/, die Warnung vor gekaperten Internet-Werbetafeln als Angriffsweg (Unfälle, Staus) und die Detailangabe, dass projizierte Fahrbahnmarkierungen Spurwechsel auslösten. Diese Punkte in den Timeline-Eintrag von 2020-11 (CCS/GhostBusters) einarbeiten; danach B auflösen.

### 8. `spanien-viogen-algorithmus-femizide-fehlklassifizierung` + `spanien-von-viogen-als-geringes-risiko-eingestufte-lobna-hemid-wird-von-ehemann-ermordet`

- Score 0.52, gemeinsame Quell-URLs: 2
- **Bleibt:** `spanien-viogen-algorithmus-femizide-fehlklassifizierung`
- **Begründung:** A ist der Sammelfall zum VioGén-System seit 2007 (247 getötete Frauen, 55 von 98 als niedrig eingestuft, Eticas-Audit, VioGén 2). B ist ein Einzelfall daraus: Lobna Hemid, Anzeige im Januar 2022, Tötung sieben Wochen später. A nennt Lobna Hemid bereits ausdrücklich als Beispiel. Gleiches System, gleicher Betreiber, zwei Quellen sind identisch (techdirt, humanrightsresearch). Klassisches Verhältnis von Sammelfall zu Einzelereignis.
- **Übernehmen:** Empfehlung: Querverweis statt Zusammenlegung, denn B ist ein eigenständig datiertes Einzelschicksal mit eigener Timeline. A verweist auf B, und B bekommt einen Rückverweis auf den Sammelfall. Wird doch zusammengelegt, aus B übernehmen: die Quelle incidentdatabase.ai/cite/747/, die Daten 2022-01-11 (Anzeige, Einstufung als geringes Risiko) und 2022-03 (Tötung durch den Ehemann El Banaisati, danach dessen Suizid) als Beispiel in der Timeline von A.

### 9. `usa-kroger-gesichtserkennung-supermarkt` + `usa-rite-aid-gesichtserkennung-beschuldigt-unschuldige-kund-innen-des-diebstahls-2023`

- Score 0.52, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-rite-aid-gesichtserkennung-beschuldigt-unschuldige-kund-innen-des-diebstahls-2023`
- **Begründung:** A ist ein Mischfall 'Rite Aid und Kroger'. Der Kern (Rite Aid 2012-2020, Reuters-Recherche 2020, FTC-Verbot 2023-12) deckt sich vollständig mit B. Zwei FTC- und CNN-Quellen sind identisch. Kroger ist nur ein Randaspekt (Pilot 2019 zur Alters- und Geschlechtsschätzung, Kritik von Abgeordneten 2024), trotzdem trägt A den Kroger-Slug und den Kroger-Sitz Cincinnati. B ist zum Rite-Aid-Fall präziser (Schweregrad 4, detaillierte Timeline zu FaceFirst und DeepCam). Hinweis: Mit usa-rite-aid-setzte-gesichtserkennung-bevorzugt-in-aermeren-nicht-weissen-vierteln-ein (2020-07-28, Reuters) gibt es eine dritte Rite-Aid-Datei. Sie ist als Ereignis von 2020 eigenständig, überschneidet sich aber mit beiden.
- **Übernehmen:** Aus A in B übernehmen: die CNBC-Quelle (cnbc.com/2023/12/19/ftc-bars-rite-aid-...) und den Doktrin-Eintrag 2012-10 zu den FTC-Leitlinien 'Facing Facts' (nur unverbindlich). Den Rite-Aid-Anteil aus A entfernen. A entweder auf den Kroger-Anteil (Pilot 2019, Abgeordneten-Anfrage 2024) reduzieren und gegen usa-kroger-dynamic-pricing-ki und usa-kroger-unter-beschuss-wegen-ki-basierter-dynamischer-preisgestaltung-mit abgleichen, oder auflösen und den Kroger-Anteil dorthin verschieben.

### 10. `deutschland-microsoft-copilot-verbreitet-falsche-wahlinfos-zu-deutschland-und-der-schweiz` + `usa-microsoft-copilot-liefert-falsche-informationen-zur-us-wahl-2024-2023`

- Score 0.5, gemeinsame Quell-URLs: 1
- **Bleibt:** `deutschland-microsoft-copilot-verbreitet-falsche-wahlinfos-zu-deutschland-und-der-schweiz`
- **Begründung:** Kern beider Dateien ist dieselbe Studie von AlgorithmWatch und AI Forensics (Tests August bis Oktober 2023 zu Bayern, Hessen und der Schweiz, Veröffentlichung am 2023-12-15, ein Drittel fehlerhafte Antworten, 40 Prozent Ausweichen). B übernimmt sie in seiner Timeline wörtlich als Doktrin (2023-08) und Ereignis (2023-12-15). Die WaPo-Quelle ist identisch. Eigenständig in B ist nur der US-Aspekt aus der WIRED-Berichterstattung (CSET-Repost): Fragen nach Wahllokalen werden mit russischen Wahlen beantwortet, dazu die Nachprüfung vor der US-Wahl 2024. B ist damit ein Ausschnitt bzw. Ableger desselben Publikationsereignisses.
- **Übernehmen:** Aus B übernehmen: die Quelle cset.georgetown.edu/article/microsofts-ai-chatbot-replies-to-election-questions-... (WIRED), das US-Beispiel (Frage nach Wahllokalen, Verweis auf russische Wahlen) und den Folge-Eintrag zu Microsofts Fünf-Punkte-Ankündigung vom November 2023 (blogs.microsoft.com/on-the-issues/2023/11/07/...) mit der Nachprüfung durch AI Forensics und AlgorithmWatch, die kaum Fortschritt zeigte. Soll B als eigener US-Fall bestehen bleiben, müssen Ereignis und Doktrin in seiner Timeline auf WIREDs eigene US-Tests umgeschrieben werden statt auf die europäische Studie.

### 11. `global-forbes-und-wired-werfen-perplexity-ai-vor-artikel-ohne-zustimmung-zu-plagiieren` + `usa-perplexity-ai-ignoriert-robots-txt-verbote-und-scrapt-webseiten-heimlich-2024`

- Score 0.46, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-perplexity-ai-ignoriert-robots-txt-verbote-und-scrapt-webseiten-heimlich-2024`
- **Begründung:** Beide Dateien beschreiben dieselbe Perplexity-Affäre vom Juni 2024 und haben exakt dieselben zwei Quellen (TechCrunch 02.07.2024, Engadget zur Amazon-Prüfung). Die robots.txt-Datei deckt den Plagiatsvorwurf von Forbes/WIRED bereits in Beschreibung und TL ab (2024-06-27 'Plagiatsvorwürfe von Forbes und WIRED'). Die Plagiatsdatei ist damit ein Teilaspekt desselben Nachrichtenzyklus. Fachlich sind es zwar zwei Vorwürfe (Plagiat in Perplexity Pages vs. Crawler-Umgehung), wegen der identischen Quellen lassen sie sich aber nicht sauber trennen. Hinweis: usa-conde-nast-stellt-perplexity-wegen-plagiat-von-vogue-new-yorker-und-wired-ab-2024 (WIRED gehört zu Condé Nast) und usa-dow-jones-und-new-york-post-verklagen-perplexity-ai-wegen-copyright-verletzung-2024 decken angrenzende Teile ab, also mitprüfen.
- **Übernehmen:** Details zum Forbes-Vorwurf (Rekonstruktion eines exklusiven Forbes-Artikels in Perplexity Pages ohne Attribution, WIRED-Artikel ebenfalls plagiiert), Akteur Forbes, TL-Einträge 2024-05 (Start von Perplexity Pages). Den TL-Eintrag 2024-10-21 (Klage von Dow Jones/NY Post) nur als Querverweis auf die eigene Dow-Jones-Datei aufnehmen. Wenn beide Dateien getrennt bleiben sollen, braucht jede eigene, unterscheidende Quellen (z. B. Forbes-Artikel bzw. WIRED/Robb-Knight-Recherche).

### 12. `usa-bundesgericht-stellt-fest-dass-tenncare-algorithmus-tausenden-tennesseern-zu-unrecht` + `usa-deloitte-algorithmen-verweigern-medicaid-berechtigten-krankenversicherung-2024`

- Score 0.49, gemeinsame Quell-URLs: 2
- **Bleibt:** `usa-deloitte-algorithmen-verweigern-medicaid-berechtigten-krankenversicherung-2024`
- **Begründung:** b ist der Sammelfall (Deloitte-Eignungssysteme in 25 Bundesstaaten, KFF-Recherche 2024-06, Colorado-Audit, Florida), a ist das Einzelereignis Tennessee: Urteil A.M.C. v. Smith vom 26.08.2024 zu TennCare Connect. Dieses Urteil steht in b bereits als consequences-Eintrag; gemeinsame Quellen sind KFF und Gizmodo. Das Urteil ist ein eigenständiges Gerichtsverfahren, daher sind auch zwei Dateien mit Querverweis vertretbar. Bei Zusammenlegung geht a in b auf.
- **Übernehmen:** Bei Zusammenlegung aus a: Verfahrensdetails A.M.C. v. Smith (Klage 2020-03 für 35 Betroffene durch Tennessee Justice Center, NHeLP und NCLEJ; Richter Waverly D. Crenshaw Jr.; Verstöße gegen Medicaid Act, Due Process und ADA); Start TennCare Connect/TEDS 2019-03; FTC-Beschwerde In re Deloitte, Supplement vom 16.10.2024 (NHeLP, EPIC, Upturn); Quellen healthlaw.org und tennesseelookout.com. Alternative: beide Dateien behalten und gegenseitig verlinken.

### 13. `nigeria-ki-wahlmanipulation-deepfakes` + `nigeria-viraler-deepfake-audio-ueber-atiku-abubakar-okowa-und-tambuwal-angeblich-zur`

- Score 0.48, gemeinsame Quell-URLs: 3
- **Bleibt:** `nigeria-ki-wahlmanipulation-deepfakes`
- **Begründung:** a ist der Sammelfall zur Wahl 2023: Deepfake-Audio vom 24.02.2023, Versagen von IReV/BVAS, Wahlklagen. b ist genau das Einzelereignis Atiku/Okowa/Tambuwal-Audio vom 24.02.2023. Alle drei Quellen von b (CDD, IST, TheCable) stehen auch in a. b formuliert vorsichtiger: Faktenchecker stufen das Audio als bearbeitet bzw. als Zusammenschnitt ein, eine forensische KI-Bestätigung fehlt. a nennt es dagegen pauschal 'KI-manipuliert'.
- **Übernehmen:** Aus b: vorsichtige Einordnung des Audios in a übernehmen (TheCable: Zusammenschnitt nicht zusammengehöriger Aufnahmen, CDD: 'doctored', keine unabhängige forensische Untersuchung dokumentiert), damit a nicht überbehauptet; Kontext Reuters Digital News Report 2022 (WhatsApp als Nachrichtenplattform); Afrobarometer 2022 (nur 23 % vertrauen der INEC); Shallow-Fake-Video über Bola Tinubu; Akteur PDP als Zielpartei. Alternative: b als Einzelfall mit Querverweis behalten.

### 14. `usa-bing-image-creator-erzeugt-anstoessige-disney-bilder-microsoft-schraenkt-ein-2023` + `usa-microsofts-ki-bildgenerator-erzeugt-gewalttaetige-und-extremistische-bilder-2023`

- Score 0.44, gemeinsame Quell-URLs: 0
- **Bleibt:** `usa-microsofts-ki-bildgenerator-erzeugt-gewalttaetige-und-extremistische-bilder-2023`
- **Begründung:** Beide beschreiben dieselbe Missbrauchswelle beim Bing Image Creator nach der Freischaltung von DALL-E 3 Anfang Oktober 2023 (unzureichende Filter, 4chan-Missbrauch). Die Micky-Maus-Bilder zu 9/11 aus a sind selbst ein Beispiel für die gewalttätigen und extremistischen Inhalte aus b. a betont nur zusätzlich den Urheberrechtsaspekt (Disney-Figuren). b ist der umfassendere Fall mit Bellingcat und Washington Post. Zu entscheiden ist, ob man zusammenlegt oder nur einen Querverweis setzt, falls die Urheberrechtsperspektive eigenständig bleiben soll.
- **Übernehmen:** Disney- und Micky-Maus-Bilder zu 9/11 als Beispiel in description und Event. Typ 'copyright' ergänzen. Akteur OpenAI (DALL-E 3). Quellen tomshardware.com (AI image generators output copyrighted characters) und cryptopolitan.com. Consequences-Eintrag vom 11. Oktober 2023: Microsoft verschärft Schutzmechanismen und schränkt Prompt-Kombinationen ein (in b bisher nur der März 2024). Außerdem den Bing-Blog vom 3. Oktober 2023 und den theregister-Beleg für den doctrine-Eintrag.

### 15. `usa-bryan-cranstons-stimme-und-bildnis-ohne-zustimmung-in-openais-sora-2-generiert-2025` + `usa-openai-sora2-deepfake-launch-abschaltung`

- Score 0.44, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-openai-sora2-deepfake-launch-abschaltung`
- **Begründung:** Der Cranston-Fall aus a (Stimme und Bildnis in Sora 2 ohne Zustimmung, gemeinsame Erklärung von OpenAI, SAG-AFTRA, UTA und CAA am 20. Oktober 2025) ist ausdrücklich Teil des Sammelfalls b. b ist sogar nach dem Cranston- und SAG-AFTRA-Protest benannt und deckt außerdem Michael Jackson und Martin Luther King Jr., Public Citizen und die Abschaltung 2026 ab. Dieselben Akteure, Daten und Quellen (CNBC vom 20. Oktober 2025 in beiden).
- **Übernehmen:** Quellen NBC News (rcna238715) und Variety (Cranston, SAG-AFTRA, Agents applaud fixes). UTA und CAA als Mitunterzeichner der Erklärung. Für die Timeline von b: infrastructure-Eintrag 2025-09-30 mit openai.com/index/sora-2 und VentureBeat. Den Event-Eintrag aufteilen in Oktober 2025 'Cranstons Stimme und Bildnis ohne Zustimmung generiert' (nofilmschool) und 2025-10-20 als consequences (gemeinsame Erklärung). Bei Zusammenlegung eventuell einen Slug mit Jahr wählen.

### 16. `usa-lensa-ai-bilder-missbrauch` + `usa-lensa-ki-erzeugt-nacktbilder-aus-kinderfotos-wired-recherche-2022`

- Score 0.44, gemeinsame Quell-URLs: 1
- **Bleibt:** `usa-lensa-ai-bilder-missbrauch`
- **Begründung:** Beide betreffen dieselbe Kontroverse um Prisma Labs und Lensa 'Magic Avatars' im Dezember 2022: sexualisierte und nackte Bilder ohne Einwilligung. b ist ein Einzelbeleg daraus, nämlich der WIRED-Selbsttest von Olivia Snow mit Kinderfotos. a ist der Sammelfall mit MIT Technology Review, PetaPixel, Jezebel und einer Anfrage im EU-Parlament und behandelt zusätzlich den Urheberrechtsaspekt. Die Jezebel-Quelle ist in beiden enthalten.
- **Übernehmen:** WIRED-Quelle (wired.com/story/lensa-artificial-intelligence-csem, 7. Dezember 2022). Detail zu Olivia Snow (UCLA): Nacktbilder aus zehn Kinderfotos, also ein CSEM-Aspekt. Datum von Stable Diffusion präzisieren (2022-08-22). Consequences-Eintrag: Prisma Labs kündigt Filter an (techcrunch.com/2022/12/06/prisma-ai-regulation). startDate in a von 2022 auf 2022-12 präzisieren. Der Event-Eintrag von a behandelt derzeit nur Künstler und Urheberrecht; die Sexualisierung (MIT TR, WIRED) sollte als eigenes Event ergänzt werden. Typ 'malfunction' eventuell ergänzen.

### 17. `indonesien-prabowo-gemoy-ki-rebranding-2024` + `indonesien-prabowo-suharto-deepfake-2024`

- Score 0.45, gemeinsame Quell-URLs: 1
- **Bleibt:** `indonesien-prabowo-gemoy-ki-rebranding-2024`
- **Begründung:** Beide Dateien behandeln den KI-Wahlkampf rund um Prabowo bei der Präsidentschaftswahl 2024. Sie haben dieselbe Ortsangabe, die gemeinsame Quelle cpreview.org und dasselbe Ereignis 2024-02-14 (Wahlsieg mit 58,6 %). b stellt zwar das Suharto-Deepfake (Jan. 2024, verbreitet von Golkar-Vize Erwin Aksa) in den Mittelpunkt, erzählt aber die Gemoy-Kampagne (Midjourney-Cartoon, kuscheliger Opa auf TikTok) parallel mit. Der Gemoy-Teil von b doppelt also a. Das Suharto-Deepfake selbst ist ein eigener Akt mit anderem Verbreiter und anderem Datum und kommt in a nicht vor.
- **Übernehmen:** Beide behalten, Gemoy aber nur in a führen. b auf das Suharto-Deepfake zuschneiden: Titel, Beschreibung und den TL-Eintrag 2023 'KI-Rebrand: Prabowo als gemoy' streichen bzw. durch einen Querverweis auf a ersetzen; Kern bleiben CNN, BenarNews und Erwin Aksa. Die Gen-Z-Exit-Poll-Werte aus b (66 bis 71 %) und die Quelle fulcrum.sg nach a übernehmen. Nebenbefund in b: In der Beschreibung stehen 4,5 Mio. Aufrufe, im TL-Event 4,7 Mio.; das angleichen. Alternative wäre eine Zusammenlegung zu einem Sammelfall 'KI im indonesischen Wahlkampf 2024'.

### 18. `ukraine-lancet-loitering-munition-mit-ki-zielerkennung-nvidia-jetson-in-der-ukraine-2024` + `ukraine-russland-zala-lancet-autonome-ki-drohnen`

- Score 0.45, gemeinsame Quell-URLs: 1
- **Bleibt:** `ukraine-russland-zala-lancet-autonome-ki-drohnen`
- **Begründung:** Beide beschreiben dasselbe Waffensystem: die ZALA-Lancet mit KI-Zielerkennung auf Basis von Nvidia Jetson, eingesetzt von den russischen Streitkräften gegen die Ukraine. Dazu gehören jeweils das Nachfolgeprojekt Izdeliye-53 und der HUR-Bericht vom März 2026; als Quelle teilen sie Wikipedia 'ZALA Lancet'. a ist nur ein Ausschnitt mit dem Stichpunkt Mai 2024 (285 Schläge, Höchststand). b ist der Dachfall mit vollständigerer Timeline von 2019 bis 2026, mehr Akteuren (Verteidigungsministerium, Nvidia, ukrainische Streitkräfte), fünf Quellen und Schwere 5. a sollte in b aufgehen.
- **Übernehmen:** Aus a nach b übernehmen: den TL-Eintrag 2024-05 (Jetson-TX2/Orin-Integration, Höchststand von 285 Lancet-Schlägen im Mai 2024), die Quelle pravda.com.ua vom 23.03.2026 (HUR-Bericht zu Lancet und Scalpel, passt zum bestehenden 2026-03-Eintrag in b) und army-technology.com. Beim Zusammenführen die Jahre klären, in denen der Jetson verbaut wurde: a nennt einmal 2019-06 ('mit Jetson an Bord') und einmal 2024, b nennt 2023-10.

### 19. `brasilien-falschverhaftungen-durch-gesichtserkennung-in-rio-de-janeiro-15-dokumentierte` + `brasilien-ki-strafverfolgung`

- Score 0.44, gemeinsame Quell-URLs: 1
- **Bleibt:** `brasilien-ki-strafverfolgung`
- **Begründung:** Beide behandeln Fehlfestnahmen durch polizeiliche Gesichtserkennung in Brasilien mit rassistischer Schieflage. Sie teilen die Quelle context.news und den Ausgangspunkt Karneval 2019. b ist der landesweite Dachfall: Rollout 2019 in Salvador und Rio, 151 Festnahmen, 90,5 % Schwarze, Timeline bis 2023. a ist ein Rio-Ausschnitt mit eigenem Einzelereignis (Frau im Jan. 2024 trotz verbüßter Strafe als Flüchtige verhaftet) und der CESeC-Bilanz 2019 bis 2025. Der Titel von a ('15 dokumentierte Fälle seit 2019') überlappt inhaltlich mit b, das Kernereignis aber nicht.
- **Übernehmen:** Beide behalten, nicht löschen. In b einen consequences-Eintrag mit der CESeC-Bilanz ergänzen (24 Fehlerfälle von 2019 bis April 2025, davon 15 in Rio), samt Quelle cesecseguranca.com.br. Den Titel von a auf das Einzelereignis vom Januar 2024 zuschneiden, damit er nicht als zweiter Sammelfall erscheint. Gegenseitigen Querverweis setzen.

### 20. `spanien-bosco-algorithmus-fuer-strom-sozialtarif-audiencia-nacional-verweigert-2024` + `spanien-ki-sozialhilfe-diskriminierung`

- Score 0.43, gemeinsame Quell-URLs: 1
- **Bleibt:** `spanien-ki-sozialhilfe-diskriminierung`
- **Begründung:** Beide Dateien behandeln denselben Gesamtfall BOSCO (Ablehnung Berechtigter beim bono social, Civio-Streit um den Quellcode, Urteil des Tribunal Supremo 09/2025). a stellt das Audiencia-Nacional-Urteil vom 30.04.2024 als Ereignis in den Mittelpunkt, erzählt in Beschreibung und TL aber die komplette Fallgeschichte bis zum Supremo-Urteil; b ist der Sammelfall ab 2017/2018. Das 2024-Urteil ist eine Etappe desselben Verfahrensstrangs, keine eigenständig dokumentierte Sache.
- **Übernehmen:** Aus a: drei zusätzliche Quellen (Civio 2024-05-08, tech-litigation.com zum Urteil vom 30.04.2024, Civio 2025-09-18 zum Supremo-Urteil), TL-Einträge 2024-04-30 (Audiencia Nacional verweigert erneut Offenlegung, Begründung Urheberrecht) und 2025-02-05 (Civio ruft Tribunal Supremo an), Akteur Audiencia Nacional/Tribunal Supremo als court. Datum des Supremo-Urteils abgleichen (b: 2025-09-11, a: 2025-09-18 = Civio-Artikel). In b zudem startDate 2018 vs. TL-Event 2019-05-16 prüfen.

### 21. `suedkorea-inha-universitaet-deepfake-telegram-raum-mit-1-200-mitgliedern-aufgeflogen` + `suedkorea-telegram-deepfake-welle-2024-ueber-230-chatrooms-an-schulen-und-universitaeten`

- Score 0.43, gemeinsame Quell-URLs: 1
- **Bleibt:** `suedkorea-telegram-deepfake-welle-2024-ueber-230-chatrooms-an-schulen-und-universitaeten`
- **Begründung:** a ist ein Einzelfall innerhalb der in b dokumentierten landesweiten Telegram-Deepfake-Welle vom August 2024; a beschreibt sich selbst als Auftakt der Enthüllung weiterer Räume, und beide teilen die Business-and-Human-Rights-Quelle sowie die Folge (Ermittlungen gegen Telegram, Gesetzesverschärfung). Der Inha-Fall hat aber eigene Betroffene, eigene Ermittlung (Polizei Incheon) und eigenes Datum, daher keine reine Dublette.
- **Übernehmen:** Aus a: TL-Eintrag 2024-08-19 (Aufdeckung des Inha-Raums mit ca. 1.200 Mitgliedern, mind. 30 betroffene Studentinnen, Weitergabe persönlicher Daten, Überstellung eines Weiterverbreiters im März 2024) und die beiden Korea-Herald-Quellen. Alternativ a als Einzelfall behalten, dann zwingend gegenseitiger Querverweis.

### 22. `ghana-chatgpt-botnetz-unterstuetzt-praesidentschaftskandidat-bawumia-2024` + `ghana-ki-wahlbeeinflussung`

- Score 0.42, gemeinsame Quell-URLs: 2
- **Bleibt:** `ghana-chatgpt-botnetz-unterstuetzt-praesidentschaftskandidat-bawumia-2024`
- **Begründung:** ghana-ki-wahlbeeinflussung ist ein Sammelfall zur KI-Desinformation rund um Ghanas Wahl 2024. Sein Event ist ein Deepfake-Audio von Bawumia im Dezember 2024. Er zitiert mit Rest of World und WITNESS dieselben Quellen wie die Botnetz-Datei, das Rest-of-World-Stück handelt genau von den Bot-Konten. Die Botnetz-Datei beschreibt mit dem NewsGuard-Fund von 171 ChatGPT-X-Konten (aktiv seit Februar 2024, aufgedeckt November 2024) ein klar abgegrenztes Teilereignis desselben Wahlkomplexes. Der Sammelfall ist zudem schwach: startDate 2020-10 passt nicht zum Ereignis 2024, ver 2, 404-Quellen laut docs/link-unfixable.md, der Akteur 'Ausländische Einflussoperationen' ist unbelegt. Außerdem überschneidet er sich stark mit ghana-ki-disinformation-wahlen-2024, das ebenfalls Sammelfall ist und den Bot-Fund ausdrücklich als 'eigener Eintrag' führt. Dieses Paar gehört nicht zu den geprüften und sollte separat abgeglichen werden.
- **Übernehmen:** Botnetz-Datei bleibt eigenständig, nichts zu übernehmen. Sie erhält asm:relatedIncidents auf den Ghana-Sammelfall.

Im Sammelfall ghana-ki-wahlbeeinflussung:
- Querverweis auf den Botnetz-Slug ergänzen.
- Das Botnetz nur als Verweis erwähnen.
- startDate auf 2024 korrigieren.

Außerdem prüfen, ob ghana-ki-wahlbeeinflussung ganz in ghana-ki-disinformation-wahlen-2024 aufgehen sollte. Die bestehenden Verweise darauf (rumaenien-wahlannullierung-tiktok, usa-biden-deepfake-robocall, ghana-ki-disinformation-wahlen-2024) dann umbiegen.

## Verschieden (72) – keine Dubletten, Kandidaten für die Fehlalarm-Liste

- `russland-gesichtserkennung-moskau` / `russland-moskauer-polizei-beim-verkauf-von-gesichtserkennungs-daten-ertappt-2019`: Gleiches System (Moskauer Gesichtserkennung, NtechLab), aber unterschiedliche Ereignisse. a betrifft die Identifizierung und Festnahme von Demonstrierenden (Naw …
- `usa-waymo-robotaxi-kollidiert-mit-radfahrerin-in-san-francisco-2024` / `usa-waymo-robotaxi-ueberfuhr-hund-in-san-francisco-2023`: Zwei eigenständige Waymo-Unfälle in San Francisco: a ist die Kollision mit einer Radfahrerin in Potrero Hill am 6. Februar 2024, b der tödliche Unfall mit einem …
- `uk-apple-intelligence-faelscht-bbc-headline-zu-luigi-mangione-hat-sich-selbst-erschossen` / `uk-apple-intelligence-verkuendet-luke-littlers-darts-wm-sieg-vor-dem-finale-2025`: Gleiches System (Apple Intelligence Benachrichtigungs-Zusammenfassung) und gleicher Geschädigter (BBC), aber zwei verschiedene Falschmeldungen zu verschiedenen  …
- `usa-character-ai-chatbots-foerdern-essstoerungen-bei-jugendlichen-2024` / `usa-character-ai-hostet-suizid-und-paedophilen-chatbots-2024`: Gleiche Plattform (Character.AI/Google), aber unterschiedliche Schadensereignisse: a betrifft Pro-Anorexie-/Diät-Coach-Bots, b die Texas-Klage vom 10.12.2024 (C …
- `palaestina-habsora-gospel-ki-system-markiert-gebaeude-in-gaza-als-bombenziele-2023` / `palaestina-israel-gaza-wheres-daddy-ki-system-verfolgt-zielpersonen-bis-nach-hause-um`: Gleicher Akteur (IDF/Unit 8200) und Konflikt, aber unterschiedliche KI-Systeme und Enthüllungen: Habsora/Gospel klassifiziert Gebäude als Ziele (Gaza-Krieg ab O …
- `usa-anthropics-claude-agent-ruiniert-wsj-verkaufsautomaten-project-vend-phase-2-2025` / `usa-anthropics-vending-agent-claudius-verliert-geld-und-entwickelt-identitaetskrise-2025`: Zwei getrennte Experimente: b = Project Vend Phase 1 (Juni 2025, Anthropic-Büro San Francisco, Andon Labs, Tungsten-Würfel, Identitätskrise), a = Phase 2 (Dezem …
- `palaestina-israel-westjordanland-gesichtserkennung-blue-wolf-ueberwacht-palaestinenser-in` / `palaestina-israel-westjordanland-red-wolf-gesichtserkennung-an-checkpoints-scannt`: Unterschiedliche Systeme und Enthüllungen: a = Blue-Wolf-Smartphone-App, aufgedeckt durch Washington Post 2021-11; b = Red-Wolf-Checkpoint-Gesichtserkennung, do …
- `usa-alonzo-sawyer-durch-fehlerhafte-gesichtserkennung-zu-unrecht-inhaftiert-2022` / `usa-christopher-gatlin-nach-fehlerhaftem-gesichtserkennungs-treffer-17-monate-inhaftiert`: Zwei verschiedene Falschverhaftungen nach Gesichtserkennung: Alonzo Sawyer (Maryland, 2022, neun Tage Haft) vs. Christopher Gatlin (St. Louis, 2021, 17 Monate H …
- `uk-oxforder-vgg-face-dataset-nutzte-internetbilder-ohne-einwilligung-2019` / `usa-megaface-dataset-der-university-of-washington-nutzte-flickr-bilder-ohne-einwilligung`: Die Dateien betreffen zwei verschiedene Datensätze von verschiedenen Institutionen: VGG-Face der University of Oxford mit IMDb- und Google-Bildern und MegaFace  …
- `usa-porcha-woodruff-v-detroit-fehl-festnahme-einer-hochschwangeren-durch` / `usa-robert-williams-detroit-erste-oeffentlich-bekannte-falsch-verhaftung-durch`: Es sind zwei verschiedene Betroffene, Festnahmen und Verfahren: Robert Williams wurde im Januar 2020 festgenommen (Shinola-Diebstahl, ACLU-Klage, Vergleich 2024 …
- `israel-gaza-idf-nutzt-ki-system-lavender-zur-erstellung-von-37-000-zielen-2023` / `palaestina-habsora-gospel-ki-system-markiert-gebaeude-in-gaza-als-bombenziele-2023`: Die Dateien betreffen zwei verschiedene KI-Systeme mit verschiedenen Enthüllungen: Lavender markiert Personen (+972 und Guardian, April 2024), Habsora/Gospel ma …
- `usa-tesla-model-3-faehrt-auf-harley-davidson-auf-fahrer-getoetet-utah-2022` / `usa-tesla-model-y-faehrt-unter-sattelzug-fahrer-in-virginia-getoetet-autopilot-aktiv-2023`: Zwei getrennte tödliche Tesla-Autopilot-Unfälle: Model 3 auf Harley-Davidson, I-15 Draper/Utah, 24.07.2022 (Opfer Landon Embry) vs. Model Y unter Sattelzug, US- …
- `usa-tesla-model-y-faehrt-auf-yamaha-motorrad-auf-fahrer-getoetet-riverside-2022` / `usa-tesla-model-y-faehrt-unter-sattelzug-fahrer-in-virginia-getoetet-autopilot-aktiv-2023`: Zwei getrennte tödliche Tesla-Unfälle: Model Y auf Yamaha-Motorrad, SR-91 Riverside/Kalifornien, 07.07.2022 vs. Model Y unter Sattelzug, US-29 Opal/Virginia, 19 …
- `usa-waymo-robotaxi-kollidiert-mit-radfahrerin-in-san-francisco-2024` / `usa-waymo-robotaxi-toetet-beliebte-san-francisco-bodega-katze-kitkat-2025`: Zwei unterschiedliche Waymo-Vorfälle in San Francisco: Kollision mit Radfahrerin in Potrero Hill am 06.02.2024 vs. Tötung der Bodega-Katze KitKat im Mission Dis …
- `china-huawei-patent-zur-automatischen-uiguren-erkennung-loest-empoerung-aus-2021` / `china-huawei-testete-mit-megvii-uiguren-alarm-per-gesichtserkennung-2020`: Zwei getrennte Enthüllungen: b ist das von IPVM/Washington Post am 08.12.2020 veröffentlichte Huawei-Megvii-Interoperabilitätsdokument mit 'Uiguren-Alarm'; a is …
- `china-immobilienkunden-in-nanning-per-gesichtserkennung-um-eigentum-betrogen-2020` / `china-nanjing-untersagt-gesichtserkennung-in-immobilienbueros-nach-beschwerden-2020`: Unterschiedliche Ereignisse in verschiedenen Städten: a ist ein Betrugsfall in Nanning (Guangxi), bei dem ein Vermittler mit erfassten Gesichtsdaten rund ein Du …
- `global-co2-emissionen-durch-ki-in-fuenf-jahren-um-48-prozent-gestiegen-2024` / `global-co2-emissionen-steigen-durch-ki-ausbau-um-rund-30-prozent-2024`: Verschiedene Unternehmen und Berichte: A ist Googles Umweltbericht 2024 (2024-07, plus 48 Prozent in fünf Jahren, Netto-Null-Ziel 2030), B ist Microsofts Nachha …
- `usa-googles-hate-speech-erkennung-perspective-api-stuft-african-american-english` / `usa-googles-perspective-api-wertet-hoeflichkeit-hoeher-als-inhaltliche-schaedlichkeit-2017`: Gleiches System (Jigsaw Perspective API), aber verschiedene Ereignisse und Befunde. A ist die AAVE-Verzerrung, nachgewiesen 2019 durch die ACL-Studie von Sap et …
- `usa-porcha-woodruff-v-detroit-fehl-festnahme-einer-hochschwangeren-durch` / `usa-randal-quran-reid-fehl-festnahme-durch-gesichtserkennung-in-louisiana-sechs-tage-in`: Verschiedene Betroffene, Behörden, Orte und Daten. A: Porcha Woodruff, Detroit Police, Festnahme am 2023-02-16. B: Randal Quran Reid, Jefferson Parish Sheriff's …
- `israel-gaza-idf-nutzt-ki-system-lavender-zur-erstellung-von-37-000-zielen-2023` / `palaestina-israel-gaza-wheres-daddy-ki-system-verfolgt-zielpersonen-bis-nach-hause-um`: Beide gehen auf dieselbe +972/Local-Call-Recherche vom April 2024 zurück (gemeinsame URL), dokumentieren aber unterschiedliche KI-Systeme mit unterschiedlichem  …
- `italien-datenschutzbehoerde-garante-leitet-untersuchung-zu-openais-sora-ein-2024` / `italien-datenschutzbehoerde-sperrt-chatgpt-wegen-dsgvo-verstoessen-2023`: Es handelt sich um zwei getrennte Verfahren des Garante gegen OpenAI. Das eine ist die ChatGPT-Sperre vom 30.03.2023 (Verarbeitungsstopp, Rückkehr am 28.04.2023 …
- `usa-amazons-halo-band-als-hochgradig-invasiv-kritisiert-2020` / `usa-amazons-heimroboter-astro-als-datenschutz-albtraum-kritisiert-2021`: Zwei verschiedene Amazon-Produkte mit getrennter Kritik. Beim Halo-Band (08/12.2020) ging es um Tonfall- und Körperfettanalyse, die WaPo-Rezension und den Brief …
- `usa-facebooks-algorithmus-empfahl-aktiv-holocaust-leugnung-2020` / `usa-facebooks-algorithmus-verbreitete-covid-19-gesundheitsdesinformation-2020`: Zwei verschiedene NGO-Berichte über verschiedene Inhalte. Der ISD-Bericht (08/2020) zeigt, dass Facebook Holocaust-Leugnung empfahl, was zum Verbot vom 12.10.20 …
- `usa-ford-mustang-mach-e-mit-bluecruise-prallt-in-texas-auf-honda-ein-toter-2024` / `usa-ford-mustang-mach-e-mit-bluecruise-toetet-zwei-menschen-in-philadelphia-2024`: Zwei getrennte tödliche BlueCruise-Unfälle mit unterschiedlichen NTSB-Akten. Der eine geschah am 24.02.2024 in San Antonio auf der I-10 mit einem Toten (HWY24FH …
- `usa-lgbtq-youtuber-innen-verklagen-youtube-und-google-wegen-algorithmischer` / `usa-schwarze-youtube-creator-klagen-wegen-algorithmischer-diskriminierung-2020`: Zwei eigenständige Klagen mit unterschiedlichen Klägern. Die eine ist Divino Group u. a. (LGBTQ+-Creator:innen), eingereicht am 13.08.2019, abgewiesen 2021 und  …
- `dominikanische-republik-gesichtserkennungs-pilot-an-der-haiti` / `dominikanische-republik-massendeportation-von-haitianer-innen-mit`: Thematisch eng verbunden (DGM, Abschiebung von Haitianer:innen, gemeinsame CHRGJ-Quelle), aber es sind verschiedene Ereignisse. a ist der Start des Dermalog-Ges …
- `norwegen-tesla-auf-autopilot-toetete-am-strassenrand-stehenden-lkw-fahrer-2020` / `usa-tesla-auf-autopilot-fuhr-in-geparktes-feuerwehrauto-und-toetete-den-fahrer-2023`: Zwei verschiedene tödliche Autopilot-Unfälle: Norwegen 2020 (Lkw-Fahrer am Straßenrand getötet, Tesla-Fahrer zu 3 Monaten Haft verurteilt) vs. Walnut Creek/Kali …
- `usa-mutter-aus-colorado-verklagt-openai-nach-suizid-ihres-sohnes-austin-gordon-2025` / `usa-toetung-der-mutter-und-suizid-nach-chatgpt-beziehung-klage-gegen-openai-2025`: Zwei verschiedene ChatGPT-Todesfälle mit getrennten Klagen: Austin Gordon (Suizid, Colorado, 02.11.2025, Klage von Stephanie Gray 2026-01) vs. Stein-Erik Soelbe …
- `italien-chatgpt-verbot` / `italien-datenschutzbehoerde-garante-leitet-untersuchung-zu-openais-sora-ein-2024`: Verschiedene Verfahren der Garante gegen OpenAI: vorübergehende ChatGPT-Sperre vom 30./31.03.2023 (mit Aufhebung am 28.04.2023) vs. Untersuchung zum Videomodell …
- `usa-facebook-erlaubt-finanzfirmen-alters-targeting-bei-kreditanzeigen-2021` / `usa-facebook-erlaubt-targeting-von-78-millionen-an-pseudowissenschaft-interessierten-2020`: Zwei verschiedene Recherchen von The Markup zu Facebook-Werbetargeting: Alters-Targeting bei Kredit- und Finanzanzeigen (29.04.2021, mögliche ECOA-Verstöße) vs. …
- `usa-17-jaehriger-amaurie-lacey-stirbt-nach-anleitung-zum-erhaengen-durch-chatgpt-2025` / `usa-joe-ceccanti-stirbt-nach-exzessivem-chatgpt-konsum-durch-sprung-von-eisenbahnbruecke`: Zwei verschiedene Todesfälle mit anderen Betroffenen, anderem Ort und anderem Datum: Amaurie Lacey (17, Georgia, 1. Juni 2025, Erhängen) und Joe Ceccanti (48, O …
- `usa-17-jaehriger-amaurie-lacey-stirbt-nach-anleitung-zum-erhaengen-durch-chatgpt-2025` / `usa-texas-a-und-m-absolvent-zane-shamblin-stirbt-nach-vierstuendigem-chatgpt-todeschat`: Verschiedene Betroffene und Ereignisse: Amaurie Lacey (17, Georgia, 1. Juni 2025) und Zane Shamblin (23, Texas, 24./25. Juli 2025, Schusswaffe). Beide Familien  …
- `usa-adobe-in-der-kritik-wegen-training-von-firefly-ki-mit-kundeninhalten-2023` / `usa-adobe-wegen-ki-training-mit-kundeninhalten-via-creative-cloud-klausel-kritisiert-2023`: Zwei verschiedene Kontroversen. a: Stock-Beitragende kritisieren ab Juni 2023, dass Firefly mit ihren Adobe-Stock-Werken trainiert wurde; Folge war der Firefly- …
- `usa-alonzo-sawyer-durch-fehlerhafte-gesichtserkennung-zu-unrecht-inhaftiert-2022` / `usa-randal-reid-durch-clearview-ai-gesichtserkennung-zu-unrecht-inhaftiert-2022`: Zwei verschiedene Fehlverhaftungen durch Gesichtserkennung. Alonzo Sawyer: Maryland, März 2022, neun Tage Haft. Randal Reid: Georgia und Louisiana, November 202 …
- `usa-authors-guild-und-17-autor-innen-verklagen-openai-wegen-urheberrechts-2023` / `usa-autoren-awad-und-tremblay-verklagen-openai-wegen-urheberrechtsverletzung-2023`: Zwei eigenständige Klagen mit anderen Klägern, Gerichten und Daten. Authors Guild und 17 Autor:innen: S.D.N.Y., 19. September 2023. Tremblay und Awad: N.D. Cal. …
- `usa-google-autocomplete-blendet-trump-attentat-aus-suchvorschlaegen-aus-2024` / `usa-meta-ki-behauptet-faelschlich-trump-attentat-habe-nicht-stattgefunden-2024`: Gleicher Anlass (Trump-Attentat vom 13. Juli 2024), aber verschiedene Unternehmen, Systeme und Fehler: Google Autocomplete unterdrückt Suchvorschläge mit veralt …
- `usa-joe-ceccanti-stirbt-nach-exzessivem-chatgpt-konsum-durch-sprung-von-eisenbahnbruecke` / `usa-texas-a-und-m-absolvent-zane-shamblin-stirbt-nach-vierstuendigem-chatgpt-todeschat`: Zwei verschiedene Todesfälle: Joe Ceccanti (48, Oregon, 7. August 2025, Sprung von einer Eisenbahnüberführung) und Zane Shamblin (23, Texas, 24./25. Juli 2025,  …
- `kanada-deepfake-nacktbilder-von-schuelerinnen-einer-winnipeger-schule-2023` / `kanada-schueler-der-st-thomas-aquinas-schule-in-london-ontario-verbreiteten-ki`: Es sind zwei getrennte Schulvorfälle mit KI-Nacktbildern: a am College Beliveau in Winnipeg, Manitoba, Dez. 2023, mit der Folge, dass Manitoba sein Intimbild-Ge …
- `usa-chatgpt-erzeugt-ueberzeugende-phishing-mails-und-schadcode-2023` / `usa-studie-zeigt-dass-google-bard-phishing-mails-und-schadcode-generiert-2023`: Unterschiedliche KI-Systeme und unterschiedliche Untersuchungen: a betrifft OpenAIs ChatGPT im Jan./Feb. 2023 (Check Point und Abnormal Security, Darknet-Foren) …
- `usa-global-google-sge-empfiehlt-urin-trinken-gegen-nierensteine-2024` / `usa-googles-ki-suche-sge-empfiehlt-malware-und-betrugsseiten-2024`: Beide betreffen Googles KI-Suche, aber unterschiedliche Fehlleistungen zu unterschiedlichen Zeitpunkten: a ist die gefährliche Gesundheitsempfehlung (Urin trink …
- `usa-ki-generierte-fake-bewertungen-ueberschwemmen-amazon-2023` / `usa-ki-generierte-schund-buecher-und-listings-ueberschwemmen-amazon-2024`: Gleiche Plattform, aber verschiedene Phänomene und Zeitpunkte: a sind ChatGPT-generierte Fake-Produktbewertungen (CNBC, Apr. 2023), b sind KI-generierte Schein- …
- `usa-tesla-cybertruck-auf-full-self-driving-v13-rast-in-laternenmast-2025` / `usa-tesla-cybertruck-lenkt-mit-full-self-driving-in-gegenverkehr-2025`: Zwei verschiedene Cybertruck-Vorfälle: a ist der Unfall von Jonathan Challinger in Reno am 06.02.2025 mit FSD v13.2.4 (Laternenmast, Totalschaden). b ist ein Da …
- `usa-tesla-ruft-fsd-assertive-modus-wegen-rollender-stopps-zurueck-2022` / `usa-tesla-ruft-rund-11-700-autos-wegen-fsd-beta-bremsfehler-zurueck-2021`: Zwei getrennte NHTSA-Rückrufe der FSD-Beta: b vom Okt./Nov. 2021, rund 11.704 Fahrzeuge wegen Phantombremsungen nach dem Update 10.3; a vom Feb. 2022, rund 54.0 …
- `australien-fotos-australischer-kinder-im-laion-5b-datensatz-ohne-zustimmung-fuer-ki` / `brasilien-laion-5b-datensatz-enthaelt-identifizierbare-fotos-brasilianischer-kinder-fuer`: Zwei eigenständige HRW-Berichte zu verschiedenen Ländern und Betroffenengruppen: zu Brasilien am 10.06.2024 (über 170 Kinder aus zehn Bundesstaaten), zu Austral …
- `indien-deepfake-videos-von-mukesh-ambani-sachin-tendulkar-und-virat-kohli-treiben` / `malaysia-deepfake-videos-von-pm-anwar-ibrahim-treiben-investment-scam-welle-2024`: Gleiches Betrugsmuster (Promi-Deepfakes für Investment-Scams), aber verschiedene Länder, missbrauchte Personen, Täter-Cluster, Behörden und Schäden: in Indien A …
- `portugal-cnpd-suspendiert-worldcoin-iris-scan-operation-fuer-90-tage-wegen-datenerfassung` / `spanien-aepd-verhaengt-sofortmassnahme-gegen-worldcoin-iris-scan-stopp-wegen`: Zwei getrennte Verfahren nationaler Datenschutzbehörden gegen dasselbe Unternehmen: die spanische AEPD am 06.03.2024 (Sofortmaßnahme, Eilantrag von Worldcoin am …
- `global-meta-erstellt-flirtende-ki-chatbots-von-taylor-swift-und-anderen-promis-ohne` / `global-meta-hostet-ki-chatbots-die-hitler-jesus-christus-und-taylor-swift-imitieren-2025`: Zwei verschiedene Recherchen zu Meta AI Studio: A ist die Reuters-Recherche vom August 2025. Dort geht es um flirtende Promi-Bots (Swift, Johansson, Hathaway, G …
- `uk-facial-recognition-south-wales` / `uk-vereinigtes-koenigreich-met-police-und-south-wales-police-setzen-live-facial`: A dokumentiert den Live-Gesichtserkennungseinsatz der South Wales Police ab 2017: 91 % Falschpositive laut Big Brother Watch 2018, das Bridges-Urteil des Court  …
- `usa-christopher-gatlin-nach-fehlerhaftem-gesichtserkennungs-treffer-17-monate-inhaftiert` / `usa-robert-dillon-nach-idemia-gesichtserkennungs-treffer-93-faelschlich-in-florida`: Zwei verschiedene Falschfestnahmen nach Gesichtserkennung mit anderen Betroffenen, Orten, Behörden und Zeitpunkten: Christopher Gatlin in St. Louis, Missouri (2 …
- `usa-googles-hautarzt-app-dermassist-wegen-bias-bei-dunkler-haut-kritisiert-2021` / `usa-googles-vision-cloud-ki-labelte-dunkle-haut-mit-thermometer-als-waffe-2020`: Zwei verschiedene Google-Produkte und Vorfälle mit Hautfarben-Bias: A betrifft die Dermatologie-App DermAssist und den unausgewogenen Trainingsdatensatz (Mai 20 …
- `usa-microsoft-openai-rechenzentrum-verbraucht-beim-gpt-4-training-riesige-wassermengen` / `usa-zwei-journalisten-verklagen-microsoft-und-openai-wegen-chatgpt-trainingsdaten-2024`: Die Akteure sind dieselben (Microsoft, OpenAI), aber Thema und Ereignis sind völlig verschieden. A behandelt den Wasserverbrauch des Rechenzentrums in Iowa beim …
- `usa-tesla-faehrt-mit-150-km-h-auf-kawasaki-auf-fahrerin-getoetet-boca-raton-2022` / `usa-tesla-model-y-faehrt-auf-yamaha-motorrad-auf-fahrer-getoetet-riverside-2022`: Zwei verschiedene tödliche Auffahrunfälle eines Teslas auf ein Motorrad aus derselben Serie im Sommer 2022: Boca Raton, Florida (26.08.2022, Model 3, Kawasaki,  …
- `usa-tesla-model-3-faehrt-auf-harley-davidson-auf-fahrer-getoetet-utah-2022` / `usa-tesla-rast-in-geparktes-feuerwehrfahrzeug-fahrer-getoetet-walnut-creek-2023`: Zwei verschiedene Tesla-Unfälle: A ist der Auffahrunfall auf eine Harley-Davidson auf der I-15 bei Draper, Utah (24.07.2022, Opfer Landon Embry). B ist die Koll …
- `usa-tesla-rammte-geparktes-polizeiauto-bei-lansing-michigan-2021` / `usa-tesla-unter-autopilot-kracht-in-streifenwagen-fahrer-schaute-film-2020`: Zwei verschiedene Kollisionen eines Teslas mit einem stehenden Polizeifahrzeug: Eaton County bei Lansing, Michigan (17.03.2021, Model Y, Autopilot laut Polizei  …
- `tadschikistan-huawei-safe-city-in-duschanbe-erhaelt-gesichtserkennungs-upgrade-25-prozent` / `usbekistan-300-millionen-dollar-ausbau-des-huawei-safe-city-programms-ruestet-taschkent`: Verschiedene Länder, Städte, Regierungen und Zeitpunkte: A ist das Gesichtserkennungs-Upgrade der Safe City Duschanbe in Tadschikistan (Juni 2019, Schwellwert 2 …
- `usa-tesla-faehrt-mit-150-km-h-auf-kawasaki-auf-fahrerin-getoetet-boca-raton-2022` / `usa-tesla-model-3-faehrt-auf-harley-davidson-auf-fahrer-getoetet-utah-2022`: Zwei verschiedene tödliche Tesla-Motorrad-Auffahrunfälle: Boca Raton/Florida am 26.08.2022 (Opfer Ingrid Noon, Fahrer Richard Dorfman, Verurteilung 2025) vs. Dr …
- `usa-tesla-mit-aktivem-fsd-rast-in-motorrad-auf-fahrer-tot-nhtsa-untersuchung-2024` / `usa-tesla-model-y-faehrt-auf-yamaha-motorrad-auf-fahrer-getoetet-riverside-2022`: Verschiedene Unfälle: FSD-Unfall auf der SR 522 bei Maltby/Washington am 19.04.2024 (Model S, NHTSA PE24031) vs. Autopilot-Verdacht auf der SR-91 bei Riverside/ …
- `usa-tesla-mit-angeblich-aktiviertem-autopilot-rammt-geparktes-polizeiauto-orlando-2021` / `usa-tesla-rammte-geparktes-polizeiauto-bei-lansing-michigan-2021`: Zwei eigenständige Kollisionen mit Streifenwagen: Orlando/Florida, I-4, 28.08.2021 (Model 3, Florida Highway Patrol) vs. Eaton County bei Lansing/Michigan, 17.0 …
- `usa-tiktok-nutzt-stimme-von-bev-standing-ohne-einwilligung-fuer-text-to-speech-2021` / `usa-tiktok-verschoenert-nutzergesichter-ohne-einwilligung-2021`: Gleicher Konzern und Monat, aber völlig andere Vorfälle: Klage der Sprecherin Bev Standing wegen unerlaubter Nutzung ihrer Stimme für Text-to-Speech vs. ungefra …
- `australien-7-eleven-verletzte-mit-feedback-tablets-privatsphaere-von-1-6-mio-kunden-2020` / `australien-kmart-verletzte-mit-gesichtserkennung-den-datenschutz-von-kund-innen-2020`: Zwei getrennte OAIC-Verfahren gegen verschiedene Handelsketten: 7-Eleven (Feedback-Tablets mit Faceprints in ca. 700 Filialen, Entscheidung 2021-09) vs. Kmart ( …
- `china-unitree-h1-humanoidroboter-dreht-bei-werkstest-durch-und-fuchtelt-nahe-mitarbeitern` / `china-unitree-h1-humanoidroboter-geht-beim-fruehlingsfest-in-tianjin-auf-zuschauer-innen`: Gleiches Robotermodell (Unitree H1), aber zwei getrennte Vorfälle: Fehlfunktion am Hebekran in einer Testanlage am 01.05.2025 (Mitarbeiter:innen) vs. Vorfall be …
- `russland-kuenstler-deanonymisierte-u-bahn-fahrgaeste-in-st-petersburg-per-findface-2016` / `russland-sexarbeiterinnen-und-pornodarstellerinnen-via-gesichtserkennungs-app-findface`: Zwei verknüpfte, aber eigenständige Vorfälle: Kunstprojekt 'Your Face Is Big Data' von Egor Tsvetkov (U-Bahn-Fahrgäste, St. Petersburg, ab 04.04.2016) vs. gezie …
- `uk-gtg-5004-ki-gestuetzte-ransomware-as-a-service-ueber-claude-2025` / `usa-vibe-hacking-ki-automatisierte-erpressung-von-17-organisationen-mit-claude-code-2025`: Beide stammen aus demselben Anthropic-Threat-Intelligence-Report (August 2025), daher die gemeinsamen URLs. Es sind aber zwei getrennte Fälle mit anderen Tätern …
- `usa-amazons-buy-for-me-ki-agent-listet-produkte-ohne-haendler-einverstaendnis-2026` / `usa-bundesgericht-stoppt-perplexitys-comet-agenten-beim-amazon-shopping-2025`: Das sind zwei verschiedene Vorgänge, die Rollen sind vertauscht. Im ersten Fall listet Amazons eigener Agent 'Buy for Me' im Januar 2026 Produkte von Drittanbie …
- `usa-chatgpt-gibt-waehler-innen-in-swing-states-falsche-wahlinformationen-2024` / `usa-chatgpt-scheitert-beim-entlarven-von-wahl-desinformation-2024`: Das sind zwei verschiedene Tests mit unterschiedlicher Fragestellung. CBS News prüfte praktische Fragen zur Stimmabgabe in vier Swing-States (Briefwahl-Fristen, …
- `usa-cruise-robotaxis-behindern-san-franciscos-feuerwehr-und-rettungsdienste-2023` / `usa-cruise-roboterautos-blockieren-kreuzung-in-san-francisco-fuer-zwei-stunden-2022`: Zwei verschiedene Cruise-Vorfälle in San Francisco. Im ersten kollidiert im August 2023 ein Robotaxi mit einem Feuerwehrfahrzeug, dazu kommen Behinderungen von  …
- `usa-duke-university-zieht-mtmc-surveillance-dataset-nach-privacy-skandal-zurueck-2019` / `usa-microsoft-loescht-ms-celeb-1m-gesichtserkennungs-datenbank-nach-privacy-skandal-2019`: Beide Rückzüge folgten derselben FT-Recherche im Juni 2019, und der Fast-Company-Sammelartikel wird in beiden Dateien zitiert. Es geht aber um verschiedene Date …
- `usa-global-usa-warner-music-droht-ki-firmen-wegen-unlizensiertem-training-2024` / `usa-sony-music-warnt-ueber-700-ki-firmen-vor-unautorisiertem-training-2024`: Zwei eigenständige Warnschreiben verschiedener Labels: Sony Music schrieb im Mai 2024 (16.05.) an über 700 KI-Firmen, Warner Music im Juli 2024. Die Warner-Date …
- `usa-google-bildersuche-zeigt-fuer-three-black-teenagers-ueberwiegend-polizeifotos-2016` / `usa-google-suche-zeigt-stormfront-holocaustleugnung-als-top-treffer-2016`: Zwei verschiedene Google-Suchvorfälle aus dem Jahr 2016. Im ersten zeigt die Bildersuche am 06.06.2016 für 'three black teenagers' Polizeifotos (rassistischer B …
- `usa-ki-generierte-fake-bewertungen-ueberschwemmen-amazon-2023` / `usa-ki-generierte-reisefuehrer-mit-erfundenen-autoren-und-fake-rezensionen-ueberfluten`: Verschiedene Phänomene und Recherchen. Der erste Fall betrifft ChatGPT-generierte Produktbewertungen auf Amazon (CNBC, April 2023). Der zweite betrifft KI-gener …
- `usa-tesla-model-y-faehrt-unter-sattelzug-fahrer-in-virginia-getoetet-autopilot-aktiv-2023` / `usa-tesla-rast-in-geparktes-feuerwehrfahrzeug-fahrer-getoetet-walnut-creek-2023`: Zwei verschiedene tödliche Tesla-Unfälle. Am 19.07.2023 fährt bei Opal (Virginia) ein Tesla unter einen querenden Sattelzug, der Autopilot war bestätigt aktiv,  …
- `usa-tesla-rammt-im-smart-summon-modus-geparkten-privatjet-2022` / `usa-tesla-rammte-geparktes-polizeiauto-bei-lansing-michigan-2021`: Zwei verschiedene Tesla-Vorfälle. Im April 2022 rammt ein Tesla im Modus 'Smart Summon' fahrerlos einen Cirrus-Jet am Felts Field (Spokane). Am 17.03.2021 fährt …
