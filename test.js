/* istanbul ignore next */
describe('EventEmitter', function tests() {
  'use strict';

  var EventEmitter = require('./flairGun')
    , assume = require('assume');

  it('inherits when used with require(util).inherits', function () {
    function Beast() {
      /* rawr, i'm a beast */
    }

    require('util').inherits(Beast, EventEmitter);

    var moop = new Beast()
      , meap = new Beast();

    assume(moop).is.instanceOf(Beast);
    assume(moop).is.instanceOf(EventEmitter);

    moop.listeners();
    meap.listeners();

    moop.add(function () {
      throw new Error('I should not emit');
    });

    meap.emit('rawr');
    meap.removeAllListeners();
  });

  /* if ('undefined' !== typeof Symbol) it('works with ES6 symbols', function (next) {
    var e = new EventEmitter()
      , event = Symbol('cows')
      , unknown = Symbol('moo');

    e.on(event, function (arg) {
      assume(e.listeners(unknown).length).equals(0);
      assume(arg).equals('bar');

      e.once(unknown, function (onced) {
        assume(e.listeners(unknown).length).equals(0);
        assume(onced).equals('foo');
        next();
      });

      assume(e.listeners(event).length).equals(1);
      assume(e.listeners(unknown).length).equals(1);

      e.removeListener(event);
      assume(e.listeners(event).length).equals(0);
      assume(e.emit(unknown, 'foo')).equals(true);
    });

    assume(e.emit(unknown, 'bar')).equals(false);
    assume(e.emit(event, 'bar')).equals(true);
  }); */

  describe('EventEmitter#emit', function () {
    it('should return false when there are not events to emit', function () {
      var e = new EventEmitter();

      assume(e.emit('foo')).equals(false);
      assume(e.emit('bar')).equals(false);
    });

    it('emits with context', function (done) {
      var context = { bar: 'baz' }
        , e = new EventEmitter();

      e.add(function (bar) {
        assume(bar).equals('bar');
        assume(this).equals(context);

        done();
      }, context);

      e.emit('bar');
    });

    it('emits with context, multiple arguments (force apply)', function (done) {
      var context = { bar: 'baz' }
        , e = new EventEmitter();

      e.add(function (bar) {
        assume(bar).equals('bar');
        assume(this).equals(context);

        done();
      }, context);

      e.emit('bar', 1,2,3,4,5,6,7,8,9,0);
    });

    it('can emit the function with multiple arguments', function () {
      
      for(var i = 0; i < 100; i++) {
        var e = new EventEmitter();
        (function (j) {
          for (var i = 0, args = []; i < j; i++) {
            args.push(j);
          }

          e.add(function () {
            assume(arguments.length).equals(args.length);
          });

          e.emit.apply(e, args);
        })(i);
      }
    });

    it('can emit the function with multiple arguments, multiple listeners', function () {
      

      for(var i = 0; i < 100; i++) {
        var e = new EventEmitter();
        (function (j) {
          for (var i = 0, args = []; i < j; i++) {
            args.push(j);
          }

          e.add(function () {
            assume(arguments.length).equals(args.length);
          });

          e.add(function () {
            assume(arguments.length).equals(args.length);
          });

          e.add(function () {
            assume(arguments.length).equals(args.length);
          });

          e.add(function () {
            assume(arguments.length).equals(args.length);
          });

          e.emit.apply(e, args);
        })(i);
      }
    });

    it('emits with context, multiple listeners (force loop)', function () {
      var e = new EventEmitter();

      e.add(function (bar) {
        assume(this).eqls({ foo: 'bar' });
        assume(bar).equals('bar');
      }, { foo: 'bar' });

      e.add(function (bar) {
        assume(this).eqls({ bar: 'baz' });
        assume(bar).equals('bar');
      }, { bar: 'baz' });

      e.emit('bar');
    });

    it('emits with different contexts', function () {
      var e = new EventEmitter()
        , pattern = '';

      function writer() {
        pattern += this;
      }

      e.add(writer, 'foo');
      e.add(writer, 'baz');
      e.add(writer, 'bar');
      e.add(writer, 'banana');

      e.emit();
      assume(pattern).equals('foobazbarbanana');
    });

    it('should return true when there are events to emit', function (done) {
      var e = new EventEmitter();

      e.add(function () {
        process.nextTick(done);
      });

      assume(e.emit()).equals(true);
    });

    xit('should return false when there are no events to emit', function (done) {
      var e = new EventEmitter();

      assume(e.emit()).equals(false);
    });

    it('receives the emitted events', function (done) {
      var e = new EventEmitter();

      e.add(function (a, b, c, d, undef) {
        assume(a).equals('foo');
        assume(b).equals(e);
        assume(c).is.instanceOf(Date);
        assume(undef).equals(undefined);
        assume(arguments.length).equals(3);

        done();
      });

      e.emit('foo', e, new Date());
    });

    it('emits to all event listeners', function () {
      var e = new EventEmitter()
        , pattern = [];

      e.add(function () {
        pattern.push('foo1');
      });

      e.add(function () {
        pattern.push('foo2');
      });

      e.emit();

      assume(pattern.join(';')).equals('foo1;foo2');
    });

  });

  describe('EventEmitter#listeners', function () {
    it('returns an empty array if no listeners are specified', function () {
      var e = new EventEmitter();

      assume(e.listeners()).is.a('array');
      assume(e.listeners().length).equals(0);
    });

    it('returns an array of function', function () {
       var e = new EventEmitter();

       function foo() {}

       e.add(foo);
       assume(e.listeners()).is.a('array');
       assume(e.listeners().length).equals(1);
       assume(e.listeners()).deep.equals([foo]);
    });

    it('is not vulnerable to modifications', function () {
      var e = new EventEmitter();

      function foo() {}

      e.add(foo);

      assume(e.listeners()).deep.equals([foo]);

      e.listeners().length = 0;
      assume(e.listeners()).deep.equals([foo]);
    });

    it('can return a boolean as indication if listeners exist', function () {
      var e = new EventEmitter();

      function foo() {}

      e.add(foo);
      e.add(foo);
      e.add(foo);
      e.add(foo);
      e.add(foo);
      e.add(foo);

      assume(e.listeners(true)).equals(true);

      e.removeAllListeners();

      assume(e.listeners(true)).equals(false);
    });
  });

  xdescribe('EventEmitter#removeListener', function () {
    it('should only remove the event with the specified function', function () {
      var e = new EventEmitter();

      function bar() {}
      e.on('foo', function () {});
      e.on('bar', function () {});
      e.on('bar', bar);

      assume(e.removeListener('foo', bar)).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.listeners('bar').length).equals(2);

      assume(e.removeListener('foo')).equals(e);
      assume(e.listeners('foo').length).equals(0);
      assume(e.listeners('bar').length).equals(2);

      assume(e.removeListener('bar', bar)).equals(e);
      assume(e.listeners('bar').length).equals(1);
      assume(e.removeListener('bar')).equals(e);
      assume(e.listeners('bar').length).equals(0);
    });

    it('should only remove once events when using the once flag', function () {
      var e = new EventEmitter();

      function foo() {}
      e.on('foo', foo);

      assume(e.removeListener('foo', function () {}, undefined, true)).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.removeListener('foo', foo, undefined, true)).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.removeListener('foo', foo)).equals(e);
      assume(e.listeners('foo').length).equals(0);

      e.on('foo', foo);
      e.once('foo', foo);

      assume(e.removeListener('foo', function () {}, undefined, true)).equals(e);
      assume(e.listeners('foo').length).equals(2);
      assume(e.removeListener('foo', foo, undefined, true)).equals(e);
      assume(e.listeners('foo').length).equals(1);

      e.once('foo', foo);

      assume(e.removeListener('foo', foo)).equals(e);
      assume(e.listeners('foo').length).equals(0);
    });

    it('should only remove listeners matching the correct context', function () {
      var e = new EventEmitter()
        , context = { foo: 'bar' };

      function foo() {}
      function bar() {}
      e.on('foo', foo, context);

      assume(e.listeners('foo').length).equals(1);
      assume(e.removeListener('foo', function () {}, context)).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.removeListener('foo', foo, { baz: 'quux' })).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.removeListener('foo', foo, context)).equals(e);
      assume(e.listeners('foo').length).equals(0);

      e.on('foo', foo, context);
      e.on('foo', bar);

      assume(e.listeners('foo').length).equals(2);
      assume(e.removeListener('foo', foo, { baz: 'quux' })).equals(e);
      assume(e.listeners('foo').length).equals(2);
      assume(e.removeListener('foo', foo, context)).equals(e);
      assume(e.listeners('foo').length).equals(1);
      assume(e.listeners('foo')[0]).equals(bar);

      e.on('foo', foo, context);

      assume(e.listeners('foo').length).equals(2);
      assume(e.removeAllListeners('foo')).equals(e);
      assume(e.listeners('foo').length).equals(0);
    });
  });

  describe('EventEmitter#removeAllListeners', function () {
    it('removes all events', function () {
      var e = new EventEmitter();

      e.add(function () { throw new Error('oops'); });
      e.add(function () { throw new Error('oops'); });
      e.add(function () { throw new Error('oops'); });
      e.add(function () { throw new Error('oops'); });

      assume(e.removeAllListeners()).equals(e);
      assume(e.listeners().length).equals(0);

      assume(e.emit()).equals(false);
    });

  });

});