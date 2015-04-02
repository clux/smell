# Smell
[![npm status](http://img.shields.io/npm/v/smell.svg)](https://www.npmjs.org/package/smell)
[![build status](https://secure.travis-ci.org/clux/smell.svg)](http://travis-ci.org/clux/smell)
[![dependency status](https://david-dm.org/clux/smell.svg)](https://david-dm.org/clux/smell)
[![coverage status](http://img.shields.io/coveralls/clux/smell.svg)](https://coveralls.io/r/clux/smell)

The smelly place where logs are emitted. Subscribe and get strings from `info`, `warn` and `err` events. (Not using `error` since this bubbles up to an uncaughtError)

## Basic Idea
Libraries should never rely on full logging libraries - how to log is an app decision. Thus, libraries can add this .._emission_, expose it, and hope someone else deals with it.

## Usage
Create an instance, emit logs to it then expose it from your library somehow:

```js
// in some-module
var log = require('smell')();
log.info('some module is doing work');
log.warn('this ok?')
log.error('this is not ok:', failObject);

exports.log = log;

// in app.js
var em = require('some-module');
em.on('info', console.log);
em.on('warn', console.warn);
em.on('err', console.error);
```

## License
MIT-Licensed. See LICENSE file for details.
