import { describe, expect, it } from 'bun:test';

import { randomDate, randomInt } from './random';

describe('randomInt', () => {
  it('should return an integer value within the range', () => {
    const min = 5;
    const max = 8;
    const result = randomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(8);
    expect(Number.isInteger(result)).toBeTrue();
  });
  it('should throw if the min value is larger than the max', () => {
    expect(() => randomInt(10, 5)).toThrow();
  });
  it('should throw if the min value equals the max', () => {
    expect(() => randomInt(10, 10)).toThrow();
  });
  it('should handle negative values', () => {
    const min = -5;
    const max = -3;
    const result = randomInt(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(8);
    expect(Number.isInteger(result)).toBeTrue();
    expect(() => randomInt(max, min)).toThrow();
  });
});

describe('randomDate', () => {
  it('should return a date within the range', () => {
    const start = new Date(2000, 0, 1);
    const end = new Date();
    const random = randomDate(start, end);
    expect(random.getTime() >= start.getTime()).toBeTrue();
    expect(random.getTime() <= end.getTime()).toBeTrue();
  });
  it('should throw if the end is before the start', () => {
    expect(() => randomDate(new Date(), new Date(2000, 0, 1))).toThrow();
  });
});
