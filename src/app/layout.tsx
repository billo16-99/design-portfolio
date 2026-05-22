import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headings",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "AI Design Academy | Cinematic AI Poster & Design Services",
  description: "Premium AI-generated poster designs, digital guides, prompts, and software. Cinematic quality posters for brands, artists, and creators. Order via WhatsApp.",
  keywords: ["AI posters", "cinematic design", "AI design services", "digital products", "AI prompts", "poster design"],
  openGraph: {
    title: "AI Design Academy",
    description: "Premium AI-generated poster designs and digital products. Cinematic quality delivered fast.",
    url: "https://design-portfolio-iota-seven.vercel.app",
    siteName: "AI Design Academy",
    type: "website",
  },
  verification: { google: "google2f12b8aab776ee12" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <BackgroundBlobs />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
