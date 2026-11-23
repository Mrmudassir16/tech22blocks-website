import React from 'react';
import Image from 'next/image';
import { Linkedin, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/data/company';
import { getAssetUrl } from '@/utils/assets';
import { StarWatermark } from '@/components/StarEmblem';

export default function FoundersSection() {
  const { foundersVision } = COMPANY;

  return (
    <section id="founders" className="relative py-14 sm:py-20 lg:py-24 bg-[var(--surface-elevated)] text-[var(--text-primary)] border-t border-[var(--border)] overflow-hidden transition-colors duration-200">
      <StarWatermark size={600} position="bottom-left" variant="blue" opacity={0.02} rotate={20} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-3 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30">
            <span>Leadership &amp; Heritage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight font-display">
            {foundersVision.mainHeading}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl text-[var(--text-muted)] font-medium">
            {foundersVision.supportingHeading}
          </p>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[var(--border)] bg-[var(--surface)]">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={getAssetUrl('/images/founders-father-son.jpg')}
                  alt="Rajkumar Adepu (Director/Chairman) and Shivasai Adepu (Director/CEO) - Tech22Blocks Founders"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* Photo Caption Strip */}
              <div className="bg-[var(--surface)] text-[var(--text-primary)] p-5 sm:p-7 border-t border-[var(--border)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
                  <div className="pt-2 sm:pt-0 sm:pr-4">
                    <p className="text-xs uppercase tracking-wider font-mono text-[var(--accent)] font-semibold">Director &amp; CEO</p>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mt-1 font-display">Shivasai Adepu</h3>
                    <p className="text-xs text-[var(--text-muted)] mt-1">Product Architecture &amp; Technology</p>
                    <a
                      href="https://www.linkedin.com/in/shivasaiadepu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center text-xs font-mono font-semibold text-[var(--accent)] hover:underline transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 mr-1" />
                      <span>LinkedIn Profile</span>
                    </a>
                  </div>

                  <div className="pt-4 sm:pt-0 sm:pl-4">
                    <p className="text-xs uppercase tracking-wider font-mono text-[var(--accent)] font-semibold">Director &amp; Chairman</p>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mt-1 font-display">Rajkumar Adepu</h3>
                    <p className="text-xs text-[var(--text-muted)] mt-1">Corporate Governance &amp; Strategy</p>
                    <span className="mt-3 inline-flex items-center text-xs font-mono text-[var(--text-muted)]">
                      RRK Software Technologies Pvt. Ltd.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Story & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[var(--text-muted)] leading-relaxed text-sm sm:text-base space-y-4 sm:space-y-5">
              {foundersVision.narrative.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-base sm:text-lg font-medium text-[var(--text-primary)] leading-snug" : "text-[var(--text-muted)]"}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Strategic Pillars */}
            <div className="pt-4 sm:pt-6 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm">
                <div className="flex items-center space-x-2 text-[var(--text-primary)] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                  <span>Two Generations of Thinking</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                  Combining disciplined long-term operational experience with modern engineering methods.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm">
                <div className="flex items-center space-x-2 text-[var(--text-primary)] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                  <span>Enduring Trust</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">
                  More than a contract — a relationship built on integrity, persistence, and delivering real software.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
