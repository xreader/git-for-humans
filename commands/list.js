executer = require('./executor');

module.exports = function(yargs){

    yargs
        .command(
            'list',
            'just list files',
            function (yargs) {
                return yargs;
            },
            function (args) {
                console.log('processing args=%s', args);

                var commands = [
                    {command: 'ls', arguments: ['-lAt']},
                ]

                response = executer.executeBatch(commands, function () {
                    callback();
                })
            }
        )

}