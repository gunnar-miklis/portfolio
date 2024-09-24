import type { Project, ProjectCategories } from '@data/projects';

export type Filter = string;

export const selectedCategories: Filter[] = [
  'Semi-Professional',
  'Practice.Learn.Improve.',
  'Educational Project',
] satisfies ProjectCategories[];

export const selectedTags: Filter[] = [
  'Frontend',
  'Backend',
  'Full-Stack',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'React',
  'React Native',
  'Express',
  'MongoDB',
  'SQLite',
  'SOLID',
  'REST',
  'SSR',
  'Templating',
  'Authentication',
  'Accessibility',
];

/**
 * Collect all tags from projects and returns an array of sorted unique tags.
 * @returns {Filter[]} An array of strings, type Filter[].
 */
export function getAllTagsFrom(projects: Project[]): Filter[] {
  const allTags = projects.flatMap((item) => item.tags);
  const uniqueTags = [...new Set(allTags)];
  const sortedTags = uniqueTags.toSorted((a, b) => a.localeCompare(b));
  return sortedTags;
}
