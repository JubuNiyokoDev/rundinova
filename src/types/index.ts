export interface TeamMember {
  name: string;
  role: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  badge: string;
  features: string[];
  icon: string;
  gradient: string;
  website?: string;
  status: string;
}

export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}