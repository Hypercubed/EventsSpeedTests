# Safari 9.0.2 on OS X 10.11.2

# Tests
    ✔ (anonymous) [pass: 1, fail: 0, duration: 1ms]
    ✔ add-remove [pass: 18, fail: 0, duration: 0ms]
    ✔ emit arrays [pass: 26, fail: 0, duration: 1ms]
    ✔ emit with bound function [pass: 26, fail: 0, duration: 4ms]
    ✔ emit with context [pass: 26, fail: 0, duration: 1ms]
    ✔ emit many listeners [pass: 28, fail: 0, duration: 0ms]
    ✔ emit many parameters [pass: 20, fail: 0, duration: 1ms]
    ✔ emit objects [pass: 28, fail: 0, duration: 1ms]
    ✔ emit one parameter [pass: 36, fail: 0, duration: 0ms]
    ✔ emit [pass: 18, fail: 0, duration: 2ms]
    ✔ init [pass: 20, fail: 0, duration: 6ms]


# Summary

- duration: 17ms
- assertions: 247
- pass: 247
- fail: 0

# Comments

## add-remove
    dripEmitter x 7,657,075 ops/sec ±6.49% (10 runs sampled)
    MiniSignals x 2,933,157 ops/sec ±28.04% (10 runs sampled)
    EventDispatcher x 2,542,796 ops/sec ±17.35% (10 runs sampled)
    EventEmitter3 x 1,732,489 ops/sec ±3.28% (10 runs sampled)
    ReactiveProperty x 1,508,161 ops/sec ±13.67% (10 runs sampled)
    EventEmitter x 917,441 ops/sec ±7.99% (10 runs sampled)
    dripEmitterEnhanced x 729,133 ops/sec ±4.60% (10 runs sampled)
    JS-Signals x 718,208 ops/sec ±11.87% (10 runs sampled)
    EventEmitter2 x 601,396 ops/sec ±5.64% (10 runs sampled)
*Fastest is __dripEmitter__*

## emit arrays
    Theoretical max x 1,719,444 ops/sec ±38.46% (10 runs sampled) *burn in*
    event-signal x 796,518 ops/sec ±8.04% (10 runs sampled)
    dripEmitter x 660,137 ops/sec ±20.99% (10 runs sampled)
    MiniSignals x 601,453 ops/sec ±16.05% (10 runs sampled)
    EventEmitter2 x 592,169 ops/sec ±14.88% (10 runs sampled)
    ReactiveProperty x 567,179 ops/sec ±19.92% (10 runs sampled)
    signal-lite x 484,779 ops/sec ±2.67% (10 runs sampled)
    EventEmitter3 x 506,920 ops/sec ±11.05% (10 runs sampled)
    RXJS x 487,651 ops/sec ±17.37% (10 runs sampled)
    EventEmitter x 408,073 ops/sec ±4.68% (10 runs sampled)
    JS-Signals x 342,583 ops/sec ±9.20% (10 runs sampled)
    dripEmitterEnhanced x 337,677 ops/sec ±15.43% (10 runs sampled)
    signal-emitter x 200,295 ops/sec ±4.02% (10 runs sampled)
*Fastest is __event-signal, dripEmitter__*

## emit with bound function
    Theoretical max x 5,014,764 ops/sec ±26.77% (10 runs sampled) *burn in*
    MiniSignals x 3,044,541 ops/sec ±12.15% (10 runs sampled)
    event-signal x 2,788,505 ops/sec ±4.00% (10 runs sampled)
    RXJS x 1,939,341 ops/sec ±3.07% (10 runs sampled)
    EventEmitter2 x 1,785,727 ops/sec ±7.53% (10 runs sampled)
    signal-lite x 1,536,850 ops/sec ±7.50% (10 runs sampled)
    dripEmitter x 1,499,814 ops/sec ±9.06% (10 runs sampled)
    ReactiveProperty x 1,681,767 ops/sec ±25.26% (10 runs sampled)
    EventEmitter x 1,361,773 ops/sec ±9.28% (10 runs sampled)
    EventEmitter3 x 1,334,779 ops/sec ±16.91% (10 runs sampled)
    JS-Signals x 1,105,627 ops/sec ±9.51% (10 runs sampled)
    dripEmitterEnhanced x 907,989 ops/sec ±16.24% (10 runs sampled)
    signal-emitter x 688,617 ops/sec ±7.68% (10 runs sampled)
