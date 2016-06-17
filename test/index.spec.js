'use strict';

var BabelEngine = require('..');
var Mincer = require('mincer');
BabelEngine({
    extensions: ['.es6', '.js']
}, Mincer);
var env = new Mincer.Environment(__dirname);
env.appendPath('fixtures');

describe('Mincer Babel Engine', function () {
    it('should be a function', function () {
        BabelEngine.should.be.a.Function();
    });

    describe('compile', function () {
        before(function() {
            Mincer.BabelEngine.configure({
                presets: ['es2015']
            });
        });
        
        it('should find fixtures', function() {
            var asset = env.findAsset('with-es6-ext').toString();
            eval(asset).should.be.eql('with es6 ext');

            asset = env.findAsset('without-es6-ext').toString();
            eval(asset).should.be.eql('without es6 ext');
        });
    });
});
