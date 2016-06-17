'use strict';

var BabelEngine = require('..');
var Mincer = require('mincer');
BabelEngine({
    extensions: ['.es6', '.js']
}, Mincer);

before(function() {
    this.Mincer = Mincer;
    this.BabelEngine = BabelEngine;
});

beforeEach(function() {
    this.Env = new Mincer.Environment(__dirname);
    this.Env.appendPath('fixtures');
});

afterEach(function() {
    this.Env.expireIndex();
});
