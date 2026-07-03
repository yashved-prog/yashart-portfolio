import Image from 'next/image';
import { artworks } from '@/data/artworks';
import GalleryGrid from '@/components/GalleryGrid/GalleryGrid';
import styles from './page.module.css';

export const metadata = {
  title: 'Gallery',
  description:
    'Browse original paintings, portraits, sketches, and anime art by YashArt. DM on Instagram to enquire about any piece.',
};

export default function GalleryPage() {
  return (
    <section className={styles.gallery}>
      <Image
        src="/images/main-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        className={styles.galleryBgImage}
        aria-hidden="true"
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.label}>Portfolio</span>
          <h1 className={styles.title}>Selected Works</h1>
          <p className={styles.subtitle}>
            Tap any piece to view details &amp; enquire
          </p>
        </div>

        <div className={styles.gridWrapper}>
          <GalleryGrid artworks={artworks} />
        </div>
      </div>
    </section>
  );
}
