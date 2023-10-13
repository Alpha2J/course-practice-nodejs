/**
 * process.nextTick() 表示将这个函数放到下个事件循环中执行.
 * 比如这里当前事件循环处理的函数式hello(), 放到下个循环就是:
 * 执行完hello() 这个函数后就立即执行.
 */
function hello() {
    console.log('a');
    process.nextTick(() => console.log('b'));
    console.log('c');
    process.nextTick(() => console.log('d'));
}

hello();
