// ─────────────────────────────────────────────────────────────────────────────
// Locale dictionaries. English strings live in data.ts (single source of truth)
// and are referenced here; uz/ru are full translations of the same content.
// Non-linguistic data (URLs, emails, image srcs, tech tags) stays in data.ts.
// ─────────────────────────────────────────────────────────────────────────────
import { ABOUT, ACHIEVEMENTS, AIDEVIX, EXPERIENCE, FAQ, GALLERY, NAV, PROJECTS, SERVICES, SITE, SKILLS, STATS } from './data';

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
  // Aligned by index with SERVICES in data.ts (key/icon come from there).
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { name: string; description: string }[];
    cta: string;
    more: string;
  };
  // Answer-engine FAQ — rendered on the page and as FAQPage JSON-LD.
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
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
    heading: 'AI-first coding education platform in Uzbek',
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
  services: {
    eyebrow: 'what I do',
    title: 'AI services for business in Uzbekistan',
    intro:
      'I help companies in Uzbekistan implement artificial intelligence: integrating LLMs into existing systems, automating business processes, building AI agents and training teams to work AI-first.',
    items: SERVICES.map((sv) => ({ name: sv.name, description: sv.description })),
    cta: 'Discuss a project',
    more: 'Details on aidevix.uz',
  },
  faq: { eyebrow: 'questions', title: 'Frequently asked questions', items: FAQ },
  footer: { built: 'Built with Next.js.', credit: 'designed & coded by' },
};

