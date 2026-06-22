/**
 * Artwork Data Source
 * ===================
 * This file is the single source of truth for all gallery content.
 *
 * HOW TO ADD AN ARTWORK:
 * 1. Drop your image file into /public/images/artworks/
 * 2. Add a new object to the array below
 * 3. That's it — the gallery updates automatically
 *
 * HOW TO REMOVE AN ARTWORK:
 * 1. Delete the object from this array
 * 2. Optionally remove the image file from /public/images/artworks/
 *
 * CATEGORIES (for future filter feature):
 * - "portraits"
 * - "paintings"
 * - "sketches"
 * - "anime"
 */

export const artworks = [
  {
    id: 1,
    title: "Crimson Reverie",
    image: "/images/artworks/placeholder-1.svg",
    category: "paintings",
    medium: "Acrylic on Canvas",
    year: 2025,
  },
  {
    id: 2,
    title: "Silent Gaze",
    image: "/images/artworks/placeholder-2.svg",
    category: "portraits",
    medium: "Charcoal on Paper",
    year: 2025,
  },
  {
    id: 3,
    title: "Urban Dusk",
    image: "/images/artworks/placeholder-3.svg",
    category: "paintings",
    medium: "Oil on Canvas",
    year: 2024,
  },
  {
    id: 4,
    title: "Whisper of Lines",
    image: "/images/artworks/placeholder-4.svg",
    category: "sketches",
    medium: "Graphite on Paper",
    year: 2024,
  },
  {
    id: 5,
    title: "Neon Ronin",
    image: "/images/artworks/placeholder-5.svg",
    category: "anime",
    medium: "Digital",
    year: 2025,
  },
  {
    id: 6,
    title: "Golden Hour",
    image: "/images/artworks/placeholder-6.svg",
    category: "paintings",
    medium: "Watercolor",
    year: 2024,
  },
  {
    id: 7,
    title: "The Observer",
    image: "/images/artworks/placeholder-7.svg",
    category: "portraits",
    medium: "Digital",
    year: 2025,
  },
  {
    id: 8,
    title: "Drift",
    image: "/images/artworks/placeholder-8.svg",
    category: "sketches",
    medium: "Ink on Paper",
    year: 2024,
  },
  {
    id: 9,
    title: "Sakura Spirit",
    image: "/images/artworks/placeholder-9.svg",
    category: "anime",
    medium: "Digital",
    year: 2025,
  },
];

/**
 * Available categories for the future filter feature.
 * When building the filter UI, import this array to generate tabs dynamically.
 */
export const categories = [
  { slug: "all", label: "All" },
  { slug: "portraits", label: "Portraits" },
  { slug: "paintings", label: "Paintings" },
  { slug: "sketches", label: "Sketches" },
  { slug: "anime", label: "Anime Art" },
];
