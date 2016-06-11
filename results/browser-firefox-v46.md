# Tests

```
✔ Platform [pass: 1, fail: 0, duration: 2ms]
✔ init [pass: 24, fail: 0, duration: 1ms]
✔ emit variable values [pass: 27, fail: 0, duration: 1ms]
✔ emit with context [pass: 45, fail: 0, duration: 3ms]
✔ emit one value - two listeners [pass: 66, fail: 0, duration: 2ms]
✔ emit one value - one listener [pass: 48, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 30, fail: 0, duration: 1ms]
✔ emit with bound function [pass: 45, fail: 0, duration: 2ms]
✔ emit one object [pass: 51, fail: 0, duration: 1ms]
✔ emit one object [pass: 32, fail: 0, duration: 2ms]
✔ emit many values [pass: 30, fail: 0]
✔ emit multiple arrays [pass: 45, fail: 0, duration: 1ms]
✔ add-remove [pass: 20, fail: 0, duration: 9ms]
```

# Summary

- duration: 26ms
- planned: 464
- assertions: 464
- pass: 464
- fail: 0

# Comments

# Platform

Firefox 46.0 on OS X 10.11

# init

## benchmarks

```
EventEmitter3 x 62,859,656 ops/sec ±3.10% (10 runs sampled)
Theoretical max x 60,998,118 ops/sec ±7.19% (10 runs sampled) *burn in*
DripEmitter x 51,746,812 ops/sec ±4.31% (10 runs sampled)
EventDispatcher x 53,652,646 ops/sec ±12.00% (10 runs sampled)
EventEmitter2 x 36,117,635 ops/sec ±2.29% (10 runs sampled)
EventEmitter x 30,408,348 ops/sec ±5.60% (10 runs sampled)
MiniSignals x 29,937,252 ops/sec ±10.46% (10 runs sampled)
JS-Signals x 15,357,274 ops/sec ±14.12% (10 runs sampled)
push-stream x 11,708,158 ops/sec ±4.36% (10 runs sampled)
DripEmitterEnhanced x 11,778,671 ops/sec ±19.15% (10 runs sampled)
pull-notify x 8,390,934 ops/sec ±12.58% (10 runs sampled)
ReactiveProperty x 3,185,140 ops/sec ±14.32% (10 runs sampled)
```

_Fastest is **EventEmitter3**_

# emit variable values

## benchmarks

