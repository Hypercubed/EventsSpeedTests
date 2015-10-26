
# Node (v0.12.7)

## emit
    EventEmitter1 x 342,130 ops/sec ±1.81% (93 runs sampled)
    EventEmitter2 x 456,623 ops/sec ±1.35% (97 runs sampled)
    EventEmitter3 x 954,658 ops/sec ±0.97% (94 runs sampled)
    JS-Signals x 108,259 ops/sec ±0.91% (98 runs sampled)
    JS-Signals patch x 196,039 ops/sec ±0.58% (99 runs sampled)
    MiniSignals x 5,967,620 ops/sec ±0.36% (99 runs sampled)
    signal-emitter x 67,696 ops/sec ±1.06% (96 runs sampled)
    signal-lite x 159,636 ops/sec ±0.58% (98 runs sampled)
*Fastest is MiniSignals*

## emit with context
    EventEmitter1 x 260,433 ops/sec ±0.50% (98 runs sampled)
    EventEmitter2 x 234,399 ops/sec ±5.85% (90 runs sampled)
    EventEmitter3 x 1,486,306 ops/sec ±7.77% (95 runs sampled)
    JS-Signals x 89,700 ops/sec ±1.12% (96 runs sampled)
    JS-Signals patch x 187,354 ops/sec ±0.78% (99 runs sampled)
    MiniSignals x 6,357,935 ops/sec ±0.31% (101 runs sampled)
    signal-emitter x 74,224 ops/sec ±0.70% (98 runs sampled)
    signal-lite x 137,093 ops/sec ±0.62% (97 runs sampled)
*Fastest is MiniSignals*

## emit with bound function
    EventEmitter1 x 210,260 ops/sec ±1.20% (84 runs sampled)
    EventEmitter2 x 246,827 ops/sec ±1.72% (98 runs sampled)
    EventEmitter3 x 421,170 ops/sec ±0.81% (98 runs sampled)
    JS-Signals x 70,533 ops/sec ±0.86% (91 runs sampled)
    JS-Signals patch x 147,198 ops/sec ±0.88% (98 runs sampled)
    MiniSignals x 438,290 ops/sec ±0.69% (98 runs sampled)
    signal-emitter x 55,354 ops/sec ±0.92% (91 runs sampled)
    signal-lite x 91,174 ops/sec ±2.86% (88 runs sampled)
*Fastest is MiniSignals*

## emit one parameter
    EventEmitter1 x 4,305,084 ops/sec ±2.12% (96 runs sampled)
    EventEmitter2 x 4,431,739 ops/sec ±2.27% (95 runs sampled)
    EventEmitter3 x 5,838,166 ops/sec ±0.84% (95 runs sampled)
    JS-Signals x 307,942 ops/sec ±1.27% (92 runs sampled)
    JS-Signals patch x 731,974 ops/sec ±0.60% (97 runs sampled)
    MiniSignals x 4,266,047 ops/sec ±0.44% (97 runs sampled)
    signal-emitter x 273,966 ops/sec ±0.52% (98 runs sampled)
    event-signal x 3,781,631 ops/sec ±0.51% (97 runs sampled)
    signal-lite x 538,392 ops/sec ±0.57% (99 runs sampled)
*Fastest is EventEmitter3*

## emit many
    EventEmitter1 x 258,367 ops/sec ±0.54% (100 runs sampled)
    EventEmitter2 x 217,213 ops/sec ±0.88% (98 runs sampled)
    EventEmitter3 x 307,471 ops/sec ±0.55% (98 runs sampled)
    JS-Signals x 70,592 ops/sec ±0.44% (98 runs sampled)
    JS-Signals patch x 116,754 ops/sec ±0.50% (99 runs sampled)
    MiniSignals x 238,169 ops/sec ±0.79% (99 runs sampled)
    signal-emitter x 57,216 ops/sec ±0.73% (95 runs sampled)
    signal-lite x 95,517 ops/sec ±0.70% (99 runs sampled)
    minivents x 84,925 ops/sec ±0.64% (99 runs sampled)
*Fastest is EventEmitter3*

## emit large
    EventEmitter1 x 1,679,512 ops/sec ±0.46% (98 runs sampled)
    EventEmitter2 x 1,134,230 ops/sec ±0.78% (97 runs sampled)
    EventEmitter3 x 1,527,450 ops/sec ±0.53% (96 runs sampled)
    JS-Signals x 305,670 ops/sec ±0.96% (97 runs sampled)
    JS-Signals patch x 470,889 ops/sec ±0.51% (96 runs sampled)
    MiniSignals x 2,753,954 ops/sec ±1.52% (97 runs sampled)
    signal-emitter x 186,339 ops/sec ±0.56% (100 runs sampled)
    signal-lite x 473,263 ops/sec ±1.29% (96 runs sampled)
    minivents x 348,442 ops/sec ±5.06% (79 runs sampled)
