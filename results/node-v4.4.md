# Tests

```
✔ Platform [pass: 1, fail: 0, duration: 1ms]
✔ init [pass: 24, fail: 0, duration: 1ms]
✔ emit variable values [pass: 27, fail: 0, duration: 1ms]
✔ emit with context [pass: 45, fail: 0, duration: 4ms]
✔ emit one value - two listeners [pass: 66, fail: 0, duration: 2ms]
✔ emit one value - one listener [pass: 48, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 30, fail: 0, duration: 1ms]
✔ emit with bound function [pass: 45, fail: 0, duration: 1ms]
✔ emit one object [pass: 51, fail: 0, duration: 2ms]
✔ emit one object [pass: 32, fail: 0]
✔ emit many values [pass: 30, fail: 0, duration: 4ms]
✔ emit multiple arrays [pass: 45, fail: 0, duration: 1ms]
✔ add-remove [pass: 20, fail: 0, duration: 17ms]
```

# Summary

- duration: 36ms
- planned: 464
- assertions: 464
- pass: 464
- fail: 0

# Comments

# Platform

Node.js 4.4.5 on Darwin 64-bit

# init

## benchmarks

```
EventDispatcher x 61,657,456 ops/sec ±3.24% (10 runs sampled)
Theoretical max x 62,701,237 ops/sec ±5.08% (10 runs sampled) *burn in*
EventEmitter3 x 59,036,272 ops/sec ±2.07% (10 runs sampled)
DripEmitter x 59,209,938 ops/sec ±3.91% (10 runs sampled)
MiniSignals x 41,062,294 ops/sec ±3.65% (10 runs sampled)
EventEmitter2 x 34,076,488 ops/sec ±5.14% (10 runs sampled)
EventEmitter x 29,651,421 ops/sec ±2.86% (10 runs sampled)
DripEmitterEnhanced x 24,185,290 ops/sec ±4.40% (10 runs sampled)
push-stream x 16,380,667 ops/sec ±6.23% (10 runs sampled)
JS-Signals x 2,386,735 ops/sec ±15.12% (10 runs sampled)
ReactiveProperty x 1,330,588 ops/sec ±16.57% (10 runs sampled)
pull-notify x 1,142,728 ops/sec ±17.87% (10 runs sampled)
```

_Fastest is **EventDispatcher, DripEmitter**_

# emit variable values

## benchmarks

