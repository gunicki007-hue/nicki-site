const fs = require('fs');
const path = require('path');

const pages = ['Profile', 'Strategy', 'DesignSystem'];
const cases = ['Web3CaseStudyEN', 'Web3CaseStudyCN', 'InsuranceCaseStudyEN', 'InsuranceCaseStudyCN', 'BrandOpsCaseStudyEN', 'BrandOpsCaseStudyCN'];

function restoreFile(dir, name) {
  const pcPath = path.join('src/pages', dir, 'pc', name + 'PC.tsx');
  const originalPath = path.join('src/pages', dir, name + '.tsx');
  if (fs.existsSync(pcPath)) {
    let content = fs.readFileSync(pcPath, 'utf8');
    content = content.replace('export default function ' + name + 'PC', 'export default function ' + name);
    fs.writeFileSync(originalPath, content);
    console.log('Restored:', originalPath);
  }
}

pages.forEach(p => restoreFile('', p));
cases.forEach(c => restoreFile('cases', c));
