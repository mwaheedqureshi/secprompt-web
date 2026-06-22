export default function SolutionsPage() {
  return (
    <main>
      <section className="bg-[#F5F1E8] px-5 pt-16 pb-20 md:px-14 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258]">Solutions</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-7xl">
            Third party risk is a universal problem. The pressure varies by industry.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6A6258]">
            Every organisation that relies on suppliers faces the same core challenge: knowing
            whether suppliers are actually secure. For regulated industries, that challenge carries
            legal, operational, and financial consequences.
          </p>
        </div>
      </section>

      <section className="bg-[#16120F] px-5 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-xs uppercase tracking-[0.25em] text-[#6A6258]">By industry</p>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-white/08 bg-[#1E1A16]">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <div className="p-8">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/05 px-3 py-1 text-xs text-[#9A9289]">
                    Financial services
                  </div>
                  <h2 className="mb-4 text-2xl font-medium leading-snug text-white">
                    DORA requires demonstrable third party risk governance, not just questionnaire
                    collection.
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-[#9A9289]">
                    Banks, asset managers, insurers, and fintechs face increasing supervisory
                    scrutiny over ICT third-party risk. SecPrompt provides structured,
                    evidence-based assessments that support defensible supplier oversight.
                  </p>
                  <div className="space-y-2 text-sm text-[#C4BBAE]">
                    {[
                      "DORA Article 28 ICT third-party risk policy and register",
                      "Critical function supplier assessments",
                      "Material outsourcing due diligence",
                      "Concentration risk identification across your supply chain",
                      "Contractual right-to-audit evidence packs",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 text-[#6A6258]">-&gt;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center border-t border-white/06 p-8 lg:border-l lg:border-t-0">
                  <p className="mb-4 text-xs uppercase tracking-widest text-[#6A6258]">
                    Supported assessment frameworks
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["DORA", "GDPR", "ISO 27001", "NIST CSF 2.0", "NIST 800-53"].map((fw) => (
                      <span
                        key={fw}
                        className="rounded-full border border-white/10 bg-white/05 px-3 py-1 text-xs text-[#9A9289]"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 rounded-xl bg-[#16120F] p-5">
                    <p className="mb-2 text-xs text-[#6A6258]">The real problem</p>
                    <p className="text-sm italic leading-relaxed text-[#C4BBAE]">
                      &ldquo;We have 400 critical suppliers. Our DORA register needs evidence
                      that each one meets our ICT risk requirements. We cannot review every audit
                      report manually.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/08 bg-[#1E1A16]">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <div className="p-8">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/05 px-3 py-1 text-xs text-[#9A9289]">
                    Healthcare and life sciences
                  </div>
                  <h2 className="mb-4 text-2xl font-medium leading-snug text-white">
                    Patient data in third-party systems creates significant GDPR exposure.
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-[#9A9289]">
                    Healthcare organisations processing special category data through SaaS platforms
                    must demonstrate appropriate technical and organisational measures under GDPR
                    Article 32 for every data processor.
                  </p>
                  <div className="space-y-2 text-sm text-[#C4BBAE]">
                    {[
                      "GDPR Article 28 data processor assessments at scale",
                      "Special category data handling verification",
                      "Supplier security requirement verification",
                      "Breach notification capability assessment",
                      "Data residency and transfer mechanism verification",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 text-[#6A6258]">-&gt;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center border-t border-white/06 p-8 lg:border-l lg:border-t-0">
                  <p className="mb-4 text-xs uppercase tracking-widest text-[#6A6258]">
                    Supported assessment frameworks
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["GDPR", "ISO 27001", "NIST CSF 2.0", "NIST 800-53", "DORA"].map((fw) => (
                      <span
                        key={fw}
                        className="rounded-full border border-white/10 bg-white/05 px-3 py-1 text-xs text-[#9A9289]"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/08 bg-[#1E1A16]">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                <div className="p-8">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/05 px-3 py-1 text-xs text-[#9A9289]">
                    Enterprise technology
                  </div>
                  <h2 className="mb-4 text-2xl font-medium leading-snug text-white">
                    SaaS sprawl means your attack surface now spans dozens of vendors you have never
                    assessed properly.
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-[#9A9289]">
                    The average enterprise uses 130+ SaaS applications. Most have never been
                    assessed against internal security standards. SecPrompt makes it practical to
                    assess at scale without growing your team.
                  </p>
                  <div className="space-y-2 text-sm text-[#C4BBAE]">
                    {[
                      "Bulk assessment of SaaS vendors against internal policies",
                      "Consistent findings regardless of reviewer",
                      "Customer-owned control libraries aligned to internal standards",
                      "Integration with GRC platforms",
                      "Executive dashboard and board reporting",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 text-[#6A6258]">-&gt;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center border-t border-white/06 p-8 lg:border-l lg:border-t-0">
                  <div className="rounded-xl bg-[#16120F] p-5">
                    <p className="mb-2 text-xs text-[#6A6258]">The real problem</p>
                    <p className="text-sm italic leading-relaxed text-[#C4BBAE]">
                      &ldquo;Our security team of 5 is supposed to assess 130 SaaS vendors. Last
                      year we reviewed 18. This year we want to review all of them without hiring
                      20 more people.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#16120F]/10 bg-[#F5F1E8] px-5 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#6A6258]">By role</p>
          <h2 className="mb-12 max-w-2xl text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            Different teams. Same problem. One platform.
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                role: "CISO and security leadership",
                value: "Defensible risk decisions",
                body: "Get complete, evidence-based assessments that you can defend to the board, to regulators, and to auditors. Every finding is traceable to source documents.",
                points: ["Board-ready risk reporting", "Regulatory compliance evidence", "Supplier risk trends over time"],
              },
              {
                role: "GRC and risk managers",
                value: "Consistency at scale",
                body: "Eliminate the inconsistency of manual review. Every assessment follows the same methodology, produces structured findings, and maintains a full audit trail.",
                points: ["Standardised assessment methodology", "Supported-framework gap mapping", "Full audit trail for every decision"],
              },
              {
                role: "Security analysts",
                value: "Focus on judgment, not reading",
                body: "Let SecPrompt organize evidence and surface initial gaps. Your time goes to reviewing findings, adding context, and making calls that require human judgment.",
                points: ["Evidence review support", "Structured review workflow", "Context-rich gap explanations"],
              },
            ].map(({ role, value, body, points }) => (
              <div key={role} className="rounded-2xl border border-[#16120F]/10 bg-white p-6">
                <p className="mb-1 text-xs uppercase tracking-widest text-[#6A6258]">{role}</p>
                <h3 className="mb-3 text-lg font-semibold">{value}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#6A6258]">{body}</p>
                <ul className="space-y-2">
                  {points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs text-[#6A6258]">
                      <span className="text-[#16120F]">-&gt;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16120F] px-5 py-20 text-center md:px-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-medium tracking-[-0.04em] text-white md:text-5xl">
            Ready to solve the problem that has been unsolvable until now?
          </h2>
          <p className="mt-5 text-lg text-[#9A9289]">
            See a live demo tailored to your industry and supplier risk obligations.
          </p>
          <a
            href="/demo#contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-medium text-[#16120F] transition-colors hover:bg-[#F5F1E8]"
          >
            Book a demo
          </a>
        </div>
      </section>
    </main>
  );
}
