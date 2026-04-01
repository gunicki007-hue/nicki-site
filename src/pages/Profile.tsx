import { motion } from 'motion/react';

interface ProfileProps {
  language: 'EN' | 'CN';
}

export default function Profile({ language }: ProfileProps) {
  const isCN = language === 'CN';

  const content = {
    title: isCN ? (
      <>打通业务战略与设计<br />执行</>
    ) : (
      <>Bridging Business Strategy<br />& Design Execution</>
    ),
    subtitle: isCN 
      ? "通过系统化设计方法、Web3 实践与 AI 协作流程，推动业务的规模化增长。" 
      : "Driving scalable growth through systems, collaboration and emerging technologies",
    features: isCN 
      ? [
          <><span className="font-bold text-[#111111]">12+</span> 年产品与品牌设计实践经验</>,
          <><span className="font-bold text-[#111111]">0→1</span> 体系建设与跨部门协同</>,
          <>在 Web3 环境中引入 <span className="font-bold text-[#111111]">AI 协作机制，优化流程效率</span></>
        ]
      : [
          <><span className="font-bold text-[#111111]">12+</span> Years In Product & Brand Design</>,
          <><span className="font-bold text-[#111111]">0→1</span> Design Systems & Cross-Functional Alignment</>,
          <>Web3 & AI-<span className="font-bold text-[#111111]">Enhanced Workflow</span> Practice</>
        ],
    metrics: [
      { label: isCN ? "核心项目" : "Initiatives", value: "6+" },
      { label: isCN ? "增长提升" : "Growth", value: "30%" },
      { label: isCN ? "体系建设" : "Systems", value: "0-1" },
      { label: isCN ? "协作实践" : "Practice", value: "web3 × AI" }
    ],
    snapshotTitle: isCN ? "业务成果概览" : "IMPACT SNAPSHOT"
  };

  return (
    <div className="relative w-full h-[calc(100vh-138px)] overflow-hidden bg-[#F5F5F5]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="[在这里替换视频封面图链接]"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="[在这里替换视频链接]" type="video/mp4" />
      </video>

      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-white/80 blur-[100px] rounded-full" />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1440px] mx-auto h-full relative z-10 flex items-end justify-center pt-6 px-6 pb-0 md:px-[60px] md:pb-0">
        <motion.div 
          className="w-full max-w-[1254px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <img 
            src={isCN ? "https://img.nickiresume.cn/images/01profile/profileCNN.webp" : "https://img.nickiresume.cn/images/01profile/profileENN.webp"} 
            alt="Profile Content" 
            className="w-full h-auto block object-contain mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  );
}
