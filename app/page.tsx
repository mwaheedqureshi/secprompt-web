"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
};

export default function Home() {
  const [activeDemo, setActiveDemo] = useState(0);

  const demoSteps = [
    {
      title: "Upload vendor evidence",
      label: "SOC 2 Type II Report uploaded",
      status: "Evidence detected",
      output:
        "SecPrompt identified 42 controls, 7 auditor exceptions, and 4 areas requiring reviewer attention.",
      controls: [
        ["CC6.1", "Logical access controls", "Compliant"],
        ["CC6.6", "Access removal", "Needs review"],
        ["CC7.2", "Security monitoring", "Compliant"],
      ],
    },
    {
      title: "Map to internal controls",
      label: "Mapped against enterprise requirements",
      status: "Control mapping",
      output:
        "Vendor evidence was mapped to internal controls SEC-04, SEC-09, and SEC-12.",
      controls: [
        ["SEC-04", "Access management", "Compliant"],
        ["SEC-09", "Incident response", "Gap"],
        ["SEC-12", "Subprocessor governance", "Needs review"],
      ],
    },
    {
      title: "Generate assessment",
      label: "Risk recommendation generated",
      status: "Assessment complete",
      output:
        "Approve with conditions. Vendor shows strong security posture, but two follow-ups are required before final approval.",
      controls: [
        ["Risk", "Overall vendor risk", "Medium"],
        ["Decision", "Recommendation", "Approve with conditions"],
        ["Review", "Human approval", "Required"],
      ],
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#f4f1ea] text-[#17130f]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 60, -40, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-black/5 blur-[120px]"
        />
      </div>

      {/* HERO */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="px-5 pb-14 pt-14 md:px-14 md:pb-20 md:pt-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.p
            variants={fadeUp}
            className="mb-6 text-xs uppercase tracking-[0.25em] text-[#6d6257] md:text-sm"
          >
            AI-powered vendor assurance
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-6xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-8xl lg:text-9xl"
          >
            Assess vendor evidence
            <br />
            against your controls — faster.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <p className="max-w-xl text-lg leading-relaxed text-[#4f463d] md:max-w-2xl md:text-xl lg:text-2xl [text-wrap:balance]">
              SecPrompt helps security and GRC teams evaluate SOC&nbsp;2
              reports, ISO certifications, questionnaires, and supplier
              evidence against internal controls and enterprise security
              requirements.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <motion.a
                href="/demo"
                whileHover={buttonHover}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[#17130f] px-7 py-3 text-center text-white"
              >
                Book a demo
              </motion.a>

              <motion.a
                href="/product"
                whileHover={buttonHover}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-[#17130f]/20 px-7 py-3 text-center"
              >
                Explore product
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* DESKTOP PRODUCT MOCKUP */}
      <section className="hidden px-5 pb-24 md:px-14 lg:block">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#17130f] p-6 text-white shadow-2xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#0f0c09]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-white/30" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/10" />
              </div>
              <div className="rounded-full bg-white/10 px-4 py-1 text-xs text-white/50">
                secprompt.com / vendor-assessment
              </div>
              <div className="text-xs text-white/40">Assessment workspace</div>
            </div>

            <div className="grid min-h-[560px] grid-cols-[260px_1fr_340px]">
              <aside className="border-r border-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Evidence
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    ["SOC 2 Type II.pdf", "Uploaded"],
                    ["ISO 27001 Certificate.pdf", "Uploaded"],
                    ["Security Questionnaire.xlsx", "In review"],
                    ["Incident Response Policy.pdf", "Mapped"],
                  ].map(([name, status]) => (
                    <div
                      key={name}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-sm text-white/90">{name}</p>
                      <p className="mt-2 text-xs text-white/40">{status}</p>
                    </div>
                  ))}
                </div>
              </aside>

              <section className="p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Vendor assessment
                    </p>
                    <h3 className="mt-2 text-2xl font-medium">
                      Acme Cloud Services
                    </h3>
                  </div>

                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70"
                  >
                    78% evidence mapped
                  </motion.div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    ["Low", "Data encryption"],
                    ["Medium", "Subprocessor controls"],
                    ["High", "Incident notification SLA"],
                  ].map(([risk, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                    >
                      <p className="text-xs text-white/40">Risk finding</p>
                      <h4 className="mt-3 text-xl">{risk}</h4>
                      <p className="mt-2 text-sm text-white/50">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium">Control mapping</h4>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/50">
                      AI generated
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      [
                        "SEC-04 Access Management",
                        "Mapped to SOC 2 CC6.1 and questionnaire responses",
                        "Strong evidence",
                      ],
                      [
                        "SEC-09 Incident Response",
                        "Policy exists, but customer notification timing is unclear",
                        "Gap detected",
                      ],
                      [
                        "SEC-12 Vendor Subprocessors",
                        "Subprocessor list provided; review cadence not evidenced",
                        "Needs review",
                      ],
                    ].map(([control, finding, status]) => (
                      <div key={control} className="rounded-2xl bg-black/30 p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{control}</p>
                          <span className="text-xs text-white/40">
                            {status}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-white/50">{finding}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <aside className="border-l border-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Assessment summary
                </p>

                <div className="mt-6 rounded-3xl bg-white p-5 text-[#17130f]">
                  <p className="text-sm text-[#6d6257]">Recommendation</p>
                  <h3 className="mt-3 text-2xl font-medium">
                    Approve with conditions
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#4f463d]">
                    Strong security posture. Follow-up required for incident
                    notification and subprocessor review cadence.
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    "3 high-priority gaps",
                    "12 controls mapped",
                    "4 evidence documents reviewed",
                    "Audit-ready report generated",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE PRODUCT MOCKUP */}
      <section className="px-5 pb-16 lg:hidden">
        <div className="rounded-[2rem] bg-[#17130f] p-4 text-white shadow-2xl">
          <div className="rounded-3xl bg-[#0f0c09] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Vendor assessment
            </p>

            <h3 className="mt-3 text-2xl font-medium">Acme Cloud Services</h3>

            <div className="mt-6 rounded-2xl bg-white p-5 text-[#17130f]">
              <p className="text-sm text-[#6d6257]">Recommendation</p>
              <h4 className="mt-2 text-2xl font-medium">
                Approve with conditions
              </h4>
              <p className="mt-3 text-sm text-[#4f463d]">
                Strong evidence found for access control and encryption.
                Follow-up required for incident notification and subprocessor
                review cadence.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {[
                ["SEC-04", "Access management", "Compliant"],
                ["SEC-09", "Incident response", "Gap"],
                ["SEC-12", "Subprocessor governance", "Needs review"],
              ].map(([id, name, status]) => (
                <div key={id} className="rounded-2xl bg-white/[0.06] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">{id}</p>
                      <p className="text-xs text-white/40">{name}</p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                        status === "Compliant"
                          ? "bg-emerald-400/20 text-emerald-200"
                          : status === "Gap"
                          ? "bg-red-400/20 text-red-200"
                          : "bg-yellow-400/20 text-yellow-200"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="border-t border-[#17130f]/10 px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257] md:text-sm">
            Designed for enterprise assurance workflows
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                "SOC 2 & ISO reviews",
                "Evaluate common vendor assurance evidence including SOC 2 reports, ISO certifications, questionnaires, and policies.",
              ],
              [
                "Control-based assessment",
                "Map supplier evidence to internal controls, security requirements, and regulatory obligations.",
              ],
              [
                "Human-reviewed decisions",
                "Use AI to accelerate analysis while keeping final risk decisions under security and GRC team oversight.",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-[#17130f]/10 bg-[#eee8dc] p-6"
              >
                <h3 className="text-xl font-medium">{title}</h3>
                <p className="mt-4 leading-relaxed text-[#5f554b]">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-[#17130f] p-6 text-white md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                [
                  "Evidence types",
                  "SOC 2, ISO, questionnaires, policies, attestations",
                ],
                [
                  "Assessment basis",
                  "Internal controls, enterprise requirements, regulations",
                ],
                [
                  "Output",
                  "Gaps, rationale, recommendations, audit-ready summaries",
                ],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {label}
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-white/80">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-t border-[#17130f]/10 px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
            Traditional TPRM tools collect information. SecPrompt understands
            and evaluates it.
          </h2>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257] md:text-sm">
            How it works
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                "Upload vendor evidence",
                "SOC 2 reports, ISO certifications, questionnaires, policies, attestations, and supporting documents.",
              ],
              [
                "Assess against your controls",
                "SecPrompt maps evidence to internal controls, enterprise security requirements, and regulations.",
              ],
              [
                "Generate risk insights",
                "Receive structured findings, gaps, rationale, risk ratings, and audit-ready outputs.",
              ],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-[#17130f]/10 bg-[#eee8dc] p-6"
              >
                <h3 className="text-2xl font-medium">{title}</h3>
                <p className="mt-4 leading-relaxed text-[#5f554b]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* DESKTOP INTERACTIVE DEMO */}
<motion.section
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  className="hidden border-t border-[#17130f]/10 px-5 py-24 md:px-14 lg:block"
>
  <div className="mx-auto flex max-w-7xl gap-8">
    {/* LEFT PANEL */}
    <div className="w-[40%] rounded-[2rem] border border-[#17130f]/10 bg-[#17130f] p-8 text-white shadow-2xl">
      <p className="text-sm uppercase tracking-[0.25em] text-[#d8b98c]">
        Interactive demo
      </p>

      <h2 className="mt-8 text-4xl font-medium leading-[1] tracking-[-0.04em]">
        See how SecPrompt turns evidence into decisions.
      </h2>

      <div className="mt-12 space-y-5">
        {demoSteps.map((step, index) => (
          <button
            key={step.title}
            onClick={() => setActiveDemo(index)}
            className={`w-full rounded-3xl border p-5 text-left transition ${
              activeDemo === index
                ? "border-white/30 bg-white text-[#17130f]"
                : "border-white/15 bg-white/[0.04] text-white"
            }`}
          >
            <p className="text-sm opacity-60">Step 0{index + 1}</p>
            <h3 className="mt-2 text-xl font-medium">{step.title}</h3>
            <p
              className={`mt-2 text-sm leading-relaxed ${
                activeDemo === index ? "text-[#5f554b]" : "text-white/55"
              }`}
            >
              {index === 0
                ? "Upload SOC 2, ISO, questionnaires, policies, and supplier evidence."
                : index === 1
                ? "Map evidence to internal controls, requirements, and regulations."
                : "Generate findings, recommendations, and audit-ready summaries."}
            </p>
          </button>
        ))}
      </div>

      <p className="mt-12 text-sm text-[#d8b98c]">
        ✨ AI-powered. Human-reviewed. Audit-ready.
      </p>
    </div>

    {/* RIGHT PANEL */}
    <motion.div
      key={activeDemo}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-[60%] rounded-[2rem] border border-[#17130f]/10 bg-[#17130f] p-6 text-white shadow-2xl"
    >
      <div className="rounded-[1.5rem] border border-white/10 bg-[#0f0c09] p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium">Live assessment preview</h3>

          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/70"
          >
            ● AI analyzing
          </motion.span>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-sm text-[#d8b98c]">
            {demoSteps[activeDemo].status}
          </p>

          {/* SOC 2 DOCUMENT */}
          <div className="relative mt-5 overflow-hidden rounded-3xl bg-[#f4f1ea] p-6 text-[#17130f]">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500 text-xs text-white">
                  PDF
                </div>

                <div>
                  <p className="text-xl font-medium">SOC 2 Type II Report</p>
                  <p className="text-sm text-[#6d6257]">
                    Vendor assurance evidence
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-[#17130f] px-4 py-2 text-sm text-white">
                PDF
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-[#17130f]/10 bg-white/40 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#4f463d]">
                Independent Service Auditor’s Report
              </p>

              <p className="mt-5 text-sm font-medium text-[#4f463d]">Scope</p>

              <p className="mt-2 text-sm leading-relaxed text-[#5f554b]">
                We examined Acme Cloud Services’ system and the suitability of
                controls throughout the review period.
              </p>

              <p className="mt-5 text-sm font-medium text-[#4f463d]">
                System Description
              </p>

              <div className="mt-3 space-y-3">
                <div className="h-2 w-full rounded-full bg-[#17130f]/15" />
                <div className="h-2 w-5/6 rounded-full bg-[#17130f]/15" />
                <div className="h-2 w-2/3 rounded-full bg-[#17130f]/15" />
              </div>
            </div>

            <motion.div
              animate={{ y: ["-20%", "125%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-transparent via-[#d8b98c]/40 to-transparent"
            />

            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="absolute bottom-5 right-5 rounded-full bg-[#17130f]/80 px-5 py-3 text-sm text-white backdrop-blur"
            >
              Extracting controls...
            </motion.div>
          </div>
        </div>

        {/* AI SUMMARY */}
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/45">AI summary</p>

            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="text-sm text-white/40"
            >
              typing • • •
            </motion.span>
          </div>

          <motion.p
            key={demoSteps[activeDemo].output}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-5 text-lg leading-relaxed text-white/85"
          >
            {demoSteps[activeDemo].output}
          </motion.p>
        </div>

        {/* CONTROL TABLE */}
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm text-[#d8b98c]">Mapped controls preview</p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
            {demoSteps[activeDemo].controls.map(([id, name, status], index) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.12 }}
                className="grid grid-cols-[100px_1fr_150px] items-center border-b border-white/10 px-4 py-4 last:border-b-0"
              >
                <p className="font-medium">{id}</p>
                <p className="text-sm text-white/70">{name}</p>

                <span
                  className={`justify-self-end rounded-full px-3 py-1 text-xs ${
                    status === "Compliant"
                      ? "bg-emerald-400/20 text-emerald-200"
                      : status === "Gap" || status === "Medium"
                      ? "bg-red-400/20 text-red-200"
                      : "bg-yellow-400/20 text-yellow-200"
                  }`}
                >
                  {status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</motion.section>

      {/* MOBILE DEMO */}
      <section className="border-t border-[#17130f]/10 px-5 py-16 lg:hidden">
        <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257]">
          Demo preview
        </p>

        <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em]">
          From evidence to decision.
        </h2>

        <div className="mt-8 rounded-[2rem] bg-[#17130f] p-4 text-white">
          <div className="rounded-3xl bg-[#0f0c09] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              SOC 2 Type II Report
            </p>

            <div className="relative mt-5 overflow-hidden rounded-2xl bg-[#f4f1ea] p-5 text-[#17130f]">
              <div className="space-y-3">
                <div className="h-3 w-4/5 rounded-full bg-[#17130f]/25" />
                <div className="h-3 w-full rounded-full bg-[#17130f]/15" />
                <div className="h-3 w-5/6 rounded-full bg-[#17130f]/35" />
                <div className="h-3 w-2/3 rounded-full bg-[#17130f]/15" />
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-white/[0.06] p-4">
              <p className="text-sm text-white/40">Finding</p>
              <p className="mt-2 text-sm text-white/80">
                Incident notification timeline is not clearly evidenced.
              </p>
            </div>

            <div className="mt-3 rounded-2xl bg-white p-4 text-[#17130f]">
              <p className="text-sm text-[#6d6257]">Recommendation</p>
              <p className="mt-2 font-medium">Approve with conditions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 md:px-14 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-medium leading-none tracking-[-0.05em] md:text-7xl">
            Ready to review vendors faster?
          </h2>

          <p className="mt-8 text-xl text-[#5f554b]">
            Turn supplier evidence into explainable risk decisions.
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