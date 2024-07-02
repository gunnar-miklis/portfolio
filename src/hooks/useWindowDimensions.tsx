import { useState, useEffect } from 'react';

interface WindowDimensions {
  windowWith: number;
  windowHeight: number;
}

function getWindowDimensions(): WindowDimensions {
  const { innerWidth: windowWith, innerHeight: windowHeight } = window;
  return { windowWith, windowHeight };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
