'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ProductDemo from '@/src/components/marketing/ProductDemo';
import { FadeUp } from '../animations';

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F8FC] px-4 pb-20 pt-24 md:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[680px] w-[1200px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
        <div className="absolute right-0 top-28 h-96 w-96 rounded-full bg-primary-500/12 blur-3xl" />
        <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-secondary-500/12 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <FadeUp delay={0}>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight text-dark-900 md:text-6xl lg:text-7xl">
            Supplier Risk Assessment, Automated
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-10">
            <ProductDemo />
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative z-20 mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <motion.a
              href="/demo#contact"
              className="relative z-20 inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 font-semibold text-white opacity-100 shadow-lg shadow-primary-600/20 transition-colors hover:bg-primary-700"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="/demo#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 font-semibold text-dark-900 shadow-sm transition-colors hover:border-primary-300 hover:text-primary-700"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Run an Assessment
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
