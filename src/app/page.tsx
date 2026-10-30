import React from 'react';
import HeroSection from '@/components/HeroSection';
import RecognitionStrip from '@/components/RecognitionStrip';
import CompanyIntro from '@/components/CompanyIntro';
import ServicesOverview from '@/components/ServicesOverview';
import FeaturedProduct from '@/components/FeaturedProduct';
import WhyTech22Blocks from '@/components/WhyTech22Blocks';
import SelectedWork from '@/components/SelectedWork';
import LeadershipPreview from '@/components/LeadershipPreview';
import LatestNewsPreview from '@/components/LatestNewsPreview';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Positioning & Value Proposition */}
      <HeroSection />

      {/* 2. Official Recognition: Startup India & MSME Certification */}
      <RecognitionStrip />

      {/* 3. Short Company Introduction (Who We Are + Badges + Learn More CTA) */}
      <CompanyIntro />

      {/* 4. Services Overview (Clean Cards + Explore All Services CTA) */}
      <ServicesOverview />

      {/* 5. Featured Product: VoiSage AI (Concise + Explore VoiSage CTA) */}
      <FeaturedProduct />

      {/* 6. Why Tech22Blocks (4 Core Differentiators) */}
      <WhyTech22Blocks />

      {/* 7. Selected Work / Portfolio (3 Projects + View All Projects CTA) */}
      <SelectedWork />

      {/* 8. Short Leadership & Credibility Section (Father & Son photo + Meet Team CTA) */}
      <LeadershipPreview />

      {/* 9. Latest News & Announcements (3 Latest Items + View All News CTA) */}
      <LatestNewsPreview />

      {/* 10. Final Call To Action (Have a project in mind? Talk to Tech22Blocks) */}
      <FinalCTA />
    </>
  );
}
