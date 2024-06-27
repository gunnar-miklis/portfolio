import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import ButtonWithIcon from './ButtonWithIcon';
import Chip from './Chip';
import '@/styles/card.css';
import { ReactNode } from 'react';

export interface CardProps {
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
  return (
    <article className={`window card ${className}`}>
      {/* TODO: modal, image preview */}
      <div className='card-image'>
        {/* images */}
        {imageSources.map((source, i) => (
          <img key={i} src={source} />
        ))}
      </div>

      <div className='card-content paper-spacing-md gap-md'>
        {/* header */}
        <div className='card-inner'>
          <div className='card-header'>
            <h3>{title}</h3>
            <p className='annotation'>
              {category}
              {date && ', ' + date}
            </p>
          </div>

          {/* description */}
          <div className='card-description'>{children}</div>
        </div>

        {/* technologies */}
        <div className='paper paper-spacing-sm' style={{ flexFlow: 'row wrap' }}>
          {technologies.map((tech, i) => (
            <Chip key={i}>{tech}</Chip>
          ))}
        </div>

        {/* action buttons */}
        <div className='paper paper-spacing-sm' style={{ flexFlow: 'row wrap' }}>
          {liveDemo && (
            <ButtonWithIcon icon={<LaunchRoundedIcon />} title='Live Demo' goTo={liveDemo} />
          )}
          {sourceCode && (
            <ButtonWithIcon icon={<GitHubIcon />} title='View Source' goTo={sourceCode} />
          )}
        </div>

        {/* footnote */}
        {footnote && <p className='annotation'>{footnote}</p>}
      </div>
    </article>
  );
}
