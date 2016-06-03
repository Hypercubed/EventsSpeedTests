
# Tests 

    ✔ Platform [pass: 1, fail: 0, duration: 1ms]
    ✔ init [pass: 20, fail: 0, duration: 1ms]
    ✔ emit [pass: 18, fail: 0, duration: 2ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 6ms]
    ✔ emit objects [pass: 28, fail: 0]
    ✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
    ✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
    ✔ emit with context [pass: 26, fail: 0]
    ✔ emit with bound function [pass: 26, fail: 0]
    ✔ emit arrays [pass: 26, fail: 0, duration: 4ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 6ms]

# Summary 

- duration: 22ms
- assertions: 247
- pass: 247
- fail: 0

# Comments 

# Platform
Firefox 46.0 on OS X 10.11

# init
## init
    Theoretical max x 56,392,799 ops/sec ±5.78% (10 runs sampled) *burn in*
    EventDispatcher x 51,396,602 ops/sec ±12.95% (10 runs sampled)
    EventEmitter3 x 50,354,286 ops/sec ±15.30% (10 runs sampled)
    DripEmitter x 41,917,073 ops/sec ±13.09% (10 runs sampled)
    EventEmitter2 x 31,099,931 ops/sec ±3.68% (10 runs sampled)
    EventEmitter x 27,296,192 ops/sec ±4.53% (10 runs sampled)
    MiniSignals x 26,608,712 ops/sec ±10.06% (10 runs sampled)
    JS-Signals x 16,277,668 ops/sec ±12.22% (10 runs sampled)
    DripEmitterEnhanced x 11,269,180 ops/sec ±15.39% (10 runs sampled)
    ReactiveProperty x 8,944,743 ops/sec ±7.52% (10 runs sampled)
*Fastest is __EventDispatcher, EventEmitter3__*

# emit
## emit
    Theoretical max x 77,239,229 ops/sec ±5.31% (10 runs sampled) *burn in*
    MiniSignals x 6,108,724 ops/sec ±3.53% (10 runs sampled)
    EventEmitter3 x 3,085,045 ops/sec ±7.73% (10 runs sampled)
    EventEmitter2 x 1,896,126 ops/sec ±2.85% (10 runs sampled)
    dripEmitterEnhanced x 389,465 ops/sec ±5.69% (10 runs sampled)
    signal-lite x 348,654 ops/sec ±20.74% (10 runs sampled)
    signal-emitter x 270,935 ops/sec ±2.52% (10 runs sampled)
    EventEmitter x 206,899 ops/sec ±4.94% (10 runs sampled)
    JS-Signals x 173,674 ops/sec ±2.36% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit one parameter
## emit one parameter
    Theoretical max x 182,222,528 ops/sec ±4.40% (10 runs sampled) *burn in*
    ReactiveProperty x 28,388,703 ops/sec ±1.93% (10 runs sampled)
    MiniSignals x 24,744,600 ops/sec ±2.83% (10 runs sampled)
    dripEmitter x 18,860,278 ops/sec ±2.15% (10 runs sampled)
    EventEmitter3 x 15,663,178 ops/sec ±3.66% (10 runs sampled)
    observ x 13,952,311 ops/sec ±6.69% (10 runs sampled)
    event-signal x 11,895,400 ops/sec ±4.67% (10 runs sampled)
    d3-dispatch x 10,004,007 ops/sec ±5.43% (10 runs sampled)
    EventEmitter2 x 9,774,606 ops/sec ±3.35% (10 runs sampled)
    RXJS x 6,943,389 ops/sec ±10.09% (10 runs sampled)
    signal-lite x 1,536,579 ops/sec ±5.11% (10 runs sampled)
    signal-emitter x 1,085,140 ops/sec ±4.81% (10 runs sampled)
    dripEmitterEnhanced x 1,166,222 ops/sec ±17.47% (10 runs sampled)
    EventEmitter x 970,428 ops/sec ±3.41% (10 runs sampled)
    JS-Signals x 652,448 ops/sec ±4.77% (10 runs sampled)
    minivents x 622,078 ops/sec ±15.63% (10 runs sampled)
    namespace-emitter x 507,478 ops/sec ±2.97% (10 runs sampled)
    observable x 432,905 ops/sec ±4.88% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit objects
