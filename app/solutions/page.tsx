export default function SolutionsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#F5F1E8] px-5 pt-16 pb-20 md:px-14 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258]">Solutions</p>
          <h1 className="mt-5 text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-7xl max-w-4xl">
            Third party risk is a universal problem. The pressure varies by industry.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#6A6258] leading-relaxed">
            Every organisation that relies on suppliers faces the same core challenge — knowing whether they are actually secure. For regulated industries, that challenge carries legal and financial consequences.
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#16120F] px-5 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-12">By industry</p>

          <div className="space-y-4">

            {/* Financial services */}
            <div className="rounded-2xl border border-white/08 bg-[#1E1A16] overflow-hidden">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/05 px-3 py-1 text-xs text-[#9A9289] mb-5">
                    🏦 Financial services
                  </div>
                  <h2 className="text-2xl font-medium text-white mb-4 leading-snug">
                    DORA, EBA, and FCA require demonstrable third party risk governance — not just questionnaire collection.
                  </h2>
                  <p className="text-[#9A9289] text-sm leading-relaxed mb-6">
                    Banks, asset managers, insurers, and fintechs face increasing supervisory scrutiny over ICT third-party risk. SecPrompt provides the structured, evidence-based assessments that regulators expect to see.
                  </p>
                  <div className="space-y-2 text-sm text-[#C4BBAE]">
                    {[
                      "DORA Article 28 ICT third-party risk policy and register",
                      "EBA outsourcing guidelines — critical function assessments",
                      "FCA SYSC 8 — material outsourcing due diligence",
                      "Concentration risk identification across your supply chain",
                      "Contractual right-to-audit evidence packs",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 text-[#6A6258]">→</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/06 lg:border-t-0 lg:border-l p-8 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-widest text-[#6A6258] mb-4">Regulatory frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {["DORA", "EBA Outsourcing Guidelines", "FCA SYSC 8", "PRA SS2/21", "ECB Cloud Guidance", "GDPR Art. 28"].map((fw) => (
                      <span key={fw} className="rounded-full border border-white/10 bg-white/05 px-3 py-1 text-xs text-[#9A9289]">{fw}</span>
                    ))}
                  </div>
                  <div className="mt-8 rounded-xl bg-[#16120F] p-5">
                    <p className="text-xs text-[#6A6258] mb-2">The real problem</p>
                    <p className="text-sm text-[#C4BBAE] leading-relaxed italic">
                      &ldquo;We have 400 critical suppliers. Our DORA register needs evidence that each one meets our ICT risk requirements. We cannot review 400 SOC 2 reports manually.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare */}
            <div className="rounded-2xl border border-white/08 bg-[#1E1A16] overflow-hidden">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/05 px-3 py-1 text-xs text-[#9A9289] mb-5">
                    🏥 Healthcare & life sciences
                  </div>
                  <h2 className="text-2xl font-medium text-white mb-4 leading-snug">
                    Patient data in third-party systems creates significant GDPR and NIS2 exposure.
                  </h2>
                  <p className="text-[#9A9289] text-sm leading-relaxed mb-6">
                    Healthcare organisations processing special category data through SaaS platforms must demonstrate appropriate technical and organisational measures under GDPR Article 32 — for every data processor, every year.
                  </p>
                  <div className="space-y-2 text-sm text-[#C4BBAE]">
                    {[
                      "GDPR Article 28 data processor assessments at scale",
                      "Special category data handling verification",
                      "NIS2 supply chain security requirements",
                      "Breach notification capability assessment",
                      "Data residency and transfer mechanism verification",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 text-[#6A6258]">→</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/06 lg:border-t-0 lg:border-l p-8 flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-widest text-[#6A6258] mb-4">Regulatory frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {["GDPR Art. 28/32", "NIS2 Directive", "HIPAA", "ISO 27001", "Cyber Essentials"].map((fw) => (
                      <span key={fw} className="rounded-full border border-white/10 bg-white/05 px-3 py-1 text-xs text-[#9A9289]">{fw}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise tech */}
            <div className="rounded-2xl border border-white/08 bg-[#1E1A16] overflow-hidden">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/05 px-3 py-1 text-xs text-[#9A9289] mb-5">
                    🏢 Enterprise technology
                  </div>
                  <h2 className="text-2xl font-medium text-white mb-4 leading-snug">
                    SaaS sprawl means your attack surface now spans dozens of vendors you have never assessed properly.
                  </h2>
                  <p className="text-[#9A9289] text-sm leading-relaxed mb-6">
                    The average enterprise uses 130+ SaaS applications. Most have never been assessed against internal security standards. SecPrompt makes it practical to assess at scale without growing your team.
                  </p>
                  <div className="space-y-2 text-sm text-[#C4BBAE]">
                    {[
                      "Bulk assessment of SaaS vendors against internal policies",
                      "Consistent findings regardless of reviewer",
                      "Custom control libraries aligned to internal standards",
                      "Integration with GRC platforms",
                      "Executive dashboard and board reporting",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 text-[#6A6258]">→</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/06 lg:border-t-0 lg:border-l p-8 flex flex-col justify-center">
                  <div className="rounded-xl bg-[#16120F] p-5">
                    <p className="text-xs text-[#6A6258] mb-2">The real problem</p>
                    <p className="text-sm text-[#C4BBAE] leading-relaxed italic">
                      &ldquo;Our security team of 5 is supposed to assess 130 SaaS vendors. Last year we reviewed 18. This year we want to review all of them — without hiring 20 more people.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BY ROLE */}
      <section className="bg-[#F5F1E8] border-t border-[#16120F]/10 px-5 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-4">By role</p>
          <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl mb-12 max-w-2xl">
            Different teams. Same problem. One platform.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "🔒",
                role: "CISO & security leadership",
                value: "Defensible risk decisions",
                body: "Get complete, evidence-based assessments that you can defend to the board, to regulators, and to auditors. Every finding is traceable to source documents.",
                points: ["Board-ready risk reporting", "Regulatory compliance evidence", "Supplier risk trends over time"],
              },
              {
                icon: "📋",
                role: "GRC & risk managers",
                value: "Consistency at scale",
                body: "Eliminate the inconsistency of manual review. Every assessment follows the same methodology, produces structured findings, and maintains a full audit trail.",
                points: ["Standardised assessment methodology", "Multi-framework gap mapping", "Full audit trail for every decision"],
              },
              {
                icon: "🔍",
                role: "Security analysts",
                value: "Focus on judgment, not reading",
                body: "Let AI handle the document extraction and initial gap identification. Your time goes to reviewing findings, adding context, and making calls that require human judgment.",
                points: ["AI-assisted evidence extraction", "Structured review workflow", "Context-rich gap explanations"],
              },
            ].map(({ icon, role, value, body, points }) => (
              <div key={role} className="rounded-2xl border border-[#16120F]/10 bg-white p-6">
                <p className="text-2xl mb-3">{icon}</p>
                <p className="text-xs uppercase tracking-widest text-[#6A6258] mb-1">{role}</p>
                <h3 className="text-lg font-semibold mb-3">{value}</h3>
                <p className="text-sm text-[#6A6258] leading-relaxed mb-4">{body}</p>
                <ul className="space-y-2">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-[#6A6258]">
                      <span className="text-[#16120F]">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#16120F] px-5 py-20 text-center md:px-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-medium text-white tracking-[-0.04em] md:text-5xl">
            Ready to solve the problem that has been unsolvable until now?
          </h2>
          <p className="mt-5 text-lg text-[#9A9289]">See a live demo tailored to your industry and regulatory obligations.</p>
          <a href="mailto:demo@secprompt.io" className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-[#16120F] font-medium hover:bg-[#F5F1E8] transition-colors">
            Book a demo →
          </a>
        </div>
      </section>

    </main>
  );
}
