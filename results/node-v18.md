# Tests

- ✔ add and remove [pass: 12, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 39, fail: 0, duration: 1ms]
- ✔ emit many values - two listeners [pass: 27, fail: 0, duration: 0ms]
- ✔ emit one object - one listener [pass: 26, fail: 0, duration: 0ms]
- ✔ emit one object - two listeners [pass: 39, fail: 0, duration: 0ms]
- ✔ emit one random value - one listener [pass: 34, fail: 0, duration: 1ms]
- ✔ emit one random value - two listeners [pass: 54, fail: 0, duration: 0ms]
- ✔ emit one value - bound function [pass: 36, fail: 0, duration: 0ms]
- ✔ emit one value - many listeners [pass: 26, fail: 0, duration: 0ms]
- ✔ emit one value - one listener [pass: 36, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 57, fail: 0, duration: 0ms]
- ✔ emit one value - with context [pass: 39, fail: 0, duration: 0ms]
- ✔ emit variable number of values [pass: 24, fail: 0, duration: 0ms]
- ✔ init [pass: 14, fail: 0, duration: 2ms]

# Summary

- duration: 6ms
- planned: 463
- assertions: 463
- pass: 463
- fail: 0

# Comments

## add and remove

```
EventEmitter3 x 54,903,380 ops/sec ±6.22% (11 runs sampled)
ReactiveProperty x 22,033,600 ops/sec ±11.37% (10 runs sampled)
EventEmitter x 13,482,687 ops/sec ±9.33% (11 runs sampled)
EventEmitter2 x 7,906,350 ops/sec ±6.38% (10 runs sampled)
MiniSignals x 4,858,355 ops/sec ±8.00% (11 runs sampled)
JS-Signals x 1,397,135 ops/sec ±6.08% (11 runs sampled)
```

_Fastest is **EventEmitter3**_

## emit one array

```
Theoretical max x 91,171,873 ops/sec ±2.75% (11 runs sampled) *burn in*
MiniSignals x 11,857,559 ops/sec ±2.15% (11 runs sampled)
sister x 11,971,555 ops/sec ±3.85% (11 runs sampled)
ReactiveProperty x 9,577,433 ops/sec ±7.09% (11 runs sampled)
signal-lite x 8,901,062 ops/sec ±5.29% (11 runs sampled)
EventEmitter3 x 8,476,445 ops/sec ±6.93% (11 runs sampled)
evee x 7,886,638 ops/sec ±4.91% (11 runs sampled)
EventEmitter x 7,091,066 ops/sec ±6.81% (11 runs sampled)
event-signal x 6,653,033 ops/sec ±10.22% (10 runs sampled)
EventEmitter2 x 5,417,241 ops/sec ±5.36% (11 runs sampled)
rxjs Subject x 3,244,177 ops/sec ±5.61% (11 runs sampled)
JS-Signals x 1,495,355 ops/sec ±6.91% (11 runs sampled)
signal-emitter x 899,007 ops/sec ±6.46% (11 runs sampled)
```

_Fastest is **MiniSignals, sister**_

## emit many values - two listeners

