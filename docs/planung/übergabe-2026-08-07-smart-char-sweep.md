# Übergabe #12 — Korpusweiter Smart-Char-Sweep, Atom-Feed-Fix, Validator-Vollscan

**Datum:** 2026-08-07
**Vorgänger:** #11 (2026-06-26, Reverse-TL-Feature 100 % komplett)
**Commits:** `065031d` (Sweep), `e93c1a2` (Feed-Fix) — auf `main`

---

## Ausgangslage

Übergabe #11 hatte das Reverse-TL-Kern-Feature bei 2457/2457 (100,0 %)
abgeschlossen und als naheliegenden nächsten Schritt den **korpusweiten
Smart-Char-Sweep** benannt: „789 Files mit Em-Dash/Smart-Quotes in alten
Display-Feldern".

## Was sich bei der Prüfung als anders herausstellte

Die Prämisse aus STATUS.md hielt der Messung nur teilweise stand. Vor dem
ersten Schreibzugriff wurde der Ist-Zustand exakt vermessen:

| Zeichen | Ist | Bewertung |
|---|---|---|
| Em-Dash ` — ` | 6396 (644 Files) | **kein Zufall** — die UI (i18n/de+en, methodik.html …) nutzt ihn systematisch als Hausstil („Stufe 1 — Gemeldet") |
| ASCII ` - ` | 9131 (1199 Files) | bereits die **Mehrheit** im Korpus |
| En-Dash | 701 | 500× Gedankenstrich, 169× Zahlenbereiche (`1960er–80er`), 32× Verbindungsstrich (`Vancouver–Toronto`) |
| Quotes `„…"` | 116 | **korrekte deutsche Typografie** (U+201E + U+201C), **kein CLAUDE.md-Verstoß** — CLAUDE.md sagt nichts zu Quotes |
| **Soft-Hyphen U+00AD** | **55** | **echter Bug**, in #11 nicht erfasst — unsichtbar, bricht Volltextsuche und String-Matching lautlos |
| ` —,` | 6 | Rest halber Einschub-Paare („…Dialektmarker —, die sich…") |

Zwei Korrekturen an der Annahme aus #11:

1. Die Smart-Quotes waren **keine** „klaren CLAUDE.md-Verstöße" — `„…"` ist
   korrektes Deutsch. Die Vereinheitlichung auf ASCII ist eine Konsistenz-,
   keine Korrektheitsfrage.
2. Der Em-Dash war **nicht** nur Altlast, sondern in der UI-Chrome bewusst
   gesetzt. Ein blinder Voll-Sweep hätte eine Inkonsistenz *erzeugt*, nicht
   beseitigt.

**Entscheidung des Projekteigners (2026-08-07):**
Korpus (`data/`) → ASCII · UI (`i18n/*.json`, `*.html`) → Em-Dash bleibt.
Quotes → ASCII.

Begründung: Der Korpus ist maschinell erzeugt und braucht **eine mechanisch
prüfbare** Konvention — genau die, die `validate-timelines.js` ohnehin schon
erzwingt und die mit 9131 zu 6396 bereits die Mehrheit stellte. Die UI-Chrome
ist handgesetzt und wird vom Validator nicht erfasst.

---

## 1. Smart-Char-Sweep (Commit `065031d`)

Neues Tool: **`scripts/normalize-smart-chars.js`** (idempotent, `--dry-run`).

**743 Files, 7776 Ersetzungen:**

| Regel | n | Wirkung |
|---|---|---|
| `em-spaced` | 6818 | ` — ` → ` - ` |
| `en-spaced` | 531 | ` – ` → ` - ` |
| `en-tight` | 204 | Bis-/Verbindungsstrich (`1960er–80er`, `Vancouver–Toronto`) → `-` |
| `quote-low` | 85 | `„` → `"` |
| `quote-ldq` | 53 | `“` → `"` |
| `em-tight` | 9 | `Wort—Wort` (EN-Quellentitel) → ` - ` |
| `quote-lsq` | 8 | `‘` → `'` |
| `dash-before-comma` | 7 | ` —,` → `,` (halbes Einschub-Paar) |
| `ellipsis` | 6 | `…` → `...` |
| `soft-hyphen` | 55 | U+00AD ersatzlos |

### Zwei Design-Entscheidungen im Tool

**Text-Level statt `JSON.parse`/`stringify`.** Ein Re-Serialize hätte die
Formatierung aller 743 Files umgeschrieben und den Diff unlesbar gemacht.
Die Ersetzung läuft direkt auf dem Rohtext; eingefügte ASCII-Quotes werden
als `\"` escaped, weil sie im JSON-String landen. Jedes File wird **vor UND
nach** der Ersetzung gegen `JSON.parse` geprüft und danach darauf, dass kein
Zielzeichen zurückblieb — sonst wird gar nicht erst geschrieben.

**Reihenfolge der Regeln ist bedeutsam.** ` —,` muss vor ` — ` laufen, sonst
entsteht ` - ,`.

### Verifikation

- **743/743 Files mit identischem Textkern** gegen HEAD: beide Fassungen um
  *alle* berührten Satzzeichen bereinigt und verglichen → kein Buchstabe,
  keine Ziffer verändert oder verloren.
- **0 Datumsfelder verändert.** Diese Prüfung war nötig, weil der Textkern-
  Vergleich Bindestriche ignoriert und eine Änderung `2018–2021` → `2018-2021`
  daher *nicht* gesehen hätte. Alle `date`/`startDate`-Felder aller 743 Files
  wurden separat gegen HEAD verglichen.
- Audit: **0 Findings** (2457/2457 clean).
- Validator: **0 Smart-Char-Fehler** (vorher hätten 743 Files angeschlagen).
- Frontend live gegen `localhost:8080` geprüft: 2457 Incidents geladen,
  0 Smart-Chars im Lite-Bundle, 60 Marker, Detail-Panel rendert die
  lazy-geladene Einzeldatei inkl. Reverse-TL, Permalink funktioniert.

> ⚠️ **Permalink-Hinweis für die nächste Session:** `?incident=` erwartet die
> **volle `@id`-URL**, nicht den nackten Slug —
> `index.html?incident=https%3A%2F%2Faistrikemap.org%2Fincidents%2F<slug>`.
> Mit dem nackten Slug öffnet das Panel leer. Das ist kein Bug, kostet aber
> beim Debuggen Zeit.

---

## 2. Atom-Feed war seit der Bilingual-Migration inhaltsleer (Commit `e93c1a2`)

Beim Regenerieren des Feeds aufgefallen — **vorbestehend und live ausgeliefert**:

```xml
<title> [ESKALIEREND]</title>
<summary type="text">
Neuste Entwicklung (2026-04-08): undefined — undefined</summary>
<published>2026-03T00:00:00Z</published>
```

**Ursache:** `generate-feed.js` las noch die unsuffigierten Felder (`s.name`,
`s.description`, `newest.title`, `newest.description`). Die Radar-Daten haben
seit der Bilingual-Migration nur noch `*_de` / `*_en`. Alle 6 Einträge hatten
leeren Titel und leere Summary.

Zusätzlich war `<published>` kein gültiges RFC3339: `startDate` liegt als
`2026-03` vor, angehängt wurde stumpf `T00:00:00Z`.

**Behoben:**
- `pick(obj, base)` wählt DE zuerst (der Feed ist deutschsprachig), fällt auf
  den unsuffigierten Namen und dann EN zurück.
- `toRfc3339()` füllt `YYYY` und `YYYY-MM` auf den Monats-/Jahresanfang auf.

Feed neu erzeugt: 6 Einträge mit Titel und Summary, 4 → 8 KB, kein `undefined`,
alle Datumsangaben vollständig.

> **Lehre:** Die Bilingual-Migration hat Konsumenten der alten Feldnamen
> zurückgelassen. `generate-feed.js` war einer. Vor dem nächsten Schema-Umbau
> lohnt ein Grep über alle `scripts/` nach `\.name\b`, `\.description\b`,
> `\.title\b` ohne `_de`/`_en`-Suffix.

---

## 3. Erster korpusweiter Validator-Vollscan — neue Top-Prio

`validate-timelines.js` lief bisher **nur pro Welle auf frisch gebauten TLs**,
nie über den Gesamtkorpus. Der erste Vollscan über alle 2457:

**463 Files · 606 ERRORs · 380 WARNs**

Zwei Klassen, die getrennt behandelt werden müssen:

### a) Validator-Lücke (~180) — zuerst beheben

TL-Daten wie `2024-2025`, `2018-2021`, `2007-2023` sind **legitime Zeiträume**
für `infrastructure`- und `doctrine`-Phasen. Der Validator kennt aber nur
`YYYY`, `YYYY-MM`, `YYYY-MM-DD` und meldet sie als „ungültiges Datum".
178 der 208 Datums-ERRORs sind reine Jahresbereiche.

**Erst den Validator um Bereiche erweitern** (und die Chronologie-Prüfung auf
den Bereichs-Anfang stützen), sonst rauscht der echte Befund im Grundrauschen
unter.

Ein Rest ist echter Freitext und gehört normiert: `ab 2024`,
`2024 (vor Oktober)`, `2023-2024-Q1`, `2024-11 bis 2025`.

### b) Echte Strukturmängel (~380)

- **134×** mehr als eine `event`-Phase (Schema sagt genau 1)
- **~240×** absteigende Chronologie (häufigstes Muster: `event` > `consequences`)
- **3×** mehr als 6 TL-Einträge, **1×** weniger als das Minimum
- **2×** `@id` passt nicht zum Dateinamen
  (`usa-airbnbs-smart-pricing-…`, `usa-stingray-massenueberwachung`)
- **1×** `description !== description_de`
  (`usa-apple-intelligence-bbc-falsche-news-headlines`) — **vorbestehend**,
  gegen HEAD verifiziert

Die 380 WARNs sind ganz überwiegend „gleiches Datum [i]/[i]" und laut
Validator-Text „akzeptabel wenn real" — niedrige Prio.

---

## 4. Disk-Hygiene

Zwei verwaiste Git-Worktrees aus früheren Sessions entfernt
(`jolly-tharp-34c888`, `suspicious-babbage-091cbf`) plus ein leeres
`eager-johnson`. Beide waren sauber (0 uncommittete Änderungen) und ihre
Commits bereits in `main` — kein Datenverlust möglich.

**6,9 MB → 4 KB.** (Ein leeres Verzeichnis blieb zurück, weil Dropbox ein
Handle hielt; 0 Bytes, unkritisch.)

---

## Nächste Schritte (Prio-Reihenfolge)

1. 🔴 **Validator korpusweit aufräumen** — erst Bereichs-Daten unterstützen,
   dann die ~380 echten Strukturmängel abarbeiten. Größter Qualitätshebel,
   weil er das erst zu 100 % fertiggestellte TL-Feature betrifft.
2. **Career-Daten via Dataset-Download** (Layer A fehlt; WebSearch-Agenten
   reichen nachweislich nicht — Pilot 2026-06-19).
3. **AIAAIC Batch D** (pre-2015, ~300 Stubs).
4. **needs-review-Cases sichten** (~180, 20–30 Promotes).
5. **Slug-Migration** der 5 inhaltlich abweichenden Permalinks (optional,
   mit Redirect) — siehe #11.

## Konventionen (unverändert)

- Kommunikation Deutsch, echte Umlaute ä/ö/ü/ß im Anzeigetext; URL-Slugs,
  JSON-Keys und i18n-Keys dürfen transliteriert sein.
- **Neu: Satzzeichen in `data/` sind ASCII.** `normalize-smart-chars.js
  --dry-run` als Gate nach jedem KI-Batch. `i18n/` und `*.html` bleiben
  ausgenommen.
- Nach Daten-Edits: `node scripts/bundle-incidents.js` →
  `node scripts/audit-bilingual-incidents.js` (muss 0 sein) →
  `node scripts/generate-feed.js` bei Radar-Änderungen.
- Push auf `main` = GitHub-Pages-Deploy.
