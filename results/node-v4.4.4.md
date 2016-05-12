# Node.js 4.4.4 on Darwin 64-bit

## emit several
    Theoretical max x 49,182,915 ops/sec ±1.37% (84 runs sampled)
    EventEmitter x 3,193,793 ops/sec ±1.55% (88 runs sampled)
    EventEmitter2 x 1,160,793 ops/sec ±2.73% (83 runs sampled)
    EventEmitter3 x 2,674,377 ops/sec ±3.41% (82 runs sampled)
    JS-Signals x 165,369 ops/sec ±1.76% (87 runs sampled)
    MiniSignals x 7,722,997 ops/sec ±1.36% (86 runs sampled)
    signal-emitter x 161,543 ops/sec ±1.61% (85 runs sampled)
    signal-lite x 6,654,092 ops/sec ±2.87% (81 runs sampled)
Fastest is MiniSignals

## emit one parameter
    Theoretical max x 82,047,915 ops/sec ±2.52% (81 runs sampled)
    EventEmitter x 12,977,155 ops/sec ±1.58% (85 runs sampled)
    EventEmitter2 x 5,798,481 ops/sec ±1.91% (83 runs sampled)
    EventEmitter3 x 17,504,868 ops/sec ±2.26% (85 runs sampled)
    d3-dispatch x 4,736,920 ops/sec ±1.72% (84 runs sampled)
    namespace-emitter x 522,194 ops/sec ±1.60% (85 runs sampled)
    ReactiveProperty x 19,483,056 ops/sec ±1.81% (86 runs sampled)
    observable x 1,635,655 ops/sec ±1.46% (88 runs sampled)
    observ x 8,369,576 ops/sec ±1.73% (80 runs sampled)
    RXJS x 4,570,719 ops/sec ±1.93% (86 runs sampled)
    JS-Signals x 561,949 ops/sec ±1.58% (89 runs sampled)
    MiniSignals x 27,414,767 ops/sec ±1.56% (85 runs sampled)
    signal-emitter x 649,942 ops/sec ±2.30% (88 runs sampled)
    event-signal x 7,091,567 ops/sec ±2.30% (84 runs sampled)
    signal-lite x 26,467,441 ops/sec ±1.77% (87 runs sampled)
    minivents x 489,494 ops/sec ±1.78% (86 runs sampled)
Fastest is MiniSignals

## emit with context
    Theoretical max x 4,471,516 ops/sec ±1.42% (88 runs sampled)
    EventEmitter x 3,212,327 ops/sec ±1.65% (87 runs sampled)
    EventEmitter2 x 2,512,884 ops/sec ±1.74% (86 runs sampled)
    EventEmitter3 x 16,481,945 ops/sec ±1.12% (89 runs sampled)
    RXJS x 2,408,469 ops/sec ±1.52% (88 runs sampled)
    ReactiveProperty x 3,226,487 ops/sec ±1.44% (89 runs sampled)
    JS-Signals x 645,675 ops/sec ±1.35% (89 runs sampled)
    MiniSignals x 22,306,167 ops/sec ±1.60% (86 runs sampled)
    signal-emitter x 621,514 ops/sec ±1.76% (89 runs sampled)
    event-signal x 7,035,419 ops/sec ±1.30% (87 runs sampled)
    signal-lite x 22,096,994 ops/sec ±1.29% (91 runs sampled)
Fastest is MiniSignals

## emit with bound function
    Theoretical max x 4,404,532 ops/sec ±1.52% (88 runs sampled)
    EventEmitter x 3,218,740 ops/sec ±1.77% (87 runs sampled)
    EventEmitter2 x 2,547,350 ops/sec ±1.54% (83 runs sampled)
    EventEmitter3 x 3,467,142 ops/sec ±1.62% (86 runs sampled)
    RXJS x 2,343,576 ops/sec ±1.80% (88 runs sampled)
    ReactiveProperty x 3,273,456 ops/sec ±1.22% (88 runs sampled)
    JS-Signals x 470,208 ops/sec ±1.67% (87 runs sampled)
    MiniSignals x 2,228,290 ops/sec ±3.22% (82 runs sampled)
    signal-emitter x 577,640 ops/sec ±1.67% (86 runs sampled)
    event-signal x 2,710,182 ops/sec ±1.58% (85 runs sampled)
    signal-lite x 1,987,711 ops/sec ±1.50% (86 runs sampled)
Fastest is EventEmitter3

