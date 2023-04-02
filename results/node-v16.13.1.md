# Tests

- ✔ add and remove [pass: 12, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 39, fail: 0, duration: 1ms]
- ✔ emit many values - two listeners [pass: 27, fail: 0, duration: 0ms]
- ✔ emit one object - one listener [pass: 26, fail: 0, duration: 0ms]
- ✔ emit one object - two listeners [pass: 39, fail: 0, duration: 0ms]
- ✔ emit one random value - one listener [pass: 34, fail: 0, duration: 0ms]
- ✔ emit one random value - two listeners [pass: 54, fail: 0, duration: 0ms]
- ✔ emit one value - bound function [pass: 36, fail: 0, duration: 0ms]
- ✔ emit one value - many listeners [pass: 26, fail: 0, duration: 0ms]
- ✔ emit one value - one listener [pass: 36, fail: 0, duration: 0ms]
- ✔ emit one value - two listeners [pass: 57, fail: 0, duration: 0ms]
- ✔ emit one value - with context [pass: 39, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 24, fail: 0, duration: 0ms]
- ✔ init [pass: 14, fail: 0, duration: 2ms]

# Summary

- duration: 5ms
- planned: 463
- assertions: 463
- pass: 463
- fail: 0

# Comments

## add and remove

```
EventEmitter3 x 53,209,849 ops/sec ±6.81% (11 runs sampled)
ReactiveProperty x 28,322,649 ops/sec ±7.70% (11 runs sampled)
EventEmitter x 12,384,422 ops/sec ±7.87% (11 runs sampled)
EventEmitter2 x 7,586,076 ops/sec ±11.87% (11 runs sampled)
MiniSignals x 5,154,782 ops/sec ±9.61% (11 runs sampled)
JS-Signals x 1,480,566 ops/sec ±7.56% (11 runs sampled)
```

_Fastest is **EventEmitter3**_

## emit one array

```
Theoretical max x 94,542,757 ops/sec ±7.33% (11 runs sampled) *burn in*
MiniSignals x 12,662,726 ops/sec ±5.56% (11 runs sampled)
sister x 12,587,581 ops/sec ±6.34% (11 runs sampled)
ReactiveProperty x 10,099,434 ops/sec ±6.69% (11 runs sampled)
signal-lite x 9,551,878 ops/sec ±5.37% (10 runs sampled)
evee x 9,248,934 ops/sec ±2.40% (11 runs sampled)
EventEmitter3 x 9,286,157 ops/sec ±6.63% (11 runs sampled)
event-signal x 7,696,301 ops/sec ±3.98% (10 runs sampled)
EventEmitter x 7,371,712 ops/sec ±7.52% (11 runs sampled)
EventEmitter2 x 6,023,837 ops/sec ±4.63% (11 runs sampled)
rxjs Subject x 3,581,708 ops/sec ±6.71% (10 runs sampled)
JS-Signals x 1,613,869 ops/sec ±4.68% (11 runs sampled)
signal-emitter x 856,456 ops/sec ±6.18% (11 runs sampled)
```

_Fastest is **MiniSignals, sister**_

## emit many values - two listeners

```
Theoretical max x 50,904,639 ops/sec ±5.28% (11 runs sampled) *burn in*
MiniSignals x 26,477,427 ops/sec ±7.43% (11 runs sampled)
signal-lite x 21,888,075 ops/sec ±8.49% (11 runs sampled)
EventEmitter x 18,688,195 ops/sec ±7.61% (11 runs sampled)
EventEmitter3 x 8,655,897 ops/sec ±1.85% (11 runs sampled)
EventEmitter2 x 6,821,106 ops/sec ±8.60% (11 runs sampled)
minivents x 4,019,595 ops/sec ±7.46% (11 runs sampled)
JS-Signals x 3,822,312 ops/sec ±4.92% (11 runs sampled)
signal-emitter x 2,409,471 ops/sec ±6.35% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 40,122,654 ops/sec ±4.55% (11 runs sampled) *burn in*
MiniSignals x 25,004,176 ops/sec ±4.03% (11 runs sampled)
sister x 24,087,420 ops/sec ±11.49% (11 runs sampled)
ReactiveProperty x 21,390,044 ops/sec ±4.67% (11 runs sampled)
signal-lite x 17,577,069 ops/sec ±11.05% (11 runs sampled)
evee x 9,815,350 ops/sec ±6.33% (11 runs sampled)
EventEmitter2 x 9,473,383 ops/sec ±8.11% (11 runs sampled)
EventEmitter3 x 9,130,892 ops/sec ±5.72% (11 runs sampled)
EventEmitter x 8,947,905 ops/sec ±7.16% (11 runs sampled)
event-signal x 7,184,068 ops/sec ±5.45% (11 runs sampled)
rxjs Subject x 4,889,347 ops/sec ±6.66% (11 runs sampled)
JS-Signals x 1,469,041 ops/sec ±10.21% (11 runs sampled)
signal-emitter x 941,485 ops/sec ±6.91% (11 runs sampled)
```

