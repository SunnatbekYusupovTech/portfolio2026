// ─────────────────────────────────────────────────────────────────────────────
// Locale dictionaries. English strings live in data.ts (single source of truth)
// and are referenced here; uz/ru are full translations of the same content.
// Non-linguistic data (URLs, emails, image srcs, tech tags) stays in data.ts.
// ─────────────────────────────────────────────────────────────────────────────
import { ABOUT, ACHIEVEMENTS, AIDEVIX, EXPERIENCE, GALLERY, NAV, PROJECTS, SITE, SKILLS, STATS } from './data';

export const LOCALES = ['en', 'uz', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

export const localeUrl = (locale: Locale) =>
  locale === 'en' ? SITE.url : `${SITE.url}/${locale}`;

export type Dict = {
  meta: { title: string; description: string; ogLocale: string };
  role: string;
  subRole: string;
  tagline: string;
  location: string;
  skipToContent: string;
  nav: { label: string; href: string }[];
  hero: {
    available: string;
    intro: string;
    getInTouch: string;
    visitAidevix: string;
    downloadCv: string;
  };
  about: { eyebrow: string; title: string; paragraphs: string[] };
  statLabels: string[];
  experience: {
    eyebrow: string;
    title: string;
    // Aligned by index with EXPERIENCE in data.ts (company/url come from there).
    jobs: { role: string; period: string; points: string[] }[];
  };
  aidevix: {
    eyebrow: string;
    badge: string;
    heading: string;
    description: string;
    extra: string;
    missionLabel: string;
    mission: string;
  };
  highlights: {
    eyebrow: string;
    title: string;
    achievements: { title: string; detail: string; year: string }[];
    // Aligned by index with GALLERY in data.ts (src/alt stay English for image SEO).
    captions: string[];
  };
  skills: { eyebrow: string; title: string; groupTitles: string[] };
  projects: {
    eyebrow: string;
    title: string;
    // Aligned by index with PROJECTS in data.ts.
    items: { description: string; meta?: string }[];
  };
  contact: { eyebrow: string; title: string; blurb: string; downloadCv: string };
  footer: { built: string; credit: string };
};

const en: Dict = {
  meta: {
    title: `${SITE.name} — ${SITE.role}`,
    description: `${SITE.name} — ${SITE.role} and ${SITE.subRole} based in ${SITE.location}.`,
    ogLocale: 'en_US',
  },
  role: SITE.role,
  subRole: SITE.subRole,
  tagline: SITE.tagline,
  location: SITE.location,
  skipToContent: 'Skip to content',
  nav: NAV,
  hero: {
    available: 'Available for collaboration & remote work',
    intro:
      "I build products with React, Next.js and TypeScript — and I'm growing Uzbekistan's next generation of AI-fluent developers.",
    getInTouch: 'Get in touch',
    visitAidevix: 'Visit Aidevix',
    downloadCv: 'Download CV',
  },
  about: { eyebrow: 'about', title: 'Who I am', paragraphs: ABOUT },
  statLabels: STATS.map((s) => s.label),
  experience: {
    eyebrow: 'career',
    title: 'Experience',
    jobs: EXPERIENCE.map((job) => ({ role: job.role, period: job.period, points: job.points })),
  },
  aidevix: {
    eyebrow: "what I'm building",
    badge: 'Founder & CEO · Live',
    heading: 'The first AI-first coding education platform in Uzbek',
    description: AIDEVIX.description,
    extra:
      'Structured, project-based courses across Frontend, Backend, AI & Agents, Python, Mobile and UI/UX — backed by a 24/7 AI Coach, verifiable certificates and a gamified leaderboard.',
    missionLabel: 'Mission:',
    mission: 'prepare 100,000+ AI-fluent developers across Uzbekistan by 2030.',
  },
  highlights: {
    eyebrow: 'in the field',
    title: 'Highlights',
    achievements: ACHIEVEMENTS,
    captions: GALLERY.map((g) => g.caption),
  },
  skills: {
    eyebrow: 'toolbox',
    title: 'Skills & stack',
    groupTitles: SKILLS.map((g) => g.title),
  },
  projects: {
    eyebrow: 'selected work',
    title: 'Projects',
    items: PROJECTS.map((p) => ({ description: p.description, meta: p.meta })),
  },
  contact: {
    eyebrow: 'say hello',
    title: "Let's connect",
    blurb:
      "I'm open to collaboration, remote opportunities and conversations about AI, EdTech and building products. The fastest way to reach me:",
    downloadCv: 'Download CV',
  },
  footer: { built: 'Built with Next.js.', credit: 'designed & coded by' },
};

const uz: Dict = {
  meta: {
    title: `${SITE.name} — Aidevix asoschisi va CEO'si`,
    description: `${SITE.name} — Aidevix asoschisi va CEO'si, Toshkentdagi Frontend muhandis va AI integratsiya mutaxassisi.`,
    ogLocale: 'uz_UZ',
  },
  role: "Aidevix asoschisi va CEO'si",
  subRole: 'Frontend muhandis va AI integratsiya mutaxassisi',
  tagline: "O'zbekistonda AI-first dasturlash ta'limini qurmoqdaman.",
  location: "Toshkent, O'zbekiston",
  skipToContent: "Kontentga o'tish",
  nav: [
    { label: 'Haqimda', href: '#about' },
    { label: 'Tajriba', href: '#experience' },
    { label: 'Aidevix', href: '#aidevix' },
    { label: 'Yutuqlar', href: '#highlights' },
    { label: "Ko'nikmalar", href: '#skills' },
    { label: 'Loyihalar', href: '#projects' },
    { label: 'Aloqa', href: '#contact' },
  ],
  hero: {
    available: 'Hamkorlik va masofaviy ishlar uchun ochiqman',
    intro:
      "Men React, Next.js va TypeScript bilan mahsulotlar quraman — va O'zbekistonning AI'ni erkin qo'llaydigan yangi avlod dasturchilarini tayyorlayapman.",
    getInTouch: "Bog'lanish",
    visitAidevix: "Aidevix'ga o'tish",
    downloadCv: 'CV yuklab olish',
  },
  about: {
    eyebrow: 'men haqimda',
    title: 'Men kimman',
    paragraphs: [
      "Men Sunnatbek Yusupovman — Frontend muhandis, AI integratsiya mutaxassisi hamda o'zbek tilida so'zlashuvchi auditoriya uchun yaratilgan ilk AI-first dasturlash ta'limi platformasi Aidevix'ning asoschisi va CEO'siman.",
      "Hozirda Alloplay — DRM bilan himoyalangan, Netflix uslubidagi video-striming platformasida frontend jamoasini boshqaraman; React, Next.js va TypeScript bilan 50 000+ faol foydalanuvchiga xizmat qiladigan production ilovalarni ishlab chiqarganman.",
      "MARS IT School'da Senior Frontend mentor va o'quv dasturi rahbari sifatida — «Eng yaxshi o'qituvchi» (2024 Q3) unvoniga sazovor bo'lganman — 200+ frontend muhandisni tayyorladim va 500+ o'quvchi uchun 100+ texnik seminar o'tkazdim.",
      "Aidevix bilan maqsadim katta: 2030-yilgacha O'zbekiston bo'ylab 100 000+ AI'ni erkin qo'llaydigan dasturchini tayyorlash va mahalliy iste'dodlarni xalqaro muhandislik standartlariga ulash.",
    ],
  },
  statLabels: ['Yil muhandislik tajribasi', 'Muhandis tayyorlandi', 'Foydalanuvchiga xizmat', "Seminar o'tkazildi"],
  experience: {
    eyebrow: 'karyera',
    title: 'Tajriba',
    jobs: [
      {
        role: 'Team Lead / Senior Frontend muhandis',
        period: '2025 dek — hozir',
        points: [
          'DRM bilan himoyalangan (Shaka Player, Widevine) Netflix uslubidagi striming platformasining frontend jamoasini boshqaryapman.',
          "Kengaytiriladigan Next.js + TypeScript ilovasi arxitekturasini yaratdim — SSR unumdorligi, rasm CDN'lari va Core Web Vitals.",
          'AI yordamidagi dasturlashni (Cursor, Copilot) joriy qilib, sprint tezligini ~30% oshirdim.',
        ],
      },
      {
        role: "Asoschi va AI o'quv dasturi rahbari",
        period: '2025 avg — hozir',
        points: [
          'Markaziy Osiyodagi yetakchi AI EdTech platformasiga asos soldim — mahsulot vizyoni, kontent strategiyasi, mahalliylashtirilgan LLM resurslari.',
          "Prompt Engineering, production LLM jarayonlari va avtomatlashtirilgan AI agentlar bo'yicha o'quv yo'nalishlarini ishlab chiqdim.",
        ],
      },
      {
        role: "Senior Frontend mentor va o'quv dasturi rahbari",
        period: '2023 may — hozir',
        points: [
          "Intensiv guruhlarda 200+ frontend muhandisni tayyorlab bitirdim — «Eng yaxshi o'qituvchi» (2024 Q3) mukofotiga sazovor bo'ldim.",
          "O'quv dasturini AI-first ish jarayonlari bilan yangiladim; 500+ o'quvchi uchun 100+ seminar o'tkazdim.",
        ],
      },
      {
        role: 'Frontend dasturchi',
        period: '2024 yan — 2024 dek',
        points: [
          "O'zbekistonning 50 000+ faol foydalanuvchiga ega yetakchi ko'chmas mulk platformasi uchun asosiy funksiyalarni ishlab chiqdim.",
          "Eski kodni qayta ishlatiladigan UI kutubxonasiga o'tkazib, Lighthouse ko'rsatkichlarini (SEO, Accessibility, Speed) oshirdim.",
        ],
      },
      {
        role: "Frontend mentor va o'qituvchi",
        period: '2022 sen — 2023 may',
        points: [
          "Tengdosh mentorlikdan yordamchi o'qituvchilikkacha tez ko'tarildim; HTML5, CSS3, JavaScript va React'ni birma-bir coaching bilan o'rgatdim.",
        ],
      },
    ],
  },
  aidevix: {
    eyebrow: 'nima qurayapman',
    badge: 'Asoschi va CEO · Jonli',
    heading: "O'zbek tilidagi ilk AI-first dasturlash ta'limi platformasi",
    description:
      "O'zbek tilidagi eng yirik AI va dasturlash o'quv platformasi. Claude Code, Cursor va GitHub Copilot kabi AI vositalar bilan haqiqiy mahsulotlar qurishni o'rganing.",
    extra:
      "Frontend, Backend, AI va agentlar, Python, Mobile hamda UI/UX bo'yicha loyihaga asoslangan tizimli kurslar — 24/7 AI murabbiy, tasdiqlanadigan sertifikatlar va gamifikatsiyalangan reyting bilan.",
    missionLabel: 'Missiya:',
    mission: "2030-yilgacha O'zbekiston bo'ylab 100 000+ AI'ni erkin qo'llaydigan dasturchini tayyorlash.",
  },
  highlights: {
    eyebrow: 'amalda',
    title: 'Yutuqlar',
    achievements: [
      { title: "Eng yaxshi o'qituvchi — MARS IT School", detail: "2024 Q3 · Frontend va IT ta'limi", year: '2024' },
      { title: 'Asoschi va CEO — Aidevix', detail: "O'zbek tilidagi ilk AI-first dasturlash maktabi", year: '2025' },
      { title: 'Team Lead — Alloplay', detail: 'DRM video striming · Next.js katta miqyosda', year: '2025' },
      { title: '200+ muhandis tayyorlandi', detail: "100+ seminar · 500+ o'quvchi", year: '2022—' },
    ],
    captions: [
      "MARS IT School'da dars o'tmoqda",
      "Eng yaxshi o'qituvchi — 2024 Q3",
      'GameDev Day Uzbekistan',
      'Registon, Samarqand',
      'Jamoa bilan',
      'Asoschi va CEO, Aidevix',
    ],
  },
  skills: {
    eyebrow: 'asboblar',
    title: "Ko'nikmalar va stek",
    groupTitles: ['Tillar', 'Frontend', "Backend va ma'lumotlar", 'Vositalar va bulut'],
  },
  projects: {
    eyebrow: 'tanlangan ishlar',
    title: 'Loyihalar',
    items: [
      {
        description:
          "O'zbek tilidagi ilk AI-first dasturlash ta'limi platformasi. Frontend, Backend, AI va agentlar, Python, Mobile hamda UI/UX bo'yicha loyihaga asoslangan kurslar — 24/7 AI murabbiy, sertifikatlar va gamifikatsiyalangan reyting bilan.",
        meta: 'Asoschi va CEO · Jonli',
      },
      {
        description:
          "Aidevix platformasini quvvatlaydigan kengaytiriladigan Node.js/Express API — autentifikatsiya, kurslar, video yetkazish, reyting va to'lovlar.",
        meta: 'Arxitektura · Backend',
      },
      {
        description:
          'Aidevix mobil tajribasi — kurslar, AI murabbiy va progress kuzatuvini native his beruvchi ilovaga olib kiradi.',
        meta: 'Mahsulot · Mobil',
      },
    ],
  },
  contact: {
    eyebrow: 'salom ayting',
    title: "Bog'lanamiz",
    blurb:
      "Hamkorlik, masofaviy imkoniyatlar hamda AI, EdTech va mahsulot yaratish haqidagi suhbatlarga ochiqman. Menga eng tez yetib borish yo'li:",
    downloadCv: 'CV yuklab olish',
  },
  footer: { built: 'Next.js bilan qurilgan.', credit: 'dizayn va kod —' },
};

const ru: Dict = {
  meta: {
    title: `Суннатбек Юсупов (${SITE.name}) — основатель и CEO Aidevix`,
    description: `Суннатбек Юсупов — основатель и CEO Aidevix, Frontend-инженер и специалист по AI-интеграции из Ташкента.`,
    ogLocale: 'ru_RU',
  },
  role: 'Основатель и CEO Aidevix',
  subRole: 'Frontend-инженер и специалист по AI-интеграции',
  tagline: 'Строю AI-first образование в программировании в Узбекистане.',
  location: 'Ташкент, Узбекистан',
  skipToContent: 'К содержимому',
  nav: [
    { label: 'Обо мне', href: '#about' },
    { label: 'Опыт', href: '#experience' },
    { label: 'Aidevix', href: '#aidevix' },
    { label: 'Достижения', href: '#highlights' },
    { label: 'Навыки', href: '#skills' },
    { label: 'Проекты', href: '#projects' },
    { label: 'Контакты', href: '#contact' },
  ],
  hero: {
    available: 'Открыт к сотрудничеству и удалённой работе',
    intro:
      'Создаю продукты на React, Next.js и TypeScript — и готовлю новое поколение разработчиков Узбекистана, свободно владеющих AI.',
    getInTouch: 'Связаться',
    visitAidevix: 'Перейти на Aidevix',
    downloadCv: 'Скачать CV',
  },
  about: {
    eyebrow: 'обо мне',
    title: 'Кто я',
    paragraphs: [
      'Я Суннатбек Юсупов — Frontend-инженер, специалист по AI-интеграции, основатель и CEO Aidevix — первой AI-first платформы обучения программированию для узбекоязычной аудитории.',
      'Сегодня я руковожу frontend-командой Alloplay — стримингового сервиса в стиле Netflix с DRM-защитой видео, и создал production-приложения на React, Next.js и TypeScript, которыми пользуются более 50 000 активных пользователей.',
      'Как Senior Frontend-ментор и руководитель учебной программы в MARS IT School — с наградой «Лучший преподаватель» (Q3 2024) — я подготовил и выпустил 200+ frontend-инженеров и провёл 100+ технических воркшопов для 500+ студентов.',
      'Моя миссия с Aidevix амбициозна: подготовить к 2030 году 100 000+ разработчиков в Узбекистане, свободно владеющих AI, и связать местные таланты с мировыми инженерными стандартами.',
    ],
  },
  statLabels: ['Лет в разработке', 'Инженеров подготовлено', 'Пользователей продуктов', 'Воркшопов проведено'],
  experience: {
    eyebrow: 'карьера',
    title: 'Опыт работы',
    jobs: [
      {
        role: 'Team Lead / Senior Frontend-инженер',
        period: 'дек 2025 — наст. время',
        points: [
          'Руковожу frontend-командой стримингового сервиса в стиле Netflix с DRM-защитой видео (Shaka Player, Widevine).',
          'Спроектировал масштабируемое приложение на Next.js + TypeScript — SSR-производительность, CDN для изображений и Core Web Vitals.',
          'Внедрил AI-ассистированную разработку (Cursor, Copilot), ускорив спринты примерно на 30%.',
        ],
      },
      {
        role: 'Основатель и руководитель AI-программы',
        period: 'авг 2025 — наст. время',
        points: [
          'Основал ведущую AI EdTech платформу Центральной Азии — видение продукта, контент-стратегия, локализованные LLM-ресурсы.',
          'Разработал учебные треки по Prompt Engineering, production LLM-процессам и автоматизированным AI-агентам.',
        ],
      },
      {
        role: 'Senior Frontend-ментор и руководитель учебной программы',
        period: 'май 2023 — наст. время',
        points: [
          'Подготовил и выпустил 200+ frontend-инженеров в интенсивных потоках — награда «Лучший преподаватель» (Q3 2024).',
          'Перестроил учебную программу под AI-first подход; провёл 100+ воркшопов для 500+ студентов.',
        ],
      },
      {
        role: 'Frontend-разработчик',
        period: 'янв 2024 — дек 2024',
        points: [
          'Разрабатывал ключевые функции ведущей платформы недвижимости Узбекистана с 50 000+ активных пользователей.',
          'Поднял показатели Lighthouse (SEO, Accessibility, Speed), переписав legacy-код в переиспользуемую UI-библиотеку.',
        ],
      },
      {
        role: 'Frontend-ментор и преподаватель',
        period: 'сен 2022 — май 2023',
        points: [
          'Быстро вырос от пир-ментора до ассистента преподавателя; преподавал HTML5, CSS3, JavaScript и React с индивидуальным коучингом.',
        ],
      },
    ],
  },
  aidevix: {
    eyebrow: 'что я создаю',
    badge: 'Основатель и CEO · Live',
    heading: 'Первая AI-first платформа обучения программированию на узбекском языке',
    description:
      'Крупнейшая платформа обучения AI и программированию на узбекском языке. Учитесь создавать реальные продукты с AI-инструментами: Claude Code, Cursor и GitHub Copilot.',
    extra:
      'Структурированные проектные курсы по Frontend, Backend, AI и агентам, Python, Mobile и UI/UX — с AI-коучем 24/7, проверяемыми сертификатами и геймифицированным рейтингом.',
    missionLabel: 'Миссия:',
    mission: 'подготовить к 2030 году 100 000+ разработчиков по всему Узбекистану, свободно владеющих AI.',
  },
  highlights: {
    eyebrow: 'в деле',
    title: 'Достижения',
    achievements: [
      { title: 'Лучший преподаватель — MARS IT School', detail: 'Q3 2024 · Frontend и IT-обучение', year: '2024' },
      { title: 'Основатель и CEO — Aidevix', detail: 'Первая AI-first школа программирования на узбекском', year: '2025' },
      { title: 'Team Lead — Alloplay', detail: 'DRM-видеостриминг · Next.js в масштабе', year: '2025' },
      { title: '200+ инженеров подготовлено', detail: '100+ воркшопов · 500+ студентов', year: '2022—' },
    ],
    captions: [
      'Преподавание в MARS IT School',
      'Лучший преподаватель — Q3 2024',
      'GameDev Day Uzbekistan',
      'Регистан, Самарканд',
      'С командой',
      'Основатель и CEO, Aidevix',
    ],
  },
  skills: {
    eyebrow: 'инструменты',
    title: 'Навыки и стек',
    groupTitles: ['Языки', 'Frontend', 'Backend и данные', 'Инструменты и облако'],
  },
  projects: {
    eyebrow: 'избранные работы',
    title: 'Проекты',
    items: [
      {
        description:
          'Первая AI-first платформа обучения программированию на узбекском языке. Проектные курсы по Frontend, Backend, AI и агентам, Python, Mobile и UI/UX — с AI-коучем 24/7, сертификатами и геймифицированным рейтингом.',
        meta: 'Основатель и CEO · Live',
      },
      {
        description:
          'Масштабируемый API на Node.js/Express, на котором работает платформа Aidevix — авторизация, курсы, доставка видео, рейтинг и платежи.',
        meta: 'Архитектура · Backend',
      },
      {
        description:
          'Мобильный опыт Aidevix — курсы, AI-коуч и трекинг прогресса в приложении с нативным ощущением.',
        meta: 'Продукт · Mobile',
      },
    ],
  },
  contact: {
    eyebrow: 'на связи',
    title: 'Давайте свяжемся',
    blurb:
      'Открыт к сотрудничеству, удалённым проектам и разговорам об AI, EdTech и создании продуктов. Самый быстрый способ связаться со мной:',
    downloadCv: 'Скачать CV',
  },
  footer: { built: 'Сделано на Next.js.', credit: 'дизайн и код —' },
};

const DICTS: Record<Locale, Dict> = { en, uz, ru };

export const getDict = (locale: Locale): Dict => DICTS[locale];
