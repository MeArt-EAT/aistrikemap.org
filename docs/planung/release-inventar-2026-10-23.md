# Release-Inventar: Was bis zum offiziellen Launch fehlt (Stand 2026-10-23)

Stand: `main` = `258393f` (nach PR #231). Ersetzt die veraltete Liste in
`pre-release-todos.md` (Stand Mai 2026, "195 Files"), deren Punkte großteils erledigt sind.

Erstellt aus einer Inventur des Repos (Checkliste, STATUS.md, Übergaben #13/#14, Nachträge
7/7c/7d, Phase-2-Dokus) plus Prüfläufen: Validator 2452/2452 ohne ERROR (416 WARNs),
Bilingual-Audit 0, i18n-Audit 0 (463/463 Keys), `data/index.json` synchron.
**Nachgeprüft** (per grep/Skript am 2026-10-23) sind die mit ✔ markierten Zahlen; die übrigen
Angaben stammen aus der Inventur und sind nicht einzeln nachgezählt.

Aufwand in **Einheiten**: 1 Einheit = eine geprüfte Datenwelle (Bearbeiter + unabhängiger
Prüfer, rund 4 Gruppen à 12 Incidents) oder ein vergleichbarer Frontend-Block.

## A. Erledigt (aus `pre-release-todos.md`)

EN-Übersetzung Incidents und Radar, Umlaut-Audit der Daten, i18n-Vollabdeckung der 11 Seiten,
ARIA/Zähler-Template, Re-Render bei Sprachwechsel (außer Radar-Popup, B9), Verifikation der
Labor-Raten (Item 98), ≥10 Labor-Fälle in ≥6 Ländern, Index-Drift, needs-human-Fälle,
Nacharbeit nach dem Merge (PR #231).

## B. BLOCKER (vor dem Launch Pflicht) - rund 12 Einheiten

| # | Thema | Befund | Einh. | Entscheidung Projekteigner |
|---|---|---|---|---|
| B1 | Impressum | ✔ Platzhalter "[ADRESSE WIRD VOR LAUNCH EINGESETZT]", "Telefon: [VOR LAUNCH ERGÄNZEN]", Verantwortlicher nach § 18 MStV fehlt (`impressum.html:54/61/66/67`). Die Seite ist bereits öffentlich erreichbar. | 0,1 | ja (Name, Anschrift) |
| B2 | Transparenz | ✔ "Verifizierung durch [Name]", zweimal "[Platzhalter-Link]" (Open Collective, GitHub Sponsors) in `transparenz.html` und i18n. | 0,1 | ja |
| B3 | Crowdsourcing-Formular | ✔ `ki-entlassung-melden.yml` fragt "Klarname" und "E-Mail-Kontakt (optional, nicht öffentlich)" ab. GitHub-Issues sind öffentlich, die Zusage stimmt nicht. Gleiche Zusage in Datenschutz § 8. Lösung: Felder entfernen, Kontakt per E-Mail. | 0,3 | ja (Kontaktweg) |
| B4 | Datenschutz § 6 | ✔ `cdn.jsdelivr.net` (Chart.js in `career.html`) nicht genannt. | 0,1 | nein |
| B5 | Aussagen zur Verifikation | ✔ 2267 von 2452 Incidents `aiGenerated:true`, 2268 `humanVerified:false`; Footer aller Seiten: "Inhalt: Menschlich verifiziert". Das Detail-Panel kennzeichnet KI-Einträge nicht. Dazu EU AI Act Art. 50(4) (Kennzeichnung KI-generierter Texte zu Themen öffentlichen Interesses) juristisch prüfen. Lösung: Kennzeichnung im Panel plus ehrliche Texte (Footer, Transparenz, Methodik Stufe 3). | 0,8 | ja |
| B6 | AIAAIC-Lizenz | ✔ 1798 Incidents aus AIAAIC (CC BY-SA 4.0). AIAAIC wird auf der Website nirgends genannt; eigene Lizenz CC BY-NC-SA. Share-Alike bei Übernahme wesentlicher Datenbankteile (§ 4(b)) rechtlich klären, mindestens Namensnennung ergänzen. | 0,3 | ja |
| B7 | Zurückgezogene Fälle | ✔ `js/detail-panel.js` kennt `asm:retracted` nicht. Ein Permalink auf Tschechien/Nordkorea zeigt den Fall ohne Hinweis. | 0,3 | nein |
| B8 | Verifikationsstufe 5 | ✔ `israel-usa-us-jury-verurteilt-nso-group-zu-168-mio-usd-wegen-whatsapp-pegasus` hat Stufe 5 (Badge zeigt "verification.5"). Plus Bereichsprüfung im Validator. | 0,15 | nein |
| B9 | Radar-Popup | ✔ `js/map.js` zeigt rohe Status-ID und festes "Details →" ohne i18n. | 0,1 | nein |
| B10 | Career-Dashboard | Verlinkt in der Navigation aller Seiten, aber fast leer (1 Datenpunkt, 7 von 8 Länderdateien `[]`). Ausblenden oder als Beta kennzeichnen. | 0,2 | ja |
| B11 | Live-Radar | ✔ 2 von 6 Karten ohne Quelle (`anthropic-mythos-pentagon`, `openai-sicherheit-whistleblower`), 22 von 26 Timeline-Einträgen ohne Quelle, letzte Einträge Feb-Apr 2026, `lastUpdated` 2026-05-26. Faktencheck, Quellen, Fortschreibung bis heute. | 2 | ja (Pflegerhythmus, "Live"-Anspruch) |
| B12 | Fälle ohne belegtes KI-Element | Nachtrag 7: Costa Rica Conti, Malaysia Arbeitsmigranten, ZipRecruiter, Lauren Book, Südsudan, Südkorea-Yoon, Instacart, Kaiser Permanente, KI-Bots-Stadtrat, Nepal, Ofqual, Südafrika Hell Run; Welle 15: Google-BAFTA, Sony-Preise, Moffatt/Air Canada, australische Psychologin, Johansson/Sky. Behalten, umetikettieren oder zurückziehen. | 1 | ja |
| B13 | Dubletten | Nachtrag 7 (VRChat/BBC, 2× Proof News, 2× Proctoring, 5 Adobe-Dateien, Spotify PFC, ZipRecruiter/HireVue, Teile Glovo/China-Journalisten) plus neu: 2× Biden-Robocall, 2× Westfield, `usa-fbi-und-ice-...fuehrerschein` vs. `usa-rekognition-immigration-ice`, 3× Ofqual, 2× Klarna, 2× Griechenland-PredPol. Rund 15 Gruppen. | 2 | ja (Freigabe) |
| B14 | Prüfliste Nachtrag 7c | 35 von 36 Punkten offen (nur Nordkorea erledigt), z. B. Como (Garante statt Parlament), Gorillas "Project Ace", Uber-Surge-Datum, Papua-Titel, Polen-Datum, Truecompanion-Zitat. | 3 | teilweise |
| B15 | Personenbezogene Fälle | Raymundo Ramos (OFAC-Sanktion 14.04.2026, im Korpus als Menschenrechtsverteidiger geführt); Ulmen-Fernandes (Verdachtsberichterstattung über namentlich genannte Person). | 0,3 | ja |
| B16 | Labor-Zähler 84.875 | ✔ Summe 84.875 aus 12 Fällen, alle `last_verified` 01.-03.05.2026. Klarna 700 ist ein Arbeitslast-Äquivalent (widerspricht dem korrigierten Incident), IBM 7.800 ein Einstellungsstopp, BT/Accenture Mehrjahrespläne. Faktencheck plus Zählregel. | 1,2 | ja |

Rein technisch ohne Entscheidung: B4, B7, B8, B9 (zusammen rund 0,65 Einheiten).

## C. SHOULD (dringend empfohlen) - rund 20 Einheiten ohne S12

| # | Thema | Befund | Einh. | Entsch. |
|---|---|---|---|---|
| S1 | Juristisches Review Item 108, Takedown-Ablauf | `recht-crowdsourcing.md` § 5 offen; "Vorfall melden" auf jeder Seite. | 0,3 + Anwalt | ja |
| S2 | SEO hreflang/og:locale | Alle Seiten `lang="de"`, Meta nur per JS getauscht, kein hreflang. | 0,3-3 | ja |
| S3 | Sitemap | ✔ 208 URLs (laut Inventur nur rund 196 Incidents); lastmod 2026-04-15. Generator nötig. | 0,3 | nein |
| S4 | Datenlücke | ✔ Neuester Incident 2026-05; Juni-Oktober fehlen (widerspricht LIVE-Ticker). Aufholwelle 6-8 oder nur Wording 0,2. | 0,2-8 | ja |
| S5 | Restliche tote Links | 47× 404 und rund 76 Fehler (Issue #230). Runde 2 läuft. | 2 | nein |
| S6 | Stufe-2-Regel | ✔ 69 nicht zurückgezogene Incidents mit Stufe ≥2 und nur einer Top-Level-Quelle; meist weitere URLs in der Timeline. | 0,8 | nein |
| S7 | Methodik-Taxonomie | ✔ `autonomous-vehicle` fehlt in `methodik.html` (103 Incidents). | 0,1 | nein |
| S8 | Caveat Labor | `labor.caveatBody` methodisch prüfen. | 0,2 | ja |
| S9 | Sammeltyp data-misuse | 1327 Incidents (54 %). Gezielt umetikettieren. | 1,5 | ja |
| S10 | GLOBAL-Fälle unsichtbar | ✔ 128 Incidents ohne Koordinaten, ohne Marker und ohne Listenansicht nicht erreichbar. | 1,5 | ja |
| S11 | Persönlichkeitsrechte | Rund 227 Incidents mit Beschuldigungen/Festnahmen/Urteilen (Heuristik); Anonymisierungsregel nötig. | 4 | ja (Regel) |
| S12 | Faktencheck des Korpus | Geprüfte Teilmengen zeigten in fast jeder Datei echte Fehler; Titel/Beschreibung/Akteure der Importe nie gezielt geprüft. Mit ehrlicher KI-Kennzeichnung (B5) auch nach dem Launch möglich. | siehe unten | ja |
| S13 | README | Umlaut-Umschreibungen, veraltete Feature-Angaben. | 0,1 | nein |
| S14 | SRI | Kein `integrity` bei Chart.js. | 0,1 | nein |
| S15 | Erstabruf | ✔ `all-incidents-lite.json` 8,3 MB (doppelte Felder). | 0,5 | nein |
| S16 | Research-Runner | ✔ Wöchentlicher Cron, 23 Läufe (21 erfolgreich, zuletzt 18.10.), aber nur ein Commit mit Kandidaten (`2f7281f`). Klären, warum die Läufe nichts liefern; reparieren oder abschalten. | 0,1 | ja |
| S17 | Abschluss-QA im Browser | 11 Seiten, DE/EN, mobil, Konsole. | 1 | nein |
| S18 | Doku-Pflege | STATUS.md, `pre-release-todos.md`, `inventar-index.md`, CLAUDE.md (`css/main.css` existiert nicht, "195 incidents"). | 0,3 | ja (CLAUDE.md) |

**S12 neu bewertet:** Die Inventur schätzt 10-20 Einheiten. Umgerechnet auf die gemessene
Leistung (eine Welle prüft rund 50 Incidents) sind rund 2000 nie gezielt geprüfte Importe eher
**30-50 Einheiten**.

## D. POST (nach dem Launch) - rund 60 Einheiten

P1 Sichtung needs-review fortsetzen (rund 10), P2 AIAAIC Batch D vor 2015 (rund 25),
P3 Career-Daten befüllen (15-20, Freigabe nötig), P4 Item 107 Auto-Update (3-5, 4 offene Fragen),
P5 Item 106 Cluster/Choropleth (1,5), P6 Labor-Fälle auf ≥15 (2,3), P7 Slug-Migration (0,5),
P8 Tippfehler-Durchgang (1), P9 Kleinkram/416 WARNs (0,1).

## E. Schätzung in Kontextfenstern (1 Mio. Token, ohne Komprimierung)

Kalibrierung aus dieser Sitzung (Nachtrag 7c/7d): Ein frisches Fenster startet mit rund
100.000 Token Grundlast (System, Werkzeuge, CLAUDE.md, Übergabe). In rund 390.000 Token
passten 18 Linkgruppen, der Merge mit 81 Konflikten, 8 Nacharbeitsgruppen, Doku und zwei
PR-Merges, also rund 10 Einheiten. Das sind rund 40.000 Token je Einheit. Mit Puffer für
Rückfragen, Nacharbeit und lange Prüfberichte ergibt das **rund 15 Einheiten je Fenster**.

| Ziel | Einheiten | Kontextfenster |
|---|---|---|
| Nur BLOCKER (B1-B16) | rund 12 | **1** |
| BLOCKER + SHOULD, Datenlücke nur per Wording (S4 = 0,2) | rund 25 | **2** |
| BLOCKER + SHOULD mit Aufholwelle Juni-Oktober (S4 = 7) | rund 32 | **2-3** |
| zusätzlich Faktencheck des ganzen Korpus vor dem Launch (S12) | +30-50 | **+2-4 → 4-6** |
| POST (nach dem Launch) | rund 60 | 4 |

Engpass ist nicht der Kontext, sondern:
1. **Entscheidungen des Projekteigners:** 11 von 16 BLOCKERn brauchen sie (Impressum-Daten,
   Kontaktweg, KI-Kennzeichnung, AIAAIC-Lizenz, Career ausblenden, Fallisten freigeben).
   Ohne sie bleibt nur rund 0,65 Einheiten Technik übrig.
2. **Wochenlimit:** Die Prüfwellen laufen über Subagenten. Deren Token zählen nicht zum
   Kontextfenster, aber zum Nutzungslimit, und zwar ein Vielfaches davon.
3. **Rechtsprüfung:** B5/B6/S1 brauchen eine juristische Einschätzung außerhalb des Projekts.

Empfohlene Reihenfolge: B1-B3 sofort (die Seite ist schon öffentlich), dann B4/B7/B8/B9 in
einem Frontend-Block, dann die Entscheidungslisten B12-B16 als Datenwellen, dann B11 (Radar).
