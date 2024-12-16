import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('up');
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    let timeout: number;

    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const direction = currentOffset > prevOffset ? 'down' : 'up';

      if (
        direction !== scrollDirection &&
        Math.abs(currentOffset - prevOffset) > 10
      ) {
        setScrollDirection(direction);
        // Reset any existing timeout
        if (timeout) window.clearTimeout(timeout);

        // Set a new timeout to show the nav after no scroll
        timeout = window.setTimeout(() => {
          const isScrollable =
            document.documentElement.scrollHeight > window.innerHeight;
          if (!isScrollable) {
            setScrollDirection('up');
          }
        }, 150); // Debounced check
      }

      setPrevOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeout) window.clearTimeout(timeout);
    };
  }, [scrollDirection, prevOffset]);

  return scrollDirection;
};
