import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: instant cyan dot + trailing ring (lerp).
 * Desktop only (pointer: fine); ring expands over interactive elements.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    let x = -100;
    let y = -100;
    let rx = -100;
    let ry = -100;
    let hovering = false;
    let raf = 0;

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      const target = event.target as HTMLElement | null;
      const isHover = Boolean(
        target?.closest("a, button, [role='button'], input, textarea, select, label, summary"),
      );
      if (isHover !== hovering) {
        hovering = isHover;
        ringRef.current?.classList.toggle("cursor-ring-hover", hovering);
      }
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      const ring = ringRef.current;
      if (ring) {
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}