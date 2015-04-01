var EE = require('events').EventEmitter;
var format = require('util').format;

function Stink() {
  EE.call(this);
}
Stink.prototype = new EE();

Stink.prototype.info = function () {
  var msg = format.apply(null, arguments);
  this.emit('info', msg);
};
Stink.prototype.warn = function () {
  var msg = format.apply(null, arguments);
  this.emit('warn', msg);
};
Stink.prototype.error = function () {
  var msg = format.apply(null, arguments);
  this.emit('error', msg);
};

module.exports = function () {
  return new Stink();
};
