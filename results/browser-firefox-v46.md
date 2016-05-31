
# Tests 

    ✔ Platform [pass: 1, fail: 0, duration: 1ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 3ms]
    ✔ emit arrays [pass: 26, fail: 0, duration: 1ms]
    ✔ emit with bound function [pass: 26, fail: 0, duration: 5ms]
    ✔ emit with context [pass: 26, fail: 0, duration: 2ms]
    ✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
    ✔ emit many parameters [pass: 20, fail: 0, duration: 0ms]
    ✔ emit objects [pass: 28, fail: 0, duration: 0ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 1ms]
    ✔ emit [pass: 18, fail: 0, duration: 2ms]
    ✔ init [pass: 20, fail: 0, duration: 6ms]

# Summary 

- duration: 22ms
- assertions: 247
- pass: 247
- fail: 0

# Comments 

# Platform
Firefox 46.0 on OS X 10.11

# add-remove
## add-remove
    dripEmitter x 25,404,317 ops/sec ±8.33% (10 runs sampled)
    ReactiveProperty x 16,871,022 ops/sec ±4.17% (10 runs sampled)
    MiniSignals x 10,088,985 ops/sec ±5.13% (10 runs sampled)
    EventEmitter3 x 4,845,564 ops/sec ±7.61% (10 runs sampled)
    EventDispatcher x 4,517,163 ops/sec ±3.43% (10 runs sampled)
    EventEmitter x 2,398,558 ops/sec ±7.66% (10 runs sampled)
    EventEmitter2 x 2,055,928 ops/sec ±7.42% (10 runs sampled)
    dripEmitterEnhanced x 370,835 ops/sec ±4.74% (10 runs sampled)
    JS-Signals x 296,370 ops/sec ±21.70% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit arrays
## emit arrays
    Theoretical max x 23,127,102 ops/sec ±3.49% (10 runs sampled) *burn in*
    ReactiveProperty x 9,463,405 ops/sec ±3.04% (10 runs sampled)
    MiniSignals x 7,051,137 ops/sec ±2.39% (10 runs sampled)
    dripEmitter x 5,234,127 ops/sec ±5.46% (10 runs sampled)
    EventEmitter3 x 4,455,259 ops/sec ±3.84% (10 runs sampled)
    event-signal x 3,624,000 ops/sec ±6.06% (10 runs sampled)
    EventEmitter2 x 2,839,463 ops/sec ±3.03% (10 runs sampled)
    RXJS x 2,282,906 ops/sec ±2.94% (10 runs sampled)
    dripEmitterEnhanced x 584,197 ops/sec ±3.83% (10 runs sampled)
    signal-lite x 549,583 ops/sec ±4.96% (10 runs sampled)
    signal-emitter x 361,794 ops/sec ±2.61% (10 runs sampled)
    EventEmitter x 325,154 ops/sec ±4.19% (10 runs sampled)
    JS-Signals x 278,420 ops/sec ±4.71% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit with bound function
## emit with bound function
    Theoretical max x 98,685,798 ops/sec ±4.50% (10 runs sampled) *burn in*
    ReactiveProperty x 35,259,780 ops/sec ±2.98% (10 runs sampled)
    MiniSignals x 27,194,651 ops/sec ±6.23% (10 runs sampled)
    dripEmitter x 20,207,597 ops/sec ±4.12% (10 runs sampled)
    EventEmitter3 x 16,608,835 ops/sec ±2.54% (10 runs sampled)
    event-signal x 11,416,890 ops/sec ±8.97% (10 runs sampled)
    EventEmitter2 x 10,172,276 ops/sec ±2.45% (10 runs sampled)
    RXJS x 8,009,829 ops/sec ±1.98% (10 runs sampled)
    dripEmitterEnhanced x 1,896,779 ops/sec ±4.03% (10 runs sampled)
    signal-lite x 1,678,014 ops/sec ±4.49% (10 runs sampled)
    signal-emitter x 1,259,210 ops/sec ±4.59% (10 runs sampled)
    EventEmitter x 1,005,359 ops/sec ±4.50% (10 runs sampled)
    JS-Signals x 821,293 ops/sec ±4.13% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit with context
