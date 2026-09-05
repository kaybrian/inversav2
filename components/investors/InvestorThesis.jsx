"use client";

import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { investorThesis } from "@/data/site";

export default function InvestorThesis() {
  return (
    <section className="neo-section" id="thesis">
      <div className="neo-container">
        <Reveal className="neo-head">
          <div>
            <p className="neo-eyebrow">The thesis</p>
            <h2 className="neo-title">
              Why we build
              <br />
              where others will not
            </h2>
          </div>
        </Reveal>

        <Stagger className="neo-thesis" gap={0.11}>
          {investorThesis.map((item) => (
            <StaggerItem
              as="article"
              className="neo-thesis__item"
              key={item.num}
              y={34}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <span className="neo-thesis__num">{item.num}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="neo-text">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
