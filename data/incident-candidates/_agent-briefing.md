# Background-Agent-Briefing Template

Copy-paste-bares Briefing für Background-Agenten, die eine Round von
Incident-Kandidaten recherchieren. Ergänzt die Topic-spezifische Prompt.

## Hard rules (in jedem Briefing einfügen)

1. NIE Fälle erfinden. Ohne real existierende Quelle aus WebSearch-Results: weglassen.
2. NIE URLs fabrizieren. Nur URLs die in WebSearch-Resultaten erscheinen.
3. Mindestens 2 unabhängige Sources pro Kandidat empfohlen (1 ist Minimum, wird beim Promote mit `--min-sources 2` gefiltert).
4. **Umlaute richtig in DE-Feldern**: ä/ö/ü/ß — NIE ae/oe/ue/ss (CLAUDE.md-Vorgabe).
5. **JSON-Safety**: Strings sind ASCII-quote-only (`"..."`). KEINE typografischen Quotes (`„..."`, `'...'`, `‚...'`) in der JSON-Syntax oder im String-Content. Wenn du Anführungszeichen innerhalb eines Texts brauchst, escape sie als `\"X\"`. Dieser Bug ist diese Session 4x manuell gefixt worden — verursacht durch Smart-Quote-Auto-Replace beim Schreiben.
6. **Slug-Naming**: candidate_id im Format `{country-code}-{kurzname}-{jahr}` (z.B. `usa-anduril-border-2024`). KEIN Country-Prefix wiederholen, KEIN Country-Name im Body (das übernimmt promote-candidates.js anhand `location.country`).
7. **Country-Name im name_de**: Falls du Land-Kontext brauchst, nutze "Land: Titel" mit Doppelpunkt (z.B. "Burkina Faso: Bayraktar-Drohnenangriffe"). NICHT "Burkina Faso Bayraktar..." ohne Trenner — sonst landet das Land doppelt im Slug.

## Workflow

1. Liste 5-8 WebSearch-Queries entsprechend Topic-Scope.
2. Für jeden Treffer: zweite Bestätigungs-Suche (Cross-Source).
3. Strukturiere als Array von Kandidaten-Objekten (siehe `_schema.md`).
4. Schreibe als JSON-Array nach `data/incident-candidates/{topic-slug}-round-{N}-agent-{id}.json`.
5. `status` initial auf `"candidate"`. Foreground-Pipeline setzt das auf `verified`/`rejected`/`needs-review`.

## Sandbox-Limits (wichtig!)

Background-Agenten haben in dieser Session-Umgebung:

- **Können**: Read, Write, Edit, Grep, Glob, WebSearch
- **Können NICHT**: WebFetch, Bash, Git-Commit

→ Heißt: Du arbeitest mit WebSearch-Snippets. URLs sind plausibel aber
unverifiziert. Verifizierung läuft im Foreground via
`node scripts/verify-candidates.js`.

## Quality-Score Sweet-Spots

Pro Kandidat anzustreben:
- 2-3 Sources (Score-Boost ab 2)
- Mindestens 1 international anerkannte Source (NYT, BBC, Reuters, AP, AFP,
  HRW, AI, NGO mit eigenem Bericht — siehe `score-candidates.js`
  WHITELIST). Pure Boulevard oder Twitter-Threads → kein Score.
- `candidate_severity` zwischen 2-4 ist plausibel; 5 nur bei mehrfachen
  Toten / Massendiskriminierung / Großskala-Surveillance.
- `candidate_verification` 2-3 üblich. 4 nur bei Court-Ruling oder
  Regulatory-Decision die den Fall offiziell etabliert.

## Vermeiden

- Pure Twitter/Reddit-Threads als alleinige Quelle.
- Generic-Press-Release ohne reporting backing.
- Spekulationen über "KI wurde wohl genutzt" — nur Cases wo
  AI-Involvement explizit in der Quelle steht.
- Cases vor 2020 (außer Topic verlangt es explizit).
- Cases die nur einen einzelnen Algorithmus-Bias-Tweet diskutieren.
