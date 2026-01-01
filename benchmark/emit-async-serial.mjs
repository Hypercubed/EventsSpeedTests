import suite from 'chuhai';
import test from 'tape';
import assert from 'node:assert/strict';
import delay from 'delay';
import { createInstancesOn } from '../shared/index.mjs';

test('emit async - one listener', t => {
  return suite('', s => {
    s.set('maxTime', 10);
    s.set('minSamples', 30);

    var subjects = createInstancesOn('foo', handleU, handleL);

    let called = '';

    s.cycle(e => {
      t.false(e.target.error, e.target.name + ' runs without error');
      t.equal(called, 'X-x-Y-y-Z-z-', e.target.name + ' called handle three times');
      called = '';
    });

    s.burn('Theoretical max', {
      defer: true,
      fn: async (deferred) => {
        called = '';
        await handleU('X');
        await handleL('X');
        await handleU('Y');
        await handleL('Y');
        await handleU('Z');
        await handleL('Z');
        deferred.resolve();
      } 
    });

    s.bench('sindresorhus/emittery', {
      defer: true,
      fn: async (deferred) => {
        called = '';
        await subjects.emittery.emitSerial('foo', 'X');
        await subjects.emittery.emitSerial('foo', 'Y');
        await subjects.emittery.emitSerial('foo', 'Z');
        deferred.resolve();
      }
    });

    s.bench('Hypercubed/mini-signals', {
      defer: true,
      fn: async (deferred) => {
        called = '';
        await subjects.miniSignal.dispatchSerial('X');
        await subjects.miniSignal.dispatchSerial('Y');
        await subjects.miniSignal.dispatchSerial('Z');
        deferred.resolve();
      }
    });

    s.bench('bitrinjani/awaitable-event-emitter', {
      defer: true,
      fn: async (deferred) => {
        called = '';
        await subjects.awaitable.emitSerial('foo', 'X');
        await subjects.awaitable.emitSerial('foo', 'Y');
        await subjects.awaitable.emitSerial('foo', 'Z');
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
