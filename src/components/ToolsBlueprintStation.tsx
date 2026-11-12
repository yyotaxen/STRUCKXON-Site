import React, { useState } from 'react';
import { FABRICATION_TOOLS, ASSET_IMAGES } from '../data/fabricationData';
import { FabricationTool } from '../types';
import { Wrench, Layers, Shield, Gauge, CheckCircle2, SlidersHorizontal, Sparkles, ChevronRight, Eye } from 'lucide-react';

export const ToolsBlueprintStation: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<FabricationTool>(FABRICATION_TOOLS[0]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'welding' | 'cutting' | 'measurement' | 'prep'>('all');
  const [showCadOverlay, setShowCadOverlay] = useState(true);

  const filteredTools = activeCategory === 'all'
    ? FABRICATION_TOOLS
    : FABRICATION_TOOLS.filter(t => t.category === activeCategory);

  return (
    <section id="tooling" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ExxonMobil Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="space-y-2 max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-orange-600 inline-block" />
              <span>Tooling, Metrology & Craftsmanship</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
              Precision Welding Equipment & Fabrication Tooling
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              True strength starts with the tools of the trade. Inspect our certified heavy fabrication instruments, NIST-calibrated metrology devices, and high-temperature welding torches that ensure structural compliance down to thousandths of an inch.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers, following anti-slop guidelines) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0 border border-slate-200">
            {(['all', 'welding', 'cutting', 'measurement', 'prep'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-md cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0A192F] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'all' ? 'All Tools' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Artwork Showcase & Interactive Inspection Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: High-Fidelity Tooling Artwork with CAD Blueprint Overlay */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative border-2 border-slate-300 bg-slate-900 overflow-hidden shadow-lg group">
              {/* Corner Registration Crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-[10px] text-orange-400 z-20 pointer-events-none select-none">
                + [REF-X01]
              </div>
              <div className="absolute top-2 right-2 font-mono text-[10px] text-orange-400 z-20 pointer-events-none select-none">
                [REF-Y01] +
              </div>
              <div className="absolute bottom-2 left-2 font-mono text-[10px] text-orange-400 z-20 pointer-events-none select-none">
                STRUCKXON LTD WORKBENCH
              </div>
              <div className="absolute bottom-2 right-2 font-mono text-[10px] text-orange-400 z-20 pointer-events-none select-none">
                TOLERANCE ±0.001"
              </div>

              {/* Main Artwork Image */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={ASSET_IMAGES.toolsFlatlay}
                  alt="High-angle corporate flatlay photograph of professional welding and metal fabrication tools arranged on a brushed steel workshop workbench"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* CAD Blueprint Vector Grid Overlay Toggle */}
                {showCadOverlay && (
                  <div className="absolute inset-0 bg-blue-950/20 pointer-events-none">
                    <svg className="w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F97316" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      {/* Technical dimension lines */}
                      <circle cx="50%" cy="50%" r="120" fill="none" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#38BDF8" strokeWidth="0.75" strokeDasharray="3 3" />
                      <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#38BDF8" strokeWidth="0.75" strokeDasharray="3 3" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Bottom Artwork Tool Bar */}
              <div className="p-3 bg-[#0A192F] text-white flex items-center justify-between gap-4 border-t border-slate-700">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 bg-orange-500" />
                  <span className="font-semibold text-slate-200">Artwork Schema:</span>
                  <span className="text-orange-400 font-mono text-[11px]">WLD-BENCH-STUDIO-A</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowCadOverlay(!showCadOverlay)}
                    className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2 py-1 bg-slate-800 rounded border border-slate-700 cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-orange-400" />
                    <span>{showCadOverlay ? 'Hide CAD Grid' : 'Show CAD Grid'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sub-Feature: Automated CNC Plasma Torch Cutting */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-36 h-24 bg-slate-900 shrink-0 overflow-hidden border border-slate-300">
                <img
                  src={ASSET_IMAGES.plasmaCnc}
                  alt="Multi-axis CNC plasma cutter slicing plate steel with intense orange spark spray"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Heavy Automated Profiling
                </div>
                <h4 className="text-sm font-bold text-[#0A192F]">
                  400A High-Definition Multi-Axis CNC Plasma Center
                </h4>
                <p className="text-xs text-slate-600">
                  Precision beveling up to 2.5" thick structural plate with TrueHole bolt technology, eliminating secondary reaming.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Selected Tool Technical Dossier */}
          <div className="lg:col-span-5 space-y-4">
            {/* Tool Selection Ribbon */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Select Tool to Inspect:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {filteredTools.map((tool) => {
                  const isSelected = selectedTool.id === tool.id;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => setSelectedTool(tool)}
                      className={`p-3 text-left border rounded transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0A192F] text-white border-orange-500 shadow-md ring-1 ring-orange-500'
                          : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                        <span className={isSelected ? 'text-orange-400' : 'text-slate-500'}>
                          {tool.cadSymbol}
                        </span>
                        <span className={`capitalize text-[10px] ${isSelected ? 'text-slate-300' : 'text-slate-400'}`}>
                          {tool.category}
                        </span>
                      </div>
                      <div className="text-xs font-bold truncate">
                        {tool.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Tool Deep-Dive Card */}
            <div className="p-6 bg-slate-900 text-white border-2 border-slate-800 rounded-lg shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Title & Tagline */}
              <div className="space-y-1 pb-4 border-b border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-orange-400">
                    SPECIFICATION DOSSIER: {selectedTool.cadSymbol}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    {selectedTool.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {selectedTool.name}
                </h3>
                <p className="text-xs text-orange-300 italic">
                  {selectedTool.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="py-4 text-xs text-slate-300 leading-relaxed">
                {selectedTool.description}
              </p>

              {/* Key Engineering Specs Table */}
              <div className="space-y-2 py-3 border-y border-slate-800">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Certified Technical Parameters
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedTool.keySpecs.map((spec) => (
                    <div key={spec.label} className="p-2 bg-slate-800/80 border border-slate-700/60 rounded">
                      <div className="text-[10px] text-slate-400">{spec.label}</div>
                      <div className="font-semibold text-white font-mono text-[11px] mt-0.5 truncate">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality & Tolerances */}
              <div className="pt-4 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <Gauge className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400">Achieved Tolerance: </span>
                    <span className="font-semibold text-slate-200">{selectedTool.tolerances}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400">Governing Code: </span>
                    <span className="font-semibold text-slate-200">{selectedTool.safetyStandard}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metallurgy & Weld Process Matrix (ExxonMobil technical rigor) */}
        <div className="mt-14 p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
            <div>
              <h3 className="text-base font-bold text-[#0A192F] flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-orange-600" />
                Structural Metallurgy & Welding Parameter Matrix
              </h3>
              <p className="text-xs text-slate-500">
                Pre-qualified procedures (PQR/WPS) maintained in STRUCKXON LTD metallurgy database
              </p>
            </div>
            <span className="text-xs font-mono text-slate-600 self-start sm:self-auto">
              AWS D1.1 / ASME SEC IX
            </span>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
                  <th className="py-2.5 font-bold">Material Grade</th>
                  <th className="py-2.5 font-bold">Primary Process</th>
                  <th className="py-2.5 font-bold">Filler Metal / Electrode</th>
                  <th className="py-2.5 font-bold">Preheat Minimum</th>
                  <th className="py-2.5 font-bold">NDT Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="py-3 font-semibold text-slate-900">ASTM A572 Grade 50 (Structural)</td>
                  <td className="py-3">FCAW-G / Submerged Arc (SAW)</td>
                  <td className="py-3 font-mono">E71T-1M / F7A2-EM12K</td>
                  <td className="py-3 font-mono">150°F (65°C) &gt;1.5" thickness</td>
                  <td className="py-3">100% CWI Visual + 25% Ultrasonic (UT)</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-slate-900">ASTM A709 Gr 50W (Weathering Steel)</td>
                  <td className="py-3">Tandem Submerged Arc (SAW)</td>
                  <td className="py-3 font-mono">F7A4-ENi1K Low-Alloy</td>
                  <td className="py-3 font-mono">225°F (107°C) controlled</td>
                  <td className="py-3">100% Radiographic (RT) Fracture-Critical</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-slate-900">AISI 316L Stainless Steel</td>
                  <td className="py-3">High-Frequency Pulse GTAW (TIG)</td>
                  <td className="py-3 font-mono">ER316L / Quartz Purge</td>
                  <td className="py-3 font-mono">Ambient (Interpass &le; 300°F)</td>
                  <td className="py-3">Liquid Penetrant (PT) + Ferrite Gauge</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-slate-900">Duplex 2205 (UNS S32205)</td>
                  <td className="py-3">Controlled Heat Input GTAW / GMAW</td>
                  <td className="py-3 font-mono">ER2209 with 98% Ar / 2% N2</td>
                  <td className="py-3 font-mono">Max Interpass 300°F (150°C)</td>
                  <td className="py-3">Phased Array Ultrasonic (PAUT) + Micro-Etch</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
