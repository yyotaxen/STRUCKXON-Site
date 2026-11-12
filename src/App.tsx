import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ToolsBlueprintStation } from './components/ToolsBlueprintStation';
import { StructuralSolutions } from './components/StructuralSolutions';
import { EstimatorRFQ } from './components/EstimatorRFQ';
import { ProjectShowcase } from './components/ProjectShowcase';
import { NewsInsights } from './components/NewsInsights';
import { QualityCertifications } from './components/QualityCertifications';
import { CorporateLetterheadModal } from './components/CorporateLetterheadModal';
import { QuoteModal } from './components/QuoteModal';
import { Footer } from './components/Footer';
import { SpecSheetState } from './types';

export default function App() {
  const [isLetterheadOpen, setIsLetterheadOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [currentSpecs, setCurrentSpecs] = useState<SpecSheetState>({
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

  const handleGenerateLetterhead = (specs: SpecSheetState) => {
    setCurrentSpecs(specs);
    setIsLetterheadOpen(true);
  };

  const handleOpenQuoteWithSpecs = (specs: SpecSheetState) => {
    setCurrentSpecs(specs);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      {/* ExxonMobil-Style Top Bar with Corporate Letterhead Accent */}
      <Header
        onOpenLetterhead={() => setIsLetterheadOpen(true)}
        onOpenQuoteModal={() => setIsQuoteOpen(true)}
      />

      {/* Main Structural Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenLetterhead={() => setIsLetterheadOpen(true)}
          onOpenQuoteModal={() => setIsQuoteOpen(true)}
        />

        {/* Welding & Fabrication Tools Artwork & Interactive Blueprint Inspector */}
        <ToolsBlueprintStation />

        {/* Structural Sectors & Industrial Engineering Capabilities */}
        <StructuralSolutions
          onOpenQuoteModal={() => setIsQuoteOpen(true)}
        />

        {/* Interactive Specification Estimator & Letterhead Generator */}
        <EstimatorRFQ
          onGenerateLetterhead={handleGenerateLetterhead}
          onOpenQuoteWithSpecs={handleOpenQuoteWithSpecs}
        />

        {/* Monumental Projects Portfolio */}
        <ProjectShowcase
          onOpenQuoteModal={() => setIsQuoteOpen(true)}
        />

        {/* ExxonMobil-Style Corporate News, Metallurgy & Enterprise Insights */}
        <NewsInsights />

        {/* Certified Quality, AWS/ASME Accreditations & NDT Testing */}
        <QualityCertifications />
      </main>

      {/* Authoritative Corporate Footer in Navy & Orange */}
      <Footer
        onOpenLetterhead={() => setIsLetterheadOpen(true)}
        onOpenQuoteModal={() => setIsQuoteOpen(true)}
      />

      {/* Official Corporate Letterhead Document Modal (Navy Blue & Orange) */}
      <CorporateLetterheadModal
        isOpen={isLetterheadOpen}
        onClose={() => setIsLetterheadOpen(false)}
        specs={currentSpecs}
      />

      {/* RFP / Formal Quotation Portal Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialSpecs={currentSpecs}
      />
    </div>
  );
}