*Fastest is MiniSignals*

## init
    EventEmitter1 x 21,825,170 ops/sec ±0.48% (99 runs sampled)
    EventEmitter2 x 27,285,448 ops/sec ±0.50% (99 runs sampled)
    EventEmitter3 x 77,380,218 ops/sec ±0.42% (97 runs sampled)
    JS-Signals x 2,118,838 ops/sec ±5.66% (51 runs sampled)
    JS-Signals patch x 1,324,419 ops/sec ±0.60% (95 runs sampled)
    MiniSignals x 37,933,198 ops/sec ±0.61% (101 runs sampled)
*Fastest is EventEmitter3*

## add-remove
    EventEmitter1 x 1,095,537 ops/sec ±0.89% (95 runs sampled)
    EventEmitter2 x 553,901 ops/sec ±0.87% (97 runs sampled)
    EventEmitter3 x 1,216,355 ops/sec ±0.77% (97 runs sampled)
    JS-Signals x 488,186 ops/sec ±0.98% (96 runs sampled)
    JS-Signals patch x 484,435 ops/sec ±0.67% (97 runs sampled)
    MiniSignals x 1,089,849 ops/sec ±0.80% (97 runs sampled)
*Fastest is EventEmitter3*

# Chrome (Version 45)

## emit
    EventEmitter1 x 634,903 ops/sec ±0.67% (97 runs sampled)
    EventEmitter2 x 627,300 ops/sec ±2.15% (94 runs sampled)
    EventEmitter3 x 2,101,326 ops/sec ±1.51% (94 runs sampled)
    JS-Signals x 82,288 ops/sec ±1.96% (94 runs sampled)
    JS-Signals patch x 162,082 ops/sec ±1.34% (94 runs sampled)
    MiniSignals x 5,785,220 ops/sec ±0.54% (98 runs sampled)
    signal-emitter x 93,884 ops/sec ±1.92% (96 runs sampled)
    signal-lite x 111,437 ops/sec ±1.31% (96 runs sampled)
*Fastest is MiniSignals*

## emit with context
    EventEmitter1 x 306,805 ops/sec ±1.21% (96 runs sampled)
    EventEmitter2 x 304,107 ops/sec ±0.89% (96 runs sampled)
    EventEmitter3 x 1,958,530 ops/sec ±1.37% (96 runs sampled)
    JS-Signals x 80,389 ops/sec ±1.78% (96 runs sampled)
    JS-Signals patch x 165,825 ops/sec ±1.44% (96 runs sampled)
    MiniSignals x 5,980,465 ops/sec ±1.54% (97 runs sampled)
    signal-emitter x 91,327 ops/sec ±1.72% (94 runs sampled)
    signal-lite x 110,061 ops/sec ±0.91% (96 runs sampled)
*Fastest is MiniSignals*

## emit with bound function
    EventEmitter1 x 305,898 ops/sec ±1.56% (95 runs sampled)
    EventEmitter2 x 296,552 ops/sec ±2.45% (95 runs sampled)
    EventEmitter3 x 457,167 ops/sec ±0.81% (96 runs sampled)
    JS-Signals x 63,344 ops/sec ±0.99% (97 runs sampled)
    JS-Signals patch x 126,442 ops/sec ±1.84% (96 runs sampled)
    MiniSignals x 370,436 ops/sec ±1.05% (97 runs sampled)
    signal-emitter x 79,294 ops/sec ±1.56% (95 runs sampled)
    signal-lite x 86,508 ops/sec ±1.17% (91 runs sampled)
*Fastest is EventEmitter3*

## emit one parameter
    EventEmitter1 x 3,631,919 ops/sec ±0.63% (96 runs sampled)
    EventEmitter2 x 3,612,262 ops/sec ±0.75% (97 runs sampled)
    EventEmitter3 x 4,042,038 ops/sec ±1.85% (93 runs sampled)
    JS-Signals x 276,330 ops/sec ±2.31% (91 runs sampled)
    JS-Signals patch x 658,237 ops/sec ±1.80% (91 runs sampled)
    MiniSignals x 3,893,055 ops/sec ±0.81% (94 runs sampled)
    signal-emitter x 350,320 ops/sec ±2.12% (95 runs sampled)
    event-signal x 3,953,501 ops/sec ±2.06% (96 runs sampled)
    signal-lite x 427,430 ops/sec ±0.68% (95 runs sampled)
