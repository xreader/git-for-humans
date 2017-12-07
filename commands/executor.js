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
    child = exec(command + ' ' + arguments.join(' '));

    child.stdout.pipe(process.stdout);

    stdin = process.stdin;
    stdin.setEncoding('utf8');
    stdin.setRawMode(true);
    stdin.on('data', function (data) {
        if (data == '\u0003') { process.exit(); }
        child.stdin.write(data);
    });
    stdin.resume();

    child.on('close', function (code) {
        console.log('child process exited with code code=%s', code);
        callback();
    });
}

exports.execute = execute;