# Mall of America Interactive Sales Deck

An interview project prototype: a browser-based, non-linear sales deck for Mall of America, designed for leasing, sponsorship, event booking, and venue partnership conversations.

This is intentionally built as a presentation tool, not a conventional website. It is designed to work on a live sales call or as a standalone link a prospect can explore without narration.

## Live Demo

GitHub Pages URL after deployment:

```text
https://saherm26.github.io/mall-screening-apartment/
```

The app has no build step and can also be deployed with Vercel, Netlify, or any static host.

## Subject

Mall of America was selected because it gives the strongest sales-deck signal for a North American mega-mall:

- North America's largest retail and entertainment complex.
- 32M+ annual visits and $1B+ in annual sales.
- Nearly 500 stores, 45+ eateries, and a major indoor entertainment platform.
- Attractions such as Nickelodeon Universe, SEA LIFE, Crayola Experience, and FlyOver America.
- A credible commercial path across leasing, sponsorship, events, dining, hospitality, and venue modules.

## Experience Map

The deck covers the required Phase 1 story beats:

- Opening: cinematic, video-led intro with immediate scale.
- Why This Property: access, tourism, scale, and year-round demand.
- Retail: segmented leasing pitch for flagships, first-to-market, pop-up, and F&B.
- Luxury: premium positioning and concept takeover.
- Dining & Lifestyle: food as dwell-time and hospitality engine.
- Attractions & Entertainment: core destination differentiator.
- Events & Platform: launches, performances, expos, and cultural moments.
- Deal Paths: expandable modules for leasing, sponsorship, events, and venue concepts.

## Phase 2 Architecture

The code is structured so the final section can expand into deeper sub-decks without a rewrite:

- `moduleCopy` in `app.js` powers clickable module dialogs.
- Retail paths are tabbed by category.
- Event rows are isolated interaction targets.
- The venue module is a working example of a future expo / performing arts / hospitality sub-section.

## Tech Stack

- Static HTML
- CSS with responsive layouts, snap sections, and lightweight motion
- Vanilla JavaScript
- No framework and no build step

This keeps the prototype fast, portable, and GitHub Pages friendly.

## Run Locally

Open `index.html` directly in a browser, or run a local static server:

```bash
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Deploy

For GitHub Pages:

1. Push the repository to GitHub.
2. In repository settings, enable Pages.
3. Set the source to the main branch root.
4. Share the generated public URL.

## Design Decisions

- Built as a deck experience: full-screen sections, deck controls, non-linear nav, and keyboard slide movement.
- Video is the primary opening action, lazy-loaded in a modal so the first screen stays fast.
- The visual system borrows from luxury brand presentation: minimal chrome, large editorial type, restrained color, and high-impact imagery.
- Every section connects to a business action: lease, sponsor, activate, or book.
- Responsive behavior is optimized for desktop and tablet, with mobile-friendly fallbacks.

## AI Use

AI was used to accelerate:

- Sales narrative strategy and deck structure.
- Premium UI direction, interaction planning, and copy tightening.
- A conceptual luxury takeover visual where official assets are limited.
- Implementation scaffolding, accessibility checks, and responsive QA.

See `WRITEUP.md` for the optional brief write-up.

## Performance Notes

- No JavaScript framework or bundler.
- Images are lazy-loaded outside the hero.
- The video iframe is only loaded when the viewer opens the reel.
- CSS motion respects `prefers-reduced-motion`.

## Sources

- Mall of America official press kit: https://www.mallofamerica.com/presskit
- Mall of America leasing page: https://www.mallofamerica.com/leasing
- Mall of America media page: https://www.mallofamerica.com/media
- Mall of America official site: https://www.mallofamerica.com
- AirVuz Mall of America reel: https://www.airvuz.com/video/Mall-of-America?id=57d8c9fe6645aa0dfa06a570
- Wikimedia Commons imagery:
  - https://commons.wikimedia.org/wiki/File:Mall_of_America_Nickelodeon_Universe_Second_Floor.jpg
  - https://commons.wikimedia.org/wiki/File:Nickelodeon_Universe_at_MOA.jpg
  - https://commons.wikimedia.org/wiki/File:Nickelodeon_Universe_Mall_of_America_(53509711872).jpg
  - https://commons.wikimedia.org/wiki/File:2018_Mall_of_America_04.jpg
