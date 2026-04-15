# Changelog

## 2026-04-14

### Added

- Scaffolded a new Next.js, React, TypeScript, and Tailwind site in `institute-website`
- Added app structure, global layout, styling, and shared section components
- Added structured content files for site metadata, homepage sections, team, and impact
- Added mobile sitemap navigation in the header
- Added `README.md` and `CHANGELOG.md`

### Content

- Translated the BBI 2026 pitch deck into a scrolling homepage
- Organized the homepage into Mission, Scope, Budget, Origin, Timeline, Institute, Impact, Team, and Support sections
- Pulled copy from `assets/extracted_text.txt` and aligned language more closely with the original deck tone
- Removed self-referential or placeholder-style text about the site being based on a deck

### Navigation

- Flattened site navigation to homepage section anchors
- Updated the `BBI` header mark to function as a top-of-page home link
- Hid the hero-side sitemap card on desktop and kept it available on mobile
- Ensured anchor clicks land at the top of each section heading block

### Layout and UX

- Tightened the top header vertically
- Compressed the budget section into a denser two-column desktop layout
- Reduced vertical height of the budget progress-bar cards
- Compressed the timeline section so all ten years fit more tightly in a single desktop viewport
- Removed redundant section labels where eyebrow and headline duplicated the same text

### Flattened Homepage Content

- Moved full impact metrics into the homepage
- Expanded the homepage team section to include co-founders, directors, advisors, and BBB founders
- Moved richer support content and contact cards into the homepage
- Removed reliance on homepage click-through prompts for full team and impact content

### Verification

- `npm run lint` passes
- `npm run build` passes
