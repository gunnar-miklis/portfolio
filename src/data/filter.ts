import { projects } from './projects';

export type Filter = string;

// set filters manually
export const selectedFilters: Filter[] = [
  'Frontend',
  'Backend',
  'Fullstack',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'React',
  'ReactNative',
  'Express',
  'MongoDB',
  'SQLite',
  'Lighthouse',
  'Authentication',
  'MaterialUI',
  'CI',
  'CI/CD',
  'REST',
  'SPA',
  'SSR',
  'CSR',
  'OOP',
  'Accessibility',
];

// set filters dynamically based on the technologies inside projects data
export function getAllFiltersFromProjects(): Filter[] {
  const allTechs = projects.map(({ technologies }) => technologies.join(', '));
  const uniqueTechs = [...new Set(allTechs)];
  const sortedTechs = uniqueTechs.toSorted((a, b) => a.localeCompare(b));
  return sortedTechs;
}
