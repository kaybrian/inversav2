import NeoHeader from "@/components/headers/NeoHeader";
import NeoFooter from "@/components/footers/NeoFooter";
import NeoHero from "@/components/homes/neo/NeoHero";
import NeoStrip from "@/components/homes/neo/NeoStrip";
import NeoAbout from "@/components/homes/neo/NeoAbout";
import NeoServices from "@/components/homes/neo/NeoServices";
import NeoVentures from "@/components/homes/neo/NeoVentures";
import NeoNextBillion from "@/components/homes/neo/NeoNextBillion";
import NeoSignals from "@/components/homes/neo/NeoSignals";
import NeoCta from "@/components/homes/neo/NeoCta";
import JsonLd from "@/components/seo/JsonLd";
import { organisationSchema, websiteSchema } from "@/data/schema";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  // The root page shares a segment with the root layout, so the title template
  // does not reach it. The brand is written into the title here.
  brandInTitle: true,
  title: "Inversa, Inc | Deep Tech Infrastructure for Africa",
  description:
    "Inversa builds the settlement, identity and data rails Africa is missing. Cross border payments, applied AI and platform engineering, built on the continent.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organisationSchema, websiteSchema]} />
      <NeoHeader />
      <main className="neo-main">
        <NeoHero />
        <NeoStrip />
        <NeoAbout />
        <NeoServices />
        <NeoVentures />
        <NeoNextBillion />
        <NeoSignals />
        <NeoCta />
      </main>
      <NeoFooter />
    </>
  );
}
