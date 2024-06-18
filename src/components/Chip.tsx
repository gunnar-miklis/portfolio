import { ReactNode } from 'react';
import '@/styles/chip.css';

export default function Chip({ children }: { children: ReactNode }) {
  return <span className='button chip annotation'>{children}</span>;
}
