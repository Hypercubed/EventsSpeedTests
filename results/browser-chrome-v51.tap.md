# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 2ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 6ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 2ms]
- ✔ emit one object - one listener [pass: 44, fail: 0, duration: 2ms]
- ✔ emit one object - two listeners [pass: 60, fail: 0, duration: 2ms]
- ✔ emit one random value - one listener [pass: 54, fail: 0, duration: 3ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 7ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 2ms]
- ✔ emit one value - many listeners [pass: 38, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 2ms]
- ✔ emit one value - with context [pass: 54, fail: 0, duration: 2ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 18ms]
- ✔ init [pass: 24, fail: 0, duration: 6ms]

# Summary

- duration: 57ms
- planned: 669
- assertions: 669
- pass: 669
- fail: 0

# Comments

## Platform

Chrome 51.0.2704.106 on OS X 10.11.5 NODE_ENV = undefined BENCH = undefined

## add and remove

```
dripEmitter x 21,706,943 ops/sec ±11.01% (15 runs sampled)
MiniSignals x 8,685,378 ops/sec ±14.40% (15 runs sampled)
EventDispatcher x 5,256,651 ops/sec ±5.78% (14 runs sampled)
ReactiveProperty x 3,333,954 ops/sec ±6.30% (14 runs sampled)
pushStream x 2,911,903 ops/sec ±8.53% (14 runs sampled)
EventEmitter3 x 1,667,437 ops/sec ±5.80% (15 runs sampled)
EventEmitter x 1,302,033 ops/sec ±13.17% (13 runs sampled)
EventEmitter2 x 1,067,148 ops/sec ±7.53% (15 runs sampled)
JS-Signals x 662,432 ops/sec ±12.24% (15 runs sampled)
dripEmitterEnhanced x 513,171 ops/sec ±4.11% (15 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 9,059,322 ops/sec ±19.98% (14 runs sampled) *burn in*
signal-lite x 6,125,771 ops/sec ±4.00% (15 runs sampled)
sister x 6,038,024 ops/sec ±5.91% (14 runs sampled)
MicroSignals x 4,980,328 ops/sec ±11.69% (14 runs sampled)
MiniSignals x 4,591,767 ops/sec ±9.97% (14 runs sampled)
push-stream x 4,369,031 ops/sec ±11.21% (14 runs sampled)
EventEmitter3 x 4,097,394 ops/sec ±5.49% (15 runs sampled)
dripEmitter x 3,983,096 ops/sec ±3.82% (15 runs sampled)
ReactiveProperty x 3,672,846 ops/sec ±9.65% (14 runs sampled)
event-signal x 1,705,200 ops/sec ±4.65% (13 runs sampled)
EventEmitter2 x 1,225,692 ops/sec ±7.16% (15 runs sampled)
pull-notify x 1,039,376 ops/sec ±5.66% (15 runs sampled)
RXJS x 972,501 ops/sec ±10.31% (14 runs sampled)
evee x 768,321 ops/sec ±5.05% (15 runs sampled)
dripEmitterEnhanced x 587,404 ops/sec ±3.62% (14 runs sampled)
signal-emitter x 357,004 ops/sec ±3.73% (13 runs sampled)
EventEmitter x 153,959 ops/sec ±8.43% (14 runs sampled)
JS-Signals x 142,536 ops/sec ±6.32% (14 runs sampled)
```

_Fastest is **signal-lite, sister**_

## emit many values - two listeners

