# Tests

```
✔ Platform [pass: 1, fail: 0, duration: 2ms]
✔ init [pass: 20, fail: 0]
✔ emit [pass: 27, fail: 0, duration: 10ms]
✔ emit with context [pass: 39, fail: 0, duration: 7ms]
✔ emit one value - two listeners [pass: 57, fail: 0, duration: 2ms]
✔ emit one value - one listener [pass: 40, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
✔ emit with bound function [pass: 39, fail: 0, duration: 3ms]
✔ emit one object [pass: 45, fail: 0, duration: 1ms]
✔ emit many values [pass: 30, fail: 0, duration: 1ms]
✔ emit multiple arrays [pass: 39, fail: 0, duration: 1ms]
✔ add-remove [pass: 18, fail: 0, duration: 14ms]
```

# Summary

- duration: 43ms
- assertions: 383
- pass: 383
- fail: 0

# Comments

# Platform

Node.js 4.4.4 on Darwin 64-bit

# init

## init

```
DripEmitter x 57,739,015 ops/sec ±2.68% (10 runs sampled)
EventDispatcher x 55,835,691 ops/sec ±4.56% (10 runs sampled)
Theoretical max x 55,891,377 ops/sec ±5.54% (10 runs sampled) *burn in*
EventEmitter3 x 54,515,230 ops/sec ±4.12% (10 runs sampled)
MiniSignals x 37,670,567 ops/sec ±5.00% (10 runs sampled)
EventEmitter2 x 33,800,610 ops/sec ±2.59% (10 runs sampled)
DripEmitterEnhanced x 24,526,320 ops/sec ±3.02% (10 runs sampled)
EventEmitter x 25,682,120 ops/sec ±9.62% (10 runs sampled)
JS-Signals x 1,919,869 ops/sec ±16.48% (10 runs sampled)
ReactiveProperty x 1,226,016 ops/sec ±22.30% (10 runs sampled)
```

_Fastest is **DripEmitter, EventDispatcher**_

# emit

## emit

```
Theoretical max x 8,080,614 ops/sec ±5.93% (10 runs sampled) *burn in*
MiniSignals x 4,660,832 ops/sec ±3.40% (10 runs sampled)
signal-lite x 4,215,087 ops/sec ±8.15% (10 runs sampled)
EventEmitter3 x 1,997,039 ops/sec ±5.37% (10 runs sampled)
EventEmitter x 1,919,421 ops/sec ±21.02% (10 runs sampled)
EventEmitter2 x 982,483 ops/sec ±5.87% (10 runs sampled)
dripEmitterEnhanced x 631,276 ops/sec ±7.22% (10 runs sampled)
signal-emitter x 140,401 ops/sec ±4.16% (10 runs sampled)
JS-Signals x 141,010 ops/sec ±12.52% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit with context

## emit with context

```
MiniSignals x 18,939,640 ops/sec ±3.53% (10 runs sampled)
signal-lite x 17,169,958 ops/sec ±5.67% (10 runs sampled)
EventEmitter3 x 13,401,917 ops/sec ±2.24% (10 runs sampled)
event-signal x 5,954,996 ops/sec ±5.27% (10 runs sampled)
Theoretical max x 3,800,582 ops/sec ±12.54% (10 runs sampled) *burn in*
dripEmitter x 3,142,341 ops/sec ±4.27% (10 runs sampled)
ReactiveProperty x 2,953,182 ops/sec ±3.00% (10 runs sampled)
EventEmitter x 2,574,903 ops/sec ±4.62% (10 runs sampled)
EventEmitter2 x 2,332,582 ops/sec ±3.27% (10 runs sampled)
RXJS x 2,151,213 ops/sec ±7.34% (10 runs sampled)
dripEmitterEnhanced x 1,654,753 ops/sec ±4.18% (10 runs sampled)
signal-emitter x 603,064 ops/sec ±5.79% (10 runs sampled)
JS-Signals x 554,970 ops/sec ±3.04% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit one value - two listeners

## emit one value - two listeners

```
Theoretical max x 23,552,132 ops/sec ±6.84% (10 runs sampled) *burn in*
push-stream x 19,350,664 ops/sec ±7.17% (10 runs sampled)
MiniSignals x 17,417,255 ops/sec ±5.70% (10 runs sampled)
signal-lite x 17,156,658 ops/sec ±4.94% (10 runs sampled)
EventEmitter3 x 13,700,238 ops/sec ±2.52% (10 runs sampled)
dripEmitter x 13,919,312 ops/sec ±5.59% (10 runs sampled)
ReactiveProperty x 13,238,152 ops/sec ±6.74% (10 runs sampled)
EventEmitter x 10,449,656 ops/sec ±5.63% (10 runs sampled)
observ x 5,958,533 ops/sec ±13.81% (10 runs sampled)
event-signal x 5,237,464 ops/sec ±9.39% (10 runs sampled)
EventEmitter2 x 4,847,137 ops/sec ±3.09% (10 runs sampled)
RXJS x 3,882,386 ops/sec ±3.94% (10 runs sampled)
d3-dispatch x 3,883,934 ops/sec ±5.51% (10 runs sampled)
dripEmitterEnhanced x 2,979,076 ops/sec ±3.82% (10 runs sampled)
observable x 1,353,476 ops/sec ±4.85% (10 runs sampled)
JS-Signals x 565,816 ops/sec ±6.02% (10 runs sampled)
signal-emitter x 541,925 ops/sec ±5.01% (10 runs sampled)
namespace-emitter x 473,365 ops/sec ±9.71% (10 runs sampled)
minivents x 445,202 ops/sec ±3.32% (10 runs sampled)
```

