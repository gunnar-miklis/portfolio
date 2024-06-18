import '@/styles/card.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import ButtonWithIcon from './ButtonWithIcon';
import Chip from './Chip';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  technologies: string[];
  liveDemo: string;
  sourceCode: string;
  imageSources: string[];
  children: ReactNode;
  footnote?: string;
}

export default function Card({
  title,
  children: content,
  technologies,
  liveDemo,
  sourceCode,
  imageSources,
  footnote,
}: CardProps) {
  return (
    <div className='paper'>
      <div className='card-container'>
        <div className='card-image'>
          {imageSources.map((source, i) => (
            <img key={i} src={source} />
          ))}
        </div>
        <div className='card-content paper-spacing-lg gap-md'>
          <h3>{title}</h3>

          <div className='card-content-inner'>{content}</div>

          <div className='paper paper-spacing' style={{ flexFlow: 'row wrap' }}>
            {technologies.map((tech, i) => (
              <Chip key={i}>{tech}</Chip>
            ))}
          </div>

          <div className='paper paper-spacing' style={{ flexFlow: 'row wrap' }}>
            {liveDemo !== 'unpublished' && (
              <ButtonWithIcon icon={<LaunchRoundedIcon />} title='Live Demo' goTo={liveDemo} />
            )}
            {sourceCode !== 'unpublished' && (
              <ButtonWithIcon icon={<GitHubIcon />} title='View Source' goTo={sourceCode} />
            )}
          </div>
          {footnote && <p className='annotation'>{footnote}</p>}
        </div>
      </div>
    </div>
  );
}