_Fastest is **MiniSignals, sister**_

## emit one object - two listeners

```
Theoretical max x 25,556,340 ops/sec ±7.53% (11 runs sampled) *burn in*
MiniSignals x 9,564,933 ops/sec ±2.42% (11 runs sampled)
ReactiveProperty x 9,323,439 ops/sec ±7.83% (11 runs sampled)
sister x 7,247,286 ops/sec ±6.88% (11 runs sampled)
signal-lite x 6,780,949 ops/sec ±3.97% (11 runs sampled)
EventEmitter3 x 6,857,928 ops/sec ±6.64% (11 runs sampled)
EventEmitter x 6,031,651 ops/sec ±5.46% (11 runs sampled)
event-signal x 5,772,722 ops/sec ±6.48% (11 runs sampled)
EventEmitter2 x 5,218,030 ops/sec ±1.77% (11 runs sampled)
evee x 5,614,120 ops/sec ±11.13% (11 runs sampled)
rxjs Subject x 3,159,269 ops/sec ±4.61% (11 runs sampled)
JS-Signals x 1,384,085 ops/sec ±9.24% (11 runs sampled)
signal-emitter x 924,203 ops/sec ±6.51% (11 runs sampled)
```

_Fastest is **MiniSignals, ReactiveProperty**_

## emit one random value - one listener

