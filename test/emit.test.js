var smell = require('..')();
var test = require('bandage');

test('emit', function *(t) {
  t.plan(3);

  smell.on('info', function (msg) {
    t.equal(msg, 'hi there 5', 'got info emit');
  });
  smell.info('hi', 'there', 5);

  smell.on('warn', function (msg) {
    t.equal(msg, 'woot { o: 5 }', 'got warn emit');
  });
  smell.warn('woot', {o: 5});

  smell.error('err'); // this should NOT throw

  smell.on('err', function (msg) {
    t.equal(msg, 'err2', 'got error emit');
  });
  smell.error('err2'); // this should now be caught
});

test('console', function *(t) {
  // just check that this logs..
  smell.on('info', console.log);
  smell.on('warn', console.warn);
  smell.on('err', console.error);
  smell.info('hi', 'there', 5);
  smell.warn('woot', {o: 5});
  smell.error('err');
  t.pass('wrote to console')
});
