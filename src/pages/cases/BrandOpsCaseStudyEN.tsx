import { motion } from 'motion/react';

interface BrandOpsCaseStudyENProps {
  onBack: () => void;
}

const Placeholder = ({ text, aspect, type = 'image', src = '', className = '' }: { text: string, aspect: string, type?: 'image' | 'video', src?: string, className?: string }) => {
  if (src) {
    if (type === 'video') {
      return <video src={src} autoPlay loop muted playsInline className={`w-full object-cover ${className}`} style={{ aspectRatio: aspect }} />;
    }
    return <img src={src} alt={text} className={`w-full object-cover ${className}`} style={{ aspectRatio: aspect }} />;
  }
  return (
    <div 
      className={`bg-[#F0F0F0] flex items-center justify-center text-[#999999] text-lg md:text-2xl font-medium w-full ${className}`} 
      style={{ aspectRatio: aspect }}
    >
      {text}
    </div>
  );
};

export default function BrandOpsCaseStudyEN({ onBack }: BrandOpsCaseStudyENProps) {
  return (
    <div className="w-full bg-[#FFFFFF] text-[#1A1A1A] font-['Inter'] min-h-screen pt-[73px] overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px] pt-[80px] pb-[160px]">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-[120px] md:mb-[148px]">
          <div className="lg:col-span-5 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[40px] md:text-[56px] xl:text-[64px] font-black leading-[1.1] tracking-tight text-balance"
            >
              Building AI-Driven Design Operations from 0→1
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1 text-[14px] text-gray-500 mt-4 leading-relaxed"
            >
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >Enterprise Project · 9 Months</motion.p>
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >Design Lead · AI Design × Design Ops × Leadership</motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[14px] text-gray-600 mt-6 leading-relaxed max-w-[1140px] text-pretty"
            >
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >Leading a Team to Build Scalable Design Production</motion.p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
              <Placeholder src="https://img.nickiresume.cn/videos/657x370 banner.mp4" aspect="657/370" type="video" />
            </motion.div>
          </motion.div>
        </div>

        {/* Section 1: CONTEXT */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              CONTEXT
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
          >
              How To Scaling Output Without Increasing Headcount
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x450-B-EN-Png" aspect="1140/450" type="image" src="https://img.nickiresume.cn/images/05promption/01EN.webp" />
          </motion.div>
        </div>

        {/* Section 2: STRATEGY */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              STRATEGY
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
          >
              Transforming Design From “Execution” To An “AI-Driven Production System”
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x560-C-EN-Png" aspect="1140/560" type="image" src="https://img.nickiresume.cn/images/05promption/02EN.webp" />
          </motion.div>
        </div>

        {/* Section 3: AI CAPABILITY */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[80px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              AI CAPABILITY
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
          >
              From Tool Usage To Building Team AI Design Capabilities
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x1360-D-EN-Png" aspect="1140/1360" type="image" src="https://img.nickiresume.cn/images/05promption/03EN.webp" />
          </motion.div>
        </div>

        {/* Section 4: COLLABORATION */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[80px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              COLLABORATION
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
          >
              AI Product & Collaboration
            </motion.h2>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[16px] text-gray-600 mt-4 max-w-[1140px] text-pretty"
          >
              Cross-Functional Integration
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x780-E-EN-Png" aspect="1140/780" type="image" src="https://img.nickiresume.cn/images/05promption/04EN.webp" />
          </motion.div>
        </div>

        {/* Section 5: RESOURCE OPTIMIZATION */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[64px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              RESOURCE OPTIMIZATION
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
          >
              Design Ops & Resource System
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x800-F-EN-Png" aspect="1140/800" type="image" src="https://img.nickiresume.cn/images/05promption/05EN.webp" />
          </motion.div>
        </div>

        {/* Section 6: DIFFERENTIAL PRODUCT DESIGN */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[56px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              DIFFERENTIAL PRODUCT DESIGN
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
          >
              Freeing Up Resources To Build High-Value Products
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x800-G-EN-Png" aspect="1140/800" type="image" src="https://img.nickiresume.cn/images/05promption/06EN.webp" />
          </motion.div>
        </div>

        {/* Section 7: BUSINESS RESULTS */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[80px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              BUSINESS RESULTS
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
          >
              Scalable Design & Efficiency Gains
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x350-H-EN-Png" aspect="1140/390" type="image" src="https://img.nickiresume.cn/images/05promption/07EN.webp" />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
