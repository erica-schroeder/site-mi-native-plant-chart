import { useState, useRef, useEffect } from 'react';

/**
 * Returns a ref to attach to a container and the current width in pixels.
 * Updates automatically if the container resizes.
 */
export function useContainerWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initialize width
    setWidth(el.getBoundingClientRect().width);

    // Observe for changes
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, width };
}