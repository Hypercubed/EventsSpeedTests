var suite = require('chuhai');
var test = require('blue-tape');
var setup = require('../subjects');

test('emit one object', function (t) {
  return suite('emit one object', function (s) {
    s.set('maxTime', setup.maxTime);
    s.set('minSamples', setup.minSamples);

    var subjects = setup.createInstancesOn(handle, handle2);

    var called = null;
    var called2 = null;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, 3, 'handle called three times');
      t.equal(called2, 3, 'handle2 called three times');
      called = called2 = null;
    });

    s.burn('Theoretical max', function () {
      called = called2 = 0;
      handle({bar: 'bar'});
      handle2({bar: 'bar'});
      handle({bar: 'bar', baz: 'baz'});
      handle2({bar: 'bar', baz: 'baz'});
      handle({bar: 'bar', baz: 'baz', boom: 'boom'});
      handle2({bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('EventEmitter', function () {
      called = called2 = 0;
      subjects.ee1.emit('foo', {bar: 'bar'});
      subjects.ee1.emit('foo', {bar: 'bar', baz: 'baz'});
      subjects.ee1.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('EventEmitter2', function () {
      called = called2 = 0;
      subjects.ee2.emit('foo', {bar: 'bar'});
      subjects.ee2.emit('foo', {bar: 'bar', baz: 'baz'});
      subjects.ee2.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('EventEmitter3', function () {
      called = called2 = 0;
      subjects.ee3.emit('foo', {bar: 'bar'});
      subjects.ee3.emit('foo', {bar: 'bar', baz: 'baz'});
      subjects.ee3.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('push-stream', function () {
      called = called2 = 0;
      subjects.pushStream.push({bar: 'bar'});
      subjects.pushStream.push({bar: 'bar', baz: 'baz'});
      subjects.pushStream.push({bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('dripEmitter', function () {
      called = called2 = 0;
      subjects.dripEmitter.emit('foo', {bar: 'bar'});
      subjects.dripEmitter.emit('foo', {bar: 'bar', baz: 'baz'});
      subjects.dripEmitter.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('dripEmitterEnhanced', function () {
      called = called2 = 0;
      subjects.dripEmitterEnhanced.emit('foo', {bar: 'bar'});
      subjects.dripEmitterEnhanced.emit('foo', {bar: 'bar', baz: 'baz'});
      subjects.dripEmitterEnhanced.emit('foo', {bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('RXJS', function () {
      called = called2 = 0;
      subjects.subject.next({bar: 'bar'});
      subjects.subject.next({bar: 'bar', baz: 'baz'});
      subjects.subject.next({bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('ReactiveProperty', function () {
      called = called2 = 0;
      subjects.rProperty({bar: 'bar'});
      subjects.rProperty({bar: 'bar', baz: 'baz'});
      subjects.rProperty({bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('JS-Signals', function () {
      called = called2 = 0;
      subjects.signal.dispatch({bar: 'bar'});
      subjects.signal.dispatch({bar: 'bar', baz: 'baz'});
      subjects.signal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('MiniSignals', function () {
      called = called2 = 0;
      subjects.miniSignal.dispatch({bar: 'bar'});
      subjects.miniSignal.dispatch({bar: 'bar', baz: 'baz'});
      subjects.miniSignal.dispatch({bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('signal-emitter', function () {
      called = called2 = 0;
      subjects.signalEmitter.emit({bar: 'bar'});
      subjects.signalEmitter.emit({bar: 'bar', baz: 'baz'});
      subjects.signalEmitter.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('event-signal', function () {
      called = called2 = 0;
      subjects.eventSignal.emit({bar: 'bar'});
      subjects.eventSignal.emit({bar: 'bar', baz: 'baz'});
      subjects.eventSignal.emit({bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('signal-lite', function () {
      called = called2 = 0;
      subjects.signalLite.broadcast({bar: 'bar'});
      subjects.signalLite.broadcast({bar: 'bar', baz: 'baz'});
      subjects.signalLite.broadcast({bar: 'bar', baz: 'baz', boom: 'boom'});
    });

    s.bench('EventDispatcher', function () {
      called = called2 = 0;
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
      called++;
    }

    function handle2() {
      if (arguments.length < 1 || arguments.length > 2) {
        throw new Error('Invlid arguments.length');
      }
      called2++;
    }
  });
});
