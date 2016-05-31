
------------------------------------ Tests -------------------------------------
✔ Platform [pass: 1, fail: 0, duration: 1ms]
✔ add-remove [pass: 18, fail: 0, duration: 1ms]
✔ emit arrays [pass: 26, fail: 0, duration: 1ms]
✔ emit with bound function [pass: 26, fail: 0, duration: 4ms]
✔ emit with context [pass: 26, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 28, fail: 0, duration: 0ms]
✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
✔ emit objects [pass: 28, fail: 0, duration: 3ms]
✔ emit one parameter [pass: 36, fail: 0, duration: 2ms]
✔ emit [pass: 18, fail: 0, duration: 1ms]
✔ init [pass: 20, fail: 0, duration: 6ms]

----------------------------------- Summary ------------------------------------
duration: 21ms
assertions: 247
pass: 247
fail: 0

----------------------------------- Comments -----------------------------------
# Platform
Safari 9.0.2 on OS X 10.11.2

# add-remove
## add-remove
    dripEmitter x 7,006,446 ops/sec ±4.66% (10 runs sampled)
    MiniSignals x 3,777,958 ops/sec ±20.20% (10 runs sampled)
    EventDispatcher x 2,921,547 ops/sec ±15.32% (10 runs sampled)
    EventEmitter3 x 1,663,611 ops/sec ±6.17% (10 runs sampled)
    ReactiveProperty x 1,412,337 ops/sec ±14.94% (10 runs sampled)
    EventEmitter x 760,456 ops/sec ±11.05% (10 runs sampled)
    dripEmitterEnhanced x 637,327 ops/sec ±8.47% (10 runs sampled)
    JS-Signals x 689,478 ops/sec ±17.41% (10 runs sampled)
    EventEmitter2 x 589,857 ops/sec ±7.35% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit arrays
## emit arrays
    Theoretical max x 1,644,960 ops/sec ±38.85% (10 runs sampled) *burn in*
    event-signal x 833,781 ops/sec ±8.22% (10 runs sampled)
    RXJS x 652,988 ops/sec ±6.67% (10 runs sampled)
    dripEmitter x 600,239 ops/sec ±5.98% (10 runs sampled)
    EventEmitter2 x 602,731 ops/sec ±11.73% (10 runs sampled)
    MiniSignals x 633,080 ops/sec ±18.52% (10 runs sampled)
    ReactiveProperty x 582,406 ops/sec ±12.80% (10 runs sampled)
    EventEmitter3 x 522,685 ops/sec ±10.66% (10 runs sampled)
    signal-lite x 493,041 ops/sec ±6.29% (10 runs sampled)
    EventEmitter x 454,719 ops/sec ±6.39% (10 runs sampled)
    JS-Signals x 297,614 ops/sec ±13.09% (10 runs sampled)
    dripEmitterEnhanced x 279,070 ops/sec ±23.87% (10 runs sampled)
    signal-emitter x 195,465 ops/sec ±19.29% (10 runs sampled)
*Fastest is __event-signal__*

# emit with bound function
## emit with bound function
    Theoretical max x 5,026,296 ops/sec ±17.43% (10 runs sampled) *burn in*
    MiniSignals x 3,206,532 ops/sec ±3.27% (10 runs sampled)
    event-signal x 2,569,990 ops/sec ±3.48% (10 runs sampled)
    dripEmitter x 2,342,417 ops/sec ±11.19% (10 runs sampled)
    ReactiveProperty x 1,976,242 ops/sec ±5.06% (10 runs sampled)
    RXJS x 1,911,312 ops/sec ±8.75% (10 runs sampled)
    EventEmitter3 x 1,567,750 ops/sec ±10.56% (10 runs sampled)
    signal-lite x 1,494,477 ops/sec ±6.62% (10 runs sampled)
    EventEmitter2 x 1,555,047 ops/sec ±11.48% (10 runs sampled)
    EventEmitter x 1,403,751 ops/sec ±7.85% (10 runs sampled)
    JS-Signals x 1,155,438 ops/sec ±5.46% (10 runs sampled)
    dripEmitterEnhanced x 999,015 ops/sec ±14.67% (10 runs sampled)
    signal-emitter x 566,577 ops/sec ±8.51% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit with context
