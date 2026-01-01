import suite from 'chuhai';
import test from 'tape';
import { maxTime, minSamples, createInstancesOn } from '../shared/index.mjs';

test('emit many values - two listeners', function (t) {
  return suite('', function (s) {
    s.set('maxTime', maxTime);
    s.set('minSamples', minSamples);

    var subjects = createInstancesOn('foo', handle, handle2);

    var called = 0;
    var called2 = 0;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, 1, e.target.name + ' called handle  once');
      t.equal(called2, 1, e.target.name + ' called handle2 once');
      called = called2 = null;
    });

    s.burn('Theoretical max', function () {
      called = called2 = 0;
      handle('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, Math.random());
      handle2('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, Math.random());
    });

    s.bench('EventEmitter', function () {
      called = called2 = 0;
      subjects.ee1.emit(
        'foo',
        'bar',
        'baz',
        'boom',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        Math.random()
      );
    });

    s.bench('EventEmitter2', function () {
      called = called2 = 0;
      subjects.ee2.emit(
        'foo',
        'bar',
        'baz',
        'boom',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        Math.random()
      );
    });

    s.bench('EventEmitter3', function () {
      called = called2 = 0;
      subjects.ee3.emit(
        'foo',
        'bar',
        'baz',
        'boom',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        Math.random()
      );
    });

    s.bench('JS-Signals', function () {
      called = called2 = 0;
      subjects.signal.dispatch(
        'bar',
        'baz',
        'boom',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        Math.random()
      );
    });

    s.bench('MiniSignals', function () {
      called = called2 = 0;
      subjects.miniSignal.dispatch(
        'bar',
        'baz',
        'boom',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        Math.random()
      );
    });

    s.bench('signal-emitter', function () {
      called = called2 = 0;
      subjects.signalEmitter.emit(
        'bar',
        'baz',
        'boom',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        Math.random()
      );
    });

    s.bench('signal-lite', function () {
      called = called2 = 0;
      subjects.signalLite.broadcast(
        'bar',
        'baz',
        'boom',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        Math.random()
      );
    });

    s.bench('minivents', function () {
      called = called2 = 0;
      subjects.miniVent.emit(
        'foo',
        'bar',
        'baz',
        'boom',
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        Math.random()
      );
    });

    function handle() {
      if (!subjects) {
        // ignore calls before benchmarks start
        return;
      }
      if (arguments.length !== 12) {
        throw new Error('Invlid arguments.length');
      }
      called++;
    }

    function handle2() {
      if (!subjects) {
        // ignore calls before benchmarks start
        return;
      }
      if (arguments.length !== 12) {
        throw new Error('Invlid arguments.length');
      }
      called2++;
    }
  });
});
