# Dooramp Bible — Project Handoff

## Overview

This repo contains the official website for the **National Dooramp League (NDL)**, branded as the "Dooramp Bible." It also houses two child sites that will eventually live on their own domains.

**Live URL:** https://doorampbible.vercel.app
**Repo:** https://github.com/bsolidgold/doorampbible
**Hosting:** Vercel (auto-deploys on push to `main`)

---

## Repo Structure

```
doorampbible/
├── index.html          # Home page — news, highlights, coming soon
├── rules.html          # Rules of dooramp (current + version history)
├── history.html        # Founders, 90s era, game evolution
├── style.css           # Shared styles (dark sports-league theme)
├── logos/              # Brand assets
│   ├── dooSilhouette.png   # Primary logo (1024x1536)
│   ├── favicon-32.png      # Browser tab favicon
│   └── favicon-180.png     # Apple touch icon
├── .gitignore          # Vercel config excluded
├── nationaldooleague/  # Child site: nationaldooleague.com
│   ├── index.html
│   └── README.md
├── dooleague/          # Child site: dooleague.com
│   ├── index.html
│   └── README.md
└── HANDOFF.md          # This file
```

---

## Sites

| Site | Domain | Subfolder | Status |
|------|--------|-----------|--------|
| Dooramp Bible (main) | doorampbible.com | `/` (root) | Phase 1 live |
| National Doo League | nationaldooleague.com | `/nationaldooleague` | Placeholder |
| Doo League | dooleague.com | `/dooleague` | Placeholder |

---

## Tech Stack

- **Static HTML/CSS** — no framework, no build step
- **Hosted on Vercel** — connected to GitHub, auto-deploys on push
- **Shared stylesheet** — `style.css` in root, child sites reference via `../style.css`

---

## Design System

- **Colors:** Dark background (`#1a1a2e`), red accent (`#e94560`), light text (`#eaeaea`)
- **Typography:** System font stack
- **Logo:** `logos/dooSilhouette.png` — used in nav (40px), hero (120px), footer (50px, dimmed)
- **Style:** Sports-league aesthetic, uppercase headings, card-based layouts

---

## Roadmap

### Phase 1 (Current) — Foundation
- [x] Home page with news section
- [x] Rules page (placeholder, supports version history)
- [x] History page (founders, 90s era)
- [x] YouTube link (youtube.com/@Doorampball)
- [x] Child site subfolders created

### Phase 2 — Content & Shop
- [ ] Write and publish official rules
- [ ] Add rule version history/changelog
- [ ] Shop section: official doorampball, trampoline, dome, retaining wall
- [x] Logo integrated (dooSilhouette) — nav, hero, footer, favicon
- [ ] Additional social media links as accounts are created

### Phase 3 — Player Stats
- [ ] Player database (will need a backend or CMS)
- [ ] Searchable stats, records, leaderboards
- [ ] Player profile pages

### Phase 4 — League Operations
- [ ] NDL standings and schedules
- [ ] Team pages
- [ ] Game results and box scores

### Phase 5 — Winterdome & Broadcasting
- [ ] Tournament bracket and info page
- [ ] Live streaming integration
- [ ] Pay-per-view payment system

---

## Social Media

| Platform | URL | Status |
|----------|-----|--------|
| YouTube | https://youtube.com/@Doorampball | Active |
| Others | TBD | Planned |

---

## How to Work on This

1. **Clone the repo:** `git clone https://github.com/bsolidgold/doorampbible.git`
2. **Edit files** — it's plain HTML/CSS, open in any editor
3. **Preview locally** — open any `.html` file in a browser, or run a local server: `npx serve .`
4. **Deploy** — push to `main` and Vercel auto-deploys

### Working on child sites:
- `nationaldooleague/` and `dooleague/` are self-contained subfolders
- They share the root `style.css` but can have their own styles added later
- When ready, these can be split into separate Vercel projects with their own custom domains

---

## Key Decisions

- **Static HTML chosen** for simplicity — no framework overhead for content that changes infrequently
- **When dynamic features are needed** (player stats, live scores), consider Next.js or similar
- **Rule versioning** — designed to support an archive of rule changes over time
- **Child sites in same repo** — keeps everything together for now; can be separated later

---

## Contacts

- **Ashton** — Creative direction, rules, content
- **Bret** — Technical setup, deployment, repo management
