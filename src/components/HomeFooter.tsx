interface HomeFooterProps {
  language: 'EN' | 'CN';
}

export default function HomeFooter({ language }: HomeFooterProps) {
  return (
    <footer className="w-full bg-[#111111] py-4 flex items-center justify-center">
      <p className="font-['Inter'] text-[10px] text-white/60 uppercase tracking-[0.2em] italic">
        © 2026 NICKI STRATEGIC DESIGN LEADERSHIP
      </p>
    </footer>
  );
}
