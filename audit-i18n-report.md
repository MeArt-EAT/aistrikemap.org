# i18n-Audit-Report

Erzeugt von `scripts/audit-i18n.js`. 11 HTML-Seiten, 463 Keys (de) / 463 (en).

## Befunde: 0

### Keys nur in de.json: 0

### Keys nur in en.json: 0

### Keys mit leerem Wert: 0

### In HTML referenziert, in einer JSON fehlend: 0

### Hartcodierter sichtbarer Text: 0

### Übersetzbare Attribute ohne data-i18n-Pendant: 0

## Hinweise (kein Befund, Ermessensfrage)

### Identischer DE/EN-Wert, über 14 Zeichen: 5

- `type.predictive-policing` = "Predictive Policing"
- `career.title` = "AI Career Impact Dashboard"
- `methodikCareer.s4.title` = "4. Confidence-Quality: robust / divergent / sparse"
- `privacy.externalServices.unpkgTitle` = "unpkg.com (CDN)"
- `meta.career.title` = "AI Career Impact Dashboard — AIStrikeMap"

### Keys ohne HTML-Referenz: 127

Der Großteil wird aus JS heraus genutzt (`severity.N`, `verification.N`,
`type.*`, Radar- und Career-Labels) — kein Fehler per se.

