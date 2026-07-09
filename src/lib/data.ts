// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the whole site. Edit values here — every section,
// the metadata and the JSON-LD schema read from this file.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  url: 'https://sunnatbekyusupov.tech',
  name: 'Sunnatbek Yusupov',
  firstName: 'Sunnatbek',
  lastName: 'Yusupov',
  role: 'Founder & CEO at Aidevix',
  subRole: 'Frontend Engineer & AI Integration Specialist',
  tagline: 'Building AI-first programming education in Uzbekistan.',
  location: 'Tashkent, Uzbekistan',
  email: 'sunnatbeky56@gmail.com',
  // Profesional foto: public/sunnatbek-yusupov.jpg ga qo'ying (kvadrat, ~800x800).
  // Fayl bo'lmasa Avatar komponenti "SY" bosh harflariga tushadi.
  avatar: '/sunnatbek-yusupov.jpg',
  cv: '/Sunnatbek_Yusupov_CV.pdf',
} as const;

export const SOCIALS = [
  { label: 'LinkedIn', handle: 'in/sunnatbekyusupov', url: 'https://www.linkedin.com/in/sunnatbekyusupov/', icon: 'linkedin' },
  { label: 'GitHub', handle: 'SunnatbekYusupovTech', url: 'https://github.com/SunnatbekYusupovTech', icon: 'github' },
  { label: 'Instagram', handle: 'sunnatbekyusupov.tech', url: 'https://www.instagram.com/sunnatbekyusupov.tech', icon: 'instagram' },
  { label: 'Facebook', handle: 'sunnatbek.yusupov.7', url: 'https://www.facebook.com/sunnatbek.yusupov.7', icon: 'facebook' },
  { label: 'Telegram', handle: 'SUNNATBEE', url: 'https://t.me/SUNNATBEE', icon: 'telegram' },
] as const;

// sameAs uchun ishlatiladigan barcha "shu men" havolalari (aidevix.uz ham kiritilgan).
export const SAME_AS = [
  'https://www.linkedin.com/in/sunnatbekyusupov/',
  'https://github.com/SunnatbekYusupovTech',
  'https://www.instagram.com/sunnatbekyusupov.tech',
  'https://www.facebook.com/sunnatbek.yusupov.7',
  'https://t.me/SUNNATBEE',
  'https://aidevix.uz',
];

export const ABOUT = [
  "I'm Sunnatbek Yusupov — a Frontend Engineer, AI Integration Specialist and the Founder & CEO of Aidevix, the first AI-first programming education platform built for the Uzbek-speaking world.",
  "Today I lead the frontend engineering team at Alloplay, a Netflix-style DRM-protected video streaming platform, and I've shipped production applications serving 50,000+ active users with React, Next.js and TypeScript.",
  "As Senior Frontend Mentor & Curriculum Lead at MARS IT School — recognized as Best Teacher (Q3 2024) — I've mentored and graduated 200+ frontend engineers and delivered 100+ technical workshops for over 500 learners.",
  "My mission with Aidevix is bold: prepare 100,000+ AI-fluent developers across Uzbekistan by 2030 and connect local talent to global engineering standards.",
];

// Recognition & milestones — surfaced on the page and in the Person JSON-LD
// (award/knowsAbout) so search engines can attribute them to the entity.
export const ACHIEVEMENTS = [
  { title: 'Best Teacher — MARS IT School', detail: 'Q3 2024 · Frontend & IT instruction', year: '2024' },
  { title: 'Founder & CEO — Aidevix', detail: 'First AI-first coding school in Uzbek', year: '2025' },
  { title: 'Team Lead — Alloplay', detail: 'DRM video streaming · Next.js at scale', year: '2025' },
  { title: '200+ engineers mentored', detail: '100+ workshops · 500+ learners taught', year: '2022—' },
];

// Work history (mirrors the CV) — server-rendered so every role, company and
// achievement is crawlable text tied to the name.
export type Experience = {
  role: string;
  company: string;
  url?: string;
  period: string;
  points: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: 'Team Lead / Senior Frontend Engineer',
    company: 'Alloplay',
    period: 'Dec 2025 — Present',
    points: [
      'Leading the frontend team of a Netflix-style streaming platform with DRM-protected video (Shaka Player, Widevine).',
      'Architected a scalable Next.js + TypeScript app — SSR performance, image CDNs and Core Web Vitals.',
      'Introduced AI-assisted development (Cursor, Copilot), boosting sprint velocity by ~30%.',
    ],
  },
  {
    role: 'Founder & AI Curriculum Lead',
    company: 'Aidevix',
    url: 'https://aidevix.uz',
    period: 'Aug 2025 — Present',
    points: [
      'Founded the premier AI EdTech platform in Central Asia — product vision, content strategy, localized LLM resources.',
      'Designed learning tracks for Prompt Engineering, production LLM workflows and automated AI agents.',
    ],
  },
  {
    role: 'Senior Frontend Mentor & Curriculum Lead',
    company: 'MARS IT School',
    period: 'May 2023 — Present',
    points: [
      'Mentored and graduated 200+ frontend engineers across intensive cohorts — awarded Best Teacher (Q3 2024).',
      'Overhauled the curriculum to integrate AI-first development workflows; delivered 100+ workshops for 500+ learners.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Uysavdo',
    period: 'Jan 2024 — Dec 2024',
    points: [
      "Shipped core features for Uzbekistan's leading real-estate platform serving 50,000+ active users.",
      'Boosted Lighthouse scores (SEO, Accessibility, Speed) by rewriting legacy code into a reusable UI library.',
    ],
  },
  {
    role: 'Frontend Mentor & Instructor',
    company: "Farobiy Academy / Najot Ta'lim",
    period: 'Sep 2022 — May 2023',
    points: [
      'Fast-tracked from peer mentor to assistant instructor; taught HTML5, CSS3, JavaScript and React with 1-on-1 coaching.',
    ],
  },
];

