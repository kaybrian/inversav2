import NeoHeader from "@/components/headers/NeoHeader";
import NeoFooter from "@/components/footers/NeoFooter";
import InvestorHero from "@/components/investors/InvestorHero";
import InvestorThesis from "@/components/investors/InvestorThesis";
import InvestorStack from "@/components/investors/InvestorStack";
import InvestorBackers from "@/components/investors/InvestorBackers";
import NeoSignals from "@/components/homes/neo/NeoSignals";
import InvestorFaq from "@/components/investors/InvestorFaq";
import InvestorContact from "@/components/investors/InvestorContact";
import JsonLd from "@/components/seo/JsonLd";
import { investorFaqSchema, breadcrumbSchema } from "@/data/schema";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "Investors",
  description:
    "Inversa is rebuilding the technology infrastructure Africa should have. Read the thesis, see the four layer stack, meet the backers and join the table.",
  path: "/investors",
});

export default function InvestorsPage() {
  return (
    <>
      <JsonLd
        data={[
          investorFaqSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Investors", path: "/investors" },
          ]),
        ]}
      />
      <NeoHeader theme="dark" />
      <main className="neo-main">
        <InvestorHero />
        <InvestorThesis />
        <InvestorStack />
        <InvestorBackers />
        <NeoSignals />
        <InvestorFaq />
        <InvestorContact />
      </main>
      <NeoFooter />
    </>
  );
}
