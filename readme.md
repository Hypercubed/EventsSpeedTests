
# Node (v4.2.1)

## emit
    EventEmitter1 x 3,603,995 ops/sec ±0.60% (99 runs sampled)
    EventEmitter2 x 936,660 ops/sec ±1.56% (97 runs sampled)
    EventEmitter3 x 3,090,268 ops/sec ±0.55% (96 runs sampled)
    JS-Signals x 166,383 ops/sec ±1.65% (98 runs sampled)
    MiniSignals x 8,955,396 ops/sec ±0.43% (97 runs sampled)
    signal-emitter x 159,200 ops/sec ±1.62% (98 runs sampled)
    signal-lite x 216,902 ops/sec ±1.58% (95 runs sampled)
*Fastest is MiniSignals*

## emit with context
    EventEmitter1 x 748,500 ops/sec ±0.76% (99 runs sampled)
    EventEmitter2 x 458,031 ops/sec ±1.41% (98 runs sampled)
    EventEmitter3 x 2,799,583 ops/sec ±1.04% (97 runs sampled)
    JS-Signals x 155,405 ops/sec ±1.75% (99 runs sampled)
    MiniSignals x 9,496,720 ops/sec ±0.92% (96 runs sampled)
    signal-emitter x 156,648 ops/sec ±1.69% (96 runs sampled)
    signal-lite x 215,705 ops/sec ±0.72% (93 runs sampled)
*Fastest is MiniSignals*

## emit with bound function
    EventEmitter1 x 734,635 ops/sec ±1.73% (96 runs sampled)
    EventEmitter2 x 468,705 ops/sec ±0.60% (97 runs sampled)
    EventEmitter3 x 692,354 ops/sec ±1.62% (98 runs sampled)
    JS-Signals x 133,076 ops/sec ±0.70% (100 runs sampled)
    MiniSignals x 527,409 ops/sec ±1.95% (95 runs sampled)
    signal-emitter x 135,572 ops/sec ±1.22% (96 runs sampled)
    signal-lite x 169,961 ops/sec ±0.97% (95 runs sampled)
*Fastest is EventEmitter1*

## emit one parameter
    EventEmitter1 x 6,164,087 ops/sec ±1.54% (97 runs sampled)
    EventEmitter2 x 6,067,887 ops/sec ±0.79% (99 runs sampled)
    EventEmitter3 x 6,644,296 ops/sec ±1.87% (97 runs sampled)
    RXJS x 3,128,997 ops/sec ±0.65% (95 runs sampled)
    JS-Signals x 592,712 ops/sec ±1.23% (98 runs sampled)
    MiniSignals x 5,797,363 ops/sec ±0.58% (99 runs sampled)
    signal-emitter x 636,038 ops/sec ±1.66% (98 runs sampled)
    event-signal x 5,947,414 ops/sec ±1.59% (97 runs sampled)
    signal-lite x 877,319 ops/sec ±1.96% (96 runs sampled)
*Fastest is EventEmitter3*

## emit many
    EventEmitter1 x 1,154,337 ops/sec ±0.50% (100 runs sampled)
    EventEmitter2 x 398,643 ops/sec ±2.03% (96 runs sampled)
    EventEmitter3 x 800,457 ops/sec ±0.67% (97 runs sampled)
    JS-Signals x 109,358 ops/sec ±1.55% (94 runs sampled)
    MiniSignals x 329,284 ops/sec ±1.02% (97 runs sampled)
    signal-emitter x 138,430 ops/sec ±1.19% (97 runs sampled)
    signal-lite x 140,282 ops/sec ±1.78% (95 runs sampled)
    minivents x 134,406 ops/sec ±0.51% (99 runs sampled)
*Fastest is EventEmitter1*

## emit large
    EventEmitter1 x 2,564,525 ops/sec ±2.88% (92 runs sampled)
    EventEmitter2 x 1,983,347 ops/sec ±3.47% (89 runs sampled)
    EventEmitter3 x 2,800,967 ops/sec ±1.48% (95 runs sampled)
    JS-Signals x 256,129 ops/sec ±0.81% (98 runs sampled)
    MiniSignals x 3,392,229 ops/sec ±1.66% (98 runs sampled)
    signal-emitter x 382,486 ops/sec ±0.49% (96 runs sampled)
    signal-lite x 304,507 ops/sec ±1.70% (95 runs sampled)
    minivents x 595,302 ops/sec ±0.62% (97 runs sampled)
*Fastest is MiniSignals*

