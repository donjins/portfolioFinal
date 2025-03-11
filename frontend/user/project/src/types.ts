export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink: string;
  githubLink: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}