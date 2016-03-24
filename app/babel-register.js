/**
 * 1.$ node app/register.js
 * 2.or $ babel-node app/register.js
 */

'use strict';

// after this,when require file like .js .jsx .es .es6,it will be transformed automatically.
require('babel-register');

// require and exec es6 files
require('./babel-polyfill');

// but you cannot use es6 here.
