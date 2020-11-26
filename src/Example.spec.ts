import { example } from './Example';

describe('returns the correct value', () => {
  it('passed param value', () => {
    const expected = 'parameter';

    const result = example(expected);

    expect(result).toEqual(expected);
  });

  it('default value', () => {
    const expected = 'value';

    const result = example();

    expect(result).toEqual(expected);
  });
});
