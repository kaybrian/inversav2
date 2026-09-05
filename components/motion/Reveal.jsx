"use client";

import { motion } from "motion/react";

// One easing curve for the whole site so nothing feels like it came from
// a different codebase.
export const EASE = [0.22, 1, 0.36, 1];

// Reduced motion is handled centrally by <MotionConfig reducedMotion="user">
// in the root layout, which drops the transform and keeps the fade. Do not
// branch the tree on useReducedMotion here: swapping a motion element for a
// plain one after hydration strands Motion's inline opacity:0 in the DOM and
// the content never appears.

/**
 * Fades and lifts its children into view the first time they are scrolled to.
 * Pass `as` to keep the semantic tag, e.g. <Reveal as="h2">.
 */
export default function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  y = 30,
  duration = 0.75,
  amount = 0.2,
  once = true,
  ...rest
}) {
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Container that releases its children one after another. Give it the class of
 * the real layout element (a grid, a flex row) so it does not add a wrapper.
 */
export function Stagger({
  children,
  className,
  as = "div",
  gap = 0.1,
  delay = 0,
  amount = 0.15,
  ...rest
}) {
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** A single child of <Stagger>. */
export function StaggerItem({
  children,
  className,
  as = "div",
  y = 28,
  ...rest
}) {
  const Tag = motion[as] || motion.div;

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: EASE },
        },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
