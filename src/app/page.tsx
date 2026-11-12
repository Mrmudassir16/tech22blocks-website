import React from 'react';
import HeroSection from '@/components/HeroSection';
import RecognitionStrip from '@/components/RecognitionStrip';
import CompanyIntro from '@/components/CompanyIntro';
import ServicesOverview from '@/components/ServicesOverview';
import FeaturedProduct from '@/components/FeaturedProduct';
import WhyTech22Blocks from '@/components/WhyTech22Blocks';
import SelectedWork from '@/components/SelectedWork';
import LeadershipPreview from '@/components/LeadershipPreview';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Positioning, Value Proposition & Real Visual Asset */}
      <HeroSection />

      {/* 2. Official Recognition: Compact Trust Section (Startup India & MSME) */}
      <RecognitionStrip />

      {/* 3. Who We Are & Merged Two Business Divisions */}
      <CompanyIntro />

      {/* 4. Our Capabilities: Visual Engineering Pillars & 10 Services */}
      <ServicesOverview />

      {/* 5. VoiSage AI: High-Impact In-House Product Showcase */}
      <FeaturedProduct />

      {/* 6. Why Tech22Blocks: Concise Operational Philosophy */}
      <WhyTech22Blocks />

      {/* 7. Selected Work: Focused Capability Case Studies */}
      <SelectedWork />

      {/* 8. Leadership: Compact Founder Introduction with Photograph */}
      <LeadershipPreview />

      {/* 9. Final Call To Action: Direct Consultation Gateway */}
      <FinalCTA />
    </>
  );
}
