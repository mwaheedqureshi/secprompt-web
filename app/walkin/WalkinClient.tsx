"use client";

import {
  AlertTriangle,
  ArrowRight,
  BarChart2,
  CheckCircle2,
  Download,
  FileSearch,
  FileText,
  Lock,
  ShieldCheck,
} from "lucide-react";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
const assessUrl = `${appUrl}/assess`;

const evidenceItems = [
  {
    title: "Independent Audit Report",
    badge: "Highest confidence",
    badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-700",
    desc: "Independent auditor verification across security, availability, and confidentiality trust service criteria.",
    detail: "Covers a 6–12 month period of operational controls — the strongest third-party attestation available.",
  },
  {
    title: "ISO 27001 Certificate",
    badge: "Strong assurance",
    badgeColor: "bg-emerald-50 border-emerald-100 text-emerald-700",
    desc: "Validates that the supplier operates a certified information security management system.",
    detail: "Independent certification body verification. Confirms systematic security controls are in place.",
  },
  {
    title: "Penetration Test Report",
    badge: "Independent technical validation",
    badgeColor: "bg-blue-50 border-blue-200 text-blue-700",
    desc: "Third-party technical assessment of infrastructure and application security posture.",
    detail: "Highest value when dated within 12 months and includes remediation evidence for identified findings.",
  },
  {
    title: "Security Questionnaire",
    badge: "Useful — supplier-provided",
    badgeColor: "bg-amber-50 border-amber-200 text-amber-700",
    desc: "Supplier-provided responses to security controls. Useful but requires corroboration from independent evidence.",
    detail: "Lower confidence than audited reports. Most effective when submitted alongside supporting documentation.",
  },
  {
    title: "Security Policies",
    badge: "Supports control review",
    badgeColor: "bg-gray-100 border-gray-200 text-gray-600",
    desc: "Formal documented policies covering data handling, access control, incident response, and business continuity.",
    detail: "Supports control implementation review. Most useful when cross-referenced with operational evidence.",
  },
];

const confidenceBands = [
  {
    range: "80–100%",
    level: "High Confidence",
    desc: "Strong, independent evidence across multiple controls. Assessment outcome is reliable for governance decisions.",
    cardColor: "border-emerald-200 bg-emerald-50",
    badge: "bg-emerald-600 text-white",
    barColor: "bg-emerald-500",
    barWidth: "w-full",
  },
  {
    range: "60–79%",
    level: "Moderate Confidence",
    desc: "Good evidence coverage with minor gaps. Suitable for most risk acceptance decisions with noted exceptions.",
    cardColor: "border-blue-200 bg-blue-50",
    badge: "bg-blue-600 text-white",
    barColor: "bg-blue-500",
    barWidth: "w-3/4",
  },
  {
    range: "40–59%",
    level: "Low Confidence",
    desc: "Limited or partially satisfactory evidence. Assessment outcome should be treated as indicative.",
    cardColor: "border-amber-200 bg-amber-50",
    badge: "bg-amber-500 text-white",
    barColor: "bg-amber-500",
    barWidth: "w-1/2",
  },
  {
    range: "Below 40%",
    level: "Insufficient Evidence",
    desc: "Inadequate evidence to support a reliable assessment. Additional documentation is required.",
    cardColor: "border-red-200 bg-red-50",
    badge: "bg-red-500 text-white",
    barColor: "bg-red-500",
    barWidth: "w-1/4",
  },
];

