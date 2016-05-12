'use strict';
var c = 0;

var ctx = {
  foo: 'bar'
};

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

/**
 * Instances.
 */
var subjects = require('./subjects').createInstances();

subjects.ee1.on('foo', handle.bind(ctx));
subjects.ee1.on('foo', handle2);
subjects.ee2.on('foo', handle.bind(ctx));
subjects.ee2.on('foo', handle2);
subjects.ee3.on('foo', handle, ctx);
subjects.ee3.on('foo', handle2);
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

var suiteFactory = require('./suite');

var bHandel = handle.bind(ctx);

suiteFactory('emit with context')
  .add('Theoretical max', function () {
    bHandel('bar');
    handle2('bar');
  })
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('something is wrong');
    }
    c = 0;
  })
  .run();

suiteFactory('emit with context')
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('something is wrong');
    }
    c = 0;
  })
  .add('EventEmitter', function () {
    subjects.ee1.emit('foo', 'bar');
  })
  .add('EventEmitter2', function () {
    subjects.ee2.emit('foo', 'bar');
  })
  .add('EventEmitter3', function () {
    subjects.ee3.emit('foo', 'bar');
  })
  .add('RXJS', function () {
    subjects.subject.next('bar');
  })
  .add('ReactiveProperty', function () {
    subjects.rProperty('bar');
  })
  .add('JS-Signals', function () {
    subjects.signal.dispatch('bar');
  })
  .add('MiniSignals', function () {
    subjects.miniSignal.dispatch('bar');
  })
  .add('signal-emitter', function () {
    subjects.signalEmitter.emit('bar');
  })
  .add('event-signal', function () {
    subjects.eventSignal.emit('bar');
  })
  .add('signal-lite', function () {
    subjects.signalLite.broadcast('bar');
  })
  .run();
