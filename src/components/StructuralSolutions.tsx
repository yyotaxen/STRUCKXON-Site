import React, { useState } from 'react';
import { STRUCTURAL_SECTORS, ASSET_IMAGES } from '../data/fabricationData';
import { StructuralSector } from '../types';
import { ArrowUpRight, CheckCircle2, ShieldAlert, Hammer, Building2 } from 'lucide-react';

interface StructuralSolutionsProps {
  onOpenQuoteModal: () => void;
}

export const StructuralSolutions: React.FC<StructuralSolutionsProps> = ({ onOpenQuoteModal }) => {
  const [activeSector, setActiveSector] = useState<StructuralSector>(STRUCTURAL_SECTORS[0]);

  return (
    <section id="sectors" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-600 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-orange-600 inline-block" />
            <span>Industrial Sectors & Structural Divisions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Heavy Engineering & Structural Fabrication Capabilities
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From multi-span fracture-critical highway bridges to heavy refinery skids and monumental architectural trusses, our engineering and welding teams deliver to the world's most demanding specifications.
          </p>
        </div>

        {/* Sector Tabs Navigation */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-slate-200 pb-2">
          {STRUCTURAL_SECTORS.map((sector) => {
            const isActive = activeSector.id === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className={`px-4 py-3 text-xs font-bold uppercase tracking-wider text-left border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'border-orange-600 text-[#0A192F] bg-white shadow-sm'
                    : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <div className="text-[10px] font-mono text-orange-600/80 mb-0.5">{sector.code}</div>
                <div>{sector.title}</div>
              </button>
            );
          })}
        </div>

        {/* Active Sector Detailed Panel (ExxonMobil Style Large Feature + Structural Breakdown) */}
        <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-mono text-orange-600 tracking-wider">
                  DIVISION CODE: {activeSector.code}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
                  {activeSector.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                  {activeSector.description}
                </p>
              </div>

              {/* Core Capabilities List */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Engineering Scope & Execution
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSector.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                {activeSector.specs.map((sp) => (
                  <div key={sp.label} className="p-3 bg-slate-50 border border-slate-200 rounded">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">{sp.label}</div>
                    <div className="text-xs font-bold text-[#0A192F] font-mono mt-1">{sp.value}</div>
                  </div>
                ))}
              </div>

              {/* Lead Project & Quality Protocol */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs border-t border-slate-100">
                <div>
                  <span className="text-slate-500">Benchmark Project: </span>
                  <span className="font-bold text-[#0A192F]">{activeSector.leadProject}</span>
                </div>
                <div className="flex items-center gap-1.5 text-orange-700 font-semibold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Standard: {activeSector.inspectionStandard}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0A192F] hover:bg-orange-600 transition-colors shadow-sm cursor-pointer"
                >
                  <span>Submit RFP for this Sector</span>
                  <ArrowUpRight className="w-4 h-4 text-orange-400" />
                </button>
              </div>
            </div>

            {/* Right Media: Structural Project Showcase Photo */}
            <div className="lg:col-span-5">
              <div className="relative border-2 border-slate-200 rounded-md overflow-hidden bg-slate-900 shadow-md group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={ASSET_IMAGES.bridgeSuperstructure}
                    alt="Major modern structural bridge truss and welded girder superstructure under construction"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent" />
                </div>
                <div className="p-4 bg-[#0A192F] text-white space-y-1">
                  <div className="text-[10px] font-mono text-orange-400 uppercase tracking-wider">
                    Infrastructure Case In-Focus
                  </div>
                  <div className="text-xs font-bold text-white">
                    Heavy Box Girder Erection & Fracture-Critical Welds
                  </div>
                  <div className="text-[11px] text-slate-300">
                    AASHTO / AWS D1.5 compliant continuous weld inspection with automated phased-array UT.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
