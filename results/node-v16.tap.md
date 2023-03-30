# Tests

- ✔ Platform [pass: 1, fail: 0, duration: 1ms]
- ✔ add and remove [pass: 16, fail: 0, duration: 1ms]
- ✔ emit one array [pass: 45, fail: 0, duration: 0ms]
- ✔ emit many values - two listeners [pass: 30, fail: 0, duration: 0ms]
- ✔ emit one object - one listener [pass: 30, fail: 0, duration: 0ms]
- ✔ emit one object - two listeners [pass: 45, fail: 0, duration: 0ms]
- ✔ emit one random value - one listener [pass: 38, fail: 0, duration: 0ms]
- ✔ emit one random value - two listeners [pass: 60, fail: 0, duration: 1ms]
- ✔ emit one value - bound function [pass: 42, fail: 0, duration: 0ms]
- ✔ emit one value - many listeners [pass: 30, fail: 0, duration: 0ms]
- ✔ emit one value - one listener [pass: 40, fail: 0, duration: 1ms]
- ✔ emit one value - two listeners [pass: 63, fail: 0, duration: 0ms]
- ✔ emit one value - with context [pass: 45, fail: 0, duration: 0ms]
- ✔ emit variable number of values [pass: 27, fail: 0, duration: 0ms]
- ✔ init [pass: 18, fail: 0, duration: 2ms]

# Summary

- duration: 6ms
- planned: 530
- assertions: 530
- pass: 530
- fail: 0

# Comments

## Platform

Node.js 16.13.1 on Linux 64-bit NODE_ENV = production BENCH = undefined

## add and remove

```
dripEmitter x 160,245,130 ops/sec ±6.44% (11 runs sampled)
EventEmitter3 x 58,368,250 ops/sec ±4.62% (11 runs sampled)
ReactiveProperty x 28,035,423 ops/sec ±5.96% (11 runs sampled)
EventEmitter x 13,477,191 ops/sec ±4.05% (11 runs sampled)
EventEmitter2 x 7,941,649 ops/sec ±6.23% (11 runs sampled)
MiniSignals x 2,508,448 ops/sec ±12.38% (11 runs sampled)
dripEmitterEnhanced x 2,079,986 ops/sec ±4.29% (10 runs sampled)
JS-Signals x 1,419,136 ops/sec ±8.64% (11 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one array

```
Theoretical max x 92,551,180 ops/sec ±6.83% (11 runs sampled) *burn in*
MiniSignals x 12,851,890 ops/sec ±5.12% (11 runs sampled)
sister x 12,579,267 ops/sec ±6.32% (11 runs sampled)
signal-lite x 10,748,635 ops/sec ±4.28% (11 runs sampled)
ReactiveProperty x 10,850,842 ops/sec ±5.90% (11 runs sampled)
dripEmitter x 10,323,171 ops/sec ±5.00% (11 runs sampled)
evee x 8,878,382 ops/sec ±3.39% (11 runs sampled)
EventEmitter3 x 9,001,219 ops/sec ±5.01% (11 runs sampled)
event-signal x 8,096,440 ops/sec ±3.92% (11 runs sampled)
EventEmitter x 7,848,307 ops/sec ±5.19% (11 runs sampled)
EventEmitter2 x 6,014,994 ops/sec ±6.37% (11 runs sampled)
rxjs Subject x 3,494,204 ops/sec ±10.80% (11 runs sampled)
dripEmitterEnhanced x 1,584,946 ops/sec ±9.10% (11 runs sampled)
JS-Signals x 1,435,117 ops/sec ±6.63% (11 runs sampled)
signal-emitter x 981,618 ops/sec ±6.24% (11 runs sampled)
```

_Fastest is **MiniSignals, sister**_

## emit many values - two listeners

```
Theoretical max x 52,249,866 ops/sec ±6.14% (10 runs sampled) *burn in*
MiniSignals x 27,545,512 ops/sec ±9.52% (11 runs sampled)
signal-lite x 23,396,899 ops/sec ±6.21% (10 runs sampled)
EventEmitter x 18,234,486 ops/sec ±8.25% (11 runs sampled)
EventEmitter3 x 7,793,027 ops/sec ±7.84% (11 runs sampled)
EventEmitter2 x 7,468,518 ops/sec ±4.36% (11 runs sampled)
minivents x 4,017,505 ops/sec ±8.48% (11 runs sampled)
dripEmitterEnhanced x 3,544,993 ops/sec ±4.87% (10 runs sampled)
JS-Signals x 3,411,177 ops/sec ±8.95% (10 runs sampled)
signal-emitter x 2,390,399 ops/sec ±6.37% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one object - one listener

