"use client";

import { useEffect, useRef, useCallback } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const cur = useRef({ x: -100, y: -100 });
  const hoveredRef = useRef(false);
  const rafRef = useRef<number>(0);
  const enabledRef = useRef(false);

  const updateCursor = useCallback(() => {
    const el = cursorRef.current;
    if (!el || !enabledRef.current) return;

    cur.current.x += (pos.current.x - cur.current.x) * 0.14;
    cur.current.y += (pos.current.y - cur.current.y) * 0.14;

    const s = hoveredRef.current ? 30 : 8;
    const bg = hoveredRef.current ? "transparent" : "var(--accent)";
    const border = hoveredRef.current ? "1px solid var(--accent)" : "none";

    el.style.left = `${cur.current.x - s / 2}px`;
    el.style.top = `${cur.current.y - s / 2}px`;
    el.style.width = `${s}px`;
    el.style.height = `${s}px`;
    el.style.background = bg;
    el.style.border = border;

    rafRef.current = requestAnimationFrame(updateCursor);
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = "ontouchstart" in window;
    const isDesktop = window.innerWidth >= 1024;

    if (prefersReducedMotion || isTouch || !isDesktop) return;

    enabledRef.current = true;

    function onMove(e: MouseEvent) {
      pos.current = { x: e.clientX, y: e.clientY };
    }

    function onOver(e: MouseEvent) {
      const target = e.target as Element;
      const isHoverable = !!target.closest("a,button,[role=button],input,textarea,select");
      if (hoveredRef.current !== isHoverable) {
        hoveredRef.current = isHoverable;
      }
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    rafRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateCursor]);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        left: -100,
        top: -100,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--accent)",
        border: "none",
        transition: "width 0.18s ease, height 0.18s ease, background 0.18s ease, border 0.18s ease",
      }}
    />
  );
}
