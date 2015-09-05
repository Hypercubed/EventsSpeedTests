
# Node (v0.10.24)

# emit
    EventEmitter1 x 307,681 ops/sec ±2.74% (85 runs sampled)
    EventEmitter2 x 433,217 ops/sec ±2.15% (92 runs sampled)
    EventEmitter3 x 1,079,227 ops/sec ±2.35% (85 runs sampled)
    JS-Signals x 98,303 ops/sec ±1.84% (90 runs sampled)
    JS-Signals patch x 205,884 ops/sec ±1.93% (88 runs sampled)
    MiniSignals x 7,204,362 ops/sec ±2.30% (87 runs sampled)
    signal-emitter x 64,238 ops/sec ±1.62% (91 runs sampled)
    event-signal x 926,939 ops/sec ±1.58% (87 runs sampled)
    signal-lite x 166,993 ops/sec ±2.37% (91 runs sampled)
    minivents x 96,019 ops/sec ±2.58% (82 runs sampled)
*Fastest is MiniSignals*

# emit many
    EventEmitter1 x 173,068 ops/sec ±2.69% (81 runs sampled)
    EventEmitter2 x 218,629 ops/sec ±2.13% (88 runs sampled)
    EventEmitter3 x 352,820 ops/sec ±2.25% (85 runs sampled)
    JS-Signals x 79,478 ops/sec ±1.83% (88 runs sampled)
    JS-Signals patch x 119,894 ops/sec ±1.99% (88 runs sampled)
    MiniSignals x 1,589,951 ops/sec ±1.60% (88 runs sampled)
    signal-emitter x 57,813 ops/sec ±1.57% (95 runs sampled)
    event-signal x 557,918 ops/sec ±1.64% (86 runs sampled)
    signal-lite x 113,702 ops/sec ±2.20% (90 runs sampled)
    minivents x 85,390 ops/sec ±1.67% (94 runs sampled)
*Fastest is MiniSignals*

# emit large
    EventEmitter1 x 1,001,816 ops/sec ±7.51% (77 runs sampled)
    EventEmitter2 x 1,150,454 ops/sec ±1.90% (90 runs sampled)
    EventEmitter3 x 1,711,818 ops/sec ±2.44% (84 runs sampled)
    JS-Signals x 324,290 ops/sec ±2.11% (87 runs sampled)
    JS-Signals patch x 467,766 ops/sec ±1.56% (91 runs sampled)
    MiniSignals x 20,123,849 ops/sec ±1.80% (87 runs sampled)
    signal-emitter x 189,634 ops/sec ±2.05% (86 runs sampled)
    event-signal x 3,625,787 ops/sec ±1.61% (89 runs sampled)
    signal-lite x 522,674 ops/sec ±2.17% (90 runs sampled)
    minivents x 375,395 ops/sec ±1.35% (92 runs sampled)
*Fastest is MiniSignals*

# init
    EventEmitter1 x 23,036,359 ops/sec ±1.95% (85 runs sampled)
    EventEmitter2 x 27,342,195 ops/sec ±1.85% (89 runs sampled)
    EventEmitter3 x 70,249,336 ops/sec ±2.17% (94 runs sampled)
    JS-Signals x 2,047,805 ops/sec ±6.01% (53 runs sampled)
    JS-Signals patch x 1,340,230 ops/sec ±1.57% (93 runs sampled)
    MiniSignals x 36,846,364 ops/sec ±1.84% (85 runs sampled)
*Fastest is EventEmitter3*

# add-remove
    EventEmitter1 x 1,127,751 ops/sec ±2.01% (88 runs sampled)
    EventEmitter2 x 596,836 ops/sec ±1.71% (86 runs sampled)
    EventEmitter3 x 1,140,859 ops/sec ±2.02% (86 runs sampled)
    JS-Signals x 450,103 ops/sec ±1.57% (89 runs sampled)
    JS-Signals patch x 466,307 ops/sec ±1.51% (87 runs sampled)
    MiniSignals x 14,751,891 ops/sec ±2.29% (84 runs sampled)
