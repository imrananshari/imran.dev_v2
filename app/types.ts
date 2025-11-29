import { ReactNode } from 'react';

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  liveLink: string | null;
  githubLink: string | null;
  imageUrl: string;
  techStack: string[];
  notes?: string | null;
}

export interface SkillCategory {
  id: string;
  filename: string;
  title: string;
  codeSnippet: ReactNode;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: ReactNode;
  features: string[];
  benefits: string[];
}