```
Theoretical max x 49,169,864 ops/sec ±7.50% (11 runs sampled) *burn in*
MiniSignals x 27,214,379 ops/sec ±5.16% (11 runs sampled)
signal-lite x 20,078,697 ops/sec ±8.68% (10 runs sampled)
EventEmitter x 18,254,311 ops/sec ±6.30% (11 runs sampled)
EventEmitter3 x 7,938,165 ops/sec ±7.06% (11 runs sampled)
EventEmitter2 x 6,877,311 ops/sec ±7.13% (11 runs sampled)
minivents x 4,231,975 ops/sec ±6.95% (11 runs sampled)
JS-Signals x 3,405,634 ops/sec ±6.79% (11 runs sampled)
signal-emitter x 2,248,751 ops/sec ±6.75% (10 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 33,917,330 ops/sec ±5.72% (11 runs sampled) *burn in*
MiniSignals x 25,913,571 ops/sec ±5.90% (11 runs sampled)
sister x 24,017,222 ops/sec ±5.99% (11 runs sampled)
ReactiveProperty x 20,117,176 ops/sec ±5.49% (11 runs sampled)
signal-lite x 19,253,828 ops/sec ±7.15% (11 runs sampled)
EventEmitter3 x 10,843,761 ops/sec ±5.19% (11 runs sampled)
EventEmitter2 x 10,092,038 ops/sec ±4.90% (11 runs sampled)
EventEmitter x 9,708,492 ops/sec ±5.35% (11 runs sampled)
evee x 9,891,710 ops/sec ±7.91% (11 runs sampled)
event-signal x 7,374,011 ops/sec ±7.68% (11 runs sampled)
rxjs Subject x 3,944,334 ops/sec ±4.44% (11 runs sampled)
JS-Signals x 1,662,883 ops/sec ±4.80% (11 runs sampled)
signal-emitter x 898,280 ops/sec ±7.66% (10 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - two listeners

```
Theoretical max x 27,595,242 ops/sec ±4.25% (11 runs sampled) *burn in*
sister x 9,369,516 ops/sec ±0.60% (11 runs sampled)
ReactiveProperty x 9,069,008 ops/sec ±6.86% (11 runs sampled)
MiniSignals x 8,611,766 ops/sec ±5.42% (11 runs sampled)
signal-lite x 7,204,404 ops/sec ±5.63% (10 runs sampled)
EventEmitter3 x 6,408,367 ops/sec ±5.94% (10 runs sampled)
EventEmitter x 6,230,405 ops/sec ±5.11% (11 runs sampled)
event-signal x 6,073,197 ops/sec ±4.81% (11 runs sampled)
evee x 6,053,493 ops/sec ±5.79% (11 runs sampled)
EventEmitter2 x 4,987,912 ops/sec ±5.59% (11 runs sampled)
rxjs Subject x 3,015,157 ops/sec ±2.03% (11 runs sampled)
JS-Signals x 1,358,796 ops/sec ±7.05% (10 runs sampled)
signal-emitter x 854,397 ops/sec ±7.44% (11 runs sampled)
```

_Fastest is **sister, ReactiveProperty**_

## emit one random value - one listener

```
Theoretical max x 93,841,630 ops/sec ±5.93% (11 runs sampled) *burn in*
MiniSignals x 68,178,384 ops/sec ±6.59% (11 runs sampled)
signal-lite x 54,967,503 ops/sec ±4.44% (11 runs sampled)
ReactiveProperty x 51,744,559 ops/sec ±4.82% (11 runs sampled)
EventEmitter x 45,817,852 ops/sec ±5.80% (11 runs sampled)
EventEmitter3 x 38,073,170 ops/sec ±6.92% (11 runs sampled)
evee x 36,938,308 ops/sec ±4.15% (11 runs sampled)
observ x 35,182,549 ops/sec ±6.85% (11 runs sampled)
EventEmitter2 x 32,126,943 ops/sec ±11.38% (11 runs sampled)
event-signal x 26,400,151 ops/sec ±6.93% (11 runs sampled)
namespace-emitter x 19,149,612 ops/sec ±6.33% (11 runs sampled)
d3-dispatch x 18,003,519 ops/sec ±2.66% (11 runs sampled)
rxjs Subject x 13,201,947 ops/sec ±4.64% (11 runs sampled)
minivents x 9,528,072 ops/sec ±6.89% (11 runs sampled)
observable x 5,935,678 ops/sec ±5.96% (11 runs sampled)
JS-Signals x 4,922,919 ops/sec ±5.11% (11 runs sampled)
signal-emitter x 3,025,492 ops/sec ±5.26% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one random value - two listeners

