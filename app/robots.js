import { site } from "@/data/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /error is a styled fallback page, not content anyone should land on
        // from search, and /api is machine only.
        disallow: ["/api/", "/error"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
