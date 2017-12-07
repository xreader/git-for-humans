#!/usr/bin/env node

/**
 * Module dependencies.
 */

var yargs = require('yargs');

require('./commands/remove-last-commit')(yargs);