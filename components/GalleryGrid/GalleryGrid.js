'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './GalleryGrid.module.css';
import Lightbox from '../Lightbox/Lightbox';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryGrid({ artworks }) {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(`.${styles.item}`);

      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef}>
      {/* ============================================
          PHASE 2: Category Filter Tabs
          ============================================
          When ready to add filtering, import { categories } from '@/data/artworks'
          and render filter tabs here.
          ============================================ */}

      <div className={styles.masonry}>
        {artworks.map((artwork) => (
          <button
            key={artwork.id}
            className={styles.item}
            onClick={() => setSelectedArtwork(artwork)}
            aria-label={`View ${artwork.title}`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={artwork.image}
                alt={artwork.title}
                width={800}
                height={1000}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.overlayTitle}>{artwork.title}</span>
                  <span className={styles.overlayMeta}>{artwork.medium}</span>
                </div>
                <span className={styles.overlayArrow}>&rarr;</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedArtwork && (
        <Lightbox
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </div>
  );
}
