const fs = require('fs');
const path = require('path');

const pages = ['Profile', 'Strategy', 'DesignSystem'];
const cases = ['Web3CaseStudyEN', 'Web3CaseStudyCN', 'InsuranceCaseStudyEN', 'InsuranceCaseStudyCN', 'BrandOpsCaseStudyEN', 'BrandOpsCaseStudyCN'];

fs.mkdirSync('src/hooks', { recursive: true });
fs.mkdirSync('src/pages/pc', { recursive: true });
fs.mkdirSync('src/pages/mobile', { recursive: true });
fs.mkdirSync('src/pages/cases/pc', { recursive: true });
fs.mkdirSync('src/pages/cases/mobile', { recursive: true });

fs.writeFileSync('src/hooks/useIsMobile.ts', `import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < breakpoint : false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [breakpoint]);

  return isMobile;
}
`);

function processFile(dir, name) {
  const originalPath = path.join('src/pages', dir, name + '.tsx');
  if (!fs.existsSync(originalPath)) {
    console.log('File not found:', originalPath);
    return;
  }
  const content = fs.readFileSync(originalPath, 'utf8');
  
  const pcContent = content.replace('export default function ' + name, 'export default function ' + name + 'PC');
  fs.writeFileSync(path.join('src/pages', dir, 'pc', name + 'PC.tsx'), pcContent);
  
  const mobileContent = content.replace('export default function ' + name, 'export default function ' + name + 'Mobile');
  fs.writeFileSync(path.join('src/pages', dir, 'mobile', name + 'Mobile.tsx'), mobileContent);
  
  // Extract props
  let propsStr = '';
  let propsType = '';
  let propsPass = '';
  
  const funcMatch = content.match(new RegExp('export default function ' + name + '\\s*\\(([^\\)]*)\\)'));
  if (funcMatch && funcMatch[1].trim() !== '') {
    propsStr = funcMatch[1]; 
    
    const objMatch = propsStr.match(/\{([^\}]+)\}/);
    if (objMatch) {
      const keys = objMatch[1].split(',').map(k => k.trim());
      propsPass = keys.map(k => k + '={' + k + '}').join(' ');
    }
  }
  
  const interfaceMatch = content.match(new RegExp('interface ' + name + 'Props \\{[^\\}]+\\}'));
  if (interfaceMatch) {
    propsType = interfaceMatch[0];
  }
  
  const hookImportPath = dir === '' ? '../hooks/useIsMobile' : '../../hooks/useIsMobile';
  
  const newOriginalContent = `import { useIsMobile } from '${hookImportPath}';
import ${name}PC from './pc/${name}PC';
import ${name}Mobile from './mobile/${name}Mobile';

${propsType}

export default function ${name}(${propsStr}) {
  const isMobile = useIsMobile();
  return isMobile ? <${name}Mobile ${propsPass} /> : <${name}PC ${propsPass} />;
}
`;
  fs.writeFileSync(originalPath, newOriginalContent);
  console.log('Processed:', originalPath);
}

pages.forEach(p => processFile('', p));
cases.forEach(c => processFile('cases', c));
