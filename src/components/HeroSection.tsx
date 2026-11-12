import React from 'react';
import { ASSET_IMAGES, CORPORATE_STATS } from '../data/fabricationData';
import { ShieldCheck, ArrowRight, FileCheck2, Cpu, Wrench } from 'lucide-react';

interface HeroSectionProps {
  onOpenLetterhead: () => void;
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLetterhead, onOpenQuoteModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-[#0A192F] text-white overflow-hidden border-b border-slate-800">
      {/* Structural blueprint lines overlay */}
      <div className="absolute inset-0 bg-grid-blueprint-dark opacity-30 pointer-events-none" />

      {/* Hero Visual Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-14 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Corporate Editorial Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* ExxonMobil-style Strategic Category Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
              <span className="w-6 h-[2px] bg-orange-500 inline-block" />
              <span>Heavy Infrastructure & Advanced Welding Systems</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Structural Steel Fabrication & Precision Welding For Critical Industries
            </h1>

            {/* Slogan Banner with Letterhead Colors */}
            <div className="py-2.5 px-4 bg-[#0F233D] border-l-4 border-orange-500 max-w-xl">
              <p className="text-sm sm:text-base font-semibold text-orange-300 italic tracking-wide">
                “Building Strength, Welding Trust”
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                Engineered reliability, absolute metallurgy integrity, and master craftsmanship across every weld seam.
              </p>
            </div>

            {/* Executive Body Copy */}
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              From heavy civil bridge superstructures to ASME Section VIII pressure assemblies, STRUCKXON LTD delivers full-scope industrial steel fabrication. Operating across 180,000 sq ft of multi-axis CNC gantry bays with certified AWS QC1 visual, radiographic, and ultrasonic testing.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 transition-colors shadow-lg cursor-pointer active:translate-y-0.5"
              >
                <span>Request Project RFP / Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('tooling')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-200 bg-[#0F233D] hover:bg-[#163255] border border-slate-700 hover:border-slate-500 transition-colors cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-orange-400" />
                <span>Inspect Tooling & Metallurgy</span>
              </button>

              <button
                onClick={onOpenLetterhead}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4 decoration-orange-500/70 transition-colors cursor-pointer py-2"
              >
                <FileCheck2 className="w-4 h-4 text-orange-400" />
                <span>View Official Letterhead Specs</span>
              </button>
            </div>

            {/* Quick Accreditation Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                AISC Certified Fabricator
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                ASME Code Stamps 'U' & 'S'
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                AWS D1.1 / D1.5 FCM Endorsed
              </span>
            </div>
          </div>

          {/* Right Column: High-Impact Industrial Image Frame */}
          <div className="lg:col-span-5">
            <div className="relative group border-2 border-slate-700/80 bg-[#0F233D] overflow-hidden shadow-2xl">
              {/* Corner structural bracket markers */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-500 z-20 pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500 z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500 z-20 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-500 z-20 pointer-events-none" />

              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={ASSET_IMAGES.hero}
                  alt="Certified welder joining heavy structural steel girder with glowing orange arc sparks"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/30 to-transparent" />
              </div>

              {/* Caption Overlay */}
              <div className="p-4 bg-[#0A192F] border-t border-slate-800 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-orange-500" />
                    Shop Bay 4 · High-Bay Tandem Welder
                  </div>
                  <p className="text-xs text-slate-300">
                    Full penetration CJP weld on 70-ton architectural box girder.
                  </p>
                </div>
                <div className="shrink-0 text-right font-mono text-[11px] text-slate-400">
                  <span>WPS-BP-041</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ExxonMobil-Style Full-Width KPI & Benchmark Row */}
        <div className="mt-14 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {CORPORATE_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className="relative p-5 bg-[#0F233D]/60 border border-slate-800 hover:border-orange-500/50 transition-colors group"
              >
                <div className="text-xs font-mono text-orange-400/80 mb-1">
                  0{idx + 1} // METRIC
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight tabular-nums font-mono group-hover:text-orange-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wide">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
