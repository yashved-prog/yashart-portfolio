# YashArt — Portfolio Website

A minimalist portfolio website for visual artist **@yashart_21**, built with Next.js (App Router).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Add / Remove Artwork

All artwork data lives in a single file: **`data/artworks.js`**

### Adding an artwork

1. Drop your image file (JPG, PNG, or WebP) into `/public/images/artworks/`
2. Add a new object to the `artworks` array in `data/artworks.js`:

```js
{
  id: 10, // unique number
  title: "My New Piece",
  image: "/images/artworks/my-new-piece.jpg",
  category: "paintings", // portraits | paintings | sketches | anime
  medium: "Oil on Canvas",
  year: 2025,
}
```

3. Save and refresh — done!

### Removing an artwork

1. Delete the object from the `artworks` array in `data/artworks.js`
2. Optionally delete the image file from `/public/images/artworks/`

### Replacing the artist portrait

Replace `/public/images/artist-portrait.svg` with your own image (update the file extension in `app/about/page.js` if needed).

## Project Structure

```
portfolio/
├── app/
│   ├── layout.js          # Root layout with navbar & metadata
│   ├── page.js            # Home (hero landing)
│   ├── gallery/page.js    # Gallery (masonry grid)
│   ├── about/page.js      # About the artist
│   └── contact/page.js    # Contact (Instagram DM)
├── components/
│   ├── Navbar/            # Fixed navigation with mobile hamburger
│   ├── GalleryGrid/       # Masonry grid with hover overlays
│   └── Lightbox/          # Modal artwork viewer with enquiry CTA
├── data/
│   └── artworks.js        # ⭐ Edit this file to manage gallery content
└── public/
    └── images/
        └── artworks/      # Drop artwork images here
```

## Tech Stack

- **Next.js** (App Router) with React
- **CSS Modules** — no external UI libraries
- **next/image** for optimized image loading
- Mobile-first responsive design

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com):

1. Push to a GitHub repository
2. Import on Vercel
3. Deploy — no configuration needed

## Design Decisions

- **No pricing** is shown anywhere — all enquiries funnel to Instagram DMs
- **Category filter UI** is planned for Phase 2 — the data already supports it (see the `category` field on each artwork and the `categories` export)
- **Red accent (#C8102E)** is used sparingly: hover states, active nav, CTA buttons
- The design prioritizes the artwork — generous whitespace, no decorative elements
