'use strict';

describe('Mincer Babel Engine', function () {
    before(function() {
        this.Mincer.BabelEngine.configure({
            presets: ['es2015']
        });
        this.Env.enable('source_maps');
    });

    it('should also generate source maps', function () {
        var asset = this.Env.findAsset('with-es6-ext');
        asset.sourceMap.should.not.be.undefined();

        asset = this.Env.findAsset('without-es6-ext');
        asset.sourceMap.should.not.be.undefined();
    });
});
