var stink = require(process.env.STINK_COV ? '../stink-cov.js' : '../')();

exports.emit = function (t) {
  t.expect(3);
  var completed = 0;
  var complete = function () {
    completed += 1;
    if (completed === 3) {
      t.done();
    }
  };

  stink.on('info', function (msg) {
    t.equal(msg, 'hi there 5', 'got info emit');
    complete();
  });
  stink.info('hi', 'there', 5);

  stink.on('warn', function (msg) {
    t.equal(msg, 'woot { o: 5 }', 'got warn emit');
    complete();
  });
  stink.warn('woot', {o: 5});

  stink.on('error', function (msg) {
    t.equal(msg, "err", "got error emit");
    complete();
  });
  stink.error('err');
};

exports.console = function (t) {
  // just check that this logs..
  stink.on('info', console.log);
  stink.on('warn', console.warn);
  stink.on('error', console.error);
  stink.info('hi', 'there', 5);
  stink.warn('woot', {o: 5});
  stink.error('err');
  t.done();
};
