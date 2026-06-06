# porto-web

Dylan's portfolio — Next.js 16.2.6 + React 19 + TypeScript + Tailwind CSS 4.

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm) — Node version manager
- [pnpm](https://pnpm.io) — Package manager

## Setup

```bash
# Use correct Node version
nvm use

# Install deps
pnpm install

# Start dev server (Turbopack)
pnpm dev
```

## Commands

| Command         | Description              |
| --------------- | ------------------------ |
| `pnpm dev`      | Dev server (Turbopack)   |
| `pnpm build`    | Production build         |
| `pnpm start`    | Serve production build   |
| `pnpm lint`     | ESLint                   |
| `pnpm typecheck`| TypeScript type check    |
| `pnpm format`   | Prettier format          |

## Tech stack

- **Framework:** Next.js 16.2.6 (App Router)
- **Runtime:** React 19
- **Language:** TypeScript 5 (strict)
- **Styling:** Tailwind CSS 4 (CSS-first, `@theme {}` in `globals.css`)
- **Animation:** Framer Motion 11
- **Fonts:** DM Sans + DM Mono via `next/font/google`
- **Package manager:** pnpm 11
- **Node:** ≥20.9 (pinned to 22 via `.nvmrc`)

## Design tokens

| Token       | Value     |
| ----------- | --------- |
| `--bg`      | `#F8F7F4` |
| `--fg`      | `#0A0A0A` |
| `--accent`  | `#5E0ED7` |
| `--surface` | `#FFFFFF` |
| `--border`  | `#E5E5E5` |
| `--muted`   | `#888888` |
| `--subtle`  | `#AAAAAA` |
| `--success` | `#22C55E` |
