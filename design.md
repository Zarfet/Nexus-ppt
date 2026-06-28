# NEXUS Defense — Design System

Reference for replicating the slide deck in PowerPoint or any other tool.  
Canvas: **1920 × 1080 px** (16:9). All sizes below are in px unless noted.

---

## Color Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--bg` | `#F4F4F6` | Slide background |
| `--surface` | `#FFFFFF` | Cards, panels, tables |
| `--surface-2` | `#F9F9FB` | Subtle card variant |
| `--ink` | `#18181F` | Primary text, headings |
| `--ink-2` | `#4B5563` | Body text, descriptions |
| `--ink-3` | `#6B7280` | Captions, labels, metadata |
| `--accent` | `#2563EB` | Brand blue — highlights, eyebrows, emphasis |
| `--accent-soft` | `rgba(37,99,235,0.08)` | ≈ `#EEF2FF` — accent card fill |
| `--accent-bd` | `rgba(37,99,235,0.22)` | ≈ `#C7D7FB` — accent card border |
| `--border` | `#E4E4EA` | Dividers, card outlines |
| `--border-2` | `#D1D1DB` | Stronger borders |
| `--success` | `#16A34A` | "Yes" badges, positive indicators |
| `--success-soft` | `#EAF3DE` | "Yes" badge fill |

### Dark slide variant (slide 07 — The bottleneck)

| Element | Value |
|---------|-------|
| Background | `#18181F` |
| Heading | `#FFFFFF` |
| Heading emphasis `em` | `#8AB4FF` |
| Body text | `#B5B7C2` |
| Captions / mono | `#858896` |
| Eyebrow / accent | `#8AB4FF` |

---

## Typography

### Typefaces

| Role | Family |
|------|--------|
| Display / headings / body | **Inter** (sans-serif) |
| Eyebrows / labels / code / slugs | **JetBrains Mono** (monospace) |
| Fallback | `system-ui, sans-serif` |

### Type Scale

| Class | Size | Weight | Leading | Tracking | Color | Font |
|-------|------|--------|---------|----------|-------|------|
| `h1.display` | 128 px | 700 | 0.94 | −0.045 em | `--ink` | Inter |
| Title hero (`h1` inside `.title-hero`) | 184 px | 700 | 0.90 | −0.050 em | `--ink` | Inter |
| `h2.title` | 84 px | 700 | 1.02 | −0.035 em | `--ink` | Inter |
| Thank-you display | 180 px | 700 | 0.92 | −0.05 em | `--ink` | Inter |
| `.title-tag` (subtitle line) | 44 px | 400 | 1.30 | −0.010 em | `--ink-2` | Inter |
| `.body-lg` | 34 px | 400 | 1.45 | −0.005 em | `--ink-2` | Inter |
| `.body` | 28 px | 400 | 1.50 | — | `--ink-2` | Inter |
| `.small` | 24 px | 400 | 1.50 | +0.020 em | `--ink-3` | JetBrains Mono |
| `.eyebrow` | 24 px | 500 | — | +0.220 em | `--accent` | JetBrains Mono |
| `.kicker` | 20 px | 500 | — | +0.180 em | `--ink-3` | JetBrains Mono |

**Emphasis rule:** `em` inside headings renders in `--accent` (`#2563EB`), not italic.

### Component-specific sizes

| Component | Size | Weight | Color | Font |
|-----------|------|--------|-------|------|
| Step number (`.step-n`) | 24 px | 500 | `--accent` | JetBrains Mono |
| Step title (`.step-t`) | 28 px | 600 | `--ink` | Inter |
| Step description (`.step-d`) | 22 px | 400 | `--ink-2` | Inter |
| Contributions title (`.contrib-t`) | 36 px | 700 | `--ink` | Inter |
| Contributions title — position card | 40 px | 700 | `--accent` | Inter |
| Contributions description (`.contrib-d`) | 24 px | 400 | `--ink-2` | Inter |
| Metric number (`.metric-num`) | 92 px | 700 | `--accent` | JetBrains Mono |
| Big figure (`.big-fig`) | 160 px | 700 | `--accent` | JetBrains Mono |
| Stats number (`.stat-num`) | 192 px | 700 | `--ink` | JetBrains Mono |
| Stats description (`.stat-desc`) | 26 px | 400 | `#B5B7C2` | Inter |
| Stats source (`.stat-source`) | 24 px | 400 | `#858896` | JetBrains Mono |
| Phase metric (`.phase-metric`) | large display | 700 | `--accent` | JetBrains Mono |
| Cue label (`.cue-label`) | 24 px | 600 | `--accent` | JetBrains Mono |
| Cue text (`.cue-text`) | 28 px | 500 | `--ink` | Inter |
| Cue sub-text (`.sub`) | 24 px | 400 | `--ink-2` | JetBrains Mono |
| Table header (validation table) | 24 px | 500 | `#FFFFFF` | JetBrains Mono |
| Table cell | 24 px | 400 | `--ink` | Inter |
| URL card | 24 px | 500 | `#FFFFFF` | JetBrains Mono |
| Slide slug / footer | 7 pt (print) | — | `--ink-3` | JetBrains Mono |
| Case name (`.case-name`) | 30 px | 700 | `--ink` | Inter |
| Case year (`.case-year`) | 24 px | 400 | `--ink-3` | JetBrains Mono |
| Case fail label (`.case-fail`) | 24 px | 500 | `--accent` | JetBrains Mono |
| Case description (`.case-desc`) | 24 px | 400 | `--ink-2` | Inter |