## emit objects
    ReactiveProperty x 10,151,222 ops/sec ±4.31% (10 runs sampled)
    Theoretical max x 3,821,295 ops/sec ±2.34% (10 runs sampled) *burn in*
    MiniSignals x 2,594,559 ops/sec ±3.91% (10 runs sampled)
    dripEmitter x 2,078,632 ops/sec ±3.52% (10 runs sampled)
    event-signal x 1,768,985 ops/sec ±3.46% (10 runs sampled)
    EventDispatcher x 1,491,148 ops/sec ±3.40% (10 runs sampled)
    EventEmitter3 x 1,522,609 ops/sec ±11.83% (10 runs sampled)
    RXJS x 1,392,696 ops/sec ±3.48% (10 runs sampled)
    EventEmitter2 x 1,434,152 ops/sec ±9.52% (10 runs sampled)
    signal-lite x 443,557 ops/sec ±2.42% (10 runs sampled)
    dripEmitterEnhanced x 440,024 ops/sec ±6.16% (10 runs sampled)
    signal-emitter x 336,066 ops/sec ±3.19% (10 runs sampled)
    EventEmitter x 265,283 ops/sec ±5.22% (10 runs sampled)
    JS-Signals x 234,593 ops/sec ±2.70% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit many parameters
## emit many parameters
    Theoretical max x 182,012,514 ops/sec ±3.45% (10 runs sampled) *burn in*
    MiniSignals x 19,879,780 ops/sec ±6.72% (10 runs sampled)
    EventEmitter3 x 6,751,262 ops/sec ±9.61% (10 runs sampled)
    EventEmitter2 x 5,163,967 ops/sec ±5.14% (10 runs sampled)
    dripEmitterEnhanced x 1,227,055 ops/sec ±18.78% (10 runs sampled)
    signal-lite x 929,129 ops/sec ±2.05% (10 runs sampled)
    signal-emitter x 851,174 ops/sec ±3.85% (10 runs sampled)
    EventEmitter x 373,419 ops/sec ±5.12% (10 runs sampled)
    minivents x 251,536 ops/sec ±5.36% (10 runs sampled)
    JS-Signals x 257,359 ops/sec ±10.67% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit many listeners
## emit many listeners
    ReactiveProperty x 18,461,557 ops/sec ±10.92% (10 runs sampled)
    MiniSignals x 5,374,609 ops/sec ±4.34% (10 runs sampled)
    Theoretical max x 5,237,712 ops/sec ±4.32% (10 runs sampled) *burn in*
    event-signal x 3,645,642 ops/sec ±3.68% (10 runs sampled)
    dripEmitter x 3,717,512 ops/sec ±6.49% (10 runs sampled)
    EventEmitter3 x 3,355,553 ops/sec ±10.76% (10 runs sampled)
    EventEmitter2 x 2,849,884 ops/sec ±10.87% (10 runs sampled)
    RXJS x 2,046,135 ops/sec ±4.54% (10 runs sampled)
    dripEmitterEnhanced x 962,603 ops/sec ±7.31% (10 runs sampled)
    signal-emitter x 915,011 ops/sec ±4.11% (10 runs sampled)
    signal-lite x 433,695 ops/sec ±3.89% (10 runs sampled)
    EventEmitter x 343,843 ops/sec ±3.09% (10 runs sampled)
    JS-Signals x 267,094 ops/sec ±2.67% (10 runs sampled)
    minivents x 184,611 ops/sec ±3.06% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit with context
