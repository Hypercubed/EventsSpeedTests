# Node.js 4.4.4 on Darwin 64-bit

## add-remove

    dripEmitter x 17,932,716 ops/sec ±13.64% (10 runs sampled)
    MiniSignals x 15,922,071 ops/sec ±9.12% (10 runs sampled)
    EventDispatcher x 5,037,264 ops/sec ±2.52% (10 runs sampled)
    EventEmitter x 3,595,538 ops/sec ±16.52% (10 runs sampled)
    ReactiveProperty x 3,030,973 ops/sec ±5.25% (10 runs sampled)
    EventEmitter3 x 1,639,472 ops/sec ±4.87% (10 runs sampled)
    EventEmitter2 x 1,335,476 ops/sec ±4.25% (10 runs sampled)
    JS-Signals x 686,514 ops/sec ±5.00% (10 runs sampled)
    dripEmitterEnhanced x 155,055 ops/sec ±7.23% (10 runs sampled)

*Fastest is __dripEmitter__*

## emit arrays

    Theoretical max x 15,098,464 ops/sec ±2.10% (10 runs sampled) *burn in*
    MiniSignals x 6,705,738 ops/sec ±7.35% (10 runs sampled)
    signal-lite x 6,534,474 ops/sec ±4.75% (10 runs sampled)
    ReactiveProperty x 5,846,720 ops/sec ±6.12% (10 runs sampled)
    dripEmitter x 5,084,175 ops/sec ±5.81% (10 runs sampled)
    EventEmitter x 3,551,402 ops/sec ±8.42% (10 runs sampled)
    EventEmitter3 x 3,546,456 ops/sec ±54.18% (10 runs sampled)
    event-signal x 1,945,204 ops/sec ±10.25% (10 runs sampled)
    EventEmitter2 x 1,602,369 ops/sec ±4.54% (10 runs sampled)
    RXJS x 1,416,749 ops/sec ±4.78% (10 runs sampled)
    dripEmitterEnhanced x 998,985 ops/sec ±4.11% (10 runs sampled)
    JS-Signals x 184,129 ops/sec ±4.79% (10 runs sampled)
    signal-emitter x 141,786 ops/sec ±66.48% (10 runs sampled)

*Fastest is __MiniSignals, signal-lite__*

## emit with bound function

    Theoretical max x 4,035,017 ops/sec ±6.25% (10 runs sampled) *burn in*
    ReactiveProperty x 3,117,914 ops/sec ±3.70% (10 runs sampled)
    EventEmitter x 2,858,490 ops/sec ±5.77% (10 runs sampled)
    EventEmitter3 x 2,943,864 ops/sec ±14.15% (10 runs sampled)
    EventEmitter2 x 2,406,607 ops/sec ±3.00% (10 runs sampled)
    dripEmitter x 2,634,592 ops/sec ±19.67% (10 runs sampled)
    MiniSignals x 2,180,942 ops/sec ±5.13% (10 runs sampled)
    signal-lite x 2,110,388 ops/sec ±4.26% (10 runs sampled)
    RXJS x 2,104,295 ops/sec ±7.09% (10 runs sampled)
    dripEmitterEnhanced x 1,726,417 ops/sec ±6.27% (10 runs sampled)
    event-signal x 1,698,250 ops/sec ±28.33% (10 runs sampled)
    signal-emitter x 467,736 ops/sec ±11.17% (10 runs sampled)
    JS-Signals x 443,701 ops/sec ±8.98% (10 runs sampled)

*Fastest is __ReactiveProperty, EventEmitter3__*

