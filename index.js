#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
argv.verbose && console.dir(argv);

var command = require('./commands/command');
var commands = require('./commands').commands;

/**
 * parse argumts
 * @param argv
 * @returns {command} list of commands that contains provided term in name
 */
parse = function (argv) {
    argv.verbose && console.log('parse arguments...');
    let matchedCommands = commands.filter(function (command) {
        return command.command.indexOf(argv._.join(' ')) >= 0;
    });
    argv.verbose && console.log('command %s', JSON.stringify(matchedCommands));
    return matchedCommands;
}

handle = function (matchedCommands, argv) {

}

/**
 * prints help for command(s)
 * @param matchedCommands
 * @param argv
 */
help = function (matchedCommands, argv) {
    console.log('Commands:\n');
    matchedCommands.forEach(function (command) {
        console.log('%s\n', command.command);
        console.log('%s\n', command.description);
        console.log('\tusage\t\thgit %s %s', command.command, command.options.map(function (option) { return '--' + option.name + ' ' + '<' + option.settings.describe + '>'}).join(' '));
        command.options.length && console.log('\n\tparameters\n%s', command.options.map(function (option) { return '\t\t\t--' + option.name + '\t' + option.settings.describe}).join('\n'));
        console.log('\n');
    });
}

var matchedCommands = parse(argv);

/**
 * returns command if command can be executed or false
 *
 * @param matchedCommands
 * @param argv
 * @returns {command|boolean}
 */
validate = function(matchedCommands, argv) {
    if(matchedCommands.length != 1) return false;

    var command = matchedCommands[0];

    if (command.command != argv._.join(' ')) return false;

    for (var i in command.options) {
        var option = command.options[i];
        argv.verbose && console.log('validate argument %s', option.name);
        if(!argv.hasOwnProperty(option.name)) {
            console.log('argument missing:\n\t<%s>', option.name);
            return false;
        }
    }

    return command;
}

if (argv.help) {
    help(matchedCommands, argv);
    process.exit(0);
}

var myCommand = validate(matchedCommands, argv);

if (!myCommand) {
    help(matchedCommands, argv);
    process.exit(0);
}

executer = require('./commands/executor');
Mustache = require('mustache');

stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.setRawMode(true);
stdin.on('data', function (data) {
    if (data == '\u0003') { process.exit(); }
    child.stdin.write(data);
});
stdin.resume();


var batch = myCommand.mappedCommand.map(function (command) {
    command.arguments = Mustache.render(command.arguments,argv);
    return command;
})

//executing underlying command
executer.executeBatch(batch, argv);