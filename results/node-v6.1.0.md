# Node.js 6.1.0 on Darwin 64-bit

## emit several
    Theoretical max x 46,174,389 ops/sec ±2.41% (83 runs sampled)
    EventEmitter x 3,109,218 ops/sec ±1.91% (70 runs sampled)
    EventEmitter2 x 740,305 ops/sec ±1.98% (79 runs sampled)
    EventEmitter3 x 1,273,608 ops/sec ±1.70% (75 runs sampled)
    JS-Signals x 161,723 ops/sec ±1.69% (77 runs sampled)
    MiniSignals x 6,944,511 ops/sec ±2.14% (78 runs sampled)
    signal-emitter x 149,581 ops/sec ±2.28% (69 runs sampled)
    signal-lite x 6,844,681 ops/sec ±1.51% (79 runs sampled)
Fastest is MiniSignals

## emit one parameter
    Theoretical max x 76,658,237 ops/sec ±2.51% (80 runs sampled)
    EventEmitter x 12,960,725 ops/sec ±1.60% (78 runs sampled)
    EventEmitter2 x 5,730,721 ops/sec ±1.88% (82 runs sampled)
    EventEmitter3 x 18,308,820 ops/sec ±1.54% (82 runs sampled)
    d3-dispatch x 1,958,388 ops/sec ±2.35% (82 runs sampled)
    namespace-emitter x 561,516 ops/sec ±1.52% (79 runs sampled)
    ReactiveProperty x 17,867,091 ops/sec ±1.47% (79 runs sampled)
    observable x 513,571 ops/sec ±1.55% (78 runs sampled)
    observ x 7,887,100 ops/sec ±3.47% (74 runs sampled)
    RXJS x 4,194,128 ops/sec ±2.05% (72 runs sampled)
    JS-Signals x 583,098 ops/sec ±1.78% (74 runs sampled)
    MiniSignals x 25,285,740 ops/sec ±1.61% (74 runs sampled)
    signal-emitter x 651,901 ops/sec ±1.90% (72 runs sampled)
    event-signal x 6,926,711 ops/sec ±1.68% (80 runs sampled)
    signal-lite x 24,692,365 ops/sec ±1.57% (67 runs sampled)
    minivents x 524,106 ops/sec ±2.64% (79 runs sampled)
Fastest is MiniSignals

## emit with context
    Theoretical max x 35,643,844 ops/sec ±1.44% (86 runs sampled)
    EventEmitter x 10,145,038 ops/sec ±1.60% (84 runs sampled)
    EventEmitter2 x 5,011,208 ops/sec ±2.16% (84 runs sampled)
    EventEmitter3 x 15,292,710 ops/sec ±2.16% (84 runs sampled)
    RXJS x 4,201,068 ops/sec ±3.02% (82 runs sampled)
    ReactiveProperty x 16,057,886 ops/sec ±2.22% (82 runs sampled)
    JS-Signals x 605,771 ops/sec ±2.28% (84 runs sampled)
    MiniSignals x 20,674,064 ops/sec ±1.89% (84 runs sampled)
    signal-emitter x 640,792 ops/sec ±2.95% (81 runs sampled)
    event-signal x 6,287,461 ops/sec ±1.96% (83 runs sampled)
    signal-lite x 20,117,793 ops/sec ±2.41% (83 runs sampled)
Fastest is MiniSignals

## emit with bound function
    Theoretical max x 33,891,641 ops/sec ±1.99% (83 runs sampled)
    EventEmitter x 9,736,715 ops/sec ±2.10% (82 runs sampled)
    EventEmitter2 x 4,905,458 ops/sec ±2.52% (82 runs sampled)
    EventEmitter3 x 13,663,444 ops/sec ±1.61% (84 runs sampled)
    RXJS x 4,201,239 ops/sec ±2.82% (83 runs sampled)
    ReactiveProperty x 16,709,667 ops/sec ±2.95% (83 runs sampled)
    JS-Signals x 632,050 ops/sec ±1.68% (83 runs sampled)
    MiniSignals x 7,794,316 ops/sec ±1.27% (85 runs sampled)
    signal-emitter x 623,072 ops/sec ±3.25% (76 runs sampled)
    event-signal x 5,761,416 ops/sec ±2.01% (86 runs sampled)
    signal-lite x 6,029,363 ops/sec ±1.41% (81 runs sampled)
Fastest is ReactiveProperty

