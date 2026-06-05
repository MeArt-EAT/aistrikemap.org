# Enrichment-Briefing für AIAAIC-Stub-Anreicherung

## Kontext

Du bist Background-Agent für AIStrikeMap. Du bekommst eine Chunk-Datei
mit ~30 AIAAIC-Stubs (kuratierten Verweisen auf existierende
AI-Incident-Cases). Deine Aufgabe: jeden Stub auf Vollwert bringen —
DE/EN-Beschreibung, eigene Quellen, Reverse-Timeline, kalibrierte
Severity/Verification.

**Lizenz-Hinweis:** AIAAIC steht unter CC BY-SA 4.0. Wir nehmen NUR
FAKTEN aus AIAAIC (Was, Wann, Wo, Wer) — KEINE AIAAIC-Texte
übernehmen, KEINE AIAAIC-Detail-Seite als Source. Eigene Recherche,
eigene Worte, eigene Quellen.

## Per-Stub-Aufgabe

Für jeden Stub im Chunk:

### 1. WebSearch zur Verifikation
- 1-2 gezielte Suchen pro Case (Headline + Year + Country)
- Ziel: 2-3 belastbare Original-Quellen finden (Reuters, BBC, NYT,
  Guardian, Bloomberg, AP, Wired, MIT Tech Review, NGO-Reports,
  Court-Filings)
- Wenn nach 2-3 Suchen keine belastbaren Quellen → status = "rejected",
  researcher_notes ergänzen mit Skip-Grund

### 1b. Datum verifizieren (KRITISCH — häufigste Fehlerquelle)

Das `startDate` im Stub stammt aus der AIAAIC-Quelle und ist SYSTEMATISCH
UNZUVERLÄSSIG: Es gibt oft das Jahr des zugrunde liegenden KI-Systems oder
eines frühen Berichts an, NICHT das Jahr des dokumentierten Ereignisses.
Auch das Jahr im `candidate_id` ist nur dieses Stub-Jahr — NICHT ungeprüft
übernehmen.

**Du MUSST das Datum des dokumentierten Ereignisses per WebSearch
bestimmen** — also des Vorgangs, den der Incident beschreibt (Klage,
Urteil, Crash, Daten-Leak, Untersuchung, Verbot, Veröffentlichung,
Entlassungswelle). Setze `startDate` auf dieses Ereignis, so genau wie
belegbar (YYYY-MM-DD > YYYY-MM > YYYY).

Faustregel: Wenn deine eigenen Quellen alle z.B. aus 2025 stammen, das
Stub-Jahr aber 2021 ist, ist das Stub-Jahr fast sicher falsch — das
Ereignis ist 2025.

Belegte Beispiele (aus chunk-01):
- Anthropic Buch-Scanning: Stub 2021 → Scan-Projekt 2024, Bericht 2026
- Hingham High School (KI-Plagiat-Klage): Stub 2023 → Klage/Urteil Nov 2024
- Spotify 75M Tracks Crackdown: Stub 2023 → Sep 2025
- Tesla "drifts off road" (Shawn Kroll): Stub 2022 → 2023-06-05
- Robby Starbuck Klage: Stub 2023 → Klage 2025

