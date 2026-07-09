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
  subRole: 'Frontend Engineer',
  tagline: 'Building AI-first programming education in Uzbekistan.',
  location: 'Tashkent, Uzbekistan',
  email: 'sunnatbeky56@gmail.com',
  // Profesional foto: public/sunnatbek-yusupov.jpg ga qo'ying (kvadrat, ~800x800).
  // Fayl bo'lmasa Avatar komponenti "SY" bosh harflariga tushadi.
  avatar: '/sunnatbek-yusupov.jpg',
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
  "I'm Sunnatbek Yusupov — a frontend engineer and the Founder & CEO of Aidevix, the first AI-first programming education platform built for the Uzbek-speaking world.",
  "I build products with React, Next.js and TypeScript, and I care about turning talented people into engineers who can ship real software using modern AI tools.",
  "Before Aidevix I taught and mentored hundreds of students as an IT instructor — recognized as Best Teacher at MARS IT School (Q3 2024) — and I regularly take part in Uzbekistan's tech community at events like GameDev Day Uzbekistan (IT Park).",
  "My mission with Aidevix is bold: prepare 100,000+ AI-fluent developers across Uzbekistan by 2030 and connect local talent to global engineering standards.",
];

// Recognition & milestones — surfaced on the page and in the Person JSON-LD
// (award/knowsAbout) so search engines can attribute them to the entity.
export const ACHIEVEMENTS = [
  { title: 'Best Teacher — MARS IT School', detail: 'Q3 2024 · Frontend & IT instruction', year: '2024' },
  { title: 'Founder & CEO — Aidevix', detail: 'First AI-first coding school in Uzbek', year: '2024' },
  { title: 'GameDev Day Uzbekistan', detail: 'Participant · IT Park & East Games', year: '2024' },
  { title: 'Mentored 500+ students', detail: 'Frontend, JavaScript & React tracks', year: '—' },
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

export const STATS = [
  { value: '2030', label: 'Mission year' },
  { value: '100K+', label: 'Developers goal' },
  { value: '6+', label: 'Course tracks' },
  { value: '#1', label: 'AI-first in Uzbek' },
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
  { label: 'Aidevix', href: '#aidevix' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
