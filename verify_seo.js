const fs = require('fs');
const content = fs.readFileSync('./src/data/toolContent.ts', 'utf8');

const targets = [
  "/compress-pdf-to-200kb",
  "/compress-pdf-to-100kb",
  "/scanned-pdf-to-200kb",
  "/compress-pdf",
  "/pdf-to-jpg"
];

let results = "";
targets.forEach(route => {
  const startIdx = content.indexOf(`"${route}":`);
  if (startIdx === -1) {
    results += `${route}: MISSING\n`;
    return;
  }

  // Find the end of the block - looking for the next top-level comma or end of object
  let endIdx = content.indexOf('  },', startIdx);
  if (endIdx === -1) endIdx = content.indexOf('};', startIdx);

  const block = content.substring(startIdx, endIdx);

  const words = block.split(/\s+/).filter(w => w.length > 2).length;
  results += `${route}: ~${words} words\n`;
});

fs.writeFileSync('seo_results.txt', results);
console.log("Results written to seo_results.txt");
