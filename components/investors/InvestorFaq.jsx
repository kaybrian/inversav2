"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal, { EASE } from "@/components/motion/Reveal";
import { investorFaq } from "@/data/site";

export default function InvestorFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="neo-section" id="faq">
      <div className="neo-container">
        <div className="neo-faqgrid">
          <div>
            <Reveal as="p" className="neo-eyebrow">
              Questions
            </Reveal>
            <Reveal as="h2" className="neo-title neo-title--sm" delay={0.05}>
              What investors
              <br />
              usually ask first
            </Reveal>
          </div>

          <Reveal className="neo-faq" delay={0.1} y={34}>
            {investorFaq.map((item, index) => {
              const isOpen = open === index;
              return (
                <div
                  className={`neo-faq__item ${isOpen ? "is-open" : ""}`}
                  key={item.question}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    {item.question}
                    <motion.i
                      className="fas fa-plus"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: EASE }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="neo-faq__answer">{item.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
