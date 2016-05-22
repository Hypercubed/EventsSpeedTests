var suite = require('chuhai');

suite('emit with bound function', function (s) {
  s.set('maxTime', 0.01);
  s.set('minSamples', 10);

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
  }

  function handle2() {
    if (arguments.length === 0 || arguments.length > 2) {
      throw new Error('invalid arguments length');
    }
  }
});
