/* ------------------------------------------------------------------ */
/* Central content for the Wavelength® studio site — swap copy here.   */
/* ------------------------------------------------------------------ */

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

/* ---------------------------- hero collage ---------------------------- */

export type HeroCard = {
  number: string;
  title: string;
  tag: string;
  image: string;
  /** tailwind classes controlling size / offset on lg screens */
  className: string;
  ratio: string;
  rotate?: string;
};

export const HERO_CARDS: HeroCard[] = [
  {
    number: "017",
    title: "Northwind App",
    tag: "Product Design",
    image: u("photo-1512941937669-90a1b58e7e9c", 700),
    ratio: "aspect-[9/16]",
    className: "lg:col-span-2 lg:row-span-2 lg:mt-10",
    rotate: "lg:-rotate-1",
  },
  {
    number: "022",
    title: "Fieldfare OS",
    tag: "Digital Product",
    image: u("photo-1498050108023-c5249f4df085", 1100),
    ratio: "aspect-[16/10]",
    className: "lg:col-span-5 lg:row-span-2",
    rotate: "lg:rotate-[0.6deg]",
  },
  {
    number: "009",
    title: "Monolith Type",
    tag: "Brand Identity",
    image: u("photo-1626785774573-4b799315345d", 700),
    ratio: "aspect-[4/5]",
    className: "lg:col-span-3 lg:row-span-2 lg:-mt-6",
    rotate: "lg:rotate-1",
  },
  {
    number: "031",
    title: "Haus Atelier",
    tag: "Art Direction",
    image: u("photo-1487958449943-2429e8be8625", 700),
    ratio: "aspect-[5/4]",
    className: "lg:col-span-2 lg:row-span-1 lg:mb-8",
    rotate: "lg:rotate-[1.2deg]",
  },
];

/* ------------------------------- stats ------------------------------- */

export const STATS = [
  { value: "4x", label: "more engaging", note: "avg. engagement lift" },
  { value: "2x", label: "faster execution", note: "shipping velocity" },
  { value: "400%", label: "growth in impact", note: "client outcomes" },
];

export const STAT_DESCRIPTORS = [
  "Results Driven Solutions",
  "Strategic Experiences",
  "Purposeful Designs",
];

/* ------------------------------ services ------------------------------ */

export type Service = {
  index: string;
  title: string;
  lines: string[];
  deliverables: string[];
  image: string;
  number: string;
};

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Branding",
    lines: [
      "Identity systems, positioning and art direction",
      "that give ambitious companies a voice worth hearing.",
    ],
    deliverables: [
      "Brand Strategy",
      "Visual Identity",
      "Art Direction",
      "Brand Guidelines",
      "Naming & Tone",
    ],
    image: u("photo-1550745165-9bc0b252726f", 900),
    number: "045",
  },
  {
    index: "02",
    title: "UI/UX Design",
    lines: [
      "Product design and interface systems built on",
      "research, rhythm and relentless attention to detail.",
    ],
    deliverables: [
      "Product Design",
      "UX Strategy",
      "Web Interfaces",
      "Design Systems",
      "Prototyping",
    ],
    image: u("photo-1559028012-481c04fa702d", 900),
    number: "015",
  },
  {
    index: "03",
    title: "Web Development",
    lines: [
      "Creative development with modern frameworks —",
      "fast, resilient and ready for whatever comes next.",
    ],
    deliverables: [
      "Creative Development",
      "Next.js Builds",
      "Interactive Experiences",
      "CMS Integration",
      "Performance",
    ],
    image: u("photo-1460925895917-afdab827c52f", 900),
    number: "028",
  },
];

/* ------------------------------- process ------------------------------ */

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discussion",
    body: "We start with a conversation. Goals, constraints, audience — we listen before anything is drawn.",
  },
  {
    number: "02",
    title: "Ideas & Concept",
    body: "We explore territories, moodboards and directions until one feels inevitable — then we sharpen it.",
  },
  {
    number: "03",
    title: "Design",
    body: "Identity, interface and motion come together in tight iterations with you in the room the whole way.",
  },
  {
    number: "04",
    title: "Development",
    body: "We build, test and ship with engineering care — then measure what matters and keep improving.",
  },
];

