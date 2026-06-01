# Career-Dashboard Layer-A Sources — Schema

Format aller `data/career/sources/{cc}-{provider}.json`-Dateien (z.B. `de-iab.json`, `us-bls.json`).

Diese Dateien sind die normalisierte Eingangsschicht für `loadLayerA()` im Bundle-Script
(`scripts/bundle-career-data.js`, MVP Step 2). Pro Land + Provider eine Datei.
Das Bundle-Script aggregiert dann Layer A + B + C zu Per-Land-Bundles.

## Schema

```jsonc
{
  // Pflicht: ISO-3166-1-alpha-2 Country-Code (in Großbuchstaben).
  "country": "DE",

  // Pflicht: Quellenname wie er in der Methodik-Page angezeigt wird.
  "source": "IAB Substituierbarkeitspotenzial",

  // Pflicht: SPDX-kompatibler Lizenzcode oder Long-Name der Quell-Lizenz.
  // Aus career-dashboard-recht.md übernehmen.
  "license": "DL-DE BY 2.0",

  // Pflicht: stabile Quell-URL (Institution oder Reihe).
  "url": "https://iab.de/...",

  // Pflicht: Methodik-Beschreibung (kurz). Wird in das Frontend-Detail-Panel
  // und das Bundle-Manifest übernommen.
  "methodology": "Anteil ersetzbarer Tätigkeiten (IAB-Forschungsbericht 23/2025)",

  // Pflicht: ISCO-Revision der `isco`-Codes in `data[]`.
  // Falls die Quelle nativ in einer anderen Klassifikation steht (z.B. KldB,
  // SOC, ROME), MUSS sie vorher zu ISCO-08 4-digit gemappt werden — das
  // Bundle-Script erwartet ISCO-08 als Schlüssel.
  "isco_revision": "ISCO-08",

  // Optional: Hinweis auf das Crosswalk-Verfahren (falls Quelle nativ
  // andere Klassifikation verwendet). Reine Doku — nicht maschinenlesbar.
  "crosswalk_note": "IAB-KldB-2010 → ISCO-08 via destatis-Crosswalk (...).",

  // Optional: Edition/Version-Vermerk der Quelle (Report-Nummer, Jahrgang,
  // Bulk-CSV-Snapshot-Datum) für Reproduzierbarkeit.
  "edition": "Forschungsbericht 23/2025",

  // Pflicht: Liste der Daten-Einträge. Reihenfolge egal.
  // Leeres Array ist erlaubt — Loader liefert dann konsistent null zurück.
  "data": [
    {
      // Pflicht: 4-digit-ISCO-08-Code als String (führende Nullen erhalten).
      "isco": "2211",
      // Pflicht: Erhebungsjahr (Integer).
      "year": 2025,
      // Pflicht: Score zwischen 0.0 und 1.0 (Anteil ersetzbarer Tätigkeiten
      // bzw. AI-Exposure, je nach Quelle — siehe `methodology`).
      "value": 0.16,
      // Optional: Pro-Datapoint-URL (z.B. konkreter Tabellen-Link, Job-Futuromat-
      // Seite). Bundle-Script übernimmt sie in das Quellen-Manifest.
      "url": "https://job-futuromat.iab.de/...",
      // Optional: Pro-Datapoint-Notiz. Wird vom Bundle-Script ignoriert,
      // bleibt aber für menschliche Review-Schritte erhalten.
      "note": "Berufsgruppe-Durchschnitt; KldB 8113."
    }
  ]
}
```

## Loader-Vertrag

```js
const src = loadLayerASource('DE');
// → { country, source, license, url, methodology, isco_revision, data: [...] }

loadLayerA('DE', '2211', 2025);
// → { layer: 'A', name, license, url, methodology, value, year } | null
//   Exakter Match auf isco + year. Kein Jahres-Fallback im MVP.

loadLayerA('DE', '2211', 2019);
// → null (auch wenn 2025 vorhanden)

loadLayerA('XX', '2211', 2025);
// → null (unbekanntes Land)
```

## Provider-Plan (Stand Step 2)

Pro MVP-Land ein Provider; Crosswalk passiert beim Dateieintrag, nicht zur Laufzeit.

| Land | Datei                  | Provider                         | Quell-Klassifikation | Status |
|------|------------------------|----------------------------------|----------------------|--------|
| DE   | `de-iab.json`          | IAB Substituierbarkeitspotenzial | KldB 2010            | Schema + 1 Beispiel |
| US   | `us-bls.json`          | BLS Employment Projections / O*NET | SOC 2018            | TODO |
| UK   | `uk-ons.json`          | ONS Probability of Automation (2019, stale) | SOC 2010 | TODO |
| FR   | `fr-dares.json`        | DARES — IA et travail            | PCS 2020             | TODO |
| CA   | `ca-statcan.json`      | StatCan AI Occupational Exposure | NOC 2021             | TODO |
| NL   | `nl-cbs.json`          | CBS AI-monitor / SER             | ISCO-08              | TODO |
| SE   | `se-arbetsformedlingen.json` | Arbetsförmedlingen Yrkeskompassen | SSYK 2012      | TODO |
| AU   | `au-jsa.json`          | Jobs and Skills Australia        | ANZSCO 1.3           | TODO |

## Hinweise zur Daten-Kuration

- **Daten füllen ist eigenständiger Schritt** — pro Land typisch 1 Session.
  Vollimport bedeutet ~80 ISCO-Codes × Verfügbare-Jahre × Cross-Walk.
- **Crosswalk-Qualität dokumentieren** — wenn 1 KldB-Code zu mehreren ISCO-Codes
  mappt oder umgekehrt, im `crosswalk_note` festhalten und ggf. mehrere
  `data[]`-Einträge mit `note` pro Mapping einfügen.
- **Lücken sind OK** — fehlende ISCO × year-Kombinationen sind im
  Bandbreiten-Modell vorgesehen (Schicht-B/C-Fallback, `noNationalData`-Flag).
- **Keine Schätzwerte committen** — wenn ein konkreter Wert nicht aus der
  Quelle hervorgeht, weglassen. Frontend zeigt dann ehrlich "keine
  nationale Datenpunkt" statt fabrizierter Zahlen.
