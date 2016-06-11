# Tests

```
✔ Platform [pass: 1, fail: 0, duration: 2ms]
✔ init [pass: 24, fail: 0, duration: 1ms]
✔ emit variable values [pass: 27, fail: 0, duration: 1ms]
✔ emit with context [pass: 45, fail: 0, duration: 2ms]
✔ emit one value - two listeners [pass: 66, fail: 0, duration: 9ms]
✔ emit one value - one listener [pass: 48, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 30, fail: 0, duration: 2ms]
✔ emit with bound function [pass: 45, fail: 0, duration: 1ms]
✔ emit one object [pass: 51, fail: 0, duration: 1ms]
✔ emit one object [pass: 32, fail: 0, duration: 2ms]
✔ emit many values [pass: 30, fail: 0]
✔ emit multiple arrays [pass: 45, fail: 0, duration: 1ms]
✔ add-remove [pass: 20, fail: 0, duration: 5ms]
```

# Summary

- duration: 28ms
- planned: 464
- assertions: 464
- pass: 464
- fail: 0

# Comments

# Platform

Chrome 51.0.2704.84 on OS X 10.11.2

# init

## benchmarks

```
EventDispatcher x 47,204,468 ops/sec ±7.22% (10 runs sampled)
DripEmitter x 45,788,157 ops/sec ±4.29% (10 runs sampled)
Theoretical max x 45,201,696 ops/sec ±4.95% (10 runs sampled) *burn in*
EventEmitter3 x 44,297,310 ops/sec ±5.87% (10 runs sampled)
EventEmitter x 33,967,270 ops/sec ±3.87% (10 runs sampled)
EventEmitter2 x 29,503,525 ops/sec ±3.67% (10 runs sampled)
MiniSignals x 26,964,885 ops/sec ±7.14% (10 runs sampled)
DripEmitterEnhanced x 18,902,535 ops/sec ±4.14% (10 runs sampled)
push-stream x 13,594,718 ops/sec ±6.27% (10 runs sampled)
JS-Signals x 1,961,500 ops/sec ±7.83% (10 runs sampled)
ReactiveProperty x 1,165,568 ops/sec ±11.60% (10 runs sampled)
pull-notify x 936,829 ops/sec ±9.39% (10 runs sampled)
```

_Fastest is **EventDispatcher, DripEmitter, EventEmitter3**_

# emit variable values

## benchmarks

