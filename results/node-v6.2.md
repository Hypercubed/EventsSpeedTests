# Node.js 6.2.0 on Darwin 64-bit


# Tests 
    ✔ add-remove [pass: 18, fail: 0, duration: 1ms]
    ✔ emit arrays [pass: 26, fail: 0, duration: 0ms]
    ✔ emit with bound function [pass: 26, fail: 0, duration: 4ms]
    ✔ emit with context [pass: 26, fail: 0, duration: 2ms]
    ✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
    ✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
    ✔ emit objects [pass: 28, fail: 0, duration: 0ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 1ms]
    ✔ emit [pass: 18, fail: 0, duration: 1ms]
    ✔ init [pass: 20, fail: 0, duration: 5ms]


# Summary 

- duration: 16ms
- assertions: 246
- pass: 246
- fail: 0

# Comments 

## add-remove
    dripEmitter x 27,483,942 ops/sec ±5.14% (10 runs sampled)
    MiniSignals x 12,965,359 ops/sec ±26.62% (10 runs sampled)
    ReactiveProperty x 4,732,349 ops/sec ±6.27% (10 runs sampled)
    EventDispatcher x 4,727,477 ops/sec ±6.42% (10 runs sampled)
    EventEmitter x 3,862,291 ops/sec ±16.08% (10 runs sampled)
    EventEmitter3 x 1,782,422 ops/sec ±5.09% (10 runs sampled)
    EventEmitter2 x 1,206,397 ops/sec ±8.59% (10 runs sampled)
    JS-Signals x 762,994 ops/sec ±5.07% (10 runs sampled)
    dripEmitterEnhanced x 667,927 ops/sec ±4.61% (10 runs sampled)
*Fastest is __dripEmitter__*

## emit arrays
    Theoretical max x 12,030,253 ops/sec ±7.49% (10 runs sampled) *burn in*
    MiniSignals x 7,131,352 ops/sec ±1.50% (10 runs sampled)
    signal-lite x 6,529,882 ops/sec ±2.73% (10 runs sampled)
    dripEmitter x 5,204,349 ops/sec ±4.14% (10 runs sampled)
    EventEmitter3 x 4,801,810 ops/sec ±3.09% (10 runs sampled)
    ReactiveProperty x 4,920,577 ops/sec ±7.86% (10 runs sampled)
    EventEmitter x 3,099,372 ops/sec ±6.89% (10 runs sampled)
    event-signal x 1,984,797 ops/sec ±3.37% (10 runs sampled)
    RXJS x 1,280,306 ops/sec ±5.76% (10 runs sampled)
    EventEmitter2 x 1,376,666 ops/sec ±23.92% (10 runs sampled)
    dripEmitterEnhanced x 606,568 ops/sec ±6.22% (10 runs sampled)
    signal-emitter x 215,464 ops/sec ±8.07% (10 runs sampled)
    JS-Signals x 184,963 ops/sec ±3.67% (10 runs sampled)
*Fastest is __MiniSignals__*

## emit with bound function
    Theoretical max x 31,729,716 ops/sec ±6.24% (10 runs sampled) *burn in*
    ReactiveProperty x 16,193,844 ops/sec ±5.59% (10 runs sampled)
    dripEmitter x 13,790,777 ops/sec ±7.14% (10 runs sampled)
    EventEmitter3 x 12,724,671 ops/sec ±3.82% (10 runs sampled)
    EventEmitter x 9,155,058 ops/sec ±4.68% (10 runs sampled)
    MiniSignals x 7,822,893 ops/sec ±5.09% (10 runs sampled)
    signal-lite x 5,765,027 ops/sec ±8.16% (10 runs sampled)
    event-signal x 5,360,830 ops/sec ±4.34% (10 runs sampled)
    EventEmitter2 x 4,787,591 ops/sec ±3.97% (10 runs sampled)
    RXJS x 4,166,016 ops/sec ±4.03% (10 runs sampled)
    dripEmitterEnhanced x 2,239,850 ops/sec ±5.83% (10 runs sampled)
    signal-emitter x 644,050 ops/sec ±8.77% (10 runs sampled)
    JS-Signals x 594,206 ops/sec ±3.18% (10 runs sampled)
