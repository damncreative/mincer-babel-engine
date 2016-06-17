'use strict';

describe('Mincer Babel Engine', function () {
    it('should work with custom confiure', function () {
        this.Mincer.BabelEngine.configure({
            presets: []
        });

        var asset = this.Env.findAsset('with-es6-ext').toString();
        asset.should.containEql('export default');
        asset = this.Env.findAsset('without-es6-ext').toString();
        asset.should.containEql('export default');
    });
});
