
------------------------------------ Tests -------------------------------------
✔ Platform [pass: 1, fail: 0, duration: 1ms]
✔ add-remove [pass: 18, fail: 0, duration: 3ms]
✔ emit arrays [pass: 26, fail: 0, duration: 1ms]
✔ emit with bound function [pass: 26, fail: 0, duration: 4ms]
✔ emit with context [pass: 26, fail: 0, duration: 1ms]
✔ emit many listeners [pass: 28, fail: 0, duration: 0ms]
✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
✔ emit objects [pass: 28, fail: 0, duration: 1ms]
✔ emit one parameter [pass: 36, fail: 0, duration: 1ms]
✔ emit [pass: 18, fail: 0, duration: 2ms]
✔ init [pass: 20, fail: 0, duration: 6ms]

----------------------------------- Summary ------------------------------------
duration: 21ms
assertions: 247
pass: 247
fail: 0

----------------------------------- Comments -----------------------------------
# Platform
Chrome 51.0.2704.63 on OS X 10.11.2

# add-remove
## add-remove
    dripEmitter x 29,226,129 ops/sec ±4.80% (10 runs sampled)
    MiniSignals x 12,464,817 ops/sec ±4.73% (10 runs sampled)
    EventDispatcher x 5,157,066 ops/sec ±4.72% (10 runs sampled)
    ReactiveProperty x 4,300,222 ops/sec ±2.81% (10 runs sampled)
    EventEmitter3 x 2,204,542 ops/sec ±2.82% (10 runs sampled)
    EventEmitter x 1,426,368 ops/sec ±17.85% (10 runs sampled)
    EventEmitter2 x 1,181,600 ops/sec ±3.69% (10 runs sampled)
    JS-Signals x 831,127 ops/sec ±4.06% (10 runs sampled)
    dripEmitterEnhanced x 612,032 ops/sec ±4.38% (10 runs sampled)
*Fastest is __dripEmitter__*

# emit arrays
## emit arrays
    Theoretical max x 12,510,203 ops/sec ±11.00% (10 runs sampled) *burn in*
    MiniSignals x 6,710,500 ops/sec ±7.91% (10 runs sampled)
    signal-lite x 6,288,671 ops/sec ±5.79% (10 runs sampled)
    dripEmitter x 5,553,166 ops/sec ±2.42% (10 runs sampled)
    EventEmitter3 x 5,137,611 ops/sec ±3.59% (10 runs sampled)
    ReactiveProperty x 5,156,295 ops/sec ±5.28% (10 runs sampled)
    event-signal x 1,932,218 ops/sec ±5.08% (10 runs sampled)
    EventEmitter2 x 1,744,289 ops/sec ±3.25% (10 runs sampled)
    RXJS x 1,495,905 ops/sec ±7.89% (10 runs sampled)
    dripEmitterEnhanced x 753,863 ops/sec ±6.04% (10 runs sampled)
    signal-emitter x 452,225 ops/sec ±5.99% (10 runs sampled)
    EventEmitter x 188,759 ops/sec ±2.07% (10 runs sampled)
    JS-Signals x 143,605 ops/sec ±8.57% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit with bound function
## emit with bound function
    Theoretical max x 30,760,257 ops/sec ±6.27% (10 runs sampled) *burn in*
    ReactiveProperty x 11,306,012 ops/sec ±14.06% (10 runs sampled)
    dripEmitter x 10,259,649 ops/sec ±19.94% (10 runs sampled)
    EventEmitter3 x 8,208,049 ops/sec ±23.97% (10 runs sampled)
    MiniSignals x 6,776,492 ops/sec ±6.51% (10 runs sampled)
    event-signal x 5,423,494 ops/sec ±6.70% (10 runs sampled)
    signal-lite x 4,846,154 ops/sec ±14.39% (10 runs sampled)
    EventEmitter2 x 3,850,666 ops/sec ±7.59% (10 runs sampled)
    RXJS x 3,180,665 ops/sec ±8.32% (10 runs sampled)
    dripEmitterEnhanced x 1,444,686 ops/sec ±12.87% (10 runs sampled)
    signal-emitter x 1,214,967 ops/sec ±22.79% (10 runs sampled)
    EventEmitter x 470,106 ops/sec ±9.10% (10 runs sampled)
    JS-Signals x 420,540 ops/sec ±15.30% (10 runs sampled)
