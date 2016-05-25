# Chrome 50.0.2661.102 on OS X 10.11.2

## add-remove

    MiniSignals x 14,805,825 ops/sec ±7.36% (10 runs sampled)
    dripEmitter x 19,268,206 ops/sec ±49.79% (10 runs sampled)
    EventDispatcher x 4,784,828 ops/sec ±5.08% (10 runs sampled)
    ReactiveProperty x 4,764,147 ops/sec ±7.36% (10 runs sampled)
    EventEmitter3 x 1,737,623 ops/sec ±7.94% (10 runs sampled)
    EventEmitter x 1,313,494 ops/sec ±7.18% (10 runs sampled)
    EventEmitter2 x 1,110,052 ops/sec ±7.34% (10 runs sampled)
    JS-Signals x 645,875 ops/sec ±5.96% (10 runs sampled)
    dripEmitterEnhanced x 579,294 ops/sec ±3.96% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit arrays

    Theoretical max x 13,395,901 ops/sec ±9.90% (10 runs sampled) *burn in*
    MiniSignals x 7,400,257 ops/sec ±7.74% (10 runs sampled)
    ReactiveProperty x 5,378,628 ops/sec ±5.34% (10 runs sampled)
    dripEmitter x 4,365,381 ops/sec ±10.03% (10 runs sampled)
    EventEmitter3 x 4,464,821 ops/sec ±14.64% (10 runs sampled)
    signal-lite x 4,322,282 ops/sec ±78.80% (10 runs sampled)
    event-signal x 1,762,957 ops/sec ±15.20% (10 runs sampled)
    EventEmitter2 x 1,475,594 ops/sec ±8.33% (10 runs sampled)
    RXJS x 1,307,664 ops/sec ±8.93% (10 runs sampled)
    dripEmitterEnhanced x 559,622 ops/sec ±8.97% (10 runs sampled)
    signal-emitter x 202,431 ops/sec ±14.40% (10 runs sampled)
    JS-Signals x 156,331 ops/sec ±10.36% (10 runs sampled)
    EventEmitter x 130,662 ops/sec ±52.24% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit with bound function

    Theoretical max x 32,876,705 ops/sec ±7.20% (10 runs sampled) *burn in*
    ReactiveProperty x 14,758,351 ops/sec ±5.66% (10 runs sampled)
    EventEmitter3 x 11,610,857 ops/sec ±7.25% (10 runs sampled)
    dripEmitter x 11,332,585 ops/sec ±12.47% (10 runs sampled)
    MiniSignals x 7,676,174 ops/sec ±5.06% (10 runs sampled)
    signal-lite x 5,412,967 ops/sec ±1.06% (10 runs sampled)
    EventEmitter2 x 4,925,847 ops/sec ±3.35% (10 runs sampled)
    event-signal x 4,782,857 ops/sec ±7.44% (10 runs sampled)
    RXJS x 3,341,403 ops/sec ±5.39% (10 runs sampled)
    dripEmitterEnhanced x 1,139,600 ops/sec ±55.46% (10 runs sampled)
    signal-emitter x 712,793 ops/sec ±2.04% (10 runs sampled)
    EventEmitter x 547,483 ops/sec ±11.38% (10 runs sampled)
    JS-Signals x 513,034 ops/sec ±14.79% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit with context

    Theoretical max x 28,286,830 ops/sec ±5.60% (10 runs sampled) *burn in*
    ReactiveProperty x 15,343,392 ops/sec ±4.76% (10 runs sampled)
    signal-lite x 14,069,989 ops/sec ±11.90% (10 runs sampled)
    dripEmitter x 12,770,059 ops/sec ±7.26% (10 runs sampled)
    EventEmitter3 x 12,463,340 ops/sec ±6.31% (10 runs sampled)
    MiniSignals x 11,904,072 ops/sec ±33.74% (10 runs sampled)
    EventEmitter2 x 4,297,151 ops/sec ±19.56% (10 runs sampled)
    event-signal x 4,295,455 ops/sec ±21.49% (10 runs sampled)
    RXJS x 3,708,017 ops/sec ±5.41% (10 runs sampled)
    dripEmitterEnhanced x 1,853,775 ops/sec ±4.76% (10 runs sampled)
    signal-emitter x 700,955 ops/sec ±5.51% (10 runs sampled)
    JS-Signals x 543,887 ops/sec ±6.64% (10 runs sampled)
    EventEmitter x 560,651 ops/sec ±10.49% (10 runs sampled)

