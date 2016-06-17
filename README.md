# mincer-babel-engine

**ProjectStats**
[![npm version](https://badge.fury.io/js/mincer-babel-engine.svg)](https://badge.fury.io/js/mincer-babel-engine)
[![Dependency Status](https://gemnasium.com/badges/github.com/damncreative/mincer-babel-engine.svg)](https://gemnasium.com/github.com/damncreative/mincer-babel-engine)

**TravisCI**
[![Build Status](https://travis-ci.org/damncreative/mincer-babel-engine.svg?branch=master)](https://travis-ci.org/damncreative/mincer-babel-engine)

**Coveralls**
[![Coverage Status](https://coveralls.io/repos/github/damncreative/mincer-babel-engine/badge.svg?branch=master)](https://coveralls.io/github/damncreative/mincer-babel-engine?branch=master)

**Codacy**
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4b85c1c632514d10a85397a5eeb06c8d)](https://www.codacy.com/app/naxmefy/mincer-babel-engine?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=damncreative/mincer-babel-engine&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/4b85c1c632514d10a85397a5eeb06c8d)](https://www.codacy.com/app/naxmefy/mincer-babel-engine?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=damncreative/mincer-babel-engine&amp;utm_campaign=Badge_Coverage)

[![NPM](https://nodei.co/npm/mincer-babel-engine.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/mincer-babel-engine/)

## installation

```
$ npm install mincer-babel-engine
```

## usage

```JavaScript
var babelEngine = require('mincer-babel-engine');
var Mincer = require('mincer');

babelEngine(Mincer);
```

### Lib Function

**babelEngine(mincer [,options] [,babel-core])**

```JavaScript
var babelEngine = require('mincer-babel-engine');
var mincer = require('mincer');
var babelCore = require('babel-core');

// examples
babelEngine(mincer); // with mincer
babelEngine(mincer, {}); // with mincer and options
babelEngine(mincer, {}, babel); // with mincer, options and own babel-core
```

## options

* ``` extensions ``` Supported extensions by this engine. (``` Array ``` of Strings. Default: ``` ['.es6'] ```)
* ``` babel ``` Babel options to use for transform. (``` Object ```. Default: ``` {} ```)

## configure

**Mincer.BabelEngine.configure(options)**

```JavaScript
// ...
Mincer.BabelEngine.configure({
  preset: ['es2015']
});
```

Hint: The object in configure is passed to ``` babel ``` property of engine options.

## Contribute

* Bug? Missing Feature? Open Issue!
* or Fork, Implement and open Pull Request

## LICENSE
[MIT](/LICENSE)
