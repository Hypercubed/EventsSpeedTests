# Node.js 6.2.0 on Darwin 64-bit

## add-remove

    dripEmitter x 29,068,744 ops/sec ±4.41% (10 runs sampled)
    MiniSignals x 12,069,659 ops/sec ±25.95% (10 runs sampled)
    EventDispatcher x 5,117,952 ops/sec ±4.35% (10 runs sampled)
    ReactiveProperty x 4,560,422 ops/sec ±5.34% (10 runs sampled)
    EventEmitter x 3,590,614 ops/sec ±20.17% (10 runs sampled)
    EventEmitter3 x 1,396,507 ops/sec ±32.84% (10 runs sampled)
    EventEmitter2 x 1,106,528 ops/sec ±6.26% (10 runs sampled)
    JS-Signals x 761,521 ops/sec ±3.81% (10 runs sampled)
    dripEmitterEnhanced x 706,685 ops/sec ±4.65% (10 runs sampled)

*Fastest is __dripEmitter__*

## emit arrays

    Theoretical max x 11,877,784 ops/sec ±7.49% (10 runs sampled) *burn in*
    MiniSignals x 7,315,542 ops/sec ±4.47% (10 runs sampled)
    signal-lite x 6,986,781 ops/sec ±3.78% (10 runs sampled)
    ReactiveProperty x 5,167,512 ops/sec ±8.05% (10 runs sampled)
    EventEmitter3 x 4,987,309 ops/sec ±4.72% (10 runs sampled)
    dripEmitter x 4,878,622 ops/sec ±11.71% (10 runs sampled)
    event-signal x 2,012,675 ops/sec ±2.62% (10 runs sampled)
    EventEmitter x 2,437,990 ops/sec ±61.33% (10 runs sampled)
    EventEmitter2 x 1,469,473 ops/sec ±6.36% (10 runs sampled)
    RXJS x 1,238,918 ops/sec ±7.98% (10 runs sampled)
    dripEmitterEnhanced x 642,364 ops/sec ±2.90% (10 runs sampled)
    signal-emitter x 239,728 ops/sec ±7.33% (10 runs sampled)
    JS-Signals x 126,904 ops/sec ±49.81% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*

## emit with bound function

    Theoretical max x 34,935,745 ops/sec ±4.04% (10 runs sampled) *burn in*
    ReactiveProperty x 16,313,263 ops/sec ±4.46% (10 runs sampled)
    dripEmitter x 14,269,582 ops/sec ±3.16% (10 runs sampled)
    EventEmitter x 8,721,586 ops/sec ±8.46% (10 runs sampled)
    EventEmitter3 x 9,212,355 ops/sec ±17.13% (10 runs sampled)
    MiniSignals x 7,701,094 ops/sec ±6.42% (10 runs sampled)
    signal-lite x 6,039,038 ops/sec ±5.01% (10 runs sampled)
    event-signal x 5,855,702 ops/sec ±3.99% (10 runs sampled)
    RXJS x 4,394,726 ops/sec ±3.28% (10 runs sampled)
    EventEmitter2 x 3,971,893 ops/sec ±36.85% (10 runs sampled)
    dripEmitterEnhanced x 2,501,897 ops/sec ±3.58% (10 runs sampled)
    signal-emitter x 791,785 ops/sec ±3.24% (10 runs sampled)
    JS-Signals x 585,024 ops/sec ±6.34% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit with context

    Theoretical max x 31,571,392 ops/sec ±7.40% (10 runs sampled) *burn in*
    signal-lite x 19,729,000 ops/sec ±4.83% (10 runs sampled)
    MiniSignals x 17,266,928 ops/sec ±6.62% (10 runs sampled)
    ReactiveProperty x 15,983,301 ops/sec ±6.77% (10 runs sampled)
    dripEmitter x 14,042,743 ops/sec ±4.99% (10 runs sampled)
    EventEmitter3 x 13,501,164 ops/sec ±7.23% (10 runs sampled)
    EventEmitter x 8,002,983 ops/sec ±6.04% (10 runs sampled)
    EventEmitter2 x 4,568,961 ops/sec ±7.99% (10 runs sampled)
    RXJS x 4,255,953 ops/sec ±5.58% (10 runs sampled)
    event-signal x 5,146,229 ops/sec ±29.94% (10 runs sampled)
    dripEmitterEnhanced x 1,739,639 ops/sec ±37.12% (10 runs sampled)
    signal-emitter x 589,256 ops/sec ±6.73% (10 runs sampled)
    JS-Signals x 559,565 ops/sec ±4.81% (10 runs sampled)

*Fastest is __signal-lite__*

## emit many listeners

    MiniSignals x 5,049,123 ops/sec ±2.13% (10 runs sampled)
    EventEmitter3 x 4,137,589 ops/sec ±5.42% (10 runs sampled)
    dripEmitter x 4,148,091 ops/sec ±6.18% (10 runs sampled)
    signal-lite x 4,065,798 ops/sec ±5.95% (10 runs sampled)
    ReactiveProperty x 3,793,864 ops/sec ±3.44% (10 runs sampled)
    EventEmitter x 3,518,407 ops/sec ±10.08% (10 runs sampled)
    event-signal x 3,044,645 ops/sec ±1.27% (10 runs sampled)
    EventEmitter2 x 2,586,154 ops/sec ±4.68% (10 runs sampled)
    Theoretical max x 3,462,857 ops/sec ±55.91% (10 runs sampled) *burn in*
    dripEmitterEnhanced x 1,356,409 ops/sec ±3.31% (10 runs sampled)
    RXJS x 1,060,200 ops/sec ±58.43% (10 runs sampled)
    signal-emitter x 588,727 ops/sec ±6.88% (10 runs sampled)
    JS-Signals x 267,482 ops/sec ±5.20% (10 runs sampled)
    minivents x 78,708 ops/sec ±29.58% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit many parameters

    signal-lite x 14,395,068 ops/sec ±6.02% (10 runs sampled)
    MiniSignals x 14,108,261 ops/sec ±7.54% (10 runs sampled)
    Theoretical max x 14,601,020 ops/sec ±43.56% (10 runs sampled) *burn in*
    EventEmitter3 x 773,458 ops/sec ±4.76% (10 runs sampled)
    EventEmitter2 x 705,180 ops/sec ±2.82% (10 runs sampled)
    EventEmitter x 696,394 ops/sec ±7.78% (10 runs sampled)
    dripEmitterEnhanced x 551,555 ops/sec ±3.80% (10 runs sampled)
    JS-Signals x 218,386 ops/sec ±3.98% (10 runs sampled)
    signal-emitter x 257,172 ops/sec ±44.48% (10 runs sampled)
    minivents x 135,035 ops/sec ±18.02% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*

