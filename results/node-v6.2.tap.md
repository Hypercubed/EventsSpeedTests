# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 2ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 48, fail: 0, duration: 5ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 40, fail: 0, duration: 3ms]
- ✔ emit one object - two listeners [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 51, fail: 0, duration: 1ms]
- ✔ emit one value - many listeners [pass: 36, fail: 0, duration: 4ms]
- ✔ emit one value - one listener [pass: 52, fail: 0, duration: 2ms]
- ✔ emit one value - two listeners [pass: 69, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 48, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 1ms]
- ✔ init [pass: 24, fail: 0, duration: 8ms]

# Summary

- duration: 33ms
- planned: 500
- assertions: 500
- pass: 500
- fail: 0

# Comments

## Platform

Node.js 6.2.2 on Darwin 64-bit NODE_ENV = production BENCH = mid

## add and remove

```
dripEmitter x 28,594,789 ops/sec ±3.34% (17 runs sampled)
MiniSignals x 15,367,463 ops/sec ±2.97% (14 runs sampled)
EventDispatcher x 5,339,810 ops/sec ±4.69% (17 runs sampled)
ReactiveProperty x 5,034,825 ops/sec ±2.70% (17 runs sampled)
EventEmitter x 4,281,427 ops/sec ±10.48% (17 runs sampled)
pushStream x 3,672,391 ops/sec ±3.53% (15 runs sampled)
EventEmitter3 x 1,887,038 ops/sec ±3.39% (17 runs sampled)
EventEmitter2 x 1,152,785 ops/sec ±7.88% (15 runs sampled)
JS-Signals x 769,637 ops/sec ±6.84% (17 runs sampled)
dripEmitterEnhanced x 602,322 ops/sec ±5.70% (16 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 12,329,841 ops/sec ±3.12% (15 runs sampled) *burn in*
MicroSignals x 7,313,055 ops/sec ±3.42% (18 runs sampled)
MiniSignals x 6,972,059 ops/sec ±3.87% (17 runs sampled)
signal-lite x 6,564,980 ops/sec ±3.49% (15 runs sampled)
push-stream x 5,918,076 ops/sec ±5.07% (17 runs sampled)
dripEmitter x 5,253,355 ops/sec ±4.05% (17 runs sampled)
ReactiveProperty x 5,242,808 ops/sec ±5.45% (15 runs sampled)
EventEmitter3 x 4,978,997 ops/sec ±3.44% (17 runs sampled)
EventEmitter x 3,425,287 ops/sec ±2.57% (17 runs sampled)
event-signal x 2,033,410 ops/sec ±3.98% (15 runs sampled)
EventEmitter2 x 1,736,363 ops/sec ±3.07% (15 runs sampled)
RXJS x 1,536,010 ops/sec ±4.36% (17 runs sampled)
dripEmitterEnhanced x 628,667 ops/sec ±3.44% (15 runs sampled)
signal-emitter x 258,215 ops/sec ±5.22% (17 runs sampled)
JS-Signals x 197,506 ops/sec ±3.15% (18 runs sampled)
pull-notify x 168,850 ops/sec ±5.02% (16 runs sampled)
```

_Fastest is **MicroSignals**_

## emit many values - two listeners

