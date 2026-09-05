"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { EASE } from "./Reveal";

/**
 * Counts a stat up when it scrolls into view.
 * Handles values like "02", "1.4B", "60%" and leaves anything without a
 * number in it ("Mobile", "US / RW") exactly as written.
 *
 * The initial state is the real value, not zero, so the server HTML and the
 * no-JavaScript fallback both show the correct figure. It only drops to zero
 * once the client has confirmed the element is still off screen.
 */
export default function CountUp({ value, duration = 1.7, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const parsed = useMemo(() => {
    const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/s);
    if (!match) return null;
    const [, prefix, digits, suffix] = match;
    const [whole, fraction = ""] = digits.split(".");
    return {
      prefix,
      suffix,
      target: parseFloat(digits),
      decimals: fraction.length,
      width: whole.length,
    };
  }, [value]);

  useEffect(() => {
    if (!parsed || reduce) {
      setDisplay(value);
      return;
    }

    const format = (n) => {
      const fixed = n.toFixed(parsed.decimals);
      const [whole, fraction] = fixed.split(".");
      const padded = whole.padStart(parsed.width, "0");
      return `${parsed.prefix}${padded}${fraction ? `.${fraction}` : ""}${
        parsed.suffix
      }`;
    };

    if (!inView) {
      setDisplay(format(0));
      // If the intersection observer never reports back, which happens in
      // background tabs and some embedded webviews, fall back to the real
      // figure rather than leaving a zero on screen.
      const fallback = setTimeout(() => setDisplay(value), 3000);
      return () => clearTimeout(fallback);
    }

    const controls = animate(0, parsed.target, {
      duration,
      ease: EASE,
      onUpdate: (latest) => setDisplay(format(latest)),
      onComplete: () => setDisplay(value),
    });
    return () => controls.stop();
  }, [inView, parsed, reduce, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
