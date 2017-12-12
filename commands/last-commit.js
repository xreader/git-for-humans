executer = require('./executor');

module.exports = function(yargs){

    yargs
        .command(
            'show last commit',
            'What did I just commit?',
            function (yargs) {
                return yargs.option('u', {
                    alias: 'show',
                    describe: 'Let\'s say that you just blindly committed changes with git commit -a and you\'re not sure what the actual content of the commit you just made was. You can show the latest commit on your current HEAD with'
                })
            },
            function (args) {
                var commands = [
                    {command: 'git', arguments: ['log','-n1','-p']},
                ]

                console.log('executing %s', JSON.stringify(commands));

                response = executer.executeBatch(commands, function () {
                    callback();
                })
            }
        )

}