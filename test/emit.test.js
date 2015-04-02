var smell = require(process.env.SMELL_COV ? '../smell-cov.js' : '../')();

exports.emit = function (t) {
  t.expect(3);
  var completed = 0;
  var complete = function () {
    completed += 1;
    if (completed === 3) {
      t.done();
    }
  };

  smell.on('info', function (msg) {
    t.equal(msg, 'hi there 5', 'got info emit');
    complete();
  });
  smell.info('hi', 'there', 5);

  smell.on('warn', function (msg) {
    t.equal(msg, 'woot { o: 5 }', 'got warn emit');
    complete();
  });
  smell.warn('woot', {o: 5});

  smell.error('err'); // this should NOT throw

  smell.on('err', function (msg) {
    t.equal(msg, "err2", "got error emit");
    complete();
  });
  smell.error('err2'); // this should now be caught
};

exports.console = function (t) {
  // just check that this logs..
  smell.on('info', console.log);
  smell.on('warn', console.warn);
  smell.on('err', console.error);
  smell.info('hi', 'there', 5);
  smell.warn('woot', {o: 5});
  smell.error('err');
  t.done();
};
