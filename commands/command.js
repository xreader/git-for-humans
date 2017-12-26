executer = require('./executor');

Mustache = require('mustache');

module.exports = function(yargs, command){

    yargs
        .command(
            command.command,
            command.description,
            function (yargs) {

                command.options && command.options.forEach(function(option) {
                    yargs.option(option.name, option.settings)
                })

                return yargs;
            },
            function (args) {

                if (args.verbose) {
                    console.log("arguments %s", JSON.stringify(args));
                }

                var batch = command.mappedCommand.map(function (command) {
                    command.arguments = Mustache.render(command.arguments,args);
                    return command;
                })

                response = executer.executeBatch(batch, args.verbose, function () {
                    callback();
                })
            }
        )

}