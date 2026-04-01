import { CaseStudy, Translations } from './types';

export const TRANSLATIONS: Translations = {
  nav_home: { EN: 'Home', CN: '首页' },
  nav_cases: { EN: 'Cases', CN: '案例' },
  nav_contact: { EN: 'Contact', CN: '联系' },
  hero_title: { EN: 'Strategy & Design Excellence', CN: '策略与设计的卓越融合' },
  hero_subtitle: { EN: 'Crafting digital experiences that drive impact and define brands.', CN: '打造驱动影响力并定义品牌的数字化体验。' },
  view_case: { EN: 'View Case', CN: '查看案例' },
  contact_us: { EN: 'Contact Us', CN: '联系我们' },
  back_to_cases: { EN: 'Back to Cases', CN: '返回案例列表' },
  section_context: { EN: 'Context', CN: '背景' },
  section_challenge: { EN: 'Challenge', CN: '挑战' },
  section_strategy: { EN: 'Strategy', CN: '策略' },
  section_architecture: { EN: 'System Architecture', CN: '系统架构' },
  section_framework: { EN: 'Product Framework', CN: '产品框架' },
  section_brand: { EN: 'Brand DNA', CN: '品牌基因' },
  section_visual: { EN: 'Visual Design', CN: '视觉设计' },
  section_marketing: { EN: 'Marketing Assets', CN: '营销资产' },
  section_impact: { EN: 'Impact', CN: '影响力' },
};

export const CASES: CaseStudy[] = [
  {
    id: '1',
    slug: 'fintech-revolution',
    title: { EN: 'Fintech Revolution', CN: '金融科技革命' },
    category: { EN: 'Strategy / Product', CN: '策略 / 产品' },
    thumbnail: 'https://picsum.photos/seed/fintech/800/600',
    heroImage: 'https://picsum.photos/seed/fintech-hero/1920/1080',
    description: { 
      EN: 'Redefining the digital banking experience for the next generation.', 
      CN: '为下一代重新定义数字银行体验。' 
    },
    context: { 
      EN: 'The traditional banking sector was facing disruption from agile startups.', 
      CN: '传统银行业正面临来自敏捷初创公司的颠覆。' 
    },
    challenge: { 
      EN: 'Legacy systems and complex user flows were hindering growth.', 
      CN: '遗留系统和复杂的用户流程阻碍了增长。' 
    },
    strategy: { 
      EN: 'A user-centric approach focusing on transparency and speed.', 
      CN: '以用户为中心，专注于透明度和速度。' 
    },
    systemArchitecture: { 
      EN: 'Microservices architecture built for scalability and security.', 
      CN: '为可扩展性和安全性构建的微服务架构。' 
    },
    productFramework: { 
      EN: 'Modular design system allowing for rapid feature deployment.', 
      CN: '模块化设计系统，支持快速功能部署。' 
    },
    brandDNA: { 
      EN: 'Trust, innovation, and accessibility at the core.', 
      CN: '以信任、创新和易用性为核心。' 
    },
    visualDesign: { 
      EN: 'Clean, minimalist interface with bold typography.', 
      CN: '简洁、极简的界面，搭配大胆的排版。' 
    },
    marketingAssets: { 
      EN: 'Integrated campaign across social and professional networks.', 
      CN: '跨社交和专业网络的综合营销活动。' 
    },
    impact: { 
      EN: '200% increase in user acquisition within the first quarter.', 
      CN: '第一季度用户获取量增长了 200%。' 
    },
  },
  {
    id: '2',
    slug: 'eco-mobility',
    title: { EN: 'Eco Mobility', CN: '绿色出行' },
    category: { EN: 'Sustainability / Branding', CN: '可持续发展 / 品牌' },
    thumbnail: 'https://picsum.photos/seed/eco/800/600',
    heroImage: 'https://picsum.photos/seed/eco-hero/1920/1080',
    description: { 
      EN: 'Leading the transition to sustainable urban transportation.', 
      CN: '引领向可持续城市交通的转型。' 
    },
    context: { 
      EN: 'Urban congestion and pollution required a new mobility paradigm.', 
      CN: '城市拥堵和污染需要新的出行范式。' 
    },
    challenge: { 
      EN: 'Changing consumer behavior towards shared electric vehicles.', 
      CN: '改变消费者对共享电动汽车的行为习惯。' 
    },
    strategy: { 
      EN: 'Creating a seamless ecosystem of vehicles and charging stations.', 
      CN: '构建车辆与充电站的无缝生态系统。' 
    },
    systemArchitecture: { 
      EN: 'Real-time fleet management and predictive maintenance.', 
      CN: '实时车队管理和预测性维护。' 
    },
    productFramework: { 
      EN: 'Mobile-first platform with integrated payment and navigation.', 
      CN: '移动优先平台，集成支付和导航。' 
    },
    brandDNA: { 
      EN: 'Nature-inspired, tech-enabled, and community-focused.', 
      CN: '受自然启发，技术赋能，以社区为中心。' 
    },
    visualDesign: { 
      EN: 'Organic shapes and a palette of earthy tones and neon accents.', 
      CN: '有机形状，搭配大地色调和霓虹点缀。' 
    },
    marketingAssets: { 
      EN: 'Community-driven content and influencer partnerships.', 
      CN: '社区驱动的内容和网红合作伙伴关系。' 
    },
    impact: { 
      EN: 'Reduced carbon footprint by 50,000 tons in the first year.', 
      CN: '第一年减少了 50,000 吨碳足迹。' 
    },
  }
];
