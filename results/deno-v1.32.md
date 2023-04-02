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
- ✔ emit one value - one listener [pass: 36, fail: 0, duration: 0ms]
- ✔ emit one value - two listeners [pass: 57, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 39, fail: 0, duration: 0ms]
- ✔ emit variable number of values [pass: 24, fail: 0, duration: 1ms]
- ✔ init [pass: 14, fail: 0, duration: 3ms]

# Summary

- duration: 8ms
- planned: 463
- assertions: 463
- pass: 463
- fail: 0

# Comments

## add and remove

```
EventEmitter3 x 50,237,637 ops/sec ±5.00% (11 runs sampled)
ReactiveProperty x 19,845,149 ops/sec ±4.74% (11 runs sampled)
EventEmitter x 11,458,081 ops/sec ±22.49% (11 runs sampled)
EventEmitter2 x 6,459,850 ops/sec ±15.39% (11 runs sampled)
MiniSignals x 4,456,582 ops/sec ±9.57% (11 runs sampled)
JS-Signals x 1,386,744 ops/sec ±5.11% (11 runs sampled)
```

_Fastest is **EventEmitter3**_

## emit one array

```
Theoretical max x 83,376,378 ops/sec ±5.89% (11 runs sampled) *burn in*
sister x 11,384,230 ops/sec ±4.43% (11 runs sampled)
MiniSignals x 10,119,413 ops/sec ±4.21% (11 runs sampled)
ReactiveProperty x 9,817,403 ops/sec ±5.03% (11 runs sampled)
signal-lite x 7,700,781 ops/sec ±5.64% (11 runs sampled)
EventEmitter3 x 7,768,396 ops/sec ±9.49% (11 runs sampled)
EventEmitter x 7,235,950 ops/sec ±5.02% (11 runs sampled)
evee x 7,173,476 ops/sec ±4.35% (11 runs sampled)
event-signal x 7,179,649 ops/sec ±6.61% (11 runs sampled)
EventEmitter2 x 5,638,489 ops/sec ±6.02% (11 runs sampled)
rxjs Subject x 2,915,909 ops/sec ±8.99% (11 runs sampled)
JS-Signals x 1,378,902 ops/sec ±8.17% (11 runs sampled)
signal-emitter x 870,440 ops/sec ±3.42% (11 runs sampled)
```

_Fastest is **sister**_

## emit many values - two listeners

