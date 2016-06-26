# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 2ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 48, fail: 0, duration: 8ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 40, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 51, fail: 0, duration: 2ms]
- ✔ emit one value - many listeners [pass: 36, fail: 0, duration: 3ms]
- ✔ emit one value - one listener [pass: 52, fail: 0, duration: 2ms]
- ✔ emit one value - two listeners [pass: 69, fail: 0, duration: 4ms]
- ✔ emit one value - with context [pass: 48, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 2ms]
- ✔ init [pass: 24, fail: 0, duration: 11ms]

# Summary

- duration: 42ms
- planned: 500
- assertions: 500
- pass: 500
- fail: 0

# Comments

## Platform

Firefox 47.0 on OS X 10.11 NODE_ENV = production BENCH = mid

## add and remove

```
dripEmitter x 30,321,920 ops/sec ±2.98% (14 runs sampled)
ReactiveProperty x 18,775,243 ops/sec ±6.48% (15 runs sampled)
EventEmitter3 x 6,151,872 ops/sec ±1.71% (15 runs sampled)
MiniSignals x 7,317,140 ops/sec ±35.67% (15 runs sampled)
pushStream x 2,680,708 ops/sec ±4.80% (14 runs sampled)
EventDispatcher x 2,620,469 ops/sec ±3.72% (14 runs sampled)
EventEmitter x 2,443,929 ops/sec ±5.48% (15 runs sampled)
EventEmitter2 x 2,306,849 ops/sec ±8.81% (14 runs sampled)
dripEmitterEnhanced x 502,336 ops/sec ±2.43% (15 runs sampled)
JS-Signals x 408,392 ops/sec ±17.52% (14 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 24,912,185 ops/sec ±1.71% (15 runs sampled) *burn in*
push-stream x 17,176,602 ops/sec ±2.28% (15 runs sampled)
MicroSignals x 15,114,756 ops/sec ±1.78% (15 runs sampled)
ReactiveProperty x 10,062,384 ops/sec ±1.27% (15 runs sampled)
MiniSignals x 7,054,396 ops/sec ±2.05% (15 runs sampled)
dripEmitter x 5,525,078 ops/sec ±2.02% (15 runs sampled)
EventEmitter3 x 4,759,667 ops/sec ±2.40% (15 runs sampled)
event-signal x 3,590,112 ops/sec ±2.02% (15 runs sampled)
EventEmitter2 x 3,057,493 ops/sec ±1.87% (15 runs sampled)
RXJS x 2,579,605 ops/sec ±2.81% (15 runs sampled)
dripEmitterEnhanced x 655,415 ops/sec ±2.84% (15 runs sampled)
signal-lite x 531,199 ops/sec ±2.31% (15 runs sampled)
signal-emitter x 371,579 ops/sec ±4.41% (15 runs sampled)
EventEmitter x 318,224 ops/sec ±4.31% (15 runs sampled)
JS-Signals x 267,030 ops/sec ±2.66% (15 runs sampled)
pull-notify x 166,722 ops/sec ±63.55% (15 runs sampled)
```

_Fastest is **push-stream**_

## emit many values - two listeners

