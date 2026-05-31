# Übergabe an nächste Session — Bilinguale Code-Migration + 67 neue Incidents

**Datum:** 2026-05-27
**Vorgänger-Session:** 2026-05-26/27 (mehrtägige Mega-Sitzung)
**Aktueller Stand:** 274 Incidents (von 206 → +68), bilinguale Infrastruktur live im Browser

---

## TL;DR

Drei parallele Großarbeiten wurden in dieser Session begonnen — **zwei sind abgeschlossen, eine ist NICHT durch**:

1. ✅ **Code- und Schema-Infrastruktur für DE↔EN-Umschaltung** — vollständig, im Browser verifiziert
2. ❌ **Übersetzung der 206 Original-Incidents** — Subagent-Welle hat NICHTS PRODUZIERT (Audit zeigt weiter 2068 `missing_en`)
3. ✅ **68 neue Incidents 2023–2026 angelegt** — alle bilingual von Anfang an, Browser-getestet

**Kein Commit wurde bisher gemacht.** Das ist der erste Schritt für die nächste Session — ABER vorher muss Punkt 2 noch erledigt werden.

### Kritischer Audit-Befund

```
Files scanned:           274
Clean files:             0
Files with issues:       274
Total findings:          2825

Findings by kind:
   2068  missing_en              ← Subagent-Welle hat NICHT funktioniert
    677  identical_de_en         ← teils harmlos (Eigennamen), teils zu prüfen
     53  dropped_proper_name
     21  german_leakage_german-word
      5  german_leakage_umlaut
      1  length_ratio
```

Die 5 Subagents wurden gestartet aber haben offenbar keine Ergebnisse geliefert (oder noch nicht zurückgemeldet). Eine **neue Subagent-Welle** ist nötig, bevor man committen kann — oder das Audit-Skript zeigt, dass die Original-Files mehrheitlich noch monolingual deutsch sind.

---

## Stand der Tasks

| # | Status | Task |
|---|---|---|
| 1 | ✅ done | Glossar `data/translation-glossary.json` |
| 2 | ✅ done | `scripts/migrate-incidents-bilingual.js` (alle 206 Files migriert) |
| 3 | ✅ done | Code-Patches `js/detail-panel.js`, `js/strike-ticker.js`, `js/filters.js`, `js/i18n.js` |
| 4 | ✅ done | Quick-Wins (Meta-Tags, Tab-Title, Counter, aria-labels via `scripts/patch-html-i18n-meta.js`) |
| 5 | ⏳ **läuft** | Übersetzungs-Subagents (5 parallel, Background) |
| 6 | ⏳ **wartet** | Auto-Audit (`scripts/audit-bilingual-incidents.js` ist bereit) |
| 7 | ⏸️ **offen** | Verifikation lokal + Commit + Push |
| 8 | ✅ done | 67 neue Fälle bilingual angelegt |

---

## Was die nächste Session zuerst tun sollte

### Schritt 1 — Subagent-Status prüfen

Die 5 Subagents haben jeweils ~40 Files bekommen und sollten die `_en`-Felder ergänzen. Status mit:

```bash
node scripts/audit-bilingual-incidents.js
```

Erwartung: Findings-Report sollte massiv reduziert sein im Vergleich zum Initial-Run (Initial: 2068 `missing_en`). Wenn immer noch hoch → Subagents haben nicht alle Files bearbeitet → neuer Subagent-Run nötig (siehe Skript-Beispiel unten).

### Schritt 2 — Audit + Auto-Korrektur

`scripts/audit-bilingual-incidents.js` schreibt `audit-translation-report.md` mit allen Verdachtsfällen:
- `missing_en` (kein EN-Feld vorhanden)
- `identical_de_en` (gleicher String → Eigenname-Fall? Sonst Bug)
- `dropped_proper_name` (Eigenname-Whitelist nicht respektiert)
- `german_leakage_german-word` / `german_leakage_umlaut` (deutsche Reste im EN-Feld)
- `length_ratio` (EN-Text < 50% oder > 250% der DE-Länge)
- `array_length_mismatch` (`asm:affectedRights_de` und `_en` ungleich)

Auffällige Fälle gegebenenfalls per zweitem Subagent korrigieren lassen.

### Schritt 3 — Browser-Verifikation

Preview-Server starten (`mcp__Claude_Preview__preview_start` mit `name: "dev"` aus `.claude/launch.json`) und:
1. DE/EN-Switch testen
2. Detail-Panel mit verschiedenen Incidents öffnen
3. Counter-Update prüfen: muss `273 incidents in ~140+ countries` zeigen
4. Strike-Ticker auf Sprachwechsel reagieren lassen (sollte automatisch via `i18n:changed` Event)

### Schritt 4 — Commit

