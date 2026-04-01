const propsStr = '{ language }: ProfileProps';
const objMatch = propsStr.match(/\{([^\}]+)\}/);
console.log(objMatch);
if (objMatch) {
  const keys = objMatch[1].split(',').map(k => k.trim());
  const propsPass = keys.map(k => k + '={' + k + '}').join(' ');
  console.log(propsPass);
}
