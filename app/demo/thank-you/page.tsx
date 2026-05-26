import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Thank You — SecPrompt",
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-[#F6F8FC] px-4 py-24">
        <div className="flex w-full max-w-lg flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle className="h-10 w-10 text-emerald-600" strokeWidth={1.5} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-dark-900 md:text-4xl">
            Thank you — we&apos;ll be in touch.
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-gray-600">
            Your demo request has been received. A member of our team will
            contact you within 1 business day to arrange a call.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-dark-900 shadow-sm transition-colors hover:bg-gray-50"
            >
              Back to home
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-colors hover:bg-primary-700"
            >
              View pricing
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
