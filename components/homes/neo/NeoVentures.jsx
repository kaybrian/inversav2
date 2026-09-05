"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Reveal, { EASE } from "@/components/motion/Reveal";
import { ventures } from "@/data/site";

export default function NeoVentures() {
  const [active, setActive] = useState(0);
  const venture = ventures[active];

  return (
    <section className="neo-section" id="ventures">
      <div className="neo-container">
        <Reveal as="h2" className="neo-title" style={{ marginBottom: 64 }}>
          Limitless possibilities
          <br />
          with Inversa
        </Reveal>

        <div className="neo-products__grid">
          <Reveal className="neo-tabs" delay={0.05}>
            {ventures.map((item, i) => (
              <button
                type="button"
                key={item.key}
                className={i === active ? "is-active" : ""}
                onClick={() => setActive(i)}
              >
                {item.tab}
                {i === active ? (
                  <motion.span
                    className="neo-tabs__marker"
                    layoutId="ventureTab"
                    transition={{ type: "spring", stiffness: 340, damping: 30 }}
                  />
                ) : null}
              </button>
            ))}
          </Reveal>

          <Reveal className="neo-products__media" delay={0.1} y={36}>
            <AnimatePresence mode="wait">
              <motion.div
                key={venture.key}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.5, ease: EASE }}
                style={{ width: "100%", height: "100%" }}
              >
                <Image
                  src={venture.image}
                  width={1100}
                  height={760}
                  alt={venture.imageAlt}
                />
              </motion.div>
            </AnimatePresence>
          </Reveal>

          <div className="neo-products__body">
            <AnimatePresence mode="wait">
              <motion.div
                key={venture.key}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <h3>{venture.title}</h3>
                <p className="neo-text">{venture.text}</p>
                <div style={{ marginTop: 26 }}>
                  <Link
                    scroll={true}
                    href={venture.href}
                    className="neo-link"
                    target={
                      venture.href.startsWith("http") ? "_blank" : undefined
                    }
                  >
                    Learn More
                  </Link>
                </div>
                <div className="neo-products__meta">
                  <span>{venture.metaLeft}</span>
                  <span>{venture.metaRight}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
