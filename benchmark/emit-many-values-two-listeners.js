var suite = require('chuhai');
var test = require('blue-tape');
var setup = require('../subjects');

test('emit many values', function (t) {
  return suite('emit many values', function (s) {
    s.set('maxTime', setup.maxTime);
    s.set('minSamples', setup.minSamples);

    var subjects = setup.createInstancesOn(handle, handle2);

    var called = 0;
    var called2 = 0;

    s.cycle(function (e) {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, 1, 'handle called once');
      t.equal(called2, 1, 'handle2 called once');
      called = called2 = null;
    });

    s.burn('Theoretical max', function () {
      called = called2 = 0;
      handle('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
      handle2('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });

    s.bench('EventEmitter', function () {
      called = called2 = 0;
      subjects.ee1.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('EventEmitter2', function () {
      called = called2 = 0;
      subjects.ee2.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('EventEmitter3', function () {
      called = called2 = 0;
      subjects.ee3.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.xbench('dripEmitter', function () {  // see https://github.com/qualiancy/drip/pull/4
      called = called2 = 0;
      subjects.dripEmitter.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('dripEmitterEnhanced', function () {
      called = called2 = 0;
      subjects.dripEmitterEnhanced.emit('foo', 'bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('JS-Signals', function () {
      called = called2 = 0;
      subjects.signal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('MiniSignals', function () {
      called = called2 = 0;
      subjects.miniSignal.dispatch('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('signal-emitter', function () {
      called = called2 = 0;
      subjects.signalEmitter.emit('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('signal-lite', function () {
      called = called2 = 0;
      subjects.signalLite.broadcast('bar', 'baz', 'boom', 1, 2, 3, 4, 5, 6, 7, 8, 9);
    });
    s.bench('minivents', function () {
      called = called2 = 0;
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
      called2++;
    }
  });
});
