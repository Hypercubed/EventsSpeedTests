'use strict';

var c = 0;

function handle(a, b) {
  if (arguments.length === 1 && a === undefined) {
    return;
  }
  if (arguments.length > 0 && a !== 'bar') {
    throw new Error('invalid arguments');
  }
  if (arguments.length > 1 && b !== 'baz') {
    throw new Error('invalid arguments');
  }
  if (arguments.length > 100) {
    throw new Error('invalid arguments');
  }
  c++;
}

function handle2() {
  if (arguments.length > 100) {
    throw new Error('invalid arguments');
  }
}

var subjects = require('./subjects').createInstancesOn(handle, handle2);
var suiteFactory = require('./suite');

console.log('\n## emit several');

suiteFactory('emit')
  .add('Theoretical max', function () {
    handle();
    handle2();
    handle('bar');
    handle2('bar');
    handle('bar', 'baz');
    handle2('bar', 'baz');
    handle('bar', 'baz', 'boom');
    handle2('bar', 'baz', 'boom');
  })
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('something is wrong');
    }
    c = 0;
  })
  .run();

suiteFactory('emit')
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('somethings wrong');
    }
    c = 0;
  })
  .add('EventEmitter', function () {
    subjects.ee1.emit('foo');
    subjects.ee1.emit('foo', 'bar');
    subjects.ee1.emit('foo', 'bar', 'baz');
    subjects.ee1.emit('foo', 'bar', 'baz', 'boom');
  })
  .add('EventEmitter2', function () {
    subjects.ee2.emit('foo');
    subjects.ee2.emit('foo', 'bar');
    subjects.ee2.emit('foo', 'bar', 'baz');
    subjects.ee2.emit('foo', 'bar', 'baz', 'boom');
  })
  .add('EventEmitter3', function () {
    subjects.ee3.emit('foo');
    subjects.ee3.emit('foo', 'bar');
    subjects.ee3.emit('foo', 'bar', 'baz');
    subjects.ee3.emit('foo', 'bar', 'baz', 'boom');
  })
  .add('JS-Signals', function () {
    subjects.signal.dispatch();
    subjects.signal.dispatch('bar');
    subjects.signal.dispatch('bar', 'baz');
    subjects.signal.dispatch('bar', 'baz', 'boom');
  })
  .add('MiniSignals', function () {
    subjects.miniSignal.dispatch();
    subjects.miniSignal.dispatch('bar');
    subjects.miniSignal.dispatch('bar', 'baz');
    subjects.miniSignal.dispatch('bar', 'baz', 'boom');
  })
  .add('signal-emitter', function () {
    subjects.signalEmitter.emit();
    subjects.signalEmitter.emit('bar');
    subjects.signalEmitter.emit('bar', 'baz');
    subjects.signalEmitter.emit('bar', 'baz', 'boom');
  })
  .add('signal-lite', function () {
    subjects.signalLite.broadcast();
    subjects.signalLite.broadcast('bar');
    subjects.signalLite.broadcast('bar', 'baz');
    subjects.signalLite.broadcast('bar', 'baz', 'boom');
  })
  .run();
