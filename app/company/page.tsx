"use client";

import DemoForm from "../demo/DemoForm";

export default function CompanyPage() {
  return (
    <main>
      <section className="bg-[#16120F] px-5 pt-16 pb-20 md:px-14 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258]">Company</p>
          <h1 className="mt-5 text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-white md:text-7xl max-w-4xl">
            We built the platform we wished existed.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#9A9289] leading-relaxed">
            SecPrompt was founded by security professionals who spent years reading vendor documents, building spreadsheet assessments, and trying to keep up with a growing supplier base with a team that never grew fast enough.
          </p>
        </div>
      </section>

      <section className="bg-[#1E1A16] border-t border-white/06 px-5 py-20 md:px-14">
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-4">Our mission</p>
            <h2 className="text-3xl font-medium text-white md:text-4xl leading-snug mb-6">
              Make evidence-based supplier risk decisions the standard, not the exception.
            </h2>
            <p className="text-[#9A9289] leading-relaxed mb-4">
              The problem with third party risk management today is not that organisations do not care. It is that the process is so manual, slow, and inconsistent that most assessments are superficial at best.
            </p>
            <p className="text-[#9A9289] leading-relaxed mb-4">
              A supplier submits an audit report. An analyst spends two days reading it. They produce a finding that reflects their interpretation, workload, and familiarity with that document format. Two weeks later a different analyst reviews a different supplier and produces a completely different style of finding.
            </p>
            <p className="text-[#9A9289] leading-relaxed">
              SecPrompt fixes the consistency problem. The platform structures evidence, maps it to controls, and surfaces gaps for human review. Every finding is traceable, explainable, and audit-ready.
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["The problem we solve", "Manual TPRM is inconsistent, slow, and impossible to scale. Organisations miss critical gaps because they cannot read every document properly."],
              ["How we solve it", "Evidence review that maps supplier documentation to controls and identifies gaps, with human review built into every step."],
              ["Why it matters", "Supply chain attacks are now the primary vector for major breaches. Third party risk is not a compliance exercise. It is a frontline security problem."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-white/08 bg-[#16120F] p-5">
                <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-[#9A9289] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16120F] border-t border-white/06 px-5 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-10">What we believe</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Evidence supports, humans decide", "Structured assessment support makes the process faster and more consistent. But risk decisions need human judgment. We will never remove humans from the loop."],
              ["Explainability is not optional", "A finding that cannot be explained cannot be defended. Every SecPrompt output shows its reasoning, its evidence, and its confidence level."],
              ["Audit trails are a feature", "Regulated industries need to demonstrate their process, not just their conclusions. We build auditability into every part of the product."],
              ["Real problems, real impact", "Supply chain attacks cause real damage to real organisations. This is not an abstract compliance problem. We measure our impact by breaches prevented."],
              ["Enterprise means enterprise", "Multi-tenant security, role-based access, API-first architecture, and data residency commitments are table stakes for enterprise software. We treat them that way."],
              ["Trust is earned", "We process sensitive vendor intelligence. Our customers extend significant trust to us. We hold ourselves to a higher security standard because of it."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-white/08 bg-[#1E1A16] p-6">
                <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
                <p className="text-sm text-[#9A9289] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1E8] border-t border-[#16120F]/10 px-5 py-20 md:px-14 md:py-28" id="contact">
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-[1fr_520px] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-4">Get in touch</p>
            <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl mb-6 leading-tight">
              We would like to hear from you.
            </h2>
            <p className="text-lg text-[#6A6258] leading-relaxed mb-8">
              Whether you are evaluating SecPrompt, have a question about a specific use case, or would like to discuss your supplier risk management challenges, we would be happy to help.
            </p>
            <p className="text-sm text-[#9A9289]">SecPrompt AB · Registered in Sweden</p>
          </div>

          <DemoForm />
        </div>
      </section>
    </main>
  );
}
