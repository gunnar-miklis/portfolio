import React, { ReactNode, useEffect, useState } from 'react';
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
    expanded: number;
  };
  height: {
    initial: number;
    expanded: number;
  };
}
interface CardContent {
  width: {
    initial: number;
    expanded: number;
  };
  height: {
    initial: number;
    expanded: number;
  };
  padding: {
    initial: string | 0;
    expanded: string | 0;
  };
}
function isPercentage(value: number): number {
  if (typeof value !== 'number' || value < 0 || value > 100)
    throw new Error('Expected a number between 0 and 100.');
  else return value;
}
const values: Values = {
  row: {
    image: {
      width: {
        initial: isPercentage(35),
        expanded: isPercentage(100),
      },
      height: {
        initial: 1000,
        expanded: 1000,
      },
    },
    content: {
      width: {
        initial: isPercentage(65),
        expanded: isPercentage(3),
      },
      height: {
        initial: 1000,
        expanded: 1000,
      },
      padding: {
        initial: 'var(--space-lg)',
        expanded: 0,
      },
    },
  },
  col: {
    image: {
      width: {
        initial: isPercentage(100),
        expanded: isPercentage(100),
      },
      height: {
        initial: 300,
        expanded: 1500,
      },
    },
    content: {
      width: {
        initial: isPercentage(100),
        expanded: isPercentage(100),
      },
      height: {
        initial: 1500,
        expanded: 0,
      },
      padding: {
        initial: 'var(--space-lg)',
        expanded: 0,
      },
    },
  },
};

interface StateType {
  width: number;
  height: number;
  padding?: string | 0;
}
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
  const { windowWith } = useWindowDimensions();
  const [orientation, setOrientation] = useState<'col' | 'row'>('col');

  const [image, setImage] = useState<StateType>({
    width: values['col'].image.width.initial,
    height: values['col'].image.height.initial,
  });
  const [content, setContent] = useState<StateType>({
    width: values['col'].content.width.initial,
    height: values['col'].content.height.initial,
    padding: values['col'].content.padding.initial,
  });
  const [isImageExpanded, setIsImageExpanded] = useState<boolean>(false);

  // NOTE: reset values to intial when window resizes and the orientation changes
  useEffect(() => {
    if (windowWith > 992) {
      setOrientation('row');
      setIsImageExpanded(false);
      setImage({
        width: values['row'].image.width.initial,
        height: values['row'].image.height.initial,
      });
      setContent({
        width: values['row'].content.width.initial,
        height: values['row'].content.height.initial,
        padding: values['row'].content.padding.initial,
      });
    } else {
      setOrientation('col');
      setIsImageExpanded(false);
      setImage({
        width: values['col'].image.width.initial,
        height: values['col'].image.height.initial,
      });
      setContent({
        width: values['col'].content.width.initial,
        height: values['col'].content.height.initial,
        padding: values['col'].content.padding.initial,
      });
    }
  }, [windowWith, orientation]);

  // NOTE: handel expand or shrink
  function handleExpand(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    event.preventDefault();

    if (!isImageExpanded) {
      if (orientation === 'col') {
        animate('col', 'expand', 'image', setImage, 'height', 'expanded', 10, 9);
        animate('col', 'shrink', 'content', setContent, 'height', 'expanded', 10, 4);
      } else {
        animate('row', 'expand', 'image', setImage, 'width', 'expanded', 1, 5);
        animate('row', 'shrink', 'content', setContent, 'width', 'expanded', 1, 5);
      }
      setIsImageExpanded(true);
    } else {
      if (orientation === 'col') {
        animate('col', 'shrink', 'image', setImage, 'height', 'initial', 10, 9);
        animate('col', 'expand', 'content', setContent, 'height', 'initial', 10, 6);
      } else {
        animate('row', 'shrink', 'image', setImage, 'width', 'initial', 1, 5);
        animate('row', 'expand', 'content', setContent, 'width', 'initial', 1, 5);
      }
      setIsImageExpanded(false);
    }
  }
  // COMMENT: abstracted function to avoid repeating shrink and expand, each 4 times to a total of 8.
  function animate(
    orientation: 'col' | 'row',
    action: 'shrink' | 'expand' ,
    target: 'image' | 'content',
    setState: React.Dispatch<React.SetStateAction<StateType>>,
    dimension: 'width' | 'height',
    value: 'initial' | 'expanded',
    amount: number,
    interval: number,
  ): void {
    // set an interval to decrease/increase the state (width or height) step-by-step
    const animation = setInterval(() => {
      // eacht interval step: setState (setImage() or setContent())
      setState((prevState) => {
        // comparing state (width/height) with min/max value ( inital or expanded )
        // for shrinking: state "greater than" min, for expanding: state "lesser than" max.
        // eg. shrink: ( width > values.row.image.width.inital )
        if (
          (action === 'shrink' &&
            prevState[dimension] > values[orientation][target][dimension][value]) ||
          (action === 'expand' &&
            prevState[dimension] < values[orientation][target][dimension][value])
        ) {
          // decrease/increse the state by the given amount
          if (action === 'shrink') prevState[dimension] -= amount;
          else prevState[dimension] += amount;
          // return the state object with the new/updated/decreased value
          return { ...prevState, [dimension]: prevState[dimension] };
        } else {
          // if the min/max is reached, stop the interval and return state object (+ padding)
          clearInterval(animation);
          if (target === 'image') {
            return { ...prevState, [dimension]: prevState[dimension] };
          } else {
            return {
              ...prevState,
              [dimension]: prevState[dimension],
              padding: values[orientation][target].padding[value],
            };
          }
        }
      });
    }, interval);
  }

  return (
    <article className={`card ${className}`}>
      <figure className='card-image' style={{ width: `${image.width}%`, maxHeight: image.height }}>
        <nav>
          {!isImageExpanded ? (
            <a
              className='link'
              id='expand'
              href='expand'
              onClick={(event) => handleExpand(event)}
            >
              <OpenFullIcon />
            </a>
          ) : (
            <a
              className='link'
              id='shrink'
              href='shrink'
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
                id='shrink-up'
                href='shrink-up'
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
              id='shrink-left'
              href='shrink-left'
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