```
Theoretical max x 36,642,479 ops/sec ±6.57% (11 runs sampled) *burn in*
sister x 26,386,736 ops/sec ±5.27% (11 runs sampled)
MiniSignals x 25,618,907 ops/sec ±6.65% (11 runs sampled)
ReactiveProperty x 20,184,827 ops/sec ±5.58% (11 runs sampled)
signal-lite x 20,086,621 ops/sec ±7.97% (11 runs sampled)
dripEmitter x 13,267,026 ops/sec ±7.22% (11 runs sampled)
evee x 10,085,669 ops/sec ±4.92% (11 runs sampled)
EventEmitter3 x 9,773,002 ops/sec ±5.04% (11 runs sampled)
EventEmitter x 9,493,785 ops/sec ±5.25% (11 runs sampled)
EventEmitter2 x 8,792,804 ops/sec ±4.39% (11 runs sampled)
event-signal x 7,413,973 ops/sec ±6.58% (11 runs sampled)
rxjs Subject x 4,587,891 ops/sec ±5.74% (11 runs sampled)
JS-Signals x 1,706,828 ops/sec ±6.11% (11 runs sampled)
dripEmitterEnhanced x 1,626,343 ops/sec ±4.51% (11 runs sampled)
signal-emitter x 974,662 ops/sec ±6.26% (11 runs sampled)
```

_Fastest is **sister, MiniSignals**_

## emit one object - two listeners

```
Theoretical max x 28,744,519 ops/sec ±5.30% (10 runs sampled) *burn in*
ReactiveProperty x 8,818,655 ops/sec ±8.74% (11 runs sampled)
MiniSignals x 8,389,942 ops/sec ±7.47% (11 runs sampled)
sister x 7,957,247 ops/sec ±7.59% (11 runs sampled)
dripEmitter x 7,291,825 ops/sec ±6.37% (11 runs sampled)
EventEmitter3 x 7,063,847 ops/sec ±5.30% (11 runs sampled)
signal-lite x 6,459,409 ops/sec ±5.80% (10 runs sampled)
evee x 6,500,152 ops/sec ±6.55% (11 runs sampled)
EventEmitter x 6,198,222 ops/sec ±7.65% (11 runs sampled)
event-signal x 6,019,285 ops/sec ±8.02% (11 runs sampled)
EventEmitter2 x 4,915,163 ops/sec ±5.91% (11 runs sampled)
rxjs Subject x 3,071,009 ops/sec ±6.51% (11 runs sampled)
dripEmitterEnhanced x 1,530,793 ops/sec ±3.96% (11 runs sampled)
JS-Signals x 1,473,082 ops/sec ±4.97% (11 runs sampled)
signal-emitter x 909,869 ops/sec ±7.16% (11 runs sampled)
```

_Fastest is **ReactiveProperty, MiniSignals, sister**_

## emit one random value - one listener

