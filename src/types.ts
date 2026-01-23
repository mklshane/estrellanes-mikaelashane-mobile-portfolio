import type { ReactElement, ReactNode } from "react";

export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  background: string[];
  card: string;
  shadow: string;
  border: string;
  text: string;
  subText: string;
  accent: string;
  avatarBg: string;
  tags: string[];
}

export interface ThemeContextType {
  theme: ThemeMode;
  colors: ThemeColors;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github: string;
  live?: string;
}

export interface ProjectCardProps {
  project: Project;
}

export interface SocialLink {
  id: number;
  name: string;
  handle: string;
  url: string;
  icon: ReactElement;
}

export interface SocialCardProps {
  item: SocialLink;
}