*Fastest is __ReactiveProperty, signal-lite, MiniSignals__*

## emit many listeners

    signal-lite x 4,009,066 ops/sec ±4.71% (10 runs sampled)
    dripEmitter x 3,885,181 ops/sec ±7.05% (10 runs sampled)
    ReactiveProperty x 3,310,755 ops/sec ±4.16% (10 runs sampled)
    EventEmitter3 x 3,315,313 ops/sec ±20.92% (10 runs sampled)
    event-signal x 2,380,618 ops/sec ±9.97% (10 runs sampled)
    MiniSignals x 3,186,223 ops/sec ±48.21% (10 runs sampled)
    Theoretical max x 2,693,941 ops/sec ±30.56% (10 runs sampled) *burn in*
    EventEmitter2 x 2,040,491 ops/sec ±8.63% (10 runs sampled)
    RXJS x 1,358,047 ops/sec ±5.12% (10 runs sampled)
    dripEmitterEnhanced x 1,086,042 ops/sec ±4.76% (10 runs sampled)
    signal-emitter x 563,835 ops/sec ±2.74% (10 runs sampled)
    JS-Signals x 246,951 ops/sec ±6.08% (10 runs sampled)
    EventEmitter x 233,065 ops/sec ±12.53% (10 runs sampled)
    minivents x 95,178 ops/sec ±3.57% (10 runs sampled)

*Fastest is __signal-lite, dripEmitter, MiniSignals__*

## emit many parameters

    MiniSignals x 13,772,728 ops/sec ±6.67% (10 runs sampled)
    signal-lite x 13,195,099 ops/sec ±3.99% (10 runs sampled)
    Theoretical max x 14,562,663 ops/sec ±15.17% (10 runs sampled) *burn in*
    EventEmitter3 x 645,172 ops/sec ±6.29% (10 runs sampled)
    dripEmitterEnhanced x 464,472 ops/sec ±6.67% (10 runs sampled)
    signal-emitter x 377,462 ops/sec ±4.39% (10 runs sampled)
    EventEmitter2 x 436,310 ops/sec ±57.69% (10 runs sampled)
    JS-Signals x 158,649 ops/sec ±5.70% (10 runs sampled)
    EventEmitter x 150,519 ops/sec ±3.74% (10 runs sampled)
    minivents x 93,984 ops/sec ±5.25% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*