Beim Commit darauf achten:
- Beide Sprachen funktionieren
- Keine 404 / JavaScript-Errors in Console
- `data/all-incidents.json` ist aktuell (~2.8 MB)
- `data/index.json` listet alle 273

```bash
git add -A
git commit -m "$(cat <<'EOF'
Bilinguale Erweiterung — Code + 67 neue Incidents

- Schema-Migration aller 206 Original-Files mit _de-Feldern
- Code-Patches detail-panel.js, strike-ticker.js, filters.js, i18n.js
- Quick-Wins: dynamische Meta-Tags, Counter, aria-labels
- 67 neue Incidents 2023–2026 (bilingual von Anfang an)
- Subagent-Übersetzungen der 206 Original-Files (separate Welle)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>
EOF
)"
```

---

## Was wurde gemacht — im Detail

### Phase 1: Code- & Schema-Infrastruktur

#### Glossar `data/translation-glossary.json`

Fachbegriffs-Mapping DE→EN für konsistente Übersetzungen, plus `proper_names_keep_unchanged` Whitelist (Anthropic, Pegasus, Lavender, IDF, NSO, …) und `translation_principles` (en-US, sachlich, Zitate nicht übersetzen, etc.).

#### Schema-Migration

`scripts/migrate-incidents-bilingual.js` — kopiert für jedes Incident die DE-Felder additiv in `_de`-Felder:
- `name` → `name_de`
- `description` → `description_de`
- `location.name` → `location.name_de`
- `asm:actors[].name` → `asm:actors[].name_de`
- `asm:affectedRights[]` → `asm:affectedRights_de[]`
- `asm:reverseTimeline[].title/description` → `.title_de/.description_de`
- `asm:sources[].title` → `.title_de`

Idempotent — überspringt Files mit existierendem `name_de`.

#### Code-Anpassungen

- **`js/i18n.js`**: Neuer `data-i18n-content` Attribut-Handler für `<meta>` Tags
- **`js/detail-panel.js`**: Alle Anzeige-Felder verwenden `I18n.localized(obj, 'name')` statt direktes `obj.name`. Bei offenem Panel re-rendert auf `i18n:changed` Event.
- **`js/strike-ticker.js`**: Re-build auf `i18n:changed` Event. Ticker zeigt korrekte Sprache.
- **`js/filters.js`**: Such-Funktion durchsucht jetzt `_de` UND `_en` Felder
- **`index.html`**: Counter (`map.counterFormat`) ist jetzt dynamisch via Template

#### Quick-Wins `scripts/patch-html-i18n-meta.js`

Patcht alle 9 HTML-Seiten:
- `<title>` mit `data-i18n="meta.{page}.title"`
- `<meta name="description">` mit `data-i18n-content="meta.{page}.description"`
- `og:title`, `og:description`, `twitter:title`, `twitter:description`
- Sprachswitcher aria-labels (`a11y.langSwitcher`, `a11y.langDe`, `a11y.langEn`)

#### Neue i18n-Keys

In `i18n/de.json` und `i18n/en.json` ergänzt:
- `meta.{index,radar,labor,laborMap,methodology,transparency,imprint,privacy,404}.{title,description}`
- `a11y.langSwitcher`, `a11y.langDe`, `a11y.langEn`
- `map.counterFormat` ("{n} Vorfälle in {c} Ländern" / "{n} incidents in {c} countries")

### Phase 2: Subagent-Übersetzungs-Welle (LAUFEND IM BACKGROUND)

5 parallele Subagents — jeder bekam:
- Pfad zum Glossar
- Liste mit ~40 Incident-Dateien
- Anweisung: ergänze `_en` Felder zu allen existierenden `_de` Feldern
- Striktes Output-Format

**Subagent-Befehl-Vorlage** für nächste Welle (falls nötig):

```
Du sollst N Incident-JSON-Dateien aus AIStrikeMap bilingual erweitern (DE → EN).
Working dir: C:\Users\meyer\Dropbox\_6.Block\X-Claude-LF11EA\Iron-Hawk\AIStrikeMap

Lies ZUERST data/translation-glossary.json komplett (Eigennamen-Whitelist + Mappings + Prinzipien).

Pro Datei: Read → übersetze fehlende _en Felder → Write mit JSON.stringify(obj, null, 2) + '\n'.
Wenn _en bereits existiert: SKIP.

Felder zu übersetzen:
- name_de → name_en
- description_de → description_en
- location.name_de → location.name_en
- actors[].name_de → actors[].name_en (Eigennamen unverändert)
- asm:affectedRights_de[] → asm:affectedRights_en[] (gleiche Länge!)
- reverseTimeline[].title_de/description_de → _en
- sources[].title_de: nur wenn deutsch übersetzen, sonst unverändert kopieren

Output: nur Statistik (bearbeitet/übersprungen/Fehler), keine Listen.

Datei-Liste: [hier eine Liste von 35-40 Datei-Namen]
```