## emit with context
    Theoretical max x 87,856,253 ops/sec ±4.14% (10 runs sampled) *burn in*
    ReactiveProperty x 31,000,943 ops/sec ±3.84% (10 runs sampled)
    MiniSignals x 28,824,400 ops/sec ±2.89% (10 runs sampled)
    dripEmitter x 18,452,400 ops/sec ±4.72% (10 runs sampled)
    EventEmitter3 x 16,969,097 ops/sec ±4.40% (10 runs sampled)
    event-signal x 11,657,900 ops/sec ±2.80% (10 runs sampled)
    EventEmitter2 x 8,510,889 ops/sec ±3.57% (10 runs sampled)
    RXJS x 7,341,146 ops/sec ±3.68% (10 runs sampled)
    dripEmitterEnhanced x 1,737,600 ops/sec ±5.19% (10 runs sampled)
    signal-lite x 1,598,017 ops/sec ±3.07% (10 runs sampled)
    signal-emitter x 1,098,966 ops/sec ±2.16% (10 runs sampled)
    EventEmitter x 920,849 ops/sec ±5.88% (10 runs sampled)
    JS-Signals x 787,236 ops/sec ±3.08% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit with bound function
## emit with bound function
    Theoretical max x 88,920,896 ops/sec ±2.74% (10 runs sampled) *burn in*
    ReactiveProperty x 30,296,674 ops/sec ±3.92% (10 runs sampled)
    MiniSignals x 23,731,764 ops/sec ±2.62% (10 runs sampled)
    dripEmitter x 19,594,089 ops/sec ±2.09% (10 runs sampled)
    EventEmitter3 x 15,431,825 ops/sec ±3.71% (10 runs sampled)
    event-signal x 10,165,724 ops/sec ±2.86% (10 runs sampled)
    EventEmitter2 x 9,225,380 ops/sec ±4.87% (10 runs sampled)
    RXJS x 7,400,072 ops/sec ±2.82% (10 runs sampled)
    signal-lite x 1,522,965 ops/sec ±5.06% (10 runs sampled)
    dripEmitterEnhanced x 1,493,685 ops/sec ±6.25% (10 runs sampled)
    signal-emitter x 1,110,403 ops/sec ±2.88% (10 runs sampled)
    EventEmitter x 958,993 ops/sec ±3.19% (10 runs sampled)
    JS-Signals x 770,472 ops/sec ±4.65% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit arrays
## emit arrays
    Theoretical max x 20,762,540 ops/sec ±4.40% (10 runs sampled) *burn in*
    ReactiveProperty x 8,742,282 ops/sec ±4.81% (10 runs sampled)
    MiniSignals x 6,346,938 ops/sec ±2.35% (10 runs sampled)
    dripEmitter x 4,860,783 ops/sec ±4.85% (10 runs sampled)
    EventEmitter3 x 4,194,334 ops/sec ±3.23% (10 runs sampled)
    event-signal x 3,555,142 ops/sec ±3.29% (10 runs sampled)
    EventEmitter2 x 2,666,109 ops/sec ±3.68% (10 runs sampled)
    RXJS x 2,262,162 ops/sec ±3.90% (10 runs sampled)
    dripEmitterEnhanced x 530,715 ops/sec ±4.06% (10 runs sampled)
    signal-lite x 512,284 ops/sec ±2.41% (10 runs sampled)
    EventEmitter x 310,686 ops/sec ±2.23% (10 runs sampled)
    signal-emitter x 338,976 ops/sec ±14.85% (10 runs sampled)
    JS-Signals x 243,009 ops/sec ±2.96% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# add-remove
## add-remove
    dripEmitter x 24,838,370 ops/sec ±9.08% (10 runs sampled)
    ReactiveProperty x 16,108,994 ops/sec ±5.94% (10 runs sampled)
    MiniSignals x 9,687,116 ops/sec ±4.47% (10 runs sampled)
    EventEmitter3 x 4,696,850 ops/sec ±7.93% (10 runs sampled)
    EventDispatcher x 4,194,659 ops/sec ±3.13% (10 runs sampled)
    EventEmitter x 2,134,433 ops/sec ±7.93% (10 runs sampled)
    EventEmitter2 x 1,747,919 ops/sec ±6.27% (10 runs sampled)
    dripEmitterEnhanced x 428,981 ops/sec ±2.96% (10 runs sampled)
    JS-Signals x 401,512 ops/sec ±13.47% (10 runs sampled)
*Fastest is __dripEmitter__*

