export interface FabricationTool {
  id: string;
  name: string;
  category: 'welding' | 'cutting' | 'measurement' | 'prep';
  tagline: string;
  description: string;
  keySpecs: { label: string; value: string }[];
  tolerances: string;
  processes: string[];
  safetyStandard: string;
  cadSymbol: string;
}

export interface NewsInsight {
  id: string;
  kicker: string;
  title: string;
  summary: string;
  fullContent: string[];
  date: string;
  readTime: string;
  category: 'Metallurgy' | 'Automation' | 'Infrastructure' | 'Standards';
  featured?: boolean;
}

export interface StructuralSector {
  id: string;
  title: string;
  code: string;
  description: string;
  capabilities: string[];
  specs: { label: string; value: string }[];
  leadProject: string;
  inspectionStandard: string;
}

export interface ProjectCase {
  id: string;
  title: string;
  category: 'bridge' | 'energy' | 'architectural' | 'vessel';
  categoryLabel: string;
  location: string;
  tonnage: string;
  weldProcesses: string[];
  completionYear: string;
  highlight: string;
  description: string;
}

export interface SpecSheetState {
  projectName: string;
  clientCompany: string;
  clientEmail: string;
  structuralType: string;
  steelGrade: string;
  tonnageEst: number;
  weldingMethod: string;
  ndtRegime: string;
  surfaceFinish: string;
  deliveryTimeline: string;
  specialRequirements: string;
}
