# Node.js 6.2.0 on Darwin 64-bit

## add-remove
    EventEmitter x 3,798,951 ops/sec ±9.48% (10 runs sampled)
    EventEmitter2 x 1,103,064 ops/sec ±15.91% (10 runs sampled)
    EventEmitter3 x 1,730,243 ops/sec ±6.44% (10 runs sampled)
    ReactiveProperty x 4,952,680 ops/sec ±4.93% (10 runs sampled)
    JS-Signals x 808,945 ops/sec ±5.27% (10 runs sampled)
    MiniSignals x 14,689,367 ops/sec ±4.17% (10 runs sampled)
    EventDispatcher x 4,830,138 ops/sec ±5.62% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit arrays
    Theoretical max x 12,535,128 ops/sec ±9.61% (10 runs sampled) *burn in*
    EventEmitter x 3,693,925 ops/sec ±3.60% (10 runs sampled)
    EventEmitter2 x 1,655,561 ops/sec ±3.09% (10 runs sampled)
    EventEmitter3 x 5,011,639 ops/sec ±4.90% (10 runs sampled)
    RXJS x 1,351,074 ops/sec ±5.26% (10 runs sampled)
    ReactiveProperty x 4,617,186 ops/sec ±8.51% (10 runs sampled)
    JS-Signals x 164,219 ops/sec ±5.31% (10 runs sampled)
    MiniSignals x 6,614,909 ops/sec ±7.79% (10 runs sampled)
    signal-emitter x 219,805 ops/sec ±7.16% (10 runs sampled)
    event-signal x 1,973,937 ops/sec ±3.02% (10 runs sampled)
    signal-lite x 6,250,708 ops/sec ±8.03% (10 runs sampled)

*Fastest is __MiniSignals,signal-lite__*

## emit with bound function
    Theoretical max x 32,826,438 ops/sec ±4.83% (10 runs sampled) *burn in*
    EventEmitter x 10,256,031 ops/sec ±4.27% (10 runs sampled)
    EventEmitter2 x 4,995,132 ops/sec ±7.05% (10 runs sampled)
    EventEmitter3 x 13,743,116 ops/sec ±4.26% (10 runs sampled)
    RXJS x 4,277,504 ops/sec ±4.36% (10 runs sampled)
    ReactiveProperty x 15,900,791 ops/sec ±5.78% (10 runs sampled)
    JS-Signals x 529,842 ops/sec ±4.25% (10 runs sampled)
    MiniSignals x 7,807,448 ops/sec ±4.85% (10 runs sampled)
    signal-emitter x 660,215 ops/sec ±3.49% (10 runs sampled)
    event-signal x 5,532,004 ops/sec ±7.46% (10 runs sampled)
    signal-lite x 5,823,011 ops/sec ±7.36% (10 runs sampled)

*Fastest is __ReactiveProperty__*

## emit with context
    Theoretical max x 31,382,029 ops/sec ±6.29% (10 runs sampled) *burn in*
    EventEmitter x 9,325,901 ops/sec ±3.42% (10 runs sampled)
    EventEmitter2 x 4,872,561 ops/sec ±3.87% (10 runs sampled)
    EventEmitter3 x 13,741,777 ops/sec ±4.65% (10 runs sampled)
    RXJS x 4,134,358 ops/sec ±5.16% (10 runs sampled)
    ReactiveProperty x 14,871,164 ops/sec ±5.96% (10 runs sampled)
    JS-Signals x 579,346 ops/sec ±3.42% (10 runs sampled)
    MiniSignals x 17,083,726 ops/sec ±6.02% (10 runs sampled)
    signal-emitter x 602,786 ops/sec ±9.98% (10 runs sampled)
    event-signal x 6,029,329 ops/sec ±4.79% (10 runs sampled)
    signal-lite x 17,181,848 ops/sec ±2.98% (10 runs sampled)

*Fastest is __signal-lite,MiniSignals__*

## emit many parameters
    Theoretical max x 18,844,360 ops/sec ±3.61% (10 runs sampled) *burn in*
    EventEmitter x 740,782 ops/sec ±2.96% (10 runs sampled)
    EventEmitter2 x 671,745 ops/sec ±4.62% (10 runs sampled)
    EventEmitter3 x 741,000 ops/sec ±2.94% (10 runs sampled)
    JS-Signals x 210,786 ops/sec ±3.65% (10 runs sampled)
    MiniSignals x 14,645,970 ops/sec ±5.05% (10 runs sampled)
    signal-emitter x 374,795 ops/sec ±3.57% (10 runs sampled)
    signal-lite x 14,764,408 ops/sec ±6.40% (10 runs sampled)
    minivents x 135,135 ops/sec ±4.76% (10 runs sampled)

*Fastest is __MiniSignals,signal-lite__*

