
# Node (v0.12.7)

# emit
    EventEmitter1 x 267,163 ops/sec ±3.24% (87 runs sampled)
    EventEmitter2 x 429,622 ops/sec ±2.69% (81 runs sampled)
    EventEmitter3 x 896,974 ops/sec ±2.45% (88 runs sampled)
    JS-Signals x 101,671 ops/sec ±2.84% (87 runs sampled)
    JS-Signals patch x 182,735 ops/sec ±3.26% (84 runs sampled)
    MiniSignals x 5,533,384 ops/sec ±2.94% (87 runs sampled)
    signal-emitter x 65,385 ops/sec ±2.75% (89 runs sampled)
    signal-lite x 150,899 ops/sec ±2.29% (90 runs sampled)
*Fastest is MiniSignals*

# emit with context
    EventEmitter1 x 167,342 ops/sec ±2.07% (83 runs sampled)
    EventEmitter2 x 206,448 ops/sec ±2.19% (92 runs sampled)
    EventEmitter3 x 1,675,786 ops/sec ±7.57% (90 runs sampled)
    JS-Signals x 93,240 ops/sec ±1.20% (91 runs sampled)
    JS-Signals patch x 184,445 ops/sec ±1.71% (90 runs sampled)
    MiniSignals x 280,108 ops/sec ±2.89% (85 runs sampled)
    signal-emitter x 71,186 ops/sec ±1.89% (89 runs sampled)
    signal-lite x 139,469 ops/sec ±2.60% (92 runs sampled)
*Fastest is EventEmitter3*

# emit many
    EventEmitter1 x 184,466 ops/sec ±2.86% (81 runs sampled)
    EventEmitter2 x 227,856 ops/sec ±1.96% (96 runs sampled)
    EventEmitter3 x 615,354 ops/sec ±2.21% (91 runs sampled)
    JS-Signals x 72,405 ops/sec ±1.48% (93 runs sampled)
    JS-Signals patch x 121,024 ops/sec ±2.56% (86 runs sampled)
    MiniSignals x 234,835 ops/sec ±3.71% (78 runs sampled)
    signal-emitter x 71,596 ops/sec ±2.18% (94 runs sampled)
    signal-lite x 97,296 ops/sec ±2.01% (89 runs sampled)
    minivents x 82,116 ops/sec ±2.47% (90 runs sampled)
*Fastest is EventEmitter3*

# emit large
    EventEmitter1 x 848,804 ops/sec ±8.36% (77 runs sampled)
    EventEmitter2 x 1,008,757 ops/sec ±3.87% (84 runs sampled)
    EventEmitter3 x 2,422,885 ops/sec ±2.79% (84 runs sampled)
    JS-Signals x 176,279 ops/sec ±3.92% (82 runs sampled)
    JS-Signals patch x 426,127 ops/sec ±3.54% (90 runs sampled)
    MiniSignals x 2,474,559 ops/sec ±2.17% (90 runs sampled)
    signal-emitter x 224,988 ops/sec ±1.95% (87 runs sampled)
    signal-lite x 459,911 ops/sec ±1.50% (94 runs sampled)
    minivents x 372,995 ops/sec ±2.35% (87 runs sampled)
*Fastest is MiniSignals,EventEmitter3*

# init
    EventEmitter1 x 19,546,511 ops/sec ±4.12% (80 runs sampled)
    EventEmitter2 x 27,348,440 ops/sec ±2.96% (85 runs sampled)
    EventEmitter3 x 68,163,501 ops/sec ±1.26% (93 runs sampled)
    JS-Signals x 1,998,206 ops/sec ±3.96% (57 runs sampled)
    JS-Signals patch x 1,323,836 ops/sec ±1.80% (88 runs sampled)
    MiniSignals x 37,168,383 ops/sec ±2.41% (91 runs sampled)
*Fastest is EventEmitter3*

# add-remove
    EventEmitter1 x 979,758 ops/sec ±1.97% (89 runs sampled)
    EventEmitter2 x 576,199 ops/sec ±1.90% (88 runs sampled)
    EventEmitter3 x 1,153,919 ops/sec ±1.00% (92 runs sampled)
    JS-Signals x 440,575 ops/sec ±1.10% (88 runs sampled)
    JS-Signals patch x 443,779 ops/sec ±1.55% (95 runs sampled)
    MiniSignals x 1,143,085 ops/sec ±2.00% (93 runs sampled)
*Fastest is EventEmitter3*