```
Theoretical max x 8,457,647 ops/sec ±3.69% (10 runs sampled) *burn in*
MiniSignals x 4,842,391 ops/sec ±3.42% (10 runs sampled)
signal-lite x 4,384,468 ops/sec ±3.52% (10 runs sampled)
EventEmitter x 2,474,094 ops/sec ±3.10% (10 runs sampled)
EventEmitter3 x 2,157,431 ops/sec ±7.41% (10 runs sampled)
EventEmitter2 x 1,082,594 ops/sec ±3.61% (10 runs sampled)
dripEmitterEnhanced x 685,327 ops/sec ±3.73% (10 runs sampled)
signal-emitter x 157,197 ops/sec ±5.72% (10 runs sampled)
JS-Signals x 152,719 ops/sec ±5.20% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit with context

## benchmarks

```
signal-lite x 20,188,980 ops/sec ±2.15% (10 runs sampled)
MiniSignals x 18,722,023 ops/sec ±8.15% (10 runs sampled)
EventEmitter3 x 14,725,866 ops/sec ±11.19% (10 runs sampled)
event-signal x 6,006,728 ops/sec ±9.29% (10 runs sampled)
Theoretical max x 4,194,826 ops/sec ±4.13% (10 runs sampled) *burn in*
dripEmitter x 3,259,319 ops/sec ±2.65% (10 runs sampled)
push-stream x 3,396,379 ops/sec ±8.71% (10 runs sampled)
EventEmitter x 3,133,864 ops/sec ±4.33% (10 runs sampled)
ReactiveProperty x 3,005,452 ops/sec ±5.47% (10 runs sampled)
EventEmitter2 x 2,465,730 ops/sec ±4.94% (10 runs sampled)
RXJS x 2,081,212 ops/sec ±4.52% (10 runs sampled)
dripEmitterEnhanced x 1,826,630 ops/sec ±2.13% (10 runs sampled)
pull-notify x 844,731 ops/sec ±6.47% (10 runs sampled)
signal-emitter x 658,024 ops/sec ±4.27% (10 runs sampled)
JS-Signals x 610,419 ops/sec ±4.61% (10 runs sampled)
```

_Fastest is **signal-lite, MiniSignals**_

# emit one value - two listeners

## benchmarks

```
Theoretical max x 26,630,539 ops/sec ±2.33% (10 runs sampled) *burn in*
MicroSignals x 18,513,413 ops/sec ±3.32% (10 runs sampled)
MiniSignals x 18,187,584 ops/sec ±6.58% (10 runs sampled)
signal-lite x 17,463,542 ops/sec ±4.92% (10 runs sampled)
push-stream-patch x 16,061,476 ops/sec ±3.80% (10 runs sampled)
push-stream x 16,340,522 ops/sec ±6.66% (10 runs sampled)
dripEmitter x 14,020,342 ops/sec ±4.88% (10 runs sampled)
ReactiveProperty x 13,696,239 ops/sec ±3.69% (10 runs sampled)
EventEmitter3 x 13,332,116 ops/sec ±12.36% (10 runs sampled)
EventEmitter x 10,705,960 ops/sec ±5.57% (10 runs sampled)
observ x 6,464,390 ops/sec ±4.59% (10 runs sampled)
event-signal x 6,150,874 ops/sec ±4.97% (10 runs sampled)
EventEmitter2 x 5,286,786 ops/sec ±3.32% (10 runs sampled)
RXJS x 4,587,007 ops/sec ±4.97% (10 runs sampled)
d3-dispatch x 4,482,329 ops/sec ±6.52% (10 runs sampled)
dripEmitterEnhanced x 3,060,843 ops/sec ±6.11% (10 runs sampled)
observable x 1,455,447 ops/sec ±3.76% (10 runs sampled)
pull-notify x 1,050,237 ops/sec ±8.29% (10 runs sampled)
JS-Signals x 592,474 ops/sec ±2.74% (10 runs sampled)
signal-emitter x 622,465 ops/sec ±10.48% (10 runs sampled)
namespace-emitter x 574,168 ops/sec ±7.75% (10 runs sampled)
minivents x 471,821 ops/sec ±3.38% (10 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals, signal-lite**_

# emit one value - one listener

## benchmarks

```
Theoretical max x 42,432,481 ops/sec ±5.90% (10 runs sampled) *burn in*
MicroSignals x 33,247,438 ops/sec ±2.93% (10 runs sampled)
MiniSignals x 30,386,267 ops/sec ±5.36% (10 runs sampled)
mini-pipe x 29,417,389 ops/sec ±3.59% (10 runs sampled)
signal-lite x 26,466,988 ops/sec ±4.07% (10 runs sampled)
push-stream x 24,185,344 ops/sec ±3.52% (10 runs sampled)
push-stream-patch x 22,771,803 ops/sec ±7.56% (10 runs sampled)
EventEmitter2 x 21,979,592 ops/sec ±3.91% (10 runs sampled)
ReactiveProperty x 22,150,278 ops/sec ±4.81% (10 runs sampled)
dripEmitter x 21,040,022 ops/sec ±4.74% (10 runs sampled)
EventEmitter3 x 20,980,178 ops/sec ±5.15% (10 runs sampled)
EventEmitter x 18,009,804 ops/sec ±6.85% (10 runs sampled)
observ x 10,340,408 ops/sec ±6.47% (10 runs sampled)
event-signal x 7,074,124 ops/sec ±6.93% (10 runs sampled)
RXJS x 5,948,060 ops/sec ±4.94% (10 runs sampled)
d3-dispatch x 6,131,392 ops/sec ±8.65% (10 runs sampled)
barracks x 5,192,318 ops/sec ±5.92% (10 runs sampled)
dripEmitterEnhanced x 3,437,463 ops/sec ±3.37% (10 runs sampled)
observable x 2,197,188 ops/sec ±4.72% (10 runs sampled)
pull-notify x 1,518,975 ops/sec ±5.97% (10 runs sampled)
minivents x 855,320 ops/sec ±3.19% (10 runs sampled)
JS-Signals x 664,414 ops/sec ±2.70% (10 runs sampled)
signal-emitter x 637,969 ops/sec ±4.35% (10 runs sampled)
namespace-emitter x 587,327 ops/sec ±4.04% (10 runs sampled)
```

_Fastest is **MicroSignals**_

# emit many listeners

## benchmarks

```
Theoretical max x 5,303,366 ops/sec ±4.18% (10 runs sampled) *burn in*
dripEmitter x 4,578,512 ops/sec ±4.87% (10 runs sampled)
push-stream x 4,592,064 ops/sec ±5.60% (10 runs sampled)
signal-lite x 4,528,905 ops/sec ±6.33% (10 runs sampled)
MiniSignals x 4,711,919 ops/sec ±10.76% (10 runs sampled)
ReactiveProperty x 3,947,952 ops/sec ±3.05% (10 runs sampled)
EventEmitter3 x 4,043,766 ops/sec ±6.04% (10 runs sampled)
EventEmitter x 3,901,810 ops/sec ±5.24% (10 runs sampled)
event-signal x 3,136,764 ops/sec ±4.21% (10 runs sampled)
EventEmitter2 x 2,781,291 ops/sec ±3.73% (10 runs sampled)
dripEmitterEnhanced x 2,086,878 ops/sec ±3.41% (10 runs sampled)
RXJS x 1,653,491 ops/sec ±4.64% (10 runs sampled)
signal-emitter x 543,462 ops/sec ±5.73% (10 runs sampled)
JS-Signals x 406,726 ops/sec ±10.89% (10 runs sampled)
minivents x 106,669 ops/sec ±2.98% (10 runs sampled)
```

_Fastest is **dripEmitter, push-stream, signal-lite, MiniSignals**_

# emit with bound function

## benchmarks

```
Theoretical max x 4,335,860 ops/sec ±3.66% (10 runs sampled) *burn in*
dripEmitter x 3,559,880 ops/sec ±3.43% (10 runs sampled)
push-stream x 3,453,187 ops/sec ±3.39% (10 runs sampled)
EventEmitter3 x 3,356,881 ops/sec ±3.97% (10 runs sampled)
ReactiveProperty x 3,213,095 ops/sec ±3.86% (10 runs sampled)
EventEmitter x 3,113,296 ops/sec ±4.82% (10 runs sampled)
event-signal x 2,576,994 ops/sec ±4.87% (10 runs sampled)
EventEmitter2 x 2,476,052 ops/sec ±4.43% (10 runs sampled)
RXJS x 2,219,757 ops/sec ±4.81% (10 runs sampled)
MiniSignals x 2,170,847 ops/sec ±4.11% (10 runs sampled)
signal-lite x 2,045,901 ops/sec ±3.62% (10 runs sampled)
dripEmitterEnhanced x 1,857,121 ops/sec ±3.46% (10 runs sampled)
pull-notify x 847,064 ops/sec ±6.46% (10 runs sampled)
signal-emitter x 514,454 ops/sec ±12.83% (10 runs sampled)
JS-Signals x 470,867 ops/sec ±6.51% (10 runs sampled)
```

_Fastest is **dripEmitter, push-stream**_

# emit one object

## benchmarks

```
Theoretical max x 9,881,142 ops/sec ±3.28% (10 runs sampled) *burn in*
ReactiveProperty x 5,685,683 ops/sec ±3.16% (10 runs sampled)
MiniSignals x 5,910,737 ops/sec ±8.10% (10 runs sampled)
signal-lite x 5,629,586 ops/sec ±4.21% (10 runs sampled)
push-stream x 5,571,250 ops/sec ±4.84% (10 runs sampled)
MicroSignals x 5,692,360 ops/sec ±11.72% (10 runs sampled)
dripEmitter x 4,568,640 ops/sec ±4.94% (10 runs sampled)
EventEmitter3 x 4,037,503 ops/sec ±2.91% (10 runs sampled)
EventEmitter x 3,450,756 ops/sec ±3.82% (10 runs sampled)
EventDispatcher x 2,868,869 ops/sec ±3.55% (10 runs sampled)
event-signal x 1,971,820 ops/sec ±5.12% (10 runs sampled)
EventEmitter2 x 1,651,860 ops/sec ±5.99% (10 runs sampled)
RXJS x 1,491,239 ops/sec ±3.27% (10 runs sampled)
dripEmitterEnhanced x 934,070 ops/sec ±4.91% (10 runs sampled)
pull-notify x 348,870 ops/sec ±4.81% (10 runs sampled)
signal-emitter x 221,362 ops/sec ±4.57% (10 runs sampled)
JS-Signals x 191,668 ops/sec ±5.44% (10 runs sampled)
```

_Fastest is **ReactiveProperty, MiniSignals, signal-lite, push-stream, MicroSignals**_

## benchmarks

```
Theoretical max x 12,924,775 ops/sec ±5.03% (10 runs sampled) *burn in*
MiniSignals x 10,122,401 ops/sec ±5.48% (10 runs sampled)
mini-pipe x 9,772,194 ops/sec ±4.71% (10 runs sampled)
signal-lite x 9,044,706 ops/sec ±5.25% (10 runs sampled)
push-stream x 8,212,837 ops/sec ±3.70% (10 runs sampled)
ReactiveProperty x 8,054,908 ops/sec ±7.24% (10 runs sampled)
dripEmitter x 7,397,594 ops/sec ±3.16% (10 runs sampled)
EventEmitter2 x 7,156,523 ops/sec ±3.10% (10 runs sampled)
EventEmitter3 x 6,687,368 ops/sec ±3.54% (10 runs sampled)
EventEmitter x 6,118,076 ops/sec ±3.00% (10 runs sampled)
EventDispatcher x 3,709,538 ops/sec ±4.61% (10 runs sampled)
event-signal x 2,445,595 ops/sec ±3.41% (10 runs sampled)
RXJS x 1,965,521 ops/sec ±5.40% (10 runs sampled)
dripEmitterEnhanced x 1,069,221 ops/sec ±5.43% (10 runs sampled)
signal-emitter x 209,873 ops/sec ±4.10% (10 runs sampled)
JS-Signals x 197,416 ops/sec ±4.81% (10 runs sampled)
```

_Fastest is **MiniSignals, mini-pipe**_

# emit many values

## benchmarks

```
Theoretical max x 19,414,195 ops/sec ±4.08% (10 runs sampled) *burn in*
MiniSignals x 15,001,702 ops/sec ±3.96% (10 runs sampled)
signal-lite x 14,474,319 ops/sec ±7.20% (10 runs sampled)
EventEmitter x 2,597,816 ops/sec ±4.16% (10 runs sampled)
EventEmitter3 x 2,511,763 ops/sec ±5.11% (10 runs sampled)
EventEmitter2 x 1,939,867 ops/sec ±3.32% (10 runs sampled)
dripEmitterEnhanced x 1,598,162 ops/sec ±3.35% (10 runs sampled)
signal-emitter x 379,490 ops/sec ±5.24% (10 runs sampled)
JS-Signals x 244,685 ops/sec ±5.98% (10 runs sampled)
minivents x 153,295 ops/sec ±3.08% (10 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

# emit multiple arrays

## benchmarks

```
Theoretical max x 13,576,359 ops/sec ±5.51% (10 runs sampled) *burn in*
signal-lite x 6,481,101 ops/sec ±4.90% (10 runs sampled)
push-stream x 6,394,050 ops/sec ±4.41% (10 runs sampled)
MiniSignals x 6,727,254 ops/sec ±11.54% (10 runs sampled)
dripEmitter x 5,296,857 ops/sec ±3.90% (10 runs sampled)
ReactiveProperty x 5,267,341 ops/sec ±5.37% (10 runs sampled)
EventEmitter3 x 4,972,775 ops/sec ±3.64% (10 runs sampled)
EventEmitter x 3,889,763 ops/sec ±4.58% (10 runs sampled)
event-signal x 2,165,051 ops/sec ±3.91% (10 runs sampled)
EventEmitter2 x 1,733,521 ops/sec ±4.73% (10 runs sampled)
RXJS x 1,565,289 ops/sec ±4.00% (10 runs sampled)
dripEmitterEnhanced x 1,032,101 ops/sec ±6.44% (10 runs sampled)
pull-notify x 356,671 ops/sec ±3.45% (10 runs sampled)
signal-emitter x 228,044 ops/sec ±3.54% (10 runs sampled)
JS-Signals x 202,300 ops/sec ±8.50% (10 runs sampled)
```

_Fastest is **signal-lite, push-stream, MiniSignals**_

# add-remove

## benchmarks

```
dripEmitter x 22,810,070 ops/sec ±5.77% (10 runs sampled)
MiniSignals x 16,758,909 ops/sec ±3.90% (10 runs sampled)
EventDispatcher x 5,175,038 ops/sec ±5.36% (10 runs sampled)
pushStream x 3,814,480 ops/sec ±2.70% (10 runs sampled)
EventEmitter x 3,865,656 ops/sec ±17.42% (10 runs sampled)
ReactiveProperty x 3,191,716 ops/sec ±4.62% (10 runs sampled)
EventEmitter3 x 1,845,674 ops/sec ±5.37% (10 runs sampled)
EventEmitter2 x 1,320,443 ops/sec ±4.38% (10 runs sampled)
JS-Signals x 731,101 ops/sec ±3.12% (10 runs sampled)
dripEmitterEnhanced x 168,494 ops/sec ±7.51% (10 runs sampled)
```

_Fastest is **dripEmitter**_
