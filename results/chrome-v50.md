# Chrome 50.0.2661 (Mac OS X 10.11.2)

## add-remove
    EventEmitter at 1398799 ops/sec
    EventEmitter2 at 1033900 ops/sec
    EventEmitter3 at 1590310 ops/sec
    ReactiveProperty at 4458290 ops/sec
    JS-Signals at 677537 ops/sec
    MiniSignals at 15106064 ops/sec

MiniSignals at 15106064 ops/sec (3.39x faster than ReactiveProperty)

## emit arrays
    EventEmitter at 221523 ops/sec
    EventEmitter2 at 1484589 ops/sec
    EventEmitter3 at 4643312 ops/sec
    RXJS at 1307752 ops/sec
    ReactiveProperty at 4360045 ops/sec
    JS-Signals at 174584 ops/sec
    MiniSignals at 5252535 ops/sec
    signal-emitter at 189328 ops/sec
    event-signal at 1495119 ops/sec
    signal-lite at 4959881 ops/sec
    Theoretical max at 10550984 ops/sec

MiniSignals at 5252535 ops/sec (1.06x faster than signal-lite)

## emit with bound function
    EventEmitter at 528768 ops/sec
    EventEmitter2 at 3988039 ops/sec
    EventEmitter3 at 9283817 ops/sec
    RXJS at 2990311 ops/sec
    ReactiveProperty at 15480303 ops/sec
    JS-Signals at 456623 ops/sec
    MiniSignals at 6145386 ops/sec
    signal-emitter at 640244 ops/sec
    event-signal at 4927745 ops/sec
    signal-lite at 5190212 ops/sec
    Theoretical max at 28182574 ops/sec

ReactiveProperty at 15480303 ops/sec (1.67x faster than EventEmitter3)

## emit with context

    EventEmitter at 610095 ops/sec
    EventEmitter2 at 4003941 ops/sec
    EventEmitter3 at 9753803 ops/sec
    RXJS at 3300215 ops/sec
    ReactiveProperty at 14526100 ops/sec
    JS-Signals at 567894 ops/sec
    MiniSignals at 7077231 ops/sec
    signal-emitter at 707749 ops/sec
    event-signal at 5434724 ops/sec
    signal-lite at 6061297 ops/sec
    Theoretical max at 29021582 ops/sec

ReactiveProperty at 14526100 ops/sec (1.49x faster than EventEmitter3)

## emit many parameters
    EventEmitter at 204399 ops/sec
    EventEmitter2 at 655025 ops/sec
    EventEmitter3 at 704110 ops/sec
    JS-Signals at 182421 ops/sec
    MiniSignals at 5050739 ops/sec
    signal-emitter at 357951 ops/sec
    signal-lite at 3996825 ops/sec
    minivents at 113705 ops/sec
    Theoretical max at 14505089 ops/sec

MiniSignals at 5050739 ops/sec (1.26x faster than signal-lite)

## emit many listeners

    EventEmitter at 248040 ops/sec
    EventEmitter2 at 1743307 ops/sec
    EventEmitter3 at 2919486 ops/sec
    RXJS at 1323530 ops/sec
    ReactiveProperty at 3171433 ops/sec
    JS-Signals at 257234 ops/sec
    MiniSignals at 1691917 ops/sec
    signal-emitter at 520113 ops/sec
    event-signal at 1959840 ops/sec
    signal-lite at 1506345 ops/sec
    minivents at 105371 ops/sec
    Theoretical max at 4639006 ops/sec

ReactiveProperty at 3171433 ops/sec (1.09x faster than EventEmitter3)

## emit objects

    EventEmitter at 210725 ops/sec
    EventEmitter2 at 1311677 ops/sec
    EventEmitter3 at 3196784 ops/sec
    RXJS at 1294172 ops/sec
    ReactiveProperty at 4886286 ops/sec
    JS-Signals at 182081 ops/sec
    MiniSignals at 1935069 ops/sec
    signal-emitter at 231398 ops/sec
    event-signal at 1720644 ops/sec
    signal-lite at 1790935 ops/sec
    Theoretical max at 10181283 ops/sec

ReactiveProperty at 4886286 ops/sec (1.53x faster than EventEmitter3)

## emit one parameter

    EventEmitter at 598084 ops/sec
    EventEmitter2 at 4017430 ops/sec
    EventEmitter3 at 8896545 ops/sec
    d3-dispatch at 1696599 ops/sec
    namespace-emitter at 543738 ops/sec
    ReactiveProperty at 13088494 ops/sec
    observable at 468074 ops/sec
    observ at 5470732 ops/sec
    RXJS at 3423862 ops/sec
    JS-Signals at 522660 ops/sec
    MiniSignals at 6045482 ops/sec
    signal-emitter at 676171 ops/sec
    event-signal at 4925745 ops/sec
    signal-lite at 4605710 ops/sec
    minivents at 477158 ops/sec
    Theoretical max at 22495021 ops/sec

ReactiveProperty at 13088494 ops/sec (1.47x faster than EventEmitter3)

## emit

    EventEmitter at 140068 ops/sec
    EventEmitter2 at 609413 ops/sec
    EventEmitter3 at 871619 ops/sec
    JS-Signals at 128820 ops/sec
    MiniSignals at 1830975 ops/sec
    signal-emitter at 162881 ops/sec
    signal-lite at 1519077 ops/sec
    Theoretical max at 9993907 ops/sec

MiniSignals at 1830975 ops/sec (1.21x faster than signal-lite)

## init

    EventEmitter at 27891888 ops/sec
    EventEmitter2 at 25448374 ops/sec
    EventEmitter3 at 37702586 ops/sec
    ReactiveProperty at 921027 ops/sec
    JS-Signals at 1784915 ops/sec
    MiniSignals at 30534908 ops/sec
    Theoretical max at 41252546 ops/sec

EventEmitter3 at 37702586 ops/sec (1.23x faster than MiniSignals)
