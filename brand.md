# Brand Guidelines

## Identity

**Name:** Dylansius Putra Prasetio ("Dylan")
**Positioning:** Product builder × AI strategist × startup operator
**Tagline:** Turning market gaps into working systems, with AI.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Background | `#F8F7F4` | Page background, warm off-white |
| Foreground | `#0A0A0A` | Primary text, headings, borders |
| Accent | `#5E0ED7` | Deep purple, ≤5% of any view. Stats "+", periods, hover states |
| Surface | `#FFFFFF` | Cards, elevated surfaces |
| Border | `#E5E5E5` | 0.5px default borders |
| Muted | `#888888` | Secondary text, descriptions |
| Subtle | `#AAAAAA` | Labels, tertiary text |
| Success | `#22C55E` | Status indicators, availability dot |

## Typography

**Display + Body:** DM Sans (weights: 300, 400, 500, 700)
**Labels + Stats:** DM Mono (weights: 400, 500)

### Scale

| Element | Size | Weight | Line-Height | Tracking |
|---------|------|--------|-------------|----------|
| Hero headline | clamp(56px, 9vw, 120px) | 700 | 0.87 | -2.5px |
| Section headline | clamp(36px, 5vw, 72px) | 700 | 0.95 | normal |
| Sub-headline | clamp(18px, 2vw, 24px) | 400 | 1.4 | normal |
| Body text | 16px | 400 | 1.7 | normal |
| UI labels | 11px | 500 | 1.2 | 3px (uppercase) |
| Tiny labels | 9px | 500 | 1.2 | 2.5px (uppercase) |

**Rules:**
- Never use weight 600 for body text
- Never use Inter, Roboto, or system fonts
- Mixed case for headlines and body; ALL CAPS only for labels/stats/tags

## Tone of Voice

**Confident.** Direct. Warm. Never corporate.

**Banned words:** passionate, synergy, leverage, ninja, guru, rockstar, disrupt (as a self-descriptor), hustle, grind.

**Preferred constructions:**
- "Shipped" instead of "delivered"
- "Built" instead of "developed"
- "Gap" instead of "opportunity" (when talking about problems)
- Metric-first: "87% efficiency gain" not "improved efficiency significantly"

## Spacing

- Section vertical padding: 140px desktop / 80px mobile
- Section horizontal gutter: 48px desktop / 24px mobile
- Content max-width: 1280px
- Card padding: 32px desktop / 24px mobile
- Card radius: 8px
- Button radius: 2–4px
- Between sections: 120–160px

## Animation

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`
- Hero entrance: ≤1.5s total
- Scroll reveal: fadeUp with `once: true`, margin `-80px`
- Hover: translateY(-4px) + subtle shadow, never scale > 1.04
- Always respect `prefers-reduced-motion`

## Assets

- Profile photo: `dylan.jpeg` (4:5 aspect, sharp corners)
- Hero blob: `hero-blob.png` (300×300, WebP/AVIF optimized)
- CV: `cv.pdf` in `/public`
- OG image: 1200×630
