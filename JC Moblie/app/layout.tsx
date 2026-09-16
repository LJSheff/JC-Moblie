import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JC Mobile Mechanic | Rotherham",
  description: "Mobile mechanic services in Rotherham and the surrounding area.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
