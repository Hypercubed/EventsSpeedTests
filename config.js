System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "@reactivex/rxjs": "npm:@reactivex/rxjs@5.0.0-alpha.10",
    "EventEmitter2": "github:asyncly/EventEmitter2@1.0.0",
    "allouis/minivents": "github:allouis/minivents@2.0.1",
    "asyncly/EventEmitter2": "github:asyncly/EventEmitter2@1.0.0",
    "benchmark": "npm:benchmark@2.1.0",
    "event-signal": "npm:event-signal@0.1.6",
    "eventemitter2": "github:asyncly/EventEmitter2@0.4.14",
    "eventemitter3": "github:primus/eventemitter3@1.2.0",
    "events": "github:jspm/nodelibs-events@0.1.1",
    "fast-event-emitter": "npm:fast-event-emitter@0.0.2",
    "hcSignals": "github:Hypercubed/js-signals@fixv8optbuild",
    "jspm/nodelibs-events": "github:jspm/nodelibs-events@0.1.1",
    "lodash": "npm:lodash@4.12.0",
    "millermedeiros/js-signals": "github:millermedeiros/js-signals@1.0.0",
    "mini-signals": "npm:mini-signals@1.1.1",
    "minivents": "github:allouis/minivents@2.0.1",
    "primus/eventemitter3": "github:primus/eventemitter3@1.2.0",
    "process": "github:jspm/nodelibs-process@0.1.2",
    "reactive-property": "npm:reactive-property@0.9.0",
    "signal-emitter": "npm:signal-emitter@0.0.1",
    "signals": "github:millermedeiros/js-signals@1.0.0",
    "signals-lite": "npm:signals-lite@1.0.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "util": "github:jspm/nodelibs-util@0.1.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:@reactivex/rxjs@5.0.0-alpha.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:benchmark@2.1.0": {
      "lodash": "npm:lodash@4.12.0",
      "platform": "npm:platform@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fast-event-emitter@0.0.2": {
      "protoclass": "npm:protoclass@0.0.6"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:lodash@4.12.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:reactive-property@0.9.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    }
  }
});
