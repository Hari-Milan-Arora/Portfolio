"use client";

import {
  motion,
  type HTMLMotionProps,
  useReducedMotion,
} from "framer-motion";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function FadeIn({
  children,
  delay = 0,
  y = 20,
  ...props
}: FadeInProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : y }}
      transition={{ delay, duration: 0.55, ease: [0.21, 1, 0.31, 1] }}
      viewport={{ once: true, amount: 0.25 }}
      whileInView={{ opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

