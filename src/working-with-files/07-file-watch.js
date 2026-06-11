const fs = require('fs');

fs.watch('output.txt', () => {
  console.log('File changed');
});