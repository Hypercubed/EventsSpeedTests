/* global bench, suite */

var subjects = require('../subjects').createInstancesOn(handle, handle2);

var c = 0;

function handle(a) {
  if (arguments.length === 1 && a === undefined) {
    return;
  }
  if (arguments.length !== 12) {
    throw new Error('invalid arguments length');
  }
  c++;
}

function handle2(a) {
  if (arguments.length === 1 && a === undefined) {
    return;
  }
  if (arguments.length !== 12) {
    throw new Error('invalid arguments length');
  }
}

suite('emit many parameters', function () {
  bench('Theoretical max', function () {
    handle('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    handle2('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
});

suite('*emit many parameters', function () {
  bench('EventEmitter', function () {
    subjects.ee1.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  bench('EventEmitter2', function () {
    subjects.ee2.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  bench('EventEmitter3', function () {
    subjects.ee3.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  bench('JS-Signals', function () {
    subjects.signal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  bench('MiniSignals', function () {
    subjects.miniSignal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  bench('signal-emitter', function () {
    subjects.signalEmitter.emit('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  bench('signal-lite', function () {
    subjects.signalLite.broadcast('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
  bench('minivents', function () {
    subjects.miniVent.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  });
});
