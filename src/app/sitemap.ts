import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/data';

// hreflang alternates for every locale variant of the home page.
const languages = {
  en: `${SITE.url}/`,
  uz: `${SITE.url}/uz`,
  ru: `${SITE.url}/ru`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE.url}/uz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: `${SITE.url}/ru`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages },
    },
    // The CV PDF is indexable content — Google surfaces PDFs in name searches.
    {
      url: `${SITE.url}${SITE.cv}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
