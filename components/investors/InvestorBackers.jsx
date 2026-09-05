"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { backers } from "@/data/site";

export default function InvestorBackers() {
  return (
    <section className="neo-section" id="backers">
      <div className="neo-container">
        <Reveal className="neo-head">
          <div>
            <p className="neo-eyebrow">Who is already in</p>
            <h2 className="neo-title">Backed by</h2>
          </div>
        </Reveal>

        <Stagger className="neo-backers" gap={0.14}>
          {backers.map((backer) => (
            <StaggerItem
              as="article"
              className="neo-backer"
              key={backer.name}
              y={34}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="neo-backer__logo">
                <Image
                  className="neo-img--brand"
                  src={backer.logo}
                  width={180}
                  height={60}
                  alt={backer.name}
                />
              </div>
              <div>
                <h3>{backer.name}</h3>
                <span className="neo-backer__role">{backer.role}</span>
                <p className="neo-text">{backer.text}</p>
                <a
                  href={backer.href}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-link"
                >
                  Visit site
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </StaggerItem>
          ))}

          <StaggerItem
            as="article"
            className="neo-backer neo-backer--open"
            y={34}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <div>
              <h3>Your name here</h3>
              <span className="neo-backer__role">Open to new partners</span>
              <p className="neo-text">
                We are opening the table to investors who want exposure to
                African infrastructure at the layer that matters, and who are
                comfortable backing hard engineering over quick wins.
              </p>
              <Link href="#invest" className="neo-link">
                Start the conversation
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
