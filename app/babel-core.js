/**
 * how to use the babel API.
 * 1.npm install --save babel-core
 * 2.require('babel-core');
 * 3.$ babel-node app/bable-core.js
 */
'use strict';

var es6Code = 'let x = n => n + 1';
var es5Code = require('babel-core')
    .transform(es6Code, {
        presets: ['es2015']
    })
    .code;
console.log(es5Code);
