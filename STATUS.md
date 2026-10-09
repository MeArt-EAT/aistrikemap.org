# 📍 AIStrikeMap — AKTUELLER STAND

> **Diese Datei zuerst lesen.** Sie zeigt immer den aktuellen Projektstand.
> Bei jeder Session aktualisieren. Details in `docs/planung/übergabe-*.md`.

---

## ⏱️ STAND: 2026-10-09

| | |
|---|---|
| 📊 **Bestand** | **2452 Incidents** (5 Dubletten zusammengelegt; 2 zurückgezogen: `tschechien-ki-sozialhilfe-scoring`, `nordkorea-digitalisierte-ueberwachung-des-inminban-systems-entdeckt-2024-ganze`) · **2452 mit Reverse-TL (100.0 %)** ✅ · **Validator 2428/2452 ohne ERROR - 24 Files verletzen nach dem Merge die Phasen-Pflicht von Schema v1.1 (Nacharbeit vorbereitet, ungeprüft)** · **37 TL-Einträge ohne Quelle, alle aus der main-Fassung (35 offen, 2 im zurückgezogenen Tschechien-Fall) · **Link-Check: 404 von 213 auf 47** (243 tote URLs ersetzt)** · **0 kaputte relatedIncidents-Verweise** ✅ · **0 Audit-Findings** · Anzeigetext korpusweit ä/ö/ü/ß (Translit-Map **2954** Mappings) · **Satzzeichen korpusweit ASCII** (0 Smart-Chars) · **2324 Kartenmarker** (alle außer 128 GLOBAL-Fällen) ✅ |
| 🔢 **Übergabe-Nr** | **#14** (2026-10-09, main: Sichtung needs-review) · zuvor **#13** in zwei Linien, zusammengeführt mit PR #93 (Branch-Nachtrag 7c: Link-Check, tote Links, Merge mit Schema v1.1) |
| 🚩 **Phase** | 1 — Datenausbau (Items 1–93) |
| ✅ **Zuletzt fertig** | **(2026-10-09, Übergabe #14)** **Sichtung der needs-review-Kandidaten gestartet: 120 von 239 gesichtet (3 Wellen, Review + adversariale Gegenprüfung, WebSearch durchgehend) → 50 verified (promotionsreif, NICHT promotet), 24 Dubletten, 42 abgelehnt, 4 offen.** Abbruch bei 96 % Wochenlimit (Welle 4 gestoppt). Fund: Promote dedupliziert nur per Slug → 13 alte „verified" wären Dubletten geworden; `pre-promote-check.js` Pflicht. Pipeline-Skripte in `scripts/workflows/` gesichert. Parallel-Session: i18n-Check + `scripts/audit-i18n.js` (Push wartet auf OK). — **(2026-10-09, Übergabe #13 Teil 2)** **Timeline-Korrektur ABGESCHLOSSEN: 111/111 Files in 6 Wellen + 2 Re-Verify-Durchgänge, Vollscan 2457/2457 ohne ERROR, Phasen-Pflicht (alle 4 Phasen) im Validator auf ERROR gehoben.** Nebenfixes aus Agenten-Befunden: ShotSpotter-Beschreibung (AP 2021 statt 2023), Marokko-Pegasus-Name (Präsident statt König), 2 Translit-Reste (Map 2954). Frontend für Wellen 1 + 6 im Browser geprüft (DE/EN). — **(2026-10-08, Übergabe #13 Teil 1)** **Schema v1.1 (Phasen-Modell) entschieden + umgesetzt, 72 Timelines korrigiert.** Validator: Vorgeschichte frei sortierbar, mehrere event-Stufen erlaubt, Verschränkung = ERROR, Vorgeschichte-Pflicht, `--all`-Schalter. Neuer Befund: 68 verschränkte alte Timelines (Reaktion als doctrine getaggt). 3 Korrekturwellen (Fix mit WebSearch-Pflicht → adversariale Verify): 72/72 ohne ERROR, Audit 0, Frontend DE/EN geprüft. **Lektion: 200-WebSearch-Turn-Budget** → ein Workflow pro Turn, Wellen ≤16. 2 needs-human auf Incident-Ebene (tschechien-sozialhilfe-scoring: Faktenbasis nicht belegbar; usa-rekognition-ice: Haupttext nicht belegt). Details: Übergabe #13. — **(2026-08-07, Übergabe #12)** **Korpusweiter Smart-Char-Sweep + Atom-Feed-Fix.** 743 Files auf ASCII-Satzzeichen normalisiert (7776 Ersetzungen: 6818 ` — `, 531 ` – `, 204 Bis-Striche, 146 typografische Quotes, 55 **unsichtbare Soft-Hyphens U+00AD**, 7 kaputte ` —,`, 6 Ellipsen). Neues Tooling `scripts/normalize-smart-chars.js` (idempotent, `--dry-run`, Text-Level statt parse/stringify → minimaler Diff, JSON-Parse-Gate vor UND nach der Ersetzung). Verifikation: 743/743 Files mit identischem Textkern gegen HEAD, **0 Datumsfelder verändert**, Audit 0, Validator 0 Smart-Char-Fehler, Frontend live geprüft (2457 geladen, Detail-Panel + Permalink OK). **Entscheidung: i18n/*.json + *.html behalten den Em-Dash** (handgesetzter Hausstil „Stufe 1 — Gemeldet", vom Validator nicht erfasst). **Bonus-Fund: Atom-Feed war seit der Bilingual-Migration inhaltsleer** (`<title> [ESKALIEREND]</title>`, `undefined — undefined`, ungültiges RFC3339) — `generate-feed.js` las noch `s.name`/`newest.title` statt `*_de`; behoben. Stale Worktrees entfernt (6,9 MB → 4 KB). — **(2026-06-26, Übergabe #11)** **Reverse-TL-Feature KOMPLETT — 2457/2457 = 100.0 %.** 22 TL-Wellen 46–67 (+519, Sev-2-Block 46–65 +472, Sev-1 66–67 +47; Sev-5..1 alle abgearbeitet) + **alle 10 needs-human-Fälle geklärt** (Recherche-Workflow: prabowo→Anies Baswedan, ultraman→Hangzhou/Acgnai, devternity→Lettland, perspective-api→Univ. of Washington/USA, grok/hmrc/bradford/iphone/lieferdrohne/tesla-burger-king korrigiert; 10/10 adversarial verifiziert). Workflow-Methode (24 Cases/Welle, Gen→adversariale Verify), WebSearch durchgehend, 0 Stalls. **Neues Tooling: `scripts/validate-timelines.js`** (Pre-Commit-Validator). Slug/@id bei Korrekturen unverändert (Permalink; correctionNote in metadata wo Slug inhaltlich abweicht). Audit durchgehend 0. — **(2026-10-09, Übergabe #13, Nachtrag 7c)** **Link-Check repariert** (ein Issue #230 statt 228 Duplikaten, Statuscodes lesbar, verwertbare zuerst) und **243 tote Quellen-URLs in 211 Incidents ersetzt** (18 Gruppen, je Bearbeiter + unabhängiger Prüfer; 404 im nächsten Lauf 213 -> 47; Rest v. a. Suchindex-Treffer, die für den Checker trotzdem 404 liefern). Danach: **main (Schema v1.1 + 3 Redaktionsentscheidungen) in PR #93 zusammengeführt.** Beide Linien hatten dieselben rund 110 Timelines unabhängig nach einer Phasen-Regel umgebaut (81 Dateikonflikte). Auflösung je Datei: Redaktionsentscheidungen von main haben Vorrang (Tschechien komplett, Kasachstan Titel/Text/Akteure); Timeline aus main, wenn dort jeder Eintrag belegt ist (56), sonst aus dem Branch, wenn sie Schema v1.1 erfüllt (7), sonst main-Fassung mit übertragenen Branch-Quellen (45). Validator = main-Regel + Branch-Prüfungen; 6 vom Umlaut-Fixer beschädigte URLs aus main repariert. — **(2026-10-09, Übergabe #13 Teil 2)** **Timeline-Korrektur ABGESCHLOSSEN: 111/111 Files in 6 Wellen + 2 Re-Verify-Durchgänge, Vollscan 2457/2457 ohne ERROR, Phasen-Pflicht (alle 4 Phasen) im Validator auf ERROR gehoben.** Nebenfixes aus Agenten-Befunden: ShotSpotter-Beschreibung (AP 2021 statt 2023), Marokko-Pegasus-Name (Präsident statt König), 2 Translit-Reste (Map 2954). Frontend für Wellen 1 + 6 im Browser geprüft (DE/EN). — **(2026-10-08, Übergabe #13 Teil 1)** **Schema v1.1 (Phasen-Modell) entschieden + umgesetzt, 72 Timelines korrigiert.** Validator: Vorgeschichte frei sortierbar, mehrere event-Stufen erlaubt, Verschränkung = ERROR, Vorgeschichte-Pflicht, `--all`-Schalter. Neuer Befund: 68 verschränkte alte Timelines (Reaktion als doctrine getaggt). 3 Korrekturwellen (Fix mit WebSearch-Pflicht → adversariale Verify): 72/72 ohne ERROR, Audit 0, Frontend DE/EN geprüft. **Lektion: 200-WebSearch-Turn-Budget** → ein Workflow pro Turn, Wellen ≤16. 2 needs-human auf Incident-Ebene (tschechien-sozialhilfe-scoring: Faktenbasis nicht belegbar; usa-rekognition-ice: Haupttext nicht belegt). Details: Übergabe #13. — **(2026-10-09, Übergabe #13, Nachtrag 7)** **Einzelquellen-Wellen 10-15: alle 311 restlichen unbelegten TL-Einträge geprüft und belegt (311 -> 0).** Jede Gruppe mit Bearbeiter + unabhängigem Prüfer (WebSearch), erst nach Durchsicht committet; rund 95 Titel per correctionNote korrigiert. Fehlerquote blieb hoch: erfundene Folgen (FTC-Untersuchung zu Firefly, ELVIS-Act-Bezug bei Johansson, Sora-Abschaltung, Kabinettsplan Japan), falsche Daten/Aktenzeichen, viele nicht auffindbare URLs, überzogene KI-Behauptungen (Kaiser-„Roboter“, Klarna „700 Jobs“, Instacart). **47 kaputte relatedIncidents-Verweise repariert** (6ff481e) - Ursache war der **fünfte Fixer-Bug**: `fix-umlaut` umlautierte Slugs in `asm:relatedIncidents` (f37fa22 behoben, Validator prüft Verweise jetzt). Audit-Fehlalarme (Ömer, Stingray) beseitigt (930f807), Bundles 5dd14df. **Lektion:** WebSearch-Kontingent ca. 200 pro Turn; Benachrichtigungen mitten im Turn und Stop-Hook-Fortsetzungen starten keinen neuen Turn - höchstens 2 Gruppen pro Turn, nur als erste Aktion. — **(2026-10-08 abends, Übergabe #13, Nachtrag 6)** **Einzelquellen-Welle 9: 30 Files mit 2 unbelegten Einträgen (alle Sev 5 + 18 Sev 4) geprüft und belegt** (371 -> 311). Fehlerquote weiter hoch: erfundene Einträge (Myanmar MSSP, Kambodscha-Gateway 2023 'eingeschaltet', NDIS-Kürzung 19,6 %), falsche Zuordnungen (Amesys = Libyen, Tigray-Shutdown = Äthiopien, al-Majalah = Marschflugkörper), unbelegter KI-/Deepfake-Bezug (Georgien, Kasachstan, Somalia u. a.). **Suchkontingent präzisiert:** ca. 200 Suchen pro Turn für ALLE in diesem Turn gestarteten Agenten - Prüfer daher einzeln in eigenem Turn gestartet. — **(2026-10-08, Übergabe #13, Nachtrag 5)** **Einzelquellen-Welle 8: alle 22 restlichen Files mit 3 unbelegten Einträgen geprüft und belegt** (437 -> 371). Wieder fast überall echte Fehler (erfundener Ombudsman-Bericht Ontario, falsches Gericht bei Glovo, erfundene Kinderschutz-Behauptungen, KOSA ist kein Gesetz, LAION-5B-Datum, PredPol-Daten). **4. Fixer-Bug:** `busse`->`buße` (Busse = Plural von Bus) - Mapping entfernt, 2 alte Schäden repariert. **Lektion:** WebSearch-Kontingent (~200) gilt pro Turn für ALLE gleichzeitig gestarteten Workflows - Workflow-Prüfer hatten keine Suche; jede Gruppe wurde daher von einem Einzel-Agenten mit eigener Suche nachgeprüft (erst dann Commit). — **(2026-10-02 mittags, Übergabe #13, Nachtrag 4)** **Einzelquellen-Wellen 5-7: weitere 18 Timelines geprüft und belegt** (491 -> 437), **Jordanien-Pegasus-Dublette zusammengelegt** (2453 -> 2452), **Bundles neu gebaut** (waren seit f68db12 veraltet - die Website zeigte die Korrekturen nicht!). Größter Fund: belgien-ki-sozialleistungen-betrug - das Kernereignis (LDH-Beschwerde 2022) war erfunden, Timeline um OASIS neu aufgebaut. Methode jetzt: Dreiergruppen, Fixer und Prüfer als Einzel-Agenten mit harter Frist, ca. 5 min je Stufe. — **(2026-10-02, Übergabe #13, Nachtrag 3)** **Einzelquellen-Wellen 1-4: 24 Timelines mit 3-5 unbelegten Einträgen faktengeprüft und belegt** (569 -> 491 unbelegte Einträge; alle Sev-5-Fälle dieser Gruppe). Wieder in fast jeder Datei echte Fehler: erfundene Studien (Nordkorea: Lumen/Uni Hamburg), erfundene Zitate (Hugh Nelson, Indien), falsche Zuordnungen (Irak: SKYNET ist NSA/Pakistan; Bahrain: Münchner Anzeige betraf die Türkei), unbelegte Gesichtserkennung/KI (Ägypten, China-Journalisten, Bangladesch -> Titel, Typen, Akteure korrigiert). **Neue Lektion: WebSearch-Kontingent gilt pro Workflow-Lauf** (~200), nicht pro Agent - Prüf-Agenten im Workflow hatten keine Suche mehr; Prüfung daher mit Einzel-Agenten (eigenes Kontingent) wiederholt. — **(2026-09-26, Übergabe #13, Nachtrag 2)** **Quellen-Offensive komplett: alle 89 quellenlosen Timelines faktengeprüft und belegt** (Wellen 1-7). In praktisch **jedem** File echte Fehler, darunter erfundene Berichte, Zitate, Zahlen, Folgen, ein nicht existierendes System ('TOSCA') und zwei komplett unbelegte Kernbehauptungen (kolumbien, spanien-arbeitsmarkt -> neu aufgebaut). 4 Dubletten zusammengelegt (2457 -> 2453), 20 Titel mit correctionNote an Belege angepasst. **Zwei weitere Werkzeug-Bugs:** 'lander' (Eigenname Brad Lander) und **URL-Zerstörung** durch den Umlaut-Fixer (31 Links, z.B. lto.de/.../hintergründe) - behoben, Validator prüft jetzt Umlaute in Quellen-URLs. — **(2026-09-25, Übergabe #13, Nachtrag)** 11 frühe Seed-Incidents faktengeprüft + vollständig belegt - in **allen 11** echte Faktenfehler gefunden und korrigiert (Commit `5367c4e`). — **(2026-09-25, Übergabe #13)** **Kausale Phasen-Regel + Validator korpusweit 0 ERRORs (2457/2457).** „Genau 1 event" ersetzt durch `checkPhaseOrder`: mind. 1 event, vor dem ersten nur Vorbedingung, nach dem letzten nur Folgen, I/D als gemeinsamer Block. Deckte **68 bisher unentdeckte Fehletiketten** auf (v.a. Folgen wie UN-Bericht/Bußgeld als `doctrine` nach dem Vorfall). 7 mechanisch getauscht, **69 per Workflow korrigiert** (18 Fix- + 18 adversariale Verify-Agenten, 68/69 direkt bestätigt, 1 nach Reparatur, 0 needs-human; 13 inhaltliche Änderungen alle WebSearch-belegt, 0 Felder außerhalb der TL verändert). **Bonus-Bug:** `fix-umlaut` enthielt `falle→fälle`/`fallen→fällen` (echte Wörter!) und zerstörte bei jedem Lauf korrektes Deutsch, auch in Titeln („Biometriedatenbanken fällen nach Taliban-Machtübernahme"); behoben + **114 Ersetzungen in 43 Files** repariert. Frontend im Browser geprüft. — **(2026-08-07, Übergabe #12)** **Korpusweiter Smart-Char-Sweep + Atom-Feed-Fix.** 743 Files auf ASCII-Satzzeichen normalisiert (7776 Ersetzungen: 6818 ` — `, 531 ` – `, 204 Bis-Striche, 146 typografische Quotes, 55 **unsichtbare Soft-Hyphens U+00AD**, 7 kaputte ` —,`, 6 Ellipsen). Neues Tooling `scripts/normalize-smart-chars.js` (idempotent, `--dry-run`, Text-Level statt parse/stringify → minimaler Diff, JSON-Parse-Gate vor UND nach der Ersetzung). Verifikation: 743/743 Files mit identischem Textkern gegen HEAD, **0 Datumsfelder verändert**, Audit 0, Validator 0 Smart-Char-Fehler, Frontend live geprüft (2457 geladen, Detail-Panel + Permalink OK). **Entscheidung: i18n/*.json + *.html behalten den Em-Dash** (handgesetzter Hausstil „Stufe 1 — Gemeldet", vom Validator nicht erfasst). **Bonus-Fund: Atom-Feed war seit der Bilingual-Migration inhaltsleer** (`<title> [ESKALIEREND]</title>`, `undefined — undefined`, ungültiges RFC3339) — `generate-feed.js` las noch `s.name`/`newest.title` statt `*_de`; behoben. Stale Worktrees entfernt (6,9 MB → 4 KB). — **(2026-06-26, Übergabe #11)** **Reverse-TL-Feature KOMPLETT — 2457/2457 = 100.0 %.** 22 TL-Wellen 46–67 (+519, Sev-2-Block 46–65 +472, Sev-1 66–67 +47; Sev-5..1 alle abgearbeitet) + **alle 10 needs-human-Fälle geklärt** (Recherche-Workflow: prabowo→Anies Baswedan, ultraman→Hangzhou/Acgnai, devternity→Lettland, perspective-api→Univ. of Washington/USA, grok/hmrc/bradford/iphone/lieferdrohne/tesla-burger-king korrigiert; 10/10 adversarial verifiziert). Workflow-Methode (24 Cases/Welle, Gen→adversariale Verify), WebSearch durchgehend, 0 Stalls. **Neues Tooling: `scripts/validate-timelines.js`** (Pre-Commit-Validator). Slug/@id bei Korrekturen unverändert (Permalink; correctionNote in metadata wo Slug inhaltlich abweicht). Audit durchgehend 0. |
| ➡️ **Nächster Schritt** | **Nacharbeit nach dem Merge prüfen und committen:** Bearbeiter-Änderungen für die 24 Phasen-Fälle und die 35 unbelegten Einträge liegen als Patch in `docs/planung/nacharbeit-merge-2026-10-09/` (README: `git apply`, dann nur noch die Prüfer-Stufe, ca. 8 Prüfer). Wochenlimit war bei 96 %, daher nicht mehr geprüft. Danach **redaktionelle Entscheidungen** aus Übergabe #13, Nachtrag 7: Fälle ohne belegtes KI-Element (u. a. Costa Rica Conti, Südsudan, Kaiser Permanente, Instacart, Nepal, Google-BAFTA-Push) behalten/umetikettieren/ausblenden; gemeldete Dubletten (VRChat/BBC, zwei Proof-News-Wahlstudien, zwei Proctoring-Files, fünf Adobe-Files, Spotify PFC, ZipRecruiter/HireVue, Teil-Dubletten Glovo und China-Journalisten); `humanVerified:true` bei importierten Fällen nicht aussagekräftig (eu-frontex, indonesien, mexiko, tuerkei-kurdisch, tschechien, japan-polizei); 'data-misuse' als Sammeltyp korpusweit klären. Offen zur Entscheidung: ob und wie die 128 GLOBAL-Fälle auf der Karte erscheinen sollen (bisher bewusst ohne Marker). Weitere Fronten: Career-Daten via Dataset-Download · AIAAIC Batch D (pre-2015) · `needs-review`-Cases (~180) · alte Koordinaten-/Titel-Drift in `data/index.json` (nur Hilfsskripte betroffen). Auf `main` bereits entschieden (Commit `2095e20`): `tschechien-ki-sozialhilfe-scoring` zurückgezogen, `usa-rekognition-immigration-ice` Ort/Akteure korrigiert, `kasachstan-ki-protest-shutdown` Gesichtserkennung als Einzelquelle attribuiert. · **Sichtung fortsetzen und abschließen (Übergabe #14 §3):** (1) `node scripts/workflows/build-review-worklist.js` → restliche 119 needs-review in 40er-Wellen, **ein Workflow pro Turn**, je Welle `apply-review-verdicts.js`; (2) Zusatzwelle für die 15 alten `verified` (`build-extra-wave.js`); (3) Promotion der verified (`pre-promote-check.js` → `promote-candidates.js --min-sources 2` → `normalize-smart-chars` → `fix-umlaut` → @id-ASCII-Check); (4) Timeline-Bau für neue Incidents (`gen-tl-waves.js`, 16 je Turn) → Validator → Bundle → Push. Dazu: Push der i18n-Commits der Parallel-Session freigeben (`d768d25`, `437d6aa`) und CLAUDE.md-Eintrag „Audit i18n" absegnen. Erledigt davor: ✅ **3 needs-human entschieden und umgesetzt (2026-10-09, Commit `2095e20`):** `tschechien-ki-sozialhilfe-scoring` **zurückgezogen** (`asm:retracted`, Begründung DE/EN im File), `usa-rekognition-immigration-ice` **Ort/Akteure korrigiert** (Washington, D.C.; ICE/HSI, FBI FACE Services, DMVs UT/VT/WA, AWS nur als Pitch, Georgetown; Beschreibung neu), `kasachstan-ki-protest-shutdown` **Gesichtserkennung als Einzelquelle attribuiert**, rund 10.000 Festnahmen, Typ `facial-recognition` entfernt. **Offen jetzt:** Career-Daten via Dataset-Download · AIAAIC Batch D (pre-2015) · `needs-review`-Cases sichten (~180) · Slug-Migration der abweichenden Permalinks. Vorgeschichte der Validator-Entscheidung: Der Validator-Vollscan ist von 606 auf **152 ERRORs** runter (Lücken geschlossen + 14 echte Fehler behoben, inkl. eines Live-404 im Detail-Panel). Was bleibt, ist **eine Modellfrage**: „genau 1 `event`-Phase" kollidiert mit „chronologisch aufsteigend" — 117 Files bilden ein mehrstufiges Ereignis korrekt geordnet ab und verstossen trotzdem. **Empfehlung: Regel lockern.** Details in Front 6. · Danach: Career-Daten via Dataset-Download · AIAAIC Batch D (pre-2015) · `needs-review`-Cases sichten (~180) · Slug-Migration der abweichenden Permalinks |
| 🏆 **Liga** | **Größte kuratierte AI-Incident-DB weltweit** — vor AIID (~1361) und AIAAIC (~2249 roh) |

**In einem Satz:** AIStrikeMap ist nach drei AIAAIC-Import-Batches (A+B+C, 2015-2026)
die größte *kuratierte* AI-Incident-Datenbank mit Menschenrechts-Frame —
bilingual DE/EN, Geo-Mapping, Reverse-Timelines, 0 Audit-Findings.

---

## 🎯 Offene Fronten (nach Priorität)

1. **AIAAIC Batch D** (pre-2015, ~300 Stubs) — letzter AIAAIC-Block, niedrige
   Prio (frühe Cases haben weniger Aktualität). Bringt aber historische Tiefe.
   Workflow: siehe Memory `aiaaic-import-workflow` + Übergabe #5.
2. **Reverse-Timelines** ✅ **KOMPLETT — 2457/2457 (100.0 %)** haben die TL (Kern-Feature).
   Sev-5/4/3/2/1 alle abgearbeitet; **alle 10 needs-human-Fälle geklärt** (Recherche-
   Workflow, 10/10 adversarial verifiziert — Details in Übergabe #11 + Commit `3e19118`).
   Bei 5 Fällen weicht der URL-Slug jetzt inhaltlich ab (estland=Lettland, finnland=USA,
   hmrc=2026, prabowo=Anies, ultraman=Hangzhou) — bewusst beibehalten (Permalink-
   Stabilität), in `asm:metadata.asm:correctionNote` dokumentiert; optionale Slug-
   Migration als spätere Aufgabe.
   Methode unverändert (Workflow, 24 Cases/Welle, Gen→adversariale Verify).
   **NEU: `scripts/validate-timelines.js`** als Pre-Commit-Validator je Welle
   (kapselt alle Checks; fing Datumsbereich + fehlendes title_de + length_ratio).
   ⚠️ **WebSearch-Abhängigkeit (Lektion aus Welle 26):** Die Methode braucht WebSearch
   zwingend (Grounding + adversariale Verifikation). Welle 26 (Übergabe #9) fiel in
   einen globalen WebSearch-Ausfall → komplett verworfen, nach Recovery frisch
   wiederholt. **Vor/nach jeder Welle `websearch_used` im Gen-Output prüfen; bei
   Ausfall NICHT committen, sondern `git checkout -- data/incidents` und später neu.**
   In den Wellen 34–45 (Übergabe #10) war WebSearch durchgehend verfügbar.
   **Bewährte Methode:** **eine Welle = 24 Cases (6 Gen × 4 → 6 unabhängige
   adversariale Verify), ~12–15 Min, 0 Stalls über 45 Wellen.** Die Verify-Stufe
   fängt zuverlässig Halluzinationen + Faktenfehler. Hygiene je Welle:
   `find-missing-timelines.js` → `fix-umlaut` → Gap-Scan (DE-Felder gegen Translit-
   Morpheme) → `audit` → **Validator** (Chronologie strikt aufsteigend inkl.
   monat-vs-tag-genau, title==title_de, @id==Dateiname, Smart-Char/Em-Dash, ≤6
   Einträge, genau 1 event-Phase) → `bundle` → commit. Briefing: `_timeline-briefing.md`.
   **Prompt-Härtung (ab Welle 36):** explizite Umlaut-Pflicht für Komposita +
   Chronologie-Sortierbeispiele + „kein Em-Dash" → Translit-Nacharbeit von 268
   (Welle 35) auf ~0. **Em-Dash-Normalisierung** robust via charCode (nicht
   Shell-Unicode-Regex). Detail: Memory `tl-workflow-methodik`.
   **🔖 needs-human — ALLE 10 GEKLÄRT ✅ (2026-06-26, Commit `3e19118`):** Die
   adversariale Verify hatte über die Wellen 10 vorbestehende Daten-Qualitätsmängel
   aufgedeckt (Fehlzuordnungen, falsche Länder/Urheber, vermischte Fälle, überzogene
   Behauptungen). Per dediziertem Recherche-Workflow (10 Korrektur- + 10 Verify-Agenten,
   10/10 als korrekt bestätigt, WebSearch durchgehend) quellengedeckt korrigiert + TL
   gebaut: prabowo→**Anies Baswedan**, ultraman→**Hangzhou/Acgnai** (CN, 2024-09),
   devternity→**Lettland**, perspective-api→**Univ. of Washington/USA** (2017),
   grok (MeitY-/Strafe-/§69A-Behauptungen entschärft), hmrc-quantexa (→2026-05),
   bradford (doctrine belegt), iphone (Ethnie entfernt), amazon-lieferdrohne (Phasen
   korrigiert), tesla-burger-king (Eigenname entfernt). **Slug/@id/Dateiname bei allen
   unverändert** (Permalink-Stabilität) — wo der Slug jetzt inhaltlich abweicht
   (estland/finnland/hmrc/prabowo/ultraman), ist dies in `asm:metadata.asm:correctionNote`
   dokumentiert; optionale Slug-Migration als spätere Aufgabe.
   ✅ **Smart-Char-Sweep ERLEDIGT (2026-08-07, Übergabe #12)** — siehe Front 5.
3. ~~Frontend-Recheck~~ ✓ **ERLEDIGT** (2026-06-18): Lite-Bundle + Lazy-Detail +
   Caching-Fix. Erstabruf 3.9→1.6 MB gzip; TL-Wachstum trifft nur noch die
   lazy-geladenen Einzeldateien. `bundle-incidents.js` erzeugt jetzt
   `all-incidents-lite.json` (Map) neben `all-incidents.json` (Scripts).
4. 🟡 **needs-review-Cases — Sichtung läuft (Übergabe #14):** 224 needs-review + 15 alte verified = 239; **120 gesichtet → 50 verified (promotionsreif), 24 Dubletten, 42 abgelehnt**; 119 + 15 offen. Workflow + Skripte in `scripts/workflows/`. Ursprünglich: Batch A+B+C haben zusammen ~180 needs-review (oft
   Bestand-Dubletten oder schwache Quellen) in den `*-round-6.json`-Files,
   nicht promotet. Manuell sichten lohnt für 20-30 weitere Promotes.
5. **Smart-Chars / Satzzeichen** ✅ **ERLEDIGT** (2026-08-07): 743 Files auf
   ASCII normalisiert, 7776 Ersetzungen. Tool: `scripts/normalize-smart-chars.js`
   (idempotent, `--dry-run`). **Scope-Entscheidung:** nur `data/` — `i18n/*.json`
   und `*.html` behalten den Em-Dash als handgesetzten Hausstil. Wer das später
   ändern will, muss auch `generate-feed.js` (FEED_TITLE, Trenner) anfassen.
   Nebenbefund: 55 **unsichtbare Soft-Hyphens U+00AD** im Anzeigetext entfernt —
   die brachen Volltextsuche und String-Matching lautlos. Beim nächsten
   KI-Batch mitprüfen (`normalize-smart-chars.js --dry-run` als Gate).
6. ✅ **Timeline-Validator korpusweit — Schema v1.1 (Phasen-Modell, `main` 2026-10-08/09).** Vorgeschichte
   (infrastructure/doctrine) frei sortierbar, mehrere event-Stufen erlaubt (WARN ab 4), keine Verschränkung,
   **alle vier Phasen Pflicht** (ERROR seit 2026-10-09). Auf `main` 111/111 Files in 6 Wellen korrigiert
   (Fix mit WebSearch-Pflicht → adversariale Verify). Der Branch hatte parallel (2026-09-25) eine lockerere
   kausale Regel (`checkPhaseOrder`, 76 Files korrigiert); beim Merge gilt die strengere v1.1-Regel, ergänzt um
   die Branch-Prüfungen (relatedIncidents-Verweise, Umlaute in Quellen-URLs, fehlende Koordinaten als WARN).
   Verlauf: 606 → 152 (`0f93881`, `15543ad`) → 0. **Gate korpusweit:** `node scripts/validate-timelines.js --all`
7. ✅ **Vorbestehende Faktenbefunde (12 Files) — ERLEDIGT (2026-09-25, Commit `5367c4e`).**
   11 Seed-Incidents korrigiert (Mali war durch den fallen-Fix erledigt), jeder TL-Eintrag
   belegt, 3 adversariale Prüfer + Nachbesserungsrunde. **In allen 11 Files echte
   Faktenfehler**, u.a. Schweden-Test 2018 statt 2019, CENTAUR ≠ Grenzroboter, 464 % global
   statt Brasilien, „erste DSGVO-Strafe weltweit" → Schwedens erste.
8. ✅ **Quellenlose Timelines - ERLEDIGT (2026-09-26): 89 -> 0.** Details Übergabe #13, Nachtrag 2. Vorher: 943/10.923 TL-Einträge ohne Quelle
   (425 Files), davon **89 Files komplett ohne**. Nach der Erfahrung aus Front 7 ist dort
   mit einer hohen Fehlerquote zu rechnen. Methode wie Front 7.
9. ✅ **Einzelne unbelegte TL-Einträge - ERLEDIGT (2026-10-09): 311 -> 0.** Einzelquellen-
   Wellen 10-15, Details Übergabe #13, Nachtrag 7. Korpusweit hat jetzt jeder der 11.106
   TL-Einträge 1-2 Quellen.
10. ✅ **Koordinaten - ERLEDIGT (2026-10-09, `475faa4`): 413 Incidents ergänzt.** Sie fehlten seit dem
   AIAAIC-Import (promote-candidates.js übernimmt nur vorhandene Kandidaten-Koordinaten).
   Rangfolge: Ereignisort (26) > Sitz der Behörde/des Gerichts (23) > Firmensitz im Land zum
   Zeitpunkt (160) > Landesmittelpunkt (204). Je Fall zwei unabhängige Agenten + Schiedsagent,
   dann Gegenprüfung aller 209 konkreten Orte (6 Korrekturen). Karte: 2324 Marker. Die 128
   GLOBAL-Fälle bleiben ohne Marker (redaktionelle Frage, wie sie dargestellt werden).

## 🧱 Bekannte false-positives (KEIN Handlungsbedarf)
Dubletten-Check meldet dauerhaft als "strong/likely", sind aber verschiedene
Cases — NICHT mergen:
- Uber-Bußgeld (290 Mio) ≠ Clearview (30,5 Mio)
- Disney/Midjourney ≠ Disney/MiniMax
- Coupang ≠ Naver
- Tesla-Harley ≠ Tesla-Yamaha
- ChatGPT-Phishing ≠ Bard-Phishing
- IBM-DiF/1M-Faces ≠ MegaFace (UW-Washington) — beide aus Exposing.AI-Welle 2019, verschiedene Datasets

## 📦 Pipeline-Werkzeuge (scripts/)
`convert-aiaaic-to-candidates.js` · `merge-aiaaic-chunks.js --batch X` ·
`find-internal-duplicates.js` · `merge-internal-duplicates.js` ·
`fix-smart-quotes-chunks.js` (neu Batch C) · `promote-candidates.js` ·
`fix-umlaut-transliterations.js` · `bundle-incidents.js` ·
`audit-bilingual-incidents.js` · `validate-timelines.js` ·
**`normalize-smart-chars.js`** (neu 2026-08-07)

> ⚠️ **Translit-Tooling (Stand 2026-06-25):** Fixer + Audit teilen
> `data/translit-extra-map.json` (**2951** validierte `ae/oe/ue/ss`→`ä/ö/ü/ß`-Mappings,
> bleiben dadurch synchron). Neue Mappings → in die JSON eintragen, nicht in den
> Code. Beide `über`-Regexes nutzen Unicode-Lookbehind (vorher ASCII-`\b` →
> korrumpierte `Räuber`→`Räüber`). **Bekannte Lücke geschlossen (2026-06-21):** Die
> `UBER_COMPOUND_RE` matcht nur `Uber...` (fehlender Umlaut), NICHT `Ueber...`
> (transliteriert mit „e"); deshalb fehlten `Ueberwachungskameras`/`Uebernahme`/
> `Aenderung`-Komposita als Vollwort → +96 Mappings ergänzt. **Wichtig:** `fix-umlaut`
> + `audit` melden NUR Wörter, die in der Map stehen — neue KI-Batches mit einem
> **Gap-Scan** (DE-Felder gegen Translit-Morpheme, gegen Map abgeglichen) prüfen,
> sonst bleiben unbekannte Transliterationen unentdeckt. Detail: Memory `translit-tooling`.
>
> 🐛 **Echtwort-Kollision (behoben 2026-09-25, #13):** Die fest eingebaute FIX_MAP
> enthielt `falle→fälle` und `fallen→fällen`. Beides sind echte Wörter, der Fixer
> hat damit korpusweit korrektes Deutsch zerstört (114 Stellen repariert). **Regel:
> Umlaut-lose Schlüssel ohne ae/oe/ue nur aufnehmen, wenn sie kein echtes Wort
> sind.** Seltene Restkandidaten (`verhangen`, `gestutzt*`, `wahrend`, `lander`)
> stehen in Übergabe #13. Nach `fix-umlaut` auf „Per file" achten: Der Fixer
> kann frische Agenten-Korrekturen still zurückdrehen.

Briefings: `data/incident-candidates/_enrichment-briefing.md` (Abschnitt 1b
Datums-Verifikation), `_timeline-briefing.md`.

## 📜 Übergabe-Historie (neueste zuerst)
- **#14** 2026-10-09 → `docs/planung/übergabe-2026-10-09-sichtung-needs-review.md` — **Sichtung needs-review: 120/239 gesichtet, 50 verified (nicht promotet), 24 Dubletten, 42 abgelehnt**; Promote-Slug-Dedup-Falle entdeckt; `scripts/workflows/` (Pipeline gesichert); Slug-Transliteration PL/CZ/RO/…; Parallel-Session i18n-Check + `audit-i18n.js`; Abbruch bei 96 % Wochenlimit, 6 Commits
- **#13** 2026-10-08/09 → `docs/planung/übergabe-2026-10-08-schema-v11-phasenmodell.md` — **+ Teil 3: 3 needs-human entschieden (1 Retraction, 2 Korrekturen)** — **Schema v1.1 Phasen-Modell** (Validator + Briefing), 68 neu entdeckte verschränkte Timelines, **6 Korrekturwellen + 2 Re-Verify = 111/111 Files** (Fix mit WebSearch-Pflicht → adversariale Verify), **Vollscan 2457/2457 ohne ERROR**, Phasen-Pflicht = ERROR, WebSearch-Turn-Budget-Lektion (200/Turn → ein Workflow pro Turn, ≤16 Files), 3 needs-human auf Incident-Ebene, 11 Commits
- **#13** 2026-09-25 → `docs/planung/übergabe-2026-09-25-phasen-regel-und-fallen-bug.md` — **Kausale Phasen-Regel** statt „genau 1 event" (`checkPhaseOrder`), deckt 68 unentdeckte Fehletiketten auf; **76 Files korrigiert → Validator korpusweit 0 ERRORs (2457/2457)** (Workflow: 18 Fix- + 18 adversariale Verify-Agenten, 68/69 direkt bestätigt, 0 needs-human); **Bug im Umlaut-Fixer** (`fallen→fällen`, echte Wörter) behoben + 114 Stellen in 43 Files repariert; Browsertest in der Cloud via npm-Leaflet-Umleitung (unpkg gesperrt); 4 Commits auf `claude/stoic-ride-lt1b0j` · **Nachtrag 7c (2026-10-09):** Link-Check-Reparatur, 243 tote Quellen-URLs ersetzt, Merge mit main (Schema v1.1), Nacharbeit als Patch in `docs/planung/nacharbeit-merge-2026-10-09/`
- **#12** 2026-08-07 → `docs/planung/übergabe-2026-08-07-smart-char-sweep.md` — **Korpusweiter Smart-Char-Sweep** (743 Files, 7776 Ersetzungen, neues Tool `normalize-smart-chars.js`), **Atom-Feed-Fix** (war seit Bilingual-Migration inhaltsleer: leere Titel, `undefined — undefined`, ungültiges RFC3339), **erster korpusweiter Validator-Vollscan** → 463 Files / 606 ERRORs aufgedeckt (neue Top-Prio), Worktree-Cleanup 6,9 MB → 4 KB, 2 Commits
- **#11** 2026-06-26 → `docs/planung/übergabe-2026-06-26-sev2-offensive.md` — **Reverse-TL-Feature KOMPLETT: 2457/2457 = 100.0 %** — 22 TL-Wellen 46–67 (+519, Sev-2-Block 46–65 +472, Sev-1 66–67 +47; Sev-5..1 alle abgearbeitet) + **alle 10 needs-human-Fälle per Recherche-Workflow geklärt** (10/10 adversarial verifiziert; prabowo→Anies, ultraman→Hangzhou/Acgnai, devternity→Lettland, perspective-api→UW/USA, grok/hmrc/bradford/iphone/lieferdrohne/tesla-burger-king korrigiert). Neues Tooling `scripts/validate-timelines.js` (Pre-Commit-Validator, Morphem-Gap-Scan); Korpus-Begriffe harmonisiert (Gender/LGBTQ/Due-process); WebSearch durchgehend, 0 Stalls, Audit 0; Slug/@id stabil (correctionNote wo abweichend), ~45 Commits gepusht
- **#10** 2026-06-25 → `docs/planung/übergabe-2026-06-25-sev3-abschluss-wellen-34-45.md` — **12 Sev-3-TL-Wellen 34–45** (+288, TL 66.7→**78.5 %**), **Sev-3-Block abgeschlossen** (Sev-5/4/3 alle ~100 %), Prompt-Härtung drückte Translit-Nacharbeit auf ~0, Validator um @id/Chronologie/Em-Dash erweitert, Map 2903→2951, User-Faktenkorrektur New-Orleans-6:1, korpusweiter Smart-Char-Befund (789 Files), 12+ Commits gepusht
- **#9** 2026-06-21 → `docs/planung/übergabe-2026-06-21-sev3-wellen-24-33-und-websearch-vorfall.md` — **10 weitere Sev-3-TL-Wellen 24–33** (+240, TL 57.0→**66.7 %**, kumuliert 17–33 = +407), WebSearch-Ausfall-Vorfall (Welle 26 verworfen + frisch wiederholt), laufende Translit-Map-Pflege (2870→2903), 19 Commits gepusht
- **#8** 2026-06-21 → `docs/planung/übergabe-2026-06-21-sev3-wellen-17-23-und-translit-luecke.md` — **7 Sev-3-TL-Wellen 17–23** (+167, TL 50.2→**57.0 %**) via Workflow-Tool + adversariale Verify (echte Faktenfehler gefangen), korpusweiter Translit-Map-Lückenschluss (+96, Map 2870), 1 Fehlzuordnung (prabowo) zurückgehalten
- **#7** 2026-06-19 → `docs/planung/übergabe-2026-06-19-sev3-offensive-und-translit-sweep.md` — **16 Sev-3-TL-Wellen** (+256, TL 39.8→**50.2 %**, 50%-Marke), korpusweiter Transliterations-Sweep (~1300 Files, 2774 Mappings, `über`-Regex-Bugfix), Career-Pilot (Negativ-Befund), Radar-Check
- **#6** 2026-06-18 → `docs/planung/übergabe-2026-06-18-tl-offensive-und-frontend.md` — TL 11.9→39.8 % (Sev-5+Sev-4 zu 100 %), Brasilien-Dedup, Frontend-Lite-Bundle
- **#5** 2026-06-06 → `docs/planung/übergabe-2026-06-06-batch-c.md` — Batch C, 2154→2458
- **#4** 2026-06-06 → `docs/planung/übergabe-2026-06-06-batch-b.md` — Batch B, 1304→2154
- **#3** 2026-06-03 → `docs/planung/übergabe-2026-06-03-aiaaic-import-und-quick-wins.md` — Batch A + Quick Wins, 666→1304
- **#2** 2026-06-01 → `docs/planung/übergabe-2026-06-01-research-pipeline-und-600er-rutsch.md` — Pipeline + 600er, 274→601
