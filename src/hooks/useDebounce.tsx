import { useEffect, useState } from 'react';

/**
 * A debouncing hook that only returns the given value after the 
 * given delay has passed.

 * @description 
 * - Penalizes the execution.
 * - Delays the execution until a period of inactivity occurs 
 * (e.g., after a user stops typing).
 *
 * @param {Type} value - the initial value to be debounced.
 * @param {number} delay - the delay in milliseconds.
 * @returns {Type} the debounced value.
 * @example
 * const debouncedSearchInput = useDebounce(searchInput, 500);
 */
export default function useDebounce<Type>(value: Type, delay: number): Type {
  const [debouncedValue, setDebouncedValue] = useState<Type>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
