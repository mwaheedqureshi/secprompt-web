"use client";
import { useState } from "react";

export default function CompanyPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>

      {/* HERO */}
      <section className="bg-[#16120F] px-5 pt-16 pb-20 md:px-14 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258]">Company</p>
          <h1 className="mt-5 text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-white md:text-7xl max-w-4xl">
            We built the platform we wished existed.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[#9A9289] leading-relaxed">
            SecPrompt was founded by security professionals who spent years doing exactly what SecPrompt now automates — reading vendor documents, building spreadsheet assessments, and trying to keep up with a growing supplier base with a team that never grew fast enough.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#1E1A16] border-t border-white/06 px-5 py-20 md:px-14">
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-4">Our mission</p>
            <h2 className="text-3xl font-medium text-white md:text-4xl leading-snug mb-6">
              Make evidence-based supplier risk decisions the standard, not the exception.
            </h2>
            <p className="text-[#9A9289] leading-relaxed mb-4">
              The problem with third party risk management today is not that organisations do not care — it is that the process is so manual, so slow, and so inconsistent that most assessments are superficial at best.
            </p>
            <p className="text-[#9A9289] leading-relaxed mb-4">
              A supplier submits a SOC 2 report. An analyst spends two days reading it. They produce a finding that reflects their interpretation, their current workload, and their familiarity with that specific document format. Two weeks later a different analyst reviews a different supplier and produces a completely different style of finding.
            </p>
            <p className="text-[#9A9289] leading-relaxed">
              SecPrompt fixes the consistency problem. AI handles extraction and initial analysis. Humans review, verify, and make the final call. Every finding is traceable, explainable, and audit-ready.
            </p>
          </div>
          <div className="space-y-4">
            {[
              ["The problem we solve", "Manual TPRM is inconsistent, slow, and impossible to scale. Organisations miss critical gaps because they cannot read every document properly."],
              ["How we solve it", "AI-assisted analysis that extracts evidence, maps it to controls, and identifies gaps — with human review built into every step."],
              ["Why it matters", "Supply chain attacks are now the primary vector for major breaches. Third party risk is not a compliance exercise — it is a frontline security problem."],
            ].map(([title, body]) => (
              <div key={title as string} className="rounded-2xl border border-white/08 bg-[#16120F] p-5">
                <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-[#9A9289] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#16120F] border-t border-white/06 px-5 py-20 md:px-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-10">What we believe</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["AI assists, humans decide", "Automation makes the process faster and more consistent. But risk decisions need human judgment. We will never remove humans from the loop."],
              ["Explainability is not optional", "A finding that cannot be explained cannot be defended. Every SecPrompt output shows its reasoning, its evidence, and its confidence level."],
              ["Audit trails are a feature", "Regulated industries need to demonstrate their process, not just their conclusions. We build auditability into every part of the product."],
              ["Real problems, real impact", "Supply chain attacks cause real damage to real organisations. This is not an abstract compliance problem. We measure our impact by breaches prevented."],
              ["Enterprise means enterprise", "Multi-tenant security, role-based access, API-first architecture, and data residency commitments are table stakes for enterprise software. We treat them that way."],
              ["Trust is earned", "We process sensitive vendor intelligence. Our customers extend significant trust to us. We hold ourselves to a higher security standard because of it."],
            ].map(([title, body]) => (
              <div key={title as string} className="rounded-2xl border border-white/08 bg-[#1E1A16] p-6">
                <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
                <p className="text-sm text-[#9A9289] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#F5F1E8] border-t border-[#16120F]/10 px-5 py-20 md:px-14 md:py-28" id="contact">
        <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-[1fr_480px] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6A6258] mb-4">Get in touch</p>
            <h2 className="text-4xl font-medium tracking-[-0.04em] md:text-5xl mb-6 leading-tight">
              We would like to hear from you.
            </h2>
            <p className="text-lg text-[#6A6258] leading-relaxed mb-8">
              Whether you are evaluating SecPrompt, have a question about a specific use case, or want to discuss your TPRM challenges — we respond to every message.
            </p>
            <div className="space-y-4">
              {[
                ["📧", "General", "hello@secprompt.io"],
                ["🔒", "Security", "security@secprompt.io"],
                ["⚖️", "Privacy / DPO", "dpo@secprompt.io"],
              ].map(([icon, label, email]) => (
                <div key={label as string} className="flex items-center gap-4 rounded-2xl border border-[#16120F]/10 bg-white p-4">
                  <span className="text-xl">{icon}</span>
                  <div>
                    <p className="text-xs text-[#6A6258] uppercase tracking-wider">{label}</p>
                    <a href={`mailto:${email}`} className="text-sm font-medium hover:underline">{email}</a>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#9A9289]">SecPrompt AB · Registered in Sweden</p>
          </div>

          {/* Contact form */}
          <div className="rounded-[2rem] border border-[#16120F]/10 bg-white p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path d="M2 10l7 7L22 2" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Message sent</h3>
                <p className="text-sm text-[#6A6258]">We will get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <h3 className="text-lg font-semibold mb-5">Send us a message</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#6A6258] mb-1.5">First name</label>
                    <input required className="w-full rounded-xl border border-[#16120F]/15 bg-[#F5F1E8] px-3 py-2.5 text-sm outline-none focus:border-[#16120F]/40" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#6A6258] mb-1.5">Last name</label>
                    <input required className="w-full rounded-xl border border-[#16120F]/15 bg-[#F5F1E8] px-3 py-2.5 text-sm outline-none focus:border-[#16120F]/40" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6A6258] mb-1.5">Work email</label>
                  <input required type="email" className="w-full rounded-xl border border-[#16120F]/15 bg-[#F5F1E8] px-3 py-2.5 text-sm outline-none focus:border-[#16120F]/40" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6A6258] mb-1.5">Subject</label>
                  <select required className="w-full rounded-xl border border-[#16120F]/15 bg-[#F5F1E8] px-3 py-2.5 text-sm outline-none focus:border-[#16120F]/40">
                    <option value="">Select topic</option>
                    <option>Request a demo</option>
                    <option>Product question</option>
                    <option>Security / compliance</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6A6258] mb-1.5">Message</label>
                  <textarea required rows={4} className="w-full rounded-xl border border-[#16120F]/15 bg-[#F5F1E8] px-3 py-2.5 text-sm outline-none focus:border-[#16120F]/40 resize-none" placeholder="Tell us what you are working on..." />
                </div>
                <button type="submit" className="w-full rounded-xl bg-[#16120F] py-3 text-sm font-semibold text-white hover:bg-[#2a2420] transition-colors">
                  Send message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
