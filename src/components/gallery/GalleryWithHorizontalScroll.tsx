import { type UIEvent, useState } from 'react';
import { type Project } from '../../data/projects';
import ProjectsFilter from './ProjectsFilter';
import Controls from './Controls';
import PositionIndicatorBar from './PositionIndicatorBar';
import Card from './Card';
import '@/styles/gallery/gallery-with-horizontal-scroll.css';

export default function GalleryWithHorizontalScroll({ projects }: { projects: Project[] }) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // get current scroll postion
  function handleScroll(event: UIEvent<HTMLDivElement>): void {
    if (event.target instanceof HTMLDivElement) setScrollPosition(event.target.scrollLeft);
  }

  return (
    <div className='gallery-wrapper'>
      <ProjectsFilter
        projects={projects}
        filteredProjects={filteredProjects}
        setFilteredProjects={setFilteredProjects}
      />

      {/* NOTE: control buttons + progress indicator  */}
      <nav className='gallery-controls'>
        <Controls scrollPosition={scrollPosition} filteredProjects={filteredProjects} />
        <PositionIndicatorBar
          scrollPosition={scrollPosition}
          targetElement='.gallery'
          parentElement='.gallery-wrapper'
        />
      </nav>

      {/* NOTE: gallery elements / cards / projects */}
      <div className='gallery' onScroll={handleScroll}>
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className='gallery-element'
            title={project.title}
            category={project.category}
            date={project.date}
            technologies={project.technologies}
            liveDemo={project.liveDemo}
            sourceCode={project.sourceCode}
            imageSources={project.imageSources}
            footnote={project.footnote}
          >
            {project.content}
          </Card>
        ))}
      </div>
    </div>
  );
}