_Fastest is **push-stream**_

# emit one value - one listener

## emit one value - one listener

```
Theoretical max x 37,625,730 ops/sec ±4.50% (10 runs sampled) *burn in*
push-stream x 31,010,258 ops/sec ±4.43% (10 runs sampled)
MiniSignals x 28,544,690 ops/sec ±3.36% (10 runs sampled)
signal-lite x 23,783,427 ops/sec ±2.37% (10 runs sampled)
EventEmitter2 x 21,569,624 ops/sec ±3.00% (10 runs sampled)
EventEmitter3 x 19,720,245 ops/sec ±2.54% (10 runs sampled)
dripEmitter x 19,711,060 ops/sec ±4.13% (10 runs sampled)
EventEmitter x 17,553,296 ops/sec ±3.54% (10 runs sampled)
ReactiveProperty x 19,486,248 ops/sec ±15.04% (10 runs sampled)
observ x 9,583,291 ops/sec ±9.25% (10 runs sampled)
event-signal x 6,645,796 ops/sec ±7.13% (10 runs sampled)
RXJS x 5,562,077 ops/sec ±6.74% (10 runs sampled)
d3-dispatch x 5,544,498 ops/sec ±11.02% (10 runs sampled)
barracks x 4,699,642 ops/sec ±4.32% (10 runs sampled)
dripEmitterEnhanced x 3,225,005 ops/sec ±4.97% (10 runs sampled)
observable x 1,858,726 ops/sec ±10.02% (10 runs sampled)
minivents x 800,236 ops/sec ±4.22% (10 runs sampled)
signal-emitter x 616,454 ops/sec ±3.61% (10 runs sampled)
namespace-emitter x 536,712 ops/sec ±6.52% (10 runs sampled)
JS-Signals x 528,958 ops/sec ±5.89% (10 runs sampled)
```

_Fastest is **push-stream**_

# emit many listeners

## emit many listeners

```
Theoretical max x 4,719,322 ops/sec ±5.04% (10 runs sampled) *burn in*
MiniSignals x 4,370,025 ops/sec ±8.42% (10 runs sampled)
signal-lite x 4,259,983 ops/sec ±7.70% (10 runs sampled)
dripEmitter x 4,155,855 ops/sec ±5.58% (10 runs sampled)
EventEmitter3 x 3,771,817 ops/sec ±5.73% (10 runs sampled)
ReactiveProperty x 3,705,314 ops/sec ±7.50% (10 runs sampled)
EventEmitter x 3,487,937 ops/sec ±4.91% (10 runs sampled)
event-signal x 2,773,690 ops/sec ±10.57% (10 runs sampled)
EventEmitter2 x 2,400,253 ops/sec ±7.42% (10 runs sampled)
dripEmitterEnhanced x 1,717,222 ops/sec ±5.49% (10 runs sampled)
RXJS x 1,452,445 ops/sec ±16.37% (10 runs sampled)
signal-emitter x 541,640 ops/sec ±5.59% (10 runs sampled)
JS-Signals x 382,411 ops/sec ±5.81% (10 runs sampled)
minivents x 105,210 ops/sec ±1.83% (10 runs sampled)
```

_Fastest is **MiniSignals, signal-lite, dripEmitter**_

# emit with bound function

## emit with bound function

```
Theoretical max x 3,936,624 ops/sec ±11.09% (10 runs sampled) *burn in*
dripEmitter x 3,076,240 ops/sec ±4.19% (10 runs sampled)
EventEmitter x 2,979,427 ops/sec ±2.61% (10 runs sampled)
ReactiveProperty x 2,833,967 ops/sec ±3.15% (10 runs sampled)
EventEmitter3 x 2,795,216 ops/sec ±4.90% (10 runs sampled)
event-signal x 2,501,034 ops/sec ±3.86% (10 runs sampled)
MiniSignals x 2,242,716 ops/sec ±2.67% (10 runs sampled)
EventEmitter2 x 2,196,107 ops/sec ±2.80% (10 runs sampled)
RXJS x 2,146,422 ops/sec ±4.04% (10 runs sampled)
signal-lite x 1,890,729 ops/sec ±7.90% (10 runs sampled)
dripEmitterEnhanced x 1,647,676 ops/sec ±6.49% (10 runs sampled)
JS-Signals x 486,040 ops/sec ±2.58% (10 runs sampled)
signal-emitter x 489,330 ops/sec ±6.95% (10 runs sampled)
```

