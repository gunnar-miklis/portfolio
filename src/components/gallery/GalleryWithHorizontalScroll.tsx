import { type UIEvent, useState } from 'react';

import Filter from '@/components/gallery/Filter/Filter';
import Controls from '@/components/gallery/Controls/Controls';
import PositionIndicator from '@/components/gallery/PositionIndicator/PositionIndicator';
import Card from '@/components/gallery/Card/Card';
import '@components/gallery/gallery-with-horizontal-scroll.css';
import type { Project } from '@data/projects';

export default function GalleryWithHorizontalScroll({ projects }: { projects: Project[] }) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // get current scroll postion
  function handleScroll(event: UIEvent<HTMLDivElement>): void {
    if (event.target instanceof HTMLDivElement) setScrollPosition(event.target.scrollLeft);
  }

  return (
    <div className='gallery-wrapper'>
      <Filter
        projects={projects}
        filteredProjects={filteredProjects}
        setFilteredProjects={setFilteredProjects}
      />

      {/* NOTE: control buttons + progress indicator  */}
      <nav className='gallery-controls'>
        <Controls scrollPosition={scrollPosition} filteredProjects={filteredProjects} />
        <PositionIndicator
          scrollPosition={scrollPosition}
          targetElement='.gallery'
          parentElement='.gallery-wrapper'
        />
      </nav>

      {/* NOTE: gallery elements / cards / projects */}
      <div className='gallery' onScroll={handleScroll}>
        {filteredProjects.length ? (
          filteredProjects.map((project) => (
            <Card
              key={project.id}
              className='gallery-element'
              title={project.title}
              category={project.category}
              date={project.date}
              tags={project.tags}
              liveDemo={project.liveDemo}
              sourceCode={project.sourceCode}
              imageSources={project.imageSources}
              footnote={project.footnote}
            >
              {project.content}
            </Card>
          ))
        ) : (
          <p style={{ fontWeight: 500 }}>No project matches the selected filters.</p>
        )}
      </div>
    </div>
  );
}
