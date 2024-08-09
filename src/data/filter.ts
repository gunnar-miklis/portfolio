import { type Project, projects } from './projects';

export type FiltersType = string[];

// for setting static inactiveFilters for component: ProjectsFilter.tsx
export const filters: FiltersType = [
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

// for setting inactiveFilters dynamically at the inital component (ProjectsFilter.tsx) mount
// get filters: extract technologies from projects
export function getFiltersFromProjects(): FiltersType {
  // extract technologies from all projects and merge them
  const allTechs: FiltersType = [];
  Object.values(projects).forEach((project: Project) =>
    project.technologies.forEach((tech: string) => allTechs.push(tech)),
  );
  // filter by unique / remove duplicates
  const filteredTechs: FiltersType = [];
  allTechs.forEach((tech: string) =>
    !filteredTechs.includes(tech) ? filteredTechs.push(tech) : null,
  );
  // sort them alphabetically
  const copy = Array.from(filteredTechs);
  const sortedTechs = copy.sort((a, b) => a.localeCompare(b));

  return sortedTechs;
}
