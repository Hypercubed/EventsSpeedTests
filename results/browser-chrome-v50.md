
# Tests 

    ✔ Platform [pass: 1, fail: 0, duration: 2ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 1ms]
    ✔ emit arrays [pass: 26, fail: 0, duration: 2ms]
    ✔ emit with bound function [pass: 26, fail: 0, duration: 7ms]
    ✔ emit with context [pass: 26, fail: 0, duration: 2ms]
    ✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
    ✔ emit many parameters [pass: 20, fail: 0]
    ✔ emit objects [pass: 28, fail: 0, duration: 1ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 1ms]
    ✔ emit [pass: 18, fail: 0, duration: 2ms]
    ✔ init [pass: 20, fail: 0, duration: 6ms]

# Summary 

- duration: 25ms
- assertions: 247
- pass: 247
- fail: 0

# Comments 

# Platform
Chrome 51.0.2704.63 on OS X 10.11.2

# add-remove
## add-remove
    dripEmitter x 28,967,487 ops/sec ±4.15% (10 runs sampled)
    MiniSignals x 12,755,342 ops/sec ±5.21% (10 runs sampled)
    EventDispatcher x 5,740,711 ops/sec ±6.16% (10 runs sampled)
    ReactiveProperty x 3,968,723 ops/sec ±8.71% (10 runs sampled)
    EventEmitter3 x 2,264,587 ops/sec ±3.93% (10 runs sampled)
    EventEmitter x 1,515,858 ops/sec ±8.94% (10 runs sampled)
    EventEmitter2 x 1,316,868 ops/sec ±6.57% (10 runs sampled)
    JS-Signals x 821,092 ops/sec ±2.90% (10 runs sampled)
    dripEmitterEnhanced x 614,054 ops/sec ±3.42% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit arrays
## emit arrays
    Theoretical max x 11,572,355 ops/sec ±17.38% (10 runs sampled) *burn in*
    MiniSignals x 7,013,237 ops/sec ±5.26% (10 runs sampled)
    signal-lite x 6,296,883 ops/sec ±3.71% (10 runs sampled)
    dripEmitter x 5,654,824 ops/sec ±4.76% (10 runs sampled)
    ReactiveProperty x 5,577,447 ops/sec ±3.57% (10 runs sampled)
    EventEmitter3 x 5,056,159 ops/sec ±3.47% (10 runs sampled)
    event-signal x 1,924,582 ops/sec ±6.77% (10 runs sampled)
    EventEmitter2 x 1,811,193 ops/sec ±3.03% (10 runs sampled)
    RXJS x 1,586,347 ops/sec ±5.32% (10 runs sampled)
    dripEmitterEnhanced x 703,419 ops/sec ±3.89% (10 runs sampled)
    signal-emitter x 464,757 ops/sec ±5.43% (10 runs sampled)
    EventEmitter x 176,583 ops/sec ±3.92% (10 runs sampled)
    JS-Signals x 147,396 ops/sec ±6.88% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit with bound function
## emit with bound function
    Theoretical max x 34,537,867 ops/sec ±3.12% (10 runs sampled) *burn in*
    dripEmitter x 14,565,943 ops/sec ±4.25% (10 runs sampled)
    ReactiveProperty x 15,536,389 ops/sec ±13.00% (10 runs sampled)
    EventEmitter3 x 13,408,462 ops/sec ±5.16% (10 runs sampled)
    MiniSignals x 8,110,465 ops/sec ±6.15% (10 runs sampled)
    signal-lite x 6,228,798 ops/sec ±3.49% (10 runs sampled)
    event-signal x 5,878,575 ops/sec ±3.86% (10 runs sampled)
    EventEmitter2 x 5,103,810 ops/sec ±2.90% (10 runs sampled)
    RXJS x 4,559,802 ops/sec ±4.61% (10 runs sampled)
    dripEmitterEnhanced x 2,202,217 ops/sec ±8.02% (10 runs sampled)
    signal-emitter x 1,431,655 ops/sec ±3.84% (10 runs sampled)
    EventEmitter x 513,146 ops/sec ±12.15% (10 runs sampled)
    JS-Signals x 471,373 ops/sec ±4.86% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit with context