// Curated, real photos of Sunnatbek Yusupov. Descriptive, name-first alt text
// is intentional — it helps Google Images associate the face with the entity.
export type GalleryItem = { src: string; alt: string; caption: string; wide?: boolean };

export const GALLERY: GalleryItem[] = [
  {
    src: '/sunnatbek-yusupov-teaching-mars-it-school.jpg',
    alt: 'Sunnatbek Yusupov teaching a coding class at MARS IT School in Tashkent',
    caption: 'Teaching at MARS IT School',
    wide: true,
  },
  {
    src: '/sunnatbek-yusupov-best-teacher-award.jpg',
    alt: 'Best Teacher award for Sunnatbek Yusupov, MARS IT School, Q3 2024',
    caption: 'Best Teacher — Q3 2024',
  },
  {
    src: '/sunnatbek-yusupov-gamedev-day-uzbekistan.jpg',
    alt: 'Sunnatbek Yusupov at GameDev Day Uzbekistan, organized by IT Park',
    caption: 'GameDev Day Uzbekistan',
  },
  {
    src: '/sunnatbek-yusupov-registan-samarkand.jpg',
    alt: 'Sunnatbek Yusupov at Registan Square in Samarkand, Uzbekistan',
    caption: 'Registan, Samarkand',
  },
  {
    src: '/sunnatbek-yusupov-mars-team.jpg',
    alt: 'Sunnatbek Yusupov with the MARS IT School team',
    caption: 'With the team',
  },
  {
    src: '/sunnatbek-yusupov-suit-portrait.jpg',
    alt: 'Portrait of Sunnatbek Yusupov, Founder & CEO of Aidevix',
    caption: 'Founder & CEO, Aidevix',
    wide: true,
  },
];

// Real, verifiable numbers (mirrors the CV) — concrete stats build E-E-A-T trust.
export const STATS = [
  { value: '3+', label: 'Years engineering' },
  { value: '200+', label: 'Engineers mentored' },
  { value: '50K+', label: 'Users served' },
  { value: '100+', label: 'Workshops delivered' },
];

export type SkillGroup = { title: string; items: string[] };

export const SKILLS: SkillGroup[] = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion'] },
  { title: 'Backend & Data', items: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
  { title: 'Tooling & Cloud', items: ['Git', 'Vercel', 'Figma', 'AI tooling (Claude, Cursor)'] },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  featured?: boolean;
  meta?: string;
};

export const PROJECTS: Project[] = [
  {
    name: 'Aidevix',
    description:
      'The first AI-first programming education platform in Uzbek. Project-based courses in Frontend, Backend, AI & Agents, Python, Mobile and UI/UX — with a 24/7 AI Coach, certificates and a gamified leaderboard.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    href: 'https://aidevix.uz',
    featured: true,
    meta: 'Founder & CEO · Live',
  },
  {
    name: 'Aidevix Backend',
    description:
      'Scalable Node.js/Express API powering the Aidevix platform — auth, courses, video delivery, ranking and payments.',
    tags: ['Node.js', 'Express', 'MongoDB', 'TypeScript'],
    href: 'https://github.com/SunnatbekYusupovTech',
    meta: 'Architecture · Backend',
  },
  {
    name: 'Aidevix App',
    description:
      'The Aidevix mobile experience — bringing courses, the AI Coach and progress tracking to a native-feeling app.',
    tags: ['React', 'TypeScript', 'Mobile'],
    href: 'https://github.com/SunnatbekYusupovTech',
    meta: 'Product · Mobile',
  },
];

export const AIDEVIX = {
  name: 'Aidevix',
  url: 'https://aidevix.uz',
  description:
    'The largest AI & programming learning platform in Uzbek. Learn to build real products with AI tools like Claude Code, Cursor and GitHub Copilot.',
  socials: [
    { label: 'Website', url: 'https://aidevix.uz' },
    { label: 'YouTube', url: 'https://www.youtube.com/@aidevix' },
    { label: 'Instagram', url: 'https://www.instagram.com/aidevix' },
    { label: 'Telegram', url: 'https://t.me/aidevix' },
  ],
} as const;

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Aidevix', href: '#aidevix' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