```
Theoretical max x 46,732,302 ops/sec ±3.53% (11 runs sampled) *burn in*
MiniSignals x 24,385,693 ops/sec ±6.51% (11 runs sampled)
signal-lite x 19,963,681 ops/sec ±3.38% (11 runs sampled)
EventEmitter x 18,625,057 ops/sec ±11.93% (11 runs sampled)
EventEmitter3 x 7,793,724 ops/sec ±4.04% (11 runs sampled)
EventEmitter2 x 7,013,867 ops/sec ±3.23% (11 runs sampled)
minivents x 4,131,040 ops/sec ±4.67% (11 runs sampled)
JS-Signals x 3,294,498 ops/sec ±4.96% (11 runs sampled)
signal-emitter x 2,073,163 ops/sec ±6.82% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 31,940,923 ops/sec ±6.10% (11 runs sampled) *burn in*
MiniSignals x 22,720,779 ops/sec ±7.15% (11 runs sampled)
ReactiveProperty x 17,981,168 ops/sec ±5.30% (11 runs sampled)
signal-lite x 16,664,263 ops/sec ±7.76% (11 runs sampled)
sister x 15,827,791 ops/sec ±7.59% (11 runs sampled)
EventEmitter3 x 9,501,869 ops/sec ±3.84% (11 runs sampled)
EventEmitter x 9,190,842 ops/sec ±4.22% (11 runs sampled)
EventEmitter2 x 8,846,229 ops/sec ±4.96% (11 runs sampled)
event-signal x 7,353,770 ops/sec ±7.39% (11 runs sampled)
evee x 6,646,640 ops/sec ±15.58% (11 runs sampled)
rxjs Subject x 3,986,136 ops/sec ±6.38% (11 runs sampled)
JS-Signals x 1,203,961 ops/sec ±22.13% (10 runs sampled)
signal-emitter x 760,400 ops/sec ±7.86% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - two listeners

```
Theoretical max x 24,651,666 ops/sec ±6.78% (11 runs sampled) *burn in*
ReactiveProperty x 9,069,972 ops/sec ±5.03% (11 runs sampled)
sister x 8,508,729 ops/sec ±4.64% (11 runs sampled)
MiniSignals x 7,536,780 ops/sec ±6.74% (11 runs sampled)
EventEmitter3 x 6,818,192 ops/sec ±7.80% (11 runs sampled)
signal-lite x 6,529,972 ops/sec ±6.94% (11 runs sampled)
evee x 6,180,982 ops/sec ±5.35% (11 runs sampled)
EventEmitter x 6,134,277 ops/sec ±5.91% (11 runs sampled)
event-signal x 5,604,936 ops/sec ±7.72% (11 runs sampled)
EventEmitter2 x 4,959,547 ops/sec ±5.03% (11 runs sampled)
rxjs Subject x 2,587,039 ops/sec ±6.14% (11 runs sampled)
JS-Signals x 1,245,012 ops/sec ±6.05% (10 runs sampled)
signal-emitter x 779,591 ops/sec ±5.70% (11 runs sampled)
```

_Fastest is **ReactiveProperty, sister**_

## emit one random value - one listener

```
Theoretical max x 98,088,966 ops/sec ±4.87% (10 runs sampled) *burn in*
MiniSignals x 68,047,612 ops/sec ±6.74% (11 runs sampled)
signal-lite x 49,428,421 ops/sec ±4.61% (11 runs sampled)
EventEmitter x 46,531,296 ops/sec ±5.85% (11 runs sampled)
ReactiveProperty x 41,898,937 ops/sec ±11.53% (11 runs sampled)
EventEmitter3 x 37,946,133 ops/sec ±6.00% (11 runs sampled)
evee x 37,752,687 ops/sec ±7.67% (11 runs sampled)
EventEmitter2 x 32,706,821 ops/sec ±6.30% (11 runs sampled)
observ x 31,669,665 ops/sec ±10.98% (10 runs sampled)
event-signal x 26,757,624 ops/sec ±5.57% (11 runs sampled)
namespace-emitter x 20,324,173 ops/sec ±4.10% (11 runs sampled)
d3-dispatch x 15,959,449 ops/sec ±7.92% (11 runs sampled)
rxjs Subject x 12,380,118 ops/sec ±7.27% (11 runs sampled)
minivents x 7,263,158 ops/sec ±9.39% (11 runs sampled)
JS-Signals x 4,729,256 ops/sec ±3.17% (11 runs sampled)
observable x 4,954,255 ops/sec ±18.88% (11 runs sampled)
signal-emitter x 2,791,138 ops/sec ±7.59% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one random value - two listeners

```
Theoretical max x 51,508,346 ops/sec ±4.40% (11 runs sampled) *burn in*
MiniSignals x 32,959,897 ops/sec ±8.66% (11 runs sampled)
ReactiveProperty x 26,801,472 ops/sec ±4.30% (11 runs sampled)
EventEmitter3 x 23,760,295 ops/sec ±4.78% (11 runs sampled)
signal-lite x 22,308,193 ops/sec ±12.83% (11 runs sampled)
evee x 20,796,398 ops/sec ±7.75% (11 runs sampled)
event-signal x 20,218,717 ops/sec ±5.88% (11 runs sampled)
EventEmitter x 21,495,384 ops/sec ±13.66% (11 runs sampled)
observ x 20,282,240 ops/sec ±8.95% (11 runs sampled)
EventEmitter2 x 16,049,939 ops/sec ±7.03% (11 runs sampled)
namespace-emitter x 14,023,901 ops/sec ±6.50% (10 runs sampled)
waddup x 11,573,339 ops/sec ±5.88% (11 runs sampled)
d3-dispatch x 11,583,682 ops/sec ±6.29% (11 runs sampled)
rxjs Subject x 8,485,699 ops/sec ±5.58% (11 runs sampled)
minivents x 4,826,379 ops/sec ±10.98% (11 runs sampled)
observable x 4,265,838 ops/sec ±5.61% (11 runs sampled)
JS-Signals x 3,781,402 ops/sec ±7.12% (11 runs sampled)
signal-emitter x 2,454,908 ops/sec ±5.35% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one value - bound function

```
Theoretical max x 181,684,637 ops/sec ±4.62% (11 runs sampled) *burn in*
MiniSignals x 36,239,422 ops/sec ±4.39% (11 runs sampled)
ReactiveProperty x 33,460,497 ops/sec ±6.69% (11 runs sampled)
signal-lite x 26,145,946 ops/sec ±5.59% (11 runs sampled)
evee x 25,226,790 ops/sec ±4.92% (11 runs sampled)
EventEmitter x 25,242,369 ops/sec ±5.88% (11 runs sampled)
EventEmitter3 x 25,012,336 ops/sec ±7.91% (11 runs sampled)
event-signal x 21,447,028 ops/sec ±7.08% (11 runs sampled)
EventEmitter2 x 18,397,815 ops/sec ±4.97% (11 runs sampled)
rxjs Subject x 8,920,278 ops/sec ±4.81% (11 runs sampled)
JS-Signals x 3,944,914 ops/sec ±7.93% (11 runs sampled)
signal-emitter x 2,881,848 ops/sec ±6.40% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one value - many listeners

