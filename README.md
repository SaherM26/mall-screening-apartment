# Mall of America Interactive Sales Deck

An interview project prototype: a browser-based, non-linear sales deck for Mall of America, designed for leasing, sponsorship, and event partnership conversations.

## Subject

Mall of America was selected because it gives the strongest sales-deck signal for a North American mega-mall:

- North America's largest retail and entertainment complex.
- Official leasing story with 32M+ annual customer visits and $1B+ in annual sales.
- Nearly 500 stores, 45+ eateries, and 30+ rides and attractions inside Nickelodeon Universe.
- Publicly documented event reputation: celebrity appearances, live music, product launches, book signings, and movie premieres.
- Strong expansion path into leasing, sponsorship, events, hotels, attractions, and venue-specific modules.

## Tech Stack

- Static HTML
- CSS with responsive layouts and motion
- Vanilla JavaScript
- No build step required

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

Because this is a static app, it can be deployed on GitHub Pages, Netlify, Vercel, or any static host.

For GitHub Pages:

1. Push the repository to GitHub.
2. In repository settings, enable Pages.
3. Set the source to the main branch root.

## Design Decisions

- Built as a deck experience, not a brochure site: full-screen sections, non-linear navigation, cinematic intro, and focused business paths.
- Video is presented as the primary opening action via a property reel modal, with lightweight lazy loading so the first screen stays fast.
- The commercial story is organized around decision-maker intent: lease space, sponsor moments, or book events.
- The code is intentionally modular: leasing tabs, event rows, and module cards can become deeper sub-decks without rewriting the page.

## AI Use

AI was used to accelerate:

- Narrative strategy and section architecture.
- Premium visual direction and UI copy.
- A conceptual generated-visual placeholder for a luxury wing takeover where official imagery may be limited.
- Implementation scaffolding and responsive interaction behavior.

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