*Fastest is EventEmitter3*

## emit many
    EventEmitter1 x 283,496 ops/sec ±1.34% (94 runs sampled)
    EventEmitter2 x 281,664 ops/sec ±1.08% (98 runs sampled)
    EventEmitter3 x 550,458 ops/sec ±1.91% (95 runs sampled)
    JS-Signals x 61,478 ops/sec ±0.69% (95 runs sampled)
    JS-Signals patch x 93,449 ops/sec ±2.63% (96 runs sampled)
    MiniSignals x 215,533 ops/sec ±1.52% (97 runs sampled)
    signal-emitter x 81,250 ops/sec ±2.38% (95 runs sampled)
    signal-lite x 67,462 ops/sec ±4.49% (85 runs sampled)
    minivents x 58,610 ops/sec ±1.74% (94 runs sampled)
*Fastest is EventEmitter3*

## emit large
    EventEmitter1 x 1,592,326 ops/sec ±1.54% (93 runs sampled)
    EventEmitter2 x 1,604,220 ops/sec ±1.42% (92 runs sampled)
    EventEmitter3 x 2,340,369 ops/sec ±1.84% (96 runs sampled)
    JS-Signals x 132,162 ops/sec ±1.01% (94 runs sampled)
    JS-Signals patch x 346,755 ops/sec ±1.03% (97 runs sampled)
    MiniSignals x 2,248,766 ops/sec ±1.00% (96 runs sampled)
    signal-emitter x 212,035 ops/sec ±3.31% (91 runs sampled)
    signal-lite x 157,055 ops/sec ±1.60% (97 runs sampled)
    minivents x 305,975 ops/sec ±1.70% (97 runs sampled)
*Fastest is EventEmitter3*

## init
    EventEmitter1 x 46,441,053 ops/sec ±4.71% (88 runs sampled)
    EventEmitter2 x 30,353,920 ops/sec ±1.63% (94 runs sampled)
    EventEmitter3 x 66,125,255 ops/sec ±2.04% (95 runs sampled)
    JS-Signals x 1,819,303 ops/sec ±8.98% (43 runs sampled)
    JS-Signals patch x 750,605 ops/sec ±0.62% (95 runs sampled)
    MiniSignals x 39,139,301 ops/sec ±0.45% (97 runs sampled)
*Fastest is EventEmitter3*

## add-remove
    EventEmitter1 x 1,079,325 ops/sec ±0.77% (94 runs sampled)
    EventEmitter2 x 1,025,196 ops/sec ±1.85% (95 runs sampled)
    EventEmitter3 x 1,218,952 ops/sec ±1.41% (92 runs sampled)
    JS-Signals x 443,524 ops/sec ±1.60% (96 runs sampled)
    JS-Signals patch x 449,102 ops/sec ±1.06% (97 runs sampled)
    MiniSignals x 616,745 ops/sec ±3.36% (90 runs sampled)
*Fastest is EventEmitter3*

# Firefox 43

## emit
    EventEmitter1 x 301,597 ops/sec ±0.86% (91 runs sampled)
    EventEmitter2 x 293,734 ops/sec ±1.37% (95 runs sampled)
    EventEmitter3 x 1,031,152 ops/sec ±0.50% (97 runs sampled)
    JS-Signals x 100,252 ops/sec ±1.33% (94 runs sampled)
    JS-Signals patch x 291,415 ops/sec ±1.90% (93 runs sampled)
    MiniSignals x 5,720,216 ops/sec ±2.37% (88 runs sampled)
    signal-emitter x 157,181 ops/sec ±0.52% (95 runs sampled)
    signal-lite x 180,344 ops/sec ±0.89% (94 runs sampled)
*Fastest is MiniSignals*

## emit with context
    EventEmitter1 x 272,068 ops/sec ±1.06% (95 runs sampled)
    EventEmitter2 x 261,685 ops/sec ±0.89% (96 runs sampled)
    EventEmitter3 x 1,051,377 ops/sec ±1.20% (97 runs sampled)
    JS-Signals x 109,378 ops/sec ±0.81% (95 runs sampled)
    JS-Signals patch x 302,652 ops/sec ±0.73% (91 runs sampled)
    MiniSignals x 7,789,455 ops/sec ±0.48% (95 runs sampled)
    signal-emitter x 176,820 ops/sec ±1.52% (96 runs sampled)
    signal-lite x 185,884 ops/sec ±1.52% (93 runs sampled)
