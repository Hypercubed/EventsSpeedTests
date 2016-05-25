# Firefox 46.0 on OS X 10.11

## add-remove

    dripEmitter x 29,232,460 ops/sec ±4.47% (10 runs sampled)
    ReactiveProperty x 16,789,771 ops/sec ±5.70% (10 runs sampled)
    MiniSignals x 8,469,319 ops/sec ±42.30% (10 runs sampled)
    EventEmitter3 x 5,225,268 ops/sec ±5.42% (10 runs sampled)
    EventDispatcher x 4,654,945 ops/sec ±5.41% (10 runs sampled)
    EventEmitter x 2,623,381 ops/sec ±4.76% (10 runs sampled)
    EventEmitter2 x 2,056,927 ops/sec ±4.16% (10 runs sampled)
    dripEmitterEnhanced x 476,458 ops/sec ±4.52% (10 runs sampled)
    JS-Signals x 347,350 ops/sec ±25.49% (10 runs sampled)

*Fastest is __dripEmitter__*

## emit arrays

    Theoretical max x 25,832,616 ops/sec ±3.09% (10 runs sampled) *burn in*
    ReactiveProperty x 9,454,513 ops/sec ±5.39% (10 runs sampled)
    MiniSignals x 7,194,244 ops/sec ±5.16% (10 runs sampled)
    dripEmitter x 5,213,188 ops/sec ±6.02% (10 runs sampled)
    EventEmitter3 x 4,475,415 ops/sec ±7.69% (10 runs sampled)
    event-signal x 3,756,026 ops/sec ±2.16% (10 runs sampled)
    EventEmitter2 x 2,935,501 ops/sec ±5.15% (10 runs sampled)
    RXJS x 2,432,670 ops/sec ±3.29% (10 runs sampled)
    signal-lite x 533,762 ops/sec ±4.53% (10 runs sampled)
    signal-emitter x 397,481 ops/sec ±4.32% (10 runs sampled)
    EventEmitter x 350,237 ops/sec ±6.39% (10 runs sampled)
    dripEmitterEnhanced x 424,971 ops/sec ±43.13% (10 runs sampled)
    JS-Signals x 274,853 ops/sec ±5.96% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit with bound function

    Theoretical max x 120,747,806 ops/sec ±2.58% (10 runs sampled) *burn in*
    ReactiveProperty x 48,542,984 ops/sec ±8.91% (10 runs sampled)
    MiniSignals x 27,258,327 ops/sec ±5.59% (10 runs sampled)
    dripEmitter x 21,338,365 ops/sec ±2.45% (10 runs sampled)
    EventEmitter3 x 17,105,530 ops/sec ±4.40% (10 runs sampled)
    event-signal x 11,558,793 ops/sec ±2.58% (10 runs sampled)
    EventEmitter2 x 10,366,064 ops/sec ±2.95% (10 runs sampled)
    RXJS x 7,684,830 ops/sec ±4.43% (10 runs sampled)
    dripEmitterEnhanced x 1,823,719 ops/sec ±6.94% (10 runs sampled)
    signal-emitter x 1,138,746 ops/sec ±7.52% (10 runs sampled)
    signal-lite x 1,218,056 ops/sec ±33.71% (10 runs sampled)
    JS-Signals x 827,446 ops/sec ±5.10% (10 runs sampled)
    EventEmitter x 745,551 ops/sec ±32.63% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit with context

    Theoretical max x 110,040,620 ops/sec ±3.71% (10 runs sampled) *burn in*
    ReactiveProperty x 44,976,279 ops/sec ±3.13% (10 runs sampled)
    MiniSignals x 31,842,246 ops/sec ±2.74% (10 runs sampled)
    dripEmitter x 20,435,934 ops/sec ±4.25% (10 runs sampled)
    EventEmitter3 x 18,648,913 ops/sec ±4.81% (10 runs sampled)
    event-signal x 12,341,453 ops/sec ±4.00% (10 runs sampled)
    EventEmitter2 x 10,307,548 ops/sec ±3.66% (10 runs sampled)
    RXJS x 7,460,260 ops/sec ±5.28% (10 runs sampled)
    dripEmitterEnhanced x 1,679,557 ops/sec ±6.60% (10 runs sampled)
    signal-lite x 1,631,573 ops/sec ±5.40% (10 runs sampled)
    signal-emitter x 1,231,868 ops/sec ±3.13% (10 runs sampled)
    EventEmitter x 1,082,288 ops/sec ±4.07% (10 runs sampled)
    JS-Signals x 574,195 ops/sec ±35.37% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit many listeners

    ReactiveProperty x 30,971,436 ops/sec ±4.24% (10 runs sampled)
    Theoretical max x 6,865,967 ops/sec ±4.18% (10 runs sampled) *burn in*
    MiniSignals x 6,889,495 ops/sec ±7.95% (10 runs sampled)
    dripEmitter x 5,502,802 ops/sec ±2.08% (10 runs sampled)
    event-signal x 4,566,753 ops/sec ±1.22% (10 runs sampled)
    EventEmitter2 x 3,608,805 ops/sec ±2.21% (10 runs sampled)
    EventEmitter3 x 3,627,388 ops/sec ±23.69% (10 runs sampled)
    RXJS x 2,333,594 ops/sec ±1.44% (10 runs sampled)
    dripEmitterEnhanced x 1,401,008 ops/sec ±2.23% (10 runs sampled)
    signal-emitter x 1,044,173 ops/sec ±1.76% (10 runs sampled)
    signal-lite x 481,531 ops/sec ±7.12% (10 runs sampled)
    EventEmitter x 373,924 ops/sec ±6.31% (10 runs sampled)
    JS-Signals x 309,646 ops/sec ±3.73% (10 runs sampled)
    minivents x 197,723 ops/sec ±3.22% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit many parameters

    Theoretical max x 1,665,225,948 ops/sec ±3.32% (10 runs sampled) *burn in*
    MiniSignals x 23,381,347 ops/sec ±3.37% (10 runs sampled)
    EventEmitter3 x 7,757,135 ops/sec ±1.53% (10 runs sampled)
    EventEmitter2 x 5,809,156 ops/sec ±3.41% (10 runs sampled)
    dripEmitterEnhanced x 1,653,127 ops/sec ±1.10% (10 runs sampled)
    signal-lite x 976,716 ops/sec ±4.66% (10 runs sampled)
    signal-emitter x 854,763 ops/sec ±9.16% (10 runs sampled)
    EventEmitter x 437,561 ops/sec ±2.59% (10 runs sampled)
    JS-Signals x 367,044 ops/sec ±5.41% (10 runs sampled)
    minivents x 257,349 ops/sec ±22.03% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit objects

    ReactiveProperty x 13,640,439 ops/sec ±1.58% (10 runs sampled)
    Theoretical max x 4,058,630 ops/sec ±5.93% (10 runs sampled) *burn in*
    MiniSignals x 2,918,795 ops/sec ±4.64% (10 runs sampled)
    dripEmitter x 2,577,864 ops/sec ±2.17% (10 runs sampled)
    EventEmitter3 x 2,377,713 ops/sec ±5.08% (10 runs sampled)
    EventEmitter2 x 1,793,321 ops/sec ±1.66% (10 runs sampled)
    event-signal x 1,867,126 ops/sec ±6.40% (10 runs sampled)
    EventDispatcher x 1,657,536 ops/sec ±3.18% (10 runs sampled)
    RXJS x 1,422,209 ops/sec ±3.53% (10 runs sampled)
    dripEmitterEnhanced x 533,816 ops/sec ±1.87% (10 runs sampled)
    signal-lite x 486,281 ops/sec ±2.91% (10 runs sampled)
    signal-emitter x 358,147 ops/sec ±4.80% (10 runs sampled)
    EventEmitter x 311,472 ops/sec ±2.52% (10 runs sampled)
    JS-Signals x 177,376 ops/sec ±39.65% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit one parameter

    Theoretical max x 352,782,491 ops/sec ±5.40% (5 runs sampled) *burn in*
    ReactiveProperty x 69,527,531 ops/sec ±5.76% (5 runs sampled)
    observ x 44,246,262 ops/sec ±5.05% (5 runs sampled)
    MiniSignals x 31,231,044 ops/sec ±12.22% (5 runs sampled)
    dripEmitter x 22,418,452 ops/sec ±3.78% (5 runs sampled)
    EventEmitter3 x 18,443,833 ops/sec ±2.52% (5 runs sampled)
    event-signal x 12,997,159 ops/sec ±6.31% (5 runs sampled)
    EventEmitter2 x 9,475,103 ops/sec ±5.94% (5 runs sampled)
    RXJS x 8,539,707 ops/sec ±3.09% (5 runs sampled)
    d3-dispatch x 8,603,787 ops/sec ±6.37% (5 runs sampled)
    signal-lite x 1,792,333 ops/sec ±3.38% (5 runs sampled)
    signal-emitter x 1,268,198 ops/sec ±7.42% (5 runs sampled)
    EventEmitter x 1,049,784 ops/sec ±9.57% (5 runs sampled)
    minivents x 921,337 ops/sec ±4.13% (5 runs sampled)
    JS-Signals x 869,988 ops/sec ±7.25% (5 runs sampled)
    dripEmitterEnhanced x 1,122,945 ops/sec ±71.66% (5 runs sampled)
    namespace-emitter x 609,370 ops/sec ±9.77% (5 runs sampled)
    observable x 488,847 ops/sec ±6.82% (5 runs sampled)

