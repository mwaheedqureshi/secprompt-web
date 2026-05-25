'use client';

import { motion } from 'framer-motion';
import { Activity, AlertTriangle, CheckCircle2, Gauge, ScanSearch } from 'lucide-react';

const heroVideo = '/SecPrompt_3way_assessment_animation.mp4';

const metrics = [
  {
    label: 'Matched',
    value: '24',
    detail: 'controls verified',
    className: 'border-emerald-400/40 bg-emerald-400/15 text-emerald-100',
    icon: CheckCircle2,
  },
  {
    label: 'Partial',
    value: '7',
    detail: 'need review',
    className: 'border-amber-300/40 bg-amber-300/15 text-amber-100',
    icon: Activity,
  },
  {
    label: 'Contradictions',
    value: '3',
    detail: 'claim conflicts',
    className: 'border-red-400/40 bg-red-400/15 text-red-100',
    icon: AlertTriangle,
  },
  {
    label: 'Confidence',
    value: '92%',
    detail: 'AI verdict',
    className: 'border-cyan-300/40 bg-cyan-300/15 text-cyan-100',
    icon: Gauge,
  },
];

const particles = [
  { left: '9%', top: '22%', delay: 0, duration: 6 },
  { left: '18%', top: '74%', delay: 0.8, duration: 7 },
  { left: '34%', top: '12%', delay: 1.1, duration: 6.5 },
  { left: '58%', top: '18%', delay: 0.4, duration: 8 },
  { left: '76%', top: '68%', delay: 1.5, duration: 7.4 },
  { left: '88%', top: '30%', delay: 0.2, duration: 6.8 },
  { left: '44%', top: '84%', delay: 1.8, duration: 8.2 },
  { left: '66%', top: '48%', delay: 1.2, duration: 6.2 },
];

type AssessmentShowcaseProps = {
  variant?: 'hero' | 'compact';
};

export function AssessmentShowcase({ variant = 'hero' }: AssessmentShowcaseProps) {
  const isHero = variant === 'hero';

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: isHero ? 36 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.div
        className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-primary-600/30 via-secondary-500/25 to-fuchsia-500/30 blur-2xl"
        animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-500 via-secondary-500 to-fuchsia-500 p-[1px] shadow-2xl shadow-primary-950/20">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.45),transparent)]"
          animate={{ x: ['-120%', '120%'] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070B18]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(79,70,229,.35),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,.22),transparent_26%),linear-gradient(180deg,rgba(255,255,255,.08),transparent_38%)]" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:42px_42px]" />

          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="absolute z-10 h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(103,232,249,.9)]"
              style={{ left: particle.left, top: particle.top }}
              animate={{ y: [0, -18, 0], opacity: [0.15, 0.8, 0.15], scale: [0.8, 1.3, 0.8] }}
              transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          <motion.div
            className="absolute left-1/2 top-1/2 z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
            animate={{ scale: [0.72, 1.25], opacity: [0.45, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-300/15"
            animate={{ scale: [0.62, 1.15], opacity: [0.35, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
          />

          <div className="relative z-20 flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl md:px-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                <ScanSearch className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-100/70">SecPrompt Intelligence</p>
                <p className="text-sm font-semibold text-white">Requirement to claim to evidence</p>
              </div>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-100 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.9)]" />
              AI verdict ready
            </div>
          </div>

          <div className={isHero ? 'relative overflow-hidden bg-[#050816] p-0' : 'relative overflow-hidden bg-[#050816] p-0'}>
            <div className="relative mx-auto w-full">
              <motion.div
                className="absolute -inset-4 rounded-[1.75rem] bg-[radial-gradient(circle_at_50%_20%,rgba(103,232,249,.28),transparent_44%),linear-gradient(135deg,rgba(79,70,229,.22),rgba(217,70,239,.16))] blur-2xl"
                animate={{ opacity: [0.45, 0.78, 0.45] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative mx-auto w-full overflow-hidden bg-black shadow-[0_24px_80px_rgba(2,6,23,.42)]">
                <motion.div
                  className="pointer-events-none absolute inset-0 z-20 rounded-2xl border border-cyan-200/20 shadow-[inset_0_1px_0_rgba(255,255,255,.18),0_0_28px_rgba(103,232,249,.16)]"
                  animate={{ boxShadow: ['inset 0 1px 0 rgba(255,255,255,.18), 0 0 20px rgba(103,232,249,.12)', 'inset 0 1px 0 rgba(255,255,255,.22), 0 0 34px rgba(103,232,249,.24)', 'inset 0 1px 0 rgba(255,255,255,.18), 0 0 20px rgba(103,232,249,.12)'] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,.12),transparent_22%,transparent_70%,rgba(2,6,23,.28)),radial-gradient(circle_at_18%_8%,rgba(103,232,249,.16),transparent_30%)]"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                />
                <motion.div
                  className="pointer-events-none absolute -inset-y-12 -left-1/3 z-10 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ['0%', '320%'] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.video
                  className="block h-auto w-full"
                  style={{ display: 'block', width: '100%' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={isHero ? 'auto' : 'metadata'}
                  aria-label="Animated SecPrompt 3-way assessment showing requirements, supplier claims, evidence, and AI verdict correlation."
                >
                  <source src={heroVideo} type="video/mp4" />
                </motion.video>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;

                return (
                  <motion.div
                    key={metric.label}
                    className={`rounded-2xl border px-3 py-2.5 shadow-2xl backdrop-blur-xl ${metric.className}`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + index * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-white/65">{metric.label}</span>
                      <Icon className="h-3.5 w-3.5 text-white/80" />
                    </div>
                    <p className="text-2xl font-bold tracking-tight text-white">{metric.value}</p>
                    <p className="hidden text-[11px] text-white/55 sm:block">{metric.detail}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative z-20 grid gap-3 border-t border-white/10 bg-black/20 p-4 backdrop-blur-xl md:grid-cols-3 md:p-6">
            {['Requirements normalized', 'Claims challenged', 'Evidence traced'].map((label, index) => (
              <motion.div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]" />
                <span className="text-sm font-medium text-white/80">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
