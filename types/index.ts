export type SocialLink = {
  label: string;
  value: string;
  href: string;
  icon: SocialIcon;
};

export type SocialIcon =
  | "email"
  | "phone"
  | "linkedin"
  | "github"
  | "location"
  | "passport"
  | "website";

export type Profile = {
  name: string;
  headline: string;
  shortHeadline: string;
  status: string;
  summary: string[];
  highlights: ProfileHighlight[];
  social: SocialLink[];
};

export type ProfileHighlight = {
  value: string;
  label: string;
};

export type Experience = {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  description: string;
  bullets: string[];
  tags: string[];
};

export type SkillGroup = {
  id: string;
  title: string;
  icon: SkillIcon;
  keywords: string[];
};

export type SkillIcon = "stack" | "pulse" | "database" | "cloud" | "spark";

export type LanguageLevel = "native" | "fluent" | "professional" | "beginner";

export type Language = {
  language: string;
  fluency: string;
  level: LanguageLevel;
};

export type NavItem = {
  id: string;
  label: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
};

export type BlogPostWithContent = BlogPost & {
  content: string;
};
