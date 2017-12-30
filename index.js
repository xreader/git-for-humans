#!/usr/bin/env node

/**
 * Module dependencies.
 */

var yargs = require('yargs');


var command = require('./commands/command');
var commands = require('./commands').commands;

commands.forEach(function (cmd) {
    command(yargs, cmd);
});


yargs.help().argv

stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.setRawMode(true);
stdin.on('data', function (data) {
    if (data == '\u0003') { process.exit(); }
    child.stdin.write(data);
});
stdin.resume();
