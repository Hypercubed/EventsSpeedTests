var suite = require('chuhai');

suite('emit many parameters', function (s) {
  s.set('maxTime', 0.01);
  s.set('minSamples', 10);

  var subjects = require('../subjects').createInstancesOn(handle, handle2);

  s.burn('Theoretical max', function () {
    handle('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    handle2('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });

  s.bench('EventEmitter', function () {
    subjects.ee1.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  s.bench('EventEmitter2', function () {
    subjects.ee2.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  s.bench('EventEmitter3', function () {
    subjects.ee3.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  s.bench('JS-Signals', function () {
    subjects.signal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  s.bench('MiniSignals', function () {
    subjects.miniSignal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  s.bench('signal-emitter', function () {
    subjects.signalEmitter.emit('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  s.bench('signal-lite', function () {
    subjects.signalLite.broadcast('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  s.bench('minivents', function () {
    subjects.miniVent.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });

  function handle(a) {
    if (arguments.length === 1 && a === undefined) {
      return;
    }
    if (arguments.length !== 12) {
      throw new Error('invalid arguments length');
    }
  }

  function handle2(a) {
    if (arguments.length === 1 && a === undefined) {
      return;
    }
    if (arguments.length !== 12) {
      throw new Error('invalid arguments length');
    }
  }
});