```
Theoretical max x 87,869,354 ops/sec ±6.49% (11 runs sampled) *burn in*
dripEmitter x 82,440,440 ops/sec ±6.47% (11 runs sampled)
MiniSignals x 72,066,568 ops/sec ±6.74% (11 runs sampled)
signal-lite x 60,845,904 ops/sec ±5.15% (10 runs sampled)
ReactiveProperty x 45,536,476 ops/sec ±5.70% (11 runs sampled)
observ x 47,490,191 ops/sec ±11.95% (11 runs sampled)
EventEmitter x 43,167,405 ops/sec ±5.77% (11 runs sampled)
EventEmitter3 x 39,242,895 ops/sec ±12.00% (11 runs sampled)
evee x 38,635,587 ops/sec ±10.31% (11 runs sampled)
EventEmitter2 x 35,508,665 ops/sec ±9.84% (11 runs sampled)
event-signal x 28,865,221 ops/sec ±9.87% (11 runs sampled)
namespace-emitter x 19,808,671 ops/sec ±6.58% (11 runs sampled)
d3-dispatch x 18,043,300 ops/sec ±6.63% (11 runs sampled)
rxjs Subject x 15,855,193 ops/sec ±7.52% (11 runs sampled)
minivents x 8,715,707 ops/sec ±9.78% (11 runs sampled)
JS-Signals x 5,598,426 ops/sec ±6.27% (11 runs sampled)
observable x 5,392,612 ops/sec ±18.99% (10 runs sampled)
dripEmitterEnhanced x 4,875,785 ops/sec ±14.89% (10 runs sampled)
signal-emitter x 3,345,281 ops/sec ±4.73% (11 runs sampled)
```

_Fastest is **dripEmitter**_

## emit one random value - two listeners

```
Theoretical max x 55,165,434 ops/sec ±7.45% (11 runs sampled) *burn in*
MiniSignals x 35,260,710 ops/sec ±6.59% (11 runs sampled)
dripEmitter x 30,961,348 ops/sec ±6.72% (11 runs sampled)
signal-lite x 28,609,546 ops/sec ±6.91% (11 runs sampled)
EventEmitter3 x 26,413,467 ops/sec ±6.29% (11 runs sampled)
observ x 27,061,735 ops/sec ±11.55% (11 runs sampled)
event-signal x 23,077,767 ops/sec ±3.87% (11 runs sampled)
EventEmitter x 22,675,421 ops/sec ±8.62% (10 runs sampled)
evee x 22,363,034 ops/sec ±7.75% (11 runs sampled)
ReactiveProperty x 22,512,995 ops/sec ±15.43% (11 runs sampled)
EventEmitter2 x 16,284,165 ops/sec ±7.13% (11 runs sampled)
namespace-emitter x 15,294,893 ops/sec ±5.61% (10 runs sampled)
waddup x 14,480,881 ops/sec ±6.26% (11 runs sampled)
d3-dispatch x 12,980,588 ops/sec ±7.53% (11 runs sampled)
rxjs Subject x 9,356,804 ops/sec ±9.00% (10 runs sampled)
minivents x 5,617,113 ops/sec ±7.47% (10 runs sampled)
dripEmitterEnhanced x 5,374,583 ops/sec ±4.57% (11 runs sampled)
JS-Signals x 4,552,744 ops/sec ±8.73% (10 runs sampled)
observable x 4,444,133 ops/sec ±8.53% (11 runs sampled)
signal-emitter x 2,960,022 ops/sec ±6.42% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one value - bound function

```
Theoretical max x 184,994,814 ops/sec ±4.64% (10 runs sampled) *burn in*
MiniSignals x 42,278,195 ops/sec ±4.51% (11 runs sampled)
ReactiveProperty x 37,153,079 ops/sec ±4.71% (11 runs sampled)
dripEmitter x 36,575,068 ops/sec ±3.95% (11 runs sampled)
signal-lite x 31,901,607 ops/sec ±6.12% (11 runs sampled)
EventEmitter3 x 29,820,319 ops/sec ±7.64% (11 runs sampled)
evee x 27,370,148 ops/sec ±3.44% (10 runs sampled)
EventEmitter x 25,462,974 ops/sec ±5.80% (11 runs sampled)
event-signal x 24,721,216 ops/sec ±4.34% (10 runs sampled)
EventEmitter2 x 18,462,417 ops/sec ±5.76% (11 runs sampled)
rxjs Subject x 11,182,032 ops/sec ±4.39% (11 runs sampled)
dripEmitterEnhanced x 5,089,870 ops/sec ±5.54% (11 runs sampled)
JS-Signals x 4,375,917 ops/sec ±6.97% (11 runs sampled)
signal-emitter x 3,060,633 ops/sec ±5.07% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one value - many listeners

