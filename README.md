# NEXUS — Defense Deck

Presentation deck for the TFM defense of **NEXUS**: the first replicable protocol for selecting an AI interface type, grounded in the DIKW hierarchy.

## What's in this repo

| File | Purpose |
|------|---------|
| `index.html` | Main slide deck (standalone HTML, no build step) |
| `deck-stage.js` | Slide navigation, keyboard controls, speaker notes |
| `speaker_notes.md` | Full speaker script — all 24 slides with `[NEXT]` cues |
| `NEXUS_Defense.pdf` | Exported PDF backup |
| `NEXUS_Defense.pptx` | Exported PowerPoint backup |
| `slides/` | PNG export of all 24 slides (1920×1080) |
| `server.js` | Local LAN server for same-WiFi phone notes sync |
| `export_slides.mjs` | Script to regenerate PDF + PNG exports (requires puppeteer) |
| `export_pptx.cjs` | Script to build PPTX from PNG slides (requires pptxgenjs) |

## Viewing the deck

**Hosted**: deployed on Vercel — see repo settings for the live URL.

**Local** (recommended for presenting with phone notes):
```bash
node server.js
```
Then open `http://localhost:7788` on the laptop and `http://<LAN-IP>:7788/?notes` on the phone.

## URL modes

| URL | Purpose |
|-----|---------|
| `/` | Main presentation |
| `/?notes` | Synced speaker notes (current + next slide) — open via `P` key |
| `/?study` | All speaker notes as a scrollable study document |

## Keyboard controls

- `→` / `Space` — next step or slide
- `←` — previous slide
- `R` — reset to slide 1
- `P` — open synced speaker notes window
- `1–9` — jump to slide

## Slide structure

### Main deck

| # | Label | Topic |
|---|-------|-------|
| 01 | Title | A Designer's Framework for Interface Type Selection |
| 02 | Opening question | HiPPO effect — the structural problem |
| 03 | The real problem | Fifteen professionals, zero systematic frameworks |
| 04 | The gap | Good tools for *how* — nothing for *what* |
| 05 | The cost | Five documented failures |
| 06 | The bottleneck | AI failure rates (MIT 2025, RAND 2024) |
| 07 | The reveal | NEXUS overview |
| 08 | The framework | Four-stage DIKW process |
| 09 | DIKW layers | Wisdom → Knowledge → Information → Data |
| 10 | The method | Three phases of evidence |
| 11 | Validation | 82% detection rate, 70% threshold |
| 12 | User Journey Map | Ana — practitioner use case |
| 13 | Live demo | Open live demo CTA |
| 14 | Contributions | Four contributions, one open platform |
| 15 | Video recap | Full walkthrough in one take |
| 16 | Thank you | Close |

### Backup slides (Q&A)

| # | Label | Topic |
|---|-------|-------|
| B1 | Why DIKW | vs. Cynefin, AHP, TAM |
| B2 | Case selection | Criteria for case inclusion |
| B3 | Generalizability | Recurrent, not universal |
| B4 | Scoring algorithm | 16-step weighted scoring |
| B5 | Tie handling | What a tie means and shows |
| B6 | Governance | Three-phase evolution model |
| B7 | TFM scope | Master's vs. doctoral boundaries |
| B8 | Information Architecture | Input-to-output flowchart |

## Regenerating exports

```bash
node export_slides.mjs   # regenerates PDF + 24 PNGs (server must be running)
node export_pptx.cjs     # builds PPTX from slides/
```

## Key research numbers

- **82%** of documented failure factors detected across all five cases
- **70%** validation threshold (Landis & Koch 1977 — substantial agreement)
- **15** practitioner interviews (values taxonomy + tool validation)
- **5** case studies used for retrospective validation
- **24** slides total (16 main + 8 backup)
- **MIT license** — open source

## Context

- **Author**: Ilverzon Zarate
- **Program**: TFM — Master in Advanced Studies in Design, Barcelona (UPC / UB)
- **Tool**: [nexus-flame-delta.vercel.app](https://nexus-flame-delta.vercel.app)
- **Source**: [github.com/Zarfet/reason-road](https://github.com/Zarfet/reason-road)
