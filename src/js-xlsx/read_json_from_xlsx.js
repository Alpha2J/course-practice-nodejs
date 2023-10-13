const XLSX = require('xlsx');
const path = require('path');

let filePath = '../../data/testExcel.xlsx';
filePath = path.normalize(filePath);

//workbook 代表excel文件
let workbook = XLSX.readFile(filePath);

//sheet代表excel里面的sheet
let sheetNames = workbook.SheetNames;
let worksheet = workbook.Sheets[sheetNames[0]];

let sheetData = getJSONDataFromSheet(worksheet);


/**
 * {
 *     "header": {
 *         "col": "colName"
 *     },
 *     "datas": [
 *         {
 *             "colName": "colValue"
 *         }
 *     ]
 * }
 * @param worksheet
 */
function getJSONDataFromSheet(worksheet) {

    let header = {};
    let jsonData = {};
    let datas = [];
    for (let cell in worksheet) {
        if (cell[0] === '!') {
            continue;
        }

        let col = getColName(cell);
        let row = getRowIndex(cell);
        let value = worksheet[cell].v;
        if (row === 1) {
            header[col] = value;
        } else {

            if (!datas[row]) {
                datas[row] = {};
            }

            datas[row][header[col]] = value;
        }
    }

    //shift两次主要是去掉数组前面的两个空位置, 因为worksheet是从1开始的, 而1表示的是标题, 所以也被忽略掉了, 因此数组前面有两个空位.
    datas.shift();
    datas.shift();
    jsonData.header = header;
    jsonData.datas = datas;

    return jsonData;
}

function getColName(cell) {
    if (cell[0] === '!') {
        throw new Error('Not supporting cell with name begin with the alpha "!"');
    }

    let numberIndex = getNumberIndex(cell);

    return cell.substring(0, numberIndex);
}

function getRowIndex(cell) {
    if (cell[0] === '!') {
        throw new Error('Not supporting cell with name begin with the alpha "!"');
    }

    let numberIndex = getNumberIndex(cell);

    return parseInt(cell.substring(numberIndex));
}

function getNumberIndex(cell) {
    let numberIndex = -1;
    for (let i = 0; i < cell.length; i++) {
        if (!isNaN(cell[i])) {
            numberIndex = i;
            break;
        }
    }

    return numberIndex;
}
