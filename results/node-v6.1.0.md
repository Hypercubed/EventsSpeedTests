# Node.js 6.1.0 on Darwin 64-bit

## emit several
    Theoretical max x 47,369,214 ops/sec ±1.55% (84 runs sampled)
    EventEmitter x 3,219,161 ops/sec ±1.30% (87 runs sampled)
    EventEmitter2 x 761,458 ops/sec ±1.73% (86 runs sampled)
    EventEmitter3 x 1,257,626 ops/sec ±1.60% (86 runs sampled)
    JS-Signals x 158,322 ops/sec ±1.80% (82 runs sampled)
    MiniSignals x 7,251,591 ops/sec ±1.53% (86 runs sampled)
    signal-emitter x 152,980 ops/sec ±1.82% (83 runs sampled)
    signal-lite x 6,870,458 ops/sec ±1.53% (87 runs sampled)
Fastest is MiniSignals

## emit one parameter
    Theoretical max x 77,549,371 ops/sec ±1.50% (86 runs sampled)
    EventEmitter x 12,945,813 ops/sec ±1.65% (82 runs sampled)
    EventEmitter2 x 5,389,236 ops/sec ±2.52% (82 runs sampled)
    EventEmitter3 x 17,926,249 ops/sec ±1.59% (83 runs sampled)
    d3-dispatch x 2,004,585 ops/sec ±1.59% (84 runs sampled)
    namespace-emitter x 588,793 ops/sec ±1.46% (85 runs sampled)
    ReactiveProperty x 15,405,581 ops/sec ±2.66% (84 runs sampled)
    observable x 504,206 ops/sec ±1.59% (85 runs sampled)
    observ x 7,695,918 ops/sec ±7.73% (82 runs sampled)
    RXJS x 4,123,547 ops/sec ±1.55% (84 runs sampled)
    JS-Signals x 617,302 ops/sec ±1.63% (84 runs sampled)
    MiniSignals x 25,485,682 ops/sec ±1.63% (86 runs sampled)
    signal-emitter x 654,938 ops/sec ±1.83% (86 runs sampled)
    event-signal x 6,305,397 ops/sec ±2.34% (83 runs sampled)
    signal-lite x 23,633,168 ops/sec ±2.69% (82 runs sampled)
    minivents x 555,022 ops/sec ±1.73% (85 runs sampled)
Fastest is MiniSignals

## emit with context
    Theoretical max x 34,772,835 ops/sec ±1.56% (86 runs sampled)
    EventEmitter x 10,654,898 ops/sec ±1.53% (86 runs sampled)
    EventEmitter2 x 5,091,904 ops/sec ±1.82% (84 runs sampled)
    EventEmitter3 x 16,047,425 ops/sec ±1.80% (86 runs sampled)
    RXJS x 4,283,032 ops/sec ±1.99% (79 runs sampled)
    ReactiveProperty x 16,962,018 ops/sec ±1.58% (84 runs sampled)
    JS-Signals x 540,062 ops/sec ±1.64% (85 runs sampled)
    MiniSignals x 21,365,124 ops/sec ±1.71% (87 runs sampled)
    signal-emitter x 631,325 ops/sec ±2.25% (82 runs sampled)
    event-signal x 6,310,836 ops/sec ±1.68% (85 runs sampled)
    signal-lite x 20,790,888 ops/sec ±1.65% (84 runs sampled)
Fastest is MiniSignals

## emit with bound function
    Theoretical max x 35,084,262 ops/sec ±1.40% (86 runs sampled)
    EventEmitter x 10,195,864 ops/sec ±1.71% (84 runs sampled)
    EventEmitter2 x 5,138,045 ops/sec ±1.69% (83 runs sampled)
    EventEmitter3 x 13,784,797 ops/sec ±1.65% (82 runs sampled)
    RXJS x 4,315,911 ops/sec ±2.00% (83 runs sampled)
    ReactiveProperty x 16,952,497 ops/sec ±1.38% (86 runs sampled)
    JS-Signals x 599,416 ops/sec ±1.57% (87 runs sampled)
    MiniSignals x 8,200,350 ops/sec ±1.82% (80 runs sampled)
    signal-emitter x 647,970 ops/sec ±1.78% (84 runs sampled)
    event-signal x 5,810,398 ops/sec ±1.78% (80 runs sampled)
    signal-lite x 6,513,263 ops/sec ±1.37% (86 runs sampled)
Fastest is ReactiveProperty

