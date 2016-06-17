'use strict';

var babelEngine = require('..');
var mincer = require('mincer');
babelEngine(mincer, {
    extensions: ['.es6', '.js']
});

before(function() {
    this.Mincer = mincer;
    this.BabelEngine = babelEngine;
});

beforeEach(function() {
    this.Env = new this.Mincer.Environment(__dirname);
    this.Env.appendPath('fixtures');
});

afterEach(function() {
    this.Env.expireIndex();
});
