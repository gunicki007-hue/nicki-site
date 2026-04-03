import React from 'react';
import { motion } from 'motion/react';
import { contentData } from './DesignSystemContent';

interface DesignSystemProps {
  language: 'EN' | 'CN';
}

const Placeholder = ({ text, aspect, type = 'image', src = '', className = '' }: { text: string, aspect: string, type?: 'image' | 'video', src?: string, className?: string }) => {
  if (src) {
    if (type == 'video') {
      return <video src={src} autoPlay loop muted playsInline className={`w-full h-auto block ${className}`} />;
    }
    return <img src={src} alt={text} className={`w-full h-auto block ${className}`} />;
  }
  return (
    <div 
      className={`bg-[#F5F5F5] flex items-center justify-center text-[#B3B3B3] text-lg md:text-3xl font-medium w-full ${className}`} 
      style={{ aspectRatio: aspect }}
    >
      {text}
    </div>
  );
};

export default function DesignSystem({ language }: DesignSystemProps) {
  const content = contentData[language] || contentData.EN;

  return (
    <div className="w-full bg-white text-[#111111] min-h-screen pt-0 overflow-x-hidden">
      {/* Hero Section - Full Width */}
      <div className="relative w-full mb-[120px] md:mb-[148px] flex items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <Placeholder text={content.heroPlaceholder} aspect={content.heroAspect} type="video" src="https://img.nickiresume.cn/videos/systembg.mp4" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={language === 'CN' ? "https://img.nickiresume.cn/images/06system/BCN.webp" : "https://img.nickiresume.cn/images/06system/BEN.webp"}
            alt={content.heroTitle}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px] pb-[160px]">
        {/* Section 1 */}
        <div className="mb-[120px] md:mb-[148px] flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[40px] md:text-[56px] xl:text-[64px] font-[800] text-[#111111] leading-[1.1] tracking-tighter mb-4 text-balance"
          >
            {content.sec1Title}
          </motion.h2>
          {content.sec1Desc && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18px] md:text-[24px] text-[#111111] mb-12 text-balance"
            >
              {content.sec1Desc}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full"
          >
            <Placeholder text={content.sec1Placeholder} aspect={content.sec1Aspect} type="image" src={language === 'CN' ? "https://img.nickiresume.cn/images/06system/01CN.webp" : "https://img.nickiresume.cn/images/06system/01EN.webp"} />
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="mb-[120px] md:mb-[148px] flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[40px] md:text-[56px] xl:text-[64px] font-[800] text-[#111111] leading-[1.1] tracking-tighter mb-4 text-balance"
          >
            {content.sec2Title}
          </motion.h2>
          {content.sec2Desc && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18px] md:text-[24px] text-[#111111] mb-12 text-balance"
            >
              {content.sec2Desc}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full"
          >
            <Placeholder text={content.sec2Placeholder} aspect={content.sec2Aspect} type="image" src={language === 'CN' ? "https://img.nickiresume.cn/images/06system/02CN.webp" : "https://img.nickiresume.cn/images/06system/02EN.webp"} />
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="mb-[120px] md:mb-[148px] flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[40px] md:text-[56px] xl:text-[64px] font-[800] text-[#111111] leading-[1.1] tracking-tighter mb-4 text-balance"
          >
            {content.sec3Title}
          </motion.h2>
          {content.sec3Desc && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18px] md:text-[24px] text-[#111111] mb-12 text-balance"
            >
              {content.sec3Desc}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full"
          >
            <Placeholder text={content.sec3Placeholder} aspect={content.sec3Aspect} type="image" src={language === 'CN' ? "https://img.nickiresume.cn/images/06system/03CN.webp" : "https://img.nickiresume.cn/images/06system/03EN.webp"} />
          </motion.div>
        </div>

        {/* Section 4 */}
        <div className="mb-[120px] md:mb-[148px] flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`text-[40px] md:text-[56px] xl:text-[64px] font-[800] text-[#111111] leading-[1.1] tracking-tighter ${content.sec4Desc ? 'mb-4' : 'mb-12'} text-balance`}
          >
            {content.sec4Title}
          </motion.h2>
          {content.sec4Desc && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18px] md:text-[24px] text-[#111111] mb-12 text-balance"
            >
              {content.sec4Desc}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full"
          >
            <Placeholder text={content.sec4Placeholder} aspect={content.sec4Aspect} type="image" src={language === 'CN' ? "https://img.nickiresume.cn/images/06system/04CN.webp" : "https://img.nickiresume.cn/images/06system/04EN.webp"} />
          </motion.div>
        </div>

        {/* Section 5 */}
        <div className="mb-[120px] md:mb-[148px] flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`text-[40px] md:text-[56px] xl:text-[64px] font-[800] text-[#111111] leading-[1.1] tracking-tighter ${content.sec5Desc ? 'mb-4' : 'mb-12'} text-balance`}
          >
            {content.sec5Title}
          </motion.h2>
          {content.sec5Desc && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18px] md:text-[24px] text-[#111111] mb-12 text-balance"
            >
              {content.sec5Desc}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full"
          >
            <Placeholder text={content.sec5Placeholder} aspect={content.sec5Aspect} type="image" src={language === 'CN' ? "https://img.nickiresume.cn/images/06system/05CN.webp" : "https://img.nickiresume.cn/images/06system/05EN.webp"} />
          </motion.div>
        </div>

        {/* Section 6 */}
        <div className="mb-[120px] md:mb-[148px] flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`text-[40px] md:text-[56px] xl:text-[64px] font-[800] text-[#111111] leading-[1.1] tracking-tighter ${content.sec6Desc ? 'mb-4' : 'mb-12'} text-balance`}
          >
            {content.sec6Title}
          </motion.h2>
          {content.sec6Desc && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18px] md:text-[24px] text-[#111111] mb-12 text-balance"
            >
              {content.sec6Desc}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full"
          >
            <Placeholder text={content.sec6Placeholder} aspect={content.sec6Aspect} type="image" src={language === 'CN' ? "https://img.nickiresume.cn/images/06system/06CN.webp" : "https://img.nickiresume.cn/images/06system/06EN.webp"} />
          </motion.div>
        </div>

        {/* Section 7 */}
        <div className="mb-[120px] md:mb-[148px] flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`text-[40px] md:text-[56px] xl:text-[64px] font-[800] text-[#111111] leading-[1.1] tracking-tighter ${content.sec7Desc ? 'mb-4' : 'mb-12'} text-balance`}
          >
            {content.sec7Title}
          </motion.h2>
          {content.sec7Desc && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18px] md:text-[24px] text-[#111111] mb-12 text-balance"
            >
              {content.sec7Desc}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full"
          >
            <Placeholder text={content.sec7Placeholder} aspect={content.sec7Aspect} type="image" src={language === 'CN' ? "https://img.nickiresume.cn/images/06system/07CN.webp" : "https://img.nickiresume.cn/images/06system/07EN.webp"} />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