```
Theoretical max x 7,242,274 ops/sec ±4.22% (10 runs sampled) *burn in*
MiniSignals x 4,147,094 ops/sec ±13.45% (10 runs sampled)
signal-lite x 3,649,062 ops/sec ±12.75% (10 runs sampled)
EventEmitter3 x 1,032,531 ops/sec ±16.18% (10 runs sampled)
EventEmitter2 x 721,435 ops/sec ±4.44% (10 runs sampled)
dripEmitterEnhanced x 438,849 ops/sec ±2.18% (10 runs sampled)
signal-emitter x 314,806 ops/sec ±2.58% (10 runs sampled)
JS-Signals x 121,683 ops/sec ±3.87% (10 runs sampled)
EventEmitter x 109,986 ops/sec ±10.92% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit with context

## benchmarks

```
Theoretical max x 32,545,052 ops/sec ±3.24% (10 runs sampled) *burn in*
signal-lite x 16,927,740 ops/sec ±4.95% (10 runs sampled)
MiniSignals x 17,718,360 ops/sec ±19.49% (10 runs sampled)
push-stream x 15,609,022 ops/sec ±5.31% (10 runs sampled)
EventEmitter3 x 14,396,218 ops/sec ±4.32% (10 runs sampled)
ReactiveProperty x 14,375,284 ops/sec ±17.94% (10 runs sampled)
dripEmitter x 12,918,285 ops/sec ±6.12% (10 runs sampled)
event-signal x 5,959,482 ops/sec ±7.94% (10 runs sampled)
RXJS x 4,478,897 ops/sec ±2.57% (10 runs sampled)
EventEmitter2 x 4,604,570 ops/sec ±8.04% (10 runs sampled)
dripEmitterEnhanced x 1,862,618 ops/sec ±16.30% (10 runs sampled)
signal-emitter x 1,405,150 ops/sec ±5.39% (10 runs sampled)
pull-notify x 1,400,438 ops/sec ±6.85% (10 runs sampled)
JS-Signals x 515,667 ops/sec ±6.94% (10 runs sampled)
EventEmitter x 505,227 ops/sec ±10.48% (10 runs sampled)
```

_Fastest is **signal-lite**_

# emit one value - two listeners

## benchmarks

```
Theoretical max x 22,734,014 ops/sec ±9.38% (10 runs sampled) *burn in*
MiniSignals x 16,598,468 ops/sec ±8.93% (10 runs sampled)
MicroSignals x 15,770,272 ops/sec ±5.26% (10 runs sampled)
push-stream-patch x 14,400,772 ops/sec ±3.92% (10 runs sampled)
signal-lite x 14,427,898 ops/sec ±5.11% (10 runs sampled)
dripEmitter x 13,650,903 ops/sec ±5.56% (10 runs sampled)
push-stream x 13,698,798 ops/sec ±7.03% (10 runs sampled)
ReactiveProperty x 13,367,844 ops/sec ±5.71% (10 runs sampled)
EventEmitter3 x 12,799,483 ops/sec ±6.92% (10 runs sampled)
observ x 5,648,148 ops/sec ±2.88% (10 runs sampled)
event-signal x 5,783,210 ops/sec ±5.69% (10 runs sampled)
EventEmitter2 x 4,795,635 ops/sec ±5.70% (10 runs sampled)
RXJS x 3,944,474 ops/sec ±4.88% (10 runs sampled)
d3-dispatch x 2,265,241 ops/sec ±7.48% (10 runs sampled)
dripEmitterEnhanced x 2,133,111 ops/sec ±4.79% (10 runs sampled)
signal-emitter x 1,454,231 ops/sec ±3.84% (10 runs sampled)
pull-notify x 1,310,803 ops/sec ±5.66% (10 runs sampled)
observable x 692,813 ops/sec ±13.24% (10 runs sampled)
EventEmitter x 533,536 ops/sec ±4.06% (10 runs sampled)
JS-Signals x 478,347 ops/sec ±11.06% (10 runs sampled)
namespace-emitter x 436,996 ops/sec ±5.74% (10 runs sampled)
minivents x 323,780 ops/sec ±2.70% (10 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals, signal-lite**_

# emit one value - one listener

## benchmarks

```
Theoretical max x 35,492,635 ops/sec ±14.80% (10 runs sampled) *burn in*
MicroSignals x 30,341,925 ops/sec ±7.68% (10 runs sampled)
mini-pipe x 26,152,680 ops/sec ±6.88% (10 runs sampled)
MiniSignals x 26,911,765 ops/sec ±14.24% (10 runs sampled)
signal-lite x 24,431,817 ops/sec ±4.74% (10 runs sampled)
dripEmitter x 20,994,007 ops/sec ±4.60% (10 runs sampled)
EventEmitter2 x 20,635,840 ops/sec ±5.17% (10 runs sampled)
push-stream x 19,687,505 ops/sec ±6.96% (10 runs sampled)
ReactiveProperty x 18,731,719 ops/sec ±6.49% (10 runs sampled)
EventEmitter3 x 18,955,789 ops/sec ±13.89% (10 runs sampled)
push-stream-patch x 17,699,836 ops/sec ±26.31% (10 runs sampled)
observ x 9,221,196 ops/sec ±2.39% (10 runs sampled)
EventEmitter x 9,845,963 ops/sec ±18.98% (10 runs sampled)
event-signal x 6,740,063 ops/sec ±8.82% (10 runs sampled)
RXJS x 5,433,408 ops/sec ±4.56% (10 runs sampled)
barracks x 4,615,205 ops/sec ±7.45% (10 runs sampled)
d3-dispatch x 4,356,452 ops/sec ±5.93% (10 runs sampled)
pull-notify x 2,404,157 ops/sec ±5.72% (10 runs sampled)
dripEmitterEnhanced x 2,303,838 ops/sec ±4.35% (10 runs sampled)
signal-emitter x 1,334,403 ops/sec ±7.33% (10 runs sampled)
observable x 742,092 ops/sec ±5.53% (10 runs sampled)
minivents x 639,255 ops/sec ±2.97% (10 runs sampled)
JS-Signals x 551,415 ops/sec ±5.11% (10 runs sampled)
namespace-emitter x 509,381 ops/sec ±3.01% (10 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

# emit many listeners

## benchmarks

```
MiniSignals x 4,792,210 ops/sec ±5.89% (10 runs sampled)
push-stream x 4,608,055 ops/sec ±6.37% (10 runs sampled)
signal-lite x 4,494,799 ops/sec ±5.85% (10 runs sampled)
dripEmitter x 4,268,506 ops/sec ±5.26% (10 runs sampled)
Theoretical max x 4,465,835 ops/sec ±12.12% (10 runs sampled) *burn in*
ReactiveProperty x 4,021,277 ops/sec ±4.29% (10 runs sampled)
EventEmitter3 x 3,971,649 ops/sec ±7.18% (10 runs sampled)
event-signal x 2,634,168 ops/sec ±5.41% (10 runs sampled)
EventEmitter2 x 2,432,910 ops/sec ±4.27% (10 runs sampled)
RXJS x 1,550,236 ops/sec ±4.28% (10 runs sampled)
dripEmitterEnhanced x 1,524,387 ops/sec ±7.30% (10 runs sampled)
signal-emitter x 1,110,550 ops/sec ±5.15% (10 runs sampled)
EventEmitter x 316,261 ops/sec ±3.36% (10 runs sampled)
JS-Signals x 277,272 ops/sec ±5.05% (10 runs sampled)
minivents x 81,012 ops/sec ±3.68% (10 runs sampled)
```

_Fastest is **MiniSignals, push-stream**_

# emit with bound function

## benchmarks

```
Theoretical max x 28,474,626 ops/sec ±10.65% (10 runs sampled) *burn in*
push-stream x 16,778,729 ops/sec ±2.43% (10 runs sampled)
dripEmitter x 14,447,553 ops/sec ±2.76% (10 runs sampled)
ReactiveProperty x 16,220,991 ops/sec ±16.96% (10 runs sampled)
EventEmitter3 x 13,644,951 ops/sec ±6.34% (10 runs sampled)
MiniSignals x 7,275,577 ops/sec ±9.92% (10 runs sampled)
event-signal x 5,717,026 ops/sec ±6.59% (10 runs sampled)
signal-lite x 5,889,353 ops/sec ±16.15% (10 runs sampled)
EventEmitter2 x 5,060,949 ops/sec ±6.60% (10 runs sampled)
RXJS x 4,811,571 ops/sec ±6.48% (10 runs sampled)
dripEmitterEnhanced x 2,180,627 ops/sec ±14.62% (10 runs sampled)
pull-notify x 1,616,300 ops/sec ±2.62% (10 runs sampled)
signal-emitter x 1,478,598 ops/sec ±3.25% (10 runs sampled)
EventEmitter x 616,214 ops/sec ±1.77% (10 runs sampled)
JS-Signals x 562,537 ops/sec ±2.23% (10 runs sampled)
```

_Fastest is **push-stream, ReactiveProperty**_

# emit one object

## benchmarks

```
Theoretical max x 7,623,776 ops/sec ±11.59% (10 runs sampled) *burn in*
MiniSignals x 5,293,244 ops/sec ±5.15% (10 runs sampled)
MicroSignals x 5,306,484 ops/sec ±6.00% (10 runs sampled)
push-stream x 4,955,702 ops/sec ±3.88% (10 runs sampled)
signal-lite x 4,929,481 ops/sec ±4.18% (10 runs sampled)
ReactiveProperty x 4,764,800 ops/sec ±5.12% (10 runs sampled)
EventEmitter3 x 4,416,264 ops/sec ±4.52% (10 runs sampled)
dripEmitter x 4,310,067 ops/sec ±4.00% (10 runs sampled)
EventDispatcher x 2,277,520 ops/sec ±3.42% (10 runs sampled)
event-signal x 1,817,383 ops/sec ±5.60% (10 runs sampled)
EventEmitter2 x 1,610,955 ops/sec ±3.13% (10 runs sampled)
RXJS x 1,428,217 ops/sec ±4.89% (10 runs sampled)
dripEmitterEnhanced x 718,819 ops/sec ±2.82% (10 runs sampled)
signal-emitter x 526,123 ops/sec ±1.54% (10 runs sampled)
pull-notify x 467,433 ops/sec ±2.16% (10 runs sampled)
EventEmitter x 176,710 ops/sec ±3.06% (10 runs sampled)
JS-Signals x 162,146 ops/sec ±3.91% (10 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## benchmarks

```
Theoretical max x 12,236,739 ops/sec ±3.38% (10 runs sampled) *burn in*
mini-pipe x 9,749,645 ops/sec ±5.35% (10 runs sampled)
MiniSignals x 9,489,445 ops/sec ±5.08% (10 runs sampled)
signal-lite x 8,721,929 ops/sec ±4.94% (10 runs sampled)
push-stream x 7,576,541 ops/sec ±6.04% (10 runs sampled)
dripEmitter x 7,338,037 ops/sec ±3.01% (10 runs sampled)
EventEmitter3 x 7,240,795 ops/sec ±3.92% (10 runs sampled)
ReactiveProperty x 7,185,286 ops/sec ±3.21% (10 runs sampled)
EventEmitter2 x 7,054,892 ops/sec ±5.97% (10 runs sampled)
EventDispatcher x 2,980,950 ops/sec ±4.04% (10 runs sampled)
EventEmitter x 3,113,684 ops/sec ±11.93% (10 runs sampled)
event-signal x 2,347,738 ops/sec ±4.22% (10 runs sampled)
RXJS x 1,870,401 ops/sec ±5.03% (10 runs sampled)
dripEmitterEnhanced x 757,409 ops/sec ±3.99% (10 runs sampled)
signal-emitter x 497,968 ops/sec ±6.60% (10 runs sampled)
JS-Signals x 201,329 ops/sec ±6.52% (10 runs sampled)
```

_Fastest is **mini-pipe, MiniSignals**_

# emit many values

## benchmarks

```
Theoretical max x 16,437,162 ops/sec ±11.01% (10 runs sampled) *burn in*
MiniSignals x 14,653,778 ops/sec ±3.64% (10 runs sampled)
signal-lite x 13,381,603 ops/sec ±4.08% (10 runs sampled)
EventEmitter3 x 867,905 ops/sec ±3.05% (10 runs sampled)
EventEmitter2 x 828,840 ops/sec ±3.07% (10 runs sampled)
dripEmitterEnhanced x 695,014 ops/sec ±2.03% (10 runs sampled)
signal-emitter x 585,759 ops/sec ±3.08% (10 runs sampled)
JS-Signals x 123,131 ops/sec ±4.25% (10 runs sampled)
EventEmitter x 122,552 ops/sec ±4.66% (10 runs sampled)
minivents x 64,948 ops/sec ±5.64% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# emit multiple arrays

## benchmarks

```
Theoretical max x 12,980,438 ops/sec ±3.35% (10 runs sampled) *burn in*
MiniSignals x 7,310,297 ops/sec ±3.33% (10 runs sampled)
signal-lite x 6,646,595 ops/sec ±4.61% (10 runs sampled)
push-stream x 6,316,974 ops/sec ±3.80% (10 runs sampled)
ReactiveProperty x 5,214,483 ops/sec ±2.91% (10 runs sampled)
dripEmitter x 5,251,424 ops/sec ±5.60% (10 runs sampled)
EventEmitter3 x 5,154,098 ops/sec ±6.26% (10 runs sampled)
event-signal x 2,102,488 ops/sec ±3.95% (10 runs sampled)
EventEmitter2 x 1,662,761 ops/sec ±12.14% (10 runs sampled)
RXJS x 1,542,492 ops/sec ±4.30% (10 runs sampled)
dripEmitterEnhanced x 782,481 ops/sec ±4.72% (10 runs sampled)
signal-emitter x 541,951 ops/sec ±2.35% (10 runs sampled)
pull-notify x 498,281 ops/sec ±4.21% (10 runs sampled)
JS-Signals x 167,200 ops/sec ±2.81% (10 runs sampled)
EventEmitter x 150,356 ops/sec ±14.94% (10 runs sampled)
```

_Fastest is **MiniSignals**_

# add-remove

## benchmarks

```
dripEmitter x 28,363,697 ops/sec ±3.30% (10 runs sampled)
MiniSignals x 12,422,808 ops/sec ±6.15% (10 runs sampled)
EventDispatcher x 5,049,612 ops/sec ±2.71% (10 runs sampled)
ReactiveProperty x 4,239,759 ops/sec ±15.28% (10 runs sampled)
pushStream x 3,506,897 ops/sec ±6.05% (10 runs sampled)
EventEmitter3 x 2,182,525 ops/sec ±5.13% (10 runs sampled)
EventEmitter x 1,430,501 ops/sec ±10.57% (10 runs sampled)
EventEmitter2 x 1,271,452 ops/sec ±4.04% (10 runs sampled)
JS-Signals x 825,314 ops/sec ±3.44% (10 runs sampled)
dripEmitterEnhanced x 606,859 ops/sec ±3.31% (10 runs sampled)
```

_Fastest is **dripEmitter**_
