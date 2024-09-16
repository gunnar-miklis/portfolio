import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import type { Project } from '@data/projects';
import { type Filter, selectedTags as initalFilters } from '@data/filter';
import '@styles/gallery/projects-filter.css';

type ProjectsFilterProps = {
  projects: Project[];
  filteredProjects: Project[];
  setFilteredProjects: Dispatch<SetStateAction<Project[]>>;
};

export default function ProjectsFilter({
  projects,
  filteredProjects,
  setFilteredProjects,
}: ProjectsFilterProps) {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [inactiveFilters, setInactiveFilters] = useState<Filter[]>(initalFilters);

  // ACTIVE FILTERS: filter all projects by active filters or reset to show all projects
  useEffect(() => {
    if (activeFilters.length) {
      // filter all projects, return those projects which use the tags listed in activeFilters
      // COMMENT: use some() to include any project that matches any filter combination (include all matches). use every() to only include those projects which exactly matche the filter combination (narrow down the matches)
      const filterResults = projects.filter((project) =>
        activeFilters.every((tag) => project.tags.includes(tag)),
      );
      setFilteredProjects(filterResults);
    } else {
      setFilteredProjects(projects);
    }
  }, [activeFilters, projects, setFilteredProjects]);

  // HANDLE CHANGES: add or remove a selected filter from active filters list
  function updateActiveFilters(selectedFilter: string): void {
    if (!activeFilters.includes(selectedFilter)) {
      // add to active filter
      setActiveFilters((prevState) => [...prevState, selectedFilter]);

      // remove from inactive filter
      const updatedFilters: Filter[] = inactiveFilters.filter(
        (filter) => filter !== selectedFilter,
      );
      setInactiveFilters(updatedFilters);
    } else {
      // remove from active filter
      const updatedFilters: Filter[] = activeFilters.filter((filter) => filter !== selectedFilter);
      setActiveFilters(updatedFilters);

      // add to inactive filter + sort back to inital position
      const sortedFilters: Filter[] = initalFilters.filter(
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
        activeFilters.map((tag) => (
          <div className='filters' key={tag}>
            <button
              className='button active-filter'
              onClick={() => updateActiveFilters(tag)}
              title={`Filter by: ${tag}`}
              aria-label={`Filter by: ${tag}`}
            >
              {tag}
            </button>
          </div>
        ))}
      {inactiveFilters.map((tag) => (
        <div className='filters' key={tag}>
          <button
            className='button'
            onClick={() => updateActiveFilters(tag)}
            title={`Filter by: ${tag}`}
            aria-label={`Filter by: ${tag}`}
          >
            {tag}
          </button>
        </div>
      ))}
    </div>
  );
}
