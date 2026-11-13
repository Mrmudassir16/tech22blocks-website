import React from 'react';
import HeroSection from '@/components/HeroSection';
import RecognitionStrip from '@/components/RecognitionStrip';
import CompanyIntro from '@/components/CompanyIntro';
import ServicesOverview from '@/components/ServicesOverview';
import FeaturedProduct from '@/components/FeaturedProduct';
import WhyTech22Blocks from '@/components/WhyTech22Blocks';
import LeadershipPreview from '@/components/LeadershipPreview';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Selected Concept A (Immersive Full-Width Corporate Image-Led Hero) */}
      <HeroSection />

      {/* 2. Official Recognition: Compact Professional Trust Section (Startup India & MSME) */}
      <RecognitionStrip />

      {/* 3. Who We Are: Two Business Areas (Proprietary Products & Custom Technology Solutions) */}
      <CompanyIntro />

      {/* 4. Our Services: Exactly the 6 Services from Founder Requirements PDF */}
      <ServicesOverview />

      {/* 5. VoiSage AI: Focused In-House Product Showcase */}
      <FeaturedProduct />

      {/* 6. Why Tech22Blocks: Concise Operational Philosophy */}
      <WhyTech22Blocks />

      {/* 7. Leadership: Compact Founder Introduction with Genuine Photograph */}
      <LeadershipPreview />

      {/* 8. Final Call To Action: Direct Project Consultation Gateway */}
      <FinalCTA />
    </>
  );
}
