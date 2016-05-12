# Node.js 4.4.4 on Darwin 64-bit

## emit several
    Theoretical max x 48,573,068 ops/sec ±2.52% (84 runs sampled)
    EventEmitter x 3,229,052 ops/sec ±2.60% (86 runs sampled)
    EventEmitter2 x 1,161,264 ops/sec ±1.97% (84 runs sampled)
    EventEmitter3 x 2,800,132 ops/sec ±1.70% (84 runs sampled)
    JS-Signals x 160,708 ops/sec ±1.62% (85 runs sampled)
    MiniSignals x 6,985,425 ops/sec ±1.42% (88 runs sampled)
    signal-emitter x 155,225 ops/sec ±2.20% (82 runs sampled)
    signal-lite x 6,580,069 ops/sec ±1.83% (85 runs sampled)
Fastest is MiniSignals

## emit one parameter
    Theoretical max x 81,637,928 ops/sec ±2.73% (82 runs sampled)
    EventEmitter x 12,697,616 ops/sec ±2.06% (83 runs sampled)
    EventEmitter2 x 5,604,938 ops/sec ±1.44% (85 runs sampled)
    EventEmitter3 x 17,135,357 ops/sec ±1.63% (85 runs sampled)
    d3-dispatch x 4,298,248 ops/sec ±1.80% (83 runs sampled)
    namespace-emitter x 562,788 ops/sec ±1.85% (83 runs sampled)
    ReactiveProperty x 18,454,934 ops/sec ±1.73% (85 runs sampled)
    observable x 1,623,031 ops/sec ±1.80% (86 runs sampled)
    observ x 8,146,352 ops/sec ±2.45% (84 runs sampled)
    RXJS x 4,655,771 ops/sec ±1.83% (85 runs sampled)
    JS-Signals x 621,869 ops/sec ±1.71% (82 runs sampled)
    MiniSignals x 23,044,141 ops/sec ±1.65% (86 runs sampled)
    signal-emitter x 639,370 ops/sec ±1.83% (89 runs sampled)
    event-signal x 6,778,494 ops/sec ±1.95% (84 runs sampled)
    signal-lite x 24,541,878 ops/sec ±1.47% (87 runs sampled)
    minivents x 506,546 ops/sec ±2.14% (86 runs sampled)
Fastest is signal-lite

## emit with context
    Theoretical max x 4,222,543 ops/sec ±1.46% (83 runs sampled)
    EventEmitter x 3,122,831 ops/sec ±1.58% (86 runs sampled)
    EventEmitter2 x 2,430,668 ops/sec ±1.61% (84 runs sampled)
    EventEmitter3 x 15,716,275 ops/sec ±1.72% (86 runs sampled)
    RXJS x 2,263,652 ops/sec ±1.70% (84 runs sampled)
    ReactiveProperty x 3,113,049 ops/sec ±1.72% (85 runs sampled)
    JS-Signals x 612,818 ops/sec ±1.56% (84 runs sampled)
    MiniSignals x 22,166,451 ops/sec ±1.54% (88 runs sampled)
    signal-emitter x 650,024 ops/sec ±1.55% (87 runs sampled)
    event-signal x 6,885,097 ops/sec ±1.68% (88 runs sampled)
    signal-lite x 21,201,418 ops/sec ±1.25% (86 runs sampled)
Fastest is MiniSignals

## emit with bound function
    Theoretical max x 4,351,648 ops/sec ±1.38% (86 runs sampled)
    EventEmitter x 3,149,246 ops/sec ±1.63% (86 runs sampled)
    EventEmitter2 x 2,393,298 ops/sec ±1.69% (82 runs sampled)
    EventEmitter3 x 3,237,963 ops/sec ±2.48% (79 runs sampled)
    RXJS x 2,238,207 ops/sec ±2.58% (85 runs sampled)
    ReactiveProperty x 3,078,819 ops/sec ±1.72% (84 runs sampled)
    JS-Signals x 511,018 ops/sec ±1.58% (81 runs sampled)
    MiniSignals x 2,261,061 ops/sec ±1.59% (86 runs sampled)
    signal-emitter x 566,934 ops/sec ±1.61% (87 runs sampled)
    event-signal x 2,631,722 ops/sec ±1.97% (85 runs sampled)
    signal-lite x 1,873,349 ops/sec ±1.82% (87 runs sampled)
Fastest is EventEmitter3

