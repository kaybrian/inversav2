import NeoContactForm from "@/components/forms/NeoContactForm";
import Reveal from "@/components/motion/Reveal";
import { site, investorSubjects } from "@/data/site";

export default function InvestorContact() {
  return (
    <section className="neo-section" id="invest">
      <div className="neo-container">
        <div className="neo-formgrid">
          <div>
            <Reveal as="p" className="neo-eyebrow">
              Invest with us
            </Reveal>
            <Reveal as="h2" className="neo-title" delay={0.05}>
              Come and build
              <br />
              the rails with us
            </Reveal>
            <Reveal
              as="p"
              className="neo-text"
              delay={0.1}
              style={{ margin: "24px 0 0", maxWidth: 440 }}
            >
              Tell us who you are and what you want to see. We will send the
              deck, walk you through the architecture and open the data room to
              serious counterparties.
            </Reveal>

            <Reveal className="neo-formgrid__meta" delay={0.15}>
              <div>
                <p className="neo-formgrid__label">Email</p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div>
                <p className="neo-formgrid__label">Direct</p>
                <a href={site.calendly} target="_blank" rel="noreferrer">
                  Book a call
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={36} amount={0.15}>
            <NeoContactForm
              kind="investor"
              subjects={investorSubjects}
              submitLabel="Send enquiry"
              messageLabel="What would you like to see?"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
