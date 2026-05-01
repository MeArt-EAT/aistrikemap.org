# Career Dashboard – Rechtliche Prüfung (V0.1)

**Kontext:** Arbeitsdokument für Item 99 (Konzeptphase Career Dashboard), Punkt 5 *Rechtliche Prüfung*. Schwesterdokumente: [Datenquellen-Matrix](career-dashboard-datenquellen-matrix.md), [Score-Methodik](career-dashboard-score-methodik.md), [Bias-Transparency](career-dashboard-bias-transparency.md), [UX/UI-Konzept](career-dashboard-ux-konzept.md).

**Zweck:** Lizenz-Pflichten, Haftungs-Risiken und Compliance-Anforderungen festlegen — bevor das Modul live geht.

**Disclaimer:** Diese Dokumentation ist eine **redaktionelle Risiko-Einschätzung**, keine Rechtsberatung. Bei kommerzieller Nutzung oder Skalierung sollte juristisches Review folgen. AIStrikeMap ist nicht-kommerziell (siehe Lizenz-Profil unten) — Risiko ist entsprechend niedrig.

---

## ENTSCHIEDEN 2026-05-01 · Sechs-Bereiche-Konzept

### Bereich 1 · Quellenattribution

Aus der [Datenquellen-Matrix](career-dashboard-datenquellen-matrix.md) ergeben sich Attribution-Pflichten. Praktische Umsetzung in zwei Ebenen:

**Ebene 1 — Pro Datenpunkt (UI-Tooltip + Detail-Panel-Quellenliste):**
Bereits in Punkt 2/4 vorgesehen. Quellen-Name + Jahr + Methodik-Kurztext + Link zur Originalquelle pro Score-Wert.

**Ebene 2 — Auf der Methodik-Page (`methodik-career.html`):**
Vollständige Lizenz-Hinweise pro Datenquelle, formatiert nach den jeweiligen Anforderungen. Standard-Block:

```
Quelle: <Name>
Herausgeber: <Behörde / Organisation>
Lizenz: <Lizenz-Name + Link>
Zugriff: <Datum>
Zitiervorschlag: <Zitat-Format>
```

**Lizenz-Spezifika** (aus Matrix konsolidiert):

| Lizenz | Quellen | Attribution-Anforderung |
|---|---|---|
| CC BY 4.0 / CC BY 3.0 | ILO ILOSTAT, AT Statistik Austria, IT ISTAT, ZA StatsSA u. a. | Name + Link + Lizenz nennen |
| OGL v3 (UK) | UK ONS | Standard-Boilerplate von gov.uk übernehmen |
| US Government Works | US BLS, US O*NET | Public Domain — Attribution empfohlen, nicht Pflicht |
| Etalab Open Licence 2.0 | FR DARES, INSEE | Quellen-Nennung + Datum |
| DL-DE BY 2.0 | DE Bundesagentur, Destatis | Spezifische Boilerplate, von dl-de.de übernehmen |
| OECD Terms & Conditions | OECD Daten | Frei für nicht-kommerzielle Nutzung mit Attribution |
| Statistics Canada Open Licence | CA StatCan | Standard-Statement übernehmen |
| Aviso Legal INE / Términos INEGI | ES INE, MX INEGI | Quellen-Nennung |
| KOGL Type 1 (KR) | KR KOSIS, KEIS | Quelle + Lizenz nennen |
| OGD Austria / OGD CH | AT, CH | CC-BY-kompatibel |
| Government of India OGDL | IN MOSPI | CC BY 4.0 kompatibel |
| Free-to-use mit Attribution | ID BPS, BR IBGE u. a. | Quellen-Nennung |

### Bereich 2 · Haftungsausschluss

Risiko-Profil: Nutzer trifft auf Basis des Dashboards Berufsentscheidungen → erweist sich als ungünstig → reklamiert.

In DE/EU keine spezifische Berufsberatungs-Lizenz erforderlich (Berufsberatung ist nicht-reguliert, außer in spezifischen Heilberufen). Risiko ist primär **Reputations-** und **journalistisches Sorgfalts**-Risiko, nicht juristisches.

**Standard-Disclaimer (i18n-Key `career.legal.disclaimer`):**

