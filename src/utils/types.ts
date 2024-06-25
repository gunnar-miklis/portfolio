import { ReactElement, ReactNode } from 'react';

export interface ProjectsType {
  [card: string]: CardProps;
}
export interface CardProps {
  className?: string;
  title: string;
  category: string;
  date?: string;
  technologies: string[];
  liveDemo: string;
  sourceCode: string;
  imageSources: string[];
  footnote?: string;
  children: ReactNode;
}

export interface ButtonWithIconProps {
  icon: ReactElement;
  title: string;
  goTo: string;
}
