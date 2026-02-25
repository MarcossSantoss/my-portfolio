export type ProjectCategory = 'web' | 'backend' | 'ai' | 'game' | 'all';

export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  preview?: string;
  previewType?: 'gif' | 'video';
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
}
