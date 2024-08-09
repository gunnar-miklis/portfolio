import { useEffect } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { type ProjectsType } from '../../data/projects';
import '@/styles/gallery/controls.css';

interface ControllsProps {
  scrollPosition: number;
  filteredProjects: ProjectsType;
}

export default function Controls({ scrollPosition, filteredProjects }: ControllsProps) {
  // show or hide navigation buttons depending on scroll position
  useEffect(() => {
    const gallery = document.querySelector('.gallery');
    const element = document.querySelector('.gallery-element');

    if (gallery instanceof HTMLDivElement && element instanceof HTMLElement) {
      const elementWidth = element.clientWidth;

      if (scrollPosition < elementWidth) {
        // far left gallery position
        document.querySelector('#to-next')?.setAttribute('style', 'display: none');
        document.querySelector('#to-previous')?.setAttribute('style', 'display: none');
        document.querySelector('#to-start')?.setAttribute('style', 'display: none');
        document.querySelector('#to-end')?.setAttribute('style', 'display: inline-flex');
      } else if (scrollPosition > gallery.scrollWidth - elementWidth * 2) {
        // far right gallery position
        document.querySelector('#to-next')?.setAttribute('style', 'display: none');
        document.querySelector('#to-previous')?.setAttribute('style', 'display: inline-flex');
        document.querySelector('#to-start')?.setAttribute('style', 'display: inline-flex');
        document.querySelector('#to-end')?.setAttribute('style', 'display: none');
      } else {
        // in between gallery position
        document.querySelector('#to-next')?.setAttribute('style', 'display: inline-flex');
        document.querySelector('#to-previous')?.setAttribute('style', 'display: inline-flex');
        document.querySelector('#to-start')?.setAttribute('style', 'display: none');
        document.querySelector('#to-end')?.setAttribute('style', 'display: none');
      }
    }
  }, [scrollPosition]);

  // navigate between elements via control buttons
  function navigateTo(targetId: string): void {
    const gallery = document.querySelector('.gallery');
    const element = document.querySelector('.gallery-element');

    if (gallery instanceof HTMLDivElement && element instanceof HTMLElement) {
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
    <div
      className='gallery-control-buttons'
      // hide scroll navigations when there's only one project due to filtering
      style={
        Object.keys(filteredProjects).length <= 1
          ? { visibility: 'hidden' }
          : { visibility: 'visible' }
      }
    >
      <div className='gallery-control-buttons-left'>
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
      <div className='gallery-control-buttons-right'>
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
  );
}
