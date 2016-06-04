var test = require('blue-tape');
var platform = require('platform');

test('Platform', function (t) {
  t.ok(true);
  console.log(platform.description);

  t.end();
});
