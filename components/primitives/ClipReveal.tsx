"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ElementType, type ReactNode, type CSSProperties } from "react";
import { EASE } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface ClipRevealProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
}

export function ClipReveal({
  children,
  delay = 0,
  as: Tag = "span",
  style,
  className,
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const reduced = useReducedMotion();

  const MotionTag = motion(Tag as "span");

  return (
    <div ref={ref} style={{ overflow: "hidden", display: "block", ...style }} className={className}>
      <MotionTag
        initial={reduced ? { y: "0%" } : { y: "108%" }}
        animate={reduced ? { y: "0%" } : inView ? { y: "0%" } : { y: "108%" }}
        transition={{ duration: 0.9, ease: EASE, delay }}
        style={{ display: "block" }}
      >
        {children}
      </MotionTag>
    </div>
  );
}
