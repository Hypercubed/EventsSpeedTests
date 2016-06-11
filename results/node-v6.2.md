# Tests

```
✔ Platform [pass: 1, fail: 0, duration: 1ms]
✔ init [pass: 22, fail: 0, duration: 1ms]
✔ emit [pass: 27, fail: 0, duration: 12ms]
✔ emit with context [pass: 42, fail: 0, duration: 5ms]
✔ emit one value - two listeners [pass: 57, fail: 0, duration: 2ms]
✔ emit one value - one listener [pass: 40, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 30, fail: 0, duration: 1ms]
✔ emit with bound function [pass: 42, fail: 0, duration: 2ms]
✔ emit one object [pass: 45, fail: 0, duration: 4ms]
✔ emit many values [pass: 30, fail: 0, duration: 1ms]
✔ emit multiple arrays [pass: 42, fail: 0, duration: 1ms]
✔ add-remove [pass: 20, fail: 0, duration: 10ms]
```

# Summary

- duration: 41ms
- assertions: 398
- pass: 398
- fail: 0

# Comments

# Platform

Node.js 6.2.1 on Darwin 64-bit

# init

## init

```
Theoretical max x 47,409,040 ops/sec ±3.91% (23 runs sampled) *burn in*
EventEmitter3 x 45,630,552 ops/sec ±2.61% (25 runs sampled)
EventDispatcher x 45,659,284 ops/sec ±4.64% (25 runs sampled)
MiniSignals x 35,876,636 ops/sec ±4.58% (23 runs sampled)
DripEmitter x 37,684,085 ops/sec ±21.93% (21 runs sampled)
EventEmitter2 x 28,754,488 ops/sec ±3.04% (25 runs sampled)
EventEmitter x 23,292,624 ops/sec ±4.28% (25 runs sampled)
DripEmitterEnhanced x 20,072,721 ops/sec ±4.51% (25 runs sampled)
push-stream x 12,660,740 ops/sec ±4.06% (20 runs sampled)
JS-Signals x 1,869,473 ops/sec ±14.88% (20 runs sampled)
ReactiveProperty x 1,272,805 ops/sec ±11.73% (19 runs sampled)
```

_Fastest is **EventEmitter3, EventDispatcher, DripEmitter**_

# emit

## emit

```
Theoretical max x 6,727,938 ops/sec ±2.63% (25 runs sampled) *burn in*
signal-lite x 3,976,781 ops/sec ±2.53% (25 runs sampled)
MiniSignals x 3,992,248 ops/sec ±6.20% (25 runs sampled)
EventEmitter x 2,033,842 ops/sec ±4.45% (25 runs sampled)
EventEmitter3 x 1,035,528 ops/sec ±2.85% (23 runs sampled)
EventEmitter2 x 618,729 ops/sec ±4.13% (21 runs sampled)
dripEmitterEnhanced x 355,321 ops/sec ±4.56% (25 runs sampled)
signal-emitter x 156,479 ops/sec ±2.12% (25 runs sampled)
JS-Signals x 141,091 ops/sec ±4.07% (23 runs sampled)
```

_Fastest is **signal-lite, MiniSignals**_

# emit with context

## emit with context

```
Theoretical max x 30,543,091 ops/sec ±1.89% (25 runs sampled) *burn in*
push-stream x 20,972,739 ops/sec ±2.51% (25 runs sampled)
MiniSignals x 18,610,059 ops/sec ±2.51% (25 runs sampled)
signal-lite x 16,666,921 ops/sec ±4.16% (23 runs sampled)
ReactiveProperty x 13,843,472 ops/sec ±2.47% (25 runs sampled)
EventEmitter3 x 13,676,608 ops/sec ±2.10% (25 runs sampled)
dripEmitter x 13,455,184 ops/sec ±2.01% (24 runs sampled)
EventEmitter x 8,870,660 ops/sec ±2.75% (23 runs sampled)
event-signal x 5,563,942 ops/sec ±3.54% (23 runs sampled)
EventEmitter2 x 4,561,926 ops/sec ±2.57% (22 runs sampled)
RXJS x 4,050,461 ops/sec ±2.65% (23 runs sampled)
dripEmitterEnhanced x 1,445,674 ops/sec ±4.45% (25 runs sampled)
signal-emitter x 625,691 ops/sec ±6.89% (23 runs sampled)
JS-Signals x 543,813 ops/sec ±3.36% (24 runs sampled)
```

_Fastest is **push-stream**_

# emit one value - two listeners

## emit one value - two listeners

