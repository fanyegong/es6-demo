/**
 * $ babel-node app/index.js
 */
'use strict';
var {foo, bar: baz} = {foo: 0, bar: 1};
console.log(foo);
console.log(baz);
module.exports = {foo,bar:baz};