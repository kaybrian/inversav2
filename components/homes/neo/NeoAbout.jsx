"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "@/components/common/ModalVideo";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { futureImages, futureAlt } from "@/data/futureImages";
import { site } from "@/data/site";

export default function NeoAbout() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="neo-section" id="about">
      <div className="neo-container">
        <div className="neo-about__grid">
          <Reveal className="neo-about__media" y={40} amount={0.15}>
            <Parallax distance={7}>
              <Image
                src={futureImages.about}
                width={900}
                height={1200}
                alt={futureAlt.about}
              />
            </Parallax>
          </Reveal>

          <div>
            <Reveal as="p" className="neo-eyebrow">
              About Us
            </Reveal>
            <Reveal as="h2" className="neo-title" delay={0.05}>
              Beyond code.
              <br />
              We build ecosystems.
            </Reveal>

            <Stagger className="neo-about__tags" gap={0.08} delay={0.1}>
              <StaggerItem as="span" className="neo-tag" y={14}>
                Deep Tech
              </StaggerItem>
              <StaggerItem as="span" className="neo-tag" y={14}>
                Fintech
              </StaggerItem>
              <StaggerItem as="span" className="neo-tag" y={14}>
                Africa
              </StaggerItem>
            </Stagger>

            <Reveal as="p" className="neo-text" delay={0.1}>
              At Inversa we don&apos;t just build apps; we solve systemic
              friction. As the parent company behind a growing suite of fintech
              and social impact software, we bridge the gap between complex
              infrastructure and human centric design.
            </Reveal>
            <Reveal
              as="p"
              className="neo-text"
              delay={0.15}
              style={{ marginTop: 18 }}
            >
              From cross border liquidity to community led financing, our
              mission is to create the tools that enable billions to send,
              spend, save and grow. All of it built by a team of exceptional
              engineers across the continent.
            </Reveal>

            <Reveal className="neo-about__actions" delay={0.2}>
              <Link
                scroll={true}
                href="/#services"
                className="neo-btn neo-btn--light"
              >
                Learn More
              </Link>
              {site.videoId ? (
                <button
                  type="button"
                  className="neo-play"
                  onClick={() => setVideoOpen(true)}
                >
                  <i className="fas fa-play"></i>
                  Watch a Video
                </button>
              ) : (
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-play"
                >
                  <i className="fas fa-arrow-right"></i>
                  Talk to the team
                </a>
              )}
            </Reveal>
          </div>
        </div>
      </div>

      {site.videoId ? (
        <ModalVideo
          isOpen={videoOpen}
          setIsOpen={setVideoOpen}
          videoId={site.videoId}
        />
      ) : null}
    </section>
  );
}
