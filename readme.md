
# Node (v0.12.7)

# emit
    EventEmitter1 x 308,963 ops/sec ±4.77% (76 runs sampled)
    EventEmitter2 x 356,330 ops/sec ±1.57% (96 runs sampled)
    EventEmitter3 x 783,366 ops/sec ±1.83% (99 runs sampled)
    JS-Signals x 86,331 ops/sec ±0.91% (99 runs sampled)
    JS-Signals patch x 164,132 ops/sec ±0.66% (98 runs sampled)
    MiniSignals x 5,585,385 ops/sec ±0.41% (99 runs sampled)
    signal-emitter x 57,592 ops/sec ±0.72% (99 runs sampled)
    event-signal x 755,635 ops/sec ±0.49% (98 runs sampled)
    signal-lite x 138,521 ops/sec ±0.73% (97 runs sampled)
*Fastest is MiniSignals*

# emit many
    EventEmitter1 x 152,611 ops/sec ±0.92% (89 runs sampled)
    EventEmitter2 x 173,025 ops/sec ±1.09% (97 runs sampled)
    EventEmitter3 x 250,191 ops/sec ±0.99% (93 runs sampled)
    JS-Signals x 55,228 ops/sec ±0.83% (97 runs sampled)
    JS-Signals patch x 97,922 ops/sec ±0.80% (99 runs sampled)
    MiniSignals x 1,055,710 ops/sec ±0.32% (99 runs sampled)
    signal-emitter x 48,032 ops/sec ±1.38% (96 runs sampled)
    event-signal x 432,787 ops/sec ±0.68% (100 runs sampled)
    signal-lite x 85,275 ops/sec ±1.03% (98 runs sampled)
    minivents x 69,880 ops/sec ±1.00% (93 runs sampled)
*Fastest is MiniSignals*

# emit large
    EventEmitter1 x 373,210 ops/sec ±0.79% (50 runs sampled)
    EventEmitter2 x 831,260 ops/sec ±0.82% (99 runs sampled)
    EventEmitter3 x 1,242,676 ops/sec ±0.78% (95 runs sampled)
    JS-Signals x 240,056 ops/sec ±1.10% (98 runs sampled)
    JS-Signals patch x 389,841 ops/sec ±0.74% (98 runs sampled)
    MiniSignals x 14,934,274 ops/sec ±0.50% (99 runs sampled)
    signal-emitter x 151,993 ops/sec ±0.67% (97 runs sampled)
    event-signal x 2,835,129 ops/sec ±0.79% (97 runs sampled)
    signal-lite x 445,652 ops/sec ±0.81% (96 runs sampled)
    minivents x 336,896 ops/sec ±0.69% (99 runs sampled)
*Fastest is MiniSignals*

# init
    EventEmitter1 x 18,113,531 ops/sec ±0.58% (101 runs sampled)
    EventEmitter2 x 22,999,142 ops/sec ±0.55% (101 runs sampled)
    EventEmitter3 x 62,301,127 ops/sec ±0.64% (101 runs sampled)
    JS-Signals x 1,481,799 ops/sec ±6.24% (45 runs sampled)
    JS-Signals patch x 1,043,678 ops/sec ±1.11% (94 runs sampled)
    MiniSignals x 30,968,021 ops/sec ±0.99% (99 runs sampled)
*Fastest is EventEmitter3*

# add-remove
    EventEmitter1 x 891,870 ops/sec ±2.09% (94 runs sampled)
    EventEmitter2 x 499,001 ops/sec ±1.26% (94 runs sampled)
    EventEmitter3 x 1,038,309 ops/sec ±1.51% (92 runs sampled)
    JS-Signals x 402,403 ops/sec ±0.70% (97 runs sampled)
    JS-Signals patch x 403,868 ops/sec ±0.74% (96 runs sampled)
    MiniSignals x 939,743 ops/sec ±1.34% (99 runs sampled)
*Fastest is EventEmitter3*

