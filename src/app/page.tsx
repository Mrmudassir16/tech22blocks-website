import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import CompanyIntro from '@/components/CompanyIntro';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import IndustriesSection from '@/components/IndustriesSection';
import WorkingProcessSection from '@/components/WorkingProcessSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import WhyTech22Blocks from '@/components/WhyTech22Blocks';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Clean Brand Headline & 3D Gyroscopic Star Engine */}
      <HeroSection />

      {/* 2. Our Services: Bento Cards & Sub-Service Lists (How We Can Help You) */}
      <ServicesOverview />

      {/* 3. About Us: Techco Mission & Goal with Portrait & Funfact Capsule */}
      <CompanyIntro />

      {/* 4. Case Studies: Stacking / Overlapping Sticky Cards (Our latest Case Studies) */}
      <CaseStudiesSection />

      {/* 5. Industries We Serve (Inspired by SVSS) */}
      <IndustriesSection />

      {/* 6. Working Process: Accordion & Overlapping Oval Rings (Our Approach) */}
      <WorkingProcessSection />

      {/* 7. Technologies: Pill Tab Switcher & Tech Grid (Technologies We Deploy) */}
      <TechnologiesSection />

      {/* 8. Why Tech22Blocks: Four Value Principles */}
      <WhyTech22Blocks />

      {/* 9. Final Call To Action: Direct Project Consultation Gateway */}
      <FinalCTA />
    </>
  );
}
