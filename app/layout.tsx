import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.jcmobile.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mobile Mechanic Rotherham | JC Mobile Mechanic",
    template: "%s | JC Mobile Mechanic",
  },
  description:
    "Need a mobile mechanic in Rotherham? Contact Josh at JC Mobile Mechanic for vehicle diagnostics, servicing, repairs and pre-MOT checks at home or work.",
  applicationName: "JC Mobile Mechanic",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "JC Mobile Mechanic",
    title: "Mobile Mechanic in Rotherham | JC Mobile Mechanic",
    description: "Vehicle diagnostics, servicing and repairs at your home or workplace. Speak directly with Josh about your car.",
    images: [{ url: "/jc-mobile-van.png", width: 2048, height: 945, alt: "Josh beside the JC Mobile Mechanic van" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Mechanic in Rotherham | JC Mobile Mechanic",
    description: "Diagnostics, servicing and repairs at your home or workplace across Rotherham and surrounding areas.",
    images: ["/jc-mobile-van.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body className="antialiased">{children}</body></html>;
}
