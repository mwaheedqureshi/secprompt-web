'use client';

import { HeroSection } from '@/app/components/sections/HeroSection';
import { AIDifferentiationSection } from '@/app/components/sections/AIDifferentiationSection';
import { ThreeWayAssessmentSection } from '@/app/components/sections/ThreeWayAssessmentSection';
import { CapabilitiesGridSection } from '@/app/components/sections/CapabilitiesGridSection';
import { LiveRiskIntelligenceSection } from '@/app/components/sections/LiveRiskIntelligenceSection';
import { FrameworkHarmonizationSection } from '@/app/components/sections/FrameworkHarmonizationSection';
import { WorkflowSection } from '@/app/components/sections/WorkflowSection';
import { CTASection } from '@/app/components/sections/CTASection';

export default function Home() {
  return (
    <main className="w-full bg-white">
      {/* Hero - Premium animated GIF showcase */}
      <HeroSection />

      {/* AI Differentiation - Dark section with 3 core differentiators */}
      <AIDifferentiationSection />

      {/* Evidence Assessment Engine - Core technology showcase with GIF + breakdown */}
      <ThreeWayAssessmentSection />

      {/* Capabilities Grid - 8 enterprise features */}
      <CapabilitiesGridSection />

      {/* Live Risk Intelligence - Realistic dashboard mockup */}
      <LiveRiskIntelligenceSection />

      {/* Framework Harmonization - Visual control mapping */}
      <FrameworkHarmonizationSection />

      {/* Workflow - 4-step enterprise process */}
      <WorkflowSection />

      {/* CTA Banner - Large premium call-to-action */}
      <CTASection />
    </main>
  );
}
