'use strict';

var BabelEngine = require('..');
var Mincer = require('mincer');

BabelEngine({}, Mincer);
describe('Mincer Babel Engine', function () {
    it('should work with custom confiure', function () {
        var env = new Mincer.Environment(__dirname);
        env.appendPath('fixtures');

        Mincer.BabelEngine.configure({
            presets: []
        });

        var asset = env.findAsset('with-es6-ext').toString();
        asset.should.containEql('export default');
        asset = env.findAsset('without-es6-ext').toString();
        asset.should.containEql('export default');
    });
});
