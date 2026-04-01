import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HomeFooter from '../components/HomeFooter';
import ContactModal from '../components/ContactModal';
import Profile from './Profile';
import Strategy from './Strategy';
import CaseDetail from './CaseDetail';
import DesignSystem from './DesignSystem';

export default function Home() {
  const [language, setLanguage] = useState<'EN' | 'CN'>('EN');
  const [currentPage, setCurrentPage] = useState('Profile');
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Handle cross-component navigation via custom events
  useEffect(() => {
    const handleNavigation = (e: any) => {
      if (e.detail?.project) {
        setCurrentPage(`case-${e.detail.project}`);
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('navigateToProject', handleNavigation);
    return () => window.removeEventListener('navigateToProject', handleNavigation);
  }, []);

  const renderContent = () => {
    if (currentPage.startsWith('case-')) {
      const slug = currentPage.replace('case-', '');
      return <CaseDetail slug={slug} language={language} onBack={() => setCurrentPage('Selected')} />;
    }

    switch (currentPage) {
      case 'Profile': return <Profile language={language} />;
      case 'Selected': return <Strategy language={language} onCaseClick={(slug) => setCurrentPage(`case-${slug}`)} />;
      case 'Strategy': return <DesignSystem language={language} />;
      default: return <Profile language={language} />;
    }
  };

  const isDarkTheme = currentPage.startsWith('case-') || currentPage === 'case-web3';

  return (
    <div className={`min-h-screen flex flex-col ${isDarkTheme ? 'bg-[#050505]' : 'bg-[#EBEBEB]'}`}>
      <Navigation 
        activeItem={currentPage.startsWith('case-') ? '' : currentPage} 
        language={language} 
        theme={isDarkTheme ? 'dark' : 'light'}
        showBack={currentPage.startsWith('case-')}
        onBackClick={() => setCurrentPage('Selected')}
        onLanguageChange={setLanguage}
        onNavClick={(page) => {
          setCurrentPage(page);
          window.scrollTo(0, 0);
        }}
        onContactClick={() => setIsContactOpen(true)}
      />
      
      <main className={`flex-grow ${isDarkTheme ? '' : 'pt-[55px] md:pt-[91px]'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {currentPage === 'Profile' ? (
        <HomeFooter language={language} />
      ) : (
        <Footer language={language} />
      )}
      
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        language={language} 
      />
    </div>
  );
}
