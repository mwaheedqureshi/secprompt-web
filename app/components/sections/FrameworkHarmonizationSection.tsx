'use client';

import { motion } from 'framer-motion';
import { GitBranch, Layers3, TrendingUp } from 'lucide-react';

export function FrameworkHarmonizationSection() {
  const frameworks = ['MFA', 'SOC 2', 'ISO 27001', 'NIST', 'PCI', 'CAIQ', 'DORA'];
  const evidence = ['Access Controls', 'Encryption', 'Incident Response'];

  return (
    <section className="relative w-full px-4 py-20 md:px-8 lg:px-12 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl" />
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
            Framework Multiplication
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            One Evidence Set, Multiple Frameworks
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Harmonize your control graph to satisfy NIST, ISO, SOC2, GDPR, DORA, PCI, and custom frameworks
            with a single unified evidence repository.
          </p>
        </motion.div>

        {/* Main visualization */}
        <div className="relative">
          {/* Evidence at center */}
          <motion.div
            className="relative mb-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Central evidence cards */}
            <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
              {evidence.map((ev, i) => (
                <motion.div
                  key={i}
                  className="rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 border-2 border-primary-300 px-6 py-3 font-semibold text-primary-900"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  {ev}
                </motion.div>
              ))}
            </div>

            {/* Framework connections - top row */}
            <div className="grid grid-cols-7 gap-3 md:gap-4 mb-8">
              {frameworks.slice(0, 4).map((fw, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {/* Connection line */}
                  <motion.div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary-400 to-transparent"
                    initial={{ height: 0 }}
                    whileInView={{ height: 64 }}
                    transition={{ delay: i * 0.15 + 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  />

                  {/* Framework card */}
                  <motion.div
                    className="rounded-lg border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-blue-50 p-4 text-center h-24 flex items-center justify-center cursor-pointer hover:border-primary-400 transition-colors"
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(79, 70, 229, 0.2)' }}
                  >
                    <span className="font-bold text-primary-900 text-sm">{fw}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Framework connections - bottom row */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {frameworks.slice(4).map((fw, i) => (
                <motion.div
                  key={i + 4}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {/* Connection line */}
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-t from-secondary-400 to-transparent"
                    initial={{ height: 0 }}
                    whileInView={{ height: 64 }}
                    transition={{ delay: i * 0.15 + 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  />

                  {/* Framework card */}
                  <motion.div
                    className="rounded-lg border-2 border-secondary-200 bg-gradient-to-br from-secondary-50 to-cyan-50 p-4 text-center h-24 flex items-center justify-center cursor-pointer hover:border-secondary-400 transition-colors"
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(6, 182, 212, 0.2)' }}
                  >
                    <span className="font-bold text-secondary-900 text-sm">{fw}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits grid */}
          <motion.div
            className="mt-20 grid gap-6 md:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Reduce Assessment Burden',
                description: 'One supplier assessment covers multiple framework obligations',
                icon: Layers3,
              },
              {
                title: 'Eliminate Duplicates',
                description: 'Stop collecting the same evidence for different compliance programs',
                icon: GitBranch,
              },
              {
                title: 'Scale Compliance',
                description: 'Add new frameworks without re-collecting evidence',
                icon: TrendingUp,
              },
            ].map((benefit, i) => {
              const Icon = benefit.icon;

              return (
              <motion.div
                key={i}
                className="rounded-xl border-2 border-primary-200 bg-white p-6 hover:border-primary-400 hover:shadow-lg transition-all"
                whileHover={{ y: -4 }}
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
