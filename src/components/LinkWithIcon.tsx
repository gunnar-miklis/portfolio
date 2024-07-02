import { ReactElement } from 'react';

export interface LinkWithIconProps {
  icon: ReactElement;
  title: string;
  goTo: string;
}

export default function LinkWithIcon({ icon, title, goTo }: LinkWithIconProps) {
  return (
    <a
      href={goTo}
      target='_blank'
      className='button'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.6rem',
      }}
      rel='noreferrer'
    >
      {icon}
      {title}
    </a>
  );
}
