executer = require('./executor');

module.exports = function(yargs){

    yargs
        .command(
            'remove last commit',
            'make a get HTTP request',
            function (yargs) {
                return yargs.option('u', {
                    alias: 'url',
                    describe: 'the URL to make an HTTP request to'
                })
            },
            function (args) {
                console.log('processing args=%s', args);

                var commands = [
                    {command: 'git', arguments: ['reset', 'HEAD^', '--hard']},
                    {command: 'git', arguments: ['commit', '--amend']}
                ]

                var cmd = 'git reset HEAD^ --hard';
                console.log('executing %s', cmd);
                response = executer.executeBatch(commands, function () {
                    callback();
                })
            }
        )
        .help()
        .argv

}