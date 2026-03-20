/**
 * Comprehensive Unit Tests for Calculator
 * Tests all basic arithmetic operations: addition, subtraction, multiplication, division
 * Includes edge cases and error handling
 */

const Calculator = require('../calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // ========== ADDITION TESTS ==========
  describe('Addition (add)', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add a positive and negative number', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should add two negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add zero to a number', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(calculator.add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('should add large numbers', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ========== SUBTRACTION TESTS ==========
  describe('Subtraction (subtract)', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract and get a negative result', () => {
      expect(calculator.subtract(5, 10)).toBe(-5);
    });

    test('should subtract a negative number (double negative)', () => {
      expect(calculator.subtract(10, -5)).toBe(15);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(calculator.subtract(10, 0)).toBe(10);
    });

    test('should subtract a number from zero', () => {
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(calculator.subtract(10.5, 4.3)).toBeCloseTo(6.2);
    });

    test('should subtract same numbers resulting in zero', () => {
      expect(calculator.subtract(7, 7)).toBe(0);
    });
  });

  // ========== MULTIPLICATION TESTS ==========
  describe('Multiplication (multiply)', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero resulting in zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply positive and negative number', () => {
      expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers (positive result)', () => {
      expect(calculator.multiply(-4, -5)).toBe(20);
    });

    test('should multiply by one', () => {
      expect(calculator.multiply(42, 1)).toBe(42);
    });

    test('should multiply decimal numbers', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(calculator.multiply(1000, 2000)).toBe(2000000);
    });

    test('should multiply fractions', () => {
      expect(calculator.multiply(0.5, 0.5)).toBeCloseTo(0.25);
    });
  });

  // ========== DIVISION TESTS ==========
  describe('Division (divide)', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide with decimal result', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333333, 5);
    });

    test('should divide positive by negative', () => {
      expect(calculator.divide(10, -2)).toBe(-5);
    });

    test('should divide negative by positive', () => {
      expect(calculator.divide(-20, 4)).toBe(-5);
    });

    test('should divide two negative numbers (positive result)', () => {
      expect(calculator.divide(-20, -5)).toBe(4);
    });

    test('should divide by one', () => {
      expect(calculator.divide(42, 1)).toBe(42);
    });

    test('should divide zero by a number', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => calculator.divide(-5, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => calculator.divide(0, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide decimal numbers', () => {
      expect(calculator.divide(10.5, 2.1)).toBeCloseTo(5);
    });

    test('should handle very small divisors', () => {
      expect(calculator.divide(1, 0.1)).toBe(10);
    });
  });

  // ========== IMAGE EXAMPLE TESTS ==========
  describe('Operations from calculator image', () => {
    test('should calculate 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should calculate 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should calculate 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should calculate 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });
  });

  // ========== CHAINED OPERATIONS TESTS ==========
  describe('Chained operations', () => {
    test('should handle ((5 + 3) * 2) = 16', () => {
      const step1 = calculator.add(5, 3);
      const step2 = calculator.multiply(step1, 2);
      expect(step2).toBe(16);
    });

    test('should handle ((20 - 5) / 3) ≈ 5', () => {
      const step1 = calculator.subtract(20, 5);
      const step2 = calculator.divide(step1, 3);
      expect(step2).toBeCloseTo(5);
    });

    test('should handle (10 + 5 - 3) * 2 = 24', () => {
      const step1 = calculator.add(10, 5);
      const step2 = calculator.subtract(step1, 3);
      const step3 = calculator.multiply(step2, 2);
      expect(step3).toBe(24);
    });
  });
});