```
Theoretical max x 59,315,449 ops/sec ±4.92% (10 runs sampled) *burn in*
MiniSignals x 5,861,085 ops/sec ±7.19% (10 runs sampled)
EventEmitter3 x 3,420,845 ops/sec ±3.47% (10 runs sampled)
EventEmitter2 x 1,848,449 ops/sec ±10.48% (10 runs sampled)
signal-lite x 436,422 ops/sec ±3.75% (10 runs sampled)
dripEmitterEnhanced x 438,825 ops/sec ±6.11% (10 runs sampled)
signal-emitter x 278,484 ops/sec ±4.29% (10 runs sampled)
EventEmitter x 229,975 ops/sec ±3.34% (10 runs sampled)
JS-Signals x 172,377 ops/sec ±12.40% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit with context

## benchmarks

```
Theoretical max x 87,261,796 ops/sec ±5.03% (10 runs sampled) *burn in*
push-stream x 34,989,321 ops/sec ±3.16% (10 runs sampled)
MiniSignals x 22,324,075 ops/sec ±9.35% (10 runs sampled)
dripEmitter x 18,865,049 ops/sec ±4.23% (10 runs sampled)
EventEmitter3 x 17,190,470 ops/sec ±8.56% (10 runs sampled)
ReactiveProperty x 15,525,397 ops/sec ±14.66% (10 runs sampled)
event-signal x 11,123,117 ops/sec ±5.12% (10 runs sampled)
EventEmitter2 x 9,830,281 ops/sec ±5.41% (10 runs sampled)
RXJS x 7,479,149 ops/sec ±8.21% (10 runs sampled)
signal-lite x 1,670,141 ops/sec ±4.44% (10 runs sampled)
dripEmitterEnhanced x 1,193,277 ops/sec ±5.20% (10 runs sampled)
EventEmitter x 1,075,063 ops/sec ±2.79% (10 runs sampled)
signal-emitter x 1,066,515 ops/sec ±8.25% (10 runs sampled)
JS-Signals x 757,335 ops/sec ±6.50% (10 runs sampled)
pull-notify x 354,944 ops/sec ±79.19% (10 runs sampled)
```

_Fastest is **push-stream**_

# emit one value - two listeners

## benchmarks

```
Theoretical max x 134,270,915 ops/sec ±7.23% (10 runs sampled) *burn in*
ReactiveProperty x 51,188,246 ops/sec ±4.07% (10 runs sampled)
MicroSignals x 51,259,437 ops/sec ±5.83% (10 runs sampled)
push-stream x 43,521,201 ops/sec ±2.93% (10 runs sampled)
push-stream-patch x 43,972,799 ops/sec ±4.15% (10 runs sampled)
MiniSignals x 29,551,084 ops/sec ±4.93% (10 runs sampled)
observ x 22,473,348 ops/sec ±4.83% (10 runs sampled)
dripEmitter x 21,519,926 ops/sec ±2.85% (10 runs sampled)
EventEmitter3 x 17,271,483 ops/sec ±3.63% (10 runs sampled)
event-signal x 12,733,614 ops/sec ±2.89% (10 runs sampled)
d3-dispatch x 11,552,120 ops/sec ±4.47% (10 runs sampled)
EventEmitter2 x 10,858,925 ops/sec ±1.99% (10 runs sampled)
RXJS x 8,323,072 ops/sec ±4.38% (10 runs sampled)
dripEmitterEnhanced x 1,948,344 ops/sec ±4.97% (10 runs sampled)
signal-lite x 1,832,868 ops/sec ±1.64% (10 runs sampled)
signal-emitter x 1,250,068 ops/sec ±6.40% (10 runs sampled)
EventEmitter x 1,071,155 ops/sec ±2.68% (10 runs sampled)
minivents x 854,836 ops/sec ±5.15% (10 runs sampled)
pull-notify x 830,962 ops/sec ±2.32% (10 runs sampled)
JS-Signals x 838,059 ops/sec ±6.07% (10 runs sampled)
namespace-emitter x 661,011 ops/sec ±2.17% (10 runs sampled)
observable x 508,915 ops/sec ±16.42% (10 runs sampled)
```

_Fastest is **ReactiveProperty, MicroSignals**_

# emit one value - one listener

## benchmarks

```
Theoretical max x 262,931,034 ops/sec ±2.89% (10 runs sampled) *burn in*
mini-pipe x 91,638,516 ops/sec ±3.22% (10 runs sampled)
MicroSignals x 77,829,049 ops/sec ±3.18% (10 runs sampled)
push-stream x 59,952,297 ops/sec ±13.28% (10 runs sampled)
push-stream-patch x 50,938,990 ops/sec ±3.86% (10 runs sampled)
MiniSignals x 47,588,615 ops/sec ±2.76% (10 runs sampled)
observ x 35,434,927 ops/sec ±3.76% (10 runs sampled)
ReactiveProperty x 34,675,923 ops/sec ±1.86% (10 runs sampled)
dripEmitter x 25,150,276 ops/sec ±3.47% (10 runs sampled)
EventEmitter2 x 22,234,350 ops/sec ±3.32% (10 runs sampled)
EventEmitter3 x 21,270,513 ops/sec ±13.50% (10 runs sampled)
event-signal x 15,198,936 ops/sec ±1.71% (10 runs sampled)
d3-dispatch x 13,991,629 ops/sec ±2.80% (10 runs sampled)
barracks x 14,048,673 ops/sec ±3.46% (10 runs sampled)
RXJS x 12,003,577 ops/sec ±6.78% (10 runs sampled)
EventEmitter x 4,403,725 ops/sec ±5.38% (10 runs sampled)
signal-lite x 2,781,585 ops/sec ±2.12% (10 runs sampled)
minivents x 1,502,829 ops/sec ±3.85% (10 runs sampled)
dripEmitterEnhanced x 1,421,090 ops/sec ±2.82% (10 runs sampled)
signal-emitter x 1,319,799 ops/sec ±3.00% (10 runs sampled)
JS-Signals x 1,162,448 ops/sec ±4.89% (10 runs sampled)
pull-notify x 848,774 ops/sec ±3.34% (10 runs sampled)
namespace-emitter x 679,346 ops/sec ±2.63% (10 runs sampled)
observable x 488,711 ops/sec ±6.55% (10 runs sampled)
```

_Fastest is **mini-pipe**_

# emit many listeners

## benchmarks

```
ReactiveProperty x 23,151,605 ops/sec ±1.84% (10 runs sampled)
push-stream x 21,708,747 ops/sec ±3.08% (10 runs sampled)
MiniSignals x 6,531,003 ops/sec ±2.40% (10 runs sampled)
Theoretical max x 5,699,819 ops/sec ±2.25% (10 runs sampled) *burn in*
dripEmitter x 5,119,805 ops/sec ±2.44% (10 runs sampled)
EventEmitter3 x 4,621,708 ops/sec ±4.26% (10 runs sampled)
event-signal x 4,269,129 ops/sec ±0.90% (10 runs sampled)
EventEmitter2 x 3,574,985 ops/sec ±0.66% (10 runs sampled)
RXJS x 2,484,687 ops/sec ±1.26% (10 runs sampled)
dripEmitterEnhanced x 1,473,905 ops/sec ±2.92% (10 runs sampled)
signal-emitter x 1,066,015 ops/sec ±2.60% (10 runs sampled)
signal-lite x 521,494 ops/sec ±1.73% (10 runs sampled)
EventEmitter x 420,436 ops/sec ±2.41% (10 runs sampled)
JS-Signals x 327,917 ops/sec ±3.07% (10 runs sampled)
minivents x 216,923 ops/sec ±2.68% (10 runs sampled)
```

_Fastest is **ReactiveProperty**_

# emit with bound function

## benchmarks

```
Theoretical max x 92,370,339 ops/sec ±2.65% (10 runs sampled) *burn in*
push-stream x 36,255,711 ops/sec ±3.36% (10 runs sampled)
ReactiveProperty x 31,470,665 ops/sec ±2.26% (10 runs sampled)
MiniSignals x 25,857,641 ops/sec ±2.82% (10 runs sampled)
dripEmitter x 20,486,301 ops/sec ±2.67% (10 runs sampled)
EventEmitter3 x 16,958,578 ops/sec ±2.73% (10 runs sampled)
event-signal x 12,497,673 ops/sec ±2.54% (10 runs sampled)
EventEmitter2 x 10,771,272 ops/sec ±2.65% (10 runs sampled)
RXJS x 8,789,885 ops/sec ±3.31% (10 runs sampled)
dripEmitterEnhanced x 1,973,846 ops/sec ±3.00% (10 runs sampled)
signal-lite x 1,735,007 ops/sec ±2.07% (10 runs sampled)
signal-emitter x 1,279,079 ops/sec ±3.33% (10 runs sampled)
EventEmitter x 1,091,979 ops/sec ±5.64% (10 runs sampled)
JS-Signals x 840,920 ops/sec ±5.11% (10 runs sampled)
pull-notify x 316,630 ops/sec ±110.98% (10 runs sampled)
```

_Fastest is **push-stream**_

# emit one object

## benchmarks

```
ReactiveProperty x 10,510,084 ops/sec ±2.27% (10 runs sampled)
Theoretical max x 4,419,834 ops/sec ±2.28% (10 runs sampled) *burn in*
push-stream x 3,725,459 ops/sec ±3.54% (10 runs sampled)
MiniSignals x 2,974,642 ops/sec ±2.89% (10 runs sampled)
MicroSignals x 2,721,188 ops/sec ±6.13% (10 runs sampled)
dripEmitter x 2,572,509 ops/sec ±2.71% (10 runs sampled)
EventEmitter3 x 2,335,671 ops/sec ±2.71% (10 runs sampled)
event-signal x 2,041,463 ops/sec ±2.37% (10 runs sampled)
EventEmitter2 x 1,842,138 ops/sec ±2.38% (10 runs sampled)
RXJS x 1,691,185 ops/sec ±1.94% (10 runs sampled)
EventDispatcher x 1,570,258 ops/sec ±2.93% (10 runs sampled)
dripEmitterEnhanced x 555,548 ops/sec ±2.26% (10 runs sampled)
signal-lite x 492,926 ops/sec ±1.93% (10 runs sampled)
signal-emitter x 371,025 ops/sec ±3.40% (10 runs sampled)
EventEmitter x 304,433 ops/sec ±4.07% (10 runs sampled)
JS-Signals x 266,812 ops/sec ±4.19% (10 runs sampled)
pull-notify x 239,095 ops/sec ±12.10% (10 runs sampled)
```

_Fastest is **ReactiveProperty**_

## benchmarks

```
ReactiveProperty x 13,462,658 ops/sec ±1.56% (10 runs sampled)
Theoretical max x 4,499,362 ops/sec ±6.54% (10 runs sampled) *burn in*
push-stream x 3,969,139 ops/sec ±2.18% (10 runs sampled)
mini-pipe x 4,055,598 ops/sec ±4.62% (10 runs sampled)
MiniSignals x 3,319,848 ops/sec ±3.15% (10 runs sampled)
dripEmitter x 2,675,515 ops/sec ±3.34% (10 runs sampled)
EventEmitter3 x 2,565,042 ops/sec ±3.39% (10 runs sampled)
EventEmitter2 x 2,340,960 ops/sec ±3.08% (10 runs sampled)
event-signal x 2,211,256 ops/sec ±1.68% (10 runs sampled)
RXJS x 1,972,272 ops/sec ±3.56% (10 runs sampled)
EventDispatcher x 1,603,079 ops/sec ±10.88% (10 runs sampled)
EventEmitter x 876,158 ops/sec ±2.34% (10 runs sampled)
signal-lite x 647,665 ops/sec ±2.95% (10 runs sampled)
dripEmitterEnhanced x 429,805 ops/sec ±1.81% (10 runs sampled)
signal-emitter x 374,404 ops/sec ±2.19% (10 runs sampled)
JS-Signals x 334,227 ops/sec ±2.77% (10 runs sampled)
```

_Fastest is **ReactiveProperty**_

# emit many values

## benchmarks

```
Theoretical max x 136,246,405 ops/sec ±5.78% (10 runs sampled) *burn in*
MiniSignals x 25,671,808 ops/sec ±5.71% (10 runs sampled)
EventEmitter3 x 7,262,138 ops/sec ±6.59% (10 runs sampled)
EventEmitter2 x 5,764,108 ops/sec ±5.11% (10 runs sampled)
dripEmitterEnhanced x 1,549,056 ops/sec ±10.74% (10 runs sampled)
signal-lite x 1,041,152 ops/sec ±5.62% (10 runs sampled)
signal-emitter x 902,898 ops/sec ±6.53% (10 runs sampled)
JS-Signals x 411,920 ops/sec ±1.91% (10 runs sampled)
EventEmitter x 415,648 ops/sec ±8.59% (10 runs sampled)
minivents x 294,723 ops/sec ±3.10% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit multiple arrays

