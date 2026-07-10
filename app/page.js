'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { artworks } from '@/data/artworks';
import { videos } from '@/data/videos';
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

// Show first 6 artworks as featured
const featured = artworks.slice(0, 6);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Hero entrance timeline ---
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      heroTl
        .fromTo('.hero-title', { y: 100, opacity: 0, skewY: 4 }, { y: 0, opacity: 1, skewY: 0, duration: 1.4 })
        .fromTo('.hero-sub', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.7')
        .fromTo('.hero-tagline', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.3');

      // --- Hero parallax on scroll ---
      gsap.to('.hero-content', {
        y: -80,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.utils.toArray('.featured-card').forEach((card) => {
        const img = card.querySelector('img');
        const info = card.querySelector('.card-info');
        const wrapper = card.querySelector('.image-wrapper-reveal');

        // Reveal card container normally
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Image clip-path reveal (cinematic unveil from bottom)
        if (wrapper) {
          gsap.fromTo(
            wrapper,
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            {
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              duration: 1.4,
              ease: 'power4.inOut',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        // Image clip/scale reveal
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15 },
            {
              scale: 1,
              duration: 1.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }

        if (info) {
          gsap.fromTo(
            info,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: 0.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // --- About section reveal ---
      gsap.utils.toArray('.section-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // --- Horizontal scroll for large featured row ---
      const horizontalSection = document.querySelector('.horizontal-section');
      const horizontalTrack = document.querySelector('.horizontal-track');

      if (horizontalSection && horizontalTrack) {
        const totalScroll = horizontalTrack.scrollWidth - window.innerWidth;

        gsap.to(horizontalTrack, {
          x: -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalSection,
            start: 'top top',
            end: () => `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    const target = document.getElementById('featured');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef}>
      {/* ===== HERO ===== */}
      <section className={`${styles.hero} hero-section`}>
        <Image
          src="/images/main-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className={styles.heroBgImage}
          aria-hidden="true"
        />
        <div className={`${styles.heroContent} hero-content`}>
          <p className={`${styles.heroSub} hero-sub`}>Visual Artist &amp; Creator</p>
          <h1 className={`${styles.heroTitle} hero-title`}>
            YASH<span className={styles.heroAccent}>ART</span>
          </h1>
          <p className={`${styles.heroTagline} hero-tagline`}>
            Paintings &middot; Portraits &middot; Sketches &middot; Anime
          </p>
          <button onClick={handleScrollDown} className={`${styles.heroCta} hero-cta`}>
            <span>Explore Works</span>
            <span className={styles.ctaArrow}>&darr;</span>
          </button>
        </div>

        <button
          onClick={handleScrollDown}
          className={`${styles.scrollIndicator} hero-scroll`}
          aria-label="Scroll down"
        >
          <div className={styles.scrollLine} />
          <span className={styles.scrollLabel}>Scroll</span>
        </button>

        <div className={styles.gridLines} aria-hidden="true">
          <div className={styles.gridLine} />
          <div className={styles.gridLine} />
          <div className={styles.gridLine} />
        </div>
      </section>

      {/* ===== CINEMATOGRAPHY VIDEO SECTION ===== */}
      {videos.length > 0 && (
        <section id="featured" className={styles.cinematographySection}>
          <div className={`${styles.sectionHeader} section-reveal`}>
            <span className={styles.sectionLabel}>Beyond the Canvas</span>
            <h2 className={styles.sectionTitle}>Exploring Cinematography</h2>
          </div>

          <div className={`${styles.videoShowcase} section-reveal`}>
            {videos.map((video) => (
              <div
                key={video.id}
                className={`${styles.videoWrapper} ${!video.primary ? styles.videoSecondary : ''}`}
              >
                <video
                  className={styles.videoPlayer}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {video.primary && (
                  <div className={styles.videoOverlay}>
                    <div className={styles.videoOverlayContent}>
                      {video.label && <span className={styles.videoLabel}>{video.label}</span>}
                      <h3 className={styles.videoTitle}>{video.title}</h3>
                      {video.description && (
                        <p className={styles.videoDescription}>{video.description}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===== HORIZONTAL SCROLL SHOWCASE ===== */}
      <section className={`${styles.horizontalSection} horizontal-section`}>
        <div className={`${styles.horizontalTrack} horizontal-track`}>
          {artworks.map((artwork) => (
            <div key={artwork.id} className={styles.horizontalSlide} data-cursor-text="View Artwork">
              <div className={`${styles.slideImageWrapper} image-wrapper-reveal`}>
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  width={600}
                  height={800}
                  className={styles.slideImage}
                  loading="lazy"
                />
              </div>
              <p className={styles.slideTitle}>{artwork.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT STRIP ===== */}
      <section className={styles.aboutStrip}>
        <div className={`${styles.aboutContent} section-reveal`}>
          <span className={styles.sectionLabel}>About</span>
          <h2 className={styles.aboutTitle}>The Artist Behind the Work</h2>
          <p className={styles.aboutText}>
            I&apos;m Yash — a visual artist exploring the space between classical technique
            and contemporary expression. Every piece begins as a feeling or a fragment
            of a story I want to tell.
          </p>
          <Link href="/about" className={styles.aboutLink}>
            <span>Learn More</span>
            <span className={styles.viewAllArrow}>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ===== CTA FOOTER ===== */}
      <section className={styles.ctaFooter}>
        <div className={`${styles.ctaFooterContent} section-reveal`}>
          <span className={styles.sectionLabel}>Interested?</span>
          <h2 className={styles.ctaFooterTitle}>Let&apos;s Create Something Together</h2>
          <a
            href="https://ig.me/m/yashart_21"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaFooterBtn}
          >
            <span>DM on Instagram</span>
            <span className={styles.viewAllArrow}>&rarr;</span>
          </a>
        </div>
      </section>

      {/* ===== MASSIVE YASH FOOTER ===== */}
      <footer className={styles.massiveFooter}>
        <div className={styles.massiveTextWrapper}>
          <h1 className={styles.massiveText}>YASH</h1>
        </div>
      </footer>
    </div>
  );
}
