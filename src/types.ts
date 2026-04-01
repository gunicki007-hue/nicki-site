export type Language = 'EN' | 'CN';

export interface CaseStudy {
  id: string;
  slug: string;
  title: { EN: string; CN: string };
  category: { EN: string; CN: string };
  thumbnail: string;
  heroImage: string;
  description: { EN: string; CN: string };
  
  // Detail Sections
  context: { EN: string; CN: string };
  challenge: { EN: string; CN: string };
  strategy: { EN: string; CN: string };
  systemArchitecture: { EN: string; CN: string };
  productFramework: { EN: string; CN: string };
  brandDNA: { EN: string; CN: string };
  visualDesign: { EN: string; CN: string };
  marketingAssets: { EN: string; CN: string };
  impact: { EN: string; CN: string };
}

export interface Translations {
  [key: string]: {
    EN: string;
    CN: string;
  };
}
