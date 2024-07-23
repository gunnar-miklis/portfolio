import React, { ReactNode, useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import useWindowDimensions from '../hooks/useWindowDimensions';
import LinkWithIcon from './LinkWithIcon';
import '@/styles/card.css';
import ExpandShrinkButton from './ExpandShrinkButton';

interface CardProps {
  children: ReactNode;
  className: string;
  title: string;
  technologies: string[];
  imageSources: string[];
  category?: string;
  date?: string;
  liveDemo?: string;
  sourceCode?: string;
  footnote?: string;
}

export default function Card({
  children,
  className,
  title,
  category,
  date,
  technologies,
  imageSources,
  liveDemo,
  sourceCode,
  footnote,
}: CardProps) {
  const { windowWidth } = useWindowDimensions();
  const [orientation, setOrientation] = useState<'col' | 'row'>('col');
  const [isDetailsExpanded, setIsDetailsExpanded] = useState<boolean>(true);

  console.log('windowWidth :>> ', windowWidth);
  console.log('orientation :>> ', orientation);
  console.log('isDetailsExpanded :>> ', isDetailsExpanded);

  // NOTE: reset values to intial when window resizes and the orientation changes
  useEffect(() => {
    if (windowWidth > 992) {
      setOrientation('row');
    } else {
      setOrientation('col');
    }
    setIsDetailsExpanded(true);
  }, [windowWidth, orientation]);

  function toggleDetails(event: React.MouseEvent, cardId: string) {
    event.preventDefault();

    const details = document.querySelector(`#${cardId}`);
    const cardImage = document.querySelector(`#${cardId} .card-image`);
    const img = document.querySelector(`#${cardId} .card-image img`);
    const summary = document.querySelector(`#${cardId} .details summary`);
    const cardContent = document.querySelector(`#${cardId} .card-content`);

    if (
      details instanceof HTMLElement &&
      cardImage instanceof HTMLElement &&
      img instanceof HTMLElement &&
      summary instanceof HTMLElement &&
      cardContent instanceof HTMLElement
    ) {
      if (orientation === 'col') {
        // card-image animation parameter
        const imgInital = '400px'; // COMMENT: inital height
        const imgMax = img.offsetHeight + 32 + 'px';
        const expand = { maxHeight: [imgInital, imgMax] };
        const shrink = { maxHeight: [imgMax, imgInital] };

        // card-content animation parameter
        const contentInital = summary.offsetHeight + 'px';
        const contentMax = summary.offsetHeight + cardContent.offsetHeight + 'px';
        const close = { maxHeight: [contentMax, contentInital], opacity: [1, 0] };
        const open = { maxHeight: [contentInital, contentMax], opacity: [0, 1] };

        // animations
        const options = {
          duration: 400,
          iteration: 1,
          easing: 'ease-out',
        };

        if (!isDetailsExpanded) {
          // show details
          cardImage.animate(shrink, options);
          cardImage.style.maxHeight = imgInital;
          cardContent.animate(open, options);
          setIsDetailsExpanded(true);
        } else {
          // hide details
          cardImage.animate(expand, options);
          cardImage.style.maxHeight = imgMax;
          cardContent.animate(close, options);
          const timer = setTimeout(() => {
            setIsDetailsExpanded(false);
            clearTimeout(timer);
          }, 300);
        }
      } else {
        // TODO: row
      }
    }
  }

  function createId(htmlTag: string, str: string): string {
    return (
      htmlTag +
      '-' +
      str
        .toLowerCase()
        .replace(/\W+(?=\W?)/g, '-')
        .replace(/\W+$/g, '')
    );
  }

  return (
    <article id={createId('card', title)} className={`card ${className}`}>
      <div className='card-image' title='Project image' aria-label='Project image'>
        {/* images */}
        {imageSources.map((source, i) => (
          <img key={i} src={source} alt={`Screenshot: ${title}`} />
        ))}
      </div>

      <details
        className='details'
        id={createId('details', title)}
        aria-label='Project Details'
        aria-expanded={isDetailsExpanded}
        open={isDetailsExpanded}
      >
        <summary
          onClick={(event) => toggleDetails(event, createId('card', title))}
          title='Toggle Project Details'
          aria-controls={createId('details', title)}
          aria-expanded={isDetailsExpanded}
        >
          {orientation === 'col' ? (
            isDetailsExpanded ? (
              <span id='close-down' title='Hide Project Details'>
                <ArrowDownIcon fontSize='large' />
              </span>
            ) : (
              <span id='open-up' title='Show Project Details'>
                <ArrowUpIcon fontSize='large' />
              </span>
            )
          ) : isDetailsExpanded ? (
            <span id='close-right' title='Hide Project Details'>
              <ArrowRightIcon fontSize='large' />
            </span>
          ) : (
            <span id='open-left' title='Show Project Details'>
              <ArrowLeftIcon fontSize='large' />
            </span>
          )}
        </summary>
        <div className='card-content'>
          {/* header */}
          <div className='card-inner'>
            <div className='card-header'>
              <h3>{title}</h3>
              <p className='annotation'>
                {category && category + ', '}
                {date && date}
              </p>
            </div>

            {/* description */}
            <div className='card-description'>{children}</div>
          </div>

          {/* technologies */}
          <div
            className='paper paper-spacing-sm'
            style={{ flexFlow: 'row wrap' }}
            title='Technologies'
            aria-label='Technologies'
          >
            {technologies.map((tech, i) => (
              <span className='chip' key={i}>
                {tech}
              </span>
            ))}
          </div>

          {/* action links */}
          <div
            className='paper paper-spacing-sm'
            style={{ flexFlow: 'row wrap' }}
            title='External Links'
            aria-label='External Links'
          >
            {liveDemo && (
              <LinkWithIcon href={liveDemo} icon={<LaunchRoundedIcon />} title='Live Demo' />
            )}
            {sourceCode && (
              <LinkWithIcon href={sourceCode} icon={<GitHubIcon />} title='Source Code' />
            )}
          </div>

          {/* footnote */}
          {footnote && <p className='annotation footnote'>{footnote}</p>}
        </div>
      </details>
    </article>
  );
}