```
Theoretical max x 55,580,830 ops/sec ±3.91% (11 runs sampled) *burn in*
MiniSignals x 32,110,461 ops/sec ±6.43% (11 runs sampled)
ReactiveProperty x 28,342,661 ops/sec ±7.46% (11 runs sampled)
EventEmitter3 x 26,251,863 ops/sec ±3.88% (11 runs sampled)
signal-lite x 24,503,037 ops/sec ±6.74% (10 runs sampled)
evee x 22,317,632 ops/sec ±2.75% (10 runs sampled)
EventEmitter x 22,561,281 ops/sec ±5.70% (11 runs sampled)
observ x 22,610,195 ops/sec ±7.56% (11 runs sampled)
event-signal x 21,209,226 ops/sec ±7.36% (11 runs sampled)
EventEmitter2 x 17,046,634 ops/sec ±6.57% (11 runs sampled)
namespace-emitter x 15,767,542 ops/sec ±3.88% (11 runs sampled)
waddup x 13,149,541 ops/sec ±7.63% (11 runs sampled)
d3-dispatch x 11,122,121 ops/sec ±5.04% (10 runs sampled)
rxjs Subject x 9,316,493 ops/sec ±9.06% (11 runs sampled)
minivents x 5,564,195 ops/sec ±5.84% (10 runs sampled)
observable x 4,590,058 ops/sec ±6.46% (11 runs sampled)
JS-Signals x 3,717,724 ops/sec ±6.45% (11 runs sampled)
signal-emitter x 2,931,894 ops/sec ±4.13% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one value - bound function

```
Theoretical max x 180,009,468 ops/sec ±7.21% (11 runs sampled) *burn in*
MiniSignals x 33,929,489 ops/sec ±6.86% (11 runs sampled)
ReactiveProperty x 32,465,344 ops/sec ±8.80% (11 runs sampled)
EventEmitter3 x 25,674,326 ops/sec ±5.66% (11 runs sampled)
evee x 25,125,266 ops/sec ±6.48% (11 runs sampled)
EventEmitter x 24,387,217 ops/sec ±6.09% (11 runs sampled)
signal-lite x 23,895,574 ops/sec ±9.02% (11 runs sampled)
event-signal x 20,020,263 ops/sec ±5.53% (11 runs sampled)
EventEmitter2 x 18,374,343 ops/sec ±4.95% (11 runs sampled)
rxjs Subject x 8,721,686 ops/sec ±3.81% (11 runs sampled)
JS-Signals x 4,043,363 ops/sec ±6.84% (11 runs sampled)
signal-emitter x 2,775,664 ops/sec ±7.68% (11 runs sampled)
```

_Fastest is **MiniSignals, ReactiveProperty**_

## emit one value - many listeners

```
ReactiveProperty x 21,176,889 ops/sec ±4.40% (11 runs sampled)
Theoretical max x 19,144,701 ops/sec ±8.06% (10 runs sampled) *burn in*
MiniSignals x 13,653,031 ops/sec ±4.99% (11 runs sampled)
evee x 12,211,086 ops/sec ±7.77% (11 runs sampled)
EventEmitter3 x 7,345,855 ops/sec ±2.75% (11 runs sampled)
EventEmitter x 6,618,194 ops/sec ±6.28% (10 runs sampled)
signal-lite x 6,098,980 ops/sec ±8.60% (11 runs sampled)
event-signal x 5,820,588 ops/sec ±7.94% (11 runs sampled)
EventEmitter2 x 5,377,662 ops/sec ±7.86% (11 runs sampled)
rxjs Subject x 3,305,486 ops/sec ±9.06% (10 runs sampled)
JS-Signals x 2,142,824 ops/sec ±4.05% (11 runs sampled)
signal-emitter x 2,045,957 ops/sec ±14.41% (11 runs sampled)
minivents x 1,625,769 ops/sec ±4.77% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - one listener

```
Theoretical max x 912,166,209 ops/sec ±3.44% (11 runs sampled) *burn in*
MiniSignals x 174,549,078 ops/sec ±4.54% (11 runs sampled)
sister x 168,997,073 ops/sec ±6.65% (11 runs sampled)
signal-lite x 104,080,081 ops/sec ±5.33% (11 runs sampled)
ReactiveProperty x 102,605,745 ops/sec ±7.67% (11 runs sampled)
EventEmitter x 77,120,061 ops/sec ±6.12% (11 runs sampled)
observ x 66,845,078 ops/sec ±5.10% (11 runs sampled)
EventEmitter3 x 52,246,918 ops/sec ±5.43% (11 runs sampled)
evee x 54,116,256 ops/sec ±9.20% (11 runs sampled)
EventEmitter2 x 48,548,589 ops/sec ±6.45% (11 runs sampled)
event-signal x 35,017,199 ops/sec ±5.69% (11 runs sampled)
namespace-emitter x 23,992,518 ops/sec ±2.74% (11 runs sampled)
d3-dispatch x 23,779,021 ops/sec ±8.30% (11 runs sampled)
rxjs Subject x 15,123,453 ops/sec ±7.58% (11 runs sampled)
minivents x 10,242,407 ops/sec ±5.09% (11 runs sampled)
observable x 6,046,695 ops/sec ±5.36% (11 runs sampled)
JS-Signals x 5,014,772 ops/sec ±5.09% (11 runs sampled)
signal-emitter x 2,735,086 ops/sec ±4.76% (11 runs sampled)
```

