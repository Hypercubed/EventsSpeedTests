# Node.js 4.4.4 on Darwin 64-bit

## emit
    EventEmitter x 3,177,419 ops/sec ±4.68% (83 runs sampled)
    EventEmitter2 x 1,142,467 ops/sec ±2.11% (84 runs sampled)
    EventEmitter3 x 2,794,046 ops/sec ±1.91% (85 runs sampled)
    JS-Signals x 159,670 ops/sec ±1.96% (85 runs sampled)
    MiniSignals x 7,614,861 ops/sec ±2.83% (82 runs sampled)
    signal-emitter x 160,978 ops/sec ±1.54% (86 runs sampled)
    signal-lite x 7,187,818 ops/sec ±1.50% (84 runs sampled)
Fastest is MiniSignals

## emit one parameter
    EventEmitter x 13,514,161 ops/sec ±2.68% (82 runs sampled)
    EventEmitter2 x 5,699,203 ops/sec ±1.91% (83 runs sampled)
    EventEmitter3 x 14,359,063 ops/sec ±1.81% (81 runs sampled)
    RXJS x 4,900,605 ops/sec ±1.70% (86 runs sampled)
    ReactiveProperty x 22,578,191 ops/sec ±1.29% (86 runs sampled)
    JS-Signals x 566,953 ops/sec ±1.59% (82 runs sampled)
    MiniSignals x 28,994,936 ops/sec ±1.37% (86 runs sampled)
    signal-emitter x 620,903 ops/sec ±1.87% (83 runs sampled)
    event-signal x 6,936,645 ops/sec ±1.94% (84 runs sampled)
    signal-lite x 26,685,490 ops/sec ±1.56% (84 runs sampled)
Fastest is MiniSignals

## emit with context
    EventEmitter x 742,869 ops/sec ±1.35% (86 runs sampled)
    EventEmitter2 x 524,360 ops/sec ±1.68% (86 runs sampled)
    EventEmitter3 x 2,554,900 ops/sec ±1.70% (85 runs sampled)
    JS-Signals x 137,068 ops/sec ±4.48% (77 runs sampled)
    MiniSignals x 7,544,635 ops/sec ±2.43% (79 runs sampled)
    signal-emitter x 139,530 ops/sec ±3.75% (77 runs sampled)
    signal-lite x 6,266,387 ops/sec ±5.54% (70 runs sampled)
Fastest is MiniSignals

## emit with bound function
    EventEmitter x 643,694 ops/sec ±5.55% (78 runs sampled)
    EventEmitter2 x 533,269 ops/sec ±1.65% (86 runs sampled)
    EventEmitter3 x 709,707 ops/sec ±2.68% (88 runs sampled)
    JS-Signals x 134,543 ops/sec ±1.27% (90 runs sampled)
    MiniSignals x 508,637 ops/sec ±2.56% (85 runs sampled)
    signal-emitter x 131,097 ops/sec ±1.70% (80 runs sampled)
    signal-lite x 456,304 ops/sec ±2.09% (82 runs sampled)
Fastest is EventEmitter3

## emit many
    EventEmitter x 1,024,084 ops/sec ±1.95% (85 runs sampled)
    EventEmitter2 x 532,407 ops/sec ±1.77% (82 runs sampled)
    EventEmitter3 x 761,683 ops/sec ±1.14% (89 runs sampled)
    JS-Signals x 111,513 ops/sec ±1.63% (89 runs sampled)
    MiniSignals x 296,671 ops/sec ±1.95% (83 runs sampled)
    signal-emitter x 129,115 ops/sec ±1.85% (85 runs sampled)
    signal-lite x 252,643 ops/sec ±1.94% (84 runs sampled)
    minivents x 23,839 ops/sec ±2.66% (82 runs sampled)
Fastest is EventEmitter

## emit large
    EventEmitter x 2,652,272 ops/sec ±1.31% (86 runs sampled)
    EventEmitter2 x 2,037,426 ops/sec ±1.47% (87 runs sampled)
    EventEmitter3 x 2,762,326 ops/sec ±1.23% (88 runs sampled)
    JS-Signals x 251,432 ops/sec ±1.45% (85 runs sampled)
    MiniSignals x 3,395,427 ops/sec ±1.53% (87 runs sampled)
    signal-emitter x 377,619 ops/sec ±1.27% (89 runs sampled)
    signal-lite x 2,952,629 ops/sec ±1.32% (87 runs sampled)
    minivents x 142,444 ops/sec ±4.12% (80 runs sampled)
Fastest is MiniSignals

## emit arrays
    EventEmitter x 2,829,390 ops/sec ±2.90% (79 runs sampled)
    EventEmitter2 x 1,275,329 ops/sec ±2.84% (84 runs sampled)
    EventEmitter3 x 3,584,949 ops/sec ±1.79% (85 runs sampled)
    RXJS x 1,165,141 ops/sec ±3.09% (83 runs sampled)
    JS-Signals x 179,058 ops/sec ±1.55% (85 runs sampled)
    MiniSignals x 1,352,830 ops/sec ±1.99% (82 runs sampled)
    signal-emitter x 155,971 ops/sec ±2.12% (82 runs sampled)
    event-signal x 1,795,736 ops/sec ±1.40% (87 runs sampled)
    signal-lite x 1,179,113 ops/sec ±1.66% (86 runs sampled)
Fastest is EventEmitter3

## emit objects
    EventEmitter x 2,828,076 ops/sec ±1.36% (87 runs sampled)
    EventEmitter2 x 1,274,681 ops/sec ±1.65% (84 runs sampled)
    EventEmitter3 x 3,278,840 ops/sec ±1.82% (83 runs sampled)
    RXJS x 1,003,512 ops/sec ±4.35% (77 runs sampled)
    JS-Signals x 155,337 ops/sec ±3.86% (78 runs sampled)
    MiniSignals x 1,266,561 ops/sec ±1.92% (83 runs sampled)
    signal-emitter x 159,801 ops/sec ±1.48% (87 runs sampled)
    event-signal x 1,641,145 ops/sec ±2.35% (81 runs sampled)
    signal-lite x 972,765 ops/sec ±2.54% (81 runs sampled)
Fastest is EventEmitter3

## init
    EventEmitter x 33,246,413 ops/sec ±1.64% (82 runs sampled)
    EventEmitter2 x 34,005,071 ops/sec ±1.32% (85 runs sampled)
    EventEmitter3 x 98,151,421 ops/sec ±2.22% (80 runs sampled)
    JS-Signals x 1,974,459 ops/sec ±3.35% (58 runs sampled)
    MiniSignals x 47,340,022 ops/sec ±1.46% (80 runs sampled)
Fastest is EventEmitter3

## add-remove
    EventEmitter x 7,633,136 ops/sec ±3.38% (83 runs sampled)
    EventEmitter2 x 1,282,783 ops/sec ±1.36% (85 runs sampled)
    EventEmitter3 x 1,911,983 ops/sec ±1.50% (87 runs sampled)
    JS-Signals x 695,873 ops/sec ±1.56% (83 runs sampled)
    MiniSignals x 16,257,456 ops/sec ±2.66% (81 runs sampled)
Fastest is MiniSignals
