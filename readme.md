
# Node (v0.12.7)

# emit
    EventEmitter1 x 426,407 ops/sec ±1.81% (90 runs sampled)
    EventEmitter2 x 482,602 ops/sec ±0.83% (96 runs sampled)
    EventEmitter3 x 1,241,667 ops/sec ±0.70% (97 runs sampled)
    JS-Signals x 129,669 ops/sec ±1.20% (97 runs sampled)
    JS-Signals patch x 258,168 ops/sec ±0.50% (98 runs sampled)
    MiniSignals x 8,406,317 ops/sec ±0.35% (98 runs sampled)
    signal-emitter x 90,751 ops/sec ±0.50% (98 runs sampled)
    event-signal x 1,156,551 ops/sec ±0.50% (96 runs sampled)
    signal-lite x 181,583 ops/sec ±4.41% (92 runs sampled)
*Fastest is MiniSignals*

# emit many
    EventEmitter1 x 233,984 ops/sec ±3.00% (87 runs sampled)
    EventEmitter2 x 261,174 ops/sec ±2.03% (94 runs sampled)
    EventEmitter3 x 378,676 ops/sec ±0.74% (98 runs sampled)
    JS-Signals x 85,175 ops/sec ±0.78% (94 runs sampled)
    JS-Signals patch x 150,728 ops/sec ±0.55% (97 runs sampled)
    MiniSignals x 1,152,564 ops/sec ±4.96% (75 runs sampled)
    signal-emitter x 74,070 ops/sec ±2.78% (95 runs sampled)
    event-signal x 646,242 ops/sec ±0.62% (98 runs sampled)
    signal-lite x 118,500 ops/sec ±0.61% (99 runs sampled)
    minivents x 100,930 ops/sec ±0.56% (100 runs sampled)
*Fastest is MiniSignals*

# emit large
    EventEmitter1 x 861,677 ops/sec ±13.51% (61 runs sampled)
    EventEmitter2 x 1,048,956 ops/sec ±3.43% (93 runs sampled)
    EventEmitter3 x 2,009,149 ops/sec ±1.03% (99 runs sampled)
    JS-Signals x 341,789 ops/sec ±0.65% (100 runs sampled)
    JS-Signals patch x 618,258 ops/sec ±0.59% (94 runs sampled)
    MiniSignals x 16,979,320 ops/sec ±4.39% (76 runs sampled)
    signal-emitter x 214,830 ops/sec ±4.31% (91 runs sampled)
    event-signal x 4,388,644 ops/sec ±0.34% (100 runs sampled)
    signal-lite x 563,504 ops/sec ±6.01% (89 runs sampled)
    minivents x 511,763 ops/sec ±1.29% (94 runs sampled)
*Fastest is MiniSignals*

# init
    EventEmitter1 x 22,864,789 ops/sec ±4.35% (83 runs sampled)
    EventEmitter2 x 23,396,016 ops/sec ±0.33% (100 runs sampled)
    EventEmitter3 x 84,938,678 ops/sec ±5.44% (91 runs sampled)
    JS-Signals x 2,397,285 ops/sec ±4.63% (49 runs sampled)
    JS-Signals patch x 1,191,947 ops/sec ±3.02% (70 runs sampled)
    MiniSignals x 38,953,952 ops/sec ±4.12% (99 runs sampled)
*Fastest is EventEmitter3*

# add-remove
    EventEmitter1 x 1,238,591 ops/sec ±0.55% (98 runs sampled)
    EventEmitter2 x 675,527 ops/sec ±1.31% (98 runs sampled)
    EventEmitter3 x 1,167,721 ops/sec ±2.94% (92 runs sampled)
    JS-Signals x 377,696 ops/sec ±0.90% (99 runs sampled)
    JS-Signals patch x 582,978 ops/sec ±0.66% (99 runs sampled)
    MiniSignals x 984,493 ops/sec ±4.90% (76 runs sampled)
*Fastest is EventEmitter1*

