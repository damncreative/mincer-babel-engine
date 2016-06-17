'use strict';

// std
var util = require('util');
var path = require('path');

// 3rd-party
var debug = require('debug')('mincer:engine:babel');
var _ = require('lodash');

var defaultOptions = {
    extensions: ['.es6'],
    babel: {}
};

module.exports = function (mincer, options, babel) {
    options = _.merge({}, defaultOptions, options);

    debug('setup engine');
    debug('options %j', options);

    mincer.BabelEngine = function BabelEngine() {
        mincer.Template.apply(this, arguments);
        babel = babel || mincer.Template.libs.babel || require('babel-core');
    };
    util.inherits(mincer.BabelEngine, mincer.Template);

    mincer.BabelEngine.configure = function (opts) {
        debug('configure babel options %j', opts);
        options.babel = _.cloneDeep(opts);
    };

    mincer.BabelEngine.prototype.evaluate = function evaluate(context) {
        var withSourceMaps = context.environment.isEnabled('source_maps');
        var fileDirname = path.dirname(context.pathname);

        debug('transform %s', this.file);
        var transformedData = babel.transform(this.data, _.merge({
            sourceMaps: withSourceMaps,
            inputSourceMap: this.map,
            sourceRoot: fileDirname
        }, options.babel));

        this.data = transformedData.code;

        if(withSourceMaps) {
            debug('with source maps');
            transformedData.map.file = path.relative(fileDirname, this.file);
            transformedData.map.sources[0] = transformedData.map.file;
            this.map = JSON.stringify(transformedData.map);
        }
    };

    _.forEach(options.extensions, function (ext) {
        mincer.registerEngine(ext, mincer.BabelEngine);
    });

    Object.defineProperty(mincer.BabelEngine, 'defaultMimeType', {value: 'application/javascript'});
};
