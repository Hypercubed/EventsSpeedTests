'use strict';

var c = 0;

function handle(a) {
  if (arguments.length === 0 || arguments.length > 2 || a !== 'bar') {
    throw new Error('invalid arguments');
  }
  c++;
}

function handle2(a) {
  if (arguments.length === 0 || arguments.length > 2 || a !== 'bar') {
    throw new Error('invalid arguments');
  }
}

var subjects = require('./subjects').createInstancesOn(handle, handle2);
var suiteFactory = require('./suite');

suiteFactory('emit one parameter')
  .add('Theoretical max', function () {
    handle('bar');
    handle2('bar');
  })
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('somethings wrong');
    }
    c = 0;
  })
  .run();

suiteFactory('emit one parameter')
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('somethings wrong');
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
