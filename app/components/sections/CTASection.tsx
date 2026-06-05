'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative w-full px-4 py-20 md:px-8 lg:px-12 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -right-96 -top-96 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -left-96 -bottom-96 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to verify supplier assurance?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Join enterprise security teams using SecPrompt to transform third-party risk
          management from reactive questionnaires to intelligent, evidence-based assurance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/demo"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-primary-600 hover:bg-gray-100 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Demo
            <ArrowRight className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="/product"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-bold text-white hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Platform
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-4 flex-wrap text-white/80 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span>✓ GDPR Ready</span>
          <span className="text-white/40">•</span>
          <span>✓ Enterprise Support</span>
        </motion.div>
      </div>
    </section>
  );
}

export function EnhancedFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      {/* Main footer content */}
      <div className="px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Brand */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
                  S
                </span>
                <span className="text-lg font-bold text-dark-900">SecPrompt</span>
              </div>
              <p className="text-sm text-gray-600 max-w-xs mb-4 leading-relaxed">
                AI-powered third party risk management. Human-verified. Audit-ready.
              </p>

            </motion.div>

            {/* Product */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <p className="font-semibold text-dark-900 mb-4 text-sm uppercase tracking-wide">
                Product
              </p>
              <div className="space-y-3 text-sm">
                <a href="/product" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Features
                </a>
                <a href="#assessment" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Assessment Process
                </a>
                <a href="/security" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Security
                </a>
                <a href="/demo" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Book a Demo
                </a>
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <p className="font-semibold text-dark-900 mb-4 text-sm uppercase tracking-wide">
                Solutions
              </p>
              <div className="space-y-3 text-sm">
                <a href="/solutions" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Security Teams
                </a>
                <a href="/solutions" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  GRC Programs
                </a>
                <a href="/solutions" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Risk Management
                </a>
                <a href="/solutions" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Compliance
                </a>
              </div>
            </motion.div>

            {/* Company */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <p className="font-semibold text-dark-900 mb-4 text-sm uppercase tracking-wide">
                Company
              </p>
              <div className="space-y-3 text-sm">
                <a href="/company" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  About
                </a>
                <a href="/company" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Blog
                </a>
                <a href="/company" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Careers
                </a>
                <a href="/company" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Contact
                </a>
              </div>
            </motion.div>

            {/* Legal */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <p className="font-semibold text-dark-900 mb-4 text-sm uppercase tracking-wide">
                Legal
              </p>
              <div className="space-y-3 text-sm">
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Privacy
                </a>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Terms
                </a>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Security
                </a>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors block">
                  Compliance
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom divider */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-gray-500">
                © 2026 SecPrompt AB, Sweden. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Systems Operational
                </span>
                <span>Version 1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
