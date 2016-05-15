/* global bench, suite */

var subjects = require('./utils/subjects').createInstancesOn(handle, handle2);

var c = 0;

function handle(a) {
  if (arguments.length === 1 && a === undefined) {
    return;
  }
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

suite('emit objects', function () {
  bench('EventEmitter', function () {
    subjects.ee1.emit('foo', {bar: 'bar'});
    subjects.ee1.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee1.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  });
  bench('EventEmitter2', function () {
    subjects.ee2.emit('foo', {bar: 'bar'});
    subjects.ee2.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee2.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  });
  bench('EventEmitter3', function () {
    subjects.ee3.emit('foo', {bar: 'bar'});
    subjects.ee3.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee3.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  });
  bench('RXJS', function () {
    subjects.subject.next({bar: 'bar'});
    subjects.subject.next({bar: 'bar', baz: 'baz'});
    subjects.subject.next({bar: 'bar', baz: 'baz', boom: 'boom'});
  });
  bench('ReactiveProperty', function () {
    subjects.rProperty({bar: 'bar'});
    subjects.rProperty({bar: 'bar', baz: 'baz'});
    subjects.rProperty({bar: 'bar', baz: 'baz', boom: 'boom'});
  });
  bench('JS-Signals', function () {
    subjects.signal.dispatch({bar: 'bar'});
    subjects.signal.dispatch({bar: 'bar', baz: 'baz'});
    subjects.signal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
  });
  bench('MiniSignals', function () {
    subjects.miniSignal.dispatch({bar: 'bar'});
    subjects.miniSignal.dispatch({bar: 'bar', baz: 'baz'});
    subjects.miniSignal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
  });
  bench('signal-emitter', function () {
    subjects.signalEmitter.emit({bar: 'bar'});
    subjects.signalEmitter.emit({bar: 'bar', baz: 'baz'});
    subjects.signalEmitter.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
  });
  bench('event-signal', function () {  // this is not a fair test, eventSignal.emit only emits one argument
    subjects.eventSignal.emit({bar: 'bar'});
    subjects.eventSignal.emit({bar: 'bar', baz: 'baz'});
    subjects.eventSignal.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
  });
  bench('signal-lite', function () {
    subjects.signalLite.broadcast({bar: 'bar'});
    subjects.signalLite.broadcast({bar: 'bar', baz: 'baz'});
    subjects.signalLite.broadcast({bar: 'bar', baz: 'baz', boom: 'boom'});
  });
});

suite('*emit objects*', function () {
  bench('Theoretical max', function () {
    handle({bar: 'bar'});
    handle2({bar: 'bar'});
    handle({bar: 'bar', baz: 'baz'});
    handle2({bar: 'bar', baz: 'baz'});
    handle({bar: 'bar', baz: 'baz', boom: 'boom'});
    handle2({bar: 'bar', baz: 'baz', boom: 'boom'});
  });
});
