import { useEffect, useState } from 'react';
import '@/styles/header.css';

const h1 = 'Apps with user-centered approach unlock potential.';
const h2 =
  'I believe intuitive, continually evolving products that are both functional and enjoyable will deeply resonate with users and transform their experience.';

export default function Header() {
  const [textH1, setTextH1] = useState<string>(' ');
  const [indexH1, setIndexH1] = useState<number>(0);
  const [showCaretH1, setShowCaretH1] = useState<boolean>(false);
  const [textH2, setTextH2] = useState<string>(' ');
  const [indexH2, setIndexH2] = useState<number>(0);
  const [showCaretH2, setShowCaretH2] = useState<boolean>(false);

  useEffect(() => {
    const about = document.querySelector('#nav-about');
    if (about instanceof HTMLElement) {
      const resetTypeWriter = () => {
        if (window.scrollY > 1200) {
          setTextH1(' ');
          setIndexH1(0);
          setTextH2(' ');
          setIndexH2(0);
        }
      };
      about.addEventListener('click', resetTypeWriter);
      return () => about.addEventListener('click', resetTypeWriter);
    }
  }, []);

  // Typewriter
  useEffect(() => {
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

    // when animateH1 is finished
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
        <img
          src='/src/assets/gunnar-miklis.jpg'
          alt='Portrait: Gunnar Miklis'
          title='Gunnar Miklis'
        />
      </div>
    </header>
  );
}
