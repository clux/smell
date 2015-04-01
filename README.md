# Stink
[![npm status](http://img.shields.io/npm/v/stink.svg)](https://www.npmjs.org/package/stink)
[![build status](https://secure.travis-ci.org/clux/stink.svg)](http://travis-ci.org/clux/stink)
[![dependency status](https://david-dm.org/clux/stink.svg)](https://david-dm.org/clux/stink)
[![coverage status](http://img.shields.io/coveralls/clux/stink.svg)](https://coveralls.io/r/clux/stink)

The smelly place where logs are emitted. Subscribe and get strings from `info`, `warn` and `error` events.

## Basic Idea
Libraries should never rely on full logging libraries - how to log is an app decision. Thus, libraries can add this .._emission_, expose it, and hope someone else deals with it.

## Usage
Create an instance, emit logs to it then expose it from your library somehow:

```js
// in some-module
var log = require('stink')();
log.info('some module is doing work');
log.warn('this ok?')
log.error('this is not ok:', failObject);

exports.log = log;

// in app.js
var sm = require('some-module');
sm.log.on('info', console.log);
sm.log.on('warn', console.warn);
sm.log.on('error', console.error);
```

## License
MIT-Licensed. See LICENSE file for details.
