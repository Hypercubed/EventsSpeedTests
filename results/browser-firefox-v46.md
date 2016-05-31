
------------------------------------ Tests -------------------------------------
✔ Platform [pass: 1, fail: 0, duration: 1ms]
✔ add-remove [pass: 18, fail: 0, duration: 2ms]
✔ emit arrays [pass: 26, fail: 0, duration: 1ms]
✔ emit with bound function [pass: 26, fail: 0, duration: 5ms]
✔ emit with context [pass: 26, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
✔ emit many parameters [pass: 20, fail: 0, duration: 0ms]
✔ emit objects [pass: 28, fail: 0, duration: 3ms]
✔ emit one parameter [pass: 36, fail: 0, duration: 2ms]
✔ emit [pass: 18, fail: 0, duration: 1ms]
✔ init [pass: 20, fail: 0, duration: 5ms]

----------------------------------- Summary ------------------------------------
duration: 22ms
assertions: 247
pass: 247
fail: 0

----------------------------------- Comments -----------------------------------
# Platform
Firefox 46.0 on OS X 10.11

# add-remove
## add-remove
    dripEmitter x 30,485,516 ops/sec ±1.80% (10 runs sampled)
    ReactiveProperty x 19,522,669 ops/sec ±3.83% (10 runs sampled)
    MiniSignals x 11,089,170 ops/sec ±2.07% (10 runs sampled)
    EventEmitter3 x 5,592,685 ops/sec ±2.92% (10 runs sampled)
    EventDispatcher x 4,722,173 ops/sec ±3.29% (10 runs sampled)
    EventEmitter x 2,525,672 ops/sec ±9.47% (10 runs sampled)
    EventEmitter2 x 2,188,995 ops/sec ±8.60% (10 runs sampled)
    dripEmitterEnhanced x 503,421 ops/sec ±2.89% (10 runs sampled)
    JS-Signals x 407,046 ops/sec ±20.21% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit arrays
## emit arrays
    Theoretical max x 25,208,433 ops/sec ±3.71% (10 runs sampled) *burn in*
    ReactiveProperty x 9,526,510 ops/sec ±5.98% (10 runs sampled)
    dripEmitter x 5,614,442 ops/sec ±3.27% (10 runs sampled)
    MiniSignals x 5,883,836 ops/sec ±18.75% (10 runs sampled)
    EventEmitter3 x 4,550,302 ops/sec ±3.39% (10 runs sampled)
    event-signal x 3,293,925 ops/sec ±11.54% (10 runs sampled)
    EventEmitter2 x 3,022,353 ops/sec ±2.65% (10 runs sampled)
    RXJS x 2,396,583 ops/sec ±3.52% (10 runs sampled)
    dripEmitterEnhanced x 604,900 ops/sec ±3.49% (10 runs sampled)
    signal-lite x 467,925 ops/sec ±8.93% (10 runs sampled)
    signal-emitter x 358,341 ops/sec ±13.04% (10 runs sampled)
    EventEmitter x 323,066 ops/sec ±2.86% (10 runs sampled)
    JS-Signals x 242,489 ops/sec ±12.89% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit with bound function
## emit with bound function
    Theoretical max x 100,209,535 ops/sec ±5.24% (10 runs sampled) *burn in*
    MiniSignals x 24,758,414 ops/sec ±2.94% (10 runs sampled)
    ReactiveProperty x 22,139,305 ops/sec ±2.00% (10 runs sampled)
    dripEmitter x 18,216,511 ops/sec ±2.68% (10 runs sampled)
    EventEmitter3 x 16,382,995 ops/sec ±4.54% (10 runs sampled)
    event-signal x 11,392,284 ops/sec ±5.56% (10 runs sampled)
    EventEmitter2 x 7,587,552 ops/sec ±3.66% (10 runs sampled)
    RXJS x 6,894,219 ops/sec ±4.70% (10 runs sampled)
    signal-lite x 1,747,300 ops/sec ±1.81% (10 runs sampled)
    signal-emitter x 1,222,139 ops/sec ±2.21% (10 runs sampled)
    dripEmitterEnhanced x 1,255,580 ops/sec ±5.09% (10 runs sampled)
    EventEmitter x 1,046,599 ops/sec ±2.71% (10 runs sampled)
    JS-Signals x 739,724 ops/sec ±3.07% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit with context
## emit with context
    Theoretical max x 101,221,373 ops/sec ±2.62% (10 runs sampled) *burn in*
    ReactiveProperty x 31,533,381 ops/sec ±2.83% (10 runs sampled)
    MiniSignals x 30,497,403 ops/sec ±3.12% (10 runs sampled)
    EventEmitter3 x 16,800,090 ops/sec ±10.56% (10 runs sampled)
    dripEmitter x 14,515,306 ops/sec ±10.29% (10 runs sampled)
    event-signal x 12,649,170 ops/sec ±6.54% (10 runs sampled)
    RXJS x 7,462,269 ops/sec ±3.54% (10 runs sampled)
    EventEmitter2 x 8,046,475 ops/sec ±13.74% (10 runs sampled)
    dripEmitterEnhanced x 1,799,021 ops/sec ±3.96% (10 runs sampled)
    signal-lite x 1,493,351 ops/sec ±16.14% (10 runs sampled)
    signal-emitter x 1,224,207 ops/sec ±5.11% (10 runs sampled)
    EventEmitter x 942,063 ops/sec ±7.06% (10 runs sampled)
    JS-Signals x 777,237 ops/sec ±7.88% (10 runs sampled)
*Fastest is __ReactiveProperty, MiniSignals__*

# emit many listeners
## emit many listeners
    ReactiveProperty x 21,047,414 ops/sec ±4.23% (10 runs sampled)
    MiniSignals x 5,884,521 ops/sec ±2.69% (10 runs sampled)
    Theoretical max x 5,421,843 ops/sec ±3.21% (10 runs sampled) *burn in*
    dripEmitter x 4,700,420 ops/sec ±5.23% (10 runs sampled)
    EventEmitter3 x 4,346,828 ops/sec ±3.74% (10 runs sampled)
    event-signal x 3,486,351 ops/sec ±9.82% (10 runs sampled)
    EventEmitter2 x 3,302,860 ops/sec ±6.36% (10 runs sampled)
    RXJS x 2,258,844 ops/sec ±1.99% (10 runs sampled)
    dripEmitterEnhanced x 1,339,071 ops/sec ±4.05% (10 runs sampled)
    signal-emitter x 1,012,059 ops/sec ±2.49% (10 runs sampled)
    signal-lite x 480,871 ops/sec ±2.45% (10 runs sampled)
    EventEmitter x 350,172 ops/sec ±4.46% (10 runs sampled)
    JS-Signals x 303,925 ops/sec ±4.21% (10 runs sampled)
    minivents x 194,182 ops/sec ±3.37% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit many parameters
## emit many parameters
    Theoretical max x 186,328,574 ops/sec ±6.48% (10 runs sampled) *burn in*
    MiniSignals x 24,687,249 ops/sec ±3.57% (10 runs sampled)
    EventEmitter3 x 7,908,006 ops/sec ±5.08% (10 runs sampled)
    EventEmitter2 x 6,073,839 ops/sec ±5.47% (10 runs sampled)
    dripEmitterEnhanced x 1,144,717 ops/sec ±5.18% (10 runs sampled)
    signal-lite x 938,427 ops/sec ±7.51% (10 runs sampled)
    signal-emitter x 816,619 ops/sec ±3.97% (10 runs sampled)
    EventEmitter x 413,969 ops/sec ±4.29% (10 runs sampled)
    JS-Signals x 349,904 ops/sec ±5.48% (10 runs sampled)
    minivents x 253,435 ops/sec ±14.23% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit objects
## emit objects
    ReactiveProperty x 10,777,602 ops/sec ±4.66% (10 runs sampled)
    Theoretical max x 3,787,805 ops/sec ±7.94% (10 runs sampled) *burn in*
    MiniSignals x 2,857,854 ops/sec ±4.23% (10 runs sampled)
    event-signal x 2,049,793 ops/sec ±2.17% (10 runs sampled)
    dripEmitter x 2,133,649 ops/sec ±11.39% (10 runs sampled)
    EventEmitter3 x 1,895,938 ops/sec ±15.54% (10 runs sampled)
    EventDispatcher x 1,694,947 ops/sec ±4.33% (10 runs sampled)
    RXJS x 1,373,236 ops/sec ±7.12% (10 runs sampled)
    EventEmitter2 x 1,251,502 ops/sec ±12.40% (10 runs sampled)
    signal-lite x 484,507 ops/sec ±4.33% (10 runs sampled)
    dripEmitterEnhanced x 474,954 ops/sec ±3.69% (10 runs sampled)
    signal-emitter x 379,516 ops/sec ±1.74% (10 runs sampled)
    JS-Signals x 258,360 ops/sec ±3.70% (10 runs sampled)
    EventEmitter x 266,108 ops/sec ±11.42% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit one parameter
## emit one parameter
    Theoretical max x 199,478,042 ops/sec ±4.63% (10 runs sampled) *burn in*
    ReactiveProperty x 52,336,192 ops/sec ±4.00% (10 runs sampled)
    MiniSignals x 28,671,868 ops/sec ±5.27% (10 runs sampled)
    dripEmitter x 20,769,617 ops/sec ±5.66% (10 runs sampled)
    observ x 17,792,332 ops/sec ±13.93% (10 runs sampled)
    EventEmitter3 x 15,690,514 ops/sec ±8.69% (10 runs sampled)
    d3-dispatch x 11,740,494 ops/sec ±1.24% (10 runs sampled)
    event-signal x 12,156,760 ops/sec ±7.49% (10 runs sampled)
    EventEmitter2 x 9,788,790 ops/sec ±4.67% (10 runs sampled)
    RXJS x 7,925,838 ops/sec ±4.71% (10 runs sampled)
    dripEmitterEnhanced x 1,710,837 ops/sec ±7.65% (10 runs sampled)
    signal-lite x 1,639,014 ops/sec ±7.15% (10 runs sampled)
    signal-emitter x 1,187,847 ops/sec ±4.53% (10 runs sampled)
    EventEmitter x 1,097,298 ops/sec ±2.19% (10 runs sampled)
    JS-Signals x 819,307 ops/sec ±5.14% (10 runs sampled)
    minivents x 805,704 ops/sec ±5.19% (10 runs sampled)
    namespace-emitter x 636,790 ops/sec ±2.67% (10 runs sampled)
    observable x 502,909 ops/sec ±3.13% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit
## emit
    Theoretical max x 88,054,371 ops/sec ±6.46% (10 runs sampled) *burn in*
    MiniSignals x 6,641,988 ops/sec ±4.25% (10 runs sampled)
    EventEmitter3 x 3,576,462 ops/sec ±6.72% (10 runs sampled)
    EventEmitter2 x 2,098,373 ops/sec ±6.72% (10 runs sampled)
    signal-lite x 396,464 ops/sec ±4.91% (10 runs sampled)
    dripEmitterEnhanced x 390,455 ops/sec ±7.87% (10 runs sampled)
    signal-emitter x 293,920 ops/sec ±4.34% (10 runs sampled)
    EventEmitter x 234,534 ops/sec ±5.56% (10 runs sampled)
    JS-Signals x 198,365 ops/sec ±6.46% (10 runs sampled)
*Fastest is __MiniSignals__*

# init
## init
    Theoretical max x 63,164,959 ops/sec ±3.79% (10 runs sampled) *burn in*
    EventDispatcher x 56,486,284 ops/sec ±4.43% (10 runs sampled)
    EventEmitter3 x 54,825,792 ops/sec ±5.13% (10 runs sampled)
    DripEmitter x 50,561,628 ops/sec ±4.34% (10 runs sampled)
    EventEmitter2 x 32,396,507 ops/sec ±4.71% (10 runs sampled)
    MiniSignals x 30,413,422 ops/sec ±3.35% (10 runs sampled)
    EventEmitter x 27,287,490 ops/sec ±5.33% (10 runs sampled)
    JS-Signals x 17,518,856 ops/sec ±3.63% (10 runs sampled)
    DripEmitterEnhanced x 12,210,018 ops/sec ±9.87% (10 runs sampled)
    ReactiveProperty x 8,979,226 ops/sec ±5.05% (10 runs sampled)
*Fastest is __EventDispatcher, EventEmitter3__*

