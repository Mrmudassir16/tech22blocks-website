import React from 'react';
import HeroSection from '@/components/HeroSection';
import CompanyIntro from '@/components/CompanyIntro';
import ServicesOverview from '@/components/ServicesOverview';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import WorkingProcessSection from '@/components/WorkingProcessSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import WhyTech22Blocks from '@/components/WhyTech22Blocks';
import LeadershipPreview from '@/components/LeadershipPreview';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Cleaned Editorial Headline & 3D Gyroscopic Star Engine */}
      <HeroSection />

      {/* 2. Who We Are: Techco-Inspired Image & Dual Business Model Composition */}
      <CompanyIntro />

      {/* 3. Our Services: 6-Card Balanced Grid Inspired by Techco */}
      <ServicesOverview />

      {/* 4. Case Studies: Interactive Horizontal Scrolling Showcase */}
      <CaseStudiesSection />

      {/* 5. Working Process: Interactive Overlapping & Expandable Step Pills */}
      <WorkingProcessSection />

      {/* 6. Our Technologies: Categorized Modern Tech Stack Grid */}
      <TechnologiesSection />

      {/* 7. Why Tech22Blocks: Four Value Principles */}
      <WhyTech22Blocks />

      {/* 8. Leadership: Founders Introduction with Genuine Photography */}
      <LeadershipPreview />

      {/* 9. Final Call To Action: Direct Project Consultation Gateway */}
      <FinalCTA />
    </>
  );
}