```
Theoretical max x 88,749,608 ops/sec ±5.68% (10 runs sampled) *burn in*
MiniSignals x 76,943,265 ops/sec ±5.41% (11 runs sampled)
signal-lite x 58,628,552 ops/sec ±6.43% (11 runs sampled)
observ x 52,153,770 ops/sec ±3.32% (11 runs sampled)
EventEmitter x 47,748,516 ops/sec ±4.13% (11 runs sampled)
ReactiveProperty x 47,100,425 ops/sec ±4.95% (11 runs sampled)
EventEmitter3 x 41,613,084 ops/sec ±5.38% (11 runs sampled)
evee x 41,002,570 ops/sec ±6.45% (11 runs sampled)
EventEmitter2 x 33,750,136 ops/sec ±9.29% (10 runs sampled)
event-signal x 29,126,668 ops/sec ±5.57% (11 runs sampled)
d3-dispatch x 19,917,175 ops/sec ±1.05% (11 runs sampled)
namespace-emitter x 20,127,119 ops/sec ±4.76% (11 runs sampled)
rxjs Subject x 14,516,794 ops/sec ±5.50% (10 runs sampled)
minivents x 8,261,439 ops/sec ±9.67% (11 runs sampled)
observable x 6,111,443 ops/sec ±5.86% (11 runs sampled)
JS-Signals x 4,748,741 ops/sec ±8.94% (11 runs sampled)
signal-emitter x 2,962,827 ops/sec ±3.47% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one random value - two listeners

```
Theoretical max x 59,834,792 ops/sec ±0.82% (11 runs sampled) *burn in*
MiniSignals x 32,549,232 ops/sec ±4.55% (11 runs sampled)
observ x 29,079,605 ops/sec ±10.17% (11 runs sampled)
signal-lite x 28,273,352 ops/sec ±8.29% (11 runs sampled)
ReactiveProperty x 26,448,907 ops/sec ±6.55% (11 runs sampled)
EventEmitter3 x 25,496,088 ops/sec ±7.12% (11 runs sampled)
evee x 23,489,245 ops/sec ±4.87% (11 runs sampled)
EventEmitter x 23,497,086 ops/sec ±5.57% (11 runs sampled)
event-signal x 20,397,285 ops/sec ±4.94% (11 runs sampled)
EventEmitter2 x 16,435,330 ops/sec ±9.14% (11 runs sampled)
waddup x 15,247,388 ops/sec ±8.21% (11 runs sampled)
namespace-emitter x 14,866,686 ops/sec ±8.80% (11 runs sampled)
d3-dispatch x 12,982,966 ops/sec ±7.41% (11 runs sampled)
rxjs Subject x 11,140,126 ops/sec ±5.61% (11 runs sampled)
minivents x 5,632,115 ops/sec ±6.55% (11 runs sampled)
observable x 4,826,470 ops/sec ±5.94% (11 runs sampled)
JS-Signals x 4,152,212 ops/sec ±9.27% (11 runs sampled)
signal-emitter x 2,957,521 ops/sec ±9.68% (11 runs sampled)
```

_Fastest is **MiniSignals, observ**_

## emit one value - bound function

```
Theoretical max x 188,829,775 ops/sec ±5.12% (11 runs sampled) *burn in*
MiniSignals x 37,758,392 ops/sec ±3.36% (11 runs sampled)
ReactiveProperty x 37,487,100 ops/sec ±6.05% (11 runs sampled)
EventEmitter3 x 32,471,014 ops/sec ±4.59% (11 runs sampled)
signal-lite x 31,069,532 ops/sec ±7.06% (11 runs sampled)
evee x 24,486,492 ops/sec ±4.53% (11 runs sampled)
EventEmitter x 24,202,654 ops/sec ±8.53% (11 runs sampled)
event-signal x 21,650,518 ops/sec ±4.39% (11 runs sampled)
EventEmitter2 x 19,018,308 ops/sec ±5.31% (11 runs sampled)
rxjs Subject x 10,866,419 ops/sec ±10.43% (11 runs sampled)
JS-Signals x 4,224,576 ops/sec ±5.75% (11 runs sampled)
signal-emitter x 2,874,915 ops/sec ±2.65% (11 runs sampled)
```

_Fastest is **MiniSignals, ReactiveProperty**_

## emit one value - many listeners

```
ReactiveProperty x 19,379,328 ops/sec ±7.57% (11 runs sampled)
Theoretical max x 18,627,809 ops/sec ±6.30% (11 runs sampled) *burn in*
MiniSignals x 12,627,695 ops/sec ±7.90% (11 runs sampled)
evee x 11,802,417 ops/sec ±5.56% (11 runs sampled)
EventEmitter3 x 6,810,819 ops/sec ±2.99% (11 runs sampled)
signal-lite x 6,428,283 ops/sec ±4.63% (11 runs sampled)
event-signal x 6,254,749 ops/sec ±6.31% (10 runs sampled)
EventEmitter2 x 5,244,596 ops/sec ±7.34% (11 runs sampled)
rxjs Subject x 3,593,984 ops/sec ±2.45% (11 runs sampled)
EventEmitter x 4,169,674 ops/sec ±21.70% (11 runs sampled)
signal-emitter x 2,267,105 ops/sec ±3.02% (11 runs sampled)
JS-Signals x 1,486,388 ops/sec ±22.62% (10 runs sampled)
minivents x 1,283,862 ops/sec ±21.44% (10 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - one listener

```
Theoretical max x 858,914,781 ops/sec ±5.78% (11 runs sampled) *burn in*
sister x 172,990,922 ops/sec ±4.86% (11 runs sampled)
MiniSignals x 169,739,172 ops/sec ±5.49% (11 runs sampled)
observ x 147,396,178 ops/sec ±3.78% (11 runs sampled)
signal-lite x 114,963,649 ops/sec ±5.18% (11 runs sampled)
ReactiveProperty x 113,709,005 ops/sec ±5.87% (10 runs sampled)
EventEmitter x 71,773,387 ops/sec ±4.16% (10 runs sampled)
evee x 51,060,395 ops/sec ±2.28% (11 runs sampled)
EventEmitter3 x 45,951,666 ops/sec ±15.60% (11 runs sampled)
EventEmitter2 x 44,289,313 ops/sec ±19.71% (11 runs sampled)
event-signal x 32,097,753 ops/sec ±6.97% (11 runs sampled)
d3-dispatch x 21,553,244 ops/sec ±2.23% (11 runs sampled)
namespace-emitter x 21,453,418 ops/sec ±4.72% (11 runs sampled)
rxjs Subject x 17,190,469 ops/sec ±1.32% (11 runs sampled)
minivents x 8,260,774 ops/sec ±7.09% (11 runs sampled)
observable x 6,749,158 ops/sec ±3.09% (11 runs sampled)
JS-Signals x 5,208,284 ops/sec ±5.42% (11 runs sampled)
signal-emitter x 3,060,309 ops/sec ±6.50% (11 runs sampled)
```

_Fastest is **sister, MiniSignals**_

## emit one value - two listeners

```
Theoretical max x 870,050,171 ops/sec ±5.37% (10 runs sampled) *burn in*
observ x 41,672,586 ops/sec ±2.71% (11 runs sampled)
MiniSignals x 40,094,135 ops/sec ±9.11% (11 runs sampled)
ReactiveProperty x 37,387,358 ops/sec ±7.56% (11 runs sampled)
sister x 35,649,677 ops/sec ±4.92% (11 runs sampled)
signal-lite x 31,104,258 ops/sec ±4.33% (11 runs sampled)
EventEmitter3 x 29,612,961 ops/sec ±4.73% (11 runs sampled)
evee x 26,389,019 ops/sec ±4.46% (11 runs sampled)
EventEmitter x 26,081,020 ops/sec ±5.15% (11 runs sampled)
event-signal x 22,494,472 ops/sec ±5.37% (11 runs sampled)
d3-dispatch x 17,444,618 ops/sec ±5.14% (11 runs sampled)
EventEmitter2 x 16,960,741 ops/sec ±6.94% (11 runs sampled)
waddup x 16,169,447 ops/sec ±5.74% (11 runs sampled)
namespace-emitter x 15,585,403 ops/sec ±11.04% (11 runs sampled)
rxjs Subject x 11,213,153 ops/sec ±3.40% (10 runs sampled)
minivents x 5,880,471 ops/sec ±10.30% (11 runs sampled)
observable x 4,889,552 ops/sec ±6.07% (11 runs sampled)
JS-Signals x 3,751,158 ops/sec ±5.50% (11 runs sampled)
signal-emitter x 2,868,168 ops/sec ±6.25% (11 runs sampled)
```

_Fastest is **observ, MiniSignals**_

## emit one value - with context

```
Theoretical max x 169,958,324 ops/sec ±6.09% (11 runs sampled) *burn in*
ReactiveProperty x 37,966,092 ops/sec ±4.07% (11 runs sampled)
MiniSignals x 37,315,211 ops/sec ±7.67% (11 runs sampled)
signal-lite x 33,268,897 ops/sec ±6.06% (11 runs sampled)
EventEmitter3 x 31,012,541 ops/sec ±5.39% (10 runs sampled)
sister x 29,621,337 ops/sec ±7.45% (10 runs sampled)
event-signal x 23,431,201 ops/sec ±4.09% (11 runs sampled)
evee x 21,667,080 ops/sec ±15.31% (11 runs sampled)
EventEmitter x 21,178,894 ops/sec ±26.15% (11 runs sampled)
EventEmitter2 x 14,400,219 ops/sec ±13.47% (11 runs sampled)
rxjs Subject x 11,165,582 ops/sec ±5.05% (11 runs sampled)
JS-Signals x 4,197,816 ops/sec ±7.22% (11 runs sampled)
signal-emitter x 3,019,329 ops/sec ±7.09% (11 runs sampled)
```

_Fastest is **ReactiveProperty, MiniSignals**_

## emit variable number of values

```
Theoretical max x 256,581,444 ops/sec ±4.73% (11 runs sampled) *burn in*
MiniSignals x 9,609,488 ops/sec ±6.54% (11 runs sampled)
signal-lite x 7,760,248 ops/sec ±7.24% (11 runs sampled)
EventEmitter3 x 7,076,713 ops/sec ±12.93% (11 runs sampled)
EventEmitter x 4,510,139 ops/sec ±18.44% (11 runs sampled)
EventEmitter2 x 3,720,621 ops/sec ±6.75% (11 runs sampled)
JS-Signals x 1,178,067 ops/sec ±2.93% (11 runs sampled)
signal-emitter x 736,950 ops/sec ±3.87% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
Theoretical max x 119,315,297 ops/sec ±6.11% (11 runs sampled) *burn in*
EventEmitter3 x 77,936,781 ops/sec ±2.86% (11 runs sampled)
EventEmitter2 x 49,031,999 ops/sec ±3.39% (11 runs sampled)
EventEmitter x 25,061,749 ops/sec ±2.96% (11 runs sampled)
ReactiveProperty x 20,156,749 ops/sec ±4.06% (11 runs sampled)
JS-Signals x 21,899,916 ops/sec ±32.59% (10 runs sampled)
MiniSignals x 9,917,145 ops/sec ±22.96% (11 runs sampled)
```

_Fastest is **EventEmitter3**_
