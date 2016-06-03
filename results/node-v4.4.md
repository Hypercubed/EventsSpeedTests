
# Tests 

    ✔ Platform [pass: 1, fail: 0, duration: 1ms]
    ✔ init [pass: 20, fail: 0]
    ✔ emit [pass: 18, fail: 0, duration: 2ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 4ms]
    ✔ emit objects [pass: 28, fail: 0]
    ✔ emit many parameters [pass: 20, fail: 0]
    ✔ emit many listeners [pass: 28, fail: 0]
    ✔ emit with context [pass: 26, fail: 0, duration: 1ms]
    ✔ emit with bound function [pass: 26, fail: 0]
    ✔ emit arrays [pass: 26, fail: 0, duration: 2ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 6ms]

# Summary 

- duration: 16ms
- assertions: 247
- pass: 247
- fail: 0

# Comments 

# Platform
Node.js 4.4.4 on Darwin 64-bit

# init
## init
    EventDispatcher x 56,062,068 ops/sec ±4.12% (10 runs sampled)
    Theoretical max x 56,076,195 ops/sec ±5.61% (10 runs sampled) *burn in*
    EventEmitter3 x 55,444,593 ops/sec ±5.53% (10 runs sampled)
    DripEmitter x 54,076,945 ops/sec ±4.29% (10 runs sampled)
    MiniSignals x 39,323,030 ops/sec ±6.72% (10 runs sampled)
    EventEmitter2 x 32,967,582 ops/sec ±5.03% (10 runs sampled)
    EventEmitter x 28,950,283 ops/sec ±3.78% (10 runs sampled)
    DripEmitterEnhanced x 23,646,605 ops/sec ±4.58% (10 runs sampled)
    JS-Signals x 2,139,575 ops/sec ±14.29% (10 runs sampled)
    ReactiveProperty x 1,444,002 ops/sec ±13.85% (10 runs sampled)
*Fastest is __EventDispatcher, EventEmitter3, DripEmitter__*

# emit
## emit
    Theoretical max x 10,508,106 ops/sec ±6.18% (10 runs sampled) *burn in*
    MiniSignals x 5,188,219 ops/sec ±5.79% (10 runs sampled)
    signal-lite x 4,948,876 ops/sec ±6.07% (10 runs sampled)
    EventEmitter x 2,605,403 ops/sec ±4.68% (10 runs sampled)
    EventEmitter3 x 2,395,146 ops/sec ±5.58% (10 runs sampled)
    EventEmitter2 x 1,038,392 ops/sec ±3.22% (10 runs sampled)
    dripEmitterEnhanced x 666,471 ops/sec ±4.71% (10 runs sampled)
    signal-emitter x 161,171 ops/sec ±6.45% (10 runs sampled)
    JS-Signals x 153,447 ops/sec ±4.38% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit one parameter
## emit one parameter
    Theoretical max x 25,119,301 ops/sec ±3.85% (10 runs sampled) *burn in*
    MiniSignals x 16,911,732 ops/sec ±5.41% (10 runs sampled)
    signal-lite x 16,134,546 ops/sec ±4.26% (10 runs sampled)
    ReactiveProperty x 13,107,831 ops/sec ±3.31% (10 runs sampled)
    EventEmitter3 x 13,083,754 ops/sec ±5.38% (10 runs sampled)
    dripEmitter x 13,006,425 ops/sec ±5.61% (10 runs sampled)
    EventEmitter x 10,384,071 ops/sec ±4.86% (10 runs sampled)
    observ x 5,988,336 ops/sec ±4.07% (10 runs sampled)
    event-signal x 5,893,862 ops/sec ±4.12% (10 runs sampled)
    EventEmitter2 x 5,259,898 ops/sec ±4.08% (10 runs sampled)
    d3-dispatch x 4,012,147 ops/sec ±4.26% (10 runs sampled)
    RXJS x 4,315,952 ops/sec ±14.06% (10 runs sampled)
    dripEmitterEnhanced x 3,043,550 ops/sec ±4.65% (10 runs sampled)
    observable x 1,532,728 ops/sec ±7.11% (10 runs sampled)
    signal-emitter x 622,420 ops/sec ±4.05% (10 runs sampled)
    namespace-emitter x 567,631 ops/sec ±3.64% (10 runs sampled)
    JS-Signals x 569,054 ops/sec ±4.47% (10 runs sampled)
    minivents x 471,825 ops/sec ±3.38% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit objects
