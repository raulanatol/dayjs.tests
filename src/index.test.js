const { getValue } = require('./index');

const referenceTime = new Date(Date.UTC(2021, 9, 2, 12, 25, 18, 0));

describe('getValue', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(referenceTime);
  });

  it('should return a valid date', () => {
    const expected = new Date(Date.UTC(2021, 9, 2, 0, 0, 0, 0));
    expect(getValue()).toStrictEqual(expected);
  });
});
