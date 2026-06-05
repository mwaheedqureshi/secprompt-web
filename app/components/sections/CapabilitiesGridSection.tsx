'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  GitBranch,
  FileText,
  Users,
  AlertTriangle,
  TrendingUp,
  CheckSquare,
} from 'lucide-react';
import { StaggerContainer, StaggerItem, cardHoverVariants } from '../animations';

export function CapabilitiesGridSection() {
  const capabilities = [
    {
      icon: Brain,
      title: 'Evidence-Based Assessment',
      description:
        'Validates supplier requirements, supplier statements, and supporting evidence to produce explainable assessment outcomes.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: GitBranch,
      title: 'Unified Control Library',
      description:
        'Normalize and map requirements across security, privacy, and regulatory frameworks.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FileText,
      title: 'Evidence Intelligence',
      description:
        'Automatically identifies relevant evidence, supporting artifacts, and assessment inputs from supplier documentation.',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Users,
      title: 'Human-in-the-Loop Review',
      description:
        'Analyst validation and approval before findings become actionable risks.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: AlertTriangle,
      title: 'AI Risk Reasoning',
      description:
        'Validates evidence, identifies gaps, and detects contradictions across supplier documentation.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: GitBranch,
      title: 'Framework Mapping',
      description:
        'Reuse evidence across multiple frameworks including ISO 27001, NIST, DORA, PCI DSS, and GDPR.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: 'Assessment Confidence',
      description:
        'Transparent confidence indicators help reviewers understand the reliability of assessment outcomes.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: CheckSquare,
      title: 'Audit-Ready Reporting',
      description:
        'Evidence traceability, decision history, and assessment rationale in every report.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section id="capabilities" className="relative w-full px-4 py-20 md:px-8 lg:px-12 bg-white">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-primary-500/5 to-transparent blur-3xl" />
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary-600">
            Enterprise Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Built for Security Leaders
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Comprehensive platform to verify, assess, and audit third-party risk with intelligence
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <StaggerContainer delay={0.1}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <StaggerItem key={i} index={i}>
                  <motion.div
                    className="group relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 hover:border-primary-300 transition-colors"
                    variants={cardHoverVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    {/* Gradient accent on hover */}
                    <motion.div
                      className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Icon with background */}
                    <motion.div
                      className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${cap.color} bg-opacity-10`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    >
                      <Icon className="h-6 w-6 text-primary-700" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="mb-2 font-bold text-dark-900">{cap.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{cap.description}</p>

                    {/* Bottom accent line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${cap.color}`}
                      initial={{ width: '0%' }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Bottom feature highlight */}
        <motion.div
          className="mt-16 rounded-2xl border-2 border-primary-200 bg-gradient-to-r from-primary-50 to-blue-50 p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 mb-3">
            Platform Coverage
          </p>
          <h3 className="text-2xl font-bold text-dark-900 mb-3">
            Enterprise-Grade Security & Compliance
          </h3>
          <p className="max-w-3xl mx-auto text-gray-700">
            SecPrompt integrates with your existing security stack, providing a unified platform
            for third-party risk assessment, evidence management, and audit compliance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