## emit objects

    Theoretical max x 11,754,732 ops/sec ±4.93% (10 runs sampled) *burn in*
    MiniSignals x 6,563,594 ops/sec ±4.61% (10 runs sampled)
    signal-lite x 5,942,893 ops/sec ±6.51% (10 runs sampled)
    ReactiveProperty x 5,353,670 ops/sec ±7.40% (10 runs sampled)
    dripEmitter x 4,925,110 ops/sec ±3.07% (10 runs sampled)
    EventEmitter3 x 4,494,710 ops/sec ±5.44% (10 runs sampled)
    EventDispatcher x 2,248,532 ops/sec ±6.68% (10 runs sampled)
    event-signal x 1,780,016 ops/sec ±6.18% (10 runs sampled)
    EventEmitter2 x 1,530,685 ops/sec ±4.33% (10 runs sampled)
    RXJS x 1,308,355 ops/sec ±6.35% (10 runs sampled)
    dripEmitterEnhanced x 650,975 ops/sec ±4.16% (10 runs sampled)
    EventEmitter x 208,590 ops/sec ±2.99% (10 runs sampled)
    JS-Signals x 171,429 ops/sec ±5.33% (10 runs sampled)
    signal-emitter x 170,383 ops/sec ±48.96% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit one parameter

    Theoretical max x 26,000,833 ops/sec ±13.30% (5 runs sampled) *burn in*
    MiniSignals x 18,986,939 ops/sec ±11.68% (5 runs sampled)
    signal-lite x 16,861,179 ops/sec ±6.87% (5 runs sampled)
    dripEmitter x 15,165,084 ops/sec ±3.38% (5 runs sampled)
    EventEmitter3 x 13,874,401 ops/sec ±4.77% (5 runs sampled)
    ReactiveProperty x 11,417,241 ops/sec ±10.83% (5 runs sampled)
    event-signal x 5,766,732 ops/sec ±2.68% (5 runs sampled)
    observ x 5,377,031 ops/sec ±6.59% (5 runs sampled)
    EventEmitter2 x 4,269,723 ops/sec ±16.38% (5 runs sampled)
    RXJS x 3,343,840 ops/sec ±15.41% (5 runs sampled)
    dripEmitterEnhanced x 1,859,218 ops/sec ±13.10% (5 runs sampled)
    d3-dispatch x 1,496,327 ops/sec ±55.31% (5 runs sampled)
    signal-emitter x 734,940 ops/sec ±9.52% (5 runs sampled)
    EventEmitter x 591,621 ops/sec ±5.20% (5 runs sampled)
    JS-Signals x 527,693 ops/sec ±5.87% (5 runs sampled)
    minivents x 406,667 ops/sec ±14.86% (5 runs sampled)
    observable x 396,526 ops/sec ±18.46% (5 runs sampled)
    namespace-emitter x 193,194 ops/sec ±104.24% (5 runs sampled)

*Fastest is __MiniSignals, signal-lite__*

## emit

    Theoretical max x 2,679,652 ops/sec ±5.61% (10 runs sampled) *burn in*
    MiniSignals x 2,050,500 ops/sec ±4.49% (10 runs sampled)
    signal-lite x 1,837,844 ops/sec ±3.28% (10 runs sampled)
    EventEmitter3 x 794,867 ops/sec ±1.58% (10 runs sampled)
    EventEmitter2 x 502,228 ops/sec ±7.60% (10 runs sampled)
    dripEmitterEnhanced x 319,206 ops/sec ±7.11% (10 runs sampled)
    signal-emitter x 146,497 ops/sec ±3.94% (10 runs sampled)
    JS-Signals x 114,732 ops/sec ±4.38% (10 runs sampled)
    EventEmitter x 83,382 ops/sec ±47.78% (10 runs sampled)

*Fastest is __MiniSignals__*

## init

    EventEmitter3 x 49,436,205 ops/sec ±45.93% (2 runs sampled)
    EventDispatcher x 46,684,540 ops/sec ±38.98% (2 runs sampled)
    DripEmitter x 51,308,411 ops/sec ±59.37% (2 runs sampled)
    EventEmitter2 x 32,144,121 ops/sec ±16.07% (2 runs sampled)
    EventEmitter x 30,690,974 ops/sec ±32.58% (2 runs sampled)
    MiniSignals x 33,367,099 ops/sec ±150.33% (2 runs sampled)
    DripEmitterEnhanced x 17,862,805 ops/sec ±46.49% (2 runs sampled)
    Theoretical max x 14,108,431 ops/sec ±848.16% (2 runs sampled) *burn in*
    ReactiveProperty x 1,473,962 ops/sec ±55.94% (2 runs sampled)
    JS-Signals x 1,190,477 ops/sec ±266.82% (2 runs sampled)

*Fastest is __EventEmitter3, EventDispatcher, DripEmitter__*
