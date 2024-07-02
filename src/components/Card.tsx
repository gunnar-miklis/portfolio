import { ReactNode, useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import CloseFullIcon from '@mui/icons-material/CloseFullscreen';
import OpenFullIcon from '@mui/icons-material/OpenInFull';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import useWindowDimensions from '../hooks/useWindowDimensions';
import LinkWithIcon from './LinkWithIcon';
import Chip from './Chip';
import '@/styles/card.css';

// NOTE: values for the animation of .card-image and .card-content
interface Values {
  [orientation: string]: {
    image: CardImage;
    content: CardContent;
  };
}
interface CardImage {
  width: {
    initial: number;
    expand: number;
  };
  height: {
    initial: number;
    expand: number;
  };
}
interface CardContent {
  width: {
    initial: number;
    expand: number;
  };
  height: {
    initial: number;
    expand: number;
  };
  padding: {
    initial: string | 0;
    expand: string | 0;
  };
}
function isPercentage(value: number): number {
  if (typeof value !== 'number' || value < 0 || value > 100)
    throw new Error('Expexted a number between 0 and 100.');
  else return value;
}
const values: Values = {
  row: {
    image: {
      width: {
        initial: isPercentage(35),
        expand: isPercentage(100),
      },
      height: {
        initial: 1000,
        expand: 1000,
      },
    },
    content: {
      width: {
        initial: isPercentage(65),
        expand: isPercentage(3),
      },
      height: {
        initial: 1000,
        expand: 1000,
      },
      padding: {
        initial: 'var(--space-lg)',
        expand: 0,
      },
    },
  },
  col: {
    image: {
      width: {
        initial: isPercentage(100),
        expand: isPercentage(100),
      },
      height: {
        initial: 400,
        expand: 1000,
      },
    },
    content: {
      width: {
        initial: isPercentage(100),
        expand: isPercentage(100),
      },
      height: {
        initial: 1000,
        expand: 0,
      },
      padding: {
        initial: 'var(--space-lg)',
        expand: 0,
      },
    },
  },
};

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
  const { windowWith } = useWindowDimensions();
  const [orientation, setOrientation] = useState<'col' | 'row'>('col');

  const [image, setImage] = useState<{ width: number; height: number }>({
    width: values['col'].image.width.initial,
    height: values['col'].image.height.initial,
  });
  const [content, setContent] = useState<{ width: number; height: number; padding: string | 0 }>({
    width: values['col'].content.width.initial,
    height: values['col'].content.height.initial,
    padding: values['col'].content.padding.initial,
  });
  const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);

  // NOTE: reset values to intial when window resizes and the orientation changes
  useEffect(() => {
    if (windowWith > 992) {
      setOrientation('row');
      setImage({
        width: values['row'].image.width.initial,
        height: values['row'].image.height.initial,
      });
      setContent({
        width: values['row'].content.width.initial,
        height: values['row'].content.height.initial,
        padding: values['row'].content.padding.initial,
      });
      setIsImageExpanded(false);
    } else {
      setOrientation('col');
      setImage({
        width: values['col'].image.width.initial,
        height: values['col'].image.height.initial,
      });
      setContent({
        width: values['col'].content.width.initial,
        height: values['col'].content.height.initial,
        padding: values['col'].content.padding.initial,
      });
      setIsImageExpanded(false);
    }
  }, [windowWith, orientation]);

  // NOTE: animation for expanding image and shrinking content
  function expandAnimation(): void {
    if (orientation === 'col') {
      const animationImage = setInterval(() => {
        setImage(({ height }) => {
          if (height < values['col'].image.height.expand) {
            height += 10;
            return { ...image, height };
          } else {
            clearInterval(animationImage);
            return { ...image, height };
          }
        });
      }, 9);
      const animationContent = setInterval(() => {
        setContent(({ height }) => {
          if (height > values['col'].content.height.expand) {
            height -= 10;
            return { ...content, height };
          } else {
            clearInterval(animationContent);
            return { ...content, height, padding: values['col'].content.padding.expand };
          }
        });
      }, 5);
    } else if (orientation === 'row') {
      // TODO: add animation for orientation row, right now is just jumping to position without animation
      setImage({ ...image, width: values['row'].image.width.expand });
      setContent({
        ...content,
        width: values['row'].content.width.expand,
        padding: values['row'].content.padding.expand,
      });
    }
  }

  // NOTE: animation for shrinking image and expanding content
  function shrinkAnimation(): void {
    if (orientation === 'col') {
      const animationImage = setInterval(() => {
        setImage(({ height }) => {
          if (height > values['col'].image.height.initial) {
            height -= 10;
            return { ...content, height };
          } else {
            clearInterval(animationImage);
            return { ...content, height };
          }
        });
      }, 9);
      const animationContent = setInterval(() => {
        setContent(({ height }) => {
          if (height < values['col'].content.height.initial) {
            height += 10;
            return { ...content, height };
          } else {
            clearInterval(animationContent);
            return { ...content, height, padding: values['col'].content.padding.initial };
          }
        });
      }, 5);
    } else if (orientation === 'row') {
      // TODO: add animation for orientation row, right now is just jumping to position without animation
      setImage({ ...image, width: values['row'].image.width.initial });
      setContent({
        ...content,
        width: values['row'].content.width.initial,
        padding: values['row'].content.padding.initial,
      });
    }
  }

  function handleExpand(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    event.preventDefault();

    if (!isImageExpanded) {
      expandAnimation();
      setIsImageExpanded(true);
    } else {
      shrinkAnimation();
      setIsImageExpanded(false);
    }
  }

  return (
    <article className={`card ${className}`}>
      <figure className='card-image' style={{ width: `${image.width}%`, maxHeight: image.height }}>
        <nav>
          {!isImageExpanded ? (
            <a
              className='link'
              id='expand-more'
              href='expand-more'
              onClick={(event) => handleExpand(event)}
            >
              <OpenFullIcon />
            </a>
          ) : (
            <a
              className='link'
              id='expand-less'
              href='expand-less'
              onClick={(event) => handleExpand(event)}
            >
              <CloseFullIcon />
            </a>
          )}
        </nav>

        {/* images */}
        {/* TODO: idea, make this list of images scrollable */}
        {imageSources.map((source, i) => (
          <img key={i} src={source} />
        ))}
      </figure>

      <div
        className='card-content'
        style={{
          width: `${content.width}%`,
          maxHeight: content.height,
          paddingRight: orientation === 'row' ? content.padding : '',
          paddingBottom: orientation === 'col' ? content.padding : '',
        }}
      >
        <nav>
          {orientation === 'col' ? (
            !isImageExpanded ? (
              <a
                className='link'
                id='expand-down'
                href='expand-down'
                onClick={(event) => handleExpand(event)}
              >
                <ArrowDownIcon fontSize='large' />
              </a>
            ) : (
              <a
                className='link'
                id='expand-up'
                href='expand-up'
                onClick={(event) => handleExpand(event)}
              >
                <ArrowUpIcon fontSize='large' />
              </a>
            )
          ) : !isImageExpanded ? (
            <a
              className='link'
              id='expand-right'
              href='expand-right'
              onClick={(event) => handleExpand(event)}
            >
              <ArrowRightIcon fontSize='large' />
            </a>
          ) : (
            <a
              className='link'
              id='expand-left'
              href='expand-left'
              onClick={(event) => handleExpand(event)}
            >
              <ArrowLeftIcon fontSize='large' />
            </a>
          )}
        </nav>

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
        <div className='paper paper-spacing-sm' style={{ flexFlow: 'row wrap' }}>
          {technologies.map((tech, i) => (
            <Chip key={i}>{tech}</Chip>
          ))}
        </div>

        {/* action links */}
        <div className='paper paper-spacing-sm' style={{ flexFlow: 'row wrap' }}>
          {liveDemo && (
            <LinkWithIcon icon={<LaunchRoundedIcon />} title='Live Demo' goTo={liveDemo} />
          )}
          {sourceCode && (
            <LinkWithIcon icon={<GitHubIcon />} title='View Source' goTo={sourceCode} />
          )}
        </div>

        {/* footnote */}
        {footnote && <p className='annotation footnote'>{footnote}</p>}
      </div>
    </article>
  );
}
