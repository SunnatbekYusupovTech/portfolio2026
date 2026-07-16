import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/data';

// hreflang alternates for every locale variant of the home page. URLs match the
// HTML hreflang set and each page's canonical (en/x-default are slash-free).
const languages = {
  en: SITE.url,
  uz: `${SITE.url}/uz`,
  ru: `${SITE.url}/ru`,
  'x-default': SITE.url,
};

// Real content-change date (SITE.updatedAt) — not build time — so lastmod only
// moves when the content actually changes, not on every deploy.
const lastModified = new Date(SITE.updatedAt);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE.url}/uz`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: `${SITE.url}/ru`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages },
    },
    // The CV PDF is indexable content — Google surfaces PDFs in name searches.
    {
      url: `${SITE.url}${SITE.cv}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