export default function WalkinClient() {
  return (
    <main>
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden bg-white px-4 pb-24 pt-20 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary-50 opacity-70 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-300/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-700 shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            One-Time Assessment · No Account Required
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-dark-900 md:text-6xl">
            Assess a Supplier<br className="hidden sm:block" /> in Minutes
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Upload supplier security documents and receive a complete risk assessment — with reports ready to download.
          </p>
          <ul className="mx-auto mt-8 inline-flex flex-col items-start gap-3 text-left">
            {[
              "Executive risk decision",
              "Identified control gaps",
              "Risk exposure analysis",
              "Confidence-based findings",
              "Downloadable PDF reports",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                <CheckCircle2 className="h-4 w-4 flex-none text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={assessUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-600/20 transition-colors hover:bg-primary-700"
            >
              Start Assessment — £49
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-sm text-gray-500">One-time payment · No subscription · Results delivered immediately</p>
          </div>
        </div>
      </section>

      {/* ── 2. What You&apos;ll Receive ── */}
      <section className="bg-[#F6F8FC] px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">Deliverables</p>
            <h2 className="text-3xl font-bold tracking-tight text-dark-900 md:text-4xl">What You&apos;ll Receive</h2>
            <p className="mt-4 text-lg text-gray-600">Every assessment includes these four deliverable categories.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Executive Decision */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">Executive Decision</p>
              <p className="mt-1 text-lg font-bold text-dark-900">Risk Verdict</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">A clear, actionable verdict on supplier risk acceptance.</p>
              <div className="mt-5 space-y-2">
                <span className="block rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">Accept</span>
                <span className="block rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">Accept with Conditions</span>
                <span className="block rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">Additional Evidence Required</span>
                <span className="block rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">Reject</span>
              </div>
            </div>

            {/* Risk Summary */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <BarChart2 className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">Risk Metrics</p>
              <p className="mt-1 text-lg font-bold text-dark-900">Risk Summary</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">Quantified risk metrics to support governance decisions.</p>
              <div className="mt-5 space-y-2">
                {["Inherent Risk", "Assessment Exposure", "Residual Risk", "Assessment Confidence"].map((m) => (
                  <div key={m} className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 flex-none rounded-full bg-primary-400" />
                    <span className="text-xs font-medium text-gray-700">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Findings */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">Findings</p>
              <p className="mt-1 text-lg font-bold text-dark-900">Findings Detail</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">Categorised findings with evidence references and gap analysis.</p>
              <div className="mt-5 space-y-2">
                {[
                  { text: "Critical Findings", cls: "border-red-200 bg-red-50 text-red-700" },
                  { text: "High Priority Findings", cls: "border-amber-200 bg-amber-50 text-amber-700" },
                  { text: "Control Gaps", cls: "border-orange-200 bg-orange-50 text-orange-700" },
                  { text: "Evidence Exceptions", cls: "border-gray-200 bg-gray-50 text-gray-600" },
                  { text: "Contradictions Identified", cls: "border-gray-200 bg-gray-50 text-gray-600" },
                ].map(({ text, cls }) => (
                  <span key={text} className={`block rounded-lg border px-3 py-1.5 text-xs font-semibold ${cls}`}>{text}</span>
                ))}
              </div>
            </div>

            {/* Reports */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <FileText className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">Reports</p>
              <p className="mt-1 text-lg font-bold text-dark-900">Downloadable Reports</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">PDF reports ready for audit files and governance review.</p>
              <div className="mt-5 space-y-3">
                {[
                  { title: "Executive Assessment Report", sub: "Decision · Summary · Key Findings" },
                  { title: "Detailed Gap Analysis Report", sub: "Control-by-control · Evidence · Gaps" },
                ].map(({ title, sub }) => (
                  <div key={title} className="rounded-lg border border-primary-200 bg-primary-50 px-3 py-3">
                    <p className="flex items-center gap-1.5 text-xs font-semibold text-primary-700">
                      <Download className="h-3 w-3 flex-none" />
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-primary-500">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Sample Assessment Outcome ── */}
      <section className="bg-white px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">Example Output</p>
            <h2 className="text-3xl font-bold tracking-tight text-dark-900 md:text-4xl">Sample Assessment Outcome</h2>
            <p className="mt-4 text-gray-600">This is what an assessment result looks like.</p>
          </div>
          <div className="rounded-2xl bg-[#0F172A] p-8 text-white md:p-10">
            {/* Header row */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Supplier Assessment</p>
                <p className="mt-1 text-xl font-bold text-white">Example SaaS Vendor</p>
              </div>
              <span className="inline-flex items-center rounded-lg border border-amber-400/30 bg-amber-400/15 px-4 py-2 text-sm font-bold text-amber-300">
                Accept with Conditions
              </span>
            </div>
            {/* Metrics grid */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Assessment Exposure", value: "68", suffix: "/100", color: "text-amber-300" },
                { label: "Assessment Confidence", value: "84", suffix: "%", color: "text-emerald-400" },
                { label: "Critical Findings", value: "2", suffix: "", color: "text-red-400" },
                { label: "High Priority Findings", value: "4", suffix: "", color: "text-amber-300" },
              ].map(({ label, value, suffix, color }) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</p>
                  <p className={`mt-2 text-3xl font-bold ${color}`}>
                    {value}<span className="text-base font-semibold">{suffix}</span>
                  </p>
                </div>
              ))}
            </div>
            {/* Required Actions */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-300">Required Actions</p>
              <ul className="space-y-3">
                {[
                  "Submit penetration test remediation evidence",
                  "Complete annual supplier review",
                  "Provide incident response testing records",
                ].map((action) => (
                  <li key={action} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 text-xs text-amber-300">→</span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            Illustrative example. Actual results depend on the quality and quantity of evidence provided.
          </p>
        </div>
      </section>

      {/* ── 4. Evidence Guidance ── */}
      <section className="bg-[#F6F8FC] px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">Document Types</p>
            <h2 className="text-3xl font-bold tracking-tight text-dark-900 md:text-4xl">Evidence Guidance</h2>
            <p className="mt-4 text-gray-600">The type of evidence you provide directly affects assessment confidence.</p>
          </div>
          <div className="space-y-4">
            {evidenceItems.map(({ title, badge, badgeColor, desc, detail }) => (
              <div key={title} className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-400">
                  <FileSearch className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-dark-900">{title}</h3>
                    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${badgeColor}`}>{badge}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
                  <p className="mt-1 text-xs text-gray-400">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Confidence Expectations ── */}
      <section className="bg-white px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">Assessment Quality</p>
            <h2 className="text-3xl font-bold tracking-tight text-dark-900 md:text-4xl">Confidence Expectations</h2>
          </div>
          <div className="space-y-4">
            {confidenceBands.map(({ range, level, desc, cardColor, badge, barColor, barWidth }) => (
              <div key={level} className={`rounded-2xl border p-5 ${cardColor}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`rounded-lg px-3 py-1 text-xs font-bold ${badge}`}>{level}</span>
                    <span className="text-sm font-semibold text-gray-500">{range}</span>
                  </div>
                  <div className="h-1.5 w-32 overflow-hidden rounded-full bg-black/10">
                    <div className={`h-full rounded-full ${barColor} ${barWidth}`} />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="font-semibold text-dark-900">
              Assessment confidence reflects certainty in the assessment outcome, not supplier security quality.
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              A supplier may operate strong security controls but provide insufficient documentation to support a high-confidence assessment. In these cases, requesting additional evidence is the appropriate next step rather than treating a low-confidence result as a negative finding.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. Privacy & Trust ── */}
      <section className="bg-[#F6F8FC] px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-[#0F172A] p-8 text-white md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                <Lock className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Your Documents Remain Private</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Documents are processed only for this assessment",
                "No subscription or ongoing account required",
                "No supplier contact required",
                "Download reports immediately after completion",
                "Assessment data is not retained indefinitely",
                "Designed for security and compliance teams",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Report Preview ── */}
      <section className="bg-white px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">Deliverables</p>
            <h2 className="text-3xl font-bold tracking-tight text-dark-900 md:text-4xl">Report Preview</h2>
            <p className="mt-4 text-gray-600">Every assessment generates two PDF reports, included in your £49 payment.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Executive Assessment Report",
                sections: [
                  { n: "01", title: "Executive Decision", desc: "Risk verdict with rationale" },
                  { n: "02", title: "Risk Summary", desc: "Exposure, residual risk, confidence" },
                  { n: "03", title: "Key Findings", desc: "Critical and high priority items" },
                  { n: "04", title: "Recommendations", desc: "Required actions and next steps" },
                ],
              },
              {
                title: "Detailed Gap Analysis Report",
                sections: [
                  { n: "01", title: "Requirement Analysis", desc: "Control-by-control assessment" },
                  { n: "02", title: "Evidence Review", desc: "Document references per control" },
                  { n: "03", title: "Gap Analysis", desc: "Unsupported and partial controls" },
                  { n: "04", title: "Findings Detail", desc: "Full findings with evidence citations" },
                ],
              },
            ].map(({ title, sections }) => (
              <div key={title} className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between bg-[#0F172A] px-5 py-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">SecPrompt</p>
                    <p className="mt-0.5 text-sm font-bold text-white">{title}</p>
                  </div>
                  <span className="rounded-md bg-primary-600 px-2.5 py-1 text-xs font-bold text-white">PDF</span>
                </div>
                <div className="space-y-2 bg-white p-5">
                  {sections.map(({ n, title: t, desc }) => (
                    <div key={n} className="flex items-center gap-4 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3">
                      <span className="w-5 flex-none text-xs font-bold text-gray-300">{n}</span>
                      <div>
                        <p className="text-sm font-semibold text-dark-900">{t}</p>
                        <p className="text-xs text-gray-400">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 bg-gray-50 px-5 py-3">
                  <p className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <Download className="h-3.5 w-3.5" />
                    Available immediately after assessment
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Final CTA ── */}
      <section className="bg-[#0F172A] px-4 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Ready to Assess Your Supplier?</h2>
          <p className="mt-4 text-lg text-slate-400">Everything you need to make an informed risk decision.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 flex-none text-emerald-400" />
              £49 one-time assessment
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 flex-none text-emerald-400" />
              No subscription
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 flex-none text-emerald-400" />
              Executive and detailed reports included
            </span>
          </div>
          <a
            href={assessUrl}
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-10 py-4 text-base font-bold text-dark-900 transition-colors hover:bg-gray-100"
          >
            Start Assessment
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-slate-500">No account required. Results delivered immediately after processing.</p>
        </div>
      </section>
    </main>
  );
}
