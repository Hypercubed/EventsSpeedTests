var suite = require('chuhai');
var test = require('blue-tape');
var setup = require('../subjects');

test('add and remove', function (t) {
  return suite('', function (s) {
    s.set('maxTime', setup.maxTime);
    s.set('minSamples', setup.minSamples);

    var subjects = setup.createInstances();

    var called = 0;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      called = 0;
      subjects.ee1.emit('foo', 'bar');
      subjects.ee2.emit('foo', 'bar');
      subjects.ee3.emit('foo', 'bar');
      subjects.dripEmitter.emit('foo', 'bar');
      subjects.dripEmitterEnhanced.emit('foo', 'bar');
      subjects.rProperty('bar');
      subjects.signal.dispatch('bar');
      subjects.miniSignal.dispatch('bar');
      subjects.eventDispatcher.dispatchEvent({type: 'foo', bar: 'bar'});
      subjects.pushStream.push('bar');
      t.equal(called, 0, e.target.name + ' never called handle');
    });

    s.bench('EventEmitter', function () {
      subjects.ee1.on('foo', handle);
      subjects.ee1.removeListener('foo', handle);
    });
    s.bench('EventEmitter2', function () {
      subjects.ee2.on('foo', handle);
      subjects.ee2.removeListener('foo', handle);
    });
    s.bench('EventEmitter3', function () {
      subjects.ee3.on('foo', handle);
      subjects.ee3.removeListener('foo', handle);
    });
    s.bench('dripEmitter', function () {
      subjects.dripEmitter.on('foo', handle);
      subjects.dripEmitter.off('foo', handle);
    });
    s.bench('pushStream', function () {
      var remove = subjects.pushStream(handle);
      remove();
    });
    s.bench('dripEmitterEnhanced', function () {
      subjects.dripEmitterEnhanced.on('foo', handle);
      subjects.dripEmitterEnhanced.off('foo', handle);
    });
    s.bench('ReactiveProperty', function () {
      subjects.rProperty.on(handle);
      subjects.rProperty.off(handle);
    });
    s.bench('JS-Signals', function () {
      subjects.signal.add(handle);
      subjects.signal.remove(handle);
    });
    s.bench('MiniSignals', function () {
      var _handle = subjects.miniSignal.add(handle);
      subjects.miniSignal.detach(_handle);
    });
    s.bench('EventDispatcher', function () {
      subjects.eventDispatcher.addEventListener('foo', handle);
      subjects.eventDispatcher.removeEventListener('foo', handle);
    });

    function handle() {
      called++;
    }
  });
});
