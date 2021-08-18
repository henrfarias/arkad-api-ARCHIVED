import sum from '../src/sum';

describe('Test', () => {
  test('1 plus 2 must be 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
