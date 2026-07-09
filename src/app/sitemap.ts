import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
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