## emit many listeners
    Theoretical max x 8,466,377 ops/sec ±1.38% (87 runs sampled)
    EventEmitter x 5,799,477 ops/sec ±1.73% (88 runs sampled)
    EventEmitter2 x 3,518,111 ops/sec ±1.52% (88 runs sampled)
    EventEmitter3 x 6,237,882 ops/sec ±1.40% (87 runs sampled)
    RXJS x 1,924,055 ops/sec ±1.55% (88 runs sampled)
    ReactiveProperty x 5,872,386 ops/sec ±1.60% (88 runs sampled)
    JS-Signals x 455,579 ops/sec ±1.29% (88 runs sampled)
    MiniSignals x 8,556,183 ops/sec ±1.21% (87 runs sampled)
    signal-emitter x 560,166 ops/sec ±2.58% (82 runs sampled)
    event-signal x 4,042,561 ops/sec ±1.89% (81 runs sampled)
    signal-lite x 7,146,250 ops/sec ±1.99% (82 runs sampled)
    minivents x 105,303 ops/sec ±2.73% (82 runs sampled)
Fastest is MiniSignals

## emit many parameters
    Theoretical max x 87,575,635 ops/sec ±1.94% (83 runs sampled)
    EventEmitter x 2,584,256 ops/sec ±1.43% (86 runs sampled)
    EventEmitter2 x 1,990,045 ops/sec ±1.77% (86 runs sampled)
    EventEmitter3 x 2,641,338 ops/sec ±1.72% (84 runs sampled)
    JS-Signals x 260,606 ops/sec ±1.51% (88 runs sampled)
    MiniSignals x 21,260,073 ops/sec ±2.40% (88 runs sampled)
    signal-emitter x 377,035 ops/sec ±1.57% (86 runs sampled)
    signal-lite x 20,141,964 ops/sec ±1.25% (85 runs sampled)
    minivents x 154,215 ops/sec ±1.60% (83 runs sampled)
Fastest is MiniSignals

## emit arrays
    Theoretical max x 24,167,488 ops/sec ±1.46% (84 runs sampled)
    EventEmitter x 4,344,505 ops/sec ±1.62% (83 runs sampled)
    EventEmitter2 x 1,937,207 ops/sec ±1.46% (88 runs sampled)
    EventEmitter3 x 5,898,057 ops/sec ±1.57% (84 runs sampled)
    RXJS x 1,589,921 ops/sec ±1.69% (84 runs sampled)
    ReactiveProperty x 7,108,479 ops/sec ±1.74% (84 runs sampled)
    JS-Signals x 216,915 ops/sec ±1.61% (88 runs sampled)
    MiniSignals x 9,051,569 ops/sec ±1.36% (89 runs sampled)
    signal-emitter x 227,829 ops/sec ±1.35% (89 runs sampled)
    event-signal x 2,351,862 ops/sec ±1.63% (87 runs sampled)
    signal-lite x 8,797,793 ops/sec ±1.81% (85 runs sampled)
Fastest is MiniSignals

## emit object
    Theoretical max x 22,912,436 ops/sec ±1.60% (83 runs sampled)
    EventEmitter x 4,032,539 ops/sec ±1.87% (86 runs sampled)
    EventEmitter2 x 1,781,650 ops/sec ±1.65% (84 runs sampled)
    EventEmitter3 x 5,319,684 ops/sec ±1.71% (85 runs sampled)
    RXJS x 1,587,942 ops/sec ±1.79% (87 runs sampled)
    ReactiveProperty x 6,995,000 ops/sec ±1.60% (85 runs sampled)
    JS-Signals x 212,400 ops/sec ±1.31% (90 runs sampled)
    MiniSignals x 8,642,291 ops/sec ±2.13% (88 runs sampled)
    signal-emitter x 225,928 ops/sec ±1.35% (89 runs sampled)
    event-signal x 2,264,295 ops/sec ±1.47% (85 runs sampled)
    signal-lite x 7,832,460 ops/sec ±1.69% (87 runs sampled)
Fastest is MiniSignals

## init
    EventEmitter x 28,901,785 ops/sec ±1.47% (83 runs sampled)
    EventEmitter2 x 35,413,842 ops/sec ±1.68% (87 runs sampled)
    EventEmitter3 x 63,665,351 ops/sec ±1.92% (84 runs sampled)
    ReactiveProperty x 1,687,994 ops/sec ±2.72% (73 runs sampled)
    JS-Signals x 2,355,086 ops/sec ±4.75% (63 runs sampled)
    MiniSignals x 42,021,999 ops/sec ±1.53% (84 runs sampled)
Fastest is EventEmitter3

## add-remove
    EventEmitter x 4,898,244 ops/sec ±2.58% (89 runs sampled)
    EventEmitter2 x 1,342,978 ops/sec ±1.68% (84 runs sampled)
    EventEmitter3 x 1,910,898 ops/sec ±1.49% (89 runs sampled)
    ReactiveProperty x 3,326,398 ops/sec ±1.60% (87 runs sampled)
    JS-Signals x 714,468 ops/sec ±1.55% (84 runs sampled)
    MiniSignals x 17,025,078 ops/sec ±1.84% (87 runs sampled)
Fastest is MiniSignals
