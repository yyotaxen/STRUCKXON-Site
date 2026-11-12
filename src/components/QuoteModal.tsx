import React, { useState, useEffect } from 'react';
import { SpecSheetState } from '../types';
import { X, Send, CheckCircle2, ShieldCheck, Upload, AlertCircle } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecs?: SpecSheetState | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialSpecs,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectTitle: '',
    structuralType: 'Built-up Heavy Plate Girder',
    steelGrade: 'ASTM A572 Grade 50 (High-Strength Structural)',
    tonnage: '250',
    timeline: 'Standard Schedule (12-16 Weeks)',
    notes: '',
  });

  const [fileName, setFileName] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  useEffect(() => {
    if (initialSpecs) {
      setFormData((prev) => ({
        ...prev,
        projectTitle: initialSpecs.projectName || prev.projectTitle,
        company: initialSpecs.clientCompany || prev.company,
        email: initialSpecs.clientEmail || prev.email,
        structuralType: initialSpecs.structuralType || prev.structuralType,
        steelGrade: initialSpecs.steelGrade || prev.steelGrade,
        tonnage: String(initialSpecs.tonnageEst) || prev.tonnage,
        notes: initialSpecs.specialRequirements || prev.notes,
      }));
    }
  }, [initialSpecs]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.company.trim()) errs.company = 'Company / Organization is required';
    if (!formData.email.trim()) {
      errs.email = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid corporate email address';
    }
    if (!formData.projectTitle.trim()) errs.projectTitle = 'Project Title is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedId = `RFP-SX-${Math.floor(100000 + Math.random() * 900000)}`;
      setTrackingId(generatedId);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white max-w-2xl w-full border border-slate-300 rounded-lg shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="bg-[#0A192F] px-6 py-4 flex items-center justify-between text-white border-b border-orange-500/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-orange-500 inline-block rotate-45" />
            <span className="font-bold text-xs uppercase tracking-wider text-slate-200">
              STRUCKXON LTD Structural RFP & Project Estimation Portal
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto border-2 border-orange-500">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-[#0A192F]">
                RFP Successfully Received & Logged
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Your structural inquiry for <strong>{formData.projectTitle}</strong> has been routed to our Lead Estimating & Metallurgy Engineer.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded max-w-md mx-auto text-xs font-mono space-y-1">
              <div className="text-slate-500 uppercase tracking-wider">Formal RFP Tracking Code</div>
              <div className="text-base font-bold text-orange-600">{trackingId}</div>
              <div className="text-[11px] text-slate-500">Official response SLA: Within 24 business hours</div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#0A192F] hover:bg-orange-600 text-white text-xs font-bold uppercase rounded cursor-pointer transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
            <div>
              <h3 className="text-xl font-bold text-[#0A192F]">
                Submit Project Specification / Request Formal Quotation
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Please provide project details. Our engineering staff will review CAD drawings, welding requirements, and deliver a formal line-item quotation on STRUCKXON LTD corporate letterhead.
              </p>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. David Vance, P.E."
                  className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.fullName && <p className="text-[11px] text-red-600 mt-0.5">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Company / Agency *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Apex Civil Engineering"
                  className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.company && <p className="text-[11px] text-red-600 mt-0.5">{errors.company}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="dvance@apexcivil.com"
                  className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Contact (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 019-2834"
                  className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Project Title / Job Identification *
              </label>
              <input
                type="text"
                value={formData.projectTitle}
                onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                placeholder="e.g. Gateway Interchange Steel Box Girder Package"
                className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.projectTitle && <p className="text-[11px] text-red-600 mt-0.5">{errors.projectTitle}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Structural Member Classification
                </label>
                <select
                  value={formData.structuralType}
                  onChange={(e) => setFormData({ ...formData, structuralType: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-xs bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="Built-up Heavy Plate Girder">Built-up Heavy Plate Girder</option>
                  <option value="Continuous Welded Box Girder">Continuous Welded Box Girder</option>
                  <option value="Architectural Long-Span Truss">Architectural Long-Span Truss</option>
                  <option value="Petrochemical Skid Module">Petrochemical Skid Module</option>
                  <option value="Heavy Equipment Chassis">Heavy Equipment Chassis</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Estimated Tonnage (MT)
                </label>
                <input
                  type="number"
                  value={formData.tonnage}
                  onChange={(e) => setFormData({ ...formData, tonnage: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Simulated Drawing Upload */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Attach Drawing / Spec Package (CAD, PDF, STEP)
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded p-4 text-center hover:border-orange-500 transition-colors bg-slate-50">
                <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                <label className="text-xs text-orange-600 font-bold hover:underline cursor-pointer">
                  <span>Browse drawing files</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileName(e.target.files[0].name);
                      }
                    }}
                  />
                </label>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  Supported formats: DWG, DXF, PDF, STEP (Max 50MB)
                </p>
                {fileName && (
                  <p className="text-xs font-mono text-slate-800 mt-2 font-bold bg-white p-1 rounded border border-slate-200 inline-block">
                    Attached: {fileName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Special Quality or Metallurgical Requirements
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention fracture-critical member (FCM) designations, sub-zero Charpy V-notch criteria, PWHT, or third-party inspection agencies..."
                className="w-full px-3 py-2 border border-slate-300 rounded text-xs focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-200">
              <span className="text-[11px] text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
                Protected under STRUCKXON LTD Corporate Non-Disclosure Agreement
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>Submit Formal RFP</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
