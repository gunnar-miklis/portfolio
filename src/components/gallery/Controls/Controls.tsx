import { useEffect } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

import '@components/gallery/Controls/controls.css';
import type { Project } from '@data/projects';

type Props = {
  scrollPosition: number;
  filteredProjects: Project[];
};

export default function Controls({ scrollPosition, filteredProjects }: Props) {
  // show or hide navigation buttons depending on scroll position
  useEffect(() => {
    const gallery = document.querySelector('.gallery__wrapper');
    const element = document.querySelector('.gallery__element');

    if (gallery instanceof HTMLDivElement && element instanceof HTMLElement) {
      const elementWidth = element.clientWidth;

      if (scrollPosition < elementWidth) {
        // far left gallery position
        document.querySelector('.gallery__to-next')!.setAttribute('style', 'display: none');
        document.querySelector('.gallery__to-previous')!.setAttribute('style', 'display: none');
        document.querySelector('.gallery__to-start')!.setAttribute('style', 'display: none');
        document.querySelector('.gallery__to-end')!.setAttribute('style', 'display: flex');
      } else if (scrollPosition > gallery.scrollWidth - elementWidth * 2) {
        // far right gallery position
        document.querySelector('.gallery__to-next')!.setAttribute('style', 'display: none');
        document.querySelector('.gallery__to-previous')!.setAttribute('style', 'display: flex');
        document.querySelector('.gallery__to-start')!.setAttribute('style', 'display: flex');
        document.querySelector('.gallery__to-end')!.setAttribute('style', 'display: none');
      } else {
        // in between gallery position
        document.querySelector('.gallery__to-next')!.setAttribute('style', 'display: flex');
        document.querySelector('.gallery__to-previous')!.setAttribute('style', 'display: flex');
        document.querySelector('.gallery__to-start')!.setAttribute('style', 'display: none');
        document.querySelector('.gallery__to-end')!.setAttribute('style', 'display: none');
      }
    }
  }, [scrollPosition]);

  // navigate between elements via control buttons
  function navigateTo(targetId: string): void {
    const gallery = document.querySelector('.gallery__wrapper');
    const element = document.querySelector('.gallery__element');

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
      className='gallery__buttons'
      // hide scroll navigations when there's only one project due to filtering
      style={filteredProjects.length <= 1 ? { visibility: 'hidden' } : { visibility: 'visible' }}
    >
      <div className='gallery__buttons-left'>
        <button
          className='link gallery__to-previous'
          onClick={() => navigateTo('previous')}
          title='Scroll to the previous project'
          aria-label='Scroll to the previous project'
        >
          <WestIcon /> Previous
        </button>
        <button
          className='link gallery__to-end'
          onClick={() => navigateTo('next')}
          title='Scroll to the next project'
          aria-label='Scroll to the next project'
        >
          Scroll Right <EastIcon className='gallery__animated-icon' />
        </button>
      </div>

      <div className='gallery__buttons-right'>
        <button
          className='link gallery__to-next'
          onClick={() => navigateTo('next')}
          title='Scroll to the next project'
          aria-label='Scroll to the next project'
        >
          Next <EastIcon />
        </button>
        <button
          className='link gallery__to-start'
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
