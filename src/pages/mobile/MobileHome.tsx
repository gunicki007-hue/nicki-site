import React from 'react';

interface MobileHomeProps {
  language: 'EN' | 'CN';
  onCaseClick: (slug: string) => void;
}

export const MOBILE_HOME_IMAGES = {
  EN: {
    slice1: "https://img.nickiresume.cn/images/APP-01profilecontents/01EN.webp",
    slice2: "https://img.nickiresume.cn/images/APP-01profilecontents/02EN.webp",
    slice3: "https://img.nickiresume.cn/images/APP-01profilecontents/03EN.webp",
    slice4: "https://img.nickiresume.cn/images/APP-01profilecontents/04EN.webp",
    slice5: "https://img.nickiresume.cn/images/APP-01profilecontents/05EN.webp",
    slice6: "https://img.nickiresume.cn/images/APP-01profilecontents/06EN.webp",
  },
  CN: {
    slice1: "https://img.nickiresume.cn/images/APP-01profilecontents/01CN.webp",
    slice2: "https://img.nickiresume.cn/images/APP-01profilecontents/02CN.webp",
    slice3: "https://img.nickiresume.cn/images/APP-01profilecontents/03CN.webp",
    slice4: "https://img.nickiresume.cn/images/APP-01profilecontents/04CN.webp",
    slice5: "https://img.nickiresume.cn/images/APP-01profilecontents/05CN.webp",
    slice6: "https://img.nickiresume.cn/images/APP-01profilecontents/06CN.webp",
  }
};

export default function MobileHome({ language, onCaseClick }: MobileHomeProps) {
  const images = MOBILE_HOME_IMAGES[language];
  const isCN = language === 'CN';

  // Button style based on 750px width:
  // Width: 390px (52%)
  // Height: 90px (12vw)
  // Bottom: 60px (8vw or 6.14% of 976px)
  // Border radius: 20px (approx 2.6vw)
  const buttonClass = "absolute left-1/2 -translate-x-1/2 w-[52%] aspect-[39/9] rounded-[20px] border border-black flex items-center justify-center text-black font-medium text-[3.5vw] active:bg-black/5 transition-colors cursor-pointer bg-transparent";

  return (
    <div className="w-full flex flex-col bg-[#EBEBEB]">
      {/* Slice 1: Hero */}
      <div className="relative w-full">
        <img src={images.slice1} alt="Hero" className="w-full block" />
      </div>

      {/* Slice 2: Case 1 (Web3) */}
      <div className="relative w-full">
        <img src={images.slice2} alt="Case 1" className="w-full block" />
        <button 
          className={buttonClass} 
          style={{ bottom: '6.14%' }}
          onClick={() => onCaseClick('web3')}
        >
          {isCN ? '点击查看 →' : 'VIEW CASE STUDY →'}
        </button>
      </div>

      {/* Slice 3: Case 2 (Insurance) */}
      <div className="relative w-full">
        <img src={images.slice3} alt="Case 2" className="w-full block" />
        <button 
          className={buttonClass} 
          style={{ bottom: '6.14%' }}
          onClick={() => onCaseClick('insurance')}
        >
          {isCN ? '点击查看 →' : 'VIEW CASE STUDY →'}
        </button>
      </div>

      {/* Slice 4: Case 3 (AI Ops) */}
      <div className="relative w-full">
        <img src={images.slice4} alt="Case 3" className="w-full block" />
        <button 
          className={buttonClass} 
          style={{ bottom: '6.14%' }}
          onClick={() => onCaseClick('aesthetic')}
        >
          {isCN ? '点击查看 →' : 'VIEW CASE STUDY →'}
        </button>
      </div>

      {/* Slice 5: Design Systems */}
      <div className="relative w-full">
        <img src={images.slice5} alt="Design Systems" className="w-full block" />
        <button 
          className={buttonClass} 
          style={{ bottom: '7.27%' }} // 60 / 825 = 7.27%
          onClick={() => onCaseClick('system')}
        >
          {isCN ? '点击查看 →' : 'VIEW →'}
        </button>
      </div>

      {/* Slice 6: Footer */}
      <div className="relative w-full bg-[#111111] pb-[env(safe-area-inset-bottom)]">
        <img src={images.slice6} alt="Footer" className="w-full block" />
      </div>
    </div>
  );
}
