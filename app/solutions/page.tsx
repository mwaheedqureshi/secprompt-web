export default function SolutionsPage() {
  const solutions = [
    {
      audience: "Vendor risk teams",
      title: "Review supplier evidence faster",
      body: "Assess SOC 2 reports, ISO certificates, questionnaires, and vendor documentation against your security requirements without relying on manual review cycles.",
      points: [
        "Reduce repetitive evidence review",
        "Identify missing or weak assurance faster",
        "Standardize vendor assessment outputs",
      ],
    },
    {
      audience: "Security teams",
      title: "Turn assurance documents into risk signals",
      body: "Extract relevant controls, exceptions, and security commitments from vendor evidence and surface risks that require human review.",
      points: [
        "Highlight control gaps",
        "Flag ambiguous evidence",
        "Prioritize high-risk findings",
      ],
    },
    {
      audience: "GRC teams",
      title: "Map evidence to internal controls",
      body: "Evaluate vendor assurance evidence against internal controls, security policies, and regulatory obligations with explainable rationale.",
      points: [
        "Support audit-ready reviews",
        "Maintain consistent control mapping",
        "Create structured assessment records",
      ],
    },
  ];

  const useCases = [
    "SOC 2 evidence review",
    "ISO 27001 supplier assessment",
    "Security questionnaire validation",
    "Vendor onboarding risk review",
    "Annual supplier reassessment",
    "Regulatory control alignment",
  ];

  return (
    <main className="bg-[#f4f1ea] text-[#17130f]">
      {/* HERO */}
      <section className="px-5 pb-14 pt-16 md:px-14 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257]">
            Solutions
          </p>

          <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Built for teams that manage third-party security risk.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5f554b] md:text-xl">
            SecPrompt helps security, GRC, and vendor risk teams evaluate
            supplier assurance evidence against enterprise requirements,
            internal controls, and regulatory obligations.
          </p>
        </div>
      </section>

      {/* AUDIENCE CARDS */}
      <section className="px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.audience}
              className="rounded-[2rem] border border-[#17130f]/10 bg-[#eee8dc] p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#6d6257]">
                {item.audience}
              </p>

              <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.04em]">
                {item.title}
              </h2>

              <p className="mt-5 leading-relaxed text-[#5f554b]">
                {item.body}
              </p>

              <div className="mt-8 space-y-3">
                {item.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl bg-[#f4f1ea] p-4 text-sm text-[#4f463d]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* USE CASES */}
      <section className="border-t border-[#17130f]/10 px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257]">
              Use cases
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              From onboarding to annual reassessments.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#5f554b] md:text-xl">
              Use SecPrompt wherever supplier evidence needs to be reviewed,
              mapped, and turned into a risk decision.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-[#eee8dc] p-5 text-lg font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-t border-[#17130f]/10 px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257]">
              Workflow impact
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              Standardize how vendor evidence is reviewed.
            </h2>
          </div>

          <div className="space-y-5">
            {[
              [
                "Before SecPrompt",
                "Security teams manually read reports, compare evidence to controls, and summarize risk in spreadsheets or ticketing systems.",
              ],
              [
                "With SecPrompt",
                "Evidence is extracted, mapped, assessed, and summarized into explainable findings that reviewers can validate.",
              ],
              [
                "Result",
                "Faster reviews, more consistent decisions, and clearer audit trails for supplier risk assessments.",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-[#17130f]/10 bg-[#eee8dc] p-6"
              >
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#5f554b]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 text-center md:px-14 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-medium leading-none tracking-[-0.05em] md:text-7xl">
            Bring consistency to vendor reviews.
          </h2>

          <p className="mt-8 text-lg text-[#5f554b] md:text-xl">
            See how SecPrompt helps security and GRC teams assess supplier
            evidence faster.
          </p>

          <a
            href="/demo"
            className="mt-10 inline-block rounded-full bg-[#17130f] px-8 py-4 text-white"
          >
            Book a demo
          </a>
        </div>
      </section>
    </main>
  );
}