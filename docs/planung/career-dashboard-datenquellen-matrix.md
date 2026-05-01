# Career Dashboard – Datenquellen-Matrix (V0.1)

**Kontext:** Arbeitsdokument für Item 99 (Konzeptphase Career Dashboard), Punkt 1 *Datenquellen-Recherche*. Gehört zu Items 94–99 in [phase-2-career-dashboard.md](phase-2-career-dashboard.md).

**Zweck:** Pro Land erfassen, welche nationale Behörde welche Arbeitsmarktdaten öffentlich bereitstellt, in welchem Format, unter welcher Lizenz, mit welchem KI-Bezug.

**Hinweis zum KI-Bezug:** Nur sehr wenige nationale Arbeitsämter publizieren heute dedizierte "KI-Exposition"- oder "Automatisierungsrisiko"-Metriken. Der Regelfall ist: Land liefert **Beschäftigungsdaten pro Beruf/Branche**, und wir mappen diese gegen etablierte KI-Exposure-Scores (OECD, ILO, Frey/Osborne, Felten/Raj/Seamans). Das ist in der Matrix-Spalte "KI-Bezug" dokumentiert.

---

## Globale / supranationale Quellen (Baseline für alle Länder)

| Quelle | Scope | Format | Lizenz | KI-Bezug |
|---|---|---|---|---|
| **OECD Employment Outlook / OECD.Stat** | 38 OECD-Mitglieder | API (SDMX-JSON), Bulk-CSV | OECD Terms & Conditions (frei für nicht-kommerzielle Nutzung mit Attribution) | Ja — OECD hat eigene AI-Exposure-Studien (Georgieff/Milanez 2021, Lassébie/Quintini 2024) |
| **ILO ILOSTAT** | ~190 Länder | API (REST), Bulk-CSV | CC BY 4.0 | Indirekt — ISCO-basierte Beschäftigungsdaten, keine eigene AI-Metrik |
| **Eurostat** | EU-27 + EFTA + Kandidaten | API, Bulk-TSV/CSV | Commission Decision 2011/833/EU (frei mit Attribution) | Indirekt — LFS (Labour Force Survey) nach NACE/ISCO |
| **CEDEFOP Skills Forecast** | EU-27 | Interaktiv + CSV-Export | CEDEFOP Terms (frei mit Attribution) | Ja — Skills-Forecast adressiert Technologie-Impact |
| **WEF Future of Jobs Report** | ~50 Länder (survey-basiert) | PDF + Datentabellen | CC BY-NC-ND 4.0 | Ja — Kern-Quelle für Disruption-Erwartungen |

---

## Länder-Matrix (Top-20)

### OECD-Kern (hohe Datenqualität erwartet)