*Fastest is __ReactiveProperty, dripEmitter__*

# emit with context
## emit with context
    Theoretical max x 28,809,282 ops/sec ±16.26% (10 runs sampled) *burn in*
    MiniSignals x 17,969,083 ops/sec ±8.83% (10 runs sampled)
    signal-lite x 17,290,379 ops/sec ±6.85% (10 runs sampled)
    ReactiveProperty x 15,999,338 ops/sec ±4.27% (10 runs sampled)
    EventEmitter3 x 13,438,681 ops/sec ±9.93% (10 runs sampled)
    dripEmitter x 12,581,083 ops/sec ±7.99% (10 runs sampled)
    event-signal x 5,151,685 ops/sec ±17.76% (10 runs sampled)
    EventEmitter2 x 4,125,571 ops/sec ±13.93% (10 runs sampled)
    RXJS x 4,054,354 ops/sec ±15.87% (10 runs sampled)
    dripEmitterEnhanced x 1,591,804 ops/sec ±13.70% (10 runs sampled)
    signal-emitter x 1,052,028 ops/sec ±16.28% (10 runs sampled)
    EventEmitter x 463,593 ops/sec ±14.59% (10 runs sampled)
    JS-Signals x 395,266 ops/sec ±27.07% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit many listeners
## emit many listeners
    dripEmitter x 4,272,657 ops/sec ±3.59% (10 runs sampled)
    signal-lite x 4,271,283 ops/sec ±4.63% (10 runs sampled)
    MiniSignals x 4,377,991 ops/sec ±7.90% (10 runs sampled)
    Theoretical max x 4,135,880 ops/sec ±9.54% (10 runs sampled) *burn in*
    EventEmitter3 x 3,981,746 ops/sec ±7.45% (10 runs sampled)
    ReactiveProperty x 3,792,240 ops/sec ±6.38% (10 runs sampled)
    event-signal x 2,392,959 ops/sec ±11.89% (10 runs sampled)
    EventEmitter2 x 2,230,984 ops/sec ±8.87% (10 runs sampled)
    dripEmitterEnhanced x 1,538,487 ops/sec ±5.81% (10 runs sampled)
    RXJS x 1,479,628 ops/sec ±5.73% (10 runs sampled)
    signal-emitter x 1,116,532 ops/sec ±5.15% (10 runs sampled)
    EventEmitter x 288,019 ops/sec ±6.29% (10 runs sampled)
    JS-Signals x 260,405 ops/sec ±2.69% (10 runs sampled)
    minivents x 75,938 ops/sec ±6.83% (10 runs sampled)
*Fastest is __dripEmitter, signal-lite, MiniSignals, EventEmitter3__*

# emit many parameters
## emit many parameters
    Theoretical max x 17,927,515 ops/sec ±7.99% (10 runs sampled) *burn in*
    MiniSignals x 15,555,175 ops/sec ±3.88% (10 runs sampled)
    signal-lite x 13,731,216 ops/sec ±5.95% (10 runs sampled)
    EventEmitter3 x 822,745 ops/sec ±6.65% (10 runs sampled)
    EventEmitter2 x 744,475 ops/sec ±8.31% (10 runs sampled)
    dripEmitterEnhanced x 653,363 ops/sec ±3.72% (10 runs sampled)
    signal-emitter x 538,295 ops/sec ±3.13% (10 runs sampled)
    JS-Signals x 113,551 ops/sec ±3.18% (10 runs sampled)
    EventEmitter x 112,261 ops/sec ±3.32% (10 runs sampled)
    minivents x 59,398 ops/sec ±5.76% (10 runs sampled)
*Fastest is __MiniSignals__*

