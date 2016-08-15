# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 51, fail: 0, duration: 6ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 42, fail: 0, duration: 11ms]
- ✔ emit one object - two listeners [pass: 57, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 54, fail: 0, duration: 3ms]
- ✔ emit one value - two listeners [pass: 75, fail: 0, duration: 2ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 1ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one value - two listeners [pass: 75, fail: 0, duration: 4ms]
- ✔ emit one value - with context [pass: 51, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 0ms]
- ✔ init [pass: 24, fail: 0, duration: 7ms]

# Summary

- duration: 43ms
- planned: 653
- assertions: 653
- pass: 653
- fail: 0

# Comments

## Platform

Node.js 6.3.1 on Darwin 64-bit NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 27,159,993 ops/sec ±2.23% (17 runs sampled)
MiniSignals x 12,196,155 ops/sec ±27.77% (17 runs sampled)
ReactiveProperty x 4,808,533 ops/sec ±3.06% (16 runs sampled)
EventDispatcher x 4,682,832 ops/sec ±5.19% (15 runs sampled)
EventEmitter x 3,870,115 ops/sec ±9.12% (16 runs sampled)
pushStream x 3,465,521 ops/sec ±3.89% (17 runs sampled)
EventEmitter3 x 1,579,336 ops/sec ±8.64% (16 runs sampled)
EventEmitter2 x 1,050,298 ops/sec ±3.62% (17 runs sampled)
JS-Signals x 726,152 ops/sec ±11.08% (15 runs sampled)
dripEmitterEnhanced x 549,516 ops/sec ±5.06% (17 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 11,258,371 ops/sec ±9.96% (17 runs sampled) *burn in*
MicroSignals x 6,965,710 ops/sec ±2.77% (17 runs sampled)
MiniSignals x 7,018,536 ops/sec ±7.39% (16 runs sampled)
signal-lite x 5,934,549 ops/sec ±8.60% (17 runs sampled)
ReactiveProperty x 4,876,112 ops/sec ±6.77% (16 runs sampled)
push-stream x 4,817,747 ops/sec ±7.88% (16 runs sampled)
dripEmitter x 4,649,831 ops/sec ±9.18% (17 runs sampled)
EventEmitter3 x 4,275,284 ops/sec ±12.21% (16 runs sampled)
EventEmitter x 2,953,069 ops/sec ±13.25% (17 runs sampled)
event-signal x 1,932,015 ops/sec ±3.37% (17 runs sampled)
EventEmitter2 x 1,531,784 ops/sec ±5.20% (17 runs sampled)
RXJS x 1,408,027 ops/sec ±5.45% (17 runs sampled)
pull-notify x 1,156,309 ops/sec ±3.44% (17 runs sampled)
evee x 907,971 ops/sec ±4.15% (16 runs sampled)
dripEmitterEnhanced x 583,726 ops/sec ±5.05% (17 runs sampled)
signal-emitter x 239,848 ops/sec ±3.88% (17 runs sampled)
JS-Signals x 211,345 ops/sec ±2.79% (16 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit many values - two listeners

```
Theoretical max x 30,271,439 ops/sec ±4.27% (17 runs sampled) *burn in*
signal-lite x 12,694,155 ops/sec ±10.43% (17 runs sampled)
MiniSignals x 12,528,858 ops/sec ±9.87% (16 runs sampled)
EventEmitter3 x 625,514 ops/sec ±5.11% (16 runs sampled)
EventEmitter x 619,763 ops/sec ±8.68% (16 runs sampled)
EventEmitter2 x 513,714 ops/sec ±15.89% (16 runs sampled)
dripEmitterEnhanced x 452,263 ops/sec ±14.93% (16 runs sampled)
signal-emitter x 336,591 ops/sec ±5.15% (16 runs sampled)
JS-Signals x 158,509 ops/sec ±13.30% (17 runs sampled)
minivents x 118,947 ops/sec ±9.96% (17 runs sampled)
```

_Fastest is **signal-lite, MiniSignals**_

## emit one object - one listener

```
Theoretical max x 9,512,135 ops/sec ±6.00% (17 runs sampled) *burn in*
MicroSignals x 8,722,247 ops/sec ±12.14% (16 runs sampled)
MiniSignals x 8,203,063 ops/sec ±9.23% (16 runs sampled)
mini-pipe x 7,672,122 ops/sec ±6.82% (16 runs sampled)
signal-lite x 7,406,329 ops/sec ±11.68% (17 runs sampled)
xstream x 6,923,256 ops/sec ±4.51% (16 runs sampled)
dripEmitter x 6,010,805 ops/sec ±10.28% (15 runs sampled)
ReactiveProperty x 5,931,814 ops/sec ±13.23% (16 runs sampled)
push-stream x 5,740,037 ops/sec ±21.68% (16 runs sampled)
EventEmitter3 x 4,916,545 ops/sec ±8.92% (17 runs sampled)
EventEmitter x 4,160,816 ops/sec ±5.99% (17 runs sampled)
EventEmitter2 x 4,905,769 ops/sec ±29.25% (15 runs sampled)
EventDispatcher x 2,798,076 ops/sec ±3.56% (17 runs sampled)
pull-notify x 2,120,115 ops/sec ±10.04% (17 runs sampled)
pull-pushable x 1,875,336 ops/sec ±4.99% (16 runs sampled)
event-signal x 1,833,174 ops/sec ±5.18% (17 runs sampled)
RXJS x 1,604,970 ops/sec ±9.46% (17 runs sampled)
evee x 746,220 ops/sec ±3.98% (17 runs sampled)
dripEmitterEnhanced x 654,517 ops/sec ±5.69% (17 runs sampled)
JS-Signals x 224,928 ops/sec ±4.20% (17 runs sampled)
signal-emitter x 222,197 ops/sec ±5.68% (16 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 7,700,211 ops/sec ±2.66% (17 runs sampled) *burn in*
MicroSignals x 4,907,304 ops/sec ±2.83% (16 runs sampled)
MiniSignals x 4,954,858 ops/sec ±4.38% (17 runs sampled)
signal-lite x 4,557,498 ops/sec ±10.14% (16 runs sampled)
ReactiveProperty x 4,238,425 ops/sec ±8.95% (16 runs sampled)
dripEmitter x 4,026,631 ops/sec ±4.92% (17 runs sampled)
push-stream x 4,219,552 ops/sec ±10.38% (16 runs sampled)
EventEmitter3 x 3,718,331 ops/sec ±11.84% (14 runs sampled)
xstream x 3,203,760 ops/sec ±4.40% (17 runs sampled)
EventEmitter x 2,583,316 ops/sec ±8.84% (16 runs sampled)
EventDispatcher x 2,280,223 ops/sec ±4.06% (18 runs sampled)
event-signal x 1,622,058 ops/sec ±6.71% (17 runs sampled)
EventEmitter2 x 1,392,603 ops/sec ±9.23% (17 runs sampled)
RXJS x 1,324,565 ops/sec ±5.64% (17 runs sampled)
pull-notify x 930,875 ops/sec ±10.94% (16 runs sampled)
evee x 746,308 ops/sec ±5.61% (16 runs sampled)
dripEmitterEnhanced x 603,254 ops/sec ±9.39% (17 runs sampled)
signal-emitter x 225,847 ops/sec ±3.43% (16 runs sampled)
JS-Signals x 216,214 ops/sec ±2.32% (18 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals, signal-lite**_

## emit one value - one listener

```
Theoretical max x 28,330,740 ops/sec ±3.12% (17 runs sampled) *burn in*
xstream x 27,126,183 ops/sec ±5.55% (17 runs sampled)
MicroSignals x 24,736,554 ops/sec ±4.44% (17 runs sampled)
MiniSignals x 23,513,835 ops/sec ±4.67% (17 runs sampled)
mini-pipe x 19,972,809 ops/sec ±3.57% (17 runs sampled)
signal-lite x 20,229,058 ops/sec ±6.36% (16 runs sampled)
push-stream x 16,519,986 ops/sec ±2.39% (16 runs sampled)
push-stream-patch x 16,943,381 ops/sec ±6.64% (16 runs sampled)
EventEmitter2 x 16,596,255 ops/sec ±5.08% (16 runs sampled)
dripEmitter x 16,005,623 ops/sec ±10.33% (15 runs sampled)
ReactiveProperty x 14,429,835 ops/sec ±10.12% (15 runs sampled)
EventEmitter3 x 15,040,653 ops/sec ±18.71% (17 runs sampled)
EventEmitter x 11,579,231 ops/sec ±9.81% (16 runs sampled)
observ x 8,032,147 ops/sec ±10.41% (15 runs sampled)
pull-pushable x 6,859,749 ops/sec ±3.04% (15 runs sampled)
pull-notify x 6,954,261 ops/sec ±9.42% (17 runs sampled)
event-signal x 5,568,287 ops/sec ±8.79% (16 runs sampled)
RXJS x 4,921,941 ops/sec ±4.95% (16 runs sampled)
barracks x 3,938,276 ops/sec ±8.78% (17 runs sampled)
d3-dispatch x 2,443,151 ops/sec ±8.80% (16 runs sampled)
evee x 2,256,320 ops/sec ±11.63% (17 runs sampled)
dripEmitterEnhanced x 1,202,214 ops/sec ±20.00% (16 runs sampled)
minivents x 867,276 ops/sec ±3.78% (18 runs sampled)
JS-Signals x 764,311 ops/sec ±3.01% (17 runs sampled)
signal-emitter x 668,296 ops/sec ±7.43% (16 runs sampled)
namespace-emitter x 621,503 ops/sec ±6.27% (17 runs sampled)
observable x 527,092 ops/sec ±4.24% (17 runs sampled)
```

_Fastest is **xstream**_ Theoretical max x 39,717,437 ops/sec ±2.86% (17 runs sampled) _burn in_ MicroSignals x 34,082,816 ops/sec ±3.74% (16 runs sampled) xstream x 32,484,613 ops/sec ±5.92% (17 runs sampled) MiniSignals x 29,982,629 ops/sec ±4.27% (17 runs sampled) mini-pipe x 26,436,847 ops/sec ±5.57% (17 runs sampled) signal-lite x 23,466,804 ops/sec ±4.90% (15 runs sampled) EventEmitter2 x 21,137,468 ops/sec ±3.89% (17 runs sampled) push-stream-patch x 20,850,063 ops/sec ±3.19% (17 runs sampled) push-stream x 20,255,950 ops/sec ±2.64% (17 runs sampled) dripEmitter x 19,961,881 ops/sec ±4.22% (17 runs sampled) ReactiveProperty x 19,240,265 ops/sec ±5.07% (17 runs sampled) EventEmitter3 x 16,878,843 ops/sec ±19.24% (15 runs sampled) EventEmitter x 14,528,307 ops/sec ±5.15% (17 runs sampled) observ x 10,305,659 ops/sec ±5.31% (17 runs sampled) pull-notify x 7,188,880 ops/sec ±7.99% (17 runs sampled) pull-pushable x 6,843,979 ops/sec ±3.87% (16 runs sampled) event-signal x 6,339,425 ops/sec ±4.12% (16 runs sampled) RXJS x 5,386,749 ops/sec ±4.32% (17 runs sampled) barracks x 4,510,454 ops/sec ±4.27% (17 runs sampled) d3-dispatch x 3,320,152 ops/sec ±6.66% (16 runs sampled) evee x 2,291,111 ops/sec ±5.35% (17 runs sampled) dripEmitterEnhanced x 2,042,592 ops/sec ±4.24% (18 runs sampled) minivents x 843,024 ops/sec ±4.16% (17 runs sampled) JS-Signals x 715,042 ops/sec ±3.38% (17 runs sampled) signal-emitter x 666,623 ops/sec ±5.72% (17 runs sampled) namespace-emitter x 615,717 ops/sec ±4.29% (17 runs sampled) observable x 563,330 ops/sec ±2.36% (17 runs sampled) _Fastest is **MicroSignals, xstream**_

## emit one value - two listeners

```
MicroSignals x 15,215,087 ops/sec ±4.53% (17 runs sampled)
Theoretical max x 15,811,731 ops/sec ±12.80% (16 runs sampled) *burn in*
signal-lite x 14,264,510 ops/sec ±4.93% (17 runs sampled)
MiniSignals x 14,390,133 ops/sec ±10.29% (15 runs sampled)
push-stream x 13,230,965 ops/sec ±3.62% (17 runs sampled)
push-stream-patch x 13,603,120 ops/sec ±6.98% (17 runs sampled)
dripEmitter x 12,625,201 ops/sec ±5.67% (17 runs sampled)
EventEmitter3 x 12,042,336 ops/sec ±3.39% (17 runs sampled)
xstream x 11,011,065 ops/sec ±4.94% (17 runs sampled)
ReactiveProperty x 10,583,136 ops/sec ±6.98% (16 runs sampled)
EventEmitter x 8,302,562 ops/sec ±9.95% (16 runs sampled)
observ x 5,188,375 ops/sec ±3.54% (17 runs sampled)
event-signal x 4,875,744 ops/sec ±6.41% (17 runs sampled)
EventEmitter2 x 4,480,245 ops/sec ±8.70% (17 runs sampled)
RXJS x 3,395,587 ops/sec ±3.28% (16 runs sampled)
pull-notify x 2,829,575 ops/sec ±8.14% (17 runs sampled)
waddup x 2,286,933 ops/sec ±5.67% (17 runs sampled)
evee x 2,231,104 ops/sec ±3.59% (16 runs sampled)
dripEmitterEnhanced x 1,788,694 ops/sec ±6.97% (17 runs sampled)
d3-dispatch x 1,668,993 ops/sec ±5.93% (16 runs sampled)
signal-emitter x 683,370 ops/sec ±5.13% (17 runs sampled)
JS-Signals x 576,315 ops/sec ±4.00% (15 runs sampled)
namespace-emitter x 513,541 ops/sec ±7.77% (16 runs sampled)
minivents x 472,995 ops/sec ±5.03% (16 runs sampled)
observable x 417,491 ops/sec ±7.02% (17 runs sampled)
```

_Fastest is **MicroSignals, signal-lite, MiniSignals**_ Theoretical max x 22,403,666 ops/sec ±6.04% (16 runs sampled) _burn in_ MicroSignals x 16,930,861 ops/sec ±4.57% (17 runs sampled) signal-lite x 15,944,972 ops/sec ±3.58% (16 runs sampled) MiniSignals x 15,525,756 ops/sec ±3.90% (16 runs sampled) push-stream x 14,357,194 ops/sec ±4.45% (17 runs sampled) push-stream-patch x 14,180,904 ops/sec ±5.85% (17 runs sampled) EventEmitter3 x 12,481,847 ops/sec ±4.23% (16 runs sampled) dripEmitter x 12,773,345 ops/sec ±8.23% (17 runs sampled) ReactiveProperty x 12,144,869 ops/sec ±4.18% (17 runs sampled) xstream x 11,625,490 ops/sec ±11.24% (16 runs sampled) EventEmitter x 9,550,855 ops/sec ±3.80% (17 runs sampled) event-signal x 4,958,482 ops/sec ±8.06% (16 runs sampled) EventEmitter2 x 4,472,417 ops/sec ±7.73% (17 runs sampled) observ x 4,470,365 ops/sec ±8.67% (17 runs sampled) pull-notify x 3,077,782 ops/sec ±3.50% (18 runs sampled) RXJS x 3,212,981 ops/sec ±10.91% (16 runs sampled) evee x 2,369,754 ops/sec ±5.11% (17 runs sampled) waddup x 2,319,040 ops/sec ±6.49% (17 runs sampled) dripEmitterEnhanced x 1,845,807 ops/sec ±5.86% (17 runs sampled) d3-dispatch x 1,737,686 ops/sec ±6.55% (17 runs sampled) signal-emitter x 575,225 ops/sec ±6.81% (16 runs sampled) JS-Signals x 547,533 ops/sec ±6.89% (15 runs sampled) namespace-emitter x 458,191 ops/sec ±9.21% (15 runs sampled) minivents x 448,721 ops/sec ±7.00% (17 runs sampled) observable x 415,704 ops/sec ±3.86% (14 runs sampled) _Fastest is **MicroSignals**_

## emit one value - bound function

```
Theoretical max x 23,359,854 ops/sec ±8.11% (16 runs sampled) *burn in*
MicroSignals x 16,401,513 ops/sec ±10.85% (15 runs sampled)
push-stream x 14,472,298 ops/sec ±2.67% (17 runs sampled)
ReactiveProperty x 13,286,881 ops/sec ±4.58% (17 runs sampled)
xstream x 13,091,746 ops/sec ±3.61% (16 runs sampled)
dripEmitter x 12,401,399 ops/sec ±4.87% (17 runs sampled)
EventEmitter3 x 11,769,963 ops/sec ±3.90% (16 runs sampled)
EventEmitter x 7,817,964 ops/sec ±5.38% (16 runs sampled)
MiniSignals x 7,576,452 ops/sec ±4.38% (17 runs sampled)
signal-lite x 5,936,177 ops/sec ±4.06% (18 runs sampled)
event-signal x 5,159,582 ops/sec ±3.85% (16 runs sampled)
EventEmitter2 x 4,729,913 ops/sec ±3.14% (16 runs sampled)
RXJS x 4,060,392 ops/sec ±6.05% (17 runs sampled)
pull-notify x 3,180,463 ops/sec ±7.95% (17 runs sampled)
dripEmitterEnhanced x 1,865,756 ops/sec ±4.32% (16 runs sampled)
evee x 1,104,827 ops/sec ±3.97% (17 runs sampled)
signal-emitter x 710,320 ops/sec ±4.69% (15 runs sampled)
JS-Signals x 587,448 ops/sec ±3.85% (17 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - many listeners

```
MicroSignal x 4,576,592 ops/sec ±3.64% (17 runs sampled)
MiniSignals x 4,462,183 ops/sec ±4.44% (17 runs sampled)
signal-lite x 4,127,542 ops/sec ±5.64% (15 runs sampled)
push-stream x 3,983,205 ops/sec ±4.70% (15 runs sampled)
Theoretical max x 4,056,353 ops/sec ±12.19% (16 runs sampled) *burn in*
xstream x 3,790,370 ops/sec ±6.07% (17 runs sampled)
dripEmitter x 3,821,652 ops/sec ±7.38% (14 runs sampled)
EventEmitter3 x 3,625,898 ops/sec ±5.78% (17 runs sampled)
ReactiveProperty x 3,589,315 ops/sec ±8.24% (16 runs sampled)
EventEmitter x 3,260,363 ops/sec ±9.66% (15 runs sampled)
event-signal x 2,586,232 ops/sec ±6.22% (17 runs sampled)
EventEmitter2 x 2,221,760 ops/sec ±4.57% (17 runs sampled)
RXJS x 1,488,825 ops/sec ±4.08% (16 runs sampled)
dripEmitterEnhanced x 1,229,362 ops/sec ±4.72% (17 runs sampled)
evee x 976,512 ops/sec ±4.73% (17 runs sampled)
pull-notify x 701,842 ops/sec ±3.48% (17 runs sampled)
signal-emitter x 618,928 ops/sec ±3.58% (17 runs sampled)
JS-Signals x 274,945 ops/sec ±3.89% (17 runs sampled)
minivents x 105,040 ops/sec ±5.20% (17 runs sampled)
```

_Fastest is **MicroSignal, MiniSignals**_

## emit one value - with context

```
MicroSignals x 15,915,870 ops/sec ±2.71% (17 runs sampled)
MiniSignals x 15,642,988 ops/sec ±5.42% (16 runs sampled)
signal-lite x 15,396,711 ops/sec ±5.24% (17 runs sampled)
Theoretical max x 17,592,390 ops/sec ±23.68% (17 runs sampled) *burn in*
push-stream x 13,789,816 ops/sec ±3.82% (17 runs sampled)
dripEmitter x 12,616,492 ops/sec ±5.05% (17 runs sampled)
ReactiveProperty x 12,525,173 ops/sec ±5.79% (16 runs sampled)
EventEmitter3 x 12,825,635 ops/sec ±10.43% (16 runs sampled)
EventEmitter x 7,921,787 ops/sec ±4.58% (16 runs sampled)
event-signal x 4,929,465 ops/sec ±3.99% (16 runs sampled)
EventEmitter2 x 4,335,360 ops/sec ±9.24% (17 runs sampled)
RXJS x 3,747,335 ops/sec ±5.72% (17 runs sampled)
pull-notify x 3,071,528 ops/sec ±4.38% (16 runs sampled)
dripEmitterEnhanced x 1,864,565 ops/sec ±4.50% (17 runs sampled)
evee x 1,142,128 ops/sec ±6.57% (16 runs sampled)
signal-emitter x 690,996 ops/sec ±5.98% (16 runs sampled)
JS-Signals x 478,058 ops/sec ±5.02% (16 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals, signal-lite**_

## emit variable number of values

```
Theoretical max x 6,560,446 ops/sec ±5.05% (17 runs sampled) *burn in*
MiniSignals x 4,157,060 ops/sec ±7.12% (16 runs sampled)
signal-lite x 3,991,174 ops/sec ±5.43% (17 runs sampled)
EventEmitter x 1,635,073 ops/sec ±11.57% (16 runs sampled)
EventEmitter3 x 818,367 ops/sec ±11.03% (16 runs sampled)
EventEmitter2 x 585,484 ops/sec ±5.98% (16 runs sampled)
dripEmitterEnhanced x 292,475 ops/sec ±10.14% (16 runs sampled)
signal-emitter x 164,822 ops/sec ±4.61% (16 runs sampled)
JS-Signals x 144,700 ops/sec ±3.08% (17 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

## init

```
Theoretical max x 48,292,432 ops/sec ±3.46% (17 runs sampled) *burn in*
EventDispatcher x 44,769,965 ops/sec ±3.44% (15 runs sampled)
EventEmitter3 x 37,457,326 ops/sec ±6.51% (14 runs sampled)
DripEmitter x 40,922,598 ops/sec ±19.70% (17 runs sampled)
MiniSignals x 33,399,212 ops/sec ±6.36% (17 runs sampled)
EventEmitter2 x 26,263,729 ops/sec ±5.95% (17 runs sampled)
EventEmitter x 23,909,916 ops/sec ±3.13% (16 runs sampled)
DripEmitterEnhanced x 17,832,752 ops/sec ±8.87% (17 runs sampled)
push-stream x 12,798,715 ops/sec ±4.20% (17 runs sampled)
JS-Signals x 1,946,049 ops/sec ±17.61% (14 runs sampled)
ReactiveProperty x 964,178 ops/sec ±20.42% (13 runs sampled)
pull-notify x 890,800 ops/sec ±15.90% (14 runs sampled)
```

_Fastest is **EventDispatcher, DripEmitter**_
