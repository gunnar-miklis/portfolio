import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { type ProjectsType } from '../../data/projects';
import { type FiltersType, filters } from '../../data/filter';
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
  const [activeFilters, setActiveFilters] = useState<FiltersType>([]);
  const [inactiveFilters, setInactiveFilters] = useState<FiltersType>(filters);

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
  function updateActiveFilters(selectedFilter: string): void {
    if (!activeFilters.includes(selectedFilter)) {
      // add to active filter + sort by name
      setActiveFilters((prevState: FiltersType) =>
        [...prevState, selectedFilter].sort((a, b) => a.localeCompare(b)),
      );
      const updatedFilters = inactiveFilters.filter((filter: string) => filter !== selectedFilter);
      // remove from inactive filter
      setInactiveFilters(updatedFilters);
    } else {
      // remove from active filter
      const updatedFilters = activeFilters.filter((filter: string) => filter !== selectedFilter);
      setActiveFilters(updatedFilters);
      // add to inactive filter + sort back to inital position
      const sortedFilters: FiltersType = filters.filter(
        (filter) => inactiveFilters.includes(filter) || selectedFilter === filter,
      );
      setInactiveFilters(sortedFilters);
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