## emit arrays
    EventEmitter1 x 3,224,485 ops/sec ±1.49% (95 runs sampled)
    EventEmitter2 x 982,333 ops/sec ±0.98% (101 runs sampled)
    EventEmitter3 x 3,821,563 ops/sec ±1.42% (99 runs sampled)
    RXJS x 765,840 ops/sec ±1.88% (95 runs sampled)
    JS-Signals x 181,866 ops/sec ±0.51% (101 runs sampled)
    MiniSignals x 1,541,285 ops/sec ±2.03% (96 runs sampled)
    signal-emitter x 171,634 ops/sec ±0.55% (98 runs sampled)
    event-signal x 1,604,188 ops/sec ±1.85% (94 runs sampled)
    signal-lite x 257,044 ops/sec ±0.49% (99 runs sampled)
*Fastest is EventEmitter3*

## emit objects
    EventEmitter1 x 3,068,734 ops/sec ±2.20% (96 runs sampled)
    EventEmitter2 x 951,807 ops/sec ±0.58% (97 runs sampled)
    EventEmitter3 x 3,645,022 ops/sec ±1.33% (97 runs sampled)
    RXJS x 788,501 ops/sec ±0.65% (99 runs sampled)
    JS-Signals x 176,230 ops/sec ±1.48% (96 runs sampled)
    MiniSignals x 1,500,551 ops/sec ±1.04% (99 runs sampled)
    signal-emitter x 165,746 ops/sec ±1.90% (97 runs sampled)
    event-signal x 1,572,953 ops/sec ±1.19% (98 runs sampled)
    signal-lite x 251,702 ops/sec ±1.45% (100 runs sampled)
*Fastest is EventEmitter3*

## init
    EventEmitter1 x 29,543,059 ops/sec ±1.57% (96 runs sampled)
    EventEmitter2 x 33,278,965 ops/sec ±0.95% (94 runs sampled)
    EventEmitter3 x 68,964,062 ops/sec ±1.48% (96 runs sampled)
    JS-Signals x 2,661,506 ops/sec ±4.02% (46 runs sampled)
    MiniSignals x 52,426,656 ops/sec ±1.91% (91 runs sampled)
*Fastest is EventEmitter3*

## add-remove
    EventEmitter1 x 8,601,097 ops/sec ±0.51% (102 runs sampled)
    EventEmitter2 x 1,650,725 ops/sec ±1.48% (96 runs sampled)
    EventEmitter3 x 1,936,935 ops/sec ±1.40% (98 runs sampled)
    JS-Signals x 754,562 ops/sec ±2.09% (98 runs sampled)
    MiniSignals x 17,514,336 ops/sec ±1.05% (99 runs sampled)
*Fastest is MiniSignals*

# Chrome (v46)

## emit
    EventEmitter1 x 792,204 ops/sec ±1.61% (94 runs sampled)
    EventEmitter2 x 805,679 ops/sec ±1.63% (93 runs sampled)
    EventEmitter3 x 3,076,157 ops/sec ±1.74% (92 runs sampled)
    JS-Signals x 143,871 ops/sec ±1.35% (91 runs sampled)
    MiniSignals x 7,848,239 ops/sec ±1.37% (94 runs sampled)
    signal-emitter x 140,113 ops/sec ±1.04% (93 runs sampled)
    signal-lite x 189,860 ops/sec ±1.21% (91 runs sampled)
*Fastest is MiniSignals*

## emit with context
    EventEmitter1 x 411,431 ops/sec ±2.03% (93 runs sampled)
    EventEmitter2 x 412,393 ops/sec ±1.61% (91 runs sampled)
    EventEmitter3 x 2,752,921 ops/sec ±1.88% (95 runs sampled)
    JS-Signals x 137,709 ops/sec ±0.99% (96 runs sampled)
    MiniSignals x 8,219,750 ops/sec ±1.40% (94 runs sampled)
    signal-emitter x 139,171 ops/sec ±1.82% (93 runs sampled)
    signal-lite x 184,983 ops/sec ±1.15% (97 runs sampled)
*Fastest is MiniSignals*

## emit with bound function
    EventEmitter1 x 414,874 ops/sec ±0.87% (96 runs sampled)
    EventEmitter2 x 413,396 ops/sec ±1.74% (95 runs sampled)
    EventEmitter3 x 630,696 ops/sec ±1.17% (96 runs sampled)
    JS-Signals x 115,643 ops/sec ±2.51% (91 runs sampled)
    MiniSignals x 496,601 ops/sec ±1.87% (94 runs sampled)
    signal-emitter x 118,001 ops/sec ±0.74% (93 runs sampled)
    signal-lite x 149,852 ops/sec ±1.27% (95 runs sampled)
*Fastest is EventEmitter3*

