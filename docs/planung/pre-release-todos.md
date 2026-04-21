# Pre-Release-TODOs

Kleine Aufräum-Arbeiten, die **kurz vor einer Veröffentlichung** erledigt werden sollen — zu klein für einen eigenen Planungs-Slot, aber nicht vergessen werden dürfen.

## Offen

### Link-Checker Paywall-Refinement (Phase 2 V2)

Beobachtet beim ersten Full-Run am **2026-04-21**: 12 URLs als `dead` klassifiziert, davon mindestens eine fälschlich — `lemonde.fr` antwortete mit HTTP **402 Payment Required** (kanonischer Paywall-Status), wurde aber als `dead` eingeordnet, weil 402 in `classify()` nur dann als Paywall zählt, wenn der Host auf der `PAYWALL_DOMAINS`-Liste steht.

Zu tun:
1. In `scripts/check-links-v2.js` → `classify()` eine universelle Regel einziehen: HTTP 402 ⇒ `paywall` (host-unabhängig). Die Status-Klasse 402 ist dafür gedacht.
2. `PAYWALL_DOMAINS` ergänzen: `lemonde.fr`, `dawn.com` (pakistanisches News-Portal, liefert 403 via bot-wall bei erreichbarem Content).
3. `node scripts/check-links-v2.js --apply --force` — oder gezielt `--only <url>` für die betroffenen Einträge — damit der Cache die neue Klassifikation übernimmt.
4. `node scripts/bundle-incidents.js` anschließend.

Auswirkung: ca. 1–3 `dead`-Einträge werden zu `paywall` rekategorisiert → passende 🔒-Icons statt ⚠️ im Detail-Panel.

Referenz: TODO-Kommentare liegen direkt bei `PAYWALL_DOMAINS` und `classify()` in `scripts/check-links-v2.js`.

---

## Erledigt

_(leer — Einträge hierher verschieben, wenn sie im nächsten Release gelandet sind)_