## emit with context
    Theoretical max x 82,464,178 ops/sec ±14.75% (10 runs sampled) *burn in*
    ReactiveProperty x 31,070,199 ops/sec ±10.67% (10 runs sampled)
    MiniSignals x 29,008,061 ops/sec ±6.72% (10 runs sampled)
    dripEmitter x 20,088,821 ops/sec ±5.91% (10 runs sampled)
    EventEmitter3 x 16,796,505 ops/sec ±9.16% (10 runs sampled)
    event-signal x 11,502,107 ops/sec ±6.35% (10 runs sampled)
    EventEmitter2 x 9,612,703 ops/sec ±2.75% (10 runs sampled)
    RXJS x 7,152,668 ops/sec ±4.44% (10 runs sampled)
    dripEmitterEnhanced x 1,790,507 ops/sec ±3.34% (10 runs sampled)
    signal-lite x 1,518,093 ops/sec ±6.88% (10 runs sampled)
    signal-emitter x 1,094,160 ops/sec ±9.57% (10 runs sampled)
    JS-Signals x 771,205 ops/sec ±6.98% (10 runs sampled)
    EventEmitter x 816,285 ops/sec ±15.07% (10 runs sampled)
*Fastest is __ReactiveProperty, MiniSignals__*

# emit many listeners
## emit many listeners
    ReactiveProperty x 19,023,788 ops/sec ±6.95% (10 runs sampled)
    Theoretical max x 5,811,069 ops/sec ±4.54% (10 runs sampled) *burn in*
    MiniSignals x 4,928,294 ops/sec ±8.29% (10 runs sampled)
    dripEmitter x 4,529,961 ops/sec ±6.70% (10 runs sampled)
    EventEmitter3 x 4,053,170 ops/sec ±5.92% (10 runs sampled)
    EventEmitter2 x 3,220,839 ops/sec ±4.93% (10 runs sampled)
    event-signal x 3,244,261 ops/sec ±13.97% (10 runs sampled)
    RXJS x 2,058,527 ops/sec ±4.25% (10 runs sampled)
    signal-emitter x 948,132 ops/sec ±3.05% (10 runs sampled)
    dripEmitterEnhanced x 929,387 ops/sec ±14.57% (10 runs sampled)
    signal-lite x 419,172 ops/sec ±5.65% (10 runs sampled)
    EventEmitter x 349,594 ops/sec ±15.90% (10 runs sampled)
    JS-Signals x 206,714 ops/sec ±9.67% (10 runs sampled)
    minivents x 168,470 ops/sec ±4.38% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit many parameters
## emit many parameters
    Theoretical max x 157,637,205 ops/sec ±12.70% (10 runs sampled) *burn in*
    MiniSignals x 20,641,806 ops/sec ±5.98% (10 runs sampled)
    EventEmitter3 x 5,676,844 ops/sec ±11.10% (10 runs sampled)
    EventEmitter2 x 5,154,747 ops/sec ±4.89% (10 runs sampled)
    dripEmitterEnhanced x 1,378,470 ops/sec ±7.44% (10 runs sampled)
    signal-lite x 930,356 ops/sec ±8.12% (10 runs sampled)
    signal-emitter x 763,542 ops/sec ±6.26% (10 runs sampled)
    EventEmitter x 347,566 ops/sec ±3.61% (10 runs sampled)
    JS-Signals x 287,502 ops/sec ±6.15% (10 runs sampled)
    minivents x 258,166 ops/sec ±5.46% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit objects
## emit objects
    ReactiveProperty x 9,631,248 ops/sec ±8.96% (10 runs sampled)
    Theoretical max x 3,747,895 ops/sec ±5.59% (10 runs sampled) *burn in*
    MiniSignals x 2,634,514 ops/sec ±7.30% (10 runs sampled)
    dripEmitter x 2,356,065 ops/sec ±4.56% (10 runs sampled)
    EventEmitter3 x 2,117,784 ops/sec ±7.43% (10 runs sampled)
    event-signal x 1,623,788 ops/sec ±6.40% (10 runs sampled)
    EventEmitter2 x 1,566,422 ops/sec ±5.05% (10 runs sampled)
    EventDispatcher x 1,406,738 ops/sec ±10.35% (10 runs sampled)
    RXJS x 1,337,387 ops/sec ±8.58% (10 runs sampled)
    dripEmitterEnhanced x 430,386 ops/sec ±11.01% (10 runs sampled)
    signal-lite x 395,554 ops/sec ±7.25% (10 runs sampled)
    signal-emitter x 335,063 ops/sec ±5.94% (10 runs sampled)
    EventEmitter x 257,854 ops/sec ±7.21% (10 runs sampled)
    JS-Signals x 227,019 ops/sec ±5.27% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit one parameter
