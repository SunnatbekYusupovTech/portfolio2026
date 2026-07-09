import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/data';

// PWA web app manifest — improves installability and gives crawlers a canonical
// name/theme. Next.js serves this at /manifest.webmanifest and links it in <head>.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.role}`,
    short_name: SITE.firstName,
    description: SITE.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#08080C',
    theme_color: '#08080C',
    icons: [
      { src: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { src: '/apple-icon', type: 'image/png', sizes: '180x180' },
    ],
  };
}
