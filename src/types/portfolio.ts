export interface ProfileData {
  name: string;
  role: string;
  location: string;
  availability: string;
  bio: string;
  avatarUrl: string;
  email: string;
  socials: { label: string; code: string; url: string }[];
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  isAccent?: boolean;
}

export interface SkillCategory {
  title: string;
  color: string;
  items: { name: string; detail: string }[];
}

export interface ProjectItem {
  id: string;
  category: string;
  statusYear: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  metrics?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface SectionData {
  id: string;
  number: string;
  eyebrow: string;
  headline: string;
  title: string;
  desc: string;
  context: string;
  bgType?: 'default' | 'tint' | 'dark';
}
