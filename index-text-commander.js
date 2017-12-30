#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
    .version('0.1.0')
    .command('ls <dir> [otherDirs...]')
    .command('rmdir <dir> [otherDirs...]')
    // .action(function (dir, otherDirs) {
    //     console.log('rmdir %s', dir);
    //     if (otherDirs) {
    //         otherDirs.forEach(function (oDir) {
    //             console.log('rmdir %s', oDir);
    //         });
    //     }
    // });

program.parse(process.argv);