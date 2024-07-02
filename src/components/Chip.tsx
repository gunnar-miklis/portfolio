import { ReactNode } from 'react';

export default function Chip({ children }: { children: ReactNode }) {
  return <span className='button chip annotation'>{children}</span>;
}
