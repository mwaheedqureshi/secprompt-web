export default function SecurityPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#16120F] px-5 pt-16 pb-20 md:px-14 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258]">Security & trust</p>
          <h1 className="mt-5 text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-white md:text-7xl max-w-4xl">
            We hold ourselves to the same standard we help you enforce.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#9A9289] leading-relaxed">
            SecPrompt is a platform used by security professionals to assess supplier risk. Our own security posture is held to the highest standard — because we process your most sensitive vendor intelligence.
          </p>
        </div>
      </section>

      {/* DATA PROTECTION */}
      <section className="bg-[#16120F] border-t border-white/06 px-5 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-10">Data protection</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Tenant isolation", "Every customer's data is logically isolated at all layers — storage, compute, network, and application. Cross-tenant data access is architecturally impossible."],
              ["Encryption at rest", "All customer data is encrypted at rest using AES-256-GCM. Encryption keys are managed with customer-controlled key options available."],
              ["Encryption in transit", "TLS 1.2 minimum enforced for all data in transit. TLS 1.0 and 1.1 are disabled. Certificate management uses automatic renewal."],
              ["Data residency", "EU customer data is stored and processed exclusively within the European Union. We provide contractual data residency commitments."],
              ["Data deletion", "Customer data is securely deleted within 30 days of contract termination. Cryptographic erasure is used for encrypted data stores. Certificate of deletion provided on request."],
              ["No model training on your data", "Your assessment data, supplier documents, and findings are never used for model training. Your data is yours."],
            ].map(([title, body]) => (
              <div key={title as string} className="rounded-2xl border border-white/08 bg-[#1E1A16] p-6">
                <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
                <p className="text-sm text-[#9A9289] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="bg-[#1E1A16] border-t border-white/06 px-5 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-4">Compliance</p>
          <h2 className="text-3xl font-medium text-white md:text-4xl mb-10">Certifications and regulatory posture</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["GDPR", "Data Processing Agreement available for all customers. Includes all Article 28 provisions, SCCs for international transfers, and DPO contact details."],
              ["DORA readiness", "We support your DORA obligations as a technology provider to financial entities, including contractual ICT provisions and audit rights."],
            ].map(([title, body]) => (
              <div key={title as string} className="flex gap-4 rounded-2xl border border-white/08 bg-[#16120F] p-6">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-900/50 border border-emerald-600/30">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3.5 3.5L11 1" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
                  <p className="text-sm text-[#9A9289] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESS CONTROL */}
      <section className="bg-[#16120F] border-t border-white/06 px-5 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-4">Access and operations</p>
          <h2 className="text-3xl font-medium text-white md:text-4xl mb-10">How we protect access to your data</h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["MFA enforced", "Multi-factor authentication is mandatory for all SecPrompt employees. Hardware security keys required for production access."],
              ["Zero standing access", "No standing privileged access to production systems. Just-in-time access with full session recording."],
              ["Vulnerability management", "Weekly vulnerability scanning. Critical vulnerabilities patched within 7 days. Annual independent penetration testing."],
              ["Incident response", "24/7 security monitoring. Customers notified of confirmed incidents within 24 hours. GDPR breach notification within 72 hours."],
            ].map(([title, body]) => (
              <div key={title as string} className="rounded-2xl border border-white/08 bg-[#1E1A16] p-5">
                <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                <p className="text-xs text-[#9A9289] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE DISCLOSURE */}
      <section className="bg-[#1E1A16] border-t border-white/06 px-5 py-16 md:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-4">Responsible disclosure</p>
          <h2 className="text-2xl font-medium text-white mb-4">Found a vulnerability?</h2>
          <p className="text-[#9A9289] text-base leading-relaxed mb-6">
            We operate a responsible disclosure programme. Security researchers can submit security enquiries through the contact form by selecting Security Inquiry. We commit to acknowledging reports within 2 business days and providing a remediation timeline within 10 business days.
          </p>
          <a href="/demo#contact" className="inline-block rounded-full border border-white/20 px-6 py-2.5 text-sm text-white hover:bg-white/05 transition-colors">
            Submit security inquiry
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F1E8] border-t border-[#16120F]/10 px-5 py-20 text-center md:px-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl">Questions about our security posture?</h2>
          <p className="mt-5 text-lg text-[#6A6258]">Request our DPA, security questionnaire, or documentation pack.</p>
          <a href="/demo#contact" className="mt-8 inline-block rounded-full bg-[#16120F] px-8 py-4 text-white font-medium hover:bg-[#2a2420] transition-colors">
            Contact us →
          </a>
        </div>
      </section>

    </main>
  );
}
