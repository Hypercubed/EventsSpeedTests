'use strict';

var subjects = require('./subjects').createInstances();

function handle() {
  throw new Error('invalid arguments');
}

require('./suite')('add-remove')
  .add('EventEmitter', function () {
    subjects.ee1.on('foo', handle);
    subjects.ee1.removeListener('foo', handle);
  })
  .add('EventEmitter2', function () {
    subjects.ee2.on('foo', handle);
    subjects.ee2.removeListener('foo', handle);
  })
  .add('EventEmitter3', function () {
    subjects.ee3.on('foo', handle);
    subjects.ee3.removeListener('foo', handle);
  })
  .add('ReactiveProperty', function () {
    subjects.rProperty.on(handle);
    subjects.rProperty.off(handle);
  })
  .add('JS-Signals', function () {
    subjects.signal.add(handle);
    subjects.signal.remove(handle);
  })
  .add('MiniSignals', function () {
    var _handle = subjects.miniSignal.add(handle);
    subjects.miniSignal.detach(_handle);
  })
  .run();
