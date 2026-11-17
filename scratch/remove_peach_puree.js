const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace peach-concentrate image
content = content.replace(
  'id: "peach-concentrate",\n    name: "Peach Concentrate",\n    botanical: "Prunus persica (Concentrate)",\n    category: "concentrate",\n    badge: "30–32° Brix Industrial Concentrate",\n    tagline: "Vacuum concentrated to 30-32° Brix from fresh, mature, clean peaches.",\n    image: "/images/peach-concentrate.jpg",',
  'id: "peach-concentrate",\n    name: "Peach Concentrate",\n    botanical: "Prunus persica (Concentrate)",\n    category: "concentrate",\n    badge: "30–32° Brix Industrial Concentrate",\n    tagline: "Vacuum concentrated to 30-32° Brix from fresh, mature, clean peaches.",\n    image: "/images/PeACH 800x600.jpg",'
);

// Remove peach-puree block
// Find start of peach-puree
const startIndex = content.indexOf('// 11. Peach Puree Aseptic');
const endIndex = content.indexOf('// 12. Peach Concentrate (30-32° Brix)');

if (startIndex !== -1 && endIndex !== -1) {
  content = content.slice(0, startIndex) + content.slice(endIndex);
  console.log('Successfully removed peach-puree block');
} else {
  console.error('Could not find indices', { startIndex, endIndex });
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Finished updating data/products.ts');
