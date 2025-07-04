const fs = require('fs');
const path = require('path');
const { set } = require('lodash');

function convertFlatToNested(input) {
  return Object.entries(input).reduce(
    (acc, [key, value]) => set(acc, key, value),
    {}
  );
}

const locales = ['en', 'ar'];
const messagesDir = path.join(__dirname, 'messages');

locales.forEach(locale => {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const input = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const output = convertFlatToNested(input);
  fs.writeFileSync(filePath, JSON.stringify(output, null, 2));
  console.log(`Converted ${locale}.json to nested structure.`);
}); 