# Chrome (Version 45.0.2454.93 m)

# emit
    EventEmitter1 x 475,891 ops/sec ±0.53% (94 runs sampled)
    EventEmitter2 x 467,187 ops/sec ±1.90% (95 runs sampled)
    EventEmitter3 x 1,648,680 ops/sec ±1.55% (92 runs sampled)
    JS-Signals x 55,966 ops/sec ±1.43% (94 runs sampled)
    JS-Signals patch x 120,665 ops/sec ±0.57% (95 runs sampled)
    MiniSignals x 5,236,004 ops/sec ±0.56% (94 runs sampled)
    signal-emitter x 69,522 ops/sec ±0.95% (95 runs sampled)
    event-signal x 848,683 ops/sec ±0.82% (94 runs sampled)
    signal-lite x 90,977 ops/sec ±1.25% (92 runs sampled)
*Fastest is MiniSignals*

# emit many
    EventEmitter1 x 220,959 ops/sec ±0.55% (97 runs sampled)
    EventEmitter2 x 204,272 ops/sec ±1.29% (95 runs sampled)
    EventEmitter3 x 469,402 ops/sec ±1.28% (94 runs sampled)
    JS-Signals x 42,700 ops/sec ±2.24% (96 runs sampled)
    JS-Signals patch x 75,873 ops/sec ±1.64% (92 runs sampled)
    MiniSignals x 955,357 ops/sec ±2.38% (91 runs sampled)
    signal-emitter x 57,542 ops/sec ±3.21% (88 runs sampled)
    event-signal x 275,421 ops/sec ±0.79% (93 runs sampled)
    signal-lite x 61,964 ops/sec ±2.24% (92 runs sampled)
    minivents x 56,310 ops/sec ±1.40% (93 runs sampled)
*Fastest is MiniSignals*

# emit large
    EventEmitter1 x 1,241,994 ops/sec ±3.23% (95 runs sampled)
    EventEmitter2 x 1,294,962 ops/sec ±0.61% (98 runs sampled)
    EventEmitter3 x 1,752,452 ops/sec ±1.92% (92 runs sampled)
    JS-Signals x 79,355 ops/sec ±3.11% (90 runs sampled)
    JS-Signals patch x 239,007 ops/sec ±2.05% (89 runs sampled)
    MiniSignals x 13,740,258 ops/sec ±1.76% (93 runs sampled)
    signal-emitter x 157,532 ops/sec ±2.49% (93 runs sampled)
    event-signal x 3,161,247 ops/sec ±0.47% (95 runs sampled)
    signal-lite x 139,192 ops/sec ±0.95% (96 runs sampled)
    minivents x 234,419 ops/sec ±1.74% (95 runs sampled)
*Fastest is MiniSignals*

# init
    EventEmitter1 x 40,703,194 ops/sec ±4.12% (95 runs sampled)
    EventEmitter2 x 25,520,485 ops/sec ±1.51% (94 runs sampled)
    EventEmitter3 x 59,415,315 ops/sec ±0.92% (95 runs sampled)
    JS-Signals x 1,390,224 ops/sec ±8.87% (55 runs sampled)
    JS-Signals patch x 623,035 ops/sec ±7.03% (94 runs sampled)
    MiniSignals x 59,215,817 ops/sec ±0.60% (95 runs sampled)
*Fastest is EventEmitter3*

# add-remove
    EventEmitter1 x 771,763 ops/sec ±2.63% (89 runs sampled)
    EventEmitter2 x 761,156 ops/sec ±2.48% (94 runs sampled)
    EventEmitter3 x 876,307 ops/sec ±2.12% (92 runs sampled)
    JS-Signals x 319,640 ops/sec ±0.75% (97 runs sampled)
    JS-Signals patch x 309,134 ops/sec ±1.08% (97 runs sampled)
    MiniSignals x 487,179 ops/sec ±0.82% (94 runs sampled)
*Fastest is EventEmitter3*
