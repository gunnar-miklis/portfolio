import { useRef } from 'react';

/**
 * Throttle a function call to only be allowed once every *X* milliseconds.
 * This is useful for functions that are called in rapid succession, such as
 * when a user is scrolling.
 * 
 * @description
 * - Restricts how often a function can be called.
 * - Executes a function regularly, ensures consistent execution over time 
 * (e.g., during scrolling or resizing).
 *
 * @param callback - the initial function to be throttled.
 * @param limit - the time in milliseconds between function calls. Defaults to 100ms.
 * @returns the throttled function.
 *
 * @example
 * // state: value to be throttled
 * const [scrollPosition, setScrollPosition] = useState(0);
 *
 * // handler: controlls throtteling
 * const handleScroll = useThrottle((scroll: number) => {
 *   setScrollPosition(scroll);
 * }, 20);
 *
 * // render: passes values for throttling
 * <div id='parent' onScroll={(e) => handleScroll(e.currentTarget.scrollLeft)} />
 *
 * // render: uses throttled values
 * <div id='child' scrollPosition={scrollPosition} />
 */
export default function useThrottle<Callback extends (...args: never[]) => void>(
  callback: Callback,
  limit = 100,
) {
  const isThrottling = useRef(false);

  function handleThrottleLogic(...args: Parameters<Callback>) {
    if (!isThrottling.current) {
      callback(...args);
      isThrottling.current = true;
      setTimeout(() => (isThrottling.current = false), limit);
    }
  }

  return handleThrottleLogic;
}
