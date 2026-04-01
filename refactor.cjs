const fs = require('fs');
const path = require('path');

function moveAndRename(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    if (file.endsWith('PC.tsx')) {
      const newName = file.replace('PC.tsx', '.tsx');
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(destDir, newName);
      
      let content = fs.readFileSync(srcPath, 'utf8');
      // Rename component name in the file
      const componentName = file.replace('.tsx', '');
      const newComponentName = newName.replace('.tsx', '');
      const regex = new RegExp(`function ${componentName}`, 'g');
      content = content.replace(regex, `function ${newComponentName}`);
      
      fs.writeFileSync(destPath, content);
      fs.unlinkSync(srcPath);
    }
  }
}

// 1. Move pages/pc to pages
moveAndRename('src/pages/pc', 'src/pages');

// 2. Move pages/cases/pc to pages/cases
moveAndRename('src/pages/cases/pc', 'src/pages/cases');

// 3. Delete mobile and pc directories
const dirsToDelete = [
  'src/pages/mobile',
  'src/pages/pc',
  'src/pages/cases/mobile',
  'src/pages/cases/pc',
  'src/hooks' // useIsMobile is likely here
];

for (const dir of dirsToDelete) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

console.log('Refactoring complete.');
