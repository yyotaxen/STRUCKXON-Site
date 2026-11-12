import React, { useState } from 'react';
import { SpecSheetState } from '../types';
import { Calculator, FileText, ArrowRight, ShieldCheck, Download, Check } from 'lucide-react';

interface EstimatorRFQProps {
  onGenerateLetterhead: (specs: SpecSheetState) => void;
  onOpenQuoteWithSpecs: (specs: SpecSheetState) => void;
}

export const EstimatorRFQ: React.FC<EstimatorRFQProps> = ({
  onGenerateLetterhead,
  onOpenQuoteWithSpecs,
}) => {
  const [specs, setSpecs] = useState<SpecSheetState>({
    projectName: 'Harbor Truss Expansion Phase II',
    clientCompany: 'Metro Infrastructure Partners',
    clientEmail: 'procurement@metroinfra.com',
    structuralType: 'Built-up Heavy Plate Girder',
    steelGrade: 'ASTM A572 Grade 50 (High-Strength Structural)',
    tonnageEst: 250,
    weldingMethod: 'Submerged Arc (SAW) + FCAW-G Web Splicing',
    ndtRegime: '100% CWI Visual + 100% Phased Array Ultrasonic (PAUT)',
    surfaceFinish: 'SP-10 Near-White Blast + Zinc Rich Epoxy Primer (3.0 mils)',
    deliveryTimeline: '12 - 16 Weeks Scheduled Phased Rail Delivery',
    specialRequirements: 'Charpy V-notch impact toughness certified to 25 ft-lbs @ -20°F.',
  });

  const [copied, setCopied] = useState(false);

  // Dynamic calculations based on specs
  const estimatedHours = Math.round(specs.tonnageEst * 14.5);
  const estimatedWeldMetalLbs = Math.round(specs.tonnageEst * 42);
  const inspectionPoints = Math.round(specs.tonnageEst * 8.2);

  const handleTonnageChange = (val: number) => {
    setSpecs((prev) => ({ ...prev, tonnageEst: val }));
  };

  return (
    <section id="capabilities" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-2 pb-8 border-b border-slate-200">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-600 flex items-center gap-2">
            <span className="w-5 h-0.5 bg-orange-600 inline-block" />
            <span>Interactive Engineering Spec Sheet & Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Configure Your Structural Fabrication Specification
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Configure alloy metallurgy, weld inspection rigor, and structural profiles to calculate preliminary fabrication parameters and generate an official STRUCKXON LTD Corporate Letterhead document.
          </p>
        </div>

        {/* Interactive Configuration Form */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form Inputs */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-lg space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Project Title / Job Identifier
                </label>
                <input
                  type="text"
                  value={specs.projectName}
                  onChange={(e) => setSpecs({ ...specs, projectName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Client / Specifying Entity
                </label>
                <input
                  type="text"
                  value={specs.clientCompany}
                  onChange={(e) => setSpecs({ ...specs, clientCompany: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Structural Profile Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Structural Geometry & Member Type
              </label>
              <select
                value={specs.structuralType}
                onChange={(e) => setSpecs({ ...specs, structuralType: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
              >
                <option value="Built-up Heavy Plate Girder">Built-up Heavy Plate Girder (AASHTO / AWS D1.5)</option>
                <option value="Continuous Welded Box Girder">Continuous Welded Box Girder with Internal Diaphragms</option>
                <option value="Architectural Heavy Truss & Moment Frames">Architectural Heavy Truss & Seismic Moment Frames</option>
                <option value="Petrochemical Skid Module & ASME Piping">Petrochemical Skid Module & ASME B31.3 Piping</option>
                <option value="Heavy Equipment Chassis & Hardfacing Frames">Heavy Equipment Chassis & Abrasion Hardfacing Frames</option>
              </select>
            </div>

            {/* Metallurgy Grade */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Base Metallurgy / Steel Specification
              </label>
              <select
                value={specs.steelGrade}
                onChange={(e) => setSpecs({ ...specs, steelGrade: e.target.value })}
                className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
              >
                <option value="ASTM A572 Grade 50 (High-Strength Structural)">ASTM A572 Grade 50 (High-Strength Low-Alloy 50 ksi)</option>
                <option value="ASTM A709 Grade 50W (Atmospheric Weathering Bridge)">ASTM A709 Grade 50W (Weathering Steel Corrosion Resisting)</option>
                <option value="ASTM A36 (Standard Carbon Structural)">ASTM A36 (Standard Carbon Structural Steel)</option>
                <option value="AISI 316L Austenitic Stainless Steel">AISI 316L Austenitic Stainless Steel (Marine/Chemical)</option>
                <option value="Duplex 2205 (UNS S32205 Extreme Corrosion)">Duplex 2205 (UNS S32205 Severe Service Petrochem)</option>
                <option value="Hardox 450 / 500 Quenched & Tempered Wear Plate">Hardox 450 / 500 Quenched & Tempered Wear Plate</option>
              </select>
            </div>

            {/* Tonnage Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Estimated Structural Tonnage:
                </label>
                <span className="font-mono text-sm font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 border border-orange-200 rounded">
                  {specs.tonnageEst} Metric Tons
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={specs.tonnageEst}
                onChange={(e) => handleTonnageChange(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>10 Tons (Prototype/Skid)</span>
                <span>250 Tons</span>
                <span>500 Tons</span>
                <span>1,000+ Tons (Bridge Span)</span>
              </div>
            </div>

            {/* Weld Method & NDT Regime */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Primary Welding Procedure
                </label>
                <select
                  value={specs.weldingMethod}
                  onChange={(e) => setSpecs({ ...specs, weldingMethod: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="Submerged Arc (SAW) + FCAW-G Web Splicing">Tandem Submerged Arc (SAW) + FCAW-G</option>
                  <option value="High-Frequency Pulse GTAW (TIG) Root + Cap">High-Frequency Pulse GTAW (TIG)</option>
                  <option value="Robotic 6-Axis GMAW Solid Wire Cell">Robotic 6-Axis GMAW Automated Cell</option>
                  <option value="SMAW Low-Hydrogen E7018 Field Prep">SMAW Low-Hydrogen E7018 Field Prep</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  NDT Inspection Protocol
                </label>
                <select
                  value={specs.ndtRegime}
                  onChange={(e) => setSpecs({ ...specs, ndtRegime: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="100% CWI Visual + 100% Phased Array Ultrasonic (PAUT)">100% CWI Visual + 100% PAUT (Fracture Critical)</option>
                  <option value="100% Visual + 100% Radiographic Film (RT)">100% Visual + 100% Radiographic Film (RT)</option>
                  <option value="100% Visual + 25% Magnetic Particle (MT)">100% Visual + 25% Magnetic Particle (MT)</option>
                  <option value="100% Visual + Liquid Dye Penetrant (PT)">100% Visual + Liquid Penetrant (PT)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Calculations & Letterhead Action Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A192F] text-white p-6 sm:p-7 rounded-lg border-2 border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="font-mono text-xs text-orange-400 font-bold uppercase">
                  CALCULATED SPECIFICATION METRICS
                </span>
                <span className="text-[10px] text-slate-400 font-mono">CODE: AWS D1.1</span>
              </div>

              {/* Dynamic metrics */}
              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Total Structural Weight:</span>
                  <span className="font-mono font-bold text-white text-sm">
                    {specs.tonnageEst.toLocaleString()} MT ({Math.round(specs.tonnageEst * 2204.62).toLocaleString()} lbs)
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Estimated Weld Deposition:</span>
                  <span className="font-mono font-bold text-orange-400 text-sm">
                    ~{estimatedWeldMetalLbs.toLocaleString()} lbs filler wire
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Fabrication & Assembly Hours:</span>
                  <span className="font-mono font-bold text-white text-sm">
                    ~{estimatedHours.toLocaleString()} shop craft hours
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Certified NDT Inspection Points:</span>
                  <span className="font-mono font-bold text-white text-sm">
                    ~{inspectionPoints} calibrated scan points
                  </span>
                </div>
              </div>

              {/* Corporate Letterhead Preview Box (Styled in Navy Blue and Orange) */}
              <div className="mt-4 p-4 bg-white text-slate-900 rounded border border-orange-400/50 space-y-2">
                <div className="flex items-center justify-between border-b border-orange-500/30 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-5 bg-[#0A192F] text-orange-500 text-[10px] font-black flex items-center justify-center">
                      SX
                    </div>
                    <span className="text-xs font-bold text-[#0A192F]">
                      OFFICIAL LETTERHEAD SPECIFICATION
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-orange-600 font-bold">READY TO EXPORT</span>
                </div>

                <p className="text-[11px] text-slate-600 leading-tight">
                  Letterhead styled in <strong className="text-[#0A192F]">Navy Blue (#0A192F)</strong> and <strong className="text-orange-600">Orange (#EA580C)</strong> bearing the official motto <em className="text-slate-800 font-medium">“Building Strength, Welding Trust”</em>.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onGenerateLetterhead(specs)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0A192F] hover:bg-orange-600 border border-slate-900 transition-colors rounded cursor-pointer shadow-sm active:translate-y-0.5"
                  >
                    <FileText className="w-4 h-4 text-orange-400" />
                    <span>View & Print Official Letterhead</span>
                  </button>
                </div>
              </div>

              {/* Direct RFP submission */}
              <div className="mt-4">
                <button
                  onClick={() => onOpenQuoteWithSpecs(specs)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 transition-colors rounded cursor-pointer shadow-md"
                >
                  <span>Submit RFP with this Configuration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* QA Assurance Note */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
              <span>
                All estimated specifications are backed by Certified Mill Test Reports (CMTR) and AWS D1.1/D1.5 Procedure Qualification Records (PQR) in STRUCKXON LTD archives.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
