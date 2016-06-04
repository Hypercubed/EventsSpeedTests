# Tests

```
✔ Platform [pass: 1, fail: 0, duration: 1ms]
✔ init [pass: 20, fail: 0, duration: 1ms]
✔ emit [pass: 27, fail: 0, duration: 2ms]
✔ emit with context [pass: 39, fail: 0, duration: 3ms]
✔ emit one value - two listeners [pass: 57, fail: 0, duration: 1ms]
✔ emit one value - one listener [pass: 40, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
✔ emit with bound function [pass: 39, fail: 0, duration: 2ms]
✔ emit one object [pass: 45, fail: 0, duration: 1ms]
✔ emit many values [pass: 30, fail: 0, duration: 1ms]
✔ emit multiple arrays [pass: 39, fail: 0, duration: 1ms]
✔ add-remove [pass: 18, fail: 0, duration: 5ms]
```

# Summary

- duration: 20ms
- assertions: 383
- pass: 383
- fail: 0

# Comments

# Platform

Node.js 6.2.0 on Darwin 64-bit

# init

## init

```
EventDispatcher x 49,119,506 ops/sec ±4.36% (10 runs sampled)
DripEmitter x 46,749,448 ops/sec ±6.02% (10 runs sampled)
EventEmitter3 x 45,726,978 ops/sec ±6.28% (10 runs sampled)
MiniSignals x 33,649,205 ops/sec ±7.01% (10 runs sampled)
EventEmitter2 x 30,211,540 ops/sec ±2.04% (10 runs sampled)
Theoretical max x 36,436,043 ops/sec ±43.79% (10 runs sampled) *burn in*
EventEmitter x 25,287,281 ops/sec ±4.83% (10 runs sampled)
DripEmitterEnhanced x 19,037,945 ops/sec ±7.43% (10 runs sampled)
JS-Signals x 1,757,117 ops/sec ±19.71% (10 runs sampled)
ReactiveProperty x 1,212,938 ops/sec ±18.10% (10 runs sampled)
```

_Fastest is **EventDispatcher, DripEmitter, EventEmitter3**_

# emit

## emit

```
Theoretical max x 7,452,386 ops/sec ±3.75% (10 runs sampled) *burn in*
MiniSignals x 4,268,762 ops/sec ±7.10% (10 runs sampled)
signal-lite x 3,991,503 ops/sec ±4.55% (10 runs sampled)
EventEmitter x 2,105,987 ops/sec ±9.31% (10 runs sampled)
EventEmitter3 x 1,074,215 ops/sec ±4.65% (10 runs sampled)
EventEmitter2 x 655,415 ops/sec ±6.86% (10 runs sampled)
dripEmitterEnhanced x 383,339 ops/sec ±2.40% (10 runs sampled)
JS-Signals x 134,526 ops/sec ±8.10% (10 runs sampled)
signal-emitter x 137,334 ops/sec ±14.46% (10 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

# emit with context

## emit with context

```
Theoretical max x 27,745,250 ops/sec ±7.46% (10 runs sampled) *burn in*
MiniSignals x 17,546,838 ops/sec ±4.72% (10 runs sampled)
signal-lite x 15,612,978 ops/sec ±3.99% (10 runs sampled)
ReactiveProperty x 14,929,728 ops/sec ±4.84% (10 runs sampled)
EventEmitter3 x 13,775,666 ops/sec ±4.49% (10 runs sampled)
dripEmitter x 13,211,618 ops/sec ±4.59% (10 runs sampled)
EventEmitter x 7,953,224 ops/sec ±5.35% (10 runs sampled)
event-signal x 5,599,079 ops/sec ±3.96% (10 runs sampled)
EventEmitter2 x 4,413,073 ops/sec ±6.86% (10 runs sampled)
RXJS x 3,910,535 ops/sec ±6.57% (10 runs sampled)
dripEmitterEnhanced x 1,922,321 ops/sec ±4.21% (10 runs sampled)
signal-emitter x 682,386 ops/sec ±4.59% (10 runs sampled)
JS-Signals x 519,570 ops/sec ±7.06% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit one value - two listeners

## emit one value - two listeners