## emit many listeners
    Theoretical max x 8,614,356 ops/sec ±1.37% (85 runs sampled)
    EventEmitter x 5,607,396 ops/sec ±1.34% (83 runs sampled)
    EventEmitter2 x 3,388,625 ops/sec ±2.10% (82 runs sampled)
    EventEmitter3 x 5,953,270 ops/sec ±1.24% (86 runs sampled)
    RXJS x 1,831,661 ops/sec ±1.68% (85 runs sampled)
    ReactiveProperty x 5,726,021 ops/sec ±1.40% (87 runs sampled)
    JS-Signals x 442,124 ops/sec ±1.42% (86 runs sampled)
    MiniSignals x 8,274,874 ops/sec ±1.42% (85 runs sampled)
    signal-emitter x 591,321 ops/sec ±1.80% (82 runs sampled)
    event-signal x 4,166,805 ops/sec ±1.56% (87 runs sampled)
    signal-lite x 6,931,888 ops/sec ±1.59% (86 runs sampled)
    minivents x 109,515 ops/sec ±1.59% (89 runs sampled)
Fastest is MiniSignals

## emit many parameters
    Theoretical max x 89,111,126 ops/sec ±1.24% (83 runs sampled)
    EventEmitter x 2,544,989 ops/sec ±1.31% (83 runs sampled)
    EventEmitter2 x 2,105,544 ops/sec ±1.64% (88 runs sampled)
    EventEmitter3 x 2,613,798 ops/sec ±1.70% (85 runs sampled)
    JS-Signals x 252,169 ops/sec ±1.76% (87 runs sampled)
    MiniSignals x 21,429,444 ops/sec ±1.48% (88 runs sampled)
    signal-emitter x 375,216 ops/sec ±1.57% (85 runs sampled)
    signal-lite x 19,502,551 ops/sec ±1.32% (89 runs sampled)
    minivents x 153,199 ops/sec ±2.61% (85 runs sampled)
Fastest is MiniSignals

## emit arrays
    Theoretical max x 23,841,805 ops/sec ±1.51% (84 runs sampled)
    EventEmitter x 4,174,401 ops/sec ±1.60% (84 runs sampled)
    EventEmitter2 x 1,857,010 ops/sec ±1.57% (84 runs sampled)
    EventEmitter3 x 5,373,550 ops/sec ±1.49% (84 runs sampled)
    RXJS x 1,576,692 ops/sec ±1.52% (86 runs sampled)
    ReactiveProperty x 6,580,731 ops/sec ±1.74% (84 runs sampled)
    JS-Signals x 196,015 ops/sec ±1.37% (86 runs sampled)
    MiniSignals x 9,031,057 ops/sec ±1.64% (83 runs sampled)
    signal-emitter x 210,759 ops/sec ±1.55% (85 runs sampled)
    event-signal x 2,290,026 ops/sec ±1.72% (84 runs sampled)
    signal-lite x 8,413,547 ops/sec ±1.69% (85 runs sampled)
Fastest is MiniSignals

## emit object
    Theoretical max x 22,387,102 ops/sec ±1.50% (83 runs sampled)
    EventEmitter x 4,095,236 ops/sec ±1.65% (83 runs sampled)
    EventEmitter2 x 1,704,794 ops/sec ±1.42% (87 runs sampled)
    EventEmitter3 x 5,228,158 ops/sec ±1.74% (83 runs sampled)
    RXJS x 1,463,791 ops/sec ±1.63% (86 runs sampled)
    ReactiveProperty x 6,983,483 ops/sec ±1.54% (85 runs sampled)
    JS-Signals x 208,767 ops/sec ±1.57% (84 runs sampled)
    MiniSignals x 8,397,951 ops/sec ±1.54% (85 runs sampled)
    signal-emitter x 215,382 ops/sec ±1.60% (86 runs sampled)
    event-signal x 2,029,729 ops/sec ±1.48% (83 runs sampled)
    signal-lite x 7,624,161 ops/sec ±1.98% (84 runs sampled)
Fastest is MiniSignals

## init
    EventEmitter x 28,863,149 ops/sec ±1.69% (84 runs sampled)
    EventEmitter2 x 34,770,378 ops/sec ±1.71% (84 runs sampled)
    EventEmitter3 x 62,051,144 ops/sec ±1.70% (83 runs sampled)
    ReactiveProperty x 1,678,490 ops/sec ±2.82% (71 runs sampled)
    JS-Signals x 2,198,518 ops/sec ±3.64% (66 runs sampled)
    MiniSignals x 41,713,218 ops/sec ±1.52% (85 runs sampled)
Fastest is EventEmitter3

## add-remove
    EventEmitter x 4,668,897 ops/sec ±2.68% (86 runs sampled)
    EventEmitter2 x 1,211,695 ops/sec ±1.67% (87 runs sampled)
    EventEmitter3 x 1,654,606 ops/sec ±1.61% (88 runs sampled)
    ReactiveProperty x 3,263,199 ops/sec ±1.55% (86 runs sampled)
    JS-Signals x 692,748 ops/sec ±1.75% (84 runs sampled)
    MiniSignals x 16,392,781 ops/sec ±1.35% (83 runs sampled)
Fastest is MiniSignals
