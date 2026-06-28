# NEXUS — Defense Deck

Presentation deck for the TFM defense of **NEXUS**: the first replicable protocol for selecting an AI interface type, grounded in the DIKW hierarchy.

## What's in this repo

| File | Purpose |
|------|---------|
| `index.html` | Main slide deck (standalone HTML, no build step) |
| `deck-stage.js` | Slide navigation, keyboard controls, speaker notes overlay |
| `build_pptx.js` | Script to export the deck as `.pptx` |
| `NEXUS_Defense.pptx` | Exported PowerPoint version (with embedded speaker notes) |
| `speaker_notes.md` | Full speaker script — all 24 slides |
| `Nexus.m4v` | Demo video embedded in slide 01b |
| `nexus_process.gif` | Process animation used in slide 15 |
| `uploads/` | Images and assets used in slides |
| `_scratch/` | Working files and experiments |

## Running the deck

Open `index.html` directly in a browser — no server needed.

**Keyboard controls** (handled by `deck-stage.js`):
- `→` / `Space` — next slide
- `←` — previous slide
- `S` — toggle speaker notes panel

## Slide structure

### Main deck

| # | Label | Topic |
|---|-------|-------|
| 01 | Hook | HiPPO effect — the structural problem |
| 02 | What I built | NEXUS overview |
| 03 | The gap in practice | Fifteen professionals, zero frameworks |
| 04 | About me | Ilverzon Zarate — 15 min roadmap |
| 05 | The gap | Frameworks start too late |
| 06 | The cost | Five documented failures |
| 07 | The bottleneck | AI failure rates (Estrada 2025, RAND 2024) |
| 08 | The framework | Four-stage DIKW process |
| 09 | DIKW layers | Wisdom → Knowledge → Information → Data |
| 10 | Research method | Three phases of evidence |
| 11 | Validation | 82% detection rate, 70% threshold |
| 12 | Journey map | Ana — practitioner use case |
| 13 | Live demo | nexus-flame-delta.vercel.app |
| 14 | Contributions | Four contributions, one open platform |
| 15 | Process in motion | nexus_process.gif |
| 16 | Thank you | Close |

### Backup slides (Q&A)

| # | Label | Topic |
|---|-------|-------|
| B1 | Why DIKW | vs. Cynefin, AHP, TAM |
| B2 | Case selection | Five criteria for case inclusion |
| B3 | Generalizability | Recurrent, not universal |
| B4 | Scoring algorithm | Four-step weighted scoring |
| B5 | Tie handling | What a tie means and shows |
| B6 | Governance | Three-mechanism evolution model |
| B7 | TFM scope | Master's vs. doctoral boundaries |
| B8 | Information Architecture | Input-to-output flowchart |

## Exporting to PPTX

```bash
node build_pptx.js
```

Output: `NEXUS_Defense.pptx` with speaker notes embedded in each slide.

## Key research numbers

- **82%** of documented failure factors detected across all five cases
- **70%** validation threshold (Landis & Koch 1977 — substantial agreement)
- **15** practitioner interviews (values taxonomy + tool validation)
- **5** case studies used for retrospective validation
- **24** slides total (16 main + 8 backup)
- **MIT license** — open source

## Context

- **Author**: Ilverzon Zarate
- **Program**: TFM (Master's Final Project)
- **Tool**: [nexus-flame-delta.vercel.app](https://nexus-flame-delta.vercel.app) — 15-minute, no-install, open-source framework
- **Source**: [github.com/Zarfet/reason-road](https://github.com/Zarfet/reason-road)