_Fastest is **dripEmitter, EventEmitter**_

# emit one object

## emit one object

```
Theoretical max x 8,781,912 ops/sec ±4.78% (10 runs sampled) *burn in*
signal-lite x 5,320,298 ops/sec ±2.93% (10 runs sampled)
MiniSignals x 5,401,797 ops/sec ±4.87% (10 runs sampled)
push-stream x 5,420,693 ops/sec ±6.85% (10 runs sampled)
ReactiveProperty x 5,079,153 ops/sec ±3.83% (10 runs sampled)
dripEmitter x 4,257,954 ops/sec ±3.68% (10 runs sampled)
EventEmitter3 x 3,800,901 ops/sec ±6.42% (10 runs sampled)
EventEmitter x 2,959,590 ops/sec ±7.38% (10 runs sampled)
EventDispatcher x 2,340,627 ops/sec ±7.35% (10 runs sampled)
event-signal x 1,694,982 ops/sec ±8.88% (10 runs sampled)
EventEmitter2 x 1,527,509 ops/sec ±4.49% (10 runs sampled)
RXJS x 1,175,709 ops/sec ±8.19% (10 runs sampled)
dripEmitterEnhanced x 886,723 ops/sec ±7.01% (10 runs sampled)
JS-Signals x 180,345 ops/sec ±9.17% (10 runs sampled)
signal-emitter x 176,795 ops/sec ±8.84% (10 runs sampled)
```

_Fastest is **signal-lite, MiniSignals, push-stream, ReactiveProperty**_

# emit many values

## emit many values

```
Theoretical max x 16,061,498 ops/sec ±10.62% (10 runs sampled) *burn in*
MiniSignals x 15,137,104 ops/sec ±4.48% (10 runs sampled)
signal-lite x 12,902,970 ops/sec ±6.12% (10 runs sampled)
EventEmitter x 2,260,065 ops/sec ±4.78% (10 runs sampled)
EventEmitter3 x 2,201,065 ops/sec ±5.70% (10 runs sampled)
EventEmitter2 x 1,831,143 ops/sec ±4.49% (10 runs sampled)
dripEmitterEnhanced x 1,499,267 ops/sec ±4.61% (10 runs sampled)
signal-emitter x 347,750 ops/sec ±3.91% (10 runs sampled)
JS-Signals x 231,470 ops/sec ±4.33% (10 runs sampled)
minivents x 139,047 ops/sec ±4.11% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit multiple arrays

## emit multiple arrays

```
Theoretical max x 11,751,158 ops/sec ±8.87% (10 runs sampled) *burn in*
signal-lite x 6,288,560 ops/sec ±6.46% (10 runs sampled)
MiniSignals x 6,119,263 ops/sec ±6.02% (10 runs sampled)
ReactiveProperty x 5,251,065 ops/sec ±4.28% (10 runs sampled)
dripEmitter x 4,813,020 ops/sec ±4.73% (10 runs sampled)
EventEmitter3 x 4,544,112 ops/sec ±4.48% (10 runs sampled)
EventEmitter x 3,255,483 ops/sec ±4.55% (10 runs sampled)
event-signal x 1,908,013 ops/sec ±11.99% (10 runs sampled)
EventEmitter2 x 1,501,669 ops/sec ±4.70% (10 runs sampled)
RXJS x 1,457,390 ops/sec ±4.06% (10 runs sampled)
dripEmitterEnhanced x 956,090 ops/sec ±3.13% (10 runs sampled)
signal-emitter x 202,121 ops/sec ±4.02% (10 runs sampled)
JS-Signals x 190,610 ops/sec ±4.85% (10 runs sampled)
```

_Fastest is **signal-lite, MiniSignals**_

# add-remove

## add-remove

```
dripEmitter x 21,225,326 ops/sec ±5.93% (10 runs sampled)
MiniSignals x 15,097,512 ops/sec ±5.05% (10 runs sampled)
EventDispatcher x 4,608,416 ops/sec ±5.96% (10 runs sampled)
EventEmitter x 3,630,787 ops/sec ±21.14% (10 runs sampled)
ReactiveProperty x 2,666,798 ops/sec ±2.58% (10 runs sampled)
EventEmitter3 x 1,678,084 ops/sec ±4.25% (10 runs sampled)
EventEmitter2 x 1,111,323 ops/sec ±3.66% (10 runs sampled)
JS-Signals x 645,490 ops/sec ±4.96% (10 runs sampled)
dripEmitterEnhanced x 151,974 ops/sec ±12.44% (10 runs sampled)
```

_Fastest is **dripEmitter**_
