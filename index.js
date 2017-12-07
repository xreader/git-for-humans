#!/usr/bin/env node

/**
 * Module dependencies.
 */

// var program = require('commander');
var yargs = require('yargs');

// program
//     .version('0.1.0')
//     .command('change commit message', 'Edit last commit message')
//     .option('-p, --peppers', 'Add peppers')
//     .option('-P, --pineapple', 'Add pineapple')
//     .option('-b, --bbq-sauce', 'Add bbq sauce')
//     .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//     .parse(process.argv);
//
// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// if (program['edit-last-commit-message']) console.log('  - edit last commit message');
// console.log('  - %s cheese', program.cheese);
//

const spawn = require('child_process').spawn;
const exec = require('child_process').exec;

require('./commands/remove-last-commit')(yargs);

// vorpal
//     .command('ls', 'list files in directory')
//     .action(function (args, callback) {
//         console.log('processing args=%s', args);
//         execute('ls', [], function () {
//             callback();
//         })
//     });
//
// vorpal
//     .command('stringify')
//     .option('-a, --amount <amt>', 'A number to stringify.')
//     .types({
//         string: ['a', 'amount']
//     })
//     .action(function (args, callback) {
//         this.log(args.options);
//         callback();
//     });
//
// vorpal
//     .delimiter('myapp$')
//     .show();

function execute(command, arguments, callback) {
    // child = spawn('ls', ['-lh', '/usr']);
    // child = spawn(command, arguments);
    child = exec(command + ' ' + arguments.join(' '));

// use child.stdout.setEncoding('utf8'); if you want text chunks
//     child.stdout.on('data', function (chunk) {
//         // data from standard output is here as buffers
//         console.log(chunk);
//     });

    child.stdout.pipe(process.stdout);

    process.stdin.on('data', function (data) {
        // console.log('process.stdin!');
        child.stdin.write(data);
    });

// since these are streams, you can pipe them elsewhere
    child.stderr.on('data', function (chunk) {
        // data from standard output is here as buffers
        console.error(chunk);
    });
// child.stderr.pipe(dest);

    child.on('close', function (code) {
        console.log('child process exited with code code=%s', code);
        callback();
    });
}