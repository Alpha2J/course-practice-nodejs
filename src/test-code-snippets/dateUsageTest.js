/**
 * Date对象的用法测试类.
 *
 * doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 *
 * author: Jeb.Wang
 * date: 2019/12/27
 */
let date1 = '2019-12-23 22:22:00';
let parsedDate1 = new Date(date1);
console.log(`parsedDate1.getTime(): ${parsedDate1.getTime()}`);

let date2 = '2019-12-24';
let parsedDate2 = new Date(date2);
console.log(`parsedDate2.getTime(): ${parsedDate2.getTime()}`);

const dateFormat = require('dateformat');
const now = new Date();
console.log(`formatted time of "now": ${dateFormat(now, 'yyyy-mm-dd HH:MM:ss l')}`);

const currentTimestamp = Date.now();
console.log(`current timestamp is: ${currentTimestamp}`);
