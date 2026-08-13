import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://antoniosifov.com",
      lastModified: new Date("2026-08-13"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
