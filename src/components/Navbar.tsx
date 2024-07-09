import '@/styles/navbar.css';
import React, { useEffect } from 'react';
import ExternalLink from './ExternalLink';

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
    <nav className='navbar' role='navigation'>
      <div className='center-navbar'>
        <div className='brand'>
          <ExternalLink href='https://flowcv.me/gunnar-miklis' title='Online Business Card'>
            Gunnar Miklis
          </ExternalLink>
          <ExternalLink href='https://github.com/gunnar-miklis' title='GitHub'>
            JavaScript Web Developer
          </ExternalLink>
        </div>
        <div className='navigation'>
          <a
            id='nav-about'
            className='link active'
            href='#about'
            onClick={(event) =>
              window.scrollY < 650 ? navigateTo(event, '.terminal') : scrollToTop(event)
            }
            title='Navigate to About Section'
            aria-label='Navigate to About Section'
          >
            About
          </a>
          <a
            id='nav-projects'
            className='link'
            href='#projects'
            onClick={(event) => navigateTo(event, '#projects')}
            title='Navigate to Projects Section'
            aria-label='Navigate to Projects Section'
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
