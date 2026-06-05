'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { FadeUp } from '../animations';
import { AssessmentShowcase } from './AssessmentShowcase';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F8FC] px-4 pb-24 pt-28 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[680px] w-[1200px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
        <div className="absolute right-0 top-28 h-96 w-96 rounded-full bg-primary-500/12 blur-3xl" />
        <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-secondary-500/12 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[92rem]">
        <div className="grid items-center gap-8 lg:grid-cols-[0.62fr_1.38fr]">
          <div className="relative z-20">
            <FadeUp delay={0}>
              <motion.div
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/85 px-4 py-2 text-sm font-semibold text-primary-900 shadow-sm backdrop-blur-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-white">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </span>
                AI-assisted supplier risk assessment
              </motion.div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-5xl font-bold leading-[0.98] tracking-tight text-dark-900 md:text-6xl lg:text-7xl">
                From supplier claims to verified assurance.
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                SecPrompt verifies your security requirements against supplier claims and
                real-world evidence, detecting gaps, contradictions, and unsupported
                assurances before they become third-party risk.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="relative z-20 mt-9 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  href="/demo"
                  className="relative z-20 inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 font-semibold text-white opacity-100 shadow-lg shadow-primary-600/20 transition-colors hover:bg-primary-700"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="/#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-dark-900 shadow-sm transition-colors hover:border-primary-300 hover:text-primary-700"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Platform
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-10 max-w-xl">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    ['24', 'supported controls'],
                    ['3', 'contradictions'],
                    ['92%', 'confidence'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                      <p className="text-2xl font-bold text-dark-900">{value}</p>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Built for compliance teams in</p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                    <span>Financial Services</span>
                    <span>·</span>
                    <span>Healthcare</span>
                    <span>·</span>
                    <span>Critical Infrastructure</span>
                    <span>·</span>
                    <span>Professional Services</span>
                    <span>·</span>
                    <span>Logistics</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <AssessmentShowcase />
        </div>
      </div>
    </section>
  );
}
