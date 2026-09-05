"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { EASE } from "@/components/motion/Reveal";
import { site } from "@/data/site";
import { futureImages } from "@/data/futureImages";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function InvestorHero() {
  return (
    <section className="neo-phero">
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
        style={{ position: "absolute", inset: 0 }}
      >
        <Image
          className="neo-phero__bg"
          src={futureImages.about}
          width={1800}
          height={1200}
          priority
          alt=""
          aria-hidden="true"
        />
      </motion.div>

      <motion.div
        className="neo-container neo-phero__inner"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="neo-eyebrow" variants={item}>
          Investors
        </motion.p>
        <h1 className="neo-title">
          <motion.span style={{ display: "block" }} variants={item}>
            We are doing the
          </motion.span>
          <motion.span style={{ display: "block" }} variants={item}>
            hardest thing in tech
          </motion.span>
        </h1>
        <motion.p className="neo-text neo-phero__lead" variants={item}>
          Inversa is rebuilding the technology infrastructure Africa should have
          had a generation ago. Not a wrapper on someone else&apos;s rails. The
          rails themselves, engineered from first principles, in the toughest
          operating conditions on the planet.
        </motion.p>
        <motion.div className="neo-phero__actions" variants={item}>
          <Link href="#invest" className="neo-btn neo-btn--light">
            Request the deck
          </Link>
          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className="neo-btn neo-btn--ghost"
          >
            Book a call
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
