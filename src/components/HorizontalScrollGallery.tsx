import React, { useEffect, useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import PositionIndicatorBar from './PositionIndicatorBar';
import Card from './Card';
import { Project, ProjectsType } from '../data/projects';
import '@/styles/horizontal-scroll-gallery.css';

export default function HorizontalScrollGallery({ projects }: { projects: ProjectsType }) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  // NOTE: get current scroll postion
  function handleScroll(event: React.UIEvent<HTMLDivElement>): void {
    if (event.target instanceof HTMLDivElement) {
      setScrollPosition(event.target.scrollLeft);
    }
  }

  // NOTE: show/hide behavior of navigation buttons
  useEffect(() => {
    const gallery = document.querySelector('.gallery');
    const element = document.querySelector('.gallery-element');

    if (gallery instanceof HTMLElement && element instanceof HTMLElement) {
      const elementWidth = element.clientWidth;

      if (scrollPosition < elementWidth) {
        // far left
        document.querySelector('#to-next')?.setAttribute('style', 'display: none');
        document.querySelector('#to-previous')?.setAttribute('style', 'display: none');
        document.querySelector('#to-start')?.setAttribute('style', 'display: none');
        document.querySelector('#to-end')?.setAttribute('style', 'display: inline-flex');
      } else if (scrollPosition > gallery.scrollWidth - elementWidth * 2) {
        // far right
        document.querySelector('#to-next')?.setAttribute('style', 'display: none');
        document.querySelector('#to-previous')?.setAttribute('style', 'display: inline-flex');
        document.querySelector('#to-start')?.setAttribute('style', 'display: inline-flex');
        document.querySelector('#to-end')?.setAttribute('style', 'display: none');
      } else {
        // in between
        document.querySelector('#to-next')?.setAttribute('style', 'display: inline-flex');
        document.querySelector('#to-previous')?.setAttribute('style', 'display: inline-flex');
        document.querySelector('#to-start')?.setAttribute('style', 'display: none');
        document.querySelector('#to-end')?.setAttribute('style', 'display: none');
      }
    }
  }, [scrollPosition]);

  // NOTE: navigate between elements inside the gallery
  function navigateTo(targetId: string): void {
    const gallery = document.querySelector('.gallery');
    const element = document.querySelector('.gallery-element');

    if (gallery instanceof HTMLElement && element instanceof HTMLElement) {
      const elementWidth = element.clientWidth;
      switch (targetId) {
        case 'previous':
          gallery.scrollTo({ left: scrollPosition - elementWidth, behavior: 'smooth' });
          break;
        case 'next':
          gallery.scrollTo({ left: scrollPosition + elementWidth, behavior: 'smooth' });
          break;
        case 'start':
          gallery.scrollTo({ left: 0, behavior: 'smooth' });
          break;
        case 'end':
          gallery.scrollTo({ left: gallery.scrollWidth, behavior: 'smooth' });
          break;
        default:
          break;
      }
    }
  }

  return (
    <div className='gallery-wrapper'>
      <nav className='gallery-nav'>
        <div className='gallery-nav-buttons'>
          <div className='gallery-nav-buttons-left'>
            <button
              className='link'
              id='to-previous'
              onClick={() => navigateTo('previous')}
              title='Scroll to the previous project'
              aria-label='Scroll to the previous project'
            >
              <WestIcon /> Previous
            </button>
            <button
              className='link'
              id='to-end'
              onClick={() => navigateTo('next')}
              title='Scroll to the next project'
              aria-label='Scroll to the next project'
            >
              Scroll Right <EastIcon id='animated-icon' />
            </button>
          </div>
          <div className='gallery-nav-buttons-right'>
            <button
              className='link'
              id='to-next'
              onClick={() => navigateTo('next')}
              title='Scroll to the next project'
              aria-label='Scroll to the next project'
            >
              Next <EastIcon />
            </button>
            <button
              className='link'
              id='to-start'
              onClick={() => navigateTo('start')}
              title='Scroll to the first project'
              aria-label='Scroll to the first project'
            >
              Back to Start <WestIcon />
            </button>
          </div>
        </div>
        <PositionIndicatorBar
          scrollPosition={scrollPosition}
          targetElement='.gallery'
          parentElement='.gallery-wrapper'
        />
      </nav>

      <div className='gallery' onScroll={handleScroll}>
        {Object.values(projects).map((project: Project) => (
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