## emit many listeners
    Theoretical max x 7,767,532 ops/sec ±1.57% (85 runs sampled)
    EventEmitter x 5,541,281 ops/sec ±1.68% (83 runs sampled)
    EventEmitter2 x 3,262,203 ops/sec ±1.87% (85 runs sampled)
    EventEmitter3 x 5,976,022 ops/sec ±1.58% (85 runs sampled)
    RXJS x 1,774,589 ops/sec ±1.52% (87 runs sampled)
    ReactiveProperty x 5,314,889 ops/sec ±1.40% (85 runs sampled)
    JS-Signals x 230,521 ops/sec ±1.83% (85 runs sampled)
    MiniSignals x 7,645,182 ops/sec ±1.48% (86 runs sampled)
    signal-emitter x 604,139 ops/sec ±2.07% (83 runs sampled)
    event-signal x 3,583,286 ops/sec ±3.81% (80 runs sampled)
    signal-lite x 7,071,826 ops/sec ±1.48% (86 runs sampled)
    minivents x 105,427 ops/sec ±1.61% (83 runs sampled)
Fastest is MiniSignals

## emit many parameters
    Theoretical max x 84,107,806 ops/sec ±2.35% (82 runs sampled)
    EventEmitter x 739,758 ops/sec ±1.78% (83 runs sampled)
    EventEmitter2 x 707,063 ops/sec ±1.31% (84 runs sampled)
    EventEmitter3 x 771,744 ops/sec ±1.56% (82 runs sampled)
    JS-Signals x 220,344 ops/sec ±1.52% (88 runs sampled)
    MiniSignals x 20,938,789 ops/sec ±1.29% (89 runs sampled)
    signal-emitter x 379,108 ops/sec ±1.55% (87 runs sampled)
    signal-lite x 19,494,586 ops/sec ±1.65% (85 runs sampled)
    minivents x 146,227 ops/sec ±1.72% (88 runs sampled)
Fastest is MiniSignals

## emit arrays
    Theoretical max x 23,096,144 ops/sec ±1.30% (80 runs sampled)
    EventEmitter x 4,161,006 ops/sec ±1.52% (84 runs sampled)
    EventEmitter2 x 1,786,833 ops/sec ±1.67% (84 runs sampled)
    EventEmitter3 x 6,077,625 ops/sec ±1.76% (83 runs sampled)
    RXJS x 1,500,540 ops/sec ±1.69% (84 runs sampled)
    ReactiveProperty x 5,925,285 ops/sec ±3.68% (82 runs sampled)
    JS-Signals x 208,357 ops/sec ±1.51% (84 runs sampled)
    MiniSignals x 9,282,317 ops/sec ±1.68% (85 runs sampled)
    signal-emitter x 225,731 ops/sec ±1.80% (83 runs sampled)
    event-signal x 2,229,099 ops/sec ±1.83% (86 runs sampled)
    signal-lite x 8,319,688 ops/sec ±2.11% (82 runs sampled)
Fastest is MiniSignals

## emit object
    Theoretical max x 22,647,760 ops/sec ±1.41% (80 runs sampled)
    EventEmitter x 3,968,963 ops/sec ±1.48% (84 runs sampled)
    EventEmitter2 x 1,658,547 ops/sec ±2.36% (82 runs sampled)
    EventEmitter3 x 5,715,913 ops/sec ±1.91% (85 runs sampled)
    RXJS x 1,380,509 ops/sec ±1.54% (85 runs sampled)
    ReactiveProperty x 6,097,654 ops/sec ±4.01% (84 runs sampled)
    JS-Signals x 199,447 ops/sec ±1.59% (86 runs sampled)
    MiniSignals x 8,493,140 ops/sec ±1.57% (86 runs sampled)
    signal-emitter x 221,891 ops/sec ±1.79% (86 runs sampled)
    event-signal x 2,150,037 ops/sec ±1.61% (85 runs sampled)
    signal-lite x 7,230,790 ops/sec ±1.54% (83 runs sampled)
Fastest is MiniSignals

## init
    EventEmitter x 17,618,376 ops/sec ±3.69% (83 runs sampled)
    EventEmitter2 x 29,434,100 ops/sec ±4.29% (78 runs sampled)
    EventEmitter3 x 48,020,319 ops/sec ±7.81% (77 runs sampled)
    ReactiveProperty x 1,397,634 ops/sec ±7.91% (54 runs sampled)
    JS-Signals x 2,196,428 ops/sec ±4.65% (59 runs sampled)
    MiniSignals x 38,134,892 ops/sec ±5.71% (80 runs sampled)
Fastest is EventEmitter3

## add-remove
    EventEmitter x 4,694,566 ops/sec ±2.23% (84 runs sampled)
    EventEmitter2 x 1,267,487 ops/sec ±1.58% (84 runs sampled)
    EventEmitter3 x 1,852,700 ops/sec ±1.55% (86 runs sampled)
    ReactiveProperty x 5,212,993 ops/sec ±1.67% (83 runs sampled)
    JS-Signals x 728,747 ops/sec ±2.44% (84 runs sampled)
    MiniSignals x 14,956,593 ops/sec ±4.79% (81 runs sampled)
Fastest is MiniSignals
