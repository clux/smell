var EE = require('events').EventEmitter;
var format = require('util').format;

function Smell() {
  EE.call(this);
}
Smell.prototype = new EE();

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
  this.emit('error', msg);
};

module.exports = function () {
  return new Smell();
};
