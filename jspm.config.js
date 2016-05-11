SystemJS.config({
  transpiler: "plugin-traceur",
  map: {
    "EventEmitter2": "github:asyncly/EventEmitter2@1.0.0",
    "allouis/minivents": "github:allouis/minivents@2.0.1",
    "asyncly/EventEmitter2": "github:asyncly/EventEmitter2@1.0.0",
    "hcSignals": "github:Hypercubed/js-signals@fixv8optbuild",
    "jspm/nodelibs-events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "millermedeiros/js-signals": "github:millermedeiros/js-signals@1.0.0",
    "primus/eventemitter3": "github:primus/eventemitter3@1.2.0"
  },
  packages: {
    "benchmarks": {
      "defaultJSExtensions": true,
      "main": "index.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "@reactivex/rxjs": "npm:@reactivex/rxjs@5.0.0-alpha.10",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "benchmark": "npm:benchmark@2.1.0",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "event-signal": "npm:event-signal@0.1.6",
    "eventemitter2": "github:asyncly/EventEmitter2@0.4.14",
    "eventemitter3": "github:primus/eventemitter3@1.2.0",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fast-event-emitter": "npm:fast-event-emitter@0.0.2",
    "lodash": "npm:lodash@4.12.0",
    "mini-signals": "npm:mini-signals@1.1.1",
    "minivents": "github:allouis/minivents@2.0.1",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "plugin-traceur": "npm:systemjs-plugin-traceur@0.0.1",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "reactive-property": "npm:reactive-property@0.9.0",
    "signal-emitter": "npm:signal-emitter@0.0.1",
    "signals": "github:millermedeiros/js-signals@1.0.0",
    "signals-lite": "npm:signals-lite@1.0.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "npm:@reactivex/rxjs@5.0.0-alpha.10": {
      "map": {}
    },
    "npm:benchmark@2.1.0": {
      "map": {
        "lodash": "npm:lodash@4.12.0",
        "platform": "npm:platform@1.3.1"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:fast-event-emitter@0.0.2": {
      "map": {
        "protoclass": "npm:protoclass@0.0.6"
      }
    },
    "npm:isarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:lodash@4.12.0": {
      "map": {}
    },
    "npm:reactive-property@0.9.0": {
      "map": {}
    },
    "npm:systemjs-plugin-traceur@0.0.1": {
      "map": {
        "traceur": "github:jmcriffey/bower-traceur@0.0.95",
        "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.95"
      }
    }
  }
});
