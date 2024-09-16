import { useEffect, useState } from 'react';

import '@styles/gallery/position-indicator-bar.css';

type PositionIndicatorProps = {
  scrollPosition: number;
  targetElement: string;
  parentElement: string;
};

export default function PositionIndicatorBar({
  scrollPosition,
  targetElement,
  parentElement,
}: PositionIndicatorProps) {
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

  useEffect(() => {
    const parent = document.querySelector(parentElement);

    if (parent instanceof HTMLDivElement) setMax(parent.clientWidth);
  }, [scrollPosition, parentElement]);

  return <progress className='positionIndicator' max={max} value={position} />;
}