## emit with context
    Theoretical max x 5,620,677 ops/sec ±19.34% (10 runs sampled) *burn in*
    MiniSignals x 4,409,373 ops/sec ±6.00% (10 runs sampled)
    event-signal x 3,249,512 ops/sec ±7.81% (10 runs sampled)
    RXJS x 2,123,598 ops/sec ±3.00% (10 runs sampled)
    dripEmitter x 2,073,409 ops/sec ±9.73% (10 runs sampled)
    ReactiveProperty x 1,938,559 ops/sec ±5.41% (10 runs sampled)
    EventEmitter3 x 1,764,003 ops/sec ±5.46% (10 runs sampled)
    EventEmitter2 x 1,805,788 ops/sec ±12.72% (10 runs sampled)
    signal-lite x 1,661,472 ops/sec ±11.86% (10 runs sampled)
    EventEmitter x 1,434,420 ops/sec ±9.43% (10 runs sampled)
    JS-Signals x 1,325,593 ops/sec ±6.31% (10 runs sampled)
    dripEmitterEnhanced x 1,037,808 ops/sec ±13.65% (10 runs sampled)
    signal-emitter x 728,358 ops/sec ±6.73% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit many listeners
## emit many listeners
    Theoretical max x 1,419,003 ops/sec ±33.21% (10 runs sampled) *burn in*
    MiniSignals x 675,757 ops/sec ±3.97% (10 runs sampled)
    event-signal x 640,390 ops/sec ±2.43% (10 runs sampled)
    ReactiveProperty x 634,843 ops/sec ±2.84% (10 runs sampled)
    EventEmitter2 x 611,775 ops/sec ±5.68% (10 runs sampled)
    EventEmitter3 x 551,577 ops/sec ±6.44% (10 runs sampled)
    dripEmitter x 535,074 ops/sec ±11.10% (10 runs sampled)
    RXJS x 467,645 ops/sec ±4.82% (10 runs sampled)
    signal-lite x 413,063 ops/sec ±5.45% (10 runs sampled)
    EventEmitter x 437,883 ops/sec ±17.03% (10 runs sampled)
    dripEmitterEnhanced x 399,184 ops/sec ±11.60% (10 runs sampled)
    JS-Signals x 367,520 ops/sec ±5.67% (10 runs sampled)
    signal-emitter x 334,738 ops/sec ±2.81% (10 runs sampled)
    minivents x 288,791 ops/sec ±5.40% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit many parameters
## emit many parameters
    Theoretical max x 6,727,575 ops/sec ±27.09% (10 runs sampled) *burn in*
    MiniSignals x 3,507,220 ops/sec ±2.28% (10 runs sampled)
    signal-lite x 1,163,556 ops/sec ±8.33% (10 runs sampled)
    EventEmitter2 x 1,193,649 ops/sec ±12.82% (10 runs sampled)
    EventEmitter3 x 1,072,265 ops/sec ±8.55% (10 runs sampled)
    EventEmitter x 1,090,669 ops/sec ±11.65% (10 runs sampled)
    minivents x 863,414 ops/sec ±3.10% (10 runs sampled)
    JS-Signals x 857,899 ops/sec ±6.21% (10 runs sampled)
    dripEmitterEnhanced x 865,819 ops/sec ±12.78% (10 runs sampled)
    signal-emitter x 455,224 ops/sec ±4.30% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit objects
## emit objects
    Theoretical max x 2,004,950 ops/sec ±36.44% (10 runs sampled) *burn in*
    MiniSignals x 1,013,708 ops/sec ±3.83% (10 runs sampled)
    event-signal x 871,429 ops/sec ±1.88% (10 runs sampled)
    ReactiveProperty x 816,310 ops/sec ±5.82% (10 runs sampled)
    EventDispatcher x 793,926 ops/sec ±4.37% (10 runs sampled)
    dripEmitter x 737,675 ops/sec ±9.64% (10 runs sampled)
    RXJS x 684,539 ops/sec ±3.46% (10 runs sampled)
    EventEmitter2 x 608,911 ops/sec ±11.49% (10 runs sampled)
    signal-lite x 540,508 ops/sec ±2.53% (10 runs sampled)
    EventEmitter3 x 541,731 ops/sec ±5.40% (10 runs sampled)
    EventEmitter x 423,600 ops/sec ±10.48% (10 runs sampled)
    JS-Signals x 389,891 ops/sec ±5.07% (10 runs sampled)
    dripEmitterEnhanced x 359,890 ops/sec ±9.54% (10 runs sampled)
    signal-emitter x 219,116 ops/sec ±3.62% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit one parameter
