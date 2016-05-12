'use strict';

var c = 0;

function handle(a) {
  if (arguments.length < 1 || arguments.length > 2) {
    throw new Error('invalid arguments length');
  }
  if (arguments.length === 1) {
    if (a.bar !== 'bar') {
      throw new Error('Invlid bar');
    }
    if (a.baz && a.baz !== 'baz') {
      throw new Error('Invlid baz');
    }
    if (a.boom && a.boom !== 'boom') {
      throw new Error('Invlid boom');
    }
  }
  c++;
}

function handle2() {
  if (arguments.length < 1 || arguments.length > 2) {
    throw new Error('Invlid arguments.length');
  }
}

var subjects = require('./subjects').createInstancesOn(handle, handle2);
var suiteFactory = require('./suite');

suiteFactory('emit objects')
  .add('Theoretical max', function () {
    handle({bar: 'bar'});
    handle2({bar: 'bar'});
    handle({bar: 'bar', baz: 'baz'});
    handle2({bar: 'bar', baz: 'baz'});
    handle({bar: 'bar', baz: 'baz', boom: 'boom'});
    handle2({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('something is wrong');
    }
    c = 0;
  })
  .run();

suiteFactory('emit objects')
  .on('cycle', function (e) {
    if (c < e.target.count) {
      throw new Error('something is wrong');
    }
    c = 0;
  })
  .add('EventEmitter', function () {
    subjects.ee1.emit('foo', {bar: 'bar'});
    subjects.ee1.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee1.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('EventEmitter2', function () {
    subjects.ee2.emit('foo', {bar: 'bar'});
    subjects.ee2.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee2.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('EventEmitter3', function () {
    subjects.ee3.emit('foo', {bar: 'bar'});
    subjects.ee3.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee3.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('RXJS', function () {
    subjects.subject.next({bar: 'bar'});
    subjects.subject.next({bar: 'bar', baz: 'baz'});
    subjects.subject.next({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('ReactiveProperty', function () {
    subjects.rProperty({bar: 'bar'});
    subjects.rProperty({bar: 'bar', baz: 'baz'});
    subjects.rProperty({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('JS-Signals', function () {
    subjects.signal.dispatch({bar: 'bar'});
    subjects.signal.dispatch({bar: 'bar', baz: 'baz'});
    subjects.signal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('MiniSignals', function () {
    subjects.miniSignal.dispatch({bar: 'bar'});
    subjects.miniSignal.dispatch({bar: 'bar', baz: 'baz'});
    subjects.miniSignal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('signal-emitter', function () {
    subjects.signalEmitter.emit({bar: 'bar'});
    subjects.signalEmitter.emit({bar: 'bar', baz: 'baz'});
    subjects.signalEmitter.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('event-signal', function () {  // this is not a fair test, eventSignal.emit only emits one argument
    subjects.eventSignal.emit({bar: 'bar'});
    subjects.eventSignal.emit({bar: 'bar', baz: 'baz'});
    subjects.eventSignal.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .add('signal-lite', function () {
    subjects.signalLite.broadcast({bar: 'bar'});
    subjects.signalLite.broadcast({bar: 'bar', baz: 'baz'});
    subjects.signalLite.broadcast({bar: 'bar', baz: 'baz', boom: 'boom'});
  })
  .run();