```
push-stream x 18,358,963 ops/sec ±7.00% (24 runs sampled)
Theoretical max x 18,537,729 ops/sec ±10.16% (22 runs sampled) *burn in*
signal-lite x 16,798,247 ops/sec ±1.73% (24 runs sampled)
MiniSignals x 16,169,503 ops/sec ±2.27% (25 runs sampled)
dripEmitter x 13,108,507 ops/sec ±7.83% (23 runs sampled)
ReactiveProperty x 11,747,819 ops/sec ±4.26% (25 runs sampled)
EventEmitter3 x 10,903,216 ops/sec ±9.74% (23 runs sampled)
EventEmitter x 8,407,850 ops/sec ±8.61% (24 runs sampled)
observ x 5,646,163 ops/sec ±4.62% (24 runs sampled)
event-signal x 5,537,502 ops/sec ±2.75% (25 runs sampled)
EventEmitter2 x 4,362,894 ops/sec ±7.38% (23 runs sampled)
RXJS x 3,583,234 ops/sec ±4.78% (25 runs sampled)
d3-dispatch x 1,730,516 ops/sec ±3.27% (24 runs sampled)
dripEmitterEnhanced x 1,551,584 ops/sec ±5.82% (22 runs sampled)
signal-emitter x 612,105 ops/sec ±2.82% (24 runs sampled)
JS-Signals x 552,310 ops/sec ±3.48% (24 runs sampled)
namespace-emitter x 483,458 ops/sec ±6.13% (23 runs sampled)
minivents x 449,880 ops/sec ±2.90% (23 runs sampled)
observable x 437,031 ops/sec ±5.89% (22 runs sampled)
```

_Fastest is **push-stream**_

# emit one value - one listener

## emit one value - one listener

```
Theoretical max x 37,336,109 ops/sec ±2.99% (25 runs sampled) *burn in*
MiniSignals x 30,203,476 ops/sec ±2.13% (26 runs sampled)
push-stream x 30,387,862 ops/sec ±3.33% (23 runs sampled)
signal-lite x 24,370,233 ops/sec ±2.72% (25 runs sampled)
EventEmitter2 x 21,922,836 ops/sec ±2.40% (22 runs sampled)
dripEmitter x 20,818,454 ops/sec ±5.03% (25 runs sampled)
ReactiveProperty x 19,169,787 ops/sec ±2.19% (25 runs sampled)
EventEmitter3 x 19,855,512 ops/sec ±11.66% (25 runs sampled)
EventEmitter x 15,725,650 ops/sec ±2.10% (26 runs sampled)
observ x 10,456,807 ops/sec ±1.84% (23 runs sampled)
event-signal x 6,463,625 ops/sec ±6.56% (25 runs sampled)
RXJS x 5,195,375 ops/sec ±3.28% (24 runs sampled)
barracks x 4,714,804 ops/sec ±3.39% (25 runs sampled)
d3-dispatch x 3,194,718 ops/sec ±2.76% (24 runs sampled)
dripEmitterEnhanced x 2,006,156 ops/sec ±2.40% (26 runs sampled)
minivents x 788,834 ops/sec ±2.71% (23 runs sampled)
JS-Signals x 693,407 ops/sec ±3.05% (25 runs sampled)
namespace-emitter x 623,539 ops/sec ±2.32% (21 runs sampled)
signal-emitter x 636,739 ops/sec ±4.85% (22 runs sampled)
observable x 499,273 ops/sec ±2.64% (25 runs sampled)
```

_Fastest is **MiniSignals, push-stream**_

# emit many listeners

## emit many listeners

```
push-stream x 4,793,738 ops/sec ±2.37% (25 runs sampled)
Theoretical max x 4,615,292 ops/sec ±2.81% (24 runs sampled) *burn in*
MiniSignals x 4,508,938 ops/sec ±4.21% (25 runs sampled)
signal-lite x 4,370,358 ops/sec ±3.35% (24 runs sampled)
dripEmitter x 4,195,917 ops/sec ±3.98% (23 runs sampled)
EventEmitter3 x 3,861,235 ops/sec ±2.06% (26 runs sampled)
ReactiveProperty x 3,775,952 ops/sec ±2.44% (24 runs sampled)
EventEmitter x 3,471,409 ops/sec ±3.67% (24 runs sampled)
event-signal x 2,602,651 ops/sec ±4.03% (24 runs sampled)
EventEmitter2 x 2,501,452 ops/sec ±2.64% (24 runs sampled)
RXJS x 1,530,863 ops/sec ±2.14% (25 runs sampled)
dripEmitterEnhanced x 1,338,663 ops/sec ±3.67% (23 runs sampled)
signal-emitter x 606,823 ops/sec ±2.95% (25 runs sampled)
JS-Signals x 261,108 ops/sec ±1.88% (23 runs sampled)
minivents x 101,629 ops/sec ±3.89% (25 runs sampled)
```

_Fastest is **push-stream**_

# emit with bound function

## emit with bound function

```
Theoretical max x 28,225,042 ops/sec ±3.84% (24 runs sampled) *burn in*
push-stream x 19,498,631 ops/sec ±2.43% (25 runs sampled)
ReactiveProperty x 13,892,967 ops/sec ±2.77% (21 runs sampled)
dripEmitter x 12,403,176 ops/sec ±3.48% (25 runs sampled)
EventEmitter3 x 11,947,110 ops/sec ±3.12% (25 runs sampled)
EventEmitter x 8,773,126 ops/sec ±2.72% (21 runs sampled)
MiniSignals x 6,277,519 ops/sec ±4.37% (24 runs sampled)
signal-lite x 5,509,032 ops/sec ±7.87% (21 runs sampled)
EventEmitter2 x 4,700,267 ops/sec ±1.98% (25 runs sampled)
RXJS x 3,806,283 ops/sec ±4.65% (23 runs sampled)
event-signal x 3,709,920 ops/sec ±5.83% (22 runs sampled)
dripEmitterEnhanced x 1,518,394 ops/sec ±8.03% (24 runs sampled)
signal-emitter x 560,738 ops/sec ±5.86% (23 runs sampled)
JS-Signals x 415,741 ops/sec ±10.83% (21 runs sampled)
```

