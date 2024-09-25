import { useEffect, useState } from 'react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

import '@components/gallery/Controls/controls.css';

type Props = {
  scrollPosition: number;
  filteredProjectsLength: number;
};

export default function GalleryControls({
  scrollPosition,
  filteredProjectsLength,
}: Props) {
  const [showScrollRight, setShowScrollRight] = useState<boolean>(true);
  const [showToNext, setShowToNext] = useState<boolean>(false);
  const [showToStart, setShowToStart] = useState<boolean>(false);
  const [showToPrevious, setShowToPrevious] = useState<boolean>(false);

  // show or hide navigation buttons depending on scroll position
  useEffect(() => {
    const gallery = document.querySelector('.gallery__wrapper');
    const element = document.querySelector('.gallery__element');

    if (gallery instanceof HTMLDivElement && element instanceof HTMLElement) {
      const elementWidth = element.clientWidth;

    if (scrollPosition <= elementWidth) {
      // far left gallery position
      setShowScrollRight(true);
      setShowToNext(false);
      setShowToStart(false);
      setShowToPrevious(false);
    } else if (scrollPosition > gallery.scrollWidth - elementWidth * 2) {
      // far right gallery position
      setShowScrollRight(false);
      setShowToNext(false);
      setShowToStart(true);
      setShowToPrevious(true);
    } else {
      // in between gallery position
      setShowScrollRight(false);
      setShowToNext(true);
      setShowToStart(false);
      setShowToPrevious(true);
    }
  }
  }, [scrollPosition]);

  // navigate between elements via control buttons
  function scrollTo(targetId: string): void {
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
      className='gallery__control-buttons'
      style={{ visibility: filteredProjectsLength <= 1 ? 'hidden' : 'visible' }} // hide scroll navigations when there's only one project due to filtering. to prevent layout shift, just toggle visibility.
    >
      <div className='gallery__control-buttons-left'>
        <button
          className='link gallery__control-button'
          onClick={() => scrollTo('previous')}
          style={{ display: showToPrevious ? 'flex' : 'none' }}
          title='Scroll to the previous project'
          aria-label='Scroll to the previous project'
        >
          <WestIcon /> Previous
        </button>
        <button
          className='link gallery__control-button'
          onClick={() => scrollTo('next')}
          style={{ display: showScrollRight ? 'flex' : 'none' }}
          title='Scroll to the next project'
          aria-label='Scroll to the next project'
        >
          Scroll Right <EastIcon className='gallery__animated-arrow' />
        </button>
      </div>

      <div className='gallery__control-buttons-right'>
        <button
          className='link gallery__control-button'
          onClick={() => scrollTo('start')}
          style={{ display: showToStart ? 'flex' : 'none' }}
          title='Scroll to the first project'
          aria-label='Scroll to the first project'
        >
          Back to Start <WestIcon />
        </button>
        <button
          className='link gallery__control-button'
          onClick={() => scrollTo('next')}
          style={{ display: showToNext ? 'flex' : 'none' }}
          title='Scroll to the next project'
          aria-label='Scroll to the next project'
        >
          Next <EastIcon />
        </button>
      </div>
    </div>
  );
}
