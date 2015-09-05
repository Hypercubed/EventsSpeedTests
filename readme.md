
# Node (v0.12.7)

# emit
    EventEmitter1 x 345,068 ops/sec ±1.97% (88 runs sampled)
    EventEmitter2 x 477,425 ops/sec ±1.18% (95 runs sampled)
    EventEmitter3 x 1,157,751 ops/sec ±1.62% (90 runs sampled)
    fast-event-emitter x 995,328 ops/sec ±0.86% (98 runs sampled)
    JS-Signals x 117,484 ops/sec ±2.53% (84 runs sampled)
    JS-Signals patch x 186,078 ops/sec ±2.26% (89 runs sampled)
    MiniSignals x 7,127,357 ops/sec ±1.48% (97 runs sampled)
    signal-emitter x 76,153 ops/sec ±1.44% (89 runs sampled)
    event-signal x 887,994 ops/sec ±0.91% (95 runs sampled)
    signal-lite x 173,079 ops/sec ±1.42% (91 runs sampled)
    minivents x 110,430 ops/sec ±1.09% (94 runs sampled)
*Fastest is MiniSignals*

# emit many
    EventEmitter1 x 208,177 ops/sec ±2.37% (92 runs sampled)
    EventEmitter2 x 210,765 ops/sec ±2.87% (85 runs sampled)
    EventEmitter3 x 646,162 ops/sec ±1.20% (97 runs sampled)
    JS-Signals x 80,783 ops/sec ±1.40% (97 runs sampled)
    JS-Signals patch x 110,836 ops/sec ±2.41% (89 runs sampled)
    MiniSignals x 1,348,056 ops/sec ±1.16% (96 runs sampled)
    signal-emitter x 67,177 ops/sec ±1.97% (87 runs sampled)
    event-signal x 506,033 ops/sec ±1.30% (92 runs sampled)
    signal-lite x 116,127 ops/sec ±2.03% (96 runs sampled)
    minivents x 87,570 ops/sec ±2.13% (88 runs sampled)
*Fastest is MiniSignals*

# emit large
    EventEmitter1 x 928,008 ops/sec ±8.22% (85 runs sampled)
    EventEmitter2 x 1,114,236 ops/sec ±1.63% (88 runs sampled)
    EventEmitter3 x 2,604,982 ops/sec ±1.75% (89 runs sampled)
    JS-Signals x 203,538 ops/sec ±1.87% (94 runs sampled)
    JS-Signals patch x 434,979 ops/sec ±2.01% (88 runs sampled)
    MiniSignals x 18,663,816 ops/sec ±1.24% (96 runs sampled)
    signal-emitter x 208,136 ops/sec ±1.80% (87 runs sampled)
    event-signal x 3,244,374 ops/sec ±1.63% (90 runs sampled)
    signal-lite x 534,871 ops/sec ±1.28% (93 runs sampled)
    minivents x 389,722 ops/sec ±1.63% (88 runs sampled)
*Fastest is MiniSignals*

# init
    EventEmitter1 x 21,438,831 ops/sec ±1.52% (96 runs sampled)
    EventEmitter2 x 27,206,751 ops/sec ±1.24% (90 runs sampled)
    EventEmitter3 x 64,521,915 ops/sec ±1.17% (93 runs sampled)
    JS-Signals x 1,875,250 ops/sec ±5.35% (51 runs sampled)
    JS-Signals patch x 1,279,158 ops/sec ±2.00% (92 runs sampled)
    MiniSignals x 35,396,154 ops/sec ±1.50% (96 runs sampled)
*Fastest is EventEmitter3*

# add-remove
    EventEmitter1 x 1,022,325 ops/sec ±1.62% (92 runs sampled)
    EventEmitter2 x 554,953 ops/sec ±1.70% (87 runs sampled)
    EventEmitter3 x 1,092,406 ops/sec ±1.55% (93 runs sampled)
    JS-Signals x 444,557 ops/sec ±1.07% (89 runs sampled)
    JS-Signals patch x 410,118 ops/sec ±1.58% (92 runs sampled)
    MiniSignals x 13,379,030 ops/sec ±3.06% (88 runs sampled)
