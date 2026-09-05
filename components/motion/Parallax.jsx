"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/**
 * Drifts its children against the scroll direction. The inner layer is made
 * taller than the frame so the drift never exposes an empty edge.
 * Keep `distance` small, anything past about 12% reads as a broken layout.
 *
 * Reduced motion pins the drift to zero rather than swapping the element out,
 * so the rendered tree stays identical either way.
 */
export default function Parallax({
  children,
  className = "",
  distance = 8,
  ...rest
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const travel = reduce ? 0 : distance;
  const y = useTransform(scrollYProgress, [0, 1], [`${travel}%`, `-${travel}%`]);

  return (
    <div ref={ref} className={`neo-parallax ${className}`} {...rest}>
      <motion.div className="neo-parallax__inner" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