/* ------------------------------- work ------------------------------- */

export type Project = {
  number: string;
  title: string;
  category: string;
  year: string;
  image: string;
  size: "wide" | "tall" | "regular";
};

export const PROJECTS: Project[] = [
  {
    number: "022",
    title: "Fully Responsive Design",
    category: "Web Platform",
    year: "2026",
    image: u("photo-1497366216548-37526070297c", 1200),
    size: "wide",
  },
  {
    number: "021",
    title: "Interior Website",
    category: "Art Direction",
    year: "2025",
    image: u("photo-1618221195710-dd6b41faaea6", 800),
    size: "tall",
  },
  {
    number: "019",
    title: "AI Product Website",
    category: "Brand + Web",
    year: "2026",
    image: u("photo-1563986768609-322da13575f3", 800),
    size: "regular",
  },
  {
    number: "016",
    title: "Luxury Branding Design",
    category: "Identity",
    year: "2025",
    image: u("photo-1541643600914-78b084683601", 800),
    size: "regular",
  },
  {
    number: "013",
    title: "Digital Experience",
    category: "Interactive",
    year: "2026",
    image: u("photo-1531297484001-80022131f5a1", 1200),
    size: "wide",
  },
  {
    number: "008",
    title: "Product Identity",
    category: "Packaging",
    year: "2024",
    image: u("photo-1557804506-669a67965ba0", 800),
    size: "tall",
  },
];

/* ---------------------------- testimonials ---------------------------- */

export const TESTIMONIALS = [
  {
    quote:
      "They turned a vague ambition into a brand our customers actually feel. The process was sharp, honest and refreshingly free of theatre.",
    name: "Rowan Whitfield",
    role: "CEO, Corewave",
    initials: "RW",
  },
  {
    quote:
      "The rare studio that argues for the right idea. Our conversion rate moved the month after launch — and the work still looks years ahead.",
    name: "Sophia Mendes",
    role: "Founder, Atelier Nine",
    initials: "SM",
  },
  {
    quote:
      "Composed, curious and fast. They treated our rebrand like their own business was on the line — because to them, it was.",
    name: "Dexter Aaron",
    role: "CMO, Fieldfare",
    initials: "DA",
  },
];

/* ------------------------------- team ------------------------------- */

export const TEAM = [
  {
    name: "Aria Sherwood",
    role: "Creative Director",
    bio: "Aria leads the studio's creative vision, shaping brand narratives and design systems with a storyteller's instinct and an art director's eye.",
    image: u("photo-1494790108377-be9c29b29330", 500),
  },
  {
    name: "Milo Hartmann",
    role: "Design Strategist",
    bio: "Milo connects business goals to design decisions, turning research and ambiguity into clear strategies that make bold ideas land.",
    image: u("photo-1507003211169-0a1dd7228f2d", 500),
  },
  {
    name: "June Okonkwo",
    role: "Motion Designer",
    bio: "June brings brands to life through motion, crafting expressive visuals and interactions that feel alive while keeping every detail precise.",
    image: u("photo-1519608487953-e999c86e7455", 500),
  },
];

/* ------------------------------ journal ------------------------------ */

export const ARTICLES = [
  {
    category: "UX Design",
    title: "How Smart UX Decisions Drive More Conversions",
    summary:
      "Great interfaces don't shout — they guide. Explore how small, intentional UX choices can create big gains.",
    date: "Jul 2026",
    read: "6 min read",
    image: u("photo-1559028012-481c04fa702d", 800),
  },
  {
    category: "Branding",
    title: "Building a Brand Identity That Lasts",
    summary:
      "Trends fade, but a strong identity endures. Learn how we craft brands that stay relevant across markets.",
    date: "Jun 2026",
    read: "8 min read",
    image: u("photo-1541643600914-78b084683601", 800),
  },
  {
    category: "Digital Experience",
    title: "Why Great UX Feels Invisible",
    summary:
      "The best experiences go unnoticed. Discover how subtle details shape how users feel and interact.",
    date: "May 2026",
    read: "5 min read",
    image: u("photo-1531297484001-80022131f5a1", 800),
  },
];