## emit with context

    MiniSignals x 18,818,351 ops/sec ±5.46% (10 runs sampled)
    signal-lite x 17,606,629 ops/sec ±2.08% (10 runs sampled)
    EventEmitter3 x 13,780,555 ops/sec ±4.49% (10 runs sampled)
    event-signal x 6,142,263 ops/sec ±3.46% (10 runs sampled)
    Theoretical max x 3,474,257 ops/sec ±12.60% (10 runs sampled) *burn in*
    EventEmitter x 3,075,931 ops/sec ±2.82% (10 runs sampled)
    dripEmitter x 3,073,683 ops/sec ±4.30% (10 runs sampled)
    ReactiveProperty x 3,036,201 ops/sec ±5.31% (10 runs sampled)
    EventEmitter2 x 2,254,320 ops/sec ±4.22% (10 runs sampled)
    dripEmitterEnhanced x 1,624,202 ops/sec ±10.55% (10 runs sampled)
    RXJS x 1,560,629 ops/sec ±43.52% (10 runs sampled)
    JS-Signals x 605,957 ops/sec ±4.26% (10 runs sampled)
    signal-emitter x 569,323 ops/sec ±7.01% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit many listeners

    Theoretical max x 5,498,978 ops/sec ±8.23% (10 runs sampled) *burn in*
    MiniSignals x 5,025,861 ops/sec ±3.81% (10 runs sampled)
    dripEmitter x 4,636,318 ops/sec ±3.43% (10 runs sampled)
    signal-lite x 4,631,981 ops/sec ±4.64% (10 runs sampled)
    EventEmitter3 x 4,361,240 ops/sec ±2.65% (10 runs sampled)
    ReactiveProperty x 4,088,041 ops/sec ±3.17% (10 runs sampled)
    EventEmitter2 x 2,886,634 ops/sec ±5.43% (10 runs sampled)
    event-signal x 2,858,556 ops/sec ±5.76% (10 runs sampled)
    dripEmitterEnhanced x 1,916,479 ops/sec ±4.91% (10 runs sampled)
    EventEmitter x 2,613,610 ops/sec ±55.12% (10 runs sampled)
    RXJS x 1,556,147 ops/sec ±5.66% (10 runs sampled)
    signal-emitter x 500,365 ops/sec ±7.17% (10 runs sampled)
    JS-Signals x 278,283 ops/sec ±37.75% (10 runs sampled)
    minivents x 82,490 ops/sec ±9.71% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit many parameters

    Theoretical max x 20,211,688 ops/sec ±3.40% (10 runs sampled) *burn in*
    MiniSignals x 15,372,911 ops/sec ±5.86% (10 runs sampled)
    signal-lite x 13,495,617 ops/sec ±8.14% (10 runs sampled)
    EventEmitter3 x 2,367,533 ops/sec ±4.16% (10 runs sampled)
    EventEmitter x 2,295,309 ops/sec ±4.37% (10 runs sampled)
    dripEmitterEnhanced x 1,465,242 ops/sec ±2.47% (10 runs sampled)
    EventEmitter2 x 1,366,471 ops/sec ±44.64% (10 runs sampled)
    signal-emitter x 337,307 ops/sec ±7.25% (10 runs sampled)
    JS-Signals x 224,933 ops/sec ±4.34% (10 runs sampled)
    minivents x 96,223 ops/sec ±42.93% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit objects

    Theoretical max x 9,174,079 ops/sec ±37.03% (10 runs sampled) *burn in*
    MiniSignals x 6,290,846 ops/sec ±6.66% (10 runs sampled)
    signal-lite x 5,506,616 ops/sec ±6.63% (10 runs sampled)
    dripEmitter x 4,575,581 ops/sec ±8.08% (10 runs sampled)
    EventEmitter3 x 4,337,760 ops/sec ±3.93% (10 runs sampled)
    EventEmitter x 3,542,734 ops/sec ±5.67% (10 runs sampled)
    ReactiveProperty x 3,784,459 ops/sec ±57.36% (10 runs sampled)
    event-signal x 1,733,842 ops/sec ±8.15% (10 runs sampled)
    EventEmitter2 x 1,444,349 ops/sec ±9.33% (10 runs sampled)
    EventDispatcher x 1,950,041 ops/sec ±49.14% (10 runs sampled)
    RXJS x 1,234,445 ops/sec ±8.46% (10 runs sampled)
    dripEmitterEnhanced x 893,842 ops/sec ±5.34% (10 runs sampled)
    signal-emitter x 197,969 ops/sec ±6.19% (10 runs sampled)
    JS-Signals x 186,143 ops/sec ±3.37% (10 runs sampled)

