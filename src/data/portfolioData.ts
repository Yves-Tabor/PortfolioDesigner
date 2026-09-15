import {
  ProfileData,
  SectionData,
  StatItem,
  SkillCategory,
  ProjectItem,
} from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Yves Tabor',
  role: 'UI/UX Designer & Junior Developer',
  location: 'Kigali',
  availability: 'Available for work',
  bio: 'Junior developer and UI/UX designer focused on creating clean interfaces and building practical web applications. Interested in solving real-world problems through thoughtful design and code.',
  avatarUrl: '/avatar.jpg',
  email: 'walvesoutis@gmail.com',
  socials: [
    {
      label: 'GitHub',
      code: 'GH',
      url: 'https://github.com/Yves-Tabor',
    },
    {
      label: 'LinkedIn',
      code: 'LN',
      url: 'https://www.linkedin.com/in/yves-tabor-a625b4388',
    },
    {
      label: 'Website',
      code: 'Www',
      url: 'https://yvestabor-website.vercel.app/',
    },
  ],
};

export const sectionsData: SectionData[] = [
  {
    id: 'home',
    number: '01',
    eyebrow: '01 // OVERVIEW',
    headline: 'Designing simple interfaces and building useful digital products.',
    title: 'Introduction',
    desc: 'A combination of UI/UX design and software development focused on solving practical problems.',
    context: 'Profile',
    bgType: 'default',
  },
  {
    id: 'skills',
    number: '02',
    eyebrow: '02 // CAPABILITIES',
    headline: 'From interface design in Figma to building functional web applications.',
    title: 'Skills',
    desc: 'Growing skills across UI/UX design, frontend development, backend development, and modern web technologies.',
    context: 'Technical Skills',
    bgType: 'tint',
  },
  {
    id: 'projects',
    number: '03',
    eyebrow: '03 // SELECTED WORKS',
    headline: 'Projects built to practice, learn, and solve real-world problems.',
    title: 'Projects',
    desc: 'A selection of personal and academic projects covering product design, frontend, backend, and full-stack development.',
    context: 'Selected Projects',
    bgType: 'default',
  },
  {
    id: 'contact',
    number: '04',
    eyebrow: '04 // GET IN TOUCH',
    headline: "Let's build something useful together.",
    title: 'Contact',
    desc: 'Open to opportunities, collaborations, internships, and projects where I can learn and contribute.',
    context: 'Direct Communication',
    bgType: 'dark',
  },
];

export const statsData: StatItem[] = [
  {
    id: 'projects',
    label: 'Projects',
    value: '3+',
  },
  {
    id: 'focus',
    label: 'Focus',
    value: 'UI + Code',
    isAccent: true,
  },
  {
    id: 'experience',
    label: 'Experience',
    value: 'Growing',
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    title: 'Product & UI',
    color: 'var(--emerald-500)',
    items: [
      {
        name: 'UI Design',
        detail: 'Figma',
      },
      {
        name: 'Prototyping',
        detail: 'Figma',
      },
      {
        name: 'Design Systems',
        detail: 'Components',
      },
      {
        name: 'Responsive Design',
        detail: 'Web & Mobile',
      },
    ],
  },
  {
    title: 'Development',
    color: 'var(--black)',
    items: [
      {
        name: 'Frontend',
        detail: 'React / TypeScript',
      },
      {
        name: 'Backend',
        detail: 'Node.js / NestJS',
      },
      {
        name: 'Database',
        detail: 'PostgreSQL / MongoDB',
      },
      {
        name: 'Styling',
        detail: 'Tailwind CSS',
      },
    ],
  },
];

export const techTagsData = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'NestJS',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'Tailwind CSS',
  'Figma',
];

export const projectsData: ProjectItem[] = [
  {
    id: 'restoflow',
    category: 'Restaurant Management',
    statusYear: 'Personal Project / 2026',
    title: 'RestoFlow',
    description:
      'A restaurant management platform designed to help restaurants manage their menus, staff, and daily operations through a simple web interface.',
    longDescription:
      'Designed and developed the concept around a role-based restaurant management system. The project focuses on creating a simple experience for restaurant managers, waiters, and customers while exploring scalable frontend and backend architecture.',
    stack: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
    metrics: [
      'Role-based Access',
      'Restaurant Management',
      'Responsive Interface',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },

  {
    id: 'taskboard',
    category: 'Productivity Application',
    statusYear: 'Personal Project / 2026',
    title: 'TaskBoard',
    description:
      'A task management application designed to help users organize their work and keep track of tasks through a clean interface.',
    longDescription:
      'Built the project as a practical full-stack application, working on the frontend experience and developing a NestJS backend for handling application data and user-related functionality.',
    stack: ['React', 'NestJS', 'MongoDB'],
    metrics: [
      'Task Management',
      'Authentication',
      'REST API',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },

  {
    id: 'carsharing',
    category: 'Academic Project',
    statusYear: 'Coursework / 2026',
    title: 'Carsharing Backend',
    description:
      'A backend application for managing cars, car types, users, and related carsharing operations.',
    longDescription:
      'Developed backend features using NestJS, including car management, validation, authentication, authorization, and repository-based data access. The project also includes validation for duplicate license plates and ownership checks when updating cars.',
    stack: ['NestJS', 'TypeScript', 'MongoDB'],
    metrics: [
      'REST API',
      'Authentication',
      'Data Validation',
    ],
    demoUrl: '#',
    githubUrl: '#',
  },
];