```
ReactiveProperty x 19,439,465 ops/sec ±5.33% (11 runs sampled)
Theoretical max x 19,296,872 ops/sec ±6.55% (11 runs sampled) *burn in*
MiniSignals x 13,013,098 ops/sec ±6.86% (10 runs sampled)
evee x 12,522,862 ops/sec ±4.04% (11 runs sampled)
dripEmitter x 8,040,395 ops/sec ±5.20% (11 runs sampled)
EventEmitter3 x 7,149,966 ops/sec ±4.73% (11 runs sampled)
EventEmitter x 6,092,238 ops/sec ±6.82% (11 runs sampled)
signal-lite x 6,253,072 ops/sec ±10.86% (11 runs sampled)
EventEmitter2 x 5,823,550 ops/sec ±5.91% (11 runs sampled)
event-signal x 5,893,173 ops/sec ±13.25% (11 runs sampled)
rxjs Subject x 3,865,143 ops/sec ±4.86% (11 runs sampled)
dripEmitterEnhanced x 3,236,798 ops/sec ±5.04% (11 runs sampled)
signal-emitter x 1,958,169 ops/sec ±9.76% (11 runs sampled)
JS-Signals x 1,730,692 ops/sec ±8.98% (10 runs sampled)
minivents x 1,483,964 ops/sec ±4.32% (11 runs sampled)
```

_Fastest is **ReactiveProperty**_

## emit one value - one listener

```
Theoretical max x 940,547,675 ops/sec ±0.66% (11 runs sampled) *burn in*
sister x 186,176,818 ops/sec ±7.09% (11 runs sampled)
dripEmitter x 179,300,830 ops/sec ±7.40% (11 runs sampled)
MiniSignals x 173,333,634 ops/sec ±7.28% (11 runs sampled)
observ x 153,666,476 ops/sec ±4.68% (11 runs sampled)
ReactiveProperty x 117,412,280 ops/sec ±6.04% (11 runs sampled)
signal-lite x 118,417,574 ops/sec ±7.20% (11 runs sampled)
EventEmitter x 67,037,545 ops/sec ±9.26% (11 runs sampled)
evee x 54,113,197 ops/sec ±9.27% (10 runs sampled)
EventEmitter3 x 53,315,564 ops/sec ±8.61% (11 runs sampled)
EventEmitter2 x 46,849,348 ops/sec ±9.50% (11 runs sampled)
event-signal x 34,977,868 ops/sec ±4.73% (11 runs sampled)
d3-dispatch x 24,479,107 ops/sec ±9.83% (11 runs sampled)
namespace-emitter x 21,836,447 ops/sec ±14.34% (11 runs sampled)
rxjs Subject x 17,458,683 ops/sec ±11.27% (11 runs sampled)
minivents x 9,030,905 ops/sec ±8.13% (10 runs sampled)
observable x 7,044,642 ops/sec ±3.66% (10 runs sampled)
dripEmitterEnhanced x 5,941,869 ops/sec ±4.88% (10 runs sampled)
JS-Signals x 5,556,952 ops/sec ±8.03% (10 runs sampled)
signal-emitter x 3,304,561 ops/sec ±6.14% (11 runs sampled)
```

_Fastest is **sister, dripEmitter**_

## emit one value - two listeners

