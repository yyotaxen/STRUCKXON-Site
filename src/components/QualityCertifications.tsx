import React from 'react';
import { ShieldCheck, Award, FileCheck, CheckCircle2, AlertOctagon } from 'lucide-react';

export const QualityCertifications: React.FC = () => {
  const certifications = [
    {
      code: 'AISC CERTIFIED',
      title: 'American Institute of Steel Construction',
      scope: 'Certified Building Fabricator & Advanced Major Steel Bridges with Fracture-Critical (FC) Endorsement.',
      standard: 'AISC 207-20 Standard for Certification Programs',
    },
    {
      code: 'ASME STAMPS ‘U’ & ‘S’',
      title: 'American Society of Mechanical Engineers',
      scope: 'Authorized manufacturer of unfired pressure vessels (Section VIII Div 1 & 2) and power piping (B31.1 / B31.3).',
      standard: 'ASME Boiler & Pressure Vessel Code (BPVC)',
    },
    {
      code: 'AWS QC1 / CWF',
      title: 'American Welding Society Certified Facility',
      scope: 'In-house full-time AWS Certified Welding Inspectors (CWIs) supervising 100% of joint fit-up, root passes, and final capping.',
      standard: 'AWS QC1 / QC7 Certified Facility Standard',
    },
    {
      code: 'ISO 9001:2015',
      title: 'International Quality Management',
      scope: 'Comprehensive traceability from mill heat numbers to final field installation packages with digital documentation vaults.',
      standard: 'ANAB Accredited Registrar Certificate #QA-894',
    },
  ];

  const ndtMethods = [
    {
      abbr: 'PAUT',
      name: 'Phased Array Ultrasonic',
      desc: 'High-density multi-angle volumetric scans detecting planar flaws and lack of sidewall fusion.',
    },
    {
      abbr: 'RT',
      name: 'Digital Radiography',
      desc: 'Volumetric X-ray inspection for internal porosity, slag inclusions, and tungsten contamination.',
    },
    {
      abbr: 'MT',
      name: 'Magnetic Particle',
      desc: 'Fluorescent electromagnetic yoke examination for surface and near-surface cracks in ferromagnetic steel.',
    },
    {
      abbr: 'PT',
      name: 'Liquid Dye Penetrant',
      desc: 'High-contrast solvent-removable dye testing for surface defects on non-magnetic stainless and duplex welds.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-2 pb-8 border-b border-slate-200">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-600 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-orange-600 inline-block" />
            <span>Corporate Governance, Safety & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Certified Quality Assurance & NDT Testing Regimes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reliability is not an afterthought; it is our foundation. Vanguard maintains active stamps with world-recognized auditing bodies and operates an accredited in-house Non-Destructive Examination laboratory.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.code}
              className="p-6 bg-white border border-slate-200 rounded-lg space-y-3 shadow-xs hover:border-orange-500/60 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-orange-600 uppercase">
                  {cert.code}
                </span>
                <ShieldCheck className="w-4 h-4 text-orange-500" />
              </div>
              <h3 className="text-sm font-bold text-[#0A192F]">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {cert.scope}
              </p>
              <div className="pt-2 text-[10px] font-mono text-slate-400 border-t border-slate-100">
                {cert.standard}
              </div>
            </div>
          ))}
        </div>

        {/* In-House NDT Testing Lab Matrix */}
        <div className="mt-12 p-8 bg-[#0A192F] text-white rounded-lg border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="text-xs font-mono text-orange-400 uppercase tracking-widest font-bold">
                IN-HOUSE QUALITY EXAMINATION LAB
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Comprehensive Non-Destructive Testing (NDT) Protocol
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              ASNT SNT-TC-1A LEVEL II & III INSPECTORS
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ndtMethods.map((m) => (
              <div key={m.abbr} className="p-4 bg-[#0F233D] border border-slate-800 rounded">
                <div className="font-mono text-sm font-bold text-orange-400 mb-1">{m.abbr}</div>
                <div className="text-xs font-bold text-white mb-1.5">{m.name}</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
