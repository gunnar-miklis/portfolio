/* Not sure why a11y is complaining at this point because...
 * - the summary element is "tabable",
 * - keyboard "keypress" works to open/close the details element and
 * - the screenreader anounce the interactive element properly. */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import useWindowDimensions from '@/hooks/useWindowDimensions';
import Paper from '@components/common/Paper/Paper';
import LinkWithIcon from '@components/common/LinkWithIcon/LinkWithIcon';
import Chip from '@components/common/Chip/Chip';
import '@components/gallery/Card/card.css';
import type { Project } from '@/data/projects';
import { createSlug } from '@/utils/functions';

type HTMLSummaryElement = HTMLElement;

type Props = Omit<Project, 'id' | 'content'> & {
  className: string;
};

export default function GalleryCard({
  className,
  title,
  category,
  date,
  description,
  features,
  tags,
  imageSources,
  liveDemo,
  sourceCode,
  footnote,
}: Props) {
  const { windowWidth } = useWindowDimensions();
  const [orientation, setOrientation] = useState<'col' | 'row'>('col');
  const [isDetailsExpanded, setIsDetailsExpanded] = useState<boolean>(true);

  // RESET: when window resizes, reset the orientation and values to intial
  useEffect(() => {
    const allCardHeaders = document.querySelectorAll('.card__header');
    const allCardContents = document.querySelectorAll('.card__content');

    if (windowWidth > 992) {
      setOrientation('row');
      if (allCardHeaders instanceof NodeList && allCardContents instanceof NodeList) {
        allCardHeaders.forEach((cardHeader) => {
          if (cardHeader instanceof HTMLDivElement) {
            cardHeader.style.maxHeight = '1000px';
            cardHeader.style.flexBasis = '35%';
          }
        });
        allCardContents.forEach((cardContent) => {
          if (cardContent instanceof HTMLDivElement) {
            cardContent.style.maxHeight = '100%';
            cardContent.style.flexBasis = '65%';
          }
        });
      }
    } else {
      setOrientation('col');

      // one summary element is need as reference to calculate the offset
      const summary = document.querySelector('.card__summary');

      if (
        allCardHeaders instanceof NodeList &&
        allCardContents instanceof NodeList &&
        summary instanceof HTMLElement
      ) {
        allCardHeaders.forEach((cardHeader) => {
          if (cardHeader instanceof HTMLDivElement) {
            cardHeader.style.maxHeight = '400px';
          }
        });
        allCardContents.forEach((cardBody) => {
          if (cardBody instanceof HTMLDivElement)
            cardBody.style.maxHeight = summary.offsetHeight + cardBody.offsetHeight + 'px';
        });
      }
    }

    setIsDetailsExpanded(true);
  }, [windowWidth, orientation]);

  // ANIMATION: when details is toggled
  function toggleDetails(event: MouseEvent<HTMLSummaryElement>, cardId: string) {
    event.preventDefault();

    const cardHeader = document.querySelector(`#${cardId} .card__header`);
    const cardContent = document.querySelector(`#${cardId} .card__content`);
    const cardImage = document.querySelector(`#${cardId} .card__image`);
    const cardSummary = document.querySelector(`#${cardId} .card__summary`);

    if (
      cardHeader instanceof HTMLDivElement &&
      cardContent instanceof HTMLDivElement &&
      cardImage instanceof HTMLImageElement &&
      cardSummary instanceof HTMLElement
    ) {
      // set animations options
      const options = {
        duration: 400,
        easing: 'ease-out',
      };

      if (orientation === 'col') {
        // UP-DOWN ANIMATION: for COLUMN layout (height)

        // card__header parameter
        const headerShrinked = '400px'; // COMMENT: if change here, change in /styles/card.css too
        const headerExpanded = cardImage.offsetHeight + 32 + 'px'; // 16x2 = 32 = padding
        const expand = { maxHeight: [headerShrinked, headerExpanded] };
        const shrink = { maxHeight: [headerExpanded, headerShrinked] };

        // card__content parameter
        const contentClosed = cardSummary.offsetHeight + 'px';
        const contentOpened = cardSummary.offsetHeight + cardContent.offsetHeight + 'px';
        const close = { maxHeight: [contentOpened, contentClosed], opacity: [1, 0] };
        const open = { maxHeight: [contentClosed, contentOpened], opacity: [0, 1] };

        // animation
        if (!isDetailsExpanded) {
          // show content, shrink header
          cardHeader.animate(shrink, options);
          cardHeader.style.maxHeight = headerShrinked;
          cardContent.animate(open, options);

          setIsDetailsExpanded(true);
        } else {
          // hide content, expand header
          cardHeader.animate(expand, options);
          cardHeader.style.maxHeight = headerExpanded;
          cardContent.animate(close, options);

          // needs a delay here, otherwise content immediatly closes and the animation won't be visible.
          const timer = setTimeout(() => {
            setIsDetailsExpanded(false);
            clearTimeout(timer);
          }, options.duration - 100);
        }
      } else {
        // LEFT-RIGHT ANIMATION: for ROW layout (width/flex-basis)

        // card__header parameter
        const headerShrinked = '35%'; // COMMENT: if change here, change in /styles/card.css too
        const headerExpanded = `calc(100% - ${cardSummary.offsetWidth + 32}px`; // 16x2 = 32 = padding
        const expand = { flexBasis: [headerShrinked, headerExpanded] };
        const shrink = { flexBasis: [headerExpanded, headerShrinked] };

        // card__content parameter
        const contentClosed = '0%';
        const contentOpened = '65%'; // COMMENT: if change here, change in /styles/card.css too
        const close = { flexBasis: [contentOpened, contentClosed], opacity: [1, 0] };
        const open = { flexBasis: [contentClosed, contentOpened], opacity: [0, 1] };

        // animation
        if (!isDetailsExpanded) {
          // show details
          cardHeader.animate(shrink, options);
          cardHeader.style.flexBasis = headerShrinked;
          cardContent.animate(open, options);

          setIsDetailsExpanded(true);
        } else {
          // hide details
          cardHeader.animate(expand, options);
          cardHeader.style.flexBasis = headerExpanded;
          cardContent.animate(close, options);

          // needs a delay here, otherwise details immediatly closes and the animation won't be visible.
          const timer = setTimeout(() => {
            setIsDetailsExpanded(false);
            clearTimeout(timer);
          }, options.duration - 100);
        }
      }
    }
  }

  return (
    <article id={createSlug(title, 'card')} className={`card ${className}`}>
      <div className='card__header' title='Project image' aria-label='Project image'>
        {imageSources.map((source, i) => (
          <img
            className='card__image'
            key={i}
            src={source}
            alt={`Screenshot: ${title}`}
            loading='lazy'
          />
        ))}
      </div>

      <details
        className='card__details'
        id={createSlug(title, 'details')}
        aria-label='Project Details'
        open={isDetailsExpanded}
      >
        <summary
          className='card__summary'
          onClick={(event) => toggleDetails(event, createSlug(title, 'card'))}
          title='Toggle Project Details'
          aria-label='Toggle Project Details'
          aria-controls={createSlug(title, 'details')}
          aria-expanded={isDetailsExpanded}
        >
          {/* show pointing arrow based on col/row layout and isDetailsExpanded */}
          {orientation === 'col' ? (
            isDetailsExpanded ? (
              <span className='card__summary-icon' title='Hide Project Details'>
                <ArrowDownIcon fontSize='large' />
              </span>
            ) : (
              <span className='card__summary-icon' title='Show Project Details'>
                <ArrowUpIcon fontSize='large' />
              </span>
            )
          ) : isDetailsExpanded ? (
            <span className='card__summary-icon' title='Hide Project Details'>
              <ArrowRightIcon fontSize='large' />
            </span>
          ) : (
            <span className='card__summary-icon' title='Show Project Details'>
              <ArrowLeftIcon fontSize='large' />
            </span>
          )}
        </summary>

        <div className='card__content'>
          {/* title */}
          <div className='card__title'>
            <h3 className='heading-3' id={createSlug(title)}>
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

          {/* desription */}
          <div className='card__description'>{description}</div>

          {/* features */}
          <div className='card__features'>{features}</div>

          {/* tags */}
          <Paper className='card__tags' paperSpacing='sm' title='Tags' aria-label='Tags'>
            {tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </Paper>

          {/* action links */}
          {(liveDemo || sourceCode) && (
            <Paper
              className='card__action-links'
              paperSpacing='sm'
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
          {footnote && <small className='small card__footnote'>{footnote}</small>}
        </div>
      </details>
    </article>
  );
}