```
Theoretical max x 944,628,182 ops/sec ±3.15% (11 runs sampled) *burn in*
MiniSignals x 47,189,881 ops/sec ±4.71% (11 runs sampled)
observ x 41,745,885 ops/sec ±6.09% (11 runs sampled)
ReactiveProperty x 39,919,831 ops/sec ±6.63% (11 runs sampled)
sister x 37,762,169 ops/sec ±5.72% (11 runs sampled)
dripEmitter x 36,055,267 ops/sec ±5.73% (11 runs sampled)
signal-lite x 34,261,426 ops/sec ±6.28% (11 runs sampled)
EventEmitter3 x 31,040,590 ops/sec ±6.16% (11 runs sampled)
EventEmitter x 27,270,589 ops/sec ±6.53% (11 runs sampled)
event-signal x 23,078,454 ops/sec ±4.21% (11 runs sampled)
evee x 24,407,575 ops/sec ±24.29% (11 runs sampled)
EventEmitter2 x 18,306,101 ops/sec ±5.79% (11 runs sampled)
d3-dispatch x 18,038,385 ops/sec ±5.59% (11 runs sampled)
namespace-emitter x 17,796,922 ops/sec ±5.23% (10 runs sampled)
waddup x 16,625,991 ops/sec ±6.71% (11 runs sampled)
rxjs Subject x 11,818,919 ops/sec ±5.23% (10 runs sampled)
minivents x 5,972,857 ops/sec ±4.21% (11 runs sampled)
dripEmitterEnhanced x 5,459,677 ops/sec ±5.48% (11 runs sampled)
observable x 5,172,602 ops/sec ±5.44% (11 runs sampled)
JS-Signals x 4,541,052 ops/sec ±5.82% (11 runs sampled)
signal-emitter x 3,163,598 ops/sec ±5.65% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## emit one value - with context

```
Theoretical max x 192,496,280 ops/sec ±4.13% (10 runs sampled) *burn in*
MiniSignals x 39,665,065 ops/sec ±5.93% (11 runs sampled)
sister x 38,058,679 ops/sec ±5.43% (11 runs sampled)
EventEmitter3 x 35,760,652 ops/sec ±5.23% (11 runs sampled)
ReactiveProperty x 35,854,285 ops/sec ±7.99% (11 runs sampled)
dripEmitter x 35,202,971 ops/sec ±6.89% (11 runs sampled)
signal-lite x 33,435,473 ops/sec ±4.08% (11 runs sampled)
evee x 27,324,350 ops/sec ±3.96% (11 runs sampled)
EventEmitter x 25,636,702 ops/sec ±6.24% (11 runs sampled)
event-signal x 24,305,349 ops/sec ±8.00% (11 runs sampled)
EventEmitter2 x 18,368,833 ops/sec ±8.20% (11 runs sampled)
rxjs Subject x 11,951,195 ops/sec ±4.24% (11 runs sampled)
dripEmitterEnhanced x 5,411,654 ops/sec ±5.51% (11 runs sampled)
JS-Signals x 4,253,111 ops/sec ±6.62% (11 runs sampled)
signal-emitter x 2,927,738 ops/sec ±8.95% (10 runs sampled)
```

_Fastest is **MiniSignals, sister, EventEmitter3, dripEmitter**_

## emit variable number of values

```
Theoretical max x 266,674,846 ops/sec ±8.92% (11 runs sampled) *burn in*
MiniSignals x 10,252,848 ops/sec ±5.11% (11 runs sampled)
signal-lite x 8,119,649 ops/sec ±5.92% (11 runs sampled)
EventEmitter3 x 7,454,782 ops/sec ±9.69% (11 runs sampled)
EventEmitter x 5,477,490 ops/sec ±11.63% (10 runs sampled)
EventEmitter2 x 3,966,625 ops/sec ±8.96% (11 runs sampled)
dripEmitterEnhanced x 1,156,984 ops/sec ±6.79% (10 runs sampled)
JS-Signals x 1,108,783 ops/sec ±5.76% (11 runs sampled)
signal-emitter x 751,440 ops/sec ±6.19% (11 runs sampled)
```

_Fastest is **MiniSignals**_

## init

```
DripEmitter x 125,257,934 ops/sec ±4.82% (11 runs sampled)
Theoretical max x 122,219,627 ops/sec ±6.29% (11 runs sampled) *burn in*
EventEmitter3 x 76,755,313 ops/sec ±5.53% (11 runs sampled)
EventEmitter2 x 53,748,706 ops/sec ±5.76% (11 runs sampled)
DripEmitterEnhanced x 50,764,228 ops/sec ±4.65% (11 runs sampled)
EventEmitter x 29,469,890 ops/sec ±3.16% (11 runs sampled)
ReactiveProperty x 22,481,450 ops/sec ±4.81% (10 runs sampled)
MiniSignals x 16,672,485 ops/sec ±14.90% (11 runs sampled)
JS-Signals x 15,663,346 ops/sec ±41.01% (10 runs sampled)
```

_Fastest is **DripEmitter**_