const uz: Dict = {
  meta: {
    title: `${SITE.name} — Aidevix asoschisi va CEO'si`,
    description: `${SITE.name} — Aidevix asoschisi va CEO'si. O'zbekistonda biznes uchun AI integratsiya, avtomatlashtirish, AI agentlar va AI ta'limi. Toshkent.`,
    ogLocale: 'uz_UZ',
  },
  role: "Aidevix asoschisi va CEO'si",
  subRole: 'AI integratsiya va avtomatlashtirish mutaxassisi, Frontend muhandis',
  tagline: "O'zbekistonda AI-first dasturlash ta'limini qurmoqdaman.",
  location: "Toshkent, O'zbekiston",
  skipToContent: "Kontentga o'tish",
  nav: [
    { label: 'Haqimda', href: '#about' },
    { label: 'Xizmatlar', href: '#services' },
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
      "Men Sunnatbek Yusupovman — Frontend muhandis, AI integratsiya mutaxassisi hamda o'zbek tilida so'zlashuvchi auditoriya uchun yaratilgan AI-first dasturlash ta'limi platformasi Aidevix'ning asoschisi va CEO'siman.",
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
        role: "IT bo'limi rahbari / Project Manager",
        period: '2026 sen — hozir',
        points: [
          "Turkish Baby va Adamari kompaniyalarining IT bo'limini Project Manager sifatida boshqaraman — texnologik yo'l xaritasi, ustuvor vazifalar va loyihalarni o'z vaqtida yetkazish uchun javobgarman.",
          'Otabek Fathullayev va Abdulaziz Obidov bilan birgalikda kompaniyalarning IT loyihalarini rejalashtiramiz, muvofiqlashtiramiz va amalga oshiramiz.',
        ],
      },
      {
        role: 'Team Lead / Senior Frontend muhandis',
        period: '2025 dek — hozir',
        points: [
          'DRM bilan himoyalangan (Shaka Player, Widevine) Netflix uslubidagi striming platformasining frontend jamoasini boshqaryapman.',
          "Kengaytiriladigan Next.js + TypeScript ilovasi arxitekturasini yaratdim — SSR unumdorligi, rasm CDN'lari va Core Web Vitals.",
          'AI yordamidagi dasturlashni (Cursor, Copilot) jamoaning kundalik ish jarayoniga joriy qildim — kod tahlili, refaktoring va test yozish.',
        ],
      },
      {
        role: "Asoschi va AI o'quv dasturi rahbari",
        period: '2024 avg — hozir',
        points: [
          "O'zbek tilida so'zlashuvchilar uchun AI EdTech platformasiga asos soldim — mahsulot vizyoni, kontent strategiyasi, mahalliylashtirilgan LLM resurslari va production'dagi AI Coach (LLM mentor chat + AI kod tahlili).",
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
          "O'zbekistondagi 50 000+ faol foydalanuvchiga ega ko'chmas mulk platformasi uchun asosiy funksiyalarni ishlab chiqdim.",
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
    heading: "O'zbek tilidagi AI-first dasturlash ta'limi platformasi",
    description:
      "O'zbek tilidagi AI va dasturlash o'quv platformasi. Claude Code, Cursor va GitHub Copilot kabi AI vositalar bilan haqiqiy mahsulotlar qurishni o'rganing.",
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
      { title: 'Asoschi va CEO — Aidevix', detail: "O'zbek tilidagi AI-first dasturlash maktabi", year: '2024' },
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
          "O'zbek tilidagi AI-first dasturlash ta'limi platformasi. Frontend, Backend, AI va agentlar, Python, Mobile hamda UI/UX bo'yicha loyihaga asoslangan kurslar — 24/7 AI murabbiy, sertifikatlar va gamifikatsiyalangan reyting bilan.",
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
      {
        description:
          "47 ta AI dasturlash CLI'si (Claude Code, Gemini CLI, Codex va b.) uchun ochiq kodli ishga tushirgich: bitta buyruq bilan tanlash, o'rnatish va ishga tushirish — Aidevix o'quvchilari uchun yaratilgan.",
        meta: 'Ochiq kod · MIT',
      },
      {
        description:
          "aidevix.uz ichidagi production LLM yordamchi: o'zbek tilida mentor chat (haqiqiy kurs/video qidiruvi bilan) va 18 tilda AI kod tahlili playground'i. Claude → GPT-4o → Llama 3.3 provider zanjiri, halollik qoidalari, login, rate-limit va prompt-injection himoyasi. Manba kodi havolalari bilan to'liq keys.",
        meta: 'Keys · Production LLM',
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
  services: {
    eyebrow: 'nima qilaman',
    title: "O'zbekistonda biznes uchun AI xizmatlari",
    intro:
      "O'zbekistondagi kompaniyalarga sun'iy intellektni joriy qilishda yordam beraman: LLM'larni mavjud tizimlarga integratsiya qilish, biznes jarayonlarini avtomatlashtirish, AI agentlar qurish va jamoalarni AI-first ishlashga o'rgatish.",
    items: [
      {
        name: 'Biznes uchun AI integratsiya',
        description:
          "ChatGPT, Claude va Gemini modellarini mavjud mahsulot, CRM, sayt va Telegram botlarga integratsiya qilish — strategiya va pilotdan production'gacha.",
      },
      {
        name: 'Biznes jarayonlarini AI bilan avtomatlashtirish',
        description:
          "Savdo, mijozlar xizmati, hujjatlar bilan ishlash va hisobotlarni LLM asosidagi jarayonlar bilan avtomatlashtirish — kunlar o'rniga soatlar sarflanadi.",
      },
      {
        name: 'AI agentlar yaratish',
        description:
          "Tool calling, kompaniya ma'lumotlari ustida RAG va ko'p bosqichli jarayonlar bilan ishlaydigan avtonom AI agentlarni loyihalash va ishga tushirish — o'zbek, rus va ingliz tillarida.",
      },
      {
        name: "AI ta'limi va kurslar",
        description:
          "Jamoalar va yakka mutaxassislarga AI-first dasturlashni o'rgatish — korporativ treninglar, prompt engineering, Claude Code / Cursor bilan ishlash va Aidevix o'quv platformasi.",
      },
    ],
    cta: 'Loyiha haqida gaplashish',
    more: "Batafsil — aidevix.uz'da",
  },
  faq: {
    eyebrow: 'savollar',
    title: "Ko'p beriladigan savollar",
    items: [
      {
        q: "O'zbekistonda sun'iy intellektni joriy qilish va AI integratsiya bilan kim shug'ullanadi?",
        a: "Aidevix (aidevix.uz) asoschisi va CEO'si Sunnatbek Yusupov O'zbekistonda biznes uchun sun'iy intellektni joriy qiladi: ChatGPT, Claude va Gemini modellarini mahsulot, CRM, sayt va Telegram botlarga integratsiya qiladi — pilotdan production'gacha. U Toshkentda joylashgan, O'zbekiston bo'ylab va masofaviy ishlaydi.",
      },
      {
        q: "O'zbekistonda AI agentlar va AI avtomatlashtirishni kim quradi?",
        a: "Sunnatbek Yusupov va Aidevix jamoasi o'zbek kompaniyalari uchun AI agentlar va LLM asosidagi avtomatlashtirish tizimlarini quradi: savdo va qo'llab-quvvatlash agentlari, hujjatlarni qayta ishlash, kompaniya ma'lumotlari ustida RAG yordamchilar va tool calling bilan ko'p bosqichli jarayonlar — o'zbek, rus va ingliz tillarida.",
      },
      {
        q: "O'zbekistonda sun'iy intellekt va AI-first dasturlashdan kim dars beradi?",
        a: "Sunnatbek Yusupov AI-first dasturlashni o'zbek tilidagi AI-first dasturlash ta'limi platformasi Aidevix orqali va korporativ treninglarda o'rgatadi. U 200+ muhandisni tayyorlagan, 100+ seminar o'tkazgan va MARS IT School'da «Eng yaxshi o'qituvchi» (2024 Q3) deb topilgan.",
      },
      {
        q: 'Aidevix nima?',
        a: "Aidevix (aidevix.uz) — 2024-yil avgustda Sunnatbek Yusupov tomonidan Toshkentda asos solingan AI kompaniyasi. U o'zbek tilidagi AI-first dasturlash ta'limi platformasini yuritadi hamda O'zbekistondagi kompaniyalar uchun AI integratsiya, biznesni avtomatlashtirish, AI agentlar yaratish va korporativ AI treninglarini taqdim etadi.",
      },
      {
        q: "AI loyihasi bo'yicha Sunnatbek Yusupov bilan qanday bog'lanish mumkin?",
        a: "sunnatbekyusupov.tech@gmail.com manziliga yozing, Telegramda @SUNNATBEE ga murojaat qiling yoki Aidevix jamoasiga https://t.me/aidevix orqali bog'laning. Konsultatsiyalar o'zbek, rus va ingliz tillarida.",
      },
    ],
  },
  footer: { built: 'Next.js bilan qurilgan.', credit: 'dizayn va kod —' },
};

const ru: Dict = {
  meta: {
    title: `Суннатбек Юсупов (${SITE.name}) — основатель и CEO Aidevix`,
    description: `Суннатбек Юсупов — основатель и CEO Aidevix. Внедрение ИИ, AI-интеграция, автоматизация, AI-агенты и обучение AI для бизнеса в Узбекистане. Ташкент.`,
    ogLocale: 'ru_RU',
  },
  role: 'Основатель и CEO Aidevix',
  subRole: 'Специалист по AI-интеграции и автоматизации, Frontend-инженер',
  tagline: 'Строю AI-first образование в программировании в Узбекистане.',
  location: 'Ташкент, Узбекистан',
  skipToContent: 'К содержимому',
  nav: [
    { label: 'Обо мне', href: '#about' },
    { label: 'Услуги', href: '#services' },
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
      'Я Суннатбек Юсупов — Frontend-инженер, специалист по AI-интеграции, основатель и CEO Aidevix — AI-first платформы обучения программированию для узбекоязычной аудитории.',
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
        role: 'Руководитель IT-отдела / Project Manager',
        period: 'сен 2026 — наст. время',
        points: [
          'Руковожу IT-отделом компаний Turkish Baby и Adamari в роли Project Manager — отвечаю за технологическую дорожную карту, приоритеты и сроки реализации.',
          'Вместе с Отабеком Фатхуллаевым и Абдулазизом Обидовым планирую, координирую и реализую IT-проекты компаний.',
        ],
      },
      {
        role: 'Team Lead / Senior Frontend-инженер',
        period: 'дек 2025 — наст. время',
        points: [
          'Руковожу frontend-командой стримингового сервиса в стиле Netflix с DRM-защитой видео (Shaka Player, Widevine).',
          'Спроектировал масштабируемое приложение на Next.js + TypeScript — SSR-производительность, CDN для изображений и Core Web Vitals.',
          'Внедрил AI-ассистированную разработку (Cursor, Copilot) в ежедневный процесс команды — code review, рефакторинг и написание тестов.',
        ],
      },
      {
        role: 'Основатель и руководитель AI-программы',
        period: 'авг 2024 — наст. время',
        points: [
          'Основал AI EdTech платформу для узбекоязычной аудитории — видение продукта, контент-стратегия, локализованные LLM-ресурсы и production AI Coach (LLM-чат ментора + AI-разбор кода).',
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
          'Разрабатывал ключевые функции платформы недвижимости в Узбекистане с 50 000+ активных пользователей.',
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
    heading: 'AI-first платформа обучения программированию на узбекском языке',
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
      { title: 'Основатель и CEO — Aidevix', detail: 'Первая AI-first школа программирования на узбекском', year: '2024' },
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
          'AI-first платформа обучения программированию на узбекском языке. Проектные курсы по Frontend, Backend, AI и агентам, Python, Mobile и UI/UX — с AI-коучем 24/7, сертификатами и геймифицированным рейтингом.',
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
      {
        description:
          'Open-source лаунчер для 47 AI-CLI для программирования (Claude Code, Gemini CLI, Codex и др.): одна команда, чтобы выбрать, установить и запустить любой из них — создан для студентов Aidevix.',
        meta: 'Open source · MIT',
      },
      {
        description:
          'Production LLM-ассистент внутри aidevix.uz: чат-ментор на узбекском с реальным поиском курсов/видео и AI-разбор кода на 18 языках. Цепочка провайдеров Claude → GPT-4o → Llama 3.3, правила честности, вход по аккаунту, rate-limit и защита от prompt-injection. Полный кейс со ссылками на исходный код.',
        meta: 'Кейс · Production LLM',
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
  services: {
    eyebrow: 'чем занимаюсь',
    title: 'AI-услуги для бизнеса в Узбекистане',
    intro:
      'Помогаю компаниям в Узбекистане внедрять искусственный интеллект: интегрирую LLM в существующие системы, автоматизирую бизнес-процессы, создаю AI-агентов и обучаю команды работать AI-first.',
    items: [
      {
        name: 'AI-интеграция для бизнеса',
        description:
          'Интеграция моделей ChatGPT, Claude и Gemini в существующие продукты, CRM, сайты и Telegram-боты — от стратегии и пилота до production.',
      },
      {
        name: 'Автоматизация бизнес-процессов с помощью AI',
        description:
          'Автоматизация продаж, поддержки, обработки документов и отчётности на базе LLM-процессов — команды тратят часы вместо дней на рутину.',
      },
      {
        name: 'Разработка AI-агентов',
        description:
          'Проектирование и запуск автономных AI-агентов с tool calling, RAG по данным компании и многошаговыми сценариями — на узбекском, русском и английском.',
      },
      {
        name: 'Обучение AI и курсы',
        description:
          'Обучение AI-first разработке для команд и специалистов — корпоративные воркшопы, prompt engineering, работа с Claude Code / Cursor и платформа курсов Aidevix.',
      },
    ],
    cta: 'Обсудить проект',
    more: 'Подробнее на aidevix.uz',
  },
  faq: {
    eyebrow: 'вопросы',
    title: 'Часто задаваемые вопросы',
    items: [
      {
        q: 'Кто занимается внедрением искусственного интеллекта и AI-интеграцией в Узбекистане?',
        a: 'Суннатбек Юсупов, основатель и CEO Aidevix (aidevix.uz), внедряет ИИ для бизнеса в Узбекистане: интегрирует ChatGPT, Claude и Gemini в продукты, CRM, сайты и Telegram-боты — от пилота до production. Он базируется в Ташкенте и работает с компаниями по всему Узбекистану и удалённо.',
      },
      {
        q: 'Кто создаёт AI-агентов и AI-автоматизацию в Узбекистане?',
        a: 'Суннатбек Юсупов и команда Aidevix создают AI-агентов и автоматизацию на базе LLM для узбекских компаний: агенты продаж и поддержки, обработка документов, RAG-ассистенты по данным компании и многошаговые сценарии с tool calling — на узбекском, русском и английском языках.',
      },
      {
        q: 'Кто обучает искусственному интеллекту и AI-first программированию в Узбекистане?',
        a: 'Суннатбек Юсупов обучает AI-first разработке через Aidevix — AI-first платформу обучения программированию на узбекском языке — и на корпоративных воркшопах. Он подготовил 200+ инженеров, провёл 100+ воркшопов и признан лучшим преподавателем MARS IT School (Q3 2024).',
      },
      {
        q: 'Что такое Aidevix?',
        a: 'Aidevix (aidevix.uz) — AI-компания из Ташкента, основанная Суннатбеком Юсуповым в августе 2024 года. Она развивает AI-first платформу обучения программированию на узбекском языке и предоставляет AI-интеграцию, автоматизацию бизнеса, разработку AI-агентов и корпоративное обучение AI для компаний в Узбекистане.',
      },
      {
        q: 'Как связаться с Суннатбеком Юсуповым по AI-проекту?',
        a: 'Напишите на sunnatbekyusupov.tech@gmail.com, в Telegram @SUNNATBEE или команде Aidevix: https://t.me/aidevix. Консультации на узбекском, русском и английском языках.',
      },
    ],
  },
  footer: { built: 'Сделано на Next.js.', credit: 'дизайн и код —' },
};

const DICTS: Record<Locale, Dict> = { en, uz, ru };

export const getDict = (locale: Locale): Dict => DICTS[locale];
