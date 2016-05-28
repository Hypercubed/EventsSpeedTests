# Chrome 50.0.2661.102 on OS X 10.11.2

## Tests

    ✔ (anonymous) [pass: 1, fail: 0, duration: 0ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 1ms]
    ✔ emit arrays [pass: 26, fail: 0, duration: 0ms]
    ✔ emit with bound function [pass: 26, fail: 0, duration: 5ms]
    ✔ emit with context [pass: 26, fail: 0, duration: 0ms]
    ✔ emit many listeners [pass: 28, fail: 0, duration: 1ms]
    ✔ emit many parameters [pass: 20, fail: 0, duration: 0ms]
    ✔ emit objects [pass: 28, fail: 0, duration: 1ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 1ms]
    ✔ emit [pass: 18, fail: 0, duration: 1ms]
    ✔ init [pass: 20, fail: 0, duration: 4ms]

## Summary

- duration: 14ms
- assertions: 247
- pass: 247
- fail: 0


## Comments 


## add-remove
    dripEmitter x 26,010,073 ops/sec ±3.62% (10 runs sampled)
    MiniSignals x 13,246,361 ops/sec ±3.37% (10 runs sampled)
    EventDispatcher x 4,435,629 ops/sec ±6.16% (10 runs sampled)
    ReactiveProperty x 3,965,526 ops/sec ±15.42% (10 runs sampled)
    EventEmitter3 x 1,834,353 ops/sec ±4.18% (10 runs sampled)
    EventEmitter x 1,504,855 ops/sec ±7.81% (10 runs sampled)
    EventEmitter2 x 1,054,744 ops/sec ±9.59% (10 runs sampled)
    JS-Signals x 575,934 ops/sec ±6.39% (10 runs sampled)
    dripEmitterEnhanced x 547,264 ops/sec ±3.29% (10 runs sampled)
*Fastest is __dripEmitter__*

## emit arrays
    Theoretical max x 10,357,172 ops/sec ±38.61% (10 runs sampled) *burn in*
    MiniSignals x 5,847,334 ops/sec ±5.26% (10 runs sampled)
    dripEmitter x 4,749,334 ops/sec ±4.63% (10 runs sampled)
    EventEmitter3 x 4,503,696 ops/sec ±5.54% (10 runs sampled)
    signal-lite x 4,500,398 ops/sec ±7.54% (10 runs sampled)
    ReactiveProperty x 4,161,894 ops/sec ±7.89% (10 runs sampled)
    EventEmitter2 x 1,452,551 ops/sec ±3.65% (10 runs sampled)
    event-signal x 1,502,903 ops/sec ±16.10% (10 runs sampled)
    RXJS x 1,216,711 ops/sec ±4.51% (10 runs sampled)
    dripEmitterEnhanced x 443,978 ops/sec ±24.89% (10 runs sampled)
    signal-emitter x 217,425 ops/sec ±5.16% (10 runs sampled)
    EventEmitter x 184,585 ops/sec ±5.36% (10 runs sampled)
    JS-Signals x 145,759 ops/sec ±7.72% (10 runs sampled)
*Fastest is __MiniSignals__*

## emit with bound function
    Theoretical max x 26,354,391 ops/sec ±10.58% (10 runs sampled) *burn in*
    ReactiveProperty x 14,094,742 ops/sec ±5.72% (10 runs sampled)
    EventEmitter3 x 12,121,373 ops/sec ±4.91% (10 runs sampled)
    dripEmitter x 11,558,940 ops/sec ±9.14% (10 runs sampled)
    MiniSignals x 7,494,098 ops/sec ±7.14% (10 runs sampled)
    signal-lite x 5,778,107 ops/sec ±3.16% (10 runs sampled)
    event-signal x 4,870,766 ops/sec ±5.71% (10 runs sampled)
    EventEmitter2 x 3,729,615 ops/sec ±8.02% (10 runs sampled)
    RXJS x 3,520,539 ops/sec ±4.82% (10 runs sampled)
    dripEmitterEnhanced x 1,788,497 ops/sec ±6.00% (10 runs sampled)
    signal-emitter x 698,025 ops/sec ±5.46% (10 runs sampled)
    JS-Signals x 507,669 ops/sec ±6.72% (10 runs sampled)
    EventEmitter x 356,604 ops/sec ±27.40% (10 runs sampled)
