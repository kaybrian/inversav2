"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { futureImages, futureAlt } from "@/data/futureImages";

export default function NeoCta() {
  return (
    <section className="neo-section" id="contact">
      <div className="neo-container">
        <Reveal className="neo-cta__panel" y={44} amount={0.15}>
          <Parallax distance={9}>
            <Image
              src={futureImages.cta}
              width={1800}
              height={900}
              alt={futureAlt.cta}
            />
          </Parallax>
          <div className="neo-cta__inner">
            <h2 className="neo-title">
              Build the
              <br />
              future with us
            </h2>

            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              <Link
                href="/contact"
                className="neo-cta__play"
                aria-label="Contact the team"
              >
                <i className="fas fa-arrow-right"></i>
              </Link>
            </motion.div>

            <div>
              <p
                className="neo-text"
                style={{ color: "rgba(255,255,255,.72)" }}
              >
                We are always looking for world class engineers, designers and
                strategic partners to join the Inversa ecosystem. Investors,
                start on the investor page.
              </p>
              <div className="neo-cta__buttons">
                <Link href="/contact" className="neo-btn neo-btn--light">
                  Contact us
                </Link>
                <Link href="/investors" className="neo-btn neo-btn--ghost">
                  Investor relations
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