## benchmarks

```
Theoretical max x 23,681,318 ops/sec ±2.39% (10 runs sampled) *burn in*
push-stream x 16,311,081 ops/sec ±2.67% (10 runs sampled)
ReactiveProperty x 9,776,906 ops/sec ±3.74% (10 runs sampled)
MiniSignals x 7,055,206 ops/sec ±3.08% (10 runs sampled)
dripEmitter x 5,085,378 ops/sec ±11.36% (10 runs sampled)
EventEmitter3 x 4,571,962 ops/sec ±2.86% (10 runs sampled)
event-signal x 3,706,157 ops/sec ±4.36% (10 runs sampled)
EventEmitter2 x 3,069,793 ops/sec ±2.93% (10 runs sampled)
RXJS x 2,731,466 ops/sec ±3.12% (10 runs sampled)
dripEmitterEnhanced x 616,158 ops/sec ±6.24% (10 runs sampled)
signal-lite x 587,660 ops/sec ±2.01% (10 runs sampled)
signal-emitter x 405,265 ops/sec ±2.32% (10 runs sampled)
EventEmitter x 349,773 ops/sec ±3.35% (10 runs sampled)
JS-Signals x 295,925 ops/sec ±1.80% (10 runs sampled)
pull-notify x 255,017 ops/sec ±19.57% (10 runs sampled)
```

_Fastest is **push-stream**_

# add-remove

## benchmarks

```
dripEmitter x 29,529,850 ops/sec ±4.08% (10 runs sampled)
ReactiveProperty x 18,559,631 ops/sec ±5.84% (10 runs sampled)
MiniSignals x 11,530,204 ops/sec ±2.33% (10 runs sampled)
EventEmitter3 x 5,847,110 ops/sec ±2.93% (10 runs sampled)
pushStream x 5,037,878 ops/sec ±5.73% (10 runs sampled)
EventDispatcher x 4,785,045 ops/sec ±4.25% (10 runs sampled)
EventEmitter x 2,666,963 ops/sec ±8.80% (10 runs sampled)
EventEmitter2 x 2,281,351 ops/sec ±7.20% (10 runs sampled)
dripEmitterEnhanced x 505,945 ops/sec ±2.80% (10 runs sampled)
JS-Signals x 468,033 ops/sec ±19.77% (10 runs sampled)
```

_Fastest is **dripEmitter**_
