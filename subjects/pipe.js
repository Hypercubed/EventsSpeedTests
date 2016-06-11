
module.exports = miniPipe;

function noop() {

}

function miniPipe() {
  var _observer = noop;

  function pipe(observer) {
    _observer = observer;

    return function removeObserver() {
      _observer = noop;
    };
  }

  pipe.push = function push(value) {
    _observer(value);
  };

  return pipe;
}