| # | Land | Behörde(n) | URL | Format | Lizenz | KI-Bezug |
|---|---|---|---|---|---|---|
| 1 | **DE** | Bundesagentur für Arbeit, Destatis, IAB | statistik.arbeitsagentur.de, destatis.de, iab.de | CSV, XLSX, API (Destatis GENESIS) | DL-DE BY 2.0 (frei mit Attribution) | IAB publiziert "Substituierbarkeitspotenzial" — direkt AI/Automation-relevant |
| 2 | **US** | Bureau of Labor Statistics (BLS), O*NET | bls.gov, onetonline.org | CSV, API, Bulk-Files | US-Government Works (gemeinfrei) | O*NET liefert "Work Activities" → Basis für Felten/Frey/Osborne-Scores |
| 3 | **UK** | Office for National Statistics (ONS) | ons.gov.uk | CSV, API | OGL v3 (Open Government Licence) | ONS-Studie "The probability of automation" (2019) |
| 4 | **FR** | DARES, France Travail (ex-Pôle emploi), INSEE | dares.travail-emploi.gouv.fr, francetravail.fr, insee.fr | CSV, API | Etalab Open Licence 2.0 | France Stratégie + DARES publizieren regelmäßig zu "transformation numérique" |
| 5 | **JP** | MHLW, MIC Statistics Bureau (e-Stat) | mhlw.go.jp, e-stat.go.jp | CSV, Excel, API | Government of Japan Standard Terms of Use (CC BY 4.0 kompatibel) | METI/RIETI-Studien zu Automation, nicht MHLW-Kern |
| 6 | **CA** | Statistics Canada, ESDC | statcan.gc.ca, jobbank.gc.ca | CSV, API | Statistics Canada Open Licence | StatCan hat AI-Exposure-Indexierung auf NOC-Basis (2023) |
| 7 | **AU** | Jobs and Skills Australia, ABS | jobsandskills.gov.au, abs.gov.au | CSV, API | CC BY 4.0 | JSA publiziert "AI and the Australian labour market" (2024) |
| 8 | **ES** | SEPE, INE | sepe.es, ine.es | CSV, XLSX, API (INE) | Aviso Legal INE (frei mit Attribution) | Indirekt — EPA (Encuesta Población Activa) |
| 9 | **IT** | ANPAL, ISTAT, INAPP | anpal.gov.it, istat.it, inapp.gov.it | CSV, API (I.Stat) | CC BY 3.0 IT | INAPP-Studien zu "rischio automazione" |
| 10 | **NL** | CBS, UWV | cbs.nl, uwv.nl | CSV, API (StatLine OData) | CBS Open Data | CBS hat "Risico op automatisering"-Erhebung |
| 11 | **SE** | SCB, Arbetsförmedlingen | scb.se, arbetsformedlingen.se | CSV, API (PxWeb) | CC0 1.0 | Arbetsförmedlingen "Yrkeskompassen" inkl. Digitalisierungsrisiko |
| 12 | **KR** | KOSIS, KEIS | kosis.kr, keis.or.kr | CSV, Excel, API (KOSIS) | KOGL Type 1 (frei mit Attribution) | KEIS publiziert AI-Impact-Reports (koreanisch) |
| 13 | **CH** | SECO, BFS | seco.admin.ch, bfs.admin.ch | CSV, API | OGD CH (frei mit Attribution) | BFS hat Digitalisierungs-Indikatorensystem |
| 14 | **AT** | AMS, Statistik Austria | ams.at, statistik.at | CSV, API (OGD Austria) | CC BY 4.0 | AMS "Qualifikationsbarometer" mit Technologie-Komponente |
| 15 | **MX** | INEGI, STPS (ENOE) | inegi.org.mx, stps.gob.mx | CSV, API | Términos de Libre Uso INEGI (frei mit Attribution) | Kein dediziertes AI-Framework, ENOE-Rohdaten verfügbar |

### Schwellenländer / Rest der Welt (Datenqualität variabel)

| # | Land | Behörde(n) | URL | Format | Lizenz | KI-Bezug |
|---|---|---|---|---|---|---|
| 16 | **BR** | IBGE, Ministério do Trabalho (CAGED/RAIS) | ibge.gov.br, gov.br/trabalho | CSV, API (SIDRA) | Creative Commons BR (frei mit Attribution) | IPEA-Studien (Think-Tank), nicht Ministerium direkt |
| 17 | **IN** | MOSPI (PLFS), Ministry of Labour | mospi.gov.in, labour.gov.in | PDF-Report + Unit-Level-Microdata (Anfrage) | Government of India Open Data Licence (CC BY 4.0) | NITI Aayog AI-Strategie-Dokumente, keine Arbeitsmarkt-spezifische Metrik |
| 18 | **CN** | National Bureau of Statistics (NBS) | stats.gov.cn | Jahrbücher (PDF), begrenzt CSV, kaum API | Restriktiv, inoffiziell | Kein offenes AI-Impact-Framework |
| 19 | **ID** | BPS (Statistics Indonesia) | bps.go.id | CSV, XLSX, API | Free-to-use mit Attribution | Sakernas (Labour Force Survey) — kein AI-Bezug |
| 20 | **ZA** | Statistics South Africa, DEL | statssa.gov.za, labour.gov.za | XLSX, PDF, begrenzt API | StatsSA-Terms (frei mit Attribution) | QLFS-Daten, kein AI-Framework |

---

## Erkenntnisse aus Matrix-V0.1

