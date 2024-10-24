import type { Project, ProjectCategories, ProjectTags } from '@data/projects';

export const selectedCategories: ProjectCategories[] = [
  'Semi-Professional',
  'Educational',
  'Practice.Learn.Improve.',
];

export const selectedTags: ProjectTags[] = [
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
 * @returns an array of strings, type ProjectTags[].
 */
export function getAllTagsFrom(projects: Project[]): ProjectTags[] {
  const allTags = projects.flatMap((item) => item.tags as ProjectTags[]);
  const uniqueTags = [...new Set(allTags)];
  const sortedTags = uniqueTags.toSorted((a, b) => a.localeCompare(b));
  return sortedTags;
}