```
Theoretical max x 60,428,581 ops/sec ±4.03% (16 runs sampled) *burn in*
MiniSignals x 19,133,697 ops/sec ±2.71% (18 runs sampled)
signal-lite x 16,860,481 ops/sec ±2.93% (17 runs sampled)
EventEmitter3 x 771,781 ops/sec ±3.10% (15 runs sampled)
EventEmitter x 768,504 ops/sec ±3.28% (16 runs sampled)
EventEmitter2 x 709,551 ops/sec ±5.46% (16 runs sampled)
dripEmitterEnhanced x 587,618 ops/sec ±2.40% (14 runs sampled)
signal-emitter x 383,127 ops/sec ±7.20% (17 runs sampled)
JS-Signals x 234,442 ops/sec ±2.53% (15 runs sampled)
minivents x 145,604 ops/sec ±2.98% (18 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 11,262,271 ops/sec ±3.18% (17 runs sampled) *burn in*
MicroSignals x 10,792,054 ops/sec ±2.52% (17 runs sampled)
MiniSignals x 9,390,953 ops/sec ±2.92% (17 runs sampled)
mini-pipe x 8,781,738 ops/sec ±4.05% (17 runs sampled)
signal-lite x 8,655,017 ops/sec ±4.50% (15 runs sampled)
push-stream x 7,428,489 ops/sec ±3.64% (17 runs sampled)
xstream x 7,282,546 ops/sec ±3.21% (17 runs sampled)
dripEmitter x 7,070,103 ops/sec ±3.51% (16 runs sampled)
EventEmitter2 x 6,904,547 ops/sec ±2.66% (13 runs sampled)
ReactiveProperty x 6,762,194 ops/sec ±2.59% (17 runs sampled)
EventEmitter3 x 6,052,801 ops/sec ±22.95% (15 runs sampled)
EventEmitter x 5,048,585 ops/sec ±3.42% (17 runs sampled)
EventDispatcher x 2,949,805 ops/sec ±4.45% (17 runs sampled)
event-signal x 2,209,403 ops/sec ±5.19% (15 runs sampled)
RXJS x 1,827,366 ops/sec ±5.10% (17 runs sampled)
pull-pushable x 1,192,945 ops/sec ±3.74% (15 runs sampled)
dripEmitterEnhanced x 659,486 ops/sec ±4.17% (15 runs sampled)
JS-Signals x 267,459 ops/sec ±2.71% (16 runs sampled)
signal-emitter x 236,598 ops/sec ±7.46% (14 runs sampled)
pull-notify x 202,095 ops/sec ±4.97% (16 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 8,486,099 ops/sec ±2.89% (17 runs sampled) *burn in*
MiniSignals x 5,617,341 ops/sec ±3.80% (15 runs sampled)
MicroSignals x 5,373,260 ops/sec ±3.37% (14 runs sampled)
signal-lite x 5,052,103 ops/sec ±4.72% (15 runs sampled)
push-stream x 4,935,612 ops/sec ±2.94% (17 runs sampled)
ReactiveProperty x 4,709,005 ops/sec ±6.45% (15 runs sampled)
dripEmitter x 4,455,240 ops/sec ±3.56% (17 runs sampled)
EventEmitter3 x 4,150,459 ops/sec ±2.39% (17 runs sampled)
xstream x 3,549,511 ops/sec ±3.82% (17 runs sampled)
EventEmitter x 3,078,037 ops/sec ±4.17% (17 runs sampled)
EventDispatcher x 2,447,064 ops/sec ±4.51% (17 runs sampled)
event-signal x 1,797,165 ops/sec ±4.51% (15 runs sampled)
EventEmitter2 x 1,464,957 ops/sec ±6.47% (16 runs sampled)
RXJS x 1,417,506 ops/sec ±4.63% (17 runs sampled)
dripEmitterEnhanced x 629,812 ops/sec ±2.01% (17 runs sampled)
signal-emitter x 261,020 ops/sec ±3.42% (18 runs sampled)
JS-Signals x 213,409 ops/sec ±4.34% (16 runs sampled)
pull-notify x 155,558 ops/sec ±8.31% (15 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## emit one value - bound function

```
Theoretical max x 33,651,252 ops/sec ±3.58% (16 runs sampled) *burn in*
MicroSignals x 18,634,624 ops/sec ±3.68% (13 runs sampled)
push-stream x 15,647,077 ops/sec ±2.78% (17 runs sampled)
ReactiveProperty x 15,726,774 ops/sec ±8.35% (17 runs sampled)
dripEmitter x 14,474,008 ops/sec ±3.39% (17 runs sampled)
xstream x 14,186,865 ops/sec ±4.10% (17 runs sampled)
EventEmitter3 x 13,651,582 ops/sec ±2.75% (17 runs sampled)
EventEmitter x 9,453,109 ops/sec ±4.46% (16 runs sampled)
MiniSignals x 8,025,470 ops/sec ±2.82% (15 runs sampled)
EventEmitter2 x 5,079,226 ops/sec ±3.21% (17 runs sampled)
event-signal x 5,015,696 ops/sec ±11.73% (15 runs sampled)
signal-lite x 4,825,659 ops/sec ±14.48% (16 runs sampled)
RXJS x 3,974,540 ops/sec ±12.41% (17 runs sampled)
dripEmitterEnhanced x 1,894,318 ops/sec ±6.39% (16 runs sampled)
signal-emitter x 675,184 ops/sec ±8.00% (16 runs sampled)
pull-notify x 472,014 ops/sec ±8.97% (16 runs sampled)
JS-Signals x 426,855 ops/sec ±10.97% (16 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - many listeners

```
Theoretical max x 4,817,053 ops/sec ±3.69% (13 runs sampled) *burn in*
MiniSignals x 4,698,516 ops/sec ±3.36% (16 runs sampled)
MicroSignal x 4,618,170 ops/sec ±3.38% (17 runs sampled)
signal-lite x 4,319,625 ops/sec ±3.45% (15 runs sampled)
dripEmitter x 4,247,004 ops/sec ±6.14% (15 runs sampled)
push-stream x 4,246,078 ops/sec ±7.36% (16 runs sampled)
EventEmitter3 x 4,029,441 ops/sec ±3.18% (14 runs sampled)
xstream x 3,915,800 ops/sec ±3.95% (17 runs sampled)
ReactiveProperty x 3,627,408 ops/sec ±7.12% (17 runs sampled)
EventEmitter x 3,496,966 ops/sec ±5.28% (17 runs sampled)
event-signal x 2,812,078 ops/sec ±5.52% (17 runs sampled)
EventEmitter2 x 2,607,283 ops/sec ±3.31% (12 runs sampled)
RXJS x 1,565,642 ops/sec ±4.26% (17 runs sampled)
dripEmitterEnhanced x 1,389,505 ops/sec ±4.22% (17 runs sampled)
signal-emitter x 633,828 ops/sec ±4.08% (17 runs sampled)
JS-Signals x 280,299 ops/sec ±4.49% (14 runs sampled)
pull-notify x 226,844 ops/sec ±4.61% (15 runs sampled)
minivents x 120,590 ops/sec ±3.29% (17 runs sampled)
```

_Fastest is **MiniSignals, MicroSignal**_

## emit one value - one listener

```
Theoretical max x 36,464,697 ops/sec ±9.42% (17 runs sampled) *burn in*
xstream x 29,468,852 ops/sec ±15.97% (15 runs sampled)
mini-pipe x 25,969,959 ops/sec ±3.46% (15 runs sampled)
MicroSignals x 26,472,971 ops/sec ±9.83% (15 runs sampled)
signal-lite x 21,769,430 ops/sec ±8.04% (16 runs sampled)
MiniSignals x 22,044,012 ops/sec ±13.56% (13 runs sampled)
push-stream-patch x 19,853,865 ops/sec ±4.19% (15 runs sampled)
push-stream x 18,153,428 ops/sec ±6.63% (16 runs sampled)
EventEmitter2 x 19,888,106 ops/sec ±21.58% (15 runs sampled)
dripEmitter x 16,986,010 ops/sec ±10.06% (17 runs sampled)
ReactiveProperty x 16,948,009 ops/sec ±11.12% (17 runs sampled)
EventEmitter x 15,681,473 ops/sec ±3.25% (15 runs sampled)
EventEmitter3 x 16,382,500 ops/sec ±17.40% (17 runs sampled)
observ x 9,531,144 ops/sec ±7.40% (17 runs sampled)
event-signal x 5,817,311 ops/sec ±11.85% (17 runs sampled)
RXJS x 5,207,671 ops/sec ±5.63% (17 runs sampled)
d3-dispatch x 3,367,148 ops/sec ±3.39% (17 runs sampled)
pull-pushable x 3,489,097 ops/sec ±8.22% (15 runs sampled)
dripEmitterEnhanced x 2,132,219 ops/sec ±5.69% (16 runs sampled)
barracks x 1,523,787 ops/sec ±54.23% (12 runs sampled)
minivents x 823,740 ops/sec ±7.66% (17 runs sampled)
JS-Signals x 693,346 ops/sec ±4.57% (16 runs sampled)
namespace-emitter x 646,120 ops/sec ±2.47% (17 runs sampled)
pull-notify x 612,503 ops/sec ±4.20% (17 runs sampled)
signal-emitter x 600,077 ops/sec ±8.75% (15 runs sampled)
observable x 498,407 ops/sec ±6.28% (15 runs sampled)
```

_Fastest is **xstream**_

## emit one value - two listeners

```
Theoretical max x 23,992,315 ops/sec ±4.52% (15 runs sampled) *burn in*
MicroSignals x 16,745,373 ops/sec ±4.22% (17 runs sampled)
MiniSignals x 15,776,260 ops/sec ±4.30% (17 runs sampled)
signal-lite x 14,876,457 ops/sec ±3.80% (17 runs sampled)
push-stream x 14,352,571 ops/sec ±3.82% (18 runs sampled)
push-stream-patch x 13,906,462 ops/sec ±4.42% (17 runs sampled)
dripEmitter x 13,542,037 ops/sec ±3.13% (17 runs sampled)
xstream x 12,929,996 ops/sec ±6.18% (17 runs sampled)
ReactiveProperty x 11,762,974 ops/sec ±7.17% (16 runs sampled)
EventEmitter3 x 10,383,245 ops/sec ±10.16% (14 runs sampled)
EventEmitter x 7,623,581 ops/sec ±9.71% (17 runs sampled)
observ x 6,182,500 ops/sec ±2.18% (15 runs sampled)
event-signal x 5,378,846 ops/sec ±5.76% (15 runs sampled)
RXJS x 3,925,528 ops/sec ±6.37% (15 runs sampled)
EventEmitter2 x 3,703,540 ops/sec ±12.01% (16 runs sampled)
d3-dispatch x 1,978,939 ops/sec ±3.68% (18 runs sampled)
dripEmitterEnhanced x 1,975,792 ops/sec ±5.05% (17 runs sampled)
signal-emitter x 682,901 ops/sec ±3.05% (14 runs sampled)
JS-Signals x 586,800 ops/sec ±4.98% (17 runs sampled)
pull-notify x 491,843 ops/sec ±4.83% (15 runs sampled)
observable x 485,429 ops/sec ±5.31% (17 runs sampled)
namespace-emitter x 483,145 ops/sec ±12.02% (16 runs sampled)
minivents x 455,501 ops/sec ±6.87% (15 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - with context

```
Theoretical max x 30,323,099 ops/sec ±4.34% (15 runs sampled) *burn in*
MiniSignals x 18,261,109 ops/sec ±4.01% (14 runs sampled)
MicroSignals x 17,927,292 ops/sec ±4.52% (17 runs sampled)
signal-lite x 16,689,907 ops/sec ±4.24% (17 runs sampled)
EventEmitter3 x 15,008,583 ops/sec ±3.56% (18 runs sampled)
ReactiveProperty x 15,318,960 ops/sec ±5.91% (17 runs sampled)
push-stream x 14,875,618 ops/sec ±3.69% (17 runs sampled)
dripEmitter x 11,876,539 ops/sec ±14.05% (15 runs sampled)
EventEmitter x 8,841,810 ops/sec ±3.72% (17 runs sampled)
event-signal x 5,286,509 ops/sec ±4.68% (17 runs sampled)
RXJS x 4,440,525 ops/sec ±3.02% (17 runs sampled)
EventEmitter2 x 4,509,302 ops/sec ±9.03% (15 runs sampled)
dripEmitterEnhanced x 2,034,259 ops/sec ±2.98% (17 runs sampled)
signal-emitter x 689,984 ops/sec ±8.12% (15 runs sampled)
JS-Signals x 534,703 ops/sec ±3.36% (17 runs sampled)
pull-notify x 456,773 ops/sec ±9.67% (15 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## emit variable number of values

```
Theoretical max x 6,579,940 ops/sec ±5.69% (13 runs sampled) *burn in*
MiniSignals x 4,137,613 ops/sec ±3.92% (16 runs sampled)
signal-lite x 3,835,002 ops/sec ±5.61% (15 runs sampled)
EventEmitter x 2,079,063 ops/sec ±4.03% (15 runs sampled)
EventEmitter3 x 1,099,905 ops/sec ±2.85% (17 runs sampled)
EventEmitter2 x 678,705 ops/sec ±3.81% (17 runs sampled)
dripEmitterEnhanced x 370,419 ops/sec ±6.23% (15 runs sampled)
signal-emitter x 157,925 ops/sec ±6.71% (13 runs sampled)
JS-Signals x 138,996 ops/sec ±8.35% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventEmitter3 x 47,917,474 ops/sec ±4.42% (17 runs sampled)
EventDispatcher x 44,280,146 ops/sec ±11.67% (14 runs sampled)
MiniSignals x 35,910,942 ops/sec ±3.30% (15 runs sampled)
DripEmitter x 42,889,286 ops/sec ±25.77% (15 runs sampled)
Theoretical max x 42,617,226 ops/sec ±26.24% (13 runs sampled) *burn in*
EventEmitter2 x 30,194,669 ops/sec ±3.30% (15 runs sampled)
EventEmitter x 24,995,925 ops/sec ±3.63% (17 runs sampled)
DripEmitterEnhanced x 20,194,082 ops/sec ±7.15% (16 runs sampled)
push-stream x 13,626,660 ops/sec ±4.14% (15 runs sampled)
JS-Signals x 1,976,129 ops/sec ±17.81% (15 runs sampled)
ReactiveProperty x 1,351,431 ops/sec ±14.89% (14 runs sampled)
pull-notify x 937,090 ops/sec ±12.82% (14 runs sampled)
```

_Fastest is **EventEmitter3, EventDispatcher, DripEmitter**_
