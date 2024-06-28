import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';

import '@/styles/modal-gallery.css';
import React, { useEffect, useRef, useState } from 'react';

export default function ModalGallery({
  imageSources,
  closeModal,
}: {
  imageSources: string[];
  closeModal: () => void;
}) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [showPrevious, setShowPrevious] = useState<boolean>(false);
  const [showNext, setShowNext] = useState<boolean>(true);

  const modalRef = useRef<HTMLDivElement>(null); // focus modal on component mount

  // focus modal on component mount
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  // enable keys for navigation
  function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowLeft':
        goPrevious();
        break;
      case 'ArrowRight':
        goNext();
        break;
      default:
        break;
    }
  }

  function goPrevious() {
    if (currentImage > 0) setCurrentImage(currentImage - 1);
    else setShowPrevious(false);
    setShowNext(true);
  }
  function goNext() {
    if (currentImage < imageSources.length - 1) setCurrentImage(currentImage + 1);
    else setShowNext(false);
    setShowPrevious(true);
  }

  return (
    <div
      className='modal'
      onClick={closeModal}
      onKeyDown={handleKeyPress} // net to be focused for keyinput
      tabIndex={0} // enable modal to get focused
      ref={modalRef} // focus modal on component mount
    >
      <div className='modal-wrapper'>
        <span id='modal-close'>
          <CloseIcon fontSize='large' />
        </span>
        <div className='modal-gallery'>
          <div className='modal-actions'>
            {showPrevious && (
              <a
                id='prev-img'
                onClick={(e) => {
                  e.stopPropagation(); // prevent <div className='modal' onClick={closeModal} />
                  goPrevious();
                }}
              />
            )}
            {showNext && (
              <a
                id='next-img'
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
              />
            )}
          </div>

          {showPrevious ? (
            <span className='modal-nav-icon'>
              <ChevronLeftIcon fontSize='large' />
            </span>
          ) : (
            <span className='modal-nav-icon'>
              <ChevronLeftIcon fontSize='large' style={{ visibility: 'hidden' }} />
            </span>
          )}

          <div>
            <img src={imageSources[currentImage]} className='modal-element' />
          </div>

          {showNext ? (
            <span className='modal-nav-icon'>
              <ChevronRightIcon fontSize='large' />
            </span>
          ) : (
            <span className='modal-nav-icon'>
              <ChevronRightIcon fontSize='large' style={{ visibility: 'hidden' }} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
