'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './page.module.css';

const INSTAGRAM_DM_URL = 'https://ig.me/m/yashart_21';
const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/yashart_21/';

export default function ContactPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.contact-reveal',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.contact} ref={sectionRef}>
      <div className={styles.container}>
        <span className={`${styles.label} contact-reveal`}>Contact</span>
        <h1 className={`${styles.title} contact-reveal`}>Let&apos;s Connect</h1>

        <p className={`${styles.text} contact-reveal`}>
          Interested in a piece? Have a commission idea? I&apos;d love to hear
          from you. Drop me a message on Instagram.
        </p>

        <div className={styles.buttonGroup}>
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.dmButton} contact-reveal`}
          >
            <svg
              className={styles.igIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span>DM on Instagram</span>
            <span className={styles.arrow}>&rarr;</span>
          </a>

          <a
            href="mailto:yashart21.collab@gmail.com"
            className={`${styles.dmButton} contact-reveal`}
          >
            <svg
              className={styles.igIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>Email Me</span>
            <span className={styles.arrow}>&rarr;</span>
          </a>
        </div>

        <div className={`${styles.divider} contact-reveal`} aria-hidden="true" />

        <div className={`${styles.handleSection} contact-reveal`}>
          <p className={styles.handleLabel}>Get in touch directly</p>
          <a
            href="mailto:yashart21.collab@gmail.com"
            className={styles.handle}
          >
            yashart21.collab@gmail.com
          </a>
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.handle}
          >
            @yashart_21
          </a>
        </div>
      </div>
    </section>
  );
}
