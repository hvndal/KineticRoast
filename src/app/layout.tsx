import type { Metadata } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EMBER | Specialty Coffee Roasters — Vancouver, BC",
  description: "A specialty coffee roasting house based in Vancouver, British Columbia, dedicated to the intersection of thermal science and the human spirit.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CoffeeShop",
  "name": "Ember Coffee Roasters",
  "description": "Specialty micro-lot coffee roasting house based in Vancouver, British Columbia.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "addressCountry": "CA"
  },
  "creator": {
    "@type": "Organization",
    "name": "MANDER",
    "url": "https://www.mander.tech"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${bebasNeue.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative selection:bg-primary selection:text-black">
        <NoiseOverlay />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