## emit objects

    Theoretical max x 11,815,984 ops/sec ±3.62% (10 runs sampled) *burn in*
    MiniSignals x 6,812,306 ops/sec ±3.60% (10 runs sampled)
    signal-lite x 5,791,838 ops/sec ±6.62% (10 runs sampled)
    ReactiveProperty x 5,425,561 ops/sec ±7.01% (10 runs sampled)
    dripEmitter x 5,072,211 ops/sec ±4.79% (10 runs sampled)
    EventEmitter3 x 4,955,640 ops/sec ±3.43% (10 runs sampled)
    EventEmitter x 3,328,286 ops/sec ±5.81% (10 runs sampled)
    event-signal x 1,860,704 ops/sec ±6.30% (10 runs sampled)
    EventEmitter2 x 1,657,167 ops/sec ±3.46% (10 runs sampled)
    EventDispatcher x 1,760,672 ops/sec ±69.42% (10 runs sampled)
    dripEmitterEnhanced x 617,137 ops/sec ±2.51% (10 runs sampled)
    RXJS x 832,668 ops/sec ±61.27% (10 runs sampled)
    JS-Signals x 205,987 ops/sec ±5.97% (10 runs sampled)
    signal-emitter x 210,520 ops/sec ±11.28% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit one parameter

    MiniSignals x 19,111,719 ops/sec ±6.72% (5 runs sampled)
    signal-lite x 17,991,112 ops/sec ±3.67% (5 runs sampled)
    dripEmitter x 14,981,068 ops/sec ±6.57% (5 runs sampled)
    EventEmitter3 x 14,276,924 ops/sec ±4.11% (5 runs sampled)
    ReactiveProperty x 14,061,976 ops/sec ±6.72% (5 runs sampled)
    Theoretical max x 16,560,683 ops/sec ±49.37% (5 runs sampled) *burn in*
    EventEmitter x 9,826,458 ops/sec ±3.50% (5 runs sampled)
    event-signal x 6,104,870 ops/sec ±3.03% (5 runs sampled)
    observ x 6,024,856 ops/sec ±4.98% (5 runs sampled)
    EventEmitter2 x 4,969,392 ops/sec ±7.31% (5 runs sampled)
    RXJS x 3,869,966 ops/sec ±8.17% (5 runs sampled)
    dripEmitterEnhanced x 2,080,524 ops/sec ±7.58% (5 runs sampled)
    d3-dispatch x 1,938,172 ops/sec ±4.64% (5 runs sampled)
    signal-emitter x 697,289 ops/sec ±7.02% (5 runs sampled)
    namespace-emitter x 587,426 ops/sec ±9.08% (5 runs sampled)
    minivents x 554,885 ops/sec ±6.01% (5 runs sampled)
    observable x 470,400 ops/sec ±9.94% (5 runs sampled)
    JS-Signals x 321,924 ops/sec ±101.78% (5 runs sampled)

*Fastest is __MiniSignals, signal-lite__*

## emit

    Theoretical max x 3,063,129 ops/sec ±3.73% (10 runs sampled) *burn in*
    signal-lite x 2,193,947 ops/sec ±4.57% (10 runs sampled)
    MiniSignals x 2,145,173 ops/sec ±8.80% (10 runs sampled)
    EventEmitter x 1,255,249 ops/sec ±15.54% (10 runs sampled)
    EventEmitter3 x 745,184 ops/sec ±16.03% (10 runs sampled)
    EventEmitter2 x 560,015 ops/sec ±7.41% (10 runs sampled)
    signal-emitter x 154,411 ops/sec ±7.66% (10 runs sampled)
    JS-Signals x 136,213 ops/sec ±5.60% (10 runs sampled)
    dripEmitterEnhanced x 200,783 ops/sec ±70.06% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*

## init

    DripEmitter x 44,148,702 ops/sec ±7.16% (10 runs sampled)
    MiniSignals x 36,621,650 ops/sec ±5.80% (10 runs sampled)
    Theoretical max x 38,846,689 ops/sec ±34.49% (10 runs sampled) *burn in*
    EventEmitter2 x 29,757,535 ops/sec ±4.05% (10 runs sampled)
    EventDispatcher x 33,028,093 ops/sec ±40.95% (10 runs sampled)
    DripEmitterEnhanced x 18,259,362 ops/sec ±6.24% (10 runs sampled)
    EventEmitter3 x 26,488,347 ops/sec ±64.97% (10 runs sampled)
    EventEmitter x 16,304,638 ops/sec ±3.43% (10 runs sampled)
    JS-Signals x 1,723,040 ops/sec ±19.34% (10 runs sampled)
    ReactiveProperty x 1,099,141 ops/sec ±22.43% (10 runs sampled)

*Fastest is __DripEmitter, EventDispatcher, EventEmitter3__*
