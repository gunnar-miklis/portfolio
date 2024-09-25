import { type UIEventHandler, useState } from 'react';

import GalleryFilter from '@/components/gallery/Filter/Filter';
import GalleryControls from '@/components/gallery/Controls/Controls';
import GalleryPositionIndicator from '@/components/gallery/PositionIndicator/PositionIndicator';
import GalleryCard from '@/components/gallery/Card/Card';
import '@components/gallery/gallery-with-horizontal-scroll.css';
import type { Project } from '@data/projects';

type Props = { projects: Project[] };

export default function GalleryWithHorizontalScroll({ projects }: Props) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // get current scroll postion
  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    if (e.target instanceof HTMLDivElement) setScrollPosition(e.target.scrollLeft);
  };

  return (
    <div className='gallery'>
      <GalleryFilter
        projects={projects}
        filteredProjects={filteredProjects}
        setFilteredProjects={setFilteredProjects}
      />

      <div className='gallery__controls'>
        <GalleryControls
          scrollPosition={scrollPosition}
          filteredProjectsLength={filteredProjects.length}
        />
        <GalleryPositionIndicator
          scrollPosition={scrollPosition}
          parentElement='.gallery'
          targetElement='.gallery__wrapper'
        />
      </div>

      <div className='gallery__wrapper' onScroll={handleScroll}>
        {filteredProjects.length ? (
          filteredProjects.map((project) => (
            <GalleryCard key={project.id} className='gallery__element' {...project} />
          ))
        ) : (
          <strong className='strong'>No project matches the selected filters.</strong>
        )}
      </div>
    </div>
  );
}
