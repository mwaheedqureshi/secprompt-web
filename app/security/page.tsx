export default function SecurityPage() {
  const securityLayers = [
    {
      title: "Tenant isolation",
      body: "Each customer workspace is designed to keep vendor evidence, internal controls, assessments, and outputs logically separated from other tenants.",
    },
    {
      title: "Data segregation",
      body: "Customer data is organized around isolated workspaces, access boundaries, and permission-aware workflows to reduce unintended exposure.",
    },
    {
      title: "Encryption",
      body: "Vendor evidence and assessment data should be protected with encryption in transit and encryption at rest across storage and processing layers.",
    },
    {
      title: "Access control",
      body: "Role-based access control helps ensure only authorized users can view, review, or approve vendor assessments.",
    },
    {
      title: "Audit logging",
      body: "Assessment activity, review decisions, and control mapping actions should be traceable for internal governance and audit readiness.",
    },
    {
      title: "AI data handling",
      body: "Customer evidence should not be used to train shared models without explicit customer approval. AI processing should remain bounded to the assessment workflow.",
    },
  ];

  const lifecycle = [
    ["1. Upload", "Vendor evidence is uploaded into a customer-specific workspace."],
    ["2. Process", "Evidence is analyzed within controlled processing boundaries."],
    ["3. Map", "Relevant evidence is mapped to internal controls and requirements."],
    ["4. Review", "Findings are reviewed by authorized users before decisions are finalized."],
    ["5. Retain or delete", "Retention policies determine how long evidence and outputs are stored."],
  ];

  return (
    <main className="bg-[#f4f1ea] text-[#17130f]">
      {/* HERO */}
      <section className="px-5 pb-14 pt-16 md:px-14 md:pb-20 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257]">
            Security
          </p>

          <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Built to protect sensitive vendor assurance data.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#5f554b] md:text-xl">
            SecPrompt is designed so each customer’s vendor evidence, internal
            controls, assessments, and outputs remain logically isolated,
            encrypted, governed, and auditable throughout the assessment
            lifecycle.
          </p>
        </div>
      </section>

      {/* SECURITY LAYERS */}
      <section className="px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257]">
              Security architecture
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              Protection across every layer of the assessment workflow.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {securityLayers.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-[#17130f]/10 bg-[#eee8dc] p-6"
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-[#5f554b]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA LIFECYCLE */}
      <section className="border-t border-[#17130f]/10 px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257]">
              Data lifecycle
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              Clear boundaries from upload to retention.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#5f554b] md:text-xl">
              Vendor evidence can contain highly sensitive information about
              infrastructure, controls, incidents, subprocessors, and internal
              operations. SecPrompt’s workflow should make handling and review
              boundaries clear.
            </p>
          </div>

          <div className="space-y-4">
            {lifecycle.map(([title, body]) => (
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

      {/* TRUST COMMITMENTS */}
      <section className="bg-[#17130f] px-5 py-16 text-white md:px-14 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Trust commitments
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
              Enterprise expectations, built into the product.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "No cross-customer data mixing",
              "No customer evidence used for shared model training without approval",
              "Customer-specific workspaces and assessment boundaries",
              "Permission-aware access to vendor documents and outputs",
              "Traceable review decisions and assessment activity",
              "Retention and deletion controls for evidence and reports",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE DEPLOYMENT OPTIONS */}
      <section className="border-t border-[#17130f]/10 px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6d6257]">
            Deployment model
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">
            Designed for enterprise deployment needs.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#5f554b] md:text-xl">
            As SecPrompt evolves, enterprise customers may require deployment
            models such as private cloud, dedicated environments, regional data
            residency, or customer-managed infrastructure. The product should be
            designed with those future requirements in mind.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              "SaaS workspace isolation",
              "Dedicated customer environments",
              "Private deployment options",
              "Regional data residency support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-[#eee8dc] p-6 text-lg font-medium"
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
          <h2 className="text-5xl font-medium leading-none tracking-[-0.05em] md:text-7xl">
            Assess vendors without losing control of sensitive evidence.
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-[#5f554b] md:text-xl">
            SecPrompt is being built for security-conscious teams that need
            confidence, traceability, and separation across vendor assessment
            workflows.
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