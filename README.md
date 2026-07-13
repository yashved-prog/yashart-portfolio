# YashArt — Portfolio Website

A portfolio website for for my artworks and visual creations **@yashart_21**

## Website Structure

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

This website is already deployed on https://yashartportfolio.vercel.app/

