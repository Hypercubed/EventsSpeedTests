import suite from 'chuhai';
import test from 'tape';
import { maxTime, minSamples, createInstances } from '../shared/index.mjs';

test('emit one value - bound function', function (t) {
  return suite('', function (s) {
    s.set('maxTime', maxTime);
    s.set('minSamples', minSamples);

    var called = null;
    var called2 = null;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, 1, e.target.name + ' called handle one time');
      t.equal(called2, 1, e.target.name + ' called handle2 one time');
      called = called2 = null;
    });

    var ctx = {
      foo: 'bar',
    };

    var subjects = createInstances();

    subjects.ee1.on('foo', handle.bind(ctx));
    subjects.ee1.on('foo', handle2);
    subjects.ee2.on('foo', handle.bind(ctx));
    subjects.ee2.on('foo', handle2);
    subjects.ee3.on('foo', handle.bind(ctx));
    subjects.ee3.on('foo', handle2);
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
    subjects.reactiveProperty.on(handle.bind(ctx));
    subjects.reactiveProperty.on(handle2);

    subjects.evee.on('foo', (e) => handle.bind(ctx)(e.data));
    subjects.evee.on('foo', (e) => handle2(e.data));

    var bHandel = handle.bind(ctx);

    s.burn('Theoretical max', function () {
      called = called2 = 0;
      bHandel('bar');
      handle2('bar');
    });

    s.bench('EventEmitter', function () {
      called = called2 = 0;
      subjects.ee1.emit('foo', 'bar');
    });

    s.bench('EventEmitter2', function () {
      called = called2 = 0;
      subjects.ee2.emit('foo', 'bar');
    });

    s.bench('EventEmitter3', function () {
      called = called2 = 0;
      subjects.ee3.emit('foo', 'bar');
    });

    s.bench('rxjs Subject', function () {
      called = called2 = 0;
      subjects.subject.next('bar');
    });

    s.bench('ReactiveProperty', function () {
      called = called2 = 0;
      subjects.reactiveProperty('bar');
    });

    s.bench('JS-Signals', function () {
      called = called2 = 0;
      subjects.signal.dispatch('bar');
    });

    s.bench('MiniSignals', function () {
      called = called2 = 0;
      subjects.miniSignal.dispatch('bar');
    });

    s.bench('signal-emitter', function () {
      called = called2 = 0;
      subjects.signalEmitter.emit('bar');
    });

    s.bench('event-signal', function () {
      called = called2 = 0;
      subjects.eventSignal.emit('bar');
    });

    s.bench('signal-lite', function () {
      called = called2 = 0;
      subjects.signalLite.broadcast('bar');
    });

    s.bench('evee', function () {
      called = called2 = 0;
      subjects.evee.emit('foo', 'bar');
    });

    function handle(a) {
      if (arguments.length === 0 || arguments.length > 2) {
        throw new Error('invalid arguments length');
      }
      if (this !== ctx) {
        throw new Error('invalid context');
      }
      if (a !== 'bar') {
        console.log('err:', a);
        throw new Error('invalid arguments');
      }
      called++;
    }

    function handle2() {
      if (arguments.length === 0 || arguments.length > 2) {
        throw new Error('invalid arguments length');
      }
      called2++;
    }
  });
});
