# Mall of America Interactive Sales Deck - Brief Write-Up

## Concept

The assignment asks for a presentation deck, not a normal marketing website. I selected Mall of America because it has a strong commercial story: national visibility, massive annual traffic, a mixed retail and entertainment offer, dining, hotels, event programming, and enough public media to create a credible self-contained sales experience.

The product is designed for three buyer groups:

- Retail tenants evaluating leasing opportunities.
- Sponsors and agencies evaluating brand activations.
- Event promoters and producers evaluating bookings and venue concepts.

The opening is built to create fast emotional buy-in: large editorial type, a prominent property reel, key commercial metrics, and immediate paths for leasing, activation, and booking. The rest of the deck lets viewers move non-linearly through the story rather than forcing a fixed slide sequence.

## Design Rationale

The visual direction moved away from a dark cinematic theme into a lighter luxury retail palette. The final direction uses warm off-white surfaces, black editorial typography, restrained gold accents, and large property imagery. This better fits a premium leasing and partnership pitch while still letting the entertainment visuals provide energy.

Each section is built around a business argument:

- Why MOA: access, tourism, and year-round demand.
- Retail: category-specific leasing logic.
- Luxury: premium positioning and takeover potential.
- Dining: food as dwell-time and hospitality infrastructure.
- Attractions: the destination differentiator.
- Events: launches, expos, performances, and cultural programming.
- Deal Paths: expandable modules for Phase 2.

## Technical Approach

The project uses static HTML, CSS, and vanilla JavaScript. That choice keeps the deck fast, easy to deploy, and GitHub Pages friendly. Interactions are intentionally lightweight:

- Section navigation and keyboard deck controls.
- Retail tabs.
- Event selection rows.
- Lazy-loaded video modal.
- Expandable module dialogs powered by structured data in `app.js`.

The architecture is ready for deeper modules without a rewrite. The `moduleCopy` object can grow into dedicated leasing, sponsorship, event, and venue-specific sub-decks.

## AI Use

AI was used as a design and product-building accelerator:

- Translating the assignment brief into a deck architecture.
- Tightening the commercial narrative and section copy.
- Iterating visual direction based on user feedback.
- Creating the conceptual luxury takeover placeholder where official assets are limited.
- Reviewing responsive behavior, interaction states, and submission readiness.

## What I Would Improve With More Time

- Replace public still imagery with a licensed official media kit package.
- Add true background video clips optimized for web delivery.
- Add lightweight analytics hooks for outbound CTA tracking.
- Build deeper sub-decks for sponsorship tiers, venue specs, and leasing packages.
- Add a downloadable one-page leave-behind generated from the selected module.
