'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

export function LiveRiskIntelligenceSection() {
  return (
    <section id="security" className="relative w-full px-4 py-20 md:px-8 lg:px-12 bg-gradient-to-b from-dark-900 to-[#050816]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-500/5 rounded-full blur-3xl" />
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary-400">
            Assessment Workspace
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Evidence Review and Findings Dashboard
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Review supplier claims, evidence quality, findings, and traceability in one unified workspace
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Dashboard header */}
          <div className="border-b border-gray-800 p-6 md:p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Active Assessment</p>
                <h3 className="text-2xl font-bold text-white">Acme Corp Security Posture</h3>
              </div>
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/50 px-4 py-2"
                animate={{ boxShadow: ['0 0 0 0 rgba(16, 185, 129, 0.7)', '0 0 0 10px rgba(16, 185, 129, 0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-emerald-200">Verification Complete</span>
              </motion.div>
            </div>
          </div>

          {/* Dashboard grid */}
          <div className="grid gap-6 p-6 md:p-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: 'Requirements Verified',
                value: '24',
                description: 'across frameworks',
                icon: CheckCircle2,
                color: 'emerald',
              },
              {
                label: 'Findings',
                value: '7',
                description: 'gaps and contradictions',
                icon: AlertCircle,
                color: 'amber',
              },
              {
                label: 'Evidence Strength',
                value: '87%',
                description: 'average confidence',
                icon: BarChart3,
                color: 'blue',
              },
              {
                label: 'Review Status',
                value: '4',
                description: 'awaiting analyst sign-off',
                icon: TrendingUp,
                color: 'purple',
              },
            ].map((stat, i) => {
              const Icon = stat.icon;
              const bgColorMap = {
                emerald: 'bg-emerald-500/10 border-emerald-500/30',
                amber: 'bg-amber-500/10 border-amber-500/30',
                blue: 'bg-blue-500/10 border-blue-500/30',
                purple: 'bg-purple-500/10 border-purple-500/30',
              };

              return (
                <motion.div
                  key={i}
                  className={`rounded-xl border p-4 ${bgColorMap[stat.color as keyof typeof bgColorMap]}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-gray-300 uppercase tracking-wide">{stat.label}</p>
                    <Icon className="h-4 w-4 text-cyan-300" />
                  </div>
                  <div className="mb-2">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                  </div>
                  <p className="text-xs text-gray-400">{stat.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Results table mockup */}
          <div className="border-t border-gray-800 p-6 md:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Key Findings</p>
            <div className="space-y-3">
              {[
                {
                  control: 'SEC-04',
                  title: 'Access Management',
                  status: 'Compliant',
                  confidence: '95%',
                  statusColor: 'emerald',
                },
                {
                  control: 'SEC-09',
                  title: 'Incident Response SLA',
                  status: 'Gap',
                  confidence: '78%',
                  statusColor: 'red',
                },
                {
                  control: 'SEC-12',
                  title: 'Subprocessor Controls',
                  status: 'Needs Review',
                  confidence: '82%',
                  statusColor: 'amber',
                },
              ].map((finding, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-primary-500/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-bold text-gray-300">{finding.control}</span>
                      <span className="text-sm text-gray-400">{finding.title}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-400">
                      Confidence: <span className="text-gray-300 font-semibold">{finding.confidence}</span>
                    </span>
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        finding.statusColor === 'emerald'
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : finding.statusColor === 'red'
                          ? 'bg-red-500/20 text-red-300'
                          : 'bg-amber-500/20 text-amber-300'
                      }`}
                    >
                      {finding.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom action bar */}
          <div className="border-t border-gray-800 p-6 md:p-8 flex items-center justify-between flex-wrap gap-4">
            <div className="text-sm text-gray-400">
              Last updated:{' '}
              <span className="text-gray-300 font-semibold">2 minutes ago</span>
            </div>
            <motion.button
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-2 font-semibold text-white hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Full Assessment
            </motion.button>
          </div>
        </motion.div>

        {/* Feature callout */}
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Evidence Review Status',
              description: 'Assessment outcomes update as supplier evidence is reviewed',
            },
            {
              title: 'Complete Audit Trail',
              description: 'Every decision, rationale, and evidence reference is logged and traceable',
            },
            {
              title: 'Human Review Workflow',
              description: 'Analysts validate findings before they inform risk decisions',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 hover:border-primary-500/50 transition-colors"
              whileHover={{ y: -4 }}
            >
              <p className="text-sm font-semibold text-gray-300 mb-2">{feature.title}</p>
              <p className="text-xs text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
