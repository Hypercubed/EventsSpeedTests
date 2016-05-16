/* global bench, suite */

var subjects = require('./utils/subjects').createInstancesOn(handle, handle2);

var c = 0;

function handle(a, b) {
  if (arguments.length === 1 && a === undefined) {
    return;
  }
  if (arguments.length > 0 && a !== 'bar') {
    throw new Error('invalid arguments');
  }
  if (arguments.length > 1 && b !== 'baz') {
    throw new Error('invalid arguments');
  }
  if (arguments.length > 100) {
    throw new Error('invalid arguments');
  }
  c++;
}

function handle2() {
  if (arguments.length > 100) {
    throw new Error('invalid arguments');
  }
}

suite('emit', function () {
  bench('EventEmitter', function () {
    subjects.ee1.emit('foo');
    subjects.ee1.emit('foo', 'bar');
    subjects.ee1.emit('foo', 'bar', 'baz');
    subjects.ee1.emit('foo', 'bar', 'baz', 'boom');
  });

  bench('EventEmitter2', function () {
    subjects.ee2.emit('foo');
    subjects.ee2.emit('foo', 'bar');
    subjects.ee2.emit('foo', 'bar', 'baz');
    subjects.ee2.emit('foo', 'bar', 'baz', 'boom');
  });

  bench('EventEmitter3', function () {
    subjects.ee3.emit('foo');
    subjects.ee3.emit('foo', 'bar');
    subjects.ee3.emit('foo', 'bar', 'baz');
    subjects.ee3.emit('foo', 'bar', 'baz', 'boom');
  });

  bench('JS-Signals', function () {
    subjects.signal.dispatch();
    subjects.signal.dispatch('bar');
    subjects.signal.dispatch('bar', 'baz');
    subjects.signal.dispatch('bar', 'baz', 'boom');
  });

  bench('MiniSignals', function () {
    subjects.miniSignal.dispatch();
    subjects.miniSignal.dispatch('bar');
    subjects.miniSignal.dispatch('bar', 'baz');
    subjects.miniSignal.dispatch('bar', 'baz', 'boom');
  });

  bench('signal-emitter', function () {
    subjects.signalEmitter.emit();
    subjects.signalEmitter.emit('bar');
    subjects.signalEmitter.emit('bar', 'baz');
    subjects.signalEmitter.emit('bar', 'baz', 'boom');
  });

  bench('signal-lite', function () {
    subjects.signalLite.broadcast();
    subjects.signalLite.broadcast('bar');
    subjects.signalLite.broadcast('bar', 'baz');
    subjects.signalLite.broadcast('bar', 'baz', 'boom');
  });
});

suite('*emit*', function () {
  bench('Theoretical max', function () {
    handle();
    handle2();
    handle('bar');
    handle2('bar');
    handle('bar', 'baz');
    handle2('bar', 'baz');
    handle('bar', 'baz', 'boom');
    handle2('bar', 'baz', 'boom');
  });
});
