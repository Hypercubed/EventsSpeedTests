/* global bench, suite */

var subjects = require('./utils/subjects').createInstancesOn(handle, handle2);

var c = 0;

function handle(a) {
  if (arguments.length === 1 && a === undefined) {
    return;
  }
  if (arguments.length === 0 || arguments.length > 2 || a !== 'bar') {
    throw new Error('invalid arguments ' + a);
  }
  c++;
}

function handle2(a) {
  if (arguments.length === 1 && a === undefined) {
    return;
  }
  if (arguments.length === 0 || arguments.length > 2 || a !== 'bar') {
    throw new Error('invalid arguments');
  }
}

suite('emit one parameter', function () {
  bench('EventEmitter', function () {
    subjects.ee1.emit('foo', 'bar');
  });

  bench('EventEmitter2', function () {
    subjects.ee2.emit('foo', 'bar');
  });

  bench('EventEmitter3', function () {
    subjects.ee3.emit('foo', 'bar');
  });

  bench('d3-dispatch', function () {
    subjects.dispatch.call('foo', {}, 'bar');
  });

  bench('namespace-emitter', function () {
    subjects.nsEmitter.emit('foo', 'bar');
  });

  bench('ReactiveProperty', function () {
    subjects.rProperty('bar');
  });

  bench('observable', function () {
    subjects.observableValue('bar');
  });

  bench('observ', function () {
    subjects.observValue.set('bar');
  });

  bench('RXJS', function () {
    subjects.subject.next('bar');
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

suite('*emit one parameter*', function () {
  bench('Theoretical max', function () {
    handle('bar');
    handle2('bar');
  });
});
