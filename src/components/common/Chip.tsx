import type { HTMLAttributes } from 'react';
import styles from '@styles/common/chip.module.css';

type Props = HTMLAttributes<HTMLSpanElement>;

export default function Chip({ children, className, ...props }: Props) {
  return (
    <span className={`${styles.chip} ${className}`} {...props}>
      <small className='small'>{children}</small>
    </span>
  );
}
