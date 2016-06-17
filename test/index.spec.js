'use strict';

describe('Mincer Babel Engine', function () {
    it('should be a function', function () {
        this.BabelEngine.should.be.a.Function();
    });

    describe('compile', function () {
        it('should find fixtures', function() {
            this.Mincer.BabelEngine.configure({
                presets: ['es2015']
            });

            var asset = this.Env.findAsset('with-es6-ext').toString();
            eval(asset).should.be.eql('with es6 ext');

            asset = this.Env.findAsset('without-es6-ext').toString();
            eval(asset).should.be.eql('without es6 ext');
        });
    });
});
