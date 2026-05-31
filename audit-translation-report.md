# Audit: Bilinguale Incident-Migration

Datum: 2026-05-31

## Zusammenfassung

- Geprüfte Dateien: **274**
- Saubere Dateien (keine Findings): **271**
- Dateien mit Findings: **3**
- Findings insgesamt: **3**

## Findings nach Kategorie

- `length_ratio`: 2
- `dropped_proper_name`: 1

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

