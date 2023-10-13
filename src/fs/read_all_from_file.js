const fs = require('fs');
const path = require('path');

let filePath = '../../data/fileRead.txt';
filePath = path.normalize(filePath);
fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {

    if (err) {
        throw err;
    }

    console.log(data);
});


