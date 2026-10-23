# i18n-Audit-Report

Erzeugt von `scripts/audit-i18n.js`. 11 HTML-Seiten, 489 Keys (de) / 489 (en).

## Befunde: 0

### Keys nur in de.json: 0

### Keys nur in en.json: 0

### Keys mit leerem Wert: 0

### In HTML referenziert, in einer JSON fehlend: 0

### Hartcodierter sichtbarer Text: 0

### Übersetzbare Attribute ohne data-i18n-Pendant: 0

## Hinweise (kein Befund, Ermessensfrage)

### Identischer DE/EN-Wert, über 14 Zeichen: 7

- `type.predictive-policing` = "Predictive Policing"
- `career.title` = "AI Career Impact Dashboard"
- `methodikCareer.s4.title` = "4. Confidence-Quality: robust / divergent / sparse"
- `transparency.funding.openCollective` = "<a href=\"https://opencollective.com/aistrikemap\" rel=\"noopener noreferrer\" targe"
- `transparency.funding.githubSponsors` = "<a href=\"https://github.com/sponsors/aistrikemap\" rel=\"noopener noreferrer\" targ"
- `privacy.externalServices.unpkgTitle` = "unpkg.com (CDN)"
- `meta.career.title` = "AI Career Impact Dashboard — AIStrikeMap"

### Keys ohne HTML-Referenz: 146

Der Großteil wird aus JS heraus genutzt (`severity.N`, `verification.N`,
`type.*`, Radar- und Career-Labels) — kein Fehler per se.

