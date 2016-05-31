
------------------------------------ Tests -------------------------------------
✔ Platform [pass: 1, fail: 0, duration: 1ms]
✔ add-remove [pass: 18, fail: 0, duration: 3ms]
✔ emit arrays [pass: 26, fail: 0, duration: 1ms]
✔ emit with bound function [pass: 26, fail: 0, duration: 6ms]
✔ emit with context [pass: 26, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
✔ emit objects [pass: 28, fail: 0, duration: 1ms]
✔ emit one parameter [pass: 36, fail: 0, duration: 1ms]
✔ emit [pass: 18, fail: 0, duration: 1ms]
✔ init [pass: 20, fail: 0, duration: 13ms]

----------------------------------- Summary ------------------------------------
duration: 30ms
assertions: 247
pass: 247
fail: 0

----------------------------------- Comments -----------------------------------
# Platform
Node.js 4.4.4 on Darwin 64-bit

# add-remove
## add-remove
    dripEmitter x 19,302,250 ops/sec ±5.65% (10 runs sampled)
    MiniSignals x 12,769,574 ops/sec ±13.61% (10 runs sampled)
    EventDispatcher x 4,143,210 ops/sec ±5.31% (10 runs sampled)
    EventEmitter x 3,120,787 ops/sec ±26.46% (10 runs sampled)
    ReactiveProperty x 2,271,317 ops/sec ±10.80% (10 runs sampled)
    EventEmitter3 x 1,548,302 ops/sec ±8.12% (10 runs sampled)
    EventEmitter2 x 1,033,385 ops/sec ±8.05% (10 runs sampled)
    JS-Signals x 517,922 ops/sec ±9.87% (10 runs sampled)
    dripEmitterEnhanced x 137,533 ops/sec ±14.25% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit arrays
## emit arrays
    Theoretical max x 11,465,395 ops/sec ±8.07% (10 runs sampled) *burn in*
    signal-lite x 6,241,755 ops/sec ±4.61% (10 runs sampled)
    MiniSignals x 5,527,357 ops/sec ±8.95% (10 runs sampled)
    ReactiveProperty x 4,462,965 ops/sec ±9.36% (10 runs sampled)
    dripEmitter x 4,210,899 ops/sec ±4.98% (10 runs sampled)
    EventEmitter3 x 3,974,682 ops/sec ±9.37% (10 runs sampled)
    EventEmitter x 2,928,973 ops/sec ±6.87% (10 runs sampled)
    event-signal x 1,786,180 ops/sec ±9.29% (10 runs sampled)
    EventEmitter2 x 1,396,207 ops/sec ±3.17% (10 runs sampled)
    RXJS x 1,283,386 ops/sec ±4.42% (10 runs sampled)
    dripEmitterEnhanced x 894,275 ops/sec ±7.27% (10 runs sampled)
    signal-emitter x 171,902 ops/sec ±12.06% (10 runs sampled)
    JS-Signals x 145,383 ops/sec ±6.13% (10 runs sampled)
*Fastest is __signal-lite__*

# emit with bound function
## emit with bound function
    Theoretical max x 3,381,353 ops/sec ±22.19% (10 runs sampled) *burn in*
    EventEmitter x 2,777,915 ops/sec ±3.44% (10 runs sampled)
    dripEmitter x 2,669,445 ops/sec ±7.19% (10 runs sampled)
    ReactiveProperty x 2,524,389 ops/sec ±8.08% (10 runs sampled)
    EventEmitter3 x 2,420,074 ops/sec ±13.55% (10 runs sampled)
    event-signal x 2,139,248 ops/sec ±7.23% (10 runs sampled)
    EventEmitter2 x 1,746,187 ops/sec ±16.80% (10 runs sampled)
    MiniSignals x 1,614,800 ops/sec ±17.99% (10 runs sampled)
    signal-lite x 1,464,051 ops/sec ±9.48% (10 runs sampled)
    RXJS x 1,452,483 ops/sec ±29.42% (10 runs sampled)
    dripEmitterEnhanced x 1,168,452 ops/sec ±14.75% (10 runs sampled)
    signal-emitter x 461,038 ops/sec ±8.66% (10 runs sampled)
    JS-Signals x 434,274 ops/sec ±9.51% (10 runs sampled)
*Fastest is __EventEmitter, dripEmitter, ReactiveProperty, EventEmitter3__*

# emit with context
## emit with context
    MiniSignals x 15,716,088 ops/sec ±7.73% (10 runs sampled)
    signal-lite x 15,384,305 ops/sec ±7.53% (10 runs sampled)
    EventEmitter3 x 13,252,131 ops/sec ±7.52% (10 runs sampled)
    event-signal x 5,543,566 ops/sec ±9.33% (10 runs sampled)
    Theoretical max x 3,446,155 ops/sec ±8.02% (10 runs sampled) *burn in*
    dripEmitter x 3,134,155 ops/sec ±4.09% (10 runs sampled)
    ReactiveProperty x 2,792,250 ops/sec ±3.45% (10 runs sampled)
    EventEmitter x 2,804,468 ops/sec ±5.54% (10 runs sampled)
    EventEmitter2 x 2,307,866 ops/sec ±4.80% (10 runs sampled)
    RXJS x 1,898,880 ops/sec ±12.26% (10 runs sampled)
    dripEmitterEnhanced x 1,568,733 ops/sec ±7.82% (10 runs sampled)
    JS-Signals x 505,565 ops/sec ±4.95% (10 runs sampled)
    signal-emitter x 440,646 ops/sec ±13.28% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit many listeners
## emit many listeners
    Theoretical max x 5,210,410 ops/sec ±5.12% (10 runs sampled) *burn in*
    signal-lite x 4,492,014 ops/sec ±2.30% (10 runs sampled)
    MiniSignals x 4,414,006 ops/sec ±7.26% (10 runs sampled)
    EventEmitter3 x 4,063,185 ops/sec ±4.36% (10 runs sampled)
    ReactiveProperty x 4,119,573 ops/sec ±6.32% (10 runs sampled)
    dripEmitter x 3,927,858 ops/sec ±5.53% (10 runs sampled)
    EventEmitter x 3,699,405 ops/sec ±4.83% (10 runs sampled)
    event-signal x 2,954,489 ops/sec ±5.62% (10 runs sampled)
    EventEmitter2 x 2,601,803 ops/sec ±6.53% (10 runs sampled)
    RXJS x 1,670,449 ops/sec ±6.64% (10 runs sampled)
    dripEmitterEnhanced x 1,637,139 ops/sec ±4.78% (10 runs sampled)
    signal-emitter x 564,272 ops/sec ±5.38% (10 runs sampled)
    JS-Signals x 405,877 ops/sec ±5.78% (10 runs sampled)
    minivents x 96,792 ops/sec ±7.22% (10 runs sampled)
*Fastest is __signal-lite, MiniSignals__*

# emit many parameters
## emit many parameters
    Theoretical max x 18,037,132 ops/sec ±4.45% (10 runs sampled) *burn in*
    signal-lite x 14,807,026 ops/sec ±4.53% (10 runs sampled)
    MiniSignals x 14,773,605 ops/sec ±4.45% (10 runs sampled)
    EventEmitter3 x 2,486,041 ops/sec ±7.09% (10 runs sampled)
    EventEmitter x 2,347,779 ops/sec ±7.96% (10 runs sampled)
    EventEmitter2 x 1,906,725 ops/sec ±6.27% (10 runs sampled)
    dripEmitterEnhanced x 1,491,184 ops/sec ±7.51% (10 runs sampled)
    signal-emitter x 367,422 ops/sec ±5.14% (10 runs sampled)
    JS-Signals x 236,611 ops/sec ±6.59% (10 runs sampled)
    minivents x 143,080 ops/sec ±11.64% (10 runs sampled)
*Fastest is __signal-lite, MiniSignals__*

# emit objects
## emit objects
    Theoretical max x 11,940,742 ops/sec ±6.73% (10 runs sampled) *burn in*
    MiniSignals x 6,669,432 ops/sec ±3.70% (10 runs sampled)
    signal-lite x 5,951,425 ops/sec ±3.47% (10 runs sampled)
    ReactiveProperty x 5,739,018 ops/sec ±5.16% (10 runs sampled)
    dripEmitter x 4,678,463 ops/sec ±7.23% (10 runs sampled)
    EventEmitter3 x 4,052,498 ops/sec ±6.55% (10 runs sampled)
    EventEmitter x 3,393,488 ops/sec ±4.26% (10 runs sampled)
    EventDispatcher x 2,893,645 ops/sec ±4.07% (10 runs sampled)
    EventEmitter2 x 1,590,904 ops/sec ±5.55% (10 runs sampled)
    event-signal x 1,727,802 ops/sec ±23.57% (10 runs sampled)
    RXJS x 1,435,455 ops/sec ±4.50% (10 runs sampled)
    dripEmitterEnhanced x 967,178 ops/sec ±5.03% (10 runs sampled)
    signal-emitter x 211,181 ops/sec ±5.46% (10 runs sampled)
    JS-Signals x 182,219 ops/sec ±9.22% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit one parameter
## emit one parameter
    Theoretical max x 26,538,904 ops/sec ±3.65% (10 runs sampled) *burn in*
    MiniSignals x 18,742,163 ops/sec ±4.30% (10 runs sampled)
    EventEmitter3 x 13,371,571 ops/sec ±5.27% (10 runs sampled)
    ReactiveProperty x 13,698,265 ops/sec ±9.27% (10 runs sampled)
    signal-lite x 13,668,098 ops/sec ±13.46% (10 runs sampled)
    dripEmitter x 12,904,635 ops/sec ±11.79% (10 runs sampled)
    EventEmitter x 10,267,925 ops/sec ±4.46% (10 runs sampled)
    EventEmitter2 x 4,956,851 ops/sec ±5.13% (10 runs sampled)
    observ x 4,959,329 ops/sec ±21.87% (10 runs sampled)
    RXJS x 4,232,643 ops/sec ±5.28% (10 runs sampled)
    event-signal x 4,319,128 ops/sec ±8.93% (10 runs sampled)
    d3-dispatch x 4,049,932 ops/sec ±7.47% (10 runs sampled)
    dripEmitterEnhanced x 2,539,604 ops/sec ±34.22% (10 runs sampled)
    observable x 1,524,985 ops/sec ±7.00% (10 runs sampled)
    namespace-emitter x 547,051 ops/sec ±3.33% (10 runs sampled)
    JS-Signals x 521,015 ops/sec ±10.11% (10 runs sampled)
    signal-emitter x 485,851 ops/sec ±12.73% (10 runs sampled)
    minivents x 276,655 ops/sec ±21.58% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit
## emit
    Theoretical max x 11,126,003 ops/sec ±5.09% (10 runs sampled) *burn in*
    MiniSignals x 5,138,255 ops/sec ±10.64% (10 runs sampled)
    signal-lite x 4,403,580 ops/sec ±14.20% (10 runs sampled)
    EventEmitter3 x 1,954,213 ops/sec ±9.06% (10 runs sampled)
    EventEmitter x 2,080,081 ops/sec ±21.29% (10 runs sampled)
    EventEmitter2 x 906,609 ops/sec ±16.44% (10 runs sampled)
    dripEmitterEnhanced x 519,271 ops/sec ±26.83% (10 runs sampled)
    signal-emitter x 154,166 ops/sec ±3.87% (10 runs sampled)
    JS-Signals x 126,867 ops/sec ±5.33% (10 runs sampled)
*Fastest is __MiniSignals__*

# init
## init
    EventDispatcher x 59,908,480 ops/sec ±4.33% (10 runs sampled)
    Theoretical max x 56,121,042 ops/sec ±5.39% (10 runs sampled) *burn in*
    DripEmitter x 55,417,005 ops/sec ±6.48% (10 runs sampled)
    EventEmitter3 x 48,988,928 ops/sec ±7.37% (10 runs sampled)
    MiniSignals x 39,348,009 ops/sec ±4.65% (10 runs sampled)
    EventEmitter2 x 29,986,376 ops/sec ±5.12% (10 runs sampled)
    DripEmitterEnhanced x 24,996,014 ops/sec ±3.59% (10 runs sampled)
    EventEmitter x 25,316,627 ops/sec ±6.74% (10 runs sampled)
    JS-Signals x 2,201,822 ops/sec ±14.21% (10 runs sampled)
    ReactiveProperty x 1,461,466 ops/sec ±21.34% (10 runs sampled)
*Fastest is __EventDispatcher, DripEmitter__*

