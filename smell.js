var EE = require('events').EventEmitter;
var format = require('util').format;

function Smell() {
  if (!(this instanceof Smell)) {
    return new Smell();
  }
  EE.call(this);
}
Smell.prototype = Object.create(EE.prototype);

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
