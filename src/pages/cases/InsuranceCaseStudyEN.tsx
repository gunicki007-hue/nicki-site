import React from 'react';
import { motion } from 'motion/react';

interface InsuranceCaseStudyENProps {
  onBack: () => void;
}

export default function InsuranceCaseStudyEN({ onBack }: InsuranceCaseStudyENProps) {
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
            transition={{ duration: 0.6 }}
            className="text-center z-10 relative px-6 h-[340px]"
          >
            <h1 className="text-[48px] md:text-[56px] xl:text-[64px] font-bold leading-[1.1] tracking-tight text-[#111111] mb-6 h-[130.8px]">
              Scaling Design for Enterprise<br />Insurance Platforms
            </h1>
            <p className="text-[16px] leading-[24px] text-[#666666] max-w-[800px] mx-auto">
              Rebuilding product architecture and design systems to unify the agent platform<br />experience and scale design production efficiency.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1440px] mx-auto px-6 xl:px-[150px]">
        
        {/* Section 1: CONTEXT DEFINITION */}
        <section className="py-[120px] md:py-[80px] relative flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              CONTEXT DEFINITION
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
            >
              <span className="text-[#0055FF]">Identifying</span>
              System-Level Design Problems
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[14px] text-[#666666] leading-[1.6] max-w-[1140px] text-pretty mb-8"
            >
              As the platform scaled, design challenges evolved from UI issues into system-level problems.
              Feature expansion without structural alignment led to fragmented experience and low efficiency.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[20px] md:text-[26px] font-medium text-[#111111] leading-[1.6] max-w-[1140px] text-pretty mb-12"
            >
              Reframing The Problem As <strong>Platform System Re-Architecture</strong>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-[1140/420] relative flex items-center justify-center overflow-hidden rounded-lg"
            >
              {/* Actual Image */}
              <img 
                src="https://img.nickiresume.cn/images/04insurance/01EN.webp" 
                alt="Context Definition" 
                className="w-full h-full object-cover relative z-10"
              />
            </motion.div>
          </div>
        </section>

        {/* Section 2: PROBLEM FRAMING */}
        <section className="py-[120px] md:py-[80px] relative flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              PROBLEM FRAMING
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
            >
              From Surface Issues To Structural
              Problems
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[20px] md:text-[26px] font-medium text-[#111111] leading-[1.6] max-w-[1140px] text-pretty mb-12 text-center w-full"
            >
              I Reframed The Challenges Into Three Dimensions
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-[1140/510] relative flex items-center justify-center overflow-hidden rounded-lg"
            >
              {/* Actual Image */}
              <img 
                src="https://img.nickiresume.cn/images/04insurance/02EN.webp" 
                alt="Problem Framing" 
                className="w-full h-full object-cover relative z-10"
              />
            </motion.div>
          </div>
        </section>

        {/* Section 3: DESIGN STRATEGY */}
        <section className="py-[120px] md:py-[80px] relative flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              DESIGN STRATEGY
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
            >
              From Optimization To System Redesign
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-[1140/450] relative flex items-center justify-center overflow-hidden rounded-lg"
            >
              {/* Actual Image */}
              <img 
                src="https://img.nickiresume.cn/images/04insurance/03EN.webp" 
                alt="Design Strategy" 
                className="w-full h-full object-cover relative z-10"
              />
            </motion.div>
          </div>
        </section>

        {/* Section 4: ARCHITECTURE DECISION */}
        <section className="py-[120px] md:py-[80px] relative flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              ARCHITECTURE DECISION
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
            >
              From Feature-Based To Mental Model-
              Driven System Design
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-[20px] md:text-[26px] text-[#111111] font-bold leading-[1.6] max-w-[1140px] text-pretty mb-4">
                Transforming Complex Workflows Into A Unified System Model
              </p>
              <p className="text-[14px] text-[#666666] leading-[1.6] max-w-[1140px] text-pretty">
                By Analyzing The Agent's Mental Model, I Transformed The Platform From A Feature-Driven Structure Into A Domain-Based System Model.
                This Restructuring Reduces Cognitive Load While Establishing <strong>A Scalable Foundation For Design Systems And Design Operations.</strong>
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-[1140/660] relative flex items-center justify-center overflow-hidden rounded-lg"
            >
              {/* Actual Image */}
              <img 
                src="https://img.nickiresume.cn/images/04insurance/04EN.webp" 
                alt="Architecture Decision" 
                className="w-full h-full object-cover relative z-10"
              />
            </motion.div>
          </div>
        </section>

        {/* Section 5: DESIGN SYSTEM */}
        <section className="py-[120px] md:py-[80px] relative flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              DESIGN SYSTEM
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
            >
              Turning Design Into Reusable Assets
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[20px] md:text-[26px] font-medium text-[#111111] leading-[1.6] max-w-[1140px] text-pretty mb-16"
            >
              On Top Of The System Model, I Built An Enterprise Design System
            </motion.p>
            
            <div className="grid grid-cols-12 gap-[24px] w-full text-left">
              <div className="col-span-12 md:col-span-4 flex flex-col justify-between">
                <motion.ul 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="list-disc pl-5 text-[16px] text-[#666666] leading-[2] mb-12"
                >
                  <li>Visual Language</li>
                  <li>Component Library</li>
                  <li>Illustration Assets</li>
                  <li>Content Templates</li>
                </motion.ul>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[20px] md:text-[26px] text-[#111111] font-bold leading-[1.4] max-w-[1140px] text-pretty"
                >
                  Transforming
                  Design Into Scalable
                  Assets
                </motion.p>
              </div>
              
              <div className="col-span-12 md:col-span-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full aspect-[848/480] relative flex items-center justify-center overflow-hidden rounded-lg"
                >
                  {/* Placeholder Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#999999] z-0">
                    <span className="text-2xl font-medium mb-2">848x480</span>
                    <span className="text-lg">Case 2-E-EN-mp4</span>
                  </div>
                  {/* Actual Video - Remove opacity-0 when src is ready */}
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    poster="[在这里替换视频封面图链接]"
                    className="w-full h-full object-cover relative z-10"
                    src="https://img.nickiresume.cn/videos/09case2systen01.mp4"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: DESIGN OPERATIONS */}
        <section className="py-[120px] md:py-[80px] relative flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              DESIGN OPERATIONS
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
            >
              Scaling Design Production
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[20px] md:text-[26px] font-medium text-[#111111] leading-[1.6] max-w-[1140px] text-pretty mb-16"
            >
              On Top Of The System Model, I Built An Enterprise Design System
            </motion.p>
            
            <div className="grid grid-cols-12 gap-[24px] w-full text-left">
              <div className="col-span-12 md:col-span-4 flex flex-col justify-between">
                <motion.ul 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="list-disc pl-5 text-[16px] text-[#666666] leading-[2] mb-12"
                >
                  <li>Template-Based Design</li>
                  <li>Asset Reuse</li>
                  <li>Scalable Content Production</li>
                </motion.ul>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[20px] md:text-[26px] text-[#111111] font-bold leading-[1.4] max-w-[1140px] text-pretty"
                >
                  Moving From
                  Manual Design To
                  Systemized
                  Production
                </motion.p>
              </div>
              
              <div className="col-span-12 md:col-span-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full aspect-[848/480] relative flex items-center justify-center overflow-hidden rounded-lg"
                >
                  {/* Placeholder Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#999999] z-0">
                    <span className="text-2xl font-medium mb-2">848x480</span>
                    <span className="text-lg">Case 2-F-EN-mp4</span>
                  </div>
                  {/* Actual Video - Remove opacity-0 when src is ready */}
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    poster="[在这里替换视频封面图链接]"
                    className="w-full h-full object-cover relative z-10"
                    src="https://img.nickiresume.cn/videos/09case2systen02.mp4"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: DESIGN IMPACT */}
        <section className="py-[120px] md:py-[80px] relative flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              DESIGN IMPACT
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
            >
              Business Impact Of Systematic Design
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[12px] md:text-[14px] text-[#666666] leading-[1.6] max-w-[1140px] text-pretty mb-8"
            >
              Through System Re-Architecture, Design Evolved From Execution To A Business-Driven Capability.
              The Methodology Developed In This Project Can Be Applied To Complex Platform Design And AI System Construction.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[20px] md:text-[26px] font-medium text-[#111111] leading-[1.6] max-w-[1140px] text-pretty mb-12"
            >
              From Structural Optimization To Measurable Business Impact
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-[1140/630] relative flex items-center justify-center overflow-hidden mb-12 rounded-lg"
            >
              {/* Actual Image */}
              <img 
                src="https://img.nickiresume.cn/images/04insurance/05EN.webp" 
                alt="Business Impact" 
                className="w-full h-full object-cover relative z-10"
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[20px] md:text-[26px] font-medium text-[#111111] leading-[1.6] max-w-[1140px] text-pretty"
            >
              Systematic Design Not Only Improves <strong>Experience Quality</strong>
              But Also Drives Measurable <strong>Business Outcomes</strong> And <strong>Scalable Growth</strong>
            </motion.p>
          </div>
        </section>

        {/* Section 8: METHODOLOGY */}
        <section className="py-[120px] md:py-[80px] relative flex flex-col items-center text-center">
          <div className="relative flex flex-col items-center text-center mb-12 pt-10 w-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[#F5F5F5] text-[60px] md:text-[100px] font-black uppercase tracking-tighter whitespace-nowrap z-0 pointer-events-none select-none leading-none">
              METHODOLOGY
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-[40px] md:text-[64px] font-[800] text-[#111111] leading-[1.2] tracking-tighter mt-6 md:mt-10 text-balance text-center"
            >
              A Scalable Approach To System Design
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-[1140/400] relative flex items-center justify-center overflow-hidden rounded-lg"
            >
              {/* Actual Image */}
              <img 
                src="https://img.nickiresume.cn/images/04insurance/06EN.webp" 
                alt="Methodology" 
                className="w-full h-full object-cover relative z-10"
              />
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}

