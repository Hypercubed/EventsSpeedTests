var suite = require('chuhai');
var test = require('blue-tape');
var setup = require('../subjects');

test('emit one value - two listeners', function (t) {
  return suite('', function (s) {
    s.set('maxTime', setup.maxTime);
    s.set('minSamples', setup.minSamples);

    var subjects = setup.createInstancesOn(handle, handle2);

    var called = null;
    var called2 = null;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, 1, e.target.name + ' called handle once');
      t.equal(called2, 1, e.target.name + ' called handle2 once');
      called = called2 = null;
    });

    s.burn('Theoretical max', function () {
      called = called2 = 0;
      handle(Math.random());
      handle2(Math.random());
    });

    s.bench('EventEmitter', function () {
      called = called2 = 0;
      subjects.ee1.emit('foo', Math.random());
    });

    s.bench('EventEmitter2', function () {
      called = called2 = 0;
      subjects.ee2.emit('foo', Math.random());
    });

    s.bench('EventEmitter3', function () {
      called = called2 = 0;
      subjects.ee3.emit('foo', Math.random());
    });

    s.bench('dripEmitter', function () {
      called = called2 = 0;
      subjects.dripEmitter.emit('foo', Math.random());
    });

    s.bench('push-stream-patch', function () {
      called = called2 = 0;
      subjects.pushStreamPatch.push(Math.random());
    });

    s.bench('push-stream', function () {
      called = called2 = 0;
      subjects.pushStream.push(Math.random());
    });

    s.bench('dripEmitterEnhanced', function () {
      called = called2 = 0;
      subjects.dripEmitterEnhanced.emit('foo', Math.random());
    });

    s.bench('d3-dispatch', function () {
      called = called2 = 0;
      subjects.dispatch.call('foo', null, Math.random());
    });

    s.bench('namespace-emitter', function () {
      called = called2 = 0;
      subjects.nsEmitter.emit('foo', Math.random());
    });

    s.bench('ReactiveProperty', function () {
      called = called2 = 0;
      subjects.rProperty(Math.random());
    });

    s.bench('observable', function () {
      called = called2 = 0;
      subjects.observableValue(Math.random());
    });

    s.bench('observ', function () {
      called = called2 = 0;
      subjects.observValue.set(Math.random());
    });

    s.bench('RXJS', function () {
      called = called2 = 0;
      subjects.subject.next(Math.random());
    });

    s.bench('JS-Signals', function () {
      called = called2 = 0;
      subjects.signal.dispatch(Math.random());
    });

    s.bench('MiniSignals', function () {
      called = called2 = 0;
      subjects.miniSignal.dispatch(Math.random());
    });

    s.bench('MicroSignals', function () {
      called = called2 = 0;
      subjects.microSignal.dispatch(Math.random());
    });

    s.bench('signal-emitter', function () {
      called = called2 = 0;
      subjects.signalEmitter.emit(Math.random());
    });

    s.bench('event-signal', function () {
      called = called2 = 0;
      subjects.eventSignal.emit(Math.random());
    });

    s.bench('signal-lite', function () {
      called = called2 = 0;
      subjects.signalLite.broadcast(Math.random());
    });

    s.bench('minivents', function () {
      called = called2 = 0;
      subjects.miniVent.emit('foo', Math.random());
    });

    s.bench('pull-notify', function () {
      called = called2 = 0;
      subjects.pullNotify(Math.random());
    });

    s.bench('xstream', function () {
      called = called2 = 0;
      subjects.xstream.shamefullySendNext(Math.random());
    });

    s.bench('waddup', function () {
      called = called2 = 0;
      subjects.waddup.publish('foo', Math.random());
    });

    function handle(a) {
      if (!subjects) { // ignore calls before bechmarks start
        return;
      }
      if (arguments.length === 0 || arguments.length > 2 || typeof a !== 'number') {
        throw new Error('invalid arguments ' + a);
      }
      called++;
    }

    function handle2(a) {
      if (!subjects) { // ignore calls before bechmarks start
        return;
      }
      if (arguments.length === 0 || arguments.length > 2 || typeof a !== 'number') {
        throw new Error('invalid arguments');
      }
      called2++;
    }
  });
});
