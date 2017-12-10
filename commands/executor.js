const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

function executeBatch (commands) {
    "use strict";

    var command = commands.shift();

    if (!command) process.exit();

    execute(command.command, command.arguments, function () {
        executeBatch(commands);
    });
}

exports.executeBatch = executeBatch;

function execute (command, arguments, callback) {
    child = exec(command + ' ' + arguments.join(' '));

    child.stdout.pipe(process.stdout);
    child.on('close', function (code) {
        // console.log('child process exited with code code=%s', code);
        callback(code);
    });
}

exports.execute = execute;