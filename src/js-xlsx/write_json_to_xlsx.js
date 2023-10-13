const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

let data = [
    {name: 'alphaaaaaaaaaaaaaaaaaaaaaaaaa', age: 22},
    {name: 'alpha2', age: 55},
    {age: 2},
    {age: 3}
];

//1. make worksheet
let worksheet = XLSX.utils.json_to_sheet(data);
let worksheetCols = [
    {wch: 20}, //"characters"
    //{wpx: 50}, //"pixels"
    //{hidden: true} //hide column
];
worksheet['!cols'] = worksheetCols;

//2. add to workbook

let workbook = XLSX.utils.book_new();
// 这里"my sheet"就是我们的sheet名字
XLSX.utils.book_append_sheet(workbook, worksheet, "my sheet");

let filePath = '../../data/DuDu Whitelist x 150.xlsx';
filePath = path.normalize(filePath);

// 3. 生成xlsx格式的buffer数据
let buffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'buffer'});
fs.writeFile(filePath, buffer, err => {

    if (err) {
        throw err;
    }

    console.log('xlsx file successfully write!');
});