"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { EASE } from "@/components/motion/Reveal";
import { site, navLinks as neoNav } from "@/data/site";

// theme "light" sits over the homepage's light hero and flips to dark on
// scroll. theme "dark" is for inner pages, which have no light hero at all.
export default function NeoHeader({ theme = "light" }) {
  const [isStuck, setIsStuck] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = theme === "dark";

  return (
    <>
      <motion.header
        className={`neo-header ${onDark ? "neo-header--dark" : ""} ${
          isStuck ? "is-stuck" : ""
        }`}
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="neo-container neo-header__inner">
          <Link href="/" className="neo-header__logo">
            <Image
              width={110}
              height={30}
              src="/assets/img/primary.png"
              alt={site.name}
            />
          </Link>

          <ul className="neo-header__nav">
            {neoNav.map((item) => (
              <li key={item.label}>
                <Link scroll={true} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="neo-header__cta">
            <motion.a
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              className="neo-btn neo-btn--solid"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              Let&apos;s talk
            </motion.a>
          </div>

          <motion.button
            type="button"
            aria-label="Open menu"
            className="neo-header__burger"
            onClick={() => setDrawerOpen(true)}
            whileTap={{ scale: 0.9 }}
          >
            <span></span>
            <span></span>
          </motion.button>
        </div>
      </motion.header>

      <div
        className={`neo-drawer ${drawerOpen ? "is-open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setDrawerOpen(false);
        }}
      >
        <div className="neo-drawer__panel">
          <button
            type="button"
            aria-label="Close menu"
            className="neo-drawer__close"
            onClick={() => setDrawerOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>

          <ul className="neo-drawer__nav">
            {neoNav.map((item) => (
              <li key={item.label}>
                <Link
                  scroll={true}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="neo-drawer__meta">
            {site.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="neo-drawer__meta">
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>

          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className="neo-btn neo-btn--light"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </>
  );
}
