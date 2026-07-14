import type { Metadata } from 'next';
import { SITE } from './data';
import { getDict, localeUrl, type Locale } from './i18n';

// hreflang map rendered on every page — all variants point at each other and
// x-default falls back to the English root.
const LANGUAGES = {
  en: `${SITE.url}/`,
  uz: `${SITE.url}/uz`,
  ru: `${SITE.url}/ru`,
  'x-default': `${SITE.url}/`,
};

const KEYWORDS = [
  'Sunnatbek Yusupov',
  'Sunnatbek Yusupov Aidevix',
  'Aidevix founder',
  'Aidevix CEO',
  'Frontend Engineer Uzbekistan',
  'AI Integration Specialist',
  'Prompt Engineering expert Uzbekistan',
  'React developer Tashkent',
  'Next.js developer',
  'Frontend Team Lead',
  'MARS IT School Best Teacher',
  'Sunnatbek Yusupov CV',
  'Sunnatbek Yusupov portfolio',
  'Суннатбек Юсупов',
  'Суннатбек Юсупов Aidevix',
  'Sunnatbek Yusupov dasturchi',
  'Sunnatbek Yusupov Oʻzbekiston',
];

export function buildMetadata(locale: Locale): Metadata {
  const dict = getDict(locale);
  const url = localeUrl(locale);
  const others = (['en_US', 'uz_UZ', 'ru_RU'] as const).filter((l) => l !== dict.meta.ogLocale);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: dict.meta.title,
      template: `%s | ${SITE.name}`,
    },
    description: dict.meta.description,
    applicationName: `${SITE.name} — Portfolio`,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    keywords: KEYWORDS,
    alternates: {
      canonical: url,
      languages: LANGUAGES,
    },
    openGraph: {
      // og:image is injected automatically from app/opengraph-image.tsx
      type: 'profile',
      url,
      siteName: SITE.name,
      title: dict.meta.title,
      description: dict.meta.description,
      firstName: SITE.firstName,
      lastName: SITE.lastName,
      locale: dict.meta.ogLocale,
      alternateLocale: [...others],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
    },
    verification: {
      google: 'vug4DeupYoJ3V1zIEKH59ltdfWWyKMqSwCktgXp2kB0',
      yandex: '8b301af7a14e4521',
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
      icon: [
        // .ico fallback for legacy crawlers and Yandex SERP favicons.
        { url: '/favicon.ico', sizes: '32x32' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
    },
  };
}
