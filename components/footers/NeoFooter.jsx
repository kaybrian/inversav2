import Image from "next/image";
import Link from "next/link";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { site, quickLinks, exploreLinks, socials } from "@/data/site";

export default function NeoFooter() {
  return (
    <footer className="neo-footer">
      <div className="neo-container">
        <Reveal as="div" y={18}>
        <Link href="/" className="neo-footer__logo">
          <Image
            width={110}
            height={30}
            src="/assets/img/primary.png"
            alt={site.name}
          />
        </Link>
        </Reveal>

        <Stagger className="neo-footer__grid" gap={0.08}>
          <StaggerItem as="div" className="neo-footer__col" y={22}>
            <p className="neo-footer__label">Email</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>

            <p className="neo-footer__label" style={{ marginTop: 34 }}>Address</p>
            {site.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </StaggerItem>

          <StaggerItem as="div" className="neo-footer__col" y={22}>
            <p className="neo-footer__label">Phone Number</p>
            <a href={site.phoneHref}>{site.phone}</a>
          </StaggerItem>

          <StaggerItem as="div" className="neo-footer__col" y={22}>
            <p className="neo-footer__label">Quick Links</p>
            {quickLinks.map((link) => (
              <Link scroll={true} href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </StaggerItem>

          <StaggerItem as="div" className="neo-footer__col" y={22}>
            <p className="neo-footer__label">Explore</p>
            {exploreLinks.map((link) => (
              <Link
                scroll={true}
                href={link.href}
                key={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </StaggerItem>

          <StaggerItem as="div" className="neo-footer__col neo-footer__about" y={22}>
            <p className="neo-footer__label">Deep tech, built in Africa</p>
            <p>
              Inversa, Inc. is a technology company building the intelligent
              software and connected infrastructure that powers the
              continent&apos;s next generation of growth.
            </p>
            <div className="neo-socials">
              {socials.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </StaggerItem>
        </Stagger>
      </div>

      <div className="neo-container">
        <div className="neo-footer__bottom">
          <span>
            Copyright © {new Date().getFullYear()}{" "}
            <a href={site.website}>{site.name}</a>
          </span>
          <span>Dover, Delaware · Kigali, Rwanda</span>
        </div>
      </div>
    </footer>
  );
}
