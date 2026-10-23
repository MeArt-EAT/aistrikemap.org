# Übergabe #15 — Redaktionsentscheidungen umgesetzt: Typ-Reform, Aufnahmeregel, Dubletten, ehrliches Prüf-Flag, Kartenkacheln

**Datum:** 2026-10-23
**Vorgänger:** #14 (Sichtung needs-review 120/239) und die Cloud-Linie #13 Nachtrag 7c/7d (PR #93, #231)
**Commits (lokal auf `main`, noch NICHT gepusht):** `b04b328` (Sichtung Welle 4), `81426d6` (Werkzeuge), `538fff8` (Frontend), `698bef1` (Redaktion), `f964f17` (Kartenkacheln), `a90affd` (Aufnahmeregel), dazu dieser Übergabe-Commit

---

## 0. Abstimmung mit der vorigen Session

Lokales `main` war 188 Commits hinter `origin/main`: Die Cloud-Session (Branch `claude/stoic-ride-lt1b0j`) hatte über PR #93 und #231 Link-Check, 243 tote Links, Koordinaten für 413 Incidents, Einzelquellen-Wellen und die Nacharbeit nach dem Merge eingebracht. Per Fast-Forward übernommen; Stand danach: 2452 Incidents, Validator 0 ERRORs, Audit 0. Ihre offene „redaktionelle Prüfliste" (Nachtrag 7) war der Ausgangspunkt dieser Session.

## 1. Sichtung Welle 4 (`b04b328`)

40 needs-review-Kandidaten, Review + adversariale Gegenprüfung mit WebSearch (5/5 + 5/5): **12 verified, 26 rejected, 1 Dublette, 1 offen**. Stand gesamt: 62 verified (promotionsreif), 68 needs-review offen (Wellen 5/6) + 16 alte verified (Zusatzwelle 7).
**Pipeline-Verbesserung:** Prüfer schrieben Nacharbeiten (falsche Quellen entfernen, Akteure ersetzen) nur in `notes`, die nie ausgeführt wurden. Neu: Patch-Felder `remove_sources` und `actors` (`scripts/workflows/review-patch.js`, gemeinsam für `apply-review-verdicts.js` und `apply-manual-patches.js`); Welle 4 per `manual-patches-wave-4.json` nachgezogen (11 Quellen entfernt, 3× Akteure). Wellennummern bleiben über Sessions stabil; die Zusatzwelle erfasst nur nie gesichtete `verified`.

## 2. Redaktionsentscheidungen des Projekteigners (2026-10-23)

Vorlage: `docs/planung/redaktion-entscheidungsvorlage-2026-10-23.md` (44 Fälle, 5 Lese-Agenten ohne Websuche). Freigegeben wurden alle vier Empfehlungen:

| Frage | Entscheidung | Umsetzung |
|---|---|---|
| Aufnahmeregel | KI + algorithmische Systeme | Scope-Prüfung (s. 3), Methodik-Absatz DE/EN |
| Dubletten | Zusammenlegen **mit Verweis** | 11 Gruppen (s. 4) |
| `humanVerified` | korpusweit ehrlich | 182 Incident- + 6 Radar-Dateien auf `false`; Panel/Footer/Transparenztext neu |
| Ausbauten | Robotaxi-Typen + Klarna, Typ-Reform, Weltweit-Element | s. 5–7 |

Nachfrage mit echten Zahlen: Die Aufnahmeregel betraf nicht ~10, sondern 153 Fälle → Entscheidung **„Als Kontextfall"**.

## 3. Aufnahmeregel / Kontextfälle (`a90affd`)