---

## Layout

### Slide padding

```
Top:    90 px
Left:   120 px
Right:  120 px
Bottom: 120 px
```

### Key spacing tokens

| Element | Value |
|---------|-------|
| `.slide-head` bottom margin | 32 px (some slides: 16–44 px) |
| Gap inside `.slide-head` | 32 px |
| `.two-col` gap | 80 px |
| `.steps` gap between rows | 1 px (border-separated) |
| `.phase-grid` gap | 24 px |
| `.contrib-grid` gap | 1 px (border-separated) |
| `.cases-strip` gap | 1 px (border-separated) |
| `.metrics-grid` gap | 24 px |
| `.demo-wrap` gap | 80 px |
| `.demo-cue` internal gap | 20 px |
| `.cue-row` bottom border padding | 16 px |

---

## Eyebrow

Each section title uses an eyebrow line above the `h2`:

- **Left line:** 44 px wide, 1.5 px tall, color `--accent`
- **Gap between line and text:** 18 px
- **Text:** JetBrains Mono, 24 px, weight 500, letter-spacing +0.22 em, `text-transform: uppercase`
- **Color:** `--accent` (`#2563EB`) on light slides; `#8AB4FF` on dark slides

---

## Cards & Panels

### Standard card (`.step`, `.metric`, `.contrib-card`, etc.)

| Property | Value |
|----------|-------|
| Background | `--surface` (`#FFFFFF`) |
| Border | 1 px solid `--border` (`#E4E4EA`) |
| Border radius | 14 px |
| Padding | varies — typically 28–56 px |

### Accent card (`.step.first`, `.contrib-card.position`, DIKW Wisdom column)

| Property | Value |
|----------|-------|
| Background | `--accent-soft` ≈ `#EEF2FF` |
| Left border | 5 px solid `--accent` |
| Border radius | 14 px |

### Pull quote (`.pull-quote`)

| Property | Value |
|----------|-------|
| Left border | 4–5 px solid `--accent` |
| Background | `--surface` |
| Border radius | 14 px |
| Internal padding | ~28 px |
| Text size | 26–30 px |
| Text color | `--ink` |

### URL / CTA card (`.url-card`)

| Property | Value |
|----------|-------|
| Background | `--ink` (`#18181F`) |
| Text color | `#FFFFFF` |
| Border radius | 12 px |
| Padding | 22 px 32 px |
| Font | JetBrains Mono, 24 px |
| Indicator dot | 10 × 10 px circle, `#8AB4FF` |

---

## Tables (Validation slide)

| Part | Background | Text | Font | Size |
|------|-----------|------|------|------|
| Header row | `#18181F` (ink) | `#FFFFFF` | JetBrains Mono | 24 px, uppercase, +0.10 em |
| Body rows | `#FFFFFF` | `--ink` | Inter | 24 px |
| "Yes" badge | `#EAF3DE` | `#16A34A` | JetBrains Mono | 24 px, +0.08 em |
| Cell padding | 20 px 24 px | — | — | — |
| Border between rows | 1 px `--border` | — | — | — |

---

## Slide Footer (slug)

Every slide has a footer bar near the bottom:

| Element | Value |
|---------|-------|
| Position | absolute, bottom 36 px |
| Left text | `NEXUS` (bold) + ` · Defense` |
| Right text | Slide number |
| Font | JetBrains Mono, ~18 px display / 7 pt print |
| Color | `--ink-3` (`#6B7280`) on light; `#858896` on dark |
| Letter spacing | +0.15 em |

The slug sits on a gradient fade (`--bg` → transparent) to protect legibility over content.

---

## Slide-by-slide notes

| Slide | Title size | Special |
|-------|-----------|---------|
| 01 Hook | `h2.title` 84 px | Right panel: dark box `#18181F` |
| 04 Title | Hero `h1` 184 px | Top accent stripe, bottom meta row |
| 07 Bottleneck | `h2.title` 84 px | **Dark slide** — full `#18181F` bg |
| 08 Framework | `h2.title` 84 px | Title inside left col of two-col grid |
| 13 Demo | `h2.title` 84 px | URL card centered, bullet list mono |
| 16 Thank you | `h1` 180 px | Two-col: text left, gif right |

---

## Fonts to install

1. **Inter** — [rsms.me/inter](https://rsms.me/inter) or Google Fonts
2. **JetBrains Mono** — [jetbrains.com/lp/mono](https://www.jetbrains.com/lp/mono) or Google Fonts
