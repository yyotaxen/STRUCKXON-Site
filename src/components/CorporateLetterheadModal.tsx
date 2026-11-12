import React, { useState } from 'react';
import { SpecSheetState } from '../types';
import { X, Printer, Download, Check, ShieldCheck, Award, FileText } from 'lucide-react';

interface CorporateLetterheadModalProps {
  isOpen: boolean;
  onClose: () => void;
  specs: SpecSheetState;
}

export const CorporateLetterheadModal: React.FC<CorporateLetterheadModalProps> = ({
  isOpen,
  onClose,
  specs,
}) => {
  const [copied, setCopied] = useState(false);
  const quoteRefNumber = `VSD-2026-${Math.abs(specs.tonnageEst * 17 + 8421)}`;
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(quoteRefNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white max-w-4xl w-full rounded-none shadow-2xl border-4 border-[#0A192F] my-6 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Control Bar (Screen only) */}
        <div className="bg-[#0A192F] text-white px-6 py-3.5 flex items-center justify-between border-b border-orange-500/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-orange-500 inline-block rotate-45" />
            <span className="font-bold text-xs uppercase tracking-wider text-slate-200">
              Official Corporate Letterhead Preview · STRUCKXON LTD
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase rounded-sm cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Letterhead</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-sm hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close letterhead modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Printable Letterhead Sheet */}
        <div id="corporate-letterhead-document" className="p-8 sm:p-12 bg-white text-slate-900 space-y-8 relative">
          {/* Subtle watermark background seal */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <div className="w-96 h-96 rounded-full border-8 border-slate-900 flex items-center justify-center font-extrabold text-center text-4xl leading-tight">
              STRUCKXON LTD<br />BUILDING STRENGTH<br />WELDING TRUST
            </div>
          </div>

          {/* LETTERHEAD TOP HEADER (Navy Blue & Orange) */}
          <div className="border-b-4 border-[#0A192F] pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              {/* Left Brand Identity */}
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0A192F] border-2 border-orange-500 flex items-center justify-center text-white font-black text-xl tracking-tighter shrink-0 shadow-sm">
                    <span className="text-orange-500">S</span>X
                  </div>
                  <div>
                    <h1 className="text-2xl font-black text-[#0A192F] tracking-tight leading-none uppercase">
                      STRUCKXON <span className="text-orange-600">LTD</span>
                    </h1>
                    <p className="text-[11px] font-bold text-slate-600 uppercase tracking-widest mt-0.5">
                      Structural & Heavy Steel Fabrication Corporation
                    </p>
                  </div>
                </div>

                {/* Slogan Banner with Letterhead Colors */}
                <div className="pt-2">
                  <div className="inline-block py-1 px-3 bg-[#0A192F] text-orange-400 font-semibold italic text-xs tracking-wide border-l-4 border-orange-500">
                    “Building Strength, Welding Trust”
                  </div>
                </div>
              </div>

              {/* Right Address & Accreditation Block */}
              <div className="text-right text-[11px] text-slate-600 space-y-0.5 font-mono">
                <div className="font-bold text-[#0A192F] text-xs">STRUCKXON Global Engineering Works</div>
                <div>Bay 4, High-Bay Heavy Fabrication Facility</div>
                <div>AISC Quality Certified Fabricator · AWS D1.1 / D1.5</div>
                <div>ASME Section VIII Div 1 & 2 · Stamp ‘U’ / ‘S’</div>
                <div className="text-orange-600 font-semibold">T: +1 (800) 555-WELD · info@struckxon.com</div>
              </div>
            </div>

            {/* Orange Hairline Accent Divider */}
            <div className="h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-[#0A192F]" />
          </div>

          {/* Letterhead Document Sub-Header: Reference & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono border-b border-slate-200 pb-4">
            <div>
              <span className="text-slate-500">DOCUMENT: </span>
              <span className="font-bold text-[#0A192F]">ENGINEERING FABRICATION SPECIFICATION</span>
              <div className="mt-1">
                <span className="text-slate-500">REF NO: </span>
                <span className="font-bold text-orange-600">{quoteRefNumber}</span>
                <button
                  onClick={handleCopy}
                  className="ml-2 text-[10px] text-slate-400 hover:text-slate-700 underline cursor-pointer"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="sm:text-right">
              <span className="text-slate-500">DATE ISSUED: </span>
              <span className="font-bold text-slate-900">{currentDate}</span>
              <div className="mt-1">
                <span className="text-slate-500">ISSUED TO: </span>
                <span className="font-bold text-slate-900">{specs.clientCompany || 'Metro Infrastructure Partners'}</span>
              </div>
            </div>
          </div>

          {/* Project & Client Scope Overview */}
          <div className="bg-slate-50 p-4 border border-slate-200 rounded space-y-2">
            <div className="text-[11px] font-bold text-orange-600 uppercase tracking-wider font-mono">
              PROJECT CONTEXT & CLASSIFICATION
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-xs">
              <div>
                <span className="text-slate-500">Designation: </span>
                <strong className="text-slate-900">{specs.projectName || 'Heavy Infrastructure Fabrication'}</strong>
              </div>
              <div>
                <span className="text-slate-500">Governing Code: </span>
                <strong className="text-slate-900">AWS D1.1 Structural / AISC 360-22</strong>
              </div>
              <div>
                <span className="text-slate-500">Specifying Contact: </span>
                <strong className="text-slate-900">{specs.clientEmail || 'engineering@client.org'}</strong>
              </div>
              <div>
                <span className="text-slate-500">Plant Production Bay: </span>
                <strong className="text-slate-900">Heavy Gantry Bay 3 & Submerged Arc Portal</strong>
              </div>
            </div>
          </div>

          {/* Certified Technical Specification Table */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-[#0A192F] uppercase tracking-wider font-mono flex items-center justify-between">
              <span>Section II: Technical Fabrication Parameters</span>
              <span className="text-orange-600">CONFIDENTIAL & CERTIFIED</span>
            </div>

            <table className="w-full text-left text-xs border border-slate-300">
              <thead className="bg-[#0A192F] text-white">
                <tr>
                  <th className="p-2.5 font-bold uppercase tracking-wider text-[11px]">Parameter</th>
                  <th className="p-2.5 font-bold uppercase tracking-wider text-[11px]">Engineering Specification</th>
                  <th className="p-2.5 font-bold uppercase tracking-wider text-[11px] text-right">Standard Compliance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="p-2.5 font-semibold text-slate-900">Structural Member Type</td>
                  <td className="p-2.5 text-slate-800">{specs.structuralType}</td>
                  <td className="p-2.5 font-mono text-slate-600 text-right">AISC Standard</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-2.5 font-semibold text-slate-900">Base Steel Grade</td>
                  <td className="p-2.5 text-slate-800">{specs.steelGrade}</td>
                  <td className="p-2.5 font-mono text-slate-600 text-right">ASTM / Mill Cert</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2.5 font-semibold text-slate-900">Fabrication Volume</td>
                  <td className="p-2.5 text-slate-800 font-bold font-mono">
                    {specs.tonnageEst} Metric Tons (~{Math.round(specs.tonnageEst * 42)} lbs weld metal)
                  </td>
                  <td className="p-2.5 font-mono text-slate-600 text-right">±0.5% Certified</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-2.5 font-semibold text-slate-900">Primary Welding Method</td>
                  <td className="p-2.5 text-slate-800">{specs.weldingMethod}</td>
                  <td className="p-2.5 font-mono text-slate-600 text-right">AWS D1.1 PQR/WPS</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2.5 font-semibold text-slate-900">NDT & Quality Regime</td>
                  <td className="p-2.5 text-slate-800">{specs.ndtRegime}</td>
                  <td className="p-2.5 font-mono text-slate-600 text-right">ASNT Level II / CWI</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-2.5 font-semibold text-slate-900">Protective Coating / Blast</td>
                  <td className="p-2.5 text-slate-800">{specs.surfaceFinish}</td>
                  <td className="p-2.5 font-mono text-slate-600 text-right">SSPC-SP 10 / NACE 2</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-2.5 font-semibold text-slate-900">Delivery Schedule</td>
                  <td className="p-2.5 text-slate-800">{specs.deliveryTimeline}</td>
                  <td className="p-2.5 font-mono text-slate-600 text-right">FOB Heavy Rail/Barge</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Letterhead Guarantee Statement */}
          <div className="p-4 bg-orange-50 border-l-4 border-orange-600 text-xs text-slate-800 space-y-1">
            <div className="font-bold text-[#0A192F] uppercase">
              STRUCKXON LTD Corporate Warranty & Quality Guarantee:
            </div>
            <p className="leading-relaxed">
              Every structural connection produced under this specification is welded by certified craftsmen tested under AWS QC7 and ASME Section IX. Full mill traceability packets, Charpy impact reports, and radiographic inspection records accompany the bill of lading upon dispatch.
            </p>
          </div>

          {/* Official Sign-off Signatures & Corporate Seal */}
          <div className="pt-6 border-t-2 border-[#0A192F] grid grid-cols-1 sm:grid-cols-3 gap-6 items-end">
            {/* Signature 1 */}
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-serif italic text-lg text-slate-800">
                Arthur J. Sterling, P.E.
              </div>
              <div className="h-[1px] bg-slate-400 w-full" />
              <div className="text-[10px] uppercase font-bold text-slate-700">Chief Structural Engineer</div>
              <div className="text-[9px] text-slate-500 font-mono">PE License #49281-NY / AISC Member</div>
            </div>

            {/* Signature 2 */}
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-serif italic text-lg text-slate-800">
                Marcus Vance, CWI
              </div>
              <div className="h-[1px] bg-slate-400 w-full" />
              <div className="text-[10px] uppercase font-bold text-slate-700">Quality Assurance Director</div>
              <div className="text-[9px] text-slate-500 font-mono">AWS Senior Certified Welding Inspector</div>
            </div>

            {/* Corporate Letterhead Stamp (Navy & Orange) */}
            <div className="flex justify-center sm:justify-end">
              <div className="w-28 h-28 border-4 border-[#0A192F] p-1.5 flex flex-col items-center justify-center text-center text-[#0A192F] shadow-xs bg-slate-50">
                <div className="w-full h-full border border-orange-500 flex flex-col items-center justify-center p-1">
                  <ShieldCheck className="w-5 h-5 text-orange-600 mb-0.5" />
                  <div className="text-[7.5px] font-black uppercase tracking-tighter">STRUCKXON LTD</div>
                  <div className="text-[7px] text-orange-600 font-bold">WELDING TRUST</div>
                  <div className="text-[6px] font-mono text-slate-500 mt-0.5">OFFICIAL SEAL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Letterhead Bottom Footer in Navy and Orange */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 font-mono gap-2">
            <div>STRUCKXON LTD INDUSTRIAL FABRICATION · CONFIDENTIAL ENGINEERING RECORD</div>
            <div className="text-orange-600 font-semibold">“Building Strength, Welding Trust”</div>
            <div>PAGE 1 OF 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};
