
# Node (v0.12.7)

## emit
    EventEmitter1 x 977,931 ops/sec ±0.70% (97 runs sampled)
    EventEmitter2 x 919,613 ops/sec ±3.73% (87 runs sampled)
    EventEmitter3 x 1,781,302 ops/sec ±0.67% (99 runs sampled)
    JS-Signals x 151,116 ops/sec ±1.59% (96 runs sampled)
    MiniSignals x 4,290,043 ops/sec ±0.48% (97 runs sampled)
    signal-emitter x 129,777 ops/sec ±0.98% (96 runs sampled)
    signal-lite x 260,833 ops/sec ±1.20% (91 runs sampled)
*Fastest is MiniSignals*

## emit with context
    EventEmitter1 x 555,298 ops/sec ±0.66% (99 runs sampled)
    EventEmitter2 x 479,001 ops/sec ±0.82% (96 runs sampled)
    EventEmitter3 x 1,899,693 ops/sec ±0.71% (96 runs sampled)
    JS-Signals x 160,791 ops/sec ±1.05% (96 runs sampled)
    MiniSignals x 3,992,521 ops/sec ±0.40% (98 runs sampled)
    signal-emitter x 118,989 ops/sec ±2.51% (89 runs sampled)
    signal-lite x 260,297 ops/sec ±1.20% (92 runs sampled)
*Fastest is MiniSignals*

## emit with bound function
    EventEmitter1 x 458,504 ops/sec ±1.50% (84 runs sampled)
    EventEmitter2 x 371,061 ops/sec ±1.73% (91 runs sampled)
    EventEmitter3 x 675,290 ops/sec ±0.74% (100 runs sampled)
    JS-Signals x 107,879 ops/sec ±2.49% (91 runs sampled)
    MiniSignals x 609,749 ops/sec ±1.10% (92 runs sampled)
    signal-emitter x 122,107 ops/sec ±1.08% (96 runs sampled)
    signal-lite x 192,232 ops/sec ±0.89% (95 runs sampled)
*Fastest is EventEmitter3*

## emit one parameter
    EventEmitter1 x 6,736,070 ops/sec ±2.70% (89 runs sampled)
    EventEmitter2 x 5,679,515 ops/sec ±0.64% (96 runs sampled)
    EventEmitter3 x 7,129,785 ops/sec ±2.75% (91 runs sampled)
    JS-Signals x 452,252 ops/sec ±4.18% (94 runs sampled)
    MiniSignals x 4,625,450 ops/sec ±2.07% (90 runs sampled)
    signal-emitter x 451,842 ops/sec ±0.85% (97 runs sampled)
    event-signal x 5,341,134 ops/sec ±0.82% (95 runs sampled)
    signal-lite x 859,818 ops/sec ±2.00% (91 runs sampled)
*Fastest is EventEmitter3*

## emit many
    EventEmitter1 x 381,702 ops/sec ±0.65% (99 runs sampled)
    EventEmitter2 x 360,520 ops/sec ±2.01% (94 runs sampled)
    EventEmitter3 x 714,170 ops/sec ±0.61% (95 runs sampled)
    JS-Signals x 110,856 ops/sec ±0.79% (96 runs sampled)
    MiniSignals x 359,207 ops/sec ±0.54% (95 runs sampled)
    signal-emitter x 116,132 ops/sec ±2.04% (94 runs sampled)
    signal-lite x 153,436 ops/sec ±3.59% (91 runs sampled)
    minivents x 328,908 ops/sec ±1.00% (95 runs sampled)
*Fastest is EventEmitter3*

## emit large
    EventEmitter1 x 1,844,662 ops/sec ±2.39% (92 runs sampled)
    EventEmitter2 x 1,747,901 ops/sec ±3.45% (89 runs sampled)
    EventEmitter3 x 2,285,082 ops/sec ±0.84% (89 runs sampled)
    JS-Signals x 306,928 ops/sec ±0.78% (97 runs sampled)
    MiniSignals x 2,852,808 ops/sec ±0.64% (97 runs sampled)
    signal-emitter x 331,657 ops/sec ±2.60% (90 runs sampled)
    signal-lite x 555,332 ops/sec ±0.84% (97 runs sampled)
    minivents x 3,055,525 ops/sec ±0.85% (97 runs sampled)
*Fastest is minivents*

## init
    EventEmitter1 x 19,093,159 ops/sec ±2.03% (84 runs sampled)
    EventEmitter2 x 14,981,804 ops/sec ±3.30% (91 runs sampled)
    EventEmitter3 x 26,516,094 ops/sec ±0.65% (98 runs sampled)
    JS-Signals x 2,153,274 ops/sec ±4.34% (51 runs sampled)
    MiniSignals x 19,201,695 ops/sec ±1.15% (95 runs sampled)
*Fastest is EventEmitter3*

## add-remove
    EventEmitter1 x 4,479,246 ops/sec ±1.11% (89 runs sampled)
    EventEmitter2 x 920,851 ops/sec ±1.80% (92 runs sampled)
    EventEmitter3 x 1,581,994 ops/sec ±1.10% (97 runs sampled)
    JS-Signals x 595,877 ops/sec ±0.89% (96 runs sampled)
    MiniSignals x 7,406,605 ops/sec ±0.73% (98 runs sampled)
*Fastest is MiniSignals*

