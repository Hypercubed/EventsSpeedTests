var EventEmitter3 = require('eventemitter3');

require('util').inherits(ShotgunSignal, EventEmitter3);

function ShotgunSignal() {
  //this.add = EventEmitter3.prototype.on.bind(this, 'emit');
  //this.emit = EventEmitter3.prototype.emit.bind(this, 'emit');
}

ShotgunSignal.prototype.add = function(fn) {
  return this.on('emit', fn);
}

ShotgunSignal.prototype.emit = function() {
  return EventEmitter3.prototype.emit.call(this, 'emit');
}

module.exports = ShotgunSignal;