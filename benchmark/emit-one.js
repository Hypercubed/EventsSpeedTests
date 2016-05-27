var suite = require('chuhai');
var test = require('blue-tape');

test('emit one parameter', function (t) {
  return suite('emit one parameter', function (s) {
    s.set('maxTime', 0.01);
    s.set('minSamples', 5);

    var subjects = require('../subjects').createInstancesOn(handle, handle2);

    var called = null;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, 1, 'called once');
      called = null;
    });

    s.burn('Theoretical max', function () {
      called = 0;
      handle('bar');
      handle2('bar');
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

    s.bench('d3-dispatch', function () {
      called = 0;
      subjects.dispatch.call('foo', null, 'bar');
    });

    s.bench('namespace-emitter', function () {
      called = 0;
      subjects.nsEmitter.emit('foo', 'bar');
    });

    s.bench('ReactiveProperty', function () {
      called = 0;
      subjects.rProperty('bar');
    });

    s.bench('observable', function () {
      called = 0;
      subjects.observableValue('bar');
    });

    s.bench('observ', function () {
      called = 0;
      subjects.observValue.set('bar');
    });

    s.bench('RXJS', function () {
      called = 0;
      subjects.subject.next('bar');
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

    function handle(a) {
      if (arguments.length === 1 && a === undefined) {
        return;
      }
      if (arguments.length === 0 || arguments.length > 2 || a !== 'bar') {
        throw new Error('invalid arguments ' + a);
      }
      called++;
    }

    function handle2(a) {
      if (arguments.length === 1 && a === undefined) {
        return;
      }
      if (arguments.length === 0 || arguments.length > 2 || a !== 'bar') {
        throw new Error('invalid arguments');
      }
    }
  });
});
