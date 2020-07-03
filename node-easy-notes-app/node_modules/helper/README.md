helper
======

Purpose of module is to be placeholder for oddities and everyday changes in node.js API.

Atm implemented OS safe directory separator and exports existsSync() that changed
locations from path to fs between node.js versions 0.6 -> 0.8.

Usage:

npm install helper

Code:

var helper = require('helper');
helper.existsSync(..);
console.log(__dirname + helper.sep);

This way you don't have to think what OS, versions or modules you use or need to use.

helper.existsSync() is same method as path.existsSync/fs.existsSync.
helper.sep is slash or backslash depending on OS.

Idea is to gather this kind of stuff.
Patches are welcome!