## emit objects
    Theoretical max x 12,271,346 ops/sec ±3.91% (10 runs sampled) *burn in*
    MiniSignals x 6,347,262 ops/sec ±6.05% (10 runs sampled)
    signal-lite x 6,220,919 ops/sec ±4.71% (10 runs sampled)
    ReactiveProperty x 6,012,365 ops/sec ±6.05% (10 runs sampled)
    dripEmitter x 4,934,667 ops/sec ±3.09% (10 runs sampled)
    EventEmitter3 x 4,514,814 ops/sec ±3.10% (10 runs sampled)
    EventEmitter x 3,643,671 ops/sec ±3.34% (10 runs sampled)
    EventDispatcher x 2,899,155 ops/sec ±3.68% (10 runs sampled)
    event-signal x 1,888,798 ops/sec ±11.88% (10 runs sampled)
    EventEmitter2 x 1,661,642 ops/sec ±2.67% (10 runs sampled)
    RXJS x 1,505,510 ops/sec ±4.52% (10 runs sampled)
    dripEmitterEnhanced x 950,314 ops/sec ±3.73% (10 runs sampled)
    signal-emitter x 212,580 ops/sec ±4.33% (10 runs sampled)
    JS-Signals x 202,276 ops/sec ±4.69% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite, ReactiveProperty__*

# emit many parameters
## emit many parameters
    Theoretical max x 18,578,451 ops/sec ±3.12% (10 runs sampled) *burn in*
    MiniSignals x 14,466,621 ops/sec ±4.05% (10 runs sampled)
    signal-lite x 14,198,697 ops/sec ±3.40% (10 runs sampled)
    EventEmitter3 x 2,458,468 ops/sec ±4.61% (10 runs sampled)
    EventEmitter x 2,352,786 ops/sec ±4.87% (10 runs sampled)
    EventEmitter2 x 1,941,903 ops/sec ±4.30% (10 runs sampled)
    dripEmitterEnhanced x 1,493,499 ops/sec ±4.29% (10 runs sampled)
    signal-emitter x 367,533 ops/sec ±5.39% (10 runs sampled)
    JS-Signals x 242,836 ops/sec ±3.77% (10 runs sampled)
    minivents x 146,828 ops/sec ±3.85% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit many listeners
## emit many listeners
    Theoretical max x 5,426,327 ops/sec ±2.89% (10 runs sampled) *burn in*
    MiniSignals x 4,384,374 ops/sec ±6.06% (10 runs sampled)
    dripEmitter x 4,084,866 ops/sec ±5.28% (10 runs sampled)
    EventEmitter3 x 3,965,478 ops/sec ±3.26% (10 runs sampled)
    ReactiveProperty x 3,854,847 ops/sec ±3.27% (10 runs sampled)
    EventEmitter x 3,679,932 ops/sec ±9.84% (10 runs sampled)
    event-signal x 2,839,025 ops/sec ±13.01% (10 runs sampled)
    EventEmitter2 x 2,519,065 ops/sec ±8.42% (10 runs sampled)
    dripEmitterEnhanced x 1,827,118 ops/sec ±4.16% (10 runs sampled)
    signal-lite x 1,588,819 ops/sec ±3.92% (10 runs sampled)
    RXJS x 1,548,773 ops/sec ±6.53% (10 runs sampled)
    signal-emitter x 507,112 ops/sec ±2.92% (10 runs sampled)
    JS-Signals x 386,108 ops/sec ±3.92% (10 runs sampled)
    minivents x 103,405 ops/sec ±5.60% (10 runs sampled)
*Fastest is __MiniSignals, dripEmitter__*