### Phase 3+4: 67 neue Incidents recherchiert und angelegt

Alle bilingual von Anfang an, also in Phase 2 NICHT involviert — die Subagents überspringen sie idempotent.

**Coverage-Update:**
| Jahr | Vorher | Jetzt |
|---|---|---|
| 2026 | 0 | 4 |
| 2025 | 2 | ~12 |
| 2024 | 6 | ~18 |
| 2023 | 10 | ~16 |

**Komplette Liste der 67 neuen Files** in alphabetischer Reihenfolge:

```
anthropic-claude-gtg1002-cyberangriff-china.json
brasilien-tse-ki-wahlen-2026-deepfake-regulierung.json
china-deepseek-r1-datentransfer-globale-bans.json
deutschland-afd-ki-bilder-bundestagswahl-2025.json
ghana-ki-disinformation-wahlen-2024.json
griechenland-predator-files-intellexa-verurteilungen.json
hongkong-arup-deepfake-cfo-25-mio-betrug.json
indien-sitharaman-deepfake-investment-betrug.json
iran-israel-12-tage-cyberwar-ki-2025.json
irland-dpc-x-grok-eu-trainingsdaten-verfahren.json
italien-meloni-deepfake-pornografie.json
japan-perplexity-presseverlage-urheberrecht-klage.json
kanada-moffatt-air-canada-chatbot-falschauskunft.json
mexiko-sedena-ejercito-espia-pegasus-journalisten.json
microsoft-azure-unit8200-cutoff-gaza.json
nordkorea-ki-it-workers-us-tech-infiltration.json
pakistan-imran-khan-ki-stimm-klon-wahl-2024.json
russland-doppelganger-ki-desinformations-netzwerk.json
saudi-arabien-neom-line-huwaitat-vertreibung-ki-ueberwachung.json
schweden-klarna-ki-700-jobs-ersetzt-reversal.json
schweden-spotify-pfc-fake-artists-ki-musik-royalties.json
spanien-viogen-algorithmus-femizide-fehlklassifizierung.json
suedkorea-yoon-kriegsrecht-social-media-2024.json
uk-bridges-south-wales-police-gesichtserkennung-urteil.json
uk-post-office-horizon-fujitsu-fehlurteile.json
ukraine-russland-zala-lancet-autonome-ki-drohnen.json
ungarn-orban-gesichtserkennung-pride-verbot-2025.json
usa-adobe-firefly-midjourney-ethik-kontroverse.json
usa-angela-lipps-fargo-clearview-fehlhaftung.json
usa-apple-intelligence-bbc-falsche-news-headlines.json
usa-character-ai-setzer-suizid-florida.json
usa-cigna-pxdx-algorithmus-claim-ablehnungen.json
usa-doj-elegant-ki-jobanzeigen-diskriminierung.json
usa-epic-sepsis-model-krankenhaus-falsche-alarme.json
usa-google-gemini-bildgenerierung-diversity-debakel.json
usa-hirevue-intuit-aclu-ki-job-diskriminierung.json
usa-ice-mobile-fortify-fehlidentifikation-oregon.json
usa-mata-avianca-chatgpt-fake-zitate.json
usa-microsoft-recall-ki-screenshot-privacy-debakel.json
usa-naacp-xai-memphis-colossus.json
usa-openai-sora2-deepfake-launch-abschaltung.json
usa-openai-superalignment-aufloesung-sutskever-leike.json
usa-proctorio-honorlock-ki-pruefungsueberwachung.json
usa-raine-openai-chatgpt-suizid.json
usa-replika-luka-companion-chatbot-belaestigung-ftc.json
usa-riaa-suno-udio-ki-musik-urheberrecht.json
usa-saferent-tenant-screening-ki-diskriminierung.json
usa-scarlett-johansson-openai-sky-stimme.json
usa-taylor-swift-deepfake-x-twitter.json
usa-trump-ice-cecot-deportationen-venezolaner-2025.json
usa-unitedhealth-nhpredict-medicare-ablehnungen.json
usa-waymo-santa-monica-kind-2026.json
usa-westfield-nj-schul-deepfake-mani.json
vietnam-decree-147-internet-zensur-id-pflicht-2024.json
```

(50 Files explizit gelistet; insgesamt 67 — beim Audit gegen die Liste prüfen.)

---

## Wichtige Konventionen — Erinnerung

