import { motion } from 'motion/react';

interface FooterProps {
  language: 'EN' | 'CN';
}

export default function Footer({ language }: FooterProps) {
  const isCN = language === 'CN';

  return (
    <footer className="w-full bg-[#121212] h-[200px] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[1140px] px-6 md:px-8 flex justify-center items-center"
      >
        <img
          src={isCN ? "https://img.nickiresume.cn/images/02contents/footer1140x120CN.webp" : "https://img.nickiresume.cn/images/02contents/footer1140x120EN.webp"}
          alt={isCN ? "联系我" : "Contact Me"}
          className="w-full h-auto object-contain"
          style={{ maxWidth: '1140px', maxHeight: '120px' }}
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </footer>
  );
}
