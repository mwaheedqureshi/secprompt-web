export default function ProductPage() {
  return (
    <main className="bg-[#f4f1ea] text-[#17130f]">

      {/* HERO */}
      <section className="px-5 pt-16 pb-14 md:px-14 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257]">
            Product
          </p>

          <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Turn vendor evidence into
            <br />
            explainable risk decisions.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-[#5f554b] md:text-xl">
            SecPrompt evaluates SOC 2 reports, ISO certifications, and vendor
            documentation against your internal controls and security requirements.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
            How it works
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "Upload evidence",
                "SOC 2 reports, ISO certifications, policies, and questionnaires.",
              ],
              [
                "Map to controls",
                "Automatically map evidence to internal controls and requirements.",
              ],
              [
                "Generate findings",
                "Identify gaps, risks, and recommendations with clear reasoning.",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-3xl border border-[#17130f]/10 bg-[#eee8dc] p-6"
              >
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="mt-4 text-[#5f554b]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="border-t border-[#17130f]/10 px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
            Built for real-world TPRM workflows
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <div>
              <h3 className="text-2xl font-medium">
                Control-based evaluation
              </h3>
              <p className="mt-4 text-[#5f554b]">
                Map vendor evidence directly to internal controls and enterprise
                security requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium">
                Explainable AI reasoning
              </h3>
              <p className="mt-4 text-[#5f554b]">
                Understand why a control is compliant, a gap, or requires review.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium">
                Evidence extraction
              </h3>
              <p className="mt-4 text-[#5f554b]">
                Automatically extract relevant controls, statements, and supporting
                data from vendor documents.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium">
                Audit-ready outputs
              </h3>
              <p className="mt-4 text-[#5f554b]">
                Generate structured reports for internal review and audit readiness.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="border-t border-[#17130f]/10 px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-5xl">

          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">
            Built differently from traditional TPRM tools
          </h2>

          <p className="mt-8 text-lg text-[#5f554b] md:text-xl">
            Traditional tools collect data. SecPrompt understands and evaluates it.
          </p>

          <div className="mt-10 space-y-6">
            {[
              "No manual evidence review",
              "No static questionnaires",
              "No spreadsheet-based assessments",
              "AI-assisted control evaluation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#eee8dc] p-5 text-lg"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 text-center md:px-14 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-5xl font-medium tracking-[-0.05em] md:text-7xl">
            See SecPrompt in action
          </h2>

          <p className="mt-6 text-lg text-[#5f554b] md:text-xl">
            Evaluate vendor evidence faster with explainable AI.
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