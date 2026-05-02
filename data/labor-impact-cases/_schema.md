# Labor-Impact-Cases — JSON-Schema (V0.1)

**Zweck:** Pro Datei = ein konkret gemeldeter Stellenabbau- oder Stellenschaffungs-Fall mit dokumentiertem KI-Bezug. Aggregation in `data/labor-impact-aggregate.json` per `scripts/bundle-labor-cases.js`.

**Datei-Naming:** `{firma-slug}-{jahr}-{kontext-slug}.json`, z. B. `sap-2024-konzernumbau.json`.

**Encoding:** UTF-8 (no BOM). Umlaute korrekt (ä/ö/ü/ß), nicht ae/oe/ue/ss — Konvention aus CLAUDE.md.

---

## Pflicht-Felder

| Feld | Typ | Beschreibung |
|---|---|---|
| `company` | string | Firmenname (Markenname, wie in der Presse genannt). |
| `country` | string | ISO-3166-Alpha-2 (`DE`, `US`, `FR`, `SE`, ...). |
| `industry` | string | Branche, freier Text (z. B. "Software", "Customer Service", "Medien"). |
| `date_announced` | string | ISO-Datum (`YYYY-MM-DD`) der ersten öffentlichen Ankündigung. |
| `headcount_affected` | number | Anzahl betroffener Stellen (Stellenabbau positiv, Schaffung als negativ — siehe `direction`). |
| `direction` | string | `"reduction"` oder `"creation"`. Default: `reduction`. |
| `ai_cited` | boolean | Wurde KI/AI in offiziellen Quellen explizit als Grund/Faktor genannt? |
| `ai_attribution_strength` | number 1-5 | Stärke der KI-Zuschreibung (siehe Skala unten). |
| `ai_quote_de` | string | Originalzitat (oder pointierte Zusammenfassung) auf Deutsch, was die Quelle zur KI-Rolle sagt. |
| `ai_quote_en` | string | Englische Übersetzung des Zitats. |
| `sources` | array | Mind. 2 unabhängige Quellen mit `name`, `url`, `date`, optional `paywall: true`. |
| `verification_level` | number 1-4 | Analog Incident-Schema (1 = Einzelquelle, 4 = mehrere Tier-1-Quellen). |
| `added` | string | Datum der Aufnahme (`YYYY-MM-DD`). |
| `added_by` | string | `"AIStrikeMap (kuratiert)"` oder `"Crowdsourcing (Issue #N)"`. |

## Optionale Felder

| Feld | Typ | Beschreibung |
|---|---|---|
| `headquarters_city` | string | Sitz des Unternehmens. |
| `isco_categories` | string[] | ISCO-08-Codes (4-digit) der primär betroffenen Berufe. Vorbereitung für Career Dashboard Cross-Reference. |
| `date_expanded` | string | Datum, an dem ein bestehendes Programm ausgeweitet wurde. |
| `date_completed` | string | Datum des Programm-Abschlusses (falls bekannt). |
| `headcount_initial` | number | Ursprüngliche Ankündigungs-Zahl, falls später ausgeweitet. |
| `headcount_germany` | number | Anteil Deutschland (für DE-spezifische Aufschlüsselung). |
| `net_workforce_change` | string | `"reduction"`, `"stable"`, `"growth"` — Gesamt-Headcount-Effekt nach Programm. Macht den Bagger-Hebel sichtbar (z. B. SAP: 10k abgebaut, aber Gesamt stable durch KI-Neueinstellungen). |
| `context_de` / `context_en` | string | Zusätzlicher Kontext, der das Zitat einordnet. |
| `related_radar` | string | ID einer verknüpften Radar-Situation, falls thematisch passend. |
| `related_incidents` | string[] | IDs verknüpfter Incidents. |

---

## AI-Attribution-Stärke-Skala

Die Stärke entscheidet, ob ein Case in den Aggregat-Counter "konkret realisiert" eingeht.

