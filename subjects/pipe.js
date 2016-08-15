
module.exports = function miniPipe() {
  var _observer = function noop() {};

  function pipe(observer) {
    _observer = observer;

    return function removeObserver() {
      _observer = function noop() {};
    };
  }

  pipe.push = function push(value) {
    _observer(value);
  };

  return pipe;
};
