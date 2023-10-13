const fs = require('fs');
const path = require('path');

let filePath = '../../data/fileWrite.txt';
filePath = path.normalize(filePath);

const data = `hello\nworld`;

fs.writeFile(filePath, data, err => {

    if (err) throw err;

    console.log('write success!');
});
