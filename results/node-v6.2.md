
# Tests 

    ✔ Platform [pass: 1, fail: 0, duration: 1ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 0ms]
    ✔ emit arrays [pass: 26, fail: 0, duration: 2ms]
    ✔ emit with bound function [pass: 26, fail: 0, duration: 3ms]
    ✔ emit with context [pass: 26, fail: 0, duration: 0ms]
    ✔ emit many listeners [pass: 28, fail: 0, duration: 0ms]
    ✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
    ✔ emit objects [pass: 28, fail: 0, duration: 0ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 1ms]
    ✔ emit [pass: 18, fail: 0, duration: 2ms]
    ✔ init [pass: 20, fail: 0, duration: 3ms]

# Summary 

- duration: 13ms
- assertions: 247
- pass: 247
- fail: 0

# Comments 

# Platform
Node.js 6.2.0 on Darwin 64-bit

# add-remove
## add-remove
    dripEmitter x 26,876,955 ops/sec ±4.28% (10 runs sampled)
    MiniSignals x 13,073,429 ops/sec ±24.02% (10 runs sampled)
    EventDispatcher x 4,958,870 ops/sec ±3.85% (10 runs sampled)
    ReactiveProperty x 5,001,016 ops/sec ±6.00% (10 runs sampled)
    EventEmitter x 3,490,811 ops/sec ±15.76% (10 runs sampled)
    EventEmitter3 x 1,765,489 ops/sec ±5.14% (10 runs sampled)
    EventEmitter2 x 1,186,696 ops/sec ±8.20% (10 runs sampled)
    JS-Signals x 808,873 ops/sec ±5.19% (10 runs sampled)
    dripEmitterEnhanced x 661,192 ops/sec ±6.06% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit arrays
## emit arrays
    Theoretical max x 12,743,292 ops/sec ±7.01% (10 runs sampled) *burn in*
    MiniSignals x 6,320,319 ops/sec ±7.70% (10 runs sampled)
    signal-lite x 6,018,406 ops/sec ±8.79% (10 runs sampled)
    dripEmitter x 5,069,071 ops/sec ±5.82% (10 runs sampled)
    ReactiveProperty x 5,094,475 ops/sec ±7.13% (10 runs sampled)
    EventEmitter3 x 4,923,052 ops/sec ±4.45% (10 runs sampled)
    EventEmitter x 2,870,913 ops/sec ±12.19% (10 runs sampled)
    event-signal x 1,975,933 ops/sec ±5.40% (10 runs sampled)
    EventEmitter2 x 1,591,368 ops/sec ±3.09% (10 runs sampled)
    RXJS x 1,365,265 ops/sec ±6.72% (10 runs sampled)
    dripEmitterEnhanced x 638,788 ops/sec ±3.81% (10 runs sampled)
    signal-emitter x 242,079 ops/sec ±5.41% (10 runs sampled)
    JS-Signals x 186,818 ops/sec ±8.22% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit with bound function
## emit with bound function
    Theoretical max x 33,233,721 ops/sec ±6.47% (10 runs sampled) *burn in*
    ReactiveProperty x 16,375,080 ops/sec ±5.86% (10 runs sampled)
    dripEmitter x 13,692,893 ops/sec ±5.92% (10 runs sampled)
    EventEmitter3 x 11,416,900 ops/sec ±18.48% (10 runs sampled)
    EventEmitter x 9,740,706 ops/sec ±5.60% (10 runs sampled)
    MiniSignals x 7,766,066 ops/sec ±7.94% (10 runs sampled)
    signal-lite x 6,428,462 ops/sec ±5.22% (10 runs sampled)
    event-signal x 5,619,848 ops/sec ±5.08% (10 runs sampled)
    EventEmitter2 x 5,049,020 ops/sec ±6.00% (10 runs sampled)
    RXJS x 4,327,111 ops/sec ±3.18% (10 runs sampled)
    dripEmitterEnhanced x 2,262,632 ops/sec ±4.45% (10 runs sampled)
    signal-emitter x 585,840 ops/sec ±9.08% (10 runs sampled)
    JS-Signals x 559,293 ops/sec ±8.30% (10 runs sampled)
*Fastest is __ReactiveProperty__*

