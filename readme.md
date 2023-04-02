# What's the fastest Observer Pattern implementations?

## Testing

- [mini-signals](https://www.npmjs.com/package/mini-signals): 2.0.0-1
- [sister](https://www.npmjs.com/package/sister): 3.0.0
- [reactive-property](https://www.npmjs.com/package/reactive-property): 1.0.0
- [eventemitter3](https://www.npmjs.com/package/eventemitter3): 5.0.0
- [observ](https://www.npmjs.com/package/observ): 0.2.0
- [signals](https://www.npmjs.com/package/signals): 1.0.0
- rxjs: 7.8.0
- d3-dispatch: 3.0.1
- evee: 2.1.0
- event-signal: 0.1.6
- eventemitter2: 6.4.9
- minivents: 2.0.2
- namespace-emitter: 2.0.1
- observable: 2.1.4
- signal-emitter: 0.0.1
- signals-lite: 1.0.0
- waddup: 2.0.1

## Results

### [Node v16](./results/node-v16.md)

Number of times each library appeared in the "fastest" list:

```
MiniSignals        XXXXXXX
ReactiveProperty   XXX
sister             XX
EventEmitter3      XX
observ             X
```

### [Node v18](./results/node-v18.md)

Number of times each library appeared in the "fastest" list:

```
MiniSignals        XXXXXXX
sister             XXX
ReactiveProperty   XXX
EventEmitter3      XX
```

### [Deno v1.32](./results/deno-v1.32.md)

```
MiniSignals        XXXXXXXXXX
drip               XXX
reactive-property  XXXX
sister             XXXX
```

### [Chrome v111](./results/chrome-v111.md)

```
MiniSignals        XXXXXX
ReactiveProperty   XXX
sister             XX
EventEmitter3      XX
```

## How?

Benchmarks generated using [Chūhai](https://github.com/Hypercubed/chuhai), [chomp](https://chompbuild.com/), and [tap-markdown](https://github.com/Hypercubed/tap-markdown).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2016-2023 Jayson Harshbarger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
