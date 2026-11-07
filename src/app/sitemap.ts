import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { pageData2, pagesData } from "@/data/slugData";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/about-us", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/industries-we-serve", priority: 0.9 },
    { path: "/contact-us", priority: 0.8 },
    { path: "/our-work", priority: 0.8 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms-and-conditions", priority: 0.3 },
  ];

  const industryRoutes = pagesData.map((p) => ({
    path: `/industries-we-serve/${p.slug}`,
    priority: 0.8,
  }));

  const serviceRoutes = pageData2.map((p) => ({
    path: `/services/${p.slug}`,
    priority: 0.7,
  }));

  return [...staticRoutes, ...industryRoutes, ...serviceRoutes].map(
    ({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority,
    })
  );
}
