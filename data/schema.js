// schema.org structured data. Keep every claim here factual: Google treats
// mismatches between structured data and on page content as a quality signal.

import { site, socials, ventures, investorFaq } from "./site";

const url = site.url;

export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${url}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  url: `${url}/`,
  logo: `${url}/assets/img/primary.png`,
  description:
    "Inversa, Inc. builds the intelligent software and connected infrastructure that powers Africa's next generation of growth.",
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.postalAddress.street,
    addressLocality: site.postalAddress.city,
    addressRegion: site.postalAddress.region,
    postalCode: site.postalAddress.postalCode,
    addressCountry: site.postalAddress.country,
  },
  // Only real, verified profiles belong in sameAs.
  sameAs: socials
    .filter((social) => !social.placeholder)
    .map((social) => social.href),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: site.email,
      telephone: site.phone,
      availableLanguage: ["English"],
    },
  ],
  makesOffer: ventures
    .filter((venture) => venture.metaLeft === "Live")
    .map((venture) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: venture.tab,
        applicationCategory: "FinanceApplication",
        description: venture.text,
      },
    })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${url}/#website`,
  url: `${url}/`,
  name: site.name,
  publisher: { "@id": `${url}/#organization` },
  inLanguage: "en",
};

export const investorFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${url}/investors#faq`,
  mainEntity: investorFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${url}/contact#page`,
  url: `${url}/contact`,
  name: `Contact ${site.name}`,
  isPartOf: { "@id": `${url}/#website` },
  about: { "@id": `${url}/#organization` },
};

export function breadcrumbSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${url}${crumb.path}`,
    })),
  };
}
