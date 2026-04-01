import { motion } from 'motion/react';

interface BrandOpsCaseStudyCNProps {
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

export default function BrandOpsCaseStudyCN({ onBack }: BrandOpsCaseStudyCNProps) {
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
              AI赋能<br/>设计运营体系
            </motion.h1>
            <div className="text-[18px] md:text-[24px] font-bold mt-4">
              0→1落地
            </div>
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
          >企业级实践 · 9个月</motion.p>
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >设计负责人 · AI设计 x 设计运营 x 团队管理</motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[14px] text-gray-600 mt-6 leading-relaxed max-w-[400px]"
            >
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >带领视觉团队构建设计生产系统，实现规模化、降本增效与业务增长</motion.p>
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

        {/* Section 1: 问题定义 */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              问题定义
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
          >
              如何在维持现有人力下<br/>
              <span className="text-[#FF6A00]">提升</span>设计产能与质量
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x450-B-CN-Png" aspect="1140/450" type="image" src="https://img.nickiresume.cn/images/05promption/01CN.webp" />
          </motion.div>
        </div>

        {/* Section 2: 核心决策 */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              核心决策
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
          >
              将设计从“执行”升级为“AI驱动生产系统”
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x560-C-CN-Png" aspect="1140/560" type="image" src="https://img.nickiresume.cn/images/05promption/02CN.webp" />
          </motion.div>
        </div>

        {/* Section 3: AI能力建设 */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[80px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              AI能力建设
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
          >
              从工具使用到搭建团队AI设计能力
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x1360-D-CN-Png" aspect="1140/1360" type="image" src="https://img.nickiresume.cn/images/05promption/03CN.webp" />
          </motion.div>
        </div>

        {/* Section 4: 沟通协作 */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              沟通协作
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
          >
              AI产品化与跨部门协同
            </motion.h2>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[16px] text-gray-600 mt-4"
          >
              设计 × 产品 × 技术 × 运营协同
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x780-E-CN-Png" aspect="1140/780" type="image" src="https://img.nickiresume.cn/images/05promption/04CN.webp" />
          </motion.div>
        </div>

        {/* Section 5: 资源整合 */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              资源整合
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
          >
              设计运营与资源优化
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x800-F-CN-Png" aspect="1140/800" type="image" src="https://img.nickiresume.cn/images/05promption/05CN.webp" />
          </motion.div>
        </div>

        {/* Section 6: 差异化产品打造 */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[64px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              差异化产品打造
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
          >
              释放资源，打造高价值产品
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x800-G-CN-Png" aspect="1140/800" type="image" src="https://img.nickiresume.cn/images/05promption/06CN.webp" />
          </motion.div>
        </div>

        {/* Section 7: 业务结果 */}
        <div className="mb-[120px] md:mb-[148px]">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              业务结果
            </div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
          >
              规模化设计与降本增效
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder text="Case 3-1140x350-H-CN-Png" aspect="1140/390" type="image" src="https://img.nickiresume.cn/images/05promption/07CN.webp" />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
