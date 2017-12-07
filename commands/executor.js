const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

function executeBatch (commands, callback) {
    "use strict";

    if (!commands) callback();

    var command = commands.shift();
    execute(command.command, command.arguments, function () {
        executeBatch(commands, callback);
    });
}

exports.executeBatch = executeBatch;

function execute (command, arguments, callback) {
    // child = spawn('ls', ['-lh', '/usr']);
    // child = spawn(command, arguments);
    child = exec(command + ' ' + arguments.join(' '));

// use child.stdout.setEncoding('utf8'); if you want text chunks
//     child.stdout.on('data', function (chunk) {
//         // data from standard output is here as buffers
//         console.log(chunk);
//     });

    child.stdout.pipe(process.stdout);

    // process.stdin.on('data', function (data) {
    //     // console.log('process.stdin!');
    //     child.stdin.write(data);
    // });

    stdin = process.stdin;
    stdin.setEncoding('utf8');
    stdin.setRawMode(true);
    stdin.on('data', function (data) {
        if (data == '\u0003') { process.exit(); }
        child.stdin.write(data);
    });
    stdin.resume();

    // process.stdin.pipe(require('split')()).on('data', processLine)
    //
    // function processLine (line) {
    //     console.log(line + '!')
    // }

// since these are streams, you can pipe them elsewhere
//     child.stderr.on('data', function (chunk) {
//         // data from standard output is here as buffers
//         console.error(chunk);
//     });
    // child.stderr.pipe(dest);

    child.on('close', function (code) {
        console.log('child process exited with code code=%s', code);
        callback();
    });
}

exports.execute = execute;