_Fastest is **push-stream**_

# emit one object

## emit one object

```
Theoretical max x 8,110,450 ops/sec ±2.05% (25 runs sampled) *burn in*
MiniSignals x 5,339,613 ops/sec ±2.86% (25 runs sampled)
push-stream x 4,263,665 ops/sec ±5.15% (23 runs sampled)
signal-lite x 4,115,210 ops/sec ±10.15% (23 runs sampled)
ReactiveProperty x 4,006,318 ops/sec ±8.62% (24 runs sampled)
dripEmitter x 3,087,233 ops/sec ±5.76% (21 runs sampled)
EventEmitter x 2,861,533 ops/sec ±2.13% (25 runs sampled)
EventEmitter3 x 2,986,116 ops/sec ±6.66% (23 runs sampled)
EventDispatcher x 2,001,287 ops/sec ±6.21% (24 runs sampled)
event-signal x 1,713,408 ops/sec ±1.95% (26 runs sampled)
EventEmitter2 x 1,339,730 ops/sec ±7.14% (24 runs sampled)
RXJS x 1,021,033 ops/sec ±6.16% (23 runs sampled)
dripEmitterEnhanced x 450,672 ops/sec ±4.66% (24 runs sampled)
signal-emitter x 224,849 ops/sec ±3.03% (23 runs sampled)
JS-Signals x 164,771 ops/sec ±2.47% (23 runs sampled)
```

_Fastest is **MiniSignals**_

# emit many values

## emit many values

```
Theoretical max x 13,570,236 ops/sec ±4.76% (22 runs sampled) *burn in*
MiniSignals x 12,474,706 ops/sec ±6.51% (24 runs sampled)
signal-lite x 11,704,867 ops/sec ±9.20% (20 runs sampled)
EventEmitter3 x 699,454 ops/sec ±1.95% (25 runs sampled)
EventEmitter x 686,035 ops/sec ±2.29% (22 runs sampled)
EventEmitter2 x 640,455 ops/sec ±3.43% (22 runs sampled)
dripEmitterEnhanced x 522,388 ops/sec ±3.63% (19 runs sampled)
signal-emitter x 321,857 ops/sec ±7.77% (23 runs sampled)
JS-Signals x 170,332 ops/sec ±8.05% (20 runs sampled)
minivents x 119,688 ops/sec ±4.53% (24 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

# emit multiple arrays

## emit multiple arrays

```
Theoretical max x 9,066,340 ops/sec ±17.14% (20 runs sampled) *burn in*
push-stream x 6,735,487 ops/sec ±5.55% (25 runs sampled)
MiniSignals x 6,186,582 ops/sec ±7.97% (21 runs sampled)
signal-lite x 5,519,963 ops/sec ±6.18% (24 runs sampled)
ReactiveProperty x 5,059,931 ops/sec ±2.68% (26 runs sampled)
dripEmitter x 4,760,533 ops/sec ±5.59% (19 runs sampled)
EventEmitter3 x 4,409,534 ops/sec ±7.75% (23 runs sampled)
EventEmitter x 2,184,904 ops/sec ±16.77% (22 runs sampled)
event-signal x 1,795,965 ops/sec ±5.60% (25 runs sampled)
EventEmitter2 x 1,525,208 ops/sec ±2.94% (22 runs sampled)
RXJS x 1,383,381 ops/sec ±3.52% (25 runs sampled)
dripEmitterEnhanced x 584,338 ops/sec ±2.57% (23 runs sampled)
signal-emitter x 224,470 ops/sec ±5.26% (24 runs sampled)
JS-Signals x 180,979 ops/sec ±4.39% (24 runs sampled)
```

_Fastest is **push-stream**_

# add-remove

## add-remove

```
dripEmitter x 26,144,592 ops/sec ±2.25% (24 runs sampled)
MiniSignals x 13,715,850 ops/sec ±13.34% (23 runs sampled)
EventDispatcher x 4,834,442 ops/sec ±2.32% (22 runs sampled)
ReactiveProperty x 4,681,489 ops/sec ±4.34% (25 runs sampled)
EventEmitter x 3,591,492 ops/sec ±6.06% (26 runs sampled)
push-stream x 2,969,983 ops/sec ±5.48% (22 runs sampled)
EventEmitter3 x 1,612,315 ops/sec ±8.49% (24 runs sampled)
EventEmitter2 x 1,143,538 ops/sec ±2.65% (25 runs sampled)
JS-Signals x 688,671 ops/sec ±2.20% (25 runs sampled)
dripEmitterEnhanced x 524,618 ops/sec ±4.23% (24 runs sampled)
```

_Fastest is **dripEmitter**_