*Fastest is __MiniSignals__*

## emit with context
    Theoretical max x 5,082,660 ops/sec ±20.42% (10 runs sampled) *burn in*
    MiniSignals x 4,349,783 ops/sec ±3.81% (10 runs sampled)
    event-signal x 3,482,386 ops/sec ±7.26% (10 runs sampled)
    dripEmitter x 2,024,917 ops/sec ±7.03% (10 runs sampled)
    ReactiveProperty x 1,958,587 ops/sec ±6.21% (10 runs sampled)
    RXJS x 1,874,106 ops/sec ±3.07% (10 runs sampled)
    signal-lite x 1,881,686 ops/sec ±7.18% (10 runs sampled)
    EventEmitter3 x 1,791,180 ops/sec ±4.80% (10 runs sampled)
    EventEmitter2 x 1,720,678 ops/sec ±14.00% (10 runs sampled)
    EventEmitter x 1,377,017 ops/sec ±11.86% (10 runs sampled)
    JS-Signals x 1,250,515 ops/sec ±5.91% (10 runs sampled)
    dripEmitterEnhanced x 1,027,206 ops/sec ±9.44% (10 runs sampled)
    signal-emitter x 702,081 ops/sec ±4.52% (10 runs sampled)
*Fastest is __MiniSignals__*

## emit many listeners
    Theoretical max x 1,495,098 ops/sec ±31.80% (10 runs sampled) *burn in*
    ReactiveProperty x 685,950 ops/sec ±5.32% (10 runs sampled)
    MiniSignals x 662,839 ops/sec ±13.83% (10 runs sampled)
    dripEmitter x 587,958 ops/sec ±10.76% (10 runs sampled)
    event-signal x 596,902 ops/sec ±16.08% (10 runs sampled)
    EventEmitter3 x 548,315 ops/sec ±11.05% (10 runs sampled)
    EventEmitter x 510,876 ops/sec ±7.81% (10 runs sampled)
    signal-lite x 431,597 ops/sec ±5.16% (10 runs sampled)
    EventEmitter2 x 484,258 ops/sec ±20.43% (10 runs sampled)
    dripEmitterEnhanced x 448,669 ops/sec ±16.71% (10 runs sampled)
    JS-Signals x 393,972 ops/sec ±3.24% (10 runs sampled)
    RXJS x 423,860 ops/sec ±18.65% (10 runs sampled)
    signal-emitter x 364,542 ops/sec ±6.69% (10 runs sampled)
    minivents x 316,836 ops/sec ±3.89% (10 runs sampled)
*Fastest is __ReactiveProperty, MiniSignals, event-signal__*

## emit many parameters
    Theoretical max x 5,897,289 ops/sec ±28.27% (10 runs sampled) *burn in*
    MiniSignals x 3,264,670 ops/sec ±4.38% (10 runs sampled)
    EventEmitter2 x 1,137,916 ops/sec ±11.15% (10 runs sampled)
    EventEmitter x 1,109,528 ops/sec ±10.91% (10 runs sampled)
    signal-lite x 1,130,967 ops/sec ±19.80% (10 runs sampled)
    minivents x 890,747 ops/sec ±6.89% (10 runs sampled)
    JS-Signals x 795,920 ops/sec ±5.00% (10 runs sampled)
    EventEmitter3 x 881,624 ops/sec ±17.45% (10 runs sampled)
    dripEmitterEnhanced x 819,312 ops/sec ±10.51% (10 runs sampled)
    signal-emitter x 421,142 ops/sec ±6.77% (10 runs sampled)
*Fastest is __MiniSignals__*

