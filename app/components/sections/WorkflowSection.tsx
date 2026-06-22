'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Send, FileSearch, ClipboardCheck } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../animations';

export function WorkflowSection() {
  const steps = [
    {
      num: 1,
      title: 'Define Requirements',
      description:
        'Assess suppliers against your internal controls, regulatory obligations, or industry frameworks.',
      icon: CheckCircle2,
      color: 'from-blue-500 to-blue-600',
    },
    {
      num: 2,
      title: 'Review Supplier Evidence',
      description:
        'Upload questionnaires, audit reports, certifications, policies, and supporting documents.',
      icon: Send,
      color: 'from-purple-500 to-purple-600',
    },
    {
      num: 3,
      title: 'Validate Claims',
      description:
        'Compare supplier statements against available evidence and identify unsupported or partially supported assertions.',
      icon: FileSearch,
      color: 'from-amber-500 to-amber-600',
    },
    {
      num: 4,
      title: 'Generate Explainable Assessments',
      description:
        'Produce findings, risk summaries, and recommendations with clear evidence traceability.',
      icon: ClipboardCheck,
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <section className="relative w-full px-4 py-20 md:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-600">
            Assessment Workflow
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            From Requirements to Assessment Outcomes
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Requirements, supplier claims, supporting evidence, and assessment outcomes in one traceable flow
          </p>
        </motion.div>

        {/* Steps grid - responsive layout */}
        <StaggerContainer delay={0.1}>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:gap-6 lg:grid-cols-4 mb-12">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <StaggerItem key={i} index={i}>
                  <motion.div
                    className="relative group overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 hover:border-primary-300 transition-colors"
                    whileHover={{ y: -8 }}
                  >
                    {/* Step number background */}
                    <motion.div
                      className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Number badge */}
                    <motion.div
                      className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white font-bold text-lg mb-6`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      {step.num}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="mb-4"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    >
                      <StepIcon
                        className={`h-8 w-8 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="relative mb-3 text-xl font-bold text-dark-900">
                      {step.title}
                    </h3>
                    <p className="relative text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${step.color}`}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>

          {/* Timeline connector for desktop */}
          <motion.div
            className="hidden lg:block relative mb-12 h-2 bg-gradient-to-r from-blue-300 via-purple-300 to-emerald-300 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
          />

          {/* Additional detail */}
          <motion.div
            className="rounded-2xl border-2 border-primary-200 bg-gradient-to-r from-primary-50 to-blue-50 p-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
              Result
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-3">
              Audit-Ready Assessment Outcomes
            </h3>
            <p className="max-w-3xl mx-auto text-gray-700 mb-4">
              Every assessment generates a complete decision trail, evidence quality indicators,
              and traceability that supports procurement, risk, security, and audit stakeholders.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-primary-600">
              <CheckCircle2 className="h-5 w-5" />
              Consistent reviews without relying solely on self-attestation
            </div>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
}
