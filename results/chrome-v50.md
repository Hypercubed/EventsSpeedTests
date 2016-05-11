# Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36

## emit
     EventEmitter x 385,354 ops/sec ±4.19% (55 runs sampled)
     EventEmitter2 x 391,027 ops/sec ±2.83% (54 runs sampled)
     EventEmitter3 x 1,118,299 ops/sec ±2.69% (55 runs sampled)
     JS-Signals x 104,783 ops/sec ±3.88% (51 runs sampled)
     MiniSignals x 6,184,283 ops/sec ±4.42% (53 runs sampled)
     signal-emitter x 153,489 ops/sec ±3.80% (55 runs sampled)
     signal-lite x 6,304,018 ops/sec ±2.85% (55 runs sampled)
Fastest is signal-lite,MiniSignals

## emit one parameter
     EventEmitter x 1,554,358 ops/sec ±4.34% (53 runs sampled)
     EventEmitter2 x 1,609,926 ops/sec ±3.45% (54 runs sampled)
     EventEmitter3 x 14,332,658 ops/sec ±2.86% (54 runs sampled)
     RXJS x 3,419,486 ops/sec ±4.09% (53 runs sampled)
     ReactiveProperty x 20,001,699 ops/sec ±2.14% (55 runs sampled)
     JS-Signals x 510,489 ops/sec ±2.39% (55 runs sampled)
     MiniSignals x 26,682,984 ops/sec ±4.46% (55 runs sampled)
     signal-emitter x 704,732 ops/sec ±2.80% (54 runs sampled)
     event-signal x 6,072,094 ops/sec ±4.05% (53 runs sampled)
     signal-lite x 24,980,117 ops/sec ±4.20% (54 runs sampled)
Fastest is MiniSignals

## emit with context
     EventEmitter x 353,730 ops/sec ±6.03% (53 runs sampled)
     EventEmitter2 x 373,758 ops/sec ±3.57% (53 runs sampled)
     EventEmitter3 x 1,137,755 ops/sec ±3.43% (52 runs sampled)
     JS-Signals x 126,079 ops/sec ±2.51% (55 runs sampled)
     MiniSignals x 7,663,472 ops/sec ±2.04% (54 runs sampled)
     signal-emitter x 160,311 ops/sec ±2.84% (55 runs sampled)
     signal-lite x 7,113,461 ops/sec ±1.62% (55 runs sampled)
Fastest is MiniSignals

## emit with bound function
     EventEmitter x 373,434 ops/sec ±3.40% (56 runs sampled)
     EventEmitter2 x 323,464 ops/sec ±5.62% (49 runs sampled)
     EventEmitter3 x 1,080,584 ops/sec ±5.00% (54 runs sampled)
     JS-Signals x 128,822 ops/sec ±3.06% (53 runs sampled)
     MiniSignals x 1,930,312 ops/sec ±4.41% (52 runs sampled)
     signal-emitter x 157,342 ops/sec ±3.32% (53 runs sampled)
     signal-lite x 1,501,332 ops/sec ±3.75% (51 runs sampled)
Fastest is MiniSignals

## emit many
     EventEmitter x 109,379 ops/sec ±3.50% (55 runs sampled)
     EventEmitter2 x 108,454 ops/sec ±3.49% (54 runs sampled)
     EventEmitter3 x 267,709 ops/sec ±4.96% (54 runs sampled)
     JS-Signals x 65,365 ops/sec ±3.62% (54 runs sampled)
     MiniSignals x 549,617 ops/sec ±3.75% (54 runs sampled)
     signal-emitter x 115,827 ops/sec ±3.16% (56 runs sampled)
     signal-lite x 422,286 ops/sec ±4.53% (51 runs sampled)
     minivents x 20,979 ops/sec ±3.57% (55 runs sampled)
Fastest is MiniSignals

## emit large
     EventEmitter x 692,267 ops/sec ±5.15% (57 runs sampled)
     EventEmitter2 x 698,668 ops/sec ±2.69% (48 runs sampled)
     EventEmitter3 x 740,621 ops/sec ±4.73% (54 runs sampled)
     JS-Signals x 167,389 ops/sec ±2.92% (53 runs sampled)
     MiniSignals x 5,977,847 ops/sec ±4.09% (53 runs sampled)
     signal-emitter x 374,299 ops/sec ±3.72% (52 runs sampled)
     signal-lite x 4,675,277 ops/sec ±6.92% (55 runs sampled)
     minivents x 106,760 ops/sec ±3.18% (55 runs sampled)
Fastest is MiniSignals

## emit arrays
     EventEmitter x 438,327 ops/sec ±3.88% (55 runs sampled)
     EventEmitter2 x 431,736 ops/sec ±5.53% (52 runs sampled)
     EventEmitter3 x 3,292,839 ops/sec ±4.50% (53 runs sampled)
     RXJS x 990,503 ops/sec ±4.21% (54 runs sampled)
     JS-Signals x 161,825 ops/sec ±2.96% (57 runs sampled)
     MiniSignals x 2,210,794 ops/sec ±4.90% (56 runs sampled)
     signal-emitter x 183,497 ops/sec ±4.18% (54 runs sampled)
     event-signal x 1,570,846 ops/sec ±5.71% (55 runs sampled)
     signal-lite x 1,692,491 ops/sec ±4.78% (54 runs sampled)
Fastest is EventEmitter3

## emit objects
     EventEmitter x 417,352 ops/sec ±6.53% (55 runs sampled)
     EventEmitter2 x 416,960 ops/sec ±5.19% (52 runs sampled)
     EventEmitter3 x 3,034,417 ops/sec ±6.23% (52 runs sampled)
     RXJS x 932,060 ops/sec ±6.20% (54 runs sampled)
     JS-Signals x 156,549 ops/sec ±5.49% (55 runs sampled)
     MiniSignals x 2,051,396 ops/sec ±9.12% (52 runs sampled)
     signal-emitter x 179,040 ops/sec ±4.87% (53 runs sampled)
     event-signal x 1,550,274 ops/sec ±5.39% (54 runs sampled)
     signal-lite x 1,513,319 ops/sec ±13.48% (52 runs sampled)
Fastest is EventEmitter3

## init
     EventEmitter x 53,277,130 ops/sec ±4.59% (53 runs sampled)
     EventEmitter2 x 31,797,482 ops/sec ±6.65% (54 runs sampled)
     EventEmitter3 x 92,795,904 ops/sec ±2.56% (52 runs sampled)
     JS-Signals x 1,274,116 ops/sec ±10.98% (23 runs sampled)
     MiniSignals x 26,703,395 ops/sec ±1.35% (49 runs sampled)
Fastest is EventEmitter3

## add-remove
     EventEmitter x 1,566,988 ops/sec ±3.24% (52 runs sampled)
     EventEmitter2 x 1,530,190 ops/sec ±4.92% (54 runs sampled)
     EventEmitter3 x 1,864,242 ops/sec ±6.14% (56 runs sampled)
     JS-Signals x 625,925 ops/sec ±7.82% (53 runs sampled)
     MiniSignals x 15,482,300 ops/sec ±11.46% (52 runs sampled)
Fastest is MiniSignals
