'use strict';

var c = 0;

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
  c++;
}

function handle2() {
  if (arguments.length === 0 || arguments.length > 2) {  // reactiveProperty emits old value
    throw new Error('Invlid arguments.length');
  }
}

var subjects = require('./subjects').createInstancesOn(handle, handle2);
var suiteFactory = require('./suite');

console.log('\n## emit arrays');

suiteFactory('emit arrays')
  .add('Theoretical max', function () {
    handle(['bar']);
    handle2(['bar']);
    handle(['bar', 'baz']);
    handle2(['bar', 'baz']);
    handle(['bar', 'baz', 'boom']);
    handle2(['bar', 'baz', 'boom']);
  })
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('something is wrong ', c);
    }
    c = 0;
  })
  .run();

suiteFactory('emit arrays')
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('something is wrong ' + c);
    }
    c = 0;
  })
  .add('EventEmitter', function () {
    subjects.ee1.emit('foo', ['bar']);
    subjects.ee1.emit('foo', ['bar', 'baz']);
    subjects.ee1.emit('foo', ['bar', 'baz', 'boom']);
  })
  .add('EventEmitter2', function () {
    subjects.ee2.emit('foo', ['bar']);
    subjects.ee2.emit('foo', ['bar', 'baz']);
    subjects.ee2.emit('foo', ['bar', 'baz', 'boom']);
  })
  .add('EventEmitter3', function () {
    subjects.ee3.emit('foo', ['bar']);
    subjects.ee3.emit('foo', ['bar', 'baz']);
    subjects.ee3.emit('foo', ['bar', 'baz', 'boom']);
  })
  .add('RXJS', function () {
    subjects.subject.next(['bar']);
    subjects.subject.next(['bar', 'baz']);
    subjects.subject.next(['bar', 'baz', 'boom']);
  })
  .add('ReactiveProperty', function () {
    subjects.rProperty(['bar']);
    subjects.rProperty(['bar', 'baz']);
    subjects.rProperty(['bar', 'baz', 'boom']);
  })
  .add('JS-Signals', function () {
    subjects.signal.dispatch(['bar']);
    subjects.signal.dispatch(['bar', 'baz']);
    subjects.signal.dispatch(['bar', 'baz', 'boom']);
  })
  .add('MiniSignals', function () {
    subjects.miniSignal.dispatch(['bar']);
    subjects.miniSignal.dispatch(['bar', 'baz']);
    subjects.miniSignal.dispatch(['bar', 'baz', 'boom']);
  })
  .add('signal-emitter', function () {
    subjects.signalEmitter.emit(['bar']);
    subjects.signalEmitter.emit(['bar', 'baz']);
    subjects.signalEmitter.emit(['bar', 'baz', 'boom']);
  })
  .add('event-signal', function () {
    subjects.eventSignal.emit(['bar']);
    subjects.eventSignal.emit(['bar', 'baz']);
    subjects.eventSignal.emit(['bar', 'baz', 'boom']);
  })
  .add('signal-lite', function () {
    subjects.signalLite.broadcast(['bar']);
    subjects.signalLite.broadcast(['bar', 'baz']);
    subjects.signalLite.broadcast(['bar', 'baz', 'boom']);
  })
  .run();
