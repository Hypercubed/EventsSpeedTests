/* global bench, suite */

var subjects = require('../subjects').createInstances();

var ctx = {
  foo: 'bar'
};

var c = 0;

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

suite('emit with bound function', function () {
  bench('Theoretical max', function () {
    bHandel('bar');
    handle2('bar');
  });
});

suite('*emit with bound function', function () {
  bench('EventEmitter', function () {
    subjects.ee1.emit('foo', 'bar');
  });

  bench('EventEmitter2', function () {
    subjects.ee2.emit('foo', 'bar');
  });

  bench('EventEmitter3', function () {
    subjects.ee3.emit('foo', 'bar');
  });

  bench('RXJS', function () {
    subjects.subject.next('bar');
  });

  bench('ReactiveProperty', function () {
    subjects.rProperty('bar');
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
});
