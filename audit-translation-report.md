# Audit: Bilinguale Incident-Migration

Datum: 2026-05-31

## Zusammenfassung

- Geprüfte Dateien: **274**
- Saubere Dateien (keine Findings): **268**
- Dateien mit Findings: **6**
- Findings insgesamt: **6**

## Findings nach Kategorie

- `dropped_proper_name`: 4
- `length_ratio`: 2

## Detail pro Datei

### australien-ki-welfare-fraud.json

- **length_ratio** @ `actors[0].name`
  - DE: `Australisches Ministerium fur Humandienstleistungen (Departm`
  - EN: `Australian Department of Human Services`
  - ratio: 0.48

### deutschland-afd-ki-bilder-bundestagswahl-2025.json

- **dropped_proper_name** @ `actors[1].name`
  - DE: `Maximilian Krah (AfD-Spitzenkandidat / EU-MdEP)`
  - EN: `Maximilian Krah (AfD lead candidate / MEP)`
  - missing-name: EU

### finnland-ki-sozialamt-diskriminierung.json

- **length_ratio** @ `actors[0].name`
  - DE: `Kela (Kansaneläkelaitos)`
  - EN: `Kela (Kansaneläkelaitos, Social Insurance Institution of Fin`
  - ratio: 2.71

### spanien-ki-arbeitsmarkt-algorithmus.json

- **dropped_proper_name** @ `timeline[2].title`
  - DE: `Offizielles Audit bestätigt Bias, EU-Datenschutzbehörde ermi`
  - EN: `Official audit confirms bias, Spanish data protection author`
  - missing-name: EU

### usa-raine-openai-chatgpt-suizid.json

- **dropped_proper_name** @ `timeline[2].description`
  - DE: `Adam Raine stirbt durch Suizid. In den späteren Klageunterla`
  - EN: `Adam Raine dies by suicide. In the subsequent complaint, the`
  - missing-name: OpenAI

### usa-ziprecruiter-ki-diskriminierung.json

- **dropped_proper_name** @ `timeline[0].description`
  - DE: `HireVue nutzt ein KI-System, das Videointerviews von Bewerbe`
  - EN: `HireVue uses an AI system that automatically scores applican`
  - missing-name: Uber

