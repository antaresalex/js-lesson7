import { printSumAndMultiplication, printLength, printInput, printMaxNumber } from './welcome.js';

describe('welcome to js', () => {
  describe('printMaxNumber', () => {
    it('Max number 100, 99', () => {
      expect(printMaxNumber(99, 100)).toBe(100);
    });

    it('Max number 0, -1', () => {
      expect(printMaxNumber(0, -1)).toBe(0);
    });

    it('Max number 10, 10', () => {
      expect(printMaxNumber(10, 10)).toBe(10);
    });
  });
});
