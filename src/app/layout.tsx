import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { SITE, SAME_AS, AIDEVIX } from '@/lib/data';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

const description = `${SITE.name} — ${SITE.role} and ${SITE.subRole} based in ${SITE.location}. ${SITE.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s | ${SITE.name}`,
  },
  description,
  applicationName: `${SITE.name} — Portfolio`,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    'Sunnatbek Yusupov',
    'Sunnatbek Yusupov Aidevix',
    'Aidevix founder',
    'Aidevix CEO',
    'Frontend Engineer Uzbekistan',
    'React developer Tashkent',
    'Next.js developer',
    'Sunnatbek Yusupov portfolio',
  ],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    // og:image is injected automatically from app/opengraph-image.tsx
    type: 'profile',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.role}`,
    description,
    firstName: SITE.firstName,
    lastName: SITE.lastName,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#08080C',
  width: 'device-width',
  initialScale: 1,
};

// Canonical Person entity for Google. This site is the authoritative "home" for
// the Sunnatbek Yusupov entity — sameAs ties every profile (incl. aidevix.uz)
// together and worksFor links the person to the Aidevix organization.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.name,
  givenName: SITE.firstName,
  familyName: SITE.lastName,
  url: SITE.url,
  // Real portrait(s) of the person — the primary signal Google uses to attach a
  // face to the entity (Knowledge Panel / image results). The studio headshot is
  // listed first as the canonical image.
  image: [
    `${SITE.url}${SITE.avatar}`,
    `${SITE.url}/sunnatbek-yusupov-portrait-studio.jpg`,
    `${SITE.url}/sunnatbek-yusupov-teaching-mars-it-school.jpg`,
  ],
  jobTitle: 'Founder & CEO',
  award: [
    'Best Teacher — MARS IT School (Q3 2024)',
  ],
  description,
  email: `mailto:${SITE.email}`,
  knowsAbout: [
    'Artificial Intelligence',
    'Frontend Development',
    'React',
    'Next.js',
    'TypeScript',
    'Software Engineering',
    'Programming Education',
    'Startups',
  ],
  knowsLanguage: ['uz', 'ru', 'en'],
  nationality: { '@type': 'Country', name: 'Uzbekistan' },
  homeLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressLocality: 'Tashkent', addressCountry: 'UZ' },
  },
  worksFor: {
    '@type': 'Organization',
    '@id': 'https://aidevix.uz/#organization',
    name: AIDEVIX.name,
    url: AIDEVIX.url,
  },
  sameAs: SAME_AS,
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: `${SITE.name} — Portfolio`,
  description,
  inLanguage: 'en',
  publisher: { '@id': `${SITE.url}/#person` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
