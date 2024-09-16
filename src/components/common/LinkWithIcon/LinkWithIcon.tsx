import type { AnchorHTMLAttributes, ReactElement } from 'react';

import styles from '@components/common/LinkWithIcon/LinkWithIcon.module.css';

type LinkWithIconProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'title'> & {
  href: string;
  title: string;
  icon: ReactElement;
};

export default function LinkWithIcon({ icon, title, href, ...props }: LinkWithIconProps) {
  return (
    <a
      className={`button ${styles['link-with-icon']}`}
      href={href}
      target='_blank'
      rel='noreferrer'
      title={`View ${title} (external website opens in new tab)`}
      aria-label={`View ${title} (external website opens in new tab)`}
      {...props}
    >
      {icon}
      {title}
    </a>
  );
}
