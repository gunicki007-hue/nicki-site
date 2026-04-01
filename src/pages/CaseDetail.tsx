import Web3CaseStudyEN from './cases/Web3CaseStudyEN';
import Web3CaseStudyCN from './cases/Web3CaseStudyCN';
import BrandOpsCaseStudyEN from './cases/BrandOpsCaseStudyEN';
import BrandOpsCaseStudyCN from './cases/BrandOpsCaseStudyCN';
import InsuranceCaseStudyEN from './cases/InsuranceCaseStudyEN';
import InsuranceCaseStudyCN from './cases/InsuranceCaseStudyCN';

interface CaseDetailProps {
  slug: string;
  language: 'EN' | 'CN';
  onBack: () => void;
}

export default function CaseDetail({ slug, language, onBack }: CaseDetailProps) {
  const isCN = language === 'CN';

  // Render specific case study pages
  if (slug === 'web3') {
    if (isCN) {
      return <Web3CaseStudyCN onBack={onBack} />;
    } else {
      return <Web3CaseStudyEN onBack={onBack} />;
    }
  }

  if (slug === 'aesthetic') {
    if (isCN) {
      return <BrandOpsCaseStudyCN onBack={onBack} />;
    } else {
      return <BrandOpsCaseStudyEN onBack={onBack} />;
    }
  }

  if (slug === 'insurance') {
    if (isCN) {
      return <InsuranceCaseStudyCN onBack={onBack} />;
    } else {
      return <InsuranceCaseStudyEN onBack={onBack} />;
    }
  }

  return null;
}