## emit one parameter
    Theoretical max x 8,588,798 ops/sec ±52.82% (10 runs sampled) *burn in*
    MiniSignals x 3,355,346 ops/sec ±6.26% (10 runs sampled)
    event-signal x 3,029,137 ops/sec ±8.19% (10 runs sampled)
    dripEmitter x 2,501,992 ops/sec ±11.18% (10 runs sampled)
    RXJS x 2,231,467 ops/sec ±2.61% (10 runs sampled)
    ReactiveProperty x 2,249,705 ops/sec ±8.98% (10 runs sampled)
    EventEmitter2 x 1,915,022 ops/sec ±7.84% (10 runs sampled)
    EventEmitter3 x 1,859,392 ops/sec ±6.90% (10 runs sampled)
    EventEmitter x 1,830,343 ops/sec ±15.64% (10 runs sampled)
    signal-lite x 1,668,949 ops/sec ±5.72% (10 runs sampled)
    observ x 1,432,270 ops/sec ±3.51% (10 runs sampled)
    d3-dispatch x 1,467,827 ops/sec ±6.62% (10 runs sampled)
    observable x 1,419,901 ops/sec ±4.96% (10 runs sampled)
    JS-Signals x 1,235,967 ops/sec ±2.35% (10 runs sampled)
    dripEmitterEnhanced x 1,276,939 ops/sec ±9.00% (10 runs sampled)
    minivents x 1,184,346 ops/sec ±4.89% (10 runs sampled)
    namespace-emitter x 706,285 ops/sec ±8.42% (10 runs sampled)
    signal-emitter x 656,514 ops/sec ±5.89% (10 runs sampled)
*Fastest is __MiniSignals, event-signal__*

# emit
## emit
    Theoretical max x 2,504,490 ops/sec ±35.01% (10 runs sampled) *burn in*
    MiniSignals x 897,038 ops/sec ±10.73% (10 runs sampled)
    EventEmitter2 x 482,040 ops/sec ±10.14% (10 runs sampled)
    EventEmitter3 x 445,153 ops/sec ±9.15% (10 runs sampled)
    signal-lite x 377,814 ops/sec ±12.42% (10 runs sampled)
    EventEmitter x 361,143 ops/sec ±9.60% (10 runs sampled)
    JS-Signals x 296,618 ops/sec ±4.34% (10 runs sampled)
    dripEmitterEnhanced x 286,023 ops/sec ±14.98% (10 runs sampled)
    signal-emitter x 160,864 ops/sec ±6.83% (10 runs sampled)
*Fastest is __MiniSignals__*

# init
## init
    EventEmitter3 x 73,562,308 ops/sec ±8.40% (10 runs sampled)
    Theoretical max x 53,381,795 ops/sec ±5.64% (10 runs sampled) *burn in*
    EventDispatcher x 41,591,218 ops/sec ±34.63% (10 runs sampled)
    MiniSignals x 35,820,865 ops/sec ±49.04% (10 runs sampled)
    DripEmitter x 24,238,966 ops/sec ±3.22% (10 runs sampled)
    JS-Signals x 19,361,834 ops/sec ±1.67% (10 runs sampled)
    EventEmitter2 x 16,722,836 ops/sec ±6.62% (10 runs sampled)
    EventEmitter x 18,088,001 ops/sec ±34.57% (10 runs sampled)
    DripEmitterEnhanced x 10,797,166 ops/sec ±19.48% (10 runs sampled)
    ReactiveProperty x 5,489,846 ops/sec ±13.52% (10 runs sampled)
*Fastest is __EventEmitter3__*

