import { motion } from 'motion/react';

interface InsuranceCaseStudyCNProps {
  onBack: () => void;
}

export default function InsuranceCaseStudyCN({ onBack }: InsuranceCaseStudyCNProps) {
  return (
    <div className="w-full bg-white font-['Inter'] min-h-screen pt-[73px] overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full bg-white flex flex-col items-center overflow-hidden">
        <div className="relative w-full aspect-[1440/590] flex flex-col items-center justify-center overflow-hidden">
          
          {/* Video Background */}
          <video 
            src="https://img.nickiresume.cn/videos/insurancebgbanner.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://img.nickiresume.cn/images/04insurance/banner bg poster.webp"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Text Content Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center z-10 relative px-6 h-[360px]"
          >
            <h1 className="text-[48px] md:text-[56px] xl:text-[64px] font-bold leading-[76.4px] tracking-tight text-[#111111] mb-6 h-[142px]">
              构建企业级保险平台的<br />可扩展设计系统
            </h1>
            <p className="text-[16px] leading-[24px] text-[#666666] max-w-[800px] mx-auto">
              通过平台架构重构与设计系统建设，统一代理人平台体验并实现设计规模化。
            </p>
          </motion.div>

        </div>
      </section>

      {/* Main Content Container with 1440px max width and 150px side margins */}
      <div className="max-w-[1440px] mx-auto px-6 xl:px-[150px]">
        
        {/* Section 1: 业务背景 */}
        <section className="py-[120px] md:py-[80px] flex flex-col items-center text-center relative">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              业务背景
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
            >
              从业务增长中<span className="text-[#0055FF]">识别</span>系统性设计问题
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[16px] text-[#666666] max-w-[600px] mb-12 leading-[1.6]"
            >
              在平台快速增长过程中，我发现设计问题已从界面层升级为系统性问题。<br />
              产品能力不断叠加，但缺乏结构统一，导致体验断裂与设计效率下降。
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[20px] font-bold mb-12 text-[#111111]"
            >
              将问题重新定义为：平台系统重构
            </motion.p>
            
            {/* Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[1140px] aspect-[1140/420] flex flex-col items-center justify-center text-[#999999] rounded-lg overflow-hidden relative"
            >
              {/* Actual Image */}
              <img src="https://img.nickiresume.cn/images/04insurance/01CN.webp" alt="业务背景" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Section 2: 核心挑战 */}
        <section className="py-[120px] md:py-[80px] flex flex-col items-center text-center relative">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              核心挑战
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
            >
              从表层问题到结构性问题
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[20px] font-medium mb-12 text-[#111111]"
            >
              经洞察，我将问题拆解为三个核心维度
            </motion.p>
            
            {/* Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[1140px] aspect-[1140/510] flex flex-col items-center justify-center text-[#999999] rounded-lg overflow-hidden relative"
            >
              {/* Actual Image */}
              <img src="https://img.nickiresume.cn/images/04insurance/02CN.webp" alt="核心挑战" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Section 3: 设计策略 */}
        <section className="py-[120px] md:py-[80px] flex flex-col items-center text-center relative">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              设计策略
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
            >
              从局部优化到系统重构
            </motion.h2>
            
            {/* Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[1140px] aspect-[1140/450] flex flex-col items-center justify-center text-[#999999] rounded-lg overflow-hidden relative"
            >
              {/* Actual Image */}
              <img src="https://img.nickiresume.cn/images/04insurance/03CN.webp" alt="设计策略" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Section 4: 架构决策 */}
        <section className="py-[120px] md:py-[80px] flex flex-col items-center text-center relative">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              架构决策
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
            >
              从功能架构到认知驱动的系统重构
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[800px] mb-16"
            >
              <p className="text-[20px] font-bold mb-4 text-[#111111]">
                将复杂业务重构为统一系统模型
              </p>
              <p className="text-[14px] text-[#666666] leading-[1.6]">
                通过对代理人认知路径的分析，我将原有以功能堆叠为核心的结构，重构为基于业务域（Domain）的系统模型。这一重构不仅降低了用户的理解成本，同时建立了统一的系统结构，为后续设计系统与规模化设计提供基础，是整个系统设计的<span className="font-bold text-[#111111]">核心决策</span>。
              </p>
            </motion.div>
            
            {/* Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[1140px] aspect-[1140/660] flex flex-col items-center justify-center text-[#999999] rounded-lg overflow-hidden relative"
            >
              {/* Actual Image */}
              <img src="https://img.nickiresume.cn/images/04insurance/04CN.webp" alt="架构决策" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Section 5: 设计系统 */}
        <section className="py-[120px] md:py-[80px] flex flex-col items-center relative">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              设计系统
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
            >
              将设计从输出变为资产
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[20px] font-medium mb-16 text-center text-[#111111]"
            >
              在系统模型基础上，我建立企业级 Design System
            </motion.p>
            
            <div className="w-full max-w-[1140px] flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-[250px] flex flex-col gap-12">
                <motion.ul 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-2 text-[16px] font-medium list-disc pl-5 text-[#111111]"
                >
                  <li>视觉语言系统</li>
                  <li>组件体系</li>
                  <li>插画资产库</li>
                  <li>内容模板体</li>
                </motion.ul>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[16px] font-medium text-[#111111]"
                >
                  让设计具备<span className="text-[#0055FF]">复用</span><br />
                  能力与<span className="text-[#0055FF]">扩展</span>能力
                </motion.div>
              </div>
              
              {/* Video Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 w-full aspect-[848/480] flex flex-col items-center justify-center text-[#999999] rounded-lg overflow-hidden relative"
              >
                <span className="text-[32px] font-medium mb-4">848x480</span>
                <span className="text-[24px]">Case 2-E-CN-mp4</span>
                {/* Replace src with actual video URL */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="[在这里替换视频封面图链接]"
                  className="absolute inset-0 w-full h-full object-cover z-10" // Remove opacity-0 when actual video is added
                >
                  <source src="https://img.nickiresume.cn/videos/09case2systen01.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 6: 设计运营 */}
        <section className="py-[120px] md:py-[80px] flex flex-col items-center relative">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              设计运营
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
            >
              构建规模化设计生产能力
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[20px] font-medium mb-16 text-center text-[#111111]"
            >
              我进一步将设计系统应用于内容生产，建立设计运营体系
            </motion.p>
            
            <div className="w-full max-w-[1140px] flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-[250px] flex flex-col gap-12">
                <motion.ul 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-2 text-[16px] font-medium list-disc pl-5 text-[#111111]"
                >
                  <li>模板化设计</li>
                  <li>资产复用</li>
                  <li>内容快速生产</li>
                </motion.ul>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[16px] font-medium text-[#111111]"
                >
                  <span className="font-bold">模板化设计</span><br />
                  <span className="font-bold">资产复用</span><br />
                  <span className="text-[#0055FF]">内容快速生产</span>
                </motion.div>
              </div>
              
              {/* Video Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 w-full aspect-[848/480] flex flex-col items-center justify-center text-[#999999] rounded-lg overflow-hidden relative"
              >
                <span className="text-[32px] font-medium mb-4">848x480</span>
                <span className="text-[24px]">Case 2-F-CN-mp4</span>
                {/* Replace src with actual video URL */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  poster="[在这里替换视频封面图链接]"
                  className="absolute inset-0 w-full h-full object-cover z-10" // Remove opacity-0 when actual video is added
                >
                  <source src="https://img.nickiresume.cn/videos/09case2systen02.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 7: 项目影响 */}
        <section className="py-[120px] md:py-[80px] flex flex-col items-center text-center relative">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              项目影响
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
            >
              系统化设计带来的业务价值
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[14px] text-[#666666] max-w-[600px] mb-8 leading-[1.6]"
            >
              通过系统重构，设计从执行层走向业务驱动能力。<br />
              同时，本项目沉淀的系统化设计方法，可复用于复杂平台设计与 AI 系统构建。
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[20px] font-medium mb-16 text-[#111111]"
            >
              从结构优化到业务价值的量化体现
            </motion.p>
            
            {/* Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[1140px] aspect-[1140/630] flex flex-col items-center justify-center text-[#999999] rounded-lg overflow-hidden relative mb-12"
            >
              {/* Actual Image */}
              <img src="https://img.nickiresume.cn/images/04insurance/05CN.webp" alt="项目影响" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18px] font-medium text-[#111111]"
            >
              系统化设计不仅<span className="font-bold">提升体验质量</span>，更驱动可量化的<span className="font-bold">业务结果</span>与<span className="font-bold">规模化增长</span>。
            </motion.p>
          </div>
        </section>

        {/* Section 8: 方法论沉淀 */}
        <section className="py-[120px] md:py-[80px] flex flex-col items-center text-center relative">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              方法论沉淀
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance"
            >
              系统设计的通用方法
            </motion.h2>
            
            {/* Image Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[1140px] aspect-[1140/380] flex flex-col items-center justify-center text-[#999999] rounded-lg overflow-hidden relative"
            >
              {/* Actual Image */}
              <img src="https://img.nickiresume.cn/images/04insurance/06CN.webp" alt="方法论沉淀" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
