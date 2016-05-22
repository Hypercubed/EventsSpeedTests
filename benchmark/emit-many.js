var suite = require('chuhai');

suite('emit many listeners', function (s) {
  s.set('maxTime', 0.01);
  s.set('minSamples', 10);

  var handels = Array.apply(null, Array(10)).map(function () {
    return function (a) {
      if (arguments.length === 1 && a === undefined) {
        return;
      }
      if (arguments.length > 2 || a !== 'bar') {
        throw new Error('invalid arguments');
      }
    };
  });

  var subjects = require('../subjects').createInstances();
  var addHandles = require('../subjects').addHandles;
  addHandles(subjects, handels);

  s.burn('Theoretical max', function () {
    for (var i = 0; i < 10; i++) {
      (handels[i])('bar');
    }
  });

  s.bench('EventEmitter', function () {
    subjects.ee1.emit('foo', 'bar');
  });
  s.bench('EventEmitter2', function () {
    subjects.ee2.emit('foo', 'bar');
  });
  s.bench('EventEmitter3', function () {
    subjects.ee3.emit('foo', 'bar');
  });
  s.bench('RXJS', function () {
    subjects.subject.next('bar');
  });
  s.bench('ReactiveProperty', function () {
    subjects.rProperty('bar');
  });
  s.bench('JS-Signals', function () {
    subjects.signal.dispatch('bar');
  });
  s.bench('MiniSignals', function () {
    subjects.miniSignal.dispatch('bar');
  });
  s.bench('signal-emitter', function () {
    subjects.signalEmitter.emit('bar');
  });
  s.bench('event-signal', function () {
    subjects.eventSignal.emit('bar');
  });
  s.bench('signal-lite', function () {
    subjects.signalLite.broadcast('bar');
  });
  s.bench('minivents', function () {
    subjects.miniVent.emit('foo', 'bar');
  });
});
