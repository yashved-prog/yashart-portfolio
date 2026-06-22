'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import Image from 'next/image';
import styles from './Lightbox.module.css';

const INSTAGRAM_DM_URL = 'https://ig.me/m/yashart_21';

export default function Lightbox({ artwork, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 250);
  }, [onClose]);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  if (!artwork) return null;

  return (
    <div 
      className={`${styles.overlay} ${isClosing ? styles.overlayClosing : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div 
        className={`${styles.dialog} ${isClosing ? styles.closing : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.content}>
          <button
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close lightbox"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>

          <div className={styles.imageWrapper}>
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              sizes="(max-width: 768px) 95vw, (max-width: 1200px) 75vw, 60vw"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          <div className={styles.info}>
            <h2 id="lightbox-title" className={styles.title}>{artwork.title}</h2>
            <p className={styles.meta}>
              {artwork.medium}{artwork.year ? `, ${artwork.year}` : ''}
            </p>
            <a
              href={INSTAGRAM_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.enquireButton}
            >
              Enquire on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
