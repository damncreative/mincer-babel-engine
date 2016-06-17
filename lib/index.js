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

module.exports = function (options, mincer, babel) {
    options = _.merge({}, defaultOptions, options);

    if (mincer == null) {
        mincer = require('mincer');
    }

    debug('setup engine');
    debug('options %j', options);

    var BabelEngine = mincer.BabelEngine = function BabelEngine() {
        mincer.Template.apply(this, arguments);
        babel = babel || mincer.Template.libs.babel || require('babel-core');
    };
    util.inherits(BabelEngine, mincer.Template);

    BabelEngine.configure = function (opts) {
        debug('configure babel options %j', opts);
        options.babel = _.cloneDeep(opts);
    };

    BabelEngine.prototype.evaluate = function evaluate(context) {
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
        mincer.registerEngine(ext, BabelEngine);
    });

    mincer.registerEngine('.es6', mincer.BabelEngine);

    Object.defineProperty(mincer.BabelEngine, 'defaultMimeType', {value: 'application/javascript'});
};