```
DE: "AIStrikeMap zeigt veröffentlichte Forschungs- und Statistikdaten 
zur Auswirkung von KI auf Arbeitsmärkte. Die Darstellungen sind eine 
journalistische Synthese und stellen keine individuelle Berufs-, 
Karriere- oder Investitionsberatung dar. Für Berufsentscheidungen 
empfehlen wir die Konsultation einer qualifizierten Beratung."

EN: "AIStrikeMap presents published research and statistical data 
on the impact of AI on labor markets. The visualizations are 
a journalistic synthesis and do not constitute individual career 
or investment advice. For career decisions, we recommend consulting 
a qualified advisor."
```

Platzierung: prominent in `methodik-career.html` (eigener Abschnitt am Ende), zusätzlich kompakt im Footer der `career.html` als Linkziel ("Hinweis zu Berufsentscheidungen").

### Bereich 3 · Lizenz-Sonderfälle

#### WEF Future of Jobs (CC BY-NC-ND 4.0)

**ND = No Derivatives.** Aggregation in eigene Bandbreite wäre technisch ein Derivat → Lizenz-Bruch.

**Entscheidung:** WEF wird **nicht in das 3-Schichten-Score-Modell aufgenommen**. WEF erscheint ausschließlich als **Berichts-Bezug** in der Stand-Caption ("Quellen: WEF 2025, OECD 2025, IAB 2024") — da werden WEF-Aussagen kontextualisiert, nicht aggregiert. Konkrete WEF-Zahlen, falls sie in Editorial-Texten der Methodik-Page zitiert werden, bleiben unter dem 15-Wort-Zitat-Limit der `mandatory_copyright_requirements`.

#### China NBS — keine klare offene Lizenz

**Entscheidung:** CN-Daten **nicht im MVP**. Nachzuholen, wenn entweder NBS eine offene Lizenz publiziert oder ein verlässlicher Mittler gefunden wird (z. B. World Bank Indikatoren-Set für CN). MVP-Scoping sollte 7 statt 8 Länder vorsehen, falls CN ursprünglich gewollt war — siehe Punkt 6.

#### Indien MOSPI Microdata — formeller Antragsprozess

**Entscheidung:** IN nutzt nur die **öffentlich publizierten PLFS-Aggregate** (PDF-Reports, Tabellen). Keine Antrags-Microdata für MVP. Reduziert Granularität, vermeidet Antrags-Workflow.

### Bereich 4 · Datenschutz / Tracking

Career Dashboard verarbeitet **keine personenbezogenen Daten** (keine User-Accounts, keine Eingabe-Felder mit PII, keine serverseitige Logik). AIStrikeMap insgesamt ist GitHub-Pages-statisch — kein eigenes Tracking, kein Cookie-Banner-Bedarf.

**Restrisiko:** Externe CDN-Aufrufe (Leaflet, Chart.js, OpenStreetMap-Tiles, CartoDB-Tiles). Diese können theoretisch IPs loggen.

**Entscheidung:** Datenschutzhinweis auf der bestehenden Datenschutz-Page (falls vorhanden — sonst neu anlegen, separater Item) ergänzen um expliziten Hinweis zu den im Career-Dashboard geladenen externen Diensten (Chart.js CDN, ggf. Choropleth-GeoJSON-Quelle). Standardformulierung folgt der bestehenden AIStrikeMap-Datenschutz-Sprache.

### Bereich 5 · EU AI Act / sonstige Compliance

Career Dashboard ist **kein KI-System**. Es zeigt Daten *über* KI-Auswirkungen — eine journalistisch-redaktionelle Aussage, keine algorithmische Entscheidung über Personen. Fällt nicht unter EU AI Act (der adressiert KI-Systeme, nicht Journalismus über KI).

DSA (Digital Services Act): AIStrikeMap ist Hosting-Dienst eigener Inhalte → minimaler Anwendungsbereich, keine User-generated-Content-Pflichten.

**Entscheidung:** Keine spezifischen Compliance-Maßnahmen erforderlich für MVP. Bei späterer Skalierung (z. B. Kommentar-Funktion) erneut prüfen.

### Bereich 6 · Eigene Output-Lizenz

**Korrektur 2026-05-01:** Anders als zunächst hier angenommen, **ist** AIStrikeMap bereits explizit lizenziert. Footer aller Bestands-Pages zeigt:

> Daten: CC BY-NC-SA 4.0 | Code: AGPL-3.0

`LICENSE`-Datei im Repo-Root = AGPL-3.0.

