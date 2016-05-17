/* global bench, suite, before */

var assert = require('assert');
var subjects = require('../subjects').createInstancesOn(handle, handle2);

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
  bench('Theoretical max', function () {
    c = 0;
    handle({bar: 'bar'});
    handle2({bar: 'bar'});
    handle({bar: 'bar', baz: 'baz'});
    handle2({bar: 'bar', baz: 'baz'});
    handle({bar: 'bar', baz: 'baz', boom: 'boom'});
    handle2({bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });
});

suite('*emit objects', function () {
  bench('EventEmitter', function () {
    c = 0;
    subjects.ee1.emit('foo', {bar: 'bar'});
    subjects.ee1.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee1.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });
  bench('EventEmitter2', function () {
    c = 0;
    subjects.ee2.emit('foo', {bar: 'bar'});
    subjects.ee2.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee2.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });
  bench('EventEmitter3', function () {
    c = 0;
    subjects.ee3.emit('foo', {bar: 'bar'});
    subjects.ee3.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee3.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });
  bench('RXJS', function () {
    c = 0;
    subjects.subject.next({bar: 'bar'});
    subjects.subject.next({bar: 'bar', baz: 'baz'});
    subjects.subject.next({bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });
  bench('ReactiveProperty', function () {
    c = 0;
    subjects.rProperty({bar: 'bar'});
    subjects.rProperty({bar: 'bar', baz: 'baz'});
    subjects.rProperty({bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });
  bench('JS-Signals', function () {
    c = 0;
    subjects.signal.dispatch({bar: 'bar'});
    subjects.signal.dispatch({bar: 'bar', baz: 'baz'});
    subjects.signal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });
  bench('MiniSignals', function () {
    c = 0;
    subjects.miniSignal.dispatch({bar: 'bar'});
    subjects.miniSignal.dispatch({bar: 'bar', baz: 'baz'});
    subjects.miniSignal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });
  bench('signal-emitter', function () {
    c = 0;
    subjects.signalEmitter.emit({bar: 'bar'});
    subjects.signalEmitter.emit({bar: 'bar', baz: 'baz'});
    subjects.signalEmitter.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });
  bench('event-signal', function () {
    c = 0;
    subjects.eventSignal.emit({bar: 'bar'});
    subjects.eventSignal.emit({bar: 'bar', baz: 'baz'});
    subjects.eventSignal.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });
  bench('signal-lite', function () {
    c = 0;
    subjects.signalLite.broadcast({bar: 'bar'});
    subjects.signalLite.broadcast({bar: 'bar', baz: 'baz'});
    subjects.signalLite.broadcast({bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });

  bench('EventDispatcher', function () {
    c = 0;
    subjects.eventDispatcher.dispatchEvent({type: 'foo', bar: 'bar'});
    subjects.eventDispatcher.dispatchEvent({type: 'foo', bar: 'bar', baz: 'baz'});
    subjects.eventDispatcher.dispatchEvent({type: 'foo', bar: 'bar', baz: 'baz', boom: 'boom'});
    assert(c = 3);
  });
});