## emit one parameter
    Theoretical max x 188,809,560 ops/sec ±3.86% (10 runs sampled) *burn in*
    ReactiveProperty x 51,036,282 ops/sec ±7.20% (10 runs sampled)
    MiniSignals x 26,817,377 ops/sec ±7.51% (10 runs sampled)
    observ x 24,992,920 ops/sec ±5.48% (10 runs sampled)
    dripEmitter x 19,473,610 ops/sec ±6.71% (10 runs sampled)
    EventEmitter3 x 16,529,734 ops/sec ±8.59% (10 runs sampled)
    event-signal x 12,057,058 ops/sec ±5.24% (10 runs sampled)
    d3-dispatch x 11,261,117 ops/sec ±4.11% (10 runs sampled)
    EventEmitter2 x 10,598,643 ops/sec ±3.28% (10 runs sampled)
    RXJS x 8,180,583 ops/sec ±3.42% (10 runs sampled)
    dripEmitterEnhanced x 1,840,357 ops/sec ±4.31% (10 runs sampled)
    signal-lite x 1,698,615 ops/sec ±2.63% (10 runs sampled)
    signal-emitter x 1,252,320 ops/sec ±3.31% (10 runs sampled)
    EventEmitter x 925,273 ops/sec ±9.35% (10 runs sampled)
    minivents x 845,853 ops/sec ±5.05% (10 runs sampled)
    JS-Signals x 790,526 ops/sec ±5.81% (10 runs sampled)
    namespace-emitter x 594,323 ops/sec ±4.17% (10 runs sampled)
    observable x 454,852 ops/sec ±2.42% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit
## emit
    Theoretical max x 82,707,833 ops/sec ±3.98% (10 runs sampled) *burn in*
    MiniSignals x 6,716,883 ops/sec ±5.79% (10 runs sampled)
    EventEmitter3 x 3,224,813 ops/sec ±5.57% (10 runs sampled)
    EventEmitter2 x 1,777,780 ops/sec ±8.23% (10 runs sampled)
    dripEmitterEnhanced x 429,477 ops/sec ±7.26% (10 runs sampled)
    signal-lite x 400,411 ops/sec ±6.20% (10 runs sampled)
    signal-emitter x 265,296 ops/sec ±5.34% (10 runs sampled)
    EventEmitter x 219,430 ops/sec ±4.54% (10 runs sampled)
    JS-Signals x 177,073 ops/sec ±6.48% (10 runs sampled)
*Fastest is __MiniSignals__*

# init
## init
    Theoretical max x 54,478,361 ops/sec ±5.83% (10 runs sampled) *burn in*
    EventDispatcher x 51,909,297 ops/sec ±9.28% (10 runs sampled)
    EventEmitter3 x 53,107,107 ops/sec ±11.88% (10 runs sampled)
    DripEmitter x 51,948,639 ops/sec ±12.09% (10 runs sampled)
    EventEmitter2 x 30,528,117 ops/sec ±6.76% (10 runs sampled)
    MiniSignals x 29,931,995 ops/sec ±12.52% (10 runs sampled)
    EventEmitter x 26,412,796 ops/sec ±9.96% (10 runs sampled)
    JS-Signals x 16,351,421 ops/sec ±9.08% (10 runs sampled)
    DripEmitterEnhanced x 11,897,640 ops/sec ±6.70% (10 runs sampled)
    ReactiveProperty x 9,011,909 ops/sec ±6.00% (10 runs sampled)
*Fastest is __EventDispatcher, EventEmitter3, DripEmitter__*

