import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.jcmobile.co.uk/sitemap.xml",
    host: "https://www.jcmobile.co.uk",
  };
}
