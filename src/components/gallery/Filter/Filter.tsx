import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import Chip from '@components/common/Chip/Chip';
import '@components/gallery/Filter/filter.css';
import type { Project, ProjectCategories, ProjectTags } from '@data/projects';
import { selectedTags, selectedCategories } from '@data/filter';

type Filter = ProjectCategories | ProjectTags;
const initialFilters: Filter[] = [...selectedCategories, ...selectedTags];

type Props = {
  projects: Project[];
  setFilteredProjects: Dispatch<SetStateAction<Project[]>>;
};
export default function GalleryFilter({ projects, setFilteredProjects }: Props) {
  const [activeFilters, setActiveFilters] = useState<Filter[]>([]);
  const [inactiveFilters, setInactiveFilters] = useState<Filter[]>(initialFilters);

  // SECTION: filter all projects by active filters or reset (to show all projects)
  useEffect(() => {
    // reset gallery if no active filters set
    if (!activeFilters.length) setFilteredProjects(projects);

    // filter all projects, return those projects which match "tags" or "category" listed in activeFilters
    const filterResults = projects.filter((project) =>
      // filter for: tags and category
      /* NOTE: some() vs every()
       * - use some() to include ANY project that matches any filter combination (include ALL matches).
       * - use every() to ONLY include those projects which EXACTLY match the filter combination (NARROW DOWN the matches)
       */
      activeFilters.every((filter) => project.tags.includes(filter) || project.category === filter),
    );

    // update projects in gallery
    setFilteredProjects(filterResults);
  }, [activeFilters, projects, setFilteredProjects]);

  // SECTION: add or remove a selected filter from activeFilters
  function updateFilters(selectedFilter: Filter): void {
    if (!activeFilters.includes(selectedFilter)) {
      // add to active filter
      setActiveFilters((prevState) => [...prevState, selectedFilter]);

      // remove from inactive filter
      const updatedFilters = inactiveFilters.filter((filter) => filter !== selectedFilter);
      setInactiveFilters(updatedFilters);
    } else {
      // remove from active filter
      const updatedFilters = activeFilters.filter((filter) => filter !== selectedFilter);
      setActiveFilters(updatedFilters);

      // add to inactive filter + sort back to inital position
      const sortedFilters = initialFilters.filter(
        (filter) => inactiveFilters.includes(filter) || selectedFilter === filter,
      );
      setInactiveFilters(sortedFilters);
    }

    // jump back to first item
    const galleryFilter = document.querySelector('.gallery__filter');
    if (galleryFilter instanceof HTMLDivElement) {
      galleryFilter.scrollTo({ left: 0, behavior: 'instant' });
    }
  }

  // SECTION: render
  return (
    <div className='gallery__filter'>
      {/* if any active fiters, render them. otherwise skip */}
      {!!activeFilters.length &&
        activeFilters.map((filter) => (
          <Chip
            className='gallery__filter-chip gallery__filter-chip--active'
            onClick={() => updateFilters(filter)}
            title={`Filter projects by ${filter}`}
            aria-label={`Filter projects by ${filter}`}
            role='button'
            key={filter}
          >
            {filter}
          </Chip>
        ))}

      {inactiveFilters.map((filter) => (
        <Chip
          className='gallery__filter-chip'
          onClick={() => updateFilters(filter)}
          title={`Filter projects by ${filter}`}
          aria-label={`Filter projects by ${filter}`}
          role='button'
          key={filter}
        >
          {/* emphasize the project categories */}
          {selectedCategories.includes(filter as ProjectCategories) ? (
            <span className='gallery__filter-chip--emphasize'>{filter}</span>
          ) : (
            filter
          )}
        </Chip>
      ))}
    </div>
  );
}
