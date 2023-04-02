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

    s.bench('ReactiveProperty', function () {
      subjects.reactiveProperty.on(handle);
      subjects.reactiveProperty.off(handle);
    });

    s.bench('JS-Signals', function () {
      subjects.signal.add(handle);
      subjects.signal.remove(handle);
    });

    s.bench('MiniSignals', function () {
      var _handle = subjects.miniSignal.add(handle);
      subjects.miniSignal.detach(_handle);
    });

    function handle() {
      called++;
    }
  });
});
