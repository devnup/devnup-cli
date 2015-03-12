#!/usr/bin/env node
var pkg = require('../package.json');
var program = require('commander');

program
    .version(pkg.version)
    .command('domains [cmd]', 'Domains actions: list, create, remove')
    .parse(process.argv);