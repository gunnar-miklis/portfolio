import React, { useEffect, useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import PositionIndicatorBar from './PositionIndicatorBar';
import Card, { CardProps } from './Card';
import { ProjectsType } from '../utils/projects';
import '@/styles/horizontal-scroll-gallery.css';

export default function HorizontalScrollGallery({ projects }: { projects: ProjectsType }) {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  // get current scroll postion
  function handleScroll(event: React.UIEvent<HTMLDivElement>): void {
    if (event.target instanceof HTMLDivElement) {
      setScrollPosition(event.target.scrollLeft);
    }
  }

  // show / hide navigation buttons
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

  // jump to start/end
  function handleJump(to: string): void {
    const gallery = document.querySelector('.gallery');

    if (gallery instanceof HTMLElement) {
      switch (to) {
        case 'start':
          gallery.scrollTo({ left: 0, behavior: 'smooth' });
          break;
        case 'end':
          gallery.scrollTo({ left: gallery.scrollWidth, behavior: 'smooth' });
          break;
      }
    }
  }

  // scroll elements one-by-one
  function handleNavigation(to: string): void {
    const gallery = document.querySelector('.gallery');
    const element = document.querySelector('.gallery-element');

    if (gallery instanceof HTMLElement && element instanceof HTMLElement) {
      const elementWidth = element.clientWidth;
      switch (to) {
        case 'previous':
          gallery.scrollTo({ left: scrollPosition - elementWidth, behavior: 'smooth' });
          break;
        case 'next':
          gallery.scrollTo({ left: scrollPosition + elementWidth, behavior: 'smooth' });
          break;
      }
    }
  }

  return (
    <div>
      <div className='gallery-wrapper'>
        <div className='gallery-nav'>
          <div className='gallery-nav-buttons'>
            <div className='gallery-nav-buttons-left'>
              <a className='link' id='to-previous' onClick={() => handleNavigation('previous')}>
                <WestIcon />
              </a>
              <a className='link' id='to-end' onClick={() => handleNavigation('next')}>
                Scroll Right <EastIcon id='animated-icon' />
              </a>
            </div>
            <div className='gallery-nav-buttons-right'>
              <a className='link' id='to-next' onClick={() => handleNavigation('next')}>
                <EastIcon />
              </a>
              <a className='link' id='to-start' onClick={() => handleJump('start')}>
                Back to Start <WestIcon />
              </a>
            </div>
          </div>
          <PositionIndicatorBar
            scrollPosition={scrollPosition}
            targetElement='.gallery'
            parentElement='.gallery-wrapper'
          />
        </div>

        <div className='gallery' onScroll={handleScroll}>
          {Object.values(projects).map((project: CardProps, i: number) => (
            <Card
              key={i}
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
              {project.children}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
