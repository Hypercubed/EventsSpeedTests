'use strict';
/* Like MiniSignals, but only emits one value */

var MiniSignal = require('mini-signals');

class MicroSignal extends MiniSignal {
  dispatch(value) {
    var node = this._head;

    if (!node) {
      return false;
    }

    do {
      if (node._once) {
        this.detach(node);
      }
      node._fn(value);
      node = node._next;
    } while (node);

    return true;
  }
}

module.exports = MicroSignal;
