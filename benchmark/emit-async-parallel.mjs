import suite from 'chuhai';
import test from 'tape';
import { maxTime, minSamples } from '../shared/index.mjs';
import assert from 'node:assert/strict';
import delay from 'delay';
import { createInstancesOn } from '../shared/index.mjs';

test('emit async - one listener', t => {
  return suite('', s => {
    s.set('maxTime', 10);
    s.set('minSamples', minSamples);

    var subjects = createInstancesOn('foo', handleU, handleL);

    let called = '';

    s.cycle(e => {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, 'Xx--Yy--Zz--', e.target.name + ' called handle three times');
      called = '';
    });

    s.burn('Theoretical max', {
      defer: true,
      fn: async (deferred) => {
        called = '';
        await Promise.all([
          handleU('X'),
          handleL('X')
        ]);
        await Promise.all([
          handleU('Y'),
          handleL('Y'),
        ]);
        await Promise.all([ 
          handleU('Z'),
          handleL('Z')
        ]);
        deferred.resolve();
      } 
    });

    s.bench('sindresorhus/emittery', {
      defer: true,
      fn: async (deferred) => {
        called = '';
        await subjects.emittery.emit('foo', 'X');
        await subjects.emittery.emit('foo', 'Y');
        await subjects.emittery.emit('foo', 'Z');
        deferred.resolve();
      }
    });

    s.bench('EventEmitter2/EventEmitter2', {
      defer: true,
      fn: async (deferred) => {
        called = '';
        await subjects.ee2.emitAsync('foo', 'X');
        await subjects.ee2.emitAsync('foo', 'Y');
        await subjects.ee2.emitAsync('foo', 'Z');
        deferred.resolve();
      }
    });

    s.bench('Hypercubed/mini-signals', {
      defer: true,
      fn: async (deferred) => {
        called = '';
        await subjects.miniSignal.dispatchParallel('X');
        await subjects.miniSignal.dispatchParallel('Y');
        await subjects.miniSignal.dispatchParallel('Z');
        deferred.resolve();
      }
    });

    s.bench('bitrinjani/awaitable-event-emitter', {
      defer: true,
      fn: async (deferred) => {
        called = '';
        await subjects.awaitable.emitParallel('foo', 'X');
        await subjects.awaitable.emitParallel('foo', 'Y');
        await subjects.awaitable.emitParallel('foo', 'Z');
        deferred.resolve();
      }
    });

    async function handleU(a) {
      if (!subjects) return; // ignore calls before benchmarks start
      assert.ok(typeof a === 'string' && a.length === 1);
      called += a.toUpperCase();
      await delay(2);
      called += '-';
    }

    async function handleL(a) {
      if (!subjects) return; // ignore calls before benchmarks start
      assert.ok(typeof a === 'string' && a.length === 1);
      called += a.toLowerCase();
      await delay(2);
      called += '-';
    }
  });
});
