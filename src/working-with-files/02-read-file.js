const fs= require('fs');

const data = fs.readFileSync('output.txt', 'utf-8');
console.log('File content:', data);