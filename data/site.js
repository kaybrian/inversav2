// Single source of truth for the Inversa site.
// Edit here. Every section on every page reads from this file.

export const site = {
  name: "Inversa, Inc",
  shortName: "Inversa",
  tagline: "Engineering Africa's Future",
  email: "support@inversa-inc.xyz",
  phone: "+250 791 703 946",
  phoneHref: "tel:+250791703946",
  address: ["1111B S Governors Ave STE 39997", "Dover, DE 19904, USA"],
  postalAddress: {
    street: "1111B S Governors Ave STE 39997",
    city: "Dover",
    region: "DE",
    postalCode: "19904",
    country: "US",
  },
  calendly: "https://calendly.com/kayonbrian/15min",
  website: "https://www.inversa-inc.xyz/",
  // Canonical origin, no trailing slash. Every canonical, sitemap entry and
  // Open Graph URL is built from this, so change it in one place only.
  url: "https://www.inversa-inc.xyz",
  locale: "en_US",
  // Replace with the real Inversa brand film when it exists.
  videoId: "",
};

export const seo = {
  defaultTitle: "Inversa, Inc | Deep Tech Infrastructure for Africa",
  titleTemplate: "%s | Inversa, Inc",
  defaultDescription:
    "Inversa builds the settlement, identity and data infrastructure Africa is missing. Deep tech engineered on the continent, held to a global standard.",
  keywords: [
    "African deep tech",
    "fintech infrastructure Africa",
    "cross border payments Africa",
    "multi currency wallet",
    "InversePay",
    "Harambee crowdfunding",
    "settlement infrastructure",
    "African technology company",
    "Inversa Inc",
  ],
};

/**
 * Builds a complete metadata object for a page.
 *
 * Two things this exists to prevent:
 * 1. app/page.jsx sits in the same route segment as the root layout, so the
 *    "%s | Inversa, Inc" template does not apply to it. Its title has to carry
 *    the brand itself.
 * 2. Declaring an `openGraph` block on a page replaces the inherited one,
 *    including the generated image, so the image is set explicitly every time.
 */
export function pageMetadata({ title, description, path, brandInTitle = false }) {
  const fullTitle = brandInTitle ? title : `${title} | ${site.name}`;
  const image = { url: "/opengraph-image", width: 1200, height: 630 };

  return {
    title: brandInTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url: path,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "What We Build", href: "/#services" },
  { label: "Ventures", href: "/#ventures" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    icon: "fas fa-exchange-alt",
    title: "Financial Infrastructure",
    text: "Multi currency wallets, cross border rails and settlement that bypass traditional banking silos.",
    href: "/#ventures",
  },
  {
    icon: "fas fa-microchip",
    title: "Applied AI and Data",
    text: "Models and data pipelines tuned to African markets: risk, identity, fraud and decisioning.",
    href: "/#ventures",
  },
  {
    icon: "fas fa-layer-group",
    title: "Platform Engineering",
    text: "The cloud, API and developer platforms our ventures and our partners are built on.",
    href: "/#ventures",
  },
];

export const ventures = [
  {
    key: "inversepay",
    tab: "InversePay",
    title: "Borderless payments for a global Africa",
    text: "Our flagship digital wallet and cross border platform. InversePay bypasses traditional banking silos to offer instant, multi currency transactions at a fraction of the cost.",
    image: "/assets/img/products/inverse.png",
    imageAlt:
      "The InversePay website showing a phone with a multi currency wallet screen",
    href: "https://www.inversepay.app/",
    metaLeft: "Live",
    metaRight: "Multi currency wallet",
  },
  {
    key: "harambee",
    tab: "Harambee",
    title: "Powering community led growth",
    text: "A next generation donation based crowdfunding platform. Harambee digitises the spirit of pulling together to fund education, healthcare and innovation.",
    image: "/assets/img/products/cover.png",
    imageAlt:
      "The Harambee homepage showing community fundraising cards on a green background",
    href: "/#ventures",
    metaLeft: "Live",
    metaRight: "Community finance",
  },
  {
    key: "infrastructure",
    tab: "Infrastructure",
    title: "The rails underneath it all",
    text: "Shared identity, compliance and settlement infrastructure that every Inversa venture runs on, and that partners can build against.",
    image: "/assets/future/franck-v-CaJSlLmdWb0-unsplash.jpg",
    imageAlt: "The illuminated dome of a data centre seen from below at night",
    href: "/investors",
    metaLeft: "In build",
    metaRight: "Platform",
  },
];

export const nextBillion = [
  {
    num: "1.4B",
    text: "People across the continent, and the fastest growing consumer market on earth.",
    label: "A continent scale market",
  },
  {
    num: "60%",
    text: "Of Africa's population is under 25, the youngest and most mobile native workforce anywhere.",
    label: "Built by young engineers",
  },
  {
    num: "Mobile",
    text: "First. Most people here met the internet on a phone, so that is where we start designing.",
    label: "Mobile first by default",
  },
];

