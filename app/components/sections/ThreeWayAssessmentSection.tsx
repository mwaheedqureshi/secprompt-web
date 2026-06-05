'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, Brain, CheckCircle2, Database, FileSearch, ShieldCheck } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../animations';
import { AssessmentShowcase } from './AssessmentShowcase';

const steps = [
  {
    title: 'Requirement',
    description: 'Security obligation is normalized into a testable control.',
    icon: ShieldCheck,
    tone: 'bg-primary-50 text-primary-700 border-primary-200',
  },
  {
    title: 'Supplier Statements',
    description: 'Supplier responses, attestations, and declarations are collected and catalogued.',
    icon: Database,
    tone: 'bg-violet-50 text-violet-700 border-violet-200',
  },
  {
    title: 'Evidence',
    description: 'Proof is linked to certificates, policies, reports, and artifacts.',
    icon: FileSearch,
    tone: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  {
    title: 'Assessment Analysis',
    description: 'Identifies support, gaps, and contradictions across requirements and evidence.',
    icon: Brain,
    tone: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    title: 'Risk Decision',
    description: 'A human-reviewable verdict is produced with traceability.',
    icon: CheckCircle2,
    tone: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
];

const reasoning = [
  { label: 'Claim support', value: 'Strong', width: '92%', color: 'bg-emerald-500' },
  { label: 'Evidence freshness', value: 'Current', width: '86%', color: 'bg-cyan-500' },
  { label: 'Contradiction risk', value: '3 found', width: '31%', color: 'bg-red-500' },
];

export function ThreeWayAssessmentSection() {
  return (
    <section id="assessment" className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F6F8FC] px-4 py-24 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-secondary-500/10 blur-3xl" />
        <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-600">Core Differentiator</p>
          <h2 className="text-4xl font-bold tracking-tight text-dark-900 md:text-5xl">
            Requirements. Evidence. Decisions.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            SecPrompt validates supplier statements against your security requirements and submitted evidence to produce explainable findings your team can defend.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <AssessmentShowcase variant="compact" />

          <motion.div
            className="rounded-3xl border border-gray-200 bg-white p-5 shadow-xl shadow-gray-900/5 md:p-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Assessment Flow</p>
                <h3 className="mt-1 text-xl font-bold text-dark-900">MFA control verification</h3>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                92% confidence
              </span>
            </div>

            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.title}
                    className="relative flex gap-3 rounded-2xl border border-gray-200 bg-white p-4"
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${step.tone}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-bold text-dark-900">{step.title}</p>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <motion.span
                        className="absolute -bottom-3 left-8 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-primary-600"
                        animate={{ y: [0, 2, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                      >
                        <ArrowRight className="h-3.5 w-3.5 rotate-90" />
                      </motion.span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <StaggerContainer delay={0.1}>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <StaggerItem>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-900/5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <AlertTriangle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Contradiction Detection</p>
                    <h3 className="text-lg font-bold text-dark-900">Unsupported assurance flagged</h3>
                  </div>
                </div>
                <p className="text-sm leading-7 text-gray-600">
                  Supplier claims quarterly access reviews, but submitted evidence references annual review cadence. SecPrompt labels the finding, cites the source, and routes it for analyst validation.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-900/5">
                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-500">Confidence Indicators</p>
                <div className="space-y-5">
                  {reasoning.map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-semibold text-dark-900">{item.label}</span>
                        <span className="text-gray-500">{item.value}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                        <motion.div
                          className={`h-full rounded-full ${item.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: item.width }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
