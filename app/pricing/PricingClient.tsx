"use client";

import { CheckCircle2 } from "lucide-react";

const assessUrl = "http://localhost:3000/assess";
const demoUrl = "mailto:demo@secprompt.io";

const plans = [
  {
    name: "STARTER",
    price: "£299",
    suffix: "/month",
    features: [
      "3 users",
      "10 assessments/month",
      "5 frameworks (NIST CSF, ISO 27001, DORA, GDPR, NIST 800-53)",
      "AI gap analysis (met/partial/gap per control)",
      "3-way transparent assessment view",
      "PDF report export",
      "Email support",
    ],
  },
  {
    name: "GROWTH",
    price: "£799",
    suffix: "/month",
    features: [
      "10 users",
      "50 assessments/month",
      "All frameworks + custom baseline controls",
      "Everything in Starter, plus:",
      "Evidence library with supplier grouping",
      "Risk register with status tracking",
      "Management review workflow",
      "Re-run analysis (preserves human reviews)",
      "Human-in-the-Loop review workflow",
      "Priority support",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    suffix: " pricing",
    features: [
      "Unlimited users",
      "Unlimited assessments",
      "Everything in Growth, plus:",
      "SSO / SAML authentication",
      "Dedicated deployment (your infrastructure)",
      "SLA guarantee",
      "Dedicated customer success manager",
      "Custom framework integrations",
      "On-premise deployment option",
    ],
  },
];

const faqs = [
  {
    question: "What frameworks are supported?",
    answer: "NIST CSF 2.0, ISO 27001:2022, DORA, GDPR, NIST 800-53, and custom baseline controls.",
  },
  {
    question: "How is an assessment counted?",
    answer: "Each supplier assessment run counts as one. Re-runs of the same supplier count separately.",
  },
  {
    question: "Is my data secure?",
    answer: "Each client gets isolated infrastructure. Your data is never shared with other clients.",
  },
  {
    question: "Can I export reports?",
    answer: "Yes, PDF reports on all plans. CSV export of risk register on Growth and above.",
  },
  {
    question: "What is the 3-way assessment?",
    answer:
      "SecPrompt validates each control by cross-referencing the security requirement, the supplier's claim, and the independent evidence, showing you exactly why a control passed or failed, with document references.",
  },
];

export default function PricingClient() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">

          {/* PAGE HEADER */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-600">
              Pricing
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Plans for every supplier risk program.
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Start with a one-time walk-in assessment or choose a subscription plan that scales with your program.
            </p>
          </div>

          {/* £49 ONE-TIME ASSESSMENT CARD */}
          <div className="bg-slate-900 rounded-2xl p-8 mb-10 text-white">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">
              One-Time Assessment
            </p>
            <h3 className="text-2xl font-bold mb-1">
              Try SecPrompt on a single supplier
            </h3>
            <p className="text-slate-300 mb-6">
              No subscription. No account. Results in minutes.
            </p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold">£49</span>
              <span className="text-slate-400">per assessment</span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-emerald-400">✓</span>
                5 frameworks or Harmonized Controls
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-emerald-400">✓</span>
                Up to 5 supplier documents
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-emerald-400">✓</span>
                Full AI gap analysis — 60+ controls
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <span className="text-emerald-400">✓</span>
                Data permanently deleted after download
              </div>
            </div>
            <a
              href={assessUrl}
              className="inline-block bg-white text-slate-900 font-bold px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Run a £49 Assessment →
            </a>
            <p className="text-slate-400 text-sm mt-3">
              No account required. Results in minutes.
            </p>
          </div>

          {/* SUBSCRIPTION TIER CARDS */}
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-bold tracking-widest text-gray-500">{plan.name}</p>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  <span className="pb-1 text-sm font-medium text-gray-500">{plan.suffix}</span>
                </div>
                <div className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm leading-6 text-gray-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={demoUrl}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
                >
                  Book a Demo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-white px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">Pricing FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