## emit objects
    Theoretical max x 1,801,191 ops/sec ±43.34% (10 runs sampled) *burn in*
    event-signal x 808,388 ops/sec ±3.95% (10 runs sampled)
    EventDispatcher x 712,062 ops/sec ±6.83% (10 runs sampled)
    MiniSignals x 784,142 ops/sec ±27.93% (10 runs sampled)
    RXJS x 583,470 ops/sec ±7.53% (10 runs sampled)
    ReactiveProperty x 574,568 ops/sec ±14.17% (10 runs sampled)
    dripEmitter x 574,467 ops/sec ±15.87% (10 runs sampled)
    EventEmitter2 x 486,183 ops/sec ±8.31% (10 runs sampled)
    signal-lite x 462,056 ops/sec ±11.18% (10 runs sampled)
    EventEmitter3 x 407,310 ops/sec ±4.48% (10 runs sampled)
    EventEmitter x 354,511 ops/sec ±9.31% (10 runs sampled)
    dripEmitterEnhanced x 297,686 ops/sec ±14.29% (10 runs sampled)
    JS-Signals x 263,221 ops/sec ±9.67% (10 runs sampled)
    signal-emitter x 168,199 ops/sec ±23.99% (10 runs sampled)
*Fastest is __event-signal, MiniSignals__*

## emit one parameter
    Theoretical max x 10,134,839 ops/sec ±58.44% (10 runs sampled) *burn in*
    MiniSignals x 3,233,698 ops/sec ±7.22% (10 runs sampled)
    event-signal x 2,678,493 ops/sec ±8.57% (10 runs sampled)
    dripEmitter x 2,109,821 ops/sec ±10.12% (10 runs sampled)
    EventEmitter2 x 1,760,687 ops/sec ±11.29% (10 runs sampled)
    ReactiveProperty x 1,632,943 ops/sec ±10.02% (10 runs sampled)
    signal-lite x 1,545,555 ops/sec ±5.64% (10 runs sampled)
    EventEmitter3 x 1,567,196 ops/sec ±7.21% (10 runs sampled)
    d3-dispatch x 1,421,927 ops/sec ±4.11% (10 runs sampled)
    observ x 1,279,679 ops/sec ±3.21% (10 runs sampled)
    EventEmitter x 1,426,332 ops/sec ±15.28% (10 runs sampled)
    observable x 1,234,676 ops/sec ±10.80% (10 runs sampled)
    RXJS x 1,275,886 ops/sec ±28.53% (10 runs sampled)
    JS-Signals x 940,342 ops/sec ±9.62% (10 runs sampled)
    dripEmitterEnhanced x 977,769 ops/sec ±19.08% (10 runs sampled)
    minivents x 892,638 ops/sec ±28.59% (10 runs sampled)
    signal-emitter x 677,151 ops/sec ±6.00% (10 runs sampled)
    namespace-emitter x 405,233 ops/sec ±20.17% (10 runs sampled)
*Fastest is __MiniSignals__*

## emit
    Theoretical max x 1,901,532 ops/sec ±29.88% (10 runs sampled) *burn in*
    MiniSignals x 654,118 ops/sec ±20.28% (10 runs sampled)
    EventEmitter2 x 426,356 ops/sec ±9.79% (10 runs sampled)
    EventEmitter3 x 397,863 ops/sec ±5.69% (10 runs sampled)
    signal-lite x 346,895 ops/sec ±12.22% (10 runs sampled)
    EventEmitter x 322,597 ops/sec ±9.30% (10 runs sampled)
    JS-Signals x 275,081 ops/sec ±4.64% (10 runs sampled)
    dripEmitterEnhanced x 257,198 ops/sec ±13.63% (10 runs sampled)
    signal-emitter x 152,099 ops/sec ±3.88% (10 runs sampled)
*Fastest is __MiniSignals__*

## init
    EventEmitter3 x 77,920,521 ops/sec ±3.55% (10 runs sampled)
    Theoretical max x 47,540,568 ops/sec ±10.80% (10 runs sampled) *burn in*
    EventDispatcher x 39,724,576 ops/sec ±24.11% (10 runs sampled)
    DripEmitter x 20,491,193 ops/sec ±2.80% (10 runs sampled)
    EventEmitter2 x 16,912,875 ops/sec ±3.53% (10 runs sampled)
    EventEmitter x 21,678,631 ops/sec ±34.97% (10 runs sampled)
    JS-Signals x 14,661,651 ops/sec ±7.46% (10 runs sampled)
    MiniSignals x 17,913,211 ops/sec ±36.75% (10 runs sampled)
    DripEmitterEnhanced x 8,015,190 ops/sec ±22.82% (10 runs sampled)
    ReactiveProperty x 4,346,250 ops/sec ±14.32% (10 runs sampled)
*Fastest is __EventEmitter3__*