# Chrome (Version 45)

# emit
    EventEmitter1 x 571,916 ops/sec ±0.80% (93 runs sampled)
    EventEmitter2 x 580,421 ops/sec ±1.05% (91 runs sampled)
    EventEmitter3 x 2,254,324 ops/sec ±0.61% (93 runs sampled)
    JS-Signals x 85,095 ops/sec ±1.12% (92 runs sampled)
    JS-Signals patch x 155,678 ops/sec ±0.61% (92 runs sampled)
    MiniSignals x 5,981,267 ops/sec ±1.03% (95 runs sampled)
    signal-emitter x 98,961 ops/sec ±0.95% (91 runs sampled)
    signal-lite x 118,542 ops/sec ±1.09% (92 runs sampled)
*Fastest is MiniSignals*

# emit with context
    EventEmitter1 x 178,630 ops/sec ±0.45% (93 runs sampled)
    EventEmitter2 x 145,003 ops/sec ±0.95% (93 runs sampled)
    EventEmitter3 x 2,008,676 ops/sec ±1.20% (89 runs sampled)
    JS-Signals x 81,656 ops/sec ±0.78% (93 runs sampled)
    JS-Signals patch x 154,052 ops/sec ±1.21% (91 runs sampled)
    MiniSignals x 193,865 ops/sec ±0.91% (86 runs sampled)
    signal-emitter x 103,220 ops/sec ±0.60% (91 runs sampled)
    signal-lite x 120,894 ops/sec ±1.12% (88 runs sampled)
*Fastest is EventEmitter3*

# emit many
    EventEmitter1 x 303,592 ops/sec ±1.25% (92 runs sampled)
    EventEmitter2 x 232,959 ops/sec ±1.22% (89 runs sampled)
    EventEmitter3 x 658,096 ops/sec ±0.68% (90 runs sampled)
    JS-Signals x 64,375 ops/sec ±1.12% (91 runs sampled)
    JS-Signals patch x 92,149 ops/sec ±0.94% (89 runs sampled)
    MiniSignals x 226,467 ops/sec ±0.97% (90 runs sampled)
    signal-emitter x 91,426 ops/sec ±0.89% (93 runs sampled)
    signal-lite x 79,924 ops/sec ±0.88% (89 runs sampled)
    minivents x 76,097 ops/sec ±0.75% (92 runs sampled)
*Fastest is EventEmitter3*

# emit large
    EventEmitter1 x 1,620,006 ops/sec ±0.99% (94 runs sampled)
    EventEmitter2 x 1,268,757 ops/sec ±1.33% (91 runs sampled)
    EventEmitter3 x 2,671,745 ops/sec ±1.09% (89 runs sampled)
    JS-Signals x 142,380 ops/sec ±0.96% (94 runs sampled)
    JS-Signals patch x 355,281 ops/sec ±0.85% (94 runs sampled)
    MiniSignals x 2,503,902 ops/sec ±0.97% (94 runs sampled)
    signal-emitter x 242,070 ops/sec ±1.58% (91 runs sampled)
    signal-lite x 180,220 ops/sec ±1.18% (93 runs sampled)
    minivents x 320,851 ops/sec ±1.30% (89 runs sampled)
*Fastest is EventEmitter3*

# init
    EventEmitter1 x 50,182,536 ops/sec ±0.78% (94 runs sampled)
    EventEmitter2 x 32,777,448 ops/sec ±1.97% (89 runs sampled)
    EventEmitter3 x 66,973,780 ops/sec ±0.76% (90 runs sampled)
    JS-Signals x 1,736,944 ops/sec ±5.55% (50 runs sampled)
    JS-Signals patch x 829,520 ops/sec ±1.61% (82 runs sampled)
    MiniSignals x 43,494,091 ops/sec ±0.82% (95 runs sampled)
*Fastest is EventEmitter3*

# add-remove
    EventEmitter1 x 1,111,354 ops/sec ±0.92% (93 runs sampled)
    EventEmitter2 x 1,045,212 ops/sec ±0.99% (92 runs sampled)
    EventEmitter3 x 1,237,196 ops/sec ±0.76% (96 runs sampled)
    JS-Signals x 433,043 ops/sec ±0.93% (92 runs sampled)
    JS-Signals patch x 417,911 ops/sec ±2.31% (89 runs sampled)
    MiniSignals x 809,605 ops/sec ±1.96% (91 runs sampled)
*Fastest is EventEmitter3*
