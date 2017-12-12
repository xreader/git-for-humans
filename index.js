#!/usr/bin/env node

/**
 * Module dependencies.
 */

var yargs = require('yargs');

var commands = [
    {
        command:'change author',
        description:'Change wrong name and email in last commit',
        mappedCommand : [
            {command: 'git', arguments: 'commit --amend --author "{{name}} <{{email}}>"'},
        ],
        options: [
            {name: 'email', settings: {describe: 'new email'}},
            {name: 'name', settings: {describe: 'new author name'}},
        ]
    },
    {
        command:'show last commit',
        description:'What did I just commit?',
        mappedCommand : [
            {command: 'git', arguments: 'log -n1 -p'},
        ],
        options: []
    },
    {
        command:'remove last commit',
        description:'Delete or remove last commit',
        mappedCommand : [
            {command: 'git', arguments: 'reset HEAD^ --hard'},
            {command: 'git', arguments: 'commit --amend'}
        ],
        options: []
    }

];


var command = require('./commands/command');

commands.forEach(function (cmd) {
    command(yargs, cmd);
})


yargs.help().argv

stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.setRawMode(true);
stdin.on('data', function (data) {
    if (data == '\u0003') { process.exit(); }
    child.stdin.write(data);
});
stdin.resume();
