"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import CountUp from "@/components/motion/CountUp";
import { EASE } from "@/components/motion/Reveal";
import { futureImages, futureAlt } from "@/data/futureImages";

// The hero is above the fold, so it plays on mount rather than on scroll.
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function NeoHero() {
  return (
    <section className="neo-hero" id="home">
      <div className="neo-container">
        <motion.div
          className="neo-hero__grid"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="neo-hero__copy">
            <motion.span className="neo-hero__index" variants={item}>
              01
            </motion.span>
            <motion.p
              className="neo-eyebrow neo-eyebrow--ink"
              variants={item}
            >
              Deep Tech · Africa
            </motion.p>

            <h1 className="neo-hero__title">
              <motion.span variants={item}>Engineering</motion.span>
              <motion.span variants={item}>Africa&apos;s Future</motion.span>
              <motion.svg
                className="neo-hero__swoosh"
                viewBox="0 0 240 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <motion.path
                  d="M4 74C36 30 94 4 148 12c34 5 52 26 44 44-7 16-33 22-49 12-13-8-11-24 4-30 24-9 66-2 89 18"
                  stroke="#0a0a0a"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.7, duration: 1.4, ease: EASE }}
                />
              </motion.svg>
            </h1>

            <motion.div className="neo-hero__actions" variants={item}>
              <Link href="/contact" className="neo-btn neo-btn--solid">
                Get Started
              </Link>
              <Link href="/investors" className="neo-btn neo-btn--ghost-ink">
                Investors
              </Link>
            </motion.div>
          </div>

          <div className="neo-hero__spacer" aria-hidden="true"></div>
        </motion.div>

        <motion.div
          className="neo-hero__foot"
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.5 }}
        >
          <motion.div className="neo-hero__trust" variants={item}>
            <p className="neo-label">Backed by</p>
            <div className="neo-hero__trust-row">
              <div className="neo-hero__avatars">
                <span>P</span>
                <span>&amp;</span>
                <span>P</span>
              </div>
              <b>Plug and Play</b>
            </div>
          </motion.div>

          <motion.div className="neo-hero__note" variants={item}>
            <div className="neo-hero__note-badge">Inv</div>
            <p>
              We build the intelligent software and connected infrastructure
              that powers the continent&apos;s next generation of growth.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="neo-hero__stat"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.7, ease: EASE }}
      >
        <b>
          <CountUp value="02" />
        </b>
        <span>Ventures live</span>
      </motion.div>

      <motion.div
        className="neo-hero__visual"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <Image
          src={futureImages.hero}
          width={1200}
          height={1400}
          priority
          alt={futureAlt.hero}
        />
      </motion.div>

      <motion.div
        className="neo-hero__wedge"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
      ></motion.div>
    </section>
  );
}
