import { useEffect, useState } from 'react';

import { title, subtitle } from '@data/header';
import portrait from '@assets/gunnar-miklis.webp';
import '@styles/components/header.css';

export default function Header() {
  const [textTitle, setTextTitle] = useState<string>(' ');
  const [indexTitle, setIndexTitle] = useState<number>(0);
  const [showCaretTitle, setShowCaretTitle] = useState<boolean>(false);
  const [textSubtitle, setTextSubtitle] = useState<string>(' ');
  const [indexSubtitle, setIndexSubtitle] = useState<number>(0);
  const [showCaretSubtitle, setShowCaretSubtitle] = useState<boolean>(false);

  // reset and repeat Typewriter when click on ABOUT beyong a certain scroll position
  useEffect(() => {
    const about = document.querySelector('#nav-about');
    if (about instanceof HTMLAnchorElement) {
      const resetTypeWriter = () => {
        if (window.scrollY > 1200) {
          setTextTitle(' ');
          setIndexTitle(0);
          setTextSubtitle(' ');
          setIndexSubtitle(0);
          animateImage();
        }
      };
      about.addEventListener('click', resetTypeWriter);
      return () => about.addEventListener('click', resetTypeWriter);
    }
  }, []);

  // Typewriter
  useEffect(() => {
    // animation 1/2 (title)
    const animateH1 = setInterval(() => {
      if (textTitle.length <= title.length) {
        setShowCaretTitle(true);
        setShowCaretSubtitle(false);
        if (indexTitle < title.length) {
          setTextTitle((prevText) => (prevText += title[indexTitle]));
          setIndexTitle((prevIdx) => prevIdx + 1);
        }
      } else {
        setShowCaretTitle(false);
        clearInterval(animateH1);
      }
    }, 32);

    // animation 2/2 (subtitle)
    // when animateH1 is finished, do animateH2
    const animateH2 = setInterval(() => {
      if (textTitle.length > title.length && textSubtitle.length <= subtitle.length) {
        setShowCaretTitle(false);
        setShowCaretSubtitle(true);
        if (indexSubtitle < subtitle.length) {
          setTextSubtitle((prevText) => (prevText += subtitle[indexSubtitle]));
          setIndexSubtitle((prevIdx) => prevIdx + 1);
        }
      } else {
        setShowCaretSubtitle(false);
        clearInterval(animateH2);
      }
    }, 18);

    return () => {
      clearInterval(animateH1);
      clearInterval(animateH2);
    };
  }, [indexTitle, indexSubtitle, textTitle.length, textSubtitle.length]);

  useEffect(() => {
    animateImage();
  }, []);

  function animateImage() {
    const headerImage = document.querySelector('.header-image');
    if (headerImage instanceof HTMLDivElement) {
      headerImage.animate(
        [
          { opacity: 0, marginRight: '-50px' },
          { opacity: 1, marginRight: 'unset' },
        ],
        {
          duration: 2000,
          easing: 'ease-out',
        },
      );
    }
  }

  return (
    <header className='header'>
      <div className='header-text'>
        <h1 className='heading-1 title'>
          {textTitle}
          <span
            className='typewriter-caret'
            style={showCaretTitle ? { display: 'inline' } : { display: 'none' }}
          />
        </h1>
        <h2 className='heading-2 subtitle'>
          {textSubtitle}
          <span
            className='typewriter-caret'
            style={showCaretSubtitle ? { display: 'inline' } : { display: 'none' }}
          />
        </h2>
      </div>
      <div className='header-image'>
        <img src={portrait} alt='Portrait: Gunnar Miklis' title='Gunnar Miklis' loading='eager' />
      </div>
    </header>
  );
}
