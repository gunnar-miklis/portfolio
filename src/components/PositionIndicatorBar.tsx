import '@/styles/position-indicator-bar.css';

interface PositionIndicatorProps {
  scrollPosition: number;
  targetElement: string;
  parentElement: string;
}

export default function PositionIndicatorBar({
  scrollPosition,
  targetElement,
  parentElement,
}: PositionIndicatorProps) {
  // calculate the scroll position for the target relative to the parent width
  function calcPositionIndicator(): number | undefined {
    const parent = document.querySelector(parentElement);
    const target = document.querySelector(targetElement);

    if (parent instanceof HTMLElement && target instanceof HTMLElement) {
      const positionRelativeToTarget = scrollPosition / (target.scrollWidth - target.offsetWidth);
      const positionRelativeToParent = parent.clientWidth * positionRelativeToTarget;
      return positionRelativeToParent;
    }
  }
  return <div className='positionIndicator' style={{ width: `${calcPositionIndicator()}px` }} />;
}
