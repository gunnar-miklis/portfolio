import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { type Project, type ProjectsType } from '../../data/projects';
import '@/styles/gallery/projects-filter.css';

interface ProjectsFilterProps {
  projects: ProjectsType;
  filteredProjects: ProjectsType;
  setFilteredProjects: Dispatch<SetStateAction<ProjectsType>>;
}

export default function ProjectsFilter({
  projects,
  filteredProjects,
  setFilteredProjects,
}: ProjectsFilterProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [inactiveFilters, setInactiveFilters] = useState<string[]>([]);

  // INACTIVE FILTERS (inital): get filter options dynamically: extract technologies from projects
  useEffect(() => {
    // extract technologies from all projects and merge them
    const allTechs: string[] = [];
    Object.values(projects).forEach((project: Project) =>
      project.technologies.forEach((tech: string) => allTechs.push(tech)),
    );
    // filter by unique / remove duplicates
    const filteredTechs: string[] = [];
    allTechs.forEach((tech: string) =>
      !filteredTechs.includes(tech) ? filteredTechs.push(tech) : null,
    );
    // sort them alphabetically
    const copy = Array.from(filteredTechs);
    const sortedTechs = copy.sort((a, b) => a.localeCompare(b));

    setInactiveFilters(sortedTechs);
  }, [projects]);

  // ACTIVE FILTERS: filter all projects by active filters or reset to show all projects
  useEffect(() => {
    if (activeFilters.length !== 0) {
      const filterResults: ProjectsType = {};
      Object.entries(projects).forEach(([projectName, project]) =>
        activeFilters.forEach((tech: string) => {
          if (project.technologies.includes(tech)) {
            filterResults[projectName] = project;
          }
        }),
      );
      setFilteredProjects(filterResults);
    } else {
      setFilteredProjects(projects);
    }
  }, [activeFilters, projects, setFilteredProjects]);

  // HANDLE CHANGES: add or remove a selected filter from active filters list
  function updateActiveFilters(clickedFilter: string): void {
    if (!activeFilters.includes(clickedFilter)) {
      // add to active filter
      setActiveFilters((prevState: string[]) =>
        [...prevState, clickedFilter].sort((a, b) => a.localeCompare(b)),
      );
      const updatedFilters = inactiveFilters.filter((filter: string) => filter !== clickedFilter);
      // remove from inactive filter
      setInactiveFilters(updatedFilters);
    } else {
      // remove from active filter
      const updatedFilters = activeFilters.filter((filter: string) => filter !== clickedFilter);
      setActiveFilters(updatedFilters);
      // add to inactive filter
      setInactiveFilters((prevState: string[]) =>
        [...prevState, clickedFilter].sort((a, b) => a.localeCompare(b)),
      );
    }
    // jump back to first item
    const galleryFilter = document.querySelector('.gallery-filter');
    if (galleryFilter instanceof HTMLDivElement) {
      galleryFilter.scrollTo({ left: 0, behavior: 'instant' });
    }
  }

  // smooth scroll to start when filter changes
  useEffect(() => {
    const gallery = document.querySelector('.gallery');
    if (gallery instanceof HTMLDivElement) gallery.scrollTo({ left: 0, behavior: 'smooth' });
  }, [filteredProjects]);

  return (
    <div className='gallery-filter'>
      {!!activeFilters.length &&
        activeFilters.map((tech: string) => (
          <div className='filters' key={tech}>
            <button
              className='button chip active-filter'
              onClick={() => updateActiveFilters(tech)}
              title={`Filter by: ${tech}`}
              aria-label={`Filter by: ${tech}`}
            >
              {tech}
            </button>
          </div>
        ))}
      {inactiveFilters.map((tech: string) => (
        <div className='filters' key={tech}>
          <button
            className='button chip'
            onClick={() => updateActiveFilters(tech)}
            title={`Filter by: ${tech}`}
            aria-label={`Filter by: ${tech}`}
          >
            {tech}
          </button>
        </div>
      ))}
    </div>
  );
}
