# Node.js 6.1.0 on Darwin 64-bit

## emit
    EventEmitter x 2,820,197 ops/sec ±2.42% (79 runs sampled)
    EventEmitter2 x 654,114 ops/sec ±3.08% (78 runs sampled)
    EventEmitter3 x 1,062,144 ops/sec ±3.42% (74 runs sampled)
    JS-Signals x 119,295 ops/sec ±4.96% (68 runs sampled)
    MiniSignals x 6,137,002 ops/sec ±3.08% (74 runs sampled)
    signal-emitter x 126,048 ops/sec ±5.13% (72 runs sampled)
    signal-lite x 5,838,654 ops/sec ±4.29% (75 runs sampled)
Fastest is MiniSignals,signal-lite

## emit one parameter
    EventEmitter x 11,383,186 ops/sec ±4.71% (76 runs sampled)
    EventEmitter2 x 4,667,114 ops/sec ±1.68% (82 runs sampled)
    EventEmitter3 x 13,991,071 ops/sec ±3.37% (76 runs sampled)
    RXJS x 3,847,189 ops/sec ±2.61% (81 runs sampled)
    ReactiveProperty x 19,028,393 ops/sec ±2.18% (78 runs sampled)
    JS-Signals x 497,727 ops/sec ±3.57% (77 runs sampled)
    MiniSignals x 25,677,134 ops/sec ±1.59% (80 runs sampled)
    signal-emitter x 595,818 ops/sec ±3.49% (81 runs sampled)
    event-signal x 6,404,691 ops/sec ±2.47% (84 runs sampled)
    signal-lite x 25,456,954 ops/sec ±3.71% (81 runs sampled)
Fastest is MiniSignals,signal-lite

## emit with context
    EventEmitter x 2,692,588 ops/sec ±1.76% (82 runs sampled)
    EventEmitter2 x 578,803 ops/sec ±4.65% (75 runs sampled)
    EventEmitter3 x 1,080,875 ops/sec ±3.16% (79 runs sampled)
    JS-Signals x 132,073 ops/sec ±4.73% (79 runs sampled)
    MiniSignals x 7,048,108 ops/sec ±2.78% (78 runs sampled)
    signal-emitter x 134,281 ops/sec ±4.11% (75 runs sampled)
    signal-lite x 6,936,111 ops/sec ±2.16% (82 runs sampled)
Fastest is MiniSignals,signal-lite

## emit with bound function
    EventEmitter x 2,670,353 ops/sec ±2.85% (82 runs sampled)
    EventEmitter2 x 698,601 ops/sec ±2.24% (84 runs sampled)
    EventEmitter3 x 1,110,419 ops/sec ±1.62% (81 runs sampled)
    JS-Signals x 151,899 ops/sec ±1.54% (83 runs sampled)
    MiniSignals x 1,840,589 ops/sec ±3.92% (75 runs sampled)
    signal-emitter x 116,416 ops/sec ±6.61% (67 runs sampled)
    signal-lite x 1,408,194 ops/sec ±6.24% (75 runs sampled)
Fastest is EventEmitter

## emit many
    EventEmitter x 904,097 ops/sec ±2.38% (79 runs sampled)
    EventEmitter2 x 242,076 ops/sec ±2.12% (78 runs sampled)
    EventEmitter3 x 295,830 ops/sec ±1.65% (85 runs sampled)
    JS-Signals x 71,194 ops/sec ±1.78% (84 runs sampled)
    MiniSignals x 541,771 ops/sec ±1.50% (85 runs sampled)
    signal-emitter x 108,385 ops/sec ±1.84% (84 runs sampled)
    signal-lite x 421,773 ops/sec ±5.47% (81 runs sampled)
    minivents x 22,535 ops/sec ±3.32% (78 runs sampled)
Fastest is EventEmitter

## emit large
    EventEmitter x 718,200 ops/sec ±3.76% (82 runs sampled)
    EventEmitter2 x 557,928 ops/sec ±5.07% (70 runs sampled)
    EventEmitter3 x 632,713 ops/sec ±6.41% (74 runs sampled)
    JS-Signals x 176,247 ops/sec ±4.52% (76 runs sampled)
    MiniSignals x 5,583,977 ops/sec ±3.66% (79 runs sampled)
    signal-emitter x 331,792 ops/sec ±4.01% (78 runs sampled)
    signal-lite x 4,779,413 ops/sec ±2.09% (78 runs sampled)
    minivents x 130,262 ops/sec ±3.50% (78 runs sampled)
Fastest is MiniSignals

## emit arrays
    EventEmitter x 2,532,459 ops/sec ±2.39% (79 runs sampled)
    EventEmitter2 x 1,141,120 ops/sec ±2.67% (84 runs sampled)
    EventEmitter3 x 3,132,717 ops/sec ±2.02% (81 runs sampled)
    RXJS x 1,112,025 ops/sec ±1.82% (84 runs sampled)
    JS-Signals x 172,963 ops/sec ±2.04% (81 runs sampled)
    MiniSignals x 2,205,910 ops/sec ±3.20% (81 runs sampled)
    signal-emitter x 154,022 ops/sec ±2.45% (80 runs sampled)
    event-signal x 1,525,455 ops/sec ±2.48% (80 runs sampled)
    signal-lite x 1,482,650 ops/sec ±3.49% (76 runs sampled)
Fastest is EventEmitter3

## emit objects
    EventEmitter x 2,451,924 ops/sec ±2.16% (80 runs sampled)
    EventEmitter2 x 1,153,132 ops/sec ±1.98% (80 runs sampled)
    EventEmitter3 x 3,018,884 ops/sec ±2.01% (83 runs sampled)
    RXJS x 1,056,156 ops/sec ±2.22% (76 runs sampled)
    JS-Signals x 151,545 ops/sec ±2.29% (80 runs sampled)
    MiniSignals x 2,127,576 ops/sec ±1.84% (81 runs sampled)
    signal-emitter x 155,646 ops/sec ±2.82% (78 runs sampled)
    event-signal x 1,531,356 ops/sec ±3.55% (77 runs sampled)
    signal-lite x 1,670,946 ops/sec ±1.68% (79 runs sampled)
Fastest is EventEmitter3

## init
    EventEmitter x 37,655,890 ops/sec ±1.77% (84 runs sampled)
    EventEmitter2 x 33,107,508 ops/sec ±1.87% (82 runs sampled)
    EventEmitter3 x 99,186,356 ops/sec ±1.67% (83 runs sampled)
    JS-Signals x 2,073,193 ops/sec ±3.20% (55 runs sampled)
    MiniSignals x 47,497,228 ops/sec ±3.48% (78 runs sampled)
Fastest is EventEmitter3

## add-remove
    EventEmitter x 22,947,561 ops/sec ±5.87% (78 runs sampled)
    EventEmitter2 x 1,266,284 ops/sec ±1.66% (85 runs sampled)
    EventEmitter3 x 1,845,304 ops/sec ±2.03% (83 runs sampled)
    JS-Signals x 770,933 ops/sec ±1.69% (84 runs sampled)
    MiniSignals x 16,309,853 ops/sec ±5.46% (81 runs sampled)
Fastest is EventEmitter
