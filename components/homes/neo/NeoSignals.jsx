"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Reveal from "@/components/motion/Reveal";
import { signalImages } from "@/data/futureImages";

export default function NeoSignals() {
  return (
    <section className="neo-section neo-section--tight neo-signals">
      <div className="neo-container">
        <Reveal className="neo-head">
          <div>
            <p className="neo-eyebrow">Signals</p>
            <h2 className="neo-title neo-title--sm">
              The future we&apos;re building toward
            </h2>
          </div>
        </Reveal>
      </div>

      <Marquee speed={26} gradient={false} pauseOnHover>
        {signalImages.map((item) => (
          <figure className="neo-signal" key={item.src}>
            <Image src={item.src} width={640} height={800} alt={item.alt} />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