## emit with context
    Theoretical max x 31,948,181 ops/sec ±8.43% (10 runs sampled) *burn in*
    MiniSignals x 20,329,961 ops/sec ±6.59% (10 runs sampled)
    signal-lite x 18,865,979 ops/sec ±5.37% (10 runs sampled)
    ReactiveProperty x 16,799,266 ops/sec ±1.94% (10 runs sampled)
    EventEmitter3 x 15,288,424 ops/sec ±5.04% (10 runs sampled)
    dripEmitter x 13,922,929 ops/sec ±5.91% (10 runs sampled)
    event-signal x 6,317,618 ops/sec ±5.44% (10 runs sampled)
    EventEmitter2 x 5,005,605 ops/sec ±6.90% (10 runs sampled)
    RXJS x 4,575,628 ops/sec ±3.21% (10 runs sampled)
    dripEmitterEnhanced x 2,304,093 ops/sec ±5.28% (10 runs sampled)
    signal-emitter x 1,503,620 ops/sec ±3.91% (10 runs sampled)
    JS-Signals x 519,170 ops/sec ±5.54% (10 runs sampled)
    EventEmitter x 512,105 ops/sec ±28.62% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit many listeners
## emit many listeners
    MiniSignals x 4,248,822 ops/sec ±3.11% (10 runs sampled)
    EventEmitter3 x 4,062,807 ops/sec ±5.06% (10 runs sampled)
    Theoretical max x 4,388,764 ops/sec ±16.19% (10 runs sampled) *burn in*
    ReactiveProperty x 3,945,455 ops/sec ±5.71% (10 runs sampled)
    dripEmitter x 3,971,403 ops/sec ±21.28% (10 runs sampled)
    signal-lite x 3,180,961 ops/sec ±2.61% (10 runs sampled)
    EventEmitter2 x 2,271,417 ops/sec ±13.60% (10 runs sampled)
    event-signal x 1,719,946 ops/sec ±10.70% (10 runs sampled)
    dripEmitterEnhanced x 1,512,904 ops/sec ±5.00% (10 runs sampled)
    RXJS x 1,476,604 ops/sec ±8.38% (10 runs sampled)
    signal-emitter x 981,202 ops/sec ±7.57% (10 runs sampled)
    EventEmitter x 292,645 ops/sec ±2.55% (10 runs sampled)
    JS-Signals x 226,698 ops/sec ±4.97% (10 runs sampled)
    minivents x 47,296 ops/sec ±2.05% (10 runs sampled)
*Fastest is __MiniSignals, EventEmitter3, ReactiveProperty, dripEmitter__*

# emit many parameters
## emit many parameters
    Theoretical max x 12,087,224 ops/sec ±2.29% (10 runs sampled) *burn in*
    signal-lite x 8,572,903 ops/sec ±7.27% (10 runs sampled)
    MiniSignals x 7,861,225 ops/sec ±10.87% (10 runs sampled)
    EventEmitter3 x 518,932 ops/sec ±3.08% (10 runs sampled)
    EventEmitter2 x 433,441 ops/sec ±6.85% (10 runs sampled)
    dripEmitterEnhanced x 398,464 ops/sec ±2.94% (10 runs sampled)
    signal-emitter x 328,990 ops/sec ±7.04% (10 runs sampled)
    EventEmitter x 74,781 ops/sec ±4.93% (10 runs sampled)
    JS-Signals x 66,014 ops/sec ±7.42% (10 runs sampled)
    minivents x 36,331 ops/sec ±8.91% (10 runs sampled)
*Fastest is __signal-lite, MiniSignals__*

# emit objects
## emit objects
    Theoretical max x 6,548,987 ops/sec ±8.56% (10 runs sampled) *burn in*
    MiniSignals x 3,657,581 ops/sec ±4.91% (10 runs sampled)
    signal-lite x 3,475,124 ops/sec ±4.43% (10 runs sampled)
    ReactiveProperty x 3,095,564 ops/sec ±7.76% (10 runs sampled)
    EventEmitter3 x 2,397,960 ops/sec ±9.86% (10 runs sampled)
    dripEmitter x 2,493,718 ops/sec ±16.85% (10 runs sampled)
    EventDispatcher x 1,460,874 ops/sec ±5.40% (10 runs sampled)
    event-signal x 856,534 ops/sec ±8.87% (10 runs sampled)
    EventEmitter2 x 842,750 ops/sec ±13.63% (10 runs sampled)
    RXJS x 788,870 ops/sec ±12.05% (10 runs sampled)
    dripEmitterEnhanced x 348,139 ops/sec ±12.33% (10 runs sampled)
    signal-emitter x 251,350 ops/sec ±5.18% (10 runs sampled)
    JS-Signals x 96,402 ops/sec ±4.81% (10 runs sampled)
    EventEmitter x 74,373 ops/sec ±45.54% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit one parameter
