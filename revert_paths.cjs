const fs = require('fs');
const path = require('path');

const directoryPath = path.join(process.cwd(), 'src');

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
let updatedFiles = [];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  content = content.replace(/(["'])\/images\//g, '$1https://img.nickiresume.cn/images/');
  content = content.replace(/(["'])\/videos\//g, '$1https://img.nickiresume.cn/videos/');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedFiles.push(file);
  }
});

console.log('Updated files:', updatedFiles);
