import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://www.jcmobile.co.uk";
  return [
    { url: origin, changeFrequency: "monthly", priority: 1 },
    { url: `${origin}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