# emit with context
## emit with context
    Theoretical max x 33,157,736 ops/sec ±6.42% (10 runs sampled) *burn in*
    MiniSignals x 20,045,192 ops/sec ±3.12% (10 runs sampled)
    signal-lite x 17,846,540 ops/sec ±7.87% (10 runs sampled)
    ReactiveProperty x 16,239,212 ops/sec ±6.08% (10 runs sampled)
    dripEmitter x 15,384,060 ops/sec ±4.42% (10 runs sampled)
    EventEmitter3 x 14,636,970 ops/sec ±4.09% (10 runs sampled)
    EventEmitter x 9,383,479 ops/sec ±3.34% (10 runs sampled)
    event-signal x 5,970,057 ops/sec ±4.77% (10 runs sampled)
    EventEmitter2 x 4,683,632 ops/sec ±5.50% (10 runs sampled)
    RXJS x 4,376,745 ops/sec ±2.67% (10 runs sampled)
    dripEmitterEnhanced x 2,458,653 ops/sec ±4.59% (10 runs sampled)
    signal-emitter x 665,626 ops/sec ±10.07% (10 runs sampled)
    JS-Signals x 530,301 ops/sec ±5.66% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit many listeners
## emit many listeners
    MiniSignals x 4,375,612 ops/sec ±5.20% (10 runs sampled)
    Theoretical max x 4,468,990 ops/sec ±7.60% (10 runs sampled) *burn in*
    dripEmitter x 4,299,277 ops/sec ±5.18% (10 runs sampled)
    EventEmitter3 x 3,686,278 ops/sec ±6.13% (10 runs sampled)
    signal-lite x 3,936,627 ops/sec ±13.64% (10 runs sampled)
    EventEmitter x 3,632,998 ops/sec ±6.26% (10 runs sampled)
    ReactiveProperty x 3,397,573 ops/sec ±6.03% (10 runs sampled)
    event-signal x 2,766,047 ops/sec ±6.48% (10 runs sampled)
    EventEmitter2 x 2,441,438 ops/sec ±6.10% (10 runs sampled)
    RXJS x 1,398,075 ops/sec ±6.33% (10 runs sampled)
    dripEmitterEnhanced x 1,334,725 ops/sec ±6.10% (10 runs sampled)
    signal-emitter x 563,393 ops/sec ±11.80% (10 runs sampled)
    JS-Signals x 259,013 ops/sec ±6.71% (10 runs sampled)
    minivents x 112,782 ops/sec ±8.94% (10 runs sampled)
*Fastest is __MiniSignals, dripEmitter, signal-lite__*

# emit many parameters
## emit many parameters
    Theoretical max x 17,030,931 ops/sec ±6.54% (10 runs sampled) *burn in*
    MiniSignals x 14,858,463 ops/sec ±3.90% (10 runs sampled)
    signal-lite x 13,587,208 ops/sec ±8.80% (10 runs sampled)
    EventEmitter3 x 733,163 ops/sec ±7.32% (10 runs sampled)
    EventEmitter x 726,539 ops/sec ±6.94% (10 runs sampled)
    EventEmitter2 x 659,287 ops/sec ±3.13% (10 runs sampled)
    dripEmitterEnhanced x 561,484 ops/sec ±5.47% (10 runs sampled)
    signal-emitter x 357,428 ops/sec ±8.84% (10 runs sampled)
    JS-Signals x 204,165 ops/sec ±5.00% (10 runs sampled)
    minivents x 132,907 ops/sec ±5.03% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit objects
## emit objects
    Theoretical max x 11,441,405 ops/sec ±5.52% (10 runs sampled) *burn in*
    MiniSignals x 6,553,706 ops/sec ±6.54% (10 runs sampled)
    signal-lite x 6,063,770 ops/sec ±3.66% (10 runs sampled)
    dripEmitter x 5,078,782 ops/sec ±6.45% (10 runs sampled)
    ReactiveProperty x 5,085,194 ops/sec ±6.93% (10 runs sampled)
    EventEmitter3 x 4,644,199 ops/sec ±5.01% (10 runs sampled)
    EventEmitter x 3,288,410 ops/sec ±5.71% (10 runs sampled)
    EventDispatcher x 2,278,908 ops/sec ±12.14% (10 runs sampled)
    event-signal x 1,848,265 ops/sec ±3.53% (10 runs sampled)
    EventEmitter2 x 1,567,173 ops/sec ±7.34% (10 runs sampled)
    RXJS x 1,244,452 ops/sec ±13.01% (10 runs sampled)
    dripEmitterEnhanced x 618,180 ops/sec ±4.62% (10 runs sampled)
    signal-emitter x 217,633 ops/sec ±9.15% (10 runs sampled)
    JS-Signals x 198,144 ops/sec ±4.12% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit one parameter
