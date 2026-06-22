'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Eye,
  Search,
  ClipboardCheck,
  UserCheck,
} from 'lucide-react';

const trustCards = [
  {
    icon: Search,
    title: 'Evidence-Based',
    description:
      'Every finding links back to supporting evidence. No conclusions without documentation.',
  },
  {
    icon: Eye,
    title: 'Explainable',
    description:
      'Every assessment includes reasoning, evidence provenance, and confidence drivers.',
  },
  {
    icon: UserCheck,
    title: 'Human Reviewed',
    description:
      'Structured findings support human decision making. Final decisions stay with your team.',
  },
  {
    icon: ClipboardCheck,
    title: 'Auditable',
    description:
      'Complete assessment history and review activity are preserved for audit purposes.',
  },
];

const frameworks = [
  {
    name: 'NIST CSF 2.0',
    subtitle: 'Cybersecurity Framework',
    description:
      'Control coverage and cybersecurity governance mapped to the NIST framework functions.',
  },
  {
    name: 'NIST 800-53',
    subtitle: 'Security and Privacy Controls',
    description:
      'Detailed security and privacy control requirements for structured supplier assessments.',
  },
  {
    name: 'ISO 27001',
    subtitle: 'Information Security Management',
    description:
      'Information security management requirements for evaluating supplier control maturity.',
  },
  {
    name: 'DORA',
    subtitle: 'Digital Operational Resilience Act',
    description:
      'Operational resilience and third-party oversight for financial services compliance.',
  },
  {
    name: 'GDPR',
    subtitle: 'Data Protection',
    description:
      'Data protection obligations for processor oversight, security measures, and accountability.',
  },
];

const flowSteps = [
  {
    step: '01',
    label: 'Requirements',
    description:
      'Define assessment scope, control requirements, and applicable frameworks.',
  },
  {
    step: '02',
    label: 'Supplier Claims',
    description:
      'Collect and catalogue supplier-submitted security claims and questionnaire responses.',
  },
  {
    step: '03',
    label: 'Evidence Review',
    description:
      'Review submitted evidence documents, certificates, and supporting materials for claim support and completeness.',
  },
  {
    step: '04',
    label: 'Contradiction Detection',
    description:
      'Identify conflicts between supplier claims and documented evidence.',
  },
  {
    step: '05',
    label: 'Risk Evaluation',
    description:
      'Risk evaluation based on evidence quality, coverage gaps, and contradiction severity.',
  },
  {
    step: '06',
    label: 'Human Review',
    description:
      'Qualified assessors review findings, validate conclusions, and apply professional judgement.',
  },
  {
    step: '07',
    label: 'Final Recommendation',
    description:
      'Structured assessment report with risk rating, evidence references, and remediation guidance.',
  },
];

const claimValidations = [
  { claim: 'MFA enabled across all systems', result: 'Partially Supported', status: 'partial' },
  { claim: 'DORA ICT register maintained', result: 'Partially Supported', status: 'partial' },
  { claim: 'Patching within 30 days', result: 'Contradicted', status: 'contradicted' },
  { claim: 'EU Data Residency', result: 'Partially Supported', status: 'partial' },
];

const explainabilityFeatures = [
  'Source document reference',
  'Evidence citations with page references',
  'Contradictions flagged and explained',
  'Evidence strength rating',
  'Confidence rationale',
  'Full audit trail with timestamps',
  'Assessor review notes',
];

const trustPoints = [
  'Evidence-based conclusions',
  'Transparent methodology',
  'Human review workflow',
  'Audit-ready reporting',
  'Standards-aligned assessment model',
];

function CheckIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6l3 3 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatusBadge({ status, result }: { status: string; result: string }) {
  const styles: Record<string, string> = {
    partial:
      'bg-amber-50 text-amber-700 border-amber-200',
    unsupported:
      'bg-red-50 text-red-700 border-red-200',
    contradicted:
      'bg-red-100 text-red-800 border-red-300',
    supported:
      'bg-emerald-50 text-emerald-700 border-emerald-200',
  };
  const dotStyles: Record<string, string> = {
    partial: 'bg-amber-500',
    unsupported: 'bg-red-500',
    contradicted: 'bg-red-600',
    supported: 'bg-emerald-500',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${styles[status] ?? styles.partial}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[status] ?? dotStyles.partial}`} />
      {result}
    </span>
  );
}

export default function MethodologyPage() {
  return (
    <main className="w-full bg-white">
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden px-4 py-24 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-primary-500/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
              Assessment Methodology
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight text-dark-900 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Assessment Methodology{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              You Can Explain
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            SecPrompt combines evidence review, supplier claim validation, assessment confidence,
            traceability, and human review to produce transparent and auditable
            third-party risk assessments.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/demo#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-600/20 transition-colors hover:bg-primary-700"
            >
              View Sample Assessment
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/demo#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-dark-900 transition-colors hover:border-primary-300 hover:text-primary-700"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY TRUST SECPROMPT ── */}
      <section className="w-full bg-[#F6F8FC] px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary-600">
              Trust Framework
            </p>
            <h2 className="text-3xl font-bold text-dark-900 md:text-4xl">
              Why Trust SecPrompt
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-bold text-dark-900">{card.title}</h3>
                  <p className="text-sm leading-6 text-gray-600">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY ALIGNMENT ── */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-20 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary-500/4 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary-500/4 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary-600">
              Standards Alignment
            </p>
            <h2 className="mb-4 text-3xl font-bold text-dark-900 md:text-4xl">
              Built on Industry-Recognized Principles
            </h2>
          </motion.div>

          <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {frameworks.map((fw, i) => (
              <motion.div
                key={fw.name}
                className="rounded-2xl border-2 border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-primary-200 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="mb-3 inline-block rounded-lg bg-primary-50 px-3 py-1.5 text-sm font-bold text-primary-700">
                  {fw.name}
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {fw.subtitle}
                </p>
                <p className="text-sm leading-6 text-gray-600">{fw.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-2xl border border-primary-200 bg-primary-50 px-8 py-5 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm leading-7 text-primary-800">
              <span className="font-semibold">Note: </span>
              SecPrompt supports assessment alignment for the frameworks shown above while applying
              evidence review, claim validation, and contradiction analysis. SecPrompt is not a
              certification provider and does not issue compliance certifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── HOW ASSESSMENTS WORK ── */}
      <section className="w-full bg-[#F6F8FC] px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary-600">
              Assessment Process
            </p>
            <h2 className="mb-4 text-3xl font-bold text-dark-900 md:text-4xl">
              How Assessments Work
            </h2>
            <p className="text-lg text-gray-600">
              A structured, reproducible process that delivers consistent and defensible outcomes.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute bottom-7 left-7 top-7 w-0.5 bg-gradient-to-b from-primary-300 via-primary-200 to-primary-100 md:left-9" />

            <div className="space-y-5">
              {flowSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  className="relative flex gap-4 md:gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary-200 bg-white text-sm font-bold text-primary-600 shadow-sm md:h-[72px] md:w-[72px]">
                    {step.step}
                  </div>
                  <div className="flex flex-1 items-center rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-primary-300 hover:shadow-md">
                    <div>
                      <h3 className="mb-1 font-bold text-dark-900">{step.label}</h3>
                      <p className="text-sm leading-6 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLAIM VALIDATION ── */}
      <section className="w-full bg-white px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary-600">
              Claim Validation
            </p>
            <h2 className="mb-4 text-3xl font-bold text-dark-900 md:text-4xl">
              Trust But Verify
            </h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              SecPrompt cross-references every supplier claim against submitted evidence,
              flagging gaps, contradictions, and unsupported assertions.
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50 px-6 py-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Supplier Claim
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Assessment Result
              </span>
            </div>
            {claimValidations.map((row, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-2 items-center border-b border-gray-100 px-6 py-4 transition-colors last:border-b-0 hover:bg-gray-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.07 + 0.3 }}
                viewport={{ once: true }}
              >
                <span className="pr-4 text-sm text-dark-900">{row.claim}</span>
                <span>
                  <StatusBadge status={row.status} result={row.result} />
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="mt-6 text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            Assessment results are based on evidence analysis and do not constitute legal or
            compliance opinions.
          </motion.p>
        </div>
      </section>

      {/* ── EXPLAINABILITY ── */}
      <section className="w-full bg-[#F6F8FC] px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="mb-14 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary-600">
              Full Traceability
            </p>
            <h2 className="mb-4 text-3xl font-bold text-dark-900 md:text-4xl">
              Every Finding Can Be Traced
            </h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              No black-box conclusions. Every assessment output includes complete evidence
              provenance so you can stand behind every finding.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {explainabilityFeatures.map((feature, i) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-primary-300 hover:shadow-md"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                  <CheckIcon />
                </div>
                <span className="text-sm font-medium text-dark-900">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HUMAN-IN-THE-LOOP ── */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-20 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-primary-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary-600">
                Human Governance
              </p>
              <h2 className="mb-6 text-3xl font-bold text-dark-900 md:text-4xl">
                Evidence Review, Human Governed
              </h2>
              <p className="mb-6 text-lg leading-8 text-gray-600">
                SecPrompt structures assessment evidence but keeps humans in control of final decisions,
                risk acceptance, escalation, and remediation tracking.
              </p>
              <p className="text-base leading-7 text-gray-500">
                SecPrompt reviews evidence at scale, surfacing contradictions,
                and showing confidence drivers. Human assessors then review, validate, challenge, and
                approve every final recommendation. No risk decision is made without human
                oversight.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl border-2 border-secondary-200 bg-secondary-50 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-secondary-800">Platform</span>
                  <span className="rounded-full bg-secondary-200 px-3 py-1 text-xs font-semibold text-secondary-800">
                    Accelerates
                  </span>
                </div>
                <p className="text-sm leading-6 text-secondary-700">
                  Evidence review, claim matching, contradiction detection, and confidence`r`n                  indicators across submitted documents.
                </p>
              </div>
              <div className="rounded-2xl border-2 border-primary-200 bg-primary-50 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary-800">Human</span>
                  <span className="rounded-full bg-primary-200 px-3 py-1 text-xs font-semibold text-primary-800">
                    Governs
                  </span>
                </div>
                <p className="text-sm leading-6 text-primary-700">
                  Final risk decisions, risk acceptance, escalation, and remediation sign-off —
                  always under qualified human oversight.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY WHITEPAPER ── */}
      <section className="w-full bg-[#F6F8FC] px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            className="overflow-hidden rounded-3xl border border-primary-200 bg-white shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6">
              <div className="flex items-center justify-center gap-3 text-white">
                <BookOpen className="h-6 w-6" />
                <span className="text-lg font-bold">
                  SecPrompt Assessment Methodology v1.0
                </span>
              </div>
            </div>
            <div className="px-8 py-10">
              <p className="mb-3 text-base leading-7 text-gray-600">
                Detailed explanation of scoring methodology, control coverage analysis, evidence
                weighting, confidence rating, claim validation, residual risk calculation, and
                human review processes.
              </p>
              <p className="mb-8 text-sm italic text-gray-400">
                Whitepaper available on request. Contact us to receive the full methodology
                document.
              </p>
              <Link
                href="/demo#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-8 py-4 font-semibold text-white shadow-lg shadow-primary-600/20 transition-colors hover:bg-primary-700"
              >
                Request Whitepaper
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST FOOTER ── */}
      <section className="w-full bg-[#0F0F0F] px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-10 text-2xl font-bold text-white md:text-3xl">
              Why Security Teams Trust SecPrompt
            </h2>

            <div className="mx-auto mb-12 max-w-sm space-y-4 text-left">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={point}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                    <CheckIcon />
                  </div>
                  <span className="text-base text-white/85">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-primary-600 shadow-lg transition-colors hover:bg-gray-100"
              >
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
