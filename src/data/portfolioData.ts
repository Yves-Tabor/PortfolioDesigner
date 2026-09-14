import { ProfileData, SectionData, StatItem, SkillCategory, ProjectItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Yves Tabor',
  role: 'UI/UX Designer',
  location: 'Kigali',
  availability: 'Available for work',
  bio: 'Crafting high-conviction product interfaces, design systems, and computational UI for software platforms. Based in Kigali.',
  avatarUrl: '/avatar.jpg',
  email: 'walvesoutis@gmail.com',
  socials: [
    { label: 'GitHub', code: 'GH', url: 'https://github.com/Yves-Tabor' },
    { label: 'LinkedIn', code: 'LN', url: 'https://linkedin.com' },
    { label: 'X', code: 'TW', url: 'https://x.com' },
  ],
};

export const sectionsData: SectionData[] = [
  {
    id: 'home',
    number: '01',
    eyebrow: '01 // OVERVIEW',
    headline: 'Designing interfaces where mathematical structure meets pure craft.',
    title: 'Introduction',
    desc: 'High-conviction product architecture where uncompromising craft meets production code.',
    context: 'Executive Profile',
    bgType: 'default',
  },
  {
    id: 'skills',
    number: '02',
    eyebrow: '02 // CAPABILITIES',
    headline: 'End-to-end execution from Figma tokens to deployed React trees.',
    title: 'Skills',
    desc: 'Dual-domain mastery across product strategy, interface systems, and frontend engineering.',
    context: 'Hard Technical Skills',
    bgType: 'tint',
  },
  {
    id: 'projects',
    number: '03',
    eyebrow: '03 // SELECTED WORKS',
    headline: 'Crafted for speed, clarity, and immense data throughput.',
    title: 'Projects',
    desc: 'Deep dive into enterprise treasury software and procedural graphic tools.',
    context: 'Live Case Studies',
    bgType: 'default',
  },
  {
    id: 'contact',
    number: '04',
    eyebrow: '04 // INITIATE DIALOGUE',
    headline: "Let's define the future of your software product.",
    title: 'Contact',
    desc: 'Initiate new engagements, advisory partnerships, or design systems development.',
    context: 'Direct Communication',
    bgType: 'dark',
  },
];

export const statsData: StatItem[] = [
  { id: 'track', label: 'Track', value: '10+ Yrs' },
  { id: 'scale', label: 'Scale', value: '$4.2B+', isAccent: true },
  { id: 'ventures', label: 'Ventures', value: '30+ Apps' },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: 'Product & UI',
    color: 'var(--emerald-500)',
    items: [
      { name: 'Design Systems', detail: 'W3C Tokens' },
      { name: 'Prototyping', detail: 'Figma / Code' },
      { name: 'Information Architecture', detail: 'Data-dense' },
      { name: 'Accessibility', detail: 'WCAG AAA' },
    ],
  },
  {
    title: 'Engineering',
    color: 'var(--black)',
    items: [
      { name: 'Frontend', detail: 'TypeScript / React' },
      { name: 'CSS Architecture', detail: 'Tailwind / Vanilla' },
      { name: 'Creative Tech', detail: 'WebGL / GLSL' },
      { name: 'Tooling & CI', detail: 'Vite / Storybook' },
    ],
  },
];

export const techTagsData = [
  'Next.js 14',
  'GraphQL',
  'Node.js',
  'State Machines (XState)',
  'Tailwind CSS',
  'Three.js',
  'Design Tokens',
];

export const projectsData: ProjectItem[] = [
  {
    id: 'aura-treasury',
    category: 'Enterprise Fintech',
    statusYear: 'Production / 2024',
    title: 'Aura Global Treasury',
    description: 'Multi-currency institutional balance dashboard. Designed the full component library and virtualized data table rendering 100,000+ ledger rows smoothly.',
    longDescription: 'Engineered for tier-1 financial institutions handling multi-billion dollar flows. Features realtime WebSocket updates, customized financial charting, zero-latency filters, and strict accessibility standards.',
    stack: ['React', 'Tailwind', 'Canvas 2D'],
    metrics: ['100k+ Rows Rendered', '<16ms Frame Budget', '99.99% Uptime'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'prism-glsl',
    category: 'Creative Technologist Tool',
    statusYear: 'Open Source / 2023',
    title: 'Prism GLSL Node Graph',
    description: 'Visual shader node graph compiling directly to WebGL fragment shader code. Over 12,000 monthly active technical artists and designers.',
    longDescription: 'An interactive browser-based node editor that empowers artists to generate high-performance procedural graphics without writing raw Shader Language boilerplate.',
    stack: ['WebGL', 'GLSL', 'TypeScript'],
    metrics: ['12k+ Active Users', 'Instant GLSL Compilation', 'Custom Node API'],
    demoUrl: '#',
    githubUrl: '#',
  },
];
