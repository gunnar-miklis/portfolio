import { useEffect, useState } from 'react';

import '@components/gallery/PositionIndicator/position-indicator.css';

type Props = {
  scrollPosition: number;
  targetElement: string;
  parentElement: string;
};

export default function GalleryPositionIndicator({
  scrollPosition,
  targetElement,
  parentElement,
}: Props) {
  const [position, setPosition] = useState<number>(0);
  const [max, setMax] = useState<number>(0);

  // calculate the scroll position for the target relative to the parent width
  useEffect(() => {
    const parent = document.querySelector(parentElement);
    const target = document.querySelector(targetElement);

    if (parent instanceof HTMLDivElement && target instanceof HTMLDivElement) {
      const positionRelativeToTarget = scrollPosition / (target.scrollWidth - target.offsetWidth);
      const positionRelativeToParent = parent.clientWidth * positionRelativeToTarget;
      setPosition(positionRelativeToParent);
    }
  }, [scrollPosition, targetElement, parentElement]);

  // set the maximum width based on parentElement
  useEffect(() => {
    const parent = document.querySelector(parentElement);

    if (parent instanceof HTMLDivElement) {
      setMax(parent.clientWidth);
    }
  }, [scrollPosition, parentElement]);

  return <progress className='position-indicator' max={max} value={position} />;
}
