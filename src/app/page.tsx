import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import CompanyIntro from '@/components/CompanyIntro';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import WorkingProcessSection from '@/components/WorkingProcessSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import WhyTech22Blocks from '@/components/WhyTech22Blocks';
import FinalCTA from '@/components/FinalCTA';
import { SectionDividerBeam, AmbientSideRails } from '@/components/design-system/AtmosphericPerimeter';

export default function HomePage() {
  return (
    <>
      {/* Ambient Side Rails with moving vertical beams & corner reticles */}
      <AmbientSideRails />

      {/* 1. Hero: Clean Brand Headline & 3D Gyroscopic Star Engine */}
      <HeroSection />

      <SectionDividerBeam />

      {/* 2. Our Services: Bento Cards & Sub-Service Lists (How We Can Help You) */}
      <ServicesOverview />

      <SectionDividerBeam />

      {/* 3. About Us: Techco Mission & Goal with Portrait & Funfact Capsule */}
      <CompanyIntro />

      <SectionDividerBeam />

      {/* 4. Case Studies: Stacking / Overlapping Sticky Cards (Our latest Case Studies) */}
      <CaseStudiesSection />

      <SectionDividerBeam />

      {/* 5. Working Process: Accordion & Overlapping Oval Rings (Our Approach) */}
      <WorkingProcessSection />

      <SectionDividerBeam />

      {/* 6. Technologies: Pill Tab Switcher & Tech Grid (Technologies We Deploy) */}
      <TechnologiesSection />

      <SectionDividerBeam />

      {/* 7. Why Tech22Blocks: Four Value Principles */}
      <WhyTech22Blocks />

      <SectionDividerBeam />

      {/* 8. Final Call To Action: Direct Project Consultation Gateway */}
      <FinalCTA />
    </>
  );
}
