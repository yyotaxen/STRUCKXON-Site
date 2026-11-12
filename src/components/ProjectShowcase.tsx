import React, { useState } from 'react';
import { PROJECT_CASES, ASSET_IMAGES } from '../data/fabricationData';
import { ProjectCase } from '../types';
import { MapPin, Scale, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

interface ProjectShowcaseProps {
  onOpenQuoteModal: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<'all' | 'bridge' | 'energy' | 'architectural' | 'vessel'>('all');

  const filteredProjects = filter === 'all'
    ? PROJECT_CASES
    : PROJECT_CASES.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-400 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-orange-500 inline-block" />
              <span>Project Provenance & Structural Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Monumental Infrastructure & Fabrication Portfolio
            </h2>
            <p className="text-slate-400 text-sm">
              Explore complex structural steel erections, heavy box girders, and severe-service petrochemical assemblies successfully delivered on schedule.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-800 rounded-lg border border-slate-700 shrink-0">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'bridge', label: 'Bridges & Civil' },
              { id: 'energy', label: 'Energy & LNG' },
              { id: 'architectural', label: 'Architectural' },
              { id: 'vessel', label: 'ASME Vessels' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors rounded-md cursor-pointer ${
                  filter === tab.id
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0A192F] border border-slate-800 hover:border-orange-500/60 transition-all rounded-lg p-6 sm:p-7 space-y-4 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
                <span className="font-mono text-orange-400 font-bold uppercase text-[11px]">
                  {project.categoryLabel}
                </span>
                <span className="font-mono text-[11px]">Completed {project.completionYear}</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Key Highlights & Parameters */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-2.5 bg-slate-800/80 rounded border border-slate-700/60">
                  <div className="text-[10px] text-slate-400 uppercase flex items-center gap-1">
                    <Scale className="w-3 h-3 text-orange-400" />
                    Fabricated Tonnage
                  </div>
                  <div className="font-bold text-white font-mono mt-0.5">{project.tonnage}</div>
                </div>

                <div className="p-2.5 bg-slate-800/80 rounded border border-slate-700/60">
                  <div className="text-[10px] text-slate-400 uppercase flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-orange-400" />
                    Jobsite Location
                  </div>
                  <div className="font-semibold text-white mt-0.5 truncate">{project.location}</div>
                </div>
              </div>

              {/* Welding Processes Used */}
              <div className="pt-2">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <Wrench className="w-3 h-3 text-orange-400" />
                  Welding Procedures Deployed:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.weldProcesses.map((proc, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-[11px] text-slate-300 font-mono rounded"
                    >
                      {proc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fracture Critical Badge */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-orange-300 font-semibold text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5 text-orange-400" />
                  <span>{project.highlight}</span>
                </div>
                <button
                  onClick={onOpenQuoteModal}
                  className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px] font-bold uppercase transition-colors"
                >
                  <span>Inquire Similar Scope</span>
                  <ArrowRight className="w-3 h-3 text-orange-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
