'use strict';

var c = 0;

function handle(a) {
  if (arguments.length === 1 && a === undefined) {
    return;
  }
  if (arguments.length !== 12) {
    throw new Error('invalid arguments length');
  }
  c++;
}

function handle2(a) {
  if (arguments.length === 1 && a === undefined) {
    return;
  }
  if (arguments.length !== 12) {
    throw new Error('invalid arguments length');
  }
}

var subjects = require('./subjects').createInstancesOn(handle, handle2);
var suiteFactory = require('./suite');

console.log('\n## emit many parameters');

suiteFactory('emit many parameters')
  .add('Theoretical max', function () {
    handle('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    handle2('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('somethings wrong');
    }
    c = 0;
  })
  .run();

suiteFactory('emit many parameters')
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('somethings wrong');
    }
    c = 0;
  })
  .add('EventEmitter', function () {
    subjects.ee1.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('EventEmitter2', function () {
    subjects.ee2.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('EventEmitter3', function () {
    subjects.ee3.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('JS-Signals', function () {
    subjects.signal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('MiniSignals', function () {
    subjects.miniSignal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('signal-emitter', function () {
    subjects.signalEmitter.emit('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('signal-lite', function () {
    subjects.signalLite.broadcast('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .add('minivents', function () {
    subjects.miniVent.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
  })
  .run();
