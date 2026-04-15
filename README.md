# Bombay Beach Institute Site

Single-page Next.js site for the Bombay Beach Institute, built from the `BBI_Deck_2026_V1.pdf` pitch deck and the extracted copy in `assets/extracted_text.txt`.

## Overview

This project translates the 2026 BBI pitch deck into a scrolling homepage with flat section navigation and mobile sitemap access. The site is structured around the main narrative arc of the deck:

- Mission
- Scope
- Budget
- Origin
- Timeline
- Institute
- Impact
- Team
- Support

The homepage now carries the substantive impact, team, and support content directly in the main scroll rather than hiding it behind separate click-through pages.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Content Sources

- `BBI_Deck_2026_V1.pdf`
- `assets/extracted_text.txt`

## Project Structure

- `app/`
  App routes and global layout
- `components/`
  Shared UI, section shell, header, and mobile sitemap nav
- `content/`
  Structured content extracted and adapted from the deck
- `assets/`
  Source text and extracted media from the PDF

## Key Implementation Notes

- The homepage uses section anchors for primary navigation.
- The `BBI` mark in the header returns to the top of the page.
- Desktop navigation is flat and section-based.
- Mobile navigation uses a sitemap dropdown plus the hero index panel.
- Budget and timeline sections were compressed to better fit within a single desktop viewport.
- Homepage content has been rewritten to remove meta commentary about the source deck and present the material directly as site copy.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

## Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.
