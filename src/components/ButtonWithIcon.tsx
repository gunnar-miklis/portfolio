import { ReactElement } from 'react';

interface ButtonWithIconProps {
  icon: ReactElement;
  title: string;
  goTo: string;
}

export default function ButtonWithIcon({ icon, title, goTo }: ButtonWithIconProps) {
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
