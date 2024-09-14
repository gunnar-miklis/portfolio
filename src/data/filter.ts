import { projects, type ProjectCategories } from '@/data/projects';

export type Filter = string;

// set lists of filters manually
export const selectedCategories: Filter[] = [
  'Semi-Professional',
  'Practice.Learn.Improve.',
  'Educational Project',
] satisfies ProjectCategories[];

export const selectedTags: Filter[] = [
  'Frontend',
  'Backend',
  'Fullstack',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Next.js',
  'React',
  'ReactNative',
  'Express',
  'MongoDB',
  'SQLite',
  'Authentication',
  'REST',
  'SSR',
  'CSR',
  'Accessibility',
];

// set a filter-list of tags dynamically based projects data
export function getAllTagsFromProjects(): Filter[] {
  const allTags: Filter[] = [];
  projects.forEach(({ tags }) => tags.forEach((tag) => allTags.push(tag)));

  const uniqueTags = [...new Set(allTags)];
  const sortedTags = uniqueTags.toSorted((a, b) => a.localeCompare(b));
  return sortedTags;
}
