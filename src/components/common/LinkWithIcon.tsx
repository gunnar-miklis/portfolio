import type { AnchorHTMLAttributes, ReactElement } from 'react';

type LinkWithIconProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon: ReactElement;
  title: string;
  href: string;
};

export default function LinkWithIcon({ icon, title, href }: LinkWithIconProps) {
  return (
    <a
      className='button'
      href={href}
      target='_blank'
      rel='noreferrer'
      title={`View ${title} (external website opens in new tab)`}
      aria-label={`View ${title} (external website opens in new tab)`}
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
