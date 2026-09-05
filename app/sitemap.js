import { site } from "@/data/site";

// Add a route here the moment it ships. A page missing from the sitemap is a
// page Google finds late, if at all.
const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/investors", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
