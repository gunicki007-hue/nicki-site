import { motion } from 'motion/react';

interface StrategyProps {
  language: 'EN' | 'CN';
  onCaseClick: (slug: string) => void;
}

export default function Strategy({ language, onCaseClick }: StrategyProps) {
  const isCN = language === 'CN';

  const caseStudiesCN = [
    {
      id: "web3",
      title: "构建 Web3 支付基础\n设施的信任设计",
      type: "0→1 产品与信任架构设计",
      duration: "全球化产品 · 8个月",
      description: "为 Web3 支付平台打造可扩展的信任与支付体验",
      image: "https://img.nickiresume.cn/images/02contents/01.webp",
      imageLeft: false,
      project: "web3",
    },
    {
      id: "insurance",
      title: "构建企业级保险平台的\n可扩展设计系统",
      type: "设计系统与平台体验一致性",
      duration: "企业级 · 8个月",
      description: "建立统一设计系统，支持多个保险业务平台的\n一致体验",
      image: "https://img.nickiresume.cn/images/02contents/02.webp",
      imageLeft: true,
      project: "insurance",
    },
    {
      id: "brand-ops",
      title: "AI 赋能的设计运营体系",
      type: "AI 工作流与规模化设计生产",
      duration: "企业级实践 · 8个月",
      description: "通过 AI 工作流提升设计效率与设计运营的规模化能力",
      image: "https://img.nickiresume.cn/images/02contents/03.webp",
      imageLeft: false,
      project: "aesthetic",
    },
  ];

  const caseStudiesEN = [
    {
      id: "web3",
      title: "Web3 Brand to Payment Infrastructure",
      type: "0→1 Trust Architecture & Governance",
      duration: "Global · 8 Months",
      description: "Enabled the transition from decentralized initiative to payment-ready infrastructure.",
      image: "https://img.nickiresume.cn/images/02contents/01.webp",
      imageLeft: false,
      project: "web3",
    },
    {
      id: "insurance",
      title: "Scalable Design System for Enterprise Insurance",
      type: "Design System & Platform Consistency",
      duration: "Enterprise · 8 Months",
      description: "Established a unified design system supporting consistent experiences across multiple insurance platforms.",
      image: "https://img.nickiresume.cn/images/02contents/02.webp",
      imageLeft: true,
      project: "insurance",
    },
    {
      id: "brand-ops",
      title: "AI-Empowered Design Operations",
      type: "AI Workflow & Scalable Production",
      duration: "Enterprise · 8 Months",
      description: "Improved design efficiency and scalable operations capabilities through AI workflows.",
      image: "https://img.nickiresume.cn/images/02contents/03.webp",
      imageLeft: false,
      project: "aesthetic",
    },
  ];

  const caseStudies = isCN ? caseStudiesCN : caseStudiesEN;

  return (
    <div className="w-full min-h-screen bg-[#F5F5F5] flex flex-col" data-name={isCN ? "战略案例" : "Case Studies/EN"}>
      {/* Hero Section */}
      <div className="relative w-full text-center overflow-hidden flex justify-center items-center aspect-[1440/340] max-h-[340px]">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://img.nickiresume.cn/images/02contents/1440x340.webp"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://img.nickiresume.cn/videos/CCbanerBG.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            src={isCN ? "https://img.nickiresume.cn/images/02contents/1440x340words-CN.webp" : "https://img.nickiresume.cn/images/02contents/1440x340words-EN.webp"}
            alt={isCN ? "以系统思维构建设计" : "Design Leadership in Practice"}
            className="w-full h-auto object-contain"
            style={{ maxWidth: '1440px', maxHeight: '340px' }}
          />
        </div>
      </div>

      {/* Case Studies List */}
      <div className="w-full bg-white flex-1 px-6">
        <div
          className="mx-auto py-[40px] md:py-[60px] flex flex-col gap-0"
          style={{ maxWidth: 1000 }}
        >
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              className={`flex flex-col md:flex-row items-center gap-[32px] md:gap-[48px] py-[40px] md:py-[48px] cursor-pointer group ${cs.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              style={{
                borderBottom: idx < caseStudies.length - 1 ? "1px solid #E8E8E8" : "none",
              }}
              whileHover={{ x: cs.imageLeft ? 4 : -4 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => onCaseClick(cs.project)}
            >
              {/* 
                TODO: Replace the src URL below with your actual case study image link.
                Recommended Dimensions: 560px width × 360px height.
                Recommended Format: JPG or PNG.
              */}
              <motion.div
                className="w-full md:w-[560px] h-[240px] md:h-[360px] flex-shrink-0 overflow-hidden bg-zinc-100"
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Text */}
              <div
                className="w-full flex-1 flex flex-col justify-center"
              >
                <h2
                  className={`text-black mb-[16px] md:mb-[20px] whitespace-pre-line ${isCN ? "font-['Alibaba_PuHuiTi_3.0:75_SemiBold',sans-serif] font-bold" : "font-['Inter',sans-serif] font-semibold"}`}
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 36px)",
                    lineHeight: 1.2,
                    letterSpacing: isCN ? "-0.02em" : "-0.04em",
                    wordBreak: "keep-all"
                  }}
                >
                  {cs.title}
                </h2>
                <p
                  className={`text-[#1A1A1A] mb-[4px] ${isCN ? "font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif] font-medium" : "font-['Inter',sans-serif] font-semibold"}`}
                  style={{
                    fontSize: "clamp(13px, 1.1vw, 16px)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cs.type}
                </p>
                <p
                  className={`text-[#1A1A1A]/60 mb-[16px] ${isCN ? "font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif]" : "font-['Inter',sans-serif] font-medium"}`}
                  style={{
                    fontSize: "clamp(12px, 1vw, 14px)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cs.duration}
                </p>
                <p
                  className={`text-[#1A1A1A] whitespace-pre-line ${isCN ? "font-['Alibaba_PuHuiTi_3.0:55_Regular',sans-serif]" : "font-['Inter',sans-serif] font-normal"}`}
                  style={{
                    fontSize: "clamp(13px, 1.1vw, 16px)",
                    lineHeight: 1.6,
                  }}
                >
                  {cs.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-[24px] md:mt-[28px] flex items-center gap-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className={`text-[#111111] ${isCN ? "font-['Alibaba_PuHuiTi_3.0:65_Medium',sans-serif] font-medium" : "font-['Inter',sans-serif] font-medium"}`}
                    style={{
                      fontSize: "clamp(12px, 1vw, 14px)",
                      letterSpacing: isCN ? "0.04em" : "0.08em",
                    }}
                  >
                    {isCN ? '查看案例' : 'VIEW CASE STUDY'}
                  </span>
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 24 12"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 6h22M17 1l5 5-5 5" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
