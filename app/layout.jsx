import "../public/assets/css/vendor.css";
import "../public/assets/sass/style.scss";
import "../public/assets/sass/neo.scss";
import "rc-slider/assets/index.css";
import { Outfit, Poppins } from "next/font/google";
import Providers from "./providers";
import { site, seo } from "@/data/site";

// Wide, light geometric grotesque used for every display headline.
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--title-font",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--body-font",
  display: "swap",
});

export const metadata = {
  // Everything relative in this file and in every page resolves against this.
  metadataBase: new URL(site.url),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.defaultDescription,
  keywords: seo.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/img/favicons/favicon.png", type: "image/png" },
    ],
    apple: "/assets/img/favicons/favicon.png",
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`body  ${poppins.variable} ${outfit.variable}`}>
        {/* Motion renders its `initial` state into the server HTML, which means
            a page with JavaScript disabled would arrive completely blank.
            This puts every hidden element back on screen in that case. */}
        <noscript>
          <style>{`
            [style*="opacity:0;"], [style$="opacity:0"] { opacity: 1 !important; }
            [style*="transform:translate"], [style*="transform:scale"] { transform: none !important; }
          `}</style>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
