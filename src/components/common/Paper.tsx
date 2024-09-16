import type { HTMLAttributes } from 'react';
import styles from '@styles/common/paper.module.css';

type Props = HTMLAttributes<HTMLDivElement> & {
  paperSpacing?: 'sm' | 'md' | 'lg';
};

export default function Paper({ children, className, paperSpacing }: Props) {
  const spacing = `paper--spacing-${paperSpacing}`;
  return <div className={`${styles.paper} ${styles[spacing]} ${className}`}>{children}</div>;
}