*Fastest is __ReactiveProperty__*

## emit with context
    Theoretical max x 32,427,299 ops/sec ±5.13% (10 runs sampled) *burn in*
    signal-lite x 17,530,833 ops/sec ±4.93% (10 runs sampled)
    ReactiveProperty x 16,744,005 ops/sec ±7.34% (10 runs sampled)
    MiniSignals x 16,553,889 ops/sec ±18.36% (10 runs sampled)
    EventEmitter3 x 13,518,249 ops/sec ±9.11% (10 runs sampled)
    dripEmitter x 13,043,625 ops/sec ±5.68% (10 runs sampled)
    EventEmitter x 9,103,091 ops/sec ±4.44% (10 runs sampled)
    event-signal x 5,861,469 ops/sec ±10.00% (10 runs sampled)
    EventEmitter2 x 4,402,221 ops/sec ±4.22% (10 runs sampled)
    RXJS x 4,294,659 ops/sec ±5.48% (10 runs sampled)
    dripEmitterEnhanced x 2,342,778 ops/sec ±5.65% (10 runs sampled)
    signal-emitter x 620,037 ops/sec ±6.60% (10 runs sampled)
    JS-Signals x 520,308 ops/sec ±6.98% (10 runs sampled)
*Fastest is __signal-lite, ReactiveProperty, MiniSignals__*

## emit many listeners
    MiniSignals x 4,678,155 ops/sec ±4.12% (10 runs sampled)
    signal-lite x 4,400,896 ops/sec ±7.89% (10 runs sampled)
    Theoretical max x 4,244,126 ops/sec ±8.02% (10 runs sampled) *burn in*
    dripEmitter x 4,183,198 ops/sec ±7.46% (10 runs sampled)
    EventEmitter3 x 3,824,791 ops/sec ±6.82% (10 runs sampled)
    EventEmitter x 3,471,914 ops/sec ±6.34% (10 runs sampled)
    ReactiveProperty x 3,230,463 ops/sec ±9.05% (10 runs sampled)
    event-signal x 2,726,757 ops/sec ±10.47% (10 runs sampled)
    EventEmitter2 x 2,488,979 ops/sec ±4.42% (10 runs sampled)
    dripEmitterEnhanced x 1,352,202 ops/sec ±3.99% (10 runs sampled)
    RXJS x 1,367,807 ops/sec ±9.00% (10 runs sampled)
    signal-emitter x 568,980 ops/sec ±8.75% (10 runs sampled)
    JS-Signals x 252,484 ops/sec ±7.71% (10 runs sampled)
    minivents x 108,790 ops/sec ±5.08% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

## emit many parameters
    Theoretical max x 17,046,266 ops/sec ±4.80% (10 runs sampled) *burn in*
    MiniSignals x 14,665,243 ops/sec ±3.64% (10 runs sampled)
    signal-lite x 14,095,605 ops/sec ±3.08% (10 runs sampled)
    EventEmitter x 702,977 ops/sec ±4.92% (10 runs sampled)
    EventEmitter3 x 693,567 ops/sec ±5.87% (10 runs sampled)
    dripEmitterEnhanced x 569,246 ops/sec ±4.87% (10 runs sampled)
    EventEmitter2 x 547,784 ops/sec ±41.64% (10 runs sampled)
    signal-emitter x 353,013 ops/sec ±10.66% (10 runs sampled)
    JS-Signals x 213,921 ops/sec ±4.27% (10 runs sampled)
    minivents x 128,226 ops/sec ±6.47% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

## emit objects
    Theoretical max x 10,748,261 ops/sec ±6.09% (10 runs sampled) *burn in*
    MiniSignals x 6,061,492 ops/sec ±6.05% (10 runs sampled)
    signal-lite x 5,937,968 ops/sec ±4.67% (10 runs sampled)
    ReactiveProperty x 5,128,783 ops/sec ±5.27% (10 runs sampled)
    EventEmitter3 x 4,554,202 ops/sec ±2.73% (10 runs sampled)
    dripEmitter x 4,750,904 ops/sec ±8.36% (10 runs sampled)
    EventEmitter x 3,080,255 ops/sec ±4.04% (10 runs sampled)
    EventDispatcher x 2,257,780 ops/sec ±8.99% (10 runs sampled)
    event-signal x 1,705,841 ops/sec ±7.84% (10 runs sampled)
    EventEmitter2 x 1,573,673 ops/sec ±5.17% (10 runs sampled)
    RXJS x 1,304,671 ops/sec ±4.65% (10 runs sampled)
    dripEmitterEnhanced x 465,773 ops/sec ±5.80% (10 runs sampled)
    signal-emitter x 236,295 ops/sec ±9.60% (10 runs sampled)
    JS-Signals x 180,998 ops/sec ±4.69% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

