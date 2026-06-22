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
    </section>
  );
}
