'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.about-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.about} ref={sectionRef}>
      <div className={styles.header}>
        <span className={`${styles.label} about-reveal`}>About</span>
        <h1 className={`${styles.title} about-reveal`}>The Artist</h1>
      </div>

      <div className={styles.container}>
        <div className={`${styles.portraitWrapper} about-reveal`}>
          <Image
            src="/images/artist-pfp.jpg"
            alt="YashArt — Artist portrait"
            width={480}
            height={600}
            className={styles.portrait}
            priority
          />
        </div>

        <div className={styles.bio}>
          <p className={`${styles.text} about-reveal`}>
            Hi, I&apos;m Yash — a visual artist exploring the space between
            classical technique and contemporary expression. My work spans
            paintings, portraits, detailed sketches, and anime-inspired pieces.
          </p>

          <p className={`${styles.text} about-reveal`}>
            Every piece begins as a feeling or a fragment of a story I want
            to tell. I work across mediums — graphite, colorpencil, mixed
            media, charcoal, ink, and digital — depending on what the subject
            demands.
          </p>

          <p className={`${styles.text} about-reveal`}>
            I&apos;m always open to commissions and collaborations. If a piece
            catches your eye, or you have something specific in mind, feel
            free to reach out.
          </p>

          <div className={`${styles.signature} about-reveal`}>
            <span className={styles.dash} aria-hidden="true" />
            <a
              href="https://www.instagram.com/yashart_21/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.handle}
            >
              @yashart_21
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
