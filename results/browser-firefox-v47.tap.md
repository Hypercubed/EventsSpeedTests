# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 0ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 8ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 44, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 60, fail: 0, duration: 2ms]
- ✔ emit one random value - one listener [pass: 54, fail: 0, duration: 5ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 3ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 0ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 54, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 9ms]
- ✔ init [pass: 24, fail: 0, duration: 5ms]

# Summary

- duration: 42ms
- planned: 669
- assertions: 669
- pass: 669
- fail: 0

# Comments

## Platform

Firefox 47.0 on OS X 10.11 NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 29,471,603 ops/sec ±4.10% (11 runs sampled)
ReactiveProperty x 19,531,910 ops/sec ±5.79% (11 runs sampled)
MiniSignals x 11,117,590 ops/sec ±6.46% (11 runs sampled)
EventEmitter3 x 6,285,831 ops/sec ±1.48% (11 runs sampled)
pushStream x 2,887,807 ops/sec ±3.70% (11 runs sampled)
EventDispatcher x 2,818,665 ops/sec ±3.09% (11 runs sampled)
EventEmitter x 2,707,435 ops/sec ±8.41% (10 runs sampled)
EventEmitter2 x 2,268,892 ops/sec ±6.78% (11 runs sampled)
dripEmitterEnhanced x 524,931 ops/sec ±2.10% (11 runs sampled)
JS-Signals x 394,025 ops/sec ±17.75% (11 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 23,461,489 ops/sec ±7.41% (11 runs sampled) *burn in*
push-stream x 16,992,039 ops/sec ±2.70% (11 runs sampled)
MicroSignals x 14,664,911 ops/sec ±1.85% (11 runs sampled)
sister x 13,576,194 ops/sec ±1.60% (11 runs sampled)
ReactiveProperty x 10,167,876 ops/sec ±3.37% (11 runs sampled)
MiniSignals x 7,151,884 ops/sec ±2.56% (11 runs sampled)
dripEmitter x 5,625,102 ops/sec ±2.27% (11 runs sampled)
EventEmitter3 x 4,810,480 ops/sec ±3.52% (11 runs sampled)
event-signal x 3,752,818 ops/sec ±1.90% (11 runs sampled)
EventEmitter2 x 3,092,512 ops/sec ±1.98% (11 runs sampled)
RXJS x 2,585,867 ops/sec ±4.24% (11 runs sampled)
evee x 2,173,490 ops/sec ±3.73% (11 runs sampled)
pull-notify x 816,875 ops/sec ±4.54% (11 runs sampled)
dripEmitterEnhanced x 639,728 ops/sec ±3.54% (11 runs sampled)
signal-lite x 541,686 ops/sec ±1.54% (11 runs sampled)
signal-emitter x 372,743 ops/sec ±4.18% (11 runs sampled)
EventEmitter x 322,587 ops/sec ±4.10% (11 runs sampled)
JS-Signals x 258,745 ops/sec ±3.10% (11 runs sampled)
```

_Fastest is **push-stream**_

## emit many values - two listeners

```
Theoretical max x 65,471,481 ops/sec ±4.34% (11 runs sampled) *burn in*
MiniSignals x 24,912,316 ops/sec ±2.20% (11 runs sampled)
EventEmitter3 x 8,493,296 ops/sec ±2.60% (11 runs sampled)
EventEmitter2 x 6,318,086 ops/sec ±6.67% (10 runs sampled)
dripEmitterEnhanced x 1,798,244 ops/sec ±3.20% (11 runs sampled)
signal-lite x 1,043,310 ops/sec ±1.72% (11 runs sampled)
signal-emitter x 923,376 ops/sec ±3.71% (11 runs sampled)
EventEmitter x 424,675 ops/sec ±4.04% (11 runs sampled)
JS-Signals x 390,306 ops/sec ±2.61% (11 runs sampled)
minivents x 286,745 ops/sec ±2.80% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
ReactiveProperty x 12,527,351 ops/sec ±3.00% (11 runs sampled)
Theoretical max x 4,328,065 ops/sec ±2.34% (11 runs sampled) *burn in*
MicroSignals x 4,036,767 ops/sec ±1.91% (11 runs sampled)
mini-pipe x 4,001,007 ops/sec ±1.92% (11 runs sampled)
push-stream x 3,781,169 ops/sec ±2.58% (11 runs sampled)
MiniSignals x 3,376,475 ops/sec ±1.94% (11 runs sampled)
sister x 3,297,252 ops/sec ±3.34% (11 runs sampled)
dripEmitter x 2,718,638 ops/sec ±2.30% (11 runs sampled)
EventEmitter3 x 2,527,310 ops/sec ±2.04% (11 runs sampled)
EventEmitter2 x 2,491,137 ops/sec ±2.38% (11 runs sampled)
xstream x 2,417,077 ops/sec ±3.69% (11 runs sampled)
event-signal x 2,131,513 ops/sec ±2.55% (11 runs sampled)
RXJS x 1,977,774 ops/sec ±3.06% (11 runs sampled)
evee x 1,792,370 ops/sec ±11.95% (11 runs sampled)
EventDispatcher x 1,405,069 ops/sec ±10.72% (11 runs sampled)
pull-pushable x 1,208,776 ops/sec ±1.82% (11 runs sampled)
pull-notify x 942,451 ops/sec ±7.27% (11 runs sampled)
EventEmitter x 886,462 ops/sec ±1.16% (11 runs sampled)
signal-lite x 573,025 ops/sec ±2.31% (11 runs sampled)
dripEmitterEnhanced x 539,179 ops/sec ±2.50% (11 runs sampled)
signal-emitter x 361,671 ops/sec ±2.35% (11 runs sampled)
JS-Signals x 308,806 ops/sec ±2.24% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one object - two listeners

```
ReactiveProperty x 10,730,351 ops/sec ±2.28% (11 runs sampled)
Theoretical max x 4,200,238 ops/sec ±3.12% (11 runs sampled) *burn in*
push-stream x 3,389,353 ops/sec ±2.47% (11 runs sampled)
dripEmitter x 2,572,917 ops/sec ±2.72% (11 runs sampled)
sister x 2,580,009 ops/sec ±3.15% (11 runs sampled)
MiniSignals x 2,531,446 ops/sec ±1.79% (11 runs sampled)
MicroSignals x 2,508,232 ops/sec ±2.79% (11 runs sampled)
EventEmitter3 x 2,389,053 ops/sec ±3.62% (11 runs sampled)
xstream x 1,861,426 ops/sec ±1.43% (11 runs sampled)
EventEmitter2 x 1,811,530 ops/sec ±2.19% (11 runs sampled)
EventDispatcher x 1,826,951 ops/sec ±3.76% (11 runs sampled)
event-signal x 1,787,165 ops/sec ±2.18% (11 runs sampled)
RXJS x 1,667,432 ops/sec ±2.57% (11 runs sampled)
evee x 1,083,224 ops/sec ±7.51% (11 runs sampled)
pull-notify x 597,860 ops/sec ±3.49% (11 runs sampled)
dripEmitterEnhanced x 469,053 ops/sec ±2.87% (11 runs sampled)
signal-lite x 434,383 ops/sec ±1.44% (10 runs sampled)
signal-emitter x 331,207 ops/sec ±6.51% (11 runs sampled)
EventEmitter x 284,611 ops/sec ±3.58% (11 runs sampled)
JS-Signals x 238,780 ops/sec ±2.98% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one random value - one listener

```
Theoretical max x 114,504,893 ops/sec ±2.89% (11 runs sampled) *burn in*
mini-pipe x 90,613,674 ops/sec ±2.52% (11 runs sampled)
MicroSignals x 67,244,793 ops/sec ±2.33% (11 runs sampled)
push-stream x 65,155,583 ops/sec ±3.43% (11 runs sampled)
push-stream-patch x 63,879,720 ops/sec ±3.07% (11 runs sampled)
ReactiveProperty x 62,600,177 ops/sec ±4.64% (11 runs sampled)
xstream x 59,747,758 ops/sec ±3.27% (11 runs sampled)
observ x 50,095,464 ops/sec ±2.97% (11 runs sampled)
MiniSignals x 41,992,614 ops/sec ±2.59% (11 runs sampled)
evee x 24,035,945 ops/sec ±2.54% (11 runs sampled)
dripEmitter x 22,965,015 ops/sec ±2.56% (11 runs sampled)
EventEmitter3 x 20,997,497 ops/sec ±2.85% (11 runs sampled)
EventEmitter2 x 20,241,661 ops/sec ±3.47% (11 runs sampled)
event-signal x 14,919,718 ops/sec ±1.68% (11 runs sampled)
barracks x 14,873,121 ops/sec ±2.39% (11 runs sampled)
d3-dispatch x 12,595,721 ops/sec ±7.75% (11 runs sampled)
RXJS x 11,866,684 ops/sec ±4.54% (11 runs sampled)
pull-pushable x 6,316,172 ops/sec ±3.72% (11 runs sampled)
pull-notify x 5,381,141 ops/sec ±4.32% (11 runs sampled)
EventEmitter x 4,503,208 ops/sec ±1.87% (11 runs sampled)
signal-lite x 2,496,486 ops/sec ±1.67% (11 runs sampled)
dripEmitterEnhanced x 2,046,847 ops/sec ±5.03% (11 runs sampled)
minivents x 1,288,407 ops/sec ±3.44% (11 runs sampled)
signal-emitter x 1,165,925 ops/sec ±2.80% (11 runs sampled)
JS-Signals x 1,069,335 ops/sec ±2.58% (11 runs sampled)
namespace-emitter x 667,625 ops/sec ±3.45% (11 runs sampled)
observable x 515,161 ops/sec ±13.82% (11 runs sampled)
```

_Fastest is **mini-pipe**_

## emit one random value - two listeners

```
Theoretical max x 68,076,384 ops/sec ±3.35% (11 runs sampled) *burn in*
ReactiveProperty x 46,382,085 ops/sec ±2.46% (11 runs sampled)
MicroSignals x 41,307,600 ops/sec ±2.93% (11 runs sampled)
push-stream-patch x 38,793,320 ops/sec ±4.37% (11 runs sampled)
push-stream x 37,783,805 ops/sec ±4.41% (11 runs sampled)
observ x 36,132,389 ops/sec ±4.16% (11 runs sampled)
MiniSignals x 26,767,723 ops/sec ±2.34% (11 runs sampled)
xstream x 26,943,482 ops/sec ±3.32% (11 runs sampled)
waddup x 23,230,827 ops/sec ±4.78% (11 runs sampled)
dripEmitter x 20,129,107 ops/sec ±5.69% (11 runs sampled)
EventEmitter3 x 17,070,445 ops/sec ±2.81% (11 runs sampled)
evee x 15,620,825 ops/sec ±2.04% (11 runs sampled)
event-signal x 11,712,866 ops/sec ±2.53% (11 runs sampled)
d3-dispatch x 10,801,411 ops/sec ±4.79% (11 runs sampled)
EventEmitter2 x 10,314,158 ops/sec ±3.55% (11 runs sampled)
RXJS x 8,229,338 ops/sec ±2.39% (11 runs sampled)
pull-notify x 2,801,926 ops/sec ±2.42% (11 runs sampled)
dripEmitterEnhanced x 1,847,080 ops/sec ±4.59% (11 runs sampled)
signal-lite x 1,553,213 ops/sec ±4.63% (10 runs sampled)
signal-emitter x 1,191,544 ops/sec ±1.36% (11 runs sampled)
EventEmitter x 1,011,503 ops/sec ±1.77% (11 runs sampled)
JS-Signals x 813,139 ops/sec ±2.18% (11 runs sampled)
minivents x 769,585 ops/sec ±3.78% (11 runs sampled)
namespace-emitter x 544,433 ops/sec ±4.90% (10 runs sampled)
observable x 450,983 ops/sec ±16.70% (10 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - bound function

```
Theoretical max x 94,119,390 ops/sec ±2.45% (11 runs sampled) *burn in*
MicroSignals x 33,467,764 ops/sec ±3.20% (11 runs sampled)
push-stream x 31,077,143 ops/sec ±4.49% (11 runs sampled)
ReactiveProperty x 28,367,579 ops/sec ±2.80% (11 runs sampled)
MiniSignals x 26,029,811 ops/sec ±2.80% (11 runs sampled)
xstream x 23,099,924 ops/sec ±2.74% (11 runs sampled)
dripEmitter x 20,135,874 ops/sec ±3.55% (11 runs sampled)
EventEmitter3 x 17,019,099 ops/sec ±2.53% (11 runs sampled)
event-signal x 11,049,307 ops/sec ±4.66% (11 runs sampled)
EventEmitter2 x 9,910,005 ops/sec ±2.20% (11 runs sampled)
RXJS x 8,595,059 ops/sec ±3.85% (11 runs sampled)
pull-notify x 2,301,806 ops/sec ±2.86% (11 runs sampled)
dripEmitterEnhanced x 1,974,329 ops/sec ±2.80% (11 runs sampled)
signal-lite x 1,706,276 ops/sec ±1.08% (11 runs sampled)
evee x 2,654,422 ops/sec ±68.88% (11 runs sampled)
signal-emitter x 1,162,180 ops/sec ±2.06% (10 runs sampled)
EventEmitter x 1,034,207 ops/sec ±1.81% (11 runs sampled)
JS-Signals x 776,922 ops/sec ±3.71% (11 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - many listeners

```
ReactiveProperty x 20,012,482 ops/sec ±0.67% (11 runs sampled)
push-stream x 17,760,144 ops/sec ±4.55% (11 runs sampled)
MicroSignal x 14,963,773 ops/sec ±3.71% (11 runs sampled)
xstream x 10,744,642 ops/sec ±2.77% (11 runs sampled)
MiniSignals x 6,898,758 ops/sec ±2.62% (11 runs sampled)
Theoretical max x 6,154,360 ops/sec ±3.16% (11 runs sampled) *burn in*
dripEmitter x 5,218,433 ops/sec ±2.20% (11 runs sampled)
evee x 4,807,579 ops/sec ±1.47% (11 runs sampled)
EventEmitter3 x 4,689,917 ops/sec ±2.50% (11 runs sampled)
event-signal x 4,372,402 ops/sec ±0.71% (11 runs sampled)
EventEmitter2 x 3,521,743 ops/sec ±7.85% (10 runs sampled)
RXJS x 2,536,391 ops/sec ±1.32% (11 runs sampled)
dripEmitterEnhanced x 1,511,795 ops/sec ±2.31% (11 runs sampled)
signal-emitter x 989,135 ops/sec ±3.12% (11 runs sampled)
pull-notify x 598,316 ops/sec ±2.44% (11 runs sampled)
signal-lite x 489,388 ops/sec ±1.65% (11 runs sampled)
EventEmitter x 385,587 ops/sec ±3.12% (11 runs sampled)
JS-Signals x 292,971 ops/sec ±4.15% (11 runs sampled)
minivents x 202,338 ops/sec ±2.85% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - one listener

```
Theoretical max x 205,973,248 ops/sec ±2.69% (11 runs sampled) *burn in*
mini-pipe x 94,919,504 ops/sec ±2.77% (11 runs sampled)
ReactiveProperty x 72,373,707 ops/sec ±2.72% (11 runs sampled)
MicroSignals x 72,171,424 ops/sec ±3.54% (11 runs sampled)
xstream x 71,833,927 ops/sec ±3.48% (11 runs sampled)
push-stream x 69,427,970 ops/sec ±3.37% (11 runs sampled)
push-stream-patch x 64,177,740 ops/sec ±4.78% (11 runs sampled)
observ x 51,692,158 ops/sec ±2.48% (11 runs sampled)
sister x 51,688,581 ops/sec ±3.43% (11 runs sampled)
MiniSignals x 46,412,203 ops/sec ±2.41% (11 runs sampled)
evee x 24,579,455 ops/sec ±2.14% (11 runs sampled)
dripEmitter x 24,962,822 ops/sec ±5.31% (11 runs sampled)
EventEmitter3 x 22,898,102 ops/sec ±2.17% (11 runs sampled)
EventEmitter2 x 21,453,758 ops/sec ±3.14% (11 runs sampled)
event-signal x 14,975,544 ops/sec ±2.08% (11 runs sampled)
d3-dispatch x 14,308,565 ops/sec ±2.48% (11 runs sampled)
barracks x 14,470,743 ops/sec ±5.62% (11 runs sampled)
RXJS x 11,325,310 ops/sec ±3.66% (11 runs sampled)
pull-pushable x 6,390,859 ops/sec ±2.21% (11 runs sampled)
pull-notify x 5,459,692 ops/sec ±2.35% (11 runs sampled)
EventEmitter x 4,489,768 ops/sec ±4.83% (11 runs sampled)
signal-lite x 2,613,902 ops/sec ±1.69% (11 runs sampled)
dripEmitterEnhanced x 2,137,544 ops/sec ±2.64% (11 runs sampled)
minivents x 1,403,419 ops/sec ±2.55% (11 runs sampled)
JS-Signals x 1,103,867 ops/sec ±2.89% (11 runs sampled)
signal-emitter x 1,103,315 ops/sec ±3.62% (11 runs sampled)
namespace-emitter x 685,697 ops/sec ±2.66% (11 runs sampled)
observable x 552,218 ops/sec ±3.93% (11 runs sampled)
```

_Fastest is **mini-pipe**_

## emit one value - two listeners

```
Theoretical max x 102,557,854 ops/sec ±4.16% (11 runs sampled) *burn in*
ReactiveProperty x 48,212,336 ops/sec ±1.90% (11 runs sampled)
MicroSignals x 42,996,297 ops/sec ±1.92% (11 runs sampled)
push-stream-patch x 41,305,000 ops/sec ±1.67% (11 runs sampled)
push-stream x 40,634,153 ops/sec ±3.05% (11 runs sampled)
observ x 35,888,430 ops/sec ±2.40% (11 runs sampled)
sister x 34,446,607 ops/sec ±2.45% (11 runs sampled)
xstream x 30,040,657 ops/sec ±2.02% (11 runs sampled)
MiniSignals x 28,450,063 ops/sec ±2.81% (11 runs sampled)
waddup x 23,862,023 ops/sec ±1.90% (11 runs sampled)
dripEmitter x 21,030,132 ops/sec ±2.96% (11 runs sampled)
EventEmitter3 x 17,485,384 ops/sec ±3.09% (11 runs sampled)
evee x 15,979,050 ops/sec ±2.48% (11 runs sampled)
event-signal x 12,481,086 ops/sec ±2.69% (11 runs sampled)
d3-dispatch x 11,458,417 ops/sec ±3.81% (11 runs sampled)
EventEmitter2 x 10,255,656 ops/sec ±3.75% (11 runs sampled)
RXJS x 8,846,208 ops/sec ±2.04% (11 runs sampled)
pull-notify x 2,928,208 ops/sec ±0.62% (11 runs sampled)
dripEmitterEnhanced x 1,950,018 ops/sec ±4.69% (11 runs sampled)
signal-lite x 1,615,412 ops/sec ±2.73% (11 runs sampled)
signal-emitter x 1,194,242 ops/sec ±2.13% (11 runs sampled)
EventEmitter x 988,163 ops/sec ±5.80% (11 runs sampled)
JS-Signals x 817,483 ops/sec ±2.23% (11 runs sampled)
minivents x 813,101 ops/sec ±1.92% (11 runs sampled)
namespace-emitter x 565,299 ops/sec ±2.96% (11 runs sampled)
observable x 459,934 ops/sec ±17.24% (10 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - with context

```
Theoretical max x 79,242,894 ops/sec ±5.09% (11 runs sampled) *burn in*
MicroSignals x 31,391,681 ops/sec ±4.91% (11 runs sampled)
push-stream x 28,186,666 ops/sec ±2.40% (11 runs sampled)
ReactiveProperty x 27,628,448 ops/sec ±3.02% (11 runs sampled)
MiniSignals x 26,670,402 ops/sec ±2.21% (11 runs sampled)
sister x 26,002,544 ops/sec ±3.20% (11 runs sampled)
dripEmitter x 19,940,543 ops/sec ±3.05% (11 runs sampled)
EventEmitter3 x 18,359,854 ops/sec ±4.61% (11 runs sampled)
event-signal x 12,498,963 ops/sec ±1.56% (11 runs sampled)
EventEmitter2 x 10,239,117 ops/sec ±2.81% (11 runs sampled)
RXJS x 8,257,659 ops/sec ±1.65% (11 runs sampled)
evee x 4,067,542 ops/sec ±14.15% (11 runs sampled)
pull-notify x 2,859,888 ops/sec ±3.03% (11 runs sampled)
dripEmitterEnhanced x 2,014,665 ops/sec ±2.23% (11 runs sampled)
signal-lite x 1,654,211 ops/sec ±2.02% (11 runs sampled)
signal-emitter x 1,195,751 ops/sec ±1.32% (11 runs sampled)
EventEmitter x 887,448 ops/sec ±3.77% (11 runs sampled)
JS-Signals x 807,526 ops/sec ±3.21% (11 runs sampled)
```

_Fastest is **MicroSignals**_

## emit variable number of values

```
Theoretical max x 51,154,919 ops/sec ±3.86% (11 runs sampled) *burn in*
MiniSignals x 6,471,249 ops/sec ±6.38% (11 runs sampled)
EventEmitter3 x 3,675,921 ops/sec ±3.88% (11 runs sampled)
EventEmitter2 x 2,146,099 ops/sec ±3.30% (11 runs sampled)
dripEmitterEnhanced x 443,427 ops/sec ±3.68% (11 runs sampled)
signal-lite x 414,866 ops/sec ±1.42% (11 runs sampled)
signal-emitter x 292,414 ops/sec ±1.77% (11 runs sampled)
EventEmitter x 217,514 ops/sec ±6.19% (11 runs sampled)
JS-Signals x 190,558 ops/sec ±3.30% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
EventDispatcher x 70,221,467 ops/sec ±0.94% (11 runs sampled)
EventEmitter3 x 68,219,854 ops/sec ±2.58% (11 runs sampled)
Theoretical max x 66,986,827 ops/sec ±2.45% (11 runs sampled) *burn in*
DripEmitter x 58,142,802 ops/sec ±3.34% (11 runs sampled)
MiniSignals x 36,213,250 ops/sec ±1.56% (11 runs sampled)
EventEmitter2 x 35,949,209 ops/sec ±3.01% (11 runs sampled)
EventEmitter x 31,661,824 ops/sec ±2.34% (11 runs sampled)
JS-Signals x 19,134,852 ops/sec ±2.68% (11 runs sampled)
DripEmitterEnhanced x 14,461,769 ops/sec ±3.51% (11 runs sampled)
push-stream x 12,236,196 ops/sec ±3.50% (11 runs sampled)
pull-notify x 10,126,434 ops/sec ±2.36% (11 runs sampled)
ReactiveProperty x 3,760,122 ops/sec ±3.64% (10 runs sampled)
```

_Fastest is **EventDispatcher, EventEmitter3**_
