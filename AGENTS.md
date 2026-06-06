# AGENTS.md

## Project Context

**Name:** Dylansius Putra Prasetio | Portfolio Website
**Owner:** Dylan (Dylansius Putra Prasetio)
**Location:** Surakarta, Indonesia
**Positioning:** Product builder × AI strategist × startup operator
**Audience:** Founders, VCs, hiring managers, hackathon orgs, fellow builders
**Quality Bar:** Awwwards SOTD candidate; Lighthouse ≥95 across all metrics
**Tone:** Confident, direct, warm. Never corporate. Banned: "passionate", "synergy", "leverage", "ninja"

## Stack

- **Framework:** Next.js 16.2.6 (App Router, Turbopack)
- **Runtime:** React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS 4 (CSS-first, `@theme {}` in `globals.css`)
- **Animation:** Framer Motion 11
- **Fonts:** DM Sans + DM Mono via `next/font/google`
- **Package Manager:** pnpm 11.1.2
- **Node:** ≥20.9 (pinned to 22 via `.nvmrc`)
- **Deploy:** Static export (`output: 'export'`) on Vercel

## Design Tokens

```
Background:    #F8F7F4  (warm off-white)
Foreground:    #0A0A0A  (near-black)
Accent:        #5E0ED7  (deep purple, ≤5% of any view)
Surface:       #FFFFFF  with 0.5px #E5E5E5 borders
Muted text:    #888888
Subtle text:   #AAAAAA
Success dot:   #22C55E

Fonts: DM Sans (300,400,500,700) + DM Mono (400,500)
Easing: cubic-bezier(0.22, 1, 0.36, 1)
Gutter: 48px desktop / 24px mobile
```

## File Structure

```
app/               → Next.js App Router pages
  layout.tsx       → fonts, metadata, global providers
  page.tsx         → composes sections (Server Component)
  globals.css      → Tailwind + CSS variables + keyframes
  sitemap.ts       → dynamic sitemap
  robots.ts        → robots.txt
  not-found.tsx    → 404 page
  error.tsx        → error boundary
  opengraph-image.tsx → dynamic OG image
  icon.tsx         → favicon
components/
  sections/        → Hero, About, Projects, Experience, Skills, Achievements, Contact
  global/          → PageLoader, FloatingNav, CustomCursor
  primitives/      → Reveal, ClipReveal, SectionHeader, Pd, Sep
  ui/              → SocialBtn, icons
contexts/          → PageLoaderContext
data/              → about, projects, experience, skills, achievements, contact
lib/               → motion.ts, useBreakpoint.ts
public/            → images, cv.pdf
```

## Conventions

- All sections are Client Components (`'use client'`) when they use Framer Motion
- `page.tsx` is a Server Component: it dynamically imports client sections
- Use `next/image` for all images, no raw `<img>` tags
- All external links use `rel="noopener noreferrer" target="_blank"`
- Respect `prefers-reduced-motion` in every animation
- Mobile-first: breakpoints at 640/768/1024/1280
- Use Tailwind classes where possible; CSS variables for colors

## RULES

1. **High quality Code** | easy to understand structure, clean code, minimal magic
2. **Always give the best and highest quality output** | every detail matters
3. **Don't hallucinate** | use skills, agents, docs, ctx7 for docs. Verify everything
4. **Make efficient and robust output** | not overkill, but high performance
5. **Responsiveness is a must** | content/assets must never feel "weird" on any screen
6. **High and premium quality performance** | low latency, no lag, WOW factor interface
7. **Robust infrastructure** | no AI SLOP design or copywriting
8. **Always ask if anything feels unclear** | never assume, confirm with user
9. **Iterate and learn** | if an approach fails, try a different one with highest quality in mind. Efficiency, premium feel, great animation, and performance are paramount

## Additional Guidelines

- Be creative and innovative on sections that feel "dull", but ensure it matches the overall editorial, premium design
- Reference docs: `docs/LANDING_PAGE.md` (design brief) and `docs/PORTFOLIO_WEB.md` (engineering spec)
- Never use Inter, Roboto, or generic system fonts
- Never use weight 600 for body text | only 400, 500, or 700
- Purple is the accent, not the theme. Black typography is the design
- Generous whitespace is a design element, not emptiness
- Stats displayed like financial data | structured, confident

---

*End of AGENTS.md. Keep this file updated when architecture or rules change.*
