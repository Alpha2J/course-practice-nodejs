const spawn = require('child_process').spawn;

let child = spawn('tail', ['-f', './system.log']);
//receiving data from child process
child.stdout.on('data', (data) => {

    console.log('data: ', data);
});

//receiving error data from child process
child.stderr.on('data', (data) => {

    console.log('error data: ', data);
});
