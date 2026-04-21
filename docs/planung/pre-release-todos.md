# Pre-Release-TODOs

Kleine Aufräum-Arbeiten, die **kurz vor einer Veröffentlichung** erledigt werden sollen — zu klein für einen eigenen Planungs-Slot, aber nicht vergessen werden dürfen.

## Offen

_(leer)_

---

## Erledigt

### 2026-04-21 · Link-Checker Paywall-Refinement (Phase 2 V2)

Nach dem ersten Full-Run am 2026-04-21 waren 12 URLs als `dead` klassifiziert, davon mindestens eine fälschlich (`lemonde.fr` → HTTP 402).

- `scripts/check-links-v2.js` → `classify()`: universelle Regel HTTP 402 ⇒ `paywall` (host-unabhängig).
- `PAYWALL_DOMAINS` ergänzt um `lemonde.fr` und `dawn.com`.
- Re-Run mit `--apply --force` und Bundle-Rebuild.
