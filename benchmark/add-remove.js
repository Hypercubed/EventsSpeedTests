var suite = require('chuhai');

suite('add-remove', function (s) {
  s.set('maxTime', 0.01);
  s.set('minSamples', 10);

  function handle() {
    throw new Error('invalid arguments');
  }

  var subjects = require('../subjects').createInstances();

  s.bench('EventEmitter', function () {
    subjects.ee1.on('foo', handle);
    subjects.ee1.removeListener('foo', handle);
  });
  s.bench('EventEmitter2', function () {
    subjects.ee2.on('foo', handle);
    subjects.ee2.removeListener('foo', handle);
  });
  s.bench('EventEmitter3', function () {
    subjects.ee3.on('foo', handle);
    subjects.ee3.removeListener('foo', handle);
  });
  s.bench('ReactiveProperty', function () {
    subjects.rProperty.on(handle);
    subjects.rProperty.off(handle);
  });
  s.bench('JS-Signals', function () {
    subjects.signal.add(handle);
    subjects.signal.remove(handle);
  });
  s.bench('MiniSignals', function () {
    var _handle = subjects.miniSignal.add(handle);
    subjects.miniSignal.detach(_handle);
  });
  s.bench('EventDispatcher', function () {
    subjects.eventDispatcher.addEventListener('foo', handle);
    subjects.eventDispatcher.removeEventListener('foo', handle);
  });
});
