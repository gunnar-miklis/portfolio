import { ReactNode } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import ButtonWithIcon from './ButtonWithIcon';
import Chip from './Chip';
import WindowTopBar from './WindowTopBar';
import '@/styles/card.css';

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
    <section className='window card-container'>
      <WindowTopBar title={title} />

      <div className='card'>
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
    </section>
  );
}
