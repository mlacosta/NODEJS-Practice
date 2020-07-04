const fs = require('fs'); //file system module
const fileName = 'notes.txt';

fs.writeFileSync(fileName,'My name is Marian\n');

fs.appendFileSync(fileName,'\nThis message was appended');

