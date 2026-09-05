"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import CountUp from "@/components/motion/CountUp";
import { nextBillion } from "@/data/site";
import { futureImages } from "@/data/futureImages";

export default function NeoNextBillion() {
  return (
    <section className="neo-section neo-next">
      <Image
        className="neo-next__curve"
        src={futureImages.nextBillion}
        width={1800}
        height={900}
        alt=""
        aria-hidden="true"
      />

      <div className="neo-container">
        <div className="neo-next__grid">
          <div>
            <Reveal as="h2" className="neo-title">
              Built for the
              <br />
              next billion
            </Reveal>
            <motion.div
              className="neo-next__rule"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <Reveal
              as="p"
              className="neo-text"
              delay={0.1}
              style={{ maxWidth: 420 }}
            >
              Africa is not a single market and it is not a late adopter. It is
              young, mobile native and moving faster than the infrastructure
              built to serve it. That gap is the work.
            </Reveal>
          </div>

          <Stagger className="neo-stack" gap={0.12}>
            {nextBillion.map((item) => (
              <StaggerItem
                as="div"
                className="neo-stat-card"
                key={item.num}
                y={32}
              >
                <div className="neo-stat-card__body">
                  <p>{item.text}</p>
                  <h4>{item.label}</h4>
                </div>
                <span className="neo-stat-card__num">
                  <CountUp value={item.num} />
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
