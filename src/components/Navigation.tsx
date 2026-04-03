import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  activeItem?: string;
  language?: 'EN' | 'CN';
  theme?: 'light' | 'dark';
  showBack?: boolean;
  onBackClick?: () => void;
  onLanguageChange?: (lang: 'EN' | 'CN') => void;
  onNavClick?: (item: string) => void;
  onContactClick?: () => void;
}

export default function Navigation({ activeItem = 'Profile', language = 'EN', theme = 'light', showBack = false, onBackClick, onLanguageChange, onNavClick, onContactClick }: NavigationProps) {
  const navItems = language === 'CN' 
    ? [
        { name: '个人档案', key: 'Profile', active: activeItem === 'Profile' },
        { name: '战略案例', key: 'Selected', active: activeItem === 'Selected' },
        { name: '设计体系 × AI', key: 'Strategy', active: activeItem === 'Strategy' }
      ]
    : [
        { name: 'Profile', key: 'Profile', active: activeItem === 'Profile' },
        { name: 'Case Studies', key: 'Selected', active: activeItem === 'Selected' },
        { name: 'Design Systems × AI', key: 'Strategy', active: activeItem === 'Strategy' }
      ];

  const contactText = language === 'CN' ? '联系我' : 'Contact';
  const isDark = theme === 'dark';

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Desktop Layout */}
      <div className={`hidden md:block w-full ${
        showBack 
          ? (isDark ? 'bg-[#050505] border-white/10' : 'bg-[#F5F5F5]/80 backdrop-blur-md border-black/5')
          : (isDark ? 'bg-[#050505] border-white/10' : 'bg-[#F5F5F5] border-black/5')
      } border-b`}>
        <div className="nav-inner flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 md:px-[180px] py-6">
          <div className={`logo font-['Inter'] font-bold tracking-[0.05em] uppercase text-[16px] flex-shrink-0 ${isDark ? 'text-white' : 'text-[#111111]'}`}>
            {showBack ? (
              <button onClick={onBackClick} className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer normal-case text-[14px] font-medium tracking-normal">
                <ArrowLeft size={18} /> {language === 'CN' ? '返回案例' : 'Back to Cases'}
              </button>
            ) : (
              "NICKI"
            )}
          </div>
          
          <nav className="nav-links flex-1 flex items-center justify-center [&>.nav-item+.nav-item]:ml-[48px] px-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                className={`nav-item whitespace-nowrap font-['Inter'] relative text-[15px] tracking-tight pb-0.5 transition-all duration-200 ${
                  item.active 
                    ? (isDark ? 'text-white font-medium' : 'text-[#111111] font-medium') 
                    : (isDark ? 'text-white/60 hover:text-white' : 'text-[#111111] font-normal hover:opacity-60')
                }`}
                onClick={() => onNavClick && onNavClick(item.key)}
              >
                {item.name}
                {item.active && (
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-[1px] ${isDark ? 'bg-white' : 'bg-[#111111]'}`} 
                    layoutId="activeUnderline" 
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <div className="nav-actions flex items-center gap-10 flex-shrink-0">
            <div className="lang flex items-center gap-4 text-[14px] font-['Inter']">
              <span 
                className={`cursor-pointer transition-opacity ${
                  language === 'EN' 
                    ? (isDark ? 'font-bold text-white' : 'font-bold text-[#111111]') 
                    : (isDark ? 'text-white/40 hover:text-white' : 'text-[#111111]/40 hover:opacity-100')
                }`} 
                onClick={() => onLanguageChange?.('EN')}
              >
                EN
              </span>
              <span 
                className={`cursor-pointer transition-opacity ${
                  language === 'CN' 
                    ? (isDark ? 'font-bold text-white' : 'font-bold text-[#111111]') 
                    : (isDark ? 'text-white/40 hover:text-white' : 'text-[#111111]/40 hover:opacity-100')
                }`} 
                onClick={() => onLanguageChange?.('CN')}
              >
                CN
              </span>
            </div>
            <button 
              className={`${isDark ? 'bg-white text-black' : 'bg-[#111111] text-white'} px-8 py-2.5 text-[15px] font-medium transition-all hover:opacity-90 active:scale-95 rounded-none`} 
              onClick={onContactClick}
            >
              {contactText}
            </button>
          </div>
        </div>
      </div>

    </header>
  );
}