**1. Keine einheitliche "AI-Exposure"-Metrik weltweit.**
Nur ca. 6–8 Länder (DE/IAB, UK/ONS, CA/StatCan, AU/JSA, NL/CBS, SE, FR, + OECD-übergreifend) publizieren eigene, staatlich autorisierte KI-Automatisierungs-Indizes. Alle anderen liefern "nur" Beschäftigungs-/Berufsdaten.

**2. Mapping-Strategie ist unausweichlich.**
Der Dashboard-Score muss ein **mehrschichtiges Modell** werden:
- **Schicht A (primär):** Nationaler Index, wenn verfügbar (priorisieren)
- **Schicht B (fallback):** OECD Exposure Score × nationale Beschäftigungsstruktur
- **Schicht C (letzter fallback):** ILO-Schätzung × ISCO-Mapping

Pro Land muss transparent gemacht werden, welche Schicht greift → direkte Anknüpfung ans Bias-Transparency-Konzept (Item 99 Punkt 4).

**3. Lizenz-Situation ist überwiegend gutmütig.**
Fast alle OECD-Länder nutzen CC-BY-kompatible oder vergleichbare offene Lizenzen. Attribution-Pflicht als einziges wiederkehrendes Muster.
**Ausnahme:** WEF (NC-ND), CN (keine klare offene Lizenz), IN Microdata (formeller Antragsprozess).

**4. Format-Heterogenität ist der echte Aufwand.**
15 der 20 Länder haben eine API; 5 liefern nur Bulk-Dateien oder PDF. Für Phase-2-MVP realistisch: **Zielstart 8 Länder mit API-Zugang** (DE, US, UK, FR, CA, NL, SE, AU), Rest nachziehen.

---

## Entschieden

### 2026-05-01 · MVP-Zielmenge = 8 API-Länder

Startmenge für die erste umsetzbare Iteration: **DE, US, UK, FR, CA, NL, SE, AU**.
Auswahlkriterium: dokumentierter API-Zugang + offene Lizenz + (überwiegend) eigener nationaler KI-Exposure-Index. Restliche 12 Länder der Matrix werden in späteren Iterationen nachgezogen.

---

## Offene TODOs (vor Umsetzung zu klären)

### TODO-1 · Beruf-Taxonomie — ENTSCHIEDEN 2026-05-01

**Gewählt: Option β — Pure ISCO-08 auf 4-digit-Ebene (436 Unit Groups)** für MVP.

**Architektur:**
- Master-Liste in `data/career/taxonomy.json` mit ISCO-08-Codes (4-digit) als Primärschlüssel
- Alle 8 nationalen Datensätze rollen auf ISCO-08 hoch (Mapping-Logik im Bundle-Script `scripts/bundle-career-data.js`)
- Cross-Country-Vergleich (Kern-UX "Land anklicken und Daten sehen") funktioniert per Default
- Granularität reicht für reale Differenzierungen (z. B. Pflegehelfer / Krankenpfleger / Pflegefachkraft)

**Upgrade-Pfad (v2): Option δ — Search-Aliase**
ISCO-Einträge bekommen optional `"aliases": {"de": [...], "fr": [...]}` für native Begriffssuche. Display bleibt ISCO. Inkrementell pro Land hinzufügbar, ohne Datenarchitektur zu brechen.

**Aussortierte Alternativen** (in Optionen-Diskussion 2026-05-01 dokumentiert):
- α (3-digit ISCO, 130 Minor Groups) — zu grob, "Pflegekraft" und "Hebamme" verschmelzen
- γ (volle nationale Crosswalks) — 8 Pflegeobjekte, doppelter UI-Modus, FR/ROME-Mapping fragil; nicht für absehbare Zukunft
- ε (Hybrid mit Toggle) — overengineered für MVP

**Konsequenz für Bundle-Script:**
- Pro Land braucht es eine ISCO-Mapping-Logik (NL/SE direkt, UK/US/CA/AU offiziell, DE/FR mit Qualitäts-Vorbehalt)
- Mappings werden im Script materialisiert, nicht zur Laufzeit berechnet

---

### TODO-2 · Update-Rhythmus — ENTSCHIEDEN 2026-05-01

**Gewählt: Option I — Jährlich (1× pro Jahr)** für MVP.

