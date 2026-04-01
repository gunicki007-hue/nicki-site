interface FooterProps {
  language: 'EN' | 'CN';
}

export default function Footer({ language }: FooterProps) {
  const isCN = language === 'CN';

  return (
    <footer className="w-full bg-[#121212] h-[200px] flex items-center justify-center">
      <div className="w-full max-w-[1140px] px-6 md:px-8 flex justify-center items-center">
        <img
          src={isCN ? "https://img.nickiresume.cn/images/02contents/footer1140x120CN.webp" : "https://img.nickiresume.cn/images/02contents/footer1140x120EN.webp"}
          alt={isCN ? "联系我" : "Contact Me"}
          className="w-full h-auto object-contain"
          style={{ maxWidth: '1140px', maxHeight: '120px' }}
          referrerPolicy="no-referrer"
        />
      </div>
    </footer>
  );
}