## emit one parameter
    EventEmitter1 x 4,862,196 ops/sec ±1.48% (95 runs sampled)
    EventEmitter2 x 4,681,293 ops/sec ±2.50% (90 runs sampled)
    EventEmitter3 x 5,514,716 ops/sec ±1.48% (93 runs sampled)
    RXJS x 2,975,042 ops/sec ±1.34% (95 runs sampled)
    JS-Signals x 530,254 ops/sec ±1.47% (94 runs sampled)
    MiniSignals x 5,998,222 ops/sec ±2.24% (94 runs sampled)
    signal-emitter x 564,649 ops/sec ±0.76% (95 runs sampled)
    event-signal x 5,494,410 ops/sec ±1.51% (95 runs sampled)
    signal-lite x 780,686 ops/sec ±1.50% (93 runs sampled)
*Fastest is MiniSignals*

## emit many
    EventEmitter1 x 390,885 ops/sec ±1.79% (94 runs sampled)
    EventEmitter2 x 398,670 ops/sec ±1.57% (92 runs sampled)
    EventEmitter3 x 800,177 ops/sec ±1.52% (94 runs sampled)
    JS-Signals x 100,112 ops/sec ±1.87% (92 runs sampled)
    MiniSignals x 324,617 ops/sec ±2.26% (89 runs sampled)
    signal-emitter x 123,555 ops/sec ±1.40% (94 runs sampled)
    signal-lite x 126,248 ops/sec ±1.29% (91 runs sampled)
    minivents x 104,364 ops/sec ±1.29% (92 runs sampled)
*Fastest is EventEmitter3*

## emit large
    EventEmitter1 x 2,330,641 ops/sec ±0.87% (96 runs sampled)
    EventEmitter2 x 2,280,261 ops/sec ±2.42% (92 runs sampled)
    EventEmitter3 x 3,484,350 ops/sec ±1.33% (91 runs sampled)
    JS-Signals x 209,184 ops/sec ±1.98% (94 runs sampled)
    MiniSignals x 3,495,200 ops/sec ±0.79% (95 runs sampled)
    signal-emitter x 331,293 ops/sec ±2.44% (92 runs sampled)
    signal-lite x 244,307 ops/sec ±1.40% (92 runs sampled)
    minivents x 421,685 ops/sec ±1.62% (94 runs sampled)
*Fastest is MiniSignals,EventEmitter3*

## emit arrays
    EventEmitter1 x 873,659 ops/sec ±2.29% (90 runs sampled)
    EventEmitter2 x 908,831 ops/sec ±1.68% (92 runs sampled)
    EventEmitter3 x 3,912,211 ops/sec ±2.09% (91 runs sampled)
    RXJS x 781,904 ops/sec ±1.51% (91 runs sampled)
    JS-Signals x 159,091 ops/sec ±1.44% (93 runs sampled)
    MiniSignals x 1,634,133 ops/sec ±1.10% (90 runs sampled)
    signal-emitter x 140,462 ops/sec ±2.53% (90 runs sampled)
    event-signal x 1,453,252 ops/sec ±1.71% (92 runs sampled)
    signal-lite x 215,123 ops/sec ±2.75% (92 runs sampled)
*Fastest is EventEmitter3*

## emit objects
    EventEmitter1 x 854,546 ops/sec ±2.13% (94 runs sampled)
    EventEmitter2 x 863,843 ops/sec ±2.68% (94 runs sampled)
    EventEmitter3 x 3,660,330 ops/sec ±1.75% (94 runs sampled)
    RXJS x 779,424 ops/sec ±1.51% (94 runs sampled)
    JS-Signals x 155,575 ops/sec ±2.05% (93 runs sampled)
    MiniSignals x 1,613,894 ops/sec ±1.12% (94 runs sampled)
    signal-emitter x 145,245 ops/sec ±1.72% (92 runs sampled)
    event-signal x 1,444,786 ops/sec ±0.76% (94 runs sampled)
    signal-lite x 220,744 ops/sec ±1.93% (93 runs sampled)
*Fastest is EventEmitter3*

## init
    EventEmitter1 x 67,266,177 ops/sec ±1.20% (94 runs sampled)
    EventEmitter2 x 41,853,139 ops/sec ±1.73% (94 runs sampled)
    EventEmitter3 x 100,743,621 ops/sec ±0.60% (92 runs sampled)
    JS-Signals x 2,294,496 ops/sec ±5.91% (72 runs sampled)
    MiniSignals x 51,418,303 ops/sec ±1.63% (93 runs sampled)
*Fastest is EventEmitter3*

## add-remove
    EventEmitter1 x 1,463,609 ops/sec ±1.09% (90 runs sampled)
    EventEmitter2 x 1,400,214 ops/sec ±1.39% (95 runs sampled)
    EventEmitter3 x 1,615,099 ops/sec ±1.51% (92 runs sampled)
    JS-Signals x 608,134 ops/sec ±1.95% (91 runs sampled)
    MiniSignals x 17,859,733 ops/sec ±1.07% (94 runs sampled)
*Fastest is MiniSignals*
