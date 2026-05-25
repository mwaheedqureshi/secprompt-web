import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SecPrompt — AI-Powered Third-Party Risk Assessment",
  description:
    "Verify supplier security claims against real evidence. Detect gaps, contradictions and risks before they become third-party incidents.",
  keywords: [
    "TPRM",
    "supplier security",
    "third-party risk",
    "AI assessment",
    "ISO 27001",
    "SOC2",
    "DORA",
  ],
  openGraph: {
    title: "SecPrompt — AI-Powered Third-Party Risk Assessment",
    description:
      "Verify supplier security claims against real evidence. Detect gaps, contradictions and risks before they become third-party incidents.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white text-[#0F0F0F]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