```
Theoretical max x 23,789,275 ops/sec ±6.88% (10 runs sampled) *burn in*
push-stream x 19,265,683 ops/sec ±5.65% (10 runs sampled)
signal-lite x 14,444,168 ops/sec ±5.77% (10 runs sampled)
MiniSignals x 14,764,880 ops/sec ±9.28% (10 runs sampled)
dripEmitter x 13,451,170 ops/sec ±5.29% (10 runs sampled)
ReactiveProperty x 13,021,681 ops/sec ±3.64% (10 runs sampled)
EventEmitter3 x 11,615,751 ops/sec ±9.92% (10 runs sampled)
EventEmitter x 9,101,311 ops/sec ±3.69% (10 runs sampled)
observ x 6,149,924 ops/sec ±4.03% (10 runs sampled)
event-signal x 5,578,947 ops/sec ±4.68% (10 runs sampled)
EventEmitter2 x 4,411,007 ops/sec ±13.68% (10 runs sampled)
RXJS x 3,859,983 ops/sec ±5.84% (10 runs sampled)
d3-dispatch x 1,797,626 ops/sec ±5.68% (10 runs sampled)
dripEmitterEnhanced x 1,753,624 ops/sec ±5.31% (10 runs sampled)
signal-emitter x 690,255 ops/sec ±4.30% (10 runs sampled)
namespace-emitter x 573,355 ops/sec ±5.64% (10 runs sampled)
JS-Signals x 541,575 ops/sec ±3.98% (10 runs sampled)
observable x 476,019 ops/sec ±3.17% (10 runs sampled)
minivents x 450,928 ops/sec ±2.86% (10 runs sampled)
```

_Fastest is **push-stream**_

# emit one value - one listener

## emit one value - one listener

```
Theoretical max x 36,191,757 ops/sec ±10.59% (10 runs sampled) *burn in*
push-stream x 30,937,301 ops/sec ±4.45% (10 runs sampled)
MiniSignals x 27,552,289 ops/sec ±5.28% (10 runs sampled)
signal-lite x 24,612,896 ops/sec ±4.17% (10 runs sampled)
dripEmitter x 21,059,272 ops/sec ±5.79% (10 runs sampled)
EventEmitter3 x 18,995,541 ops/sec ±8.03% (10 runs sampled)
ReactiveProperty x 19,128,801 ops/sec ±12.11% (10 runs sampled)
EventEmitter2 x 17,938,095 ops/sec ±34.40% (10 runs sampled)
EventEmitter x 13,824,714 ops/sec ±6.60% (10 runs sampled)
observ x 10,252,412 ops/sec ±6.09% (10 runs sampled)
event-signal x 6,844,013 ops/sec ±3.23% (10 runs sampled)
RXJS x 5,190,285 ops/sec ±8.39% (10 runs sampled)
barracks x 4,771,946 ops/sec ±2.52% (10 runs sampled)
d3-dispatch x 3,111,234 ops/sec ±4.81% (10 runs sampled)
dripEmitterEnhanced x 1,918,794 ops/sec ±8.00% (10 runs sampled)
minivents x 786,989 ops/sec ±9.32% (10 runs sampled)
JS-Signals x 687,276 ops/sec ±5.42% (10 runs sampled)
signal-emitter x 659,844 ops/sec ±7.43% (10 runs sampled)
namespace-emitter x 625,448 ops/sec ±5.08% (10 runs sampled)
observable x 535,378 ops/sec ±4.31% (10 runs sampled)
```

_Fastest is **push-stream**_

# emit many listeners

## emit many listeners

