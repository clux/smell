var EE = require('events').EventEmitter;
var util = require('util');
var format = require('util').format;

function Smell() {
  if (!(this instanceof Smell)) {
    return new Smell();
  }
  EE.call(this);
}
util.inherits(Smell, EE);

Smell.prototype.info = function () {
  var msg = format.apply(null, arguments);
  this.emit('info', msg);
};
Smell.prototype.warn = function () {
  var msg = format.apply(null, arguments);
  this.emit('warn', msg);
};
Smell.prototype.error = function () {
  var msg = format.apply(null, arguments);
  this.emit('err', msg);
};

module.exports = Smell;