_Fastest is **MiniSignals, sister**_

## emit one value - two listeners

```
Theoretical max x 870,664,576 ops/sec ±6.12% (11 runs sampled) *burn in*
sister x 42,515,427 ops/sec ±0.70% (11 runs sampled)
MiniSignals x 41,149,218 ops/sec ±5.52% (11 runs sampled)
ReactiveProperty x 37,865,894 ops/sec ±8.38% (11 runs sampled)
observ x 31,068,977 ops/sec ±6.45% (11 runs sampled)
EventEmitter x 30,065,597 ops/sec ±3.64% (11 runs sampled)
signal-lite x 30,203,075 ops/sec ±6.55% (11 runs sampled)
EventEmitter3 x 29,539,018 ops/sec ±5.18% (11 runs sampled)
evee x 26,117,201 ops/sec ±8.46% (11 runs sampled)
event-signal x 22,534,529 ops/sec ±8.28% (11 runs sampled)
EventEmitter2 x 19,096,615 ops/sec ±5.65% (11 runs sampled)
namespace-emitter x 17,377,803 ops/sec ±6.47% (11 runs sampled)
d3-dispatch x 15,181,206 ops/sec ±6.77% (11 runs sampled)
waddup x 12,964,764 ops/sec ±8.93% (11 runs sampled)
rxjs Subject x 10,642,434 ops/sec ±2.11% (11 runs sampled)
minivents x 6,355,462 ops/sec ±5.98% (11 runs sampled)
observable x 4,746,295 ops/sec ±5.94% (11 runs sampled)
JS-Signals x 4,500,854 ops/sec ±5.54% (11 runs sampled)
signal-emitter x 2,773,012 ops/sec ±6.98% (11 runs sampled)
```

_Fastest is **sister, MiniSignals**_

## emit one value - with context

```
Theoretical max x 168,555,969 ops/sec ±7.79% (11 runs sampled) *burn in*
ReactiveProperty x 35,852,152 ops/sec ±4.67% (11 runs sampled)
MiniSignals x 36,024,531 ops/sec ±5.47% (11 runs sampled)
sister x 34,640,873 ops/sec ±4.80% (10 runs sampled)
EventEmitter3 x 27,432,439 ops/sec ±7.75% (11 runs sampled)
evee x 25,508,834 ops/sec ±5.01% (11 runs sampled)
signal-lite x 25,289,949 ops/sec ±6.75% (11 runs sampled)
EventEmitter x 24,312,564 ops/sec ±9.61% (11 runs sampled)
event-signal x 22,358,054 ops/sec ±6.11% (11 runs sampled)
EventEmitter2 x 17,671,827 ops/sec ±4.92% (11 runs sampled)
rxjs Subject x 9,801,800 ops/sec ±4.70% (11 runs sampled)
JS-Signals x 4,427,194 ops/sec ±5.14% (11 runs sampled)
signal-emitter x 2,934,477 ops/sec ±5.40% (10 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit variable number of values

```
Theoretical max x 208,784,648 ops/sec ±6.25% (11 runs sampled) *burn in*
MiniSignals x 9,667,539 ops/sec ±4.27% (11 runs sampled)
EventEmitter3 x 7,076,150 ops/sec ±6.55% (11 runs sampled)
signal-lite x 6,964,449 ops/sec ±5.17% (10 runs sampled)
EventEmitter x 6,129,602 ops/sec ±6.37% (10 runs sampled)
EventEmitter2 x 4,050,689 ops/sec ±5.14% (11 runs sampled)
JS-Signals x 1,003,533 ops/sec ±6.10% (11 runs sampled)
signal-emitter x 731,432 ops/sec ±4.04% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
Theoretical max x 121,502,405 ops/sec ±4.72% (11 runs sampled) *burn in*
EventEmitter3 x 72,084,888 ops/sec ±4.22% (11 runs sampled)
EventEmitter2 x 50,428,914 ops/sec ±6.19% (11 runs sampled)
EventEmitter x 26,903,544 ops/sec ±7.44% (11 runs sampled)
ReactiveProperty x 20,720,932 ops/sec ±7.50% (11 runs sampled)
JS-Signals x 21,129,241 ops/sec ±23.67% (11 runs sampled)
MiniSignals x 10,336,215 ops/sec ±5.02% (11 runs sampled)
```

_Fastest is **EventEmitter3**_