# emit with context
## emit with context
    signal-lite x 17,551,053 ops/sec ±5.48% (10 runs sampled)
    MiniSignals x 17,723,422 ops/sec ±11.84% (10 runs sampled)
    EventEmitter3 x 13,908,383 ops/sec ±4.48% (10 runs sampled)
    event-signal x 6,429,433 ops/sec ±4.26% (10 runs sampled)
    Theoretical max x 3,952,392 ops/sec ±8.10% (10 runs sampled) *burn in*
    dripEmitter x 3,203,503 ops/sec ±4.77% (10 runs sampled)
    ReactiveProperty x 3,122,812 ops/sec ±5.39% (10 runs sampled)
    EventEmitter x 3,079,572 ops/sec ±5.27% (10 runs sampled)
    EventEmitter2 x 2,388,872 ops/sec ±2.31% (10 runs sampled)
    RXJS x 2,288,052 ops/sec ±7.60% (10 runs sampled)
    dripEmitterEnhanced x 1,751,368 ops/sec ±3.42% (10 runs sampled)
    JS-Signals x 581,314 ops/sec ±3.62% (10 runs sampled)
    signal-emitter x 605,051 ops/sec ±14.11% (10 runs sampled)
*Fastest is __signal-lite, MiniSignals__*

# emit with bound function
## emit with bound function
    Theoretical max x 4,353,862 ops/sec ±3.77% (10 runs sampled) *burn in*
    dripEmitter x 3,406,212 ops/sec ±3.78% (10 runs sampled)
    ReactiveProperty x 3,149,938 ops/sec ±2.07% (10 runs sampled)
    EventEmitter3 x 3,233,303 ops/sec ±5.16% (10 runs sampled)
    EventEmitter x 3,057,118 ops/sec ±3.28% (10 runs sampled)
    event-signal x 2,449,149 ops/sec ±5.12% (10 runs sampled)
    RXJS x 2,281,697 ops/sec ±4.15% (10 runs sampled)
    MiniSignals x 2,297,231 ops/sec ±5.76% (10 runs sampled)
    EventEmitter2 x 2,255,003 ops/sec ±4.84% (10 runs sampled)
    signal-lite x 1,981,382 ops/sec ±8.80% (10 runs sampled)
    dripEmitterEnhanced x 1,826,185 ops/sec ±2.22% (10 runs sampled)
    signal-emitter x 538,428 ops/sec ±3.98% (10 runs sampled)
    JS-Signals x 500,342 ops/sec ±5.74% (10 runs sampled)
*Fastest is __dripEmitter, EventEmitter3__*

# emit arrays
## emit arrays
    Theoretical max x 13,963,415 ops/sec ±5.34% (10 runs sampled) *burn in*
    MiniSignals x 6,808,438 ops/sec ±5.66% (10 runs sampled)
    signal-lite x 6,663,161 ops/sec ±6.75% (10 runs sampled)
    ReactiveProperty x 5,636,094 ops/sec ±2.87% (10 runs sampled)
    dripEmitter x 5,232,888 ops/sec ±4.17% (10 runs sampled)
    EventEmitter3 x 4,639,576 ops/sec ±4.29% (10 runs sampled)
    EventEmitter x 3,706,467 ops/sec ±4.57% (10 runs sampled)
    event-signal x 2,054,360 ops/sec ±3.79% (10 runs sampled)
    RXJS x 1,546,386 ops/sec ±5.03% (10 runs sampled)
    EventEmitter2 x 1,542,406 ops/sec ±18.38% (10 runs sampled)
    dripEmitterEnhanced x 991,220 ops/sec ±3.90% (10 runs sampled)
    signal-emitter x 209,695 ops/sec ±4.14% (10 runs sampled)
    JS-Signals x 199,703 ops/sec ±5.65% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# add-remove
## add-remove
    dripEmitter x 21,246,022 ops/sec ±4.80% (10 runs sampled)
    MiniSignals x 15,125,299 ops/sec ±4.30% (10 runs sampled)
    EventDispatcher x 4,936,613 ops/sec ±4.37% (10 runs sampled)
    EventEmitter x 3,624,576 ops/sec ±21.66% (10 runs sampled)
    ReactiveProperty x 2,969,381 ops/sec ±4.77% (10 runs sampled)
    EventEmitter3 x 1,840,169 ops/sec ±2.15% (10 runs sampled)
    EventEmitter2 x 1,263,385 ops/sec ±9.24% (10 runs sampled)
    JS-Signals x 696,226 ops/sec ±3.82% (10 runs sampled)
    dripEmitterEnhanced x 174,421 ops/sec ±5.15% (10 runs sampled)
*Fastest is __dripEmitter__*

