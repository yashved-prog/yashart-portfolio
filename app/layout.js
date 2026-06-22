import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import CustomCursor from '@/components/CustomCursor/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: 'YashArt — Visual Artist Portfolio',
    template: '%s | YashArt',
  },
  description:
    'Portfolio of YashArt (@yashart_21) — original paintings, portraits, sketches, and anime art. DM on Instagram to enquire.',
  keywords: ['art', 'portfolio', 'paintings', 'portraits', 'sketches', 'anime art', 'visual artist', 'yashart'],
  openGraph: {
    title: 'YashArt — Visual Artist Portfolio',
    description:
      'Original paintings, portraits, sketches, and anime art by YashArt.',
    url: 'https://yashart.vercel.app',
    siteName: 'YashArt',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YashArt — Visual Artist Portfolio',
    description:
      'Original paintings, portraits, sketches, and anime art by YashArt.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <CustomCursor />
        <Navbar />
        <SmoothScroll>
          <main className="pageContent">{children}</main>
        </SmoothScroll>
        <div className="bottomBlur" aria-hidden="true" />
      </body>
    </html>
  );
}