/* ---------------------------------------------------------- investors -- */

export const investorThesis = [
  {
    num: "01",
    title: "We chose the hardest market on purpose",
    text: "Fragmented regulation, fifty currencies, thin credit data, unreliable power and patchy connectivity. Most companies route around these constraints. We build for them, because whatever survives here works anywhere.",
  },
  {
    num: "02",
    title: "Infrastructure, not applications",
    text: "Apps are downstream of rails. We are building the settlement, identity and data layer the continent is missing, so that every venture on top of it starts a decade ahead.",
  },
  {
    num: "03",
    title: "Owned, not licensed",
    text: "We write the core ourselves. Ledgers, compliance engines, routing and reconciliation are built in house rather than rented, because the hard part is precisely what everyone else outsources.",
  },
  {
    num: "04",
    title: "Engineered in Africa, held to a global bar",
    text: "Our team is African and our standard is not regional. We ship systems that stand next to anything coming out of London, Singapore or San Francisco, and we do it in far harder conditions.",
  },
];

export const investorStack = [
  {
    layer: "Layer 04",
    title: "Ventures",
    text: "InversePay and Harambee today, more tomorrow. Consumer and business products that prove the rails under real load.",
  },
  {
    layer: "Layer 03",
    title: "Developer platform",
    text: "APIs, SDKs and sandboxes so partners and third parties can build on the same primitives our own teams use.",
  },
  {
    layer: "Layer 02",
    title: "Identity and compliance",
    text: "KYC, sanctions screening, fraud signals and audit trails designed for jurisdictions that do not share a rulebook.",
  },
  {
    layer: "Layer 01",
    title: "Settlement and ledger",
    text: "The multi currency core. Balances, routing, reconciliation and treasury written from first principles rather than assembled from vendors.",
  },
];

export const backers = [
  {
    name: "Plug and Play",
    role: "Investor and accelerator partner",
    text: "One of the most active early stage technology investors in the world, backing founders across fintech and deep tech in more than fifty locations.",
    href: "https://www.plugandplaytechcenter.com/",
    logo: "/assets/img/investors/pnp-logo.svg",
  },
];

export const investorProof = [
  {
    label: "Ventures live",
    value: "02",
    text: "InversePay and Harambee are in market, not in a deck.",
  },
  {
    label: "Core owned",
    value: "100%",
    text: "Ledger, compliance and routing are written and run by our own team.",
  },
  {
    label: "Operating base",
    value: "US / RW",
    text: "Incorporated in Delaware, engineered from the continent we serve.",
  },
];

export const investorFaq = [
  {
    question: "What exactly are you building?",
    answer:
      "A vertically integrated technology stack for African markets. At the bottom sits a multi currency ledger and settlement engine. Above it, identity and compliance. Above that, a developer platform. On top, our own ventures, which act as the proving ground for everything below.",
  },
  {
    question: "Why is this a venture scale opportunity?",
    answer:
      "Because the rails do not exist yet. Whoever builds the settlement and identity layer for a continent of 1.4 billion people does not build a product, they build a toll road. That position compounds for decades.",
  },
  {
    question: "Why should this team win?",
    answer:
      "We are operating inside the constraints rather than observing them from outside. Our engineers have shipped payment and identity systems in exactly the conditions that break imported solutions, and we hold the work to a global engineering standard.",
  },
  {
    question: "How do I get the full picture?",
    answer:
      "Send us a note through the form on this page or book time directly. We will share the deck, walk you through the architecture and open the data room to serious counterparties.",
  },
];

export const investorSubjects = [
  "Investment enquiry",
  "Request the deck",
  "Data room access",
  "Strategic partnership",
  "Something else",
];

export const contactSubjects = [
  "General enquiry",
  "Partnership",
  "Press and media",
  "Careers",
  "Product support",
];

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "What We Build", href: "/#services" },
  { label: "Ventures", href: "/#ventures" },
];

export const exploreLinks = [
  { label: "InversePay", href: "https://www.inversepay.app/" },
  { label: "Investors", href: "/investors" },
  { label: "Careers", href: "https://www.inversepay.app/careers" },
  { label: "Contact", href: "/contact" },
];

// `placeholder: true` means the href is a generic homepage, not a real
// Inversa profile. Placeholders are kept out of the Organization schema,
// because sameAs pointing at twitter.com tells Google the wrong thing.
// Replace the href and drop the flag as each account goes live.
export const socials = [
  {
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    placeholder: true,
  },
  {
    icon: "fab fa-twitter",
    label: "X",
    href: "https://twitter.com/",
    placeholder: true,
  },
  {
    icon: "fab fa-instagram",
    label: "Instagram",
    href: "https://instagram.com/",
    placeholder: true,
  },
  {
    icon: "fab fa-github",
    label: "GitHub",
    href: "https://github.com/",
    placeholder: true,
  },
];
