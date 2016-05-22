var suite = require('chuhai');

suite('emit one parameter', function (s) {
  s.set('maxTime', 0.01);
  s.set('minSamples', 10);

  var subjects = require('../subjects').createInstancesOn(handle, handle2);

  s.burn('Theoretical max', function () {
    handle('bar');
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

  s.bench('d3-dispatch', function () {
    subjects.dispatch.call('foo', {}, 'bar');
  });

  s.bench('namespace-emitter', function () {
    subjects.nsEmitter.emit('foo', 'bar');
  });

  s.bench('ReactiveProperty', function () {
    subjects.rProperty('bar');
  });

  s.bench('observable', function () {
    subjects.observableValue('bar');
  });

  s.bench('observ', function () {
    subjects.observValue.set('bar');
  });

  s.bench('RXJS', function () {
    subjects.subject.next('bar');
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

  function handle(a) {
    if (arguments.length === 1 && a === undefined) {
      return;
    }
    if (arguments.length === 0 || arguments.length > 2 || a !== 'bar') {
      throw new Error('invalid arguments ' + a);
    }
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
