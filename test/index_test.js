let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const normalize = require(moduleRoot);

describe('normalize', () => {
  it('normalize values with min,max defaulted to 0,100', () => {
    const result = normalize([{n: 2}, {n: 4}, {n: 0}], 'n');

    result.should.be.deep.equal([{n: 50}, {n: 100}, {n: 0}]);
  });

  it('normalize values with custom min and max', () => {
    const result = normalize([{n: 2}, {n: 4}, {n: 0}], {
      prop: 'n',
      min: 4,
      max: 6
    });

    result.should.be.deep.equal([{n: 5}, {n: 6}, {n: 4}]);
  });


  it('work correctly without 0 in values', () => {
    const result = normalize([{n: 2}, {n: 5}, {n: 8}], 'n');

    result.should.be.deep.equal([{n: 0}, {n: 50}, {n: 100}]);
  });

  it('no round by default', () => {
    const result = normalize([{n: 2.412}, {n: 5}, {n: 8.42}], 'n');

    result.should.be.deep.equal([{n: 0}, {n: 43.07589880159787}, {n: 100}]);
  });

  it('round if specified', () => {
    const result = normalize([{n: 2.412}, {n: 5}, {n: 8.42}], {prop: 'n', round: 3});

    result.should.be.deep.equal([{n: 0}, {n: 43.076}, {n: 100}]);
  });
});

