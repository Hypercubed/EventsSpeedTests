# Firefox 46.0 on OS X 10.11

# Tests
    ✔ (anonymous) [pass: 1, fail: 0, duration: 1ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 0ms]
    ✔ emit arrays [pass: 26, fail: 0, duration: 0ms]
    ✔ emit with bound function [pass: 26, fail: 0, duration: 4ms]
    ✔ emit with context [pass: 26, fail: 0, duration: 1ms]
    ✔ emit many listeners [pass: 28, fail: 0, duration: 2ms]
    ✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
    ✔ emit objects [pass: 28, fail: 0, duration: 0ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 1ms]
    ✔ emit [pass: 18, fail: 0, duration: 1ms]
    ✔ init [pass: 20, fail: 0, duration: 5ms]


# Summary

- duration: 16ms
- assertions: 247
- pass: 247
- fail: 0

# Comments

## add-remove
    dripEmitter x 23,778,922 ops/sec ±13.06% (10 runs sampled)
    ReactiveProperty x 18,741,151 ops/sec ±3.05% (10 runs sampled)
    MiniSignals x 10,868,522 ops/sec ±4.47% (10 runs sampled)
    EventEmitter3 x 5,536,675 ops/sec ±3.59% (10 runs sampled)
    EventDispatcher x 4,591,727 ops/sec ±5.80% (10 runs sampled)
    EventEmitter x 2,350,702 ops/sec ±7.17% (10 runs sampled)
    EventEmitter2 x 2,089,875 ops/sec ±8.06% (10 runs sampled)
    dripEmitterEnhanced x 441,573 ops/sec ±9.66% (10 runs sampled)
    JS-Signals x 364,149 ops/sec ±18.60% (10 runs sampled)
*Fastest is __dripEmitter__*

## emit arrays
    Theoretical max x 22,085,234 ops/sec ±5.31% (10 runs sampled) *burn in*
    ReactiveProperty x 6,240,605 ops/sec ±13.77% (10 runs sampled)
    dripEmitter x 4,478,039 ops/sec ±10.37% (10 runs sampled)
    EventEmitter3 x 3,979,029 ops/sec ±6.59% (10 runs sampled)
    MiniSignals x 3,473,790 ops/sec ±17.39% (10 runs sampled)
    event-signal x 2,914,433 ops/sec ±7.41% (10 runs sampled)
    EventEmitter2 x 2,724,382 ops/sec ±6.79% (10 runs sampled)
    RXJS x 1,898,268 ops/sec ±12.15% (10 runs sampled)
    signal-lite x 481,728 ops/sec ±3.25% (10 runs sampled)
    dripEmitterEnhanced x 492,354 ops/sec ±9.83% (10 runs sampled)
    EventEmitter x 327,940 ops/sec ±3.89% (10 runs sampled)
    signal-emitter x 324,524 ops/sec ±5.69% (10 runs sampled)
    JS-Signals x 187,317 ops/sec ±12.43% (10 runs sampled)
*Fastest is __ReactiveProperty__*

## emit with bound function
    Theoretical max x 85,085,691 ops/sec ±10.70% (10 runs sampled) *burn in*
    ReactiveProperty x 30,598,541 ops/sec ±5.91% (10 runs sampled)
    MiniSignals x 24,178,697 ops/sec ±4.17% (10 runs sampled)
    dripEmitter x 19,339,498 ops/sec ±1.98% (10 runs sampled)
    EventEmitter3 x 15,672,058 ops/sec ±4.12% (10 runs sampled)
    event-signal x 10,772,967 ops/sec ±4.31% (10 runs sampled)
    EventEmitter2 x 7,918,512 ops/sec ±14.25% (10 runs sampled)
    RXJS x 5,558,992 ops/sec ±7.48% (10 runs sampled)
    dripEmitterEnhanced x 1,733,883 ops/sec ±6.03% (10 runs sampled)
    signal-lite x 1,531,282 ops/sec ±4.11% (10 runs sampled)
    signal-emitter x 1,132,266 ops/sec ±5.55% (10 runs sampled)
    EventEmitter x 899,420 ops/sec ±4.25% (10 runs sampled)
    JS-Signals x 781,645 ops/sec ±4.39% (10 runs sampled)
