# Übergabe Quellen-Anreicherung · 2026-05-26 (Phase 2)

**Stand:** Pre-Release-Sprint Schritt 7 (Quellen-Anreicherung) — Phase 1 abgeschlossen.

## TL;DR

16 von ursprünglich 59 Incident-Files ohne Top-Level-Quellen wurden mit jeweils 3-4 belastbaren Primärquellen ergänzt. Alle 16 hatten Verifikations-Level 4 (höchste methodische Inkonsistenz: "verifiziert" markiert aber ohne Quellenbelege). Nach Phase 1 verbleiben **43 Files mit 0 Top-Level-Quellen** (alle Verif ≤3 — methodisch weniger kritisch).

## Was passiert ist

### Erweiterungen am Link-Check-Skript

`scripts/check-links-v2.js` Whitelist für bot-blocked aber legitime Domains erweitert auf insgesamt 35+ Domains:
- UN/Government: ohchr.org, unhcr.org, who.int, un.org, ilo.org, canada.ca, gov.uk, europa.eu, eur-lex.europa.eu, priv.gc.ca, publicsafety.gc.ca, oag.state.va.us, ag.ny.gov, mass.gov, ag.ca.gov
- NGOs: amnesty.org, hrw.org, business-humanrights.org, epic.org, eff.org, accessnow.org, aclu.org, freedomhouse.org, rsf.org, icij.org, lighthousereports.com, ccla.org, stopkillerrobots.org
- Academic Publishers: science.org, wiley.com, tandfonline.com, sciencedirect.com, springer.com, jstor.org, cambridge.org, oup.com, sagepub.com, pnas.org, thelancet.com, bmj.com
- Tech-News: newscientist.com, nature.com, sciencemag.org, blog.x.com, x.com, twitter.com
- Regulator: cnil.fr, edps.europa.eu, echr.coe.int, laquadrature.net

### 16 angereicherte Files

**Batch 1 (Verif=4, Sev=5):** belarus-internet-shutdown-2020, china-ki-covid-ueberwachung, myanmar-telecom-daten-militaer, niederlande-ki-kindesgeld-skandal, australien-ki-welfare-fraud

**Batch 2 (Verif=4, Sev=4):** suedkorea-deepfake-sexualverbrechen, usa-meta-ki-mental-health-teens, usa-racial-bias-healthcare-ki, usa-tesla-autopilot-todesfaelle, frankreich-ki-olympia-ueberwachung

**Batch 3 (Verif=4, Sev=3):** irland-ki-wohlfahrt-pps, kanada-rcmp-clearview, oesterreich-ki-ams-algorithmus, ukraine-clearview-kriegseinsatz, usa-kroger-gesichtserkennung-supermarkt, usa-waymo-cruise-autonome-unfaelle

### Quellen-Mischung

Pro File 3-4 Quellen aus folgenden Kategorien:
- **Government documents** (z.B. Royal Commission Australia, OHCHR-UN, US-State AGs, OPC Canada, Irish DPC, NHTSA, FTC, California DMV)
- **Academic papers** (Science, Nature, Wiley, Taylor & Francis)
- **NGO reports** (Amnesty, HRW, Access Now, OONI, ICCL, ACLU, CCLA, Lighthouse Reports, La Quadrature du Net)
- **News articles** (NPR, CNN, Reuters, NYT, WaPo, BBC, CBC, Le Monde, Korea Times, Irish Times, Der Standard, NRC)
- **Wikipedia / Encyclopedia** (als Sekundärquelle mit eigener Quellenarbeit)

Jede Quelle ist mit `asm:linkHealth` annotiert (ok / paywall / archived).

## Repository-State

- Commit pending nach finalem Link-Check-Run
- 19 Files geändert (16 Incidents + Bundle + Script + Cache)

## Was noch offen ist

### Quellen-Anreicherung weitere Files

**Phase 2: 22 Files Verif=3 Sev=5** (höchste Schwere ohne Beleg):
- aethiopien-ki-ethnische-gewalt, irak-zello-app-isis-ueberwachung, kambodscha-chinesische-scam-compounds, pakistan-ki-blasphemie-ueberwachung, sudan-internet-shutdown-krieg, usa-ai-generated-csam

**Phase 3: 16 Files Verif=3 Sev=4:** brasilien, china-fabriken, emirate, hongkong, kolumbien, nigeria, russland-moskau, saudi-absher, spanien-ceuta, sri-lanka, uganda-huawei, uk-met-gangs, usa-ice-babel, usa-palantir, usa-predictive-chicago, sap-konzernumbau

**Phase 4: 12 Files Verif=3 Sev=3:** weitere

**Phase 5: 3 Files Verif=2:** ghana, peru, ruanda

### Andere offene Punkte

- **Incidents bilingual** (195 Files) — DE+EN-Schema-Migration noch offen
- **Original-Daten-Typos** (`fur`, `Universitaten`, `Handbuter` — separater Cleanup-Pass)
- **Neue 2025/2026 Cases** für Vervollständigung (vom User initial gewünscht)

## Methode für Phase 2-5 (nachfolgende Sessions)

Bewährter Workflow:
1. WebSearch nach Hauptaussage des Cases (Subject + Country + Year + Key-Event)
2. 3-4 belastbare Quellen auswählen: Mix Gov/NGO/Academic/News
3. URLs vorab gegen BOT_BLOCKED_DOMAINS-Whitelist prüfen oder Whitelist erweitern
4. asm:sources mit url, title, publisher, date, type, asm:linkHealth ergänzen
5. Nach jedem 5er-Batch: bundle + check-links --apply + commit + push
6. Akzeptanz-Kriterium: jedes File hat ≥2 unabhängige Primärquellen

Pro File ~5-7 Minuten Recherche + 2 Min Schreiben + 1 Min Verify = ~10 Min.
Verbleibende 43 Files = ~7-8 Stunden Arbeit (über 3-5 Sessions verteilbar).

---

*Dokument erstellt 2026-05-26 Phase 2 der Quellen-Anreicherung.*
