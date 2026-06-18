# NEXUS — Defense Deck

Presentation deck for the TFM defense of **NEXUS**: the first replicable protocol for selecting an AI interface type, grounded in the DIKW hierarchy.

## What's in this repo

| File | Purpose |
|------|---------|
| `index.html` | Main slide deck (standalone HTML, no build step) |
| `deck-stage.js` | Slide navigation, keyboard controls, speaker notes |
| `build_pptx.js` | Script to export the deck as `.pptx` via the PowerPoint MCP |
| `NEXUS_Defense.pptx` | Exported PowerPoint version |
| `NEXUS_Defense_Notes.pdf` | Speaker notes PDF |
| `Nexus.m4v` | Demo video embedded in slide 01b |
| `reference/website.html` | NEXUS tool reference (minisite snapshot) |
| `_scratch/` | Working files and experiments |
| `uploads/` | Images and assets used in slides |

## Running the deck

Open `index.html` directly in a browser — no server needed.

**Keyboard controls** (handled by `deck-stage.js`):
- `→` / `Space` — next slide
- `←` — previous slide
- `S` — toggle speaker notes

**Print version**: open `NEXUS Defense-print.html` and print to PDF.

## Slide structure

| # | Slide | Topic |
|---|-------|-------|
| 00 | Title | NEXUS — opening |
| 01 | Hook | Practitioner quote / structural problem |
| 01b | Video | Live demo of NEXUS tool |
| 02 | Gap | Methodologies start too late |
| 03 | Evidence | Five documented failures |
| 04 | Data | AI failure rates (Estrada 2025, RAND 2024) |
| 05 | Framework | Four-stage DIKW process |
| 06 | Research | Three-phase methodology |
| 07 | Results | 82% detection rate, 70% validation threshold |
| 08 | Tool | Live demo slide |
| 09 | Contributions | Four contributions |
| 10 | Close | Thank you |
| B1–B7 | Backup | Q&A backup slides |

## Exporting to PPTX

```bash
node build_pptx.js
```

Requires the PowerPoint MCP server to be running.

## Key research numbers

- **82%** of documented failure factors detected across all five cases
- **70%** validation threshold (Landis & Koch 1977 — substantial agreement)
- **15** practitioner interviews (values taxonomy + tool validation)
- **5** case studies used for retrospective validation
- **MIT license** — open source

## Context

- **Author**: Ilverzon Zarate
- **Program**: TFM (Master's Final Project)
- **Tool**: [NEXUS](../reference/website.html) — 15-minute, no-install, open-source framework
