const fs = require('fs');
const path = require('path');

let file1Path = '../../data/fileMerge1.txt';
file1Path = path.normalize(file1Path);

let file2Path = '../../data/fileMerge2.txt';
file2Path = path.normalize(file2Path);

let fileMergedPath = '../../data/fileMerged.txt';
fileMergedPath = path.normalize(fileMergedPath);

fs.readFile(file1Path, {encoding: 'utf8'}, (err, data) => {

    fs.readFile(file2Path, {encoding: 'utf8'}, (err1, data1) => {

        const mergedData = data + data1;
        fs.writeFile(fileMergedPath, mergedData, err2 => {
            if (err2) throw err2;

            console.log('successfully merged');
        });
    });
});
