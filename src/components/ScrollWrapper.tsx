import React, { useRef } from 'react';

export function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const startX = useRef(0);
  const startY = useRef(0);
  const startScrollX = useRef(0);
  const startScrollY = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    // Only Ctrl + right click
    if (e.button !== 2 || !e.ctrlKey) return;

    e.preventDefault();

    startX.current = e.clientX;
    startY.current = e.clientY;
    startScrollX.current = window.scrollX;
    startScrollY.current = window.scrollY;

    // Set grab cursor
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';

    // Capture the pointer events on the window
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  };

  const onPointerMove = (e: PointerEvent) => {
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    window.scrollTo({
      left: startScrollX.current - dx,
      top: startScrollY.current - dy,
    });
  };

  const onPointerUp = () => {
    // Remove event listeners
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);

    // Restore cursor and text selection
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  };

  return (
    <div
      onPointerDown={onPointerDown}
      onContextMenu={(e) => e.preventDefault()}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </div>
  );
}