*Fastest is __ReactiveProperty__*

## emit with context
    Theoretical max x 29,794,350 ops/sec ±6.25% (10 runs sampled) *burn in*
    signal-lite x 18,049,373 ops/sec ±4.67% (10 runs sampled)
    MiniSignals x 16,539,492 ops/sec ±10.85% (10 runs sampled)
    ReactiveProperty x 13,678,144 ops/sec ±5.82% (10 runs sampled)
    EventEmitter3 x 13,701,972 ops/sec ±6.44% (10 runs sampled)
    dripEmitter x 13,079,448 ops/sec ±2.71% (10 runs sampled)
    event-signal x 5,177,078 ops/sec ±5.44% (10 runs sampled)
    EventEmitter2 x 4,287,930 ops/sec ±2.07% (10 runs sampled)
    RXJS x 3,693,675 ops/sec ±6.92% (10 runs sampled)
    dripEmitterEnhanced x 1,799,187 ops/sec ±5.29% (10 runs sampled)
    EventEmitter x 588,576 ops/sec ±9.22% (10 runs sampled)
    signal-emitter x 558,660 ops/sec ±17.98% (10 runs sampled)
    JS-Signals x 460,873 ops/sec ±13.69% (10 runs sampled)
*Fastest is __signal-lite, MiniSignals__*

## emit many listeners
    MiniSignals x 3,979,114 ops/sec ±5.06% (10 runs sampled)
    ReactiveProperty x 3,777,500 ops/sec ±4.56% (10 runs sampled)
    dripEmitter x 3,740,701 ops/sec ±6.47% (10 runs sampled)
    Theoretical max x 3,907,851 ops/sec ±13.33% (10 runs sampled) *burn in*
    EventEmitter3 x 3,519,214 ops/sec ±8.70% (10 runs sampled)
    signal-lite x 3,447,365 ops/sec ±11.27% (10 runs sampled)
    event-signal x 2,317,792 ops/sec ±8.10% (10 runs sampled)
    EventEmitter2 x 2,170,456 ops/sec ±4.51% (10 runs sampled)
    RXJS x 1,443,257 ops/sec ±6.42% (10 runs sampled)
    dripEmitterEnhanced x 1,226,713 ops/sec ±7.14% (10 runs sampled)
    signal-emitter x 529,495 ops/sec ±6.98% (10 runs sampled)
    JS-Signals x 228,056 ops/sec ±6.02% (10 runs sampled)
    EventEmitter x 213,971 ops/sec ±15.07% (10 runs sampled)
    minivents x 77,379 ops/sec ±5.45% (10 runs sampled)
*Fastest is __MiniSignals, ReactiveProperty, dripEmitter, signal-lite__*

## emit many parameters
    signal-lite x 14,048,056 ops/sec ±4.06% (10 runs sampled)
    MiniSignals x 12,201,568 ops/sec ±5.66% (10 runs sampled)
    Theoretical max x 2,966,603 ops/sec ±184.70% (10 runs sampled) *burn in*
    EventEmitter3 x 653,209 ops/sec ±5.55% (10 runs sampled)
    EventEmitter2 x 592,625 ops/sec ±7.57% (10 runs sampled)
    dripEmitterEnhanced x 456,957 ops/sec ±6.54% (10 runs sampled)
    signal-emitter x 354,596 ops/sec ±4.55% (10 runs sampled)
    EventEmitter x 157,557 ops/sec ±4.27% (10 runs sampled)
    JS-Signals x 148,069 ops/sec ±3.25% (10 runs sampled)
    minivents x 97,779 ops/sec ±4.34% (10 runs sampled)
*Fastest is __signal-lite__*

