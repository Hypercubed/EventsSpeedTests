# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 20, fail: 0, duration: 2ms]
- ✔ emit one array [pass: 54, fail: 0, duration: 5ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 3ms]
- ✔ emit one object - one listener [pass: 46, fail: 0, duration: 1ms]
- ✔ emit one object - two listeners [pass: 63, fail: 0, duration: 11ms]
- ✔ emit one random value - one listener [pass: 56, fail: 0, duration: 4ms]
- ✔ emit one random value - two listeners [pass: 75, fail: 0, duration: 1ms]
- ✔ emit one value - bound function [pass: 54, fail: 0, duration: 3ms]
- ✔ emit one value - many listeners [pass: 40, fail: 0, duration: 1ms]
- ✔ emit one value - one listener [pass: 56, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 78, fail: 0, duration: 1ms]
- ✔ emit one value - with context [pass: 57, fail: 0, duration: 1ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 1ms]
- ✔ init [pass: 24, fail: 0, duration: 7ms]

# Summary

- duration: 43ms
- planned: 681
- assertions: 681
- pass: 681
- fail: 0

# Comments

## Platform

Node.js 7.1.0 on Darwin 64-bit NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 28,279,432 ops/sec ±5.19% (11 runs sampled)
EventEmitter x 7,388,601 ops/sec ±13.35% (11 runs sampled)
MiniSignals x 3,572,831 ops/sec ±4.01% (11 runs sampled)
ReactiveProperty x 3,279,797 ops/sec ±4.63% (10 runs sampled)
EventEmitter3 x 1,875,184 ops/sec ±7.41% (10 runs sampled)
EventEmitter2 x 1,519,042 ops/sec ±8.27% (10 runs sampled)
pushStream x 945,266 ops/sec ±3.67% (11 runs sampled)
EventDispatcher x 900,013 ops/sec ±6.63% (11 runs sampled)
dripEmitterEnhanced x 384,078 ops/sec ±3.24% (11 runs sampled)
JS-Signals x 327,168 ops/sec ±3.04% (11 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 13,603,831 ops/sec ±3.08% (11 runs sampled) *burn in*
sister x 7,419,512 ops/sec ±3.25% (11 runs sampled)
MiniSignals x 7,367,736 ops/sec ±4.39% (11 runs sampled)
MicroSignals x 7,117,011 ops/sec ±7.71% (11 runs sampled)
signal-lite x 6,685,711 ops/sec ±4.36% (11 runs sampled)
push-stream x 6,485,427 ops/sec ±3.29% (11 runs sampled)
dripEmitter x 5,542,502 ops/sec ±4.69% (11 runs sampled)
EventEmitter3 x 5,353,262 ops/sec ±3.44% (11 runs sampled)
ReactiveProperty x 5,372,745 ops/sec ±6.68% (10 runs sampled)
evee x 4,434,099 ops/sec ±3.35% (11 runs sampled)
EventEmitter x 3,722,924 ops/sec ±4.44% (11 runs sampled)
pull-notify x 1,178,304 ops/sec ±3.89% (11 runs sampled)
dripEmitterEnhanced x 800,239 ops/sec ±4.92% (11 runs sampled)
signal-emitter x 526,034 ops/sec ±3.38% (11 runs sampled)
RXJS x 427,573 ops/sec ±4.96% (11 runs sampled)
EventEmitter2 x 412,046 ops/sec ±3.03% (11 runs sampled)
event-signal x 389,567 ops/sec ±5.70% (11 runs sampled)
JS-Signals x 200,087 ops/sec ±1.78% (11 runs sampled)
```

_Fastest is **sister, MiniSignals, MicroSignals**_

## emit many values - two listeners

```
Theoretical max x 29,956,638 ops/sec ±8.70% (11 runs sampled) *burn in*
MiniSignals x 15,675,171 ops/sec ±5.99% (11 runs sampled)
signal-lite x 15,079,814 ops/sec ±3.46% (11 runs sampled)
EventEmitter x 733,304 ops/sec ±9.53% (11 runs sampled)
EventEmitter3 x 704,442 ops/sec ±9.91% (11 runs sampled)
signal-emitter x 581,299 ops/sec ±2.71% (11 runs sampled)
dripEmitterEnhanced x 561,457 ops/sec ±10.25% (11 runs sampled)
EventEmitter2 x 467,963 ops/sec ±9.62% (11 runs sampled)
JS-Signals x 187,954 ops/sec ±9.25% (11 runs sampled)
minivents x 136,612 ops/sec ±4.09% (11 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

## emit one object - one listener

```
Theoretical max x 11,893,077 ops/sec ±2.91% (11 runs sampled) *burn in*
MicroSignals x 9,678,654 ops/sec ±9.21% (11 runs sampled)
MiniSignals x 8,689,460 ops/sec ±3.79% (11 runs sampled)
mini-pipe x 8,585,331 ops/sec ±9.73% (11 runs sampled)
signal-lite x 7,894,552 ops/sec ±4.02% (11 runs sampled)
push-stream x 7,296,091 ops/sec ±2.70% (11 runs sampled)
xstream x 7,062,558 ops/sec ±4.71% (11 runs sampled)
dripEmitter x 6,819,308 ops/sec ±2.62% (11 runs sampled)
ReactiveProperty x 6,723,933 ops/sec ±1.57% (11 runs sampled)
EventEmitter2 x 6,332,028 ops/sec ±5.35% (11 runs sampled)
sister x 6,255,348 ops/sec ±5.05% (10 runs sampled)
EventEmitter x 4,662,142 ops/sec ±3.25% (11 runs sampled)
evee x 4,107,444 ops/sec ±6.32% (11 runs sampled)
EventEmitter3 x 4,699,264 ops/sec ±38.17% (11 runs sampled)
EventDispatcher x 3,139,059 ops/sec ±2.11% (11 runs sampled)
pull-notify x 2,015,579 ops/sec ±5.87% (11 runs sampled)
pull-pushable x 2,026,690 ops/sec ±8.31% (11 runs sampled)
dripEmitterEnhanced x 800,208 ops/sec ±6.54% (11 runs sampled)
RXJS x 495,332 ops/sec ±2.19% (11 runs sampled)
signal-emitter x 466,721 ops/sec ±7.10% (10 runs sampled)
mobx x 436,555 ops/sec ±3.85% (11 runs sampled)
event-signal x 438,007 ops/sec ±5.98% (11 runs sampled)
JS-Signals x 215,451 ops/sec ±10.16% (11 runs sampled)
```

_Fastest is **MicroSignals**_

## emit one object - two listeners

```
Theoretical max x 7,905,001 ops/sec ±3.94% (10 runs sampled) *burn in*
MicroSignals x 5,645,302 ops/sec ±3.54% (11 runs sampled)
signal-lite x 5,102,987 ops/sec ±4.49% (11 runs sampled)
MiniSignals x 5,276,602 ops/sec ±8.77% (11 runs sampled)
push-stream x 4,859,827 ops/sec ±3.18% (11 runs sampled)
EventEmitter3 x 4,200,982 ops/sec ±3.12% (11 runs sampled)
ReactiveProperty x 4,358,456 ops/sec ±16.38% (11 runs sampled)
dripEmitter x 4,167,312 ops/sec ±15.02% (11 runs sampled)
sister x 3,512,394 ops/sec ±13.12% (11 runs sampled)
EventEmitter x 3,021,259 ops/sec ±4.99% (11 runs sampled)
xstream x 2,952,089 ops/sec ±10.14% (11 runs sampled)
evee x 2,852,057 ops/sec ±11.39% (11 runs sampled)
EventDispatcher x 2,377,495 ops/sec ±3.82% (11 runs sampled)
dripEmitterEnhanced x 790,243 ops/sec ±3.74% (11 runs sampled)
pull-notify x 882,911 ops/sec ±17.34% (11 runs sampled)
signal-emitter x 520,809 ops/sec ±4.47% (11 runs sampled)
RXJS x 401,044 ops/sec ±3.45% (10 runs sampled)
EventEmitter2 x 383,286 ops/sec ±4.61% (11 runs sampled)
event-signal x 392,359 ops/sec ±7.46% (11 runs sampled)
mobx x 352,530 ops/sec ±7.04% (11 runs sampled)
JS-Signals x 180,348 ops/sec ±4.51% (11 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals**_

## emit one random value - one listener

```
Theoretical max x 28,040,711 ops/sec ±15.46% (11 runs sampled) *burn in*
MiniSignals x 24,303,727 ops/sec ±2.36% (11 runs sampled)
mini-pipe x 23,771,219 ops/sec ±2.89% (11 runs sampled)
xstream x 23,989,323 ops/sec ±10.89% (11 runs sampled)
MicroSignals x 24,607,505 ops/sec ±15.44% (11 runs sampled)
signal-lite x 21,795,410 ops/sec ±6.52% (11 runs sampled)
push-stream x 19,342,375 ops/sec ±2.66% (11 runs sampled)
EventEmitter3 x 19,329,243 ops/sec ±3.57% (10 runs sampled)
EventEmitter2 x 19,240,694 ops/sec ±4.44% (11 runs sampled)
push-stream-patch x 18,434,994 ops/sec ±6.70% (11 runs sampled)
dripEmitter x 18,092,107 ops/sec ±17.23% (11 runs sampled)
ReactiveProperty x 15,963,514 ops/sec ±4.45% (11 runs sampled)
evee x 15,728,224 ops/sec ±4.09% (11 runs sampled)
EventEmitter x 13,941,257 ops/sec ±4.85% (11 runs sampled)
barracks x 9,444,685 ops/sec ±2.25% (11 runs sampled)
observ x 8,298,589 ops/sec ±3.49% (11 runs sampled)
pull-notify x 6,739,817 ops/sec ±3.79% (11 runs sampled)
pull-pushable x 6,568,223 ops/sec ±4.15% (11 runs sampled)
d3-dispatch x 3,734,832 ops/sec ±5.75% (11 runs sampled)
observable x 3,668,875 ops/sec ±9.83% (11 runs sampled)
dripEmitterEnhanced x 2,598,027 ops/sec ±3.90% (11 runs sampled)
RXJS x 1,517,101 ops/sec ±3.05% (11 runs sampled)
event-signal x 1,448,681 ops/sec ±4.79% (11 runs sampled)
signal-emitter x 1,438,854 ops/sec ±5.34% (11 runs sampled)
namespace-emitter x 1,132,809 ops/sec ±6.01% (11 runs sampled)
mobx x 843,235 ops/sec ±6.06% (11 runs sampled)
JS-Signals x 691,525 ops/sec ±4.42% (11 runs sampled)
minivents x 678,752 ops/sec ±22.37% (11 runs sampled)
```

_Fastest is **MiniSignals, mini-pipe, xstream**_

## emit one random value - two listeners

```
Theoretical max x 17,123,234 ops/sec ±3.74% (11 runs sampled) *burn in*
MicroSignals x 12,821,726 ops/sec ±3.15% (11 runs sampled)
MiniSignals x 12,247,130 ops/sec ±4.48% (11 runs sampled)
signal-lite x 12,633,611 ops/sec ±8.31% (11 runs sampled)
push-stream-patch x 11,362,080 ops/sec ±3.25% (11 runs sampled)
push-stream x 11,091,835 ops/sec ±4.00% (10 runs sampled)
xstream x 11,084,483 ops/sec ±6.47% (11 runs sampled)
dripEmitter x 10,582,619 ops/sec ±4.76% (11 runs sampled)
EventEmitter3 x 10,015,553 ops/sec ±5.07% (11 runs sampled)
ReactiveProperty x 9,368,114 ops/sec ±3.26% (11 runs sampled)
EventEmitter x 8,648,994 ops/sec ±6.38% (11 runs sampled)
evee x 7,836,640 ops/sec ±11.51% (11 runs sampled)
observ x 4,507,555 ops/sec ±5.54% (11 runs sampled)
waddup x 3,634,331 ops/sec ±10.23% (11 runs sampled)
observable x 2,803,307 ops/sec ±9.22% (10 runs sampled)
pull-notify x 2,114,435 ops/sec ±10.19% (11 runs sampled)
dripEmitterEnhanced x 1,837,806 ops/sec ±4.21% (11 runs sampled)
d3-dispatch x 1,444,010 ops/sec ±11.10% (11 runs sampled)
event-signal x 1,070,056 ops/sec ±3.84% (11 runs sampled)
EventEmitter2 x 1,043,694 ops/sec ±4.25% (11 runs sampled)
RXJS x 1,028,755 ops/sec ±4.74% (11 runs sampled)
signal-emitter x 984,441 ops/sec ±6.43% (11 runs sampled)
namespace-emitter x 701,145 ops/sec ±8.19% (11 runs sampled)
minivents x 429,569 ops/sec ±7.33% (11 runs sampled)
JS-Signals x 377,266 ops/sec ±5.26% (11 runs sampled)
```

_Fastest is **MicroSignals, MiniSignals, signal-lite**_

## emit one value - bound function

```
Theoretical max x 19,645,904 ops/sec ±10.24% (11 runs sampled) *burn in*
MicroSignals x 12,207,815 ops/sec ±14.52% (11 runs sampled)
ReactiveProperty x 10,617,273 ops/sec ±14.12% (11 runs sampled)
EventEmitter x 6,958,209 ops/sec ±11.01% (11 runs sampled)
MiniSignals x 5,551,391 ops/sec ±2.78% (11 runs sampled)
push-stream x 6,104,101 ops/sec ±16.22% (11 runs sampled)
dripEmitter x 4,846,088 ops/sec ±17.22% (10 runs sampled)
evee x 5,478,511 ops/sec ±34.54% (11 runs sampled)
EventEmitter3 x 4,771,895 ops/sec ±25.32% (10 runs sampled)
signal-lite x 3,375,169 ops/sec ±12.18% (11 runs sampled)
pull-notify x 1,570,870 ops/sec ±11.39% (11 runs sampled)
signal-emitter x 1,067,980 ops/sec ±8.57% (11 runs sampled)
event-signal x 914,136 ops/sec ±7.00% (11 runs sampled)
xstream x 1,787,233 ops/sec ±182.54% (11 runs sampled)
dripEmitterEnhanced x 588,219 ops/sec ±20.18% (11 runs sampled)
JS-Signals x 433,202 ops/sec ±6.72% (10 runs sampled)
EventEmitter2 x 469,921 ops/sec ±15.85% (10 runs sampled)
RXJS x 349,599 ops/sec ±18.55% (10 runs sampled)
```

_Fastest is **MicroSignals, ReactiveProperty**_

## emit one value - many listeners

```
Theoretical max x 3,660,033 ops/sec ±7.13% (11 runs sampled) *burn in*
push-stream x 3,148,251 ops/sec ±3.52% (11 runs sampled)
dripEmitter x 2,721,356 ops/sec ±4.54% (11 runs sampled)
EventEmitter3 x 1,876,900 ops/sec ±11.65% (11 runs sampled)
EventEmitter x 1,759,095 ops/sec ±12.34% (10 runs sampled)
MiniSignals x 1,533,660 ops/sec ±18.05% (11 runs sampled)
ReactiveProperty x 1,443,733 ops/sec ±17.75% (10 runs sampled)
MicroSignal x 1,392,719 ops/sec ±30.74% (10 runs sampled)
evee x 1,135,663 ops/sec ±26.52% (11 runs sampled)
xstream x 1,172,893 ops/sec ±31.25% (10 runs sampled)
dripEmitterEnhanced x 790,939 ops/sec ±11.28% (11 runs sampled)
signal-lite x 758,823 ops/sec ±51.97% (10 runs sampled)
signal-emitter x 315,274 ops/sec ±20.70% (10 runs sampled)
RXJS x 245,397 ops/sec ±13.08% (11 runs sampled)
EventEmitter2 x 220,783 ops/sec ±12.02% (11 runs sampled)
pull-notify x 221,771 ops/sec ±24.25% (11 runs sampled)
event-signal x 147,906 ops/sec ±25.46% (11 runs sampled)
mobx x 127,788 ops/sec ±29.55% (11 runs sampled)
JS-Signals x 64,172 ops/sec ±12.36% (11 runs sampled)
minivents x 41,882 ops/sec ±25.95% (11 runs sampled)
```

_Fastest is **push-stream**_

## emit one value - one listener

```
xstream x 32,294,196 ops/sec ±14.29% (11 runs sampled)
MicroSignals x 28,646,836 ops/sec ±7.00% (11 runs sampled)
signal-lite x 24,640,423 ops/sec ±3.92% (11 runs sampled)
sister x 26,825,673 ops/sec ±14.50% (11 runs sampled)
MiniSignals x 20,637,361 ops/sec ±14.51% (11 runs sampled)
evee x 18,852,463 ops/sec ±6.46% (11 runs sampled)
mini-pipe x 17,917,836 ops/sec ±7.84% (11 runs sampled)
ReactiveProperty x 14,731,772 ops/sec ±8.83% (11 runs sampled)
Theoretical max x 10,349,041 ops/sec ±23.69% (10 runs sampled) *burn in*
observ x 8,576,881 ops/sec ±5.93% (11 runs sampled)
pull-pushable x 6,676,306 ops/sec ±4.86% (11 runs sampled)
pull-notify x 6,376,618 ops/sec ±9.63% (11 runs sampled)
push-stream-patch x 6,591,943 ops/sec ±64.54% (11 runs sampled)
observable x 3,604,963 ops/sec ±5.76% (11 runs sampled)
d3-dispatch x 3,329,579 ops/sec ±7.96% (11 runs sampled)
push-stream x 4,160,401 ops/sec ±38.95% (11 runs sampled)
dripEmitterEnhanced x 1,819,278 ops/sec ±11.93% (11 runs sampled)
event-signal x 1,400,215 ops/sec ±8.16% (11 runs sampled)
RXJS x 1,349,880 ops/sec ±4.69% (10 runs sampled)
signal-emitter x 1,314,876 ops/sec ±8.49% (11 runs sampled)
barracks x 1,308,353 ops/sec ±28.10% (10 runs sampled)
EventEmitter x 1,212,040 ops/sec ±27.55% (10 runs sampled)
minivents x 798,253 ops/sec ±3.56% (11 runs sampled)
namespace-emitter x 840,801 ops/sec ±10.50% (11 runs sampled)
JS-Signals x 608,963 ops/sec ±3.70% (11 runs sampled)
dripEmitter x 751,963 ops/sec ±69.00% (10 runs sampled)
EventEmitter2 x 411,081 ops/sec ±13.47% (10 runs sampled)
EventEmitter3 x 98,801 ops/sec ±189.27% (10 runs sampled)
```

_Fastest is **xstream**_

## emit one value - two listeners

```
Theoretical max x 24,222,306 ops/sec ±6.56% (11 runs sampled) *burn in*
sister x 16,717,449 ops/sec ±6.34% (11 runs sampled)
MiniSignals x 15,398,761 ops/sec ±7.22% (11 runs sampled)
dripEmitter x 14,026,962 ops/sec ±4.15% (11 runs sampled)
xstream x 13,780,391 ops/sec ±4.90% (11 runs sampled)
MicroSignals x 14,366,203 ops/sec ±10.30% (11 runs sampled)
EventEmitter3 x 12,962,080 ops/sec ±3.84% (11 runs sampled)
push-stream-patch x 13,205,635 ops/sec ±16.31% (10 runs sampled)
ReactiveProperty x 11,928,973 ops/sec ±5.93% (11 runs sampled)
push-stream x 10,730,665 ops/sec ±7.37% (10 runs sampled)
signal-lite x 12,175,337 ops/sec ±22.66% (11 runs sampled)
EventEmitter x 10,075,125 ops/sec ±5.68% (10 runs sampled)
evee x 9,876,858 ops/sec ±8.63% (11 runs sampled)
observ x 5,524,872 ops/sec ±4.58% (11 runs sampled)
waddup x 4,631,374 ops/sec ±4.81% (11 runs sampled)
observable x 3,219,143 ops/sec ±5.57% (10 runs sampled)
pull-notify x 3,038,292 ops/sec ±3.53% (11 runs sampled)
d3-dispatch x 1,897,025 ops/sec ±7.51% (11 runs sampled)
dripEmitterEnhanced x 1,984,792 ops/sec ±13.26% (11 runs sampled)
signal-emitter x 1,519,475 ops/sec ±2.66% (11 runs sampled)
event-signal x 1,165,051 ops/sec ±4.17% (11 runs sampled)
RXJS x 886,299 ops/sec ±12.24% (11 runs sampled)
EventEmitter2 x 961,879 ops/sec ±24.47% (11 runs sampled)
namespace-emitter x 699,317 ops/sec ±12.16% (11 runs sampled)
minivents x 549,878 ops/sec ±5.63% (11 runs sampled)
JS-Signals x 431,771 ops/sec ±18.48% (10 runs sampled)
```

_Fastest is **sister, MiniSignals**_

## emit one value - with context

```
Theoretical max x 27,186,811 ops/sec ±4.35% (11 runs sampled) *burn in*
MiniSignals x 17,655,433 ops/sec ±3.54% (11 runs sampled)
signal-lite x 15,996,788 ops/sec ±5.11% (11 runs sampled)
sister x 16,155,785 ops/sec ±6.46% (11 runs sampled)
MicroSignals x 14,429,232 ops/sec ±9.92% (11 runs sampled)
push-stream x 13,478,933 ops/sec ±3.70% (10 runs sampled)
ReactiveProperty x 12,127,715 ops/sec ±5.88% (11 runs sampled)
EventEmitter3 x 11,035,091 ops/sec ±2.92% (11 runs sampled)
dripEmitter x 10,468,497 ops/sec ±13.28% (11 runs sampled)
evee x 8,785,685 ops/sec ±4.78% (11 runs sampled)
EventEmitter x 8,611,049 ops/sec ±3.09% (11 runs sampled)
pull-notify x 3,094,872 ops/sec ±2.63% (11 runs sampled)
dripEmitterEnhanced x 2,105,418 ops/sec ±7.94% (11 runs sampled)
signal-emitter x 1,485,803 ops/sec ±3.98% (11 runs sampled)
EventEmitter2 x 1,075,684 ops/sec ±7.70% (11 runs sampled)
event-signal x 1,098,262 ops/sec ±11.30% (11 runs sampled)
mobx x 993,406 ops/sec ±9.54% (11 runs sampled)
RXJS x 992,150 ops/sec ±11.47% (11 runs sampled)
JS-Signals x 468,880 ops/sec ±11.71% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit variable number of values

```
Theoretical max x 6,476,657 ops/sec ±8.26% (11 runs sampled) *burn in*
MiniSignals x 4,428,027 ops/sec ±3.75% (11 runs sampled)
signal-lite x 3,821,352 ops/sec ±13.64% (11 runs sampled)
EventEmitter x 2,108,064 ops/sec ±5.37% (11 runs sampled)
EventEmitter3 x 1,120,902 ops/sec ±2.00% (10 runs sampled)
dripEmitterEnhanced x 403,618 ops/sec ±5.38% (11 runs sampled)
signal-emitter x 298,100 ops/sec ±3.70% (11 runs sampled)
EventEmitter2 x 214,207 ops/sec ±9.92% (11 runs sampled)
JS-Signals x 122,986 ops/sec ±10.79% (11 runs sampled)
```

_Fastest is **MiniSignals, signal-lite**_

## init

```
DripEmitter x 47,357,488 ops/sec ±6.30% (11 runs sampled)
EventEmitter3 x 46,048,260 ops/sec ±5.23% (11 runs sampled)
EventDispatcher x 43,743,035 ops/sec ±4.42% (10 runs sampled)
EventEmitter2 x 29,127,311 ops/sec ±7.37% (11 runs sampled)
EventEmitter x 26,910,734 ops/sec ±4.44% (11 runs sampled)
Theoretical max x 34,931,347 ops/sec ±45.90% (11 runs sampled) *burn in*
DripEmitterEnhanced x 18,978,971 ops/sec ±5.20% (11 runs sampled)
push-stream x 13,936,876 ops/sec ±6.03% (11 runs sampled)
MiniSignals x 6,098,810 ops/sec ±7.84% (11 runs sampled)
JS-Signals x 1,797,273 ops/sec ±22.29% (11 runs sampled)
ReactiveProperty x 1,066,494 ops/sec ±20.27% (11 runs sampled)
pull-notify x 922,217 ops/sec ±22.29% (11 runs sampled)
```

_Fastest is **DripEmitter, EventEmitter3, EventDispatcher**_
