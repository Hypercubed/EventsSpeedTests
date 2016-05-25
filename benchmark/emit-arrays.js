var suite = require('chuhai');
var test = require('blue-tape');

test(function () {
  return suite('emit arrays', function (s) {
    s.set('maxTime', 0.01);
    s.set('minSamples', 10);

    var subjects = require('../subjects').createInstancesOn(handle, handle2);

    s.burn('Theoretical max', function () {
      handle(['bar']);
      handle2(['bar']);
      handle(['bar', 'baz']);
      handle2(['bar', 'baz']);
      handle(['bar', 'baz', 'boom']);
      handle2(['bar', 'baz', 'boom']);
    });

    s.bench('EventEmitter', function () {
      subjects.ee1.emit('foo', ['bar']);
      subjects.ee1.emit('foo', ['bar', 'baz']);
      subjects.ee1.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('EventEmitter2', function () {
      subjects.ee2.emit('foo', ['bar']);
      subjects.ee2.emit('foo', ['bar', 'baz']);
      subjects.ee2.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('EventEmitter3', function () {
      subjects.ee3.emit('foo', ['bar']);
      subjects.ee3.emit('foo', ['bar', 'baz']);
      subjects.ee3.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('dripEmitter', function () {
      subjects.dripEmitter.emit('foo', ['bar']);
      subjects.dripEmitter.emit('foo', ['bar', 'baz']);
      subjects.dripEmitter.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('dripEmitterEnhanced', function () {
      subjects.dripEmitterEnhanced.emit('foo', ['bar']);
      subjects.dripEmitterEnhanced.emit('foo', ['bar', 'baz']);
      subjects.dripEmitterEnhanced.emit('foo', ['bar', 'baz', 'boom']);
    });

    s.bench('RXJS', function () {
      subjects.subject.next(['bar']);
      subjects.subject.next(['bar', 'baz']);
      subjects.subject.next(['bar', 'baz', 'boom']);
    });

    s.bench('ReactiveProperty', function () {
      subjects.rProperty(['bar']);
      subjects.rProperty(['bar', 'baz']);
      subjects.rProperty(['bar', 'baz', 'boom']);
    });

    s.bench('JS-Signals', function () {
      subjects.signal.dispatch(['bar']);
      subjects.signal.dispatch(['bar', 'baz']);
      subjects.signal.dispatch(['bar', 'baz', 'boom']);
    });

    s.bench('MiniSignals', function () {
      subjects.miniSignal.dispatch(['bar']);
      subjects.miniSignal.dispatch(['bar', 'baz']);
      subjects.miniSignal.dispatch(['bar', 'baz', 'boom']);
    });

    s.bench('signal-emitter', function () {
      subjects.signalEmitter.emit(['bar']);
      subjects.signalEmitter.emit(['bar', 'baz']);
      subjects.signalEmitter.emit(['bar', 'baz', 'boom']);
    });

    s.bench('event-signal', function () {
      subjects.eventSignal.emit(['bar']);
      subjects.eventSignal.emit(['bar', 'baz']);
      subjects.eventSignal.emit(['bar', 'baz', 'boom']);
    });

    s.bench('signal-lite', function () {
      subjects.signalLite.broadcast(['bar']);
      subjects.signalLite.broadcast(['bar', 'baz']);
      subjects.signalLite.broadcast(['bar', 'baz', 'boom']);
    });

    function handle(a) {
      if (arguments.length === 1 && a === undefined) {
        return;
      }
      if (arguments.length === 0 || arguments.length > 2) {
        throw new Error('invalid arguments length');
      } else {
        if (a[0] !== 'bar') {
          throw new Error('invalid a[0]');
        }
        if (a.length > 1 && a[1] !== 'baz') {
          throw new Error('invalid a[1]');
        }
        if (a.length > 2 && a[2] !== 'boom') {
          throw new Error('invalid a[2]');
        }
        if (a.length > 3) {
          throw new Error('invalid array length');
        }
      }
    }

    function handle2() {
      if (arguments.length === 0 || arguments.length > 2) {  // reactiveProperty emits old value
        throw new Error('Invlid arguments.length');
      }
    }
  });
});
