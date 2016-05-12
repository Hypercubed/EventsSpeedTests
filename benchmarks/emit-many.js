'use strict';

var c = 0;

var subjects = require('./subjects').createInstances();
var addHandles = require('./subjects').addHandles;

var handels = Array.apply(null, Array(10)).map(function () {
  return function (a) {
    if (arguments.length === 1 && a === undefined) {
      return;
    }
    if (arguments.length > 2 || a !== 'bar') {
      throw new Error('invalid arguments');
    }
    c++;
  };
});

addHandles(subjects, handels);

var suiteFactory = require('./suite');

console.log('\n## emit many listeners');

suiteFactory('emit many listeners')
  .add('Theoretical max', function () {
    for (var i = 0; i < 10; i++) {
      (handels[i])('bar');
    }
  })
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('somethings wrong');
    }
    c = 0;
  })
  .run();

suiteFactory('emit many listeners')
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
  .add('minivents', function () {
    subjects.miniVent.emit('foo', 'bar');
  })
  .run();