## emit one parameter
    Theoretical max x 15,376,307 ops/sec ±7.95% (10 runs sampled) *burn in*
    signal-lite x 12,425,867 ops/sec ±5.49% (10 runs sampled)
    MiniSignals x 12,505,596 ops/sec ±16.37% (10 runs sampled)
    dripEmitter x 10,301,731 ops/sec ±9.38% (10 runs sampled)
    ReactiveProperty x 9,683,681 ops/sec ±12.89% (10 runs sampled)
    EventEmitter3 x 8,015,853 ops/sec ±8.64% (10 runs sampled)
    event-signal x 4,454,116 ops/sec ±2.88% (10 runs sampled)
    EventEmitter2 x 3,627,871 ops/sec ±8.56% (10 runs sampled)
    RXJS x 2,993,796 ops/sec ±10.61% (10 runs sampled)
    observ x 3,336,304 ops/sec ±26.99% (10 runs sampled)
    d3-dispatch x 1,717,907 ops/sec ±3.27% (10 runs sampled)
    dripEmitterEnhanced x 1,603,474 ops/sec ±14.88% (10 runs sampled)
    signal-emitter x 854,943 ops/sec ±18.48% (10 runs sampled)
    JS-Signals x 370,403 ops/sec ±4.54% (10 runs sampled)
    namespace-emitter x 327,899 ops/sec ±2.96% (10 runs sampled)
    observable x 383,918 ops/sec ±25.88% (10 runs sampled)
    EventEmitter x 328,784 ops/sec ±9.18% (10 runs sampled)
    minivents x 279,176 ops/sec ±2.71% (10 runs sampled)
*Fastest is __signal-lite, MiniSignals__*

# emit
## emit
    Theoretical max x 6,945,080 ops/sec ±8.84% (10 runs sampled) *burn in*
    MiniSignals x 4,177,675 ops/sec ±2.59% (10 runs sampled)
    signal-lite x 4,010,073 ops/sec ±1.45% (10 runs sampled)
    EventEmitter3 x 767,113 ops/sec ±14.67% (10 runs sampled)
    EventEmitter2 x 581,148 ops/sec ±6.68% (10 runs sampled)
    dripEmitterEnhanced x 299,347 ops/sec ±3.92% (10 runs sampled)
    signal-emitter x 243,606 ops/sec ±1.95% (10 runs sampled)
    JS-Signals x 89,324 ops/sec ±3.11% (10 runs sampled)
    EventEmitter x 86,313 ops/sec ±4.88% (10 runs sampled)
*Fastest is __MiniSignals__*

# init
## init
    EventDispatcher x 40,455,322 ops/sec ±1.80% (10 runs sampled)
    DripEmitter x 35,982,763 ops/sec ±2.74% (10 runs sampled)
    EventEmitter3 x 36,334,663 ops/sec ±6.62% (10 runs sampled)
    EventEmitter x 26,478,839 ops/sec ±1.52% (10 runs sampled)
    MiniSignals x 23,380,319 ops/sec ±5.43% (10 runs sampled)
    EventEmitter2 x 21,969,491 ops/sec ±14.64% (10 runs sampled)
    DripEmitterEnhanced x 16,250,822 ops/sec ±1.45% (10 runs sampled)
    Theoretical max x 25,598,834 ops/sec ±87.38% (10 runs sampled) *burn in*
    JS-Signals x 1,234,068 ops/sec ±27.84% (10 runs sampled)
    ReactiveProperty x 932,880 ops/sec ±16.68% (10 runs sampled)
*Fastest is __EventDispatcher__*
