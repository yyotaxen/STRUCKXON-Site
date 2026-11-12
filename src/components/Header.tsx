import React, { useState } from 'react';
import { Menu, X, FileText, ChevronRight, Search, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenLetterhead: () => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLetterhead, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Tooling & Craft', href: '#tooling' },
    { label: 'Structural Sectors', href: '#sectors' },
    { label: 'Projects & Provenance', href: '#projects' },
    { label: 'News & Insights', href: '#news' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ExxonMobil-Style Corporate Letterhead Strip (Navy Blue & Orange) */}
      <div className="bg-[#0A192F] text-slate-300 border-b border-[#1E293B] text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 flex items-center justify-between gap-4">
            {/* Left: Corporate Identity & Slogan */}
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 bg-orange-500 rounded-none transform rotate-45 shrink-0" aria-hidden="true" />
              <span className="font-semibold text-white tracking-wider uppercase text-[11px] whitespace-nowrap">
                STRUCKXON LTD · Industrial Fabrication
              </span>
              <span className="text-slate-500 hidden sm:inline" aria-hidden="true">|</span>
              <span className="text-orange-400 font-semibold italic hidden sm:inline whitespace-nowrap">
                “Building Strength, Welding Trust”
              </span>
            </div>

            {/* Right: Quick Corporate Actions & Trust Stamp */}
            <div className="flex items-center gap-4 text-[11px] shrink-0">
              <div className="hidden lg:flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
                <span>AWS D1.1 / ASME Sec IX / ISO 9001</span>
              </div>
              <span className="text-slate-600 hidden lg:inline" aria-hidden="true">|</span>
              <button
                onClick={onOpenLetterhead}
                className="flex items-center gap-1.5 text-orange-300 hover:text-white transition-colors cursor-pointer py-1"
                title="View Official Corporate Letterhead"
              >
                <FileText className="w-3.5 h-3.5 text-orange-400" />
                <span className="font-semibold underline underline-offset-4 decoration-orange-500/50">Corporate Letterhead</span>
              </button>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1 text-slate-400 hover:text-white transition-colors"
                aria-label="Toggle site search"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Search Dropdown Bar */}
      {searchOpen && (
        <div className="bg-[#0F233D] border-b border-orange-500/30 py-3 px-4 transition-all">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <Search className="w-4 h-4 text-orange-400 shrink-0" />
            <input
              type="text"
              placeholder="Search specifications, metallurgy standards, ASTM grades, welding codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-white px-2 py-0.5"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setSearchOpen(false)}
              className="text-xs text-orange-400 hover:text-orange-300 font-semibold px-2 py-1"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Top Navigation Bar (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Single Text Element with Architectural Stamp) */}
            <a
              href="#"
              className="group flex items-center gap-3 text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-orange-500"
            >
              <div className="w-10 h-10 bg-[#0A192F] border-2 border-orange-500 flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-sm transition-transform group-hover:scale-105">
                <span className="text-orange-500">S</span>X
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#0A192F]">
                  STRUCKXON <span className="text-orange-600 font-bold">LTD</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-slate-500 -mt-1">
                  Structural & Heavy Steel Fabrication
                </span>
              </div>
            </a>

            {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-orange-600 transition-colors cursor-pointer whitespace-nowrap shrink-0 py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-orange-500 after:transition-all"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenQuoteModal}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0A192F] hover:bg-orange-600 border border-slate-900 hover:border-orange-600 transition-all shadow-sm cursor-pointer whitespace-nowrap shrink-0 active:translate-y-0.5"
              >
                <span>Request Fabrication Quote</span>
                <ChevronRight className="w-4 h-4 text-orange-400 group-hover:text-white" />
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A192F] border-b border-orange-500/30 px-4 pt-3 pb-6 text-white space-y-3 animate-in fade-in slide-in-from-top duration-200">
            <div className="py-2 border-b border-slate-700">
              <p className="text-xs font-semibold text-orange-400 tracking-wider uppercase">
                Building Strength, Welding Trust
              </p>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-2 text-base font-medium text-slate-200 hover:text-orange-400 border-b border-slate-800/60"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLetterhead();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-800 border border-slate-700"
              >
                <FileText className="w-4 h-4 text-orange-400" />
                <span>View Corporate Letterhead</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-700 text-center"
              >
                Request Fabrication Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
