import { type UIEventHandler, useState } from 'react';

import Filter from '@/components/gallery/Filter/Filter';
import Controls from '@/components/gallery/Controls/Controls';
import PositionIndicator from '@/components/gallery/PositionIndicator/PositionIndicator';
import Card from '@/components/gallery/Card/Card';
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
      <Filter
        projects={projects}
        filteredProjects={filteredProjects}
        setFilteredProjects={setFilteredProjects}
      />

      <div className='gallery__controls'>
        <Controls scrollPosition={scrollPosition} filteredProjects={filteredProjects} />
        <PositionIndicator
          scrollPosition={scrollPosition}
          parentElement='.gallery'
          targetElement='.gallery__wrapper'
        />
      </div>

      <div className='gallery__wrapper' onScroll={handleScroll}>
        {filteredProjects.length ? (
          filteredProjects.map((project) => (
            <Card key={project.id} className='gallery__element' {...project}>
              {project.content}
            </Card>
          ))
        ) : (
          <strong>No project matches the selected filters.</strong>
        )}
      </div>
    </div>
  );
}
