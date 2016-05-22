
# Safari 9.0.2 on OS X 10.11.2

## emit

    Theoretical max x 1,169,939 ops/sec ±17.49% (10 runs sampled) *burn in*
    MiniSignals x 493,745 ops/sec ±18.51% (10 runs sampled)
    signal-lite x 415,437 ops/sec ±5.39% (10 runs sampled)
    EventEmitter2 x 388,289 ops/sec ±26.53% (10 runs sampled)
    EventEmitter3 x 322,389 ops/sec ±6.76% (10 runs sampled)
    EventEmitter x 306,265 ops/sec ±10.24% (10 runs sampled)
    JS-Signals x 262,060 ops/sec ±6.15% (10 runs sampled)
    signal-emitter x 157,968 ops/sec ±5.46% (10 runs sampled)

*Fastest is __MiniSignals,signal-lite,EventEmitter2__*

## emit objects

    Theoretical max x 2,177,805 ops/sec ±38.42% (10 runs sampled) *burn in*
    MiniSignals x 949,234 ops/sec ±6.30% (10 runs sampled)
    ReactiveProperty x 799,040 ops/sec ±4.49% (10 runs sampled)
    EventDispatcher x 781,217 ops/sec ±7.57% (10 runs sampled)
    event-signal x 772,152 ops/sec ±8.24% (10 runs sampled)
    EventEmitter2 x 515,258 ops/sec ±3.07% (10 runs sampled)
    signal-lite x 517,482 ops/sec ±5.38% (10 runs sampled)
    EventEmitter3 x 495,032 ops/sec ±1.58% (10 runs sampled)
    RXJS x 544,237 ops/sec ±11.98% (10 runs sampled)
    EventEmitter x 420,207 ops/sec ±4.72% (10 runs sampled)
    JS-Signals x 346,911 ops/sec ±10.31% (10 runs sampled)
    signal-emitter x 227,006 ops/sec ±4.13% (10 runs sampled)

*Fastest is __MiniSignals__*

## init

    EventEmitter3 x 78,601,242 ops/sec ±1.80% (10 runs sampled)
    Theoretical max x 58,044,020 ops/sec ±1.92% (10 runs sampled) *burn in*
    MiniSignals x 42,170,102 ops/sec ±28.04% (10 runs sampled)
    EventDispatcher x 37,574,597 ops/sec ±23.81% (10 runs sampled)
    EventEmitter x 28,522,782 ops/sec ±21.74% (10 runs sampled)
    JS-Signals x 18,712,575 ops/sec ±1.52% (10 runs sampled)
    EventEmitter2 x 17,332,547 ops/sec ±3.77% (10 runs sampled)
    ReactiveProperty x 4,861,862 ops/sec ±17.05% (10 runs sampled)

*Fastest is __EventEmitter3__*

## add-remove

    MiniSignals x 3,923,679 ops/sec ±26.80% (10 runs sampled)
    EventDispatcher x 3,206,687 ops/sec ±14.59% (10 runs sampled)
    EventEmitter3 x 1,689,561 ops/sec ±3.49% (10 runs sampled)
    ReactiveProperty x 1,631,687 ops/sec ±7.79% (10 runs sampled)
    JS-Signals x 833,258 ops/sec ±6.07% (10 runs sampled)
    EventEmitter x 823,439 ops/sec ±20.81% (10 runs sampled)
    EventEmitter2 x 591,409 ops/sec ±5.54% (10 runs sampled)

*Fastest is __MiniSignals,EventDispatcher__*

## emit with bound function

    Theoretical max x 5,336,138 ops/sec ±23.37% (10 runs sampled) *burn in*
    event-signal x 2,534,862 ops/sec ±4.44% (10 runs sampled)
    MiniSignals x 2,434,772 ops/sec ±10.03% (10 runs sampled)
    RXJS x 1,952,974 ops/sec ±6.98% (10 runs sampled)
    ReactiveProperty x 1,756,579 ops/sec ±8.26% (10 runs sampled)
    EventEmitter2 x 1,611,386 ops/sec ±2.71% (10 runs sampled)
    EventEmitter3 x 1,431,321 ops/sec ±6.84% (10 runs sampled)
    signal-lite x 1,437,536 ops/sec ±7.98% (10 runs sampled)
    EventEmitter x 1,373,051 ops/sec ±5.10% (10 runs sampled)
    JS-Signals x 985,574 ops/sec ±4.46% (10 runs sampled)
    signal-emitter x 449,337 ops/sec ±17.52% (10 runs sampled)

*Fastest is __event-signal,MiniSignals__*

## emit many listeners

    Theoretical max x 1,260,668 ops/sec ±27.24% (10 runs sampled) *burn in*
    MiniSignals x 780,083 ops/sec ±3.92% (10 runs sampled)
    event-signal x 703,755 ops/sec ±7.11% (10 runs sampled)
    ReactiveProperty x 685,590 ops/sec ±5.75% (10 runs sampled)
    EventEmitter2 x 610,436 ops/sec ±3.31% (10 runs sampled)
    EventEmitter3 x 575,763 ops/sec ±5.12% (10 runs sampled)
    RXJS x 500,000 ops/sec ±4.76% (10 runs sampled)
    EventEmitter x 477,257 ops/sec ±3.14% (10 runs sampled)
    signal-lite x 467,662 ops/sec ±5.77% (10 runs sampled)
    signal-emitter x 403,084 ops/sec ±2.87% (10 runs sampled)
    JS-Signals x 393,421 ops/sec ±5.64% (10 runs sampled)
    minivents x 292,290 ops/sec ±22.71% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit many parameters

    Theoretical max x 7,675,154 ops/sec ±27.91% (10 runs sampled) *burn in*
    MiniSignals x 3,395,260 ops/sec ±3.07% (10 runs sampled)
    signal-lite x 1,192,934 ops/sec ±14.63% (10 runs sampled)
    EventEmitter2 x 1,043,615 ops/sec ±6.83% (10 runs sampled)
    EventEmitter x 967,161 ops/sec ±6.48% (10 runs sampled)
    minivents x 885,343 ops/sec ±3.74% (10 runs sampled)
    EventEmitter3 x 883,052 ops/sec ±4.68% (10 runs sampled)
    JS-Signals x 855,140 ops/sec ±3.53% (10 runs sampled)
    signal-emitter x 455,791 ops/sec ±3.06% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit arrays

    Theoretical max x 1,648,197 ops/sec ±31.38% (10 runs sampled) *burn in*
    MiniSignals x 959,867 ops/sec ±5.24% (10 runs sampled)
    event-signal x 802,632 ops/sec ±7.91% (10 runs sampled)
    ReactiveProperty x 533,539 ops/sec ±6.03% (10 runs sampled)
    signal-lite x 507,503 ops/sec ±3.20% (10 runs sampled)
    EventEmitter2 x 479,997 ops/sec ±4.77% (10 runs sampled)
    EventEmitter3 x 455,813 ops/sec ±9.66% (10 runs sampled)
    RXJS x 428,707 ops/sec ±5.40% (10 runs sampled)
    EventEmitter x 393,568 ops/sec ±7.18% (10 runs sampled)
    JS-Signals x 320,330 ops/sec ±7.19% (10 runs sampled)
    signal-emitter x 223,778 ops/sec ±6.10% (10 runs sampled)

*Fastest is __MiniSignals__*

