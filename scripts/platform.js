var test = require('blue-tape');
var platform = require('platform');

test(function (t) {
  console.log('# ' + platform.description);
  console.log('');

  t.ok(true);
  t.end();
});
