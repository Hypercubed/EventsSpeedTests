/* global bench, suite */

var subjects = require('../subjects').createInstances();
var addHandles = require('../subjects').addHandles;

var c = 0;

var handels = Array.apply(null, Array(10)).map(function () {
  return function (a) {
    if (arguments.length === 1 && a === undefined) {
      return;
    }
    if (arguments.length > 2 || a !== 'bar') {
      throw new Error('invalid arguments');
    }
    c++;
  };
});

addHandles(subjects, handels);

suite('emit many listeners', function () {
  bench('Theoretical max', function () {
    for (var i = 0; i < 10; i++) {
      (handels[i])('bar');
    }
  });
});

suite('*emit many listeners', function () {
  bench('EventEmitter', function () {
    subjects.ee1.emit('foo', 'bar');
  });
  bench('EventEmitter2', function () {
    subjects.ee2.emit('foo', 'bar');
  });
  bench('EventEmitter3', function () {
    subjects.ee3.emit('foo', 'bar');
  });
  bench('RXJS', function () {
    subjects.subject.next('bar');
  });
  bench('ReactiveProperty', function () {
    subjects.rProperty('bar');
  });
  bench('JS-Signals', function () {
    subjects.signal.dispatch('bar');
  });
  bench('MiniSignals', function () {
    subjects.miniSignal.dispatch('bar');
  });
  bench('signal-emitter', function () {
    subjects.signalEmitter.emit('bar');
  });
  bench('event-signal', function () {
    subjects.eventSignal.emit('bar');
  });
  bench('signal-lite', function () {
    subjects.signalLite.broadcast('bar');
  });
  bench('minivents', function () {
    subjects.miniVent.emit('foo', 'bar');
  });
});
