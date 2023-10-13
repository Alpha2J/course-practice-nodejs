const spawn = require('child_process').spawn;

let child = spawn('ls', ['not.txt']);

child.on('exit', (code, signal) => {

    console.log('child process terminated with code ' + code + ' signal: ' + signal);
});