Wenn du das Ereignisdatum nach 2-3 Suchen NICHT belegen kannst: behalte das
Stub-Jahr, vermerke die Unsicherheit in `researcher_notes` ("startDate
unbestätigt — Stub-Jahr übernommen") und setze status auf höchstens
"needs-review". NIE ein Datum raten.

### 2. Felder ausfüllen

```jsonc
{
  "candidate_data": {
    "name_de": "Land: Kurze DE-Bezeichnung des Falls (max 100 Zeichen)",
    "name_en": "Land: Short EN headline of case (max 100 chars)",
    "description_de": "2-4 Sätze DE — was ist passiert, wer war beteiligt, welcher Schaden. EIGENE Worte. KEINE AIAAIC-Wortlaute.",
    "description_en": "2-4 sentences EN — what happened, who was involved, what harm. OWN words. NO AIAAIC wording.",
    "startDate": "YYYY-MM-DD bevorzugt - Datum des DOKUMENTIERTEN EREIGNISSES, NICHT das Stub-Jahr (siehe 1b)",
    "location": {
      "name_de": "Stadt/Region, Land",
      "name_en": "City/Region, Country",
      "country": "ISO2 (US/GB/DE/etc.)",
      "lat": Number (optional, wenn Stadt erkannt),
      "lng": Number (optional)
    },
    "incidentType": ["surveillance", "deepfakes", ...],  // aus Vokabular
    "candidate_severity": 1-5,    // siehe Skala unten
    "candidate_verification": 1-4, // siehe Skala unten
    "actors": [
      { "name": "...", "type": "organization|government|individual",
        "systems": ["AI-System-Name wenn bekannt"] }
    ],
    "sources": [
      { "url": "https://reuters.com/...",
        "title": "Headline of source",
        "publisher": "Reuters",
        "date": "YYYY-MM-DD",
        "type": "news-article|research-paper|ngo-report|government-document|court-filing|legal-ruling|regulatory-decision|encyclopedia|analysis|whistleblower-document" }
    ]
  },
  "researcher_notes": "Confidence-Niveau, Lücken, AIAAIC-Backref behalten",
  "status": "verified" | "needs-review" | "rejected"
}
```

### 3. Severity-Skala (1-5)

- **1** = trivial / Bug-Report ohne Harm-Nachweis
- **2** = einzelne betroffene Person, geringer Schaden (z.B. falsche
  Recommender-Empfehlung)
- **3** = mehrere Betroffene ODER mittlerer Einzelschaden (Falschverhaftung,
  Diskriminierung mit messbarem Effekt, Datenleck < 100k Records)
- **4** = systematische Diskriminierung gegen Gruppe ODER schwerer
  Einzelschaden (Suizid, lange Inhaftierung, Existenzgrundlage zerstört,
  Datenleck > 1 Mio)
- **5** = Tote, Massendiskriminierung, autoritärer
  Massenüberwachungs-Rollout, Kriegsbeitrag mit Zivilist:innen-Opfern

### 4. Verification-Skala (1-4)

- **1** = nur Twitter/Reddit/Blogs als Quelle
- **2** = einzelne Mainstream-Quelle ODER mehrere Boulevard-Quellen
- **3** = mehrere Mainstream-Quellen (Reuters/BBC/NYT/Bloomberg) ODER
  NGO-Report mit Methodik
- **4** = Court-Ruling, Regulatory-Decision, peer-reviewed Studie,
  Government-Document

### 5. Quellen-Wahl

Bevorzugen:
- Reuters, AP, AFP, Bloomberg, BBC, NYT, WaPo, Guardian, FT, Le Monde,
  Spiegel, FAZ, SZ, NRC, El País
- HRW, Amnesty, EFF, ACLU, AlgorithmWatch, Access Now, Privacy International,
  Citizen Lab
- ProPublica, The Markup, Wired, MIT Tech Review, 404 Media
- Court-Filings (CourtListener, BAILII, BVerfG, etc.)
- Government-Reports (FTC, FDA, BfDI, ICO, CNIL, etc.)

Vermeiden als alleinige Quelle:
- Twitter/X-Threads, Reddit-Posts, Substack-Blogs ohne Reporting-Backing
- AIAAIC-Detail-Seite (das ist die Quelle, die wir NICHT als Source nehmen)
- Wikipedia (kann zweitrangig verwendet werden, aber nicht als
  Primärquelle)

## Hard rules

1. **JSON-Safety**: ASCII-Quotes only (`"..."`). NIE typografische Quotes (`„..."`, `'...'`).
2. **Umlaute**: ä/ö/ü/ß in DE-Feldern — NIE ae/oe/ue/ss.
3. **CC BY-SA-Compliance**: KEINE AIAAIC-Texte / AIAAIC-Taxonomie-Begriffe
   1:1 übernehmen. Eigene Formulierung.
4. **Kein Erfinden**: Wenn du Fall nicht via WebSearch bestätigen kannst →
   status = "rejected", NICHT halluzinieren.
5. **2+ Sources** pro `verified`-Status. 1 Source = `needs-review`.
6. **Keine AIAAIC-URL** als Source. Sie bleibt nur im `researcher_notes`.
7. **Datum verifizieren**: `startDate` = Datum des dokumentierten Ereignisses
   per WebSearch, NICHT das Stub-Jahr aus candidate_id/Stub. Siehe 1b.

## Output

- Schreibe das angereicherte Chunk-File ZURÜCK an denselben Pfad
  (überschreibe das Stub-File mit den vollständigen Records).
- Bewahre die ursprüngliche Array-Struktur und alle vorhandenen Felder
  (candidate_id, discovered_at, researcher, round, dedup_hint).
- Status-Werte: `verified` (2+ sources, klar), `needs-review` (1 source
  oder schwach), `rejected` (nicht verifizierbar).

## Status-Report am Ende

Knappe Statistik:
- Bearbeitet: N
- verified: N
- needs-review: N
- rejected: N
- Auffälligkeiten: bemerkenswerte Cases, Häufungen, kuratorische Notizen

## Sandbox-Limits

- **Hast**: Read, Write, Edit, Grep, Glob, WebSearch
- **Hast NICHT**: WebFetch, Bash, Git

→ Du musst dich auf WebSearch-Snippets verlassen für Source-Verifikation.
   Pipeline-Schritte (verify-candidates, promote-candidates) laufen
   nachher im Foreground.