## emit one parameter
    Theoretical max x 22,470,992 ops/sec ±12.28% (10 runs sampled) *burn in*
    MiniSignals x 18,400,085 ops/sec ±5.55% (10 runs sampled)
    signal-lite x 16,998,492 ops/sec ±6.36% (10 runs sampled)
    dripEmitter x 14,008,198 ops/sec ±3.47% (10 runs sampled)
    EventEmitter3 x 13,271,877 ops/sec ±6.58% (10 runs sampled)
    ReactiveProperty x 12,899,147 ops/sec ±5.41% (10 runs sampled)
    EventEmitter x 9,225,320 ops/sec ±6.12% (10 runs sampled)
    event-signal x 5,695,052 ops/sec ±4.75% (10 runs sampled)
    EventEmitter2 x 4,641,640 ops/sec ±5.95% (10 runs sampled)
    observ x 4,734,901 ops/sec ±18.25% (10 runs sampled)
    RXJS x 3,223,882 ops/sec ±7.60% (10 runs sampled)
    d3-dispatch x 1,928,527 ops/sec ±5.22% (10 runs sampled)
    dripEmitterEnhanced x 1,801,482 ops/sec ±7.40% (10 runs sampled)
    signal-emitter x 701,922 ops/sec ±7.57% (10 runs sampled)
    JS-Signals x 567,245 ops/sec ±4.77% (10 runs sampled)
    namespace-emitter x 526,435 ops/sec ±7.88% (10 runs sampled)
    minivents x 498,651 ops/sec ±11.66% (10 runs sampled)
    observable x 440,101 ops/sec ±5.69% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit
## emit
    Theoretical max x 9,286,827 ops/sec ±7.06% (10 runs sampled) *burn in*
    signal-lite x 4,879,662 ops/sec ±7.30% (10 runs sampled)
    MiniSignals x 4,674,912 ops/sec ±5.81% (10 runs sampled)
    EventEmitter x 2,415,433 ops/sec ±5.06% (10 runs sampled)
    EventEmitter3 x 1,220,208 ops/sec ±4.32% (10 runs sampled)
    EventEmitter2 x 664,056 ops/sec ±4.96% (10 runs sampled)
    dripEmitterEnhanced x 363,810 ops/sec ±6.13% (10 runs sampled)
    signal-emitter x 149,913 ops/sec ±8.51% (10 runs sampled)
    JS-Signals x 133,096 ops/sec ±6.24% (10 runs sampled)
*Fastest is __signal-lite, MiniSignals__*

# init
## init
    EventDispatcher x 47,063,848 ops/sec ±5.44% (10 runs sampled)
    EventEmitter3 x 46,567,773 ops/sec ±4.63% (10 runs sampled)
    DripEmitter x 46,292,262 ops/sec ±6.38% (10 runs sampled)
    EventEmitter2 x 29,959,527 ops/sec ±3.01% (10 runs sampled)
    Theoretical max x 38,939,943 ops/sec ±38.12% (10 runs sampled) *burn in*
    MiniSignals x 32,611,714 ops/sec ±17.07% (10 runs sampled)
    EventEmitter x 23,930,928 ops/sec ±6.92% (10 runs sampled)
    DripEmitterEnhanced x 19,040,328 ops/sec ±4.66% (10 runs sampled)
    JS-Signals x 1,932,260 ops/sec ±20.00% (10 runs sampled)
    ReactiveProperty x 1,084,959 ops/sec ±23.90% (10 runs sampled)
*Fastest is __EventDispatcher, EventEmitter3, DripEmitter__*

