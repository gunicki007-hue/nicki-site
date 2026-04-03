const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.cwd(), 'src/pages/cases');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(directoryPath);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Update viewport and add premium transition
  content = content.replace(/viewport={{ once: true }}/g, 'viewport={{ once: true, margin: "-50px" }}\n            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}');
  
  // Update existing transitions
  content = content.replace(/transition={{ duration: 0\.6 }}/g, 'transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}');
  content = content.replace(/transition={{ duration: 0\.6, delay: 0\.1 }}/g, 'transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}');
  content = content.replace(/transition={{ duration: 0\.6, delay: 0\.2 }}/g, 'transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
  }
});

console.log('Updated case studies');
