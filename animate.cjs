const fs = require('fs');

const files = [
  'src/pages/cases/pc/Web3CaseStudyENPC.tsx',
  'src/pages/cases/pc/Web3CaseStudyCNPC.tsx',
  'src/pages/cases/pc/BrandOpsCaseStudyENPC.tsx',
  'src/pages/cases/pc/BrandOpsCaseStudyCNPC.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // h1
  content = content.replace(
    /<h1 className="([^"]+)">/g,
    '<motion.h1\n              initial={{ opacity: 0, y: 20 }}\n              animate={{ opacity: 1, y: 0 }}\n              transition={{ duration: 0.6 }}\n              className="$1"\n            >'
  );
  content = content.replace(/<\/h1>/g, '</motion.h1>');

  // h2
  content = content.replace(
    /<h2 className="([^"]+)">/g,
    '<motion.h2\n            initial={{ opacity: 0, y: 20 }}\n            whileInView={{ opacity: 1, y: 0 }}\n            viewport={{ once: true }}\n            className="$1"\n          >'
  );
  content = content.replace(/<\/h2>/g, '</motion.h2>');

  // h3
  content = content.replace(
    /<h3 className="([^"]+)">/g,
    '<motion.h3\n            initial={{ opacity: 0, y: 20 }}\n            whileInView={{ opacity: 1, y: 0 }}\n            viewport={{ once: true }}\n            className="$1"\n          >'
  );
  content = content.replace(/<\/h3>/g, '</motion.h3>');

  // h4
  content = content.replace(
    /<h4 className="([^"]+)">/g,
    '<motion.h4\n            initial={{ opacity: 0, y: 20 }}\n            whileInView={{ opacity: 1, y: 0 }}\n            viewport={{ once: true }}\n            className="$1"\n          >'
  );
  content = content.replace(/<\/h4>/g, '</motion.h4>');

  // p
  content = content.replace(
    /<p className="([^"]+)">/g,
    '<motion.p\n            initial={{ opacity: 0, y: 20 }}\n            whileInView={{ opacity: 1, y: 0 }}\n            viewport={{ once: true }}\n            className="$1"\n          >'
  );
  content = content.replace(/<\/p>/g, '</motion.p>');

  // p without className
  content = content.replace(
    /<p>/g,
    '<motion.p\n            initial={{ opacity: 0, y: 20 }}\n            whileInView={{ opacity: 1, y: 0 }}\n            viewport={{ once: true }}\n          >'
  );

  // Placeholder
  content = content.replace(
    /<Placeholder([^>]+)\/>/g,
    '<motion.div\n            initial={{ opacity: 0, y: 30 }}\n            whileInView={{ opacity: 1, y: 0 }}\n            viewport={{ once: true }}\n            className="w-full"\n          >\n            <Placeholder$1/>\n          </motion.div>'
  );

  // Hero subtitle containers
  content = content.replace(
    /<div className="space-y-2 text-sm md:text-base text-gray-400">/g,
    '<motion.div\n              initial={{ opacity: 0, y: 20 }}\n              animate={{ opacity: 1, y: 0 }}\n              transition={{ duration: 0.6, delay: 0.1 }}\n              className="space-y-2 text-sm md:text-base text-gray-400"\n            >'
  );
  content = content.replace(
    /<div className="space-y-1 text-\[14px\] text-gray-500 mt-4 leading-relaxed">/g,
    '<motion.div\n              initial={{ opacity: 0, y: 20 }}\n              animate={{ opacity: 1, y: 0 }}\n              transition={{ duration: 0.6, delay: 0.1 }}\n              className="space-y-1 text-[14px] text-gray-500 mt-4 leading-relaxed"\n            >'
  );
  content = content.replace(
    /<div className="text-\[14px\] text-gray-600 mt-6 leading-relaxed max-w-\[400px\]">/g,
    '<motion.div\n              initial={{ opacity: 0, y: 20 }}\n              animate={{ opacity: 1, y: 0 }}\n              transition={{ duration: 0.6, delay: 0.15 }}\n              className="text-[14px] text-gray-600 mt-6 leading-relaxed max-w-[400px]"\n            >'
  );
  
  // Hero image container
  content = content.replace(
    /<div className="lg:col-span-7">/g,
    '<motion.div\n            initial={{ opacity: 0, scale: 0.95 }}\n            animate={{ opacity: 1, scale: 1 }}\n            transition={{ duration: 0.8, delay: 0.2 }}\n            className="lg:col-span-7"\n          >'
  );

  // Fix closing tags for motion.div
  // For lg:col-span-7, the closing tag is </div> right after the Placeholder.
  // We can just replace the specific block.
  // Let's do this more safely by using a regex that matches the whole block.
  content = content.replace(
    /<motion\.div([^>]+className="lg:col-span-7"[^>]+>)\s*<motion\.div([^>]+)>\s*<Placeholder([^>]+)\/>\s*<\/motion\.div>\s*<\/div>/g,
    '<motion.div$1\n            <motion.div$2>\n              <Placeholder$3/>\n            </motion.div>\n          </motion.div>'
  );

  // For the subtitle containers, they contain <motion.p> tags now.
  // <motion.div ... className="space-y-2 text-sm md:text-base text-gray-400">
  //   <motion.p ...>...</motion.p>
  //   <motion.p ...>...</motion.p>
  // </div>
  content = content.replace(
    /(<motion\.div[^>]+className="space-y-2 text-sm md:text-base text-gray-400"[^>]+>[\s\S]*?)<\/div>/g,
    '$1</motion.div>'
  );
  content = content.replace(
    /(<motion\.div[^>]+className="space-y-1 text-\[14px\] text-gray-500 mt-4 leading-relaxed"[^>]+>[\s\S]*?)<\/div>/g,
    '$1</motion.div>'
  );
  content = content.replace(
    /(<motion\.div[^>]+className="text-\[14px\] text-gray-600 mt-6 leading-relaxed max-w-\[400px\]"[^>]+>[\s\S]*?)<\/div>/g,
    '$1</motion.div>'
  );

  fs.writeFileSync(file, content);
  console.log('Processed', file);
});
