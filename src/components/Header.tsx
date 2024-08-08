import { useEffect, useState } from 'react';
import portrait from './../assets/gunnar-miklis.webp';
import '@/styles/header.css';

const h1 = 'While AI can streamline tasks, it can also lead to an unreliable and messy code base.';
const h2 =
  'Effective AI integration needs to be managed properly to ensure software quality including maintainability, scalability, security, and usability. I aim for high software quality and an user-centered approach.';

export default function Header() {
  const [textH1, setTextH1] = useState<string>(' ');
  const [indexH1, setIndexH1] = useState<number>(0);
  const [showCaretH1, setShowCaretH1] = useState<boolean>(false);
  const [textH2, setTextH2] = useState<string>(' ');
  const [indexH2, setIndexH2] = useState<number>(0);
  const [showCaretH2, setShowCaretH2] = useState<boolean>(false);

  // reset and repeat Typewriter when click on ABOUT beyong a certain scroll position
  useEffect(() => {
    const about = document.querySelector('#nav-about');
    if (about instanceof HTMLAnchorElement) {
      const resetTypeWriter = () => {
        if (window.scrollY > 1200) {
          setTextH1(' ');
          setIndexH1(0);
          setTextH2(' ');
          setIndexH2(0);
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
      if (textH1.length <= h1.length) {
        setShowCaretH1(true);
        setShowCaretH2(false);
        if (indexH1 < h1.length) {
          setTextH1((prevText) => (prevText += h1[indexH1]));
          setIndexH1((prevIdx) => prevIdx + 1);
        }
      } else {
        setShowCaretH1(false);
        clearInterval(animateH1);
      }
    }, 32);

    // animation 2/2 (subtitle)
    // when animateH1 is finished, do animateH2
    const animateH2 = setInterval(() => {
      if (textH1.length > h1.length && textH2.length <= h2.length) {
        setShowCaretH1(false);
        setShowCaretH2(true);
        if (indexH2 < h2.length) {
          setTextH2((prevText) => (prevText += h2[indexH2]));
          setIndexH2((prevIdx) => prevIdx + 1);
        }
      } else {
        setShowCaretH2(false);
        clearInterval(animateH2);
      }
    }, 18);

    return () => {
      clearInterval(animateH1);
      clearInterval(animateH2);
    };
  }, [indexH1, indexH2, textH1.length, textH2.length]);

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
        <h1>
          {textH1}
          <span
            className='typewriter-caret'
            style={showCaretH1 ? { display: 'inline' } : { display: 'none' }}
          />
        </h1>
        <h2>
          {textH2}
          <span
            className='typewriter-caret'
            style={showCaretH2 ? { display: 'inline' } : { display: 'none' }}
          />
        </h2>
      </div>
      <div className='header-image'>
        <img src={portrait} alt='Portrait: Gunnar Miklis' title='Gunnar Miklis' />
      </div>
    </header>
  );
}
