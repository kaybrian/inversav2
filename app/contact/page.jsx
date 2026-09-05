import Image from "next/image";
import NeoHeader from "@/components/headers/NeoHeader";
import NeoFooter from "@/components/footers/NeoFooter";
import NeoContactForm from "@/components/forms/NeoContactForm";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import JsonLd from "@/components/seo/JsonLd";
import { contactPageSchema, breadcrumbSchema } from "@/data/schema";
import { site, contactSubjects, socials, pageMetadata } from "@/data/site";
import { futureImages } from "@/data/futureImages";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Talk to the team building Africa's technology infrastructure. Partnerships, press, careers and product support, answered by a real person.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPageSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <NeoHeader theme="dark" />
      <main className="neo-main">
        <section className="neo-phero neo-phero--short">
          <Image
            className="neo-phero__bg"
            src={futureImages.cta}
            width={1800}
            height={1000}
            priority
            alt=""
            aria-hidden="true"
          />
          <div className="neo-container neo-phero__inner">
            <p className="neo-eyebrow">Contact</p>
            <h1 className="neo-title">Let&apos;s build</h1>
            <p className="neo-text neo-phero__lead">
              Partnerships, press, careers or a product question. Everything
              here lands in a real inbox and a real person answers it.
            </p>
          </div>
        </section>

        <section className="neo-section">
          <div className="neo-container">
            {/* The design shows no heading here, but the outline needs one so
                the page does not jump from h1 straight to h3. */}
            <h2 className="neo-sr-only">How to reach us</h2>
            <Stagger className="neo-contactcards" gap={0.09}>
              <StaggerItem as="div" className="neo-contactcard" y={26} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                <span className="neo-card__icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <h3>Email us</h3>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </StaggerItem>

              <StaggerItem as="div" className="neo-contactcard" y={26} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                <span className="neo-card__icon">
                  <i className="fas fa-phone"></i>
                </span>
                <h3>Call us</h3>
                <a href={site.phoneHref}>{site.phone}</a>
              </StaggerItem>

              <StaggerItem as="div" className="neo-contactcard" y={26} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                <span className="neo-card__icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <h3>Head office</h3>
                {site.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </StaggerItem>

              <StaggerItem as="div" className="neo-contactcard" y={26} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                <span className="neo-card__icon">
                  <i className="fas fa-calendar"></i>
                </span>
                <h3>Book time</h3>
                <a href={site.calendly} target="_blank" rel="noreferrer">
                  Fifteen minutes with the team
                </a>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        <section className="neo-section" id="form">
          <div className="neo-container">
            <div className="neo-formgrid">
              <div>
                <Reveal as="p" className="neo-eyebrow">
                  Send a message
                </Reveal>
                <Reveal as="h2" className="neo-title" delay={0.05}>
                  Tell us what
                  <br />
                  you are building
                </Reveal>
                <Reveal
                  as="p"
                  className="neo-text"
                  delay={0.1}
                  style={{ margin: "24px 0 0", maxWidth: 430 }}
                >
                  If you are raising, hiring, partnering or just curious about
                  the architecture, write to us. We read everything.
                </Reveal>

                <Stagger className="neo-socials" gap={0.07} style={{ marginTop: 34 }}>
                  {socials.map((social) => (
                    <StaggerItem
                      as="a"
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      y={14}
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.94 }}
                    >
                      <i className={social.icon}></i>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>

              <NeoContactForm subjects={contactSubjects} />
            </div>
          </div>
        </section>
      </main>
      <NeoFooter />
    </>
  );
}
