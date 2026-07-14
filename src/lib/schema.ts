import { AIDEVIX, SAME_AS, SITE } from './data';
import { getDict, localeUrl, LOCALES, type Locale } from './i18n';

// Canonical Person entity for Google. This site is the authoritative "home" for
// the Sunnatbek Yusupov entity — sameAs ties every profile (incl. aidevix.uz)
// together and worksFor links the person to the Aidevix organization. The
// entity itself is language-neutral, so it is identical on every locale page.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.name,
  // Cyrillic spelling — Yandex and Cyrillic-script searches resolve to the same entity.
  alternateName: ['Суннатбек Юсупов', 'Sunnatbek Yusupov'],
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
  jobTitle: ['Founder & CEO at Aidevix', 'Frontend Engineer', 'AI Integration Specialist'],
  award: ['Best Teacher — MARS IT School (Q3 2024)'],
  description: `${SITE.name} — ${SITE.role} and ${SITE.subRole} based in ${SITE.location}.`,
  email: `mailto:${SITE.email}`,
  knowsAbout: [
    'Artificial Intelligence',
    'Prompt Engineering',
    'Large Language Models',
    'Frontend Development',
    'React',
    'Next.js',
    'TypeScript',
    'Software Engineering',
    'Programming Education',
    'AI Agents',
    'EdTech',
    'Startups',
  ],
  knowsLanguage: ['uz', 'ru', 'en'],
  nationality: { '@type': 'Country', name: 'Uzbekistan' },
  homeLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressLocality: 'Tashkent', addressCountry: 'UZ' },
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Frontend Engineer & AI Integration Specialist',
    occupationLocation: { '@type': 'City', name: 'Tashkent' },
    skills: 'React, Next.js, TypeScript, Prompt Engineering, LLM integration',
  },
  worksFor: [
    {
      '@type': 'Organization',
      '@id': 'https://aidevix.uz/#organization',
      name: AIDEVIX.name,
      url: AIDEVIX.url,
    },
    {
      '@type': 'Organization',
      name: 'Alloplay',
      description: 'Video streaming platform — Team Lead / Senior Frontend Engineer',
    },
  ],
  alumniOf: { '@type': 'EducationalOrganization', name: "Najot Ta'lim" },
  // The downloadable CV, tied to the entity so search engines index it under the name.
  subjectOf: {
    '@type': 'CreativeWork',
    name: `${SITE.name} — CV / Resume`,
    url: `${SITE.url}${SITE.cv}`,
    encodingFormat: 'application/pdf',
  },
  sameAs: SAME_AS,
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: `${SITE.name} — Portfolio`,
  description: `${SITE.name} — ${SITE.role} and ${SITE.subRole} based in ${SITE.location}.`,
  inLanguage: [...LOCALES],
  publisher: { '@id': `${SITE.url}/#person` },
};

// Google's recommended markup for personal profile pages — one per locale URL,
// each declaring its own language but pointing at the same Person entity.
function profilePageSchema(locale: Locale) {
  const dict = getDict(locale);
  const url = localeUrl(locale);
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${url}/#profilepage`,
    url,
    name: dict.meta.title,
    inLanguage: locale,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#person` },
    mainEntity: { '@id': `${SITE.url}/#person` },
    dateCreated: SITE.createdAt,
    dateModified: SITE.updatedAt,
  };
}

export function buildSchemas(locale: Locale) {
  return [personSchema, websiteSchema, profilePageSchema(locale)];
}