**Entscheidung (angepasst):**

- **Career-Daten** (`data/career/*.json`): erben die bestehende Daten-Lizenz **CC BY-NC-SA 4.0**. Konsistenz mit dem restlichen Daten-Output von AIStrikeMap (Incidents, Radar). Dass die Quellen-Daten teils restriktiver lizenziert sind (z. B. WEF NC-ND), ist bereits durch die Schicht-Auswahl adressiert.
- **Code des Career-Moduls** (`js/career.js`, `css/career.css`, `js/career-chart.js`): erbt **AGPL-3.0** — automatisch durch das Repository-`LICENSE`.

Lizenz-Hinweis erscheint in `methodik-career.html` und im JSON-Manifest (`data/career/index.json`):

```json
{
  "license": "CC-BY-NC-SA-4.0",
  "attribution": "AIStrikeMap Career Impact Dashboard, https://aistrikemap.org",
  "sources": [...]
}
```

Footer-Zeile bleibt repository-weit identisch (kein Career-spezifischer Override).

---

## i18n-Strings (umsetzungs-ready)

Folgende Keys werden in `i18n/de.json` und `i18n/en.json` hinzugefügt, sobald das Modul implementiert wird:

```json
{
  "career.legal.disclaimer": {
    "de": "AIStrikeMap zeigt veröffentlichte Forschungs- und Statistikdaten zur Auswirkung von KI auf Arbeitsmärkte. Die Darstellungen sind eine journalistische Synthese und stellen keine individuelle Berufs-, Karriere- oder Investitionsberatung dar. Für Berufsentscheidungen empfehlen wir die Konsultation einer qualifizierten Beratung.",
    "en": "AIStrikeMap presents published research and statistical data on the impact of AI on labor markets. The visualizations are a journalistic synthesis and do not constitute individual career or investment advice. For career decisions, we recommend consulting a qualified advisor."
  },
  "career.legal.disclaimerLink": {
    "de": "Hinweis zu Berufsentscheidungen",
    "en": "Note on career decisions"
  },
  "career.legal.licenseLine": {
    "de": "Daten: CC BY-NC-SA 4.0 · Quellen siehe Methodik",
    "en": "Data: CC BY-NC-SA 4.0 · Sources see methodology"
  }
}
```

---

## Constraints für Punkt 6 (MVP-Scoping)

Punkt 5 erzeugt Eingaben für die finale MVP-Scope-Entscheidung:

1. **CN entfällt** für MVP → Länder-Set reduziert sich auf 7 (DE, US, UK, FR, CA, NL, SE, AU). Original-Plan war ohnehin diese 8 — CN war nicht im MVP-Set, nur in Top-20-Matrix. **Effektive MVP-Länderzahl bleibt 8.**
2. **IN nutzt nur Aggregate** → falls IN doch ins MVP genommen würde, geringere Granularität als andere Länder. Aktuell nicht im MVP — irrelevant.
3. **WEF nicht im Score-Modell** → keine Auswirkung auf Bandbreiten-Berechnung (war schon nicht so vorgesehen, jetzt explizit ausgeschlossen).
4. **Eigene Daten-Lizenz CC BY 4.0** → Bundle-Script muss Lizenz-Block in `data/career/index.json` schreiben.
5. **Methodik-Page-Inhalt** wird umfangreicher als in W-5 angedeutet — Lizenz-Hinweise pro Quelle + ausführlicher Disclaimer + Datenschutz-Verweis. Zeitaufwand für Methodik-Page-Erstellung höher kalkulieren.

---

## Was diese Entscheidung **nicht** klärt

- Konkrete Inhalte des Standard-Disclaimer-Texts in juristischer Detail-Prüfung — bleibt redaktionell, nicht juristisch geprüft
- Verhalten bei Quelldaten-Updates, die Lizenz ändern (z. B. wenn KEIS-KOSIS auf CC0 wechseln) — operationell, nicht konzeptionell
- AGPL-3.0-Konsequenzen für gedachte Erweiterungen (z. B. Embed-Widgets oder Drittanbieter-Forks) — bei Bedarf separat prüfen

---

*Dokument erstellt: 2026-05-01*
*Version: 0.1 (Arbeitsstand)*
*Status: Rechtliche Risiko-Einschätzung redaktionell entschieden — keine juristische Beratung, bei kommerzieller Nutzung Review erforderlich*
