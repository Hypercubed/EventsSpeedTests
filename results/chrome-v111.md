# Tests

- ✔ add and remove [pass: 12, fail: 0, duration: 2ms]
- ✔ emit one array [pass: 39, fail: 0, duration: 0ms]
- ✔ emit many values - two listeners [pass: 27, fail: 0, duration: 1ms]
- ✔ emit one object - one listener [pass: 26, fail: 0, duration: 0ms]
- ✔ emit one object - two listeners [pass: 39, fail: 0, duration: 1ms]
- ✔ emit one random value - one listener [pass: 34, fail: 0, duration: 0ms]
- ✔ emit one random value - two listeners [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one value - bound function [pass: 36, fail: 0, duration: 0ms]
- ✔ emit one value - many listeners [pass: 26, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 36, fail: 0, duration: 0ms]
- ✔ emit one value - two listeners [pass: 57, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 39, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 24, fail: 0, duration: 0ms]
- ✔ init [pass: 14, fail: 0, duration: 3ms]

# Summary

- duration: 11ms
- planned: 463
- assertions: 463
- pass: 463
- fail: 0

# Comments

## add and remove

```
EventEmitter3 x 65,956,791 ops/sec ±1.83% (11 runs sampled)
ReactiveProperty x 27,474,134 ops/sec ±2.49% (11 runs sampled)
EventEmitter x 13,853,029 ops/sec ±1.79% (11 runs sampled)
EventEmitter2 x 8,260,451 ops/sec ±1.40% (11 runs sampled)
MiniSignals x 8,112,056 ops/sec ±2.32% (11 runs sampled)
JS-Signals x 2,049,043 ops/sec ±0.91% (11 runs sampled)
```

_Fastest is **EventEmitter3**_

## emit one array

```
Theoretical max x 43,724,692 ops/sec ±2.01% (11 runs sampled) *burn in*
MiniSignals x 6,746,916 ops/sec ±1.00% (11 runs sampled)
sister x 6,329,959 ops/sec ±3.30% (11 runs sampled)
ReactiveProperty x 6,051,552 ops/sec ±1.99% (11 runs sampled)
signal-lite x 5,910,483 ops/sec ±1.46% (11 runs sampled)
EventEmitter3 x 5,709,206 ops/sec ±3.80% (11 runs sampled)
evee x 4,911,729 ops/sec ±0.61% (11 runs sampled)
event-signal x 4,429,943 ops/sec ±1.11% (11 runs sampled)
EventEmitter2 x 4,071,336 ops/sec ±0.84% (11 runs sampled)
EventEmitter x 3,744,422 ops/sec ±1.34% (11 runs sampled)
rxjs Subject x 2,643,959 ops/sec ±1.17% (11 runs sampled)
JS-Signals x 1,436,768 ops/sec ±2.78% (11 runs sampled)
signal-emitter x 707,181 ops/sec ±1.19% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit many values - two listeners

```
Theoretical max x 42,700,949 ops/sec ±10.94% (11 runs sampled) *burn in*
MiniSignals x 18,198,959 ops/sec ±2.06% (11 runs sampled)
signal-lite x 16,823,166 ops/sec ±1.43% (11 runs sampled)
EventEmitter3 x 8,397,885 ops/sec ±0.80% (11 runs sampled)
EventEmitter2 x 6,863,917 ops/sec ±0.91% (11 runs sampled)
minivents x 4,438,553 ops/sec ±1.47% (11 runs sampled)
JS-Signals x 3,804,637 ops/sec ±1.06% (11 runs sampled)
EventEmitter x 3,896,330 ops/sec ±10.38% (11 runs sampled)
signal-emitter x 1,900,493 ops/sec ±1.35% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 32,838,139 ops/sec ±2.47% (11 runs sampled) *burn in*
sister x 22,615,352 ops/sec ±5.15% (11 runs sampled)
ReactiveProperty x 17,792,783 ops/sec ±3.61% (11 runs sampled)
MiniSignals x 17,627,559 ops/sec ±3.37% (11 runs sampled)
signal-lite x 16,438,150 ops/sec ±9.06% (11 runs sampled)
EventEmitter3 x 11,894,581 ops/sec ±3.87% (11 runs sampled)
EventEmitter2 x 11,198,772 ops/sec ±1.85% (10 runs sampled)
evee x 10,794,785 ops/sec ±12.58% (11 runs sampled)
event-signal x 6,896,491 ops/sec ±1.31% (11 runs sampled)
EventEmitter x 5,870,629 ops/sec ±0.77% (11 runs sampled)
rxjs Subject x 4,565,212 ops/sec ±2.34% (11 runs sampled)
JS-Signals x 1,767,187 ops/sec ±1.16% (11 runs sampled)
signal-emitter x 738,413 ops/sec ±2.32% (11 runs sampled)
```

_Fastest is **sister**_

## emit one object - two listeners

```
Theoretical max x 23,603,934 ops/sec ±3.47% (11 runs sampled) *burn in*
ReactiveProperty x 6,168,051 ops/sec ±2.96% (11 runs sampled)
MiniSignals x 5,996,823 ops/sec ±1.27% (11 runs sampled)
sister x 5,788,929 ops/sec ±0.70% (11 runs sampled)
signal-lite x 5,436,553 ops/sec ±1.61% (11 runs sampled)
EventEmitter3 x 5,184,096 ops/sec ±1.99% (11 runs sampled)
evee x 4,395,553 ops/sec ±1.78% (11 runs sampled)
event-signal x 4,068,863 ops/sec ±1.09% (11 runs sampled)
EventEmitter2 x 3,754,006 ops/sec ±2.44% (10 runs sampled)
EventEmitter x 3,518,447 ops/sec ±1.16% (11 runs sampled)
rxjs Subject x 2,473,057 ops/sec ±1.28% (11 runs sampled)
JS-Signals x 1,335,303 ops/sec ±3.44% (11 runs sampled)
signal-emitter x 711,361 ops/sec ±0.93% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one random value - one listener

```
Theoretical max x 108,671,018 ops/sec ±2.79% (11 runs sampled) *burn in*
MiniSignals x 72,470,061 ops/sec ±0.53% (11 runs sampled)
ReactiveProperty x 51,022,377 ops/sec ±3.79% (10 runs sampled)
signal-lite x 48,437,887 ops/sec ±0.93% (11 runs sampled)
observ x 42,916,290 ops/sec ±1.89% (11 runs sampled)
evee x 38,645,327 ops/sec ±3.41% (10 runs sampled)
EventEmitter2 x 38,580,370 ops/sec ±3.62% (11 runs sampled)
EventEmitter3 x 39,724,062 ops/sec ±7.27% (11 runs sampled)
event-signal x 22,169,718 ops/sec ±1.34% (11 runs sampled)
EventEmitter x 22,241,609 ops/sec ±4.20% (11 runs sampled)
namespace-emitter x 18,613,003 ops/sec ±1.65% (11 runs sampled)
rxjs Subject x 14,638,869 ops/sec ±4.20% (11 runs sampled)
d3-dispatch x 14,608,387 ops/sec ±5.44% (11 runs sampled)
minivents x 8,444,039 ops/sec ±1.24% (11 runs sampled)
observable x 6,563,125 ops/sec ±1.82% (11 runs sampled)
JS-Signals x 5,482,747 ops/sec ±1.05% (11 runs sampled)
signal-emitter x 2,418,551 ops/sec ±2.02% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one random value - two listeners

```
Theoretical max x 59,535,421 ops/sec ±0.92% (11 runs sampled) *burn in*
MiniSignals x 19,145,090 ops/sec ±1.99% (11 runs sampled)
ReactiveProperty x 15,907,646 ops/sec ±1.85% (11 runs sampled)
signal-lite x 15,766,575 ops/sec ±3.37% (11 runs sampled)
EventEmitter3 x 15,322,297 ops/sec ±9.99% (11 runs sampled)
evee x 13,608,762 ops/sec ±1.36% (11 runs sampled)
observ x 13,761,422 ops/sec ±7.72% (11 runs sampled)
event-signal x 11,908,047 ops/sec ±5.64% (10 runs sampled)
EventEmitter x 11,605,760 ops/sec ±2.96% (11 runs sampled)
EventEmitter2 x 11,267,066 ops/sec ±4.49% (11 runs sampled)
d3-dispatch x 8,314,102 ops/sec ±8.20% (11 runs sampled)
rxjs Subject x 7,911,625 ops/sec ±3.90% (11 runs sampled)
waddup x 7,897,705 ops/sec ±4.87% (11 runs sampled)
namespace-emitter x 7,515,563 ops/sec ±18.37% (10 runs sampled)
minivents x 4,926,701 ops/sec ±6.60% (11 runs sampled)
JS-Signals x 4,287,361 ops/sec ±1.13% (11 runs sampled)
observable x 4,202,247 ops/sec ±9.42% (11 runs sampled)
signal-emitter x 2,046,242 ops/sec ±1.95% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one value - bound function

```
Theoretical max x 180,417,039 ops/sec ±1.81% (11 runs sampled) *burn in*
ReactiveProperty x 32,240,882 ops/sec ±2.13% (11 runs sampled)
EventEmitter3 x 27,885,106 ops/sec ±0.92% (11 runs sampled)
EventEmitter2 x 14,382,879 ops/sec ±5.86% (11 runs sampled)
EventEmitter x 14,609,522 ops/sec ±7.56% (11 runs sampled)
signal-lite x 14,223,488 ops/sec ±7.54% (11 runs sampled)
MiniSignals x 13,467,549 ops/sec ±12.28% (11 runs sampled)
evee x 12,563,376 ops/sec ±10.55% (11 runs sampled)
event-signal x 10,728,951 ops/sec ±9.64% (10 runs sampled)
rxjs Subject x 8,716,257 ops/sec ±3.03% (11 runs sampled)
JS-Signals x 3,113,761 ops/sec ±20.48% (11 runs sampled)
signal-emitter x 1,827,175 ops/sec ±3.34% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - many listeners

```
ReactiveProperty x 18,078,811 ops/sec ±1.93% (11 runs sampled)
Theoretical max x 16,930,626 ops/sec ±1.87% (11 runs sampled) *burn in*
MiniSignals x 16,185,750 ops/sec ±2.08% (11 runs sampled)
evee x 10,474,424 ops/sec ±1.23% (11 runs sampled)
EventEmitter3 x 6,178,680 ops/sec ±1.88% (11 runs sampled)
event-signal x 5,725,520 ops/sec ±2.12% (11 runs sampled)
signal-lite x 5,623,856 ops/sec ±4.89% (11 runs sampled)
EventEmitter x 5,356,675 ops/sec ±4.40% (11 runs sampled)
EventEmitter2 x 4,928,068 ops/sec ±2.80% (11 runs sampled)
rxjs Subject x 3,834,024 ops/sec ±1.57% (11 runs sampled)
JS-Signals x 2,168,684 ops/sec ±0.90% (11 runs sampled)
signal-emitter x 1,737,702 ops/sec ±3.19% (10 runs sampled)
minivents x 1,449,301 ops/sec ±2.65% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - one listener

```
Theoretical max x 919,032,655 ops/sec ±1.14% (11 runs sampled) *burn in*
MiniSignals x 160,053,393 ops/sec ±1.50% (10 runs sampled)
sister x 158,841,344 ops/sec ±4.15% (11 runs sampled)
ReactiveProperty x 138,075,761 ops/sec ±3.83% (11 runs sampled)
observ x 80,372,725 ops/sec ±5.09% (11 runs sampled)
signal-lite x 77,117,798 ops/sec ±4.89% (11 runs sampled)
EventEmitter3 x 62,323,360 ops/sec ±1.71% (11 runs sampled)
EventEmitter2 x 52,778,334 ops/sec ±3.33% (11 runs sampled)
evee x 51,054,463 ops/sec ±4.24% (11 runs sampled)
EventEmitter x 24,908,569 ops/sec ±2.37% (11 runs sampled)
event-signal x 22,881,745 ops/sec ±9.78% (10 runs sampled)
namespace-emitter x 20,714,112 ops/sec ±2.73% (11 runs sampled)
d3-dispatch x 19,439,551 ops/sec ±3.20% (11 runs sampled)
rxjs Subject x 12,686,467 ops/sec ±20.15% (10 runs sampled)
minivents x 8,503,226 ops/sec ±5.82% (11 runs sampled)
observable x 6,973,302 ops/sec ±2.66% (11 runs sampled)
JS-Signals x 5,464,832 ops/sec ±4.49% (11 runs sampled)
signal-emitter x 2,421,580 ops/sec ±2.97% (11 runs sampled)
```

_Fastest is **MiniSignals, sister**_

## emit one value - two listeners

```
Theoretical max x 941,041,908 ops/sec ±1.29% (11 runs sampled) *burn in*
MiniSignals x 22,368,326 ops/sec ±1.33% (11 runs sampled)
observ x 21,086,142 ops/sec ±1.06% (11 runs sampled)
ReactiveProperty x 21,267,665 ops/sec ±4.71% (11 runs sampled)
sister x 20,842,933 ops/sec ±3.11% (11 runs sampled)
EventEmitter3 x 19,567,104 ops/sec ±1.79% (11 runs sampled)
signal-lite x 19,297,143 ops/sec ±3.92% (11 runs sampled)
evee x 15,004,464 ops/sec ±3.96% (11 runs sampled)
event-signal x 13,912,945 ops/sec ±1.85% (11 runs sampled)
EventEmitter2 x 12,832,032 ops/sec ±1.70% (11 runs sampled)
EventEmitter x 12,793,563 ops/sec ±2.08% (11 runs sampled)
namespace-emitter x 12,524,713 ops/sec ±1.33% (11 runs sampled)
d3-dispatch x 11,281,802 ops/sec ±3.15% (11 runs sampled)
waddup x 9,166,918 ops/sec ±3.38% (11 runs sampled)
rxjs Subject x 8,661,524 ops/sec ±3.73% (11 runs sampled)
minivents x 4,817,086 ops/sec ±8.61% (11 runs sampled)
observable x 4,654,098 ops/sec ±5.51% (11 runs sampled)
JS-Signals x 4,394,424 ops/sec ±3.32% (11 runs sampled)
signal-emitter x 2,136,858 ops/sec ±2.01% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one value - with context

```
Theoretical max x 183,943,793 ops/sec ±2.31% (11 runs sampled) *burn in*
sister x 32,051,490 ops/sec ±1.90% (11 runs sampled)
ReactiveProperty x 27,473,744 ops/sec ±13.27% (10 runs sampled)
MiniSignals x 19,865,701 ops/sec ±2.11% (11 runs sampled)
signal-lite x 18,807,925 ops/sec ±1.77% (11 runs sampled)
EventEmitter x 16,164,997 ops/sec ±3.05% (11 runs sampled)
evee x 15,930,338 ops/sec ±2.20% (11 runs sampled)
EventEmitter3 x 15,730,161 ops/sec ±3.16% (11 runs sampled)
EventEmitter2 x 14,517,268 ops/sec ±5.68% (11 runs sampled)
event-signal x 13,392,473 ops/sec ±1.34% (11 runs sampled)
rxjs Subject x 7,887,279 ops/sec ±4.14% (11 runs sampled)
JS-Signals x 4,143,815 ops/sec ±5.88% (11 runs sampled)
signal-emitter x 2,153,158 ops/sec ±0.95% (11 runs sampled)
```

_Fastest is **sister**_

## emit variable number of values

```
Theoretical max x 160,865,806 ops/sec ±6.18% (11 runs sampled) *burn in*
MiniSignals x 5,199,001 ops/sec ±1.41% (11 runs sampled)
signal-lite x 4,728,369 ops/sec ±1.00% (11 runs sampled)
EventEmitter3 x 4,551,194 ops/sec ±0.71% (11 runs sampled)
EventEmitter2 x 2,839,395 ops/sec ±2.95% (11 runs sampled)
EventEmitter x 2,409,907 ops/sec ±1.75% (11 runs sampled)
JS-Signals x 1,022,711 ops/sec ±1.97% (11 runs sampled)
signal-emitter x 540,857 ops/sec ±4.43% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
Theoretical max x 134,922,203 ops/sec ±8.50% (11 runs sampled) *burn in*
EventEmitter3 x 93,283,054 ops/sec ±1.99% (11 runs sampled)
EventEmitter2 x 70,965,054 ops/sec ±4.29% (11 runs sampled)
JS-Signals x 47,782,890 ops/sec ±7.75% (10 runs sampled)
EventEmitter x 35,525,558 ops/sec ±5.41% (10 runs sampled)
ReactiveProperty x 30,543,859 ops/sec ±2.37% (11 runs sampled)
MiniSignals x 16,196,328 ops/sec ±3.22% (11 runs sampled)
```

_Fastest is **EventEmitter3**_
