# Incident-Candidate Schema

Format aller Dateien in `data/incident-candidates/*.json`. Eine Datei =
ein Array von Kandidaten-Einträgen.

## Beispiel

```jsonc
[
  {
    "candidate_id": "brazil-sao-paulo-smart-sampa-2024",
    "discovered_at": "2026-06-01T14:32:00Z",
    "researcher": "agent-research-latam-round-1",
    "round": "round-1-2026-06-01",
    "status": "candidate",
    "candidate_data": {
      "name_de": "Brasilien: Smart Sampa — São Paulos KI-Überwachungsnetzwerk diskriminiert nach Hautfarbe",
      "name_en": "Brazil: Smart Sampa — São Paulo's AI surveillance network shows racial bias",
      "startDate": "2024-04",
      "location": {
        "name_de": "São Paulo, Brasilien",
        "name_en": "São Paulo, Brazil",
        "country": "BR",
        "lat": -23.5505,
        "lng": -46.6333
      },
      "incidentType": ["surveillance", "discrimination", "facial-recognition"],
      "candidate_severity": 3,
      "candidate_verification": 3,
      "description_de": "Die Stadt São Paulo startete 2024 das Smart-Sampa-Programm: 20.000 KI-Kameras mit Gesichtserkennung in öffentlichen Räumen. NGOs dokumentieren überproportional viele Falsch-Identifikationen schwarzer Bürger:innen; ein Gerichts-Urteil 2024 begrenzt den Einsatz vorübergehend, bevor die Polizei das System neu ausrollt.",
      "description_en": "The city of São Paulo launched the Smart Sampa programme in 2024: 20,000 AI-equipped facial-recognition cameras in public spaces. NGOs document a disproportionate number of false identifications of Black citizens; a 2024 court ruling temporarily restricts the system before police re-deploy it.",
      "actors": [
        {
          "name": "Stadtverwaltung São Paulo (Prefeitura de São Paulo)",
          "type": "government",
          "systems": ["Smart Sampa"]
        }
      ],
      "sources": [
        {
          "url": "https://example.com/aclu-brazil-2024-report",
          "title": "Smart Sampa Bias Report",
          "publisher": "ACLU Brazil partnership",
          "date": "2024-09",
          "type": "ngo-report"
        },
        {
          "url": "https://example.com/folha-de-sao-paulo-2024",
          "title": "Câmeras com IA falham mais com pretos",
          "publisher": "Folha de São Paulo",
          "date": "2024-08-15",
          "type": "news-article"
        }
      ]
    },
    "researcher_notes": "Confidence high für Existenz des Programms (mehrere Bestätigungen), medium für Bias-Quantifizierung (NGO-Studie, keine peer-reviewed Quelle gefunden). Court-Urteil-Datum nachrecherchieren.",
    "dedup_hint": "smart sampa | sao paulo | facial recognition | 2024"
  }
]
```

## Pflichtfelder

| Feld | Typ | Hinweis |
|---|---|---|
| `candidate_id` | string | Slug, eindeutig im Round-Scope. |
| `discovered_at` | ISO 8601 | UTC. |
| `researcher` | string | Agent-ID oder Mensch-Identifier. |
| `round` | string | `round-{N}-{YYYY-MM-DD}` |
| `status` | enum | siehe `_README.md` |
| `candidate_data.name_de` | string | Display-Name DE, mit echten Umlauten. |
| `candidate_data.name_en` | string | Display-Name EN. |
| `candidate_data.startDate` | string | ISO-Datum (`YYYY`, `YYYY-MM` oder `YYYY-MM-DD`). |
| `candidate_data.location.country` | string | ISO 3166-1 alpha-2. |
| `candidate_data.location.name_de/en` | string | Display. |
| `candidate_data.description_de` | string | 2–4 Sätze. |
| `candidate_data.description_en` | string | 2–4 Sätze. |
| `candidate_data.incidentType` | array | Subset aus dem CLAUDE.md-Vokabular. |
| `candidate_data.sources` | array | Mind. 1 Eintrag mit fetchbarem `url`. |
| `researcher_notes` | string | Confidence + Lücken benennen. |
| `dedup_hint` | string | Pipe-getrennte Stichwörter für Dedup. |

## Optional aber empfohlen

| Feld | Hinweis |
|---|---|
| `candidate_data.location.lat/lng` | Geo für Map; sonst beim Promote nachholen. |
| `candidate_data.candidate_severity` | 1–5; Researcher-Schätzung. |
| `candidate_data.candidate_verification` | 1–4; Researcher-Schätzung der Belegdichte. |
| `candidate_data.actors[]` | Mind. ein Hauptakteur. |

## Incident-Type-Vokabular

Aus CLAUDE.md `asm:incidentType`:

`surveillance`, `predictive-policing`, `autonomous-weapons`, `discrimination`,
`deepfakes`, `data-misuse`, `military-ai`, `facial-recognition`, `censorship`,
`labor-exploitation`, `political-pressure`

## Source-Type-Vokabular

`news-article`, `research-paper`, `ngo-report`, `government-document`,
`court-filing`, `legal-ruling`, `regulatory-decision`, `encyclopedia`,
`analysis`, `whistleblower-document`
