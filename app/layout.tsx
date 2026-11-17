import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.jcmobile.co.uk";
const description = "Mobile mechanic covering Rotherham, Sheffield, Doncaster, Barnsley, Worksop, Retford and North Chesterfield. Diagnostics, servicing, repairs, timing belts and chains at home or work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mobile Mechanic Rotherham | JC Mobile Mechanic",
    template: "%s | JC Mobile Mechanic",
  },
  description,
  applicationName: "JC Mobile Mechanic",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "JC Mobile Mechanic",
    title: "Mobile Mechanic in Rotherham | JC Mobile Mechanic",
    description,
    images: [{ url: "/jc-mobile-van.png", width: 2048, height: 945, alt: "Josh beside the JC Mobile Mechanic van" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Mechanic in Rotherham | JC Mobile Mechanic",
    description,
    images: ["/jc-mobile-van.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body className="antialiased">{children}</body></html>;
}
