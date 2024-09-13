import type { ReactElement } from 'react';

type LinkWithIconProps = {
  icon: ReactElement;
  title: string;
  href: string;
};

export default function LinkWithIcon({ icon, title, href }: LinkWithIconProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      title={`View ${title} (external website opens in new tab)`}
      aria-label={`View ${title} (external website opens in new tab)`}
      className='button'
      style={{
        display: 'inline-flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.6rem',
      }}
    >
      {icon}
      {title}
    </a>
  );
}