## emit many listeners
    Theoretical max x 5,005,515 ops/sec ±3.75% (10 runs sampled) *burn in*
    EventEmitter x 3,980,700 ops/sec ±4.53% (10 runs sampled)
    EventEmitter2 x 2,795,316 ops/sec ±4.64% (10 runs sampled)
    EventEmitter3 x 4,252,819 ops/sec ±4.41% (10 runs sampled)
    RXJS x 1,586,751 ops/sec ±3.66% (10 runs sampled)
    ReactiveProperty x 3,789,491 ops/sec ±5.78% (10 runs sampled)
    JS-Signals x 268,981 ops/sec ±3.65% (10 runs sampled)
    MiniSignals x 5,028,801 ops/sec ±5.43% (10 runs sampled)
    signal-emitter x 642,119 ops/sec ±4.95% (10 runs sampled)
    event-signal x 2,708,400 ops/sec ±9.50% (10 runs sampled)
    signal-lite x 4,117,078 ops/sec ±11.97% (10 runs sampled)
    minivents x 113,436 ops/sec ±4.68% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit objects
    Theoretical max x 11,687,722 ops/sec ±6.02% (10 runs sampled) *burn in*
    EventEmitter x 3,358,528 ops/sec ±3.52% (10 runs sampled)
    EventEmitter2 x 1,560,303 ops/sec ±4.52% (10 runs sampled)
    EventEmitter3 x 4,322,034 ops/sec ±5.59% (10 runs sampled)
    RXJS x 1,218,543 ops/sec ±6.84% (10 runs sampled)
    ReactiveProperty x 4,864,889 ops/sec ±7.48% (10 runs sampled)
    JS-Signals x 195,595 ops/sec ±6.42% (10 runs sampled)
    MiniSignals x 6,782,628 ops/sec ±3.22% (10 runs sampled)
    signal-emitter x 226,197 ops/sec ±4.40% (10 runs sampled)
    event-signal x 1,673,040 ops/sec ±5.62% (10 runs sampled)
    signal-lite x 5,100,234 ops/sec ±9.66% (10 runs sampled)
    EventDispatcher x 2,544,458 ops/sec ±3.45% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit one parameter
    Theoretical max x 24,465,643 ops/sec ±10.41% (10 runs sampled) *burn in*
    EventEmitter x 9,725,589 ops/sec ±6.84% (10 runs sampled)
    EventEmitter2 x 4,967,186 ops/sec ±5.44% (10 runs sampled)
    EventEmitter3 x 12,971,421 ops/sec ±3.64% (10 runs sampled)
    d3-dispatch x 1,913,179 ops/sec ±4.71% (10 runs sampled)
    namespace-emitter x 519,323 ops/sec ±5.58% (10 runs sampled)
    ReactiveProperty x 13,656,938 ops/sec ±6.62% (10 runs sampled)
    observable x 462,722 ops/sec ±13.34% (10 runs sampled)
    observ x 5,780,067 ops/sec ±6.23% (10 runs sampled)
    RXJS x 3,507,153 ops/sec ±5.88% (10 runs sampled)
    JS-Signals x 536,105 ops/sec ±3.16% (10 runs sampled)
    MiniSignals x 18,672,816 ops/sec ±4.51% (10 runs sampled)
    signal-emitter x 708,569 ops/sec ±3.56% (10 runs sampled)
    event-signal x 5,895,290 ops/sec ±5.51% (10 runs sampled)
    signal-lite x 15,836,259 ops/sec ±7.77% (10 runs sampled)
    minivents x 513,947 ops/sec ±7.39% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit
    Theoretical max x 3,020,150 ops/sec ±3.56% (10 runs sampled) *burn in*
    EventEmitter x 1,462,264 ops/sec ±2.96% (10 runs sampled)
    EventEmitter2 x 584,646 ops/sec ±4.14% (10 runs sampled)
    EventEmitter3 x 876,599 ops/sec ±3.89% (10 runs sampled)
    JS-Signals x 131,212 ops/sec ±2.65% (10 runs sampled)
    MiniSignals x 2,278,002 ops/sec ±4.92% (10 runs sampled)
    signal-emitter x 161,775 ops/sec ±4.33% (10 runs sampled)
    signal-lite x 2,237,974 ops/sec ±1.90% (10 runs sampled)

*Fastest is __signal-lite,MiniSignals__*

## init
    Theoretical max x 38,417,102 ops/sec ±45.04% (10 runs sampled) *burn in*
    EventEmitter x 17,393,520 ops/sec ±3.40% (10 runs sampled)
    EventEmitter2 x 26,535,860 ops/sec ±7.17% (10 runs sampled)
    EventEmitter3 x 47,726,404 ops/sec ±3.38% (10 runs sampled)
    ReactiveProperty x 1,233,122 ops/sec ±22.03% (10 runs sampled)
    JS-Signals x 1,904,772 ops/sec ±16.09% (10 runs sampled)
    MiniSignals x 34,522,020 ops/sec ±7.42% (10 runs sampled)
    EventDispatcher x 45,624,632 ops/sec ±8.79% (10 runs sampled)

*Fastest is __EventEmitter3,EventDispatcher__*
