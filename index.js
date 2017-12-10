#!/usr/bin/env node

/**
 * Module dependencies.
 */

var yargs = require('yargs');

require('./commands/remove-last-commit')(yargs);
require('./commands/list')(yargs);
require('./commands/last-commit')(yargs);

yargs.help()
    .argv


stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.setRawMode(true);
stdin.on('data', function (data) {
    if (data == '\u0003') { process.exit(); }
    child.stdin.write(data);
});
stdin.resume();
