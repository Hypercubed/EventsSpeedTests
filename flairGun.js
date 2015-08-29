'use strict';

/**
 * Representation of a single EventEmitter function.
 *
 * @param {Function} fn Event handler to be called.
 * @param {Mixed} context Context for function execution.
 * @param {Boolean} once Only emit once
 * @api private
 */
function EE(fn, context) {
  this.fn = fn;
  this.context = context;
}

/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() { /* Nothing to set */ }

/**
 * Holds the assigned EventEmitters by name.
 *
 * @type {Object}
 * @private
 */
//EventEmitter.prototype._events = undefined;
EventEmitter.prototype._listeners = undefined;

/**
 * Emit an event to all registered event listeners.
 *
 * @param {String} event The name of the event.
 * @returns {Boolean} Indication if we've emitted an event.
 * @api public
 */
EventEmitter.prototype.emit = function emit(a1, a2, a3, a4, a5) {

  if (!this._listeners) return false;

  var listeners = this._listeners
    , len = arguments.length
    , args
    , i;

  if ('function' === typeof listeners.fn) {
    //if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 0: return listeners.fn.call(listeners.context), true;
      case 1: return listeners.fn.call(listeners.context, a1), true;
      case 2: return listeners.fn.call(listeners.context, a1, a2), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 0, args = new Array(len); i < len; i++) {
      args[i] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      //if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 0: listeners[i].fn.call(listeners[i].context); break;
        case 1: listeners[i].fn.call(listeners[i].context, a1); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        default:
          if (!args) for (j = 0, args = new Array(len); j < len; j++) {
            args[j] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Functon} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @api public
 */
EventEmitter.prototype.add = function add(fn, context) {

  var listener = new EE(fn, context || this);

  if (!this._listeners) this._listeners = listener;
  else {
    if (!this._listeners.fn) this._listeners.push(listener);
    else this._listeners = [
      this._listeners, listener
    ];
  }

  return this;
};

//
// Expose the module.
//
//if ('undefined' !== typeof module) {
  module.exports = EventEmitter;
//}
