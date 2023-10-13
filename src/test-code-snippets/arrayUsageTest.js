/**
 * Array对象的用法测试类.
 *
 * doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * author: Jeb.Wang
 * date: 2020/1/7
 */
let testSpliceArr = [1, 2, 3, 5, 7];
// 从下标为1开始, 用8, 9, 10替换掉两个元素
//testSpliceArr.splice(1, 2, 8, 9, 10);
console.log(testSpliceArr.splice(1, [8, 9, 10]));
console.log(`testSpliceArr: ${testSpliceArr}`);


// 测试数组属性
let testPropertyArr = [1, 2, 3, 4];
console.log(`before add property to arr, testPropertyArr: ${testPropertyArr}`);
testPropertyArr.newProperty = 'this is new property';
console.log(`after add property to arr, testPropertyArr: ${testPropertyArr}`);
for (const property of testPropertyArr) {
    console.log(`property of testPropertyArr: ${property}`);
}
console.log('\r\n');
for (const property in testPropertyArr) {
    console.log(`property in testPropertyArr: ${property}`);
}
