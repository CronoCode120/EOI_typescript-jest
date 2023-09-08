import { sum, div, multiply, sub } from '../src/math-operators'

const testNaNThrows = (func: (a: number, b: number) => void) => () => {
  expect(() => func(NaN, 2)).toThrow('A parameter is not a number (NaN)');
}

describe('sum operation', () => {
  it('throws when a parameter is NaN', testNaNThrows(sum))
  it('sums two positive numbers', () => {
    expect(sum(1, 2)).toStrictEqual(3);
    expect(sum(23, 2)).toStrictEqual(25);
  })
  it('sums two floats', () => {
    expect(sum(1.2, 0.7)).toStrictEqual(1.9);
    expect(sum(2, 0.5)).toStrictEqual(2.5);
    expect(sum(0.1, 0.2)).toStrictEqual(0.3);
  })
  it('sums negative numbers properly', () => {
    expect(sum(4, -2)).toStrictEqual(2);
    expect(sum(-3, -5)).toStrictEqual(-8);
  })
});

describe('sub', () => {
  
})