*Fastest is MiniSignals*

# Chrome (Version 44.0.2403.157 m)

# emit
    EventEmitter1 x 620,236 ops/sec ±0.77% (93 runs sampled)
    EventEmitter2 x 590,712 ops/sec ±0.58% (98 runs sampled)
    EventEmitter3 x 2,468,857 ops/sec ±0.53% (91 runs sampled)
    JS-Signals x 83,113 ops/sec ±0.86% (88 runs sampled)
    JS-Signals patch x 188,162 ops/sec ±0.55% (99 runs sampled)
    MiniSignals x 7,625,007 ops/sec ±0.83% (93 runs sampled)
    signal-emitter x 86,725 ops/sec ±0.62% (98 runs sampled)
    event-signal x 1,054,614 ops/sec ±0.73% (92 runs sampled)
    signal-lite x 115,864 ops/sec ±1.01% (94 runs sampled)
    minivents x 171,804 ops/sec ±0.63% (97 runs sampled)
*Fastest is MiniSignals*

# emit many
    EventEmitter1 x 315,957 ops/sec ±0.64% (91 runs sampled)
    EventEmitter2 x 257,119 ops/sec ±0.59% (96 runs sampled)
    EventEmitter3 x 712,462 ops/sec ±0.83% (93 runs sampled)
    JS-Signals x 66,940 ops/sec ±0.68% (93 runs sampled)
    JS-Signals patch x 119,949 ops/sec ±0.66% (97 runs sampled)
    MiniSignals x 1,605,584 ops/sec ±0.74% (89 runs sampled)
    signal-emitter x 79,648 ops/sec ±0.70% (93 runs sampled)
    event-signal x 594,985 ops/sec ±0.65% (97 runs sampled)
    signal-lite x 89,576 ops/sec ±0.60% (93 runs sampled)
    minivents x 130,434 ops/sec ±0.64% (96 runs sampled)
*Fastest is MiniSignals*

# emit large
    EventEmitter1 x 1,888,193 ops/sec ±0.59% (90 runs sampled)
    EventEmitter2 x 1,461,000 ops/sec ±0.64% (94 runs sampled)
    EventEmitter3 x 2,913,636 ops/sec ±2.30% (91 runs sampled)
    JS-Signals x 139,101 ops/sec ±2.01% (89 runs sampled)
    JS-Signals patch x 463,812 ops/sec ±1.70% (94 runs sampled)
    MiniSignals x 20,255,359 ops/sec ±0.86% (91 runs sampled)
    signal-emitter x 239,297 ops/sec ±1.90% (92 runs sampled)
    event-signal x 2,980,154 ops/sec ±1.47% (93 runs sampled)
    signal-lite x 223,816 ops/sec ±1.40% (94 runs sampled)
    minivents x 575,596 ops/sec ±1.86% (93 runs sampled)
*Fastest is MiniSignals*

# init
    EventEmitter1 x 52,638,962 ops/sec ±0.64% (94 runs sampled)
    EventEmitter2 x 34,551,141 ops/sec ±3.19% (86 runs sampled)
    EventEmitter3 x 69,656,607 ops/sec ±0.67% (96 runs sampled)
    JS-Signals x 1,747,692 ops/sec ±6.86% (60 runs sampled)
    JS-Signals patch x 1,172,222 ops/sec ±0.91% (93 runs sampled)
    MiniSignals x 65,858,846 ops/sec ±0.63% (94 runs sampled)
*Fastest is EventEmitter3*

# add-remove
    EventEmitter1 x 1,169,497 ops/sec ±0.88% (90 runs sampled)
    EventEmitter2 x 1,147,624 ops/sec ±0.59% (96 runs sampled)
    EventEmitter3 x 1,325,539 ops/sec ±0.52% (95 runs sampled)
    JS-Signals x 462,369 ops/sec ±0.84% (91 runs sampled)
    JS-Signals patch x 450,665 ops/sec ±1.38% (92 runs sampled)
    MiniSignals x 18,919,852 ops/sec ±1.26% (84 runs sampled)
*Fastest is MiniSignals*