## emit one parameter
    Theoretical max x 26,980,762 ops/sec ±9.47% (5 runs sampled) *burn in*
    MiniSignals x 15,225,870 ops/sec ±5.41% (5 runs sampled)
    dripEmitter x 14,712,130 ops/sec ±7.03% (5 runs sampled)
    signal-lite x 16,090,395 ops/sec ±20.86% (5 runs sampled)
    ReactiveProperty x 13,645,053 ops/sec ±6.45% (5 runs sampled)
    EventEmitter3 x 13,420,062 ops/sec ±6.67% (5 runs sampled)
    EventEmitter x 8,223,286 ops/sec ±12.52% (5 runs sampled)
    observ x 5,624,357 ops/sec ±5.49% (5 runs sampled)
    event-signal x 5,698,538 ops/sec ±7.89% (5 runs sampled)
    EventEmitter2 x 4,125,993 ops/sec ±13.12% (5 runs sampled)
    RXJS x 3,622,978 ops/sec ±14.46% (5 runs sampled)
    d3-dispatch x 1,885,154 ops/sec ±11.68% (5 runs sampled)
    dripEmitterEnhanced x 1,739,344 ops/sec ±7.72% (5 runs sampled)
    signal-emitter x 666,301 ops/sec ±5.21% (5 runs sampled)
    JS-Signals x 563,082 ops/sec ±5.82% (5 runs sampled)
    minivents x 534,318 ops/sec ±5.58% (5 runs sampled)
    namespace-emitter x 556,283 ops/sec ±10.95% (5 runs sampled)
    observable x 470,719 ops/sec ±4.07% (5 runs sampled)
*Fastest is __MiniSignals, dripEmitter, signal-lite__*

## emit
    Theoretical max x 10,934,732 ops/sec ±4.04% (10 runs sampled) *burn in*
    MiniSignals x 5,705,970 ops/sec ±5.89% (10 runs sampled)
    signal-lite x 4,842,920 ops/sec ±6.75% (10 runs sampled)
    EventEmitter x 2,266,620 ops/sec ±9.84% (10 runs sampled)
    EventEmitter3 x 1,106,549 ops/sec ±5.00% (10 runs sampled)
    EventEmitter2 x 689,457 ops/sec ±6.42% (10 runs sampled)
    dripEmitterEnhanced x 361,309 ops/sec ±7.74% (10 runs sampled)
    signal-emitter x 162,189 ops/sec ±4.22% (10 runs sampled)
    JS-Signals x 138,870 ops/sec ±7.97% (10 runs sampled)
*Fastest is __MiniSignals__*

## init
    EventEmitter3 x 46,914,775 ops/sec ±3.44% (10 runs sampled)
    EventDispatcher x 44,533,750 ops/sec ±5.35% (10 runs sampled)
    DripEmitter x 44,972,764 ops/sec ±10.33% (10 runs sampled)
    MiniSignals x 35,065,851 ops/sec ±4.46% (10 runs sampled)
    Theoretical max x 37,970,675 ops/sec ±35.42% (10 runs sampled) *burn in*
    EventEmitter2 x 29,274,149 ops/sec ±4.58% (10 runs sampled)
    DripEmitterEnhanced x 21,102,556 ops/sec ±3.91% (10 runs sampled)
    EventEmitter x 16,119,370 ops/sec ±4.04% (10 runs sampled)
    JS-Signals x 1,886,030 ops/sec ±22.18% (10 runs sampled)
    ReactiveProperty x 1,080,099 ops/sec ±26.78% (10 runs sampled)
*Fastest is __EventEmitter3, EventDispatcher, DripEmitter__*