## emit objects
    Theoretical max x 8,256,673 ops/sec ±13.52% (10 runs sampled) *burn in*
    MiniSignals x 5,860,161 ops/sec ±4.05% (10 runs sampled)
    signal-lite x 5,506,270 ops/sec ±4.26% (10 runs sampled)
    dripEmitter x 4,414,356 ops/sec ±7.39% (10 runs sampled)
    ReactiveProperty x 4,322,778 ops/sec ±7.00% (10 runs sampled)
    EventEmitter3 x 3,681,321 ops/sec ±19.01% (10 runs sampled)
    EventDispatcher x 2,287,640 ops/sec ±7.58% (10 runs sampled)
    event-signal x 1,749,702 ops/sec ±7.46% (10 runs sampled)
    EventEmitter2 x 1,443,269 ops/sec ±4.28% (10 runs sampled)
    RXJS x 879,408 ops/sec ±7.78% (10 runs sampled)
    dripEmitterEnhanced x 564,086 ops/sec ±5.36% (10 runs sampled)
    signal-emitter x 232,538 ops/sec ±6.85% (10 runs sampled)
    JS-Signals x 173,199 ops/sec ±4.85% (10 runs sampled)
    EventEmitter x 170,115 ops/sec ±11.27% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

## emit one parameter
    dripEmitter x 13,765,577 ops/sec ±3.32% (5 runs sampled)
    ReactiveProperty x 13,535,243 ops/sec ±10.78% (5 runs sampled)
    EventEmitter3 x 12,752,105 ops/sec ±13.34% (5 runs sampled)
    MiniSignals x 13,482,055 ops/sec ±32.06% (5 runs sampled)
    Theoretical max x 15,482,272 ops/sec ±64.67% (5 runs sampled) *burn in*
    signal-lite x 10,073,173 ops/sec ±20.90% (5 runs sampled)
    observ x 5,433,646 ops/sec ±7.29% (5 runs sampled)
    EventEmitter2 x 4,494,095 ops/sec ±9.86% (5 runs sampled)
    RXJS x 3,520,242 ops/sec ±8.87% (5 runs sampled)
    event-signal x 3,471,821 ops/sec ±31.01% (5 runs sampled)
    dripEmitterEnhanced x 1,584,853 ops/sec ±1.80% (5 runs sampled)
    d3-dispatch x 1,600,223 ops/sec ±22.66% (5 runs sampled)
    JS-Signals x 549,254 ops/sec ±6.43% (5 runs sampled)
    EventEmitter x 611,317 ops/sec ±21.10% (5 runs sampled)
    observable x 486,989 ops/sec ±3.44% (5 runs sampled)
    namespace-emitter x 452,657 ops/sec ±4.24% (5 runs sampled)
    signal-emitter x 430,812 ops/sec ±16.91% (5 runs sampled)
    minivents x 209,026 ops/sec ±54.10% (5 runs sampled)
*Fastest is __dripEmitter, ReactiveProperty, EventEmitter3, MiniSignals, signal-lite__*

## emit
    Theoretical max x 8,277,256 ops/sec ±6.96% (10 runs sampled) *burn in*
    MiniSignals x 4,974,742 ops/sec ±11.33% (10 runs sampled)
    signal-lite x 4,556,476 ops/sec ±7.46% (10 runs sampled)
    EventEmitter3 x 996,357 ops/sec ±4.37% (10 runs sampled)
    EventEmitter2 x 628,509 ops/sec ±5.86% (10 runs sampled)
    dripEmitterEnhanced x 332,345 ops/sec ±6.80% (10 runs sampled)
    EventEmitter x 122,624 ops/sec ±3.05% (10 runs sampled)
    JS-Signals x 122,232 ops/sec ±4.00% (10 runs sampled)
    signal-emitter x 115,135 ops/sec ±15.05% (10 runs sampled)
*Fastest is __MiniSignals, signal-lite__*

## init
    EventEmitter3 x 45,861,644 ops/sec ±3.39% (10 runs sampled)
    DripEmitter x 44,311,598 ops/sec ±4.79% (10 runs sampled)
    EventDispatcher x 39,068,516 ops/sec ±8.45% (10 runs sampled)
    EventEmitter x 28,407,342 ops/sec ±3.81% (10 runs sampled)
    MiniSignals x 29,240,702 ops/sec ±8.76% (10 runs sampled)
    EventEmitter2 x 24,031,401 ops/sec ±13.38% (10 runs sampled)
    DripEmitterEnhanced x 20,562,064 ops/sec ±6.17% (10 runs sampled)
    Theoretical max x 25,386,111 ops/sec ±52.38% (10 runs sampled) *burn in*
    JS-Signals x 1,888,781 ops/sec ±8.79% (10 runs sampled)
    ReactiveProperty x 927,079 ops/sec ±26.14% (10 runs sampled)
*Fastest is __EventEmitter3, DripEmitter__*
