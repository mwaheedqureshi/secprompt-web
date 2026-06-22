import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import DemoForm from "./DemoForm";

export const metadata: Metadata = {
  title: "Book a Demo \u2014 SecPrompt",
};

const trustBullets = [
  "No commitment required",
  "Live assessment in 30 minutes",
  "Tailored to your frameworks",
  "See real gap detection in action",
];

const stats = [
  ["2 min", "Average assessment runtime"],
  ["60%+", "Average coverage improvement"],
  ["5", "Supported frameworks"],
];

export default function DemoPage() {
  return (
    <main className="bg-[#F6F8FC]">
      <section className="px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
              Book a demo
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-dark-900 md:text-6xl">
              See SecPrompt in Action
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Book a 30-minute demo. We&apos;ll run a live assessment of one of your suppliers using your real documents.
            </p>

            <div id="contact" className="mt-10 scroll-mt-28">
              <DemoForm />
            </div>
          </div>

          <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
              What to expect
            </p>
            <div className="space-y-4">
              {trustBullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 text-sm font-medium text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-gray-200 bg-[#F6F8FC] p-5">
                  <p className="text-3xl font-bold text-dark-900">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
