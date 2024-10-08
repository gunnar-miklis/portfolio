import type { HTMLAttributes } from 'react';

import styles from '@components/common/Chip/chip.module.css';

type Props = HTMLAttributes<HTMLSpanElement>;

export default function Chip({ children, className, ...props }: Props) {
  return (
    <small className={`small ${styles.chip} ${className}`} {...props}>
      {children}
    </small>
  );
}
