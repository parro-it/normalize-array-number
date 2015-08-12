let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const normalizeArrayNumber = require(moduleRoot);

describe('normalizeArrayNumber', () => {
  it('works', async () => {
    const result = await normalizeArrayNumber();
    result.should.be.equal(42);
  });
});

