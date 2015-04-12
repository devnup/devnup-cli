#!/bin/sh

echo "Creating JSDocs...";
rm -rf docs/**;
rm -f docs/**;
./node_modules/jsdoc/jsdoc.js -c jsdoc/conf.json;