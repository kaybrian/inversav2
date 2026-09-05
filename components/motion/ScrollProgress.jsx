"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Hairline at the top of the window showing how far down the page you are. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return <motion.div className="neo-progress" style={{ scaleX }} />;
}
