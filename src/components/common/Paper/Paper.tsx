import type { HTMLAttributes } from 'react';

import styles from '@components/common/Paper/paper.module.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  paperSpacing?: 'sm' | 'md' | 'lg';
};

export default function Paper({ children, className, paperSpacing, ...props }: Props) {
  const spacing = `paper--spacing-${paperSpacing}`;
  return (
    <div className={`${styles.paper} ${styles[spacing]} ${className}`} {...props}>
      {children}
    </div>
  );
}
