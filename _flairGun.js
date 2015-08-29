var EventEmitter3 = require('eventemitter3');
var ee3 = new EventEmitter3();

var i = 0;
function uuid() {
  return i++;
}

function ShotgunSignal() {
  var id = 's'+uuid();
  this.add = ee3.on.bind(ee3, id);
  this.emit = ee3.emit.bind(ee3, id);
}

module.exports = ShotgunSignal;