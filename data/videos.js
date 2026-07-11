/**
 * Video Data Source
 * =================
 * This file is the single source of truth for all cinematography videos.
 *
 * HOW TO ADD A VIDEO:
 * 1. Drop your .mp4 file into /public/videos/
 * 2. Add a new object to the array below
 * 3. That's it — the website updates automatically
 *
 * HOW TO REMOVE A VIDEO:
 * 1. Delete the object from this array
 * 2. Optionally remove the .mp4 file from /public/videos/
 *
 * HOW TO REPLACE A VIDEO:
 * 1. Replace the .mp4 file in /public/videos/ (keep the same filename)
 * 2. No code changes needed!
 *
 * NOTE: For Vercel deployment, videos must be under 100MB.
 * Compress with: ffmpeg -i input.mp4 -vcodec libx264 -crf 28 output.mp4
 */

export const videos = [
  {
    id: 1,
    src: "/videos/reel-01.mp4",
    title: "The Art of Moving Images",
    description:
      "Art doesn't stop at the frame. I'm diving into cinematography — exploring how light, motion, and composition come together to tell stories that paintings alone can't capture.",
    label: "",
    primary: true, // This one gets the overlay text
  },
  {
    id: 2,
    src: "/videos/reel-02.mp4",
    title: "Reel 02",
    description: "",
    label: "",
    primary: false,
  },
];