```
Theoretical max x 19,334,949 ops/sec ±4.67% (11 runs sampled) *burn in*
ReactiveProperty x 19,116,129 ops/sec ±6.62% (11 runs sampled)
MiniSignals x 13,867,604 ops/sec ±2.87% (11 runs sampled)
evee x 11,923,322 ops/sec ±10.40% (10 runs sampled)
EventEmitter x 6,566,046 ops/sec ±6.30% (11 runs sampled)
signal-lite x 6,047,976 ops/sec ±4.97% (11 runs sampled)
event-signal x 5,678,695 ops/sec ±4.66% (11 runs sampled)
EventEmitter2 x 4,857,552 ops/sec ±9.42% (11 runs sampled)
EventEmitter3 x 5,162,853 ops/sec ±20.64% (11 runs sampled)
rxjs Subject x 3,060,710 ops/sec ±6.89% (11 runs sampled)
JS-Signals x 1,947,337 ops/sec ±6.70% (11 runs sampled)
signal-emitter x 1,890,250 ops/sec ±7.76% (11 runs sampled)
minivents x 1,583,339 ops/sec ±4.80% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - one listener

```
Theoretical max x 893,635,092 ops/sec ±6.76% (11 runs sampled) *burn in*
sister x 169,990,784 ops/sec ±7.36% (11 runs sampled)
MiniSignals x 156,627,695 ops/sec ±7.61% (11 runs sampled)
ReactiveProperty x 108,177,427 ops/sec ±1.33% (11 runs sampled)
signal-lite x 100,402,752 ops/sec ±6.68% (11 runs sampled)
EventEmitter x 72,250,989 ops/sec ±4.29% (11 runs sampled)
observ x 64,249,508 ops/sec ±5.13% (11 runs sampled)
EventEmitter2 x 49,963,653 ops/sec ±2.51% (11 runs sampled)
evee x 49,959,977 ops/sec ±10.18% (11 runs sampled)
EventEmitter3 x 47,861,674 ops/sec ±6.24% (11 runs sampled)
event-signal x 33,787,693 ops/sec ±7.10% (11 runs sampled)
namespace-emitter x 20,342,900 ops/sec ±4.69% (11 runs sampled)
d3-dispatch x 18,886,295 ops/sec ±15.03% (11 runs sampled)
rxjs Subject x 14,262,924 ops/sec ±5.22% (11 runs sampled)
minivents x 8,586,583 ops/sec ±7.55% (11 runs sampled)
observable x 6,308,715 ops/sec ±3.62% (11 runs sampled)
JS-Signals x 5,167,396 ops/sec ±7.01% (11 runs sampled)
signal-emitter x 2,946,755 ops/sec ±9.13% (11 runs sampled)
```

_Fastest is **sister**_

## emit one value - two listeners

```
Theoretical max x 886,626,683 ops/sec ±5.11% (11 runs sampled) *burn in*
sister x 40,124,208 ops/sec ±2.57% (11 runs sampled)
MiniSignals x 39,649,298 ops/sec ±5.35% (11 runs sampled)
ReactiveProperty x 37,673,511 ops/sec ±9.80% (11 runs sampled)
observ x 30,872,412 ops/sec ±4.21% (11 runs sampled)
EventEmitter3 x 28,667,273 ops/sec ±4.96% (11 runs sampled)
signal-lite x 28,912,552 ops/sec ±6.91% (11 runs sampled)
evee x 24,646,453 ops/sec ±5.55% (11 runs sampled)
event-signal x 23,177,403 ops/sec ±5.76% (11 runs sampled)
EventEmitter x 23,946,592 ops/sec ±12.81% (11 runs sampled)
EventEmitter2 x 17,717,622 ops/sec ±6.98% (11 runs sampled)
d3-dispatch x 15,903,730 ops/sec ±5.66% (10 runs sampled)
namespace-emitter x 15,811,398 ops/sec ±5.30% (11 runs sampled)
waddup x 12,521,220 ops/sec ±4.30% (11 runs sampled)
rxjs Subject x 9,268,986 ops/sec ±8.98% (11 runs sampled)
minivents x 5,831,567 ops/sec ±7.82% (11 runs sampled)
observable x 4,882,564 ops/sec ±4.67% (11 runs sampled)
JS-Signals x 4,106,783 ops/sec ±6.11% (11 runs sampled)
signal-emitter x 2,731,049 ops/sec ±4.48% (10 runs sampled)
```

_Fastest is **sister, MiniSignals, ReactiveProperty**_

## emit one value - with context

```
Theoretical max x 186,912,197 ops/sec ±4.07% (11 runs sampled) *burn in*
ReactiveProperty x 32,794,042 ops/sec ±5.15% (11 runs sampled)
sister x 32,244,046 ops/sec ±4.06% (11 runs sampled)
MiniSignals x 32,330,276 ops/sec ±12.60% (11 runs sampled)
EventEmitter3 x 26,007,141 ops/sec ±7.07% (11 runs sampled)
signal-lite x 24,766,430 ops/sec ±5.57% (11 runs sampled)
EventEmitter x 23,834,737 ops/sec ±4.50% (11 runs sampled)
evee x 23,770,647 ops/sec ±5.68% (11 runs sampled)
event-signal x 20,425,018 ops/sec ±5.82% (11 runs sampled)
EventEmitter2 x 18,433,832 ops/sec ±4.02% (11 runs sampled)
rxjs Subject x 9,507,495 ops/sec ±5.80% (11 runs sampled)
JS-Signals x 4,414,812 ops/sec ±5.81% (11 runs sampled)
signal-emitter x 2,742,411 ops/sec ±4.80% (11 runs sampled)
```

_Fastest is **ReactiveProperty, sister, MiniSignals**_

## emit variable number of values

```
Theoretical max x 195,523,515 ops/sec ±3.29% (11 runs sampled) *burn in*
MiniSignals x 9,250,042 ops/sec ±4.90% (11 runs sampled)
EventEmitter3 x 6,264,636 ops/sec ±8.72% (10 runs sampled)
signal-lite x 6,466,390 ops/sec ±14.43% (11 runs sampled)
EventEmitter x 5,770,904 ops/sec ±3.18% (11 runs sampled)
EventEmitter2 x 3,323,673 ops/sec ±11.58% (11 runs sampled)
JS-Signals x 1,025,851 ops/sec ±4.83% (11 runs sampled)
signal-emitter x 698,825 ops/sec ±5.63% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
Theoretical max x 116,572,681 ops/sec ±5.33% (10 runs sampled) *burn in*
EventEmitter3 x 68,746,806 ops/sec ±5.58% (11 runs sampled)
EventEmitter2 x 48,709,905 ops/sec ±8.75% (11 runs sampled)
EventEmitter x 23,290,409 ops/sec ±9.57% (11 runs sampled)
JS-Signals x 19,549,775 ops/sec ±22.69% (11 runs sampled)
ReactiveProperty x 16,265,168 ops/sec ±9.13% (11 runs sampled)
MiniSignals x 9,012,247 ops/sec ±5.95% (10 runs sampled)
```

_Fastest is **EventEmitter3**_
