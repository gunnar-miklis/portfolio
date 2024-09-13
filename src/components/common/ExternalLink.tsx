import type { ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  title: string;
  children?: ReactNode;
};

export default function ExternalLink({ href, title, children }: ExternalLinkProps) {
  return (
    <a
      className='link'
      href={href}
      target='_blank'
      rel='noreferrer'
      title={`Visit ${title} (external website opens in new tab)`}
      aria-label={`Visit ${title} (external website opens in new tab)`}
    >
      {children || title}
    </a>
  );
}