```
MiniSignals x 4,626,841 ops/sec ±4.62% (10 runs sampled)
Theoretical max x 4,730,650 ops/sec ±7.93% (10 runs sampled) *burn in*
dripEmitter x 4,326,602 ops/sec ±4.95% (10 runs sampled)
signal-lite x 4,187,036 ops/sec ±5.08% (10 runs sampled)
EventEmitter3 x 4,038,210 ops/sec ±4.75% (10 runs sampled)
ReactiveProperty x 3,873,895 ops/sec ±4.82% (10 runs sampled)
EventEmitter x 3,611,600 ops/sec ±3.34% (10 runs sampled)
event-signal x 2,763,065 ops/sec ±4.83% (10 runs sampled)
EventEmitter2 x 2,523,259 ops/sec ±2.71% (10 runs sampled)
RXJS x 1,575,177 ops/sec ±4.85% (10 runs sampled)
dripEmitterEnhanced x 1,418,371 ops/sec ±5.74% (10 runs sampled)
signal-emitter x 556,397 ops/sec ±17.06% (10 runs sampled)
JS-Signals x 260,487 ops/sec ±2.65% (10 runs sampled)
minivents x 104,752 ops/sec ±6.54% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit with bound function

## emit with bound function

```
Theoretical max x 28,248,955 ops/sec ±5.35% (10 runs sampled) *burn in*
ReactiveProperty x 14,317,447 ops/sec ±2.30% (10 runs sampled)
dripEmitter x 12,969,386 ops/sec ±4.16% (10 runs sampled)
EventEmitter3 x 11,576,992 ops/sec ±3.72% (10 runs sampled)
EventEmitter x 8,417,891 ops/sec ±6.89% (10 runs sampled)
MiniSignals x 7,389,469 ops/sec ±7.69% (10 runs sampled)
event-signal x 5,203,765 ops/sec ±3.86% (10 runs sampled)
signal-lite x 5,170,669 ops/sec ±8.89% (10 runs sampled)
EventEmitter2 x 4,721,671 ops/sec ±4.97% (10 runs sampled)
RXJS x 4,026,867 ops/sec ±4.92% (10 runs sampled)
dripEmitterEnhanced x 1,916,624 ops/sec ±2.54% (10 runs sampled)
signal-emitter x 699,044 ops/sec ±5.86% (10 runs sampled)
JS-Signals x 490,259 ops/sec ±4.61% (10 runs sampled)
```

_Fastest is **ReactiveProperty**_

# emit one object

## emit one object

```
Theoretical max x 8,476,845 ops/sec ±4.74% (10 runs sampled) *burn in*
push-stream x 5,472,662 ops/sec ±4.64% (10 runs sampled)
MiniSignals x 4,918,885 ops/sec ±10.35% (10 runs sampled)
signal-lite x 4,782,333 ops/sec ±9.20% (10 runs sampled)
ReactiveProperty x 4,226,828 ops/sec ±5.71% (10 runs sampled)
EventEmitter3 x 4,126,006 ops/sec ±4.39% (10 runs sampled)
dripEmitter x 4,157,207 ops/sec ±5.82% (10 runs sampled)
EventEmitter x 2,688,965 ops/sec ±6.24% (10 runs sampled)
EventDispatcher x 2,310,650 ops/sec ±2.88% (10 runs sampled)
event-signal x 1,777,858 ops/sec ±3.01% (10 runs sampled)
EventEmitter2 x 1,502,670 ops/sec ±4.08% (10 runs sampled)
RXJS x 1,274,362 ops/sec ±10.64% (10 runs sampled)
dripEmitterEnhanced x 552,601 ops/sec ±3.57% (10 runs sampled)
signal-emitter x 222,931 ops/sec ±6.04% (10 runs sampled)
JS-Signals x 172,693 ops/sec ±6.70% (10 runs sampled)
```

_Fastest is **push-stream, MiniSignals**_

# emit many values

## emit many values

```
Theoretical max x 15,966,938 ops/sec ±6.97% (10 runs sampled) *burn in*
MiniSignals x 13,009,829 ops/sec ±1.49% (10 runs sampled)
signal-lite x 11,169,267 ops/sec ±7.67% (10 runs sampled)
EventEmitter3 x 644,918 ops/sec ±6.68% (10 runs sampled)
EventEmitter2 x 640,831 ops/sec ±6.79% (10 runs sampled)
EventEmitter x 618,644 ops/sec ±25.41% (10 runs sampled)
dripEmitterEnhanced x 511,120 ops/sec ±7.30% (10 runs sampled)
signal-emitter x 340,303 ops/sec ±6.27% (10 runs sampled)
JS-Signals x 192,824 ops/sec ±4.51% (10 runs sampled)
minivents x 129,726 ops/sec ±4.75% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit multiple arrays

## emit multiple arrays

```
Theoretical max x 12,042,462 ops/sec ±4.13% (10 runs sampled) *burn in*
MiniSignals x 6,863,322 ops/sec ±3.34% (10 runs sampled)
signal-lite x 5,886,870 ops/sec ±4.70% (10 runs sampled)
dripEmitter x 5,130,596 ops/sec ±4.31% (10 runs sampled)
ReactiveProperty x 4,977,698 ops/sec ±6.15% (10 runs sampled)
EventEmitter3 x 4,650,121 ops/sec ±5.34% (10 runs sampled)
EventEmitter x 3,027,784 ops/sec ±4.87% (10 runs sampled)
event-signal x 1,676,113 ops/sec ±8.04% (10 runs sampled)
EventEmitter2 x 1,502,371 ops/sec ±5.15% (10 runs sampled)
RXJS x 1,397,071 ops/sec ±5.80% (10 runs sampled)
dripEmitterEnhanced x 548,632 ops/sec ±6.20% (10 runs sampled)
JS-Signals x 178,404 ops/sec ±4.52% (10 runs sampled)
signal-emitter x 195,012 ops/sec ±19.11% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# add-remove

## add-remove

```
dripEmitter x 16,903,862 ops/sec ±26.22% (10 runs sampled)
MiniSignals x 12,640,258 ops/sec ±20.23% (10 runs sampled)
EventDispatcher x 4,377,114 ops/sec ±13.09% (10 runs sampled)
ReactiveProperty x 4,012,678 ops/sec ±8.51% (10 runs sampled)
EventEmitter x 3,428,553 ops/sec ±11.11% (10 runs sampled)
EventEmitter2 x 1,141,326 ops/sec ±5.74% (10 runs sampled)
EventEmitter3 x 1,256,399 ops/sec ±21.80% (10 runs sampled)
JS-Signals x 772,267 ops/sec ±2.63% (10 runs sampled)
dripEmitterEnhanced x 461,619 ops/sec ±6.20% (10 runs sampled)
```

_Fastest is **dripEmitter, MiniSignals**_