*Fastest is __ReactiveProperty__*

## emit

    MiniSignals x 949,716 ops/sec ±1.23% (10 runs sampled)
    Theoretical max x 975,269 ops/sec ±5.63% (10 runs sampled) *burn in*
    EventEmitter3 x 826,201 ops/sec ±3.85% (10 runs sampled)
    EventEmitter2 x 687,183 ops/sec ±2.85% (10 runs sampled)
    dripEmitterEnhanced x 319,752 ops/sec ±2.44% (10 runs sampled)
    signal-lite x 304,897 ops/sec ±2.61% (10 runs sampled)
    signal-emitter x 230,525 ops/sec ±3.46% (10 runs sampled)
    JS-Signals x 167,634 ops/sec ±1.82% (10 runs sampled)
    EventEmitter x 144,075 ops/sec ±30.27% (10 runs sampled)

*Fastest is __MiniSignals__*

## init

    EventEmitter3 x 56,136,258 ops/sec ±3.74% (10 runs sampled)
    DripEmitter x 52,322,935 ops/sec ±2.05% (10 runs sampled)
    EventDispatcher x 52,747,886 ops/sec ±10.79% (10 runs sampled)
    Theoretical max x 44,099,878 ops/sec ±29.70% (10 runs sampled) *burn in*
    MiniSignals x 33,654,387 ops/sec ±2.96% (10 runs sampled)
    EventEmitter2 x 33,180,539 ops/sec ±2.28% (10 runs sampled)
    EventEmitter x 24,682,165 ops/sec ±35.82% (10 runs sampled)
    JS-Signals x 17,230,192 ops/sec ±3.27% (10 runs sampled)
    DripEmitterEnhanced x 13,209,687 ops/sec ±3.58% (10 runs sampled)
    ReactiveProperty x 9,583,973 ops/sec ±2.05% (10 runs sampled)

*Fastest is __EventEmitter3, EventDispatcher__*
