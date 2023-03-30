# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 16, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 45, fail: 0, duration: 0ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 0ms]
- ✔ emit one object - one listener [pass: 30, fail: 0, duration: 1ms]
- ✔ emit one object - two listeners [pass: 45, fail: 0, duration: 0ms]
- ✔ emit one random value - one listener [pass: 38, fail: 0, duration: 0ms]
- ✔ emit one random value - two listeners [pass: 60, fail: 0, duration: 1ms]
- ✔ emit one value - bound function [pass: 42, fail: 0, duration: 0ms]
- ✔ emit one value - many listeners [pass: 30, fail: 0, duration: 0ms]
- ✔ emit one value - one listener [pass: 40, fail: 0, duration: 0ms]
- ✔ emit one value - two listeners [pass: 63, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 45, fail: 0, duration: 0ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 0ms]
- ✔ init [pass: 18, fail: 0, duration: 2ms]

# Summary

- duration: 7ms
- planned: 530
- assertions: 530
- pass: 530
- fail: 0

# Comments

## Platform

Node.js 18.15.0 on Linux 64-bit NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 174,395,367 ops/sec ±3.28% (11 runs sampled)
EventEmitter3 x 59,124,667 ops/sec ±4.16% (11 runs sampled)
ReactiveProperty x 21,850,900 ops/sec ±8.03% (11 runs sampled)
EventEmitter x 14,660,806 ops/sec ±3.51% (11 runs sampled)
EventEmitter2 x 7,664,783 ops/sec ±5.43% (11 runs sampled)
MiniSignals x 2,626,991 ops/sec ±7.11% (11 runs sampled)
dripEmitterEnhanced x 2,453,856 ops/sec ±5.93% (11 runs sampled)
JS-Signals x 1,429,754 ops/sec ±5.37% (11 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 82,783,271 ops/sec ±8.32% (11 runs sampled) *burn in*
MiniSignals x 11,286,182 ops/sec ±4.83% (11 runs sampled)
dripEmitter x 9,862,472 ops/sec ±4.69% (11 runs sampled)
ReactiveProperty x 9,211,437 ops/sec ±5.79% (11 runs sampled)
EventEmitter3 x 8,659,985 ops/sec ±8.38% (11 runs sampled)
sister x 9,046,536 ops/sec ±14.64% (10 runs sampled)
event-signal x 7,650,952 ops/sec ±5.54% (11 runs sampled)
signal-lite x 7,934,821 ops/sec ±9.75% (11 runs sampled)
EventEmitter x 7,457,195 ops/sec ±6.68% (11 runs sampled)
EventEmitter2 x 5,713,584 ops/sec ±7.35% (11 runs sampled)
evee x 6,021,180 ops/sec ±16.25% (11 runs sampled)
rxjs Subject x 3,337,647 ops/sec ±7.70% (11 runs sampled)
dripEmitterEnhanced x 1,694,038 ops/sec ±7.15% (10 runs sampled)
JS-Signals x 1,419,409 ops/sec ±4.51% (11 runs sampled)
signal-emitter x 938,143 ops/sec ±5.55% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit many values - two listeners

```
Theoretical max x 49,287,162 ops/sec ±6.96% (11 runs sampled) *burn in*
MiniSignals x 26,116,378 ops/sec ±4.80% (11 runs sampled)
signal-lite x 20,872,919 ops/sec ±4.89% (11 runs sampled)
EventEmitter x 19,658,976 ops/sec ±5.86% (11 runs sampled)
EventEmitter3 x 7,846,721 ops/sec ±6.54% (11 runs sampled)
EventEmitter2 x 5,619,919 ops/sec ±22.10% (10 runs sampled)
minivents x 4,173,149 ops/sec ±7.48% (11 runs sampled)
dripEmitterEnhanced x 3,523,763 ops/sec ±7.32% (11 runs sampled)
JS-Signals x 3,438,014 ops/sec ±7.04% (11 runs sampled)
signal-emitter x 2,040,330 ops/sec ±10.23% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 33,096,116 ops/sec ±5.69% (11 runs sampled) *burn in*
sister x 25,714,666 ops/sec ±5.13% (11 runs sampled)
MiniSignals x 25,415,691 ops/sec ±8.87% (11 runs sampled)
ReactiveProperty x 20,526,512 ops/sec ±6.06% (11 runs sampled)
signal-lite x 20,096,400 ops/sec ±4.94% (11 runs sampled)
dripEmitter x 12,999,155 ops/sec ±3.45% (11 runs sampled)
evee x 10,769,156 ops/sec ±6.40% (11 runs sampled)
EventEmitter x 9,290,004 ops/sec ±4.30% (11 runs sampled)
EventEmitter2 x 9,176,174 ops/sec ±12.28% (11 runs sampled)
EventEmitter3 x 8,683,651 ops/sec ±7.41% (11 runs sampled)
event-signal x 7,728,372 ops/sec ±4.54% (11 runs sampled)
rxjs Subject x 4,224,950 ops/sec ±7.91% (11 runs sampled)
JS-Signals x 1,620,314 ops/sec ±8.45% (11 runs sampled)
dripEmitterEnhanced x 1,408,105 ops/sec ±23.70% (11 runs sampled)
signal-emitter x 922,464 ops/sec ±4.03% (11 runs sampled)
```

_Fastest is **sister, MiniSignals**_

## emit one object - two listeners

```
Theoretical max x 27,984,070 ops/sec ±6.28% (11 runs sampled) *burn in*
ReactiveProperty x 9,658,387 ops/sec ±4.96% (11 runs sampled)
sister x 8,632,022 ops/sec ±6.26% (11 runs sampled)
MiniSignals x 8,270,695 ops/sec ±6.12% (11 runs sampled)
EventEmitter3 x 7,486,679 ops/sec ±6.47% (11 runs sampled)
dripEmitter x 7,123,643 ops/sec ±4.22% (11 runs sampled)
signal-lite x 7,114,616 ops/sec ±6.47% (11 runs sampled)
evee x 6,501,137 ops/sec ±5.94% (11 runs sampled)
EventEmitter x 6,097,476 ops/sec ±6.05% (11 runs sampled)
event-signal x 6,167,501 ops/sec ±8.05% (10 runs sampled)
EventEmitter2 x 5,270,175 ops/sec ±5.78% (11 runs sampled)
rxjs Subject x 2,946,277 ops/sec ±5.85% (11 runs sampled)
JS-Signals x 1,498,076 ops/sec ±1.04% (11 runs sampled)
dripEmitterEnhanced x 1,558,978 ops/sec ±6.31% (11 runs sampled)
signal-emitter x 866,704 ops/sec ±5.32% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one random value - one listener

```
Theoretical max x 90,411,450 ops/sec ±10.52% (11 runs sampled) *burn in*
dripEmitter x 80,732,821 ops/sec ±7.15% (11 runs sampled)
MiniSignals x 73,589,789 ops/sec ±4.55% (11 runs sampled)
signal-lite x 53,444,363 ops/sec ±7.12% (10 runs sampled)
ReactiveProperty x 48,481,389 ops/sec ±8.29% (11 runs sampled)
observ x 40,164,843 ops/sec ±4.49% (11 runs sampled)
EventEmitter x 42,663,459 ops/sec ±11.02% (11 runs sampled)
evee x 41,121,476 ops/sec ±7.12% (11 runs sampled)
EventEmitter3 x 39,171,200 ops/sec ±7.32% (11 runs sampled)
EventEmitter2 x 35,263,820 ops/sec ±7.44% (11 runs sampled)
event-signal x 27,411,544 ops/sec ±5.91% (11 runs sampled)
namespace-emitter x 19,665,855 ops/sec ±6.24% (11 runs sampled)
d3-dispatch x 18,498,335 ops/sec ±4.32% (11 runs sampled)
rxjs Subject x 12,413,783 ops/sec ±7.74% (11 runs sampled)
minivents x 9,203,086 ops/sec ±6.73% (10 runs sampled)
dripEmitterEnhanced x 6,069,845 ops/sec ±5.59% (11 runs sampled)
observable x 5,795,124 ops/sec ±10.22% (11 runs sampled)
JS-Signals x 5,228,088 ops/sec ±6.13% (11 runs sampled)
signal-emitter x 3,024,455 ops/sec ±9.88% (11 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one random value - two listeners

```
Theoretical max x 55,213,027 ops/sec ±5.04% (11 runs sampled) *burn in*
MiniSignals x 33,284,294 ops/sec ±5.79% (11 runs sampled)
dripEmitter x 30,316,691 ops/sec ±10.31% (10 runs sampled)
signal-lite x 28,095,527 ops/sec ±3.73% (11 runs sampled)
ReactiveProperty x 26,150,264 ops/sec ±9.18% (11 runs sampled)
EventEmitter3 x 24,544,819 ops/sec ±7.94% (11 runs sampled)
EventEmitter x 23,978,896 ops/sec ±7.90% (11 runs sampled)
event-signal x 22,928,684 ops/sec ±4.83% (11 runs sampled)
observ x 23,164,220 ops/sec ±7.50% (11 runs sampled)
evee x 21,848,330 ops/sec ±6.46% (11 runs sampled)
EventEmitter2 x 17,986,302 ops/sec ±4.10% (11 runs sampled)
namespace-emitter x 16,363,009 ops/sec ±3.36% (11 runs sampled)
waddup x 13,809,421 ops/sec ±6.70% (11 runs sampled)
d3-dispatch x 12,641,402 ops/sec ±5.31% (11 runs sampled)
rxjs Subject x 8,577,074 ops/sec ±5.11% (10 runs sampled)
minivents x 6,236,149 ops/sec ±5.58% (11 runs sampled)
dripEmitterEnhanced x 5,472,038 ops/sec ±5.11% (11 runs sampled)
observable x 4,560,676 ops/sec ±5.55% (11 runs sampled)
JS-Signals x 4,016,164 ops/sec ±7.04% (11 runs sampled)
signal-emitter x 2,903,838 ops/sec ±5.75% (11 runs sampled)
```

_Fastest is **MiniSignals, dripEmitter**_

## emit one value - bound function

```
Theoretical max x 187,510,315 ops/sec ±4.94% (11 runs sampled) *burn in*
dripEmitter x 33,468,282 ops/sec ±3.36% (11 runs sampled)
MiniSignals x 33,565,529 ops/sec ±5.50% (11 runs sampled)
ReactiveProperty x 33,104,058 ops/sec ±6.68% (11 runs sampled)
EventEmitter x 25,994,434 ops/sec ±4.53% (11 runs sampled)
EventEmitter3 x 25,255,610 ops/sec ±7.66% (11 runs sampled)
signal-lite x 25,260,441 ops/sec ±7.84% (11 runs sampled)
evee x 24,229,944 ops/sec ±9.22% (11 runs sampled)
event-signal x 21,084,508 ops/sec ±5.50% (11 runs sampled)
EventEmitter2 x 19,172,797 ops/sec ±3.59% (10 runs sampled)
rxjs Subject x 9,764,885 ops/sec ±5.52% (11 runs sampled)
dripEmitterEnhanced x 5,755,519 ops/sec ±4.63% (11 runs sampled)
JS-Signals x 4,229,795 ops/sec ±6.45% (10 runs sampled)
signal-emitter x 2,894,130 ops/sec ±6.55% (11 runs sampled)
```

_Fastest is **dripEmitter, MiniSignals, ReactiveProperty**_

## emit one value - many listeners

```
ReactiveProperty x 20,786,673 ops/sec ±6.05% (11 runs sampled)
Theoretical max x 19,686,483 ops/sec ±4.87% (11 runs sampled) *burn in*
MiniSignals x 13,534,102 ops/sec ±7.44% (11 runs sampled)
evee x 12,870,592 ops/sec ±4.69% (11 runs sampled)
dripEmitter x 7,993,769 ops/sec ±9.93% (11 runs sampled)
EventEmitter x 6,780,946 ops/sec ±5.69% (11 runs sampled)
EventEmitter3 x 6,699,421 ops/sec ±7.18% (11 runs sampled)
signal-lite x 6,425,116 ops/sec ±6.12% (11 runs sampled)
event-signal x 6,375,911 ops/sec ±7.66% (11 runs sampled)
EventEmitter2 x 5,561,758 ops/sec ±5.40% (10 runs sampled)
dripEmitterEnhanced x 3,458,645 ops/sec ±6.02% (11 runs sampled)
rxjs Subject x 3,448,598 ops/sec ±6.32% (11 runs sampled)
signal-emitter x 2,273,391 ops/sec ±5.64% (11 runs sampled)
JS-Signals x 2,087,232 ops/sec ±5.60% (10 runs sampled)
minivents x 1,663,926 ops/sec ±5.25% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - one listener

```
Theoretical max x 884,606,902 ops/sec ±5.19% (11 runs sampled) *burn in*
dripEmitter x 175,491,209 ops/sec ±6.35% (11 runs sampled)
MiniSignals x 159,729,292 ops/sec ±4.00% (11 runs sampled)
sister x 160,676,488 ops/sec ±4.93% (11 runs sampled)
ReactiveProperty x 99,256,922 ops/sec ±7.69% (10 runs sampled)
signal-lite x 96,070,303 ops/sec ±6.99% (11 runs sampled)
EventEmitter x 74,149,674 ops/sec ±8.37% (11 runs sampled)
observ x 71,058,732 ops/sec ±4.18% (11 runs sampled)
evee x 53,204,333 ops/sec ±5.70% (11 runs sampled)
EventEmitter3 x 51,741,723 ops/sec ±6.99% (11 runs sampled)
EventEmitter2 x 47,689,098 ops/sec ±5.82% (11 runs sampled)
event-signal x 34,264,960 ops/sec ±9.49% (11 runs sampled)
d3-dispatch x 25,201,529 ops/sec ±6.18% (10 runs sampled)
namespace-emitter x 22,659,429 ops/sec ±5.24% (10 runs sampled)
rxjs Subject x 15,379,067 ops/sec ±5.69% (11 runs sampled)
minivents x 9,522,124 ops/sec ±5.94% (11 runs sampled)
observable x 6,302,156 ops/sec ±3.85% (10 runs sampled)
dripEmitterEnhanced x 6,302,600 ops/sec ±5.38% (11 runs sampled)
JS-Signals x 5,398,090 ops/sec ±5.05% (11 runs sampled)
signal-emitter x 2,882,147 ops/sec ±4.85% (11 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one value - two listeners

```
Theoretical max x 893,455,333 ops/sec ±5.34% (11 runs sampled) *burn in*
MiniSignals x 39,795,394 ops/sec ±7.35% (11 runs sampled)
sister x 38,027,256 ops/sec ±4.88% (11 runs sampled)
dripEmitter x 36,552,054 ops/sec ±3.78% (11 runs sampled)
ReactiveProperty x 37,072,752 ops/sec ±7.33% (11 runs sampled)
observ x 34,651,565 ops/sec ±3.60% (11 runs sampled)
EventEmitter x 31,047,852 ops/sec ±0.78% (11 runs sampled)
EventEmitter3 x 30,546,129 ops/sec ±3.50% (11 runs sampled)
signal-lite x 30,704,774 ops/sec ±5.96% (11 runs sampled)
evee x 24,707,872 ops/sec ±5.07% (11 runs sampled)
event-signal x 23,194,752 ops/sec ±5.44% (10 runs sampled)
EventEmitter2 x 19,369,636 ops/sec ±5.49% (11 runs sampled)
namespace-emitter x 16,615,387 ops/sec ±7.83% (11 runs sampled)
d3-dispatch x 16,292,631 ops/sec ±6.71% (11 runs sampled)
waddup x 14,809,377 ops/sec ±5.09% (11 runs sampled)
rxjs Subject x 9,389,292 ops/sec ±4.49% (11 runs sampled)
minivents x 6,295,015 ops/sec ±5.90% (11 runs sampled)
dripEmitterEnhanced x 5,531,971 ops/sec ±6.58% (11 runs sampled)
observable x 4,633,683 ops/sec ±7.50% (11 runs sampled)
JS-Signals x 4,301,350 ops/sec ±6.30% (11 runs sampled)
signal-emitter x 3,092,569 ops/sec ±4.56% (11 runs sampled)
```

_Fastest is **MiniSignals, sister, dripEmitter, ReactiveProperty**_

## emit one value - with context

```
Theoretical max x 186,085,064 ops/sec ±5.32% (11 runs sampled) *burn in*
ReactiveProperty x 36,127,766 ops/sec ±3.34% (11 runs sampled)
MiniSignals x 35,128,060 ops/sec ±7.25% (11 runs sampled)
dripEmitter x 33,075,374 ops/sec ±3.07% (11 runs sampled)
sister x 31,484,426 ops/sec ±7.67% (11 runs sampled)
signal-lite x 28,370,006 ops/sec ±4.60% (11 runs sampled)
EventEmitter3 x 28,124,799 ops/sec ±5.17% (11 runs sampled)
EventEmitter x 24,901,013 ops/sec ±9.88% (11 runs sampled)
evee x 24,135,271 ops/sec ±12.11% (11 runs sampled)
event-signal x 22,404,577 ops/sec ±11.45% (11 runs sampled)
EventEmitter2 x 19,100,976 ops/sec ±4.60% (11 runs sampled)
rxjs Subject x 9,664,916 ops/sec ±4.88% (11 runs sampled)
dripEmitterEnhanced x 5,783,378 ops/sec ±5.56% (11 runs sampled)
JS-Signals x 4,519,928 ops/sec ±5.57% (10 runs sampled)
signal-emitter x 2,875,958 ops/sec ±5.84% (11 runs sampled)
```

_Fastest is **ReactiveProperty, MiniSignals**_

## emit variable number of values

```
Theoretical max x 213,739,096 ops/sec ±5.91% (11 runs sampled) *burn in*
MiniSignals x 9,800,157 ops/sec ±4.50% (11 runs sampled)
EventEmitter3 x 7,385,978 ops/sec ±3.56% (11 runs sampled)
signal-lite x 6,865,154 ops/sec ±5.81% (11 runs sampled)
EventEmitter x 6,061,745 ops/sec ±7.48% (11 runs sampled)
EventEmitter2 x 4,030,045 ops/sec ±7.38% (11 runs sampled)
dripEmitterEnhanced x 1,225,333 ops/sec ±4.46% (11 runs sampled)
JS-Signals x 1,064,299 ops/sec ±5.69% (11 runs sampled)
signal-emitter x 675,416 ops/sec ±7.30% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
DripEmitter x 122,481,815 ops/sec ±8.03% (11 runs sampled)
Theoretical max x 122,332,172 ops/sec ±10.06% (11 runs sampled) *burn in*
EventEmitter3 x 72,769,672 ops/sec ±6.33% (11 runs sampled)
EventEmitter2 x 51,199,695 ops/sec ±6.88% (11 runs sampled)
DripEmitterEnhanced x 46,718,915 ops/sec ±8.45% (11 runs sampled)
EventEmitter x 30,123,093 ops/sec ±3.99% (11 runs sampled)
JS-Signals x 24,024,168 ops/sec ±15.11% (10 runs sampled)
ReactiveProperty x 21,775,065 ops/sec ±7.23% (11 runs sampled)
MiniSignals x 21,424,476 ops/sec ±19.01% (11 runs sampled)
```

_Fastest is **DripEmitter**_
