import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/data';

// AI search / answer-engine crawlers (GEO). `*` already allows them, but naming
// them explicitly documents intent and survives any future blanket restriction.
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'YandexBot',
  'CCBot',
  'meta-externalagent',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_CRAWLERS, allow: '/' },
    ],
    sitemap: [`${SITE.url}/sitemap.xml`, `${SITE.url}/image-sitemap.xml`],
    host: SITE.url,
  };
}
