var test = require('blue-tape');
var platform = require('platform');

test('Platform', function (t) {
  t.ok(true);
  console.log(platform.description);
  console.log('NODE_ENV = ' + process.env.NODE_ENV);
  console.log('BENCH = ' + process.env.BENCH);

  t.end();
});
