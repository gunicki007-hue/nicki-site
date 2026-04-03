const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/pages/DesignSystem.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /initial={{ opacity: 0, y: 20 }}\s*whileInView={{ opacity: 1, y: 0 }}\s*viewport={{ once: true }}/g,
  `initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}`
);

content = content.replace(
  /initial={{ opacity: 0, y: 30 }}\s*whileInView={{ opacity: 1, y: 0 }}\s*viewport={{ once: true }}/g,
  `initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated DesignSystem.tsx');
