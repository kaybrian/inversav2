"use client";

import Marquee from "react-fast-marquee";

const items = [
  "Cross-border payments",
  "Applied AI",
  "Community finance",
  "Cloud infrastructure",
  "Identity & KYC",
  "Developer platforms",
];

export default function NeoStrip() {
  return (
    <div className="neo-strip">
      <Marquee speed={38} gradient={false} pauseOnHover>
        {items.map((item, i) => (
          <span className="neo-strip__item" key={i}>
            <i className="fas fa-circle-notch"></i>
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
