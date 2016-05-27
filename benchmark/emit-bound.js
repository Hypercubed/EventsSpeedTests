var suite = require('chuhai');
var test = require('blue-tape');

test('emit with bound function', function (t) {
  return suite('emit with bound function', function (s) {
    s.set('maxTime', 0.01);
    s.set('minSamples', 10);

    var called = null;

    s.cycle(function (e) {
      t.false(e.target.error, 'runs without error');
      t.equal(called, 1, 'called one time');
      called = null;
    });

    var ctx = {
      foo: 'bar'
    };

    var subjects = require('../subjects').createInstances();

    subjects.ee1.on('foo', handle.bind(ctx));
    subjects.ee1.on('foo', handle2);
    subjects.ee2.on('foo', handle.bind(ctx));
    subjects.ee2.on('foo', handle2);
    subjects.ee3.on('foo', handle.bind(ctx));
    subjects.ee3.on('foo', handle2);
    subjects.dripEmitter.on('foo', handle.bind(ctx));
    subjects.dripEmitter.on('foo', handle2);
    subjects.dripEmitterEnhanced.on('foo', handle.bind(ctx));
    subjects.dripEmitterEnhanced.on('foo', handle2);
    subjects.signal.add(handle.bind(ctx));
    subjects.signal.add(handle2);
    subjects.miniSignal.add(handle.bind(ctx));
    subjects.miniSignal.add(handle2);
    subjects.signalEmitter.on(handle.bind(ctx));
    subjects.signalEmitter.on(handle2);
    subjects.eventSignal.addListener(handle.bind(ctx));
    subjects.eventSignal.addListener(handle2);
    subjects.signalLite.add(handle.bind(ctx));
    subjects.signalLite.add(handle2);
    subjects.subject.subscribe(handle.bind(ctx));
    subjects.subject.subscribe(handle2);
    subjects.rProperty.on(handle.bind(ctx));
    subjects.rProperty.on(handle2);

    var bHandel = handle.bind(ctx);

    s.burn('Theoretical max', function () {
      called = 0;
      bHandel('bar');
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

    function handle() {
      if (arguments.length === 0 || arguments.length > 2) {
        throw new Error('invalid arguments length');
      }
      if (this !== ctx) {
        throw new Error('invalid context');
      }
      called++;
    }

    function handle2() {
      if (arguments.length === 0 || arguments.length > 2) {
        throw new Error('invalid arguments length');
      }
    }
  });
});
