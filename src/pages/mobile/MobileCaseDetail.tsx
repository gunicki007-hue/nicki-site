import React from 'react';

interface MobileCaseDetailProps {
  slug: string;
  language: 'EN' | 'CN';
}

export const MOBILE_CASE_IMAGES: Record<string, Record<'EN' | 'CN', string[]>> = {
  web3: {
    EN: [
      "https://img.nickiresume.cn/images/APPcase1/Slice%201.webp",
      "https://img.nickiresume.cn/images/APPcase1/Slice%202.webp",
      "https://img.nickiresume.cn/images/APPcase1/Slice%203.webp",
      "https://img.nickiresume.cn/images/APPcase1/Slice%204.webp",
      "https://img.nickiresume.cn/images/APPcase1/Slice%205.webp",
      "https://img.nickiresume.cn/images/APPcase1/Slice%206.webp"
    ],
    CN: [
      "https://img.nickiresume.cn/images/APPcase1/01CN.webp",
      "https://img.nickiresume.cn/images/APPcase1/02CN.webp",
      "https://img.nickiresume.cn/images/APPcase1/03CN.webp",
      "https://img.nickiresume.cn/images/APPcase1/04CN.webp",
      "https://img.nickiresume.cn/images/APPcase1/05CN.webp",
      "https://img.nickiresume.cn/images/APPcase1/06CN.webp"
    ]
  },
  insurance: {
    EN: [
      "https://img.nickiresume.cn/images/APPcase2/01EN.webp",
      "https://img.nickiresume.cn/images/APPcase2/02EN.webp",
      "https://img.nickiresume.cn/images/APPcase2/03EN.webp",
      "https://img.nickiresume.cn/images/APPcase2/04EN.webp"
    ],
    CN: [
      "https://img.nickiresume.cn/images/APPcase2/01CN.webp",
      "https://img.nickiresume.cn/images/APPcase2/02CN.webp",
      "https://img.nickiresume.cn/images/APPcase2/03CN.webp"
    ]
  },
  aesthetic: {
    EN: [
      "https://img.nickiresume.cn/images/APPcase3/01EN.webp",
      "https://img.nickiresume.cn/images/APPcase3/02EN.webp",
      "https://img.nickiresume.cn/images/APPcase3/03EN.webp",
      "https://img.nickiresume.cn/images/APPcase3/04EN.webp",
      "https://img.nickiresume.cn/images/APPcase3/05EN.webp"
    ],
    CN: [
      "https://img.nickiresume.cn/images/APPcase3/01CN.webp",
      "https://img.nickiresume.cn/images/APPcase3/02CN.webp",
      "https://img.nickiresume.cn/images/APPcase3/03CN.webp",
      "https://img.nickiresume.cn/images/APPcase3/04CN.webp",
      "https://img.nickiresume.cn/images/APPcase3/05CN.webp"
    ]
  },
  system: {
    EN: [
      "https://img.nickiresume.cn/images/APPcase4/01EN.webp",
      "https://img.nickiresume.cn/images/APPcase4/02EN.webp",
      "https://img.nickiresume.cn/images/APPcase4/03EN.webp"
    ],
    CN: [
      "https://img.nickiresume.cn/images/APPcase4/01CN.webp",
      "https://img.nickiresume.cn/images/APPcase4/02CN.webp",
      "https://img.nickiresume.cn/images/APPcase4/03CN.webp"
    ]
  }
};

export default function MobileCaseDetail({ slug, language }: MobileCaseDetailProps) {
  const images = MOBILE_CASE_IMAGES[slug]?.[language] || [];

  return (
    <div className="w-full flex flex-col bg-[#050505] pb-[env(safe-area-inset-bottom)]">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`${slug} part ${idx + 1}`} className="w-full block" />
      ))}
    </div>
  );
}
