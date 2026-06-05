"use client";

const FEATURES = [
  {
    tag: "Control library",
    title: "Build your security baseline from any source.",
    body: "Upload internal policies, regulatory documents, or select from built-in frameworks. SecPrompt extracts and normalises every control into a unified library your team owns and governs.",
    detail: [
      "Upload PDF, DOCX, XLSX, CSV, or plain text",
      "AI extracts controls with title, domain, mandatory level, and tags",
      "Human review and approval before publishing",
      "Version-controlled — every change tracked",
      "Merge multiple frameworks into one library",
      "Search and filter across thousands of controls",
    ],
    frameworks: ["NIST CSF v2.0", "ISO 27001:2022", "GDPR", "DORA", "SOC 2 TSC", "CIS Controls v8", "NIS2", "PCI DSS v4", "Custom policies"],
  },
  {
    tag: "Evidence extraction",
    title: "Every supplier document, fully analysed.",
    body: "Upload SOC 2 reports, RFP responses, penetration test reports, ISO certificates, and security questionnaires. SecPrompt reads them all simultaneously — not just the headline certification.",
    detail: [
      "SOC 2 Type I & Type II reports",
      "RFP and security questionnaire responses",
      "Penetration test reports and findings",
      "ISO 27001 certificates and statements of applicability",
      "Incident response and business continuity plans",
      "Architecture and data flow diagrams",
    ],
    evidence_types: ["SOC 2 Type II", "Pentest reports", "RFP responses", "ISO certificates", "BCP / IR plans"],
  },
  {
    tag: "Gap analysis",
    title: "Semantic matching, not keyword search.",
    body: "SecPrompt understands the meaning of evidence — distinguishing third-party verified controls from self-reported assertions, current state from future plans, and full scope coverage from partial.",
    detail: [
      "Assessment matching links evidence to requirements",
      "Confidence scoring on every finding",
      "Gap type classification: missing, partial, future plan, contradictory",
      "Evidence credibility weighting by document type",
      "Full assessment rationale shown for every determination",
      "Cross-framework gap mapping",
    ],
  },
  {
    tag: "Human review workflow",
    title: "Structured oversight at every confidence level.",
    body: "No finding reaches your risk register without the right level of human review. Auto-publish high-confidence findings, route medium-confidence to analysts, and escalate critical gaps to senior reviewers.",
    detail: [
      "Auto-publish findings with ≥90% confidence",
      "Analyst review queue for medium-confidence findings",
      "Senior escalation for low-confidence or critical gaps",
      "Approve, reject, or request more information",
      "Edit AI findings before finalising",
      "Every decision logged with timestamp and user",
    ],
  },
  {
    tag: "Risk register",
    title: "From gap to action in one workflow.",
    body: "Approved findings become risk register entries automatically — with severity, due dates, supplier-specific questions, and remediation recommendations. Grouped by supplier for executive reporting.",
    detail: [
      "Risk codes with full traceability to source evidence",
      "Severity classification: Critical, High, Medium, Low",
      "Due dates based on severity",
      "Specific remediation recommendations",
      "Supplier question generation for clarification requests",
      "Export for board reporting and audit packs",
    ],
  },
];

export default function ProductPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F5F1E8] px-5 pt-16 pb-20 md:px-14 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258]">Product</p>
          <h1 className="mt-5 text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-7xl max-w-4xl">
            Built for the reality of enterprise third party risk.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#6A6258] leading-relaxed">
            Every feature in SecPrompt exists to solve a specific problem that security and GRC teams face every day — manual document review, inconsistent findings, no audit trail, and regulatory pressure that never eases.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#16120F] px-5 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-6xl space-y-28">
          {FEATURES.map(({ tag, title, body, detail, frameworks, evidence_types }, i) => (
            <div key={tag} className={`grid gap-12 lg:grid-cols-2 lg:items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#9A9289]">{tag}</p>
                <h2 className="mt-4 text-3xl font-medium leading-snug tracking-[-0.03em] text-white md:text-4xl">{title}</h2>
                <p className="mt-4 text-base text-[#9A9289] leading-relaxed">{body}</p>
                <ul className="mt-8 space-y-3">
                  {detail.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-[#C4BBAE]">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#2a2420]">
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                          <path d="M1 3.5l2 2L7 1" stroke="#C4BBAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/08 bg-[#1E1A16] p-6">
                {frameworks && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#6A6258] mb-4">Supported frameworks</p>
                    <div className="flex flex-wrap gap-2">
                      {frameworks.map((fw) => (
                        <span key={fw} className="rounded-full border border-white/10 bg-white/05 px-3 py-1 text-xs text-[#9A9289]">{fw}</span>
                      ))}
                    </div>
                  </div>
                )}
                {evidence_types && (
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#6A6258] mb-4">Accepted document types</p>
                    <div className="space-y-2">
                      {evidence_types.map((e) => (
                        <div key={e} className="flex items-center gap-3 rounded-xl bg-white/04 px-4 py-3 text-sm text-[#C4BBAE]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#9A9289]" />
                          {e}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {!frameworks && !evidence_types && (
                  <div className="space-y-3">
                    <div className="rounded-xl bg-white/04 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs text-[#6A6258] uppercase tracking-widest">Coverage score</p>
                        <span className="text-lg font-medium text-white">72%</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/08">
                        <div className="h-1.5 w-[72%] rounded-full bg-white/60" />
                      </div>
                    </div>
                    {[["Met", "18", "text-emerald-400"], ["Partial", "7", "text-yellow-400"], ["Gap", "9", "text-red-400"]].map(([label, count, color]) => (
                      <div key={label} className="flex justify-between rounded-xl bg-white/04 px-4 py-3 text-sm">
                        <span className="text-[#9A9289]">{label}</span>
                        <span className={`font-medium ${color}`}>{count}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F1E8] border-t border-[#16120F]/10 px-5 py-20 text-center md:px-14 md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">See it working on a real assessment.</h2>
          <p className="mt-5 text-lg text-[#6A6258]">Book a demo and we will run a live analysis on a supplier document you choose.</p>
          <a href="mailto:demo@secprompt.io" className="mt-8 inline-block rounded-full bg-[#16120F] px-8 py-4 text-white font-medium hover:bg-[#2a2420] transition-colors">
            Book a demo →
          </a>
        </div>
      </section>

    </main>
  );
}