```
Theoretical max x 27,285,563 ops/sec ±5.53% (15 runs sampled) *burn in*
MiniSignals x 13,162,269 ops/sec ±8.70% (14 runs sampled)
signal-lite x 12,910,483 ops/sec ±9.61% (14 runs sampled)
dripEmitterEnhanced x 576,440 ops/sec ±5.41% (15 runs sampled)
EventEmitter3 x 608,466 ops/sec ±11.29% (13 runs sampled)
EventEmitter2 x 598,165 ops/sec ±13.26% (14 runs sampled)
signal-emitter x 467,671 ops/sec ±4.86% (15 runs sampled)
EventEmitter x 105,775 ops/sec ±10.15% (14 runs sampled)
JS-Signals x 102,777 ops/sec ±8.20% (15 runs sampled)
minivents x 47,992 ops/sec ±10.86% (14 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

## emit one object - one listener

```
mini-pipe x 8,224,752 ops/sec ±3.54% (14 runs sampled)
MiniSignals x 7,664,484 ops/sec ±6.74% (14 runs sampled)
Theoretical max x 7,998,157 ops/sec ±13.04% (15 runs sampled) *burn in*
push-stream x 7,050,916 ops/sec ±2.26% (15 runs sampled)
signal-lite x 7,055,484 ops/sec ±3.56% (14 runs sampled)
dripEmitter x 6,231,996 ops/sec ±4.70% (15 runs sampled)
ReactiveProperty x 6,081,666 ops/sec ±3.39% (15 runs sampled)
xstream x 6,067,597 ops/sec ±5.80% (14 runs sampled)
MicroSignals x 6,313,832 ops/sec ±10.24% (14 runs sampled)
EventEmitter2 x 5,839,672 ops/sec ±3.09% (15 runs sampled)
EventEmitter3 x 5,814,759 ops/sec ±3.26% (15 runs sampled)
sister x 5,157,098 ops/sec ±6.08% (14 runs sampled)
EventEmitter x 3,105,870 ops/sec ±2.00% (15 runs sampled)
EventDispatcher x 2,337,027 ops/sec ±6.66% (14 runs sampled)
pull-notify x 1,789,949 ops/sec ±3.13% (14 runs sampled)
pull-pushable x 1,868,534 ops/sec ±8.11% (15 runs sampled)
RXJS x 1,568,759 ops/sec ±5.46% (15 runs sampled)
event-signal x 1,513,569 ops/sec ±12.10% (13 runs sampled)
dripEmitterEnhanced x 698,736 ops/sec ±4.10% (14 runs sampled)
evee x 642,898 ops/sec ±11.77% (15 runs sampled)
signal-emitter x 311,657 ops/sec ±6.09% (14 runs sampled)
JS-Signals x 191,394 ops/sec ±7.84% (15 runs sampled)
```

_Fastest is **mini-pipe, MiniSignals**_

## emit one object - two listeners

```
Theoretical max x 6,108,065 ops/sec ±16.32% (15 runs sampled) *burn in*
MiniSignals x 4,885,721 ops/sec ±3.82% (15 runs sampled)
MicroSignals x 4,892,551 ops/sec ±4.10% (15 runs sampled)
push-stream x 4,648,740 ops/sec ±3.08% (15 runs sampled)
signal-lite x 4,571,614 ops/sec ±3.59% (15 runs sampled)
ReactiveProperty x 4,352,748 ops/sec ±4.34% (15 runs sampled)
dripEmitter x 4,043,841 ops/sec ±4.08% (15 runs sampled)
EventEmitter3 x 3,907,675 ops/sec ±3.90% (15 runs sampled)
sister x 3,947,807 ops/sec ±5.34% (14 runs sampled)
xstream x 3,103,083 ops/sec ±4.87% (15 runs sampled)
EventDispatcher x 2,204,538 ops/sec ±2.67% (15 runs sampled)
event-signal x 1,533,214 ops/sec ±3.93% (15 runs sampled)
RXJS x 1,246,888 ops/sec ±4.00% (15 runs sampled)
EventEmitter2 x 1,193,673 ops/sec ±7.73% (14 runs sampled)
pull-notify x 906,990 ops/sec ±4.17% (14 runs sampled)
evee x 717,090 ops/sec ±4.34% (15 runs sampled)
dripEmitterEnhanced x 674,001 ops/sec ±6.45% (15 runs sampled)
signal-emitter x 463,283 ops/sec ±3.28% (14 runs sampled)
EventEmitter x 186,680 ops/sec ±3.86% (15 runs sampled)
JS-Signals x 170,400 ops/sec ±4.27% (14 runs sampled)
```

_Fastest is **MiniSignals, MicroSignals**_

## emit one random value - one listener

```
MicroSignals x 24,929,449 ops/sec ±5.12% (15 runs sampled)
xstream x 24,718,085 ops/sec ±4.88% (14 runs sampled)
Theoretical max x 26,237,636 ops/sec ±11.96% (14 runs sampled) *burn in*
mini-pipe x 22,656,669 ops/sec ±4.73% (14 runs sampled)
MiniSignals x 22,299,270 ops/sec ±3.63% (15 runs sampled)
push-stream-patch x 18,704,088 ops/sec ±4.31% (15 runs sampled)
EventEmitter3 x 18,313,892 ops/sec ±3.78% (15 runs sampled)
dripEmitter x 18,171,066 ops/sec ±3.72% (15 runs sampled)
signal-lite x 17,820,307 ops/sec ±3.95% (15 runs sampled)
push-stream x 17,828,846 ops/sec ±4.14% (15 runs sampled)
EventEmitter2 x 16,973,301 ops/sec ±3.57% (15 runs sampled)
ReactiveProperty x 14,519,680 ops/sec ±4.63% (14 runs sampled)
EventEmitter x 9,411,748 ops/sec ±6.42% (15 runs sampled)
observ x 7,783,897 ops/sec ±4.26% (15 runs sampled)
pull-notify x 6,561,399 ops/sec ±3.09% (15 runs sampled)
pull-pushable x 6,157,402 ops/sec ±6.18% (14 runs sampled)
event-signal x 6,058,050 ops/sec ±8.76% (14 runs sampled)
RXJS x 5,039,769 ops/sec ±4.73% (15 runs sampled)
barracks x 4,405,619 ops/sec ±7.56% (14 runs sampled)
d3-dispatch x 3,819,536 ops/sec ±2.96% (14 runs sampled)
dripEmitterEnhanced x 2,468,326 ops/sec ±2.14% (15 runs sampled)
evee x 2,318,123 ops/sec ±4.12% (14 runs sampled)
signal-emitter x 1,390,060 ops/sec ±4.03% (14 runs sampled)
observable x 735,325 ops/sec ±5.54% (15 runs sampled)
JS-Signals x 605,519 ops/sec ±4.73% (15 runs sampled)
minivents x 602,813 ops/sec ±8.31% (15 runs sampled)
namespace-emitter x 512,295 ops/sec ±3.94% (14 runs sampled)
```

_Fastest is **MicroSignals, xstream**_

## emit one random value - two listeners

```
MicroSignals x 14,995,329 ops/sec ±4.50% (15 runs sampled)
Theoretical max x 14,888,128 ops/sec ±7.88% (14 runs sampled) *burn in*
push-stream-patch x 13,800,657 ops/sec ±3.41% (15 runs sampled)
MiniSignals x 13,430,663 ops/sec ±3.47% (15 runs sampled)
signal-lite x 13,113,416 ops/sec ±2.73% (15 runs sampled)
push-stream x 13,262,634 ops/sec ±4.36% (15 runs sampled)
xstream x 12,357,219 ops/sec ±2.44% (14 runs sampled)
dripEmitter x 12,176,617 ops/sec ±3.66% (15 runs sampled)
EventEmitter3 x 12,066,883 ops/sec ±3.49% (15 runs sampled)
ReactiveProperty x 10,917,414 ops/sec ±4.09% (14 runs sampled)
event-signal x 5,056,029 ops/sec ±10.27% (15 runs sampled)
observ x 4,603,646 ops/sec ±4.16% (15 runs sampled)
EventEmitter2 x 4,145,412 ops/sec ±2.76% (15 runs sampled)
RXJS x 3,848,426 ops/sec ±4.68% (15 runs sampled)
pull-notify x 2,958,078 ops/sec ±4.74% (15 runs sampled)
waddup x 2,431,686 ops/sec ±9.95% (15 runs sampled)
evee x 2,263,198 ops/sec ±3.90% (15 runs sampled)
dripEmitterEnhanced x 2,226,181 ops/sec ±3.70% (15 runs sampled)
d3-dispatch x 2,129,095 ops/sec ±4.82% (14 runs sampled)
signal-emitter x 1,392,354 ops/sec ±3.46% (15 runs sampled)
observable x 723,655 ops/sec ±3.41% (15 runs sampled)
EventEmitter x 576,729 ops/sec ±3.02% (15 runs sampled)
JS-Signals x 523,345 ops/sec ±2.67% (15 runs sampled)
namespace-emitter x 433,702 ops/sec ±3.71% (14 runs sampled)
minivents x 347,313 ops/sec ±8.15% (14 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - bound function

```
Theoretical max x 27,178,723 ops/sec ±10.10% (14 runs sampled) *burn in*
MicroSignals x 16,790,256 ops/sec ±2.72% (15 runs sampled)
push-stream x 14,348,667 ops/sec ±3.98% (15 runs sampled)
xstream x 12,681,740 ops/sec ±3.64% (15 runs sampled)
ReactiveProperty x 12,814,162 ops/sec ±8.80% (14 runs sampled)
EventEmitter3 x 11,744,015 ops/sec ±3.67% (14 runs sampled)
dripEmitter x 10,245,675 ops/sec ±12.29% (14 runs sampled)
MiniSignals x 7,161,119 ops/sec ±4.69% (15 runs sampled)
signal-lite x 5,730,851 ops/sec ±3.93% (15 runs sampled)
event-signal x 5,395,047 ops/sec ±6.66% (15 runs sampled)
EventEmitter2 x 4,127,685 ops/sec ±2.55% (13 runs sampled)
RXJS x 3,440,498 ops/sec ±15.76% (14 runs sampled)
pull-notify x 3,081,860 ops/sec ±5.01% (14 runs sampled)
dripEmitterEnhanced x 1,803,103 ops/sec ±8.46% (14 runs sampled)
signal-emitter x 1,351,209 ops/sec ±4.07% (14 runs sampled)
evee x 1,085,245 ops/sec ±6.56% (15 runs sampled)
EventEmitter x 513,238 ops/sec ±8.08% (13 runs sampled)
JS-Signals x 494,740 ops/sec ±5.58% (14 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - many listeners

```
dripEmitter x 4,309,751 ops/sec ±3.87% (15 runs sampled)
Theoretical max x 4,406,192 ops/sec ±6.64% (14 runs sampled) *burn in*
signal-lite x 4,365,399 ops/sec ±6.40% (15 runs sampled)
MiniSignals x 4,329,142 ops/sec ±5.76% (15 runs sampled)
MicroSignal x 4,043,833 ops/sec ±3.31% (14 runs sampled)
push-stream x 4,102,356 ops/sec ±5.80% (15 runs sampled)
EventEmitter3 x 3,776,121 ops/sec ±5.80% (15 runs sampled)
xstream x 3,433,266 ops/sec ±6.90% (14 runs sampled)
ReactiveProperty x 3,355,303 ops/sec ±7.36% (15 runs sampled)
event-signal x 2,653,781 ops/sec ±5.14% (15 runs sampled)
EventEmitter2 x 2,286,614 ops/sec ±3.76% (15 runs sampled)
RXJS x 1,580,732 ops/sec ±4.16% (15 runs sampled)
dripEmitterEnhanced x 1,462,835 ops/sec ±3.52% (14 runs sampled)
signal-emitter x 1,124,574 ops/sec ±6.24% (15 runs sampled)
evee x 1,014,048 ops/sec ±2.45% (15 runs sampled)
pull-notify x 697,394 ops/sec ±10.39% (15 runs sampled)
JS-Signals x 273,945 ops/sec ±3.05% (15 runs sampled)
EventEmitter x 277,081 ops/sec ±8.07% (15 runs sampled)
minivents x 74,236 ops/sec ±4.30% (14 runs sampled)
```

_Fastest is **dripEmitter, signal-lite, MiniSignals, push-stream**_

## emit one value - one listener

```
MicroSignals x 32,833,896 ops/sec ±4.18% (15 runs sampled)
Theoretical max x 32,174,414 ops/sec ±11.26% (14 runs sampled) *burn in*
xstream x 29,516,129 ops/sec ±6.09% (15 runs sampled)
mini-pipe x 28,397,448 ops/sec ±3.37% (15 runs sampled)
MiniSignals x 27,500,740 ops/sec ±3.20% (15 runs sampled)
sister x 23,078,087 ops/sec ±5.51% (15 runs sampled)
dripEmitter x 21,674,533 ops/sec ±3.93% (14 runs sampled)
push-stream-patch x 21,082,949 ops/sec ±4.58% (15 runs sampled)
push-stream x 19,634,194 ops/sec ±3.86% (15 runs sampled)
ReactiveProperty x 17,770,825 ops/sec ±3.78% (15 runs sampled)
EventEmitter3 x 18,674,105 ops/sec ±10.06% (14 runs sampled)
signal-lite x 17,181,549 ops/sec ±8.60% (14 runs sampled)
EventEmitter2 x 18,981,004 ops/sec ±23.53% (15 runs sampled)
EventEmitter x 10,200,821 ops/sec ±3.22% (15 runs sampled)
observ x 8,883,146 ops/sec ±2.66% (15 runs sampled)
pull-notify x 6,226,600 ops/sec ±1.78% (15 runs sampled)
pull-pushable x 6,316,821 ops/sec ±7.77% (15 runs sampled)
RXJS x 5,551,626 ops/sec ±3.86% (14 runs sampled)
event-signal x 5,892,536 ops/sec ±17.69% (14 runs sampled)
barracks x 4,830,032 ops/sec ±3.74% (15 runs sampled)
d3-dispatch x 4,314,684 ops/sec ±7.10% (15 runs sampled)
dripEmitterEnhanced x 2,250,464 ops/sec ±5.49% (14 runs sampled)
evee x 2,169,912 ops/sec ±2.66% (15 runs sampled)
signal-emitter x 1,392,197 ops/sec ±4.11% (13 runs sampled)
observable x 748,212 ops/sec ±3.78% (15 runs sampled)
JS-Signals x 573,735 ops/sec ±2.51% (15 runs sampled)
namespace-emitter x 462,291 ops/sec ±3.18% (14 runs sampled)
minivents x 469,039 ops/sec ±8.32% (14 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one value - two listeners

```
Theoretical max x 19,360,753 ops/sec ±6.16% (15 runs sampled) *burn in*
sister x 17,208,084 ops/sec ±7.33% (14 runs sampled)
MiniSignals x 16,509,623 ops/sec ±3.98% (15 runs sampled)
MicroSignals x 15,671,421 ops/sec ±3.60% (15 runs sampled)
signal-lite x 15,100,911 ops/sec ±2.24% (14 runs sampled)
push-stream-patch x 13,009,479 ops/sec ±3.64% (15 runs sampled)
dripEmitter x 12,556,153 ops/sec ±1.99% (15 runs sampled)
push-stream x 13,056,722 ops/sec ±9.52% (15 runs sampled)
xstream x 10,661,649 ops/sec ±4.70% (15 runs sampled)
EventEmitter3 x 10,611,488 ops/sec ±4.34% (15 runs sampled)
ReactiveProperty x 10,164,097 ops/sec ±31.18% (15 runs sampled)
observ x 5,490,361 ops/sec ±2.23% (14 runs sampled)
event-signal x 5,152,635 ops/sec ±5.77% (15 runs sampled)
RXJS x 3,820,130 ops/sec ±2.63% (15 runs sampled)
EventEmitter2 x 3,700,129 ops/sec ±6.75% (15 runs sampled)
pull-notify x 2,783,174 ops/sec ±7.87% (14 runs sampled)
evee x 2,340,409 ops/sec ±2.64% (15 runs sampled)
d3-dispatch x 2,233,134 ops/sec ±4.06% (15 runs sampled)
dripEmitterEnhanced x 2,110,615 ops/sec ±4.65% (13 runs sampled)
waddup x 1,766,414 ops/sec ±13.46% (14 runs sampled)
signal-emitter x 1,408,650 ops/sec ±2.72% (15 runs sampled)
observable x 672,094 ops/sec ±12.08% (15 runs sampled)
JS-Signals x 515,170 ops/sec ±4.00% (15 runs sampled)
EventEmitter x 462,301 ops/sec ±3.99% (14 runs sampled)
namespace-emitter x 399,076 ops/sec ±4.78% (14 runs sampled)
minivents x 323,609 ops/sec ±7.85% (15 runs sampled)
```

_Fastest is **sister, MiniSignals**_

## emit one value - with context

```
Theoretical max x 24,044,306 ops/sec ±10.71% (13 runs sampled) *burn in*
MicroSignals x 16,706,715 ops/sec ±3.43% (15 runs sampled)
sister x 15,915,487 ops/sec ±6.70% (14 runs sampled)
MiniSignals x 15,410,332 ops/sec ±4.40% (13 runs sampled)
push-stream x 13,788,537 ops/sec ±4.33% (14 runs sampled)
signal-lite x 13,764,711 ops/sec ±6.10% (14 runs sampled)
ReactiveProperty x 12,489,244 ops/sec ±2.37% (15 runs sampled)
dripEmitter x 11,112,170 ops/sec ±2.86% (15 runs sampled)
EventEmitter3 x 11,266,856 ops/sec ±9.85% (14 runs sampled)
event-signal x 5,209,296 ops/sec ±8.04% (14 runs sampled)
EventEmitter2 x 4,470,617 ops/sec ±3.03% (15 runs sampled)
RXJS x 3,798,964 ops/sec ±4.18% (15 runs sampled)
pull-notify x 3,045,992 ops/sec ±3.93% (15 runs sampled)
dripEmitterEnhanced x 1,854,750 ops/sec ±3.45% (15 runs sampled)
signal-emitter x 1,355,585 ops/sec ±6.54% (14 runs sampled)
evee x 1,070,303 ops/sec ±6.83% (14 runs sampled)
EventEmitter x 561,369 ops/sec ±2.64% (15 runs sampled)
JS-Signals x 389,464 ops/sec ±5.87% (14 runs sampled)
```

_Fastest is **MicroSignals, sister**_

## emit variable number of values

```
Theoretical max x 5,851,319 ops/sec ±8.62% (15 runs sampled) *burn in*
MiniSignals x 4,374,794 ops/sec ±4.44% (15 runs sampled)
signal-lite x 4,030,459 ops/sec ±5.45% (15 runs sampled)
EventEmitter3 x 1,179,505 ops/sec ±3.29% (15 runs sampled)
EventEmitter2 x 656,698 ops/sec ±5.66% (15 runs sampled)
dripEmitterEnhanced x 433,302 ops/sec ±3.35% (15 runs sampled)
signal-emitter x 286,975 ops/sec ±4.43% (15 runs sampled)
JS-Signals x 109,667 ops/sec ±4.19% (15 runs sampled)
EventEmitter x 106,744 ops/sec ±5.13% (14 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
DripEmitter x 47,384,798 ops/sec ±2.95% (15 runs sampled)
EventEmitter3 x 44,569,622 ops/sec ±4.96% (15 runs sampled)
Theoretical max x 44,675,278 ops/sec ±5.37% (15 runs sampled) *burn in*
EventDispatcher x 44,279,683 ops/sec ±11.29% (15 runs sampled)
EventEmitter x 32,947,886 ops/sec ±2.64% (15 runs sampled)
EventEmitter2 x 30,346,860 ops/sec ±3.05% (15 runs sampled)
MiniSignals x 25,413,248 ops/sec ±16.90% (15 runs sampled)
DripEmitterEnhanced x 19,175,198 ops/sec ±3.34% (15 runs sampled)
push-stream x 10,987,815 ops/sec ±15.97% (15 runs sampled)
JS-Signals x 1,776,352 ops/sec ±14.77% (12 runs sampled)
ReactiveProperty x 1,108,540 ops/sec ±16.48% (13 runs sampled)
pull-notify x 705,737 ops/sec ±16.18% (12 runs sampled)
```

_Fastest is **DripEmitter, EventDispatcher**_
