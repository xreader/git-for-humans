const exec = require('child_process').exec;
const spawn = require('child_process').spawn;

function executeBatch (commands, options) {
    "use strict";

    var command = commands.shift();

    if (!command) process.exit();

    execute(command.command, command.arguments, options, function () {
        executeBatch(commands, options);
    });
}

exports.executeBatch = executeBatch;

function execute (command, arguments, options, callback) {
    var command = command + ' ' + arguments;

    if (options.verbose) {
        console.log('executing...\n\t%s', command);
    }

    if (options.describe) {
        console.log('%s', command);
        callback(0);
    } else {
        child = exec(command);
        child.stdout.pipe(process.stdout);
        child.on('close', function (code) {
            if (verbose) {
                console.log('child process exited with code code=%s', code);
            }
            callback(code);
        });

    }

}

exports.execute = execute;