# Chrome (v46)

## emit
    EventEmitter1 x 604,922 ops/sec ±0.67% (97 runs sampled)
    EventEmitter2 x 592,762 ops/sec ±1.14% (95 runs sampled)
    EventEmitter3 x 2,557,690 ops/sec ±0.65% (98 runs sampled)
    JS-Signals x 92,965 ops/sec ±0.69% (95 runs sampled)
    MiniSignals x 6,799,065 ops/sec ±1.28% (95 runs sampled)
    signal-emitter x 109,953 ops/sec ±0.61% (98 runs sampled)
    signal-lite x 131,955 ops/sec ±1.15% (95 runs sampled)
*Fastest is MiniSignals*

## emit with context
    EventEmitter1 x 354,726 ops/sec ±0.92% (97 runs sampled)
    EventEmitter2 x 314,383 ops/sec ±0.66% (96 runs sampled)
    EventEmitter3 x 2,243,472 ops/sec ±2.80% (92 runs sampled)
    JS-Signals x 91,567 ops/sec ±1.75% (95 runs sampled)
    MiniSignals x 7,108,073 ops/sec ±1.21% (93 runs sampled)
    signal-emitter x 90,373 ops/sec ±0.85% (95 runs sampled)
    signal-lite x 112,281 ops/sec ±0.76% (98 runs sampled)
*Fastest is MiniSignals*

## emit with bound function
    EventEmitter1 x 306,586 ops/sec ±1.21% (95 runs sampled)
    EventEmitter2 x 271,910 ops/sec ±1.47% (96 runs sampled)
    EventEmitter3 x 474,259 ops/sec ±0.48% (97 runs sampled)
    JS-Signals x 62,168 ops/sec ±1.13% (98 runs sampled)
    MiniSignals x 367,829 ops/sec ±1.42% (96 runs sampled)
    signal-emitter x 79,478 ops/sec ±1.93% (95 runs sampled)
    signal-lite x 82,941 ops/sec ±2.08% (93 runs sampled)
*Fastest is EventEmitter3*

## emit one parameter
    EventEmitter1 x 4,175,360 ops/sec ±0.58% (97 runs sampled)
    EventEmitter2 x 4,014,867 ops/sec ±0.86% (95 runs sampled)
    EventEmitter3 x 4,240,796 ops/sec ±2.08% (85 runs sampled)
    JS-Signals x 281,507 ops/sec ±2.11% (97 runs sampled)
    MiniSignals x 3,876,742 ops/sec ±1.10% (95 runs sampled)
    signal-emitter x 339,245 ops/sec ±2.95% (90 runs sampled)
    event-signal x 3,924,614 ops/sec ±1.56% (95 runs sampled)
    signal-lite x 436,664 ops/sec ±1.87% (92 runs sampled)
*Fastest is EventEmitter3,EventEmitter1*

## emit many
    EventEmitter1 x 281,683 ops/sec ±0.71% (97 runs sampled)
    EventEmitter2 x 279,510 ops/sec ±0.85% (97 runs sampled)
    EventEmitter3 x 536,863 ops/sec ±2.66% (91 runs sampled)
    JS-Signals x 60,041 ops/sec ±0.87% (97 runs sampled)
    MiniSignals x 198,058 ops/sec ±2.97% (87 runs sampled)
    signal-emitter x 84,492 ops/sec ±1.11% (98 runs sampled)
    signal-lite x 78,254 ops/sec ±0.85% (95 runs sampled)
    minivents x 73,149 ops/sec ±1.19% (99 runs sampled)
*Fastest is EventEmitter3*

## emit large
    EventEmitter1 x 1,572,607 ops/sec ±1.31% (95 runs sampled)
    EventEmitter2 x 1,574,271 ops/sec ±1.76% (98 runs sampled)
    EventEmitter3 x 2,354,177 ops/sec ±1.02% (97 runs sampled)
    JS-Signals x 131,355 ops/sec ±0.92% (95 runs sampled)
    MiniSignals x 2,275,624 ops/sec ±1.07% (98 runs sampled)
    signal-emitter x 201,061 ops/sec ±3.72% (90 runs sampled)
    signal-lite x 120,768 ops/sec ±6.02% (73 runs sampled)
    minivents x 184,433 ops/sec ±2.28% (80 runs sampled)
*Fastest is EventEmitter3*

## init
    EventEmitter1 x 31,097,175 ops/sec ±1.32% (78 runs sampled)
    EventEmitter2 x 20,018,778 ops/sec ±1.29% (85 runs sampled)
    EventEmitter3 x 46,263,691 ops/sec ±1.38% (84 runs sampled)
    JS-Signals x 1,303,068 ops/sec ±8.26% (49 runs sampled)
    MiniSignals x 24,651,712 ops/sec ±30.21% (79 runs sampled)
*Fastest is EventEmitter3*

## add-remove
    EventEmitter1 x 825,193 ops/sec ±3.73% (77 runs sampled)
    EventEmitter2 x 735,848 ops/sec ±3.23% (79 runs sampled)
    EventEmitter3 x 823,415 ops/sec ±4.21% (71 runs sampled)
    JS-Signals x 258,522 ops/sec ±2.34% (71 runs sampled)
    MiniSignals x 8,499,509 ops/sec ±4.64% (68 runs sampled)
*Fastest is MiniSignals*