| Stärke | Kriterium | Beispiel | Counter? |
|---|---|---|---|
| **5** | KI als **Hauptgrund** offiziell genannt. CEO/Pressemitteilung sagt: "Wir ersetzen X durch KI." | Klarna 2024 (700 Customer-Service durch Chatbot), Onclusive 2024 (217 Stellen durch KI ersetzt) | ✅ ja |
| **4** | KI als **einer von mehreren** Gründen offiziell/in Wirtschaftspresse genannt. Konzernumbau "macht Platz für KI", "fokussiert auf KI". | SAP 2024 (10.000 Stellen, "Konzernumbau für KI-Geschäft", CEO-Statements zu KI als Treiber) | ✅ ja |
| **3** | Restrukturierung in stark KI-betroffener Branche **ohne expliziten KI-Grund**, aber Zeitpunkt + Branche + Tätigkeitsprofil legen KI als Faktor nahe. | Tech-Layoffs 2023-2024 ohne expliziten KI-Grund, Customer-Service-Reduktion ohne KI-Erwähnung | ❌ nein, aber gelistet |
| **2** | Allgemeine Restrukturierung in KI-Adoptions-Branche. | Konsolidierungs-Wellen ohne Tätigkeits-Spezifität | ❌ nein, aber gelistet |
| **1** | Wirtschaftliche Restrukturierung **ohne KI-Bezug** (z. B. E-Mobilitäts-Wende, China-Konkurrenz, Konjunktur). | VW 35.000, Bosch 12.000, ZF 14.000 — primär andere Treiber | ❌ nein, **nicht** in Liste (gehört nicht hierher) |

**Wichtig:** Stärke 1 wird nicht aufgenommen — Cases mit primär anderen Treibern verfälschen die Aussage. Stärke 2-3 erscheinen in der Detail-Liste mit deutlicher Markierung "Restrukturierungs-Kontext, KI nicht offiziell als Grund".

---

## Beispiel: Minimaler Case (Klarna)

```json
{
  "company": "Klarna",
  "country": "SE",
  "industry": "Fintech",
  "date_announced": "2024-02-27",
  "headcount_affected": 700,
  "direction": "reduction",
  "ai_cited": true,
  "ai_attribution_strength": 5,
  "ai_quote_de": "Klarna gibt an, dass ein KI-Chatbot die Arbeit von 700 Customer-Service-Mitarbeitern in einem Monat erledigt hat.",
  "ai_quote_en": "Klarna states that an AI chatbot has performed the work of 700 customer service agents in one month.",
  "sources": [
    { "name": "Klarna Press Release", "url": "https://www.klarna.com/...", "date": "2024-02-27" },
    { "name": "Reuters", "url": "https://www.reuters.com/...", "date": "2024-02-28" }
  ],
  "verification_level": 4,
  "added": "2026-05-01",
  "added_by": "AIStrikeMap (kuratiert)"
}
```

---

## Workflow neuer Case

1. Recherche: Mind. 2 unabhängige Quellen, mind. eine journalistische (kein Pure-PR).
2. Datei anlegen: `data/labor-impact-cases/{firma-slug}-{jahr}-{kontext}.json`.
3. AI-Attribution-Stärke kritisch einstufen — Cases im Zweifel niedriger einordnen.
4. `node scripts/bundle-labor-cases.js` laufen lassen → erzeugt aktualisiertes `data/labor-impact-aggregate.json`.
5. Commit + Push.

## Crowdsourcing-Pfad (geplant, eigener Slot)

GitHub Issue Template `.github/ISSUE_TEMPLATE/ki-entlassung-melden.yml` mit Pflichtfeldern: Firma, Land, Datum, Anzahl, mind. 1 Quellen-URL, AI-Zitat. Issue wird review't, in JSON konvertiert, committet.

---

*Schema-Doku V0.1 · 2026-05-01 · Konzept-Quelle: docs/planung/phase-2-labor-impact-cases.md*
