import { useState, useEffect } from 'react';

interface WindowDimensions {
  windowWidth: number;
  windowHeight: number;
}

function getWindowDimensions(): WindowDimensions {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  return { windowWidth, windowHeight };
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
