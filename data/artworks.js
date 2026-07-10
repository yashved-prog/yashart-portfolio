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
    title: "Do Naina",
    image: "/images/artworks/26141.jpg",
    category: "sketches",
    medium: "Graphite on Paper",
    year: 2025,
  },
  {
    id: 2,
    title: "Eyes That Know Too Much",
    image: "/images/artworks/27968.jpg",
    category: "sketches",
    medium: "Charcoal on Paper",
    year: 2025,
  },
  {
    id: 3,
    title: "Beloved Eyes",
    image: "/images/artworks/27970.jpg",
    category: "sketches",
    medium: "Graphite on Paper",
    year: 2024,
  },
  {
    id: 4,
    title: "Vengeance",
    image: "/images/artworks/29790.jpg",
    category: "portraits",
    medium: "Charcoal on Paper",
    year: 2024,
  },
  {
    id: 5,
    title: "One of Us",
    image: "/images/artworks/33063.jpg",
    category: "portraits",
    medium: "Color on Black Paper",
    year: 2025,
  },
  {
    id: 6,
    title: "Billie Eilish",
    image: "/images/artworks/33823.jpg",
    category: "portraits",
    medium: "Colored Pencil on Paper",
    year: 2024,
  },
  {
    id: 7,
    title: "Perspective",
    image: "/images/artworks/34916.jpeg",
    category: "paintings",
    medium: "Mixed Media on Paper",
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
