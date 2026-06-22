'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ClipboardList, Database } from 'lucide-react';
import { StaggerContainer, StaggerItem, cardHoverVariants } from '../animations';

export function EvidenceDifferentiationSection() {
  const cards = [
    {
      icon: Database,
      title: 'Unsupported Assertions',
      description: 'Find supplier statements that are not backed by the submitted documentation.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: CheckCircle2,
      title: 'Missing Evidence',
      description: 'See where policies, certificates, reports, or attestations are absent or incomplete.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: ClipboardList,
      title: 'Areas for Review',
      description: 'Prioritize partial coverage, documentation gaps, and claims that need assessor follow-up.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="relative bg-dark-900 px-4 py-20 md:px-8 lg:px-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary-400">
            Why Evidence Matters
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Most assessments rely on supplier questionnaires.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              SecPrompt validates the evidence behind them.
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <StaggerContainer delay={0.2}>
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <StaggerItem key={i}>
                  <motion.div
                    className="group relative h-full overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8 hover:border-primary-500/50 transition-colors"
                    variants={cardHoverVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    {/* Animated background glow on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Icon with glow */}
                    <motion.div
                      className="relative mb-6 inline-flex p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Icon className="h-6 w-6 text-cyan-300" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{card.description}</p>
                    </div>

                    {/* Bottom accent */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${card.color}`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg mb-6">
            SecPrompt evaluates supplier statements alongside the supporting documentation used to substantiate those claims.
          </p>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-primary-600/20 border border-primary-500/50 px-6 py-2 text-primary-300"
            animate={{ boxShadow: ['0 0 0 0 rgba(79, 70, 229, 0.7)', '0 0 0 10px rgba(79, 70, 229, 0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-sm font-medium">Evidence-based assurance review</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
