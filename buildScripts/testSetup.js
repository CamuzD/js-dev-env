
//Regiuster babel to transpile before user tests run
require('babel-register')();

//disable webpack features that mocha doesnt understand
require.extensions['.css'] = function(){};