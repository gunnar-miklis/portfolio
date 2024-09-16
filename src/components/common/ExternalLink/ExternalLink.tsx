import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  title: string;
  children?: ReactNode;
};

export default function ExternalLink({ href, title, children, ...props }: ExternalLinkProps) {
  return (
    <a
      className='link'
      href={href}
      target='_blank'
      rel='noreferrer'
      title={`Visit ${title} (external website opens in new tab)`}
      aria-label={`Visit ${title} (external website opens in new tab)`}
      {...props}
    >
      {children || title}
    </a>
  );
}
