import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import ButtonWithIcon from './ButtonWithIcon';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseFullIcon from '@mui/icons-material/CloseFullscreen';
import OpenFullIcon from '@mui/icons-material/OpenInFull';
import Chip from './Chip';
import '@/styles/card.css';
import { ReactNode, useState } from 'react';

const initalImageHeight = 400;
const initalContentHeight = 1000;

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
  const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);
  const [imageHeight, setImageHeight] = useState<number>(initalImageHeight);
  const [contentHeight, setContentHeight] = useState<number>(initalContentHeight);

  function handleExpand() {
    // FIXME: right now this only works on phone + tablet
    if (!isImageExpanded) {
      const animationImage = setInterval(() => {
        setImageHeight((prevHeight) => {
          if (prevHeight < initalContentHeight) {
            return prevHeight + 10;
          } else {
            clearInterval(animationImage);
            return prevHeight;
          }
        });
      }, 9);

      const animationContent = setInterval(() => {
        setContentHeight((prevHeight) => {
          if (prevHeight > 110) {
            return prevHeight - 10;
          } else {
            clearInterval(animationContent);
            return prevHeight;
          }
        });
      }, 5);

      setIsImageExpanded(true);
    } else {
      const animationImage = setInterval(() => {
        setImageHeight((prevHeight) => {
          if (prevHeight > initalImageHeight) {
            return prevHeight - 10;
          } else {
            clearInterval(animationImage);
            return prevHeight;
          }
        });
      }, 9);

      const animationContent = setInterval(() => {
        setContentHeight((prevHeight) => {
          if (prevHeight < initalContentHeight) {
            return prevHeight + 10;
          } else {
            clearInterval(animationContent);
            return prevHeight;
          }
        });
      }, 5);

      setIsImageExpanded(false);
    }
  }

  return (
    <article className={`card ${className}`}>
      {/* TODO: modal, image preview */}
      <div className='card-image' style={{ maxHeight: imageHeight }} onClick={() => handleExpand()}>
        {!isImageExpanded ? (
          <span id='expand-more'>
            <OpenFullIcon />
            {/* <ExpandMoreIcon fontSize='large' /> */}
          </span>
        ) : (
          <span id='expand-less'>
            <CloseFullIcon />
            {/* <ExpandLessIcon fontSize='large' /> */}
          </span>
        )}

        {/* images */}
        {imageSources.map((source, i) => (
          <img key={i} src={source} />
        ))}
      </div>

      <div className='card-content' style={{ maxHeight: contentHeight }}>
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
