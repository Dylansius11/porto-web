import type { Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const clipReveal: Variants = {
  hidden: { y: "108%" },
  show: {
    y: "0%",
    transition: { duration: 0.9, ease: EASE },
  },
};

export const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const heroClip: Variants = {
  hidden: { y: "108%" },
  show: {
    y: "0%",
    transition: { duration: 0.95, ease: EASE },
  },
};

export function staggerContainer(stagger = 0.08): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };
}
