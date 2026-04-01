const fs = require('fs');
const path = require('path');

function replacePaths(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replacePaths(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      if (content.includes('https://img.nickiresume.cn/images/')) {
        content = content.replace(/https:\/\/img\.nickiresume\.cn\/images\//g, '/images/');
        modified = true;
      }
      if (content.includes('https://img.nickiresume.cn/videos/')) {
        content = content.replace(/https:\/\/img\.nickiresume\.cn\/videos\//g, '/videos/');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated paths in ${fullPath}`);
      }
    }
  }
}

replacePaths('src');
