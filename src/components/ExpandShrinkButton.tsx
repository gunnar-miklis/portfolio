import { ReactElement } from 'react';

interface ExpandShrinkButtonProps {
  id: string;
  onClick: () => void;
  title: string;
  ariaControls: string;
  ariaExpanded: boolean;
  icon: ReactElement;
}

export default function ExpandShrinkButton({
  id,
  onClick,
  title,
  ariaControls,
  ariaExpanded,
  icon,
}: ExpandShrinkButtonProps) {
  return (
    <button
      className='link'
      id={id}
      onClick={onClick}
      title={title}
      aria-label={title}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
    >
      {icon}
    </button>
  );
}
