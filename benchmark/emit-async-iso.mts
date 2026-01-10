import { IsoBench } from "iso-bench";

import assert from 'node:assert/strict';
import { createInstancesOn } from '../shared/index.mjs';

var ASSERT = process.env['ASSERT'] === 'true';
var subjects = createInstancesOn('foo', handleU, handleL);

let called = '';

const bench = new IsoBench('Basic Emit');

bench.addAsync('Theoretical max', async (resolve) => {
  called = '';
  await handleU('X');
  await handleL('X');
  await handleU('Y');
  await handleL('Y');
  await handleU('Z');
  await handleL('Z');
  if (ASSERT) {
    assert.strictEqual(called, 'X-x-Y-y-Z-z-');
  }
  resolve();
});

bench.endGroup('Max Emit Serial');

bench.addAsync('Hypercubed/mini-signals', async (resolve) => {
  called = '';
  await subjects.miniSignal.dispatchSerial('X');
  await subjects.miniSignal.dispatchSerial('Y');
  await subjects.miniSignal.dispatchSerial('Z');
  if (ASSERT) {
    assert.strictEqual(called, 'X-x-Y-y-Z-z-');
  }
  resolve();
});

bench.addAsync('sindresorhus/emittery', async (resolve) => {
  called = '';
  await subjects.emittery.emitSerial('foo', 'X');
  await subjects.emittery.emitSerial('foo', 'Y');
  await subjects.emittery.emitSerial('foo', 'Z');
  if (ASSERT) {
    assert.strictEqual(called, 'X-x-Y-y-Z-z-');
  }
  resolve();
});

bench.addAsync('bitrinjani/awaitable-event-emitter', async (resolve) => {
  called = '';
  await subjects.awaitable.emitSerial('foo', 'X');
  await subjects.awaitable.emitSerial('foo', 'Y');
  await subjects.awaitable.emitSerial('foo', 'Z');
  if (ASSERT) {
    assert.strictEqual(called, 'X-x-Y-y-Z-z-');
  }
  resolve();
});

bench.endGroup('Emit Serial');

bench.addAsync('Theoretical max', async (resolve) => {
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
  if (ASSERT) {
    assert.strictEqual(called, 'Xx--Yy--Zz--');
  }
  resolve();
});

bench.endGroup('Max Emit All');

bench.addAsync('Hypercubed/mini-signals', async (resolve) => {
  called = '';
  await subjects.miniSignal.dispatchParallel('X');
  await subjects.miniSignal.dispatchParallel('Y');
  await subjects.miniSignal.dispatchParallel('Z');
  if (ASSERT) {
    assert.strictEqual(called, 'Xx--Yy--Zz--');
  }
  resolve();
});

bench.addAsync('sindresorhus/emittery', async (resolve) => {
  called = '';
  await subjects.emittery.emit('foo', 'X');
  await subjects.emittery.emit('foo', 'Y');
  await subjects.emittery.emit('foo', 'Z');
  if (ASSERT) {
    assert.strictEqual(called, 'Xx--Yy--Zz--');
  }
  resolve();
});

bench.addAsync('hij1nx/EventEmitter2', async (resolve) => {
  called = '';
  await subjects.ee2.emitAsync('foo', 'X');
  await subjects.ee2.emitAsync('foo', 'Y');
  await subjects.ee2.emitAsync('foo', 'Z');
  if (ASSERT) {
    assert.strictEqual(called, 'Xx--Yy--Zz--');
  }
  resolve();
});

bench.addAsync('bitrinjani/awaitable-event-emitter', async (resolve) => {
  called = '';
  await subjects.awaitable.emitParallel('foo', 'X');
  await subjects.awaitable.emitParallel('foo', 'Y');
  await subjects.awaitable.emitParallel('foo', 'Z');
  if (ASSERT) {
    assert.strictEqual(called, 'Xx--Yy--Zz--');
  }
  resolve();
});

bench.addAsync('garronej/evt', async (resolve) => {
  called = '';
  await subjects.evt.postAndWait('X');
  await subjects.evt.postAndWait('Y');
  await subjects.evt.postAndWait('Z');
  if (ASSERT) {
    assert.strictEqual(called, 'Xx--Yy--Zz--');
  }
  resolve();
});

bench.endGroup('Emit All');

await bench.consoleLog().run();

async function handleL(a: any) {
  if (!subjects) return; // ignore calls before benchmarks start
  called += a.toLowerCase();
  called += '-';
  if (!ASSERT) return;
  assert.ok(typeof a === 'string' && a.length === 1);
}

function handleU(a: any) {
  if (!subjects) return; // ignore calls before benchmarks start
  called += a.toUpperCase();
  return Promise.resolve().then(() => {
    called += '-';
    if (ASSERT) {
      assert.ok(typeof a === 'string' && a.length === 1);
    }
  });
}