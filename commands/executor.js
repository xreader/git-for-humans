const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

function executeBatch (commands, verbose) {
    "use strict";

    var command = commands.shift();

    if (!command) process.exit();

    execute(command.command, command.arguments, verbose, function () {
        executeBatch(commands, verbose);
    });
}

exports.executeBatch = executeBatch;

function execute (command, arguments, verbose, callback) {
    var command = command + ' ' + arguments;

    if (verbose) {
        console.log('executing...\n\t%s', command);
    }

    child = exec(command);

    child.stdout.pipe(process.stdout);
    child.on('close', function (code) {
        if (verbose) {
            console.log('child process exited with code code=%s', code);
        }
        callback(code);
    });
}

exports.execute = execute;