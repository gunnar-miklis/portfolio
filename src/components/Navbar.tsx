import '@/styles/navbar.css';
import React, { useEffect } from 'react';

export default function Navbar() {
  // NOTE: set nav item active if in view
  useEffect(() => {
    function setActiveClass() {
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
    }
    window.addEventListener('scroll', setActiveClass);
    return () => window.removeEventListener('scroll', setActiveClass);
  }, []);

  // NOTE: navigate to sections on click
  function navigateTo(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string,
  ): void {
    event.preventDefault();

    const target = document.querySelector(targetId);

    if (target instanceof HTMLElement) {
      window.scrollTo({ top: target.offsetTop - 150, behavior: 'smooth' });
    }
  }
  function scrollToTop(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
          <a
            href='#about'
            id='nav-about'
            className='link active'
            onClick={(event) =>
              window.scrollY < 650 ? navigateTo(event, '.terminal') : scrollToTop(event)
            }
          >
            About
          </a>
          <a
            href='#projects'
            id='nav-projects'
            className='link'
            onClick={(event) => navigateTo(event, '#projects')}
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