*Fastest is __MiniSignals__*

## emit one parameter

    Theoretical max x 25,069,292 ops/sec ±10.57% (5 runs sampled) *burn in*
    MiniSignals x 18,430,846 ops/sec ±9.13% (5 runs sampled)
    signal-lite x 16,367,631 ops/sec ±13.44% (5 runs sampled)
    ReactiveProperty x 14,512,682 ops/sec ±5.93% (5 runs sampled)
    dripEmitter x 14,688,864 ops/sec ±7.34% (5 runs sampled)
    EventEmitter3 x 12,655,691 ops/sec ±5.52% (5 runs sampled)
    observ x 5,682,725 ops/sec ±10.20% (5 runs sampled)
    event-signal x 4,975,340 ops/sec ±3.41% (5 runs sampled)
    EventEmitter2 x 4,744,546 ops/sec ±6.77% (5 runs sampled)
    RXJS x 4,019,125 ops/sec ±8.55% (5 runs sampled)
    d3-dispatch x 4,060,517 ops/sec ±11.09% (5 runs sampled)
    EventEmitter x 5,287,172 ops/sec ±80.56% (5 runs sampled)
    dripEmitterEnhanced x 2,935,190 ops/sec ±3.08% (5 runs sampled)
    observable x 1,394,781 ops/sec ±6.74% (5 runs sampled)
    signal-emitter x 587,854 ops/sec ±4.79% (5 runs sampled)
    namespace-emitter x 486,943 ops/sec ±12.99% (5 runs sampled)
    minivents x 356,259 ops/sec ±23.42% (5 runs sampled)
    JS-Signals x 278,233 ops/sec ±132.85% (5 runs sampled)

*Fastest is __MiniSignals, signal-lite__*

## emit

    Theoretical max x 2,888,071 ops/sec ±6.95% (10 runs sampled) *burn in*
    signal-lite x 2,276,098 ops/sec ±6.35% (10 runs sampled)
    MiniSignals x 2,262,538 ops/sec ±14.36% (10 runs sampled)
    EventEmitter x 1,563,087 ops/sec ±5.64% (10 runs sampled)
    EventEmitter3 x 1,412,130 ops/sec ±9.78% (10 runs sampled)
    EventEmitter2 x 828,579 ops/sec ±4.26% (10 runs sampled)
    dripEmitterEnhanced x 360,020 ops/sec ±46.31% (10 runs sampled)
    signal-emitter x 124,657 ops/sec ±4.25% (10 runs sampled)
    JS-Signals x 122,403 ops/sec ±3.10% (10 runs sampled)

*Fastest is __signal-lite, MiniSignals__*

## init

    Theoretical max x 55,939,490 ops/sec ±6.70% (10 runs sampled) *burn in*
    EventEmitter3 x 51,742,151 ops/sec ±4.79% (10 runs sampled)
    EventDispatcher x 50,229,983 ops/sec ±10.11% (10 runs sampled)
    MiniSignals x 37,098,299 ops/sec ±6.47% (10 runs sampled)
    EventEmitter2 x 31,584,532 ops/sec ±4.50% (10 runs sampled)
    DripEmitter x 40,725,815 ops/sec ±36.39% (10 runs sampled)
    EventEmitter x 25,246,672 ops/sec ±6.73% (10 runs sampled)
    DripEmitterEnhanced x 24,042,294 ops/sec ±5.18% (10 runs sampled)
    JS-Signals x 2,105,515 ops/sec ±10.72% (10 runs sampled)
    ReactiveProperty x 1,428,136 ops/sec ±24.30% (10 runs sampled)

*Fastest is __EventEmitter3, EventDispatcher, DripEmitter__*