## emit many listeners
    Theoretical max x 7,424,609 ops/sec ±1.93% (82 runs sampled)
    EventEmitter x 5,465,846 ops/sec ±1.54% (88 runs sampled)
    EventEmitter2 x 3,206,692 ops/sec ±1.71% (85 runs sampled)
    EventEmitter3 x 5,881,499 ops/sec ±1.26% (88 runs sampled)
    RXJS x 1,783,018 ops/sec ±1.62% (85 runs sampled)
    ReactiveProperty x 5,406,985 ops/sec ±1.18% (84 runs sampled)
    JS-Signals x 285,907 ops/sec ±1.52% (88 runs sampled)
    MiniSignals x 7,777,266 ops/sec ±1.21% (87 runs sampled)
    signal-emitter x 589,657 ops/sec ±2.12% (81 runs sampled)
    event-signal x 3,902,745 ops/sec ±2.45% (86 runs sampled)
    signal-lite x 7,074,361 ops/sec ±1.45% (84 runs sampled)
    minivents x 125,637 ops/sec ±1.85% (87 runs sampled)
Fastest is MiniSignals

## emit many parameters
    Theoretical max x 83,110,867 ops/sec ±2.00% (83 runs sampled)
    EventEmitter x 773,105 ops/sec ±1.29% (86 runs sampled)
    EventEmitter2 x 702,727 ops/sec ±2.20% (83 runs sampled)
    EventEmitter3 x 789,245 ops/sec ±1.53% (84 runs sampled)
    JS-Signals x 218,800 ops/sec ±1.58% (87 runs sampled)
    MiniSignals x 20,899,371 ops/sec ±1.46% (89 runs sampled)
    signal-emitter x 374,204 ops/sec ±1.99% (87 runs sampled)
    signal-lite x 19,830,937 ops/sec ±1.50% (87 runs sampled)
    minivents x 146,492 ops/sec ±2.44% (86 runs sampled)
Fastest is MiniSignals

## emit arrays
    Theoretical max x 23,435,669 ops/sec ±1.39% (82 runs sampled)
    EventEmitter x 4,262,924 ops/sec ±1.66% (86 runs sampled)
    EventEmitter2 x 1,824,514 ops/sec ±1.70% (82 runs sampled)
    EventEmitter3 x 6,226,343 ops/sec ±1.49% (86 runs sampled)
    RXJS x 1,539,193 ops/sec ±1.49% (85 runs sampled)
    ReactiveProperty x 5,996,150 ops/sec ±4.40% (79 runs sampled)
    JS-Signals x 211,397 ops/sec ±1.45% (85 runs sampled)
    MiniSignals x 9,130,494 ops/sec ±1.57% (80 runs sampled)
    signal-emitter x 232,712 ops/sec ±1.85% (86 runs sampled)
    event-signal x 2,277,047 ops/sec ±1.68% (85 runs sampled)
    signal-lite x 8,358,670 ops/sec ±1.65% (84 runs sampled)
Fastest is MiniSignals

## emit object
    Theoretical max x 22,853,273 ops/sec ±1.35% (83 runs sampled)
    EventEmitter x 3,994,080 ops/sec ±1.52% (85 runs sampled)
    EventEmitter2 x 1,776,086 ops/sec ±1.58% (84 runs sampled)
    EventEmitter3 x 5,644,996 ops/sec ±1.73% (82 runs sampled)
    RXJS x 1,520,319 ops/sec ±1.36% (87 runs sampled)
    ReactiveProperty x 6,210,321 ops/sec ±4.47% (83 runs sampled)
    JS-Signals x 208,365 ops/sec ±1.75% (83 runs sampled)
    MiniSignals x 8,347,544 ops/sec ±2.59% (84 runs sampled)
    signal-emitter x 210,299 ops/sec ±4.55% (79 runs sampled)
    event-signal x 2,033,391 ops/sec ±2.49% (81 runs sampled)
    signal-lite x 7,037,573 ops/sec ±2.60% (80 runs sampled)
Fastest is MiniSignals

## init
    EventEmitter x 17,350,217 ops/sec ±4.17% (82 runs sampled)
    EventEmitter2 x 30,058,674 ops/sec ±6.07% (78 runs sampled)
    EventEmitter3 x 49,564,683 ops/sec ±9.07% (80 runs sampled)
    ReactiveProperty x 1,382,226 ops/sec ±8.56% (55 runs sampled)
    JS-Signals x 1,856,366 ops/sec ±6.52% (55 runs sampled)
    MiniSignals x 37,556,074 ops/sec ±2.42% (81 runs sampled)
Fastest is EventEmitter3

## add-remove
    EventEmitter x 4,294,503 ops/sec ±2.89% (75 runs sampled)
    EventEmitter2 x 1,178,853 ops/sec ±2.91% (75 runs sampled)
    EventEmitter3 x 1,804,416 ops/sec ±2.08% (84 runs sampled)
    ReactiveProperty x 5,076,734 ops/sec ±1.78% (84 runs sampled)
    JS-Signals x 755,099 ops/sec ±1.88% (84 runs sampled)
    MiniSignals x 15,001,352 ops/sec ±4.99% (80 runs sampled)
Fastest is MiniSignals
