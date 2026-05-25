"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const appUrl = "http://localhost:3000";
const assessUrl = "http://localhost:3000/assess";
const demoUrl = "mailto:demo@secprompt.io";

const plans = [
  {
    name: "STARTER",
    monthly: "\u00a3299",
    annual: "\u00a3249",
    suffix: "/month",
    badge: "",
    features: [
      "3 users",
      "10 assessments/month",
      "5 frameworks (NIST CSF, ISO 27001, DORA, GDPR, NIST 800-53)",
      "AI gap analysis (met/partial/gap per control)",
      "3-way transparent assessment view",
      "PDF report export",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "GROWTH",
    monthly: "\u00a3799",
    annual: "\u00a3649",
    suffix: "/month",
    badge: "MOST POPULAR",
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
    cta: "Start Free Trial",
  },
  {
    name: "ENTERPRISE",
    monthly: "Custom",
    annual: "Custom",
    suffix: " pricing",
    badge: "",
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
    cta: "Contact Sales",
  },
];

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Full access to the Growth plan for 14 days. No credit card required. Cancel anytime.",
  },
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
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <main className="bg-[#F6F8FC]">
      <section className="px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
              Pricing
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-dark-900 md:text-6xl">
              Plans for every supplier risk program.
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Annual plans include two months free. Start with transparent AI assessment and scale into dedicated enterprise deployment.
            </p>
          </div>

          <div className="mb-10 flex items-center justify-center">
            <div className="inline-flex rounded-2xl border border-gray-200 bg-white p-1 shadow-sm">
              {(["monthly", "annual"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBilling(option)}
                  className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                    billing === option ? "bg-primary-600 text-white" : "text-gray-600 hover:text-primary-700"
                  }`}
                >
                  {option === "monthly" ? "Monthly" : "Annual"}
                </button>
              ))}
            </div>
          </div>
          <p className="mb-8 text-center text-sm font-medium text-emerald-700">
            Annual billing includes 2 months free.
          </p>

          <div className="mb-8 rounded-3xl border border-primary-200 bg-white/75 p-6 shadow-sm md:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr_auto] lg:items-center">
              <div>
                <p className="mb-3 inline-flex rounded-full bg-primary-50 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-primary-700">
                  ONE-TIME
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-dark-900">Single Assessment</h2>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-bold text-dark-900">{"\u00a349"}</span>
                  <span className="pb-2 text-sm font-semibold text-gray-500">one-time</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  No account needed. Run one AI assessment, download your PDF, your data deleted immediately.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Choose from 5 frameworks or Harmonized Controls",
                  "Upload up to 5 supplier documents",
                  "Full AI gap analysis — 60+ controls",
                  "Downloadable PDF report",
                  "Data permanently deleted after download",
                ].map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm leading-6 text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={assessUrl}
                className="inline-flex items-center justify-center rounded-xl bg-dark-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Run Now →
              </a>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const price = billing === "annual" ? plan.annual : plan.monthly;

              return (
                <div
                  key={plan.name}
                  className={`relative flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm ${
                    plan.badge ? "border-primary-300 shadow-primary-900/10" : "border-gray-200"
                  }`}
                >
                  {plan.badge ? (
                    <div className="absolute right-5 top-5 rounded-full bg-primary-600 px-3 py-1 text-[11px] font-bold tracking-wide text-white">
                      {plan.badge}
                    </div>
                  ) : null}
                  <p className="text-sm font-bold tracking-[0.18em] text-gray-500">{plan.name}</p>
                  <div className="mt-6 flex items-end gap-1">
                    <span className="text-4xl font-bold tracking-tight text-dark-900">{price}</span>
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
                    href={plan.cta === "Contact Sales" ? demoUrl : appUrl}
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                      plan.badge
                        ? "bg-primary-600 text-white hover:bg-primary-700"
                        : "border border-gray-300 bg-white text-dark-900 hover:border-primary-300 hover:text-primary-700"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm font-medium text-gray-600">
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-dark-900">Pricing FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="font-semibold text-dark-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
