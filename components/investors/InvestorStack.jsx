"use client";

import Image from "next/image";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import CountUp from "@/components/motion/CountUp";
import { investorStack, investorProof } from "@/data/site";
import { futureImages, futureAlt } from "@/data/futureImages";

export default function InvestorStack() {
  return (
    <section className="neo-section" id="stack">
      <div className="neo-container">
        <div className="neo-stackgrid">
          <Reveal className="neo-stackgrid__media" y={40} amount={0.15}>
            <Parallax distance={7}>
              <Image
                src={futureImages.infrastructure}
                width={1200}
                height={1500}
                alt={futureAlt.infrastructure}
              />
            </Parallax>
          </Reveal>

          <div>
            <Reveal as="p" className="neo-eyebrow">
              The stack
            </Reveal>
            <Reveal as="h2" className="neo-title neo-title--sm" delay={0.05}>
              Four layers, built downward
            </Reveal>
            <Reveal
              as="p"
              className="neo-text"
              delay={0.1}
              style={{ margin: "20px 0 34px" }}
            >
              Most companies start at the top and rent everything beneath them.
              We started at the bottom, because the bottom is where the moat is.
            </Reveal>

            <Stagger className="neo-layers" gap={0.1}>
              {investorStack.map((item) => (
                <StaggerItem
                  as="div"
                  className="neo-layer"
                  key={item.layer}
                  y={22}
                >
                  <span className="neo-layer__tag">{item.layer}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <Stagger className="neo-proof" gap={0.12}>
          {investorProof.map((item) => (
            <StaggerItem
              as="div"
              className="neo-proof__item"
              key={item.label}
              y={30}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <b>
                <CountUp value={item.value} />
              </b>
              <h4>{item.label}</h4>
              <p>{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
