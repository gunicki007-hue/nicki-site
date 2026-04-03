import { motion } from 'motion/react';

interface Web3CaseStudyENProps {
  onBack: () => void;
}

const Placeholder = ({ text = '', aspect = 'auto', type = 'video', src = '', poster = 'https://img.nickiresume.cn/images/03web3/case01mp4layout.webp', className = '' }: { text?: string, aspect?: string, type?: 'image' | 'video', src?: string, poster?: string, className?: string }) => {
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

export default function Web3CaseStudyEN({ onBack }: Web3CaseStudyENProps) {
  return (
    <div className="w-full bg-[#050505] text-white min-h-screen pt-[73px] overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px] pt-[80px] pb-[160px]">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20 md:mb-[150px]">
          <div className="lg:col-span-5 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[40px] md:text-[56px] xl:text-[64px] font-[800] leading-[1.1] tracking-tight text-white text-balance"
            >
              Designing Trust for Web3 Payment Infrastructure
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="space-y-2 text-sm md:text-base text-white"
            >
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >Web3 Payment Platform - 0-1 Product & System Design</motion.p>
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >Building a Scalable Product & Brand System for Global Payments</motion.p>
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
              <Placeholder src="https://img.nickiresume.cn/videos/01-case1 banner.mp4" poster="https://img.nickiresume.cn/images/03web3/case01mp4layout.webp" aspect="620/370" type="video" />
            </motion.div>
          </motion.div>
        </div>

        {/* Section 1: STRATEGIC CONTEXT */}
        <div className="mb-20 md:mb-[150px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[100px] font-[800] text-[#222222] uppercase tracking-wide leading-none select-none"
          >STRATEGIC CONTEXT</motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-[64px] font-[800] text-white mb-[32px] relative z-10 -mt-4 text-balance"
          >Bridging Web3 Culture and Payment Infrastructure</motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/01-1140x470EN.webp" aspect="1140/374" type="image" />
          </motion.div>
        </div>

        {/* Section 2: CHALLENGES */}
        <div className="mb-20 md:mb-[150px]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[100px] font-[800] text-[#222222] uppercase tracking-wide leading-none select-none"
          >CHALLENGES</motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-[64px] font-[800] text-white mb-4 relative z-10 -mt-4 text-balance"
          >How to Build Products and Systems</motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 mb-[32px] max-w-[1140px] text-pretty"
          >Building a Web3 payment product required balancing community culture, establishing user trust, and designing a scalable financial system</motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/02-1140x250EN.webp" aspect="1140/300" type="image" className="!h-[280px]" />
          </motion.div>
        </div>

        {/* Section 3: DESIGN STRATEGY */}
        <div className="mb-20 md:mb-[150px]">
          <div className="mb-[32px]">
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[100px] font-[800] text-[#222222] uppercase tracking-wide leading-none select-none"
          >DESIGN STRATEGY</motion.h2>
            <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-[64px] font-[800] text-white relative z-10 -mt-4 text-balance"
          >
              Designing a Trust-Driven Payment Experience
            </motion.h3>
          </div>
          
          <div className="space-y-24 md:space-y-32">
            {/* 01 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">01</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Building A Consistent And Trusted Experience For Global Payments</motion.h4>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 max-w-[1140px] mx-auto text-pretty"
          >Creating a trusted and scalable product system for global payroll and payments through a unified product experience</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/03-1140x360EN.webp" aspect="1140/360" type="image" />
          </motion.div>
            </div>

            {/* 02 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">02</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Payment Security And Compliance System Visualization</motion.h4>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 max-w-[1140px] mx-auto text-pretty"
          >Restructuring information architecture to clearly present complex Web3 security and compliance systems.</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/04-1140x460EN.webp" aspect="1140/470" type="image" />
          </motion.div>
            </div>

            {/* 03 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">03</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Web3 Payment Infrastructure Flow Visualization</motion.h4>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 max-w-[1140px] mx-auto text-pretty"
          >Visualizing complex infrastructure and fund flows in a clear and understandable way</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/05-1140x390EN.webp" aspect="1140/410" type="image" />
          </motion.div>
            </div>

            {/* 04 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">04</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Community Brand System</motion.h4>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 max-w-[1140px] mx-auto text-pretty"
          >
                  Defining the core personality that shapes Crydit's visual language, product experience, and community presence.
                  These personality traits shaped the visual language used across community experiences
                </motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/06-1140x260EN.webp" aspect="1140/260" type="image" />
          </motion.div>
            </div>

            {/* 05 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">05</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Community-Driven Expression</motion.h4>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 max-w-[1140px] mx-auto text-pretty"
          >Meme-inspired characters and visuals reflect the expressive culture of Web3 communities</motion.p>
              </div>
              <div className="max-w-[753px] mx-auto">
                <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/videos/02-Case 1-800x450.mp4" poster="[在这里替换视频封面图链接]" aspect="753/424" type="video" />
          </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: BRAND SYSTEM */}
        <div className="mb-20 md:mb-[150px]">
          <div className="mb-[32px]">
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[100px] font-[800] text-[#222222] uppercase tracking-wide leading-none select-none"
          >BRAND SYSTEM</motion.h2>
            <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-[64px] font-[800] text-white relative z-10 -mt-4 text-balance"
          >Building a Scalable Product & Brand System</motion.h3>
          </div>

          <div className="space-y-24 md:space-y-32">
            {/* 01 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">01</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Systematization</motion.h4>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 max-w-[1140px] mx-auto text-pretty"
          >To support the long-term scalability of the product, Crydit's design system is structured into three core layers: product interface, brand identity, and community expression, forming a comprehensive brand and product design system.</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/videos/03VI.mp4" poster="[在这里替换视频封面图链接]" aspect="743/424" type="video" />
          </motion.div>
            </div>

            {/* 02 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">02</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Brand Value Pyramid</motion.h4>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/07-1140x580EN.webp" aspect="1140/580" type="image" />
          </motion.div>
            </div>

            {/* 03 */}
            <div>
              <div className="text-center mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">03</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Community Visual System</motion.h4>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/videos/04-Case 1-layout.mp4" poster="[在这里替换视频封面图链接]" aspect="1140/630" type="video" />
          </motion.div>
              <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#00FF00] text-lg md:text-xl font-bold mt-12 text-center"
          >
                Together They Formed The Foundation Of Crydit's Brand Infrastructure.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Section 5: VISUAL IMPLEMENTATION */}
        <div className="mb-20 md:mb-[150px]">
          <div className="mb-[32px]">
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[100px] font-[800] text-[#222222] uppercase tracking-wide leading-none select-none"
          >VISUAL IMPLEMENTATION</motion.h2>
            <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-[64px] font-[800] text-white relative z-10 -mt-4 text-balance"
          >Design System Across Multiple Brand Touchpoints</motion.h3>
          </div>

          <div className="space-y-24 md:space-y-32">
            {/* 01 */}
            <div>
              <div className="text-center mb-0">
                <span className="text-lg md:text-xl text-white/60 block mb-2">01</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-0 text-balance"
          >Bank Card Design</motion.h4>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/08-1140x490ENN.webp" aspect="1140/490" type="image" />
          </motion.div>
            </div>

            {/* 02 */}
            <div>
              <div className="mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">02</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Product Feature</motion.h4>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 max-w-[1140px] text-pretty"
          >The Interface Is Designed To Simplify Complex Crypto Transactions Into Familiar Payment Flows, Enabling Users To Convert, Manage, And Spend Digital Assets With Confidence.</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/videos/05-Case1-UI.mp4" poster="[在这里替换视频封面图链接]" aspect="1140/630" type="video" />
          </motion.div>
            </div>

            {/* 03 */}
            <div>
              <div className="mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">03</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Community Mascot System</motion.h4>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 max-w-[1140px] text-pretty"
          >A friendly visual character that represents the community and strengthens brand personality.</motion.p>
              </div>
              <div className="space-y-8">
                <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/09-1140x400EN.webp" aspect="1140/400" type="image" />
          </motion.div>
                <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/10-1140x630EN.webp" aspect="1140/630" type="image" />
          </motion.div>
              </div>
            </div>

            {/* Expressions */}
            <div>
              <div className="mb-8">
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Expressions</motion.h4>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/11-1140x750EN.webp" aspect="1140/750" type="image" />
          </motion.div>
            </div>

            {/* 04 */}
            <div>
              <div className="mb-8">
                <span className="text-lg md:text-xl text-white/60 block mb-2">04</span>
                <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-bold mb-3 text-balance"
          >Brand Communication Visuals</motion.h4>
                <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 max-w-[1140px] text-pretty"
          >Bridging Web3 Assets With Everyday Payment Experiences, Empowering Users To Seamlessly Spend Cryptocurrency For Large Purchases Worldwide.</motion.p>
              </div>
              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/videos/06-Case 1-KV.mp4" poster="[在这里替换视频封面图链接]" aspect="1140/620" type="video" />
          </motion.div>
            </div>
          </div>
        </div>

        {/* Section 6: IMPACT */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[100px] font-[800] text-[#222222] uppercase tracking-wide leading-none select-none"
          >IMPACT</motion.h2>
          <div className="text-center mb-[32px]">
            <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-[64px] font-[800] text-white mb-4 relative z-10 -mt-4 text-balance"
          >Product & Brand Impact</motion.h3>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-white/60 max-w-[1140px] mx-auto text-pretty"
          >Balancing Web3 Community Culture With Financial Credibility To Establish A Trusted Payment Brand.</motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Placeholder src="https://img.nickiresume.cn/images/03web3/12-1140x560EN.webp" aspect="1140/560" type="image" />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
