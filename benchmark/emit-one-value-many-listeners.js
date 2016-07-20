var suite = require('chuhai');
var test = require('blue-tape');
var setup = require('../subjects');

test('emit one value - many listeners', function (t) {
  return suite('', function (s) {
    s.set('maxTime', setup.maxTime);
    s.set('minSamples', setup.minSamples);

    var called = null;
    var N = 10;
    var started;

    var handles = Array.apply(null, Array(N)).map(function () {
      return function (a) {
        if (!started) { // ignore calls before bechmarks start
          return;
        }
        if (arguments.length > 2 || a !== 'bar') {
          throw new Error('invalid arguments');
        }
        called++;
      };
    });

    var subjects = setup.createInstances();
    setup.addHandles(subjects, handles);
    started = true;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, N, e.target.name + 'called handles N times');
      called = null;
    });

    s.burn('Theoretical max', function () {
      called = 0;
      for (var i = 0; i < 10; i++) {
        (handles[i])('bar');
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
    s.bench('push-stream', function () {
      called = 0;
      subjects.pushStream.push('bar');
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
    s.bench('MicroSignal', function () {
      called = 0;
      subjects.microSignal.dispatch('bar');
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
    s.bench('pull-notify', function () {
      called = 0;
      subjects.pullNotify('bar');
    });
    s.bench('xstream', function () {
      called = 0;
      subjects.xstream.shamefullySendNext('bar');
    });
  });
});
