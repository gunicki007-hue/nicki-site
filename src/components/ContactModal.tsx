import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'EN' | 'CN';
}

export default function ContactModal({ isOpen, onClose, language }: ContactModalProps) {
  const isCN = language === 'CN';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div 
            className="relative bg-white w-full max-w-lg rounded-[24px] p-12 shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button 
              onClick={onClose} 
              className="absolute top-8 right-8 text-black/20 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-[32px] font-bold text-[#111111] mb-10 tracking-tight leading-none">
              {isCN ? '开始对话' : "Let's Connect"}
            </h2>

            <div className="space-y-8">
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-bold mb-3">Email</p>
                <a 
                  href="mailto:gunicki007@gmail.com" 
                  className="text-[20px] font-medium text-[#111111] hover:text-black/60 transition-colors"
                >
                  gunicki007@gmail.com
                </a>
              </div>
              
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 font-bold mb-3">Phone / WeChat</p>
                <p className="text-[20px] font-medium text-[#111111]">+86 15801905482</p>
              </div>

              <div className="pt-8 border-t border-black/5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-zinc-100 rounded-lg flex items-center justify-center">
                    <span className="text-[10px] text-black/20 font-bold uppercase">QR</span>
                  </div>
                  <p className="text-[13px] text-black/40 leading-relaxed">
                    {isCN ? "扫描二维码添加微信，获取更多案例细节。" : "Scan QR code to add WeChat for more case details."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
