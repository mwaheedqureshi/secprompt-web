import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — SecPrompt",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">Pricing</p>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Plans for every supplier risk program.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            AI-powered third-party risk assessments for compliance teams,
            risk officers, and security-conscious enterprises.
          </p>
        </div>

        {/* £49 One-Time Card */}
        <div style={{ backgroundColor: "#0F172A" }} className="rounded-2xl p-10 mb-12 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
                One-Time Assessment
              </p>
              <h2 className="text-3xl font-bold mb-2">
                Try SecPrompt on a single supplier
              </h2>
              <p className="text-slate-400 mb-6">
                No subscription. No account. Results in minutes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "5 frameworks or Harmonized Controls",
                  "Up to 5 supplier documents",
                  "Full AI gap analysis — 60+ controls",
                  "Data permanently deleted after download",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-emerald-400 font-bold">✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end gap-4">
              <div>
                <span className="text-6xl font-bold">£49</span>
                <span className="text-slate-400 ml-2">per assessment</span>
              </div>
              <a
                href="http://localhost:3000/assess"
                className="bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors text-lg whitespace-nowrap"
              >
                Run a £49 Assessment →
              </a>
              <p className="text-slate-500 text-sm">No account required.</p>
            </div>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          {/* Starter */}
          <div className="border border-slate-200 rounded-2xl p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Starter</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">£299</span>
              <span className="text-slate-500">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "3 users",
                "10 assessments/month",
                "5 frameworks (NIST CSF, ISO 27001, DORA, GDPR, NIST 800-53)",
                "AI gap analysis (met/partial/gap per control)",
                "3-way transparent assessment view",
                "PDF report export",
                "Email support",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-emerald-500 mt-0.5 font-bold flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="mailto:demo@secprompt.io"
              className="block text-center border-2 border-slate-900 text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Book a Demo
            </a>
          </div>

          {/* Growth */}
          <div style={{ backgroundColor: "#0F172A" }} className="rounded-2xl p-8 text-white relative">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">Growth</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">£799</span>
              <span className="text-slate-400">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
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
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-emerald-400 mt-0.5 font-bold flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="mailto:demo@secprompt.io"
              className="block text-center bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-100 transition-colors"
            >
              Book a Demo
            </a>
          </div>

          {/* Enterprise */}
          <div className="border border-slate-200 rounded-2xl p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Enterprise</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">Custom</span>
              <span className="text-slate-500 ml-2">pricing</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Unlimited users",
                "Unlimited assessments",
                "Everything in Growth, plus:",
                "SSO / SAML authentication",
                "Dedicated deployment (your infrastructure)",
                "SLA guarantee",
                "Dedicated customer success manager",
                "Custom framework integrations",
                "On-premise deployment option",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-emerald-500 mt-0.5 font-bold flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="mailto:demo@secprompt.io"
              className="block text-center border-2 border-slate-900 text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Contact Sales
            </a>
          </div>

        </div>

        {/* Footer note */}
        <p className="text-center text-slate-500 text-sm">
          All plans include full AI assessment pipeline, PDF export, and audit trail.{" "}
          Questions?{" "}
          <a href="mailto:demo@secprompt.io" className="underline">
            Talk to us.
          </a>
        </p>

      </main>
    </div>
  );
}
