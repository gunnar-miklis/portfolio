import '@/styles/navbar.css';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const setActiveClass = () => {
      const projectSection = document.querySelector('#projects');
      if (projectSection instanceof HTMLElement) {
        const position = projectSection.getBoundingClientRect().top;
        if (position < 500) {
          document.querySelector('#nav-about')?.classList.remove('active');
          document.querySelector('#nav-projects')?.classList.add('active');
        } else {
          document.querySelector('#nav-about')?.classList.add('active');
          document.querySelector('#nav-projects')?.classList.remove('active');
        }
      }
    };
    window.addEventListener('scroll', setActiveClass);
    return () => window.removeEventListener('scroll', setActiveClass);
  }, []);
  return (
    <nav className='navbar'>
      <div className='center-navbar'>
        <div className='brand'>
          <a
            href='https://flowcv.me/gunnar-miklis'
            target='_blank'
            rel='noreferrer'
            className='link'
          >
            Gunnar Miklis
          </a>
          <a
            href='https://github.com/gunnar-miklis'
            target='_blank'
            rel='noreferrer'
            className='link'
          >
            JavaScript Web Developer
          </a>
        </div>
        <div className='navigation'>
          <a id='nav-about' href='#about' className='link active'>
            About
          </a>
          <a id='nav-projects' href='#projects' className='link'>
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
