export default function Home() {
  return (
    <main className="bg-[#F5F1E8] text-[#16120F]">

      {/* HERO */}
      <section className="px-5 pt-16 pb-14 md:px-14 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258]">
            SecPrompt
          </p>

          <h1 className="mt-6 text-5xl font-medium leading-[1] tracking-[-0.04em] md:text-7xl">
            Evaluate vendor assurance evidence
            <br />
            against your security controls.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-[#6A6258] md:text-xl">
            SecPrompt helps security and GRC teams assess SOC 2 reports, ISO
            certifications, and supplier evidence against internal controls,
            enterprise requirements, and regulatory obligations.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="/demo"
              className="rounded-full bg-[#16120F] px-7 py-3 text-white"
            >
              Book a demo
            </a>

            <a
              href="/product"
              className="rounded-full border border-[#16120F]/20 px-7 py-3"
            >
              Explore product
            </a>
          </div>
        </div>
      </section>

     {/* PRODUCT MOCKUP */}
<section className="px-5 pb-20 md:px-14 md:pb-28">
  <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#16120F]/10 bg-white p-6 shadow-sm">
    <div className="grid gap-6 md:grid-cols-[260px_1fr_260px]">
      {/* LEFT */}
     <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#16120F]/10 bg-[#F5F1E8] p-4 shadow-sm">
  <div className="mb-4 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-9 items-center justify-center rounded-md bg-red-600 text-[10px] font-semibold text-white shadow-sm">
        PDF
      </div>

      <div>
        <p className="text-sm font-semibold">SOC 2 Type II Report</p>
        <p className="text-xs text-[#6A6258]">Vendor assurance evidence</p>
      </div>
    </div>
  </div>

  <div className="rounded-xl bg-white p-4">
    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#6A6258]">
      Auditor report
    </p>

    <div className="mt-4 space-y-2">
      <div className="h-2 w-full rounded-full bg-[#16120F]/20" />
      <div className="h-2 w-5/6 rounded-full bg-[#16120F]/15" />
      <div className="h-2 w-3/4 rounded-full bg-[#B88A55]/50" />
      <div className="h-2 w-2/3 rounded-full bg-[#16120F]/15" />
      <div className="h-2 w-4/5 rounded-full bg-[#B88A55]/40" />
    </div>
  </div>

  <div className="mt-3 rounded-xl border border-[#B88A55]/30 bg-[#B88A55]/10 p-3">
    <p className="text-xs font-medium text-[#7A5631]">Extracting controls...</p>
  </div>

  <div className="absolute inset-x-0 top-0 h-16 animate-[scan_3s_linear_infinite] bg-gradient-to-b from-transparent via-[#B88A55]/35 to-transparent" />
</div>

      {/* CENTER */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#6A6258]">
          Control assessment
        </p>

        <div className="mt-5 space-y-4">
          {[
            ["SEC-04", "Access Management", "Compliant"],
            ["SEC-09", "Incident Response", "Gap"],
            ["SEC-12", "Subprocessor Controls", "Needs review"],
          ].map(([id, name, status], index) => (
            <div
              key={id}
              className="animate-[fadeUp_.7s_ease-out_forwards] rounded-xl border border-[#16120F]/10 p-4 opacity-0"
              style={{ animationDelay: `${index * 180}ms` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{id}</p>
                  <p className="text-sm text-[#6A6258]">{name}</p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    status === "Compliant"
                      ? "bg-emerald-100 text-emerald-700"
                      : status === "Gap"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="border-l border-[#16120F]/10 pl-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[#6A6258]">
          Assessment
        </p>

        <div className="mt-5 rounded-xl bg-[#16120F] p-4 text-white">
          <p className="text-sm text-white/60">Recommendation</p>
          <h3 className="mt-2 text-xl font-medium">Approve with conditions</h3>

          <p className="mt-3 text-sm text-white/70">
            Strong security posture. Follow-up required for incident response
            and vendor subprocessors.
          </p>
        </div>

        <div className="mt-4 space-y-3 text-sm text-[#6A6258]">
          <p>Risk level: Medium</p>
          <p>3 control gaps identified</p>
          <p>Audit-ready summary available</p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* TRUST */}
      <section className="border-t border-[#16120F]/10 px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">

          {[
            ["Tenant isolation", "Customer data is logically separated across workspaces."],
            ["Encryption", "Data protected in transit and at rest."],
            ["Auditability", "All assessments are traceable and reviewable."],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl bg-[#ECE5D8] p-6"
            >
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-3 text-sm text-[#6A6258]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-medium md:text-5xl">
            How SecPrompt works
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Upload evidence", "SOC 2, ISO, questionnaires, and policies"],
              ["Map to controls", "Automatically align evidence to internal controls"],
              ["Generate findings", "Identify gaps, risks, and recommendations"],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl bg-[#ECE5D8] p-6">
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="mt-3 text-sm text-[#6A6258]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* WHY SECPROMPT */}
<section className="border-t border-[#16120F]/10 px-5 py-20 md:px-14 md:py-28">
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258]">
          Why SecPrompt
        </p>

        <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
          Move beyond collecting vendor evidence.
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-[#6A6258] md:text-xl">
          Traditional TPRM tools help teams gather documents. SecPrompt helps
          security and GRC teams understand what those documents mean against
          internal controls, requirements, and risk expectations.
        </p>
      </div>

      {/* GRAPHIC */}
      <div className="rounded-[2rem] border border-[#16120F]/10 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-[#F5F1E8] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6A6258]">
              Input
            </p>
            <h3 className="mt-4 text-xl font-medium">Evidence</h3>
            <div className="mt-5 space-y-3">
              <div className="h-3 w-full rounded-full bg-[#16120F]/15" />
              <div className="h-3 w-4/5 rounded-full bg-[#16120F]/10" />
              <div className="h-3 w-2/3 rounded-full bg-[#16120F]/10" />
            </div>
          </div>

          <div className="rounded-2xl bg-[#16120F] p-5 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              SecPrompt
            </p>
            <h3 className="mt-4 text-xl font-medium">AI review</h3>
            <div className="mt-5 space-y-3">
              <div className="rounded-full bg-[#B88A55]/30 px-3 py-2 text-xs text-[#F5D7A8]">
                Extract controls
              </div>
              <div className="rounded-full bg-white/10 px-3 py-2 text-xs text-white/70">
                Compare requirements
              </div>
              <div className="rounded-full bg-white/10 px-3 py-2 text-xs text-white/70">
                Explain findings
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F5F1E8] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6A6258]">
              Output
            </p>
            <h3 className="mt-4 text-xl font-medium">Decision</h3>
            <div className="mt-5 space-y-3 text-sm">
              <div className="rounded-full bg-emerald-100 px-3 py-2 text-emerald-700">
                Compliant
              </div>
              <div className="rounded-full bg-red-100 px-3 py-2 text-red-700">
                Gap found
              </div>
              <div className="rounded-full bg-yellow-100 px-3 py-2 text-yellow-700">
                Needs review
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-12 grid gap-5 md:grid-cols-3">
      {[
        [
          "Evidence-aware",
          "Understands SOC 2 reports, ISO certificates, questionnaires, policies, and vendor assurance materials.",
        ],
        [
          "Control-driven",
          "Evaluates supplier evidence against your internal controls instead of generic templates.",
        ],
        [
          "Explainable",
          "Surfaces gaps, rationale, and recommendations your team can review and defend.",
        ],
      ].map(([title, body]) => (
        <div
          key={title}
          className="rounded-2xl bg-[#ECE5D8] p-6"
        >
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#6A6258]">
            {body}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CTA */}
      <section className="border-t border-[#16120F]/10 px-5 py-20 text-center md:px-14 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-medium md:text-6xl">
            Bring consistency to vendor security reviews.
          </h2>

          <p className="mt-6 text-lg text-[#6A6258]">
            Evaluate vendor evidence faster with structured, explainable assessments.
          </p>

          <a
            href="/demo"
            className="mt-10 inline-block rounded-full bg-[#16120F] px-8 py-4 text-white"
          >
            Book a demo
          </a>
        </div>
      </section>

    </main>
  );
}