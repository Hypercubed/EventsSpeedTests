var suite = require('chuhai');
var test = require('blue-tape');

test('emit many listeners', function (t) {
  return suite('emit many listeners', function (s) {
    s.set('maxTime', 0.01);
    s.set('minSamples', 10);

    var called = null;
    var N = 10;

    var handels = Array.apply(null, Array(N)).map(function () {
      return function (a) {
        if (arguments.length === 1 && a === undefined) {
          return;
        }
        if (arguments.length > 2 || a !== 'bar') {
          throw new Error('invalid arguments');
        }
        called++;
      };
    });

    var subjects = require('../subjects').createInstances();
    var addHandles = require('../subjects').addHandles;
    addHandles(subjects, handels);

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, N, 'called N times');
      called = null;
    });

    s.burn('Theoretical max', function () {
      called = 0;
      for (var i = 0; i < 10; i++) {
        (handels[i])('bar');
      }
    });

    s.bench('EventEmitter', function () {
      called = 0;
      subjects.ee1.emit('foo', 'bar');
    });
    s.bench('EventEmitter2', function () {
      called = 0;
      subjects.ee2.emit('foo', 'bar');
    });
    s.bench('EventEmitter3', function () {
      called = 0;
      subjects.ee3.emit('foo', 'bar');
    });
    s.bench('dripEmitter', function () {
      called = 0;
      subjects.dripEmitter.emit('foo', 'bar');
    });
    s.bench('dripEmitterEnhanced', function () {
      called = 0;
      subjects.dripEmitterEnhanced.emit('foo', 'bar');
    });
    s.bench('RXJS', function () {
      called = 0;
      subjects.subject.next('bar');
    });
    s.bench('ReactiveProperty', function () {
      called = 0;
      subjects.rProperty('bar');
    });
    s.bench('JS-Signals', function () {
      called = 0;
      subjects.signal.dispatch('bar');
    });
    s.bench('MiniSignals', function () {
      called = 0;
      subjects.miniSignal.dispatch('bar');
    });
    s.bench('signal-emitter', function () {
      called = 0;
      subjects.signalEmitter.emit('bar');
    });
    s.bench('event-signal', function () {
      called = 0;
      subjects.eventSignal.emit('bar');
    });
    s.bench('signal-lite', function () {
      called = 0;
      subjects.signalLite.broadcast('bar');
    });
    s.bench('minivents', function () {
      called = 0;
      subjects.miniVent.emit('foo', 'bar');
    });
  });
});