*Fastest is __ReactiveProperty__*

## emit with context
    Theoretical max x 42,547,083 ops/sec ±37.32% (10 runs sampled) *burn in*
    MiniSignals x 22,896,351 ops/sec ±8.71% (10 runs sampled)
    ReactiveProperty x 19,757,973 ops/sec ±11.55% (10 runs sampled)
    dripEmitter x 9,587,834 ops/sec ±9.89% (10 runs sampled)
    event-signal x 8,391,207 ops/sec ±12.49% (10 runs sampled)
    EventEmitter3 x 8,087,151 ops/sec ±16.75% (10 runs sampled)
    RXJS x 3,870,144 ops/sec ±19.63% (10 runs sampled)
    EventEmitter2 x 3,684,610 ops/sec ±23.28% (10 runs sampled)
    signal-lite x 1,217,425 ops/sec ±8.26% (10 runs sampled)
    signal-emitter x 941,608 ops/sec ±6.38% (10 runs sampled)
    dripEmitterEnhanced x 888,319 ops/sec ±15.28% (10 runs sampled)
    JS-Signals x 647,624 ops/sec ±8.72% (10 runs sampled)
    EventEmitter x 378,630 ops/sec ±16.35% (10 runs sampled)
*Fastest is __MiniSignals__*

## emit many listeners
    ReactiveProperty x 19,819,043 ops/sec ±3.15% (10 runs sampled)
    MiniSignals x 5,475,897 ops/sec ±3.08% (10 runs sampled)
    Theoretical max x 5,482,326 ops/sec ±6.49% (10 runs sampled) *burn in*
    dripEmitter x 4,414,917 ops/sec ±4.27% (10 runs sampled)
    EventEmitter3 x 4,092,350 ops/sec ±7.04% (10 runs sampled)
    event-signal x 3,484,339 ops/sec ±12.40% (10 runs sampled)
    EventEmitter2 x 3,188,268 ops/sec ±3.69% (10 runs sampled)
    RXJS x 2,016,486 ops/sec ±8.68% (10 runs sampled)
    dripEmitterEnhanced x 1,235,094 ops/sec ±2.38% (10 runs sampled)
    signal-emitter x 923,081 ops/sec ±2.66% (10 runs sampled)
    signal-lite x 484,281 ops/sec ±2.90% (10 runs sampled)
    EventEmitter x 361,714 ops/sec ±3.62% (10 runs sampled)
    JS-Signals x 281,570 ops/sec ±2.80% (10 runs sampled)
    minivents x 190,965 ops/sec ±5.14% (10 runs sampled)
*Fastest is __ReactiveProperty__*

## emit many parameters
    Theoretical max x 182,707,289 ops/sec ±5.14% (10 runs sampled) *burn in*
    MiniSignals x 21,631,284 ops/sec ±3.78% (10 runs sampled)
    EventEmitter3 x 6,864,892 ops/sec ±6.09% (10 runs sampled)
    EventEmitter2 x 5,646,006 ops/sec ±8.46% (10 runs sampled)
    dripEmitterEnhanced x 1,407,407 ops/sec ±3.72% (10 runs sampled)
    signal-emitter x 512,552 ops/sec ±13.28% (10 runs sampled)
    signal-lite x 534,720 ops/sec ±18.59% (10 runs sampled)
    EventEmitter x 379,780 ops/sec ±3.34% (10 runs sampled)
    JS-Signals x 253,452 ops/sec ±24.18% (10 runs sampled)
    minivents x 176,867 ops/sec ±6.45% (10 runs sampled)
*Fastest is __MiniSignals__*

## emit objects
    ReactiveProperty x 7,629,290 ops/sec ±14.49% (10 runs sampled)
    MiniSignals x 2,422,707 ops/sec ±2.69% (10 runs sampled)
    EventDispatcher x 2,870,597 ops/sec ±29.40% (10 runs sampled)
    dripEmitter x 2,378,770 ops/sec ±7.46% (10 runs sampled)
    Theoretical max x 2,156,613 ops/sec ±14.39% (10 runs sampled) *burn in*
    EventEmitter3 x 1,964,563 ops/sec ±9.84% (10 runs sampled)
    event-signal x 1,798,352 ops/sec ±3.29% (10 runs sampled)
    EventEmitter2 x 1,609,570 ops/sec ±6.64% (10 runs sampled)
    RXJS x 1,267,781 ops/sec ±6.02% (10 runs sampled)
    dripEmitterEnhanced x 463,269 ops/sec ±5.90% (10 runs sampled)
    signal-lite x 433,732 ops/sec ±2.80% (10 runs sampled)
    signal-emitter x 307,269 ops/sec ±5.98% (10 runs sampled)
    EventEmitter x 251,237 ops/sec ±3.17% (10 runs sampled)
    JS-Signals x 168,119 ops/sec ±22.87% (10 runs sampled)
