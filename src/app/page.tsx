import React from 'react';
import HeroSection from '@/components/HeroSection';
import WhatWeDo from '@/components/WhatWeDo';
import ServiceEditorial from '@/components/ServiceEditorial';
import ProductShowcase from '@/components/ProductShowcase';
import FoundersSection from '@/components/FoundersSection';
import PortfolioPreview from '@/components/PortfolioPreview';
import BlogPreview from '@/components/BlogPreview';
import NewsSection from '@/components/NewsSection';
import FAQSection from '@/components/FAQSection';
import RecognitionStrip from '@/components/RecognitionStrip';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Who Tech22Blocks is & Primary Value Proposition */}
      <HeroSection />

      {/* 2. Recognition Strip: Startup India & MSME Certification */}
      <RecognitionStrip />

      {/* 3. What We Do & The Tech22Blocks Philosophy */}
      <WhatWeDo />

      {/* 4. Capabilities & Services (Alternating Editorial Layout) */}
      <ServiceEditorial />

      {/* 5. Our Products: In-house AI Call Assistant */}
      <ProductShowcase />

      {/* 6. Leadership & Heritage: Father & Son One Vision */}
      <FoundersSection />

      {/* 7. Featured Work & Case Studies Preview */}
      <PortfolioPreview />

      {/* 8. Corporate Disclosures: News & Events */}
      <NewsSection isPreview={true} />

      {/* 9. Engineering & Strategy Insights (Blogs) */}
      <BlogPreview isPreview={true} />

      {/* 10. IT & Software SEO FAQ Section */}
      <FAQSection />

      {/* 11. Final Call To Action */}
      <FinalCTA />
    </>
  );
}
