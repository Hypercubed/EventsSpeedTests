/* global suite, bench */

var subjects = require('./utils/subjects').createInstances();

function handle() {
  throw new Error('invalid arguments');
}

suite('add-remove', function () {
  bench('EventEmitter', function () {
    subjects.ee1.on('foo', handle);
    subjects.ee1.removeListener('foo', handle);
  });
  bench('EventEmitter2', function () {
    subjects.ee2.on('foo', handle);
    subjects.ee2.removeListener('foo', handle);
  });
  bench('EventEmitter3', function () {
    subjects.ee3.on('foo', handle);
    subjects.ee3.removeListener('foo', handle);
  });
  bench('ReactiveProperty', function () {
    subjects.rProperty.on(handle);
    subjects.rProperty.off(handle);
  });
  bench('JS-Signals', function () {
    subjects.signal.add(handle);
    subjects.signal.remove(handle);
  });
  bench('MiniSignals', function () {
    var _handle = subjects.miniSignal.add(handle);
    subjects.miniSignal.detach(_handle);
  });
});