**Architektur:**
- Bundle-Script `scripts/bundle-career-data.js` läuft einmal pro Jahr nach den großen Report-Zyklen (WEF Future of Jobs Q1, OECD Employment Outlook Q3 — Termin nach Veröffentlichungslage)
- Prominenter "Stand: Monat YYYY"-Timestamp in der UI, plus Quellenliste mit Jahreszahlen ("Quellen: WEF 2025, OECD Employment Outlook 2025, IAB-Studie 2024")
- Jährliche Kadenz spiegelt die Realität der Score-Datenbasis (AI-Exposure-Studien sind selten häufiger als jährlich)

**Begründung:**
- Score ist das Kern-Deliverable; sein Datenfundament ist inhärent jährlich → höhere Kadenz produziert Schein-Aktualität
- Solo-Betrieb-Realität: zuverlässiger jährlicher Lauf > unzuverlässiger quartalsweiser Lauf
- Bias-Transparency-Konzept (Item 99 Punkt 4) wird durch sichtbaren Jahres-Stand gestützt

**Aussortierte Alternativen** (in Optionen-Diskussion 2026-05-01 dokumentiert):
- II (Halbjährlich) — Aufwandsverdopplung für oft minimale Score-Differenz
- III (Quartalsweise) — Schein-Aktualität, erzwingt CI-Automation früher als nötig
- IV (Monatlich) — Mismatch zwischen Headline-Daten und Score-Lag, ohne CI nicht leistbar
- V (Event-getrieben) — verlockend, aber inkompatibel mit späterem CI-Automation-Pfad aus TODO-3

**Upgrade-Pfad (v2): Option VI — Hybrid**
Score-Bundle jährlich + Headline-Layer (Top-Berufe, Arbeitslosenquote, Kurz-Trends) quartalsweise. Additiv ohne MVP-Bruch — eine zweite Bundle-Pipeline kann später hinzugefügt werden, sobald nachweisbare Nachfrage existiert. UI muss dann zwei Timestamps sauber kommunizieren.

---

### TODO-3 · Datenarchitektur — ENTSCHIEDEN 2026-05-01

**Gewählt: Option A — Build-Time-Bundle**, analog zum bestehenden Incident-Pattern (`scripts/bundle-incidents.js`).

**Architektur:**
- Lokales Node-Script `scripts/bundle-career-data.js` zieht die 8 nationalen APIs (DE/US/UK/FR/CA/NL/SE/AU)
- Schreibt `data/career/{land}.json` pro Land + `data/career/index.json` als Manifest
- Nutzt das gleiche `?v=`-Cache-busting-Pattern wie Incidents/Radar
- Manueller Lauf vor Updates, JSONs werden committed → Git-versionierte Daten-Evolution

**Aussortierte Alternativen** (in Optionen-Diskussion 2026-05-01 dokumentiert):
- B (CI-Automation) — sinnvoll als Upgrade-Pfad nach 2–3 stabilen manuellen Läufen, nicht für MVP
- C (Manuelle Kuration) — möglich für editorial Anmerkungen, nicht als Primärquelle
- D (Aggregator-API client-seitig) — Plan-B, falls Schicht-A-Daten zu heterogen
- E (Hybrid) — zu komplex für Solo-Betrieb
- Pure client-side fetch — CORS-Killer (DE Bundesagentur, JP MHLW blockieren)
- Eigener Backend-Proxy — bricht "kein Backend"-Prinzip

**Konsequenz für TODO-2:** Update-Rhythmus = Lauf-Rhythmus des Bundling-Scripts. Wenn jährlich, läuft das Script jährlich. Wenn quartalsweise, quartalsweise.

**Konsequenz für TODO-1:** Beruf-Taxonomie wird im Bundle-Script materialisiert — Crosswalks (falls beschlossen) als statische Lookup-Tables in `data/career/taxonomy.json`.

---

*Dokument erstellt: 2026-04-21*
*Version: 0.1 (Arbeitsstand)*
*Status: Ideensammlung, keine Umsetzungsfreigabe — Matrix-Einträge ungeprüft, URLs und Lizenzen vor Umsetzung verifizieren*