*Fastest is MiniSignals*

## emit with bound function
    EventEmitter1 x 285,388 ops/sec ±1.35% (96 runs sampled)
    EventEmitter2 x 280,638 ops/sec ±0.70% (94 runs sampled)
    EventEmitter3 x 492,232 ops/sec ±1.04% (96 runs sampled)
    JS-Signals x 92,957 ops/sec ±4.78% (81 runs sampled)
    JS-Signals patch x 152,542 ops/sec ±3.61% (88 runs sampled)
    MiniSignals x 730,199 ops/sec ±0.46% (97 runs sampled)
    signal-emitter x 133,954 ops/sec ±0.66% (97 runs sampled)
    signal-lite x 161,553 ops/sec ±0.98% (94 runs sampled)
*Fastest is MiniSignals*

## emit one parameter
    EventEmitter1 x 50,790,356 ops/sec ±0.47% (96 runs sampled)
    EventEmitter2 x 34,277,082 ops/sec ±0.72% (94 runs sampled)
    EventEmitter3 x 54,347,400 ops/sec ±0.55% (95 runs sampled)
    JS-Signals x 446,209 ops/sec ±0.94% (91 runs sampled)
    JS-Signals patch x 1,311,734 ops/sec ±0.92% (93 runs sampled)
    MiniSignals x 23,139,961 ops/sec ±0.70% (94 runs sampled)
    signal-emitter x 779,082 ops/sec ±0.93% (96 runs sampled)
    event-signal x 5,366,213 ops/sec ±0.79% (97 runs sampled)
    signal-lite x 719,924 ops/sec ±1.65% (94 runs sampled)
*Fastest is EventEmitter3*

# emit many
    EventEmitter1 x 74,186 ops/sec ±0.92% (95 runs sampled)
    EventEmitter2 x 67,670 ops/sec ±0.47% (98 runs sampled)
    EventEmitter3 x 243,686 ops/sec ±0.74% (96 runs sampled)
    JS-Signals x 49,061 ops/sec ±0.82% (93 runs sampled)
    JS-Signals patch x 140,317 ops/sec ±0.60% (98 runs sampled)
    MiniSignals x 1,455,504 ops/sec ±0.50% (97 runs sampled)
    signal-emitter x 76,814 ops/sec ±0.62% (94 runs sampled)
    signal-lite x 64,571 ops/sec ±1.08% (92 runs sampled)
    minivents x 63,650 ops/sec ±0.71% (95 runs sampled)
*Fastest is MiniSignals*

# emit large
    EventEmitter1 x 646,370 ops/sec ±1.46% (91 runs sampled)
    EventEmitter2 x 622,470 ops/sec ±0.79% (94 runs sampled)
    EventEmitter3 x 863,478 ops/sec ±2.60% (84 runs sampled)
    JS-Signals x 224,297 ops/sec ±0.79% (94 runs sampled)
    JS-Signals patch x 1,096,242 ops/sec ±0.93% (92 runs sampled)
    MiniSignals x 20,605,414 ops/sec ±3.33% (86 runs sampled)
    signal-emitter x 428,172 ops/sec ±0.71% (97 runs sampled)
    signal-lite x 291,422 ops/sec ±0.67% (97 runs sampled)
    minivents x 521,126 ops/sec ±1.21% (95 runs sampled)
*Fastest is MiniSignals*

# init
    EventEmitter1 x 28,550,588 ops/sec ±3.53% (89 runs sampled)
    EventEmitter2 x 63,549,771 ops/sec ±1.15% (95 runs sampled)
    EventEmitter3 x 797,101,267 ops/sec ±0.29% (96 runs sampled)
    JS-Signals x 12,519,633 ops/sec ±0.57% (96 runs sampled)
    JS-Signals patch x 574,914 ops/sec ±7.92% (77 runs sampled)
    MiniSignals x 36,717,887 ops/sec ±0.67% (96 runs sampled)
*Fastest is EventEmitter3*

# add-remove
    EventEmitter1 x 1,014,470 ops/sec ±2.65% (88 runs sampled)
    EventEmitter2 x 412,485 ops/sec ±1.22% (93 runs sampled)
    EventEmitter3 x 1,220,959 ops/sec ±2.30% (92 runs sampled)
    JS-Signals x 237,479 ops/sec ±3.56% (84 runs sampled)
    JS-Signals patch x 245,420 ops/sec ±3.63% (88 runs sampled)
    MiniSignals x 456,989 ops/sec ±6.92% (80 runs sampled)
*Fastest is EventEmitter3*