# emit objects
## emit objects
    Theoretical max x 9,412,428 ops/sec ±13.73% (10 runs sampled) *burn in*
    EventEmitter3 x 4,569,500 ops/sec ±2.62% (10 runs sampled)
    dripEmitter x 4,318,756 ops/sec ±11.75% (10 runs sampled)
    signal-lite x 4,482,254 ops/sec ±19.23% (10 runs sampled)
    ReactiveProperty x 4,041,165 ops/sec ±13.75% (10 runs sampled)
    MiniSignals x 4,343,868 ops/sec ±30.60% (10 runs sampled)
    EventDispatcher x 2,133,601 ops/sec ±13.69% (10 runs sampled)
    event-signal x 1,646,346 ops/sec ±11.01% (10 runs sampled)
    RXJS x 1,414,888 ops/sec ±6.50% (10 runs sampled)
    EventEmitter2 x 1,342,069 ops/sec ±8.60% (10 runs sampled)
    dripEmitterEnhanced x 681,719 ops/sec ±6.19% (10 runs sampled)
    signal-emitter x 415,909 ops/sec ±6.51% (10 runs sampled)
    JS-Signals x 148,734 ops/sec ±8.36% (10 runs sampled)
    EventEmitter x 135,890 ops/sec ±10.25% (10 runs sampled)
*Fastest is __EventEmitter3, dripEmitter, signal-lite, ReactiveProperty, MiniSignals__*

# emit one parameter
## emit one parameter
    Theoretical max x 20,913,849 ops/sec ±14.14% (10 runs sampled) *burn in*
    MiniSignals x 17,361,238 ops/sec ±3.58% (10 runs sampled)
    signal-lite x 16,817,108 ops/sec ±3.08% (10 runs sampled)
    ReactiveProperty x 12,982,354 ops/sec ±2.65% (10 runs sampled)
    dripEmitter x 13,218,874 ops/sec ±8.85% (10 runs sampled)
    EventEmitter3 x 12,189,583 ops/sec ±18.57% (10 runs sampled)
    event-signal x 5,276,817 ops/sec ±4.31% (10 runs sampled)
    EventEmitter2 x 5,106,085 ops/sec ±3.89% (10 runs sampled)
    observ x 4,770,330 ops/sec ±5.16% (10 runs sampled)
    RXJS x 3,652,754 ops/sec ±7.68% (10 runs sampled)
    d3-dispatch x 2,215,013 ops/sec ±3.83% (10 runs sampled)
    dripEmitterEnhanced x 2,153,692 ops/sec ±3.94% (10 runs sampled)
    signal-emitter x 1,332,557 ops/sec ±4.82% (10 runs sampled)
    observable x 611,726 ops/sec ±9.59% (10 runs sampled)
    EventEmitter x 535,955 ops/sec ±5.92% (10 runs sampled)
    JS-Signals x 477,954 ops/sec ±2.94% (10 runs sampled)
    namespace-emitter x 419,670 ops/sec ±6.65% (10 runs sampled)
    minivents x 322,432 ops/sec ±2.63% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# emit
## emit
    Theoretical max x 9,604,080 ops/sec ±9.48% (10 runs sampled) *burn in*
    MiniSignals x 5,475,736 ops/sec ±4.51% (10 runs sampled)
    signal-lite x 5,328,361 ops/sec ±4.36% (10 runs sampled)
    EventEmitter3 x 1,101,615 ops/sec ±4.17% (10 runs sampled)
    EventEmitter2 x 722,135 ops/sec ±7.25% (10 runs sampled)
    dripEmitterEnhanced x 426,201 ops/sec ±3.92% (10 runs sampled)
    signal-emitter x 296,248 ops/sec ±5.87% (10 runs sampled)
    EventEmitter x 124,706 ops/sec ±4.98% (10 runs sampled)
    JS-Signals x 120,565 ops/sec ±2.69% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

# init
## init
    EventDispatcher x 52,569,071 ops/sec ±2.79% (10 runs sampled)
    EventEmitter3 x 50,895,765 ops/sec ±2.87% (10 runs sampled)
    Theoretical max x 49,318,277 ops/sec ±7.82% (10 runs sampled) *burn in*
    DripEmitter x 46,811,655 ops/sec ±5.90% (10 runs sampled)
    EventEmitter2 x 31,878,790 ops/sec ±1.97% (10 runs sampled)
    EventEmitter x 33,351,194 ops/sec ±8.35% (10 runs sampled)
    MiniSignals x 29,927,738 ops/sec ±3.71% (10 runs sampled)
    DripEmitterEnhanced x 21,531,650 ops/sec ±3.72% (10 runs sampled)
    JS-Signals x 1,817,866 ops/sec ±16.53% (10 runs sampled)
    ReactiveProperty x 1,340,370 ops/sec ±11.68% (10 runs sampled)
*Fastest is __EventDispatcher, EventEmitter3__*