*Fastest is __ReactiveProperty__*

## emit one parameter
    Theoretical max x 134,605,281 ops/sec ±61.56% (5 runs sampled) *burn in*
    ReactiveProperty x 36,352,642 ops/sec ±8.30% (5 runs sampled)
    MiniSignals x 24,930,322 ops/sec ±3.88% (5 runs sampled)
    observ x 20,161,294 ops/sec ±5.07% (5 runs sampled)
    dripEmitter x 11,628,484 ops/sec ±11.73% (5 runs sampled)
    EventEmitter3 x 11,142,794 ops/sec ±25.13% (5 runs sampled)
    event-signal x 9,271,358 ops/sec ±16.20% (5 runs sampled)
    EventEmitter2 x 7,333,017 ops/sec ±25.28% (5 runs sampled)
    RXJS x 5,719,585 ops/sec ±26.74% (5 runs sampled)
    d3-dispatch x 4,777,996 ops/sec ±29.42% (5 runs sampled)
    signal-lite x 1,541,631 ops/sec ±6.39% (5 runs sampled)
    minivents x 775,320 ops/sec ±11.86% (5 runs sampled)
    JS-Signals x 712,090 ops/sec ±7.69% (5 runs sampled)
    dripEmitterEnhanced x 767,623 ops/sec ±17.84% (5 runs sampled)
    signal-emitter x 768,217 ops/sec ±18.55% (5 runs sampled)
    EventEmitter x 653,952 ops/sec ±22.89% (5 runs sampled)
    observable x 374,125 ops/sec ±12.26% (5 runs sampled)
    namespace-emitter x 369,221 ops/sec ±22.76% (5 runs sampled)
*Fastest is __ReactiveProperty__*

## emit
    Theoretical max x 83,447,263 ops/sec ±4.99% (10 runs sampled) *burn in*
    MiniSignals x 6,564,589 ops/sec ±2.52% (10 runs sampled)
    EventEmitter3 x 2,950,431 ops/sec ±9.05% (10 runs sampled)
    EventEmitter2 x 1,810,460 ops/sec ±7.81% (10 runs sampled)
    signal-lite x 402,052 ops/sec ±4.38% (10 runs sampled)
    dripEmitterEnhanced x 371,451 ops/sec ±5.86% (10 runs sampled)
    signal-emitter x 272,233 ops/sec ±1.82% (10 runs sampled)
    JS-Signals x 179,538 ops/sec ±4.91% (10 runs sampled)
    EventEmitter x 180,000 ops/sec ±9.98% (10 runs sampled)
*Fastest is __MiniSignals__*

## init
    EventEmitter3 x 55,618,481 ops/sec ±6.04% (10 runs sampled)
    Theoretical max x 55,835,650 ops/sec ±7.95% (10 runs sampled) *burn in*
    DripEmitter x 46,454,231 ops/sec ±8.32% (10 runs sampled)
    EventDispatcher x 48,397,477 ops/sec ±15.39% (10 runs sampled)
    MiniSignals x 31,688,066 ops/sec ±4.37% (10 runs sampled)
    EventEmitter x 28,649,788 ops/sec ±4.45% (10 runs sampled)
    EventEmitter2 x 28,019,177 ops/sec ±12.33% (10 runs sampled)
    JS-Signals x 17,506,419 ops/sec ±11.54% (10 runs sampled)
    DripEmitterEnhanced x 12,971,109 ops/sec ±4.34% (10 runs sampled)
    ReactiveProperty x 9,234,258 ops/sec ±4.31% (10 runs sampled)
*Fastest is __EventEmitter3, EventDispatcher__*
