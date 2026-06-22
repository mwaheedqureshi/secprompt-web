import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SecPrompt - Evidence-Based Supplier Assessment",
  description:
    "Verify supplier claims against real evidence. Produce explainable, traceable supplier assessments with audit-ready reporting.",
  keywords: [
    "supplier assurance",
    "supplier security",
    "third-party risk",
    "evidence validation",
    "ISO 27001",
    "NIST CSF 2.0",
    "NIST 800-53",
    "DORA",
    "GDPR",
  ],
  openGraph: {
    title: "SecPrompt - Evidence-Based Supplier Assessment",
    description:
      "Verify supplier claims against real evidence. Produce explainable, traceable supplier assessments with audit-ready reporting.",
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