```
Theoretical max x 103,772,489 ops/sec ±2.26% (15 runs sampled) *burn in*
MiniSignals x 26,076,780 ops/sec ±2.18% (15 runs sampled)
EventEmitter3 x 8,368,753 ops/sec ±3.45% (15 runs sampled)
EventEmitter2 x 6,554,307 ops/sec ±2.35% (15 runs sampled)
dripEmitterEnhanced x 1,661,736 ops/sec ±2.50% (15 runs sampled)
signal-lite x 1,000,179 ops/sec ±3.41% (15 runs sampled)
signal-emitter x 938,588 ops/sec ±2.11% (15 runs sampled)
EventEmitter x 430,322 ops/sec ±2.58% (15 runs sampled)
JS-Signals x 390,904 ops/sec ±2.04% (15 runs sampled)
minivents x 280,600 ops/sec ±4.47% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
ReactiveProperty x 11,571,804 ops/sec ±8.99% (15 runs sampled)
Theoretical max x 4,129,049 ops/sec ±4.83% (14 runs sampled) *burn in*
MicroSignals x 3,781,632 ops/sec ±4.09% (14 runs sampled)
mini-pipe x 3,703,048 ops/sec ±4.65% (14 runs sampled)
push-stream x 3,523,010 ops/sec ±2.25% (14 runs sampled)
MiniSignals x 3,084,627 ops/sec ±6.39% (15 runs sampled)
dripEmitter x 2,562,620 ops/sec ±2.53% (15 runs sampled)
EventEmitter3 x 2,478,800 ops/sec ±3.25% (15 runs sampled)
EventEmitter2 x 2,341,062 ops/sec ±3.78% (15 runs sampled)
xstream x 2,279,807 ops/sec ±6.67% (15 runs sampled)
event-signal x 2,065,228 ops/sec ±2.40% (15 runs sampled)
RXJS x 1,799,988 ops/sec ±4.16% (14 runs sampled)
EventDispatcher x 1,580,834 ops/sec ±4.75% (15 runs sampled)
pull-pushable x 974,252 ops/sec ±5.16% (14 runs sampled)
EventEmitter x 793,979 ops/sec ±2.14% (15 runs sampled)
signal-lite x 599,806 ops/sec ±1.57% (16 runs sampled)
dripEmitterEnhanced x 546,967 ops/sec ±4.03% (15 runs sampled)
signal-emitter x 323,599 ops/sec ±2.04% (14 runs sampled)
JS-Signals x 302,410 ops/sec ±1.63% (14 runs sampled)
pull-notify x 254,079 ops/sec ±16.53% (14 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one object - two listeners

```
ReactiveProperty x 10,086,500 ops/sec ±4.55% (15 runs sampled)
Theoretical max x 3,894,352 ops/sec ±6.08% (15 runs sampled) *burn in*
push-stream x 3,338,020 ops/sec ±3.89% (15 runs sampled)
MiniSignals x 2,843,865 ops/sec ±2.20% (15 runs sampled)
MicroSignals x 2,599,215 ops/sec ±4.53% (15 runs sampled)
dripEmitter x 2,486,352 ops/sec ±4.17% (15 runs sampled)
EventEmitter3 x 2,278,244 ops/sec ±5.51% (15 runs sampled)
EventEmitter2 x 1,741,915 ops/sec ±4.85% (15 runs sampled)
event-signal x 1,652,701 ops/sec ±1.61% (15 runs sampled)
RXJS x 1,555,525 ops/sec ±5.30% (15 runs sampled)
xstream x 1,592,936 ops/sec ±14.62% (13 runs sampled)
EventDispatcher x 1,309,748 ops/sec ±2.84% (14 runs sampled)
dripEmitterEnhanced x 500,171 ops/sec ±5.51% (15 runs sampled)
signal-lite x 425,187 ops/sec ±2.94% (14 runs sampled)
signal-emitter x 343,720 ops/sec ±1.67% (15 runs sampled)
EventEmitter x 266,263 ops/sec ±7.10% (15 runs sampled)
JS-Signals x 236,110 ops/sec ±2.39% (15 runs sampled)
pull-notify x 197,451 ops/sec ±15.36% (15 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - bound function

```
Theoretical max x 90,234,364 ops/sec ±4.33% (14 runs sampled) *burn in*
MicroSignals x 38,338,820 ops/sec ±1.90% (15 runs sampled)
push-stream x 37,048,358 ops/sec ±2.13% (15 runs sampled)
ReactiveProperty x 34,145,624 ops/sec ±2.48% (13 runs sampled)
MiniSignals x 25,909,794 ops/sec ±4.07% (15 runs sampled)
xstream x 25,386,477 ops/sec ±3.87% (15 runs sampled)
dripEmitter x 20,596,568 ops/sec ±3.05% (15 runs sampled)
EventEmitter3 x 15,766,082 ops/sec ±10.46% (15 runs sampled)
event-signal x 11,742,359 ops/sec ±2.29% (15 runs sampled)
EventEmitter2 x 9,291,845 ops/sec ±4.12% (15 runs sampled)
RXJS x 8,665,832 ops/sec ±1.71% (15 runs sampled)
dripEmitterEnhanced x 2,006,927 ops/sec ±2.48% (15 runs sampled)
signal-lite x 1,719,533 ops/sec ±2.63% (15 runs sampled)
signal-emitter x 1,168,953 ops/sec ±2.61% (15 runs sampled)
EventEmitter x 1,051,906 ops/sec ±1.54% (15 runs sampled)
JS-Signals x 851,068 ops/sec ±2.36% (15 runs sampled)
pull-notify x 693,540 ops/sec ±18.29% (15 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - many listeners

```
ReactiveProperty x 18,811,678 ops/sec ±2.77% (15 runs sampled)
push-stream x 17,119,487 ops/sec ±3.27% (14 runs sampled)
MicroSignal x 14,720,082 ops/sec ±2.16% (15 runs sampled)
xstream x 10,449,589 ops/sec ±4.81% (15 runs sampled)
Theoretical max x 6,247,220 ops/sec ±2.16% (14 runs sampled) *burn in*
MiniSignals x 6,247,091 ops/sec ±4.31% (15 runs sampled)
dripEmitter x 4,954,210 ops/sec ±3.03% (15 runs sampled)
EventEmitter3 x 4,756,742 ops/sec ±2.91% (15 runs sampled)
event-signal x 4,134,465 ops/sec ±1.98% (16 runs sampled)
EventEmitter2 x 3,575,139 ops/sec ±3.41% (15 runs sampled)
RXJS x 2,427,176 ops/sec ±1.48% (15 runs sampled)
dripEmitterEnhanced x 1,344,213 ops/sec ±3.53% (14 runs sampled)
signal-emitter x 942,615 ops/sec ±3.25% (15 runs sampled)
signal-lite x 442,939 ops/sec ±5.86% (15 runs sampled)
EventEmitter x 380,761 ops/sec ±4.19% (15 runs sampled)
JS-Signals x 294,483 ops/sec ±3.01% (15 runs sampled)
pull-notify x 240,218 ops/sec ±8.06% (14 runs sampled)
minivents x 194,407 ops/sec ±3.24% (15 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - one listener

```
Theoretical max x 191,898,473 ops/sec ±4.39% (15 runs sampled) *burn in*
mini-pipe x 88,833,884 ops/sec ±4.01% (15 runs sampled)
MicroSignals x 75,361,896 ops/sec ±2.94% (15 runs sampled)
ReactiveProperty x 69,280,870 ops/sec ±2.01% (15 runs sampled)
push-stream x 68,924,410 ops/sec ±3.51% (15 runs sampled)
push-stream-patch x 65,061,012 ops/sec ±1.74% (16 runs sampled)
xstream x 59,053,775 ops/sec ±6.34% (12 runs sampled)
observ x 43,985,692 ops/sec ±6.11% (15 runs sampled)
MiniSignals x 41,785,867 ops/sec ±4.42% (15 runs sampled)
dripEmitter x 24,456,939 ops/sec ±2.61% (15 runs sampled)
EventEmitter3 x 22,310,607 ops/sec ±2.34% (15 runs sampled)
EventEmitter2 x 19,486,397 ops/sec ±4.54% (15 runs sampled)
barracks x 14,938,060 ops/sec ±1.78% (15 runs sampled)
event-signal x 14,287,451 ops/sec ±3.39% (15 runs sampled)
d3-dispatch x 12,285,323 ops/sec ±6.56% (14 runs sampled)
RXJS x 11,055,585 ops/sec ±3.14% (15 runs sampled)
pull-pushable x 5,103,260 ops/sec ±2.47% (15 runs sampled)
EventEmitter x 4,285,838 ops/sec ±1.79% (15 runs sampled)
signal-lite x 2,432,655 ops/sec ±4.49% (15 runs sampled)
dripEmitterEnhanced x 1,922,657 ops/sec ±3.87% (15 runs sampled)
minivents x 1,269,121 ops/sec ±4.20% (15 runs sampled)
signal-emitter x 1,157,940 ops/sec ±2.81% (15 runs sampled)
JS-Signals x 977,080 ops/sec ±7.39% (15 runs sampled)
pull-notify x 873,103 ops/sec ±20.82% (15 runs sampled)
namespace-emitter x 560,347 ops/sec ±10.88% (15 runs sampled)
observable x 472,040 ops/sec ±10.50% (15 runs sampled)
```

_Fastest is **mini-pipe**_

## emit one value - two listeners

```
Theoretical max x 95,075,853 ops/sec ±5.63% (14 runs sampled) *burn in*
ReactiveProperty x 44,942,160 ops/sec ±2.76% (15 runs sampled)
MicroSignals x 41,725,052 ops/sec ±3.00% (15 runs sampled)
push-stream-patch x 39,612,040 ops/sec ±2.70% (15 runs sampled)
push-stream x 38,825,716 ops/sec ±2.89% (15 runs sampled)
observ x 32,696,364 ops/sec ±3.39% (15 runs sampled)
xstream x 28,790,039 ops/sec ±2.87% (15 runs sampled)
MiniSignals x 28,032,274 ops/sec ±2.38% (15 runs sampled)
dripEmitter x 20,338,333 ops/sec ±3.65% (14 runs sampled)
EventEmitter3 x 16,239,312 ops/sec ±4.20% (15 runs sampled)
d3-dispatch x 11,521,883 ops/sec ±2.91% (14 runs sampled)
event-signal x 10,510,607 ops/sec ±1.64% (15 runs sampled)
EventEmitter2 x 9,333,399 ops/sec ±2.82% (15 runs sampled)
RXJS x 7,074,439 ops/sec ±4.67% (15 runs sampled)
dripEmitterEnhanced x 1,988,584 ops/sec ±2.74% (15 runs sampled)
signal-lite x 1,645,045 ops/sec ±2.06% (15 runs sampled)
signal-emitter x 1,183,299 ops/sec ±2.63% (15 runs sampled)
EventEmitter x 1,010,343 ops/sec ±3.03% (15 runs sampled)
JS-Signals x 795,089 ops/sec ±2.12% (15 runs sampled)
pull-notify x 784,720 ops/sec ±2.06% (14 runs sampled)
minivents x 778,723 ops/sec ±1.96% (15 runs sampled)
namespace-emitter x 536,666 ops/sec ±5.29% (14 runs sampled)
observable x 484,399 ops/sec ±9.67% (15 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - with context

```
Theoretical max x 75,390,312 ops/sec ±5.35% (15 runs sampled) *burn in*
push-stream x 27,394,481 ops/sec ±3.50% (15 runs sampled)
MicroSignals x 26,681,235 ops/sec ±5.27% (13 runs sampled)
ReactiveProperty x 25,984,549 ops/sec ±3.32% (15 runs sampled)
MiniSignals x 25,547,965 ops/sec ±7.11% (15 runs sampled)
EventEmitter3 x 18,137,377 ops/sec ±3.77% (15 runs sampled)
dripEmitter x 16,650,093 ops/sec ±3.10% (15 runs sampled)
event-signal x 11,418,708 ops/sec ±8.33% (15 runs sampled)
EventEmitter2 x 9,221,400 ops/sec ±4.07% (15 runs sampled)
RXJS x 7,819,798 ops/sec ±3.51% (15 runs sampled)
dripEmitterEnhanced x 1,823,733 ops/sec ±3.84% (14 runs sampled)
signal-lite x 1,595,460 ops/sec ±2.15% (15 runs sampled)
EventEmitter x 943,298 ops/sec ±1.66% (14 runs sampled)
signal-emitter x 962,765 ops/sec ±4.21% (14 runs sampled)
JS-Signals x 780,337 ops/sec ±3.69% (15 runs sampled)
pull-notify x 615,235 ops/sec ±14.89% (15 runs sampled)
```

_Fastest is **push-stream, MicroSignals, MiniSignals**_

## emit variable number of values

```
Theoretical max x 49,275,369 ops/sec ±2.62% (14 runs sampled) *burn in*
MiniSignals x 6,459,403 ops/sec ±1.57% (15 runs sampled)
EventEmitter3 x 3,533,667 ops/sec ±2.77% (15 runs sampled)
EventEmitter2 x 2,051,398 ops/sec ±3.13% (15 runs sampled)
dripEmitterEnhanced x 493,131 ops/sec ±1.65% (15 runs sampled)
signal-lite x 427,516 ops/sec ±1.90% (15 runs sampled)
signal-emitter x 277,206 ops/sec ±2.46% (15 runs sampled)
EventEmitter x 230,813 ops/sec ±2.30% (14 runs sampled)
JS-Signals x 198,955 ops/sec ±2.54% (15 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventEmitter3 x 67,444,270 ops/sec ±2.74% (14 runs sampled)
EventDispatcher x 67,321,490 ops/sec ±2.73% (15 runs sampled)
Theoretical max x 65,715,248 ops/sec ±2.55% (14 runs sampled) *burn in*
DripEmitter x 58,754,281 ops/sec ±1.94% (15 runs sampled)
EventEmitter2 x 35,438,592 ops/sec ±2.80% (15 runs sampled)
MiniSignals x 35,581,510 ops/sec ±5.01% (14 runs sampled)
EventEmitter x 31,875,780 ops/sec ±3.41% (15 runs sampled)
JS-Signals x 18,185,580 ops/sec ±7.21% (15 runs sampled)
DripEmitterEnhanced x 14,508,942 ops/sec ±2.43% (15 runs sampled)
push-stream x 13,543,108 ops/sec ±2.62% (15 runs sampled)
pull-notify x 10,810,606 ops/sec ±1.83% (14 runs sampled)
ReactiveProperty x 4,018,500 ops/sec ±2.32% (15 runs sampled)
```

_Fastest is **EventEmitter3, EventDispatcher**_
