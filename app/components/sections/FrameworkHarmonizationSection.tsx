'use client';

import { motion } from 'framer-motion';
import { ClipboardList, FileCheck2, MessageSquareText, ShieldCheck } from 'lucide-react';

const supportedFrameworks = ['NIST CSF 2.0', 'NIST 800-53', 'ISO 27001', 'DORA', 'GDPR'];

const flowSteps = [
  {
    title: 'Requirements',
    description: 'Define the controls, obligations, and evidence expectations for the supplier review.',
    icon: ClipboardList,
  },
  {
    title: 'Supplier Claims',
    description: 'Capture what the supplier says about its security, privacy, and compliance posture.',
    icon: MessageSquareText,
  },
  {
    title: 'Supporting Evidence',
    description: 'Review submitted documents against the stated requirement and supplier claim.',
    icon: FileCheck2,
  },
  {
    title: 'Assessment Outcome',
    description: 'Produce a traceable outcome with support level, rationale, and follow-up actions.',
    icon: ShieldCheck,
  },
];

export function FrameworkHarmonizationSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-20 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-secondary-500/5 blur-3xl" />
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
            Assessment Flow
          </p>
          <h2 className="mb-4 text-4xl font-bold text-dark-900 md:text-5xl">
            From Requirements to Evidence-Based Outcomes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            SecPrompt helps teams compare supplier claims against supporting evidence and produce
            consistent assessment outcomes aligned to the frameworks you actually use.
          </p>
        </motion.div>

        <div className="mb-12 rounded-2xl border border-gray-200 bg-[#F6F8FC] p-4 md:p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Officially supported frameworks
          </p>
          <div className="flex flex-wrap gap-2">
            {supportedFrameworks.map((framework) => (
              <span
                key={framework}
                className="rounded-full border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-800 shadow-sm"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {flowSteps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                {i < flowSteps.length - 1 ? (
                  <div className="absolute left-8 top-full h-4 w-0.5 bg-primary-200 lg:left-full lg:top-12 lg:h-0.5 lg:w-4" />
                ) : null}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Step {i + 1}
                </p>
                <h3 className="mb-3 text-lg font-bold text-dark-900">{step.title}</h3>
                <p className="text-sm leading-6 text-gray-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            ['Traceable', 'Each outcome links back to the requirement, claim, and source evidence.'],
            ['Consistent', 'Review logic is repeatable across suppliers, teams, and assessment cycles.'],
            ['Decision-ready', 'Findings are structured for analyst review, remediation, and reporting.'],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-primary-100 bg-primary-50/60 p-5">
              <h3 className="mb-2 font-bold text-primary-900">{title}</h3>
              <p className="text-sm leading-6 text-primary-800">{description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
