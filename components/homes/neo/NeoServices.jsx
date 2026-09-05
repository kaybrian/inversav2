"use client";

import { useRef } from "react";
import Link from "next/link";
import Slider from "react-slick";
import { motion } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import { services } from "@/data/site";
import { futureImages } from "@/data/futureImages";

const backdrops = [
  futureImages.service1,
  futureImages.service2,
  futureImages.service3,
];

const settings = {
  dots: false,
  arrows: false,
  // Not infinite: with three slides it only clones the cards into the DOM,
  // duplicating every heading in the served HTML for no benefit.
  infinite: false,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1199, settings: { slidesToShow: 2 } },
    { breakpoint: 767, settings: { slidesToShow: 1 } },
  ],
};

export default function NeoServices() {
  const slider = useRef(null);

  return (
    <section className="neo-section" id="services">
      <div className="neo-container">
        <Reveal className="neo-head">
          <h2 className="neo-title">What we build</h2>
          <div className="neo-arrows">
            <motion.button
              type="button"
              aria-label="Previous"
              onClick={() => slider.current?.slickPrev()}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <i className="fas fa-arrow-left"></i>
            </motion.button>
            <motion.button
              type="button"
              aria-label="Next"
              onClick={() => slider.current?.slickNext()}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <i className="fas fa-arrow-right"></i>
            </motion.button>
          </div>
        </Reveal>

        <Reveal className="neo-slider" delay={0.1} y={40} amount={0.1}>
          <Slider ref={slider} {...settings}>
            {services.map((service, i) => (
              <div className="neo-slide" key={service.title}>
                <motion.article
                  className="neo-card"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(20,20,20,.96) 0%, rgba(20,20,20,.99) 60%), url(${
                      backdrops[i % backdrops.length]
                    })`,
                  }}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <motion.span
                    className="neo-card__icon"
                    whileHover={{ rotate: 8, scale: 1.08 }}
                  >
                    <i className={service.icon}></i>
                  </motion.span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <Link scroll={true} href={service.href} className="neo-link">
                    Learn More
                  </Link>
                </motion.article>
              </div>
            ))}
          </Slider>
        </Reveal>
      </div>
    </section>
  );
}
