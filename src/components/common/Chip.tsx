import type { HTMLAttributes } from 'react';
import styles from '@styles/common/chip.module.css';

type Props = HTMLAttributes<HTMLSpanElement>;

export default function Chip({ children, className }: Props) {
  return (
    <span className={`${styles.chip} ${className}`}>
      <small className='small'>{children}</small>
    </span>
  );
}
