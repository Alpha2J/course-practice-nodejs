const fs = require('fs');
const path = require('path');

let filePath = '../../data/fileAppend.txt';
filePath = path.normalize(filePath);

let data = 'appended data\n';
fs.appendFile(filePath, data, err => {
    if (err) throw err;

    console.log('file appended success!');
});
