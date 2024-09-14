import { projects } from '@/data/projects';

export type TagsFilter = string;

// set a list of filters manually
export const selectedFilters: TagsFilter[] = [
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

// set a list filters dynamically based on the tags inside projects data
export function getAllTagsFromProjects(): TagsFilter[] {
  const allTags: TagsFilter[] = [];
  projects.forEach(({ tags }) => tags.forEach((tag) => allTags.push(tag)));
  
  const uniqueTags = [...new Set(allTags)];
  const sortedTags = uniqueTags.toSorted((a, b) => a.localeCompare(b));
  return sortedTags;
}