*Fastest is MiniSignals*

# Chrome (Version 44.0.2403.157 m)

# emit
    EventEmitter1 x 551,971 ops/sec ±1.22% (93 runs sampled)
    EventEmitter2 x 569,339 ops/sec ±1.34% (88 runs sampled)
    EventEmitter3 x 2,169,582 ops/sec ±1.08% (94 runs sampled)
    JS-Signals x 71,847 ops/sec ±1.11% (87 runs sampled)
    JS-Signals patch x 171,385 ops/sec ±1.11% (89 runs sampled)
    MiniSignals x 6,824,148 ops/sec ±0.84% (97 runs sampled)
    signal-emitter x 74,292 ops/sec ±2.23% (89 runs sampled)
    event-signal x 927,254 ops/sec ±2.02% (94 runs sampled)
    signal-lite x 109,253 ops/sec ±2.06% (85 runs sampled)
    minivents x 147,218 ops/sec ±2.77% (85 runs sampled)
*Fastest is MiniSignals*

# emit many
    EventEmitter1 x 290,831 ops/sec ±1.07% (96 runs sampled)
    EventEmitter2 x 264,141 ops/sec ±2.62% (88 runs sampled)
    EventEmitter3 x 632,360 ops/sec ±1.75% (91 runs sampled)
    JS-Signals x 48,422 ops/sec ±2.05% (90 runs sampled)
    JS-Signals patch x 108,243 ops/sec ±1.68% (89 runs sampled)
    MiniSignals x 1,451,928 ops/sec ±0.73% (94 runs sampled)
    signal-emitter x 71,640 ops/sec ±2.16% (87 runs sampled)
    event-signal x 538,164 ops/sec ±1.88% (90 runs sampled)
    signal-lite x 80,494 ops/sec ±2.04% (89 runs sampled)
    minivents x 115,027 ops/sec ±2.35% (91 runs sampled)
*Fastest is MiniSignals*

# emit large
    EventEmitter1 x 1,757,450 ops/sec ±1.17% (94 runs sampled)
    EventEmitter2 x 1,693,692 ops/sec ±2.52% (86 runs sampled)
    EventEmitter3 x 2,669,425 ops/sec ±2.20% (90 runs sampled)
    JS-Signals x 122,454 ops/sec ±1.21% (91 runs sampled)
    JS-Signals patch x 410,503 ops/sec ±1.85% (82 runs sampled)
    MiniSignals x 18,276,191 ops/sec ±1.14% (93 runs sampled)
    signal-emitter x 217,779 ops/sec ±2.76% (89 runs sampled)
    event-signal x 3,521,136 ops/sec ±2.26% (89 runs sampled)
    signal-lite x 201,885 ops/sec ±2.02% (90 runs sampled)
    minivents x 534,637 ops/sec ±2.06% (86 runs sampled)
*Fastest is MiniSignals*

# init
    EventEmitter1 x 46,974,485 ops/sec ±3.08% (92 runs sampled)
    EventEmitter2 x 30,362,664 ops/sec ±1.65% (93 runs sampled)
    EventEmitter3 x 63,948,965 ops/sec ±1.23% (89 runs sampled)
    JS-Signals x 1,399,069 ops/sec ±5.99% (44 runs sampled)
    JS-Signals patch x 1,081,190 ops/sec ±1.28% (90 runs sampled)
    MiniSignals x 62,281,126 ops/sec ±1.75% (91 runs sampled)
*Fastest is EventEmitter3*

# add-remove
    EventEmitter1 x 1,001,657 ops/sec ±2.57% (90 runs sampled)
    EventEmitter2 x 1,087,511 ops/sec ±2.55% (88 runs sampled)
    EventEmitter3 x 1,257,980 ops/sec ±1.54% (91 runs sampled)
    JS-Signals x 409,121 ops/sec ±2.63% (89 runs sampled)
    JS-Signals patch x 405,177 ops/sec ±3.66% (83 runs sampled)
    MiniSignals x 18,828,370 ops/sec ±1.17% (89 runs sampled)
*Fastest is MiniSignals*