Scope-Prüfung: 345 Fälle ohne KI-Stichwort in Titel/Beschreibung, je Fall ganze Datei gelesen, jede Außerhalb-Einstufung adversarial gegengeprüft (keine Websuche). Ergebnis: 120 KI, 68 algorithmisch, 4 KI vermutet, **153 ohne KI-/Algorithmus-Element** (97 davon Sev 4–5: Spyware, Shutdowns, klassische TK-Überwachung, konventionelle Drohnen …). Liste: `docs/planung/scope-pruefung-2026-10-23.md`.
- **144 Kontextfälle:** `asm:scope: "context"` + `asm:scopeNote`/`_de`/`_en`. Standardmäßig ausgeblendet (Schalter „Kontextfälle ohne KI-Bezug anzeigen"), nicht im Zähler/Ticker, im Panel gekennzeichnet, auf der Karte gestrichelt ohne Puls.
- **10 Rückzüge** (in der Vorlage einzeln freigegeben): Conti, Malaysia, Südsudan, Kaiser Permanente, Nepal, 2× Yoon, Google-BAFTA, Sony, China-Journalisten.
- **70 Klarstellungssätze** (DE/EN) bei algorithmischen Systemen bzw. vermuteter KI.
- Zähler jetzt **2284 Vorfälle in 113 Ländern** (vorher 2450 / 132).

## 4. Dubletten zusammengelegt (`698bef1`)

Verfahren neu: Die Dublette bleibt als zurückgezogener Eintrag mit `asm:mergedInto` (Permalink + Sitemap bleiben gültig, Panel verlinkt), die bleibende Datei bekommt `asm:metadata.mergedFrom` (Array) + `mergeNote`. Je Gruppe Bearbeiter + unabhängiger Prüfer (11/11 ok): Johansson/Sky, Klarna, Mexiko-Pegasus, Ofqual (3→1), VRChat, Proof-News-Wahlstudie, Proctoring, Adobe, Spotify PFC, Glovo, Griechenland. `merge-internal-duplicates.js` (löscht Dateien) nicht mehr verwenden.

## 5. Typ-Reform (`698bef1`)

`data-misuse` war über einen Import-Default (`convert-aiaaic`, `promote-candidates`) zum Sammeltyp für 1327 Fälle geworden. Alle 1327 neu eingeordnet: je Batch zwei unabhängige Klassifizierer, 148 Abweichungen per Schiedsrichter → **1169 geändert**. Neue Typen: `malfunction` 490, `fraud` 218, `copyright` 142, `environmental` 15; `data-misuse` bleibt nur bei Personendaten (381); alle 12 Robotaxi-Fälle → `autonomous-vehicle`. Ergebnisliste `scripts/workflows/typ-reform-2026-10-23.json`. Werkzeug `scripts/apply-incident-types.js` (Text-Edit, minimaler Diff). Import-Tooling ohne Ersatztyp: Kandidaten ohne `incidentType` werden nicht promotet.
⚠️ **Die 62+ verified Kandidaten tragen noch Typen nach altem Schema** → nach der Promotion einmal klassifizieren (gleiche Methode, kleiner Lauf).

## 6. Frontend (`538fff8`, `f964f17`, `a90affd`)

- Button **„Weltweit (n)"** (unten rechts über dem Zoom): Liste der 123 länderübergreifenden Fälle im Panel, Filter/Suche wirken mit; Zähler ohne GLOBAL/EU als „Land".
- Erster Kartenaufbau läuft durch die Filterkette (zurückgezogene Fälle waren bis zur ersten Filteränderung sichtbar).
- Panel: Rückzugs-/Zusammenlegungs-/Kontext-Hinweis oben mit Begründung und Link; ehrliche KI-Kennzeichnung; Popup-Titel lokalisiert.
- 4 neue Typen in Filter, i18n, Methodik (dort auch das fehlende `autonomous-vehicle`).
- **Kartenkacheln:** CARTO liefert `basemaps.cartocdn.com` seit Oktober 2026 an alle Clients ohne API-Schlüssel mit Stempel „API KEY REQUIRED" aus (auch auf aistrikemap.org, per ETag `wm-…` nachgewiesen; Kachel-URL war seit März unverändert). Umgestellt auf **Esri World Dark Gray** (Basis + Beschriftung, ohne Schlüssel) für Hauptkarte, AI-&-Arbeit-Karte und Career-Karte; **Datenschutzerklärung DE/EN angepasst** (Esri statt CARTO). Alternative bei Bedarf: CARTO- oder Stadia-Konto mit Schlüssel/Domainfreigabe.
- i18n +24 Keys je Sprache, i18n-Audit 0 Befunde; alles im Browser DE/EN geprüft.

## 7. Weitere Korrekturen

- **Klarna (AI & Arbeit):** 700 = Arbeitslast-Äquivalenz, keine Entlassungen → neues Feld `headcount_basis: "workload-equivalent"` (gelistet, nicht gezählt), unbelegte Kontextsätze entfernt; Zähler 84.875 → 84.175.
- **6. Fixer-Bug:** `fix-umlaut-transliterations.js` ignorierte `--dry-run` (schrieb trotzdem) und umlautierte Slugs in `asm:mergedInto`/`mergedFrom` → 3 Verweise gebrochen, repariert. Fixer schützt jetzt diese Felder und jedes existierende Slug-Token im Fließtext. Validator prüft `asm:mergedInto` und `asm:scope`.
- `sed -i` im Dropbox-Ordner ist gefährlich (Umbenennen scheiterte, Datei war weg) → für Dateiänderungen `node` oder den Editor benutzen.

## 8. Nächste Schritte (Reihenfolge)

1. **Push freigeben** (Deploy): Die Live-Karte zeigt bis dahin den CARTO-Stempel.
2. **Recherche-Workflow** für die Punkte, die Websuche brauchen (ein Workflow pro Turn): Johansson (WaPo-Bericht über OpenAI-Unterlagen), Lauren Book (Deepfake-Bezug?), Stadtrat-Bots (KI belegt?), australische Psychologin (Verification senken?), Raymundo Ramos (OFAC-Sanktion neutral darstellen, 2 Mexiko-Dateien), Collien Ulmen-Fernandes (Persönlichkeitsrecht, OLG Hamburg), Indonesien + Türkei (unbelegte TL-Sätze), Glovo-Caporalato (Datum 2026-02-09), VRChat (NME-Pfad), ZipRecruiter (auf HireVue zuschneiden).
3. **Korpusweiter Dubletten-Scan** round-6-Importe gegen kuratierte Dateien (Muster: Mata v. Avianca doppelt).
4. **Sichtung Wellen 5, 6+7** (`scripts/workflows/review-wave-5.js` … `-7.js`, schon gebaut), je Welle `apply-review-verdicts.js`.
5. **Promotion** der verified (`pre-promote-check.js` → `promote-candidates.js --min-sources 2`) → **Typ-Klassifizierung der neuen Fälle** → **Timeline-Bau** (`gen-tl-waves.js`, 16 je Turn) → Validator → Bundle.
6. Danach: Career-Daten, AIAAIC Batch D, Slug-Migration.

**Tipp:** Wegen des WebSearch-Kontingents (~200 pro Turn) braucht jede Recherche-/Sichtungs-/TL-Welle einen eigenen Turn. Mit `/loop` (ohne Intervall) kann die Pipeline selbstständig Turn für Turn weiterlaufen.

## Disk-Hygiene

Agenten-Transkripte dieser und der beiden Vorgänger-Sessions geprunt (102 MB + 169 MB → 31 MB, `journal.jsonl` behalten). Verwaiste `data/incidents/*.json.tmp.*` (16 Dateien vom Juni) gelöscht.

---

## Nachtrag (2026-10-23 mittags): Deploy, Abstimmung, Launch-Blocker

**Deploy:** Push `c3bab96..fef9255` nach Merge von PR #232 (Cloud-Linie: tote Links Runde 2, Release-Inventar; Konflikte nur STATUS.md + Bundle). Live geprüft: Esri-Karte ohne Stempel, Zähler 2284/113/123, Weltweit-Button, Konsole leer.

**Zwei lokale Sessions parallel** (Abstimmung per SendMessage): diese Session = git/Push/Bundles/Promotion/Launch-Blocker; Session „Projektfortschritt mit Kontext" = die 11 Websuche-Recherchepunkte aus §8 und künftig Sichtungswellen. Regel: nur eine Session bündelt und committet; vor `apply-review-verdicts.js` bzw. Promotion gegenseitig Bescheid geben (beide schreiben `data/incident-candidates/*.json`).

**Launch-Blocker** aus `docs/planung/release-inventar-2026-10-23.md` (dort Abschnitt F mit Stand je Punkt):
- `252f96f`: B4 jsDelivr in Datenschutz § 6, B8 Verifikation 5 → 4 + Skalenprüfung im Validator, B9 Radar-Popup zweisprachig, S3 Sitemap-Generator (2442 URLs, redaktionelles Datum, ohne Zurückgezogenes), S13 README neu (inkl. AIAAIC-Namensnennung), S14 SRI für Chart.js + markercluster, S18 CLAUDE.md.
- `07070a7`: B2 Finanzierungslinks (Open Collective, GitHub Sponsors → 404) auf Wunsch des Projekteigners ausgeblendet, bis die Konten existieren; Liste als HTML-Kommentar mit Reaktivierungs-Anleitung.

**Offen mit Eigner-Entscheidung:** B1 Impressum (Name, Anschrift, Telefon, § 18 MStV), B3 Kontaktweg Crowdsourcing, B6 AIAAIC-Lizenz (Share-Alike), B10 Career ausblenden/Beta, B11 Radar-Pflege, S1/S2/S4/S8/S11/S12/S16. Juristisch: EU AI Act Art. 50(4) (B5).

### Recherche-Workflow Redaktionspunkte (§8.2), Parallel-Session „Projektfortschritt mit Kontext"

Ein Workflow mit je Fall Bearbeiter (Websuche) → adversarialer Faktenprüfer (Websuche) → Redaktionsprüfer, 30 Agenten, 123 Suchen; danach Validator 11/11 ohne ERROR. Integration in dieser Session: Validator korpusweit 2452/2452, Audit 0 (zwei Fehlalarme „EU" = Estados Unidos → Audit-Ausnahme), `data/index.json` per neuem `scripts/sync-index.js` an Typ-Reform, Rückzüge und Kontextfälle angeglichen (1288 Einträge), Bundles, Sitemap, Feed neu, Browser-Check.

Umgesetzt: Johansson (WaPo 22.05.2024 belegt, voller Satz DE/EN), **Lauren Book wieder aktiv** (Book nannte die Bilder selbst „deep fakes", FOX 13; KI-Erzeugung amtlich nicht festgestellt, entsprechend zugeordnet), Stadtrat-Bots (Stufe 3 → 2, KI unbestätigt), Psychologin (Stufe 4 → 3, TASSC 35 Rn. 54-57), Raymundo Ramos (OFAC 14.04.2026 sb0440, neutral und zugeordnet, 2 Dateien), Indonesien (TL bereinigt, Titel präzisiert), **Türkei → Kontextfall**, Glovo-Caporalato (2026-02-09, controllo giudiziario), ZipRecruiter → HireVue zugeschnitten, VRChat (NME kanonisch). Zählung unverändert: 2284 aktiv, 144 Kontextfälle, 113 Länder.

Offen: (a) **Ulmen-Fernandes** zurückgesetzt, braucht Entscheidung des Eigners (LTO: LG/OLG Hamburg hielten „Deepfake-Fotos" im Eilverfahren für unstreitig – spricht gegen Kontextfall/Rückzug; Volltext 7 W 72/26 nötig). (b) Psychologin: Urteils-URL AustLII nachtragen, bnlaw-URL „cult-leaders" ersetzen. (c) Typ-Fragen: `political-pressure` bei Türkei, `labor-exploitation` bei der HireVue-Datei. (d) Stadtrat-Bots und Indonesien sind Grenzfälle zur Aufnahmeregel (Eigner). (e) Neue URLs mit 403 beim nächsten Link-Check prüfen (engagemedia ?p=18921, bisnis, tempo, article19, WaPo). (f) Sichtungswelle 5 nicht gestartet; Reihenfolge mit der Promotion klären (`apply-review-verdicts.js` schreibt dieselben Kandidatendateien).

**Lektion:** Zwei Sessions im selben Ordner funktionieren mit fester Aufteilung: eine Session für git/Bundle/STATUS/Übergabe, die andere ändert nur angekündigte Dateien und meldet sie; Ausgangsfassungen vorher in den Scratchpad kopieren, damit die Prüfer gegen HEAD vergleichen können.

### Nachtrag (bis 13:00): Vorbereitung für die nächste Runde

- **Typen** (`f8fca7e`): Türkei-Kurden `censorship` statt `political-pressure`, HireVue nur `discrimination`.
- **S15** (`9643807`): Karten-Bundle 8,3 → 6,3 MB (doppelte Altfelder `name`/`description`/`asm:affectedRights` im Lite-Bundle weggelassen, Frontend liest `*_de`). Weitere ~2,8 MB nur, wenn die Suche keine Beschreibungswörter mehr finden soll (Eigner).
- **Dubletten-Vorlage** (`bff3d8e`, `docs/planung/dubletten-vorlage-2026-10-23.md`): korpusweiter Scan → 177 Kandidatenpaare, je Paar beide Dateien gelesen: **83 Dubletten, 22 Teil-Dubletten**, 72 verschieden. Bleibt/Übernehmen je Paar vorbereitet. Umsetzung wie heute (Zusammenlegen mit Verweis, Bearbeiter + Prüfer), vorher zu Gruppen zusammenfassen. Freigabe durch den Eigner (B13).
- **Typ-Vorschläge** für die 89 verified-Kandidaten ohne Bestandseintrag: `scripts/workflows/typen-kandidaten-2026-10-23.json` (beim Promoten per `apply`-Schritt in `candidate_data.incidentType` übernehmen; die 11 aus Welle 5 fehlen noch).
- **Labor-Faktencheck** (`scripts/workflows/labor-faktencheck-2026-10-23.json`, Recherche + Gegenprüfung mit Websuche): IBM 7.800 = Bloomberg-Rechnung aus Einstellungsstopp/Projektion (nicht realisiert), BT 10.000 = KI-Anteil eines Plans bis 2030 (nicht realisiert, Prüfer meldet zwei überzogene Aussagen im Vorschlag), Accenture rund 11.000 = belegter Netto-Rückgang. **Eigner-Entscheidung Zählregel:** Sollen auch `announced-plan` und `hiring-pause` aus dem Zähler? Dann sinkt er um 17.800 auf 66.375.
- **Psychologin:** Urteil Lakaev v McConkey [2024] TASSC 35 (AustLII) als Quelle ergänzt; der bnlaw-Link steht im doctrine-Eintrag der Timeline (nicht in `asm:sources`), Ersatz (Benchmark Weekly Defamation Law, 19.07.2024) vorgeschlagen, noch nicht getauscht.
- **Mögliche neue Fälle** (Hinweise der Welle-5-Prüfer): Cruise-Beinahe-Unfälle mit Kindern (Aug. 2023), Klage dreier Uber-Ingenieurinnen wegen Stack-Ranking (Okt. 2017).
- **Sichtung abgeschlossen** (Parallel-Session, je Welle Review + Gegenprüfung mit Websuche): Welle 5 `717df1d` (11 verified, 16 rejected, 10 Dubletten, 3 offen), Welle 6 `50e83c3` (26 Dubletten, 3 rejected – fast alle schon früher promotet, lagen noch in der Staging-Schleuse), Welle 7 `7c6c1b6` (alle 16 alten verified sind Dubletten). **Endstand: 73 verified promotionsreif**, 3 needs-review (oxford-town-centre-dataset, titus-henderson-compas, keele-autism-study), 11 ungesichtete verified ohne Wellen-Kriterien (fehlender Name oder < 2 Quellen).
- **Scope-Hinweise der Prüfer** (im Bestand, nicht geändert): `mikronesien-kiribati-nauru-east-micronesia-cable-emcs-…` (Glasfaserkabel, Kandidat für Kontextfall), `dominikanische-republik-massendeportation-von-haitianer-innen-mit` (algorithmisches Element schwach), `sri-lanka-online-safety-act-no-9-2024-…` (KI nur indirekt), `elfenbeinkueste-…-putsch` (nur 1 Quelle).

**Nächste Runde, Reihenfolge:** (1) Eigner-Entscheidungen (Impressum, Kontaktweg, AIAAIC-Lizenz, Career, Radar, Ulmen-Fernandes, Grenzfälle, Labor-Zählregel, Dubletten-Freigabe). (2) Promotion der 73 verified mit den vorbereiteten Typen (`typen-kandidaten-2026-10-23.json` + 11 aus Welle 5 nachklassifizieren) → Timeline-Bau (16 je Turn) → Validator → `sync-index.js` → Bundle → Push. (3) Dubletten-Vorlage umsetzen (nach Freigabe). (4) Faktencheck des Korpus (S12).
