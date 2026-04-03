import { motion } from 'motion/react';

interface HomeFooterProps {
  language: 'EN' | 'CN';
}

export default function HomeFooter({ language }: HomeFooterProps) {
  return (
    <footer className="w-full bg-[#111111] py-4 flex items-center justify-center">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-['Inter'] text-[10px] text-white/60 uppercase tracking-[0.2em] italic"
      >
        © 2026 NICKI STRATEGIC DESIGN LEADERSHIP
      </motion.p>
    </footer>
  );
}
