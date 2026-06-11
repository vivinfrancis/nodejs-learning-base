const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello Stream');

writeStream.end();