# Chrome (Version 45.0.2454.101 m)

# emit
    EventEmitter1 x 769,602 ops/sec ±0.73% (98 runs sampled)
    EventEmitter2 x 705,161 ops/sec ±3.84% (90 runs sampled)
    EventEmitter3 x 2,631,502 ops/sec ±0.97% (96 runs sampled)
    JS-Signals x 94,907 ops/sec ±1.38% (96 runs sampled)
    JS-Signals patch x 204,548 ops/sec ±0.68% (92 runs sampled)
    MiniSignals x 7,627,762 ops/sec ±0.67% (96 runs sampled)
    signal-emitter x 108,526 ops/sec ±0.82% (93 runs sampled)
    event-signal x 1,371,763 ops/sec ±0.95% (97 runs sampled)
    signal-lite x 145,675 ops/sec ±1.75% (93 runs sampled)
*Fastest is MiniSignals*

# emit many
    EventEmitter1 x 352,174 ops/sec ±0.54% (98 runs sampled)
    EventEmitter2 x 343,561 ops/sec ±0.47% (97 runs sampled)
    EventEmitter3 x 673,209 ops/sec ±3.23% (89 runs sampled)
    JS-Signals x 50,857 ops/sec ±4.10% (89 runs sampled)
    JS-Signals patch x 127,228 ops/sec ±0.67% (99 runs sampled)
    MiniSignals x 1,239,448 ops/sec ±6.88% (80 runs sampled)
    signal-emitter x 68,301 ops/sec ±3.91% (87 runs sampled)
    event-signal x 573,719 ops/sec ±4.44% (80 runs sampled)
    signal-lite x 80,095 ops/sec ±4.34% (86 runs sampled)
    minivents x 58,081 ops/sec ±3.28% (69 runs sampled)
*Fastest is MiniSignals*

# emit large
    EventEmitter1 x 2,042,451 ops/sec ±0.80% (96 runs sampled)
    EventEmitter2 x 1,745,718 ops/sec ±4.60% (83 runs sampled)
    EventEmitter3 x 2,006,378 ops/sec ±3.50% (89 runs sampled)
    JS-Signals x 132,426 ops/sec ±1.05% (97 runs sampled)
    JS-Signals patch x 425,103 ops/sec ±1.14% (96 runs sampled)
    MiniSignals x 20,951,827 ops/sec ±0.75% (97 runs sampled)
    signal-emitter x 271,456 ops/sec ±0.65% (94 runs sampled)
    event-signal x 3,454,847 ops/sec ±3.10% (66 runs sampled)
    signal-lite x 162,944 ops/sec ±4.67% (91 runs sampled)
    minivents x 361,794 ops/sec ±0.99% (95 runs sampled)
*Fastest is MiniSignals*

# init
    EventEmitter1 x 51,094,982 ops/sec ±4.61% (79 runs sampled)
    EventEmitter2 x 30,431,362 ops/sec ±4.14% (92 runs sampled)
    EventEmitter3 x 85,640,742 ops/sec ±4.07% (90 runs sampled)
    JS-Signals x 1,601,767 ops/sec ±9.05% (61 runs sampled)
    JS-Signals patch x 1,094,455 ops/sec ±1.02% (98 runs sampled)
    MiniSignals x 38,098,708 ops/sec ±4.57% (77 runs sampled)
*Fastest is EventEmitter3*

# add-remove
    EventEmitter1 x 948,050 ops/sec ±4.07% (89 runs sampled)
    EventEmitter2 x 1,143,075 ops/sec ±4.03% (87 runs sampled)
    EventEmitter3 x 948,399 ops/sec ±1.58% (95 runs sampled)
    JS-Signals x 413,445 ops/sec ±4.40% (83 runs sampled)
    JS-Signals patch x 344,013 ops/sec ±3.23% (92 runs sampled)
    MiniSignals x 952,922 ops/sec ±3.29% (93 runs sampled)
*Fastest is EventEmitter2*
