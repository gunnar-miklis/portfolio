/* Not sure why a11y is complaining at this point because...
 * - the summary element is "tabable",
 * - keyboard "keypress" works to open/close the details element and
 * - the screenreader anounce the interactive element properly. */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import type { MouseEvent, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import useWindowDimensions from '@/hooks/useWindowDimensions';
import Paper from '@components/common/Paper';
import LinkWithIcon from '@components/common/LinkWithIcon';
import Chip from '@components/common/Chip';
import '@styles/components/gallery/card.css';

type HTMLSummaryElement = HTMLElement;

type CardProps = {
  children: ReactNode;
  className: string;
  title: string;
  tags: string[];
  imageSources: string[];
  category?: string;
  date?: string;
  liveDemo?: string;
  sourceCode?: string;
  footnote?: string;
};

export default function Card({
  children,
  className,
  title,
  category,
  date,
  tags,
  imageSources,
  liveDemo,
  sourceCode,
  footnote,
}: CardProps) {
  const { windowWidth } = useWindowDimensions();
  const [orientation, setOrientation] = useState<'col' | 'row'>('col');
  const [isDetailsExpanded, setIsDetailsExpanded] = useState<boolean>(true);

  // NOTE: set the orientation and reset values to intial when window resizes
  useEffect(() => {
    const cardImages = document.querySelectorAll(`.card-image`);
    const cardContents = document.querySelectorAll(`.card-content`);
    const summary = document.querySelector('summary');

    if (windowWidth > 992) {
      setOrientation('row');
      if (cardImages instanceof NodeList && cardContents instanceof NodeList) {
        cardImages.forEach((cardImage) => {
          if (cardImage instanceof HTMLDivElement) {
            cardImage.style.maxHeight = '1000px';
            cardImage.style.flexBasis = '35%';
          }
        });
        cardContents.forEach((cardContent) => {
          if (cardContent instanceof HTMLDivElement) {
            cardContent.style.maxHeight = '100%';
            cardContent.style.flexBasis = '65%';
          }
        });
      }
    } else {
      setOrientation('col');
      if (
        cardImages instanceof NodeList &&
        cardContents instanceof NodeList &&
        summary instanceof HTMLElement
      ) {
        cardImages.forEach((cardImage) => {
          if (cardImage instanceof HTMLDivElement) cardImage.style.maxHeight = '400px';
        });
        cardContents.forEach((cardContent) => {
          if (cardContent instanceof HTMLDivElement)
            cardContent.style.maxHeight = summary.offsetHeight + cardContent.offsetHeight + 'px';
        });
      }
    }

    setIsDetailsExpanded(true);
  }, [windowWidth, orientation]);

  // NOTE: animation when details is toggled
  function toggleDetails(event: MouseEvent<HTMLSummaryElement>, cardId: string) {
    event.preventDefault();

    const cardImage = document.querySelector(`#${cardId} .card-image`);
    const img = document.querySelector(`#${cardId} .card-image img`);
    const cardContent = document.querySelector(`#${cardId} .card-content`);
    const summary = document.querySelector(`#${cardId} .details summary`);

    if (
      cardImage instanceof HTMLDivElement &&
      img instanceof HTMLImageElement &&
      summary instanceof HTMLElement &&
      cardContent instanceof HTMLDivElement
    ) {
      // set animations options
      const options = {
        duration: 400,
        easing: 'ease-out',
      };

      if (orientation === 'col') {
        // NOTE: up-down (height) animation for COLUMN layout
        // card-image parameter
        const imgShrinked = '400px'; // COMMENT: if change here, change in /styles/card.css too
        const imgExpanded = img.offsetHeight + 32 + 'px'; // 16x2 = 32 = padding
        const expand = { maxHeight: [imgShrinked, imgExpanded] };
        const shrink = { maxHeight: [imgExpanded, imgShrinked] };

        // card-content parameter
        const contentClosed = summary.offsetHeight + 'px';
        const contentOpened = summary.offsetHeight + cardContent.offsetHeight + 'px';
        const close = { maxHeight: [contentOpened, contentClosed], opacity: [1, 0] };
        const open = { maxHeight: [contentClosed, contentOpened], opacity: [0, 1] };

        // animation
        if (!isDetailsExpanded) {
          // show details, shrink image
          cardImage.animate(shrink, options);
          cardImage.style.maxHeight = imgShrinked;
          cardContent.animate(open, options);
          setIsDetailsExpanded(true);
        } else {
          // hide details, expand image
          cardImage.animate(expand, options);
          cardImage.style.maxHeight = imgExpanded;
          cardContent.animate(close, options);
          // needs a delay here, otherwise details immediatly closes and the animation won't be visible.
          const timer = setTimeout(() => {
            setIsDetailsExpanded(false);
            clearTimeout(timer);
          }, 300);
        }
      } else {
        // NOTE: left-right (width/flex-basis) animation for ROW layout
        // card-image parameter
        const imgShrinked = '35%'; // COMMENT: if change here, change in /styles/card.css too
        const imgExpanded = `calc(100% - ${summary.offsetWidth + 32}px`; // 16x2 = 32 = padding
        const expand = { flexBasis: [imgShrinked, imgExpanded] };
        const shrink = { flexBasis: [imgExpanded, imgShrinked] };

        // card-content parameter
        const contentClosed = '0%';
        const contentOpened = '65%'; // COMMENT: if change here, change in /styles/card.css too
        const close = { flexBasis: [contentOpened, contentClosed], opacity: [1, 0] };
        const open = { flexBasis: [contentClosed, contentOpened], opacity: [0, 1] };

        // animation
        if (!isDetailsExpanded) {
          // show details
          cardImage.animate(shrink, options);
          cardImage.style.flexBasis = imgShrinked;
          cardContent.animate(open, options);
          setIsDetailsExpanded(true);
        } else {
          // hide details
          cardImage.animate(expand, options);
          cardImage.style.flexBasis = imgExpanded;
          cardContent.animate(close, options);
          // needs a delay here, otherwise details immediatly closes and the animation won't be visible.
          const timer = setTimeout(() => {
            setIsDetailsExpanded(false);
            clearTimeout(timer);
          }, 300);
        }
      }
    }
  }

  // NOTE: create an unique ID based on the given string (title). For example: #details-web-platform
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
      {/* NOTE: image */}
      <div className='card-image' title='Project image' aria-label='Project image'>
        {imageSources.map((source, i) => (
          <img key={i} src={source} alt={`Screenshot: ${title}`} loading='lazy' />
        ))}
      </div>

      {/* NOTE: content */}
      <details
        className='details'
        id={createId('details', title)}
        aria-label='Project Details'
        open={isDetailsExpanded}
      >
        <summary
          onClick={(event) => toggleDetails(event, createId('card', title))}
          title='Toggle Project Details'
          aria-label='Toggle Project Details'
          aria-controls={createId('details', title)}
          aria-expanded={isDetailsExpanded}
        >
          {/* show pointing arrow based on col/row layout and isDetailsExpanded */}
          {orientation === 'col' ? (
            isDetailsExpanded ? (
              <span title='Hide Project Details'>
                <ArrowDownIcon fontSize='large' />
              </span>
            ) : (
              <span title='Show Project Details'>
                <ArrowUpIcon fontSize='large' />
              </span>
            )
          ) : isDetailsExpanded ? (
            <span title='Hide Project Details'>
              <ArrowRightIcon fontSize='large' />
            </span>
          ) : (
            <span title='Show Project Details'>
              <ArrowLeftIcon fontSize='large' />
            </span>
          )}
        </summary>
        <div className='card-content'>
          {/* header */}
          <div className='card-header'>
            <h3 className='heading-3' id={title}>
              {title}
            </h3>
            {category && date ? (
              <small className='small'>
                {category}, {date}
              </small>
            ) : category ? (
              <small className='small'>{category}</small>
            ) : (
              <small className='small'>{date}</small>
            )}
          </div>

          {/* body */}
          <div className='card-body'>
            {/* desription + features */}
            {children}

            {/* tags */}
            <Paper
              paperSpacing='sm'
              style={{ flexFlow: 'row wrap' }}
              title='Tags'
              aria-label='Tags'
            >
              {tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </Paper>

            {/* action links */}
            {(liveDemo || sourceCode) && (
              <Paper
                paperSpacing='sm'
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
              </Paper>
            )}

            {/* footnote */}
            {footnote && <small className='small footnote'>{footnote}</small>}
          </div>
        </div>
      </details>
    </article>
  );
}
