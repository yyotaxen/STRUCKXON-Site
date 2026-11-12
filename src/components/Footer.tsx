import React, { useState } from 'react';
import { ShieldCheck, Mail, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenLetterhead: () => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLetterhead, onOpenQuoteModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setError('Please enter a valid business email.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t-4 border-orange-500">
      {/* Top Corporate Strip with Slogan */}
      <div className="bg-[#071324] border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-600 text-white font-black text-xs flex items-center justify-center">
              SX
            </div>
            <div>
              <span className="text-white font-extrabold uppercase text-sm tracking-wider">
                STRUCKXON LTD · Structural & Heavy Steel Fabrication
              </span>
              <p className="text-xs text-orange-400 font-semibold italic">
                “Building Strength, Welding Trust”
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenLetterhead}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-orange-400 hover:text-white border border-slate-700 text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-orange-400" />
              <span>Official Letterhead</span>
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Corporate Summary & Letterhead Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white tracking-tight uppercase">
                STRUCKXON LTD
              </h3>
              <p className="text-xs text-orange-400 font-mono font-medium">
                Global Heavy Structural Steel & Advanced Welding Systems
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Operating 180,000 sq ft of multi-axis CNC automated gantry bays and certified welding facilities. Dedicated to fracture-critical infrastructure, petrochemical skids, and architectural monumental steel.
            </p>

            <div className="pt-2 text-xs space-y-1 text-slate-400 font-mono">
              <div>Facility Headquarters: 1200 Struckxon Way, Heavy Port Basin</div>
              <div>Direct Engineering Desk: +1 (800) 555-WELD</div>
              <div>Certified Mill Test & Quality: qa@struckxon.com</div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-4 border-t border-slate-800">
              <div className="text-xs font-bold uppercase text-white mb-2">
                Subscribe to STRUCKXON LTD Metallurgy & Engineering Bulletins
              </div>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-orange-400 bg-slate-900/60 p-2 border border-slate-800 rounded">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Subscribed to quarterly engineering reports.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-1">
                  <div className="flex">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter corporate email..."
                      className="w-full px-3 py-2 bg-slate-800 text-white text-xs border border-slate-700 rounded-l focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                    <button
                      type="submit"
                      className="px-4 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase rounded-r transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  {error && <p className="text-[11px] text-red-400">{error}</p>}
                </form>
              )}
            </div>
          </div>

          {/* Col 3: Capabilities & Sectors */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Fabrication Sectors
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#sectors" className="hover:text-orange-400 transition-colors">Civil Bridge Superstructures</a></li>
              <li><a href="#sectors" className="hover:text-orange-400 transition-colors">Continuous Welded Box Girders</a></li>
              <li><a href="#sectors" className="hover:text-orange-400 transition-colors">Energy & Petrochemical Skids</a></li>
              <li><a href="#sectors" className="hover:text-orange-400 transition-colors">Architectural Long-Span Trusses</a></li>
              <li><a href="#sectors" className="hover:text-orange-400 transition-colors">Heavy Dragline & Mining Frames</a></li>
              <li><a href="#sectors" className="hover:text-orange-400 transition-colors">Fracture-Critical Member Protocol</a></li>
            </ul>
          </div>

          {/* Col 4: Tooling & Metrology */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Welding & Tooling
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#tooling" className="hover:text-orange-400 transition-colors">GTAW / TIG Water-Cooled Torches</a></li>
              <li><a href="#tooling" className="hover:text-orange-400 transition-colors">Automated 400A CNC Plasma Gantry</a></li>
              <li><a href="#tooling" className="hover:text-orange-400 transition-colors">1/1/1/1 TrueColor Arc Helmets</a></li>
              <li><a href="#tooling" className="hover:text-orange-400 transition-colors">NIST Calibrated Vernier Metrology</a></li>
              <li><a href="#tooling" className="hover:text-orange-400 transition-colors">Heavy 25,000 lbs Bridge C-Clamps</a></li>
              <li><a href="#tooling" className="hover:text-orange-400 transition-colors">High-Torque Bevel Grinders</a></li>
            </ul>
          </div>

          {/* Col 5: Governance & Certifications */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Accreditations
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-orange-400" /> AISC Certified Major Bridges</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-orange-400" /> ASME Code Stamps ‘U’ & ‘S’</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-orange-400" /> AWS D1.1 / D1.5 FCM Endorsed</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-orange-400" /> ISO 9001:2015 Quality System</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-orange-400" /> ASNT Level II & III NDT Testing</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-orange-400" /> OSHA Voluntary Protection Star</li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} STRUCKXON LTD. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-orange-400 font-semibold italic">“Building Strength, Welding Trust”</span>
            <span className="text-slate-600">·</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-slate-600">·</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Spec</a>
            <span className="text-slate-600">·</span>
            <a href="#" className="hover:text-white transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
