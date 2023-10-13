/**
 * on和once
 * @type {internal}
 */
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('multi', (param1, param2) => {

    console.log(`multi 1, param1: ${param1}, param2: ${param2}`);
});

myEmitter.on('multi', (param1, param2) => {

    console.log(`multi 2, param1: ${param1}, param2: ${param2}`);
});

myEmitter.once('once', () => {

    console.log('once 1');
});

myEmitter.once('once', () => {

    console.log('once 2');
});

myEmitter.emit('multi', 'this is param1', 'this is param2');
myEmitter.emit('once');
//第二次emit 'once'注册的时间是不会有事件响应的.
myEmitter.emit('once');
