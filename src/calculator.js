#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports basic and advanced arithmetic operations:
 * Basic: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
 * Advanced: Modulo (%), Power (^), Square Root (√)
 */

class Calculator {
  /**
   * Addition operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtraction operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplication operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Division operation
   * @param {number} a - First number (dividend)
   * @param {number} b - Second number (divisor)
   * @returns {number} Quotient of a divided by b
   * @throws {Error} If divisor is zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  /**
   * Modulo operation
   * @param {number} a - Dividend
   * @param {number} b - Divisor
   * @returns {number} Remainder of a divided by b
   * @throws {Error} If divisor is zero
   */
  modulo(a, b) {
    if (b === 0) {
      throw new Error('Cannot perform modulo with zero divisor');
    }
    return a % b;
  }

  /**
   * Power/Exponentiation operation
   * @param {number} base - Base number
   * @param {number} exponent - Exponent
   * @returns {number} Base raised to the exponent power
   */
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  /**
   * Square root operation
   * @param {number} n - Number to find square root of
   * @returns {number} Square root of n
   * @throws {Error} If n is negative
   */
  squareRoot(n) {
    if (n < 0) {
      throw new Error('Cannot calculate square root of a negative number');
    }
    return Math.sqrt(n);
  }

  /**
   * Parse and execute calculator operation from command line arguments
   * @param {string[]} args - Command line arguments
   */
  executeFromCLI(args) {
    if (args.length < 4) {
      this.printUsage();
      process.exit(1);
    }

    const firstNumber = parseFloat(args[2]);
    const operator = args[3];
    const secondNumber = args[4] ? parseFloat(args[4]) : null;

    if (isNaN(firstNumber)) {
      console.error('Error: Invalid numbers provided');
      this.printUsage();
      process.exit(1);
    }

    // For operations that need two operands, validate second number
    if (operator !== 'sqrt' && isNaN(secondNumber)) {
      console.error('Error: Invalid numbers provided');
      this.printUsage();
      process.exit(1);
    }

    let result;
    try {
      switch (operator) {
        case '+':
          result = this.add(firstNumber, secondNumber);
          break;
        case '-':
          result = this.subtract(firstNumber, secondNumber);
          break;
        case '*':
          result = this.multiply(firstNumber, secondNumber);
          break;
        case '/':
          result = this.divide(firstNumber, secondNumber);
          break;
        case '%':
          result = this.modulo(firstNumber, secondNumber);
          break;
        case '^':
        case '**':
          result = this.power(firstNumber, secondNumber);
          break;
        case 'sqrt':
          result = this.squareRoot(firstNumber);
          console.log(`sqrt(${firstNumber}) = ${result}`);
          return;
        default:
          console.error(`Error: Unknown operator '${operator}'`);
          this.printUsage();
          process.exit(1);
      }

      console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }

  /**
   * Print usage instructions
   */
  printUsage() {
    console.log('Usage: node calculator.js <number1> <operator> <number2>');
    console.log('');
    console.log('Basic Operators:');
    console.log('  +  Addition');
    console.log('  -  Subtraction');
    console.log('  *  Multiplication');
    console.log('  /  Division');
    console.log('');
    console.log('Advanced Operators:');
    console.log('  %   Modulo (remainder)');
    console.log('  ^   Power/Exponentiation');
    console.log('  **  Power/Exponentiation (alternative)');
    console.log('');
    console.log('Single Operand:');
    console.log('  sqrt  Square Root (use: node calculator.js <number> sqrt)');
    console.log('');
    console.log('Examples:');
    console.log('  node calculator.js 10 + 5');
    console.log('  node calculator.js 20 - 8');
    console.log('  node calculator.js 6 * 7');
    console.log('  node calculator.js 100 / 4');
    console.log('  node calculator.js 17 % 5');
    console.log('  node calculator.js 2 ^ 3');
    console.log('  node calculator.js 16 sqrt');
  }
}

// Execute if this file is run directly
if (require.main === module) {
  const calculator = new Calculator();
  calculator.executeFromCLI(process.argv);
}

module.exports = Calculator;
