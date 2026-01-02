import suite from 'chuhai';
import test from 'tape';
import { maxTime, minSamples, createInstances } from '../shared/index.mjs';

test('add and remove', (t) => {
  return suite('', (s) => {
    s.set('maxTime', maxTime);
    s.set('minSamples', minSamples);

    var subjects = createInstances();

    var called = 0;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      called = 0;
      subjects.ee1.emit('foo', 'bar');
      subjects.ee2.emit('foo', 'bar');
      subjects.ee3.emit('foo', 'bar');
      subjects.reactiveProperty('bar');
      subjects.signal.dispatch('bar');
      subjects.miniSignal.dispatch('bar');
      t.equal(called, 0, e.target.name + ' never called handle');
    });

    s.bench('node:events', function () {
      subjects.ee.on('foo', handle);
      subjects.ee.removeListener('foo', handle);
    });

    s.bench('hij1nx/EventEmitter2', function () {
      subjects.ee2.on('foo', handle);
      subjects.ee2.removeListener('foo', handle);
    });

    s.bench('primus/eventemitter3', function () {
      subjects.ee3.on('foo', handle);
      subjects.ee3.removeListener('foo', handle);
    });

    s.bench('datavis-tech/reactive-property', function () {
      subjects.reactiveProperty.on(handle);
      subjects.reactiveProperty.off(handle);
    });

    s.bench('millermedeiros/js-signals', function () {
      subjects.signal.add(handle);
      subjects.signal.remove(handle);
    });

    s.bench('Hypercubed/mini-signals', function () {
      var _handle = subjects.miniSignal.add(handle);
      subjects.miniSignal.detach(_handle);
    });

    s.bench('Morglod/tseep', function () {
      subjects.tseep.on('foo', handle);
      subjects.tseep.removeListener('foo', handle);
    });

    function handle() {
      called++;
    }
  });
});
