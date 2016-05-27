var suite = require('chuhai');
var test = require('blue-tape');

test('emit many parameters', function (t) {
  return suite('emit many parameters', function (s) {
    s.set('maxTime', 0.01);
    s.set('minSamples', 10);

    var subjects = require('../subjects').createInstancesOn(handle, handle2);

    var called = 0;

    s.cycle(function (e) {
      t.false(e.target.error, 'runs without error');
      t.equal(called, 1, 'called three times');
      called = null;
    });

    s.burn('Theoretical max', function () {
      called = 0;
      handle('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
      handle2('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });

    s.bench('EventEmitter', function () {
      called = 0;
      subjects.ee1.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('EventEmitter2', function () {
      called = 0;
      subjects.ee2.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('EventEmitter3', function () {
      called = 0;
      subjects.ee3.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.xbench('dripEmitter', function () {  // see https://github.com/qualiancy/drip/pull/4
      called = 0;
      subjects.dripEmitter.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('dripEmitterEnhanced', function () {
      called = 0;
      subjects.dripEmitterEnhanced.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('JS-Signals', function () {
      called = 0;
      subjects.signal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('MiniSignals', function () {
      called = 0;
      subjects.miniSignal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('signal-emitter', function () {
      called = 0;
      subjects.signalEmitter.emit('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('signal-lite', function () {
      called = 0;
      subjects.signalLite.broadcast('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('minivents', function () {
      called = 0;
      subjects.miniVent.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });

    function handle(a) {
      if (arguments.length === 1 && a === undefined) {
        return;
      }
      if (arguments.length !== 12) {
        throw new Error('Invlid arguments.length');
      }
      called++;
    }

    function handle2(a) {
      if (arguments.length === 1 && a === undefined) {
        return;
      }
      if (arguments.length !== 12) {
        throw new Error('Invlid arguments.length');
      }
    }
  });
});
