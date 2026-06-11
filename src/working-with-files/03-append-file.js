const fs = require('fs');

fs.appendFileSync('sample.txt', '\nNew Line');

console.log('Content appended');