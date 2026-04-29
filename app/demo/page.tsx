export default function DemoPage() {
  const demoHighlights = [
    "Review SOC 2, ISO, questionnaires, and vendor evidence",
    "Map evidence to internal controls and security requirements",
    "Identify gaps, missing evidence, and ambiguous claims",
    "Generate explainable findings and assessment summaries",
  ];

  const formFields = [
    "Full name",
    "Work email",
    "Company",
    "Role",
  ];

  return (
    <main className="bg-[#f4f1ea] text-[#17130f]">
      {/* HERO */}
      <section className="px-5 pb-14 pt-16 md:px-14 md:pb-20 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257]">
              Book a demo
            </p>

            <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
              See how SecPrompt accelerates vendor security reviews.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5f554b] md:text-xl">
              Request a tailored walkthrough for your vendor risk, security, or
              GRC workflow. We’ll show how SecPrompt turns supplier evidence into
              explainable risk decisions.
            </p>

            <div className="mt-10 space-y-4">
              {demoHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#eee8dc] p-4 text-[#4f463d]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] bg-[#17130f] p-5 text-white shadow-2xl md:p-8">
            <h2 className="text-3xl font-medium tracking-[-0.04em]">
              Request a demo
            </h2>

            <p className="mt-4 text-white/60">
              Tell us a little about your team and we’ll follow up.
            </p>

            <form className="mt-8 space-y-5">
              {formFields.map((label) => (
                <div key={label}>
                  <label className="text-sm text-white/50">{label}</label>
                  <input
                    type={label === "Work email" ? "email" : "text"}
                    placeholder={label}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none placeholder:text-white/30 focus:border-white/40"
                  />
                </div>
              ))}

              <div>
                <label className="text-sm text-white/50">
                  What are you looking to assess?
                </label>
                <textarea
                  rows={5}
                  placeholder="Example: SOC 2 reports, supplier questionnaires, ISO evidence, internal control mapping..."
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none placeholder:text-white/30 focus:border-white/40"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-white px-8 py-4 text-[#17130f]"
              >
                Submit request
              </button>
            </form>

            <p className="mt-5 text-sm leading-relaxed text-white/40">
              By submitting this form, you agree that SecPrompt may contact you
              about your request.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="border-t border-[#17130f]/10 px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257]">
            What to expect
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "1. Workflow discovery",
                "We’ll understand how your team currently reviews vendor assurance evidence.",
              ],
              [
                "2. Product walkthrough",
                "See how evidence extraction, control mapping, and findings generation work.",
              ],
              [
                "3. Fit discussion",
                "Discuss security expectations, deployment needs, and next steps.",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-3xl border border-[#17130f]/10 bg-[#eee8dc] p-6"
              >
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="mt-4 leading-relaxed text-[#5f554b]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}