var suite = require('chuhai');
var test = require('blue-tape');

test(function () {
  return suite('emit with context', function (s) {
    s.set('maxTime', 0.01);
    s.set('minSamples', 10);

    var c = 0;

    var ctx = {
      foo: 'bar'
    };

    var subjects = require('../subjects').createInstances();

    subjects.ee1.on('foo', handle.bind(ctx));
    subjects.ee1.on('foo', handle2);
    subjects.ee2.on('foo', handle.bind(ctx));
    subjects.ee2.on('foo', handle2);
    subjects.ee3.on('foo', handle, ctx);
    subjects.ee3.on('foo', handle2);
    subjects.dripEmitter.on('foo', handle.bind(ctx));
    subjects.dripEmitter.on('foo', handle2);
    subjects.dripEmitterEnhanced.on('foo', handle.bind(ctx));
    subjects.dripEmitterEnhanced.on('foo', handle2);
    subjects.signal.add(handle, ctx);
    subjects.signal.add(handle2);
    subjects.miniSignal.add(handle, ctx);
    subjects.miniSignal.add(handle2);
    subjects.signalEmitter.on(handle, ctx);
    subjects.signalEmitter.on(handle2);
    subjects.eventSignal.addListener(handle, ctx);
    subjects.eventSignal.addListener(handle2);
    subjects.signalLite.add(handle, ctx);
    subjects.signalLite.add(handle2);
    subjects.subject.subscribe(handle.bind(ctx));
    subjects.subject.subscribe(handle2);
    subjects.rProperty.on(handle.bind(ctx));
    subjects.rProperty.on(handle2);

    var bHandel = handle.bind(ctx);

    s.burn('Theoretical max', function () {
      bHandel('bar');
      handle2('bar');
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

    s.bench('dripEmitter', function () {
      subjects.dripEmitter.emit('foo', 'bar');
    });

    s.bench('dripEmitterEnhanced', function () {
      subjects.dripEmitterEnhanced.emit('foo', 'bar');
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

    function handle() {
      if (arguments.length === 0 || arguments.length > 2) {
        throw new Error('invalid arguments length');
      }
      if (this !== ctx) {
        throw new Error('invalid context');
      }
      c++;
    }

    function handle2() {
      if (arguments.length === 0 || arguments.length > 2) {
        throw new Error('invalid arguments length');
      }
    }
  });
});
