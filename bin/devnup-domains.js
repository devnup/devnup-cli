#!/usr/bin/env node

var pkg = require('package.json');
var program = require('commander');

program
    .option('-V, --verbose', 'Verbose mode')
    .parse(process.argv);

console.log(program.args);