Aus `CLAUDE.md`:
- **i18n full-coverage**: Hardcoded German in HTML ist ein Bug — jeder user-sichtbare String braucht `data-i18n` Attribut UND Schlüssel in beiden `i18n/de.json` und `i18n/en.json`.
- **Umlaute richtig** in HTML/JSON-Display-Strings/Doku/Commits — `ä/ö/ü/ß`, NICHT `ae/oe/ue/ss`. Bewusste Ausnahmen für URL-Slugs, JSON-Keys, CSS-Klassen, JS-Variablen.
- **Pure HTML/CSS/JS**, kein Build-Step. CDN für Leaflet.
- **Bilinguales Datenschema**: `name_de` + `name_en` (oder `name` als Fallback). `I18n.localized(obj, 'name')` macht das automatisch.
- **Workflow**: Incident JSON anlegen → `node scripts/bundle-incidents.js` ausführen → in `data/index.json` aufnehmen.

---

## Wichtige Datei-Pfade

```
data/
  incidents/                  # 273 *.json incident-Dateien
  index.json                  # Manifest (273 Einträge)
  all-incidents.json          # Bundle (~2.8 MB)
  all-radar.json              # Radar-Bundle
  translation-glossary.json   # KI-Übersetzungs-Glossar

scripts/
  migrate-incidents-bilingual.js  # Schema-Migration (idempotent)
  patch-html-i18n-meta.js         # HTML-Meta-Tag-Patches
  bundle-incidents.js             # Bundle-Erstellung
  audit-bilingual-incidents.js    # Audit (Verdachtsfälle finden)

js/
  i18n.js              # Verbesserte i18n mit data-i18n-content
  detail-panel.js      # Verwendet I18n.localized() durchgängig
  strike-ticker.js     # Re-Build auf i18n:changed
  filters.js           # Bilingual Search

i18n/
  de.json    # Erweitert um meta.*, a11y.lang*, map.counterFormat
  en.json    # Gleich

docs/planung/
  übergabe-2026-05-27-bilingual-massen-erweiterung.md    # DIESES DOKUMENT
```

---

## Mögliche nächste Erweiterungen (nicht in dieser Session)

### Themen-Lücken (mit Suchen abgeklärt, aber nicht angelegt):
- 🇦🇺 Australia eSafety Commissioner vs X (Wakeley-Kirche-Stabbing 2024)
- 🇹🇷 Türkei Imamoglu Deepfake Kommunalwahl März 2024 (Kommunalwahl-Stimm-Klon)
- 🇮🇱 IDF al-Shifa Hospital + Lavender Updates (al-Shifa-Belagerung im März 2024)
- 🇺🇸 CrowdStrike-Global-IT-Outage Juli 2024 (KI-Bezug eher gering; eher KI-Cyber-Infrastruktur-Resilienz)
- 🇮🇹 Italien Equalize/Predatorgate 2024 (Mossad-Sympathie-Kontroverse)
- 🇺🇸 Robert Williams Detroit Wrongful Arrest (existiert evtl. schon in `detroit-gesichtserkennung-fehlidentifikation.json`)
- 🇺🇸 Stargate $500B Trump-Initiative Januar 2025
- 🇮🇳 Indien Aadhaar UIDAI Updates 2024–2025
- 🇧🇩 Bangladesch Hasina Sturz August 2024 / KI-Überwachung
- 🇪🇺 EU AI Act erste Strafen 2026 (Artikel 5 Prohibitionen)
- 🇫🇷 Le Monde × OpenAI Lizenz-Partnership (Positiv-Beispiel: 25% an Journalist*innen-Gewerkschaften)

### Optional vorgesehen, aber nicht umgesetzt:
- 🇮🇩 Indonesia Prabowo Suharto-Deepfake — **bereits erfasst** als `indonesien-prabowo-suharto-deepfake-2024.json`
- 🇰🇪 Kenya OpenAI Sama Content Moderation — **bereits erfasst** als `kenya-content-moderation.json`

---

## Status-Snapshot (Stand 2026-05-27, Ende der Session)

```
Browser-Counter:  273 incidents in ~140+ countries
Bundle:          data/all-incidents.json — 2.78 MB
Index:           data/index.json — 273 Einträge
Subagents:       5 im Background (Status unbekannt — bei nächster Session prüfen)
Audit:           audit-translation-report.md (initial 2068 missing_en — neu auditieren!)
Code:            Browser-verifiziert, DE↔EN umschalten funktioniert
Committed:       NOCH NICHT — erst nach Audit + Re-Verifikation
```

---

## Ein-Satz-Empfehlung

> **Nächste Session sollte mit `node scripts/audit-bilingual-incidents.js` beginnen** — der Audit-Report zeigt sofort, welche der 206 Original-Incidents bereits englisch sind und welche noch fehlen. Daraus folgt die Entscheidung: direkt committen (alle übersetzt) oder eine neue Subagent-Welle für die fehlenden starten.
