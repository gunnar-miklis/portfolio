import { useEffect, useState } from 'react';

import GalleryFilter from '@/components/gallery/Filter/Filter';
import GalleryControls from '@/components/gallery/Controls/Controls';
import GalleryPositionIndicator from '@/components/gallery/PositionIndicator/PositionIndicator';
import GalleryCard from '@/components/gallery/Card/Card';
import '@components/gallery/gallery-with-horizontal-scroll.css';
import type { Project } from '@data/projects';
import useThrottle from '@/hooks/useThrottle';

type Props = { projects: Project[] };

export default function GalleryWithHorizontalScroll({ projects }: Props) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // smooth scroll to start when any filter changes
  useEffect(() => {
    const gallery = document.querySelector('.gallery__wrapper');
    if (gallery instanceof HTMLDivElement) gallery.scrollTo({ left: 0, behavior: 'smooth' });
  }, [filteredProjects]);

  const handleScroll = useThrottle((scrollLeft: number) => {
    setScrollPosition(scrollLeft);
  }, 20);

  return (
    <div className='gallery'>
      <GalleryFilter projects={projects} setFilteredProjects={setFilteredProjects} />

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

      <div className='gallery__wrapper' onScroll={(e) => handleScroll(e.currentTarget.scrollLeft)}>
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
