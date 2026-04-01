import { motion } from 'motion/react';

interface Web3CaseStudyCNProps {
  onBack: () => void;
}

const Placeholder = ({ text, aspect, type = 'video', src = 'https://img.nickiresume.cn/videos/01-case1 banner.mp4', poster = 'https://img.nickiresume.cn/images/03web3/case01mp4layout.webp', className = '' }: { text: string, aspect: string, type?: 'image' | 'video', src?: string, poster?: string, className?: string }) => {
  if (src) {
    if (type === 'video') {
      return <video src={src} poster={poster} autoPlay loop muted playsInline className={`w-full object-cover ${className}`} style={{ aspectRatio: aspect }} />;
    }
    return <img src={src} alt={text} className={`w-full object-cover ${className}`} style={{ aspectRatio: aspect }} />;
  }
  return (
    <div 
      className={`bg-[#D9D9D9] flex items-center justify-center text-[#8E8E8E] text-lg md:text-2xl font-medium w-full ${className}`} 
      style={{ aspectRatio: aspect }}
    >
      {text}
    </div>
  );
};

export default function Web3CaseStudyCN({ onBack }: Web3CaseStudyCNProps) {
  return (
    <div className="w-full bg-[#050505] text-white font-['Inter'] min-h-screen pt-[73px] overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px] pt-[80px] pb-[160px]">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 md:mb-[150px]">
          <div className="lg:col-span-5 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              为 Web3 支付基础设施构建信任体验
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 text-sm md:text-base text-white/60"
            >
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >Web3 支付平台 - 从 0 到 1 的产品与设计体系建设</motion.p>
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >打造面向全球支付场景的产品与品牌设计体系</motion.p>
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
              <Placeholder src="https://img.nickiresume.cn/videos/01-case1 banner.mp4" poster="https://img.nickiresume.cn/images/03web3/case01mp4layout.webp" aspect="620/370" type="video" />
            </motion.div>
          </motion.div>
        </div>

        {/* Section 1: 战略目标 */}
        <div className="text-lg md:text-xl text-center mb-20 md:mb-[150px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60 mb-[10px]"
          >战略目标</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-[32px]"

          >连接Web3社区文化 & 支付基础设施</motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/01-1140x470CN.webp" aspect="1140/470" type="image" />
          </motion.div>
        </div>

        {/* Section 2: 设计挑战 */}
        <div className="mb-20 md:mb-[150px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60 mb-[10px]"
          >设计挑战</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-[32px]"

          >如何构建产品与系统设计</motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/02-1140x250CN.webp" type="image" className="!h-[280px]" />
          </motion.div>
        </div>
        {/* Section 3: 设计策略 */}
        <div className="mb-20 md:mb-[150px]">
          <div className="text-center mb-[32px]">
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60 mb-[10px]"
          >设计策略</motion.p>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold"
          >
              以<span className="text-[#00FF00]">信任</span>为核心的产品体系
            </motion.h2>
          </div>
          
          <div className="space-y-24 md:space-y-32">
            {/* 01 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">01</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >为全球支付构建一致且可信的产品体验</motion.h3>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60"
          >通过统一的产品体验，将全球使用与支付场景构建为可信任的扩展的产品体系</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/03-1140x360CN.webp" type="image" />
          </motion.div>
            </div>

            {/* 02 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">02</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >支付安全与合规体系可视化</motion.h3>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60"
          >通过信息架构重组，将复杂的 Web3 安全与合规体系清晰呈现</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/04-1140x460CN.webp" aspect="1140/460" type="image" />
          </motion.div>
            </div>

            {/* 03 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">03</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >Web3 支付基础设施流程可视化</motion.h3>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60"
          >将复杂的基础设施与资金流转关系清晰呈现</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/05-1140x390CN.webp" aspect="1140/390" type="image" />
          </motion.div>
            </div>

            {/* 04 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">04</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >定义社区品牌体系</motion.h3>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60 max-w-2xl mx-auto"
          >
                  定义 Crydit 的核心品牌人格，塑造产品体验、视觉语言以及社区表达方式<br/>
                  这些品牌个性进一步影响了社区内容与视觉设计的整体风格
                </motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/06-1140x260CN.webp" type="image" />
          </motion.div>
            </div>

            {/* 05 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">05</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >社区驱动的品牌表达</motion.h3>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60"
          >通过 Meme 风格角色与视觉语言，构建具有社区文化特征的品牌表达体系</motion.p>
              </div>
              <div className="max-w-[753px] mx-auto">
                <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/videos/02-Case 1-800x450.mp4" poster="[在这里替换视频封面图链接]" aspect="753/424" type="video" />
          </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: 品牌系统 */}
        <div className="mb-20 md:mb-[150px]">
          <div className="text-center mb-[32px]">
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60 mb-[10px]"
          >品牌系统</motion.p>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold leading-tight"

          >构建可扩展的产品与品牌体系</motion.h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            {/* 01 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">01</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >制定系统化</motion.h3>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60"
          >为了支持产品线的长期扩展，Crydit 的设计系统被系统化为三个核心层级：产品界面、品牌识别以及社区表达，从而形成完整的品牌与产品设计体系。</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/videos/03VI.mp4" poster="[在这里替换视频封面图链接]" aspect="753/424" type="video" />
          </motion.div>
            </div>

            {/* 02 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">02</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >构建品牌价值金字塔</motion.h3>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/07-1140x580CN.webp" type="image" />
          </motion.div>
            </div>

            {/* 03 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">03</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >规范社区内容视觉系统</motion.h3>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/videos/04-Case 1-layout.mp4" poster="[在这里替换视频封面图链接]" type="video" />
          </motion.div>
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#00FF00] text-lg md:text-xl font-bold mt-12 text-center"
          >
                共同构成 Crydit 的品牌基础设施
              </motion.p>
            </div>
          </div>
        </div>

        {/* Section 5: 视觉落地 */}
        <div className="mb-20 md:mb-[150px]">
          <div className="text-center mb-[32px]">
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60 mb-[10px]"
          >视觉落地</motion.p>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >设计体系最终落地于多个品牌触点</motion.h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            {/* 01 */}
            <div>
              <div className="text-center mb-0">
                <span className="text-lg md:text-xl text-white/60 block mb-2">01</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-0"
          >银行卡面</motion.h3>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/08-1140x490CNN.webp" aspect="1140/490" type="image" />
          </motion.div>
            </div>

            {/* 02 */}
            <div>
              <div className="mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">02</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >产品UX</motion.h3>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60"
          >界面设计将复杂的加密交易转化为熟悉的支付流程，使用户能够轻松管理、转换并使用数字资产。</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/videos/05-Case1-UI.mp4" poster="[在这里替换视频封面图链接]" type="video" />
          </motion.div>
            </div>

            {/* 03 */}
            <div>
              <div className="mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">03</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >社区吉祥物</motion.h3>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60"
          >通过友好的视觉角色连接社区，并强化品牌个性表达。</motion.p>
              </div>
              <div className="space-y-8">
                <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/09-1140x400CN.webp" aspect="1140/400" type="image" />
          </motion.div>
                <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/10-1140x630CN.webp" aspect="1140/630" type="image" />
          </motion.div>
              </div>
            </div>

            {/* 情绪表达 */}
            <div>
              <div className="text-center mb-8">
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >情绪表达</motion.h3>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/11-1140x750CN.webp" aspect="1140/750" type="image" />
          </motion.div>
            </div>

            {/* 04 */}
            <div>
              <div className="mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">04</span>
                <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-3"
          >品牌传播视觉</motion.h3>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60"
          >将 Web3 资产与日常支付场景连接起来，打造用户能够轻松在全场景顺畅处理加密货币等大额消费</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/videos/06-Case 1-KV.mp4" poster="[在这里替换视频封面图链接]" type="video" />
          </motion.div>
            </div>
          </div>
        </div>

        {/* Section 6: 落地成果 */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-[10px]"
          >落地成果</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-white/60 mb-[32px]"
          >在 Web3 社区文化与金融可信度之间取得平衡，建立了一个既开放又可信的支付品牌</motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/12-1140x560CN.webp" type="image" />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
