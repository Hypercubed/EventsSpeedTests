var assert = require('assert');
var suite = require('chuhai');

suite('emit objects', function (s) {
  s.set('maxTime', 0.01);
  s.set('minSamples', 10);

  var c = 0;

  s.cycle(function () {
    c = 0;
    assert(c = 3);
  });

  var subjects = require('../subjects').createInstancesOn(handle, handle2);

  s.burn('Theoretical max', function () {
    handle({bar: 'bar'});
    handle2({bar: 'bar'});
    handle({bar: 'bar', baz: 'baz'});
    handle2({bar: 'bar', baz: 'baz'});
    handle({bar: 'bar', baz: 'baz', boom: 'boom'});
    handle2({bar: 'bar', baz: 'baz', boom: 'boom'});
  });

  s.bench('EventEmitter', function () {
    subjects.ee1.emit('foo', {bar: 'bar'});
    subjects.ee1.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee1.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  });

  s.bench('EventEmitter2', function () {
    subjects.ee2.emit('foo', {bar: 'bar'});
    subjects.ee2.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee2.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  });

  s.bench('EventEmitter3', function () {
    subjects.ee3.emit('foo', {bar: 'bar'});
    subjects.ee3.emit('foo', {bar: 'bar', baz: 'baz'});
    subjects.ee3.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
  });

  s.bench('RXJS', function () {
    subjects.subject.next({bar: 'bar'});
    subjects.subject.next({bar: 'bar', baz: 'baz'});
    subjects.subject.next({bar: 'bar', baz: 'baz', boom: 'boom'});
  });

  s.bench('ReactiveProperty', function () {
    subjects.rProperty({bar: 'bar'});
    subjects.rProperty({bar: 'bar', baz: 'baz'});
    subjects.rProperty({bar: 'bar', baz: 'baz', boom: 'boom'});
  });

  s.bench('JS-Signals', function () {
    subjects.signal.dispatch({bar: 'bar'});
    subjects.signal.dispatch({bar: 'bar', baz: 'baz'});
    subjects.signal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
  });

  s.bench('MiniSignals', function () {
    subjects.miniSignal.dispatch({bar: 'bar'});
    subjects.miniSignal.dispatch({bar: 'bar', baz: 'baz'});
    subjects.miniSignal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
  });

  s.bench('signal-emitter', function () {
    subjects.signalEmitter.emit({bar: 'bar'});
    subjects.signalEmitter.emit({bar: 'bar', baz: 'baz'});
    subjects.signalEmitter.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
  });

  s.bench('event-signal', function () {
    subjects.eventSignal.emit({bar: 'bar'});
    subjects.eventSignal.emit({bar: 'bar', baz: 'baz'});
    subjects.eventSignal.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
  });

  s.bench('signal-lite', function () {
    subjects.signalLite.broadcast({bar: 'bar'});
    subjects.signalLite.broadcast({bar: 'bar', baz: 'baz'});
    subjects.signalLite.broadcast({bar: 'bar', baz: 'baz', boom: 'boom'});
  });

  s.bench('EventDispatcher', function () {
    subjects.eventDispatcher.dispatchEvent({type: 'foo', bar: 'bar'});
    subjects.eventDispatcher.dispatchEvent({type: 'foo', bar: 'bar', baz: 'baz'});
    subjects.eventDispatcher.dispatchEvent({type: 'foo', bar: 'bar', baz: 'baz', boom: 'boom'});
  });

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
});
